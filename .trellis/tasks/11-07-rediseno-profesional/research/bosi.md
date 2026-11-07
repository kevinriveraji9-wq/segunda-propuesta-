# Research: Bosi (bosi.com.co) storefront patterns

- **Query**: Study the home, the women's footwear listing (/bosi/mujer/calzado) and a product page (/tenis-para-mujer-cariot-zpfs/p) for patterns Calzado Leidy Carolina can adopt
- **Scope**: external
- **Date**: 2026-11-07
- **Method**: The browser tools were not available. I used curl to fetch the server-rendered HTML and read the VTEX IO `__RUNTIME__` block configuration, the theme CSS and CSS variables, the catalog API (category tree, facets, product search) and one product image. I took no screenshots.
- **Platform**: VTEX IO, built by the BlackSip agency. One site holds three brands: Bosi, Bambino (kids) and ADT Motowear.

## 1. Header / navigation
- **Top bar**: an optional promo image banner, which can be toggled and is currently off, plus a sticky desktop header.
- **Brand switcher**: the header changes per brand (Bosi, Bambino, ADT).
- **Bosi menu**: MUJER, HOMBRE, Niños (goes to Bambino), Bono regalo, OUTLET, Productos de línea.
- **Submenus** are columns: Calzado (Tenis, …), Bolsos and others, Accesorios.
- **Bambino menu**: Niña, Niño, Bebé, Nueva colección, Bono, Outlet.
- **Search**: autocomplete with suggestions, top searches and history.
- **Icons**: account, wishlist and minicart.
- **WhatsApp**: a floating chat button that offers two options, WhatsApp (to a national mobile number) or a contact form.
- **Other**: a back-to-top caret, a newsletter modal and a timed promotional modal ("buy X, get a gift").

## 2. Category taxonomy
- **Bosi Mujer > Calzado**: Botas, Botines, Tenis, Sandalias, Baletas, Tacones, Mocasines, Zapatos.
- **Bosi Hombre > Calzado**: Tenis, Botas, Zapato formal, Zapato casual, Mocasines, Sandalias.
- **Bambino**:
  - Split first by gender and age: niña junior, niño junior, niña infantil, niño infantil, Colegiales (school shoes for Niña and Niño), Bebé.
  - Each group has Calzado (baletas, botas, colegiales, tenis, mocasines, sandalias, zapatos), bags and accessories.
- **Takeaway**: kids are grouped as **Niña / Niño** and then by age band, with **school shoes ("colegiales")** as their own entry. This maps directly to Leidy's niño/niña categories.

## 3. Listing page (/bosi/mujer/calzado)
- **Layout**: breadcrumb, then a row with the order-by control on the right, then a filter sidebar plus the grid.
- **Filter sidebar on desktop**: a "Filtros / Ocultar filtros" toggle. Several groups can be open at once, there is clear-by-filter, and filters apply instantly without a page reload.
- **Filter UI on mobile**: filters open as a full page / drawer from the right.
- **Filters**:
  - Talla, which mixes US sizes (5–10) and EU sizes (35–40).
  - Color, shown as hex swatches (about 12).
  - Shoe type (Baletas, Botas, Botines, Mocasines, Sandalias, Tacones, Tenis, Zapatos).
  - Price ranges (only two buckets).
- **Paging**: 32 products per page with a "show more" button (and "load previous").
- **Grid** (from CSS):
  - Phone: 2 columns with a 6px gap.
  - Tablet (≥640px): 3 columns.
  - Desktop (≥1024px): auto-fit columns, minimum 250–300px each, which gives about 3 next to the sidebar or 4 when filters are hidden.
- **Product card**:
  - **Square 1:1 image** (source 1200×1200, white background) that swaps to the 2nd photo on hover.
  - Badge text driven by collections: "Nuevo", "Últimas tallas", "2do artículo 50% OFF", "Made in Italy", an anniversary tag and a separate "25% con Addi" image tag.
  - 21px colour thumbnail selector (up to 16) right on the card.
  - Name and wishlist heart.
  - Price block: struck list price plus the selling price, which turns brand red when discounted, and a "Precio online" label.
  - Black "Agregar al carrito" button. In search results the button reads "VER PRODUCTO".
- **Price level**: women's tennis shoes list at about $269.900 and are often shown at 40–50% off ($134.950–$161.940).

## 4. Product page
- **Gallery**:
  - Desktop: images with a thumbnail strip (thumbnails up to 80px tall) and click-to-zoom in a modal.
  - Mobile: carousel with arrows and hover zoom.
  - Choosing a colour swaps the images.
