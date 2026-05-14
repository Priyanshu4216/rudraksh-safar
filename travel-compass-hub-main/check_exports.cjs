const fs = require('fs');
const path = require('path');
const appCode = fs.readFileSync('src/App.tsx', 'utf8');
const regex = /lazy\(\(\) => import\(['"](\.\/[^'"]+)['"]\)\)/g;
let match;
const missingDefault = [];

while ((match = regex.exec(appCode)) !== null) {
  const importPath = match[1];
  let fullPath = path.join('src', importPath);
  
  if (fs.existsSync(fullPath + '.tsx')) {
    fullPath += '.tsx';
  } else if (fs.existsSync(fullPath + '.ts')) {
    fullPath += '.ts';
  } else if (fs.existsSync(path.join(fullPath, 'index.tsx'))) {
    fullPath = path.join(fullPath, 'index.tsx');
  } else {
    continue;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  if (!content.includes('export default')) {
    missingDefault.push(importPath);
  }
}
console.log('Missing default export:', missingDefault);
