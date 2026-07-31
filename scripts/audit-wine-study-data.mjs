import { wines } from '../src/wines.js';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const requiredFields = ['category', 'subcategory', 'name', 'varietal', 'region', 'price', 'priceBand', 'salesLine', 'funFact', 'terroir', 'nose', 'palate', 'overview', 'studyStatus', 'featuredDish'];
const problems = [];
const blueMenuDishIds = new Set([
  'oysters', 'truffled-tuna', 'red-snapper-ceviche', 'wild-caught-crab-salad', 'jumbo-shrimp-cocktail', 'maine-lobster-cocktail',
  'snow-crab-claws', 'jewels-of-the-sea-plateaus', 'kaluga', 'd-or-belgian-osetra', 'the-blu-roll', 'the-greatest-catch-roll',
  'spicy-tuna-roll', 'liv-roll', 'mushroom-nori-tacos', 'black-miso-cod-nori-tacos', 'avocado-nori-tacos', 'salmon-ikura-nori-taco',
  'hamachi-avocado-nori-taco', 'toro-kaluga-nori-taco', 'bluefin-tuna-spicy-aioli-nori-taco', 'japanese-a-5-wagyu-nori-taco',
  'caesar-salad', 'wedge-salad', 'tricolor-salad', 'burrata', 'carpaccio', 'pastrami-salmon', 'rice-cakes', 'shrimp',
  'thick-cut-wagyu-bacon', 'mushroom-skewer', 'miso-black-cod', 'pork-belly-skewers', 'ricotta-gnocchi', 'bolognese',
  'spinach-agnolotti', 'lobster-fra-diavolo', 'organic-chicken-parm', 'wagyu-fried-rice', 'dover-sole', 'faroe-islands-salmon',
  'branzino', 'australian-lamb', 'westholme-wagyu-skirt-steak', 'prime-bone-in-strip-steak', 'filet-mignon-steak',
  'delmonico-steak', 'porterhouse-steak', 'prime-40oz-tomahawk-steak', 'westholme-wagyu-tomahawk', 'japanese-a5-wagyu-steak',
  'horseradish-cream', 'au-poivre', 'truffle-butter', 'chimichurri', 'chili-garlic', 'soy-caramel', 'whipped-potatoes-side',
  'old-school-creamed-spinach-side', 'charred-cauliflower-side', 'sauteed-broccoli-side', 'truffle-mac-cheese-side',
  'classic-carrot-cake', 'blu-s-tiramisu', 'granita',
]);
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
  if (!wine.featuredDish?.name || !wine.featuredDish?.image || !wine.featuredDish?.why || !wine.featuredDish?.id || !wine.featuredDish?.sourceTitle) {
    problems.push(`${wine.name} missing complete Blue-Liv menu featured dish pairing`);
  } else if (!blueMenuDishIds.has(wine.featuredDish.id)) {
    problems.push(`${wine.name} pairs to non-Blue-Liv menu dish ${wine.featuredDish.name} (${wine.featuredDish.id})`);
  } else if (!existsSync(join(process.cwd(), 'public', wine.featuredDish.image.replace(/^\//, '')))) {
    problems.push(`${wine.name} missing featured dish image file ${wine.featuredDish.image}`);
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
