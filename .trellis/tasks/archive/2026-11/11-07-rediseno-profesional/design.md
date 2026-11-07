# Design: Rediseño profesional

Sources: `research/resumen-globales.md`, `research/resumen-colombia.md` and the per-brand files.
This design **replaces** the "page is the object" / kraft shoebox direction of task
`11-07-catalogo-web` (the developer rejected it as not professional).

## Visual system (restrained retail, research pattern 10)

- Ground white `#fff`; secondary surface light grey (`oklch(0.965 0 0)`) for product tiles and panels; ink near-black.
- Primary buttons **black, square corners** (no radius anywhere except the round floating WhatsApp button and colour swatches).
- One brand accent (deep wine, `oklch(0.42 0.14 20)`) reserved for badges ("Nuevo") and active states; WhatsApp green only on WhatsApp actions.
- Type: **Archivo** variable (Google Fonts, `wdth` 62–125, `wght` 400–800). Condensed uppercase (`font-stretch: 75%`, 800) for display and section titles; normal width for UI and text. One family, two widths.
- Product pictures: square tiles on the light-grey surface, illustration centred (until real photos replace them via `imagen`).
- Hairline separators are allowed in this direction where retail UIs use them (filter groups, footer columns, accordions): 1px `oklch(0.9 0 0)`.
- Motion: minimal. Card hover lifts the illustration; drawers/dialogs slide; `prefers-reduced-motion` respected.

## Page structure

1. **Announcement bar** (pattern 6): one line from `TIENDA.anuncio`.
2. **Header** (pattern 1): wordmark, nav Dama / Caballero / Niño / Niña (each with type sub-links on hover/focus, desktop) + "Nuevos", search field, WhatsApp button. Mobile: menu button opens a drawer with drill-down categories; search icon expands the field. Sticky.
3. **Hero, no photography**: left headline + subtext + two buttons; right a 2×2 "Comprar por categoría" grid of tiles (illustration on grey + category name + model count).
4. **Service strip** (pattern 5): 4 items from `TIENDA.servicios` (icon-less: bold title + one line).
5. **Catalog** (patterns 4, 8, 3):
   - Toolbar: category title + "N modelos" + sort select (Relevancia, Precio menor a mayor, Precio mayor a menor, Nuevos primero) + "Filtros" button (mobile).
   - Type shortcut pills above the grid.
   - Desktop left sidebar filters: Categoría, Tipo (with counts), Talla (size button grid 17–44 showing only sizes present in the category), Precio (bands from data), "Limpiar filtros".
   - Mobile: filters in a full-height sheet with "Limpiar" and "Ver N resultados".
   - Grid 4 / 3 / 2 columns. Card: square tile, badge, quick WhatsApp icon button on the tile, name, "Tipo · N colores", price `$ 129.900`, colour dots.
   - Empty state: message + WhatsApp fallback "¿No ves tu talla? Pregúntanos".
6. **Product view** (pattern 7, 2): a dialog laid out like a product page: breadcrumb, large tile, name, ref, price, colour buttons with names (`COLOR_NOMBRES` map in app.js; unknown hex → "Color N"), size grid limited to the model's range, "Guía de tallas" link, "Pedir por WhatsApp" (requires a size: if none is chosen, show "Elige tu talla" and focus the grid), service bullets, accordion "Envíos, cambios y pagos", "También te puede gustar" (4 of the same category/type).
7. **Size guide dialog**: approximate table talla ↔ cm of foot length (computed, labelled "aproximada") + "Cómo medir el pie en casa" (3 steps), pattern 2/9.
8. **Pedido rápido** (adapted "notify me"): heading "¿No encuentras tu talla?" + form nombre / modelo o referencia / talla / comentario → WhatsApp. Same contract as before (talla 15–46).
9. **Footer**: columns Comprar (categories), Ayuda (cómo pedir, guía de tallas, envíos y cambios), Tienda (ciudad, dirección y horario from `TIENDA`, shown only if filled), Redes. Legal line.
10. **Floating WhatsApp button**.

## Data contract changes (backward compatible)

`TIENDA` gains optional editable fields (empty or neutral text by default, never invented specifics):

```js
anuncio: "Pide por WhatsApp y te confirmamos talla y color",
direccion: "",            // shown only if set
horario: "",              // shown only if set
servicios: [ { titulo, texto } x4 ],   // neutral wording, no thresholds or prices
politicas: { envios, cambios, pagos }  // neutral wording, "consulta por WhatsApp"
```

`PRODUCTOS` unchanged. `CATEGORIAS` unchanged.

## Removed

`assets/*.jpg`, `assets/credits.json`, valley band, receipt slip, kraft tokens, stationery masks, museum plates, photo credits.

## Tradeoffs

- The design-taste-frontend house rules (no card grids, no hairlines) conflict with the
  retail conventions the developer asked for; retail conventions win for this task. Its
  lint/inspector remain advisory; impeccable polish rules (contrast, focus, touch targets,
  reduced motion, no gradients/glass/emoji) remain mandatory.
- No hero photography: real store photos will come from the client; illustrations on uniform grey tiles keep the grid consistent meanwhile.

## Additions from the Colombian stores (Vélez, Bosi, Bata, Crocs)

- **Two WhatsApp intents** (Vélez): the floating button opens a small menu: "Comprar con asesora" and "Servicio al cliente", each with its own prefilled message. Product view adds the link "¿No encuentras tu talla? Escríbenos".
- **Optional sale price** (Bosi, Bata, Crocs, Adidas): `precioAntes` (integer, optional) in a product. When set and greater than `precio`, show the crossed old price, the new price in the accent colour and a "-X%" badge. No product gets it by default (no invented discounts); one sample in `productos.js` is NOT added.
- **Price format** `$ 129.900` (space after the sign, dots for thousands).
- **Type navigation** starts with "Todo" and "Nuevos" (Crocs), then the types of the category. School shoes stay "Escolar".
- **Trust strip copy** must stay neutral until confirmed: "Envíos a todo Colombia: consulta costo y tiempo", "Cambios de talla: pregunta las condiciones", "Medios de pago: te contamos las opciones por WhatsApp", "Atención por WhatsApp". All four live in `TIENDA.servicios`.
- **Footer legitimacy** (Bosi): address, phone/WhatsApp, hours and NIT rows rendered only when the `TIENDA` fields are filled.
- **Kids**: size guide shows an approximate age per size band for kids sizes.
- **Announcement bar** rotates up to 3 messages from `TIENDA.anuncios` (array; a single `anuncio` string is also accepted).
