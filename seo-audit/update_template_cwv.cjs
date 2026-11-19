const fs = require('fs');

const file = 'travel-compass-hub-main/src/components/templates/DestinationMasterTemplate.tsx';
let c = fs.readFileSync(file, 'utf8');

// 1. Add decoding="async" to hero image
c = c.replace(
  'className="w-full h-full object-cover"\n                        />',
  'className="w-full h-full object-cover"\n                            decoding="async"\n                        />'
);

// 2. Add loading="lazy" decoding="async" to pkg.image
c = c.replace(
  '<img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />',
  '<img src={pkg.image} alt={pkg.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />'
);

// 3. Add loading="lazy" decoding="async" to place.image
c = c.replace(
  '<img src={place.image} alt={place.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />',
  '<img src={place.image} alt={place.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />'
);

// 4. Update /domestic-tours to /domestic-packages and /international-tours to /international-packages
c = c.replace('<Link to="/domestic-tours"', '<Link to="/domestic-packages"');
c = c.replace('<Link to="/international-tours"', '<Link to="/international-packages"');

fs.writeFileSync(file, c, 'utf8');
console.log('Successfully updated DestinationMasterTemplate.tsx with CWV image attributes & clean internal links');
