const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [ "assets/ReaderMain-B9TAVXtz.js", "assets/rolldown-runtime-B0Z9INg1.js", "assets/jsx-runtime-DU6_sasz.js", "assets/monitoring-fZj7Xvdu.js", "assets/LocaleProvider-DoP-dlkE.js", "assets/en-BaQz-p4Y.js", "assets/GlobalStyleProvider-BWhTP2MU.js", "assets/uuid-DwkZyVS8.js", "assets/MosaicProvider-AuGlbFtG.js", "assets/styled-components.browser.esm-BcYycfu6.js", "assets/injectIntl-AqYQwB7i.js", "assets/useIntl-DaqDtX5V.js", "assets/LocaleProvider-BQqibgn0.css", "assets/bookshelfLink-TIla8vSe.js", "assets/useQueryParams-CiCdBZeh.js", "assets/enrichments-DzDQ_toR.js", "assets/array-BlXv2BOg.js", "assets/StaticLoader-LtUItV9i.js", "assets/actions-B2bqznsY.js", "assets/PageAreaReporter-C9x7kiiE.js", "assets/Tooltip-DA2Rdtm3.js", "assets/AccessibilityButton-CaUTVKSa.js", "assets/DevMain-yeHc27_8.js", "assets/dist.es2015-DwRksorY.js", "assets/FeaturesMain-DkqIEpw_.js", "assets/EmbedMain-Jr8rukCL.js", "assets/useScript-DOuL-OUT.js", "assets/EnrichmentMain-VDqqcoDI.js", "assets/InlineErrorBoundary-BQmEUuh3.js", "assets/FlashcardsMain-BHTwLw-Z.js", "assets/figureOrImage-Bfd0a5pO.js", "assets/TestMain-CRd3qM-D.js" ])) => i.map(i => d[i]);

import { a as e, n as t, t as n } from "./rolldown-runtime-B0Z9INg1.js";

import { a as r, i, n as a, r as o, t as s } from "./jsx-runtime-DU6_sasz.js";

import { n as c, t as l } from "./monitoring-fZj7Xvdu.js";

