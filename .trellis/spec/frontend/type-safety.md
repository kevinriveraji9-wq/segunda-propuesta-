# Type Safety (data contract)

No TypeScript. The contract is the shape of the data in `js/productos.js`.

```js
{ id: "D01",            // unique; D=dama C=caballero N=nino A=nina + 2 digits
  nombre: "Stiletto Charol",
  categoria: "dama",    // a CATEGORIAS id
  tipo: "Tacones",      // needs a FORMA mapping in app.js for the illustration
  precio: 129900,       // integer pesos
  precioAntes: 159900,  // OPTIONAL: shown crossed with a -X% badge only when > precio
  tallas: "35 - 40",    // "min - max", parsed by rango()
  colores: ["#1d1a1a"], // every hex needs a COLOR_NOMBRES entry, else it shows "Color N"
  imagen: "",           // "" means illustration; else "img/dama/D01.jpg"
  nuevo: true }         // optional
```

`TIENDA` fields: `nombre`, `ciudad`, `whatsapp` (digits with country code or `""`), `facebook`, `instagram`, `tiktok`, `direccion`, `telefono`, `horario`, `nit` (rendered only when non-empty), `anuncios` (array, or a single `anuncio` string), `servicios` (array of `{ titulo, texto }`, 4 items), `politicas` (`{ envios, cambios, pagos }`).

Rules: 20 products per category; prices formatted `$ 129.900`; hero facts (model count, size range) are computed from the data.
