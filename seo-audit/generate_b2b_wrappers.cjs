const fs = require('fs');
const path = require('path');

const sectors = [
  { id: 'chardham', comp: 'B2BChardham' },
  { id: 'kashmir', comp: 'B2BKashmir' },
  { id: 'ladakh', comp: 'B2BLadakh' },
  { id: 'manali', comp: 'B2BManali' },
  { id: 'nainital', comp: 'B2BNainital' },
  { id: 'mussoorie', comp: 'B2BMussoorie' },
  { id: 'puri', comp: 'B2BPuri' },
  { id: 'andaman', comp: 'B2BAndaman' },
  { id: 'dubai', comp: 'B2BDubai' },
  { id: 'vietnam', comp: 'B2BVietnam' }
];

const targetDir = 'travel-compass-hub-main/src/pages/b2b';

sectors.forEach(s => {
  const content = `import React from 'react';
import B2BDestinationMaster from './B2BDestinationMaster';

const ${s.comp} = () => {
    return <B2BDestinationMaster sector="${s.id}" />;
};

export default ${s.comp};
`;
  fs.writeFileSync(path.join(targetDir, `${s.comp}.tsx`), content, 'utf8');
  console.log(`Generated ${s.comp}.tsx`);
});
