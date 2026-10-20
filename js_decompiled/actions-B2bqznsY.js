import { a as e } from "./rolldown-runtime-B0Z9INg1.js";

import { i as t, n, r, t as i } from "./jsx-runtime-DU6_sasz.js";

import { G as a, U as o, W as s, Y as c, f as l, m as u, p as d, w as f } from "./index-maEWt9hW.js";

import { o as p, r as m } from "./styled-components.browser.esm-BcYycfu6.js";

import { m as h, u as g } from "./enrichments-DzDQ_toR.js";

import { n as _ } from "./array-BlXv2BOg.js";

import { n as v, r as y } from "./PageAreaReporter-C9x7kiiE.js";

var b = r(), x = e(n());

p();

var S = e(t());

function C() {
  let [e, t] = (0, S.useState)(v);
  return (0, S.useEffect)(() => {
    t(v);
    function e(e) {
      t(e.detail);
    }
    return document.addEventListener(y, e), () => {
      document.removeEventListener(y, e);
    };
  }, []), e;
}

var w = S.createContext(null);

function T(e) {
  e();
}

var E = T, D = function(e) {
  return E = e;
}, O = function() {
  return E;
}, k = {
  notify: function() {}
};

function A() {
  var e = O(), t = null, n = null;
  return {
    clear: function() {
      t = null, n = null;
    },
    notify: function() {
      e(function() {
        for (var e = t; e; ) {
          e.callback(), e = e.next;
        }
      });
    },
    get: function() {
      for (var e = [], n = t; n; ) {
        e.push(n), n = n.next;
      }
      return e;
    },
    subscribe: function(e) {
      var r = !0, i = n = {
        callback: e,
        next: null,
        prev: n
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !r || t === null || (r = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}

var j = function() {
  function e(e, t) {
    this.store = e, this.parentSub = t, this.unsubscribe = null, this.listeners = k, 
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }
  var t = e.prototype;
  return t.addNestedSub = function(e) {
    return this.trySubscribe(), this.listeners.subscribe(e);
  }, t.notifyNestedSubs = function() {
    this.listeners.notify();
  }, t.handleChangeWrapper = function() {
    this.onStateChange && this.onStateChange();
  }, t.isSubscribed = function() {
    return !!this.unsubscribe;
  }, t.trySubscribe = function() {
    this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), 
    this.listeners = A());
  }, t.tryUnsubscribe = function() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), 
    this.listeners = k);
  }, e;
}();

function M(e) {
  var t = e.store, n = e.context, r = e.children, i = (0, S.useMemo)(function() {
    var e = new j(t);
    return e.onStateChange = e.notifyNestedSubs, {
      store: t,
      subscription: e
    };
  }, [ t ]), a = (0, S.useMemo)(function() {
    return t.getState();
  }, [ t ]);
  (0, S.useEffect)(function() {
    var e = i.subscription;
    return e.trySubscribe(), a !== t.getState() && e.notifyNestedSubs(), function() {
      e.tryUnsubscribe(), e.onStateChange = null;
    };
  }, [ i, a ]);
  var o = n || w;
  return S.createElement(o.Provider, {
    value: i
  }, r);
}

a();

var N = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0 ? S.useLayoutEffect : S.useEffect, ee = [], te = [ null, null ];

function ne(e, t) {
  var n = e[1];
  return [ t.payload, n + 1 ];
}

function re(e, t, n) {
  N(function() {
    return e.apply(void 0, t);
  }, n);
}

function ie(e, t, n, r, i, a, o) {
  e.current = r, t.current = i, n.current = !1, a.current && (a.current = null, o());
}

function ae(e, t, n, r, i, a, o, s, c, l) {
  if (e) {
    var u = !1, d = null, f = function() {
      if (!u) {
        var e = t.getState(), n, f;
        try {
          n = r(e, i.current);
        } catch (e) {
          f = e, d = e;
        }
        f || (d = null), n === a.current ? o.current || c() : (a.current = n, s.current = n, 
        o.current = !0, l({
          type: `STORE_UPDATED`,
          payload: {
            error: f
          }
        }));
      }
    };
    return n.onStateChange = f, n.trySubscribe(), f(), function() {
      if (u = !0, n.tryUnsubscribe(), n.onStateChange = null, d) {
        throw d;
      }
    };
  }
}

var oe = function() {
  return [ null, 0 ];
};

