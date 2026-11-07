# Research: Skechers (skechers.com, US)

- **Query**: Study Skechers online store patterns for a WhatsApp-ordering shoe catalog
- **Scope**: external
- **Date**: 2026-11-07
- **Method**: Browser tools NOT available; raw HTML fetched with curl and reduced to text.
  No screenshots. The Colombian site linked from the country selector (`co.skechers.com`) and
  `skechers.com.co` did not resolve/respond, so the **US store** was used.
- **Pages read**: home, `/women/shoes/` (1,004 results), product
  `/britto-dlites---britto-bloom/150838_WMLT.html`.

## 1. Header / navigation
- **Rotating promo bar** at top (member discount, "details" link opening the fine print), plus
  a second line of stacked promo tiles (3 offers, each with "Shop | Details").
- Utility links: Orders & Returns, Stores, Support, Wishlist, "Set my store", login.
- Mega-menu: Women / Men / Kids / Clothing / Sale. Inside Women: featured links
  (Slip-ins, Wide Fit, Mary Jane, Best Sellers, New Arrivals, Gift Guide, Sale) then columns:
  **Shoes by type**, **Shop by activity**, **Comfort technologies**, Collections, Clothing.
- Search with "Featured products" suggestions and recent searches.

## 2. Category taxonomy
- Women shoe types: Wide fit, Slip-ins, Boots, Slippers, Casual sneakers, Athletic sneakers,
  Work & safety, Flats, Wedges, Canvas, Sandals, Waterproof, Boat, Lace up, Slip-ons.
- Activity: Walking, Running, Pickleball, Golf, Trail, Training, Tennis, Basketball.
- **Kids split Girls / Boys**, each with the same type list (sneakers, sandals, slip-ons,
  light-up, lace-ups, boots) and **age groups with size ranges in the label**
  ("Toddlers (sizes 5-10)", "Little kids (10.5-3)", "Big kids (3.5-7)").
- Kids menu includes a "Printable kids' size chart" link.

## 3. Listing page
- Row of **round "shop by style" shortcut tiles** above the grid (Slip-ins, Mary Jane, Walking,
  Boots, Casual, Athletic, Cozy, Canvas, Slippers, Sandals, Wide fit, Best sellers, Shop all).
- Toolbar: Filter button, "Sort by" (Newest, Price low-high, Price high-low, Top sellers,
  Percent off), quick chips Size / Width / Color, result count ("1,004 Results"),
  store-pickup toggle.
- **Filters**: Category (type), Size (4-17), Width (with counts), Color (12 swatches),
  Occasion (Athletic, Casual, Dress, Fashion, Work... with counts), Comfort technologies,
  Features (Machine washable, Vegan, Slip resistant, Waterproof...), Style, Price bands
  ($0-19.99, 20-49.99, 50-99.99, 100-149.99). Each option shows its **count in parentheses**.
- **Card anatomy**: image, colour swatches row (1-3 swatches in the tiles seen), optional
  label ("Exclusive"), name (collection: model - colour name), audience line ("Women's"),
  price. Grid paginated with **"Load more"** rather than page numbers.

## 4. Product page
- Rating summary (stars + count) and wishlist toggle near the title; price; "pay in
  instalments" line (two BNPL providers referenced).
- Gallery with "View 360°" and an AR "Try it on" QR prompt; "Shop the look".
- Selectors in order: **Color** (name + style code), **Width**, **Size** with a
  "Don't see your size?" link; size chart link.
- Out-of-stock sizes trigger "Notify me" (email form) instead of hiding.
- Fulfilment choice: Ship it / Free pickup in store, "check other stores' availability".
- Content blocks: collection story, comfort technology explainer, **Key features** and
  **Design details** as bullet lists (heel height in inches), reviews snapshot, similar items.

## 5. Trust & service
- Free shipping tied to free membership; free returns for members.
- Store locator + "set my store"; in-store pickup within hours; chat widget; BNPL.
- Footer: Shop links, Support (FAQ, orders & returns, return policy, payment types, contact),
  Company, newsletter with discount incentive.

## 6. Visual style
- UI font: **Mulish** (rounded geometric sans) from inline CSS; headings bold, often uppercase.
- White ground, navy/blue brand accent, colourful promo tiles; product shots on white.
- Small radius (about 5px) on controls; round category tiles. Busy, promotion-heavy
  compared to Nike/Clarks *(visual judgement general knowledge)*.

## 7. Mobile patterns
- Hamburger drill-down menu with "Back" buttons (seen in markup: Menu / Back / Close).
- Filter as a full-screen panel with "Clear all"; horizontal scroll of style tiles.

## 8. What Calzado Leidy Carolina can adopt (ranked)
1. **Round "comprar por tipo" shortcut tiles** above the grid (Tenis, Sandalias, Botas,
   Baletas, Escolar...).
2. Counts next to each filter option ("Sandalias (6)").
3. Kids age groups **with size range in the label** ("Niña pequeña (tallas 22-27)").
4. Bullet "Características" list on the detail view (material, suela, tacón en cm).
5. "¿No ves tu talla? Pregúntanos por WhatsApp" link in place of email "Notify me".
6. "Cargar más" button instead of pagination for 20 items per category.
7. Promo bar with a "Ver condiciones" link (content from `TIENDA` config).
