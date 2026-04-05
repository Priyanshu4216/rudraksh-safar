import { resolveKey } from './utils/encryption.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    try {
        const authHeader = req.headers.authorization;
        const expectedSecret = process.env.INDEXNOW_APP_SECRET;

        if (expectedSecret && authHeader !== `Bearer ${expectedSecret}`) {
            return res.status(401).json({ error: 'Unauthorized payload submission.' });
        }

        const { urls, host } = req.body;

        if (!urls || !Array.isArray(urls) || urls.length === 0) {
            return res.status(400).json({ error: 'Missing or invalid "urls" array in request body.' });
        }

        if (urls.length > 100) {
            return res.status(400).json({ error: 'Batch size exceeds 100 URLs limit.' });
        }

        const rawAppKey = process.env.INDEXNOW_API_KEY;
        if (!rawAppKey) {
            return res.status(500).json({ error: 'INDEXNOW_API_KEY not configured on server.' });
        }

        const actualKey = resolveKey(rawAppKey);

        let submissionHost = host;
        if (!submissionHost) {
            try {
                const urlObj = new URL(urls[0]);
                submissionHost = urlObj.hostname;
            } catch (e) {
                return res.status(400).json({ error: 'Invalid URL format provided.' });
            }
        }

        const payload = {
            host: submissionHost,
            key: actualKey,
            keyLocation: `https://${submissionHost}/${actualKey}.txt`,
            urlList: urls
        };

        const makeRequest = async (retries = 3, delay = 1000) => {
            try {
                const response = await fetch('https://api.indexnow.org/indexnow', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                let data = null;
                try {
                    data = await response.json();
                } catch {
                    data = await response.text();
                }

                if (!response.ok && response.status === 429 && retries > 0) {
                    console.warn(`Rate limited (429). Retrying in ${delay}ms...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return makeRequest(retries - 1, delay * 2);
                }

                return { status: response.status, data };
            } catch (error) {
                throw error;
            }
        };

        const result = await makeRequest();

        return res.status(result.status).json({
            message: 'IndexNow submission processed',
            host: submissionHost,
            submittedCount: urls.length,
            result: result.data
        });

    } catch (error) {
        console.error('IndexNow Submission Error:', error);
        return res.status(500).json({
            error: 'Failed to submit URLs to IndexNow',
            details: error.message || String(error)
        });
    }
}
