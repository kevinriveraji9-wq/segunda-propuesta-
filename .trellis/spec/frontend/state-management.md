# State Management

```js
const estado = { cat: "dama", tipo: "Todo", talla: null, precio: null, orden: "relevancia", q: "" };
```

- `cat`: `"dama" | "caballero" | "nino" | "nina" | "todas"`; synced with `location.hash` (`#nuevos` sets `cat: "todas", tipo: "Nuevos"`).
- `tipo`: `"Todo" | "Nuevos" |` a product `tipo`. The active type is always listed in the pills even if the current search would hide it.
- `talla`: integer or `null`; persists across category switches, so **facet counts must include it** (a category with 0 models in that size is shown disabled).
- `precio`: index of a price band computed from the data, or `null`.
- `orden`: `relevancia | precio-asc | precio-desc | nuevos`.
- `q`: accent-insensitive search (`sinTildes`) across all categories.

## Rendering

`pintar()` calls `pintarFiltros()` + `pintarLista()`; `pintarCajon(id)` renders the drawer level. Each re-rendered zone carries `data-region`; the focused control is restored after a re-render so keyboard users keep their place. One delegated `click` listener handles `data-*` actions.

## Quick-order form contract (`#formPedido`, `novalidate`)

| Field | Rule |
|---|---|
| `nombre` | required |
| `modelo` | required; prefilled with "Nombre (Ref. X)" when a product dialog is opened |
| `talla` | required, `Number.isInteger` and 15 to 46; prefilled with the chosen size or cleared (never kept from another product) |
| `nota` | optional |

Errors list the missing fields as "a, b y c", set `aria-invalid` and focus the first invalid field. Success opens `linkWA(texto)` in a new tab.

## Product order message

`msgPedido(p, talla, color)` requires a size; without one the dialog shows "Elige tu talla para pedir por WhatsApp." and focuses the first size button.
