import fs from 'fs';
import path from 'path';

const imgDir = path.join(process.cwd(), 'public', 'images');
const names = fs.readdirSync(imgDir);

for (const name of names) {
    if (name.includes(' ')) {
        const oldPath = path.join(imgDir, name);
        // Replace ALL spaces with hyphens, and remove parentheses
        const newName = name.replace(/ /g, '-').replace(/\\(|\\)/g, '');
        const newPath = path.join(imgDir, newName);
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: \${name} -> \${newName}`);
    }
}
