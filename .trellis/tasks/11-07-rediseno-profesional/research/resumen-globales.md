# Research: Global brands summary (Nike, Adidas, Skechers, Clarks, Steve Madden)

- **Query**: Top 10 cross-brand patterns ranked by usefulness for Calzado Leidy Carolina
  (80 models, Dama / Caballero / Niño / Niña, orders through WhatsApp, no checkout)
- **Scope**: external
- **Date**: 2026-11-07
- **Sources**: `nike.md`, `adidas.md`, `skechers.md`, `clarks.md`, `steve-madden.md` (this folder)

## Evidence quality
| Brand | What was read | Confidence |
|---|---|---|
| Nike | CO home, CO women listing (+ facet JSON), CO product, US women listing | High |
| Clarks | UK home, women listing, product | High |
| Skechers | US home, women listing, product (CO site unreachable) | High |
| Steve Madden | Home only (listing/product 403 bot check); product templates in home | Medium |
| Adidas | Blocked (403); general knowledge only | Low, unverified |

Browser tools were not available; all pages were read as raw HTML text. No screenshots, so
visual-style notes come from CSS (fonts, radii) plus general knowledge.

## Top 10 patterns (ranked for a small WhatsApp-ordering store)

1. **Gender-first navigation with "Ver todo" + shoe-type sub-links** (all 5).
   Dama / Caballero / Niño / Niña as the top level; under each, types (Tenis, Sandalias,
   Botas, Baletas, Escolar, Formal). On mobile, a drill-down menu with a back arrow.

2. **Size-button grid + "Guía de tallas" link right next to the label** (all 5).
   Sizes as tappable buttons limited to the model's range; unavailable sizes greyed, not hidden.
   The chosen size feeds the WhatsApp message. For Niño/Niña add a "cómo medir el pie en casa"
   mini-guide (Clarks "Measure & fit", Skechers printable kids chart).

3. **Product card anatomy** (all 5, order varies):
   image → small badge ("Nuevo", "Oferta") → name → one line of type/colour/material
   ("Sandalia · Negro · Sintético", Clarks/Nike) → price `$ 129.900` → "+ N colores" (Clarks,
   Nike, Adidas). Add a direct WhatsApp action on the card (the store's equivalent of
   Clarks' "Quick buy").

4. **Listing toolbar: title + result count + Filter button + Sort** (all 5).
   "Dama (20 modelos)", filters for Categoría, Tipo, Talla, Color, Precio (bands), sort by
   price/newest. Desktop: sidebar or collapsible panel; mobile: full-screen sheet with
   "Limpiar" and "Ver N resultados". Show counts next to options (Skechers, Clarks).

5. **Service/trust strip of 3-4 items** (Clarks, Skechers, Nike, Steve Madden).
   Envíos / Cambios / Formas de pago / Atención por WhatsApp — text must come from `TIENDA`
   config placeholders (PRD rule: no invented thresholds or policies). Repeat the same
   bullets compactly under the WhatsApp button on the product view (Clarks).

6. **Announcement bar at the very top** (Nike, Skechers, Clarks, Steve Madden, Adidas).
   One line, optionally rotating, with a "Ver condiciones" link. Good slot for
   "Pide por WhatsApp" or a real promo from config.

7. **Product view structure** (all 5): breadcrumb → gallery (thumbnails desktop / swipe
   mobile) → name + colour → price → colour choice ("Color – Negro") → size grid → primary
   action (WhatsApp with model + size + colour) → service bullets → accordions
   (Descripción, Características: material, suela, altura de tacón en cm, Envíos y cambios)
   → "También te puede gustar" (same category).

8. **Shop-by-type shortcut tiles above the grid** (Skechers round tiles, Clarks pills,
   Steve Madden category carousel). Lets mobile users jump to Sandalias/Tenis without
   opening filters.

9. **Kids taxonomy by age band with size range in the label** (Nike, Skechers, Clarks,
   Adidas). E.g. "Bebé (tallas 18-22)", "Pequeños (23-29)", "Grandes (30-36)" — values must
   match the real size data in `productos.js`.

10. **Restrained retail visual system** (Nike, Clarks, Adidas, Steve Madden):
    white/off-white ground, black text and primary buttons, one accent reserved for sale
    price/badges, product photos on a uniform light-grey or white backdrop, condensed
    uppercase display face + clean sans for UI (Clarks: Oswald + Montserrat; Steve Madden:
    Acumin condensed + Acumin; Skechers: Mulish), consistent corner radius (either 0 like
    Clarks/Adidas or pill buttons like Nike — pick one), large whitespace, minimal motion
    (hover image swap, smooth carousel).

## Patterns seen but NOT suitable now
- Store pickup / stock per store, BNPL instalments, loyalty-gated free shipping, AR try-on,
  360° view, reviews with stars, "low stock" or "notify me" — need real data/systems the
  store does not have. Adapt "notify me" as "¿No ves tu talla? Pregúntanos por WhatsApp".
- Countdown timers and stacked promo tiles (Skechers/Clarks sale) — high pressure, needs
  real dated promotions.

## Image ratio note
Nike/Adidas/Skechers use square product images; Steve Madden uses 4:5 portrait. Square is
the safest for mixed owner photos; 4:5 looks more fashion-led if photos are consistent.