function se(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.getDisplayName, i = r === void 0 ? function(e) {
    return `ConnectAdvanced(` + e + `)`;
  } : r, a = n.methodName, c = a === void 0 ? `connectAdvanced` : a, l = n.renderCountProp, u = l === void 0 ? void 0 : l, d = n.shouldHandleStateChanges, f = d === void 0 || d, p = n.storeKey, m = p === void 0 ? `store` : p;
  n.withRef;
  var h = n.forwardRef, g = h !== void 0 && h, _ = n.context, v = _ === void 0 ? w : _, y = o(n, [ `getDisplayName`, `methodName`, `renderCountProp`, `shouldHandleStateChanges`, `storeKey`, `withRef`, `forwardRef`, `context` ]), C = v;
  return function(t) {
    var n = t.displayName || t.name || `Component`, r = i(n), a = s({}, y, {
      getDisplayName: i,
      methodName: c,
      renderCountProp: u,
      shouldHandleStateChanges: f,
      storeKey: m,
      displayName: r,
      wrappedComponentName: n,
      WrappedComponent: t
    }), l = y.pure;
    function d(t) {
      return e(t.dispatch, a);
    }
    var p = l ? S.useMemo : function(e) {
      return e();
    };
    function h(e) {
      var n = (0, S.useMemo)(function() {
        var t = e.reactReduxForwardedRef, n = o(e, [ `reactReduxForwardedRef` ]);
        return [ e.context, t, n ];
      }, [ e ]), r = n[0], i = n[1], a = n[2], c = (0, S.useMemo)(function() {
        return r && r.Consumer && (0, b.isContextConsumer)(S.createElement(r.Consumer, null)) ? r : C;
      }, [ r, C ]), l = (0, S.useContext)(c), u = !!e.store && !!e.store.getState && !!e.store.dispatch;
      l && l.store;
      var m = u ? e.store : l.store, h = (0, S.useMemo)(function() {
        return d(m);
      }, [ m ]), g = (0, S.useMemo)(function() {
        if (!f) {
          return te;
        }
        var e = new j(m, u ? null : l.subscription);
        return [ e, e.notifyNestedSubs.bind(e) ];
      }, [ m, u, l ]), _ = g[0], v = g[1], y = (0, S.useMemo)(function() {
        return u ? l : s({}, l, {
          subscription: _
        });
      }, [ u, l, _ ]), x = (0, S.useReducer)(ne, ee, oe), w = x[0][0], T = x[1];
      if (w && w.error) {
        throw w.error;
      }
      var E = (0, S.useRef)(), D = (0, S.useRef)(a), O = (0, S.useRef)(), k = (0, S.useRef)(!1), A = p(function() {
        return O.current && a === D.current ? O.current : h(m.getState(), a);
      }, [ m, w, a ]);
      re(ie, [ D, E, k, a, A, O, v ]), re(ae, [ f, m, _, h, D, E, k, O, v, T ], [ m, _, h ]);
      var M = (0, S.useMemo)(function() {
        return S.createElement(t, s({}, A, {
          ref: i
        }));
      }, [ i, t, A ]);
      return (0, S.useMemo)(function() {
        return f ? S.createElement(c.Provider, {
          value: y
        }, M) : M;
      }, [ c, M, y ]);
    }
    var _ = l ? S.memo(h) : h;
    if (_.WrappedComponent = t, _.displayName = r, g) {
      var v = S.forwardRef(function(e, t) {
        return S.createElement(_, s({}, e, {
          reactReduxForwardedRef: t
        }));
      });
      return v.displayName = r, v.WrappedComponent = t, (0, x.default)(v, t);
    }
    return (0, x.default)(_, t);
  };
}

function ce(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}

function P(e, t) {
  if (ce(e, t)) {
    return !0;
  }
  if (typeof e != `object` || !e || typeof t != `object` || !t) {
    return !1;
  }
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) {
    return !1;
  }
  for (var i = 0; i < n.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !ce(e[n[i]], t[n[i]])) {
      return !1;
    }
  }
  return !0;
}

function F(e) {
  return `Minified Redux error #` + e + `; visit https://redux.js.org/Errors?code=` + e + ` for the full message or use the non-minified dev environment for full errors. `;
}

(function() {
  return typeof Symbol == `function` && Symbol.observable || `@@observable`;
})();

var I = function() {
  return Math.random().toString(36).substring(7).split(``).join(`.`);
}, le = {
  INIT: `@@redux/INIT` + I(),
  REPLACE: `@@redux/REPLACE` + I(),
  PROBE_UNKNOWN_ACTION: function() {
    return `@@redux/PROBE_UNKNOWN_ACTION` + I();
  }
};

function ue(e) {
  Object.keys(e).forEach(function(t) {
    var n = e[t];
    if (n(void 0, {
      type: le.INIT
    }) === void 0) {
      throw Error(F(12));
    }
    if (n(void 0, {
      type: le.PROBE_UNKNOWN_ACTION()
    }) === void 0) {
      throw Error(F(13));
    }
  });
}

function de(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  var a = Object.keys(n), o;
  try {
    ue(n);
  } catch (e) {
    o = e;
  }
  return function(e, t) {
    if (e === void 0 && (e = {}), o) {
      throw o;
    }
    for (var r = !1, i = {}, s = 0; s < a.length; s++) {
      var c = a[s], l = n[c], u = e[c], d = l(u, t);
      if (d === void 0) {
        throw t && t.type, Error(F(14));
      }
      i[c] = d, r ||= d !== u;
    }
    return r ||= a.length !== Object.keys(e).length, r ? i : e;
  };
}

function fe(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}