(function() {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver(e => {
    for (let t of e) if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function t(e) {
    let t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), 
    t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`, 
    t;
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();

var u = n(e => {
  var t, n, r, i;
  if (typeof performance == `object` && typeof performance.now == `function`) {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var o = Date, s = o.now();
    e.unstable_now = function() {
      return o.now() - s;
    };
  }
  if (typeof window > `u` || typeof MessageChannel != `function`) {
    var c = null, l = null, u = function() {
      if (c !== null) try {
        var t = e.unstable_now();
        c(!0, t), c = null;
      } catch (e) {
        throw setTimeout(u, 0), e;
      }
    };
    t = function(e) {
      c === null ? (c = e, setTimeout(u, 0)) : setTimeout(t, 0, e);
    }, n = function(e, t) {
      l = setTimeout(e, t);
    }, r = function() {
      clearTimeout(l);
    }, e.unstable_shouldYield = function() {
      return !1;
    }, i = e.unstable_forceFrameRate = function() {};
  } else {
    var d = window.setTimeout, f = window.clearTimeout;
    if (typeof console < `u`) {
      var p = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != `function` && console.error(`This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`), 
      typeof p != `function` && console.error(`This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`);
    }
    var m = !1, h = null, g = -1, _ = 5, v = 0;
    e.unstable_shouldYield = function() {
      return e.unstable_now() >= v;
    }, i = function() {}, e.unstable_forceFrameRate = function(e) {
      0 > e || 125 < e ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : _ = 0 < e ? Math.floor(1e3 / e) : 5;
    };
    var y = new MessageChannel, b = y.port2;
    y.port1.onmessage = function() {
      if (h !== null) {
        var t = e.unstable_now();
        v = t + _;
        try {
          h(!0, t) ? b.postMessage(null) : (m = !1, h = null);
        } catch (e) {
          throw b.postMessage(null), e;
        }
      } else m = !1;
    }, t = function(e) {
      h = e, m || (m = !0, b.postMessage(null));
    }, n = function(t, n) {
      g = d(function() {
        t(e.unstable_now());
      }, n);
    }, r = function() {
      f(g), g = -1;
    };
  }
  function x(e, t) {
    var n = e.length;
    e.push(t);
    a: for (;;) {
      var r = n - 1 >>> 1, i = e[r];
      if (i !== void 0 && 0 < w(i, t)) e[r] = t, e[n] = i, n = r; else break a;
    }
  }
  function S(e) {
    return e = e[0], e === void 0 ? null : e;
  }
  function C(e) {
    var t = e[0];
    if (t !== void 0) {
      var n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, i = e.length; r < i; ) {
          var a = 2 * (r + 1) - 1, o = e[a], s = a + 1, c = e[s];
          if (o !== void 0 && 0 > w(o, n)) c !== void 0 && 0 > w(c, o) ? (e[r] = c, e[s] = n, 
          r = s) : (e[r] = o, e[a] = n, r = a); else if (c !== void 0 && 0 > w(c, n)) e[r] = c, 
          e[s] = n, r = s; else break a;
        }
      }
      return t;
    }
    return null;
  }
  function w(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n === 0 ? e.id - t.id : n;
  }
  var T = [], E = [], D = 1, O = null, k = 3, A = !1, j = !1, ee = !1;
  function te(e) {
    for (var t = S(E); t !== null; ) {
      if (t.callback === null) C(E); else if (t.startTime <= e) C(E), t.sortIndex = t.expirationTime, 
      x(T, t); else break;
      t = S(E);
    }
  }
  function ne(e) {
    if (ee = !1, te(e), !j) {
      if (S(T) !== null) j = !0, t(re); else {
        var r = S(E);
        r !== null && n(ne, r.startTime - e);
      }
    }
  }
  function re(t, i) {
    j = !1, ee && (ee = !1, r()), A = !0;
    var a = k;
    try {
      for (te(i), O = S(T); O !== null && (!(O.expirationTime > i) || t && !e.unstable_shouldYield()); ) {
        var o = O.callback;
        if (typeof o == `function`) {
          O.callback = null, k = O.priorityLevel;
          var s = o(O.expirationTime <= i);
          i = e.unstable_now(), typeof s == `function` ? O.callback = s : O === S(T) && C(T), 
          te(i);
        } else C(T);
        O = S(T);
      }
      if (O !== null) var c = !0; else {
        var l = S(E);
        l !== null && n(ne, l.startTime - i), c = !1;
      }
      return c;
    } finally {
      O = null, k = a, A = !1;
    }
  }
  var ie = i;
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, 
  e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, 
  e.unstable_cancelCallback = function(e) {
    e.callback = null;
  }, e.unstable_continueExecution = function() {
    j || A || (j = !0, t(re));
  }, e.unstable_getCurrentPriorityLevel = function() {
    return k;
  }, e.unstable_getFirstCallbackNode = function() {
    return S(T);
  }, e.unstable_next = function(e) {
    switch (k) {
     case 1:
     case 2:
     case 3:
      var t = 3;
      break;

     default:
      t = k;
    }
    var n = k;
    k = t;
    try {
      return e();
    } finally {
      k = n;
    }
  }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = ie, e.unstable_runWithPriority = function(e, t) {
    switch (e) {
     case 1:
     case 2:
     case 3:
     case 4:
     case 5:
      break;

     default:
      e = 3;
    }
    var n = k;
    k = e;
    try {
      return t();
    } finally {
      k = n;
    }
  }, e.unstable_scheduleCallback = function(i, a, o) {
    var s = e.unstable_now();
    switch (typeof o == `object` && o ? (o = o.delay, o = typeof o == `number` && 0 < o ? s + o : s) : o = s, 
    i) {
     case 1:
      var c = -1;
      break;

     case 2:
      c = 250;
      break;

     case 5:
      c = 1073741823;
      break;

     case 4:
      c = 1e4;
      break;

     default:
      c = 5e3;
    }
    return c = o + c, i = {
      id: D++,
      callback: a,
      priorityLevel: i,
      startTime: o,
      expirationTime: c,
      sortIndex: -1
    }, o > s ? (i.sortIndex = o, x(E, i), S(T) === null && i === S(E) && (ee ? r() : ee = !0, 
    n(ne, o - s))) : (i.sortIndex = c, x(T, i), j || A || (j = !0, t(re))), i;
  }, e.unstable_wrapCallback = function(e) {
    var t = k;
    return function() {
      var n = k;
      k = t;
      try {
        return e.apply(this, arguments);
      } finally {
        k = n;
      }
    };
  };
}), d = n((e, t) => {
  t.exports = u();
}), f = n(e => {
  var t = i(), n = r(), a = d();
  function o(e) {
    for (var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
    return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  if (!t) throw Error(o(227));
  var s = new Set, c = {};
  function l(e, t) {
    u(e, t), u(e + `Capture`, t);
  }
  function u(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var f = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0), p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, m = Object.prototype.hasOwnProperty, h = {}, g = {};
  function _(e) {
    return m.call(g, e) ? !0 : m.call(h, e) ? !1 : p.test(e) ? g[e] = !0 : (h[e] = !0, 
    !1);
  }
  function v(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
     case `function`:
     case `symbol`:
      return !0;

     case `boolean`:
      return r ? !1 : n === null ? (e = e.toLowerCase().slice(0, 5), e !== `data-` && e !== `aria-`) : !n.acceptsBooleans;

     default:
      return !1;
    }
  }
  function y(e, t, n, r) {
    if (t == null || v(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
     case 3:
      return !t;

     case 4:
      return !1 === t;

     case 5:
      return isNaN(t);

     case 6:
      return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function b(e, t, n, r, i, a, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, 
    this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, 
    this.removeEmptyString = o;
  }
  var x = {};
  `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e) {
    x[e] = new b(e, 0, !1, e, null, !1, !1);
  }), [ [ `acceptCharset`, `accept-charset` ], [ `className`, `class` ], [ `htmlFor`, `for` ], [ `httpEquiv`, `http-equiv` ] ].forEach(function(e) {
    var t = e[0];
    x[t] = new b(t, 1, !1, e[1], null, !1, !1);
  }), [ `contentEditable`, `draggable`, `spellCheck`, `value` ].forEach(function(e) {
    x[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), [ `autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha` ].forEach(function(e) {
    x[e] = new b(e, 2, !1, e, null, !1, !1);
  }), `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e) {
    x[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), [ `checked`, `multiple`, `muted`, `selected` ].forEach(function(e) {
    x[e] = new b(e, 3, !0, e, null, !1, !1);
  }), [ `capture`, `download` ].forEach(function(e) {
    x[e] = new b(e, 4, !1, e, null, !1, !1);
  }), [ `cols`, `rows`, `size`, `span` ].forEach(function(e) {
    x[e] = new b(e, 6, !1, e, null, !1, !1);
  }), [ `rowSpan`, `start` ].forEach(function(e) {
    x[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var S = /[\-:]([a-z])/g;
  function C(e) {
    return e[1].toUpperCase();
  }
  `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e) {
    var t = e.replace(S, C);
    x[t] = new b(t, 1, !1, e, null, !1, !1);
  }), `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e) {
    var t = e.replace(S, C);
    x[t] = new b(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
  }), [ `xml:base`, `xml:lang`, `xml:space` ].forEach(function(e) {
    var t = e.replace(S, C);
    x[t] = new b(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
  }), [ `tabIndex`, `crossOrigin` ].forEach(function(e) {
    x[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new b(`xlinkHref`, 1, !1, `xlink:href`, `http://www.w3.org/1999/xlink`, !0, !1), 
  [ `src`, `href`, `action`, `formAction` ].forEach(function(e) {
    x[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function w(e, t, n, r) {
    var i = x.hasOwnProperty(t) ? x[t] : null;
    (i === null ? !r && !(!(2 < t.length) || t[0] !== `o` && t[0] !== `O` || t[1] !== `n` && t[1] !== `N`) : i.type === 0) || (y(t, n, i, r) && (n = null), 
    r || i === null ? _(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, `` + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && `` : n : (t = i.attributeName, 
    r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && !0 === n ? `` : `` + n, 
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = 60103, D = 60106, O = 60107, k = 60108, A = 60114, j = 60109, ee = 60110, te = 60112, ne = 60113, re = 60120, ie = 60115, ae = 60116, oe = 60121, se = 60128, ce = 60129, le = 60130, ue = 60131;
  if (typeof Symbol == `function` && Symbol.for) {
    var M = Symbol.for;
    E = M(`react.element`), D = M(`react.portal`), O = M(`react.fragment`), k = M(`react.strict_mode`), 
    A = M(`react.profiler`), j = M(`react.provider`), ee = M(`react.context`), te = M(`react.forward_ref`), 
    ne = M(`react.suspense`), re = M(`react.suspense_list`), ie = M(`react.memo`), ae = M(`react.lazy`), 
    oe = M(`react.block`), M(`react.scope`), se = M(`react.opaque.id`), ce = M(`react.debug_trace_mode`), 
    le = M(`react.offscreen`), ue = M(`react.legacy_hidden`);
  }
  var de = typeof Symbol == `function` && Symbol.iterator;
  function fe(e) {
    return typeof e != `object` || !e ? null : (e = de && e[de] || e[`@@iterator`], 
    typeof e == `function` ? e : null);
  }
  var pe;
  function me(e) {
    if (pe === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      pe = t && t[1] || ``;
    }
    return `\n` + pe + e;
  }
  var he = !1;
  function ge(e, t) {
    if (!e || he) return ``;
    he = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) {
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == `object` && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (e) {
            var r = e;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (e) {
            r = e;
          }
          e.call(t.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (e) {
          r = e;
        }
        e();
      }
    } catch (e) {
      if (e && r && typeof e.stack == `string`) {
        for (var i = e.stack.split(`\n`), a = r.stack.split(`\n`), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s]; ) s--;
        for (;1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
          if (o !== 1 || s !== 1) do {
            if (o--, s--, 0 > s || i[o] !== a[s]) return `\n` + i[o].replace(` at new `, ` at `);
          } while (1 <= o && 0 <= s);
          break;
        }
      }
    } finally {
      he = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : ``) ? me(e) : ``;
  }
  function _e(e) {
    switch (e.tag) {
     case 5:
      return me(e.type);

     case 16:
      return me(`Lazy`);

     case 13:
      return me(`Suspense`);

     case 19:
      return me(`SuspenseList`);

     case 0:
     case 2:
     case 15:
      return e = ge(e.type, !1), e;

     case 11:
      return e = ge(e.type.render, !1), e;

     case 22:
      return e = ge(e.type._render, !1), e;

     case 1:
      return e = ge(e.type, !0), e;

     default:
      return ``;
    }
  }
  function ve(e) {
    if (e == null) return null;
    if (typeof e == `function`) return e.displayName || e.name || null;
    if (typeof e == `string`) return e;
    switch (e) {
     case O:
      return `Fragment`;

     case D:
      return `Portal`;

     case A:
      return `Profiler`;

     case k:
      return `StrictMode`;

     case ne:
      return `Suspense`;

     case re:
      return `SuspenseList`;
    }
    if (typeof e == `object`) switch (e.$$typeof) {
     case ee:
      return (e.displayName || `Context`) + `.Consumer`;

     case j:
      return (e._context.displayName || `Context`) + `.Provider`;

     case te:
      var t = e.render;
      return t = t.displayName || t.name || ``, e.displayName || (t === `` ? `ForwardRef` : `ForwardRef(` + t + `)`);

     case ie:
      return ve(e.type);

     case oe:
      return ve(e._render);

     case ae:
      t = e._payload, e = e._init;
      try {
        return ve(e(t));
      } catch {}
    }
    return null;
  }
  function ye(e) {
    switch (typeof e) {
     case `boolean`:
     case `number`:
     case `object`:
     case `string`:
     case `undefined`:
      return e;

     default:
      return ``;
    }
  }
  function be(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
  }
  function xe(e) {
    var t = be(e) ? `checked` : `value`, n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = `` + e[t];
    if (!e.hasOwnProperty(t) && n !== void 0 && typeof n.get == `function` && typeof n.set == `function`) {
      var i = n.get, a = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(e) {
          r = `` + e, a.call(this, e);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(e) {
          r = `` + e;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Se(e) {
    e._valueTracker ||= xe(e);
  }
  function Ce(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = ``;
    return e && (r = be(e) ? e.checked ? `true` : `false` : e.value), e = r, e !== n && (t.setValue(e), 
    !0);
  }
  function we(e) {
    if (e ||= typeof document < `u` ? document : void 0, e === void 0) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Te(e, t) {
    var r = t.checked;
    return n({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked
    });
  }
  function Ee(e, t) {
    var n = t.defaultValue == null ? `` : t.defaultValue, r = t.checked == null ? t.defaultChecked : t.checked;
    n = ye(t.value == null ? n : t.value), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === `checkbox` || t.type === `radio` ? t.checked != null : t.value != null
    };
  }
  function De(e, t) {
    t = t.checked, t != null && w(e, `checked`, t, !1);
  }
  function Oe(e, t) {
    De(e, t);
    var n = ye(t.value), r = t.type;
    if (n != null) r === `number` ? (n === 0 && e.value === `` || e.value != n) && (e.value = `` + n) : e.value !== `` + n && (e.value = `` + n); else if (r === `submit` || r === `reset`) {
      e.removeAttribute(`value`);
      return;
    }
    t.hasOwnProperty(`value`) ? N(e, t.type, n) : t.hasOwnProperty(`defaultValue`) && N(e, t.type, ye(t.defaultValue)), 
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ke(e, t, n) {
    if (t.hasOwnProperty(`value`) || t.hasOwnProperty(`defaultValue`)) {
      var r = t.type;
      if (!(r !== `submit` && r !== `reset` || t.value !== void 0 && t.value !== null)) return;
      t = `` + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== `` && (e.name = ``), e.defaultChecked = !!e._wrapperState.initialChecked, 
    n !== `` && (e.name = n);
  }
  function N(e, t, n) {
    (t !== `number` || we(e.ownerDocument) !== e) && (n == null ? e.defaultValue = `` + e._wrapperState.initialValue : e.defaultValue !== `` + n && (e.defaultValue = `` + n));
  }
  function Ae(e) {
    var n = ``;
    return t.Children.forEach(e, function(e) {
      e != null && (n += e);
    }), n;
  }
  function je(e, t) {
    return e = n({
      children: void 0
    }, t), (t = Ae(t.children)) && (e.children = t), e;
  }
  function Me(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty(`$` + e[n].value), e[n].selected !== i && (e[n].selected = i), 
      i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = `` + ye(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ne(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return n({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: `` + e._wrapperState.initialValue
    });
  }
  function Pe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Array.isArray(n)) {
          if (!(1 >= n.length)) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t ??= ``, n = t;
    }
    e._wrapperState = {
      initialValue: ye(n)
    };
  }
  function Fe(e, t) {
    var n = ye(t.value), r = ye(t.defaultValue);
    n != null && (n = `` + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), 
    r != null && (e.defaultValue = `` + r);
  }
  function Ie(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== `` && t !== null && (e.value = t);
  }
  var Le = {
    html: `http://www.w3.org/1999/xhtml`,
    mathml: `http://www.w3.org/1998/Math/MathML`,
    svg: `http://www.w3.org/2000/svg`
  };
  function Re(e) {
    switch (e) {
     case `svg`:
      return `http://www.w3.org/2000/svg`;

     case `math`:
      return `http://www.w3.org/1998/Math/MathML`;

     default:
      return `http://www.w3.org/1999/xhtml`;
    }
  }
  function ze(e, t) {
    return e == null || e === `http://www.w3.org/1999/xhtml` ? Re(t) : e === `http://www.w3.org/2000/svg` && t === `foreignObject` ? `http://www.w3.org/1999/xhtml` : e;
  }
  var Be, Ve = function(e) {
    return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== Le.svg || `innerHTML` in e) e.innerHTML = t; else {
      for (Be ||= document.createElement(`div`), Be.innerHTML = `<svg>` + t.valueOf().toString() + `</svg>`, 
      t = Be.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (;t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function He(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var P = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ue = [ `Webkit`, `ms`, `Moz`, `O` ];
  Object.keys(P).forEach(function(e) {
    Ue.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), P[t] = P[e];
    });
  });
  function We(e, t, n) {
    return t == null || typeof t == `boolean` || t === `` ? `` : n || typeof t != `number` || t === 0 || P.hasOwnProperty(e) && P[e] ? (`` + t).trim() : t + `px`;
  }
  function Ge(e, t) {
    for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf(`--`) === 0, i = We(n, t[n], r);
      n === `float` && (n = `cssFloat`), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Ke = n({
    menuitem: !0
  }, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  });
  function qe(e, t) {
    if (t) {
      if (Ke[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (!(typeof t.dangerouslySetInnerHTML == `object` && `__html` in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != `object`) throw Error(o(62));
    }
  }
  function Je(e, t) {
    if (e.indexOf(`-`) === -1) return typeof t.is == `string`;
    switch (e) {
     case `annotation-xml`:
     case `color-profile`:
     case `font-face`:
     case `font-face-src`:
     case `font-face-uri`:
     case `font-face-format`:
     case `font-face-name`:
     case `missing-glyph`:
      return !1;

     default:
      return !0;
    }
  }
  function Ye(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), 
    e.nodeType === 3 ? e.parentNode : e;
  }
  var Xe = null, Ze = null, Qe = null;
  function $e(e) {
    if (e = Mi(e)) {
      if (typeof Xe != `function`) throw Error(o(280));
      var t = e.stateNode;
      t && (t = Pi(t), Xe(e.stateNode, e.type, t));
    }
  }
  function et(e) {
    Ze ? Qe ? Qe.push(e) : Qe = [ e ] : Ze = e;
  }
  function tt() {
    if (Ze) {
      var e = Ze, t = Qe;
      if (Qe = Ze = null, $e(e), t) for (e = 0; e < t.length; e++) $e(t[e]);
    }
  }
  function nt(e, t) {
    return e(t);
  }
  function rt(e, t, n, r, i) {
    return e(t, n, r, i);
  }
  function it() {}
  var at = nt, ot = !1, F = !1;
  function st() {
    (Ze !== null || Qe !== null) && (it(), tt());
  }
  function ct(e, t, n) {
    if (F) return e(t, n);
    F = !0;
    try {
      return at(e, t, n);
    } finally {
      F = !1, st();
    }
  }
  function lt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Pi(n);
    if (r === null) return null;
    n = r[t];
    a: switch (t) {
     case `onClick`:
     case `onClickCapture`:
     case `onDoubleClick`:
     case `onDoubleClickCapture`:
     case `onMouseDown`:
     case `onMouseDownCapture`:
     case `onMouseMove`:
     case `onMouseMoveCapture`:
     case `onMouseUp`:
     case `onMouseUpCapture`:
     case `onMouseEnter`:
      (r = !r.disabled) || (e = e.type, r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`), 
      e = !r;
      break a;

     default:
      e = !1;
    }
    if (e) return null;
    if (n && typeof n != `function`) throw Error(o(231, t, typeof n));
    return n;
  }
  var ut = !1;
  if (f) try {
    var dt = {};
    Object.defineProperty(dt, "passive", {
      get: function() {
        ut = !0;
      }
    }), window.addEventListener(`test`, dt, dt), window.removeEventListener(`test`, dt, dt);
  } catch {
    ut = !1;
  }
  function ft(e, t, n, r, i, a, o, s, c) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, l);
    } catch (e) {
      this.onError(e);
    }
  }
  var pt = !1, mt = null, ht = !1, gt = null, _t = {
    onError: function(e) {
      pt = !0, mt = e;
    }
  };
  function vt(e, t, n, r, i, a, o, s, c) {
    pt = !1, mt = null, ft.apply(_t, arguments);
  }
  function yt(e, t, n, r, i, a, s, c, l) {
    if (vt.apply(this, arguments), pt) {
      if (pt) {
        var u = mt;
        pt = !1, mt = null;
      } else throw Error(o(198));
      ht || (ht = !0, gt = u);
    }
  }
  function bt(e) {
    var t = e, n = e;
    if (e.alternate) for (;t.return; ) t = t.return; else {
      e = t;
      do {
        t = e, t.flags & 1026 && (n = t.return), e = t.return;
      } while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function xt(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function St(e) {
    if (bt(e) !== e) throw Error(o(188));
  }
  function Ct(e) {
    var t = e.alternate;
    if (!t) {
      if (t = bt(e), t === null) throw Error(o(188));
      return t === e ? e : null;
    }
    for (var n = e, r = t; ;) {
      var i = n.return;
      if (i === null) break;
      var a = i.alternate;
      if (a === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === a.child) {
        for (a = i.child; a; ) {
          if (a === n) return St(i), e;
          if (a === r) return St(i), t;
          a = a.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) n = i, r = a; else {
        for (var s = !1, c = i.child; c; ) {
          if (c === n) {
            s = !0, n = i, r = a;
            break;
          }
          if (c === r) {
            s = !0, r = i, n = a;
            break;
          }
          c = c.sibling;
        }
        if (!s) {
          for (c = a.child; c; ) {
            if (c === n) {
              s = !0, n = a, r = i;
              break;
            }
            if (c === r) {
              s = !0, r = a, n = i;
              break;
            }
            c = c.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function wt(e) {
    if (e = Ct(e), !e) return null;
    for (var t = e; ;) {
      if (t.tag === 5 || t.tag === 6) return t;
      if (t.child) t.child.return = t, t = t.child; else {
        if (t === e) break;
        for (;!t.sibling; ) {
          if (!t.return || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return null;
  }
  function Tt(e, t) {
    for (var n = e.alternate; t !== null; ) {
      if (t === e || t === n) return !0;
      t = t.return;
    }
    return !1;
  }
  var Et, Dt, Ot, kt, At = !1, jt = [], Mt = null, Nt = null, Pt = null, Ft = new Map, It = new Map, Lt = [], Rt = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);
  function zt(e, t, n, r, i) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n | 16,
      nativeEvent: i,
      targetContainers: [ r ]
    };
  }
  function Bt(e, t) {
    switch (e) {
     case `focusin`:
     case `focusout`:
      Mt = null;
      break;

     case `dragenter`:
     case `dragleave`:
      Nt = null;
      break;

     case `mouseover`:
     case `mouseout`:
      Pt = null;
      break;

     case `pointerover`:
     case `pointerout`:
      Ft.delete(t.pointerId);
      break;

     case `gotpointercapture`:
     case `lostpointercapture`:
      It.delete(t.pointerId);
    }
  }
  function Vt(e, t, n, r, i, a) {
    return e === null || e.nativeEvent !== a ? (e = zt(t, n, r, i, a), t !== null && (t = Mi(t), 
    t !== null && Dt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), 
    e);
  }
  function Ht(e, t, n, r, i) {
    switch (t) {
     case `focusin`:
      return Mt = Vt(Mt, e, t, n, r, i), !0;

     case `dragenter`:
      return Nt = Vt(Nt, e, t, n, r, i), !0;

     case `mouseover`:
      return Pt = Vt(Pt, e, t, n, r, i), !0;

     case `pointerover`:
      var a = i.pointerId;
      return Ft.set(a, Vt(Ft.get(a) || null, e, t, n, r, i)), !0;

     case `gotpointercapture`:
      return a = i.pointerId, It.set(a, Vt(It.get(a) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Ut(e) {
    var t = ji(e.target);
    if (t !== null) {
      var n = bt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xt(n), t !== null) {
            e.blockedOn = t, kt(e.lanePriority, function() {
              a.unstable_runWithPriority(e.priority, function() {
                Ot(n);
              });
            });
            return;
          }
        } else if (t === 3 && n.stateNode.hydrate) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Wt(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = kn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) return t = Mi(n), t !== null && Dt(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Gt(e, t, n) {
    Wt(e) && n.delete(t);
  }
  function Kt() {
    for (At = !1; 0 < jt.length; ) {
      var e = jt[0];
      if (e.blockedOn !== null) {
        e = Mi(e.blockedOn), e !== null && Et(e);
        break;
      }
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = kn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null) {
          e.blockedOn = n;
          break;
        }
        t.shift();
      }
      e.blockedOn === null && jt.shift();
    }
    Mt !== null && Wt(Mt) && (Mt = null), Nt !== null && Wt(Nt) && (Nt = null), Pt !== null && Wt(Pt) && (Pt = null), 
    Ft.forEach(Gt), It.forEach(Gt);
  }
  function qt(e, t) {
    e.blockedOn === t && (e.blockedOn = null, At || (At = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Kt)));
  }
  function Jt(e) {
    function t(t) {
      return qt(t, e);
    }
    if (0 < jt.length) {
      qt(jt[0], e);
      for (var n = 1; n < jt.length; n++) {
        var r = jt[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Mt !== null && qt(Mt, e), Nt !== null && qt(Nt, e), Pt !== null && qt(Pt, e), 
    Ft.forEach(t), It.forEach(t), n = 0; n < Lt.length; n++) r = Lt[n], r.blockedOn === e && (r.blockedOn = null);
    for (;0 < Lt.length && (n = Lt[0], n.blockedOn === null); ) Ut(n), n.blockedOn === null && Lt.shift();
  }
  function Yt(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit` + e] = `webkit` + t, n[`Moz` + e] = `moz` + t, 
    n;
  }
  var Xt = {
    animationend: Yt(`Animation`, `AnimationEnd`),
    animationiteration: Yt(`Animation`, `AnimationIteration`),
    animationstart: Yt(`Animation`, `AnimationStart`),
    transitionend: Yt(`Transition`, `TransitionEnd`)
  }, Zt = {}, Qt = {};
  f && (Qt = document.createElement(`div`).style, `AnimationEvent` in window || (delete Xt.animationend.animation, 
  delete Xt.animationiteration.animation, delete Xt.animationstart.animation), `TransitionEvent` in window || delete Xt.transitionend.transition);
  function $t(e) {
    if (Zt[e]) return Zt[e];
    if (!Xt[e]) return e;
    var t = Xt[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Qt) return Zt[e] = t[n];
    return e;
  }
  var en = $t(`animationend`), tn = $t(`animationiteration`), nn = $t(`animationstart`), rn = $t(`transitionend`), an = new Map, on = new Map, sn = [ `abort`, `abort`, en, `animationEnd`, tn, `animationIteration`, nn, `animationStart`, `canplay`, `canPlay`, `canplaythrough`, `canPlayThrough`, `durationchange`, `durationChange`, `emptied`, `emptied`, `encrypted`, `encrypted`, `ended`, `ended`, `error`, `error`, `gotpointercapture`, `gotPointerCapture`, `load`, `load`, `loadeddata`, `loadedData`, `loadedmetadata`, `loadedMetadata`, `loadstart`, `loadStart`, `lostpointercapture`, `lostPointerCapture`, `playing`, `playing`, `progress`, `progress`, `seeking`, `seeking`, `stalled`, `stalled`, `suspend`, `suspend`, `timeupdate`, `timeUpdate`, rn, `transitionEnd`, `waiting`, `waiting` ];
  function cn(e, t) {
    for (var n = 0; n < e.length; n += 2) {
      var r = e[n], i = e[n + 1];
      i = `on` + (i[0].toUpperCase() + i.slice(1)), on.set(r, t), an.set(r, i), l(i, [ r ]);
    }
  }
  var ln = a.unstable_now;
  ln();
  var I = 8;
  function un(e) {
    if (1 & e) return I = 15, 1;
    if (2 & e) return I = 14, 2;
    if (4 & e) return I = 13, 4;
    var t = 24 & e;
    return t === 0 ? e & 32 ? (I = 11, 32) : (t = 192 & e, t === 0 ? e & 256 ? (I = 9, 
    256) : (t = 3584 & e, t === 0 ? e & 4096 ? (I = 7, 4096) : (t = 4186112 & e, t === 0 ? (t = 62914560 & e, 
    t === 0 ? e & 67108864 ? (I = 4, 67108864) : e & 134217728 ? (I = 3, 134217728) : (t = 805306368 & e, 
    t === 0 ? 1073741824 & e ? (I = 1, 1073741824) : (I = 8, e) : (I = 2, t)) : (I = 5, 
    t)) : (I = 6, t)) : (I = 8, t)) : (I = 10, t)) : (I = 12, t);
  }
  function dn(e) {
    switch (e) {
     case 99:
      return 15;

     case 98:
      return 10;

     case 97:
     case 96:
      return 8;

     case 95:
      return 2;

     default:
      return 0;
    }
  }
  function fn(e) {
    switch (e) {
     case 15:
     case 14:
      return 99;

     case 13:
     case 12:
     case 11:
     case 10:
      return 98;

     case 9:
     case 8:
     case 7:
     case 6:
     case 4:
     case 5:
      return 97;

     case 3:
     case 2:
     case 1:
      return 95;

     case 0:
      return 90;

     default:
      throw Error(o(358, e));
    }
  }
  function pn(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return I = 0;
    var r = 0, i = 0, a = e.expiredLanes, o = e.suspendedLanes, s = e.pingedLanes;
    if (a !== 0) r = a, i = I = 15; else if (a = n & 134217727, a !== 0) {
      var c = a & ~o;
      c === 0 ? (s &= a, s !== 0 && (r = un(s), i = I)) : (r = un(c), i = I);
    } else a = n & ~o, a === 0 ? s !== 0 && (r = un(s), i = I) : (r = un(a), i = I);
    if (r === 0) return 0;
    if (r = 31 - yn(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && (t & o) === 0) {
      if (un(t), i <= I) return t;
      I = i;
    }
    if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - yn(t), 
    i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function mn(e) {
    return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
  }
  function hn(e, t) {
    switch (e) {
     case 15:
      return 1;

     case 14:
      return 2;

     case 12:
      return e = gn(24 & ~t), e === 0 ? hn(10, t) : e;

     case 10:
      return e = gn(192 & ~t), e === 0 ? hn(8, t) : e;

     case 8:
      return e = gn(3584 & ~t), e === 0 && (e = gn(4186112 & ~t), e === 0 && (e = 512)), 
      e;

     case 2:
      return t = gn(805306368 & ~t), t === 0 && (t = 268435456), t;
    }
    throw Error(o(358, e));
  }
  function gn(e) {
    return e & -e;
  }
  function _n(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function vn(e, t, n) {
    e.pendingLanes |= t;
    var r = t - 1;
    e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - yn(t), e[t] = n;
  }
  var yn = Math.clz32 ? Math.clz32 : Sn, bn = Math.log, xn = Math.LN2;
  function Sn(e) {
    return e === 0 ? 32 : 31 - (bn(e) / xn | 0) | 0;
  }
  var Cn = a.unstable_UserBlockingPriority, wn = a.unstable_runWithPriority, Tn = !0;
  function En(e, t, n, r) {
    ot || it();
    var i = On, a = ot;
    ot = !0;
    try {
      rt(i, e, t, n, r);
    } finally {
      (ot = a) || st();
    }
  }
  function Dn(e, t, n, r) {
    wn(Cn, On.bind(null, e, t, n, r));
  }
  function On(e, t, n, r) {
    if (Tn) {
      var i;
      if ((i = !(t & 4)) && 0 < jt.length && -1 < Rt.indexOf(e)) e = zt(null, e, t, n, r), 
      jt.push(e); else {
        var a = kn(e, t, n, r);
        if (a === null) i && Bt(e, r); else {
          if (i) {
            if (-1 < Rt.indexOf(e)) {
              e = zt(a, e, t, n, r), jt.push(e);
              return;
            }
            if (Ht(a, e, t, n, r)) return;
            Bt(e, r);
          }
          li(e, t, r, null, n);
        }
      }
    }
  }
  function kn(e, t, n, r) {
    var i = Ye(r);
    if (i = ji(i), i !== null) {
      var a = bt(i);
      if (a === null) i = null; else {
        var o = a.tag;
        if (o === 13) {
          if (i = xt(a), i !== null) return i;
          i = null;
        } else if (o === 3) {
          if (a.stateNode.hydrate) return a.tag === 3 ? a.stateNode.containerInfo : null;
          i = null;
        } else a !== i && (i = null);
      }
    }
    return li(e, t, r, i, n), null;
  }
  var An = null, jn = null, Mn = null;
  function Nn() {
    if (Mn) return Mn;
    var e, t = jn, n = t.length, r, i = `value` in An ? An.value : An.textContent, a = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
    return Mn = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Pn(e) {
    var t = e.keyCode;
    return `charCode` in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, 
    e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Fn() {
    return !0;
  }
  function In() {
    return !1;
  }
  function Ln(e) {
    function t(t, n, r, i, a) {
      for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, 
      this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], 
      this[o] = t ? t(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Fn : In, 
      this.isPropagationStopped = In, this;
    }
    return n(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1), 
        this.isDefaultPrevented = Fn);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0), 
        this.isPropagationStopped = Fn);
      },
      persist: function() {},
      isPersistent: Fn
    }), t;
  }
  var Rn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, zn = Ln(Rn), Bn = n({}, Rn, {
    view: 0,
    detail: 0
  }), Vn = Ln(Bn), Hn, Un, Wn, Gn = n({}, Bn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return `movementX` in e ? e.movementX : (e !== Wn && (Wn && e.type === `mousemove` ? (Hn = e.screenX - Wn.screenX, 
      Un = e.screenY - Wn.screenY) : Un = Hn = 0, Wn = e), Hn);
    },
    movementY: function(e) {
      return `movementY` in e ? e.movementY : Un;
    }
  }), Kn = Ln(Gn), qn = Ln(n({}, Gn, {
    dataTransfer: 0
  })), Jn = Ln(n({}, Bn, {
    relatedTarget: 0
  })), Yn = Ln(n({}, Rn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Xn = Ln(n({}, Rn, {
    clipboardData: function(e) {
      return `clipboardData` in e ? e.clipboardData : window.clipboardData;
    }
  })), Zn = Ln(n({}, Rn, {
    data: 0
  })), Qn = {
    Esc: `Escape`,
    Spacebar: ` `,
    Left: `ArrowLeft`,
    Up: `ArrowUp`,
    Right: `ArrowRight`,
    Down: `ArrowDown`,
    Del: `Delete`,
    Win: `OS`,
    Menu: `ContextMenu`,
    Apps: `ContextMenu`,
    Scroll: `ScrollLock`,
    MozPrintableKey: `Unidentified`
  }, $n = {
    8: `Backspace`,
    9: `Tab`,
    12: `Clear`,
    13: `Enter`,
    16: `Shift`,
    17: `Control`,
    18: `Alt`,
    19: `Pause`,
    20: `CapsLock`,
    27: `Escape`,
    32: ` `,
    33: `PageUp`,
    34: `PageDown`,
    35: `End`,
    36: `Home`,
    37: `ArrowLeft`,
    38: `ArrowUp`,
    39: `ArrowRight`,
    40: `ArrowDown`,
    45: `Insert`,
    46: `Delete`,
    112: `F1`,
    113: `F2`,
    114: `F3`,
    115: `F4`,
    116: `F5`,
    117: `F6`,
    118: `F7`,
    119: `F8`,
    120: `F9`,
    121: `F10`,
    122: `F11`,
    123: `F12`,
    144: `NumLock`,
    145: `ScrollLock`,
    224: `Meta`
  }, er = {
    Alt: `altKey`,
    Control: `ctrlKey`,
    Meta: `metaKey`,
    Shift: `shiftKey`
  };
  function tr(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = er[e]) ? !!t[e] : !1;
  }
  function nr() {
    return tr;
  }
  var rr = Ln(n({}, Bn, {
    key: function(e) {
      if (e.key) {
        var t = Qn[e.key] || e.key;
        if (t !== `Unidentified`) return t;
      }
      return e.type === `keypress` ? (e = Pn(e), e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? $n[e.keyCode] || `Unidentified` : ``;
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nr,
    charCode: function(e) {
      return e.type === `keypress` ? Pn(e) : 0;
    },
    keyCode: function(e) {
      return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === `keypress` ? Pn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
    }
  })), ir = Ln(n({}, Gn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  })), ar = Ln(n({}, Bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nr
  })), or = Ln(n({}, Rn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), sr = Ln(n({}, Gn, {
    deltaX: function(e) {
      return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), cr = [ 9, 13, 27, 32 ], lr = f && `CompositionEvent` in window, ur = null;
  f && `documentMode` in document && (ur = document.documentMode);
  var dr = f && `TextEvent` in window && !ur, fr = f && (!lr || ur && 8 < ur && 11 >= ur), pr = ` `, mr = !1;
  function hr(e, t) {
    switch (e) {
     case `keyup`:
      return cr.indexOf(t.keyCode) !== -1;

     case `keydown`:
      return t.keyCode !== 229;

     case `keypress`:
     case `mousedown`:
     case `focusout`:
      return !0;

     default:
      return !1;
    }
  }
  function gr(e) {
    return e = e.detail, typeof e == `object` && `data` in e ? e.data : null;
  }
  var _r = !1;
  function vr(e, t) {
    switch (e) {
     case `compositionend`:
      return gr(t);

     case `keypress`:
      return t.which === 32 ? (mr = !0, pr) : null;

     case `textInput`:
      return e = t.data, e === pr && mr ? null : e;

     default:
      return null;
    }
  }
  function yr(e, t) {
    if (_r) return e === `compositionend` || !lr && hr(e, t) ? (e = Nn(), Mn = jn = An = null, 
    _r = !1, e) : null;
    switch (e) {
     case `paste`:
      return null;

     case `keypress`:
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;

     case `compositionend`:
      return fr && t.locale !== `ko` ? null : t.data;

     default:
      return null;
    }
  }
  var br = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function xr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === `input` ? !!br[e.type] : t === `textarea`;
  }
  function Sr(e, t, n, r) {
    et(r), t = di(t, `onChange`), 0 < t.length && (n = new zn(`onChange`, `change`, null, n, r), 
    e.push({
      event: n,
      listeners: t
    }));
  }
  var Cr = null, wr = null;
  function Tr(e) {
    ii(e, 0);
  }
  function Er(e) {
    if (Ce(Ni(e))) return e;
  }
  function Dr(e, t) {
    if (e === `change`) return t;
  }
  var Or = !1;
  if (f) {
    var kr;
    if (f) {
      var Ar = `oninput` in document;
      if (!Ar) {
        var jr = document.createElement(`div`);
        jr.setAttribute(`oninput`, `return;`), Ar = typeof jr.oninput == `function`;
      }
      kr = Ar;
    } else kr = !1;
    Or = kr && (!document.documentMode || 9 < document.documentMode);
  }
  function Mr() {
    Cr && (Cr.detachEvent(`onpropertychange`, Nr), wr = Cr = null);
  }
  function Nr(e) {
    if (e.propertyName === `value` && Er(wr)) {
      var t = [];
      if (Sr(t, wr, e, Ye(e)), e = Tr, ot) e(t); else {
        ot = !0;
        try {
          nt(e, t);
        } finally {
          ot = !1, st();
        }
      }
    }
  }
  function Pr(e, t, n) {
    e === `focusin` ? (Mr(), Cr = t, wr = n, Cr.attachEvent(`onpropertychange`, Nr)) : e === `focusout` && Mr();
  }
  function Fr(e) {
    if (e === `selectionchange` || e === `keyup` || e === `keydown`) return Er(wr);
  }
  function Ir(e, t) {
    if (e === `click`) return Er(t);
  }
  function Lr(e, t) {
    if (e === `input` || e === `change`) return Er(t);
  }
  function Rr(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
  }
  var zr = typeof Object.is == `function` ? Object.is : Rr, Br = Object.prototype.hasOwnProperty;
  function Vr(e, t) {
    if (zr(e, t)) return !0;
    if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) if (!Br.call(t, n[r]) || !zr(e[n[r]], t[n[r]])) return !1;
    return !0;
  }
  function Hr(e) {
    for (;e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ur(e, t) {
    var n = Hr(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return {
          node: n,
          offset: t - e
        };
        e = r;
      }
      a: {
        for (;n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break a;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Hr(n);
    }
  }
  function Wr(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wr(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Gr() {
    for (var e = window, t = we(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == `string`;
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow; else break;
      t = we(e.document);
    }
    return t;
  }
  function Kr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`);
  }
  var qr = f && `documentMode` in document && 11 >= document.documentMode, Jr = null, Yr = null, Xr = null, Zr = !1;
  function Qr(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zr || Jr == null || Jr !== we(r) || (r = Jr, `selectionStart` in r && Kr(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), 
    r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Xr && Vr(Xr, r) || (Xr = r, r = di(Yr, `onSelect`), 0 < r.length && (t = new zn(`onSelect`, `select`, null, t, n), 
    e.push({
      event: t,
      listeners: r
    }), t.target = Jr)));
  }
  cn(`cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange`.split(` `), 0), 
  cn(`drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel`.split(` `), 1), 
  cn(sn, 2);
  for (var $r = `change selectionchange textInput compositionstart compositionend compositionupdate`.split(` `), ei = 0; ei < $r.length; ei++) on.set($r[ei], 0);
  u(`onMouseEnter`, [ `mouseout`, `mouseover` ]), u(`onMouseLeave`, [ `mouseout`, `mouseover` ]), 
  u(`onPointerEnter`, [ `pointerout`, `pointerover` ]), u(`onPointerLeave`, [ `pointerout`, `pointerover` ]), 
  l(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), 
  l(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), 
  l(`onBeforeInput`, [ `compositionend`, `keypress`, `textInput`, `paste` ]), l(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), 
  l(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), 
  l(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var ti = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), ni = new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ti));
  function ri(e, t, n) {
    var r = e.type || `unknown-event`;
    e.currentTarget = n, yt(r, t, void 0, e), e.currentTarget = null;
  }
  function ii(e, t) {
    t = !!(t & 4);
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      a: {
        var a = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o], c = s.instance, l = s.currentTarget;
          if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
          ri(i, s, l), a = c;
        } else for (o = 0; o < r.length; o++) {
          if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
          ri(i, s, l), a = c;
        }
      }
    }
    if (ht) throw e = gt, ht = !1, gt = null, e;
  }
  function L(e, t) {
    var n = Fi(t), r = e + `__bubble`;
    n.has(r) || (ci(t, e, 2, !1), n.add(r));
  }
  var ai = `_reactListening` + Math.random().toString(36).slice(2);
  function oi(e) {
    e[ai] || (e[ai] = !0, s.forEach(function(t) {
      ni.has(t) || si(t, !1, e, null), si(t, !0, e, null);
    }));
  }
  function si(e, t, n, r) {
    var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, a = n;
    if (e === `selectionchange` && n.nodeType !== 9 && (a = n.ownerDocument), r !== null && !t && ni.has(e)) {
      if (e !== `scroll`) return;
      i |= 2, a = r;
    }
    var o = Fi(a), s = e + `__` + (t ? `capture` : `bubble`);
    o.has(s) || (t && (i |= 4), ci(a, e, i, t), o.add(s));
  }
  function ci(e, t, n, r) {
    var i = on.get(t);
    switch (i === void 0 ? 2 : i) {
     case 0:
      i = En;
      break;

     case 1:
      i = Dn;
      break;

     default:
      i = On;
    }
    n = i.bind(null, t, n, e), i = void 0, !ut || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0), 
    r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, {
      passive: i
    });
  }
  function li(e, t, n, r, i) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || s.nodeType === 8 && s.parentNode === i) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var c = o.tag;
          if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i)) return;
          o = o.return;
        }
        for (;s !== null; ) {
          if (o = ji(s), o === null) return;
          if (c = o.tag, c === 5 || c === 6) {
            r = a = o;
            continue a;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
    ct(function() {
      var r = a, i = Ye(n), o = [];
      a: {
        var s = an.get(e);
        if (s !== void 0) {
          var c = zn, l = e;
          switch (e) {
           case `keypress`:
            if (Pn(n) === 0) break a;

           case `keydown`:
           case `keyup`:
            c = rr;
            break;

           case `focusin`:
            l = `focus`, c = Jn;
            break;

           case `focusout`:
            l = `blur`, c = Jn;
            break;

           case `beforeblur`:
           case `afterblur`:
            c = Jn;
            break;

           case `click`:
            if (n.button === 2) break a;

           case `auxclick`:
           case `dblclick`:
           case `mousedown`:
           case `mousemove`:
           case `mouseup`:
           case `mouseout`:
           case `mouseover`:
           case `contextmenu`:
            c = Kn;
            break;

           case `drag`:
           case `dragend`:
           case `dragenter`:
           case `dragexit`:
           case `dragleave`:
           case `dragover`:
           case `dragstart`:
           case `drop`:
            c = qn;
            break;

           case `touchcancel`:
           case `touchend`:
           case `touchmove`:
           case `touchstart`:
            c = ar;
            break;

           case en:
           case tn:
           case nn:
            c = Yn;
            break;

           case rn:
            c = or;
            break;

           case `scroll`:
            c = Vn;
            break;

           case `wheel`:
            c = sr;
            break;

           case `copy`:
           case `cut`:
           case `paste`:
            c = Xn;
            break;

           case `gotpointercapture`:
           case `lostpointercapture`:
           case `pointercancel`:
           case `pointerdown`:
           case `pointermove`:
           case `pointerout`:
           case `pointerover`:
           case `pointerup`:
            c = ir;
          }
          var u = !!(t & 4), d = !u && e === `scroll`, f = u ? s === null ? null : s + `Capture` : s;
          u = [];
          for (var p = r, m; p !== null; ) {
            m = p;
            var h = m.stateNode;
            if (m.tag === 5 && h !== null && (m = h, f !== null && (h = lt(p, f), h != null && u.push(ui(p, h, m)))), 
            d) break;
            p = p.return;
          }
          0 < u.length && (s = new c(s, l, null, n, i), o.push({
            event: s,
            listeners: u
          }));
        }
      }
      if (!(t & 7)) {
        a: {
          if (s = e === `mouseover` || e === `pointerover`, c = e === `mouseout` || e === `pointerout`, 
          s && !(t & 16) && (l = n.relatedTarget || n.fromElement) && (ji(l) || l[ki])) break a;
          if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, 
          c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? ji(l) : null, l !== null && (d = bt(l), 
          l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
            if (u = Kn, h = `onMouseLeave`, f = `onMouseEnter`, p = `mouse`, (e === `pointerout` || e === `pointerover`) && (u = ir, 
            h = `onPointerLeave`, f = `onPointerEnter`, p = `pointer`), d = c == null ? s : Ni(c), 
            m = l == null ? s : Ni(l), s = new u(h, p + `leave`, c, n, i), s.target = d, s.relatedTarget = m, 
            h = null, ji(i) === r && (u = new u(f, p + `enter`, l, n, i), u.target = m, u.relatedTarget = d, 
            h = u), d = h, c && l) b: {
              for (u = c, f = l, p = 0, m = u; m; m = fi(m)) p++;
              for (m = 0, h = f; h; h = fi(h)) m++;
              for (;0 < p - m; ) u = fi(u), p--;
              for (;0 < m - p; ) f = fi(f), m--;
              for (;p--; ) {
                if (u === f || f !== null && u === f.alternate) break b;
                u = fi(u), f = fi(f);
              }
              u = null;
            } else u = null;
            c !== null && pi(o, s, c, u, !1), l !== null && d !== null && pi(o, d, l, u, !0);
          }
        }
        a: {
          if (s = r ? Ni(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === `select` || c === `input` && s.type === `file`) var g = Dr; else if (xr(s)) {
            if (Or) g = Lr; else {
              g = Fr;
              var _ = Pr;
            }
          } else (c = s.nodeName) && c.toLowerCase() === `input` && (s.type === `checkbox` || s.type === `radio`) && (g = Ir);
          if (g &&= g(e, r)) {
            Sr(o, g, n, i);
            break a;
          }
          _ && _(e, s, r), e === `focusout` && (_ = s._wrapperState) && _.controlled && s.type === `number` && N(s, `number`, s.value);
        }
        switch (_ = r ? Ni(r) : window, e) {
         case `focusin`:
          (xr(_) || _.contentEditable === `true`) && (Jr = _, Yr = r, Xr = null);
          break;

         case `focusout`:
          Xr = Yr = Jr = null;
          break;

         case `mousedown`:
          Zr = !0;
          break;

         case `contextmenu`:
         case `mouseup`:
         case `dragend`:
          Zr = !1, Qr(o, n, i);
          break;

         case `selectionchange`:
          if (qr) break;

         case `keydown`:
         case `keyup`:
          Qr(o, n, i);
        }
        var v;
        if (lr) b: {
          switch (e) {
           case `compositionstart`:
            var y = `onCompositionStart`;
            break b;

           case `compositionend`:
            y = `onCompositionEnd`;
            break b;

           case `compositionupdate`:
            y = `onCompositionUpdate`;
            break b;
          }
          y = void 0;
        } else _r ? hr(e, n) && (y = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (y = `onCompositionStart`);
        y && (fr && n.locale !== `ko` && (_r || y !== `onCompositionStart` ? y === `onCompositionEnd` && _r && (v = Nn()) : (An = i, 
        jn = `value` in An ? An.value : An.textContent, _r = !0)), _ = di(r, y), 0 < _.length && (y = new Zn(y, e, null, n, i), 
        o.push({
          event: y,
          listeners: _
        }), v ? y.data = v : (v = gr(n), v !== null && (y.data = v)))), (v = dr ? vr(e, n) : yr(e, n)) && (r = di(r, `onBeforeInput`), 
        0 < r.length && (i = new Zn(`onBeforeInput`, `beforeinput`, null, n, i), o.push({
          event: i,
          listeners: r
        }), i.data = v));
      }
      ii(o, t);
    });
  }
  function ui(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function di(e, t) {
    for (var n = t + `Capture`, r = []; e !== null; ) {
      var i = e, a = i.stateNode;
      i.tag === 5 && a !== null && (i = a, a = lt(e, n), a != null && r.unshift(ui(e, a, i)), 
      a = lt(e, t), a != null && r.push(ui(e, a, i))), e = e.return;
    }
    return r;
  }
  function fi(e) {
    if (e === null) return null;
    do {
      e = e.return;
    } while (e && e.tag !== 5);
    return e || null;
  }
  function pi(e, t, n, r, i) {
    for (var a = t._reactName, o = []; n !== null && n !== r; ) {
      var s = n, c = s.alternate, l = s.stateNode;
      if (c !== null && c === r) break;
      s.tag === 5 && l !== null && (s = l, i ? (c = lt(n, a), c != null && o.unshift(ui(n, c, s))) : i || (c = lt(n, a), 
      c != null && o.push(ui(n, c, s)))), n = n.return;
    }
    o.length !== 0 && e.push({
      event: t,
      listeners: o
    });
  }
  function mi() {}
  var hi = null, gi = null;
  function _i(e, t) {
    switch (e) {
     case `button`:
     case `input`:
     case `select`:
     case `textarea`:
      return !!t.autoFocus;
    }
    return !1;
  }
  function vi(e, t) {
    return e === `textarea` || e === `option` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var yi = typeof setTimeout == `function` ? setTimeout : void 0, bi = typeof clearTimeout == `function` ? clearTimeout : void 0;
  function xi(e) {
    e.nodeType === 1 ? e.textContent = `` : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ``));
  }
  function Si(e) {
    for (;e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
    }
    return e;
  }
  function Ci(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === `$` || n === `$!` || n === `$?`) {
          if (t === 0) return e;
          t--;
        } else n === `/$` && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var wi = 0;
  function Ti(e) {
    return {
      $$typeof: se,
      toString: e,
      valueOf: e
    };
  }
  var Ei = Math.random().toString(36).slice(2), Di = `__reactFiber$` + Ei, Oi = `__reactProps$` + Ei, ki = `__reactContainer$` + Ei, Ai = `__reactEvents$` + Ei;
  function ji(e) {
    var t = e[Di];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ki] || n[Di]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ci(e); e !== null; ) {
          if (n = e[Di]) return n;
          e = Ci(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Mi(e) {
    return e = e[Di] || e[ki], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ni(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Pi(e) {
    return e[Oi] || null;
  }
  function Fi(e) {
    var t = e[Ai];
    return t === void 0 && (t = e[Ai] = new Set), t;
  }
  var Ii = [], Li = -1;
  function Ri(e) {
    return {
      current: e
    };
  }
  function R(e) {
    0 > Li || (e.current = Ii[Li], Ii[Li] = null, Li--);
  }
  function z(e, t) {
    Li++, Ii[Li] = e.current, e.current = t;
  }
  var zi = {}, B = Ri(zi), V = Ri(!1), Bi = zi;
  function Vi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zi;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, a;
    for (a in n) i[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, 
    e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function H(e) {
    return e = e.childContextTypes, e != null;
  }
  function Hi() {
    R(V), R(B);
  }
  function Ui(e, t, n) {
    if (B.current !== zi) throw Error(o(168));
    z(B, t), z(V, n);
  }
  function Wi(e, t, r) {
    var i = e.stateNode;
    if (e = t.childContextTypes, typeof i.getChildContext != `function`) return r;
    for (var a in i = i.getChildContext(), i) if (!(a in e)) throw Error(o(108, ve(t) || `Unknown`, a));
    return n({}, r, i);
  }
  function Gi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zi, 
    Bi = B.current, z(B, e), z(V, V.current), !0;
  }
  function Ki(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = Wi(e, t, Bi), r.__reactInternalMemoizedMergedChildContext = e, R(V), R(B), 
    z(B, e)) : R(V), z(V, n);
  }
  var qi = null, Ji = null, Yi = a.unstable_runWithPriority, Xi = a.unstable_scheduleCallback, Zi = a.unstable_cancelCallback, Qi = a.unstable_shouldYield, $i = a.unstable_requestPaint, ea = a.unstable_now, ta = a.unstable_getCurrentPriorityLevel, na = a.unstable_ImmediatePriority, ra = a.unstable_UserBlockingPriority, ia = a.unstable_NormalPriority, aa = a.unstable_LowPriority, oa = a.unstable_IdlePriority, sa = {}, ca = $i === void 0 ? function() {} : $i, la = null, ua = null, da = !1, fa = ea(), U = 1e4 > fa ? ea : function() {
    return ea() - fa;
  };
  function pa() {
    switch (ta()) {
     case na:
      return 99;

     case ra:
      return 98;

     case ia:
      return 97;

     case aa:
      return 96;

     case oa:
      return 95;

     default:
      throw Error(o(332));
    }
  }
  function ma(e) {
    switch (e) {
     case 99:
      return na;

     case 98:
      return ra;

     case 97:
      return ia;

     case 96:
      return aa;

     case 95:
      return oa;

     default:
      throw Error(o(332));
    }
  }
  function ha(e, t) {
    return e = ma(e), Yi(e, t);
  }
  function ga(e, t, n) {
    return e = ma(e), Xi(e, t, n);
  }
  function _a() {
    if (ua !== null) {
      var e = ua;
      ua = null, Zi(e);
    }
    va();
  }
  function va() {
    if (!da && la !== null) {
      da = !0;
      var e = 0;
      try {
        var t = la;
        ha(99, function() {
          for (;e < t.length; e++) {
            var n = t[e];
            do {
              n = n(!0);
            } while (n !== null);
          }
        }), la = null;
      } catch (t) {
        throw la !== null && (la = la.slice(e + 1)), Xi(na, _a), t;
      } finally {
        da = !1;
      }
    }
  }
  var ya = T.ReactCurrentBatchConfig;
  function ba(e, t) {
    if (e && e.defaultProps) {
      for (var r in t = n({}, t), e = e.defaultProps, e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  var xa = Ri(null), Sa = null, Ca = null, W = null;
  function wa() {
    W = Ca = Sa = null;
  }
  function Ta(e) {
    var t = xa.current;
    R(xa), e.type._context._currentValue = t;
  }
  function Ea(e, t) {
    for (;e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) === t) {
        if (n === null || (n.childLanes & t) === t) break;
        n.childLanes |= t;
      } else e.childLanes |= t, n !== null && (n.childLanes |= t);
      e = e.return;
    }
  }
  function Da(e, t) {
    Sa = e, W = Ca = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ts = !0), 
    e.firstContext = null);
  }
  function Oa(e, t) {
    if (W !== e && !1 !== t && t !== 0) {
      if ((typeof t != `number` || t === 1073741823) && (W = e, t = 1073741823), t = {
        context: e,
        observedBits: t,
        next: null
      }, Ca === null) {
        if (Sa === null) throw Error(o(308));
        Ca = t, Sa.dependencies = {
          lanes: 0,
          firstContext: t,
          responders: null
        };
      } else Ca = Ca.next = t;
    }
    return e._currentValue;
  }
  var ka = !1;
  function Aa(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null
      },
      effects: null
    };
  }
  function ja(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function Ma(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Na(e, t) {
    if (e = e.updateQueue, e !== null) {
      e = e.shared;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
  }
  function Pa(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, a = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null
          };
          a === null ? i = a = o : a = a.next = o, n = n.next;
        } while (n !== null);
        a === null ? i = a = t : a = a.next = t;
      } else i = a = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Fa(e, t, r, i) {
    var a = e.updateQueue;
    ka = !1;
    var o = a.firstBaseUpdate, s = a.lastBaseUpdate, c = a.shared.pending;
    if (c !== null) {
      a.shared.pending = null;
      var l = c, u = l.next;
      l.next = null, s === null ? o = u : s.next = u, s = l;
      var d = e.alternate;
      if (d !== null) {
        d = d.updateQueue;
        var f = d.lastBaseUpdate;
        f !== s && (f === null ? d.firstBaseUpdate = u : f.next = u, d.lastBaseUpdate = l);
      }
    }
    if (o !== null) {
      f = a.baseState, s = 0, d = u = l = null;
      do {
        c = o.lane;
        var p = o.eventTime;
        if ((i & c) === c) {
          d !== null && (d = d.next = {
            eventTime: p,
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          });
          a: {
            var m = e, h = o;
            switch (c = t, p = r, h.tag) {
             case 1:
              if (m = h.payload, typeof m == `function`) {
                f = m.call(p, f, c);
                break a;
              }
              f = m;
              break a;

             case 3:
              m.flags = m.flags & -4097 | 64;

             case 0:
              if (m = h.payload, c = typeof m == `function` ? m.call(p, f, c) : m, c == null) break a;
              f = n({}, f, c);
              break a;

             case 2:
              ka = !0;
            }
          }
          o.callback !== null && (e.flags |= 32, c = a.effects, c === null ? a.effects = [ o ] : c.push(o));
        } else p = {
          eventTime: p,
          lane: c,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        }, d === null ? (u = d = p, l = f) : d = d.next = p, s |= c;
        if (o = o.next, o === null) {
          if (c = a.shared.pending, c === null) break;
          o = c.next, c.next = null, a.lastBaseUpdate = c, a.shared.pending = null;
        }
      } while (1);
      d === null && (l = f), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = d, 
      tc |= s, e.lanes = s, e.memoizedState = f;
    }
  }
  function Ia(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != `function`) throw Error(o(191, i));
        i.call(r);
      }
    }
  }
  var La = (new t.Component).refs;
  function Ra(e, t, r, i) {
    t = e.memoizedState, r = r(i, t), r = r == null ? t : n({}, t, r), e.memoizedState = r, 
    e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var za = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? bt(e) === e : !1;
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = wc(), i = Tc(e), a = Ma(r, i);
      a.payload = t, n != null && (a.callback = n), Na(e, a), Ec(e, i, r);
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = wc(), i = Tc(e), a = Ma(r, i);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), Na(e, a), Ec(e, i, r);
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = wc(), r = Tc(e), i = Ma(n, r);
      i.tag = 2, t != null && (i.callback = t), Na(e, i), Ec(e, r, n);
    }
  };
  function Ba(e, t, n, r, i, a, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Vr(n, r) || !Vr(i, a) : !0;
  }
  function Va(e, t, n) {
    var r = !1, i = zi, a = t.contextType;
    return typeof a == `object` && a ? a = Oa(a) : (i = H(t) ? Bi : B.current, r = t.contextTypes, 
    a = (r = r != null) ? Vi(e, i) : zi), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, 
    t.updater = za, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, 
    e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function Ha(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r), 
    typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r), 
    t.state !== e && za.enqueueReplaceState(t, t.state, null);
  }
  function Ua(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = La, Aa(e);
    var a = t.contextType;
    typeof a == `object` && a ? i.context = Oa(a) : (a = H(t) ? Bi : B.current, i.context = Vi(e, a)), 
    Fa(e, n, i, r), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == `function` && (Ra(e, t, a, n), 
    i.state = e.memoizedState), typeof t.getDerivedStateFromProps == `function` || typeof i.getSnapshotBeforeUpdate == `function` || typeof i.UNSAFE_componentWillMount != `function` && typeof i.componentWillMount != `function` || (t = i.state, 
    typeof i.componentWillMount == `function` && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == `function` && i.UNSAFE_componentWillMount(), 
    t !== i.state && za.enqueueReplaceState(i, i.state, null), Fa(e, n, i, r), i.state = e.memoizedState), 
    typeof i.componentDidMount == `function` && (e.flags |= 4);
  }
  var Wa = Array.isArray;
  function Ga(e, t, n) {
    if (e = n.ref, e !== null && typeof e != `function` && typeof e != `object`) {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var i = `` + e;
        return t !== null && t.ref !== null && typeof t.ref == `function` && t.ref._stringRef === i ? t.ref : (t = function(e) {
          var t = r.refs;
          t === La && (t = r.refs = {}), e === null ? delete t[i] : t[i] = e;
        }, t._stringRef = i, t);
      }
      if (typeof e != `string`) throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Ka(e, t) {
    if (e.type !== `textarea`) throw Error(o(31, Object.prototype.toString.call(t) === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : t));
  }
  function qa(e) {
    function t(t, n) {
      if (e) {
        var r = t.lastEffect;
        r === null ? t.firstEffect = t.lastEffect = n : (r.nextEffect = n, t.lastEffect = n), 
        n.nextEffect = null, n.flags = 8;
      }
    }
    function n(n, r) {
      if (!e) return null;
      for (;r !== null; ) t(n, r), r = r.sibling;
      return null;
    }
    function r(e, t) {
      for (e = new Map; t !== null; ) t.key === null ? e.set(t.index, t) : e.set(t.key, t), 
      t = t.sibling;
      return e;
    }
    function i(e, t) {
      return e = sl(e, t), e.index = 0, e.sibling = null, e;
    }
    function a(t, n, r) {
      return t.index = r, e ? (r = t.alternate, r === null ? (t.flags = 2, n) : (r = r.index, 
      r < n ? (t.flags = 2, n) : r)) : n;
    }
    function s(t) {
      return e && t.alternate === null && (t.flags = 2), t;
    }
    function c(e, t, n, r) {
      return t === null || t.tag !== 6 ? (t = dl(n, e.mode, r), t.return = e, t) : (t = i(t, n), 
      t.return = e, t);
    }
    function l(e, t, n, r) {
      return t !== null && t.elementType === n.type ? (r = i(t, n.props), r.ref = Ga(e, t, n), 
      r.return = e, r) : (r = cl(n.type, n.key, n.props, null, e.mode, r), r.ref = Ga(e, t, n), 
      r.return = e, r);
    }
    function u(e, t, n, r) {
      return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = fl(n, e.mode, r), 
      t.return = e, t) : (t = i(t, n.children || []), t.return = e, t);
    }
    function d(e, t, n, r, a) {
      return t === null || t.tag !== 7 ? (t = ll(n, e.mode, r, a), t.return = e, t) : (t = i(t, n), 
      t.return = e, t);
    }
    function f(e, t, n) {
      if (typeof t == `string` || typeof t == `number`) return t = dl(`` + t, e.mode, n), 
      t.return = e, t;
      if (typeof t == `object` && t) {
        switch (t.$$typeof) {
         case E:
          return n = cl(t.type, t.key, t.props, null, e.mode, n), n.ref = Ga(e, null, t), 
          n.return = e, n;

         case D:
          return t = fl(t, e.mode, n), t.return = e, t;
        }
        if (Wa(t) || fe(t)) return t = ll(t, e.mode, n, null), t.return = e, t;
        Ka(e, t);
      }
      return null;
    }
    function p(e, t, n, r) {
      var i = t === null ? null : t.key;
      if (typeof n == `string` || typeof n == `number`) return i === null ? c(e, t, `` + n, r) : null;
      if (typeof n == `object` && n) {
        switch (n.$$typeof) {
         case E:
          return n.key === i ? n.type === O ? d(e, t, n.props.children, r, i) : l(e, t, n, r) : null;

         case D:
          return n.key === i ? u(e, t, n, r) : null;
        }
        if (Wa(n) || fe(n)) return i === null ? d(e, t, n, r, null) : null;
        Ka(e, n);
      }
      return null;
    }
    function m(e, t, n, r, i) {
      if (typeof r == `string` || typeof r == `number`) return e = e.get(n) || null, c(t, e, `` + r, i);
      if (typeof r == `object` && r) {
        switch (r.$$typeof) {
         case E:
          return e = e.get(r.key === null ? n : r.key) || null, r.type === O ? d(t, e, r.props.children, i, r.key) : l(t, e, r, i);

         case D:
          return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
        }
        if (Wa(r) || fe(r)) return e = e.get(n) || null, d(t, e, r, i, null);
        Ka(t, r);
      }
      return null;
    }
    function h(i, o, s, c) {
      for (var l = null, u = null, d = o, h = o = 0, g = null; d !== null && h < s.length; h++) {
        d.index > h ? (g = d, d = null) : g = d.sibling;
        var _ = p(i, d, s[h], c);
        if (_ === null) {
          d === null && (d = g);
          break;
        }
        e && d && _.alternate === null && t(i, d), o = a(_, o, h), u === null ? l = _ : u.sibling = _, 
        u = _, d = g;
      }
      if (h === s.length) return n(i, d), l;
      if (d === null) {
        for (;h < s.length; h++) d = f(i, s[h], c), d !== null && (o = a(d, o, h), u === null ? l = d : u.sibling = d, 
        u = d);
        return l;
      }
      for (d = r(i, d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), 
      o = a(g, o, h), u === null ? l = g : u.sibling = g, u = g);
      return e && d.forEach(function(e) {
        return t(i, e);
      }), l;
    }
    function g(i, s, c, l) {
      var u = fe(c);
      if (typeof u != `function`) throw Error(o(150));
      if (c = u.call(c), c == null) throw Error(o(151));
      for (var d = u = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, 
      v = c.next()) {
        h.index > g ? (_ = h, h = null) : _ = h.sibling;
        var y = p(i, h, v.value, l);
        if (y === null) {
          h === null && (h = _);
          break;
        }
        e && h && y.alternate === null && t(i, h), s = a(y, s, g), d === null ? u = y : d.sibling = y, 
        d = y, h = _;
      }
      if (v.done) return n(i, h), u;
      if (h === null) {
        for (;!v.done; g++, v = c.next()) v = f(i, v.value, l), v !== null && (s = a(v, s, g), 
        d === null ? u = v : d.sibling = v, d = v);
        return u;
      }
      for (h = r(i, h); !v.done; g++, v = c.next()) v = m(h, i, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), 
      s = a(v, s, g), d === null ? u = v : d.sibling = v, d = v);
      return e && h.forEach(function(e) {
        return t(i, e);
      }), u;
    }
    return function(e, r, a, c) {
      var l = typeof a == `object` && !!a && a.type === O && a.key === null;
      l && (a = a.props.children);
      var u = typeof a == `object` && !!a;
      if (u) switch (a.$$typeof) {
       case E:
        a: {
          for (u = a.key, l = r; l !== null; ) {
            if (l.key === u) {
              switch (l.tag) {
               case 7:
                if (a.type === O) {
                  n(e, l.sibling), r = i(l, a.props.children), r.return = e, e = r;
                  break a;
                }
                break;

               default:
                if (l.elementType === a.type) {
                  n(e, l.sibling), r = i(l, a.props), r.ref = Ga(e, l, a), r.return = e, e = r;
                  break a;
                }
              }
              n(e, l);
              break;
            }
            t(e, l), l = l.sibling;
          }
          a.type === O ? (r = ll(a.props.children, e.mode, c, a.key), r.return = e, e = r) : (c = cl(a.type, a.key, a.props, null, e.mode, c), 
          c.ref = Ga(e, r, a), c.return = e, e = c);
        }
        return s(e);

       case D:
        a: {
          for (l = a.key; r !== null; ) {
            if (r.key === l) {
              if (r.tag === 4 && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                n(e, r.sibling), r = i(r, a.children || []), r.return = e, e = r;
                break a;
              }
              n(e, r);
              break;
            }
            t(e, r), r = r.sibling;
          }
          r = fl(a, e.mode, c), r.return = e, e = r;
        }
        return s(e);
      }
      if (typeof a == `string` || typeof a == `number`) return a = `` + a, r !== null && r.tag === 6 ? (n(e, r.sibling), 
      r = i(r, a), r.return = e, e = r) : (n(e, r), r = dl(a, e.mode, c), r.return = e, 
      e = r), s(e);
      if (Wa(a)) return h(e, r, a, c);
      if (fe(a)) return g(e, r, a, c);
      if (u && Ka(e, a), a === void 0 && !l) switch (e.tag) {
       case 1:
       case 22:
       case 0:
       case 11:
       case 15:
        throw Error(o(152, ve(e.type) || `Component`));
      }
      return n(e, r);
    };
  }
  var Ja = qa(!0), Ya = qa(!1), Xa = {}, Za = Ri(Xa), Qa = Ri(Xa), $a = Ri(Xa);
  function eo(e) {
    if (e === Xa) throw Error(o(174));
    return e;
  }
  function to(e, t) {
    switch (z($a, t), z(Qa, e), z(Za, Xa), e = t.nodeType, e) {
     case 9:
     case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ze(null, ``);
      break;

     default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ze(t, e);
    }
    R(Za), z(Za, t);
  }
  function no() {
    R(Za), R(Qa), R($a);
  }
  function ro(e) {
    eo($a.current);
    var t = eo(Za.current), n = ze(t, e.type);
    t !== n && (z(Qa, e), z(Za, n));
  }
  function io(e) {
    Qa.current === e && (R(Za), R(Qa));
  }
  var G = Ri(0);
  function ao(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === `$?` || n.data === `$!`)) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 64) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (;t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var oo = null, so = null, co = !1;
  function lo(e, t) {
    var n = il(5, null, null, 0);
    n.elementType = `DELETED`, n.type = `DELETED`, n.stateNode = t, n.return = e, n.flags = 8, 
    e.lastEffect === null ? e.firstEffect = e.lastEffect = n : (e.lastEffect.nextEffect = n, 
    e.lastEffect = n);
  }
  function uo(e, t) {
    switch (e.tag) {
     case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, 
      t !== null && (e.stateNode = t, !0);

     case 6:
      return t = e.pendingProps === `` || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, 
      !0);

     case 13:
      return !1;

     default:
      return !1;
    }
  }
  function fo(e) {
    if (co) {
      var t = so;
      if (t) {
        var n = t;
        if (!uo(e, t)) {
          if (t = Si(n.nextSibling), !t || !uo(e, t)) {
            e.flags = e.flags & -1025 | 2, co = !1, oo = e;
            return;
          }
          lo(oo, n);
        }
        oo = e, so = Si(t.firstChild);
      } else e.flags = e.flags & -1025 | 2, co = !1, oo = e;
    }
  }
  function po(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    oo = e;
  }
  function mo(e) {
    if (e !== oo) return !1;
    if (!co) return po(e), co = !0, !1;
    var t = e.type;
    if (e.tag !== 5 || t !== `head` && t !== `body` && !vi(t, e.memoizedProps)) for (t = so; t; ) lo(e, t), 
    t = Si(t.nextSibling);
    if (po(e), e.tag === 13) {
      if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(o(317));
      a: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === `/$`) {
              if (t === 0) {
                so = Si(e.nextSibling);
                break a;
              }
              t--;
            } else n !== `$` && n !== `$!` && n !== `$?` || t++;
          }
          e = e.nextSibling;
        }
        so = null;
      }
    } else so = oo ? Si(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ho() {
    so = oo = null, co = !1;
  }
  var go = [];
  function _o() {
    for (var e = 0; e < go.length; e++) go[e]._workInProgressVersionPrimary = null;
    go.length = 0;
  }
  var vo = T.ReactCurrentDispatcher, yo = T.ReactCurrentBatchConfig, bo = 0, K = null, q = null, J = null, xo = !1, So = !1;
  function Co() {
    throw Error(o(321));
  }
  function wo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!zr(e[n], t[n])) return !1;
    return !0;
  }
  function To(e, t, n, r, i, a) {
    if (bo = a, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, vo.current = e === null || e.memoizedState === null ? Zo : Qo, 
    e = n(r, i), So) {
      a = 0;
      do {
        if (So = !1, !(25 > a)) throw Error(o(301));
        a += 1, J = q = null, t.updateQueue = null, vo.current = $o, e = n(r, i);
      } while (So);
    }
    if (vo.current = Xo, t = q !== null && q.next !== null, bo = 0, J = q = K = null, 
    xo = !1, t) throw Error(o(300));
    return e;
  }
  function Eo() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return J === null ? K.memoizedState = J = e : J = J.next = e, J;
  }
  function Do() {
    if (q === null) {
      var e = K.alternate;
      e = e === null ? null : e.memoizedState;
    } else e = q.next;
    var t = J === null ? K.memoizedState : J.next;
    if (t !== null) J = t, q = e; else {
      if (e === null) throw Error(o(310));
      q = e, e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null
      }, J === null ? K.memoizedState = J = e : J = J.next = e;
    }
    return J;
  }
  function Oo(e, t) {
    return typeof t == `function` ? t(e) : t;
  }
  function ko(e) {
    var t = Do(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = q, i = r.baseQueue, a = n.pending;
    if (a !== null) {
      if (i !== null) {
        var s = i.next;
        i.next = a.next, a.next = s;
      }
      r.baseQueue = i = a, n.pending = null;
    }
    if (i !== null) {
      i = i.next, r = r.baseState;
      var c = s = a = null, l = i;
      do {
        var u = l.lane;
        if ((bo & u) === u) c !== null && (c = c.next = {
          lane: 0,
          action: l.action,
          eagerReducer: l.eagerReducer,
          eagerState: l.eagerState,
          next: null
        }), r = l.eagerReducer === e ? l.eagerState : e(r, l.action); else {
          var d = {
            lane: u,
            action: l.action,
            eagerReducer: l.eagerReducer,
            eagerState: l.eagerState,
            next: null
          };
          c === null ? (s = c = d, a = r) : c = c.next = d, K.lanes |= u, tc |= u;
        }
        l = l.next;
      } while (l !== null && l !== i);
      c === null ? a = r : c.next = s, zr(r, t.memoizedState) || (ts = !0), t.memoizedState = r, 
      t.baseState = a, t.baseQueue = c, n.lastRenderedState = r;
    }
    return [ t.memoizedState, n.dispatch ];
  }
  function Ao(e) {
    var t = Do(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, a = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do {
        a = e(a, s.action), s = s.next;
      } while (s !== i);
      zr(a, t.memoizedState) || (ts = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), 
      n.lastRenderedState = a;
    }
    return [ a, r ];
  }
  function jo(e, t, n) {
    var r = t._getVersion;
    r = r(t._source);
    var i = t._workInProgressVersionPrimary;
    if (i === null ? (e = e.mutableReadLanes, (e = (bo & e) === e) && (t._workInProgressVersionPrimary = r, 
    go.push(t))) : e = i === r, e) return n(t._source);
    throw go.push(t), Error(o(350));
  }
  function Mo(e, t, n, r) {
    var i = Xs;
    if (i === null) throw Error(o(349));
    var a = t._getVersion, s = a(t._source), c = vo.current, l = c.useState(function() {
      return jo(i, t, n);
    }), u = l[1], d = l[0];
    l = J;
    var f = e.memoizedState, p = f.refs, m = p.getSnapshot, h = f.source;
    f = f.subscribe;
    var g = K;
    return e.memoizedState = {
      refs: p,
      source: t,
      subscribe: r
    }, c.useEffect(function() {
      p.getSnapshot = n, p.setSnapshot = u;
      var e = a(t._source);
      if (!zr(s, e)) {
        e = n(t._source), zr(d, e) || (u(e), e = Tc(g), i.mutableReadLanes |= e & i.pendingLanes), 
        e = i.mutableReadLanes, i.entangledLanes |= e;
        for (var r = i.entanglements, o = e; 0 < o; ) {
          var c = 31 - yn(o), l = 1 << c;
          r[c] |= e, o &= ~l;
        }
      }
    }, [ n, t, r ]), c.useEffect(function() {
      return r(t._source, function() {
        var e = p.getSnapshot, n = p.setSnapshot;
        try {
          n(e(t._source));
          var r = Tc(g);
          i.mutableReadLanes |= r & i.pendingLanes;
        } catch (e) {
          n(function() {
            throw e;
          });
        }
      });
    }, [ t, r ]), zr(m, n) && zr(h, t) && zr(f, r) || (e = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: Oo,
      lastRenderedState: d
    }, e.dispatch = u = Yo.bind(null, K, e), l.queue = e, l.baseQueue = null, d = jo(i, t, n), 
    l.memoizedState = l.baseState = d), d;
  }
  function No(e, t, n) {
    return Mo(Do(), e, t, n);
  }
  function Po(e) {
    var t = Eo();
    return typeof e == `function` && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: Oo,
      lastRenderedState: e
    }, e = e.dispatch = Yo.bind(null, K, e), [ t.memoizedState, e ];
  }
  function Fo(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, t = K.updateQueue, t === null ? (t = {
      lastEffect: null
    }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, 
    n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Io(e) {
    var t = Eo();
    return e = {
      current: e
    }, t.memoizedState = e;
  }
  function Lo() {
    return Do().memoizedState;
  }
  function Ro(e, t, n, r) {
    var i = Eo();
    K.flags |= e, i.memoizedState = Fo(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function zo(e, t, n, r) {
    var i = Do();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (q !== null) {
      var o = q.memoizedState;
      if (a = o.destroy, r !== null && wo(r, o.deps)) {
        Fo(t, n, a, r);
        return;
      }
    }
    K.flags |= e, i.memoizedState = Fo(1 | t, n, a, r);
  }
  function Bo(e, t) {
    return Ro(516, 4, e, t);
  }
  function Vo(e, t) {
    return zo(516, 4, e, t);
  }
  function Ho(e, t) {
    return zo(4, 2, e, t);
  }
  function Uo(e, t) {
    if (typeof t == `function`) return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Wo(e, t, n) {
    return n = n == null ? null : n.concat([ e ]), zo(4, 2, Uo.bind(null, t, e), n);
  }
  function Go() {}
  function Ko(e, t) {
    var n = Do();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wo(t, r[1]) ? r[0] : (n.memoizedState = [ e, t ], 
    e);
  }
  function qo(e, t) {
    var n = Do();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [ e, t ], 
    e);
  }
  function Jo(e, t) {
    var n = pa();
    ha(98 > n ? 98 : n, function() {
      e(!0);
    }), ha(97 < n ? 97 : n, function() {
      var n = yo.transition;
      yo.transition = 1;
      try {
        e(!1), t();
      } finally {
        yo.transition = n;
      }
    });
  }
  function Yo(e, t, n) {
    var r = wc(), i = Tc(e), a = {
      lane: i,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null
    }, o = t.pending;
    if (o === null ? a.next = a : (a.next = o.next, o.next = a), t.pending = a, o = e.alternate, 
    e === K || o !== null && o === K) So = xo = !0; else {
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, 
      o !== null)) try {
        var s = t.lastRenderedState, c = o(s, n);
        if (a.eagerReducer = o, a.eagerState = c, zr(c, s)) return;
      } catch {}
      Ec(e, i, r);
    }
  }
  var Xo = {
    readContext: Oa,
    useCallback: Co,
    useContext: Co,
    useEffect: Co,
    useImperativeHandle: Co,
    useLayoutEffect: Co,
    useMemo: Co,
    useReducer: Co,
    useRef: Co,
    useState: Co,
    useDebugValue: Co,
    useDeferredValue: Co,
    useTransition: Co,
    useMutableSource: Co,
    useOpaqueIdentifier: Co,
    unstable_isNewReconciler: !1
  }, Zo = {
    readContext: Oa,
    useCallback: function(e, t) {
      return Eo().memoizedState = [ e, t === void 0 ? null : t ], e;
    },
    useContext: Oa,
    useEffect: Bo,
    useImperativeHandle: function(e, t, n) {
      return n = n == null ? null : n.concat([ e ]), Ro(4, 2, Uo.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return Ro(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Eo();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [ e, t ], e;
    },
    useReducer: function(e, t, n) {
      var r = Eo();
      return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = r.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, e = e.dispatch = Yo.bind(null, K, e), [ r.memoizedState, e ];
    },
    useRef: Io,
    useState: Po,
    useDebugValue: Go,
    useDeferredValue: function(e) {
      var t = Po(e), n = t[0], r = t[1];
      return Bo(function() {
        var t = yo.transition;
        yo.transition = 1;
        try {
          r(e);
        } finally {
          yo.transition = t;
        }
      }, [ e ]), n;
    },
    useTransition: function() {
      var e = Po(!1), t = e[0];
      return e = Jo.bind(null, e[1]), Io(e), [ e, t ];
    },
    useMutableSource: function(e, t, n) {
      var r = Eo();
      return r.memoizedState = {
        refs: {
          getSnapshot: t,
          setSnapshot: null
        },
        source: e,
        subscribe: n
      }, Mo(r, e, t, n);
    },
    useOpaqueIdentifier: function() {
      if (co) {
        var e = !1, t = Ti(function() {
          throw e || (e = !0, n(`r:` + (wi++).toString(36))), Error(o(355));
        }), n = Po(t)[1];
        return !(K.mode & 2) && (K.flags |= 516, Fo(5, function() {
          n(`r:` + (wi++).toString(36));
        }, void 0, null)), t;
      }
      return t = `r:` + (wi++).toString(36), Po(t), t;
    },
    unstable_isNewReconciler: !1
  }, Qo = {
    readContext: Oa,
    useCallback: Ko,
    useContext: Oa,
    useEffect: Vo,
    useImperativeHandle: Wo,
    useLayoutEffect: Ho,
    useMemo: qo,
    useReducer: ko,
    useRef: Lo,
    useState: function() {
      return ko(Oo);
    },
    useDebugValue: Go,
    useDeferredValue: function(e) {
      var t = ko(Oo), n = t[0], r = t[1];
      return Vo(function() {
        var t = yo.transition;
        yo.transition = 1;
        try {
          r(e);
        } finally {
          yo.transition = t;
        }
      }, [ e ]), n;
    },
    useTransition: function() {
      var e = ko(Oo)[0];
      return [ Lo().current, e ];
    },
    useMutableSource: No,
    useOpaqueIdentifier: function() {
      return ko(Oo)[0];
    },
    unstable_isNewReconciler: !1
  }, $o = {
    readContext: Oa,
    useCallback: Ko,
    useContext: Oa,
    useEffect: Vo,
    useImperativeHandle: Wo,
    useLayoutEffect: Ho,
    useMemo: qo,
    useReducer: Ao,
    useRef: Lo,
    useState: function() {
      return Ao(Oo);
    },
    useDebugValue: Go,
    useDeferredValue: function(e) {
      var t = Ao(Oo), n = t[0], r = t[1];
      return Vo(function() {
        var t = yo.transition;
        yo.transition = 1;
        try {
          r(e);
        } finally {
          yo.transition = t;
        }
      }, [ e ]), n;
    },
    useTransition: function() {
      var e = Ao(Oo)[0];
      return [ Lo().current, e ];
    },
    useMutableSource: No,
    useOpaqueIdentifier: function() {
      return Ao(Oo)[0];
    },
    unstable_isNewReconciler: !1
  }, es = T.ReactCurrentOwner, ts = !1;
  function ns(e, t, n, r) {
    t.child = e === null ? Ya(t, null, n, r) : Ja(t, e.child, n, r);
  }
  function rs(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return Da(t, i), r = To(e, t, n, r, a, i), e !== null && !ts ? (t.updateQueue = e.updateQueue, 
    t.flags &= -517, e.lanes &= ~i, bs(e, t, i)) : (t.flags |= 1, ns(e, t, r, i), t.child);
  }
  function is(e, t, n, r, i, a) {
    if (e === null) {
      var o = n.type;
      return typeof o == `function` && !al(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, 
      t.type = o, as(e, t, o, r, i, a)) : (e = cl(n.type, null, r, t, t.mode, a), e.ref = t.ref, 
      e.return = t, t.child = e);
    }
    return o = e.child, (i & a) === 0 && (i = o.memoizedProps, n = n.compare, n = n === null ? Vr : n, 
    n(i, r) && e.ref === t.ref) ? bs(e, t, a) : (t.flags |= 1, e = sl(o, r), e.ref = t.ref, 
    e.return = t, t.child = e);
  }
  function as(e, t, n, r, i, a) {
    if (e !== null && Vr(e.memoizedProps, r) && e.ref === t.ref) {
      if (ts = !1, (a & i) !== 0) e.flags & 16384 && (ts = !0); else return t.lanes = e.lanes, 
      bs(e, t, a);
    }
    return cs(e, t, n, r, a);
  }
  function os(e, t, n) {
    var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
    if (r.mode === `hidden` || r.mode === `unstable-defer-without-hiding`) {
      if (!(t.mode & 4)) t.memoizedState = {
        baseLanes: 0
      }, Fc(t, n); else if (n & 1073741824) t.memoizedState = {
        baseLanes: 0
      }, Fc(t, a === null ? n : a.baseLanes); else return e = a === null ? n : a.baseLanes | n, 
      t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e
      }, Fc(t, e), null;
    } else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), Fc(t, r);
    return ns(e, t, i, n), t.child;
  }
  function ss(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
  }
  function cs(e, t, n, r, i) {
    var a = H(n) ? Bi : B.current;
    return a = Vi(t, a), Da(t, i), n = To(e, t, n, r, a, i), e !== null && !ts ? (t.updateQueue = e.updateQueue, 
    t.flags &= -517, e.lanes &= ~i, bs(e, t, i)) : (t.flags |= 1, ns(e, t, n, i), t.child);
  }
  function ls(e, t, n, r, i) {
    if (H(n)) {
      var a = !0;
      Gi(t);
    } else a = !1;
    if (Da(t, i), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, 
    t.flags |= 2), Va(t, n, r), Ua(t, n, r, i), r = !0; else if (e === null) {
      var o = t.stateNode, s = t.memoizedProps;
      o.props = s;
      var c = o.context, l = n.contextType;
      typeof l == `object` && l ? l = Oa(l) : (l = H(n) ? Bi : B.current, l = Vi(t, l));
      var u = n.getDerivedStateFromProps, d = typeof u == `function` || typeof o.getSnapshotBeforeUpdate == `function`;
      d || typeof o.UNSAFE_componentWillReceiveProps != `function` && typeof o.componentWillReceiveProps != `function` || (s !== r || c !== l) && Ha(t, o, r, l), 
      ka = !1;
      var f = t.memoizedState;
      o.state = f, Fa(t, r, o, i), c = t.memoizedState, s !== r || f !== c || V.current || ka ? (typeof u == `function` && (Ra(t, n, u, r), 
      c = t.memoizedState), (s = ka || Ba(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != `function` && typeof o.componentWillMount != `function` || (typeof o.componentWillMount == `function` && o.componentWillMount(), 
      typeof o.UNSAFE_componentWillMount == `function` && o.UNSAFE_componentWillMount()), 
      typeof o.componentDidMount == `function` && (t.flags |= 4)) : (typeof o.componentDidMount == `function` && (t.flags |= 4), 
      t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, 
      r = s) : (typeof o.componentDidMount == `function` && (t.flags |= 4), r = !1);
    } else {
      o = t.stateNode, ja(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : ba(t.type, s), 
      o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == `object` && c ? c = Oa(c) : (c = H(n) ? Bi : B.current, 
      c = Vi(t, c));
      var p = n.getDerivedStateFromProps;
      (u = typeof p == `function` || typeof o.getSnapshotBeforeUpdate == `function`) || typeof o.UNSAFE_componentWillReceiveProps != `function` && typeof o.componentWillReceiveProps != `function` || (s !== d || f !== c) && Ha(t, o, r, c), 
      ka = !1, f = t.memoizedState, o.state = f, Fa(t, r, o, i);
      var m = t.memoizedState;
      s !== d || f !== m || V.current || ka ? (typeof p == `function` && (Ra(t, n, p, r), 
      m = t.memoizedState), (l = ka || Ba(t, n, l, r, f, m, c)) ? (u || typeof o.UNSAFE_componentWillUpdate != `function` && typeof o.componentWillUpdate != `function` || (typeof o.componentWillUpdate == `function` && o.componentWillUpdate(r, m, c), 
      typeof o.UNSAFE_componentWillUpdate == `function` && o.UNSAFE_componentWillUpdate(r, m, c)), 
      typeof o.componentDidUpdate == `function` && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == `function` && (t.flags |= 256)) : (typeof o.componentDidUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), 
      typeof o.getSnapshotBeforeUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), 
      t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, 
      r = l) : (typeof o.componentDidUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), 
      typeof o.getSnapshotBeforeUpdate != `function` || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), 
      r = !1);
    }
    return us(e, t, n, r, a, i);
  }
  function us(e, t, n, r, i, a) {
    ss(e, t);
    var o = !!(t.flags & 64);
    if (!r && !o) return i && Ki(t, n, !1), bs(e, t, a);
    r = t.stateNode, es.current = t;
    var s = o && typeof n.getDerivedStateFromError != `function` ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Ja(t, e.child, null, a), t.child = Ja(t, null, s, a)) : ns(e, t, s, a), 
    t.memoizedState = r.state, i && Ki(t, n, !0), t.child;
  }
  function ds(e) {
    var t = e.stateNode;
    t.pendingContext ? Ui(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ui(e, t.context, !1), 
    to(e, t.containerInfo);
  }
  var fs = {
    dehydrated: null,
    retryLane: 0
  };
  function ps(e, t, n) {
    var r = t.pendingProps, i = G.current, a = !1, o;
    return (o = !!(t.flags & 64)) || (o = e !== null && e.memoizedState === null ? !1 : !!(i & 2)), 
    o ? (a = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || !0 === r.unstable_avoidThisFallback || (i |= 1), 
    z(G, i & 1), e === null ? (r.fallback !== void 0 && fo(t), e = r.children, i = r.fallback, 
    a ? (e = ms(t, e, i, n), t.child.memoizedState = {
      baseLanes: n
    }, t.memoizedState = fs, e) : typeof r.unstable_expectedLoadTime == `number` ? (e = ms(t, e, i, n), 
    t.child.memoizedState = {
      baseLanes: n
    }, t.memoizedState = fs, t.lanes = 33554432, e) : (n = ul({
      mode: `visible`,
      children: e
    }, t.mode, n, null), n.return = t, t.child = n)) : (e.memoizedState, a ? (r = gs(e, t, r.children, r.fallback, n), 
    a = t.child, i = e.child.memoizedState, a.memoizedState = i === null ? {
      baseLanes: n
    } : {
      baseLanes: i.baseLanes | n
    }, a.childLanes = e.childLanes & ~n, t.memoizedState = fs, r) : (n = hs(e, t, r.children, n), 
    t.memoizedState = null, n));
  }
  function ms(e, t, n, r) {
    var i = e.mode, a = e.child;
    return t = {
      mode: `hidden`,
      children: t
    }, !(i & 2) && a !== null ? (a.childLanes = 0, a.pendingProps = t) : a = ul(t, i, 0, null), 
    n = ll(n, i, r, null), a.return = e, n.return = e, a.sibling = n, e.child = a, n;
  }
  function hs(e, t, n, r) {
    var i = e.child;
    return e = i.sibling, n = sl(i, {
      mode: `visible`,
      children: n
    }), !(t.mode & 2) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, 
    e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
  }
  function gs(e, t, n, r, i) {
    var a = t.mode, o = e.child;
    e = o.sibling;
    var s = {
      mode: `hidden`,
      children: n
    };
    return !(a & 2) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = s, 
    o = n.lastEffect, o === null ? t.firstEffect = t.lastEffect = null : (t.firstEffect = n.firstEffect, 
    t.lastEffect = o, o.nextEffect = null)) : n = sl(o, s), e === null ? (r = ll(r, a, i, null), 
    r.flags |= 2) : r = sl(e, r), r.return = t, n.return = t, n.sibling = r, t.child = n, 
    r;
  }
  function _s(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Ea(e.return, t);
  }
  function vs(e, t, n, r, i, a) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i,
      lastEffect: a
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, 
    o.tail = n, o.tailMode = i, o.lastEffect = a);
  }
  function ys(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, a = r.tail;
    if (ns(e, t, r.children, n), r = G.current, r & 2) r = r & 1 | 2, t.flags |= 64; else {
      if (e !== null && e.flags & 64) a: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _s(e, n); else if (e.tag === 19) _s(e, n); else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break a;
        for (;e.sibling === null; ) {
          if (e.return === null || e.return === t) break a;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (z(G, r), !(t.mode & 2)) t.memoizedState = null; else switch (i) {
     case `forwards`:
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && ao(e) === null && (i = n), 
      n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), 
      vs(t, !1, i, n, a, t.lastEffect);
      break;

     case `backwards`:
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && ao(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      vs(t, !0, n, null, a, t.lastEffect);
      break;

     case `together`:
      vs(t, !1, null, null, void 0, t.lastEffect);
      break;

     default:
      t.memoizedState = null;
    }
    return t.child;
  }
  function bs(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), tc |= t.lanes, (n & t.childLanes) !== 0) {
      if (e !== null && t.child !== e.child) throw Error(o(153));
      if (t.child !== null) {
        for (e = t.child, n = sl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, 
        n = n.sibling = sl(e, e.pendingProps), n.return = t;
        n.sibling = null;
      }
      return t.child;
    }
    return null;
  }
  var xs = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (;n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Ss = function(e, t, r, i) {
    var a = e.memoizedProps;
    if (a !== i) {
      e = t.stateNode, eo(Za.current);
      var o = null;
      switch (r) {
       case `input`:
        a = Te(e, a), i = Te(e, i), o = [];
        break;

       case `option`:
        a = je(e, a), i = je(e, i), o = [];
        break;

       case `select`:
        a = n({}, a, {
          value: void 0
        }), i = n({}, i, {
          value: void 0
        }), o = [];
        break;

       case `textarea`:
        a = Ne(e, a), i = Ne(e, i), o = [];
        break;

       default:
        typeof a.onClick != `function` && typeof i.onClick == `function` && (e.onclick = mi);
      }
      qe(r, i);
      var s;
      for (d in r = null, a) if (!i.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) {
        if (d === `style`) {
          var l = a[d];
          for (s in l) l.hasOwnProperty(s) && (r ||= {}, r[s] = ``);
        } else d !== `dangerouslySetInnerHTML` && d !== `children` && d !== `suppressContentEditableWarning` && d !== `suppressHydrationWarning` && d !== `autoFocus` && (c.hasOwnProperty(d) ? o ||= [] : (o ||= []).push(d, null));
      }
      for (d in i) {
        var u = i[d];
        if (l = a?.[d], i.hasOwnProperty(d) && u !== l && (u != null || l != null)) {
          if (d === `style`) {
            if (l) {
              for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (r ||= {}, r[s] = ``);
              for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (r ||= {}, r[s] = u[s]);
            } else r || (o ||= [], o.push(d, r)), r = u;
          } else d === `dangerouslySetInnerHTML` ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, 
          u != null && l !== u && (o ||= []).push(d, u)) : d === `children` ? typeof u != `string` && typeof u != `number` || (o ||= []).push(d, `` + u) : d !== `suppressContentEditableWarning` && d !== `suppressHydrationWarning` && (c.hasOwnProperty(d) ? (u != null && d === `onScroll` && L(`scroll`, e), 
          o || l === u || (o = [])) : typeof u == `object` && u && u.$$typeof === se ? u.toString() : (o ||= []).push(d, u));
        }
      }
      r && (o ||= []).push(`style`, r);
      var d = o;
      (t.updateQueue = d) && (t.flags |= 4);
    }
  }, Cs = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ws(e, t) {
    if (!co) switch (e.tailMode) {
     case `hidden`:
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;

     case `collapsed`:
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ts(e, t, r) {
    var i = t.pendingProps;
    switch (t.tag) {
     case 2:
     case 16:
     case 15:
     case 0:
     case 11:
     case 7:
     case 8:
     case 12:
     case 9:
     case 14:
      return null;

     case 1:
      return H(t.type) && Hi(), null;

     case 3:
      return no(), R(V), R(B), _o(), i = t.stateNode, i.pendingContext && (i.context = i.pendingContext, 
      i.pendingContext = null), (e === null || e.child === null) && (mo(t) ? t.flags |= 4 : i.hydrate || (t.flags |= 256)), 
      null;

     case 5:
      io(t);
      var a = eo($a.current);
      if (r = t.type, e !== null && t.stateNode != null) Ss(e, t, r, i, a), e.ref !== t.ref && (t.flags |= 128); else {
        if (!i) {
          if (t.stateNode === null) throw Error(o(166));
          return null;
        }
        if (e = eo(Za.current), mo(t)) {
          i = t.stateNode, r = t.type;
          var s = t.memoizedProps;
          switch (i[Di] = t, i[Oi] = s, r) {
           case `dialog`:
            L(`cancel`, i), L(`close`, i);
            break;

           case `iframe`:
           case `object`:
           case `embed`:
            L(`load`, i);
            break;

           case `video`:
           case `audio`:
            for (e = 0; e < ti.length; e++) L(ti[e], i);
            break;

           case `source`:
            L(`error`, i);
            break;

           case `img`:
           case `image`:
           case `link`:
            L(`error`, i), L(`load`, i);
            break;

           case `details`:
            L(`toggle`, i);
            break;

           case `input`:
            Ee(i, s), L(`invalid`, i);
            break;

           case `select`:
            i._wrapperState = {
              wasMultiple: !!s.multiple
            }, L(`invalid`, i);
            break;

           case `textarea`:
            Pe(i, s), L(`invalid`, i);
          }
          for (var l in qe(r, s), e = null, s) s.hasOwnProperty(l) && (a = s[l], l === `children` ? typeof a == `string` ? i.textContent !== a && (e = [ `children`, a ]) : typeof a == `number` && i.textContent !== `` + a && (e = [ `children`, `` + a ]) : c.hasOwnProperty(l) && a != null && l === `onScroll` && L(`scroll`, i));
          switch (r) {
           case `input`:
            Se(i), ke(i, s, !0);
            break;

           case `textarea`:
            Se(i), Ie(i);
            break;

           case `select`:
           case `option`:
            break;

           default:
            typeof s.onClick == `function` && (i.onclick = mi);
          }
          i = e, t.updateQueue = i, i !== null && (t.flags |= 4);
        } else {
          switch (l = a.nodeType === 9 ? a : a.ownerDocument, e === Le.html && (e = Re(r)), 
          e === Le.html ? r === `script` ? (e = l.createElement(`div`), e.innerHTML = `<script><\/script>`, 
          e = e.removeChild(e.firstChild)) : typeof i.is == `string` ? e = l.createElement(r, {
            is: i.is
          }) : (e = l.createElement(r), r === `select` && (l = e, i.multiple ? l.multiple = !0 : i.size && (l.size = i.size))) : e = l.createElementNS(e, r), 
          e[Di] = t, e[Oi] = i, xs(e, t, !1, !1), t.stateNode = e, l = Je(r, i), r) {
           case `dialog`:
            L(`cancel`, e), L(`close`, e), a = i;
            break;

           case `iframe`:
           case `object`:
           case `embed`:
            L(`load`, e), a = i;
            break;

           case `video`:
           case `audio`:
            for (a = 0; a < ti.length; a++) L(ti[a], e);
            a = i;
            break;

           case `source`:
            L(`error`, e), a = i;
            break;

           case `img`:
           case `image`:
           case `link`:
            L(`error`, e), L(`load`, e), a = i;
            break;

           case `details`:
            L(`toggle`, e), a = i;
            break;

           case `input`:
            Ee(e, i), a = Te(e, i), L(`invalid`, e);
            break;

           case `option`:
            a = je(e, i);
            break;

           case `select`:
            e._wrapperState = {
              wasMultiple: !!i.multiple
            }, a = n({}, i, {
              value: void 0
            }), L(`invalid`, e);
            break;

           case `textarea`:
            Pe(e, i), a = Ne(e, i), L(`invalid`, e);
            break;

           default:
            a = i;
          }
          qe(r, a);
          var u = a;
          for (s in u) if (u.hasOwnProperty(s)) {
            var d = u[s];
            s === `style` ? Ge(e, d) : s === `dangerouslySetInnerHTML` ? (d = d ? d.__html : void 0, 
            d != null && Ve(e, d)) : s === `children` ? typeof d == `string` ? (r !== `textarea` || d !== ``) && He(e, d) : typeof d == `number` && He(e, `` + d) : s !== `suppressContentEditableWarning` && s !== `suppressHydrationWarning` && s !== `autoFocus` && (c.hasOwnProperty(s) ? d != null && s === `onScroll` && L(`scroll`, e) : d != null && w(e, s, d, l));
          }
          switch (r) {
           case `input`:
            Se(e), ke(e, i, !1);
            break;

           case `textarea`:
            Se(e), Ie(e);
            break;

           case `option`:
            i.value != null && e.setAttribute(`value`, `` + ye(i.value));
            break;

           case `select`:
            e.multiple = !!i.multiple, s = i.value, s == null ? i.defaultValue != null && Me(e, !!i.multiple, i.defaultValue, !0) : Me(e, !!i.multiple, s, !1);
            break;

           default:
            typeof a.onClick == `function` && (e.onclick = mi);
          }
          _i(r, i) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;

     case 6:
      if (e && t.stateNode != null) Cs(e, t, e.memoizedProps, i); else {
        if (typeof i != `string` && t.stateNode === null) throw Error(o(166));
        r = eo($a.current), eo(Za.current), mo(t) ? (i = t.stateNode, r = t.memoizedProps, 
        i[Di] = t, i.nodeValue !== r && (t.flags |= 4)) : (i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i), 
        i[Di] = t, t.stateNode = i);
      }
      return null;

     case 13:
      return R(G), i = t.memoizedState, t.flags & 64 ? (t.lanes = r, t) : (i = i !== null, 
      r = !1, e === null ? t.memoizedProps.fallback !== void 0 && mo(t) : r = e.memoizedState !== null, 
      i && !r && t.mode & 2 && (e === null && !0 !== t.memoizedProps.unstable_avoidThisFallback || G.current & 1 ? Q === 0 && (Q = 3) : ((Q === 0 || Q === 3) && (Q = 4), 
      Xs === null || !(tc & 134217727) && !(nc & 134217727) || Ac(Xs, Z))), (i || r) && (t.flags |= 4), 
      null);

     case 4:
      return no(), e === null && oi(t.stateNode.containerInfo), null;

     case 10:
      return Ta(t), null;

     case 17:
      return H(t.type) && Hi(), null;

     case 19:
      if (R(G), i = t.memoizedState, i === null) return null;
      if (s = !!(t.flags & 64), l = i.rendering, l === null) {
        if (s) ws(i, !1); else {
          if (Q !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null; ) {
            if (l = ao(e), l !== null) {
              for (t.flags |= 64, ws(i, !1), s = l.updateQueue, s !== null && (t.updateQueue = s, 
              t.flags |= 4), i.lastEffect === null && (t.firstEffect = null), t.lastEffect = i.lastEffect, 
              i = r, r = t.child; r !== null; ) s = r, e = i, s.flags &= 2, s.nextEffect = null, 
              s.firstEffect = null, s.lastEffect = null, l = s.alternate, l === null ? (s.childLanes = 0, 
              s.lanes = e, s.child = null, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, 
              s.dependencies = null, s.stateNode = null) : (s.childLanes = l.childLanes, s.lanes = l.lanes, 
              s.child = l.child, s.memoizedProps = l.memoizedProps, s.memoizedState = l.memoizedState, 
              s.updateQueue = l.updateQueue, s.type = l.type, e = l.dependencies, s.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), r = r.sibling;
              return z(G, G.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && U() > oc && (t.flags |= 64, s = !0, ws(i, !1), t.lanes = 33554432);
        }
      } else {
        if (!s) {
          if (e = ao(l), e !== null) {
            if (t.flags |= 64, s = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, 
            t.flags |= 4), ws(i, !0), i.tail === null && i.tailMode === `hidden` && !l.alternate && !co) return t = t.lastEffect = i.lastEffect, 
            t !== null && (t.nextEffect = null), null;
          } else 2 * U() - i.renderingStartTime > oc && r !== 1073741824 && (t.flags |= 64, 
          s = !0, ws(i, !1), t.lanes = 33554432);
        }
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (r = i.last, r === null ? t.child = l : r.sibling = l, 
        i.last = l);
      }
      return i.tail === null ? null : (r = i.tail, i.rendering = r, i.tail = r.sibling, 
      i.lastEffect = t.lastEffect, i.renderingStartTime = U(), r.sibling = null, t = G.current, 
      z(G, s ? t & 1 | 2 : t & 1), r);

     case 23:
     case 24:
      return Ic(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && i.mode !== `unstable-defer-without-hiding` && (t.flags |= 4), 
      null;
    }
    throw Error(o(156, t.tag));
  }
  function Es(e) {
    switch (e.tag) {
     case 1:
      H(e.type) && Hi();
      var t = e.flags;
      return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;

     case 3:
      if (no(), R(V), R(B), _o(), t = e.flags, t & 64) throw Error(o(285));
      return e.flags = t & -4097 | 64, e;

     case 5:
      return io(e), null;

     case 13:
      return R(G), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;

     case 19:
      return R(G), null;

     case 4:
      return no(), null;

     case 10:
      return Ta(e), null;

     case 23:
     case 24:
      return Ic(), null;

     default:
      return null;
    }
  }
  function Ds(e, t) {
    try {
      var n = ``, r = t;
      do {
        n += _e(r), r = r.return;
      } while (r);
      var i = n;
    } catch (e) {
      i = `\nError generating stack: ` + e.message + `\n` + e.stack;
    }
    return {
      value: e,
      source: t,
      stack: i
    };
  }
  function Os(e, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  var ks = typeof WeakMap == `function` ? WeakMap : Map;
  function As(e, t, n) {
    n = Ma(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      cc || (cc = !0, lc = r), Os(e, t);
    }, n;
  }
  function js(e, t, n) {
    n = Ma(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == `function`) {
      var i = t.value;
      n.payload = function() {
        return Os(e, t), r(i);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == `function` && (n.callback = function() {
      typeof r != `function` && (uc === null ? uc = new Set([ this ]) : uc.add(this), 
      Os(e, t));
      var n = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: n === null ? `` : n
      });
    }), n;
  }
  var Ms = typeof WeakSet == `function` ? WeakSet : Set;
  function Ns(e) {
    var t = e.ref;
    if (t !== null) {
      if (typeof t == `function`) try {
        t(null);
      } catch (t) {
        $c(e, t);
      } else t.current = null;
    }
  }
  function Ps(e, t) {
    switch (t.tag) {
     case 0:
     case 11:
     case 15:
     case 22:
      return;

     case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps, r = e.memoizedState;
        e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : ba(t.type, n), r), 
        e.__reactInternalSnapshotBeforeUpdate = t;
      }
      return;

     case 3:
      t.flags & 256 && xi(t.stateNode.containerInfo);
      return;

     case 5:
     case 6:
     case 4:
     case 17:
      return;
    }
    throw Error(o(163));
  }
  function Fs(e, t, n) {
    switch (n.tag) {
     case 0:
     case 11:
     case 15:
     case 22:
      if (t = n.updateQueue, t = t === null ? null : t.lastEffect, t !== null) {
        e = t = t.next;
        do {
          if ((e.tag & 3) == 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (t = n.updateQueue, t = t === null ? null : t.lastEffect, t !== null) {
        e = t = t.next;
        do {
          var i = e;
          r = i.next, i = i.tag, i & 4 && i & 1 && (Xc(n, e), Yc(n, e)), e = r;
        } while (e !== t);
      }
      return;

     case 1:
      e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : ba(n.type, t.memoizedProps), 
      e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), 
      t = n.updateQueue, t !== null && Ia(n, t, e);
      return;

     case 3:
      if (t = n.updateQueue, t !== null) {
        if (e = null, n.child !== null) switch (n.child.tag) {
         case 5:
          e = n.child.stateNode;
          break;

         case 1:
          e = n.child.stateNode;
        }
        Ia(n, t, e);
      }
      return;

     case 5:
      e = n.stateNode, t === null && n.flags & 4 && _i(n.type, n.memoizedProps) && e.focus();
      return;

     case 6:
      return;

     case 4:
      return;

     case 12:
      return;

     case 13:
      n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, 
      n !== null && (n = n.dehydrated, n !== null && Jt(n))));
      return;

     case 19:
     case 17:
     case 20:
     case 21:
     case 23:
     case 24:
      return;
    }
    throw Error(o(163));
  }
  function Is(e, t) {
    for (var n = e; ;) {
      if (n.tag === 5) {
        var r = n.stateNode;
        if (t) r = r.style, typeof r.setProperty == `function` ? r.setProperty(`display`, `none`, `important`) : r.display = `none`; else {
          r = n.stateNode;
          var i = n.memoizedProps.style;
          i = i != null && i.hasOwnProperty(`display`) ? i.display : null, r.style.display = We(`display`, i);
        }
      } else if (n.tag === 6) n.stateNode.nodeValue = t ? `` : n.memoizedProps; else if ((n.tag !== 23 && n.tag !== 24 || n.memoizedState === null || n === e) && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (;n.sibling === null; ) {
        if (n.return === null || n.return === e) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  function Ls(e, t) {
    if (Ji && typeof Ji.onCommitFiberUnmount == `function`) try {
      Ji.onCommitFiberUnmount(qi, t);
    } catch {}
    switch (t.tag) {
     case 0:
     case 11:
     case 14:
     case 15:
     case 22:
      if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
        var n = e = e.next;
        do {
          var r = n, i = r.destroy;
          if (r = r.tag, i !== void 0) {
            if (r & 4) Xc(t, n); else {
              r = t;
              try {
                i();
              } catch (e) {
                $c(r, e);
              }
            }
          }
          n = n.next;
        } while (n !== e);
      }
      break;

     case 1:
      if (Ns(t), e = t.stateNode, typeof e.componentWillUnmount == `function`) try {
        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
      } catch (e) {
        $c(t, e);
      }
      break;

     case 5:
      Ns(t);
      break;

     case 4:
      Us(e, t);
    }
  }
  function Rs(e) {
    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, 
    e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, 
    e.return = null, e.updateQueue = null;
  }
  function zs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bs(e) {
    a: {
      for (var t = e.return; t !== null; ) {
        if (zs(t)) break a;
        t = t.return;
      }
      throw Error(o(160));
    }
    var n = t;
    switch (t = n.stateNode, n.tag) {
     case 5:
      var r = !1;
      break;

     case 3:
      t = t.containerInfo, r = !0;
      break;

     case 4:
      t = t.containerInfo, r = !0;
      break;

     default:
      throw Error(o(161));
    }
    n.flags & 16 && (He(t, ``), n.flags &= -17);
    a: b: for (n = e; ;) {
      for (;n.sibling === null; ) {
        if (n.return === null || zs(n.return)) {
          n = null;
          break a;
        }
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue b;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) {
        n = n.stateNode;
        break a;
      }
    }
    r ? Vs(e, n, t) : Hs(e, n, t);
  }
  function Vs(e, t, n) {
    var r = e.tag, i = r === 5 || r === 6;
    if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, 
    t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mi)); else if (r !== 4 && (e = e.child, 
    e !== null)) for (Vs(e, t, n), e = e.sibling; e !== null; ) Vs(e, t, n), e = e.sibling;
  }
  function Hs(e, t, n) {
    var r = e.tag, i = r === 5 || r === 6;
    if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, 
    e !== null)) for (Hs(e, t, n), e = e.sibling; e !== null; ) Hs(e, t, n), e = e.sibling;
  }
  function Us(e, t) {
    for (var n = t, r = !1, i, a; ;) {
      if (!r) {
        r = n.return;
        a: for (;;) {
          if (r === null) throw Error(o(160));
          switch (i = r.stateNode, r.tag) {
           case 5:
            a = !1;
            break a;

           case 3:
            i = i.containerInfo, a = !0;
            break a;

           case 4:
            i = i.containerInfo, a = !0;
            break a;
          }
          r = r.return;
        }
        r = !0;
      }
      if (n.tag === 5 || n.tag === 6) {
        a: for (var s = e, c = n, l = c; ;) if (Ls(s, l), l.child !== null && l.tag !== 4) l.child.return = l, 
        l = l.child; else {
          if (l === c) break a;
          for (;l.sibling === null; ) {
            if (l.return === null || l.return === c) break a;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
        a ? (s = i, c = n.stateNode, s.nodeType === 8 ? s.parentNode.removeChild(c) : s.removeChild(c)) : i.removeChild(n.stateNode);
      } else if (n.tag === 4) {
        if (n.child !== null) {
          i = n.stateNode.containerInfo, a = !0, n.child.return = n, n = n.child;
          continue;
        }
      } else if (Ls(e, n), n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (;n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return, n.tag === 4 && (r = !1);
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  function Ws(e, t) {
    switch (t.tag) {
     case 0:
     case 11:
     case 14:
     case 15:
     case 22:
      var n = t.updateQueue;
      if (n = n === null ? null : n.lastEffect, n !== null) {
        var r = n = n.next;
        do {
          (r.tag & 3) == 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
        } while (r !== n);
      }
      return;

     case 1:
      return;

     case 5:
      if (n = t.stateNode, n != null) {
        r = t.memoizedProps;
        var i = e === null ? r : e.memoizedProps;
        e = t.type;
        var a = t.updateQueue;
        if (t.updateQueue = null, a !== null) {
          for (n[Oi] = r, e === `input` && r.type === `radio` && r.name != null && De(n, r), 
          Je(e, i), t = Je(e, r), i = 0; i < a.length; i += 2) {
            var s = a[i], c = a[i + 1];
            s === `style` ? Ge(n, c) : s === `dangerouslySetInnerHTML` ? Ve(n, c) : s === `children` ? He(n, c) : w(n, s, c, t);
          }
          switch (e) {
           case `input`:
            Oe(n, r);
            break;

           case `textarea`:
            Fe(n, r);
            break;

           case `select`:
            e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, a = r.value, 
            a == null ? e !== !!r.multiple && (r.defaultValue == null ? Me(n, !!r.multiple, r.multiple ? [] : ``, !1) : Me(n, !!r.multiple, r.defaultValue, !0)) : Me(n, !!r.multiple, a, !1);
          }
        }
      }
      return;

     case 6:
      if (t.stateNode === null) throw Error(o(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;

     case 3:
      n = t.stateNode, n.hydrate && (n.hydrate = !1, Jt(n.containerInfo));
      return;

     case 12:
      return;

     case 13:
      t.memoizedState !== null && (ac = U(), Is(t.child, !0)), Gs(t);
      return;

     case 19:
      Gs(t);
      return;

     case 17:
      return;

     case 23:
     case 24:
      Is(t, t.memoizedState !== null);
      return;
    }
    throw Error(o(163));
  }
  function Gs(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ms), t.forEach(function(t) {
        var r = tl.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
    }
  }
  function Ks(e, t) {
    return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) && (t = t.memoizedState, 
    t !== null && t.dehydrated === null);
  }
  var qs = Math.ceil, Js = T.ReactCurrentDispatcher, Ys = T.ReactCurrentOwner, Y = 0, Xs = null, X = null, Z = 0, Zs = 0, Qs = Ri(0), Q = 0, $s = null, ec = 0, tc = 0, nc = 0, rc = 0, ic = null, ac = 0, oc = 1 / 0;
  function sc() {
    oc = U() + 500;
  }
  var $ = null, cc = !1, lc = null, uc = null, dc = !1, fc = null, pc = 90, mc = [], hc = [], gc = null, _c = 0, vc = null, yc = -1, bc = 0, xc = 0, Sc = null, Cc = !1;
  function wc() {
    return Y & 48 ? U() : yc === -1 ? yc = U() : yc;
  }
  function Tc(e) {
    if (e = e.mode, !(e & 2)) return 1;
    if (!(e & 4)) return pa() === 99 ? 1 : 2;
    if (bc === 0 && (bc = ec), ya.transition !== 0) {
      xc !== 0 && (xc = ic === null ? 0 : ic.pendingLanes), e = bc;
      var t = 4186112 & ~xc;
      return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), 
      t;
    }
    return e = pa(), Y & 4 && e === 98 ? e = hn(12, bc) : (e = dn(e), e = hn(e, bc)), 
    e;
  }
  function Ec(e, t, n) {
    if (50 < _c) throw _c = 0, vc = null, Error(o(185));
    if (e = Dc(e, t), e === null) return null;
    vn(e, t, n), e === Xs && (nc |= t, Q === 4 && Ac(e, Z));
    var r = pa();
    t === 1 ? Y & 8 && !(Y & 48) ? jc(e) : (Oc(e, n), Y === 0 && (sc(), _a())) : (!(Y & 4) || r !== 98 && r !== 99 || (gc === null ? gc = new Set([ e ]) : gc.add(e)), 
    Oc(e, n)), ic = e;
  }
  function Dc(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, 
    n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  function Oc(e, t) {
    for (var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - yn(o), c = 1 << s, l = a[s];
      if (l === -1) {
        if ((c & r) === 0 || (c & i) !== 0) {
          l = t, un(c);
          var u = I;
          a[s] = 10 <= u ? l + 250 : 6 <= u ? l + 5e3 : -1;
        }
      } else l <= t && (e.expiredLanes |= c);
      o &= ~c;
    }
    if (r = pn(e, e === Xs ? Z : 0), t = I, r === 0) n !== null && (n !== sa && Zi(n), 
    e.callbackNode = null, e.callbackPriority = 0); else {
      if (n !== null) {
        if (e.callbackPriority === t) return;
        n !== sa && Zi(n);
      }
      t === 15 ? (n = jc.bind(null, e), la === null ? (la = [ n ], ua = Xi(na, va)) : la.push(n), 
      n = sa) : t === 14 ? n = ga(99, jc.bind(null, e)) : (n = fn(t), n = ga(n, kc.bind(null, e))), 
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function kc(e) {
    if (yc = -1, xc = bc = 0, Y & 48) throw Error(o(327));
    var t = e.callbackNode;
    if (Jc() && e.callbackNode !== t) return null;
    var n = pn(e, e === Xs ? Z : 0);
    if (n === 0) return null;
    var r = n, i = Y;
    Y |= 16;
    var a = zc();
    (Xs !== e || Z !== r) && (sc(), Lc(e, r));
    do {
      try {
        Hc();
        break;
      } catch (t) {
        Rc(e, t);
      }
    } while (1);
    if (wa(), Js.current = a, Y = i, X === null ? (Xs = null, Z = 0, r = Q) : r = 0, 
    (ec & nc) !== 0) Lc(e, 0); else if (r !== 0) {
      if (r === 2 && (Y |= 64, e.hydrate && (e.hydrate = !1, xi(e.containerInfo)), n = mn(e), 
      n !== 0 && (r = Bc(e, n))), r === 1) throw t = $s, Lc(e, 0), Ac(e, n), Oc(e, U()), 
      t;
      switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
       case 0:
       case 1:
        throw Error(o(345));

       case 2:
        Gc(e);
        break;

       case 3:
        if (Ac(e, n), (n & 62914560) === n && (r = ac + 500 - U(), 10 < r)) {
          if (pn(e, 0) !== 0) break;
          if (i = e.suspendedLanes, (i & n) !== n) {
            wc(), e.pingedLanes |= e.suspendedLanes & i;
            break;
          }
          e.timeoutHandle = yi(Gc.bind(null, e), r);
          break;
        }
        Gc(e);
        break;

       case 4:
        if (Ac(e, n), (n & 4186112) === n) break;
        for (r = e.eventTimes, i = -1; 0 < n; ) {
          var s = 31 - yn(n);
          a = 1 << s, s = r[s], s > i && (i = s), n &= ~a;
        }
        if (n = i, n = U() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * qs(n / 1960)) - n, 
        10 < n) {
          e.timeoutHandle = yi(Gc.bind(null, e), n);
          break;
        }
        Gc(e);
        break;

       case 5:
        Gc(e);
        break;

       default:
        throw Error(o(329));
      }
    }
    return Oc(e, U()), e.callbackNode === t ? kc.bind(null, e) : null;
  }
  function Ac(e, t) {
    for (t &= ~rc, t &= ~nc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - yn(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function jc(e) {
    if (Y & 48) throw Error(o(327));
    if (Jc(), e === Xs && (e.expiredLanes & Z) !== 0) {
      var t = Z, n = Bc(e, t);
      (ec & nc) !== 0 && (t = pn(e, t), n = Bc(e, t));
    } else t = pn(e, 0), n = Bc(e, t);
    if (e.tag !== 0 && n === 2 && (Y |= 64, e.hydrate && (e.hydrate = !1, xi(e.containerInfo)), 
    t = mn(e), t !== 0 && (n = Bc(e, t))), n === 1) throw n = $s, Lc(e, 0), Ac(e, t), 
    Oc(e, U()), n;
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gc(e), Oc(e, U()), 
    null;
  }
  function Mc() {
    if (gc !== null) {
      var e = gc;
      gc = null, e.forEach(function(e) {
        e.expiredLanes |= 24 & e.pendingLanes, Oc(e, U());
      });
    }
    _a();
  }
  function Nc(e, t) {
    var n = Y;
    Y |= 1;
    try {
      return e(t);
    } finally {
      Y = n, Y === 0 && (sc(), _a());
    }
  }
  function Pc(e, t) {
    var n = Y;
    Y &= -2, Y |= 8;
    try {
      return e(t);
    } finally {
      Y = n, Y === 0 && (sc(), _a());
    }
  }
  function Fc(e, t) {
    z(Qs, Zs), Zs |= t, ec |= t;
  }
  function Ic() {
    Zs = Qs.current, R(Qs);
  }
  function Lc(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, bi(n)), X !== null) for (n = X.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
       case 1:
        r = r.type.childContextTypes, r != null && Hi();
        break;

       case 3:
        no(), R(V), R(B), _o();
        break;

       case 5:
        io(r);
        break;

       case 4:
        no();
        break;

       case 13:
        R(G);
        break;

       case 19:
        R(G);
        break;

       case 10:
        Ta(r);
        break;

       case 23:
       case 24:
        Ic();
      }
      n = n.return;
    }
    Xs = e, X = sl(e.current, null), Z = Zs = ec = t, Q = 0, $s = null, rc = nc = tc = 0;
  }
  function Rc(e, t) {
    do {
      var n = X;
      try {
        if (wa(), vo.current = Xo, xo) {
          for (var r = K.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          xo = !1;
        }
        if (bo = 0, J = q = K = null, So = !1, Ys.current = null, n === null || n.return === null) {
          Q = 1, $s = t, X = null;
          break;
        }
        a: {
          var a = e, o = n.return, s = n, c = t;
          if (t = Z, s.flags |= 2048, s.firstEffect = s.lastEffect = null, typeof c == `object` && c && typeof c.then == `function`) {
            var l = c;
            if (!(s.mode & 2)) {
              var u = s.alternate;
              u ? (s.updateQueue = u.updateQueue, s.memoizedState = u.memoizedState, s.lanes = u.lanes) : (s.updateQueue = null, 
              s.memoizedState = null);
            }
            var d = !!(G.current & 1), f = o;
            do {
              var p;
              if (p = f.tag === 13) {
                var m = f.memoizedState;
                if (m !== null) p = m.dehydrated !== null; else {
                  var h = f.memoizedProps;
                  p = h.fallback === void 0 ? !1 : !0 !== h.unstable_avoidThisFallback || !d;
                }
              }
              if (p) {
                var g = f.updateQueue;
                if (g === null) {
                  var _ = new Set;
                  _.add(l), f.updateQueue = _;
                } else g.add(l);
                if (!(f.mode & 2)) {
                  if (f.flags |= 64, s.flags |= 16384, s.flags &= -2981, s.tag === 1) {
                    if (s.alternate === null) s.tag = 17; else {
                      var v = Ma(-1, 1);
                      v.tag = 2, Na(s, v);
                    }
                  }
                  s.lanes |= 1;
                  break a;
                }
                c = void 0, s = t;
                var y = a.pingCache;
                if (y === null ? (y = a.pingCache = new ks, c = new Set, y.set(l, c)) : (c = y.get(l), 
                c === void 0 && (c = new Set, y.set(l, c))), !c.has(s)) {
                  c.add(s);
                  var b = el.bind(null, a, l, s);
                  l.then(b, b);
                }
                f.flags |= 4096, f.lanes = t;
                break a;
              }
              f = f.return;
            } while (f !== null);
            c = Error((ve(s.type) || `A React component`) + ` suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          Q !== 5 && (Q = 2), c = Ds(c, s), f = o;
          do {
            switch (f.tag) {
             case 3:
              a = c, f.flags |= 4096, t &= -t, f.lanes |= t;
              var x = As(f, a, t);
              Pa(f, x);
              break a;

             case 1:
              a = c;
              var S = f.type, C = f.stateNode;
              if (!(f.flags & 64) && (typeof S.getDerivedStateFromError == `function` || C !== null && typeof C.componentDidCatch == `function` && (uc === null || !uc.has(C)))) {
                f.flags |= 4096, t &= -t, f.lanes |= t;
                var w = js(f, a, t);
                Pa(f, w);
                break a;
              }
            }
            f = f.return;
          } while (f !== null);
        }
        Wc(n);
      } catch (e) {
        t = e, X === n && n !== null && (X = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function zc() {
    var e = Js.current;
    return Js.current = Xo, e === null ? Xo : e;
  }
  function Bc(e, t) {
    var n = Y;
    Y |= 16;
    var r = zc();
    Xs === e && Z === t || Lc(e, t);
    do {
      try {
        Vc();
        break;
      } catch (t) {
        Rc(e, t);
      }
    } while (1);
    if (wa(), Y = n, Js.current = r, X !== null) throw Error(o(261));
    return Xs = null, Z = 0, Q;
  }
  function Vc() {
    for (;X !== null; ) Uc(X);
  }
  function Hc() {
    for (;X !== null && !Qi(); ) Uc(X);
  }
  function Uc(e) {
    var t = nl(e.alternate, e, Zs);
    e.memoizedProps = e.pendingProps, t === null ? Wc(e) : X = t, Ys.current = null;
  }
  function Wc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 2048) {
        if (n = Es(t), n !== null) {
          n.flags &= 2047, X = n;
          return;
        }
        e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
      } else {
        if (n = Ts(n, t, Zs), n !== null) {
          X = n;
          return;
        }
        if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || Zs & 1073741824 || !(n.mode & 4)) {
          for (var r = 0, i = n.child; i !== null; ) r |= i.lanes | i.childLanes, i = i.sibling;
          n.childLanes = r;
        }
        e !== null && !(e.flags & 2048) && (e.firstEffect === null && (e.firstEffect = t.firstEffect), 
        t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), 
        e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect === null ? e.firstEffect = t : e.lastEffect.nextEffect = t, 
        e.lastEffect = t));
      }
      if (t = t.sibling, t !== null) {
        X = t;
        return;
      }
      X = t = e;
    } while (t !== null);
    Q === 0 && (Q = 5);
  }
  function Gc(e) {
    var t = pa();
    return ha(99, Kc.bind(null, e, t)), null;
  }
  function Kc(e, t) {
    do {
      Jc();
    } while (fc !== null);
    if (Y & 48) throw Error(o(327));
    var n = e.finishedWork;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null;
    var r = n.lanes | n.childLanes, i = r, a = e.pendingLanes & ~i;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= i, 
    e.mutableReadLanes &= i, e.entangledLanes &= i, i = e.entanglements;
    for (var s = e.eventTimes, c = e.expirationTimes; 0 < a; ) {
      var l = 31 - yn(a), u = 1 << l;
      i[l] = 0, s[l] = -1, c[l] = -1, a &= ~u;
    }
    if (gc !== null && !(r & 24) && gc.has(e) && gc.delete(e), e === Xs && (X = Xs = null, 
    Z = 0), 1 < n.flags ? n.lastEffect === null ? r = n : (n.lastEffect.nextEffect = n, 
    r = n.firstEffect) : r = n.firstEffect, r !== null) {
      if (i = Y, Y |= 32, Ys.current = null, hi = Tn, s = Gr(), Kr(s)) {
        if (`selectionStart` in s) c = {
          start: s.selectionStart,
          end: s.selectionEnd
        }; else a: if (c = (c = s.ownerDocument) && c.defaultView || window, (u = c.getSelection && c.getSelection()) && u.rangeCount !== 0) {
          c = u.anchorNode, a = u.anchorOffset, l = u.focusNode, u = u.focusOffset;
          try {
            c.nodeType, l.nodeType;
          } catch {
            c = null;
            break a;
          }
          var d = 0, f = -1, p = -1, m = 0, h = 0, g = s, _ = null;
          b: for (;;) {
            for (var v; g !== c || a !== 0 && g.nodeType !== 3 || (f = d + a), g !== l || u !== 0 && g.nodeType !== 3 || (p = d + u), 
            g.nodeType === 3 && (d += g.nodeValue.length), (v = g.firstChild) !== null; ) _ = g, 
            g = v;
            for (;;) {
              if (g === s) break b;
              if (_ === c && ++m === a && (f = d), _ === l && ++h === u && (p = d), (v = g.nextSibling) !== null) break;
              g = _, _ = g.parentNode;
            }
            g = v;
          }
          c = f === -1 || p === -1 ? null : {
            start: f,
            end: p
          };
        } else c = null;
        c ||= {
          start: 0,
          end: 0
        };
      } else c = null;
      gi = {
        focusedElem: s,
        selectionRange: c
      }, Tn = !1, Sc = null, Cc = !1, $ = r;
      do {
        try {
          qc();
        } catch (e) {
          if ($ === null) throw Error(o(330));
          $c($, e), $ = $.nextEffect;
        }
      } while ($ !== null);
      Sc = null, $ = r;
      do {
        try {
          for (s = e; $ !== null; ) {
            var y = $.flags;
            if (y & 16 && He($.stateNode, ``), y & 128) {
              var b = $.alternate;
              if (b !== null) {
                var x = b.ref;
                x !== null && (typeof x == `function` ? x(null) : x.current = null);
              }
            }
            switch (y & 1038) {
             case 2:
              Bs($), $.flags &= -3;
              break;

             case 6:
              Bs($), $.flags &= -3, Ws($.alternate, $);
              break;

             case 1024:
              $.flags &= -1025;
              break;

             case 1028:
              $.flags &= -1025, Ws($.alternate, $);
              break;

             case 4:
              Ws($.alternate, $);
              break;

             case 8:
              c = $, Us(s, c);
              var S = c.alternate;
              Rs(c), S !== null && Rs(S);
            }
            $ = $.nextEffect;
          }
        } catch (e) {
          if ($ === null) throw Error(o(330));
          $c($, e), $ = $.nextEffect;
        }
      } while ($ !== null);
      if (x = gi, b = Gr(), y = x.focusedElem, s = x.selectionRange, b !== y && y && y.ownerDocument && Wr(y.ownerDocument.documentElement, y)) {
        for ((s !== null && Kr(y) && (b = s.start, x = s.end, x === void 0 && (x = b), `selectionStart` in y ? (y.selectionStart = b, 
        y.selectionEnd = Math.min(x, y.value.length)) : (x = (b = y.ownerDocument || document) && b.defaultView || window, 
        x.getSelection && (x = x.getSelection(), c = y.textContent.length, S = Math.min(s.start, c), 
        s = s.end === void 0 ? S : Math.min(s.end, c), !x.extend && S > s && (c = s, s = S, 
        S = c), c = Ur(y, S), a = Ur(y, s), c && a && (x.rangeCount !== 1 || x.anchorNode !== c.node || x.anchorOffset !== c.offset || x.focusNode !== a.node || x.focusOffset !== a.offset) && (b = b.createRange(), 
        b.setStart(c.node, c.offset), x.removeAllRanges(), S > s ? (x.addRange(b), x.extend(a.node, a.offset)) : (b.setEnd(a.node, a.offset), 
        x.addRange(b)))))), b = [], x = y); x = x.parentNode; ) x.nodeType === 1 && b.push({
          element: x,
          left: x.scrollLeft,
          top: x.scrollTop
        });
        for (typeof y.focus == `function` && y.focus(), y = 0; y < b.length; y++) x = b[y], 
        x.element.scrollLeft = x.left, x.element.scrollTop = x.top;
      }
      Tn = !!hi, gi = hi = null, e.current = n, $ = r;
      do {
        try {
          for (y = e; $ !== null; ) {
            var C = $.flags;
            if (C & 36 && Fs(y, $.alternate, $), C & 128) {
              b = void 0;
              var w = $.ref;
              if (w !== null) {
                var T = $.stateNode;
                switch ($.tag) {
                 case 5:
                  b = T;
                  break;

                 default:
                  b = T;
                }
                typeof w == `function` ? w(b) : w.current = b;
              }
            }
            $ = $.nextEffect;
          }
        } catch (e) {
          if ($ === null) throw Error(o(330));
          $c($, e), $ = $.nextEffect;
        }
      } while ($ !== null);
      $ = null, ca(), Y = i;
    } else e.current = n;
    if (dc) dc = !1, fc = e, pc = t; else for ($ = r; $ !== null; ) t = $.nextEffect, 
    $.nextEffect = null, $.flags & 8 && (C = $, C.sibling = null, C.stateNode = null), 
    $ = t;
    if (r = e.pendingLanes, r === 0 && (uc = null), r === 1 ? e === vc ? _c++ : (_c = 0, 
    vc = e) : _c = 0, n = n.stateNode, Ji && typeof Ji.onCommitFiberRoot == `function`) try {
      Ji.onCommitFiberRoot(qi, n, void 0, (n.current.flags & 64) == 64);
    } catch {}
    if (Oc(e, U()), cc) throw cc = !1, e = lc, lc = null, e;
    return Y & 8 || _a(), null;
  }
  function qc() {
    for (;$ !== null; ) {
      var e = $.alternate;
      Cc || Sc === null || ($.flags & 8 ? Tt($, Sc) && (Cc = !0) : $.tag === 13 && Ks(e, $) && Tt($, Sc) && (Cc = !0));
      var t = $.flags;
      t & 256 && Ps(e, $), !(t & 512) || dc || (dc = !0, ga(97, function() {
        return Jc(), null;
      })), $ = $.nextEffect;
    }
  }
  function Jc() {
    if (pc !== 90) {
      var e = 97 < pc ? 97 : pc;
      return pc = 90, ha(e, Zc);
    }
    return !1;
  }
  function Yc(e, t) {
    mc.push(t, e), dc || (dc = !0, ga(97, function() {
      return Jc(), null;
    }));
  }
  function Xc(e, t) {
    hc.push(t, e), dc || (dc = !0, ga(97, function() {
      return Jc(), null;
    }));
  }
  function Zc() {
    if (fc === null) return !1;
    var e = fc;
    if (fc = null, Y & 48) throw Error(o(331));
    var t = Y;
    Y |= 32;
    var n = hc;
    hc = [];
    for (var r = 0; r < n.length; r += 2) {
      var i = n[r], a = n[r + 1], s = i.destroy;
      if (i.destroy = void 0, typeof s == `function`) try {
        s();
      } catch (e) {
        if (a === null) throw Error(o(330));
        $c(a, e);
      }
    }
    for (n = mc, mc = [], r = 0; r < n.length; r += 2) {
      i = n[r], a = n[r + 1];
      try {
        var c = i.create;
        i.destroy = c();
      } catch (e) {
        if (a === null) throw Error(o(330));
        $c(a, e);
      }
    }
    for (c = e.current.firstEffect; c !== null; ) e = c.nextEffect, c.nextEffect = null, 
    c.flags & 8 && (c.sibling = null, c.stateNode = null), c = e;
    return Y = t, _a(), !0;
  }
  function Qc(e, t, n) {
    t = Ds(n, t), t = As(e, t, 1), Na(e, t), t = wc(), e = Dc(e, 1), e !== null && (vn(e, 1, t), 
    Oc(e, t));
  }
  function $c(e, t) {
    if (e.tag === 3) Qc(e, e, t); else for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        Qc(n, e, t);
        break;
      }
      if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (uc === null || !uc.has(r))) {
          e = Ds(t, e);
          var i = js(n, e, 1);
          if (Na(n, i), i = wc(), n = Dc(n, 1), n !== null) vn(n, 1, i), Oc(n, i); else if (typeof r.componentDidCatch == `function` && (uc === null || !uc.has(r))) try {
            r.componentDidCatch(t, e);
          } catch {}
          break;
        }
      }
      n = n.return;
    }
  }
  function el(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = wc(), e.pingedLanes |= e.suspendedLanes & n, Xs === e && (Z & n) === n && (Q === 4 || Q === 3 && (Z & 62914560) === Z && 500 > U() - ac ? Lc(e, 0) : rc |= n), 
    Oc(e, t);
  }
  function tl(e, t) {
    var n = e.stateNode;
    n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (bc === 0 && (bc = ec), 
    t = gn(62914560 & ~bc), t === 0 && (t = 4194304)) : t = pa() === 99 ? 1 : 2 : t = 1), 
    n = wc(), e = Dc(e, t), e !== null && (vn(e, t, n), Oc(e, n));
  }
  var nl = function(e, t, n) {
    var r = t.lanes;
    if (e !== null) {
      if (e.memoizedProps !== t.pendingProps || V.current) ts = !0; else if ((n & r) !== 0) ts = !!(e.flags & 16384); else {
        switch (ts = !1, t.tag) {
         case 3:
          ds(t), ho();
          break;

         case 5:
          ro(t);
          break;

         case 1:
          H(t.type) && Gi(t);
          break;

         case 4:
          to(t, t.stateNode.containerInfo);
          break;

         case 10:
          r = t.memoizedProps.value;
          var i = t.type._context;
          z(xa, i._currentValue), i._currentValue = r;
          break;

         case 13:
          if (t.memoizedState !== null) return (n & t.child.childLanes) === 0 ? (z(G, G.current & 1), 
          t = bs(e, t, n), t === null ? null : t.sibling) : ps(e, t, n);
          z(G, G.current & 1);
          break;

         case 19:
          if (r = (n & t.childLanes) !== 0, e.flags & 64) {
            if (r) return ys(e, t, n);
            t.flags |= 64;
          }
          if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), 
          z(G, G.current), r) break;
          return null;

         case 23:
         case 24:
          return t.lanes = 0, os(e, t, n);
        }
        return bs(e, t, n);
      }
    } else ts = !1;
    switch (t.lanes = 0, t.tag) {
     case 2:
      if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), 
      e = t.pendingProps, i = Vi(t, B.current), Da(t, n), i = To(null, t, r, e, i, n), 
      t.flags |= 1, typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0) {
        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, H(r)) {
          var a = !0;
          Gi(t);
        } else a = !1;
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Aa(t);
        var s = r.getDerivedStateFromProps;
        typeof s == `function` && Ra(t, r, s, e), i.updater = za, t.stateNode = i, i._reactInternals = t, 
        Ua(t, r, e, n), t = us(null, t, r, !0, a, n);
      } else t.tag = 0, ns(null, t, i, n), t = t.child;
      return t;

     case 16:
      i = t.elementType;
      a: {
        switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, 
        a = i._init, i = a(i._payload), t.type = i, a = t.tag = ol(i), e = ba(i, e), a) {
         case 0:
          t = cs(null, t, i, e, n);
          break a;

         case 1:
          t = ls(null, t, i, e, n);
          break a;

         case 11:
          t = rs(null, t, i, e, n);
          break a;

         case 14:
          t = is(null, t, i, ba(i.type, e), r, n);
          break a;
        }
        throw Error(o(306, i, ``));
      }
      return t;

     case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ba(r, i), cs(e, t, r, i, n);

     case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ba(r, i), ls(e, t, r, i, n);

     case 3:
      if (ds(t), r = t.updateQueue, e === null || r === null) throw Error(o(282));
      if (r = t.pendingProps, i = t.memoizedState, i = i === null ? null : i.element, 
      ja(e, t), Fa(t, r, null, n), r = t.memoizedState.element, r === i) ho(), t = bs(e, t, n); else {
        if (i = t.stateNode, (a = i.hydrate) && (so = Si(t.stateNode.containerInfo.firstChild), 
        oo = t, a = co = !0), a) {
          if (e = i.mutableSourceEagerHydrationData, e != null) for (i = 0; i < e.length; i += 2) a = e[i], 
          a._workInProgressVersionPrimary = e[i + 1], go.push(a);
          for (n = Ya(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 1024, n = n.sibling;
        } else ns(e, t, r, n), ho();
        t = t.child;
      }
      return t;

     case 5:
      return ro(t), e === null && fo(t), r = t.type, i = t.pendingProps, a = e === null ? null : e.memoizedProps, 
      s = i.children, vi(r, i) ? s = null : a !== null && vi(r, a) && (t.flags |= 16), 
      ss(e, t), ns(e, t, s, n), t.child;

     case 6:
      return e === null && fo(t), null;

     case 13:
      return ps(e, t, n);

     case 4:
      return to(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ja(t, null, r, n) : ns(e, t, r, n), 
      t.child;

     case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ba(r, i), rs(e, t, r, i, n);

     case 7:
      return ns(e, t, t.pendingProps, n), t.child;

     case 8:
      return ns(e, t, t.pendingProps.children, n), t.child;

     case 12:
      return ns(e, t, t.pendingProps.children, n), t.child;

     case 10:
      a: {
        r = t.type._context, i = t.pendingProps, s = t.memoizedProps, a = i.value;
        var c = t.type._context;
        if (z(xa, c._currentValue), c._currentValue = a, s !== null) {
          if (c = s.value, a = zr(c, a) ? 0 : (typeof r._calculateChangedBits == `function` ? r._calculateChangedBits(c, a) : 1073741823) | 0, 
          a === 0) {
            if (s.children === i.children && !V.current) {
              t = bs(e, t, n);
              break a;
            }
          } else for (c = t.child, c !== null && (c.return = t); c !== null; ) {
            var l = c.dependencies;
            if (l !== null) {
              s = c.child;
              for (var u = l.firstContext; u !== null; ) {
                if (u.context === r && (u.observedBits & a) !== 0) {
                  c.tag === 1 && (u = Ma(-1, n & -n), u.tag = 2, Na(c, u)), c.lanes |= n, u = c.alternate, 
                  u !== null && (u.lanes |= n), Ea(c.return, n), l.lanes |= n;
                  break;
                }
                u = u.next;
              }
            } else s = c.tag === 10 && c.type === t.type ? null : c.child;
            if (s !== null) s.return = c; else for (s = c; s !== null; ) {
              if (s === t) {
                s = null;
                break;
              }
              if (c = s.sibling, c !== null) {
                c.return = s.return, s = c;
                break;
              }
              s = s.return;
            }
            c = s;
          }
        }
        ns(e, t, i.children, n), t = t.child;
      }
      return t;

     case 9:
      return i = t.type, a = t.pendingProps, r = a.children, Da(t, n), i = Oa(i, a.unstable_observedBits), 
      r = r(i), t.flags |= 1, ns(e, t, r, n), t.child;

     case 14:
      return i = t.type, a = ba(i, t.pendingProps), a = ba(i.type, a), is(e, t, i, a, r, n);

     case 15:
      return as(e, t, t.type, t.pendingProps, r, n);

     case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ba(r, i), e !== null && (e.alternate = null, 
      t.alternate = null, t.flags |= 2), t.tag = 1, H(r) ? (e = !0, Gi(t)) : e = !1, Da(t, n), 
      Va(t, r, i), Ua(t, r, i, n), us(null, t, r, !0, e, n);

     case 19:
      return ys(e, t, n);

     case 23:
      return os(e, t, n);

     case 24:
      return os(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function rl(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, 
    this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, 
    this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, 
    this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function il(e, t, n, r) {
    return new rl(e, t, n, r);
  }
  function al(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ol(e) {
    if (typeof e == `function`) return +!!al(e);
    if (e != null) {
      if (e = e.$$typeof, e === te) return 11;
      if (e === ie) return 14;
    }
    return 2;
  }
  function sl(e, t) {
    var n = e.alternate;
    return n === null ? (n = il(e.tag, t, e.key, e.mode), n.elementType = e.elementType, 
    n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, 
    n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), 
    n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, 
    n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, 
    n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function cl(e, t, n, r, i, a) {
    var s = 2;
    if (r = e, typeof e == `function`) al(e) && (s = 1); else if (typeof e == `string`) s = 5; else a: switch (e) {
     case O:
      return ll(n.children, i, a, t);

     case ce:
      s = 8, i |= 16;
      break;

     case k:
      s = 8, i |= 1;
      break;

     case A:
      return e = il(12, n, t, i | 8), e.elementType = A, e.type = A, e.lanes = a, e;

     case ne:
      return e = il(13, n, t, i), e.type = ne, e.elementType = ne, e.lanes = a, e;

     case re:
      return e = il(19, n, t, i), e.elementType = re, e.lanes = a, e;

     case le:
      return ul(n, i, a, t);

     case ue:
      return e = il(24, n, t, i), e.elementType = ue, e.lanes = a, e;

     default:
      if (typeof e == `object` && e) switch (e.$$typeof) {
       case j:
        s = 10;
        break a;

       case ee:
        s = 9;
        break a;

       case te:
        s = 11;
        break a;

       case ie:
        s = 14;
        break a;

       case ae:
        s = 16, r = null;
        break a;

       case oe:
        s = 22;
        break a;
      }
      throw Error(o(130, e == null ? e : typeof e, ``));
    }
    return t = il(s, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
  }
  function ll(e, t, n, r) {
    return e = il(7, e, r, t), e.lanes = n, e;
  }
  function ul(e, t, n, r) {
    return e = il(23, e, r, t), e.elementType = le, e.lanes = n, e;
  }
  function dl(e, t, n) {
    return e = il(6, e, null, t), e.lanes = n, e;
  }
  function fl(e, t, n) {
    return t = il(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, 
    t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function pl(e, t, n) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, 
    this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, 
    this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = _n(0), this.expirationTimes = _n(-1), 
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, 
    this.entanglements = _n(0), this.mutableSourceEagerHydrationData = null;
  }
  function ml(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: D,
      key: r == null ? null : `` + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function hl(e, t, n, r) {
    var i = t.current, a = wc(), s = Tc(i);
    a: if (n) {
      n = n._reactInternals;
      b: {
        if (bt(n) !== n || n.tag !== 1) throw Error(o(170));
        var c = n;
        do {
          switch (c.tag) {
           case 3:
            c = c.stateNode.context;
            break b;

           case 1:
            if (H(c.type)) {
              c = c.stateNode.__reactInternalMemoizedMergedChildContext;
              break b;
            }
          }
          c = c.return;
        } while (c !== null);
        throw Error(o(171));
      }
      if (n.tag === 1) {
        var l = n.type;
        if (H(l)) {
          n = Wi(n, l, c);
          break a;
        }
      }
      n = c;
    } else n = zi;
    return t.context === null ? t.context = n : t.pendingContext = n, t = Ma(a, s), 
    t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), Na(i, t), Ec(i, s, a), 
    s;
  }
  function gl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
     case 5:
      return e.child.stateNode;

     default:
      return e.child.stateNode;
    }
  }
  function _l(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function vl(e, t) {
    _l(e, t), (e = e.alternate) && _l(e, t);
  }
  function yl() {
    return null;
  }
  function bl(e, t, n) {
    var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
    if (n = new pl(e, t, n != null && !0 === n.hydrate), t = il(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), 
    n.current = t, t.stateNode = n, Aa(t), e[ki] = n.current, oi(e.nodeType === 8 ? e.parentNode : e), 
    r) for (e = 0; e < r.length; e++) {
      t = r[e];
      var i = t._getVersion;
      i = i(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [ t, i ] : n.mutableSourceEagerHydrationData.push(t, i);
    }
    this._internalRoot = n;
  }
  bl.prototype.render = function(e) {
    hl(e, this._internalRoot, null, null);
  }, bl.prototype.unmount = function() {
    var e = this._internalRoot, t = e.containerInfo;
    hl(null, e, null, function() {
      t[ki] = null;
    });
  };
  function xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `));
  }
  function Sl(e, t) {
    if (t ||= (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, !(!t || t.nodeType !== 1 || !t.hasAttribute(`data-reactroot`))), 
    !t) for (var n; n = e.lastChild; ) e.removeChild(n);
    return new bl(e, 0, t ? {
      hydrate: !0
    } : void 0);
  }
  function Cl(e, t, n, r, i) {
    var a = n._reactRootContainer;
    if (a) {
      var o = a._internalRoot;
      if (typeof i == `function`) {
        var s = i;
        i = function() {
          var e = gl(o);
          s.call(e);
        };
      }
      hl(t, o, e, i);
    } else {
      if (a = n._reactRootContainer = Sl(n, r), o = a._internalRoot, typeof i == `function`) {
        var c = i;
        i = function() {
          var e = gl(o);
          c.call(e);
        };
      }
      Pc(function() {
        hl(t, o, e, i);
      });
    }
    return gl(o);
  }
  Et = function(e) {
    e.tag === 13 && (Ec(e, 4, wc()), vl(e, 4));
  }, Dt = function(e) {
    e.tag === 13 && (Ec(e, 67108864, wc()), vl(e, 67108864));
  }, Ot = function(e) {
    if (e.tag === 13) {
      var t = wc(), n = Tc(e);
      Ec(e, n, t), vl(e, n);
    }
  }, kt = function(e, t) {
    return t();
  }, Xe = function(e, t, n) {
    switch (t) {
     case `input`:
      if (Oe(e, n), t = n.name, n.type === `radio` && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll(`input[name=` + JSON.stringify(`` + t) + `][type="radio"]`), 
        t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Pi(r);
            if (!i) throw Error(o(90));
            Ce(r), Oe(r, i);
          }
        }
      }
      break;

     case `textarea`:
      Fe(e, n);
      break;

     case `select`:
      t = n.value, t != null && Me(e, !!n.multiple, t, !1);
    }
  }, nt = Nc, rt = function(e, t, n, r, i) {
    var a = Y;
    Y |= 4;
    try {
      return ha(98, e.bind(null, t, n, r, i));
    } finally {
      Y = a, Y === 0 && (sc(), _a());
    }
  }, it = function() {
    !(Y & 49) && (Mc(), Jc());
  }, at = function(e, t) {
    var n = Y;
    Y |= 2;
    try {
      return e(t);
    } finally {
      Y = n, Y === 0 && (sc(), _a());
    }
  };
  function wl(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xl(t)) throw Error(o(200));
    return ml(e, t, null, n);
  }
  var Tl = {
    Events: [ Mi, Ni, Pi, et, tt, Jc, {
      current: !1
    } ]
  }, El = {
    findFiberByHostInstance: ji,
    bundleType: 0,
    version: `17.0.2`,
    rendererPackageName: `react-dom`
  }, Dl = {
    bundleType: El.bundleType,
    version: El.version,
    rendererPackageName: El.rendererPackageName,
    rendererConfig: El.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: T.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = wt(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: El.findFiberByHostInstance || yl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ol.isDisabled && Ol.supportsFiber) try {
      qi = Ol.inject(Dl), Ji = Ol;
    } catch {}
  }
  e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tl, e.createPortal = wl, 
  e.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == `function` ? Error(o(188)) : Error(o(268, Object.keys(e)));
    return e = wt(t), e = e === null ? null : e.stateNode, e;
  }, e.flushSync = function(e, t) {
    var n = Y;
    if (n & 48) return e(t);
    Y |= 1;
    try {
      if (e) return ha(99, e.bind(null, t));
    } finally {
      Y = n, _a();
    }
  }, e.hydrate = function(e, t, n) {
    if (!xl(t)) throw Error(o(200));
    return Cl(null, e, t, !0, n);
  }, e.render = function(e, t, n) {
    if (!xl(t)) throw Error(o(200));
    return Cl(null, e, t, !1, n);
  }, e.unmountComponentAtNode = function(e) {
    if (!xl(e)) throw Error(o(40));
    return e._reactRootContainer ? (Pc(function() {
      Cl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[ki] = null;
      });
    }), !0) : !1;
  }, e.unstable_batchedUpdates = Nc, e.unstable_createPortal = function(e, t) {
    return wl(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!xl(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return Cl(e, t, n, !1, r);
  }, e.version = `17.0.2`;
}), p = n((e, t) => {
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
    } catch (e) {
      console.error(e);
    }
  }
  n(), t.exports = f();
});

function m(e, t) {
  return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
    return e.__proto__ = t, e;
  }, m(e, t);
}

var h = t(() => {});

function g(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, m(e, t);
}

var _ = t(() => {
  h();
}), v = n((e, t) => {
  t.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
}), y = n((e, t) => {
  var n = v();
  function r() {}
  function i() {}
  i.resetWarningCache = r, t.exports = function() {
    function e(e, t, r, i, a, o) {
      if (o !== n) {
        var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw s.name = `Invariant Violation`, s;
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var a = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: i,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  };
}), b = n((e, t) => {
  t.exports = y()();
});

function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, x.apply(null, arguments);
}

var S = t(() => {}), C = e(i()), w = e(p());

_();

var T = e(b());

S();

function E(e) {
  return e.charAt(0) === `/`;
}

function D(e, t) {
  for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
  e.pop();
}

function O(e, t) {
  t === void 0 && (t = ``);
  var n = e && e.split(`/`) || [], r = t && t.split(`/`) || [], i = e && E(e), a = t && E(t), o = i || a;
  if (e && E(e) ? r = n : n.length && (r.pop(), r = r.concat(n)), !r.length) return `/`;
  var s;
  if (r.length) {
    var c = r[r.length - 1];
    s = c === `.` || c === `..` || c === ``;
  } else s = !1;
  for (var l = 0, u = r.length; u >= 0; u--) {
    var d = r[u];
    d === `.` ? D(r, u) : d === `..` ? (D(r, u), l++) : l && (D(r, u), l--);
  }
  if (!o) for (;l--; ) r.unshift(`..`);
  o && r[0] !== `` && (!r[0] || !E(r[0])) && r.unshift(``);
  var f = r.join(`/`);
  return s && f.substr(-1) !== `/` && (f += `/`), f;
}

function k(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}

function A(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every(function(e, n) {
    return A(e, t[n]);
  });
  if (typeof e == `object` || typeof t == `object`) {
    var n = k(e), r = k(t);
    return n !== e || r !== t ? A(n, r) : Object.keys(Object.assign({}, e, t)).every(function(n) {
      return A(e[n], t[n]);
    });
  }
  return !1;
}

var j = `Invariant failed`;

function ee(e, t) {
  if (!e) throw Error(j);
}

function te(e) {
  return e.charAt(0) === `/` ? e : `/` + e;
}

function ne(e, t) {
  return e.toLowerCase().indexOf(t.toLowerCase()) === 0 && `/?#`.indexOf(e.charAt(t.length)) !== -1;
}

function re(e, t) {
  return ne(e, t) ? e.substr(t.length) : e;
}

function ie(e) {
  return e.charAt(e.length - 1) === `/` ? e.slice(0, -1) : e;
}

function ae(e) {
  var t = e || `/`, n = ``, r = ``, i = t.indexOf(`#`);
  i !== -1 && (r = t.substr(i), t = t.substr(0, i));
  var a = t.indexOf(`?`);
  return a !== -1 && (n = t.substr(a), t = t.substr(0, a)), {
    pathname: t,
    search: n === `?` ? `` : n,
    hash: r === `#` ? `` : r
  };
}

function oe(e) {
  var t = e.pathname, n = e.search, r = e.hash, i = t || `/`;
  return n && n !== `?` && (i += n.charAt(0) === `?` ? n : `?` + n), r && r !== `#` && (i += r.charAt(0) === `#` ? r : `#` + r), 
  i;
}

function se(e, t, n, r) {
  var i;
  typeof e == `string` ? (i = ae(e), i.state = t) : (i = x({}, e), i.pathname === void 0 && (i.pathname = ``), 
  i.search ? i.search.charAt(0) !== `?` && (i.search = `?` + i.search) : i.search = ``, 
  i.hash ? i.hash.charAt(0) !== `#` && (i.hash = `#` + i.hash) : i.hash = ``, t !== void 0 && i.state === void 0 && (i.state = t));
  try {
    i.pathname = decodeURI(i.pathname);
  } catch (e) {
    throw e instanceof URIError ? URIError(`Pathname "` + i.pathname + `" could not be decoded. This is likely caused by an invalid percent-encoding.`) : e;
  }
  return n && (i.key = n), r ? i.pathname ? i.pathname.charAt(0) !== `/` && (i.pathname = O(i.pathname, r.pathname)) : i.pathname = r.pathname : i.pathname || (i.pathname = `/`), 
  i;
}

function ce(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && A(e.state, t.state);
}

function le() {
  var e = null;
  function t(t) {
    return e = t, function() {
      e === t && (e = null);
    };
  }
  function n(t, n, r, i) {
    if (e != null) {
      var a = typeof e == `function` ? e(t, n) : e;
      typeof a == `string` ? typeof r == `function` ? r(a, i) : i(!0) : i(a !== !1);
    } else i(!0);
  }
  var r = [];
  function i(e) {
    var t = !0;
    function n() {
      t && e.apply(void 0, arguments);
    }
    return r.push(n), function() {
      t = !1, r = r.filter(function(e) {
        return e !== n;
      });
    };
  }
  function a() {
    var e = [ ...arguments ];
    r.forEach(function(t) {
      return t.apply(void 0, e);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: n,
    appendListener: i,
    notifyListeners: a
  };
}

var ue = !!(typeof window < `u` && window.document && window.document.createElement);

function M(e, t) {
  t(window.confirm(e));
}

function de() {
  var e = window.navigator.userAgent;
  return (e.indexOf(`Android 2.`) !== -1 || e.indexOf(`Android 4.0`) !== -1) && e.indexOf(`Mobile Safari`) !== -1 && e.indexOf(`Chrome`) === -1 && e.indexOf(`Windows Phone`) === -1 ? !1 : window.history && `pushState` in window.history;
}

function fe() {
  return window.navigator.userAgent.indexOf(`Trident`) === -1;
}

function pe(e) {
  return e.state === void 0 && navigator.userAgent.indexOf(`CriOS`) === -1;
}

var me = `popstate`, he = `hashchange`;

function ge() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}

function _e(e) {
  e === void 0 && (e = {}), !ue && ee(!1);
  var t = window.history, n = de(), r = !fe(), i = e, a = i.forceRefresh, o = a !== void 0 && a, s = i.getUserConfirmation, c = s === void 0 ? M : s, l = i.keyLength, u = l === void 0 ? 6 : l, d = e.basename ? ie(te(e.basename)) : ``;
  function f(e) {
    var t = e || {}, n = t.key, r = t.state, i = window.location, a = i.pathname, o = i.search, s = i.hash, c = a + o + s;
    return d && (c = re(c, d)), se(c, r, n);
  }
  function p() {
    return Math.random().toString(36).substr(2, u);
  }
  var m = le();
  function h(e) {
    x(_e, e), _e.length = t.length, m.notifyListeners(_e.location, _e.action);
  }
  function g(e) {
    pe(e) || y(f(e.state));
  }
  function _() {
    y(f(ge()));
  }
  var v = !1;
  function y(e) {
    if (v) v = !1, h(); else {
      var t = `POP`;
      m.confirmTransitionTo(e, t, c, function(n) {
        n ? h({
          action: t,
          location: e
        }) : b(e);
      });
    }
  }
  function b(e) {
    var t = _e.location, n = C.indexOf(t.key);
    n === -1 && (n = 0);
    var r = C.indexOf(e.key);
    r === -1 && (r = 0);
    var i = n - r;
    i && (v = !0, D(i));
  }
  var S = f(ge()), C = [ S.key ];
  function w(e) {
    return d + oe(e);
  }
  function T(e, r) {
    var i = `PUSH`, a = se(e, r, p(), _e.location);
    m.confirmTransitionTo(a, i, c, function(e) {
      if (e) {
        var r = w(a), s = a.key, c = a.state;
        if (n) {
          if (t.pushState({
            key: s,
            state: c
          }, null, r), o) window.location.href = r; else {
            var l = C.indexOf(_e.location.key), u = C.slice(0, l + 1);
            u.push(a.key), C = u, h({
              action: i,
              location: a
            });
          }
        } else window.location.href = r;
      }
    });
  }
  function E(e, r) {
    var i = `REPLACE`, a = se(e, r, p(), _e.location);
    m.confirmTransitionTo(a, i, c, function(e) {
      if (e) {
        var r = w(a), s = a.key, c = a.state;
        if (n) {
          if (t.replaceState({
            key: s,
            state: c
          }, null, r), o) window.location.replace(r); else {
            var l = C.indexOf(_e.location.key);
            l !== -1 && (C[l] = a.key), h({
              action: i,
              location: a
            });
          }
        } else window.location.replace(r);
      }
    });
  }
  function D(e) {
    t.go(e);
  }
  function O() {
    D(-1);
  }
  function k() {
    D(1);
  }
  var A = 0;
  function j(e) {
    A += e, A === 1 && e === 1 ? (window.addEventListener(me, g), r && window.addEventListener(he, _)) : A === 0 && (window.removeEventListener(me, g), 
    r && window.removeEventListener(he, _));
  }
  var ne = !1;
  function ae(e) {
    e === void 0 && (e = !1);
    var t = m.setPrompt(e);
    return ne ||= (j(1), !0), function() {
      return ne && (ne = !1, j(-1)), t();
    };
  }
  function ce(e) {
    var t = m.appendListener(e);
    return j(1), function() {
      j(-1), t();
    };
  }
  var _e = {
    length: t.length,
    action: `POP`,
    location: S,
    createHref: w,
    push: T,
    replace: E,
    go: D,
    goBack: O,
    goForward: k,
    block: ae,
    listen: ce
  };
  return _e;
}

var ve = 1073741823, ye = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : typeof global < `u` ? global : {};

function be() {
  var e = `__global_unique_id__`;
  return ye[e] = (ye[e] || 0) + 1;
}

function xe(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}

function Se(e) {
  var t = [];
  return {
    on: function(e) {
      t.push(e);
    },
    off: function(e) {
      t = t.filter(function(t) {
        return t !== e;
      });
    },
    get: function() {
      return e;
    },
    set: function(n, r) {
      e = n, t.forEach(function(t) {
        return t(e, r);
      });
    }
  };
}

function Ce(e) {
  return Array.isArray(e) ? e[0] : e;
}

function we(e, t) {
  var n, r, i = `__create-react-context-` + be() + `__`, a = function(e) {
    g(n, e);
    function n() {
      var t = e.apply(this, arguments) || this;
      return t.emitter = Se(t.props.value), t;
    }
    var r = n.prototype;
    return r.getChildContext = function() {
      var e;
      return e = {}, e[i] = this.emitter, e;
    }, r.componentWillReceiveProps = function(e) {
      if (this.props.value !== e.value) {
        var n = this.props.value, r = e.value, i;
        xe(n, r) ? i = 0 : (i = typeof t == `function` ? t(n, r) : ve, i |= 0, i !== 0 && this.emitter.set(e.value, i));
      }
    }, r.render = function() {
      return this.props.children;
    }, n;
  }(C.Component);
  a.childContextTypes = (n = {}, n[i] = T.default.object.isRequired, n);
  var o = function(t) {
    g(n, t);
    function n() {
      var e = t.apply(this, arguments) || this;
      return e.state = {
        value: e.getValue()
      }, e.onUpdate = function(t, n) {
        (e.observedBits | 0) & n && e.setState({
          value: e.getValue()
        });
      }, e;
    }
    var r = n.prototype;
    return r.componentWillReceiveProps = function(e) {
      var t = e.observedBits;
      this.observedBits = t ?? ve;
    }, r.componentDidMount = function() {
      this.context[i] && this.context[i].on(this.onUpdate);
      var e = this.props.observedBits;
      this.observedBits = e ?? ve;
    }, r.componentWillUnmount = function() {
      this.context[i] && this.context[i].off(this.onUpdate);
    }, r.getValue = function() {
      return this.context[i] ? this.context[i].get() : e;
    }, r.render = function() {
      return Ce(this.props.children)(this.state.value);
    }, n;
  }(C.Component);
  return o.contextTypes = (r = {}, r[i] = T.default.object, r), {
    Provider: a,
    Consumer: o
  };
}

var Te = C.createContext || we, Ee = n((e, t) => {
  t.exports = Array.isArray || function(e) {
    return Object.prototype.toString.call(e) == `[object Array]`;
  };
}), De = e(n((e, t) => {
  var n = Ee();
  t.exports = v, t.exports.parse = i, t.exports.compile = o, t.exports.tokensToFunction = l, 
  t.exports.tokensToRegExp = _;
  var r = new RegExp([ `(\\\\.)`, `([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))` ].join(`|`), `g`);
  function i(e, t) {
    for (var n = [], i = 0, o = 0, s = ``, c = t && t.delimiter || `/`, l; (l = r.exec(e)) != null; ) {
      var u = l[0], f = l[1], p = l.index;
      if (s += e.slice(o, p), o = p + u.length, f) {
        s += f[1];
        continue;
      }
      var m = e[o], h = l[2], g = l[3], _ = l[4], v = l[5], y = l[6], b = l[7];
      s &&= (n.push(s), ``);
      var x = h != null && m != null && m !== h, S = y === `+` || y === `*`, C = y === `?` || y === `*`, w = h || c, T = _ || v, E = h || (typeof n[n.length - 1] == `string` ? n[n.length - 1] : ``);
      n.push({
        name: g || i++,
        prefix: h || ``,
        delimiter: w,
        optional: C,
        repeat: S,
        partial: x,
        asterisk: !!b,
        pattern: T ? d(T) : b ? `.*` : a(w, E)
      });
    }
    return o < e.length && (s += e.substr(o)), s && n.push(s), n;
  }
  function a(e, t) {
    return !t || t.indexOf(e) > -1 ? `[^` + u(e) + `]+?` : u(t) + `|(?:(?!` + u(t) + `)[^` + u(e) + `])+?`;
  }
  function o(e, t) {
    return l(i(e, t), t);
  }
  function s(e) {
    return encodeURI(e).replace(/[\/?#]/g, function(e) {
      return `%` + e.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function c(e) {
    return encodeURI(e).replace(/[?#]/g, function(e) {
      return `%` + e.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function l(e, t) {
    for (var r = Array(e.length), i = 0; i < e.length; i++) typeof e[i] == `object` && (r[i] = RegExp(`^(?:` + e[i].pattern + `)$`, p(t)));
    return function(t, i) {
      for (var a = ``, o = t || {}, l = (i || {}).pretty ? s : encodeURIComponent, u = 0; u < e.length; u++) {
        var d = e[u];
        if (typeof d == `string`) {
          a += d;
          continue;
        }
        var f = o[d.name], p;
        if (f == null) {
          if (d.optional) {
            d.partial && (a += d.prefix);
            continue;
          }
          throw TypeError(`Expected "` + d.name + `" to be defined`);
        }
        if (n(f)) {
          if (!d.repeat) throw TypeError(`Expected "` + d.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
          if (f.length === 0) {
            if (d.optional) continue;
            throw TypeError(`Expected "` + d.name + `" to not be empty`);
          }
          for (var m = 0; m < f.length; m++) {
            if (p = l(f[m]), !r[u].test(p)) throw TypeError(`Expected all "` + d.name + `" to match "` + d.pattern + '", but received `' + JSON.stringify(p) + "`");
            a += (m === 0 ? d.prefix : d.delimiter) + p;
          }
          continue;
        }
        if (p = d.asterisk ? c(f) : l(f), !r[u].test(p)) throw TypeError(`Expected "` + d.name + `" to match "` + d.pattern + `", but received "` + p + `"`);
        a += d.prefix + p;
      }
      return a;
    };
  }
  function u(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, `\\$1`);
  }
  function d(e) {
    return e.replace(/([=!:$\/()])/g, `\\$1`);
  }
  function f(e, t) {
    return e.keys = t, e;
  }
  function p(e) {
    return e && e.sensitive ? `` : `i`;
  }
  function m(e, t) {
    var n = e.source.match(/\((?!\?)/g);
    if (n) for (var r = 0; r < n.length; r++) t.push({
      name: r,
      prefix: null,
      delimiter: null,
      optional: !1,
      repeat: !1,
      partial: !1,
      asterisk: !1,
      pattern: null
    });
    return f(e, t);
  }
  function h(e, t, n) {
    for (var r = [], i = 0; i < e.length; i++) r.push(v(e[i], t, n).source);
    return f(RegExp(`(?:` + r.join(`|`) + `)`, p(n)), t);
  }
  function g(e, t, n) {
    return _(i(e, n), t, n);
  }
  function _(e, t, r) {
    n(t) || (r = t || r, t = []), r ||= {};
    for (var i = r.strict, a = r.end !== !1, o = ``, s = 0; s < e.length; s++) {
      var c = e[s];
      if (typeof c == `string`) o += u(c); else {
        var l = u(c.prefix), d = `(?:` + c.pattern + `)`;
        t.push(c), c.repeat && (d += `(?:` + l + d + `)*`), d = c.optional ? c.partial ? l + `(` + d + `)?` : `(?:` + l + `(` + d + `))?` : l + `(` + d + `)`, 
        o += d;
      }
    }
    var m = u(r.delimiter || `/`), h = o.slice(-m.length) === m;
    return i || (o = (h ? o.slice(0, -m.length) : o) + `(?:` + m + `(?=$))?`), o += a ? `$` : i && h ? `` : `(?=` + m + `|$)`, 
    f(RegExp(`^` + o, p(r)), t);
  }
  function v(e, t, r) {
    return n(t) || (r = t || r, t = []), r ||= {}, e instanceof RegExp ? m(e, t) : n(e) ? h(e, t, r) : g(e, t, r);
  }
})());

o();

function Oe(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}

_(), S(), a();

var ke = function(e) {
  var t = Te();
  return t.displayName = e, t;
}(`Router-History`), N = function(e) {
  var t = Te();
  return t.displayName = e, t;
}(`Router`), Ae = function(e) {
  g(t, e), t.computeRootMatch = function(e) {
    return {
      path: `/`,
      url: `/`,
      params: {},
      isExact: e === `/`
    };
  };
  function t(t) {
    var n = e.call(this, t) || this;
    return n.state = {
      location: t.history.location
    }, n._isMounted = !1, n._pendingLocation = null, t.staticContext || (n.unlisten = t.history.listen(function(e) {
      n._isMounted ? n.setState({
        location: e
      }) : n._pendingLocation = e;
    })), n;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this._isMounted = !0, this._pendingLocation && this.setState({
      location: this._pendingLocation
    });
  }, n.componentWillUnmount = function() {
    this.unlisten && this.unlisten();
  }, n.render = function() {
    return C.createElement(N.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: t.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, C.createElement(ke.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  }, t;
}(C.Component);

C.Component;

var je = function(e) {
  g(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.props.onMount && this.props.onMount.call(this, this);
  }, n.componentDidUpdate = function(e) {
    this.props.onUpdate && this.props.onUpdate.call(this, this, e);
  }, n.componentWillUnmount = function() {
    this.props.onUnmount && this.props.onUnmount.call(this, this);
  }, n.render = function() {
    return null;
  }, t;
}(C.Component), Me = {}, Ne = 1e4, Pe = 0;

function Fe(e) {
  if (Me[e]) return Me[e];
  var t = De.default.compile(e);
  return Pe < Ne && (Me[e] = t, Pe++), t;
}

function Ie(e, t) {
  return e === void 0 && (e = `/`), t === void 0 && (t = {}), e === `/` ? e : Fe(e)(t, {
    pretty: !0
  });
}

function Le(e) {
  var t = e.computedMatch, n = e.to, r = e.push, i = r !== void 0 && r;
  return C.createElement(N.Consumer, null, function(e) {
    !e && ee(!1);
    var r = e.history, a = e.staticContext, o = i ? r.push : r.replace, s = se(t ? typeof n == `string` ? Ie(n, t.params) : x({}, n, {
      pathname: Ie(n.pathname, t.params)
    }) : n);
    return a ? (o(s), null) : C.createElement(je, {
      onMount: function() {
        o(s);
      },
      onUpdate: function(e, t) {
        var n = se(t.to);
        ce(n, x({}, s, {
          key: n.key
        })) || o(s);
      },
      to: n
    });
  });
}

var Re = {}, ze = 1e4, Be = 0;

function Ve(e, t) {
  var n = `` + t.end + t.strict + t.sensitive, r = Re[n] || (Re[n] = {});
  if (r[e]) return r[e];
  var i = [], a = {
    regexp: (0, De.default)(e, i, t),
    keys: i
  };
  return Be < ze && (r[e] = a, Be++), a;
}

function He(e, t) {
  t === void 0 && (t = {}), (typeof t == `string` || Array.isArray(t)) && (t = {
    path: t
  });
  var n = t, r = n.path, i = n.exact, a = i !== void 0 && i, o = n.strict, s = o !== void 0 && o, c = n.sensitive, l = c !== void 0 && c;
  return [].concat(r).reduce(function(t, n) {
    if (!n && n !== ``) return null;
    if (t) return t;
    var r = Ve(n, {
      end: a,
      strict: s,
      sensitive: l
    }), i = r.regexp, o = r.keys, c = i.exec(e);
    if (!c) return null;
    var u = c[0], d = c.slice(1), f = e === u;
    return a && !f ? null : {
      path: n,
      url: n === `/` && u === `` ? `/` : u,
      isExact: f,
      params: o.reduce(function(e, t, n) {
        return e[t.name] = d[n], e;
      }, {})
    };
  }, null);
}

var P = function(e) {
  g(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    var e = this;
    return C.createElement(N.Consumer, null, function(t) {
      !t && ee(!1);
      var n = e.props.location || t.location, r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? He(n.pathname, e.props) : t.match, i = x({}, t, {
        location: n,
        match: r
      }), a = e.props, o = a.children, s = a.component, c = a.render;
      return Array.isArray(o) && o.length === 0 && (o = null), C.createElement(N.Provider, {
        value: i
      }, i.match ? o ? typeof o == `function` ? o(i) : o : s ? C.createElement(s, i) : c ? c(i) : null : typeof o == `function` ? o(i) : null);
    });
  }, t;
}(C.Component);

C.Component;

var Ue = function(e) {
  g(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    var e = this;
    return C.createElement(N.Consumer, null, function(t) {
      !t && ee(!1);
      var n = e.props.location || t.location, r, i;
      return C.Children.forEach(e.props.children, function(e) {
        if (i == null && C.isValidElement(e)) {
          r = e;
          var a = e.props.path || e.props.from;
          i = a ? He(n.pathname, x({}, e.props, {
            path: a
          })) : t.match;
        }
      }), i ? C.cloneElement(r, {
        location: n,
        computedMatch: i
      }) : null;
    });
  }, t;
}(C.Component), We = C.useContext;

function Ge() {
  return We(ke);
}

function Ke() {
  return We(N).location;
}

function qe() {
  var e = We(N).match;
  return e ? e.params : {};
}

function Je(e) {
  var t = Ke(), n = We(N).match;
  return e ? He(t.pathname, e) : n;
}

_(), S();

var Ye = function(e) {
  g(t, e);
  function t() {
    var t, n = [ ...arguments ];
    return t = e.call.apply(e, [ this ].concat(n)) || this, t.history = _e(t.props), 
    t;
  }
  var n = t.prototype;
  return n.render = function() {
    return C.createElement(Ae, {
      history: this.history,
      children: this.props.children
    });
  }, t;
}(C.Component);

C.Component;

var Xe = function(e, t) {
  return typeof e == `function` ? e(t) : e;
}, Ze = function(e, t) {
  return typeof e == `string` ? se(e, null, null, t) : e;
}, Qe = function(e) {
  return e;
}, $e = C.forwardRef;

$e === void 0 && ($e = Qe);

function et(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}

var tt = $e(function(e, t) {
  var n = e.innerRef, r = e.navigate, i = e.onClick, a = Oe(e, [ `innerRef`, `navigate`, `onClick` ]), o = a.target, s = x({}, a, {
    onClick: function(e) {
      try {
        i && i(e);
      } catch (t) {
        throw e.preventDefault(), t;
      }
      !e.defaultPrevented && e.button === 0 && (!o || o === `_self`) && !et(e) && (e.preventDefault(), 
      r());
    }
  });
  return s.ref = Qe === $e ? n : t || n, C.createElement(`a`, s);
}), nt = $e(function(e, t) {
  var n = e.component, r = n === void 0 ? tt : n, i = e.replace, a = e.to, o = e.innerRef, s = Oe(e, [ `component`, `replace`, `to`, `innerRef` ]);
  return C.createElement(N.Consumer, null, function(e) {
    !e && ee(!1);
    var n = e.history, c = Ze(Xe(a, e.location), e.location), l = c ? n.createHref(c) : ``, u = x({}, s, {
      href: l,
      navigate: function() {
        var t = Xe(a, e.location);
        (i ? n.replace : n.push)(t);
      }
    });
    return Qe === $e ? u.innerRef = o : u.ref = t || o, C.createElement(r, u);
  });
}), rt = function(e) {
  return e;
}, it = C.forwardRef;

it === void 0 && (it = rt);

function at() {
  return [ ...arguments ].filter(function(e) {
    return e;
  }).join(` `);
}

it(function(e, t) {
  var n = e[`aria-current`], r = n === void 0 ? `page` : n, i = e.activeClassName, a = i === void 0 ? `active` : i, o = e.activeStyle, s = e.className, c = e.exact, l = e.isActive, u = e.location, d = e.sensitive, f = e.strict, p = e.style, m = e.to, h = e.innerRef, g = Oe(e, [ `aria-current`, `activeClassName`, `activeStyle`, `className`, `exact`, `isActive`, `location`, `sensitive`, `strict`, `style`, `to`, `innerRef` ]);
  return C.createElement(N.Consumer, null, function(e) {
    !e && ee(!1);
    var n = u || e.location, i = Ze(Xe(m, n), n), _ = i.pathname, v = _ && _.replace(/([.+*?=^!:${}()[\]|/\\])/g, `\\$1`), y = v ? He(n.pathname, {
      path: v,
      exact: c,
      sensitive: d,
      strict: f
    }) : null, b = !!(l ? l(y, n) : y), S = b ? at(s, a) : s, w = b ? x({}, p, {}, o) : p, T = x({
      "aria-current": b && r || null,
      className: S,
      style: w,
      to: i
    }, g);
    return rt === it ? T.innerRef = h : T.ref = t || h, C.createElement(nt, T);
  });
});

var ot = class extends C.Component {
  constructor(...e) {
    super(...e), this.state = {
      hasError: !1
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: !0
    };
  }
  componentDidCatch(e) {
    l(e), this.props.onError?.();
  }
  render() {
    return this.state.hasError ? this.props.errorContent || null : this.props.children;
  }
}, F = s();

function st({children: e}) {
  return (0, F.jsx)(ot, {
    errorContent: (0, F.jsx)(`p`, {
      style: {
        paddingLeft: 8
      },
      children: `Something went wrong. Please try again later.`
    }),
    children: e
  });
}

var ct = `/books/:vbid/:location*`, lt = `/dev`, ut = `/features`, dt = `/error`, ft = `${dt}/system`, pt = `${dt}/not-found`, mt = `/embed/:path*`, ht = `/crane/:vbid/:path*`, gt = `/enrichment/:vbid/:id`, _t = `/enrichment-progress/:vbid`, vt = `/flashcards/deck/:deckId`, yt = `/test/:type`;

function bt() {
  return !1;
}

function xt({path: e, replace: t}) {
  return (0, C.useEffect)(() => {
    let n = bt() ? `https://bookshelf-dev.vitalsource.com${e}` : e;
    t ? window.location.replace(n) : window.location.href = n;
  }, [ e, t ]), null;
}

function St(e, t) {
  return !t || !t.split ? null : t.split(`.`).reduce((e, t) => e == null ? null : e[t], e);
}

var Ct = n((e, t) => {
  var n = function(e) {
    return r(e) && !i(e);
  };
  function r(e) {
    return !!e && typeof e == `object`;
  }
  function i(e) {
    var t = Object.prototype.toString.call(e);
    return t === `[object RegExp]` || t === `[object Date]` || o(e);
  }
  var a = typeof Symbol == `function` && Symbol.for ? Symbol.for(`react.element`) : 60103;
  function o(e) {
    return e.$$typeof === a;
  }
  function s(e) {
    return Array.isArray(e) ? [] : {};
  }
  function c(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? g(s(e), e, t) : e;
  }
  function l(e, t, n) {
    return e.concat(t).map(function(e) {
      return c(e, n);
    });
  }
  function u(e, t) {
    if (!t.customMerge) return g;
    var n = t.customMerge(e);
    return typeof n == `function` ? n : g;
  }
  function d(e) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.propertyIsEnumerable.call(e, t);
    }) : [];
  }
  function f(e) {
    return Object.keys(e).concat(d(e));
  }
  function p(e, t) {
    try {
      return t in e;
    } catch {
      return !1;
    }
  }
  function m(e, t) {
    return p(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
  }
  function h(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && f(e).forEach(function(t) {
      r[t] = c(e[t], n);
    }), f(t).forEach(function(i) {
      m(e, i) || (r[i] = p(e, i) && n.isMergeableObject(t[i]) ? u(i, n)(e[i], t[i], n) : c(t[i], n));
    }), r;
  }
  function g(e, t, r) {
    r ||= {}, r.arrayMerge = r.arrayMerge || l, r.isMergeableObject = r.isMergeableObject || n, 
    r.cloneUnlessOtherwiseSpecified = c;
    var i = Array.isArray(t);
    return i === Array.isArray(e) ? i ? r.arrayMerge(e, t, r) : h(e, t, r) : c(t, r);
  }
  g.all = function(e, t) {
    if (!Array.isArray(e)) throw Error(`first argument should be an array`);
    return e.reduce(function(e, n) {
      return g(e, n, t);
    }, {});
  }, t.exports = g;
}), wt = e(Ct()), Tt = C.createContext(null), Et = ({children: e, brand: t}) => {
  let [n, r] = (0, C.useState)({}), i = (0, C.useMemo)(() => t ? {
    brandData: (0, wt.default)(t, n),
    setOverride: r,
    removeOverride: () => r({}),
    hasOverride: Object.keys(n).length > 0
  } : null, [ t, n ]);
  return i ? (0, F.jsx)(Tt.Provider, {
    value: i,
    children: e
  }) : null;
};

function Dt() {
  let e = (0, C.useContext)(Tt), t = (0, C.useCallback)(t => St(e?.brandData, t), [ e ]);
  return (0, C.useMemo)(() => ({
    getProp: t
  }), [ t ]);
}

function Ot(e) {
  return function(t) {
    let n = Dt();
    return (0, F.jsx)(e, {
      ...t,
      brand: n
    });
  };
}

function kt(e) {
  let t = (0, C.useContext)(Tt);
  return (0, C.useEffect)(() => (t.setOverride(e), () => {
    t.removeOverride();
  }), [ t, e ]), t.hasOverride;
}

function At() {
  let e = document.getElementById(`staticloader`);
  e && e.parentNode && e.parentNode.removeChild(e);
}

function jt() {
  let e = Mt();
  return `https://${window.location.host}${e || ``}`;
}

function Mt() {
  return `/reader`.replace(/\/$/, ``);
}

function Nt() {
  let e = document.querySelector(`meta[name=viewport]`), t = () => {
    e?.setAttribute(`content`, `height=` + window.screen.height + `px, width=device-width, initial-scale=1.0`);
  }, n = () => {
    e?.setAttribute(`content`, `width=device-width, initial-scale=1.0`);
  };
  window.addEventListener(`resize`, () => {
    let e = document.activeElement?.nodeName.toLowerCase();
    e === `textarea` || e === `input` ? t() : n();
  });
}

function Pt(e) {
  let t = Dt(), n = new URLSearchParams;
  return n.set(`theme`, t.getProp(`Theme.primary`)), n.set(`locale`, t.getProp(`locale`)), 
  e.location.state && n.set(`missingURL`, jt() + e.location.state.referrer), (0, F.jsx)(xt, {
    path: `/error/not-found?${n.toString()}`,
    replace: !0
  });
}

function Ft() {
  let e = Dt(), t = new URLSearchParams;
  return t.set(`locale`, e.getProp(`locale`)), (0, F.jsx)(xt, {
    path: `/error/system-error-space?${t.toString()}`,
    replace: !0
  });
}

var It = n((e, t) => {
  function n(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] == null ? {} : arguments[t], i = Object.keys(n);
      typeof Object.getOwnPropertySymbols == `function` && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
      }))), i.forEach(function(t) {
        r(e, t, n[t]);
      });
    }
    return e;
  }
  function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  function i(e) {
    return i = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e;
    }, i(e);
  }
  (function(n, r) {
    (e === void 0 ? `undefined` : i(e)) === `object` && t !== void 0 ? r(e) : typeof define == `function` && define.amd ? define([ `exports` ], r) : r(n.ChameleonJS = {});
  })(e, function(e) {
    var t = Math.min;
    function r(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, `default`) ? e.default : e;
    }
    function i(e, t) {
      return t = {
        exports: {}
      }, e(t, t.exports), t.exports;
    }
    function a(e) {
      return e && e.default || e;
    }
    function o(e) {
      return ((e + .055) / 1.055) ** 2.4;
    }
    function s(e, n) {
      var r = Math.max(e, n), i = t(e, n);
      return (r + .05) / (i + .05);
    }
    function c(e, t) {
      return s(k(e), k(t));
    }
    function l() {
      return E ||= /^[\s	\n\v\f\r   ᠎             　\u2028\u2029﻿"]+$/;
    }
    function u(e, t, n) {
      return e = d(e, n), t = d(t, n), j.rgb(e, t);
    }
    function d(e, t) {
      if (typeof e != `string`) throw TypeError(`get-contrast expects colors as strings`);
      return Hn(e) && (e = Sa[e]), e = f(e, t), e.match(/\((.*)\)/)[1].split(`,`).slice(0, 3);
    }
    function f(e, t) {
      t ||= {}, e = D(e);
      var n = e.match(/\((.*)\)/)[1].split(`,`);
      if (n.length == 4 && n[3] == `0` && !t.ignoreAlpha) throw TypeError(`get-contrast cannot contrast transparent colors`);
      return e;
    }
    var p = {
      maroon: `#800000`,
      red: `#ff0000`,
      orange: `#ffA500`,
      yellow: `#ffff00`,
      olive: `#808000`,
      purple: `#800080`,
      fuchsia: `#ff00ff`,
      white: `#ffffff`,
      lime: `#00ff00`,
      green: `#008000`,
      navy: `#000080`,
      blue: `#0000ff`,
      aqua: `#00ffff`,
      teal: `#008080`,
      black: `#000000`,
      silver: `#c0c0c0`,
      gray: `#808080`,
      transparent: `#0000`
    }, m = function(e, t, n, r) {
      var i = Math.round;
      return (r == null || r === ``) && (r = 1), e = parseFloat(e), t = parseFloat(t), 
      n = parseFloat(n), r = parseFloat(r), 255 >= e && 0 <= e && 255 >= t && 0 <= t && 255 >= n && 0 <= n && 1 >= r && 0 <= r ? [ i(e), i(t), i(n), r ] : null;
    }, h = function(e) {
      if (e.length === 3 && (e += `f`), e.length === 4) {
        var t = e.charAt(0), n = e.charAt(1), r = e.charAt(2), i = e.charAt(3);
        e = t + t + n + n + r + r + i + i;
      }
      e.length === 6 && (e += `ff`);
      for (var a = [], o = 0, s = e.length; o < s; o += 2) a.push(parseInt(e.substr(o, 2), 16) / (o == 6 ? 255 : 1));
      return a;
    }, g = function(e, t, n) {
      return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? e + 6 * (t - e) * n : n < 1 / 2 ? t : n < 2 / 3 ? e + 6 * ((t - e) * (2 / 3 - n)) : e;
    }, _ = function(e, t, n, r) {
      var i, a, o;
      if ((r == null || r === ``) && (r = 1), e = parseFloat(e) / 360, t = parseFloat(t) / 100, 
      n = parseFloat(n) / 100, r = parseFloat(r) / 1, 1 < e || 0 > e || 1 < t || 0 > t || 1 < n || 0 > n || 1 < r || 0 > r) return null;
      if (t === 0) i = a = o = n; else {
        var s = .5 > n ? n * (1 + t) : n + t - n * t, c = 2 * n - s;
        i = g(c, s, e + 1 / 3), o = g(c, s, e), a = g(c, s, e - 1 / 3);
      }
      return [ 255 * i, 255 * o, 255 * a, r ];
    }, v = [];
    for (var y in p) v.push(y);
    var b = `(` + v.join(`|`) + `)`, x = /(?:#([a-f0-9]{3,8}))/i, S = /(?:rgb)a?\(\s*([.\d%]+)\s*,\s*([.\d%]+)\s*,\s*([.\d%]+)\s*(?:,\s*([.\d]+)\s*)?\)/i, C = /(?:hsl)a?\(\s*([.\d%]+)\s*,\s*([.\d%]+)\s*,\s*([.\d%]+)\s*(?:,\s*([.\d]+)\s*)?\)/i, w = function(e, t) {
      if (e == null) return null;
      e = (e + ``).replace(/\s+/, ``);
      var n = p[e];
      if (n) return w(n, t);
      if (n = e.match(x)) e = h(n[1]); else if (n = e.match(S)) e = n.slice(1); else if (n = e.match(C)) e = _.apply(null, n.slice(1)); else return null;
      return (e &&= m.apply(null, e)) ? t ? e : (e[3] === 1 && e.splice(3, 1), `rgb` + (e.length === 4 ? `a` : ``) + `(` + e + `)`) : null;
    }, T = RegExp([ b, `(?:#([a-f0-9]{3,8}))`, `(?:rgb)a?\\(\\s*([.\\d%]+)\\s*,\\s*([.\\d%]+)\\s*,\\s*([.\\d%]+)\\s*(?:,\\s*([.\\d]+)\\s*)?\\)`, `(?:hsl)a?\\(\\s*([.\\d%]+)\\s*,\\s*([.\\d%]+)\\s*,\\s*([.\\d%]+)\\s*(?:,\\s*([.\\d]+)\\s*)?\\)` ].join(`|`), `gi`);
    w.replace = function(e, t) {
      return t ||= function(e) {
        return w(e);
      }, (e + ``).replace(T, t);
    }, w.matches = function(e) {
      return !!(e + ``).match(T);
    };
    var E, D = w, O = 1 / 12.92, k = function(e) {
      var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = .03928 >= t ? t * O : o(t), a = .03928 >= n ? n * O : o(n), s = .03928 >= r ? r * O : o(r);
      return i * .2126 + a * .7152 + s * .0722;
    }, A = function(e) {
      if (typeof e != `string`) throw TypeError(`Expected a string`);
      e = e.replace(/^#/, ``), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
      var t = parseInt(e, 16);
      return [ t >> 16, 255 & t >> 8, 255 & t ];
    }, j = {
      luminance: s,
      rgb: c,
      hex: function(e, t) {
        return c(A(e), A(t));
      },
      score: function(e) {
        return 7 <= e ? `AAA` : 4.5 <= e ? `AA` : ``;
      }
    }, ee = function(e) {
      if (e == null) return !0;
      if (typeof e == `number`) return e == 0;
      if (e.length !== void 0) return e.length === 0;
      for (var t in e) if (te.call(e, t)) return !1;
      return !0;
    }, te = Object.prototype.hasOwnProperty, ne = function(e) {
      return typeof e == `string` && l().test(e);
    }, re = function(e) {
      return typeof e != `boolean` && (typeof e == `string` && e.length ? ne(e) : ee(e));
    }, ie = `#00ffff`, ae = `#f0f8ff`, oe = `#faebd7`, se = `#000000`, ce = `#0000ff`, le = `#00ffff`, ue = `#00008b`, M = `#008b8b`, de = `#006400`, fe = `#00ced1`, pe = `#00bfff`, me = `#008000`, he = `#00ff00`, ge = `#0000cd`, _e = `#00fa9a`, ve = `#000080`, ye = `#00ff7f`, be = `#008080`, xe = `#191970`, Se = `#1e90ff`, Ce = `#20b2aa`, we = `#228b22`, Te = `#2e8b57`, Ee = `#2f4f4f`, De = `#2f4f4f`, Oe = `#32cd32`, ke = `#3cb371`, N = `#40e0d0`, Ae = `#4169e1`, je = `#4682b4`, Me = `#483d8b`, Ne = `#48d1cc`, Pe = `#4b0082`, Fe = `#556b2f`, Ie = `#5f9ea0`, Le = `#6495ed`, Re = `#66cdaa`, ze = `#696969`, Be = `#696969`, Ve = `#6a5acd`, He = `#6b8e23`, P = `#708090`, Ue = `#708090`, We = `#778899`, Ge = `#778899`, Ke = `#7b68ee`, qe = `#7cfc00`, Je = `#7fffd4`, Ye = `#7fff00`, Xe = `#808080`, Ze = `#808080`, Qe = `#800000`, $e = `#808000`, et = `#800080`, tt = `#87cefa`, nt = `#87ceeb`, rt = `#8a2be2`, it = `#8b008b`, at = `#8b0000`, ot = `#8b4513`, F = `#8fbc8f`, st = `#90ee90`, ct = `#9370db`, lt = `#9400d3`, ut = `#98fb98`, dt = `#9932cc`, ft = `#9acd32`, pt = `#a0522d`, mt = `#a52a2a`, ht = `#a9a9a9`, gt = `#a9a9a9`, _t = `#adff2f`, vt = `#add8e6`, yt = `#afeeee`, bt = `#b0c4de`, xt = `#b0e0e6`, St = `#b22222`, Ct = `#b8860b`, wt = `#ba55d3`, Tt = `#bc8f8f`, Et = `#bdb76b`, Dt = `#c0c0c0`, Ot = `#c71585`, kt = `#cd5c5c`, At = `#cd853f`, jt = `#d2691e`, Mt = `#d2b48c`, Nt = `#d3d3d3`, Pt = `#d3d3d3`, Ft = `#d8bfd8`, It = `#daa520`, Lt = `#da70d6`, Rt = `#db7093`, zt = `#dc143c`, Bt = `#dcdcdc`, Vt = `#dda0dd`, Ht = `#deb887`, Ut = `#e0ffff`, Wt = `#e6e6fa`, Gt = `#e9967a`, Kt = `#eee8aa`, qt = `#ee82ee`, Jt = `#f0ffff`, Yt = `#f0fff0`, Xt = `#f0e68c`, Zt = `#f08080`, Qt = `#f4a460`, $t = `#f5f5dc`, en = `#f5fffa`, tn = `#f5deb3`, nn = `#f5f5f5`, rn = `#f8f8ff`, an = `#fafad2`, on = `#faf0e6`, sn = `#fa8072`, cn = `#fdf5e6`, ln = `#ffe4c4`, I = `#ffebcd`, un = `#ff7f50`, dn = `#fff8dc`, fn = `#ff8c00`, pn = `#ff1493`, mn = `#fffaf0`, hn = `#ff00ff`, gn = `#ffd700`, _n = `#ff69b4`, vn = `#fffff0`, yn = `#fff0f5`, bn = `#fffacd`, xn = `#ffb6c1`, Sn = `#ffa07a`, Cn = `#ffffe0`, wn = `#ff00ff`, Tn = `#ffe4e1`, En = `#ffe4b5`, Dn = `#ffdead`, On = `#ffa500`, kn = `#ff4500`, An = `#ffefd5`, jn = `#ffdab9`, Mn = `#ffc0cb`, Nn = `#ff0000`, Pn = `#fff5ee`, Fn = `#fffafa`, In = `#ff6347`, Ln = `#ffffff`, Rn = `#ffff00`, zn = `#663399`, Bn = a(Object.freeze({
      aqua: ie,
      aliceblue: ae,
      antiquewhite: oe,
      black: se,
      blue: ce,
      cyan: le,
      darkblue: ue,
      darkcyan: M,
      darkgreen: de,
      darkturquoise: fe,
      deepskyblue: pe,
      green: me,
      lime: he,
      mediumblue: ge,
      mediumspringgreen: _e,
      navy: ve,
      springgreen: ye,
      teal: be,
      midnightblue: xe,
      dodgerblue: Se,
      lightseagreen: Ce,
      forestgreen: we,
      seagreen: Te,
      darkslategray: Ee,
      darkslategrey: De,
      limegreen: Oe,
      mediumseagreen: ke,
      turquoise: N,
      royalblue: Ae,
      steelblue: je,
      darkslateblue: Me,
      mediumturquoise: Ne,
      indigo: Pe,
      darkolivegreen: Fe,
      cadetblue: Ie,
      cornflowerblue: Le,
      mediumaquamarine: Re,
      dimgray: ze,
      dimgrey: Be,
      slateblue: Ve,
      olivedrab: He,
      slategray: P,
      slategrey: Ue,
      lightslategray: We,
      lightslategrey: Ge,
      mediumslateblue: Ke,
      lawngreen: qe,
      aquamarine: Je,
      chartreuse: Ye,
      gray: Xe,
      grey: Ze,
      maroon: Qe,
      olive: $e,
      purple: et,
      lightskyblue: tt,
      skyblue: nt,
      blueviolet: rt,
      darkmagenta: it,
      darkred: at,
      saddlebrown: ot,
      darkseagreen: F,
      lightgreen: st,
      mediumpurple: ct,
      darkviolet: lt,
      palegreen: ut,
      darkorchid: dt,
      yellowgreen: ft,
      sienna: pt,
      brown: mt,
      darkgray: ht,
      darkgrey: gt,
      greenyellow: _t,
      lightblue: vt,
      paleturquoise: yt,
      lightsteelblue: bt,
      powderblue: xt,
      firebrick: St,
      darkgoldenrod: Ct,
      mediumorchid: wt,
      rosybrown: Tt,
      darkkhaki: Et,
      silver: Dt,
      mediumvioletred: Ot,
      indianred: kt,
      peru: At,
      chocolate: jt,
      tan: Mt,
      lightgray: Nt,
      lightgrey: Pt,
      thistle: Ft,
      goldenrod: It,
      orchid: Lt,
      palevioletred: Rt,
      crimson: zt,
      gainsboro: Bt,
      plum: Vt,
      burlywood: Ht,
      lightcyan: Ut,
      lavender: Wt,
      darksalmon: Gt,
      palegoldenrod: Kt,
      violet: qt,
      azure: Jt,
      honeydew: Yt,
      khaki: Xt,
      lightcoral: Zt,
      sandybrown: Qt,
      beige: $t,
      mintcream: en,
      wheat: tn,
      whitesmoke: nn,
      ghostwhite: rn,
      lightgoldenrodyellow: an,
      linen: on,
      salmon: sn,
      oldlace: cn,
      bisque: ln,
      blanchedalmond: I,
      coral: un,
      cornsilk: dn,
      darkorange: fn,
      deeppink: pn,
      floralwhite: mn,
      fuchsia: hn,
      gold: gn,
      hotpink: _n,
      ivory: vn,
      lavenderblush: yn,
      lemonchiffon: bn,
      lightpink: xn,
      lightsalmon: Sn,
      lightyellow: Cn,
      magenta: wn,
      mistyrose: Tn,
      moccasin: En,
      navajowhite: Dn,
      orange: On,
      orangered: kn,
      papayawhip: An,
      peachpuff: jn,
      pink: Mn,
      red: Nn,
      seashell: Pn,
      snow: Fn,
      tomato: In,
      white: Ln,
      yellow: Rn,
      rebeccapurple: zn,
      default: {
        aqua: ie,
        aliceblue: ae,
        antiquewhite: oe,
        black: se,
        blue: ce,
        cyan: le,
        darkblue: ue,
        darkcyan: M,
        darkgreen: de,
        darkturquoise: fe,
        deepskyblue: pe,
        green: me,
        lime: he,
        mediumblue: ge,
        mediumspringgreen: _e,
        navy: ve,
        springgreen: ye,
        teal: be,
        midnightblue: xe,
        dodgerblue: Se,
        lightseagreen: Ce,
        forestgreen: we,
        seagreen: Te,
        darkslategray: Ee,
        darkslategrey: De,
        limegreen: Oe,
        mediumseagreen: ke,
        turquoise: N,
        royalblue: Ae,
        steelblue: je,
        darkslateblue: Me,
        mediumturquoise: Ne,
        indigo: Pe,
        darkolivegreen: Fe,
        cadetblue: Ie,
        cornflowerblue: Le,
        mediumaquamarine: Re,
        dimgray: ze,
        dimgrey: Be,
        slateblue: Ve,
        olivedrab: He,
        slategray: P,
        slategrey: Ue,
        lightslategray: We,
        lightslategrey: Ge,
        mediumslateblue: Ke,
        lawngreen: qe,
        aquamarine: Je,
        chartreuse: Ye,
        gray: Xe,
        grey: Ze,
        maroon: Qe,
        olive: $e,
        purple: et,
        lightskyblue: tt,
        skyblue: nt,
        blueviolet: rt,
        darkmagenta: it,
        darkred: at,
        saddlebrown: ot,
        darkseagreen: F,
        lightgreen: st,
        mediumpurple: ct,
        darkviolet: lt,
        palegreen: ut,
        darkorchid: dt,
        yellowgreen: ft,
        sienna: pt,
        brown: mt,
        darkgray: ht,
        darkgrey: gt,
        greenyellow: _t,
        lightblue: vt,
        paleturquoise: yt,
        lightsteelblue: bt,
        powderblue: xt,
        firebrick: St,
        darkgoldenrod: Ct,
        mediumorchid: wt,
        rosybrown: Tt,
        darkkhaki: Et,
        silver: Dt,
        mediumvioletred: Ot,
        indianred: kt,
        peru: At,
        chocolate: jt,
        tan: Mt,
        lightgray: Nt,
        lightgrey: Pt,
        thistle: Ft,
        goldenrod: It,
        orchid: Lt,
        palevioletred: Rt,
        crimson: zt,
        gainsboro: Bt,
        plum: Vt,
        burlywood: Ht,
        lightcyan: Ut,
        lavender: Wt,
        darksalmon: Gt,
        palegoldenrod: Kt,
        violet: qt,
        azure: Jt,
        honeydew: Yt,
        khaki: Xt,
        lightcoral: Zt,
        sandybrown: Qt,
        beige: $t,
        mintcream: en,
        wheat: tn,
        whitesmoke: nn,
        ghostwhite: rn,
        lightgoldenrodyellow: an,
        linen: on,
        salmon: sn,
        oldlace: cn,
        bisque: ln,
        blanchedalmond: I,
        coral: un,
        cornsilk: dn,
        darkorange: fn,
        deeppink: pn,
        floralwhite: mn,
        fuchsia: hn,
        gold: gn,
        hotpink: _n,
        ivory: vn,
        lavenderblush: yn,
        lemonchiffon: bn,
        lightpink: xn,
        lightsalmon: Sn,
        lightyellow: Cn,
        magenta: wn,
        mistyrose: Tn,
        moccasin: En,
        navajowhite: Dn,
        orange: On,
        orangered: kn,
        papayawhip: An,
        peachpuff: jn,
        pink: Mn,
        red: Nn,
        seashell: Pn,
        snow: Fn,
        tomato: In,
        white: Ln,
        yellow: Rn,
        rebeccapurple: zn
      }
    })), Vn = function() {
      return Object.keys(Bn);
    }, Hn = function(e) {
      if (typeof e != `string`) throw TypeError(`is-named-css-color expects a string`);
      return RegExp(`^` + Vn().join(`|`) + `$`, `i`).test(e);
    }, Un = `#f0f8ff`, Wn = `#faebd7`, Gn = `#00ffff`, Kn = `#7fffd4`, qn = `#f0ffff`, Jn = `#f5f5dc`, Yn = `#ffe4c4`, Xn = `#000000`, Zn = `#ffebcd`, Qn = `#0000ff`, $n = `#8a2be2`, er = `#a52a2a`, tr = `#deb887`, nr = `#5f9ea0`, rr = `#7fff00`, ir = `#d2691e`, ar = `#ff7f50`, or = `#6495ed`, sr = `#fff8dc`, cr = `#dc143c`, lr = `#00ffff`, ur = `#00008b`, dr = `#008b8b`, fr = `#b8860b`, pr = `#a9a9a9`, mr = `#006400`, hr = `#a9a9a9`, gr = `#bdb76b`, _r = `#8b008b`, vr = `#556b2f`, yr = `#ff8c00`, br = `#9932cc`, xr = `#8b0000`, Sr = `#e9967a`, Cr = `#8fbc8f`, wr = `#483d8b`, Tr = `#2f4f4f`, Er = `#2f4f4f`, Dr = `#00ced1`, Or = `#9400d3`, kr = `#ff1493`, Ar = `#00bfff`, jr = `#696969`, Mr = `#696969`, Nr = `#1e90ff`, Pr = `#b22222`, Fr = `#fffaf0`, Ir = `#228b22`, Lr = `#ff00ff`, Rr = `#dcdcdc`, zr = `#f8f8ff`, Br = `#ffd700`, Vr = `#daa520`, Hr = `#808080`, Ur = `#008000`, Wr = `#adff2f`, Gr = `#808080`, Kr = `#f0fff0`, qr = `#ff69b4`, Jr = `#cd5c5c`, Yr = `#4b0082`, Xr = `#fffff0`, Zr = `#f0e68c`, Qr = `#e6e6fa`, $r = `#fff0f5`, ei = `#7cfc00`, ti = `#fffacd`, ni = `#add8e6`, ri = `#f08080`, ii = `#e0ffff`, L = `#fafad2`, ai = `#d3d3d3`, oi = `#90ee90`, si = `#d3d3d3`, ci = `#ffb6c1`, li = `#ffa07a`, ui = `#20b2aa`, di = `#87cefa`, fi = `#778899`, pi = `#778899`, mi = `#b0c4de`, hi = `#ffffe0`, gi = `#00ff00`, _i = `#32cd32`, vi = `#faf0e6`, yi = `#ff00ff`, bi = `#800000`, xi = `#66cdaa`, Si = `#0000cd`, Ci = `#ba55d3`, wi = `#9370db`, Ti = `#3cb371`, Ei = `#7b68ee`, Di = `#00fa9a`, Oi = `#48d1cc`, ki = `#c71585`, Ai = `#191970`, ji = `#f5fffa`, Mi = `#ffe4e1`, Ni = `#ffe4b5`, Pi = `#ffdead`, Fi = `#000080`, Ii = `#fdf5e6`, Li = `#808000`, Ri = `#6b8e23`, R = `#ffa500`, z = `#ff4500`, zi = `#da70d6`, B = `#eee8aa`, V = `#98fb98`, Bi = `#afeeee`, Vi = `#db7093`, H = `#ffefd5`, Hi = `#ffdab9`, Ui = `#cd853f`, Wi = `#ffc0cb`, Gi = `#dda0dd`, Ki = `#b0e0e6`, qi = `#800080`, Ji = `#663399`, Yi = `#ff0000`, Xi = `#bc8f8f`, Zi = `#4169e1`, Qi = `#8b4513`, $i = `#fa8072`, ea = `#f4a460`, ta = `#2e8b57`, na = `#fff5ee`, ra = `#a0522d`, ia = `#c0c0c0`, aa = `#87ceeb`, oa = `#6a5acd`, sa = `#708090`, ca = `#708090`, la = `#fffafa`, ua = `#00ff7f`, da = `#4682b4`, fa = `#d2b48c`, U = `#008080`, pa = `#d8bfd8`, ma = `#ff6347`, ha = `#40e0d0`, ga = `#ee82ee`, _a = `#f5deb3`, va = `#ffffff`, ya = `#f5f5f5`, ba = `#ffff00`, xa = `#9acd32`, Sa = a(Object.freeze({
      aliceblue: Un,
      antiquewhite: Wn,
      aqua: Gn,
      aquamarine: Kn,
      azure: qn,
      beige: Jn,
      bisque: Yn,
      black: Xn,
      blanchedalmond: Zn,
      blue: Qn,
      blueviolet: $n,
      brown: er,
      burlywood: tr,
      cadetblue: nr,
      chartreuse: rr,
      chocolate: ir,
      coral: ar,
      cornflowerblue: or,
      cornsilk: sr,
      crimson: cr,
      cyan: lr,
      darkblue: ur,
      darkcyan: dr,
      darkgoldenrod: fr,
      darkgray: pr,
      darkgreen: mr,
      darkgrey: hr,
      darkkhaki: gr,
      darkmagenta: _r,
      darkolivegreen: vr,
      darkorange: yr,
      darkorchid: br,
      darkred: xr,
      darksalmon: Sr,
      darkseagreen: Cr,
      darkslateblue: wr,
      darkslategray: Tr,
      darkslategrey: Er,
      darkturquoise: Dr,
      darkviolet: Or,
      deeppink: kr,
      deepskyblue: Ar,
      dimgray: jr,
      dimgrey: Mr,
      dodgerblue: Nr,
      firebrick: Pr,
      floralwhite: Fr,
      forestgreen: Ir,
      fuchsia: Lr,
      gainsboro: Rr,
      ghostwhite: zr,
      gold: Br,
      goldenrod: Vr,
      gray: Hr,
      green: Ur,
      greenyellow: Wr,
      grey: Gr,
      honeydew: Kr,
      hotpink: qr,
      indianred: Jr,
      indigo: Yr,
      ivory: Xr,
      khaki: Zr,
      lavender: Qr,
      lavenderblush: $r,
      lawngreen: ei,
      lemonchiffon: ti,
      lightblue: ni,
      lightcoral: ri,
      lightcyan: ii,
      lightgoldenrodyellow: L,
      lightgray: ai,
      lightgreen: oi,
      lightgrey: si,
      lightpink: ci,
      lightsalmon: li,
      lightseagreen: ui,
      lightskyblue: di,
      lightslategray: fi,
      lightslategrey: pi,
      lightsteelblue: mi,
      lightyellow: hi,
      lime: gi,
      limegreen: _i,
      linen: vi,
      magenta: yi,
      maroon: bi,
      mediumaquamarine: xi,
      mediumblue: Si,
      mediumorchid: Ci,
      mediumpurple: wi,
      mediumseagreen: Ti,
      mediumslateblue: Ei,
      mediumspringgreen: Di,
      mediumturquoise: Oi,
      mediumvioletred: ki,
      midnightblue: Ai,
      mintcream: ji,
      mistyrose: Mi,
      moccasin: Ni,
      navajowhite: Pi,
      navy: Fi,
      oldlace: Ii,
      olive: Li,
      olivedrab: Ri,
      orange: R,
      orangered: z,
      orchid: zi,
      palegoldenrod: B,
      palegreen: V,
      paleturquoise: Bi,
      palevioletred: Vi,
      papayawhip: H,
      peachpuff: Hi,
      peru: Ui,
      pink: Wi,
      plum: Gi,
      powderblue: Ki,
      purple: qi,
      rebeccapurple: Ji,
      red: Yi,
      rosybrown: Xi,
      royalblue: Zi,
      saddlebrown: Qi,
      salmon: $i,
      sandybrown: ea,
      seagreen: ta,
      seashell: na,
      sienna: ra,
      silver: ia,
      skyblue: aa,
      slateblue: oa,
      slategray: sa,
      slategrey: ca,
      snow: la,
      springgreen: ua,
      steelblue: da,
      tan: fa,
      teal: U,
      thistle: pa,
      tomato: ma,
      turquoise: ha,
      violet: ga,
      wheat: _a,
      white: va,
      whitesmoke: ya,
      yellow: ba,
      yellowgreen: xa,
      default: {
        aliceblue: Un,
        antiquewhite: Wn,
        aqua: Gn,
        aquamarine: Kn,
        azure: qn,
        beige: Jn,
        bisque: Yn,
        black: Xn,
        blanchedalmond: Zn,
        blue: Qn,
        blueviolet: $n,
        brown: er,
        burlywood: tr,
        cadetblue: nr,
        chartreuse: rr,
        chocolate: ir,
        coral: ar,
        cornflowerblue: or,
        cornsilk: sr,
        crimson: cr,
        cyan: lr,
        darkblue: ur,
        darkcyan: dr,
        darkgoldenrod: fr,
        darkgray: pr,
        darkgreen: mr,
        darkgrey: hr,
        darkkhaki: gr,
        darkmagenta: _r,
        darkolivegreen: vr,
        darkorange: yr,
        darkorchid: br,
        darkred: xr,
        darksalmon: Sr,
        darkseagreen: Cr,
        darkslateblue: wr,
        darkslategray: Tr,
        darkslategrey: Er,
        darkturquoise: Dr,
        darkviolet: Or,
        deeppink: kr,
        deepskyblue: Ar,
        dimgray: jr,
        dimgrey: Mr,
        dodgerblue: Nr,
        firebrick: Pr,
        floralwhite: Fr,
        forestgreen: Ir,
        fuchsia: Lr,
        gainsboro: Rr,
        ghostwhite: zr,
        gold: Br,
        goldenrod: Vr,
        gray: Hr,
        green: Ur,
        greenyellow: Wr,
        grey: Gr,
        honeydew: Kr,
        hotpink: qr,
        indianred: Jr,
        indigo: Yr,
        ivory: Xr,
        khaki: Zr,
        lavender: Qr,
        lavenderblush: $r,
        lawngreen: ei,
        lemonchiffon: ti,
        lightblue: ni,
        lightcoral: ri,
        lightcyan: ii,
        lightgoldenrodyellow: L,
        lightgray: ai,
        lightgreen: oi,
        lightgrey: si,
        lightpink: ci,
        lightsalmon: li,
        lightseagreen: ui,
        lightskyblue: di,
        lightslategray: fi,
        lightslategrey: pi,
        lightsteelblue: mi,
        lightyellow: hi,
        lime: gi,
        limegreen: _i,
        linen: vi,
        magenta: yi,
        maroon: bi,
        mediumaquamarine: xi,
        mediumblue: Si,
        mediumorchid: Ci,
        mediumpurple: wi,
        mediumseagreen: Ti,
        mediumslateblue: Ei,
        mediumspringgreen: Di,
        mediumturquoise: Oi,
        mediumvioletred: ki,
        midnightblue: Ai,
        mintcream: ji,
        mistyrose: Mi,
        moccasin: Ni,
        navajowhite: Pi,
        navy: Fi,
        oldlace: Ii,
        olive: Li,
        olivedrab: Ri,
        orange: R,
        orangered: z,
        orchid: zi,
        palegoldenrod: B,
        palegreen: V,
        paleturquoise: Bi,
        palevioletred: Vi,
        papayawhip: H,
        peachpuff: Hi,
        peru: Ui,
        pink: Wi,
        plum: Gi,
        powderblue: Ki,
        purple: qi,
        rebeccapurple: Ji,
        red: Yi,
        rosybrown: Xi,
        royalblue: Zi,
        saddlebrown: Qi,
        salmon: $i,
        sandybrown: ea,
        seagreen: ta,
        seashell: na,
        sienna: ra,
        silver: ia,
        skyblue: aa,
        slateblue: oa,
        slategray: sa,
        slategrey: ca,
        snow: la,
        springgreen: ua,
        steelblue: da,
        tan: fa,
        teal: U,
        thistle: pa,
        tomato: ma,
        turquoise: ha,
        violet: ga,
        wheat: _a,
        white: va,
        whitesmoke: ya,
        yellow: ba,
        yellowgreen: xa
      }
    })), Ca = {
      ratio: u,
      score: function(e, t, n) {
        var r = j.score(u(e, t, n));
        return re(r) ? `F` : r;
      },
      isAccessible: function(e, t, n) {
        return 4.5 < u(e, t, n);
      },
      isNotTransparent: f
    }, W = i(function(e, n) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var r = function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(Ca), i = function(e, n) {
        for (var i = 6, a = r.default.isAccessible(e[i], n); !a; ) i++, e[i] === void 0 ? (console.warn(`Shades #6 and higher in the color palette do not have a high enough contrast ratio against a background color of ` + n + `.`), 
        a = !0) : a = r.default.isAccessible(e[i], n);
        return t(i, Object.keys(e).length - 1);
      };
      n.default = function(e, n) {
        return {
          get name() {
            return n;
          },
          getShade: function(t) {
            return e[t];
          },
          getMainShade: function() {
            var n, r = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, a = r.backgroundColor, o = a === void 0 ? `#ffffff` : a, s = r.offset, c = s === void 0 ? 0 : s;
            return n = o === `#ffffff` ? (e.inflection || i(e, o)) + c : i(e, o) + c, e[t(n, Object.keys(e).length - 1)];
          }
        };
      };
    }), wa = r(W), Ta = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#eef7ff`,
        2: `#deedfd`,
        3: `#bddbf4`,
        4: `#84baeb`,
        5: `#3b8fde`,
        6: `#1176d4`,
        7: `#0d66b8`,
        8: `#09549c`,
        9: `#0a4276`,
        10: `#072d52`,
        inflection: 6
      }, `blue`);
    });
    r(Ta);
    var Ea = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#fef3f1`,
        2: `#fac3bb`,
        3: `#faa094`,
        4: `#fa7d6d`,
        5: `#eb4f3b`,
        6: `#d24634`,
        7: `#b83e2e`,
        8: `#9e3528`,
        9: `#7a291f`,
        10: `#571d16`,
        inflection: 6
      }, `brick`);
    });
    r(Ea);
    var Da = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#fef3e9`,
        2: `#fec491`,
        3: `#fead64`,
        4: `#f58525`,
        5: `#e06107`,
        6: `#ca500f`,
        7: `#b0430c`,
        8: `#983600`,
        9: `#772700`,
        10: `#571d00`,
        inflection: 6
      }, `cheddar`);
    });
    r(Da);
    var Oa = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#f54250`,
        2: `#cc313d`
      }, `cherry`);
    });
    r(Oa);
    var ka = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#fafafa`,
        2: `#f6f6f6`,
        3: `#ececec`,
        4: `#dadada`,
        5: `#949494`,
        6: `#757575`,
        7: `#646464`,
        8: `#525252`,
        9: `#3c3c3c`,
        10: `#1c1c1c`,
        inflection: 6
      }, `cloud`);
    });
    r(ka);
    var Aa = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#f8f5fa`,
        2: `#ddcbe9`,
        3: `#c4a4d9`,
        4: `#b389d0`,
        5: `#a775c9`,
        6: `#945eb9`,
        7: `#794d96`,
        8: `#5e3c75`,
        9: `#3f284f`,
        10: `#2d1c38`,
        inflection: 6
      }, `eggplant`);
    });
    r(Aa);
    var ja = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#fff5dd`,
        2: `#ffe29c`,
        3: `#ffd560`,
        4: `#e8b520`,
        5: `#be8a0d`,
        6: `#9a6f07`,
        7: `#855f07`,
        8: `#715005`,
        9: `#5a4206`,
        10: `#3b2b04`,
        inflection: 6
      }, `gold`);
    });
    r(ja);
    var Ma = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#21a921`,
        2: `#0a870a`
      }, `grass`);
    });
    r(Ma);
    var Na = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#edf7ed`,
        2: `#d1ead1`,
        3: `#a3d4a3`,
        4: `#79c679`,
        5: `#35a335`,
        6: `#048a04`,
        7: `#047103`,
        8: `#015e02`,
        9: `#024d03`,
        10: `#023302`,
        inflection: 6
      }, `green`);
    });
    r(Na);
    var Pa = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#e8f7f2`,
        2: `#c0eadb`,
        3: `#86e0c2`,
        4: `#24c991`,
        5: `#1a9c6e`,
        6: `#16825c`,
        7: `#12694a`,
        8: `#0d4f38`,
        9: `#0a3c2b`,
        10: `#07291d`,
        inflection: 6
      }, `jungle`);
    });
    r(Pa);
    var Fa = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#f2f4f9`,
        2: `#d2d9ed`,
        3: `#b2bee0`,
        4: `#91a3d4`,
        5: `#7188c7`,
        6: `#5773bf`,
        7: `#425ba1`,
        8: `#334a88`,
        9: `#24386e`,
        10: `#002244`,
        inflection: 6
      }, `magic`);
    });
    r(Fa);
    var Ia = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#ebf9fc`,
        2: `#c9e5ea`,
        3: `#acd5dd`,
        4: `#6eadba`,
        5: `#5f96a1`,
        6: `#4f7e87`,
        7: `#41666e`,
        8: `#324e54`,
        9: `#273e42`,
        10: `#1d2d30`,
        inflection: 6
      }, `mist`);
    });
    r(Ia);
    var La = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        9: `#40404c`,
        10: `#2f2f39`,
        11: `#1b1b26`
      }, `ninja`);
    });
    r(La);
    var Ra = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#eaf7fc`,
        2: `#b0e3f4`,
        3: `#75cfec`,
        4: `#00a7db`,
        5: `#0093c4`,
        6: `#007fad`,
        7: `#006c94`,
        8: `#005a75`,
        9: `#00465c`,
        10: `#003342`,
        inflection: 6
      }, `ocean`);
    });
    r(Ra);
    var za = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#fff3e3`,
        2: `#ffd69b`,
        3: `#ffb55f`,
        4: `#ff943b`,
        5: `#e65f14`,
        6: `#d04a00`,
        7: `#b54102`,
        8: `#983702`,
        9: `#7a2d00`,
        10: `#541f00`,
        inflection: 6
      }, `orange`);
    });
    r(za);
    var Ba = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#f4f6ea`,
        2: `#e0eab8`,
        3: `#ccde87`,
        4: `#a3c523`,
        5: `#7e9e06`,
        6: `#637d05`,
        7: `#536904`,
        8: `#415203`,
        9: `#303d02`,
        10: `#202902`,
        inflection: 6
      }, `pickle`);
    });
    r(Ba);
    var Va = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#f7f5ff`,
        2: `#e3dbff`,
        3: `#ccbdfe`,
        4: `#bca9fa`,
        5: `#9375f2`,
        6: `#8956f0`,
        7: `#683ac8`,
        8: `#532ca6`,
        9: `#3f1c86`,
        10: `#2a1359`,
        inflection: 6
      }, `purple`);
    });
    r(Va);
    var Ha = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#fff2f4`,
        2: `#ffe1e6`,
        3: `#fabcc5`,
        4: `#f78394`,
        5: `#ed596f`,
        6: `#e71d3a`,
        7: `#d21c35`,
        8: `#a9172c`,
        9: `#7e1021`,
        10: `#5c0c18`,
        inflection: 6
      }, `red`);
    });
    r(Ha);
    var Ua = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#fdf2f5`,
        2: `#fbcada`,
        3: `#f8a2bf`,
        4: `#f57aa3`,
        5: `#ed3e79`,
        6: `#d81e5d`,
        7: `#bf1b52`,
        8: `#a61747`,
        9: `#8c143c`,
        10: `#610e29`,
        inflection: 6
      }, `sangria`);
    });
    r(Ua);
    var Wa = i(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = (0, function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(W).default)({
        1: `#fafafa`,
        2: `#f6f6f6`,
        3: `#ececec`,
        4: `#dadada`,
        5: `#949494`,
        6: `#757575`,
        7: `#646464`,
        8: `#525252`,
        9: `#3c3c3c`,
        10: `#1c1c1c`,
        inflection: 6
      }, `silver`);
    });
    r(Wa);
    var Ga = n({}, r(i(function(e, t) {
      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "blue", {
        enumerable: !0,
        get: function() {
          return n(Ta).default;
        }
      }), Object.defineProperty(t, "brick", {
        enumerable: !0,
        get: function() {
          return n(Ea).default;
        }
      }), Object.defineProperty(t, "cheddar", {
        enumerable: !0,
        get: function() {
          return n(Da).default;
        }
      }), Object.defineProperty(t, "cherry", {
        enumerable: !0,
        get: function() {
          return n(Oa).default;
        }
      }), Object.defineProperty(t, "cloud", {
        enumerable: !0,
        get: function() {
          return n(ka).default;
        }
      }), Object.defineProperty(t, "eggplant", {
        enumerable: !0,
        get: function() {
          return n(Aa).default;
        }
      }), Object.defineProperty(t, "gold", {
        enumerable: !0,
        get: function() {
          return n(ja).default;
        }
      }), Object.defineProperty(t, "grass", {
        enumerable: !0,
        get: function() {
          return n(Ma).default;
        }
      }), Object.defineProperty(t, "green", {
        enumerable: !0,
        get: function() {
          return n(Na).default;
        }
      }), Object.defineProperty(t, "jungle", {
        enumerable: !0,
        get: function() {
          return n(Pa).default;
        }
      }), Object.defineProperty(t, "magic", {
        enumerable: !0,
        get: function() {
          return n(Fa).default;
        }
      }), Object.defineProperty(t, "mist", {
        enumerable: !0,
        get: function() {
          return n(Ia).default;
        }
      }), Object.defineProperty(t, "ninja", {
        enumerable: !0,
        get: function() {
          return n(La).default;
        }
      }), Object.defineProperty(t, "ocean", {
        enumerable: !0,
        get: function() {
          return n(Ra).default;
        }
      }), Object.defineProperty(t, "orange", {
        enumerable: !0,
        get: function() {
          return n(za).default;
        }
      }), Object.defineProperty(t, "pickle", {
        enumerable: !0,
        get: function() {
          return n(Ba).default;
        }
      }), Object.defineProperty(t, "purple", {
        enumerable: !0,
        get: function() {
          return n(Va).default;
        }
      }), Object.defineProperty(t, "red", {
        enumerable: !0,
        get: function() {
          return n(Ha).default;
        }
      }), Object.defineProperty(t, "sangria", {
        enumerable: !0,
        get: function() {
          return n(Ua).default;
        }
      }), Object.defineProperty(t, "silver", {
        enumerable: !0,
        get: function() {
          return n(Wa).default;
        }
      });
    })), {
      chegg: wa({
        1: `#fef3e9`,
        2: `#fedbbd`,
        3: `#fedbbd`,
        4: `#fead64`,
        5: `#ff993f`,
        6: `#f58525`,
        7: `#EB7100`,
        8: `#e06107`,
        9: `#ca500f`,
        10: `#b0430c`
      }, `chegg`),
      macmillan: wa({
        1: `#FFF2F4`,
        2: `#FFC9CE`,
        3: `#FF929B`,
        4: `#F86C78`,
        5: `#EB4756`,
        6: `#DA1B2C`,
        7: `#BD1724`,
        8: `#A31420`,
        9: `#85101A`,
        10: `#630C13`
      }, `macmillan`),
      jrPurple: wa({
        1: `#F7F5FF`,
        2: `#DED6FF`,
        3: `#C2B4FF`,
        4: `#A793FF`,
        5: `#866BFF`,
        6: `#6840F7`,
        7: `#461DD9`,
        8: `#2D04BF`,
        9: `#290B97`,
        10: `#1C056F`
      }, `jrPurple`)
    }), Ka = function(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      try {
        return e.json().then(function(e) {
          return n({}, t, {
            response: e.data || e
          });
        });
      } catch {
        return null;
      }
    }, qa = function(e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : `prod`;
      return Xa(`https://${n === `dev` ? `chameleon-dev.vitalbook.com` : `chameleon.vitalsource.com`}/api/brands/${e}/${t}`, 2500).then(function(r) {
        return r.status === 200 ? Ka(r, {
          fromChameleon: !0,
          isFallback: !1,
          fromGCS: !1
        }) : Ja(e, t, Ka(r, {
          fromChameleon: !0,
          fromGCS: !1,
          isFallback: !0
        }), n);
      }).catch(function() {
        return Ja(e, t, null, n);
      });
    }, Ja = function(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : `prod`, i = `https://storage.googleapis.com/vst-chameleon-${r}/backups/backup_${e}_${t}.json`, a = function() {
        return n || Ja(`default`, t, {
          response: `BrandError`
        }, r);
      };
      return fetch(i).then(function(t) {
        return t.status === 200 ? Ka(t, {
          fromChameleon: !1,
          fromGCS: !0,
          isFallback: e === "default"
        }) : a();
      }).catch(a);
    }, Ya = function(e) {
      return e.replace(/\.\.|[\\&<>"'/]/gi, ``);
    }, Xa = function(e, t) {
      return new Promise(function(n, r) {
        var i = !1, a = setTimeout(function() {
          i = !0, r(Error(`Request timed out`));
        }, t);
        fetch(e).then(function(e) {
          clearTimeout(a), i || n(e);
        }).catch(function(e) {
          i || r(e);
        });
      });
    }, Za = function(e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : `prod`, r = Ya(e);
      return new Promise(function(e) {
        qa(r, t, n).then(function(t) {
          var n = t.response;
          return e(n);
        }).catch(function(e) {
          return console.log(e);
        });
      });
    }, Qa = qa, $a = Ga;
    e.loadBrand = Za, e.fetchBrandWithDetails = Qa, e.colors = $a, e.default = {
      loadBrand: Za,
      fetchBrandWithDetails: Qa,
      colors: $a
    }, Object.defineProperty(e, "__esModule", {
      value: !0
    });
  });
}), Lt = e(It()), Rt = function(e) {
  return e.WAITING = `WAITING`, e.FETCHING = `FETCHING`, e.OK = `OK`, e.ERROR = `ERROR`, 
  e;
}({}), zt = function(e) {
  return e.PENDING = `PENDING`, e.OK = `OK`, e.ERROR = `ERROR`, e;
}({}), Bt = function(e) {
  return e.WAITING = `WAITING`, e.FETCHING = `FETCHING`, e.DONE = `DONE`, e;
}({});

