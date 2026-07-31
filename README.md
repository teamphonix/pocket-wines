# Pocket Wines

A mobile-first flashcard study site for Blu Livingston's wines by the bottle.

## Features

- Flip cards: front shows wine name, category, grape/region, and bottle study art; back shows sommelier-style study notes.
- Category filters that match the menu lanes: sparkling, whites, rosé, reds, Cabernet/Bordeaux, formats, and sweet/fortified.
- Price range filters: less than $100, $100–$200, $200–$300, $300–$400, $400–$500, and $500+.
- Search by wine name, grape, region, or menu section.
- Staff-friendly sales lines, fun facts, terroir notes, nose, palate, and overview.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Accuracy workflow

The site now separates "complete enough to study" from "fully bottle-source verified." Run this audit before deploying future data updates:

```bash
npm run audit:wines
```

Current notes are intentionally marked as `Profile-based draft pending bottle-source fine-comb` until every bottle's producer tech sheet, importer note, or trusted wine reference has been checked. The next data pass should replace the profile-generated nose, palate, sales line, fun fact, and terroir copy with bottle-specific sourced notes.

## Data notes

The current wine records were transcribed from menu screenshots supplied from Blu Livingston. Bottle visuals are local study-label illustrations so the site does not depend on hotlinked retailer images. A later asset pass can replace those with reviewed local real bottle photos and provenance.