function pe(e, t) {
  if (typeof e == `function`) {
    return fe(e, t);
  }
  if (typeof e != `object` || !e) {
    throw Error(F(16));
  }
  var n = {};
  for (var r in e) {
    var i = e[r];
    typeof i == `function` && (n[r] = fe(i, t));
  }
  return n;
}

function L(e) {
  return function(t, n) {
    var r = e(t, n);
    function i() {
      return r;
    }
    return i.dependsOnOwnProps = !1, i;
  };
}

function me(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? !!e.dependsOnOwnProps : e.length !== 1;
}

function he(e, t) {
  return function(t, n) {
    n.displayName;
    var r = function(e, t) {
      return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
    };
    return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
      r.mapToProps = e, r.dependsOnOwnProps = me(e);
      var i = r(t, n);
      return typeof i == `function` && (r.mapToProps = i, r.dependsOnOwnProps = me(i), 
      i = r(t, n)), i;
    }, r;
  };
}

function ge(e) {
  return typeof e == `function` ? he(e, `mapDispatchToProps`) : void 0;
}

function _e(e) {
  return e ? void 0 : L(function(e) {
    return {
      dispatch: e
    };
  });
}

function ve(e) {
  return e && typeof e == `object` ? L(function(t) {
    return pe(e, t);
  }) : void 0;
}

var ye = [ ge, _e, ve ];

function be(e) {
  return typeof e == `function` ? he(e, `mapStateToProps`) : void 0;
}

function xe(e) {
  return e ? void 0 : L(function() {
    return {};
  });
}

var Se = [ be, xe ];

a();

function Ce(e, t, n) {
  return s({}, n, {}, e, {}, t);
}

function we(e) {
  return function(t, n) {
    n.displayName;
    var r = n.pure, i = n.areMergedPropsEqual, a = !1, o;
    return function(t, n, s) {
      var c = e(t, n, s);
      return a ? (!r || !i(c, o)) && (o = c) : (a = !0, o = c), o;
    };
  };
}

function Te(e) {
  return typeof e == `function` ? we(e) : void 0;
}

function Ee(e) {
  return e ? void 0 : function() {
    return Ce;
  };
}

var De = [ Te, Ee ];

function Oe(e, t, n, r) {
  return function(i, a) {
    return n(e(i, a), t(r, a), a);
  };
}

function ke(e, t, n, r, i) {
  var a = i.areStatesEqual, o = i.areOwnPropsEqual, s = i.areStatePropsEqual, c = !1, l, u, d, f, p;
  function m(i, a) {
    return l = i, u = a, d = e(l, u), f = t(r, u), p = n(d, f, u), c = !0, p;
  }
  function h() {
    return d = e(l, u), t.dependsOnOwnProps && (f = t(r, u)), p = n(d, f, u), p;
  }
  function g() {
    return e.dependsOnOwnProps && (d = e(l, u)), t.dependsOnOwnProps && (f = t(r, u)), 
    p = n(d, f, u), p;
  }
  function _() {
    var t = e(l, u), r = !s(t, d);
    return d = t, r && (p = n(d, f, u)), p;
  }
  function v(e, t) {
    var n = !o(t, u), r = !a(e, l);
    return l = e, u = t, n && r ? h() : n ? g() : r ? _() : p;
  }
  return function(e, t) {
    return c ? v(e, t) : m(e, t);
  };
}

function Ae(e, t) {
  var n = t.initMapStateToProps, r = t.initMapDispatchToProps, i = t.initMergeProps, a = o(t, [ `initMapStateToProps`, `initMapDispatchToProps`, `initMergeProps` ]), s = n(e, a), c = r(e, a), l = i(e, a);
  return (a.pure ? ke : Oe)(s, c, l, e, a);
}

a();

function R(e, t, n) {
  for (var r = t.length - 1; r >= 0; r--) {
    var i = t[r](e);
    if (i) {
      return i;
    }
  }
  return function(t, r) {
    throw Error(`Invalid value of type ` + typeof e + ` for ` + n + ` argument when connecting component ` + r.wrappedComponentName + `.`);
  };
}

function je(e, t) {
  return e === t;
}

function Me(e) {
  var t = e === void 0 ? {} : e, n = t.connectHOC, r = n === void 0 ? se : n, i = t.mapStateToPropsFactories, a = i === void 0 ? Se : i, c = t.mapDispatchToPropsFactories, l = c === void 0 ? ye : c, u = t.mergePropsFactories, d = u === void 0 ? De : u, f = t.selectorFactory, p = f === void 0 ? Ae : f;
  return function(e, t, n, i) {
    i === void 0 && (i = {});
    var c = i, u = c.pure, f = u === void 0 || u, m = c.areStatesEqual, h = m === void 0 ? je : m, g = c.areOwnPropsEqual, _ = g === void 0 ? P : g, v = c.areStatePropsEqual, y = v === void 0 ? P : v, b = c.areMergedPropsEqual, x = b === void 0 ? P : b, S = o(c, [ `pure`, `areStatesEqual`, `areOwnPropsEqual`, `areStatePropsEqual`, `areMergedPropsEqual` ]), C = R(e, a, `mapStateToProps`), w = R(t, l, `mapDispatchToProps`), T = R(n, d, `mergeProps`);
    return r(p, s({
      methodName: `connect`,
      getDisplayName: function(e) {
        return `Connect(` + e + `)`;
      },
      shouldHandleStateChanges: !!e,
      initMapStateToProps: C,
      initMapDispatchToProps: w,
      initMergeProps: T,
      pure: f,
      areStatesEqual: h,
      areOwnPropsEqual: _,
      areStatePropsEqual: y,
      areMergedPropsEqual: x
    }, S));
  };
}