function Vt(e) {
  switch (e) {
   case `OK`:
    return `OK`;

   case `ERROR`:
    return `ERROR`;

   default:
    return `PENDING`;
  }
}

function Ht(e) {
  let t = e.reduce((e, t) => e && t === `OK`, !0), n = e.reduce((e, t) => e || t === `ERROR`, !1), r = e.reduce((e, t) => e || t === `FETCHING`, !1);
  return t ? `OK` : n ? `ERROR` : r ? `FETCHING` : `WAITING`;
}

function Ut(e) {
  let t = e.reduce((e, t) => e && t === `OK`, !0), n = e.reduce((e, t) => e || t === `ERROR`, !1);
  return t ? `OK` : n ? `ERROR` : `PENDING`;
}

function Wt(e) {
  let [t, n] = (0, C.useState)(null), [r, i] = (0, C.useState)(zt.PENDING);
  return (0, C.useEffect)(() => {
    n(null);
    let t = new URLSearchParams(window.location.search).get(`brand`) || window.location.hostname;
    Lt.loadBrand(t, e).then(e => {
      n({
        id: t,
        ...e
      }), i(zt.OK);
    }).catch(e => {
      l(e), i(zt.ERROR);
    });
  }, [ e ]), (0, C.useMemo)(() => ({
    brand: t,
    status: r
  }), [ t, r ]);
}

