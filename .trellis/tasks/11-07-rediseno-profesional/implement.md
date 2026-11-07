# Implement plan: Rediseño profesional

Read first: `prd.md`, `design.md`, `research/resumen-globales.md`, `research/resumen-colombia.md`, `.trellis/spec/frontend/*`.

## Ordered checklist

- [x] 1. Delete `assets/` (5 photos + credits.json) and every reference to them (hero photo, valley band, museum plates, footer credits).
- [x] 2. `js/productos.js`: extend `TIENDA` with `anuncios`, `direccion`, `telefono`, `horario`, `nit`, `servicios` (4 neutral items), `politicas` {envios, cambios, pagos} (neutral text). Keep all 80 products unchanged. Document optional `precioAntes` in the header comment.
- [x] 3. `index.html`: rewrite to the page structure in design.md (announcement bar, sticky header with nav + search + WhatsApp, hero with 2x2 category tiles, service strip, catalog with sidebar + toolbar + type pills + grid, quick-order form "¿No encuentras tu talla?", footer, floating WhatsApp menu, product dialog, size-guide dialog, mobile filters sheet, mobile menu drawer).
- [x] 4. `css/estilos.css`: rewrite to the visual system in design.md (white, light-grey tiles, black square buttons, wine accent for badges/sale, WhatsApp green only on WhatsApp actions, Archivo font with condensed display, 4/3/2 grid, hairline separators allowed in filters/footer/accordions). Breakpoints 1100 / 760.
- [x] 5. `js/app.js`: keep `estado` + render pattern, add `orden`, `tallasFiltro` (single size), `precio` band; sort; filter counts; card renderer; product view (colour buttons with `COLOR_NOMBRES`, size grid limited to range, size required before WhatsApp, related products); size guide (cm = approximate table, kids age bands); mobile sheet + drawer with focus handling and Escape; floating WhatsApp menu with two intents; announcement rotation (paused under reduced motion); quick-order form (same contract: nombre, modelo, talla 15-46, nota); hero tiles and footer filled from data/TIENDA; price format `$ 129.900`; optional `precioAntes`.
- [x] 6. Browser verification at 1440 / 768 / 390: no horizontal scroll, console clean, all filters, dialog, size required, WhatsApp texts.
- [x] 7. `trellis-check` review against PRD acceptance criteria.
- [x] 8. Update `.trellis/spec/frontend/*` (new direction replaces "page is the object").
- [x] 9. Commit.

## Validation

```bash
python -m http.server 5173
node ~/.claude/skills/design-taste-frontend/scripts/lint.mjs index.html css js   # advisory now
```
Manual browser checks as listed in step 6.

## Rollback

`git checkout a2c0b7e -- index.html css js assets` restores the previous direction.
