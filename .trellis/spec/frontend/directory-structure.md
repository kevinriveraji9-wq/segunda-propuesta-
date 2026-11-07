# Directory Structure

```
index.html              # the whole page (one file, semantic sections)
css/estilos.css         # all styles; tokens on :root; breakpoints at 1000px and 680px
js/productos.js         # DATA ONLY: TIENDA config, CATEGORIAS, PRODUCTOS (80 items)
js/app.js               # behaviour: render, filters, dialog, coupon, motion (one IIFE)
assets/                 # downloaded open-licence photos + credits.json (written by assets.mjs)
img/<categoria>/        # (future) real product photos, e.g. img/dama/D01.jpg
.claude/launch.json     # preview server: python -m http.server 5173
.taste-skill/           # scratch output of the design inspector (not part of the site)
```

## Rules

- Content the shop owner edits (products, prices, WhatsApp number, social links) lives **only** in `js/productos.js`. `app.js` never hard-codes catalog content.
- `productos.js` loads before `app.js` (globals `TIENDA`, `CATEGORIAS`, `PRODUCTOS`).
- No new files for one-off styles or scripts; extend `estilos.css` / `app.js`.
- Every found picture goes in `assets/` via `assets.mjs --get` so its credit is recorded in `assets/credits.json`, and the credit is printed in the footer "Fotos" column.
- Identifiers, CSS classes and comments are in Spanish (`etiqueta`, `hoja`, `tirilla`, `cupon`, `pintarLista`), matching the existing code.
