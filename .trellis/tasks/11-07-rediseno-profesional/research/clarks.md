# Research: Clarks (clarks.com/en-gb)

- **Query**: Study Clarks online store patterns for a WhatsApp-ordering shoe catalog
- **Scope**: external
- **Date**: 2026-11-07
- **Method**: Browser tools NOT available; raw HTML fetched with curl and reduced to text.
  `clarks.com/en-us` returned 403 and `clarks.com.co` did not respond, so the **UK store** was
  used. No screenshots.
- **Pages read**: `/en-gb` (home), `/en-gb/womens/womens-shoes/w_shoes_uk-c` (360 results),
  `/en-gb/torhill-bee/26172084-p` (product).

## 1. Header / navigation
- Announcement line ("free standard delivery – limited time") + utility links:
  Track order, **Store locator**, FAQs.
- Mega-menu tabs: Sale, Women, Men, Kids, School, Originals, Accessories, Brands.
- Sale menu is split **by size band** ("Size 3-4", "Size 5-6", "Size 7-8") as well as by type.
- Women columns: New in, Shoes (ballet pumps, flats, heels, loafers, brogues...), Boots
  (ankle, Chelsea, knee-high, wide-fit...), Trainers, Sandals, sub-brand ranges, Clothing,
  Accessories, **Shop by activity** (Casual, Holiday, Walking, Wedding & occasion, Work).
- Sale hero carries a live countdown ("sale ends in ...").

## 2. Category taxonomy
- Gender → family (Shoes / Boots / Trainers / Sandals) → specific type; colour shortcuts are
  menu items ("Black shoes", "White trainers", "Brown boots").
- **Kids**: Babies (pre-walking, walking, barefoot), Girls, Boys (each: boots, trainers, shoes,
  **school shoes**, toddler, sandals, canvas, slippers), and **Shop by size**
  (Toddler 2-6.5, Younger kids 7-2.5, Older kids 3-10).
- Kids menu has a **"Measure & fit"** group: in-store fitting booking, measure at home,
  size calculator, foot gauges. A separate **School** tab exists.

## 3. Listing page
- Breadcrumb (Home / womens / womens shoes) + title with count ("360 Results").
- **Filters**: Size, Width, Colour, Product type, Style, Material, Technology, Price range,
  Top rated, Heel height, Fastening type, Brand. Sort: Recommended, Newest, Best sellers,
  Price, Top rated.
- Sub-category pill links above grid (Shoes, Flat shoes, Black shoes, Trainers, Loafers...).
- **Card anatomy**: optional tag on top ("New In", "25% OFF", a technology tag like
  "Targeted cushioning") → brand line → model name → **"Quick buy"** button → colour + material
  ("Black Leather", "Light Tan Nubuck") → category line → price (sale: old price then new) →
  **"+ N more"** colour count.
- **Editorial tiles inserted inside the grid** (e.g. a comfort-tech promo after ~12 items,
  an accessories tile later).
- "Load more" button with progress ("of 360").

## 4. Product page
- Breadcrumb; discount badge; brand; **name + colour/material in the title**.
- Price with screen-reader text for old/new price.
- "**11 colours available**: Light Tan Nubuck" with colour thumbnails.
- "Select your size" grid (UK half sizes) + **Size guide** link; "Select width" (D Standard).
- "**Find this product in store**" (stock in store).
- Short service bullets right under the buttons: free standard delivery, free exchanges and
  in-store returns.
- Three icon benefits (cushioning, fit, breathability).
- Accordions: Description (bullets incl. **heel height in mm**), Delivery returns & exchanges,
  **Materials and care** (upper, lining, sole, fastening), shoe-care product suggestions.

## 5. Trust & service
- Store locator, book a kids fitting, foot measuring tools, size chart, "shoemakers since"
  heritage line in a 3-item service strip (free delivery / easy returns & exchanges / heritage).
- Payment: card, PayPal, Apple Pay, Google Pay, Klarna (from page config strings).
- Cart help copy includes a **"Message us on WhatsApp"** option (number blank in UK config).
- Footer: Customer services (contact, FAQs, delivery, returns, size chart, store locator,
  store services), About, newsletter with discount.

## 6. Visual style
- Fonts from inline CSS: **Montserrat** (UI/body) and **Oswald** (condensed headings).
- Square corners (radius 0) on buttons/cards; circles only for swatches/icons.
- Calm, neutral palette (white, black, warm greys); product shots on white, lifestyle
  imagery in heroes. Less shouty than Skechers, warmer than Nike *(visual judgement general
  knowledge)*. Price-led hero copy ("from £55").

## 7. Mobile patterns
- Drill-down menu ("Show Women sub menu" buttons); filters in a panel; 2-up grid; sticky
  "Scroll to top" button.

## 8. What Calzado Leidy Carolina can adopt (ranked)
1. **Card line "color + material"** ("Negro · Cuero sintético") under the name.
2. **"+ N colores"** count on the card.
3. **Kids "Medir el pie en casa" mini-guide** + size table (huge value for niño/niña buyers).
4. Service bullets **directly under the WhatsApp button** (envíos, cambios) from `TIENDA`.
5. Breadcrumb + "Inicio / Dama / Sandalias" on the detail view.
6. Price-led hero copy ("Desde $ XX.XXX") driven by real data, not invented.
7. "Visítanos en la tienda" block (address/hours as `TIENDA` placeholders).
8. One editorial tile inside the grid (e.g. "¿Dudas con la talla? Escríbenos").
9. Montserrat-like body + condensed heading pairing as a type reference.
