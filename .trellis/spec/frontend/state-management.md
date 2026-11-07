# State Management

One plain object in `js/app.js`:

```js
const estado = { cat: "dama", tipo: "Todos", talla: null, q: "" };
```

- `cat`: active category id; initialised from `location.hash` (`#dama`, `#caballero`, `#nino`, `#nina`) and written back with `history.replaceState`.
- `tipo`: chip filter inside the category (`"Todos"` or a product `tipo`).
- `talla`: integer 15 to 46 or `null`; filters rows with `leQueda(p, talla)` and is carried into every WhatsApp message and the coupon.
- `q`: free-text search; when non-empty it searches **all** categories (accent-insensitive via `sinTildes`) and groups results as `Categoria · Tipo`.

## Rendering

Render functions rebuild their region from `estado` with template strings: `pintarPestanas()`, `pintarTipos()`, `pintarLista()`, `pintar()` (all three). Event handling is a single delegated `click` listener on `document` keyed by `data-cat`, `data-ir`, `data-tipo`, `data-abrir`.

Never store state in the DOM or in `localStorage`; nothing must persist between visits.

## Observers and re-renders (learned in task 11-07-catalogo-web)

`pintarLista()` replaces the whole `#lista` subtree, so every observer that watched old rows must be released first:

- `vigilarFilas()` calls `ioFilas.disconnect()` before observing the new rows (row entrance motion).
- `vigilarGrupos()` disconnects `ioGrupos` and re-observes each `.grupo` (pinned type readout).
- Empty result: clear `#catTipo` and disconnect `ioGrupos`, otherwise the big heading keeps a stale type.

Wrong: observing new rows on every render without `disconnect()` (detached nodes stay referenced).
Correct: `observer.disconnect()` then observe the freshly rendered nodes.

## Derived copy

Facts shown in the hero label are computed from the data on load, never typed by hand:
`#datoModelos` = `PRODUCTOS.length` + " modelos con precio"; `#datoTallas` = min/max of all `tallas`.
The HTML keeps the same text as the no-JS fallback.

## Coupon contract (`#formCupon`, `novalidate`)

| Field | Rule | Error text (Spanish) |
|---|---|---|
| `nombre` | required | joined list: "Falta tu nombre, el modelo o la referencia y la talla." |
| `modelo` | required | (same list, first missing field gets focus) |
| `talla` | required, integer 15 to 46 | "Escribe una talla entre 15 y 46." |
| `nota` | optional | none |

On success: `window.open(linkWA(texto), "_blank", "noopener")` with
`Hola, Calzado Leidy Carolina. Soy <nombre>.\nQuiero pedir: <modelo>\nTalla: <talla>[\nNota: <nota>]`.