var Ne = Me();

function Pe() {
  return (0, S.useContext)(w);
}

function Fe(e) {
  e === void 0 && (e = w);
  var t = e === w ? Pe : function() {
    return (0, S.useContext)(e);
  };
  return function() {
    return t().store;
  };
}

var Ie = Fe();

function Le(e) {
  e === void 0 && (e = w);
  var t = e === w ? Ie : Fe(e);
  return function() {
    return t().dispatch;
  };
}

var Re = Le(), ze = function(e, t) {
  return e === t;
};

function Be(e, t, n, r) {
  var i = (0, S.useReducer)(function(e) {
    return e + 1;
  }, 0)[1], a = (0, S.useMemo)(function() {
    return new j(n, r);
  }, [ n, r ]), o = (0, S.useRef)(), s = (0, S.useRef)(), c = (0, S.useRef)(), l = (0, 
  S.useRef)(), u = n.getState(), d;
  try {
    d = e !== s.current || u !== c.current || o.current ? e(u) : l.current;
  } catch (e) {
    throw o.current && (e.message += `\nThe error may be correlated with this previous error:\n` + o.current.stack + `\n\n`), 
    e;
  }
  return N(function() {
    s.current = e, c.current = u, l.current = d, o.current = void 0;
  }), N(function() {
    function e() {
      try {
        var e = s.current(n.getState());
        if (t(e, l.current)) {
          return;
        }
        l.current = e;
      } catch (e) {
        o.current = e;
      }
      i();
    }
    return a.onStateChange = e, a.trySubscribe(), e(), function() {
      return a.tryUnsubscribe();
    };
  }, [ n, a ]), d;
}

function Ve(e) {
  e === void 0 && (e = w);
  var t = e === w ? Pe : function() {
    return (0, S.useContext)(e);
  };
  return function(e, n) {
    n === void 0 && (n = ze);
    var r = t(), i = r.store, a = r.subscription, o = Be(e, n, i, a);
    return (0, S.useDebugValue)(o), o;
  };
}

var z = Ve();

D(e(c()).unstable_batchedUpdates);

function B() {
  return Re();
}

function He(e) {
  let t = (0, S.useRef)();
  return (0, S.useEffect)(() => {
    t.current = e;
  }), t.current;
}

var Ue = function(e) {
  return e.VIEWER = `viewer`, e.WINDOW = `window`, e;
}({}), V = `mosaic-middleware-action`;

function We(e) {
  return function(...t) {
    return {
      type: V,
      mosaic: {
        apiMethodName: e,
        apiCallArgs: t,
        apiTarget: `window`
      }
    };
  };
}

function H(e) {
  return function(...t) {
    return {
      type: V,
      mosaic: {
        apiMethodName: e,
        apiCallArgs: t,
        apiTarget: `viewer`
      }
    };
  };
}

function Ge(e) {
  return function(t, ...n) {
    return {
      type: V,
      mosaic: {
        apiMethodName: e,
        apiCallArgs: n,
        apiTarget: `window`,
        streaming: !0,
        signal: t.signal,
        onEvent: t.onEvent
      }
    };
  };
}

function Ke(e) {
  return function(t) {
    return {
      type: Xe(e),
      eventData: t,
      timestamp: (new Date).valueOf()
    };
  };
}

function qe(e) {
  return `mosaic/${e}/start`;
}

function Je(e) {
  return `mosaic/${e}/success`;
}

function Ye(e) {
  return `mosaic/${e}/fail`;
}

function Xe(e) {
  return `mosaic/${e}`;
}

function Ze(e) {
  return `mosaic/${e}/stream`;
}

