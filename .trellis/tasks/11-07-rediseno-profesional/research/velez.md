# Research: Vélez (velez.com.co) storefront patterns

- **Query**: Study the home, the women's shoe listing (/mujer/zapatos) and a shoe product page (/tenis-1041639-09/p) for patterns Calzado Leidy Carolina can adopt
- **Scope**: external
- **Date**: 2026-11-07
- **Method**: The browser tools were not available in this session. I fetched the server-rendered HTML with curl and read the VTEX IO block configuration (the JSON embedded in the page), the theme CSS, the public catalog API (category tree, facets, product search) and one product image. I took no screenshots. Visual notes come from the CSS and the product photos.
- **Platform**: VTEX IO with a custom theme (`cuerosvelezco.storefront-components`).

## 1. Header / navigation
- **Announcement bar**: three rotating one-line messages on a white bar with black text. Each has a short promo and a bold link word, for example "% off tennis shoes | Comprar", "a bank card cashback offer | T&C", and "pay with Addi".
- **Mega-menu**: the top level is LO NUEVO, MUJER, HOMBRE, FLY UP (sub-brand), OUTLET, REGALOS, VZ ARTISAN LAB and MUNDO VÉLEZ.
  - MUJER and HOMBRE use columns: Lo nuevo, Zapatos, Bolsos, Ropa, Accesorios, Cinturones, Billeteras, Travel. Each column has a "VER TODO" link.
  - Women's Zapatos column: Tenis, Botas y botines, Mocasines, Sandalias, Con cordones, Tacones.
- **Utility row**: a "Enviar a: Colombia" country selector, a login link, wishlist, reviews and the bag icon.
- **Search**: a field with a left icon and a placeholder question. On focus it opens autocomplete with top searches, suggested terms, history and suggested products.
- **WhatsApp**: a header panel with two choices, "Compra con un asesor" (buy with an advisor) and "Servicio al cliente" (customer service). Each opens wa.me with its own prefilled message.
- **Home audience switch**: MUJER and HOMBRE quick links on the home page swap the hero and sections between women's and men's content.

## 2. Category taxonomy
- **Departments**: Mujer, Hombre, plus the sub-brand Flyup, which has its own Mujer/Hombre/Unisex.
- **Mujer > Zapatos (catalog)**: Botas y botines, Con cordones, Mocasines, Sandalias, Baletas, Suecos, Tacones, Tenis.
- **Hombre > Zapatos**: Botas, Con cordones, Mocasines, Sandalias, Tenis.
- **Cross-cutting collections**: Lo nuevo, Más vendidos, Iconos, Outlet ("hasta 50%" per category) and Regalos para ella / para él.
- **No kids category.**

## 3. Listing page (/mujer/zapatos)
- **Filters**: Talla (34–41), Color (about 15 named colours), shoe type (Baletas, Botas, Botines, Con cordones, Mocasines, Sandalias, Tacones, Tenis) and price ranges (under $100.000, 100–200k, 200–300k, over 300k). Facet counts are shown.
- **Filter UI on desktop**: filter tabs/chips ("pestañas de filtros") plus quick-filter tags.
- **Filter UI on mobile**: a filter modal, separate mobile filter tabs and a mobile breadcrumb. The filter navigator starts collapsed, opens one group at a time and has "clear all".
- **Sort**: order-by is available. Default is newest first. The best-discount and A–Z/Z–A options are hidden.
- **Paging**: 32 products per page with infinite scroll and a "load more" button.
- **Grid switcher (2/3/4 columns)**:
  - "four" (default): 4 columns desktop, 2 tablet, 2 phone
  - "three": 3 / 2 / 1
  - "two": 2 / 1 / 1
- **Editorial modules** can be inserted into the grid.
- **Product card**:
  - Portrait image. Source photos are 2:3 (1564×2344).
  - Flags, at most 4. Examples: "ÍCONO", "Coming soon", plus disabled rules such as "Exclusivo online", "SOLD OUT", "Edición limitada", "Pruébatelo".
  - Name.
  - List price and selling price, with a savings badge "‑X% DTO." on the image and/or next to the price.
  - Row of 14px colour dots. The selected dot is underlined.
  - "Quick add" overlay.
- **Price level**: women's tennis shoes cost about $379.900–$449.900.

