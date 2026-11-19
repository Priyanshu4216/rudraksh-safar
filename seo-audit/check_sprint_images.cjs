const fs = require('fs');

const sprintFiles = [
  'travel-compass-hub-main/src/components/templates/DestinationMasterTemplate.tsx',
  'travel-compass-hub-main/src/components/DepartureLogisticsEngine.tsx',
  'travel-compass-hub-main/src/pages/packages/ManaliKasolStrangersTrip.tsx',
  'travel-compass-hub-main/src/pages/domestic/haridwar/HaridwarRishikeshMaster.tsx',
  'travel-compass-hub-main/src/pages/international/canton/CantonFairMaster.tsx',
  'travel-compass-hub-main/src/pages/themes/PilgrimagePackages.tsx',
  'travel-compass-hub-main/src/pages/themes/SeniorCitizenTourPackages.tsx',
  'travel-compass-hub-main/src/pages/services/TravelInsurance.tsx'
];

sprintFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const imgs = c.match(/<img\s+[^>]+>/g) || [];
    console.log(`${f}: ${imgs.length} images`);
    imgs.forEach(i => console.log('   ' + i.slice(0, 100)));
  }
});
