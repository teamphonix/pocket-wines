import { wines } from '../src/wines.js';

const requiredFields = ['category', 'subcategory', 'name', 'varietal', 'region', 'price', 'priceBand', 'salesLine', 'funFact', 'terroir', 'nose', 'palate', 'overview', 'studyStatus'];
const problems = [];
const profileDrafts = [];

for (const wine of wines) {
  for (const field of requiredFields) {
    if (wine[field] === undefined || wine[field] === null || String(wine[field]).trim() === '') {
      problems.push(`${wine.name || 'UNKNOWN'} missing ${field}`);
    }
  }
  if (wine.studyStatus?.toLowerCase().includes('pending')) {
    profileDrafts.push(wine.name);
  }
  if (wine.nose === wine.palate) {
    problems.push(`${wine.name} has identical nose and palate`);
  }
  if (!Number.isFinite(wine.price) || wine.price <= 0) {
    problems.push(`${wine.name} has invalid price ${wine.price}`);
  }
}

console.log(JSON.stringify({
  totalWines: wines.length,
  requiredCoverageOk: problems.length === 0,
  issueCount: problems.length,
  profileDraftCount: profileDrafts.length,
  note: 'profileDraftCount is the count needing bottle-source fine-comb before labeling notes as fully verified.',
  sampleDrafts: profileDrafts.slice(0, 10),
  problems: problems.slice(0, 25),
}, null, 2));

if (problems.length) process.exit(1);
