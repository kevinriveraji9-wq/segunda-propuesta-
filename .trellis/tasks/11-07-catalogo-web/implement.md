# Implement plan: Catálogo web Calzado Leidy Carolina

Note: the first version and the redesign were built in this session **before** Trellis was
initialised. This plan records the order that was followed so `trellis-check` can verify it,
and lists what remains.

## Ordered checklist

- [x] 1. Data file `js/productos.js`: 80 products, 20 per category, `TIENDA` config with social links
- [x] 2. First version (cards grid) built and checked in the browser
- [x] 3. Baseline audit with design-taste-frontend (8 FAIL / 8 WARN)
- [x] 4. Draw direction "page-is-the-object"; find and credit 5 open-licence photos (`assets/`)
- [x] 5. Rebuild `index.html`, `css/estilos.css`, `js/app.js` on the direction
- [x] 6. Gates: lint 0/0, inspector 0 FAIL (1 accepted WARN)
- [x] 7. impeccable polish: touch targets, tabs a11y, coupon notches, contrast, states
- [x] 8. Browser checks: size filter, empty state, dialog, coupon validation, console
- [x] 9. `trellis-check` independent review against PRD acceptance criteria and spec
- [x] 10. Fix anything the check finds; re-run both gates
- [x] 11. Update spec with learnings (`trellis-update-spec`)
- [x] 12. Commit (git repository initialised for the project)

## Validation commands

```bash
python -m http.server 5173     # or the "catalogo" preview in .claude/launch.json
S=~/.claude/skills/design-taste-frontend
node $S/scripts/lint.mjs index.html css js
node $S/scripts/inspect.mjs http://localhost:5173
```

## Review gates

- After step 9: no acceptance criterion unchecked without an explicit reason.
- Before commit: both gates re-run green.

## Rollback points

- Pre-redesign version is not kept on disk (files were overwritten before git existed). From step 12 onward, git commits are the rollback points.
