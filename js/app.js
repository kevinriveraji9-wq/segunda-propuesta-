(() => {
  const $ = (s) => document.querySelector(s);
  const pesos = (n) => "$" + n.toLocaleString("es-CO");
  const sinTildes = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Ilustraciones (mientras no haya foto del producto) ---------- */
  const FORMA = {
    Tenis: "tenis", Tacones: "tacon", Sandalias: "sandalia", Botas: "bota",
    Baletas: "bajo", Formal: "formal", Mocasines: "bajo", Escolar: "formal",
  };
  const SVGS = {
    tenis: (c) => `
      <path d="M30 104c-3-24 8-40 30-46l28-16c7-4 14-2 19 4l13 14c26 4 56 14 70 28 6 6 6 12 4 16z" fill="${c}"/>
      <path d="M78 70l10 10M90 62l10 10M102 56l9 9" stroke="#fff" stroke-opacity=".75" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M56 92c34 6 74 2 112-8" stroke="#000" stroke-opacity=".18" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M24 102h172q8 0 8 7v1q0 9-9 9H34q-12 0-12-9v-2q0-6 2-6z" fill="#fbfaf7" stroke="#000" stroke-opacity=".14" stroke-width="2"/>`,
    tacon: (c) => `
      <path d="M40 36q10-4 16 6c18 32 52 42 90 44 30 2 48 8 52 20q1 6-6 6h-58c-36 0-62-14-80-34l-6 34h-9l-1-46q-6-18 2-30z" fill="${c}"/>
      <path d="M44 40c16 34 50 48 96 50" stroke="#000" stroke-opacity=".25" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    sandalia: (c) => `
      <path d="M28 104q-2-8 8-8l148 2q18 2 18 10t-10 8H36q-10 0-8-12z" fill="#e2d3bf"/>
      <path d="M26 112h176" stroke="#000" stroke-opacity=".2" stroke-width="5" stroke-linecap="round"/>
      <path d="M46 98q2-26 20-30M74 98q8-34 34-32 12 2 14 32M136 98q14-26 40 0" stroke="${c}" stroke-width="9" fill="none" stroke-linecap="round"/>`,
    bota: (c) => `
      <path d="M42 108V32q0-10 10-10h40q10 0 10 10v40c34 4 66 12 82 24q12 8 12 18H42z" fill="${c}"/>
      <path d="M102 72q-2 14-14 18" stroke="#000" stroke-opacity=".2" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M42 30h60" stroke="#000" stroke-opacity=".2" stroke-width="4"/>
      <rect x="38" y="108" width="162" height="10" rx="4" fill="#2a2420"/>
      <rect x="38" y="108" width="34" height="14" rx="3" fill="#2a2420"/>`,
    bajo: (c) => `
      <path d="M32 106c-4-22 2-36 18-40 14-3 22 4 36 6 28 2 66 4 96 18 14 6 18 12 16 16z" fill="${c}"/>
      <path d="M52 68c16-2 28 8 46 8" stroke="#000" stroke-opacity=".3" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M28 104h172q6 0 6 6 0 6-8 6H32q-6 0-6-6t2-6z" fill="#2a2420" fill-opacity=".85"/>`,
    formal: (c) => `
      <path d="M32 104c-4-22 2-36 18-40 14-3 22 4 36 6 28 2 66 4 96 18 14 6 18 12 16 16z" fill="${c}"/>
      <path d="M52 66c16-2 28 8 46 8M98 74c10-8 26-8 34 4" stroke="#000" stroke-opacity=".3" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M104 70l14 4M108 64l14 4" stroke="#fff" stroke-opacity=".5" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M28 104h172q6 0 6 6 0 6-8 6H32q-6 0-6-6t2-6z" fill="#2a2420"/>
      <rect x="28" y="104" width="30" height="16" rx="3" fill="#2a2420"/>`,
  };
  const dibujo = (p) => p.imagen
    ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy">`
    : `<svg viewBox="0 0 230 140" aria-hidden="true"><ellipse cx="116" cy="124" rx="92" ry="6" fill="#000" fill-opacity=".07"/>${SVGS[FORMA[p.tipo] || "bajo"](p.colores[0])}</svg>`;

  /* ---------- Tallas ---------- */
  const rango = (p) => {
    const [a, b] = p.tallas.split(/[–-]/).map((n) => parseInt(n, 10));
    return [a, b ?? a];
  };
  const leQueda = (p, t) => { const [a, b] = rango(p); return t >= a && t <= b; };
  const tallasTexto = (p) => { const [a, b] = rango(p); return a === b ? `Talla ${a}` : `Tallas ${a} a ${b}`; };

  /* ---------- WhatsApp ---------- */
  const linkWA = (texto) =>
    `https://wa.me/${(TIENDA.whatsapp || "").replace(/\D/g, "")}?text=${encodeURIComponent(texto)}`;
  const msgProducto = (p, talla) =>
    `Hola, Calzado Leidy Carolina. Me interesa este zapato:\n- ${p.nombre} (Ref. ${p.id})\n- Precio: ${pesos(p.precio)}\n` +
    (talla ? `¿Lo tienen en talla ${talla}?` : "¿En qué tallas lo tienen disponible?");

  document.querySelectorAll("[data-wa-general]").forEach((a) => {
    a.href = linkWA("Hola, Calzado Leidy Carolina. Quiero información sobre el catálogo.");
  });
  $("#lnkFacebook").href = TIENDA.facebook;
  $("#lnkInstagram").href = TIENDA.instagram;
  $("#lnkTiktok").href = TIENDA.tiktok;
  $("#anio").textContent = new Date().getFullYear();

  // Los datos de la etiqueta de portada salen del catálogo, no se escriben a mano
  const rangos = PRODUCTOS.map((p) => p.tallas.split(/[–-]/).map((n) => parseInt(n, 10)));
  $("#datoTallas").textContent = `De la ${Math.min(...rangos.map((r) => r[0]))} a la ${Math.max(...rangos.map((r) => r[1] ?? r[0]))}`;
  $("#datoModelos").textContent = `${PRODUCTOS.length} modelos con precio`;

  /* ---------- Estado ---------- */
  const inicial = location.hash.replace("#", "");
  const estado = {
    cat: CATEGORIAS.some((c) => c.id === inicial) ? inicial : "dama",
    tipo: "Todos",
    talla: null,
    q: "",
  };
  const deCat = (id) => PRODUCTOS.filter((p) => p.categoria === id);
  const nombreCat = (id) => CATEGORIAS.find((c) => c.id === id).nombre;

  /* ---------- Pintar ---------- */
  function pintarPestanas() {
    $("#pestanas").innerHTML = CATEGORIAS.map((c) => `
      <button role="tab" class="pestana" data-cat="${c.id}" aria-controls="hoja" aria-selected="${c.id === estado.cat}" tabindex="${c.id === estado.cat ? 0 : -1}">
        ${c.nombre}<small>${deCat(c.id).length} modelos</small>
      </button>`).join("");
  }
  function pintarTipos() {
    const tipos = ["Todos", ...new Set(deCat(estado.cat).map((p) => p.tipo))];
    $("#tipos").innerHTML = tipos.map((t) =>
      `<button type="button" class="tipo" data-tipo="${t}" aria-pressed="${t === estado.tipo}">${t}</button>`).join("");
  }

  function filaItem(p) {
    return `
      <li class="item" data-id="${p.id}">
        <button type="button" class="item__dibujo" data-abrir="${p.id}" aria-label="Ver ${p.nombre}">${dibujo(p)}</button>
        <button type="button" class="item__nombre" data-abrir="${p.id}">${p.nombre}${p.nuevo ? `<span class="item__nuevo">nuevo</span>` : ""}</button>
        <span class="item__precio">${pesos(p.precio)}</span>
        <span class="item__datos">Ref. ${p.id} · ${tallasTexto(p)}
          <span class="puntos" role="img" aria-label="${p.colores.length} ${p.colores.length === 1 ? "color" : "colores"}">${p.colores.map((c) => `<i style="background:${c}"></i>`).join("")}</span>
        </span>
        <a class="item__pedir" href="${linkWA(msgProducto(p, estado.talla))}" target="_blank" rel="noopener">Pedir por WhatsApp</a>
      </li>`;
  }

  function pintarLista() {
    const q = sinTildes(estado.q.trim());
    const buscando = q.length > 0;
    let lista = buscando
      ? PRODUCTOS.filter((p) => sinTildes(`${p.nombre} ${p.tipo} ${p.id}`).includes(q))
      : deCat(estado.cat).filter((p) => estado.tipo === "Todos" || p.tipo === estado.tipo);
    const antesDeTalla = lista.length;
    if (estado.talla) lista = lista.filter((p) => leQueda(p, estado.talla));

    // Encabezado de la hoja
    const cat = nombreCat(estado.cat).toLowerCase();
    $("#hojaTitulo").textContent = buscando ? `Buscando “${estado.q.trim()}”` : `Catálogo de ${cat}`;
    const todas = deCat(estado.cat).map(rango);
    const min = Math.min(...todas.map((r) => r[0])), max = Math.max(...todas.map((r) => r[1]));
    $("#hojaNota").textContent = buscando
      ? `${lista.length} ${lista.length === 1 ? "resultado" : "resultados"} en todo el catálogo`
      : `${lista.length} ${lista.length === 1 ? "modelo" : "modelos"} · tallas ${min} a ${max} · precios en pesos`;

    // Resultado de la talla
    const res = $("#tallaResultado");
    if (estado.talla) {
      res.innerHTML = lista.length
        ? `<b>${lista.length} de ${antesDeTalla}</b> ${buscando ? "resultados" : `modelos de ${cat}`} vienen en talla ${estado.talla}.`
        : `Ningún modelo ${buscando ? "de esta búsqueda" : `de ${cat}`} viene en talla ${estado.talla}.`;
    } else {
      res.textContent = "Escribe tu talla y te mostramos solo lo que te queda.";
    }
    $("#tallaBorrar").hidden = !estado.talla;

    // Lista agrupada por tipo, como una hoja impresa
    if (!lista.length) {
      $("#catTipo").textContent = "";
      if (ioGrupos) ioGrupos.disconnect();
      $("#lista").innerHTML = `
        <div class="hoja__vacia">
          <p>${estado.talla ? `No tenemos ese modelo en talla ${estado.talla} en el catálogo.` : "No encontramos ese zapato en el catálogo."}
          Escríbenos: a veces llega mercancía nueva antes de que la subamos.</p>
          <a class="boton" href="${linkWA(`Hola, Calzado Leidy Carolina. Busco ${estado.q.trim() ? `"${estado.q.trim()}"` : `zapatos de ${cat}`}${estado.talla ? ` en talla ${estado.talla}` : ""}. ¿Tienen algo?`)}" target="_blank" rel="noopener">Preguntar por WhatsApp</a>
        </div>`;
      return;
    }
    const grupos = new Map();
    lista.forEach((p) => {
      const k = buscando ? `${nombreCat(p.categoria)} · ${p.tipo}` : p.tipo;
      if (!grupos.has(k)) grupos.set(k, []);
      grupos.get(k).push(p);
    });
    $("#lista").innerHTML = [...grupos].map(([nombre, items]) => `
      <section class="grupo" aria-label="${nombre}">
        <h4 class="grupo__nombre">${nombre}</h4>
        <ul>${items.map(filaItem).join("")}</ul>
      </section>`).join("");
    $("#catTipo").textContent = buscando ? "" : [...grupos.keys()][0];
    vigilarGrupos();
    entradaLista();
  }

  function pintar() {
    $("#catTexto").textContent = nombreCat(estado.cat);
    pintarPestanas(); pintarTipos(); pintarLista();
  }

  /* ---------- Historia fija: el mando dice qué tipo de zapato va pasando ---------- */
  let ioGrupos = null;
  function vigilarGrupos() {
    if (!("IntersectionObserver" in window)) return;
    if (ioGrupos) ioGrupos.disconnect();
    if (estado.q.trim()) return;
    ioGrupos = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        const tipo = $("#catTipo");
        const nombre = e.target.querySelector(".grupo__nombre").textContent;
        if (tipo.textContent === nombre) return;
        tipo.textContent = nombre;
        subir(tipo, 0, 12);
      });
    }, { rootMargin: "-35% 0px -64% 0px" });
    document.querySelectorAll("#lista .grupo").forEach((g) => ioGrupos.observe(g));
  }

  /* ---------- Movimiento ---------- */
  const SALIDA = "cubic-bezier(0.22, 1, 0.36, 1)";
  function subir(el, retraso = 0, distancia = 24) {
    if (reducido || !el.animate) return;
    el.animate(
      [{ opacity: 0, transform: `translateY(${distancia}px)` }, { opacity: 1, transform: "none" }],
      { duration: 700, delay: retraso, easing: SALIDA, fill: "backwards" });
  }
  // Las filas visibles entran escalonadas cada vez que cambia la hoja
  function entradaLista() {
    const filas = [...document.querySelectorAll("#lista .item, #lista .grupo__nombre")];
    let n = 0;
    filas.forEach((f) => {
      const r = f.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) subir(f, 40 * n++, 16);
    });
  }
  // Entrada de las partes de cada sección al aparecer: título, texto, imagen
  if ("IntersectionObserver" in window && !reducido) {
    const grupos = [
      [".mando__nombre", ".pestanas", ".talla", ".tipos", ".buscar"],
      [".valle__nota"],
      [".pedir__texto h2", ".pedir__texto > p", ".laminas figure:nth-child(1)", ".laminas figure:nth-child(2)", ".tirilla"],
      [".cupon"],
      [".pie__marca", ".pie__lugares", ".pie__cols"],
    ];
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        subir(e.target, Number(e.target.dataset.retraso || 0));
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    grupos.forEach((sel) => sel.forEach((s, i) => {
      document.querySelectorAll(s).forEach((el) => {
        if (el.getBoundingClientRect().top < innerHeight) return; // lo ya visible no se esconde
        el.dataset.retraso = i * 80;
        io.observe(el);
      });
    }));
    // Las filas de la hoja entran al bajar
    const ioFilas = new IntersectionObserver((entradas) => {
      let n = 0;
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        ioFilas.unobserve(e.target);
        subir(e.target, 60 * n++, 16);
      });
    }, { rootMargin: "0px 0px -6% 0px" });
    const vigilarFilas = () => {
      ioFilas.disconnect(); // las filas viejas ya no están en la página
      document.querySelectorAll("#lista .item").forEach((f) => {
        if (f.getBoundingClientRect().top > innerHeight) ioFilas.observe(f);
      });
    };
    new MutationObserver(vigilarFilas).observe($("#lista"), { childList: true });
    vigilarFilas();
  }
  // La etiqueta de la portada entra y se aleja un poco al bajar
  const etiqueta = $("#etiqueta");
  if (!reducido) {
    subir(etiqueta, 150, 40);
    let pendiente = false;
    addEventListener("scroll", () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        const p = Math.min(scrollY / innerHeight, 1);
        etiqueta.style.transform = `translateY(${p * 12}vh) scale(${1 - p * 0.1})`;
        pendiente = false;
      });
    }, { passive: true });
  }

  /* ---------- Acciones ---------- */
  function irACategoria(id, desplazar) {
    estado.cat = id; estado.tipo = "Todos"; estado.q = ""; $("#buscar").value = "";
    history.replaceState(null, "", "#" + id);
    pintar();
    if (desplazar) $("#catalogo").scrollIntoView({ behavior: reducido ? "auto" : "smooth" });
  }

  document.addEventListener("click", (e) => {
    const t = e.target;
    const pest = t.closest("[data-cat]");
    if (pest) return irACategoria(pest.dataset.cat, false);
    const ir = t.closest("[data-ir]");
    if (ir) { e.preventDefault(); return irACategoria(ir.dataset.ir, true); }
    const tipo = t.closest("[data-tipo]");
    if (tipo) { estado.tipo = tipo.dataset.tipo; pintarTipos(); pintarLista(); return; }
    const abrir = t.closest("[data-abrir]");
    if (abrir) abrirFicha(abrir.dataset.abrir);
  });

  // Teclado en las pestañas: flechas para moverse
  $("#pestanas").addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const i = CATEGORIAS.findIndex((c) => c.id === estado.cat);
    const j = (i + (e.key === "ArrowRight" ? 1 : -1) + CATEGORIAS.length) % CATEGORIAS.length;
    irACategoria(CATEGORIAS[j].id, false);
    $(`.pestana[data-cat="${CATEGORIAS[j].id}"]`).focus();
  });

  $("#talla").addEventListener("input", (e) => {
    const n = parseInt(e.target.value, 10);
    estado.talla = n >= 15 && n <= 46 ? n : null;
    pintarLista();
  });
  $("#tallaBorrar").addEventListener("click", () => {
    $("#talla").value = ""; estado.talla = null; pintarLista(); $("#talla").focus();
  });
  $("#buscar").addEventListener("input", (e) => { estado.q = e.target.value; pintarLista(); });

  /* ---------- Ficha del producto ---------- */
  const ficha = $("#ficha");
  function abrirFicha(id) {
    const p = PRODUCTOS.find((x) => x.id === id);
    $("#fichaContenido").innerHTML = `
      <div class="ficha__cuerpo">
        <div class="ficha__dibujo">${dibujo(p)}</div>
        <div class="ficha__info">
          <p class="ficha__ref">${nombreCat(p.categoria)} · ${p.tipo} · Ref. ${p.id}</p>
          <h2 id="fichaNombre">${p.nombre}</h2>
          <p class="ficha__precio">${pesos(p.precio)}</p>
          <dl>
            <dt>Tallas</dt><dd>${rango(p)[0]} a ${rango(p)[1]}${estado.talla ? (leQueda(p, estado.talla) ? ` · viene en tu talla ${estado.talla}` : ` · no viene en ${estado.talla}`) : ""}</dd>
            <dt>Colores</dt><dd class="puntos">${p.colores.map((c) => `<i style="background:${c}"></i>`).join("")}</dd>
          </dl>
          <a class="boton" href="${linkWA(msgProducto(p, estado.talla))}" target="_blank" rel="noopener">Pedir por WhatsApp</a>
          <p class="ficha__nota">Te confirmamos talla y color por chat antes de pagar.</p>
        </div>
      </div>`;
    $("#cuponModelo").value = `${p.nombre} (Ref. ${p.id})`;
    if (estado.talla) $("#cuponTalla").value = estado.talla;
    ficha.showModal();
  }
  $("#fichaCerrar").addEventListener("click", () => ficha.close());
  ficha.addEventListener("click", (e) => { if (e.target === ficha) ficha.close(); });

  /* ---------- Cupón: arma el mensaje y abre WhatsApp ---------- */
  $("#formCupon").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const error = $("#cuponError");
    const faltan = ["nombre", "modelo", "talla"].filter((k) => !String(f.get(k) || "").trim());
    if (faltan.length) {
      const nombres = { nombre: "tu nombre", modelo: "el modelo o la referencia", talla: "la talla" };
      const lista = faltan.map((k) => nombres[k]);
      error.textContent = `Falta ${lista.length > 1 ? `${lista.slice(0, -1).join(", ")} y ${lista.at(-1)}` : lista[0]}.`;
      error.hidden = false;
      e.target.querySelector(`[name="${faltan[0]}"]`).focus();
      return;
    }
    const tallaCupon = parseInt(f.get("talla"), 10);
    if (!(tallaCupon >= 15 && tallaCupon <= 46)) {
      error.textContent = "Escribe una talla entre 15 y 46.";
      error.hidden = false;
      e.target.querySelector('[name="talla"]').focus();
      return;
    }
    error.hidden = true;
    const texto = `Hola, Calzado Leidy Carolina. Soy ${f.get("nombre").trim()}.\n` +
      `Quiero pedir: ${f.get("modelo").trim()}\nTalla: ${f.get("talla")}` +
      (String(f.get("nota")).trim() ? `\nNota: ${f.get("nota").trim()}` : "");
    window.open(linkWA(texto), "_blank", "noopener");
  });
  $("#formCupon").setAttribute("novalidate", "");

  // En el teléfono las muescas del cupón caen justo en la línea de puntos
  const cupon = $("#formCupon");
  const ajustarCorte = () => {
    const izq = cupon.querySelector(".cupon__izq");
    cupon.style.setProperty("--corte", `${(izq.offsetHeight / cupon.offsetHeight) * 100}%`);
  };
  addEventListener("resize", ajustarCorte);
  document.fonts?.ready.then(ajustarCorte);
  ajustarCorte();

  pintar();
})();