function Gt() {
  let [e, t] = (0, C.useState)(null), [n, r] = (0, C.useState)(zt.PENDING), i = (0, 
  C.useCallback)(e => {
    t(e), r(zt.OK);
  }, []);
  return (0, C.useEffect)(() => {
    let {REACT_APP_LOCAL_BRAND: e} = {};
    bt() ? fetch(`${Mt()}/local-brands/${e}.json`).then(e => e.json()).then(e => i(e.data ?? e)).catch(() => {
      i({});
    }) : i({});
  }, [ i ]), (0, C.useMemo)(() => ({
    localBrand: e,
    localStatus: n
  }), [ e, n ]);
}

function Kt({children: e, product: t, render: n}) {
  let {brand: r, status: i} = Wt(t), {localBrand: a, localStatus: o} = Gt(), s = Ut([ i, o ]), c = (0, 
  C.useMemo)(() => r && a ? (0, wt.default)(r, a) : null, [ r, a ]);
  return s === zt.ERROR ? (0, F.jsx)(Le, {
    to: ft
  }) : s === zt.PENDING ? null : (0, F.jsx)(Et, {
    brand: c,
    children: n ? n(c) : e
  });
}

function qt() {
  return (0, F.jsx)(Kt, {
    product: `supernova`,
    children: (0, F.jsxs)(Ue, {
      children: [ (0, F.jsx)(P, {
        path: pt,
        component: Pt
      }), (0, F.jsx)(P, {
        path: ft,
        component: Ft
      }), (0, F.jsx)(Le, {
        to: ft
      }) ]
    })
  });
}

