import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Navigate to the local dev server
    console.log("Navigating to http://localhost:4173/travel-agent-bhilai...");
    await page.goto('http://localhost:4173/travel-agent-bhilai', { waitUntil: 'networkidle0' });

    // Take a screenshot to see exactly what renders
    await page.screenshot({ path: 'test-render.png', fullPage: true });
    console.log("Screenshot saved as test-render.png");

    // Check for console errors
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log('PAGE ERROR:', msg.text());
        }
    });

    await browser.close();
})();
