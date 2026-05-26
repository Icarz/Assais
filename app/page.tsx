import Animations from "@/components/Animations";

const categories = [
  { img: "look-01.jpeg", label: "Djellabas" },
  { img: "look-02.jpeg", label: "Tuniques" },
  { img: "look-04.jpeg", label: "Caftans" },
  { img: "look-05.jpeg", label: "Knitwear" },
  { img: "look-06.jpeg", label: "Shirts" },
  { img: "look-03.jpeg", label: "Linen" },
];

const looks = [
  { img: "look-01.jpeg", name: "Djellaba Rîf", mat: "Hand-woven raw cotton · ecru", price: "€ 480" },
  { img: "look-02.jpeg", name: "Tunique Sahel", mat: "Égyptian linen · ivory", price: "€ 320" },
  { img: "look-03.jpeg", name: "Gandoura Imzoûrene", mat: "Raw wool · sand", price: "€ 540", tag: "New" },
  { img: "look-04.jpeg", name: "Caftan Tanger", mat: "Linen-cotton · oat", price: "€ 410" },
  { img: "look-05.jpeg", name: "Pull-over Atlas", mat: "Hand-loomed wool · bone", price: "€ 380" },
  { img: "look-06.jpeg", name: "Chemise Blanche", mat: "Crepe de coton · blanc", price: "€ 260" },
];

