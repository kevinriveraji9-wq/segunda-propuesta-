# Component Guidelines

Page regions, top to bottom:

| Region | Pattern (source in the store study) |
|---|---|
| Announcement bar | rotates `TIENDA.anuncios` every 5 s, pause button, no rotation under reduced motion (Vélez, Adidas) |
| Sticky header | wordmark, nav Dama / Caballero / Niño / Niña (hover/focus panel with "Ver todo" + types) + Nuevos, search, WhatsApp. Below 1100px: drawer with drill-down and "Volver"; below 760px: search icon expands the field (all brands) |
| Hero | headline + text built from data + 2 buttons; 2x2 "Comprar por categoría" tiles with illustration and model count. No photography |
| Service strip | 4 items from `TIENDA.servicios` (Bosi, Clarks) |
| Catalog | title + count (`aria-live`), type pills (Todo, Nuevos, types; Crocs/Adidas), sort select, sticky sidebar filters on desktop, same filters in a `<dialog>` sheet below 1100px with "Limpiar" and "Ver N resultados", grid 4/3/2 |
| Card | square grey tile, badge Nuevo or -X%, WhatsApp icon button on the tile, stretched button over the card opens the product, name, "Tipo · N colores", price `$ 129.900`, colour dots (Nike, Clarks, Bosi) |
| Empty state | "¿No ves tu talla? Pregúntanos" WhatsApp fallback + Limpiar (Vélez) |
| Help | "Cómo pedir" 3 steps + accordion "Envíos, cambios y pagos" from `TIENDA.politicas` |
| Quick order | "¿No encuentras tu talla?" form `#formPedido` with visible labels |
| Footer | brand, Comprar, Ayuda, Tienda (city + WhatsApp; address/phone/hours/NIT only when filled), Redes |
| Floating WhatsApp | round button opening a menu: "Comprar con asesora" / "Servicio al cliente" (Vélez) |
| Product dialog | breadcrumb, tile, name, ref, price, colour buttons named via `COLOR_NOMBRES` (repaint the illustration), size grid limited to the model's range, "Guía de tallas", "Pedir por WhatsApp" (size required), "¿No encuentras tu talla? Escríbenos", service points, accordions, 4 related products |
| Size guide dialog | approximate foot-length table (adults 35-44, kids 17-38 with approximate age) + how to measure at home |

## Rules

- Never nest a link inside a button; the card uses a stretched `<button>` plus a separate WhatsApp `<a>`.
- Headings: page h1 in hero, h2 per region, h3 card titles; cards nested under an h3 use h4.
- Overlays use native `<dialog>` (product, size guide, filters sheet, menu drawer); they stack, Escape closes the top one and focus returns to the opener.
- WhatsApp links are built only with `linkWA()` and the `msg*` helpers.
