# Quality Guidelines

## Automated gates (must pass before reporting done)

```bash
S=~/.claude/skills/design-taste-frontend
node $S/scripts/lint.mjs index.html css js          # 0 FAIL, 0 WARN
node $S/scripts/inspect.mjs http://localhost:5173  # 0 FAIL
```

Accepted WARN: `no-footage`. No honest open-licence clip of the shop or Pitalito exists (searched "shoes"; only unrelated clips). Re-check if the client supplies video.
A line that must keep a flagged pattern (masks for paper edges, the floating WhatsApp shadow, the dialog shadow, the visually-hidden helper) carries `/* taste-skill-ignore */` with a reason.

## Forbidden patterns (design-taste-frontend house rules)

- Eyebrow/kicker labels above headings; tiny uppercase letter-spaced labels
- Thin rules, hairline dividers, 1px outlined boxes (dotted 4-5px perforations/leaders are allowed)
- Gradients as visible fills (masks that cut paper edges are allowed, with the ignore comment)
- Shadows on things at rest (only `.wa-flota` and `<dialog>` float)
- Emoji, monospace, 01/02/03 numbering, glass/backdrop blur, rows of identical cards
- Cream/sand page grounds; fonts from the impeccable reflex-reject list (Fraunces, Inter, DM Sans, Playfair, ...)
- Styled accent word inside a headline; headlines over two lines at 390/768/1440px

## Required patterns

- Tokens only (`--kraft`, `--etiqueta`, `--tinta`, `--accion`, ... in OKLCH); five type steps `--paso-chico|texto|guia|titulo|gigante` (plus the footer wordmark)
- Rokkitt 800 uppercase for display; Literata for text; body at least 16px; running text in full ink
- Touch targets at least 44px; visible `:focus-visible`; `aria-live` on the talla result; visually hidden labels on every input
- Motion: transform/opacity via WAAPI `subir()`, content visible by default (no class-gated reveals), `prefers-reduced-motion` respected
- Every found picture credited on the page and in `assets/credits.json`; never presented as the shop's own product
- Empty state with a WhatsApp fallback when filters return nothing

## Testing requirements

No test runner. Manual checks in the browser at 1440 / 768 / 390:
talla filter counts, search across categories, empty state, dialog open/close, coupon validation focus + WhatsApp text, console clean.

## Code review checklist

- [ ] Catalog content only changed in `productos.js`
- [ ] Both gates re-run after the change
- [ ] Screenshots in `.taste-skill/inspect/` looked at, not just the meter
- [ ] Spanish copy: sentence case, no invented reviews, and no prices or business facts presented as confirmed

## Common mistakes (found by trellis-check, task 11-07-catalogo-web)

- `aria-label` on a plain `div`/`span` is ignored by screen readers. Give it a role: `role="group"` for the type chips and the receipt slip, `role="img"` for the colour dots.
- Comma-joining lists in Spanish copy: "a, b y c", never "a y b y c".
- Validating presence only: numeric inputs also need a range check when the form uses `novalidate`.
