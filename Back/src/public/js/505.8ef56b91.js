"use strict"; (self["webpackChunkitalento"] = self["webpackChunkitalento"] || []).push([[505], { 7132: (t, e, n) => { n.d(e, { Z: () => v }); var a = n(3396), r = n(7139), i = ["id"], c = ["src"], s = { class: "card-img-overlay bg-black bg-opacity-50" }, o = { class: "card-title" }, l = { class: "card-text" }; function d(t, e, n, d, u, g) { return (0, a.wg)(), (0, a.iD)("div", { id: n.id, class: "card text-bg-secondary", style: { height: "500px", width: "250px" } }, [(0, a._)("img", { src: n.imagen, class: "w-100 h-100 object-fit-cover", alt: "testPic" }, null, 8, c), (0, a._)("div", s, [(0, a._)("h5", o, (0, r.zw)(n.id) + " - " + (0, r.zw)(n.titulo), 1), (0, a._)("p", l, (0, r.zw)(n.contenido), 1)])], 8, i) } n(9288); const u = { props: { id: Number, titulo: String, contenido: String, imagen: String } }; var g = n(89); const p = (0, g.Z)(u, [["render", d]]), v = p }, 3459: (t, e, n) => { n.d(e, { Z: () => u }); var a = n(3396), r = { class: "d-flex justify-content-center" }, i = (0, a._)("div", { class: "spinner-border m-5 text-body-tertiary", role: "status", style: { width: "10rem", height: "10rem" } }, [(0, a._)("span", { class: "visually-hidden" }, "Loading...")], -1), c = [i]; function s(t, e, n, i, s, o) { return (0, a.wg)(), (0, a.iD)("div", r, c) } const o = {}; var l = n(89); const d = (0, l.Z)(o, [["render", s]]), u = d }, 8505: (t, e, n) => { n.r(e), n.d(e, { default: () => f }); n(4284); var a = n(3396), r = { class: "text-center" }, i = (0, a._)("h1", null, "Esto es una pagina de prueba", -1), c = { class: "container-lg" }, s = (0, a._)("h5", null, "LALALA", -1), o = (0, a._)("img", { src: "https://res.cloudinary.com/djc2oc9nr/image/upload/v1699075889/Logo_orntxa.png", alt: "", class: "h-100" }, null, -1); function l(t, e, n, l, d, u) { var g = (0, a.up)("cargando"), p = (0, a.up)("categ"); return (0, a.wg)(), (0, a.iD)("div", r, [i, (0, a._)("div", c, [null == t.categorias ? ((0, a.wg)(), (0, a.j4)(g, { key: 0 })) : (0, a.kq)("", !0), ((0, a.wg)(!0), (0, a.iD)(a.HY, null, (0, a.Ko)(t.categorias, (function (t) { return (0, a.wg)(), (0, a.iD)("div", null, [s, (0, a.Wm)(p, { id: t.idCategory, titulo: t.name, imagen: t.imgUrl }, null, 8, ["id", "titulo", "imagen"])]) })), 256))]), o]) } var d = n(124), u = n(8534), g = (n(9730), n(7132)), p = n(3459), v = n(528); const h = { components: { categ: g.Z, cargando: p.Z }, created: function () { var t = this; return (0, u.Z)((0, d.Z)().mark((function e() { return (0, d.Z)().wrap((function (e) { while (1) switch (e.prev = e.next) { case 0: return e.next = 2, v.Z.getCategorias(); case 2: t.categorias = e.sent, t.categorias = t.categorias.slice(0, 2); case 4: case "end": return e.stop() } }), e) })))() }, methods: {}, data: function () { return { categorias: null } } }; var m = n(89); const w = (0, m.Z)(h, [["render", l]]), f = w } }]);
//# sourceMappingURL=505.8ef56b91.js.map