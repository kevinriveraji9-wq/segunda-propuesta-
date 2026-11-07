# PRD: Rediseño profesional con estudio de 10 tiendas

## Context

Follow-up to the archived task `11-07-catalogo-web`. The developer reviewed the "shoebox"
redesign (kraft ground, Pitalito photos, stationery pieces) and asked (translated):

> "What's with those Pitalito photos? Remove them and give the page a more professional
> design. Study about 10 shoe stores of recognised brands and add what can help us most."

## Goal

The catalog must read like a professional shoe retailer's online store, using patterns
proven by recognised brands, adapted to a small family store that sells through WhatsApp.

## Requirements

1. **Remove all Pitalito / landscape / museum photos** (`assets/*.jpg`) and their credits,
   the valley band, and the kraft "shoebox" stationery look.
2. **Research**: study ~10 recognised shoe stores (5 global, 5 Colombian/LatAm); findings
   persisted in `research/`; adopt the patterns that fit a no-checkout WhatsApp store.
3. **Professional retail layout**: header with categories + search, product listing with
   filters (at least category, type, size), product cards, product detail view,
   service/trust information, footer.
4. **Keep every working feature**: 80 products (20 per category), size filter,
   accent-insensitive search, WhatsApp order message per product (with size),
   coupon/quick order form (may be restyled or replaced by an equivalent order form),
   data only in `js/productos.js`.
5. **No invented business facts presented as real**: shipping thresholds, payment
   methods, return policy, store address or hours must be clearly marked as editable
   placeholders in `TIENDA` config (not hard-coded copy).
6. **Quality**: no console errors; works at 1440 / 768 / 390 px without horizontal
   scroll; touch targets ≥44px; visible focus; reduced motion; impeccable polish checklist.

## Out of scope

Real checkout, cart persistence, accounts, stock API.

## Acceptance criteria

- [x] No `assets/*.jpg` photos referenced or shipped; credits removed
- [x] Research: 11 stores attempted, 9 analysed (Nike, Adidas, Skechers, Clarks, Steve Madden partial, Vélez, Bosi, Bata, Crocs); Spring Step and Payless unreachable; 2 summaries in `research/`
- [x] Header: logo, category navigation, search, WhatsApp action; usable on mobile
- [x] Listing: filters for category, type and size (plus sort by price), result count, product grid
- [x] Product card: picture, name, price, colours, badge (Nuevo) and quick WhatsApp action
- [x] Product detail: picture, price, size selector limited to the model's range, size guide, WhatsApp order with chosen size
- [x] Service strip (envíos, cambios, pagos, atención) driven by `TIENDA` config placeholders
- [x] Empty state with WhatsApp fallback
- [x] Data contract of `productos.js` unchanged or backward compatible
- [x] No console errors; layout verified at 1440 / 768 / 390

## Open items for the client

WhatsApp number, real product photos, real prices, shipping/returns/payment terms, store address and hours.