var U = function(e) {
  return e.GET_HIGHLIGHTS = `Book.getHighlights`, e.GET_CITATIONS = `Book.getCitations`, 
  e.GET_TOC = `Book.getTOC`, e.GET_SPINE = `Book.getSpine`, e.GET_PAGE_BREAKS = `Book.getPageBreaks`, 
  e.GET_UNIVERSAL_URL = `Book.getUniversalURL`, e.GET_FIGURES = `Book.getFigures`, 
  e.HAS_NEXT_CONTENT_DOC = `Book.hasNextContentDoc`, e.HAS_PREVIOUS_CONTENT_DOC = `Book.hasPreviousContentDoc`, 
  e.GO_TO_NEXT_PAGE = `Book.goToNextPage`, e.GO_TO_NEXT_PAGE_BREAK = `Book.goToNextPageBreak`, 
  e.GO_TO_PREV_PAGE = `Book.goToPreviousPage`, e.GO_TO_PREV_PAGE_BREAK = `Book.goToPreviousPageBreak`, 
  e.GO_TO_PAGE = `Book.goToPage`, e.GO_TO_URL = `Book.goToURL`, e.GO_TO_CFI = `Book.goToCfi`, 
  e.GO_TO_CFI_RANGE = `Book.goToCfiRange`, e.GO_TO_BOOKMARK = `Book.goToBookmark`, 
  e.GET_REBUILD_PROGRESS = `Book.getRebuildProgress`, e.REGISTER_POI = `Book.registerPOI`, 
  e.SET_BOOKMARK = `Bookmarks.setBookmark`, e.DELETE_BOOKMARK = `Bookmarks.deleteBookmark`, 
  e.GET_BOOKMARKS = `Bookmarks.getBookmarks`, e.GO_TO_FIGURE = `Book.goToFigure`, 
  e.IMAGE_TOOLS_FOCUS = `ImageTools.focus`, e.IMAGE_TOOLS_RECONFIGURE = `ImageTools.reconfigure`, 
  e.GO_TO_HIGHLIGHT = `Highlights.goToHighlight`, e.DELETE_HIGHLIGHT = `Highlights.deleteHighlight`, 
  e.UPDATE_HIGHLIGHT = `Highlights.updateHighlight`, e.HIGHLIGHT_CURRENT_SELECTION = `Highlights.highlightCurrentSelection`, 
  e.REDRAW_HIGHLIGHTS = `Highlights.redrawHighlights`, e.GET_BOOK_INFO = `Book.getInfo`, 
  e.GET_NORA_URL = `Book.getNoraURL`, e.SEARCH_BOOK_CONTENT = `Search.searchContentInOneBook`, 
  e.GO_TO_SEARCH_RESULT = `Search.goToSearchResultInOneBook`, e.HIGHLIGHT_SEARCH_RESULTS = `SearchHighlighter.highlightSearchResultsInOneBook`, 
  e.UNHIGHLIGHT_SEARCH_RESULTS = `SearchHighlighter.unhighlightSearchResultsInOneBook`, 
  e.ADD_ENHANCED_FORMATTING_CSS = `ContentControls.addEnhancedFormattingCSS`, e.REMOVE_ENHANCED_FORMATTING_CSS = `ContentControls.removeEnhancedFormattingCSS`, 
  e.SET_READER_VIEW = `ContentControls.setReaderView`, e.SET_DISPLAY_MODE = `ContentControls.setDisplayMode`, 
  e.SET_LINE_HEIGHT = `ContentControls.setLineHeight`, e.SET_FONT_FAMILY = `ContentControls.setFontFamily`, 
  e.SET_PAGE_MARGIN = `ContentControls.setMargin`, e.SET_TEXT_SIZE = `ContentControls.setTextSize`, 
  e.ZOOM_IN = `ContentControls.increaseZoomScale`, e.ZOOM_OUT = `ContentControls.decreaseZoomScale`, 
  e.SET_ZOOM = `ContentControls.setZoomScale`, e.GET_ZOOM = `ContentControls.getZoomScale`, 
  e.FIT_WIDTH = `ContentControls.fitToWidth`, e.FIT_HEIGHT = `ContentControls.fitToHeight`, 
  e.SET_MANY = `ContentControls.setMany`, e.PRINT = `Printer.print`, e.PRINTTRIGGER = `Printer.printTrigger`, 
  e.PRINTCLEANUP = `Printer.printCleanup`, e.GET_PRINT_HISTORY = `Printer.getPrintHistory`, 
  e.GET_BOOK_PRINT_LIMITS = `Printer.getBookLimits`, e.GET_LIFETIME_PRINT_PAGES = `Printer.getLifetimePages`, 
  e.TTS_SEND_STATUS = `TTS.sendStatus`, e.TTS_GET_SETTINGS = `TTS.getCurrentSettings`, 
  e.TTS_PLAY_FROM_TOP = `TTS.playFromTop`, e.TTS_PLAY_FROM_LOCATION = `TTS.playFromLocation`, 
  e.TTS_PLAY_FROM_CURRENT_SELECTION = `TTS.playFromCurrentSelection`, e.TTS_ENABLE_ALT_TEXT = `TTS.enableAltText`, 
  e.TTS_DISABLE_ALT_TEXT = `TTS.disableAltText`, e.TTS_ENABLE_SIMPLIFIED_READING = `TTS.enableSimplifiedReading`, 
  e.TTS_DISABLE_SIMPLIFIED_READING = `TTS.disableSimplifiedReading`, e.TTS_STOP = `TTS.stop`, 
  e.TTS_PAUSE = `TTS.pause`, e.TTS_RESUME = `TTS.resume`, e.TTS_SET_VOICE_INDEX = `TTS.setVoiceIndex`, 
  e.TTS_SET_RAW_RATE = `TTS.setRawRate`, e.TTS_SKIP_FORWARD = `TTS.skipForward`, e.TTS_SKIP_BACK = `TTS.skipBack`, 
  e.TTS_SET_NO_CONTENT_MSG = `TTS.setNoContentMessage`, e.TTS_GET_VOICES = `TTS.getVoices`, 
  e.TTS_CUE_PLAYBACK = `TTS.cuePlayback`, e.TTS_UNCUE_PLAYBACK = `TTS.uncuePlayback`, 
  e.TTS_SET_HIGHLIGHT_MODE = `TTS.setHighlightMode`, e.TTS_RECENTER = `TTS.recenter`, 
  e.TTS_PLAY_FROM_VIEWPORT = `TTS.playFromViewport`, e.TTS_PLAY_PENDING = `TTS.playPending`, 
  e.TRACK_LOCATION = `Locations.trackLocation`, e.RESET_TRACKED_LOCATIONS = `Locations.resetTrackedLocations`, 
  e.SEND_TRACKED_LOCATIONS = `Locations.sendTrackedLocations`, e.SCROLL_TO_Y = `Viewport.scrollTo`, 
  e.SET_PADDING = `Padding.setPadding`, e.ADD_TO_PADDING = `Padding.addToPadding`, 
  e.SET_LAYOUT_MODE = `Book.setMode`, e.LAUNCH_APP = `ReadOffline.launchApp`, e.DOWNLOAD_APP = `ReadOffline.downloadApp`, 
  e.CLEAR_SELECTION = `TextSelection.clearSelections`, e.GET_DYNAMIC_URL = `ReadOffline.getDynamicUrl`, 
  e.GET_APP_SSO_URL = `ReadOffline.getAppSSOUrl`, e.UPDATE_USER_BOOK_PREFS = `Book.updateUserPreferences`, 
  e.CAPTURE_FOCUS = `Focus.captureFocus`, e.RESTORE_FOCUS = `Focus.restoreFocus`, 
  e.SCROLL_TO_START_LOCATION = `HashNav.scrollToStartLocation`, e.GET_VISIBLE_TEXT = `VisibleText.getVisibleText`, 
  e;
}(U || {}), Qe = H(U.SCROLL_TO_START_LOCATION), $e = i(), et = {
  Holder: m.div`
    position: absolute;
    top: 0;
  `,
  Page: m.div`
    position: absolute;
    overflow: hidden;
  `
};

