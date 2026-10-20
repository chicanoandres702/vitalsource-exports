(() => {
  var E = Object.defineProperty, N = Object.defineProperties;
  var k = Object.getOwnPropertyDescriptors;
  var F = Object.getOwnPropertySymbols;
  var T = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
  var V = (r, t, e) => t in r ? E(r, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : r[t] = e, u = (r, t) => {
    for (var e in t || (t = {})) {
      T.call(t, e) && V(r, e, t[e]);
    }
    if (F) {
      for (var e of F(t)) {
        S.call(t, e) && V(r, e, t[e]);
      }
    }
    return r;
  }, p = (r, t) => N(r, k(t));
  (function() {
    var r = t();
    function t() {
      if (typeof window.CustomEvent == "function") {
        return window.CustomEvent;
      }
      function i(s, o) {
        o = o || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var c = document.createEvent("CustomEvent");
        return c.initCustomEvent(s, o.bubbles, o.cancelable, o.detail), c;
      }
      return i.prototype = window.Event.prototype, i;
    }
    function e(i, s) {
      var o = document.createElement("input");
      return o.type = "hidden", o.name = i, o.value = s, o;
    }
    function n(i, s) {
      var o = i.getAttribute("data-to"), c = e("_method", i.getAttribute("data-method")), d = e("_csrf_token", i.getAttribute("data-csrf")), a = document.createElement("form"), U = document.createElement("input"), h = i.getAttribute("target");
      a.method = i.getAttribute("data-method") === "get" ? "get" : "post", a.action = o, 
      a.style.display = "none", h ? a.target = h : s && (a.target = "_blank"), a.appendChild(d), 
      a.appendChild(c), document.body.appendChild(a), U.type = "submit", a.appendChild(U), 
      U.click();
    }
    window.addEventListener("click", function(i) {
      var s = i.target;
      if (!i.defaultPrevented) {
        for (;s && s.getAttribute; ) {
          var o = new r("phoenix.link.click", {
            bubbles: !0,
            cancelable: !0
          });
          if (!s.dispatchEvent(o)) {
            return i.preventDefault(), i.stopImmediatePropagation(), !1;
          }
          if (s.getAttribute("data-method")) {
            return n(s, i.metaKey || i.shiftKey), i.preventDefault(), !1;
          }
          s = s.parentNode;
        }
      }
    }, !1), window.addEventListener("phoenix.link.click", function(i) {
      var s = i.target.getAttribute("data-confirm");
      s && !window.confirm(s) && i.preventDefault();
    }, !1);
  })();
  var Z = r => {
    let t = r.match(/\/:[^/]*/g);
    return t ? t.map(e => e.replace("/:", "")) : [];
  }, W = (r, t) => new RegExp(`:${t}`, "g").test(r), f = (r, t, e) => {
    if (W(r, t)) {
      let n = new RegExp(`:${t}`, "g");
      return r.replace(n, e);
    }
    return r;
  }, B = (r, t) => Object.keys(t).reduce((e, n) => (r.indexOf(n) === -1 && (e[n] = t[n]), 
  e), {}), M = (r, t) => Object.keys(t).reduce((e, n) => (e[n] = r[n] || t[n], e), r), w = (r, t) => Object.keys(t).sort((e, n) => e.length > n.length ? -1 : 1).reduce((e, n) => f(e, n, t[n]), r), x = (r, t, e) => {
    let n = new URL(`${r}${t}`);
    return Object.keys(e).forEach(i => {
      n.searchParams.set(i, e[i]);
    }), n;
  }, R = (r, {template: t, required: e = [], defaults: n = []}, i = {}) => {
    let s = Z(t), o = [ ...e, ...s ];
    if (o.every(d => i[d] !== void 0)) {
      let d = w(t, i), a = B(s, i);
      return a = M(a, n), x(r, d, a).href;
    }
    let c = o.filter(d => !i[d]);
    throw new Error(`Missing params: ${c}`);
  };
  var b = (r = 0) => new Promise(t => setTimeout(t, r));
  var l = {
    print: {
      template: "/print/:isbn",
      required: [ "from", "to", "token" ],
      defaults: {
        locale: "en",
        brand: "",
        auto_print: !1,
        post_message_print: !1
      }
    },
    limits: {
      template: "/print/:isbn/limits",
      required: [ "token" ]
    },
    history: {
      template: "/print/:isbn/history",
      required: [ "token" ],
      defaults: {
        page: 1,
        pageSize: 100
      }
    },
    copies: {
      template: "/print/:isbn/copies",
      required: [ "token" ]
    },
    pageRange: {
      template: "/books/:isbn/pages/range",
      required: [ "from", "to" ]
    },
    printToken: {
      template: "/tokens/print"
    },
    request: {
      template: "/requests/:requestId",
      required: [ "token" ]
    },
    claimRequest: {
      template: "/requests/:requestId/claim",
      required: [ "token" ],
      defaults: {
        locale: "en",
        brand: "",
        auto_print: !1,
        post_message_print: !1
      }
    }
  };
  var g = "https://print.vitalsource.com";
  var Q = r => {
    if (r.status >= 200 && r.status < 303) {
      return Promise.resolve(r.status === 204 ? void 0 : r.json());
    }
    let t = e => Promise.reject({
      body: e == null ? void 0 : e.body,
      ok: r.ok,
      status: r.status,
      reason: r.statusText
    });
    return r.json ? r.json().then(t) : t();
  }, m = class {
    constructor(t) {
      this.jigsawHost = t, this.mimeoHost = g, this.pollInterval = 5e3;
    }
    get(t, e, n) {
      let i = R(t, e, n);
      return fetch(i).then(Q);
    }
    getPrintToken() {
      return this.get(this.jigsawHost, l.printToken);
    }
    getWithToken(t, e) {
      return this.getPrintToken().then(({token: n}) => this.get(this.mimeoHost, t, p(u({}, e), {
        token: n
      })));
    }
    getPrintRequest(t) {
      return this.getWithToken(l.request, {
        requestId: t
      });
    }
    getPrintUrl(t, e = {}) {
      return this.getPrintToken().then(({token: n}) => {
        let i = p(u({}, e), {
          requestId: t,
          token: n
        });
        return R(this.mimeoHost, l.claimRequest, i);
      });
    }
    createPrintRequest(t, e, n, i = {}) {
      return this.getPrintToken().then(({token: s}) => {
        let o = p(u({}, i), {
          token: s,
          isbn: t,
          from: e,
          to: n,
          async: !0
        });
        return this.get(this.mimeoHost, l.print, o);
      });
    }
    pollPrintRequest(t) {
      let e = n => this.isPrintDone(n.status) ? Promise.resolve(n) : b(this.pollInterval).then(() => this.getPrintRequest(t)).then(e);
      return this.getPrintRequest(t).then(e);
    }
    getPrintIframe(t, e, n, i = {}) {
      return this.createPrintRequest(t, e, n, i).then(({requestId: s}) => this.pollPrintRequest(s)).then(s => this.getPrintUrl(s.reqid, i)).then(s => {
        if (s) {
          let o = document.createElement("iframe");
          return o.src = s, o.style = "display: none;", o.setAttribute("aria-hidden", !0), 
          o;
        }
      });
    }
    print(t, e, n, i = {}) {
      return this.getWithToken(l.print, p(u({}, i), {
        isbn: t,
        from: e,
        to: n
      }));
    }
    getBookLimits(t) {
      return this.getWithToken(l.limits, {
        isbn: t
      });
    }
    getPrintHistory(t, e = 1, n = 100) {
      return this.getWithToken(l.history, {
        isbn: t,
        page: e,
        pageSize: n
      });
    }
    getLifetimePages(t) {
      return this.getWithToken(l.copies, {
        isbn: t
      });
    }
    getPageRange(t, e, n) {
      return this.get(this.jigsawHost, l.pageRange, {
        isbn: t,
        from: e,
        to: n
      });
    }
    isPrintDone(t) {
      return ![ "ready", "printing" ].includes(t);
    }
  };
  window.Mimeo = m;
})();
//# sourceMappingURL=app.js.map