- **Header block**: breadcrumb, then name with wishlist and share, then price with discount and rating.
- **Helper line** above the selectors: "choose colour and size to see the final price".
- **Selectors**: colour swatches (21px) and size buttons. Unavailable options are disabled. Values are always visible.
- **Size guide**: a "Guía de tallas" link with an icon opens a modal with a category-specific image (separate desktop and mobile images, for example women's footwear).
- **Purchase**: quantity, "Agregar al carrito", the Addi widget and the MercadoPago installments widget.
- **Three policy rows with icons**, each with "Ver más" opening a modal:
  - National delivery
  - Retracto, cambios y devoluciones (right of withdrawal, exchanges and returns)
  - Payment methods
- **Accordions** (only one open at a time):
  - "Descripción", open by default: material, lining, sole and heel height in cm.
  - "Modo de uso": how to style the shoe.
- **Reviews**: a collapsed section.
- **Related**: tabs "Recomendados / Similares" plus "También te puede interesar" carousels (3 per view desktop, 2 tablet, 1 phone).
- **Product data**: 90-day warranty against manufacturing defects. Exchanges within 30 days in any store or by email, provided the shoe is unused and still has its tags.

## 5. Trust & service
- **"Promesa de valor" strip** with four icons, shown on the home and product pages:
  - Compra protegida
  - Múltiples medios de pago
  - Entrega a nivel nacional
  - Primer cambio gratis
- **Payments**: Visa, Mastercard, Amex, Diners, PSE, Nequi, Bancolombia button, cash ("Efectivo"), Addi, SisteCrédito and MercadoPago. Card installments of 3/6/12/24/36.
- **Footer**:
  - Payment logos and carrier logos (Coordinadora, 99minutos) plus a "sitio seguro" seal.
  - Toll-free line, a Bogotá number, address, email and NIT (tax ID).
  - "Encuentra tu tienda" store locator, order tracking, FAQ, glossary.
  - Right-of-withdrawal page and a link to the consumer authority (SIC).
- **Pickup**: in-store pickup strings are present ("Recoger en una tienda"). Live shopping and gift cards are also offered.

## 6. Visual style
- **Colours** (from CSS variables):
  - Primary charcoal **#383838**.
  - Secondary deep red **#AD0000**, used for sale prices and alerts.
  - Greys #545454 and #6c6c70, light panel #f2f4f5, pale pink alert background #ffe6e6.
  - Buttons are solid black with white text.
- **Type**: Mukta (sans) for everything. Lato appears inside descriptions, and serif "Ovo" in landing pages.
- **Shape**: `--general-border-radius: 0` and a 0px button radius. Borders are 1px #ADADAD.
- **Photography**: one side-profile shoe centred on pure white in a square frame, with lifestyle banners on the home page. The overall look is more retail and commercial than Vélez: more badges, more red and more promos.

## 7. Mobile
- 2-column grid.
- Filter page/drawer from the right.
- Gallery carousel.
- The value-promise strip becomes a 1-per-view slider.
- Footer link groups collapse into accordions.
- Floating WhatsApp/chat button.
- Sticky header.

## 8. What a WhatsApp-only store could adopt (ranked)
1. **A 4-icon promise strip** under the hero and on every product page, using Leidy's real promises (for example: envío a todo Colombia, pago contraentrega / Nequi, cambio de talla, tienda física en Pitalito).
2. **Three policy rows on the product page** (Envíos · Cambios · Formas de pago), each opening a small modal or details element. This needs no checkout.
3. **A size-guide modal per category** (dama / caballero / niño / niña) as a simple table or image, linked next to the size buttons.
4. **Kids taxonomy**: Niña / Niño, with optional "Colegiales" and "Bebé" chips. Leidy's 4 categories match this pattern.
5. **Square 1:1 white-background photos with a hover second image.** Square photos are easier to shoot consistently with a phone than 2:3.
6. **Badges driven by data**: Nuevo, Últimas tallas, ‑X%. Show the struck "before" price and a red "now" price only when there is a real discount.
7. **Floating WhatsApp button** with a short menu (Pedir / Preguntar talla / Cambios).
8. **Product page accordions** "Descripción" (material, suela, altura de tacón en cm) and "Cómo combinarlo".
9. **Footer basics that signal legitimacy**: address, phone, opening hours, payment logos, a link to the right-of-withdrawal/SIC page and social links.

## Caveats
- Desktop column count is from CSS auto-fit, so the real count depends on viewport width.
- The home banners' text is image-based and was not readable without a browser.
- Promo modal dates in the configuration (May 2026) were stale. I did not check whether any promo was live.
