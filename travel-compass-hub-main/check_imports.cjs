const fs = require('fs');
const path = require('path');
const appCode = fs.readFileSync('src/App.tsx', 'utf8');
const regex = /import\(['"](\.\/[^'"]+)['"]\)/g;
let match;
const missing = [];
while ((match = regex.exec(appCode)) !== null) {
  const importPath = match[1];
  const fullPath = path.join('src', importPath);
  if (!fs.existsSync(fullPath + '.tsx') && !fs.existsSync(fullPath + '.ts') && !fs.existsSync(fullPath + '/index.tsx')) {
    missing.push(importPath);
  }
}
console.log('Missing imports:', missing);
