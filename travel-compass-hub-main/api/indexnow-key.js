import { resolveKey } from './utils/encryption.js';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).send('Method Not Allowed');
    }

    try {
        const urlMatch = req.url.match(/^\/([^\/]+)\.txt(?:\?.*)?$/);
        const requestedKey = urlMatch ? urlMatch[1] : null;

        if (!requestedKey) {
            return res.status(404).send('Not Found');
        }

        const rawAppKey = process.env.INDEXNOW_API_KEY;

        if (!rawAppKey) {
            console.error('INDEXNOW_API_KEY environment variable is missing.');
            return res.status(500).send('Server configuration error');
        }

        const actualKey = resolveKey(rawAppKey);

        if (requestedKey === actualKey) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            return res.status(200).send(actualKey);
        } else {
            return res.status(403).send('Forbidden: Invalid Key Request');
        }

    } catch (error) {
        console.error('Error serving IndexNow API Key:', error);
        return res.status(500).send('Internal Server Error');
    }
}
