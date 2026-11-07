# PRD: Catálogo web Calzado Leidy Carolina

## Context

The developer (alejo) is preparing a **website proposal** for a real shoe shop:
**Calzado Leidy Carolina**, Pitalito, Huila (Colombia). Their Instagram bio:
"Estilo y comodidad para toda la familia. Hombre, dama, niño u niña".
Social profiles: Instagram @calzadoleidy, TikTok @leidycarolinashoes, Facebook "Leidy Carolina Shoes".

Request (developer's words, translated): "a simple web page, only to show the shoe
catalog, 20 of each shoe category". Later: restyle it using the `design-taste-frontend`
and `impeccable` skills.

## Goal

A simple, static catalog site the shop can share from its social profiles, where a
customer sees every model with its price and orders it by WhatsApp.

## Requirements

1. **Catalog**: 4 categories (Dama, Caballero, Niño, Niña) × **20 models each** = 80 models.
   Each model shows name, type, reference, price in COP, size range, colours, picture.
2. **Browse**: switch category; filter by shoe type; search by name or reference across the whole catalog.
3. **Size filter**: the customer types their size and sees only the models that come in it, with a count.
4. **Order by WhatsApp**: every model has a "Pedir por WhatsApp" link with a pre-written
   message (name, reference, price, chosen size). A coupon form builds the same message from name, model and size.
5. **Shop identity**: shop name, Pitalito, Huila, slogan, links to Instagram, TikTok and Facebook.
6. **Easy to update**: all catalog content and the WhatsApp number live in one data file (`js/productos.js`).
7. **No backend, no checkout**: static files only, hostable for free.
8. **Design**: must pass the design-taste-frontend gates (lint + inspector, 0 FAIL) and the impeccable polish checklist (a11y, touch targets, states, reduced motion).

## Out of scope

Online payment, cart, stock management, admin panel, user accounts.

## Acceptance criteria

- [ ] 80 products, exactly 20 per category, each with a parseable size range
- [ ] Category tabs, type chips and search work; search is accent-insensitive
- [ ] Size filter shows "N de M modelos ... vienen en talla X" and an empty state with a WhatsApp fallback
- [ ] Every WhatsApp link opens `wa.me` with the correct product text (and size when chosen)
- [ ] Coupon: missing fields show an error and focus the first missing field; complete form opens WhatsApp
- [ ] Product dialog opens from the picture or the name and closes with button, Escape and backdrop
- [ ] Layout works at 1440, 768 and 390 px with no horizontal scroll
- [ ] `lint.mjs` 0 FAIL / 0 WARN; `inspect.mjs` 0 FAIL (only `no-footage` WARN accepted)
- [ ] No console errors
- [ ] Every third-party photo credited on the page

## Open items for the client (cannot be resolved by the developer)

- Real WhatsApp number (`TIENDA.whatsapp` is empty)
- Real product photos for the 80 models (illustrations stand in)
- Real names, prices and size ranges (current data is sample content)
- Payment and delivery terms ("a convenir" placeholders in the receipt slip)
