# ASSAïS

Single-page marketing site for **ASSAïS** — a contemporary North African menswear
house (Moroccan/Amazigh heritage × Mediterranean culture, minimalist restraint).
Ported from a Claude Design HTML/CSS prototype to **Next.js** with **GSAP** motion.

Tagline: _"Heritage felt. Not preserved."_

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **GSAP 3** with **ScrollTrigger** for all motion
- **Satoshi** font loaded from Fontshare (the only typeface — never substitute Inter/system)
- No CSS framework — plain CSS in `app/globals.css` with a CSS-variable palette

## Commands

```bash
npm install      # install deps
npm run dev      # local dev server → http://localhost:3000
npm run build    # production build (also type-checks)
npm start        # serve the production build
```

## Layout

```
app/
  layout.tsx     # <html>, Satoshi <link>, metadata. Starts with class "no-js".
  page.tsx       # server component — all section markup + look data array
  globals.css    # full ported stylesheet (palette, sections, illustration layers)
components/
  Animations.tsx # "use client" — the entire motion system (GSAP)
public/assets/   # brand photography: looks 01–06, palm, swallows, horse, patterns
```

## The page (six sections, top → bottom)

1. **Hero** — Ocher/palm-red bg, giant `ASSAïS` wordmark, palm illustration bleeds off right.
2. **Story** (`#about`) — Doudeville Lin bg, identity copy + pull quote, swallow bleeds top-right.
3. **Collection** (`#collection`) — Imzoûrene Sands bg, asymmetric 12-col product grid (6 looks).
4. **The Island** — horse-violet bg, "Isola d'ASSAïS" myth copy, horse illustration bleeds right.
5. **Craftsmanship** — Dull Blue Violet bg, atelier copy + floating keyword "orbit".
6. **Footer** (`#contact`) — black, ink-stamp wordmark, link columns, dark swallow bleed.
   A Tabebuia pattern strip bridges craft → footer.

## Brand palette (CSS vars in `:root`, strictly enforced)

`--c-ocher #B04040` · `--c-violet #6B6BA0` · `--c-tabebuia #7B5878` ·
`--c-lin #FEF9F2` · `--c-sands #C4AA88` · `--c-ecru #BFA882` · `--c-ink #1a1614` ·
plus `--c-glaucous #9FC8C8`, `--c-kings #A0BDD4`. Black + white. **No other colors.**

`--bg-*` vars match each printed illustration's background so the woodcut figures
dissolve seamlessly into the section — keep them in sync if you swap an asset.

## Motion (`components/Animations.tsx`)

GSAP owns everything; `layout.tsx` ships `class="no-js"` and the component removes it.
`prefers-reduced-motion` short-circuits to static content. Key behaviors:

- **Reveal** — every `.reveal` fades + rises in on scroll (`data-delay` adds a stagger).
  The hero is handled by a dedicated intro timeline, not the generic loop.
- **Illustration animation** (the headline feature):
  - _Palm_ — intro drift-in + slow continuous breathing.
  - _Story swallow_ — drifts in from the corner, then a slow wing-sway + scroll parallax.
  - _Horse_ — scrubbed parallax/scale, like it walks out of frame.
  - _Footer swallow_ — drifts up on reveal + parallax.
  - _Pattern strip_ — `background-position` pans horizontally on scroll.
- **Collection cards** — `ScrollTrigger.batch` staggers them in (CSS handles hover-lift).
- **Keyword orbit** — each word floats on its own sine phase.

### Conventions

- Wrap GSAP in `gsap.context(...)` and `ctx.revert()` on cleanup (already done).
- Cards must NOT carry `.reveal` — the batch animates them; doubling up conflicts.
- Animate illustrations as positioned `.illu` `<div>` layers (not CSS `::before`), so
  GSAP can transform them. Add new ones following the `.illu-*` pattern in `globals.css`.

## Source handoff

Original design bundle lived in `_handoff/` (gitignored): `README.md`, the chat
transcript, and `project/ASSAiS.html` — the self-contained prototype this implements.
