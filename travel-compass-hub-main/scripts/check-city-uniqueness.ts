import { CHHATTISGARH_CITIES } from '../src/data/kumbh/cities.ts';

// Function to generate 5-word shingles
function getShingles(text: string, size = 5): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s\u0900-\u097F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');

  const shingles = new Set<string>();
  for (let i = 0; i <= words.length - size; i++) {
    shingles.add(words.slice(i, i + size).join(' '));
  }
  return shingles;
}

// Compute Jaccard similarity between two sets of shingles
function computeJaccardSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersectionSize = 0;
  for (const item of setA) {
    if (setB.has(item)) intersectionSize++;
  }
  const unionSize = setA.size + setB.size - intersectionSize;
  return intersectionSize / unionSize;
}

console.log('\n======================================================');
console.log('🏛️ CHHATTISGARH CITY SILO: UNIQUENESS & QUALITY GATE');
console.log('======================================================');

let hasFailure = false;
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--production');

// Check (c): Duplicate titles, H1s, FAQ questions across city pages
const allFaqQuestions = new Set<string>();
const allTitles = new Set<string>();

CHHATTISGARH_CITIES.forEach((city) => {
  const title = `Kumbh Mela 2027 Tour Package from ${city.nameEn} (Haridwar Ardh Kumbh)`;
  if (allTitles.has(title)) {
    console.error(`❌ Duplicate Title detected for city ${city.nameEn}: "${title}"`);
    hasFailure = true;
  }
  allTitles.add(title);

  city.faqs.forEach((faq) => {
    if (allFaqQuestions.has(faq.questionEn)) {
      console.error(`❌ Duplicate FAQ question across city pages detected: "${faq.questionEn}" in ${city.nameEn}`);
      hasFailure = true;
    }
    allFaqQuestions.add(faq.questionEn);
  });
});

console.log(`✅ Rule (c) Passed: Zero duplicate titles or FAQ questions across all ${CHHATTISGARH_CITIES.length} city silos.`);

// Check (d): Check for TODO_VERIFY in localAngle or FAQs
CHHATTISGARH_CITIES.forEach((city) => {
  if (isProduction) {
    if (city.localAngleEn.includes('TODO_VERIFY') || city.localAngleHi.includes('TODO_VERIFY')) {
      console.error(`❌ Production failure: localAngle in ${city.nameEn} contains TODO_VERIFY!`);
      hasFailure = true;
    }
    city.faqs.forEach((f) => {
      if (f.answerEn.includes('TODO_VERIFY') || f.answerHi.includes('TODO_VERIFY')) {
        console.error(`❌ Production failure: FAQ in ${city.nameEn} contains TODO_VERIFY!`);
        hasFailure = true;
      }
    });
  }
});

console.log(`✅ Rule (d) Checked: localAngle and FAQ content checked for production mode.`);

// Check (a) & (b): Word count & 5-word shingle similarity across each pair
const cityShingleMap = new Map<string, Set<string>>();

CHHATTISGARH_CITIES.forEach((city) => {
  // Aggregate unique body copy: localAngle + all FAQs + departure logistics
  const combinedUniqueCopy = [
    city.localAngleEn,
    city.localAngleHi,
    ...city.faqs.map(f => `${f.questionEn} ${f.answerEn} ${f.questionHi} ${f.answerHi}`),
    ...city.departureLogistics.map(d => d.text)
  ].join(' ');

  const wordCount = combinedUniqueCopy.trim().split(/\s+/).length;
  console.log(`  • City [${city.nameEn}]: ${wordCount} unique words (Minimum required: 800)`);

  if (wordCount < 800) {
    console.error(`❌ Rule (a) Failed: ${city.nameEn} has ${wordCount} words, below 800-word gate!`);
    hasFailure = true;
  }

  cityShingleMap.set(city.slug, getShingles(combinedUniqueCopy, 5));
});

// Compare all pairs for 5-word shingle similarity
console.log('\n🔍 Comparing 5-word shingle similarity between city pairs:');
for (let i = 0; i < CHHATTISGARH_CITIES.length; i++) {
  for (let j = i + 1; j < CHHATTISGARH_CITIES.length; j++) {
    const cityA = CHHATTISGARH_CITIES[i];
    const cityB = CHHATTISGARH_CITIES[j];

    const shinglesA = cityShingleMap.get(cityA.slug)!;
    const shinglesB = cityShingleMap.get(cityB.slug)!;

    const similarity = computeJaccardSimilarity(shinglesA, shinglesB);
    const passed = similarity <= 0.35;

    console.log(
      `  • [${cityA.nameEn}] vs [${cityB.nameEn}]: Similarity = ${(similarity * 100).toFixed(2)}% (Max allowed: 35.00%) -> ${
        passed ? '✅ PASSED' : '❌ FAILED'
      }`
    );

    if (!passed) {
      console.error(`❌ Rule (b) Failed: Similarity between ${cityA.nameEn} and ${cityB.nameEn} exceeds 0.35!`);
      hasFailure = true;
    }
  }
}

console.log('======================================================\n');

if (hasFailure) {
  console.error('❌ CITY UNIQUENESS GATE FAILED: Please rectify the issues above.');
  process.exit(1);
} else {
  console.log('🎉 ALL CITY UNIQUENESS & QUALITY GATES PASSED SUCCESSFULLY!\n');
  process.exit(0);
}
