# Research: Nike (nike.com.co + nike.com US)

- **Query**: Study Nike online store patterns for a WhatsApp-ordering shoe catalog
- **Scope**: external
- **Date**: 2026-11-07
- **Method**: Browser tools were NOT available in this session. Pages were fetched as raw HTML
  with curl and reduced to text; the Colombian store (VTEX) facet/search JSON endpoints that the
  page itself calls were read. No screenshots. Visual notes marked *(general knowledge)* were not
  verified visually this session.
- **Pages read**: `nike.com.co/` (home), `nike.com.co/mujer/calzado` (listing, 353 results),
  `nike.com.co/flex-train-...-hv9981-006-tf6/p` (product), `nike.com/w/womens-shoes-5e1x6zy7ok`
  (US listing, 647 results). `nike.com/co` now points visitors to nike.com.co (operated by a local
  distributor; footer names the Colombian company and NIT).

## 1. Header / navigation
- Thin utility bar above the header: store finder, help, sign-up, events, returns.
- Main mega-menu with top-level tabs: Novedades, Hombre, Mujer, Niños, Deporte, Descuentos.
- Each gender column groups into "Comprar por deporte", "Calzado", "Ropa", "Accesorios", always
  ending with a "Todo calzado / Ver todo" link.
- A promo strip under the header: "pay in instalments with a local credit provider" + T&C link.
- Search field + icons for favourites and bag (standard Nike header).
- A "shoe finder" (buscador de calzado) quiz link appears in several menus.

## 2. Category taxonomy
- Gender first (Hombre / Mujer / Niños), then product family (Calzado / Ropa / Accesorios),
  then use (Casual, Correr, Entrenamiento y gym, Fútbol, Básquetbol, Sandalias, Tennis y pádel).
- Kids split **by age band**, not boy/girl: Bebé e infantil 0-3, Niños pequeños 3-7, Niños grandes 7-15.
- US store adds "Shop by color" collections and "Best Sellers / New Arrivals" under each gender.

## 3. Listing page
- Header shows category title + result count in parentheses (US: "(647)").
- **Filters (CO facets)**: Departamento, Sub-categoría (Tenis / Sandalias y chanclas / Guayos),
  Género, Deporte, Talla (31 values), Color (10 basic names), Marca, Promoción,
  "Comprar por descuento" (10-60 %), Precio (3 ranges).
- **Filters (US)**: Gender, Sale, Color, Shop by price (bands), Size, Brand, Collections, Sports,
  Shoe height, Closure type, Width. Long lists collapse with "+ More / - Less".
- Sort: "Ordenar por" (featured, newest, price high-low / low-high).
- **Card anatomy** (US text order): optional badge line (Just In / Best Seller / Coming Soon) →
  product name → sub-line describing audience + type ("Women's Road Running Shoes") → price.
  Sale cards show original price struck through plus % off. A colour count line ("N Colors")
  appears on many cards *(general knowledge)*; colour swatches show on hover on desktop.
- CO cards use the same pattern with "Lo más nuevo" and "Últimas unidades" labels from product
  clusters (57 "Lo más nuevo" tags on the first page).
- Grid: 3 columns desktop with filter sidebar that can be hidden ("Ocultar filtros"),
  2 columns on mobile; square image on light-grey ground *(general knowledge)*.

## 4. Product page
- Gallery: 6-19 images per product (from search JSON), vertical thumbnail rail on desktop,
  swipe carousel on mobile.
- Title, sub-line, price ($ 429.950 format with thousands dots).
- **Size grid** of buttons (5.5 ... 9.5), unavailable sizes greyed; "Guía de tallas" link
  right next to the size label.
- Shipping block asks for location ("Editar ubicación") to estimate delivery.
- "Envíos y devoluciones gratis" collapsible; "Ver datos del producto" opens full spec.
- Spec list: "Color que se muestra" + style code.
- Reviews section (load on demand); related/"you might also like" carousel below.

## 5. Trust & service
- Free shipping and free returns statement on product page; returns policy page linked in top bar.
- Payment: cards (Visa / Mastercard), PSE bank transfer and a buy-now-pay-later provider promoted
  in the top strip.
- Footer groups: Recursos (store finder, sign-up, events, blog), Ayuda (FAQ, order status,
  shipping, returns, payment options, contact), Acerca de, Promociones.
- No WhatsApp link found in the CO HTML.

## 6. Visual style *(mostly general knowledge, fonts not extracted)*
- Black / white / light grey (#f5f5f5-ish image ground); colour only from photography and a
  red/orange sale price.
- Heavy condensed uppercase display type for campaign headlines; neutral grotesk for UI.
- Pill-shaped (fully rounded) black buttons; size buttons are small rounded rectangles.
- Generous whitespace, edge-to-edge hero imagery, very little decoration, minimal motion
  (image swap on hover, smooth carousels).

## 7. Mobile patterns
- Hamburger opens a full-screen, drill-down menu (level by level with a back arrow).
- Filters move into a full-screen sheet opened by a "Filtrar" button; sort in the same sheet.
- 2-up product grid; sticky add-to-bag area on product page *(general knowledge)*.

## 8. What Calzado Leidy Carolina can adopt (ranked)
1. Gender-first menu (Dama / Caballero / Niño / Niña), each ending in "Ver todo".
2. Result count next to the listing title ("Dama (20)").
3. Card text order: badge → name → one-line type ("Tenis casual para dama") → price.
4. Size buttons as a grid with "Guía de tallas" link beside the label.
5. Colombian price format `$ 129.900` (thousands with dots).
6. Filter set: categoría, tipo, talla, color, rango de precio; sort by price.
7. Collapsible "Envíos y cambios" block on the detail view (text from `TIENDA` config).
8. Black/white restraint: let the product photos supply the colour.