function tt({children: e, className: t = ``}) {
  let n = C(), r = He(n), i = B();
  (0, S.useEffect)(() => {
    r && r.left < 0 && n.left > 0 && i(Qe());
  }, [ n, r, i ]);
  function a() {
    return {
      transform: `translate(${n.left}px,${n.top}px)`,
      width: `${Math.round(n.width)}px`,
      height: `${Math.round(n.height)}px`
    };
  }
  return (0, $e.jsx)(et.Holder, {
    className: t,
    children: (0, $e.jsx)(et.Page, {
      style: a(),
      children: e
    })
  });
}

function nt(e) {
  function t(t) {
    return f(t, e);
  }
  function n(e) {
    let n = t(e).fetchState.status;
    return n === d.WAITING ? l.WAITING : n === d.FETCHING ? l.FETCHING : a(e) ? l.OK : l.ERROR;
  }
  function r(e) {
    let t = n(e), r = a(e);
    return t === l.WAITING ? l.WAITING : typeof r == `boolean` ? r ? l.OK : l.ERROR : l.FETCHING;
  }
  function i(e) {
    return t(e).resultState.data;
  }
  function a(e) {
    return t(e).resultState.isOk;
  }
  function o(e) {
    return t(e).resultState.resultStatus;
  }
  return {
    getFetchStatus: n,
    getResultStatus: r,
    getData: i,
    getResultStatusCode: o
  };
}

function rt(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) {
    throw TypeError(t);
  }
}

function it(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) {
    throw TypeError(t);
  }
}

function at(e, t = `expected all items to be functions, instead received the following types: `) {
  if (!e.every(e => typeof e == `function`)) {
    let n = e.map(e => typeof e == `function` ? `function ${e.name || `unnamed`}()` : typeof e).join(`, `);
    throw TypeError(`${t}[${n}]`);
  }
}

var ot = e => Array.isArray(e) ? e : [ e ];

function st(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return at(t, `createSelector expects all input-selectors to be functions, but received the following types: `), 
  t;
}

function ct(e, t) {
  let n = [], {length: r} = e;
  for (let i = 0; i < r; i++) {
    n.push(e[i].apply(null, t));
  }
  return n;
}

var lt = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, ut = typeof WeakRef < `u` ? WeakRef : lt, dt = 0, ft = 1;

function W() {
  return {
    s: dt,
    v: void 0,
    o: null,
    p: null
  };
}