function Jt(e = ``) {
  return {
    lazy: t => {
      let n = C.lazy(t);
      return function(t) {
        return (0, F.jsx)(C.Suspense, {
          fallback: e,
          children: (0, F.jsx)(n, {
            ...t
          })
        });
      };
    }
  };
}

var Yt = `modulepreload`, Xt = function(e) {
  return `/reader/` + e;
}, Zt = {}, Qt = function(e, t, n) {
  let r = Promise.resolve();
  if (t && t.length > 0) {
    let e = document.getElementsByTagName(`link`), i = document.querySelector(`meta[property=csp-nonce]`), a = i?.nonce || i?.getAttribute(`nonce`);
    function o(e) {
      return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
        status: `fulfilled`,
        value: e
      }), e => ({
        status: `rejected`,
        reason: e
      }))));
    }
    function s(e) {
      return import.meta.resolve ? import.meta.resolve(e) : new URL(e, import.meta.url).href;
    }
    r = o(t.map(t => {
      if (t = Xt(t, n), t = s(t), t in Zt) return;
      Zt[t] = !0;
      let r = t.endsWith(`.css`);
      for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (i.href === t && (!r || i.rel === `stylesheet`)) return;
      }
      let i = document.createElement(`link`);
      if (i.rel = r ? `stylesheet` : Yt, r || (i.as = `script`), i.crossOrigin = ``, i.href = t, 
      a && i.setAttribute(`nonce`, a), document.head.appendChild(i), r) return new Promise((e, n) => {
        i.addEventListener(`load`, e), i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)));
      });
    }));
  }
  function i(e) {
    let t = new Event(`vite:preloadError`, {
      cancelable: !0
    });
    if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
  }
  return r.then(t => {
    for (let e of t || []) e.status === `rejected` && i(e.reason);
    return e().catch(i);
  });
}, $t = Jt(), en = $t.lazy(() => Qt(() => import(`./ReaderMain-B9TAVXtz.js`).then(e => e.t), __vite__mapDeps([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]))), tn = $t.lazy(() => Qt(() => import(`./DevMain-yeHc27_8.js`), __vite__mapDeps([ 22, 1, 2, 6, 3, 7, 8, 23 ]))), nn = $t.lazy(() => Qt(() => import(`./FeaturesMain-DkqIEpw_.js`), __vite__mapDeps([ 24, 1, 2, 7, 9, 13 ]))), rn = $t.lazy(() => Qt(() => import(`./EmbedMain-Jr8rukCL.js`), __vite__mapDeps([ 25, 1, 2, 6, 3, 7, 9, 26, 14 ]))), an = $t.lazy(() => Qt(() => import(`./EnrichmentMain-VDqqcoDI.js`), __vite__mapDeps([ 27, 1, 2, 4, 3, 5, 6, 7, 8, 9, 10, 11, 12, 23, 15, 28 ]))), on = $t.lazy(() => Qt(() => import(`./FlashcardsMain-BHTwLw-Z.js`), __vite__mapDeps([ 29, 1, 2, 4, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 30, 26, 17, 14, 16 ]))), sn = $t.lazy(() => Qt(() => import(`./TestMain-CRd3qM-D.js`), __vite__mapDeps([ 31, 1, 2 ])));

