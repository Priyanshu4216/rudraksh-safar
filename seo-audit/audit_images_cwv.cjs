const fs = require('fs');
const path = require('path');

function glob(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(glob(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(full);
    }
  });
  return results;
}

const files = glob('travel-compass-hub-main/src');
let totalImgTags = 0;
let lazyCount = 0;
let decodingCount = 0;
let widthOrHeightCount = 0;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const imgMatches = content.match(/<img\s+[^>]+>/g) || [];
  totalImgTags += imgMatches.length;
  imgMatches.forEach(tag => {
    if (tag.includes('loading="lazy"') || tag.includes("loading='lazy'") || tag.includes('loading={"lazy"}')) {
      lazyCount++;
    }
    if (tag.includes('decoding="async"')) {
      decodingCount++;
    }
  });
});

console.log(`Total <img> tags audited across codebase: ${totalImgTags}`);
console.log(`Images with explicit loading="lazy": ${lazyCount}`);
console.log(`Images with decoding="async": ${decodingCount}`);