function pt(e, t = {}) {
  let n = W(), {resultEqualityCheck: r} = t, i, a = 0;
  function o() {
    let t = n, {length: o} = arguments;
    for (let e = 0, n = o; e < n; e++) {
      let n = arguments[e];
      if (typeof n == `function` || typeof n == `object` && n) {
        let e = t.o;
        e === null && (t.o = e = new WeakMap);
        let r = e.get(n);
        r === void 0 ? (t = W(), e.set(n, t)) : t = r;
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map);
        let r = e.get(n);
        r === void 0 ? (t = W(), e.set(n, t)) : t = r;
      }
    }
    let s = t, c;
    if (t.s === ft) {
      c = t.v;
    } else if (c = e.apply(null, arguments), a++, r) {
      let e = i?.deref?.() ?? i;
      e != null && r(e, c) && (c = e, a !== 0 && a--), i = typeof c == `object` && c || typeof c == `function` ? new ut(c) : c;
    }
    return s.s = ft, s.v = c, c;
  }
  return o.clearCache = () => {
    n = W(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}

function mt(e, ...t) {
  let n = typeof e == `function` ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...e) => {
    let t = 0, r = 0, i, a = {}, o = e.pop();
    typeof o == `object` && (a = o, o = e.pop()), rt(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
    let {memoize: s, memoizeOptions: c = [], argsMemoize: l = pt, argsMemoizeOptions: u = [], devModeChecks: d = {}} = {
      ...n,
      ...a
    }, f = ot(c), p = ot(u), m = st(e), h = s(function() {
      return t++, o.apply(null, arguments);
    }, ...f), g = l(function() {
      r++;
      let e = ct(m, arguments);
      return i = h.apply(null, e), i;
    }, ...p);
    return Object.assign(g, {
      resultFunc: o,
      memoizedResultFunc: h,
      dependencies: m,
      dependencyRecomputations: () => r,
      resetDependencyRecomputations: () => {
        r = 0;
      },
      lastResult: () => i,
      recomputations: () => t,
      resetRecomputations: () => {
        t = 0;
      },
      memoize: s,
      argsMemoize: l
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}

var G = mt(pt), ht = Object.assign((e, t = G) => {
  it(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
  let n = Object.keys(e);
  return t(n.map(t => e[t]), (...e) => e.reduce((e, t, r) => (e[n[r]] = t, e), {}));
}, {
  withTypes: () => ht
}), K = function(e) {
  return e.BOOK_NOT_FOUND = `book-not-found`, e.PAGE_NOT_FOUND = `page-not-found`, 
  e.BOOK_REBUILDING = `book-rebuilding`, e.BOOK_NOT_ACTIVATED = `book-not-activated`, 
  e.LOGGED_OUT = `logged-out`, e.ACCESS_DENIED = `access-denied`, e.BOT_DETECTED = `bot-detected`, 
  e.BROWSER_NOT_SUPPORTED = `browser-not-supported`, e.UNKNOWN = `unknown`, e;
}({});

function q(e) {
  return e.nav.loadStatus;
}

function gt(e) {
  return q(e).status;
}

function _t(e) {
  return q(e).lastValidPage;
}

function vt(e) {
  return _t(e).pages?.[0];
}

function J(e) {
  return _t(e).pages?.[0]?.cfi;
}

function yt(e) {
  return gt(e) === u.PENDING;
}

function bt(e) {
  let t = q(e).errorInfo;
  if (!t) {
    return;
  }
  let {code: n, jigsawCode: r} = t;
  if (n === 404) {
    return r === `bookNotFound` ? K.BOOK_NOT_FOUND : K.PAGE_NOT_FOUND;
  }
  if (n === 423) {
    return K.BOOK_REBUILDING;
  }
  if (n === 403) {
    return r === `bookNotActivated` ? K.BOOK_NOT_ACTIVATED : K.ACCESS_DENIED;
  }
  if (n === 401) {
    return K.LOGGED_OUT;
  }
  if (n === 428) {
    return K.BOT_DETECTED;
  }
  if (n === 444) {
    return K.BROWSER_NOT_SUPPORTED;
  }
  if (n) {
    return K.UNKNOWN;
  }
}

function xt(e) {
  return e.nav.pageBreak;
}

function Y(e) {
  return e.nav.pageBreak.label;
}

function St(e) {
  return e.nav.hasNextContentDoc;
}

function Ct(e) {
  return e.nav.hasPreviousContentDoc;
}

function wt(e) {
  return e.nav.pageScroll?.cfi;
}

function Tt(e) {
  return e.nav.pageScroll?.scrollTop || 0;
}

function Et(e) {
  return e.nav.pageScroll?.scrollHeight || 0;
}

function Dt(e) {
  let t = J(e), n = wt(e);
  if (t) {
    return `${t}!${n || `/4`}`;
  }
}

function Ot(e) {
  return e.nav.universalUrl;
}

function kt(e) {
  return !!Ot(e);
}

function At(e) {
  return e.nav.pageHasScrolled.hasScrolled;
}

var X = nt(`pagebreaks`), jt = X.getFetchStatus, Mt = G(X.getData, e => e?.map(e => {
  let t = h(e.cfi) ? e.cfi : e.cfiWithoutAssertions;
  return {
    ...e,
    cfi: t,
    extendedCfi: g(t)
  };
}).filter(e => h(e.cfi)));

G(e => Y(e), e => Mt(e), (e, t) => t.findIndex(t => t.label === e));

function Z(e, t) {
  return X.getData(e).findIndex(e => e.label === t);
}

function Nt(e) {
  return typeof e == `string` && !isNaN(e) && !isNaN(parseFloat(e));
}

function Pt(e) {
  let t = X.getData(e);
  if (t && t.length) {
    for (let e = t.length - 1; e >= 0; e--) {
      let n = t[e].label;
      if (Nt(n)) {
        return n;
      }
    }
  }
  return ``;
}

function Ft(e, t, n) {
  let r = X.getData(e);
  return r && t >= 0 && n >= 0 && n <= r.length ? t === n ? [ r[t] ] : r.slice(t, n + 1) : [];
}

function It(e, t, n) {
  let r = Ft(e, Z(e, t), Z(e, n));
  return r = _(r, e => e.label), r;
}

function Q(e) {
  return e.viewer.isbn;
}

function Lt(e) {
  return e.viewer.isReady;
}

function Rt(e) {
  return !!zt(e);
}

function zt(e) {
  return e.viewer.snippetRange;
}

var Bt = H(U.HAS_NEXT_CONTENT_DOC), Vt = H(U.HAS_PREVIOUS_CONTENT_DOC), Ht = H(U.GO_TO_NEXT_PAGE);

U.GO_TO_NEXT_PAGE_BREAK;

var Ut = H(U.GO_TO_PREV_PAGE);

U.GO_TO_PREV_PAGE_BREAK;

var Wt = H(U.GO_TO_PAGE), Gt = H(U.GO_TO_URL), Kt = H(U.GO_TO_CFI), qt = H(U.GO_TO_CFI_RANGE), Jt = H(U.REGISTER_POI), Yt = H(U.GET_UNIVERSAL_URL);

function Xt() {
  return function(e, t) {
    St(t()) && e(Ht());
  };
}

function Zt() {
  return function(e, t) {
    Ct(t()) && e(Ut());
  };
}

function Qt() {
  return function(e, t) {
    e(Gt(`/books/${Q(t())}/pages/recent`));
  };
}

function $t() {
  return function(e, t) {
    e(Gt(`/books/${Q(t())}/pages/first`));
  };
}

function en() {
  let e = B(), t = z(vt), n = z(St), r = z(Ct), i = z(Pt), a = () => e(Xt()), o = () => e(Zt()), s = () => e($t()), c = (t, n) => e(Wt(t, n)), l = t => e(Gt(t)), u = (t, n, r) => e(Kt(t, n, r)), d = (t, n, r) => e(qt(t, n, r)), f = (0, 
  S.useCallback)((t, n) => {
    e(Jt(t, n));
  }, [ e ]);
  return {
    currentPageBreak: z(xt),
    currentPageBreakLabel: z(Y),
    currentPageCfi: z(J),
    currentCfi: z(Dt),
    isPageLoading: z(yt),
    handleGoToNextPage: a,
    handleGoToPrevPage: o,
    goToFirstPage: s,
    currentPage: t,
    hasNextPage: n,
    hasPreviousPage: r,
    lastNumericPageBreakLabel: i,
    goToPage: c,
    goToCFI: u,
    goToCFIRange: d,
    goToUrl: l,
    registerPOI: f
  };
}

var tn = class extends S.Component {
  constructor(...e) {
    super(...e), this.state = {
      ready: !1
    }, this.timeoutId = null;
  }
  componentDidMount() {
    this.timeoutId = window.setTimeout(() => this.setReady(), this.props.timeout);
  }
  componentWillUnmount() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
  setReady() {
    this.timeoutId = null, this.setState({
      ready: !0
    });
  }
  render() {
    return this.props.render ? this.props.render(this.state.ready) : this.state.ready ? this.props.children : this.props.placeholder || null;
  }
}, nn = `ariaLiveAnnounce`, rn = e => ({
  type: nn,
  message: e
}), $, an = e => function(t) {
  $ && clearTimeout($), t(rn(e)), $ = setTimeout(() => {
    t(rn(``));
  }, 3e3);
};

export { C as $, G as A, H as B, At as C, bt as D, J as E, V as F, Je as G, Ye as H, Ue as I, z as J, He as K, Ke as L, tt as M, Qe as N, yt as O, U as P, M as Q, We as R, Ot as S, vt as T, qe as U, Xe as V, Ze as W, Ne as X, Re as Y, de as Z, It as _, Yt as a, Et as b, Bt as c, zt as d, Rt as f, jt as g, Mt as h, en as i, nt as j, K as k, Vt as l, Z as m, an as n, Kt as o, Lt as p, B as q, tn as r, Qt as s, nn as t, Q as u, Dt as v, kt as w, Tt as x, Y as y, Ge as z };
//# sourceMappingURL=actions-B2bqznsY.js.map
//# sourceMappingURL=actions-B2bqznsY.js.map