function cn() {
  let e = Ke();
  return (0, F.jsxs)(Ue, {
    children: [ (0, F.jsx)(P, {
      path: ct,
      render: e => (0, F.jsx)(en, {
        ...e
      }, e.match.params.vbid)
    }), (0, F.jsx)(P, {
      path: [ gt, _t ],
      component: an
    }), (0, F.jsx)(P, {
      path: vt,
      component: on,
      exact: !0
    }), (0, F.jsx)(P, {
      path: lt,
      component: tn
    }), (0, F.jsx)(P, {
      path: ut,
      component: nn
    }), (0, F.jsx)(P, {
      path: dt,
      component: qt
    }), (0, F.jsx)(P, {
      path: mt,
      component: rn
    }), (0, F.jsx)(P, {
      path: ht,
      component: rn
    }), (0, F.jsx)(P, {
      path: yt,
      component: sn
    }), bt() && (0, F.jsx)(Le, {
      to: `/dev`,
      from: `/`,
      exact: !0
    }), (0, F.jsx)(Le, {
      to: {
        pathname: pt,
        state: {
          referrer: e.pathname
        }
      }
    }) ]
  });
}

function ln() {
  let e = (0, C.useCallback)(e => {
    let t = e.target.closest(`a,button`);
    if (t) {
      let e = t.getAttribute(`data-interaction-id`);
      if (e) {
        let n = {};
        t.attributes.forEach(e => {
          if (e.name.indexOf(`data-interaction-param-`) === 0) {
            let t = e.name.substr(23);
            n[t] = e.value;
          }
        }), c(e, n);
      }
    }
  }, []);
  (0, C.useEffect)(() => (window.addEventListener(`click`, e, !0), () => {
    window.removeEventListener(`click`, e, !0);
  }), [ e ]);
}

