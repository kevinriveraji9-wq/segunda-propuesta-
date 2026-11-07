# Research: Adidas (adidas.co)

- **Query**: Study Adidas online store patterns for a WhatsApp-ordering shoe catalog
- **Scope**: external
- **Date**: 2026-11-07
- **Status**: **BLOCKED.** `https://www.adidas.co/` returned HTTP 403 (bot protection) to a plain
  fetch. Browser tools were not available in this session, and getting around the bot check was
  not attempted (by design). **Nothing below was observed this session.** It is general knowledge
  of the adidas.co / adidas.com store (a shared global platform) and must be treated as
  unverified. Re-check with a real browser before relying on details.

## 1. Header / navigation *(unverified)*
- Rotating announcement bar at the very top (free shipping / returns / member offers).
- Top tabs: Hombre, Mujer, Niños, Deportes, Marcas (Originals, Sportswear, Performance),
  Ofertas/Outlet. Mega-menu with columns: Destacados, Calzado, Ropa, Accesorios, Deportes.
- Search box with suggestions; icons for account, favourites (heart), bag.

## 2. Category taxonomy *(unverified)*
- Gender → Calzado → shoe type (Tenis casuales, Running, Fútbol/guayos, Sandalias y chanclas,
  Training, Outdoor) and also "by collection" (Samba, Gazelle, Superstar, Ultraboost).
- Kids split by age (Bebés 0-4, Niños pequeños 4-8, Niños grandes 8-16) and then by
  niño/niña.

## 3. Listing page *(unverified)*
- Title + count of items; a "Filtrar y ordenar" button opens a side panel (desktop and mobile).
- Filters: Género, Tipo de producto, Deporte, Talla, Color (swatches), Precio, Marca/colección,
  Material, Descuento. Sort: Recomendados, Nuevos, Precio bajo-alto, Precio alto-bajo.
- Card: square image on light-grey ground, small badge corner ("Nuevo", "-30 %"), heart icon,
  price above or below name, name, category line ("Originals"), and "N colores" count;
  hovering swaps to other colourways.
- Grid: 4 columns desktop, 2 mobile; very tight gutters (near zero), no card borders.

## 4. Product page *(unverified)*
- Large multi-image grid (2 columns of images on desktop), carousel on mobile.
- Colour thumbnails ("N colores disponibles"), size grid, "Guía de tallas" link,
  "Talla única / ajuste" fit hint, sticky add-to-bag on mobile.
- Accordions: Descripción, Detalles, Envíos y devoluciones, Reseñas (stars + count).
- "Completa el look" and "También te puede gustar" carousels.

## 5. Trust & service *(unverified)*
- Free shipping threshold and free returns window in the announcement bar.
- Membership programme pitch; payment logos in footer; customer service and FAQs in footer.

## 6. Visual style *(unverified)*
- Black and white, square corners (radius 0) on buttons and cards, black rectangular primary
  button with an arrow icon, bold uppercase condensed headings, the three-stripe motif as
  graphic texture. Dense, editorial campaign photography.

## 7. Mobile patterns *(unverified)*
- Full-screen drill-down menu; sticky "Filtrar y ordenar" button; 2-up grid; bottom sheet for
  sizes on product page.

## 8. What Calzado Leidy Carolina can adopt (ranked, pattern-level only)
1. One "Filtrar y ordenar" button that opens a panel on mobile (same component on desktop).
2. "N colores" count on the card instead of many swatches.
3. Small corner badge ("Nuevo", "Oferta") on the image, not over the name.
4. Accordions on the product view (Descripción / Tallas / Envíos y cambios).
5. Square corners + black primary button as one consistent "serious retail" option.

## Caveats / Not Found
- No page content, filter list, prices or class names were captured. Treat this file as a
  placeholder and give more weight to the four brands that were actually read.

## Update 2026-11-07: observed in the built-in browser (adidas.co/calzado-mujer), confidence high
- Loaded after the bot check; listing "ZAPATOS DE MUJER" in condensed uppercase with the result count as a superscript next to the title.
- Breadcrumb Inicio / Calzado / Mujer above the title.
- A horizontal carousel of photo tiles for sub-collections, then a row of text pills by type/line (Tenis, Originals, Sportswear, Calzado de plataforma, Running...).
- One "Filtrar y ordenar" button (opens a drawer) even on desktop, with an active-filter counter badge.
- Card text order: wishlist heart on the image, **price first**, name, gender + line, "N colores", then small tags "Envío gratis · Nuevo".
- Top utility bar (store finder, help, orders and returns) plus a rotating announcement about instalment payments.
- Square cards, 4 per row on desktop, light-grey photo backgrounds, black/white palette, brand grotesk font.
