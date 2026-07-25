import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const app = express();
app.use(express.static(distDir));
app.get(/(.*)/, (req, res) => res.sendFile(path.join(distDir, 'index.html')));

const server = app.listen(3001, async () => {
    console.log('Hydration test server listening on port 3001');
    let hasMismatch = false;

    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        
        page.on('console', msg => {
            const text = msg.text();
            if (text.includes('Hydration failed') || text.includes('does not match what was rendered on the server') || text.includes('Minified React error #418') || text.includes('Minified React error #423') || text.includes('Minified React error #425')) {
                console.error(`❌ Hydration Mismatch Error Detected:\n${text}`);
                hasMismatch = true;
            }
        });

        // Test a few core pages for hydration mismatches
        const testRoutes = [
            '/',
            '/about-rudraksh-safar',
            '/domestic-packages',
            '/international-packages',
            '/thailand-tour-packages'
        ];

        for (const route of testRoutes) {
            console.log(`Testing hydration for route: ${route}`);
            await page.goto(`http://localhost:3001${route}`, { waitUntil: 'networkidle0' });
            // Wait to ensure client-side JS executes fully
            await new Promise(resolve => setTimeout(resolve, 1500));
        }

        await browser.close();
        server.close();

        if (hasMismatch) {
            console.error('❌ Hydration test FAILED. Mismatches detected.');
            process.exit(1);
        } else {
            console.log('✅ Hydration test PASSED. No mismatches detected.');
            process.exit(0);
        }
    } catch (e) {
        console.error('Error running hydration tests:', e);
        server.close();
        process.exit(1);
    }
});