var I = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === `MacIntel` && navigator.maxTouchPoints > 1, un = () => `ontouchstart` in document.documentElement, dn = () => /(android)/i.test(navigator.userAgent), fn = () => navigator.userAgent.includes(`Mac`);

function pn(e, t, n, r = void 0) {
  let i = new Date;
  i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3);
  let a = `expires=` + i.toUTCString(), o = e + `=` + t + `; ` + a + `;path=/`;
  r && (o += `;domain=` + r), document.cookie = o;
}

function mn(e) {
  let t = e + `=`, n = document.cookie.split(`;`);
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    for (;r.charAt(0) === ` `; ) r = r.substring(1);
    if (r.indexOf(t) === 0) return r.substring(t.length, r.length);
  }
  return ``;
}

var hn = function(e) {
  return e.TEMP_PLACEHOLDER = `temp-placeholder`, e;
}({}), gn = Object.values(hn).reduce((e, t) => ({
  ...e,
  [t]: !1
}), {}), _n = `supernova-features`, vn = mn(_n), yn = vn ? JSON.parse(vn) : {}, bn = C.createContext({
  myFeatures: yn,
  allFeatures: {
    ...gn,
    ...yn
  },
  setFeature: () => {},
  resetFeature: () => {}
});

function xn({children: e}) {
  let [t, n] = (0, C.useState)(yn);
  (0, C.useEffect)(() => {
    if (yn !== t) {
      let e = bt() ? 365 : 1 / 24;
      pn(_n, JSON.stringify(t), e);
    }
  }, [ t ]);
  let r = (0, C.useCallback)(e => {
    let r = {
      ...t
    };
    delete r[e], n(r);
  }, [ t ]), i = (0, C.useCallback)((e, i) => {
    i === gn[e] ? r(e) : n({
      ...t,
      [e]: i
    });
  }, [ t, r ]), a = (0, C.useMemo)(() => ({
    myFeatures: t,
    allFeatures: {
      ...gn,
      ...t
    },
    setFeature: i,
    resetFeature: r
  }), [ t, i, r ]);
  return (0, F.jsx)(bn.Provider, {
    value: a,
    children: e
  });
}

