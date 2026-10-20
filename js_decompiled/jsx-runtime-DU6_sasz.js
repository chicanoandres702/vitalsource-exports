import { t as e } from "./rolldown-runtime-B0Z9INg1.js";

var t = e((e, t) => {
  var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function a(e) {
    if (e == null) throw TypeError(`Object.assign cannot be called with null or undefined`);
    return Object(e);
  }
  function o() {
    try {
      if (!Object.assign) return !1;
      var e = new String(`abc`);
      if (e[5] = `de`, Object.getOwnPropertyNames(e)[0] === `5`) return !1;
      for (var t = {}, n = 0; n < 10; n++) t[`_` + String.fromCharCode(n)] = n;
      if (Object.getOwnPropertyNames(t).map(function(e) {
        return t[e];
      }).join(``) !== `0123456789`) return !1;
      var r = {};
      return `abcdefghijklmnopqrst`.split(``).forEach(function(e) {
        r[e] = e;
      }), Object.keys(Object.assign({}, r)).join(``) === `abcdefghijklmnopqrst`;
    } catch {
      return !1;
    }
  }
  t.exports = o() ? Object.assign : function(e, t) {
    for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
      for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
      if (n) {
        c = n(o);
        for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
      }
    }
    return s;
  };
}), n = e(e => {
  var n = t(), r = 60103, i = 60106;
  e.Fragment = 60107, e.StrictMode = 60108, e.Profiler = 60114;
  var a = 60109, o = 60110, s = 60112;
  e.Suspense = 60113;
  var c = 60115, l = 60116;
  if (typeof Symbol == `function` && Symbol.for) {
    var u = Symbol.for;
    r = u(`react.element`), i = u(`react.portal`), e.Fragment = u(`react.fragment`), 
    e.StrictMode = u(`react.strict_mode`), e.Profiler = u(`react.profiler`), a = u(`react.provider`), 
    o = u(`react.context`), s = u(`react.forward_ref`), e.Suspense = u(`react.suspense`), 
    c = u(`react.memo`), l = u(`react.lazy`);
  }
  var d = typeof Symbol == `function` && Symbol.iterator;
  function f(e) {
    return typeof e != `object` || !e ? null : (e = d && e[d] || e[`@@iterator`], typeof e == `function` ? e : null);
  }
  function p(e) {
    for (var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
    return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  var m = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  }, h = {};
  function g(e, t, n) {
    this.props = e, this.context = t, this.refs = h, this.updater = n || m;
  }
  g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) {
    if (typeof e != `object` && typeof e != `function` && e != null) throw Error(p(85));
    this.updater.enqueueSetState(this, e, t, `setState`);
  }, g.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
  };
  function _() {}
  _.prototype = g.prototype;
  function v(e, t, n) {
    this.props = e, this.context = t, this.refs = h, this.updater = n || m;
  }
  var y = v.prototype = new _;
  y.constructor = v, n(y, g.prototype), y.isPureReactComponent = !0;
  var b = {
    current: null
  }, x = Object.prototype.hasOwnProperty, S = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function C(e, t, n) {
    var i, a = {}, o = null, s = null;
    if (t != null) for (i in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = `` + t.key), 
    t) x.call(t, i) && !S.hasOwnProperty(i) && (a[i] = t[i]);
    var c = arguments.length - 2;
    if (c === 1) a.children = n; else if (1 < c) {
      for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
      a.children = l;
    }
    if (e && e.defaultProps) for (i in c = e.defaultProps, c) a[i] === void 0 && (a[i] = c[i]);
    return {
      $$typeof: r,
      type: e,
      key: o,
      ref: s,
      props: a,
      _owner: b.current
    };
  }
  function w(e, t) {
    return {
      $$typeof: r,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function T(e) {
    return typeof e == `object` && !!e && e.$$typeof === r;
  }
  function E(e) {
    var t = {
      "=": `=0`,
      ":": `=2`
    };
    return `$` + e.replace(/[=:]/g, function(e) {
      return t[e];
    });
  }
  var D = /\/+/g;
  function O(e, t) {
    return typeof e == `object` && e && e.key != null ? E(`` + e.key) : t.toString(36);
  }
  function k(e, t, n, a, o) {
    var s = typeof e;
    (s === `undefined` || s === `boolean`) && (e = null);
    var c = !1;
    if (e === null) c = !0; else switch (s) {
     case `string`:
     case `number`:
      c = !0;
      break;

     case `object`:
      switch (e.$$typeof) {
       case r:
       case i:
        c = !0;
      }
    }
    if (c) return c = e, o = o(c), e = a === `` ? `.` + O(c, 0) : a, Array.isArray(o) ? (n = ``, 
    e != null && (n = e.replace(D, `$&/`) + `/`), k(o, t, n, ``, function(e) {
      return e;
    })) : o != null && (T(o) && (o = w(o, n + (!o.key || c && c.key === o.key ? `` : (`` + o.key).replace(D, `$&/`) + `/`) + e)), 
    t.push(o)), 1;
    if (c = 0, a = a === `` ? `.` : a + `:`, Array.isArray(e)) for (var l = 0; l < e.length; l++) {
      s = e[l];
      var u = a + O(s, l);
      c += k(s, t, n, u, o);
    } else if (u = f(e), typeof u == `function`) for (e = u.call(e), l = 0; !(s = e.next()).done; ) s = s.value, 
    u = a + O(s, l++), c += k(s, t, n, u, o); else if (s === `object`) throw t = `` + e, 
    Error(p(31, t === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : t));
    return c;
  }
  function A(e, t, n) {
    if (e == null) return e;
    var r = [], i = 0;
    return k(e, r, ``, ``, function(e) {
      return t.call(n, e, i++);
    }), r;
  }
  function j(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), e._status = 0, e._result = t, t.then(function(t) {
        e._status === 0 && (t = t.default, e._status = 1, e._result = t);
      }, function(t) {
        e._status === 0 && (e._status = 2, e._result = t);
      });
    }
    if (e._status === 1) return e._result;
    throw e._result;
  }
  var M = {
    current: null
  };
  function N() {
    var e = M.current;
    if (e === null) throw Error(p(321));
    return e;
  }
  var P = {
    ReactCurrentDispatcher: M,
    ReactCurrentBatchConfig: {
      transition: 0
    },
    ReactCurrentOwner: b,
    IsSomeRendererActing: {
      current: !1
    },
    assign: n
  };
  e.Children = {
    map: A,
    forEach: function(e, t, n) {
      A(e, function() {
        t.apply(this, arguments);
      }, n);
    },
    count: function(e) {
      var t = 0;
      return A(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return A(e, function(e) {
        return e;
      }) || [];
    },
    only: function(e) {
      if (!T(e)) throw Error(p(143));
      return e;
    }
  }, e.Component = g, e.PureComponent = v, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, 
  e.cloneElement = function(e, t, i) {
    if (e == null) throw Error(p(267, e));
    var a = n({}, e.props), o = e.key, s = e.ref, c = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (s = t.ref, c = b.current), t.key !== void 0 && (o = `` + t.key), 
      e.type && e.type.defaultProps) var l = e.type.defaultProps;
      for (u in t) x.call(t, u) && !S.hasOwnProperty(u) && (a[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) a.children = i; else if (1 < u) {
      l = Array(u);
      for (var d = 0; d < u; d++) l[d] = arguments[d + 2];
      a.children = l;
    }
    return {
      $$typeof: r,
      type: e.type,
      key: o,
      ref: s,
      props: a,
      _owner: c
    };
  }, e.createContext = function(e, t) {
    return t === void 0 && (t = null), e = {
      $$typeof: o,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, e.Provider = {
      $$typeof: a,
      _context: e
    }, e.Consumer = e;
  }, e.createElement = C, e.createFactory = function(e) {
    var t = C.bind(null, e);
    return t.type = e, t;
  }, e.createRef = function() {
    return {
      current: null
    };
  }, e.forwardRef = function(e) {
    return {
      $$typeof: s,
      render: e
    };
  }, e.isValidElement = T, e.lazy = function(e) {
    return {
      $$typeof: l,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: j
    };
  }, e.memo = function(e, t) {
    return {
      $$typeof: c,
      type: e,
      compare: t === void 0 ? null : t
    };
  }, e.useCallback = function(e, t) {
    return N().useCallback(e, t);
  }, e.useContext = function(e, t) {
    return N().useContext(e, t);
  }, e.useDebugValue = function() {}, e.useEffect = function(e, t) {
    return N().useEffect(e, t);
  }, e.useImperativeHandle = function(e, t, n) {
    return N().useImperativeHandle(e, t, n);
  }, e.useLayoutEffect = function(e, t) {
    return N().useLayoutEffect(e, t);
  }, e.useMemo = function(e, t) {
    return N().useMemo(e, t);
  }, e.useReducer = function(e, t, n) {
    return N().useReducer(e, t, n);
  }, e.useRef = function(e) {
    return N().useRef(e);
  }, e.useState = function(e) {
    return N().useState(e);
  }, e.version = `17.0.2`;
}), r = e((e, t) => {
  t.exports = n();
}), i = e(e => {
  var t = typeof Symbol == `function` && Symbol.for, n = t ? Symbol.for(`react.element`) : 60103, r = t ? Symbol.for(`react.portal`) : 60106, i = t ? Symbol.for(`react.fragment`) : 60107, a = t ? Symbol.for(`react.strict_mode`) : 60108, o = t ? Symbol.for(`react.profiler`) : 60114, s = t ? Symbol.for(`react.provider`) : 60109, c = t ? Symbol.for(`react.context`) : 60110, l = t ? Symbol.for(`react.async_mode`) : 60111, u = t ? Symbol.for(`react.concurrent_mode`) : 60111, d = t ? Symbol.for(`react.forward_ref`) : 60112, f = t ? Symbol.for(`react.suspense`) : 60113, p = t ? Symbol.for(`react.suspense_list`) : 60120, m = t ? Symbol.for(`react.memo`) : 60115, h = t ? Symbol.for(`react.lazy`) : 60116, g = t ? Symbol.for(`react.block`) : 60121, _ = t ? Symbol.for(`react.fundamental`) : 60117, v = t ? Symbol.for(`react.responder`) : 60118, y = t ? Symbol.for(`react.scope`) : 60119;
  function b(e) {
    if (typeof e == `object` && e) {
      var t = e.$$typeof;
      switch (t) {
       case n:
        switch (e = e.type, e) {
         case l:
         case u:
         case i:
         case o:
         case a:
         case f:
          return e;

         default:
          switch (e &&= e.$$typeof, e) {
           case c:
           case d:
           case h:
           case m:
           case s:
            return e;

           default:
            return t;
          }
        }

       case r:
        return t;
      }
    }
  }
  function x(e) {
    return b(e) === u;
  }
  e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, 
  e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, 
  e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
    return x(e) || b(e) === l;
  }, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
    return b(e) === c;
  }, e.isContextProvider = function(e) {
    return b(e) === s;
  }, e.isElement = function(e) {
    return typeof e == `object` && !!e && e.$$typeof === n;
  }, e.isForwardRef = function(e) {
    return b(e) === d;
  }, e.isFragment = function(e) {
    return b(e) === i;
  }, e.isLazy = function(e) {
    return b(e) === h;
  }, e.isMemo = function(e) {
    return b(e) === m;
  }, e.isPortal = function(e) {
    return b(e) === r;
  }, e.isProfiler = function(e) {
    return b(e) === o;
  }, e.isStrictMode = function(e) {
    return b(e) === a;
  }, e.isSuspense = function(e) {
    return b(e) === f;
  }, e.isValidElementType = function(e) {
    return typeof e == `string` || typeof e == `function` || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == `object` && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
  }, e.typeOf = b;
}), a = e((e, t) => {
  t.exports = i();
}), o = e((e, t) => {
  var n = a(), r = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, i = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, o = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, c = {};
  c[n.ForwardRef] = o, c[n.Memo] = s;
  function l(e) {
    return n.isMemo(e) ? s : c[e.$$typeof] || r;
  }
  var u = Object.defineProperty, d = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, p = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, h = Object.prototype;
  function g(e, t, n) {
    if (typeof t != `string`) {
      if (h) {
        var r = m(t);
        r && r !== h && g(e, r, n);
      }
      var a = d(t);
      f && (a = a.concat(f(t)));
      for (var o = l(e), s = l(t), c = 0; c < a.length; ++c) {
        var _ = a[c];
        if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
          var v = p(t, _);
          try {
            u(e, _, v);
          } catch {}
        }
      }
    }
    return e;
  }
  t.exports = g;
}), s = e(e => {
  t();
  var n = r(), i = 60103;
  if (e.Fragment = 60107, typeof Symbol == `function` && Symbol.for) {
    var a = Symbol.for;
    i = a(`react.element`), e.Fragment = a(`react.fragment`);
  }
  var o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = Object.prototype.hasOwnProperty, c = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function l(e, t, n) {
    var r, a = {}, l = null, u = null;
    for (r in n !== void 0 && (l = `` + n), t.key !== void 0 && (l = `` + t.key), t.ref !== void 0 && (u = t.ref), 
    t) s.call(t, r) && !c.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
    return {
      $$typeof: i,
      type: e,
      key: l,
      ref: u,
      props: a,
      _owner: o.current
    };
  }
  e.jsx = l, e.jsxs = l;
}), c = e((e, t) => {
  t.exports = s();
});

export { t as a, r as i, o as n, a as r, c as t };
//# sourceMappingURL=jsx-runtime-DU6_sasz.js.map