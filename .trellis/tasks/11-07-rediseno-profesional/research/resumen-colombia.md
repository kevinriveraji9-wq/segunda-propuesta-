# Research: Summary — top 10 patterns from Colombian shoe stores for Calzado Leidy Carolina

- **Query**: Rank the most useful storefront patterns from Vélez, Bosi, Spring Step, Bata and Payless for a WhatsApp-ordering store with no checkout (dama, caballero, niño, niña; 80 models; COP)
- **Scope**: external
- **Date**: 2026-11-07
- **Evidence base**: **Only Vélez and Bosi were actually analysed** (see `velez.md` and `bosi.md`). Spring Step, Bata and Payless could not be reached from this network (DNS failures / domain not existing; details in their files). The ranking is built from two mid- to high-end Colombian leather brands and should be re-checked against a value brand such as Payless when that becomes reachable.

## Top 10 patterns, ranked by usefulness for Leidy Carolina

1. **A WhatsApp CTA per product with a prefilled message** *(Vélez)*
   - Main button "Pedir por WhatsApp", with a message carrying the model name, reference, colour, selected size and price.
   - Secondary link "¿No encuentras tu talla? Escríbenos" with its own message.
   - Vélez uses exactly this: two WhatsApp intents (buy with an advisor / customer service) and a "can't find your size" link. For Leidy this replaces the whole cart.
2. **Size buttons plus a size guide per category** *(Vélez, Bosi)*
   - Visible size buttons, with sold-out sizes disabled or struck through, and a "Guía de tallas" link that opens a table.
   - Use Colombian/EU sizes (Vélez women 34–41). Bosi's mix of US and EU sizes is confusing, so avoid it.
   - Add foot length in cm per size; for kids, add an age reference.
3. **A trust/promise strip with 4 icons** *(Bosi)*
   - Shown under the hero and on every product page.
   - Suggested content: envío a todo Colombia · pago contraentrega / Nequi / transferencia · cambio de talla · tienda física en Pitalito (with address).
4. **Consistent product photography** *(both)*
   - Pure white or very light background, side profile of the shoe, the same framing and the same aspect ratio for all 80 models.
   - Optional second image on hover (Bosi).
   - Square 1:1 (Bosi) is easier to shoot well with a phone than Vélez's tall 2:3.
5. **Card anatomy** *(both)*
   - Image with at most 1–2 small badges: "Nuevo", "‑20%", "Últimas tallas".
   - Then name, the struck "before" price with the "now" price only when the discount is real, a row of colour dots, and optionally "Ref. xxxx".
   - No add-to-cart button on the card. Bosi's search cards use "VER PRODUCTO", which is the right model for Leidy.
6. **Listing controls sized for 80 products** *(both)*
   - Chips for shoe type inside each category (tenis, sandalias, baletas, botas/botines, tacones, mocasines, colegiales).
   - A size filter, a sort control (Nuevos / Menor precio / Mayor precio) and a result count.
   - Grid: **2 columns on mobile**, 3 on tablet, 4 on desktop.
   - Paging is not needed. Both brands use load-more at 32 items; Leidy's categories are about 20 each.
7. **Navigation that mirrors the customer** *(Bosi, Vélez)*
   - Top level: Dama · Caballero · Niña · Niño, plus Nuevos and Ofertas.
   - Each opens shoe-type links and "Ver todo".
   - Bosi's kids area is split Niña / Niño, has "Colegiales" (school shoes) as its own entry and offers "Bebé". This matches Leidy's categories.
8. **Policy rows on the product page** *(Bosi)*
   - Three compact rows (Envíos · Cambios y devoluciones · Formas de pago), each expanding to 3–5 lines.
   - Add a "Descripción" accordion (material, suela, altura de tacón en cm, horma) and a "Cómo combinarlo" accordion.
9. **Rotating announcement bar** *(Vélez)*
   - 2–3 short one-line messages, each with a bold link word.
   - Use it for service messages, not hype: "Envíos a todo Colombia", "Paga contraentrega", "Escríbenos al WhatsApp".
10. **A restrained visual system** *(both)*
    - Black/white/greys with one accent. Bosi reserves deep red for sale prices only.
    - Square or near-square corners (both use radius 0).
    - One clean sans-serif family; Vélez adds a serif only for editorial headings.
    - Generous whitespace and uppercase micro-labels.
    - This, more than any feature, is what makes both stores read as "professional brand".

**Also worth taking:**
- "Detalles" close-up photos with one-line captions (Vélez).
- "También te puede gustar" carousel on the product page (both).
- A legitimate-looking footer: address, phone, hours, NIT if available, payment logos, social links (Bosi).
- Separate mobile crops for the hero (Vélez).

## Colombia-specific notes
- **Prices**: both sites show COP as `$ 379.900`, with dots for thousands, no decimals and prices ending in 900 or 950. Discounts appear as "‑X%" or "X% DTO.".
- **Payment methods Colombians expect to see**:
  - Seen on both sites: PSE, Nequi, Bancolombia, Visa/Mastercard, Addi and SisteCrédito (buy-now-pay-later is prominent), plus MercadoPago. Bosi also accepts cash ("Efectivo").
  - For a WhatsApp store, the realistic set to show is Nequi / Daviplata / transferencia Bancolombia / contraentrega / efectivo en tienda. Contraentrega and Daviplata are general knowledge, not seen on these two sites.
- **Shipping signals**:
  - Vélez: free shipping from $600.000.
  - Bosi: national delivery; Coordinadora and 99minutos logos in the footer.
  - Naming the carrier and a typical delivery time builds trust.
- **Exchanges**:
  - Bosi: first exchange free; exchanges within 30 days if the shoe is unused and has its tags; 90-day warranty for manufacturing defects.
  - Bosi links a "derecho de retracto" (right of withdrawal) page and the consumer authority (SIC). Colombian consumer law (Ley 1480 de 2011) covers remote sales; ask the owner to confirm her actual policy before publishing it.
- **School shoes ("colegiales")** are a distinct category in Colombia, with a seasonal peak around the start of the school year. Bosi/Bambino gives them their own menu entry.
- **WhatsApp is a primary sales channel**, not just support. Vélez offers "buy with an advisor" over WhatsApp even though it has a full checkout.

## Caveats / Not found
- Spring Step, Bata and Payless were not observed; no claims about them are included.
- I took no screenshots. The visual conclusions come from theme CSS, CSS variables and product image files, not from seeing rendered pages.
