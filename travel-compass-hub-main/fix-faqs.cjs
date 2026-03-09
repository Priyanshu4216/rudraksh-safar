const fs = require('fs');

const filesToFix = [
    'src/pages/chardham/BhilaiToKedarnath.tsx',
    'src/pages/chardham/BadrinathTemple.tsx',
    'src/pages/chardham/CharDhamRegistration.tsx'
];

filesToFix.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Add import if missing
    if (!content.includes('FAQSection')) {
        const importMatch = content.match(/import .* from 'lucide-react';/);
        if (importMatch) {
            content = content.replace(
                importMatch[0],
                importMatch[0] + "\nimport FAQSection from '@/components/seo/FAQSection';"
            );
        }
    }

    // Attempt to regex replace the entire section containing faqs.map
    // We look for a <section> that contains <h2>.*FAQ.*</h2> and ends at </section>
    // This is tricky with regex, so we'll do string matching.
    const mapStartIdx = content.indexOf('{faqs.map(');
    if (mapStartIdx !== -1) {
        // Find the nearest <section> opening before this
        const sectionStartIdx = content.lastIndexOf('<section', mapStartIdx);
        // Find the nearest </section> closing after this
        const sectionEndIdx = content.indexOf('</section>', mapStartIdx);

        if (sectionStartIdx !== -1 && sectionEndIdx !== -1) {
            const fullSectionEndIdx = sectionEndIdx + '</section>'.length;

            const newSection = `
                    <section className="mb-12">
                        <FAQSection title="Frequently Asked Questions" faqs={faqs} />
                    </section>`;

            const before = content.substring(0, sectionStartIdx);
            const after = content.substring(fullSectionEndIdx);
            content = before + newSection + after;

            fs.writeFileSync(file, content, 'utf8');
            console.log(`Fixed FAQs in ${file}`);
        }
    }
});
