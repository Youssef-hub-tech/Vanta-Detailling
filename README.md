# VANTA Detailing — portfolio demo

A fictional premium car-detailing studio in Riyadh, built as a front-end portfolio
piece. Static site, no framework beyond Astro, no runtime dependencies beyond a
single ~4 KB script.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview
```

Node 20+ recommended. Build output is fully static and can be dropped on any host.

## What's here

| Path | Purpose |
| --- | --- |
| `src/i18n/ui.js` | **All copy, both languages**, plus placeholder business details and the `waLink()` helper. Edit text here, not in components. |
| `src/layouts/Layout.astro` | `<head>`: SEO, Open Graph, hreflang, JSON-LD, font preloads. |
| `src/components/` | One component per page section. Section CSS is scoped inside each file. |
| `src/components/*Art.astro` | Original inline SVG artwork (car, paint panel, wheel, map). |
| `src/styles/global.css` | Design tokens, reset, typography, buttons, reveal animation, RTL/Arabic rules. |
| `src/scripts/main.js` | Nav, mobile menu, scroll reveal, comparison slider, hero parallax, scroll spy. |
| `src/pages/index.astro`, `src/pages/ar/index.astro` | The two language routes. Both render the same `<Home lang="…" />`. |

## Placeholder business information

The brand, address, phone number, email and prices are invented for the demo and
are shown as placeholders on the page (contact block note + footer legal line).

- WhatsApp / phone: `+966 50 000 0000` (`site.whatsapp` in `src/i18n/ui.js`)
- Email: `hello@vanta-detailing.example`
- Address: "Placeholder address — Al Olaya, Riyadh"
- Domain: `vanta-detailing.example` (`astro.config.mjs` `site`, `public/sitemap.xml`)

To make it real, change those four values and remove the demo disclaimers.

## Language and RTL

Two static pages rather than a client-side toggle: `/` (English, `lang="en"`,
`dir="ltr"`) and `/ar/` (Arabic, `lang="ar"`, `dir="rtl"`). The switch in the nav
and footer is a normal link, so it works without JavaScript and is crawlable.
Both pages declare `hreflang` alternates, including `x-default`.

Layout uses logical properties (`inset-inline-*`, `padding-inline`, `margin-inline`)
throughout, so RTL comes from `dir` rather than a mirrored stylesheet. The
before/after slider keeps `dir="ltr"` on the comparison frame so dragging feels
identical in both languages.

## Imagery and licensing

There are **no photographs on this site**. Every visual — the studio car, the
paint-panel comparison, the wheel study and the map plate — is original inline
SVG artwork written for this project, so nothing is hotlinked and nothing carries
a third-party licence. The page says so in the figure caption and the footer.

If you want photography later, replace `StudioCar`, `PaintArt`, `WheelArt` and
`MapArt` with `<img>` / `<Picture>` elements inside their existing wrappers; the
layout and captions already assume an image-shaped slot. Astro's `<Image>` needs
`sharp`, which is already installed.

Fonts are self-hosted in `public/fonts` (Instrument Serif, Inter, IBM Plex Sans
Arabic, Noto Naskh Arabic — all SIL Open Font License), so the site makes no
third-party requests at runtime.

## Social preview

`public/og.jpg` (1200×630) is the Open Graph / Twitter card image. It was rendered
from the hero at the same type sizes and colours, with the nav, tag row and
buttons hidden so the car has room. The tags in `Layout.astro` build absolute
URLs from `site.url` in `src/i18n/ui.js`, so the image only resolves once that
domain is the real one.

## Accessibility notes

- Skip link, landmark elements, one `<h1>` per page, labelled sections.
- The comparison slider is a native `input[type=range]` with `aria-valuetext`
  announcing the split in the active language; it is keyboard operable.
- Mobile menu toggles `aria-expanded`, traps nothing but closes on Escape and on
  link activation, and restores focus to the toggle.
- Focus rings use a gold outline at 3px offset; body text is `#f2efe7` on `#070708`.
- All motion is gated behind `.js` and collapses under `prefers-reduced-motion`.

## Verification

```
npm run build     # 2 pages, no errors
```

Checked in Chrome at 320, 360, 390, 768, 834, 1024, 1280, 1440 and 1920 px, in
both languages: no horizontal overflow, no console errors, body text at 7.9–17.5:1
contrast, and the skip link, mobile menu and comparison slider all work from the
keyboard.

Screenshots from the build live in `../shots-after/` (desktop, Arabic RTL,
mobile full-page, per-section crops).
