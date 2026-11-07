# Quality Guidelines

## Visual system (restrained retail)

- Tokens only: `--blanco`, `--gris`, `--gris-hondo`, `--linea`, `--tinta`, `--tinta-suave`, `--apagado`, `--acento` (wine, badges/sale/active), `--wa` (WhatsApp actions only), `--sombra` (overlays only).
- Font: Archivo variable, one family in two widths: condensed uppercase for display/section titles, normal width for UI.
- Square corners everywhere except the round floating WhatsApp button and colour dots.
- 1px `--linea` separators are allowed in filters, footer columns and accordions.
- Shadows only on overlays: dialogs, nav panel, floating button and its menu.
- No gradients, glass/backdrop blur, emoji, monospace.

## Accessibility (impeccable polish checklist)

- Text contrast at least 4.5:1 (secondary text 7.4:1, accent 9.1:1, WhatsApp green 6.5:1 on white); input borders at least 3:1.
- Visible `:focus-visible` (white outline on dark areas); touch targets at least 44px.
- Native `<dialog>` for overlays; Escape closes; focus returns to the opener.
- `aria-live` on result counts; no `aria-haspopup` on plain hover panels.
- `prefers-reduced-motion`: announcement bar does not rotate, transitions shortened.

## Business-fact guard

Never publish unconfirmed specifics: shipping thresholds or prices, "a todo Colombia", payment brands (Nequi, PSE, Addi...), return-day counts, warranties, address, hours, NIT. Neutral "consulta por WhatsApp" wording lives in `TIENDA` until the owner confirms the real terms.

## Design gates (advisory for this direction)

`lint.mjs` / `inspect.mjs` from design-taste-frontend. Accepted findings: `hairline`, `outlined-box`, `few-pictures` (no photos until the owner supplies product photos), `still-page` (minimal motion by design), `no-footage`, `side-scroll` on the type-pill row at 390px. Anything else must be fixed.

## Common mistakes

- `aria-label` on a plain `div`/`span` needs a role (`group`, `img`).
- Spanish lists: "a, b y c", never "a y b y c".
- Facet counts must include filters that persist across category switches (size).
- Numeric inputs need an integer check, not only a range check.
- Prefilled fields must not keep a value from a previously opened product.
- Heading levels inside nested sections (related products under an h3 use h4).

## Testing

No test runner. Manual or scripted browser checks at 1440 / 768 / 390 for the flows listed in the index Quality Check.
