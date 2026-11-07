# Type Safety (data contract)

No TypeScript. The contract that matters is the shape of `PRODUCTOS` in `js/productos.js`:

```js
{ id: "D01",            // unique; prefix D=dama C=caballero N=nino A=nina + 2 digits
  nombre: "Stiletto Charol",
  categoria: "dama",    // must match a CATEGORIAS id
  tipo: "Tacones",      // free text; map it in FORMA (app.js) for the illustration
  precio: 129900,       // integer pesos, no separators
  tallas: "35 - 40",    // "min - max" (en dash or hyphen), parsed by rango()
  colores: ["#1d1a1a"], // first colour paints the illustration
  imagen: "",           // "" means illustration; else a path like "img/dama/D01.jpg"
  nuevo: true }         // optional
```

Rules: 20 products per category; every `tallas` string must parse to two integers; `TIENDA.whatsapp` is digits with country code (`573001234567`) or `""` (then `wa.me/?text=` lets the user pick the contact).
