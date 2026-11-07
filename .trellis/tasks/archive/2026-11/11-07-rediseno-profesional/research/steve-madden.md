# Research: Steve Madden (stevemadden.com)

- **Query**: Study Steve Madden online store patterns for a WhatsApp-ordering shoe catalog
- **Scope**: external
- **Date**: 2026-11-07
- **Method**: Browser tools NOT available. The **home page** HTML (Shopify theme, 1.2 MB) was
  fetched once with curl and reduced to text; it contains the full mega-menu, home modules and
  the product-form/quick-view templates. Subsequent requests (`/collections/womens-shoes` and its
  JSON) returned **403 "verify your connection"** (bot check); not bypassed. So the listing and
  product page are described from the templates embedded in the home page plus general
  knowledge (marked).

## 1. Header / navigation
- **Stacked announcement messages** (rotating): price drops, sale code, fast delivery partner,
  free shipping over a threshold for loyalty members, each with "Shop now / Learn more".
- Gender switch "WOMEN | MEN" at the top of the menu (two separate menu trees).
- Mega-menu tabs: Gifts, Women's shoes, Men's shoes, Kids' shoes, Handbags, Accessories,
  Clothing, Denim, Wedding, Trends, Shops, Sale. Menus include promo images.
- Icons: account/loyalty, search input, bag with count. Mini cart is a slide-out drawer.

## 2. Category taxonomy
- Women's shoes **by type**: Boots, Booties, Heels, Loafers & flats, Sneakers, Sandals, Wedges,
  Strappy sandals & heels, Wide-calf boots, Slip-ons & slides, Platforms, Mules.
- Strong **merchandising groupings** besides type: New arrivals, Best sellers, "Make it a
  match" (shoe + bag), "Mini me" (matching adult/kid styles), Bundles, The It list.
- **Occasion/trend shops**: Wedding (bridal, bridesmaids, guests, flower girl, mother of
  bride), Trends (ballet, kitten heels, animal print, Mary Janes...), "Desk to dinner",
  "Night out", "City walking".
- Gifts menu split **by price** ("under $50 / $100 / $200") and by recipient.
- Kids: Shop all, New, Best sellers, Mini me, Sporty, Special occasion, Flower girl.

## 3. Listing page *(templates + general knowledge)*
- Card image ratio **4:5 portrait** (`aspect-[4/5]` used 6x; one square variant).
- Card: image (second image on hover), badge (New / Best seller / sale %), name, price with
  "orig." struck and "now" price + discount %, colour swatches (rounded-full) with
  "+N" overflow. Quick-add / quick view shows **Color – name** and **Size –** options.
- Filters *(general knowledge)*: Category, Size, Color, Price, Heel height, Material, Width;
  sort Featured / Newest / Best selling / Price. 4 columns desktop, 2 mobile.

## 4. Product page (from embedded product-form template)
- "Color – {name}" label above swatches; "Size –" radio group (keyboard arrow navigation,
  one tab stop), optional filter to hide half sizes, **Standard / Wide** toggle.
- **Low-stock message** "Limited stock remaining" per size; **back-in-stock email**
  subscription for sold-out sizes; pre-order sizes show an **estimated ship date**.
- BNPL line "4 interest-free payments of $X".
- "Linked products" carousel grouped by category (complete the look / matching bag).
- Footer service links include Size guide & charts, **Cleaning & care**, **Shoe glossary**.

## 5. Trust & service
- Free shipping threshold (members), returns policy + "start a return" + print label,
  store locator, gift cards, chat (many references), BNPL (Afterpay) and PayPal.
- **UGC block**: "show us how you wear it" with a social handle and customer photos.
- Holiday services module (offers, loyalty, store locator, returns, shipping info).

## 6. Visual style
- Fonts from inline CSS: **Acumin Pro** (body/UI) and **Acumin Pro Extra Condensed**
  (headlines, uppercase).
- Fashion-editorial: black/white UI, large model photography, uppercase condensed headings,
  pill (`rounded-full`) small controls and swatches, `rounded-lg` only on a couple of tiles.
- Horizontal scrolling carousels with smooth scroll and dot indicators.

## 7. Mobile patterns
- Hamburger with WOMEN | MEN toggle at top, accordions per category.
- Slide-out cart drawer; horizontal swipe carousels ("Shop by category").

## 8. What Calzado Leidy Carolina can adopt (ranked)
1. **4:5 portrait card images** — shoes look larger and more "fashion" than square.
2. "Color – Negro" / "Talla – 37" labels that update when the user picks an option
   (the chosen value then goes into the WhatsApp message).
3. **"Pocas unidades"** label only if real stock data exists (otherwise skip; no invented facts).
4. **Occasion shortcuts** (Para el colegio, Para fiesta, Para el trabajo, Para caminar) if the
   80 models carry such a tag.
5. Gift/price bands ("Menos de $100.000") as a filter or shortcut.
6. "Combínalo con" carousel = other models of the same category.
7. UGC/"clientes felices" strip only with real customer photos supplied by the owner.
