# Avantage Business — Homepage Clone

Reference: <https://avantage.bold-themes.com/business/>
Original stack: WordPress + Avantage theme v2.6.1 + Bold Page Builder v5.9.5.
Target stack: React 19 + Vite 8, plain CSS (no framework).

## Design tokens

Extracted from `themes/avantage/style.css` and `bold-page-builder/content_elements.crush.css`.
All live in `src/styles/variables.css`.

| Token | Value | Notes |
|---|---|---|
| Accent | `#e94d65` | primary; 223 uses in the theme CSS |
| Secondary | `#1b4962` | default headline navy |
| Dark | `#181818` / `#191919` | base text / dark section background |
| Body text | `rgba(24,24,24,.8)` | |
| Body font | Sarabun | also buttons |
| Heading font | Roboto Condensed | headline titles |
| Alt font | Roboto | eyebrows and sub-headlines |
| Root size | `16px` | every other size is `em`, so it all cascades from here |
| Heading scale | 3 / 2.5 / 2.10225 / 1.76775 / 1.4865 em | h1–h5 |
| Boxed widths | 1200px, 1400px | `max-width: calc(100% - 60px)` |
| Spacing scale | 2em / 5em / 8.75em | normal / medium / large; drops to 2 / 3 / 4.375em ≤768px |

Breakpoints: `480 · 580 · 620 · 640 · 768 · 992 · 1024 · 1200`.
Builder tiers: xs ≤480, ms ≤620, sm ≤768, md 993–1200, lg ≥1201.

## Layout model

The builder nests every section three levels deep, and the width/spacing rules
attach at different levels — so `<Section>` reproduces it exactly:

```
section.btSection            ← color scheme
  └ div.btPort               ← vertical padding
      └ div.btCell           ← max-width + centering
          └ div.btRow / div.btColumn
```

## Section order

| # | Component | Layout | Spacing | Notes |
|---|---|---|---|---|
| 1 | `HeroSlider` | wide | — | dark; 3 fading slides, 2 buttons each |
| 2 | `ServicesIntro` | 1200 | pb large | 3 columns w/ background images |
| 3 | `Industries` | 1200 | pb medium | 6 service cards + "View all" |
| 4 | `Experience` | 1200 | pb normal | 2-col, right boxed bg, 3 features |
| 5 | `Testimonials` | 1200 | pt/pb large | dark; top+bottom coverage images |
| 6 | `ClientLogos` | 1200 | pt normal, pb medium | 9-logo carousel |
| 7 | `CallbackCounters` | 1200 | pt medium | left boxed bg; 3 animated counters |
| 8 | `Cases` | 1200 | pt normal, pb large | filter tabs + masonry tiles |
| 9 | `QuoteBanner` | **1400** | pb large | the one 1400-wide section |
| 10 | `LatestNews` | 1200 | pb large | 4 post cards |
| 11 | `MapEmbed` | wide | — | Google map, custom pin |
| 12 | `ContactBar` | 1200 | — | see note below |

**Note on 12/13:** the original ships two copies of the contact strip — one
`hidden_xs/ms/sm`, one `hidden_md/lg` — because the builder can't reflow it.
We render one responsive `ContactBar` instead. Same pixels, half the markup.

Sections 14 and 15 in the source DOM are the footer widget area and footer bar;
they are `Footer` here, not page sections.

## Project layout

```
src/
  main.jsx                  entry
  App.jsx                   Header + Home + Footer shell
  pages/Home.jsx            the 12 sections, in order
  styles/
    global.css              fonts + imports + page shell
    variables.css           design tokens
    reset.css               mirrors the theme's normalize
    typography.css          base type + responsive heading scale
  components/
    ui/                     Section, Headline, Button, Grid/Column, Icon,
                            IconWidget, ServiceCard, Counter, Carousel
    layout/
      Header/               Header, TopBar, MainNav, MobileMenu
      Footer/               Footer, FooterWidgets, FooterBottom
    sections/<Name>/        one folder per section: .jsx + .css
  data/
    site.js                 top bar, 6-item mega menu, footer
    home.js                 per-section content
  hooks/
    useInView.js            counter + reveal triggers
    useStickyHeader.js      sticky header toggle
  assets/images/            see README there
```

## Conventions

- One folder per component, co-located `.css`, imported by the component.
- Class names keep the theme's `bt`-prefix so the reference CSS stays greppable
  against ours during pixel comparison.
- Content lives in `src/data/`, never inline in JSX — section components are
  pure layout, which is what the pixel work actually touches.
- No jQuery/Slick. `Carousel` reimplements only the three behaviours the
  homepage needs.

## Status

**Header: built and verified.** Everything below it is still a stub with its
layout contract in a docblock, marked `TODO(structure-only)`.

Implemented: tokens, reset, typography, `Section`, `Headline`, `Button`,
`Icon`, `IconWidget`, the full `Header` (TopBar / MainNav / MenuItem /
MobileMenu), `useStickyHeader`, `useMediaQuery`, and the icon sprite.

### Header — measured against the live site at 1440px

Geometry was verified by probing both pages over the Chrome DevTools Protocol
and diffing `getBoundingClientRect` / computed styles, not by eyeballing.

| Metric | Reference | Clone |
|---|---|---|
| Header box | 1440x176 | exact |
| Top bar | 1440x36, `rgb(27,73,98)` | exact |
| Phone button | [1167, 83, 153, 47] | exact |
| Menu link line-height / weight | 140px / 700 | exact |
| Gaps between menu items | 50px x5 | exact |
| Menu item x-positions | 511 / 603 / 717 / 828 / 1002 | within 1-2px |

Behaviour verified: hover dropdowns (opacity 0->1, translateY -20px->0), the
third-level flyout at `left: 270px`, sticky collapse (176->70px, logo and
line-height 140->70, top bar hidden), and the mobile panel with its accordion.

Known cosmetic deltas, both from substituting SVGs for the theme's icon fonts:
top-bar widget widths differ by ~6px (16px SVG vs variable-width glyph), and
the logo is a placeholder wordmark at the reference's 268x140 box.
