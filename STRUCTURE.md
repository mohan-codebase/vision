# Vision Business Setup — Homepage

**Design reference:** Avantage Business (<https://avantage.bold-themes.com/business/>) —
used only for the visual language (typography, geometric shapes, angled
sections, image masks, hover states).
**Content source of truth:** `Website Content_Vision.docx`.

Stack: React 19 + Vite 8, plain CSS (no framework). One folder per component,
co-located `.css`. Content lives in `src/data/`, never inline in JSX.

## Design tokens

`src/styles/variables.css` — extracted from the Avantage theme and kept.

Palette is derived from the **Vision Business Setup logo** (`public/logo.png`):
deep navy wordmark, brand-gold "BUSINESS SETUP", blue "V" gradient.

| Token | Value |
|---|---|
| Accent (brand gold) | `#b0842f` (light `#e4c877`, dark `#8a6626`) |
| Secondary (navy) | `#1c3c60` |
| Navy deep (near-black) | `#111826` |
| Brand blue / feature bands | `#1c3f6b` |
| Dark section | `#161c2b` |
| Body font | Sarabun · Headings | Roboto Condensed · Eyebrows/sub | Roboto |
| Boxed widths | 1200 / 1400px, `max-width: calc(100% - 60px)` |
| Spacing scale | 2em / 5em / 8.75em (normal / medium / large) |

## Homepage section order

`src/pages/Home.jsx`

| # | Component | Source of design | Content |
|---|---|---|---|
| 1 | `HeroSlider` | Avantage hero slider | 3 slides — "Every Business starts with Vision" |
| 2 | `BusinessSetup` | 3 overlapping cards | UAE Mainland / Free Zone / Offshore |
| 3 | `OurStory` | 2-col "experience" | Why Vision / Our Story (est. 2015) + 3 medallions |
| 4 | `WhatSetsUsApart` | borderless service grid | 4 differentiators |
| 5 | `WhoWeWorkWith` | triangular portfolio tiles | 5 documented industries |
| 6 | `OurServices` | icon card grid | Licence / Visa / Finance & Banking / Other |
| 7 | `Commitment` | left-boxed content + photo | Our Approach / Commitment |
| 8 | `Founder` | new — navy monogram card | Viekram Sadwani |
| 9 | `CoreValues` | dark teal band + edge coverage | 7 core values |
| 10 | `CtaBanner` | 1400-wide teal box | strong CTA |
| 11 | `CallbackForm` | new — navy panel + form card | Request a Callback (frontend-only) |

Chrome: `Header` (sticky, phone button, Business Setup + Our Services
dropdowns, Contact Us, mobile panel), `Footer` (brand + quick links + contact),
`WhatsApp` (floating "Chat Now", fixed).

## Contact details

**All contact values are placeholders** in `src/config/contact.js` — the source
document contains none. Replace `phoneDisplay` / `phoneHref` / `whatsappNumber`
(and optionally `email`) before launch. `whatsappNumber` is digits only in
international format.

## Navigation

`src/data/site.js` → `mainMenu`. Three-level tree:

- **Business Setup** → UAE Mainland · UAE Free Zone · UAE Offshore
- **Our Services** → Licence · Visa · Finance & Banking · Other (each with a
  third-level flyout of sub-services)
- **Contact Us**

All links are on-page anchors (`#business-setup`, `#services`,
`#request-callback`, …). Dedicated inner pages are not built yet.

## Kept UI primitives

`src/components/ui/` — `Icon` (SVG sprite `public/icons.svg`), `IconWidget`
(top bar). `Section` / `Headline` / `Button` / `Counter` remain as generic
primitives for the future inner pages but are unused on the homepage.

## Reveal / animation hooks

`src/hooks/` — `useStickyHeader`, `useMediaQuery`, `useInView` (drives the
Our Story medallion rings).
