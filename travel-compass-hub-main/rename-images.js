import fs from 'fs';
import path from 'path';

const imgDir = path.join(process.cwd(), 'public', 'images');
const entries = fs.readdirSync(imgDir, { withFileTypes: true });

for (const entry of entries) {
    if (entry.isFile() && entry.name.includes(' ')) {
        const oldPath = path.join(imgDir, entry.name);
        // Remove spaces
        const newName = entry.name.replace(/\\s+/g, '-').replace(/\\(|\\)/g, '');
        const newPath = path.join(imgDir, newName);
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: \${entry.name} -> \${newName}`);
    }
}
