import { a as e } from "./rolldown-runtime-B0Z9INg1.js";

import { i as t, t as n } from "./jsx-runtime-DU6_sasz.js";

import { T as r } from "./LocaleProvider-DoP-dlkE.js";

import { o as i, r as a } from "./styled-components.browser.esm-BcYycfu6.js";

import { t as o } from "./useScript-DOuL-OUT.js";

import { t as s } from "./useIntl-DaqDtX5V.js";

import { f as c } from "./StaticLoader-LtUItV9i.js";

function l() {
  return o(r);
}

var u = (e, t, n) => ({
  width: e.width - 2 * t,
  height: e.height - 2 * n,
  left: e.left + t,
  top: e.top + n
}), d = (e, t, n, r, i) => {
  let a = {
    left: n,
    top: r
  };
  return a.left + e > i.width + i.left && (a.left = i.left + i.width - e), a.top + t > i.height + i.top && (a.top = i.top + i.height - t), 
  a;
}, f = (e, t, n, r, i) => {
  let a = (e, t, n, r) => {
    let i = (r - 90) * Math.PI / 180;
    return {
      x: e + n * Math.cos(i),
      y: t + n * Math.sin(i)
    };
  }, o = a(e, t, n, i), s = a(e, t, n, r), c = i - r <= 180 ? `0` : `1`;
  return [ `M`, o.x, o.y, `A`, n, n, 0, c, 0, s.x, s.y ].join(` `);
}, p = e(t());

i();

var m = n(), h = {
  Figure: a.figure`
    ${e => e.extraStyles}
  `,
  NoFigure: a.div`
    ${e => e.extraStyles}
  `,
  Image: a.img`
    ${e => e.extraStyles}
  `
}, g = p.memo(({id: e = ``, title: t, caption: n, alt: r, src: i, srcSet: a, imageStyles: o, forceFigure: l, className: u = ``, extraStyles: d, dataSrc: f = ``, dataSrcSet: p = ``}) => {
  let g = s(), _ = l || t || n, v = _ ? h.Figure : h.NoFigure, y = g.formatMessage({
    id: `workbook.imagePicker.descriptionUnavailable`
  }, {
    title: t || n || (f || i).split(`/`).pop()
  });
  return (0, m.jsxs)(v, {
    id: e,
    className: u,
    extraStyles: d,
    children: [ (0, m.jsx)(h.Image, {
      className: u,
      src: i,
      srcSet: a,
      alt: r || y,
      "data-src": f,
      "data-srcset": p,
      extraStyles: o
    }), _ && (0, m.jsx)(`figcaption`, {
      children: (0, m.jsxs)(c, {
        children: [ t && (0, m.jsx)(`p`, {
          children: t
        }), n && (0, m.jsx)(`p`, {
          children: n
        }), !t && !n && y ]
      })
    }) ]
  });
});

export { l as a, f as i, d as n, u as r, g as t };
//# sourceMappingURL=figureOrImage-Bfd0a5pO.js.map