function Sn() {
  let e = (0, C.useContext)(bn);
  return (0, C.useMemo)(() => ({
    setFeature: e.setFeature,
    resetFeature: e.resetFeature,
    myFeatures: e.myFeatures
  }), [ e ]);
}

dn() && Nt();

function Cn() {
  return ln(), (0, C.useEffect)(() => {
    At();
  }, []), (0, F.jsx)(st, {
    children: (0, F.jsx)(xn, {
      children: (0, F.jsx)(Ye, {
        basename: Mt(),
        children: (0, F.jsx)(cn, {})
      })
    })
  });
}

w.render((0, F.jsx)(Cn, {}), document.getElementById(`root`));

export { ft as A, Ke as B, Ct as C, ht as D, bt as E, Le as F, S as G, Je as H, P as I, _ as J, b as K, Ue as L, st as M, ot as N, _t as O, nt as P, He as R, Ot as S, xt as T, Oe as U, qe as V, x as W, p as Y, It as _, dn as a, Dt as b, I as c, Kt as d, Rt as f, Vt as g, Ht as h, pn as i, ct as j, gt as k, Qt as l, zt as m, Sn as n, fn as o, Bt as p, g as q, mn as r, un as s, hn as t, Jt as u, Mt as v, St as w, kt as x, jt as y, Ge as z };
//# sourceMappingURL=index-maEWt9hW.js.map