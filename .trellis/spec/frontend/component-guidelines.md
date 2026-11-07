# Component Guidelines

The page is built from "stationery pieces". Each section is one piece with a real edge,
never an outlined box.

| Section | Element | Piece | Edge |
|---|---|---|---|
| Hero `header.portada` | `.etiqueta` | shoebox label over the Pitalito park photo (brightness .55) | square |
| Catalog `#catalogo` | `.mando` (sticky) + `.hoja` | control column + printed sheet | `.hoja` scalloped top/bottom via `mask` |
| Valley band `.valle` | `.valle__nota` | label overlapping a full-bleed photo | square |
| How to order `#como-pedir` | `.tirilla` | receipt slip with dotted leaders | zigzag bottom via `mask` |
| Coupon `#cupon` | `form.cupon` | green coupon, dotted perforation | two notches via `mask` (`--corte` set by JS on phones) |
| Footer `.pie` | `.pie__marca` | wordmark at 11.4vw, places in accent-light | none |

## Patterns

- **Catalog rows** are `<li class="item">` with two buttons (`.item__dibujo`, `.item__nombre`, both `data-abrir="<id>"`) and a separate `<a class="item__pedir">`. Never nest a link inside a button.
- **Product picture**: `dibujo(p)` returns `<img>` when `p.imagen` is set, otherwise the inline SVG illustration chosen by `FORMA[p.tipo]`. A new `tipo` needs a `FORMA` mapping (falls back to `bajo`).
- **Pinned story**: `.mando` is `position: sticky` on desktop; its big heading shows `#catTexto` (category) + `#catTipo` (the group currently in view, updated by an IntersectionObserver in `vigilarGrupos()`). Unpinned under 1000px.
- **Dialog**: native `<dialog id="ficha">` with `showModal()`; close button + backdrop click.
- **Buttons**: one shape only, a flat rectangle with square corners (`.boton`). Secondary actions are underlined text links (`.enlace`).
- **WhatsApp links** are always built with `linkWA(texto)`; product messages with `msgProducto(p, talla)`.

## Adding a section

1. Write its claim first (what it proves to the buyer). No claim, no section.
2. Pick a stationery piece not used by its neighbour.
3. Use only the tokens and the five type steps; give it an entrance in the `grupos` list in `app.js`.