## 4. Product page (tenis-1041639-09)
- **Top of page**: breadcrumb (Inicio > Mujer > …) and the reference number shown as "Ref.".
- **Gallery**: "editorial" layout of large stacked images on desktop and an image slider on mobile.
- **Buy box**:
  - Name with a wishlist heart.
  - Price: list, selling and "‑X%".
  - Review count.
  - Colour selector (other colours shown as swatches).
  - Size selector limited to "Talla".
  - Size guide modal, with a table per category.
  - Sizebay fit recommender.
  - A "¿No encuentras tu talla?" link that opens WhatsApp with a prefilled message.
  - Buttons: "Comprar ahora" (one-click) and "Agregar a la bolsa".
- **Services block**:
  - "Calcula tu envío" (shipping simulator modal).
  - Store availability.
  - A link to the cambios/devoluciones FAQ.
  - Personal shopper appointment ("cita en tienda").
  - Reviews.
- **Below the fold**:
  - "El alma en los detalles": three close-up cards, each an image with a short title and one line of text.
  - A brand story block.
  - "Completa el look" (related products).
  - Reviews.
- **Other states**: when sold out, the page shows "Avísame" (notify me). Pre-order and limited-edition products show extra notices. Some models get virtual try-on.

## 5. Trust & service
- **Free shipping**: the minicart shows a progress bar toward free shipping from **$600.000**.
- **Payments seen**: Visa, Mastercard, Amex, Diners, PSE, Nequi, Bancolombia, Addi, SisteCrédito, MercadoPago and the brand's own credit card ("Leather Lovers"). Installments go up to 48.
- **Contact**: WhatsApp (advisor and service options), a phone line and an email address.
- **Physical presence**: store availability and personal shopper appointments. Some products are sold in named stores only.
- **Promotions**: a first-purchase discount pop-up form (email, name, gender) and bank promotions.
- **Legal**: T&C links next to every promotion.

## 6. Visual style
- **Palette**: almost all black, white and greys (#000, #fff, #1a1a1a, #404040, #707070, #f2f2f2). There is no brand accent colour; product photos carry the colour.
- **Type**: Inter (sans) for the interface. Baskerville (serif) appears in editorial and story headings. Nav and section labels are uppercase and short ("DESCUBRE", "VER TODO").
- **Shape**: corner radius is overwhelmingly 0 (square buttons, square cards). Pills and circles are used only for colour dots and icons.
- **Photography**:
  - Products: lateral profile on a pure white background, sitting in the lower half of a tall 2:3 frame, which leaves a lot of air above.
  - Campaign: full-bleed video or lifestyle hero with a centred uppercase title and one CTA.
- **Whitespace**: generous. The home page reads as a sequence of full-width editorial sections (hero, icons collection, season, category tiles, brand world) with no dense product walls.
- **SEO**: a long text block at the bottom of the home page.

## 7. Mobile
- The grid defaults to 2 columns.
- Hero images and posters have separate mobile versions.
- Filter tabs and a breadcrumb are mobile-specific.
- The product page has a sticky buy box ("pdp-sticky") and a sticky try-on bar.
- The WhatsApp panel is available everywhere.

## 8. What a WhatsApp-only store could adopt (ranked)
1. **Size-aware WhatsApp CTAs.** A main "Pedir por WhatsApp" button plus a secondary "¿No encuentras tu talla? Escríbenos" link, each with its own prefilled message containing the model, reference, colour and size.
2. **Two WhatsApp intents**, "Comprar con asesora" and "Servicio / cambios", as two buttons (or one number with two prefilled texts).
3. **Monochrome, square UI with white-background profile photos.** Consistent framing and lots of air make 80 modest models look curated. Use one photo ratio for every shoe.
4. **Short reference code on cards and the product page** ("Ref. 1234") so customers can quote it on WhatsApp.
5. **Card anatomy**: image, at most 1–2 flags (Nuevo / ‑X%), name, before/after price and colour dots.
6. **Listing chips for the shoe type inside each category**, a size filter and a simple sort (Nuevos / Precio ↑ / Precio ↓) with a product count.
7. **Rotating announcement bar** with 2–3 service messages (shipping, cambios, pago contraentrega) instead of promos.
8. **"Detalles" block on the product page**: 2–3 close-up photos with one-line captions (sole, material, comfort).
9. **"Completa el look" / "También te puede gustar"** using the same category and price band.

## Caveats
- I saw no live rendering. Pixel sizes, spacing and the actual hero imagery were inferred from CSS and configuration, not seen.
- Block configuration can contain disabled or seasonal items. The ones listed as enabled were checked against their `enabled` flag where one exists.
