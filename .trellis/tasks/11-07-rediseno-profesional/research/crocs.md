# Research: Crocs Colombia (crocs.com.co), replacement for Payless (no Colombian site reachable)

- **Scope**: external · **Date**: 2026-11-07 · **Method**: built-in browser (DOM text). **Confidence**: medium.

## Findings
- Header: "Sale hasta 60% OFF" first in the nav, then Mujer / Hombre / Niños / Charms / Nuevo; search; login; cart; delivery-location selector ("¿Dónde quieres recibir tu pedido?").
- Sub-navigation by product type in plain lowercase words: Todo, Lo nuevo, zuecos, plataforma, sandalias, chanclas, tenis, slides, accesorios.
- Home: promo banner with "Compra ya" + "Aplican T&C", then a "Más vendidos" carousel.
- Price display: "Precio de oferta $215,920 (20%)" next to "Precio habitual $269,900", so the before/after price and the percentage are both shown.
- Kids versions are named by age ("Niños pequeños").
- No WhatsApp link on the home page.

## Adoptable (ranked)
1. "Lo nuevo" and "Todo" as the first entries of the type navigation.
2. "Más vendidos" / featured rail on the home page (we would use the models marked `nuevo`).
3. Before/after price with the percentage in brackets.
