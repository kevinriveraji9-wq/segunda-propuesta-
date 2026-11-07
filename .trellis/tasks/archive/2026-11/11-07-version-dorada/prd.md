# PRD: Versión dorada (negro, dorado y blanco)

## Context
The developer liked the professional redesign (task 11-07-rediseno-profesional) and asked
(translated): "make me a copy, but now with a black, gold and white colour palette".

## Requirements
1. Keep the current site (`index.html`) unchanged.
2. A second page `dorado.html` with the same content and behaviour, in black / gold / white.
3. Both pages share `js/productos.js` and `js/app.js`, so catalog edits apply to both.
4. Text contrast AA on every surface; WhatsApp green replaced by gold to respect the palette.

## Acceptance criteria
- [x] `index.html` untouched; `dorado.html` = index + `css/tema-dorado.css` + dark `theme-color`
- [x] Theme only overrides colour tokens and a few colour rules (no layout changes)
- [x] Gold on black 10.1:1, black on gold 10.1:1, dark gold text on white 6.9:1, light grey on black 10.5:1
- [x] Verified at 1440 and 375: hero, catalog, product dialog, footer, menu drawer; no horizontal scroll; console clean
