import { a as e } from "./rolldown-runtime-B0Z9INg1.js";

import { i as t } from "./jsx-runtime-DU6_sasz.js";

import { t as n } from "./monitoring-fZj7Xvdu.js";

import { t as r } from "./uuid-DwkZyVS8.js";

function i({src: e, onLoad: t, onError: n}) {
  let r = document.createElement(`script`);
  r.src = e, r.type = `text/javascript`, r.onload = t, r.onerror = n, document.getElementsByTagName(`head`)[0].appendChild(r);
}

var a = function() {
  let e = {};
  return t => {
    if (e[t]) {
      return e[t];
    }
    {
      let r = new Promise((e, r) => {
        i({
          src: t,
          onLoad: () => e(),
          onError: () => {
            n(`${t} failed to load`), r();
          }
        });
      });
      return e[t] = r, r;
    }
  };
}(), o = e(t());

function s() {
  return function(e, ...t) {
    let n = r(), i = window.document.createElement(`style`);
    return i.id = n, i.innerHTML = e.reduce((e, n, r) => (n && t[r] && (e += n + t[r]), 
    e), ``), window.document.head.appendChild(i), n;
  };
}

function c(e) {
  let t = window.document.getElementById(e);
  t && t.remove();
}

function l(e) {
  return e.querySelectorAll(`button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`);
}

function u(e) {
  for (;e; ) {
    let {overflowY: t} = getComputedStyle(e);
    if (t === `auto` || t === `scroll`) {
      return e;
    }
    e = e.parentElement;
  }
  return null;
}

function d(e) {
  if (!e) {
    return;
  }
  let t = u(e);
  if (t) {
    let n = t.offsetHeight, r = t.scrollTop, {top: i, height: a} = e.getBoundingClientRect(), {top: o} = t.getBoundingClientRect(), s = i - o + r;
    (s < r || s + a > r + n) && (t.scrollTop = s);
  }
}

function f(e, t = `smooth`) {
  let n = u(e);
  if (!n) {
    return;
  }
  let r = parseFloat(getComputedStyle(n).scrollPaddingTop) || 0, i = parseFloat(getComputedStyle(e).scrollMarginTop) || 0, a = n.scrollTop + e.getBoundingClientRect().top - n.getBoundingClientRect().top - r - i;
  n.scrollTo({
    top: a,
    behavior: t
  });
}

function p(e) {
  let t = e.parentElement;
  t && (t.scrollTop > 0 && (t.scrollTop = 0), t.scrollLeft > 0 && (t.scrollLeft = 0), 
  p(t));
}

function m(e) {
  e && (e.setAttribute(`tabindex`, `-1`), e.addEventListener(`blur`, () => {
    e.removeAttribute(`tabindex`);
  }, {
    once: !0
  }), e.focus());
}

var h = class extends o.Component {
  static {
    this.defaultProps = {
      styles: ``
    };
  }
  componentDidMount() {
    this.styleId = s()`
      ${this.props.styles}
    `;
  }
  componentWillUnmount() {
    c(this.styleId);
  }
  render() {
    return null;
  }
};

export { d as a, a as c, l as i, u as n, f as o, m as r, p as s, h as t };
//# sourceMappingURL=GlobalStyleProvider-BWhTP2MU.js.map
//# sourceMappingURL=GlobalStyleProvider-BWhTP2MU.js.map