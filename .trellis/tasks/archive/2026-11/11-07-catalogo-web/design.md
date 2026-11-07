# Design: Catálogo web Calzado Leidy Carolina

## Boundaries

Static site, three source files plus data:

| File | Responsibility |
|---|---|
| `index.html` | Semantic page: hero label, catalog, valley band, how-to-order slip, coupon, footer, dialog |
| `css/estilos.css` | Tokens (OKLCH), five type steps, stationery pieces, breakpoints 1000 / 680 px |
| `js/productos.js` | Data contract: `TIENDA`, `CATEGORIAS`, `PRODUCTOS` (see spec `frontend/type-safety.md`) |
| `js/app.js` | One IIFE: render, filters, dialog, coupon, motion |
| `assets/` | 5 open-licence photos + `credits.json` |

## Art direction (design-taste-frontend draw, seed 1428446130)

- Direction **"The page is the object"**; idea: *the shoebox label (Ref., talla, color, precio) becomes the hero card and the catalog entries, on a kraft cardboard ground*.
- Type: Rokkitt 800 (display, uppercase) + Literata (text).
- Palette: dealt "Sheet and biro" proportions, colours taken from the subject (kraft cardboard, white label paper, near-black ink, WhatsApp green as the single action accent). Recorded as a palette adaptation, not a redraw.
- Live thing: **"¿Qué talla calzas?"** size filter.
- Signature motion: **pinned story**: the control column stays while the sheet scrolls and its heading swaps to the shoe type in view.

## Data flow

```
productos.js globals ─► app.js estado {cat, tipo, talla, q}
                         ├─ pintarPestanas / pintarTipos / pintarLista ─► DOM
                         ├─ linkWA(msgProducto(p, talla)) ─► wa.me links
                         └─ coupon FormData ─► linkWA(texto) ─► window.open
URL hash #<cat> ◄──► estado.cat (history.replaceState)
```

## Tradeoffs

- **Illustrations instead of photos**: no product photography exists; drawing each type in SVG in its real colour is honest and replaceable per product through `imagen`.
- **Found photos of Pitalito and of the shoemaking trade** carry the "real pictures" floor; they are captioned and credited and never presented as the shop's products.
- **WhatsApp instead of a checkout**: matches how the shop already sells; no backend to maintain.
- **CSS masks with radial/conic gradients** cut the paper edges; flagged lines carry `taste-skill-ignore` with a reason.

## Compatibility

Evergreen browsers (dialog, `mask`, OKLCH, `:focus-visible`, `text-wrap`). Content stays visible without JS except the catalog list, which is rendered by JS.

## Rollout / rollback

Copy the folder to any static host. Rollback = previous folder / git commit.
