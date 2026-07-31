import { useMemo, useState } from 'react';
import { wines, priceBands, categories } from './wines.js';
import './App.css';

const categoryAccent = {
  'Sparkling Wine': '#e7c873',
  'White Wine': '#f6f1cb',
  'Rosé Wine': '#ff8fa8',
  'Red Wine': '#bf3055',
  'Cabernet Sauvignon & Blends': '#9d173a',
  Bordeaux: '#7c1730',
  'Large Format Bottles': '#d6b25e',
  'Small Format Bottles': '#84d6ff',
  'Sweet & Fortified Wines': '#c9893b',
};

function BottleArt({ wine }) {
  const accent = categoryAccent[wine.category] || '#77e0ff';
  const initials = wine.name
    .replace(/[“”]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
  return (
    <div className="bottle-wrap" aria-label={wine.imageAlt}>
      <div className="bottle-glow" style={{ background: accent }} />
      <div className="bottle">
        <div className="foil" style={{ background: `linear-gradient(180deg, ${accent}, #111)` }} />
        <div className="neck" />
        <div className="shoulder" />
        <div className="glass">
          <div className="label">
            <span>{initials}</span>
            <small>{wine.varietal.split('/')[0]}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function WineCard({ wine }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <article className={`flash-card ${flipped ? 'is-flipped' : ''}`}>
      <button className="flip-surface" onClick={() => setFlipped((v) => !v)} aria-label={`Flip ${wine.name} flash card`}>
        <div className="card-face card-front">
          <div className="card-topline">
            <span>{wine.category}</span>
            <strong>${wine.price}</strong>
          </div>
          <BottleArt wine={wine} />
          <div className="front-copy">
            <p className="subcat">{wine.subcategory}</p>
            <h3>{wine.name}</h3>
            <p>{wine.varietal}</p>
            <p>{wine.region}</p>
            <div className="pairing-pill">
              <img src={wine.featuredDish.image} alt="" />
              <span>Pairs with {wine.featuredDish.name}</span>
            </div>
          </div>
          <span className="tap-hint">Tap to study the somm side</span>
        </div>
        <div className="card-face card-back">
          <div className="card-topline back-line">
            <span>{wine.priceBand}</span>
            <strong>{wine.varietal}</strong>
          </div>
          <h3>{wine.name}</h3>
          <section>
            <h4>Sales line</h4>
            <p>{wine.salesLine}</p>
          </section>
          <section className="dish-feature">
            <img src={wine.featuredDish.image} alt={wine.featuredDish.name} />
            <div>
              <h4>Featured pairing</h4>
              <strong>{wine.featuredDish.name}</strong>
              <p>{wine.featuredDish.why}</p>
            </div>
          </section>
          <section>
            <h4>Nose</h4>
            <p>{wine.nose}</p>
          </section>
          <section>
            <h4>Palate</h4>
            <p>{wine.palate}</p>
          </section>
          <section>
            <h4>Terroir</h4>
            <p>{wine.terroir}</p>
          </section>
          <section>
            <h4>Fun fact</h4>
            <p>{wine.funFact}</p>
          </section>
          <span className="tap-hint">Tap to return to bottle side</span>
        </div>
      </button>
    </article>
  );
}

function FullWineCard({ wine, onClose }) {
  if (!wine) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="selected-wine-title" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span>{wine.category} · {wine.subcategory}</span>
            <h2 id="selected-wine-title">{wine.name}</h2>
          </div>
          <button className="close-button" onClick={onClose} aria-label="Close full wine card">Close</button>
        </div>
        <div className="modal-body">
          <section className="modal-front-panel">
            <BottleArt wine={wine} />
            <div className="modal-facts">
              <p><strong>Price</strong><span>${wine.price} · {wine.priceBand}</span></p>
              <p><strong>Grape / Style</strong><span>{wine.varietal}</span></p>
              <p><strong>Region / Vintage</strong><span>{wine.region}</span></p>
              <p><strong>Featured dish</strong><span>{wine.featuredDish.name} · {wine.featuredDish.section}</span></p>
              <p><strong>Study status</strong><span>{wine.studyStatus}</span></p>
            </div>
          </section>
          <section className="modal-study-panel">
            <div className="modal-dish-card"><img src={wine.featuredDish.image} alt={wine.featuredDish.name} /><h4>Featured pairing</h4><strong>{wine.featuredDish.name}</strong><p>{wine.featuredDish.why}</p></div>
            <div><h4>Sales line</h4><p>{wine.salesLine}</p></div>
            <div><h4>Nose</h4><p>{wine.nose}</p></div>
            <div><h4>Palate</h4><p>{wine.palate}</p></div>
            <div><h4>Terroir</h4><p>{wine.terroir}</p></div>
            <div><h4>Fun fact</h4><p>{wine.funFact}</p></div>
            <div><h4>Overview</h4><p>{wine.overview}</p></div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return <div className="stat"><strong>{value}</strong><span>{label}</span></div>;
}

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All categories');
  const [priceBand, setPriceBand] = useState('All prices');
  const [view, setView] = useState('cards');
  const [selectedWine, setSelectedWine] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return wines.filter((wine) => {
      const matchesQuery = !q || [wine.name, wine.region, wine.varietal, wine.subcategory, wine.category].join(' ').toLowerCase().includes(q);
      const matchesCategory = category === 'All categories' || wine.category === category;
      const matchesPrice = priceBand === 'All prices' || wine.priceBand === priceBand;
      return matchesQuery && matchesCategory && matchesPrice;
    });
  }, [query, category, priceBand]);

  const grouped = useMemo(() => {
    return filtered.reduce((acc, wine) => {
      const key = `${wine.category} · ${wine.subcategory}`;
      acc[key] = acc[key] || [];
      acc[key].push(wine);
      return acc;
    }, {});
  }, [filtered]);

  return (
    <main>
      <section className="hero">
        <div className="eyebrow">Blu Livingston Bottle Study · Pocket Extension</div>
        <h1>Pocket Wines</h1>
        <p className="lede">A Blu-style pocket guide for the bottle list: flip through wine names, prices, grapes, regions, sommelier notes, and a featured Blu dish pairing for every bottle.</p>
        <div className="hero-actions">
          <a href="#cards" className="primary-action">Start studying</a>
          <button className="ghost-action" onClick={() => setView(view === 'cards' ? 'list' : 'cards')}>{view === 'cards' ? 'List view' : 'Card view'}</button>
        </div>
        <div className="stats">
          <Stat label="bottles loaded" value={wines.length} />
          <Stat label="categories" value={categories.length - 1} />
          <Stat label="price bands" value="6" />
        </div>
      </section>

      <section className="controls" aria-label="Wine filters">
        <label>
          <span>Search bottle, grape, region</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try Opus, Riesling, Bordeaux…" />
        </label>
        <label>
          <span>Category</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>Price range</span>
          <select value={priceBand} onChange={(e) => setPriceBand(e.target.value)}>
            {priceBands.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </section>

      <section className="result-strip">
        <strong>{filtered.length}</strong> cards showing
        <span>Tip: filter by price for quick floor-service recommendations.</span>
      </section>

      <section id="cards" className={view === 'cards' ? 'grouped-cards' : 'study-list'}>
        {Object.entries(grouped).map(([group, items]) => (
          <div className="group" key={group}>
            <div className="group-heading">
              <h2>{group}</h2>
              <span>{items.length} bottles</span>
            </div>
            <div className={view === 'cards' ? 'cards-grid' : 'rows'}>
              {items.map((wine) => view === 'cards' ? <WineCard wine={wine} key={wine.id} /> : (
                <article className="wine-row" key={wine.id}>
                  <div><strong>{wine.name}</strong><span>{wine.varietal} · {wine.region}</span></div>
                  <p>{wine.salesLine}</p>
                  <span className="row-pairing"><img src={wine.featuredDish.image} alt="" /> {wine.featuredDish.name}</span>
                  <b>${wine.price}</b>
                  <button className="open-card-button" onClick={() => setSelectedWine(wine)}>Open card</button>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer>
        <strong>Pocket Wines</strong>
        <span>Built as private staff study material from Blu Livingston menu screenshots. Bottle art is local study-label art until real product-photo assets are reviewed.</span>
      </footer>
      <FullWineCard wine={selectedWine} onClose={() => setSelectedWine(null)} />
    </main>
  );
}