export default function Home() {
  return (
    <>
      <Animations />

      {/* ─────────────  HEADER  ───────────── */}
      <header className="site-header">
        <nav className="hdr-left" aria-label="Primary">
          <a href="#shop">Collection</a>
          <a href="#maison">Maison</a>
          <a href="#contact">Journal</a>
        </nav>
        <a className="hdr-logo" href="#top">
          ASSA<span className="dia">ï</span>S
        </a>
        <nav className="hdr-right" aria-label="Utilities">
          <a href="#shop">Search</a>
          <a href="#contact">Contact</a>
          <a href="#shop">Cart (0)</a>
        </nav>
      </header>

      {/* ─────────────  HERO  ───────────── */}
      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-copy reveal">
          <span className="eyebrow">Volume 01 · Été 26</span>
          <h1>
            Heritage felt.<br />
            Not preserved.
          </h1>
          <a className="btn btn-light" href="#shop">Discover the collection</a>
        </div>
        <span className="hero-scroll">Scroll</span>
      </section>

      {/* ─────────────  CATEGORIES  ───────────── */}
      <section className="categories">
        <div className="section-head reveal">
          <span className="eyebrow">Explore the maison</span>
          <h2>A wardrobe between two shores</h2>
          <p>
            North African heritage and Mediterranean restraint, woven into six considered pieces.
          </p>
        </div>
        <div className="cat-row">
          {categories.map((c) => (
            <a className="cat" href="#shop" key={c.label}>
              <div className="cat-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/assets/${c.img}`} alt={c.label} />
              </div>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ─────────────  EDITORIAL — MAISON / STORY  ───────────── */}
      <section className="editorial" id="maison">
        <div
          className="ed-media"
          style={{ backgroundImage: "url('/assets/swallow-cream-real.jpg')" }}
          aria-hidden="true"
        />
        <div className="ed-copy reveal">
          <span className="eyebrow">01 — Identity</span>
          <h2>
            A house that listens<br />
            before it <em>speaks.</em>
          </h2>
          <p>
            ASSAïS is a contemporary menswear house rooted in the North African and Mediterranean
            sensibility — the slow architecture of a medina at dusk, the dry warmth of Amazigh wool,
            the salt-bleached calm of a Sicilian shoreline.
          </p>
          <a className="link-underline" href="#shop">Read the maison story</a>
        </div>
      </section>

      {/* ─────────────  SHOP — PRODUCT GRID  ───────────── */}
      <section className="shop" id="shop">
        <div className="shop-head reveal">
          <span className="eyebrow">02 — The Collection</span>
          <h2>
            Volume 01 — <em>L’Île d’ASSAïS</em>
          </h2>
          <p>
            Six pieces. Linen, raw cotton, hand-woven wool. Limited to a season — never repeated.
          </p>
        </div>

        <div className="product-grid">
          {looks.map((l) => (
            <a className="product" href="#shop" key={l.name}>
              {l.tag && <span className="product-tag">{l.tag}</span>}
              <div className="product-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/assets/${l.img}`} alt={l.name} />
              </div>
              <span className="product-name">{l.name}</span>
              <span className="product-mat">{l.mat}</span>
              <span className="product-price">{l.price}</span>
            </a>
          ))}
        </div>

        <div className="shop-cta">
          <a className="btn btn-dark" href="#shop">View all pieces</a>
        </div>
      </section>

      {/* ─────────────  EDITORIAL — THE ISLAND  ───────────── */}
      <section className="editorial align-right">
        <div
          className="ed-media"
          style={{ backgroundImage: "url('/assets/horse-violet.jpg')" }}
          aria-hidden="true"
        />
        <div className="ed-copy reveal">
          <span className="eyebrow">03 — Myth</span>
          <h2>
            Isola<br />
            <em>d’ASSAïS.</em>
          </h2>
          <p>
            An imagined island at the heart of the Mediterranean — a crossroads where Amazigh weavers,
            Andalusian poets and Sicilian fishermen share the same harbour. ASSAïS is the wardrobe of
            that island.
          </p>
          <a className="link-underline" href="#shop">Enter the island</a>
        </div>
      </section>

      {/* ─────────────  EDITORIAL — CRAFTSMANSHIP  ───────────── */}
      <section className="editorial">
        <div
          className="ed-media"
          style={{ backgroundImage: "url('/assets/pattern-tabebuia.jpg')" }}
          aria-hidden="true"
        />
        <div className="ed-copy reveal">
          <span className="eyebrow">04 — Métier</span>
          <h2>
            Hands first.<br />
            <em>Machines, second.</em>
          </h2>
          <p>
            Every garment is cut and finished in two ateliers — one in the medina of Marrakech, one
            on the slopes outside Palermo. Tailoring is patient. The hem is invisible. The lining is honest.
          </p>
          <a className="link-underline" href="#contact">Inside the ateliers</a>
        </div>
      </section>

      {/* ─────────────  FOOTER  ───────────── */}
      <footer className="site-footer" id="contact">
        <div className="foot-inner">
          <div className="news reveal">
            <h3>Stay close to the maison.</h3>
            <form className="news-form">
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="foot-cols">
            <div className="about">
              <h4>The House</h4>
              <p>
                ASSAïS is a contemporary North African menswear house. Pieces are made in limited
                volumes and dispatched from Casablanca every Friday.
              </p>
            </div>
            <div>
              <h4>Shop</h4>
              <ul>
                <li><a href="#shop">Volume 01 — L’Île</a></li>
                <li><a href="#shop">Archive</a></li>
                <li><a href="#shop">Lookbook PDF</a></li>
                <li><a href="#shop">Made-to-measure</a></li>
              </ul>
            </div>
            <div>
              <h4>House</h4>
              <ul>
                <li><a href="#maison">About the brand</a></li>
                <li><a href="#maison">Ateliers</a></li>
                <li><a href="#contact">Press</a></li>
                <li><a href="#contact">Journal</a></li>
              </ul>
            </div>
            <div>
              <h4>Client Services</h4>
              <ul>
                <li><a href="mailto:bonjour@assais.studio">bonjour@assais.studio</a></li>
                <li><a href="#contact">Instagram</a></li>
                <li><a href="#contact">Newsletter</a></li>
                <li><a href="#contact">Boutique — Marrakech</a></li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <span>© 2026 ASSAïS · All rights reserved</span>
            <span>Marrakech / Palermo</span>
          </div>
        </div>
      </footer>
    </>
  );
}
