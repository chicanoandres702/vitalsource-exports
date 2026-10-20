!function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) {
      throw new Error("jQuery requires a window with a document");
    }
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length, n = he.type(e);
    return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  function i(e, t, n) {
    if (he.isFunction(t)) {
      return he.grep(e, function(e, i) {
        return !!t.call(e, i, e) !== n;
      });
    }
    if (t.nodeType) {
      return he.grep(e, function(e) {
        return e === t !== n;
      });
    }
    if ("string" == typeof t) {
      if (Te.test(t)) {
        return he.filter(t, e, n);
      }
      t = he.filter(t, e);
    }
    return he.grep(e, function(e) {
      return he.inArray(e, t) > -1 !== n;
    });
  }
  function o(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  function r(e) {
    var t = {};
    return he.each(e.match(Re) || [], function(e, n) {
      t[n] = !0;
    }), t;
  }
  function a() {
    ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), 
    e.detachEvent("onload", s));
  }
  function s() {
    (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(), 
    he.ready());
  }
  function l(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var i = "data-" + t.replace(De, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(i))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Le.test(n) ? he.parseJSON(n) : n);
        } catch (e) {}
        he.data(e, t, n);
      } else {
        n = void 0;
      }
    }
    return n;
  }
  function c(e) {
    var t;
    for (t in e) {
      if (("data" !== t || !he.isEmptyObject(e[t])) && "toJSON" !== t) {
        return !1;
      }
    }
    return !0;
  }
  function u(e, t, n, i) {
    if (Be(e)) {
      var o, r, a = he.expando, s = e.nodeType, l = s ? he.cache : e, c = s ? e[a] : e[a] && a;
      if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) {
        return c || (c = s ? e[a] = ne.pop() || he.guid++ : a), l[c] || (l[c] = s ? {} : {
          toJSON: he.noop
        }), "object" != typeof t && "function" != typeof t || (i ? l[c] = he.extend(l[c], t) : l[c].data = he.extend(l[c].data, t)), 
        r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[he.camelCase(t)] = n), 
        "string" == typeof t ? null == (o = r[t]) && (o = r[he.camelCase(t)]) : o = r, o;
      }
    }
  }
  function d(e, t, n) {
    if (Be(e)) {
      var i, o, r = e.nodeType, a = r ? he.cache : e, s = r ? e[he.expando] : he.expando;
      if (a[s]) {
        if (t && (i = n ? a[s] : a[s].data)) {
          o = (t = he.isArray(t) ? t.concat(he.map(t, he.camelCase)) : t in i || (t = he.camelCase(t)) in i ? [ t ] : t.split(" ")).length;
          for (;o--; ) {
            delete i[t[o]];
          }
          if (n ? !c(i) : !he.isEmptyObject(i)) {
            return;
          }
        }
        (n || (delete a[s].data, c(a[s]))) && (r ? he.cleanData([ e ], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0);
      }
    }
  }
  function f(e, t, n, i) {
    var o, r = 1, a = 20, s = i ? function() {
      return i.cur();
    } : function() {
      return he.css(e, t, "");
    }, l = s(), c = n && n[3] || (he.cssNumber[t] ? "" : "px"), u = (he.cssNumber[t] || "px" !== c && +l) && Oe.exec(he.css(e, t));
    if (u && u[3] !== c) {
      c = c || u[3], n = n || [], u = +l || 1;
      do {
        u /= r = r || ".5", he.style(e, t, u + c);
      } while (r !== (r = s() / l) && 1 !== r && --a);
    }
    return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, 
    i.start = u, i.end = o)), o;
  }
  function h(e) {
    var t = ze.split("|"), n = e.createDocumentFragment();
    if (n.createElement) {
      for (;t.length; ) {
        n.createElement(t.pop());
      }
    }
    return n;
  }
  function p(e, t) {
    var n, i, o = 0, r = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
    if (!r) {
      for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) {
        !t || he.nodeName(i, t) ? r.push(i) : he.merge(r, p(i, t));
      }
    }
    return void 0 === t || t && he.nodeName(e, t) ? he.merge([ e ], r) : r;
  }
  function g(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++) {
      he._data(n, "globalEval", !t || he._data(t[i], "globalEval"));
    }
  }
  function m(e) {
    qe.test(e.type) && (e.defaultChecked = e.checked);
  }
  function v(e, t, n, i, o) {
    for (var r, a, s, l, c, u, d, f = e.length, v = h(t), y = [], w = 0; w < f; w++) {
      if ((a = e[w]) || 0 === a) {
        if ("object" === he.type(a)) {
          he.merge(y, a.nodeType ? [ a ] : a);
        } else if (Ge.test(a)) {
          for (l = l || v.appendChild(t.createElement("div")), c = (Ve.exec(a) || [ "", "" ])[1].toLowerCase(), 
          d = Xe[c] || Xe._default, l.innerHTML = d[1] + he.htmlPrefilter(a) + d[2], r = d[0]; r--; ) {
            l = l.lastChild;
          }
          if (!de.leadingWhitespace && $e.test(a) && y.push(t.createTextNode($e.exec(a)[0])), 
          !de.tbody) {
            for (r = (a = "table" !== c || Qe.test(a) ? "<table>" !== d[1] || Qe.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; r--; ) {
              he.nodeName(u = a.childNodes[r], "tbody") && !u.childNodes.length && a.removeChild(u);
            }
          }
          for (he.merge(y, l.childNodes), l.textContent = ""; l.firstChild; ) {
            l.removeChild(l.firstChild);
          }
          l = v.lastChild;
        } else {
          y.push(t.createTextNode(a));
        }
      }
    }
    for (l && v.removeChild(l), de.appendChecked || he.grep(p(y, "input"), m), w = 0; a = y[w++]; ) {
      if (i && he.inArray(a, i) > -1) {
        o && o.push(a);
      } else if (s = he.contains(a.ownerDocument, a), l = p(v.appendChild(a), "script"), 
      s && g(l), n) {
        for (r = 0; a = l[r++]; ) {
          We.test(a.type || "") && n.push(a);
        }
      }
    }
    return l = null, v;
  }
  function y() {
    return !0;
  }
  function w() {
    return !1;
  }
  function b() {
    try {
      return ie.activeElement;
    } catch (e) {}
  }
  function k(e, t, n, i, o, r) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (i = i || n, n = void 0), t) {
        k(e, s, n, i, t[s], r);
      }
      return e;
    }
    if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, 
    i = void 0) : (o = i, i = n, n = void 0)), !1 === o) {
      o = w;
    } else if (!o) {
      return e;
    }
    return 1 === r && (a = o, o = function(e) {
      return he().off(e), a.apply(this, arguments);
    }, o.guid = a.guid || (a.guid = he.guid++)), e.each(function() {
      he.event.add(this, t, o, i, n);
    });
  }
  function x(e, t) {
    return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }
  function T(e) {
    return e.type = (null !== he.find.attr(e, "type")) + "/" + e.type, e;
  }
  function C(e) {
    var t = st.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }
  function S(e, t) {
    if (1 === t.nodeType && he.hasData(e)) {
      var n, i, o, r = he._data(e), a = he._data(t, r), s = r.events;
      if (s) {
        for (n in delete a.handle, a.events = {}, s) {
          for (i = 0, o = s[n].length; i < o; i++) {
            he.event.add(t, n, s[n][i]);
          }
        }
      }
      a.data && (a.data = he.extend({}, a.data));
    }
  }
  function J(e, t) {
    var n, i, o;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[he.expando]) {
        for (i in (o = he._data(t)).events) {
          he.removeEvent(t, i, o.handle);
        }
        t.removeAttribute(he.expando);
      }
      "script" === n && t.text !== e.text ? (T(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
      de.html5Clone && e.innerHTML && !he.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
      t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
  }
  function E(e, t, n, i) {
    t = re.apply([], t);
    var o, r, a, s, l, c, u = 0, d = e.length, f = d - 1, h = t[0], g = he.isFunction(h);
    if (g || d > 1 && "string" == typeof h && !de.checkClone && at.test(h)) {
      return e.each(function(o) {
        var r = e.eq(o);
        g && (t[0] = h.call(this, o, r.html())), E(r, t, n, i);
      });
    }
    if (d && (o = (c = v(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === c.childNodes.length && (c = o), 
    o || i)) {
      for (a = (s = he.map(p(c, "script"), T)).length; u < d; u++) {
        r = c, u !== f && (r = he.clone(r, !0, !0), a && he.merge(s, p(r, "script"))), n.call(e[u], r, u);
      }
      if (a) {
        for (l = s[s.length - 1].ownerDocument, he.map(s, C), u = 0; u < a; u++) {
          r = s[u], We.test(r.type || "") && !he._data(r, "globalEval") && he.contains(l, r) && (r.src ? he._evalUrl && he._evalUrl(r.src) : he.globalEval((r.text || r.textContent || r.innerHTML || "").replace(lt, "")));
        }
      }
      c = o = null;
    }
    return e;
  }
  function M(e, t, n) {
    for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || he.cleanData(p(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && g(p(i, "script")), 
      i.parentNode.removeChild(i));
    }
    return e;
  }
  function A(e, t) {
    var n = he(t.createElement(e)).appendTo(t.body), i = he.css(n[0], "display");
    return n.detach(), i;
  }
  function R(e) {
    var t = ie, n = dt[e];
    return n || ("none" !== (n = A(e, t)) && n || ((t = ((ut = (ut || he("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ut[0].contentDocument).document).write(), 
    t.close(), n = A(e, t), ut.detach()), dt[e] = n), n;
  }
  function N(e, t) {
    return {
      get: function() {
        if (!e()) {
          return (this.get = t).apply(this, arguments);
        }
        delete this.get;
      }
    };
  }
  function B(e) {
    if (e in Jt) {
      return e;
    }
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--; ) {
      if ((e = St[n] + t) in Jt) {
        return e;
      }
    }
  }
  function L(e, t) {
    for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++) {
      (i = e[a]).style && (r[a] = he._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), 
      "" === i.style.display && Fe(i) && (r[a] = he._data(i, "olddisplay", R(i.nodeName)))) : (o = Fe(i), 
      (n && "none" !== n || !o) && he._data(i, "olddisplay", o ? n : he.css(i, "display"))));
    }
    for (a = 0; a < s; a++) {
      (i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
    }
    return e;
  }
  function D(e, t, n) {
    var i = xt.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
  }
  function P(e, t, n, i, o) {
    for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2) {
      "margin" === n && (a += he.css(e, n + Ue[r], !0, o)), i ? ("content" === n && (a -= he.css(e, "padding" + Ue[r], !0, o)), 
      "margin" !== n && (a -= he.css(e, "border" + Ue[r] + "Width", !0, o))) : (a += he.css(e, "padding" + Ue[r], !0, o), 
      "padding" !== n && (a += he.css(e, "border" + Ue[r] + "Width", !0, o)));
    }
    return a;
  }
  function H(e, t, n) {
    var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = mt(e), a = de.boxSizing && "border-box" === he.css(e, "boxSizing", !1, r);
    if (o <= 0 || null == o) {
      if (((o = vt(e, t, r)) < 0 || null == o) && (o = e.style[t]), ht.test(o)) {
        return o;
      }
      i = a && (de.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0;
    }
    return o + P(e, t, n || (a ? "border" : "content"), i, r) + "px";
  }
  function _(e, t, n, i, o) {
    return new _.prototype.init(e, t, n, i, o);
  }
  function j() {
    return e.setTimeout(function() {
      Et = void 0;
    }), Et = he.now();
  }
  function O(e, t) {
    var n, i = {
      height: e
    }, o = 0;
    for (t = t ? 1 : 0; o < 4; o += 2 - t) {
      i["margin" + (n = Ue[o])] = i["padding" + n] = e;
    }
    return t && (i.opacity = i.width = e), i;
  }
  function U(e, t, n) {
    for (var i, o = (q.tweeners[t] || []).concat(q.tweeners["*"]), r = 0, a = o.length; r < a; r++) {
      if (i = o[r].call(n, t, e)) {
        return i;
      }
    }
  }
  function F(e, t, n) {
    var i, o, r, a, s, l, c, u = this, d = {}, f = e.style, h = e.nodeType && Fe(e), p = he._data(e, "fxshow");
    for (i in n.queue || (null == (s = he._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, 
    l = s.empty.fire, s.empty.fire = function() {
      s.unqueued || l();
    }), s.unqueued++, u.always(function() {
      u.always(function() {
        s.unqueued--, he.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
    "inline" === ("none" === (c = he.css(e, "display")) ? he._data(e, "olddisplay") || R(e.nodeName) : c) && "none" === he.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== R(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), 
    n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || u.always(function() {
      f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
    })), t) {
      if (o = t[i], At.exec(o)) {
        if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
          if ("show" !== o || !p || void 0 === p[i]) {
            continue;
          }
          h = !0;
        }
        d[i] = p && p[i] || he.style(e, i);
      } else {
        c = void 0;
      }
    }
    if (he.isEmptyObject(d)) {
      "inline" === ("none" === c ? R(e.nodeName) : c) && (f.display = c);
    } else {
      for (i in p ? "hidden" in p && (h = p.hidden) : p = he._data(e, "fxshow", {}), r && (p.hidden = !h), 
      h ? he(e).show() : u.done(function() {
        he(e).hide();
      }), u.done(function() {
        var t;
        for (t in he._removeData(e, "fxshow"), d) {
          he.style(e, t, d[t]);
        }
      }), d) {
        a = U(h ? p[i] : 0, i, u), i in p || (p[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0));
      }
    }
  }
  function I(e, t) {
    var n, i, o, r, a;
    for (n in e) {
      if (o = t[i = he.camelCase(n)], r = e[n], he.isArray(r) && (o = r[1], r = e[n] = r[0]), 
      n !== i && (e[i] = r, delete e[n]), (a = he.cssHooks[i]) && "expand" in a) {
        for (n in r = a.expand(r), delete e[i], r) {
          n in e || (e[n] = r[n], t[n] = o);
        }
      } else {
        t[i] = o;
      }
    }
  }
  function q(e, t, n) {
    var i, o, r = 0, a = q.prefilters.length, s = he.Deferred().always(function() {
      delete l.elem;
    }), l = function() {
      if (o) {
        return !1;
      }
      for (var t = Et || j(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) {
        c.tweens[r].run(i);
      }
      return s.notifyWith(e, [ c, i, n ]), i < 1 && a ? n : (s.resolveWith(e, [ c ]), 
      !1);
    }, c = s.promise({
      elem: e,
      props: he.extend({}, t),
      opts: he.extend(!0, {
        specialEasing: {},
        easing: he.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Et || j(),
      duration: n.duration,
      tweens: [],
      createTween: function(t, n) {
        var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(i), i;
      },
      stop: function(t) {
        var n = 0, i = t ? c.tweens.length : 0;
        if (o) {
          return this;
        }
        for (o = !0; n < i; n++) {
          c.tweens[n].run(1);
        }
        return t ? (s.notifyWith(e, [ c, 1, 0 ]), s.resolveWith(e, [ c, t ])) : s.rejectWith(e, [ c, t ]), 
        this;
      }
    }), u = c.props;
    for (I(u, c.opts.specialEasing); r < a; r++) {
      if (i = q.prefilters[r].call(c, e, u, c.opts)) {
        return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), 
        i;
      }
    }
    return he.map(u, U, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), 
    he.fx.timer(he.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
  }
  function V(e) {
    return he.attr(e, "class") || "";
  }
  function W(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, o = 0, r = t.toLowerCase().match(Re) || [];
      if (he.isFunction(n)) {
        for (;i = r[o++]; ) {
          "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        }
      }
    };
  }
  function $(e, t, n, i) {
    function o(s) {
      var l;
      return r[s] = !0, he.each(e[s] || [], function(e, s) {
        var c = s(t, n, i);
        return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), 
        o(c), !1);
      }), l;
    }
    var r = {}, a = e === en;
    return o(t.dataTypes[0]) || !r["*"] && o("*");
  }
  function z(e, t) {
    var n, i, o = he.ajaxSettings.flatOptions || {};
    for (i in t) {
      void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
    }
    return n && he.extend(!0, e, n), e;
  }
  function X(e, t, n) {
    for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) {
      l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
    }
    if (o) {
      for (a in s) {
        if (s[a] && s[a].test(o)) {
          l.unshift(a);
          break;
        }
      }
    }
    if (l[0] in n) {
      r = l[0];
    } else {
      for (a in n) {
        if (!l[0] || e.converters[a + " " + l[0]]) {
          r = a;
          break;
        }
        i || (i = a);
      }
      r = r || i;
    }
    if (r) {
      return r !== l[0] && l.unshift(r), n[r];
    }
  }
  function G(e, t, n, i) {
    var o, r, a, s, l, c = {}, u = e.dataTypes.slice();
    if (u[1]) {
      for (a in e.converters) {
        c[a.toLowerCase()] = e.converters[a];
      }
    }
    for (r = u.shift(); r; ) {
      if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
      l = r, r = u.shift()) {
        if ("*" === r) {
          r = l;
        } else if ("*" !== l && l !== r) {
          if (!(a = c[l + " " + r] || c["* " + r])) {
            for (o in c) {
              if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                break;
              }
            }
          }
          if (!0 !== a) {
            if (a && e.throws) {
              t = a(t);
            } else {
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + l + " to " + r
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: t
    };
  }
  function Q(e) {
    return e.style && e.style.display || he.css(e, "display");
  }
  function Y(e) {
    if (!he.contains(e.ownerDocument || ie, e)) {
      return !0;
    }
    for (;e && 1 === e.nodeType; ) {
      if ("none" === Q(e) || "hidden" === e.type) {
        return !0;
      }
      e = e.parentNode;
    }
    return !1;
  }
  function K(e, t, n, i) {
    var o;
    if (he.isArray(t)) {
      he.each(t, function(t, o) {
        n || an.test(e) ? i(e, o) : K(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
      });
    } else if (n || "object" !== he.type(t)) {
      i(e, t);
    } else {
      for (o in t) {
        K(e + "[" + o + "]", t[o], n, i);
      }
    }
  }
  function Z() {
    try {
      return new e.XMLHttpRequest;
    } catch (e) {}
  }
  function ee() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function te(e) {
    return he.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var ne = [], ie = e.document, oe = ne.slice, re = ne.concat, ae = ne.push, se = ne.indexOf, le = {}, ce = le.toString, ue = le.hasOwnProperty, de = {}, fe = "1.12.4", he = function(e, t) {
    return new he.fn.init(e, t);
  }, pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, me = /-([\da-z])/gi, ve = function(e, t) {
    return t.toUpperCase();
  };
  he.fn = he.prototype = {
    jquery: fe,
    constructor: he,
    selector: "",
    length: 0,
    toArray: function() {
      return oe.call(this);
    },
    get: function(e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : oe.call(this);
    },
    pushStack: function(e) {
      var t = he.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function(e) {
      return he.each(this, e);
    },
    map: function(e) {
      return this.pushStack(he.map(this, function(t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function() {
      return this.pushStack(oe.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: ae,
    sort: ne.sort,
    splice: ne.splice
  }, he.extend = he.fn.extend = function() {
    var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
    for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), 
    s === l && (a = this, s--); s < l; s++) {
      if (null != (o = arguments[s])) {
        for (i in o) {
          e = a[i], a !== (n = o[i]) && (c && n && (he.isPlainObject(n) || (t = he.isArray(n))) ? (t ? (t = !1, 
          r = e && he.isArray(e) ? e : []) : r = e && he.isPlainObject(e) ? e : {}, a[i] = he.extend(c, r, n)) : void 0 !== n && (a[i] = n));
        }
      }
    }
    return a;
  }, he.extend({
    expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e);
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === he.type(e);
    },
    isArray: Array.isArray || function(e) {
      return "array" === he.type(e);
    },
    isWindow: function(e) {
      return null != e && e == e.window;
    },
    isNumeric: function(e) {
      var t = e && e.toString();
      return !he.isArray(e) && t - parseFloat(t) + 1 >= 0;
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) {
        return !1;
      }
      return !0;
    },
    isPlainObject: function(e) {
      var t;
      if (!e || "object" !== he.type(e) || e.nodeType || he.isWindow(e)) {
        return !1;
      }
      try {
        if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) {
          return !1;
        }
      } catch (e) {
        return !1;
      }
      if (!de.ownFirst) {
        for (t in e) {
          return ue.call(e, t);
        }
      }
      for (t in e) {}
      return void 0 === t || ue.call(e, t);
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e;
    },
    globalEval: function(t) {
      t && he.trim(t) && (e.execScript || function(t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function(e) {
      return e.replace(ge, "ms-").replace(me, ve);
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function(e, t) {
      var i, o = 0;
      if (n(e)) {
        for (i = e.length; o < i && !1 !== t.call(e[o], o, e[o]); o++) {}
      } else {
        for (o in e) {
          if (!1 === t.call(e[o], o, e[o])) {
            break;
          }
        }
      }
      return e;
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(pe, "");
    },
    makeArray: function(e, t) {
      var i = t || [];
      return null != e && (n(Object(e)) ? he.merge(i, "string" == typeof e ? [ e ] : e) : ae.call(i, e)), 
      i;
    },
    inArray: function(e, t, n) {
      var i;
      if (t) {
        if (se) {
          return se.call(t, e, n);
        }
        for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++) {
          if (n in t && t[n] === e) {
            return n;
          }
        }
      }
      return -1;
    },
    merge: function(e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; ) {
        e[o++] = t[i++];
      }
      if (n != n) {
        for (;void 0 !== t[i]; ) {
          e[o++] = t[i++];
        }
      }
      return e.length = o, e;
    },
    grep: function(e, t, n) {
      for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) {
        !t(e[o], o) !== a && i.push(e[o]);
      }
      return i;
    },
    map: function(e, t, i) {
      var o, r, a = 0, s = [];
      if (n(e)) {
        for (o = e.length; a < o; a++) {
          null != (r = t(e[a], a, i)) && s.push(r);
        }
      } else {
        for (a in e) {
          null != (r = t(e[a], a, i)) && s.push(r);
        }
      }
      return re.apply([], s);
    },
    guid: 1,
    proxy: function(e, t) {
      var n, i, o;
      if ("string" == typeof t && (o = e[t], t = e, e = o), he.isFunction(e)) {
        return n = oe.call(arguments, 2), i = function() {
          return e.apply(t || this, n.concat(oe.call(arguments)));
        }, i.guid = e.guid = e.guid || he.guid++, i;
      }
    },
    now: function() {
      return +new Date;
    },
    support: de
  }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ne[Symbol.iterator]), 
  he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    le["[object " + t + "]"] = t.toLowerCase();
  });
  var ye = function(e) {
    function t(e, t, n, i) {
      var o, r, a, s, l, c, d, h, p = t && t.ownerDocument, g = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) {
        return n;
      }
      if (!i && ((t ? t.ownerDocument || t : U) !== B && N(t), t = t || B, D)) {
        if (11 !== g && (c = ve.exec(e))) {
          if (o = c[1]) {
            if (9 === g) {
              if (!(a = t.getElementById(o))) {
                return n;
              }
              if (a.id === o) {
                return n.push(a), n;
              }
            } else if (p && (a = p.getElementById(o)) && j(t, a) && a.id === o) {
              return n.push(a), n;
            }
          } else {
            if (c[2]) {
              return K.apply(n, t.getElementsByTagName(e)), n;
            }
            if ((o = c[3]) && k.getElementsByClassName && t.getElementsByClassName) {
              return K.apply(n, t.getElementsByClassName(o)), n;
            }
          }
        }
        if (k.qsa && !W[e + " "] && (!P || !P.test(e))) {
          if (1 !== g) {
            p = t, h = e;
          } else if ("object" !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute("id")) ? s = s.replace(we, "\\$&") : t.setAttribute("id", s = O), 
            r = (d = S(e)).length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; r--; ) {
              d[r] = l + " " + f(d[r]);
            }
            h = d.join(","), p = ye.test(e) && u(t.parentNode) || t;
          }
          if (h) {
            try {
              return K.apply(n, p.querySelectorAll(h)), n;
            } catch (e) {} finally {
              s === O && t.removeAttribute("id");
            }
          }
        }
      }
      return E(e.replace(se, "$1"), t, n, i);
    }
    function n() {
      function e(n, i) {
        return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i;
      }
      var t = [];
      return e;
    }
    function i(e) {
      return e[O] = !0, e;
    }
    function o(e) {
      var t = B.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function r(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) {
        x.attrHandle[n[i]] = t;
      }
    }
    function a(e, t) {
      var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || z) - (~e.sourceIndex || z);
      if (i) {
        return i;
      }
      if (n) {
        for (;n = n.nextSibling; ) {
          if (n === t) {
            return -1;
          }
        }
      }
      return e ? 1 : -1;
    }
    function s(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function l(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function c(e) {
      return i(function(t) {
        return t = +t, i(function(n, i) {
          for (var o, r = e([], n.length, t), a = r.length; a--; ) {
            n[o = r[a]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }
    function u(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function d() {}
    function f(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }
      return i;
    }
    function h(e, t, n) {
      var i = t.dir, o = n && "parentNode" === i, r = I++;
      return t.first ? function(t, n, r) {
        for (;t = t[i]; ) {
          if (1 === t.nodeType || o) {
            return e(t, n, r);
          }
        }
      } : function(t, n, a) {
        var s, l, c, u = [ F, r ];
        if (a) {
          for (;t = t[i]; ) {
            if ((1 === t.nodeType || o) && e(t, n, a)) {
              return !0;
            }
          }
        } else {
          for (;t = t[i]; ) {
            if (1 === t.nodeType || o) {
              if ((s = (l = (c = t[O] || (t[O] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && s[0] === F && s[1] === r) {
                return u[2] = s[2];
              }
              if (l[i] = u, u[2] = e(t, n, a)) {
                return !0;
              }
            }
          }
        }
      };
    }
    function p(e) {
      return e.length > 1 ? function(t, n, i) {
        for (var o = e.length; o--; ) {
          if (!e[o](t, n, i)) {
            return !1;
          }
        }
        return !0;
      } : e[0];
    }
    function g(e, n, i) {
      for (var o = 0, r = n.length; o < r; o++) {
        t(e, n[o], i);
      }
      return i;
    }
    function m(e, t, n, i, o) {
      for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++) {
        (r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
      }
      return a;
    }
    function v(e, t, n, o, r, a) {
      return o && !o[O] && (o = v(o)), r && !r[O] && (r = v(r, a)), i(function(i, a, s, l) {
        var c, u, d, f = [], h = [], p = a.length, v = i || g(t || "*", s.nodeType ? [ s ] : s, []), y = !e || !i && t ? v : m(v, f, e, s, l), w = n ? r || (i ? e : p || o) ? [] : a : y;
        if (n && n(y, w, s, l), o) {
          for (c = m(w, h), o(c, [], s, l), u = c.length; u--; ) {
            (d = c[u]) && (w[h[u]] = !(y[h[u]] = d));
          }
        }
        if (i) {
          if (r || e) {
            if (r) {
              for (c = [], u = w.length; u--; ) {
                (d = w[u]) && c.push(y[u] = d);
              }
              r(null, w = [], c, l);
            }
            for (u = w.length; u--; ) {
              (d = w[u]) && (c = r ? ee(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d));
            }
          }
        } else {
          w = m(w === a ? w.splice(p, w.length) : w), r ? r(null, a, w, l) : K.apply(a, w);
        }
      });
    }
    function y(e) {
      for (var t, n, i, o = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = h(function(e) {
        return e === t;
      }, a, !0), c = h(function(e) {
        return ee(t, e) > -1;
      }, a, !0), u = [ function(e, n, i) {
        var o = !r && (i || n !== M) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
        return t = null, o;
      } ]; s < o; s++) {
        if (n = x.relative[e[s].type]) {
          u = [ h(p(u), n) ];
        } else {
          if ((n = x.filter[e[s].type].apply(null, e[s].matches))[O]) {
            for (i = ++s; i < o && !x.relative[e[i].type]; i++) {}
            return v(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(se, "$1"), n, s < i && y(e.slice(s, i)), i < o && y(e = e.slice(i)), i < o && f(e));
          }
          u.push(n);
        }
      }
      return p(u);
    }
    function w(e, n) {
      var o = n.length > 0, r = e.length > 0, a = function(i, a, s, l, c) {
        var u, d, f, h = 0, p = "0", g = i && [], v = [], y = M, w = i || r && x.find.TAG("*", c), b = F += null == y ? 1 : Math.random() || .1, k = w.length;
        for (c && (M = a === B || a || c); p !== k && null != (u = w[p]); p++) {
          if (r && u) {
            for (d = 0, a || u.ownerDocument === B || (N(u), s = !D); f = e[d++]; ) {
              if (f(u, a || B, s)) {
                l.push(u);
                break;
              }
            }
            c && (F = b);
          }
          o && ((u = !f && u) && h--, i && g.push(u));
        }
        if (h += p, o && p !== h) {
          for (d = 0; f = n[d++]; ) {
            f(g, v, a, s);
          }
          if (i) {
            if (h > 0) {
              for (;p--; ) {
                g[p] || v[p] || (v[p] = Q.call(l));
              }
            }
            v = m(v);
          }
          K.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l);
        }
        return c && (F = b, M = y), g;
      };
      return o ? i(a) : a;
    }
    var b, k, x, T, C, S, J, E, M, A, R, N, B, L, D, P, H, _, j, O = "sizzle" + 1 * new Date, U = e.document, F = 0, I = 0, q = n(), V = n(), W = n(), $ = function(e, t) {
      return e === t && (R = !0), 0;
    }, z = 1 << 31, X = {}.hasOwnProperty, G = [], Q = G.pop, Y = G.push, K = G.push, Z = G.slice, ee = function(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) {
          return n;
        }
      }
      return -1;
    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(re), fe = new RegExp("^" + ie + "$"), he = {
      ID: new RegExp("^#(" + ie + ")"),
      CLASS: new RegExp("^\\.(" + ie + ")"),
      TAG: new RegExp("^(" + ie + "|[*])"),
      ATTR: new RegExp("^" + oe),
      PSEUDO: new RegExp("^" + re),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + te + ")$", "i"),
      needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
    }, pe = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, we = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), ke = function(e, t, n) {
      var i = "0x" + t - 65536;
      return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    }, xe = function() {
      N();
    };
    try {
      K.apply(G = Z.call(U.childNodes), U.childNodes), G[U.childNodes.length].nodeType;
    } catch (e) {
      K = {
        apply: G.length ? function(e, t) {
          Y.apply(e, Z.call(t));
        } : function(e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++]; ) {}
          e.length = n - 1;
        }
      };
    }
    for (b in k = t.support = {}, C = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, N = t.setDocument = function(e) {
      var t, n, i = e ? e.ownerDocument || e : U;
      return i !== B && 9 === i.nodeType && i.documentElement ? (L = (B = i).documentElement, 
      D = !C(B), (n = B.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), 
      k.attributes = o(function(e) {
        return e.className = "i", !e.getAttribute("className");
      }), k.getElementsByTagName = o(function(e) {
        return e.appendChild(B.createComment("")), !e.getElementsByTagName("*").length;
      }), k.getElementsByClassName = me.test(B.getElementsByClassName), k.getById = o(function(e) {
        return L.appendChild(e).id = O, !B.getElementsByName || !B.getElementsByName(O).length;
      }), k.getById ? (x.find.ID = function(e, t) {
        if (void 0 !== t.getElementById && D) {
          var n = t.getElementById(e);
          return n ? [ n ] : [];
        }
      }, x.filter.ID = function(e) {
        var t = e.replace(be, ke);
        return function(e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete x.find.ID, x.filter.ID = function(e) {
        var t = e.replace(be, ke);
        return function(e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), x.find.TAG = k.getElementsByTagName ? function(e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0;
      } : function(e, t) {
        var n, i = [], o = 0, r = t.getElementsByTagName(e);
        if ("*" === e) {
          for (;n = r[o++]; ) {
            1 === n.nodeType && i.push(n);
          }
          return i;
        }
        return r;
      }, x.find.CLASS = k.getElementsByClassName && function(e, t) {
        if (void 0 !== t.getElementsByClassName && D) {
          return t.getElementsByClassName(e);
        }
      }, H = [], P = [], (k.qsa = me.test(B.querySelectorAll)) && (o(function(e) {
        L.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
        e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), 
        e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), 
        e.querySelectorAll("[id~=" + O + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), 
        e.querySelectorAll("a#" + O + "+*").length || P.push(".#.+[+~]");
      }), o(function(e) {
        var t = B.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), 
        e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
        P.push(",.*:");
      })), (k.matchesSelector = me.test(_ = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(e) {
        k.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), H.push("!=", re);
      }), P = P.length && new RegExp(P.join("|")), H = H.length && new RegExp(H.join("|")), 
      t = me.test(L.compareDocumentPosition), j = t || me.test(L.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function(e, t) {
        if (t) {
          for (;t = t.parentNode; ) {
            if (t === e) {
              return !0;
            }
          }
        }
        return !1;
      }, $ = t ? function(e, t) {
        if (e === t) {
          return R = !0, 0;
        }
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !k.sortDetached && t.compareDocumentPosition(e) === n ? e === B || e.ownerDocument === U && j(U, e) ? -1 : t === B || t.ownerDocument === U && j(U, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1);
      } : function(e, t) {
        if (e === t) {
          return R = !0, 0;
        }
        var n, i = 0, o = e.parentNode, r = t.parentNode, s = [ e ], l = [ t ];
        if (!o || !r) {
          return e === B ? -1 : t === B ? 1 : o ? -1 : r ? 1 : A ? ee(A, e) - ee(A, t) : 0;
        }
        if (o === r) {
          return a(e, t);
        }
        for (n = e; n = n.parentNode; ) {
          s.unshift(n);
        }
        for (n = t; n = n.parentNode; ) {
          l.unshift(n);
        }
        for (;s[i] === l[i]; ) {
          i++;
        }
        return i ? a(s[i], l[i]) : s[i] === U ? -1 : l[i] === U ? 1 : 0;
      }, B) : B;
    }, t.matches = function(e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== B && N(e), n = n.replace(ue, "='$1']"), k.matchesSelector && D && !W[n + " "] && (!H || !H.test(n)) && (!P || !P.test(n))) {
        try {
          var i = _.call(e, n);
          if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
            return i;
          }
        } catch (e) {}
      }
      return t(n, B, null, [ e ]).length > 0;
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== B && N(e), j(e, t);
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== B && N(e);
      var n = x.attrHandle[t.toLowerCase()], i = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
      return void 0 !== i ? i : k.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function(e) {
      var t, n = [], i = 0, o = 0;
      if (R = !k.detectDuplicates, A = !k.sortStable && e.slice(0), e.sort($), R) {
        for (;t = e[o++]; ) {
          t === e[o] && (i = n.push(o));
        }
        for (;i--; ) {
          e.splice(n[i], 1);
        }
      }
      return A = null, e;
    }, T = t.getText = function(e) {
      var t, n = "", i = 0, o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) {
            return e.textContent;
          }
          for (e = e.firstChild; e; e = e.nextSibling) {
            n += T(e);
          }
        } else if (3 === o || 4 === o) {
          return e.nodeValue;
        }
      } else {
        for (;t = e[i++]; ) {
          n += T(t);
        }
      }
      return n;
    }, x = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: he,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(be, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(be, ke), 
          "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
          e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), 
          e;
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
          e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(be, ke).toLowerCase();
          return "*" === e ? function() {
            return !0;
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function(e) {
          var t = q[e + " "];
          return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && q(e, function(e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function(e, n, i) {
          return function(o) {
            var r = t.attr(o, e);
            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function(e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
          return 1 === i && 0 === o ? function(e) {
            return !!e.parentNode;
          } : function(t, n, l) {
            var c, u, d, f, h, p, g = r !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, w = !1;
            if (m) {
              if (r) {
                for (;g; ) {
                  for (f = t; f = f[g]; ) {
                    if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) {
                      return !1;
                    }
                  }
                  p = g = "only" === e && !p && "nextSibling";
                }
                return !0;
              }
              if (p = [ a ? m.firstChild : m.lastChild ], a && y) {
                for (w = (h = (c = (u = (d = (f = m)[O] || (f[O] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === F && c[1]) && c[2], 
                f = h && m.childNodes[h]; f = ++h && f && f[g] || (w = h = 0) || p.pop(); ) {
                  if (1 === f.nodeType && ++w && f === t) {
                    u[e] = [ F, h, w ];
                    break;
                  }
                }
              } else if (y && (w = h = (c = (u = (d = (f = t)[O] || (f[O] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === F && c[1]), 
              !1 === w) {
                for (;(f = ++h && f && f[g] || (w = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++w || (y && ((u = (d = f[O] || (f[O] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [ F, w ]), 
                f !== t)); ) {}
              }
              return (w -= o) === i || w % i == 0 && w / i >= 0;
            }
          };
        },
        PSEUDO: function(e, n) {
          var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return r[O] ? r(n) : r.length > 1 ? (o = [ e, e, "", n ], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
            for (var i, o = r(e, n), a = o.length; a--; ) {
              e[i = ee(e, o[a])] = !(t[i] = o[a]);
            }
          }) : function(e) {
            return r(e, 0, o);
          }) : r;
        }
      },
      pseudos: {
        not: i(function(e) {
          var t = [], n = [], o = J(e.replace(se, "$1"));
          return o[O] ? i(function(e, t, n, i) {
            for (var r, a = o(e, null, i, []), s = e.length; s--; ) {
              (r = a[s]) && (e[s] = !(t[s] = r));
            }
          }) : function(e, i, r) {
            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop();
          };
        }),
        has: i(function(e) {
          return function(n) {
            return t(e, n).length > 0;
          };
        }),
        contains: i(function(e) {
          return e = e.replace(be, ke), function(t) {
            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
          };
        }),
        lang: i(function(e) {
          return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, ke).toLowerCase(), 
          function(t) {
            var n;
            do {
              if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              }
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function(e) {
          return e === L;
        },
        focus: function(e) {
          return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function(e) {
          return !1 === e.disabled;
        },
        disabled: function(e) {
          return !0 === e.disabled;
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) {
              return !1;
            }
          }
          return !0;
        },
        parent: function(e) {
          return !x.pseudos.empty(e);
        },
        header: function(e) {
          return ge.test(e.nodeName);
        },
        input: function(e) {
          return pe.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: c(function() {
          return [ 0 ];
        }),
        last: c(function(e, t) {
          return [ t - 1 ];
        }),
        eq: c(function(e, t, n) {
          return [ n < 0 ? n + t : n ];
        }),
        even: c(function(e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }
          return e;
        }),
        odd: c(function(e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }
          return e;
        }),
        lt: c(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0; ) {
            e.push(i);
          }
          return e;
        }),
        gt: c(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) {
            e.push(i);
          }
          return e;
        })
      }
    }, x.pseudos.nth = x.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      x.pseudos[b] = s(b);
    }
    for (b in {
      submit: !0,
      reset: !0
    }) {
      x.pseudos[b] = l(b);
    }
    return d.prototype = x.filters = x.pseudos, x.setFilters = new d, S = t.tokenize = function(e, n) {
      var i, o, r, a, s, l, c, u = V[e + " "];
      if (u) {
        return n ? 0 : u.slice(0);
      }
      for (s = e, l = [], c = x.preFilter; s; ) {
        for (a in i && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), 
        i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
          value: i,
          type: o[0].replace(se, " ")
        }), s = s.slice(i.length)), x.filter) {
          !(o = he[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
            value: i,
            type: a,
            matches: o
          }), s = s.slice(i.length));
        }
        if (!i) {
          break;
        }
      }
      return n ? s.length : s ? t.error(e) : V(e, l).slice(0);
    }, J = t.compile = function(e, t) {
      var n, i = [], o = [], r = W[e + " "];
      if (!r) {
        for (t || (t = S(e)), n = t.length; n--; ) {
          (r = y(t[n]))[O] ? i.push(r) : o.push(r);
        }
        (r = W(e, w(o, i))).selector = e;
      }
      return r;
    }, E = t.select = function(e, t, n, i) {
      var o, r, a, s, l, c = "function" == typeof e && e, d = !i && S(e = c.selector || e);
      if (n = n || [], 1 === d.length) {
        if ((r = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = r[0]).type && k.getById && 9 === t.nodeType && D && x.relative[r[1].type]) {
          if (!(t = (x.find.ID(a.matches[0].replace(be, ke), t) || [])[0])) {
            return n;
          }
          c && (t = t.parentNode), e = e.slice(r.shift().value.length);
        }
        for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]); ) {
          if ((l = x.find[s]) && (i = l(a.matches[0].replace(be, ke), ye.test(r[0].type) && u(t.parentNode) || t))) {
            if (r.splice(o, 1), !(e = i.length && f(r))) {
              return K.apply(n, i), n;
            }
            break;
          }
        }
      }
      return (c || J(e, d))(i, t, !D, n, !t || ye.test(e) && u(t.parentNode) || t), n;
    }, k.sortStable = O.split("").sort($).join("") === O, k.detectDuplicates = !!R, 
    N(), k.sortDetached = o(function(e) {
      return 1 & e.compareDocumentPosition(B.createElement("div"));
    }), o(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || r("type|href|height|width", function(e, t, n) {
      if (!n) {
        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }
    }), k.attributes && o(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || r("value", function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) {
        return e.defaultValue;
      }
    }), o(function(e) {
      return null == e.getAttribute("disabled");
    }) || r(te, function(e, t, n) {
      var i;
      if (!n) {
        return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
      }
    }), t;
  }(e);
  he.find = ye, he.expr = ye.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ye.uniqueSort, 
  he.text = ye.getText, he.isXMLDoc = ye.isXML, he.contains = ye.contains;
  var we = function(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) {
      if (1 === e.nodeType) {
        if (o && he(e).is(n)) {
          break;
        }
        i.push(e);
      }
    }
    return i;
  }, be = function(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }
    return n;
  }, ke = he.expr.match.needsContext, xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Te = /^.[^:#\[\.,]*$/;
  he.filter = function(e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [ i ] : [] : he.find.matches(e, he.grep(t, function(e) {
      return 1 === e.nodeType;
    }));
  }, he.fn.extend({
    find: function(e) {
      var t, n = [], i = this, o = i.length;
      if ("string" != typeof e) {
        return this.pushStack(he(e).filter(function() {
          for (t = 0; t < o; t++) {
            if (he.contains(i[t], this)) {
              return !0;
            }
          }
        }));
      }
      for (t = 0; t < o; t++) {
        he.find(e, i[t], n);
      }
      return (n = this.pushStack(o > 1 ? he.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, 
      n;
    },
    filter: function(e) {
      return this.pushStack(i(this, e || [], !1));
    },
    not: function(e) {
      return this.pushStack(i(this, e || [], !0));
    },
    is: function(e) {
      return !!i(this, "string" == typeof e && ke.test(e) ? he(e) : e || [], !1).length;
    }
  });
  var Ce, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (he.fn.init = function(e, t, n) {
    var i, o;
    if (!e) {
      return this;
    }
    if (n = n || Ce, "string" == typeof e) {
      if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : Se.exec(e)) || !i[1] && t) {
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      }
      if (i[1]) {
        if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), 
        xe.test(i[1]) && he.isPlainObject(t)) {
          for (i in t) {
            he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          }
        }
        return this;
      }
      if ((o = ie.getElementById(i[2])) && o.parentNode) {
        if (o.id !== i[2]) {
          return Ce.find(e);
        }
        this.length = 1, this[0] = o;
      }
      return this.context = ie, this.selector = e, this;
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : (void 0 !== e.selector && (this.selector = e.selector, 
    this.context = e.context), he.makeArray(e, this));
  }).prototype = he.fn, Ce = he(ie);
  var Je = /^(?:parents|prev(?:Until|All))/, Ee = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  he.fn.extend({
    has: function(e) {
      var t, n = he(e, this), i = n.length;
      return this.filter(function() {
        for (t = 0; t < i; t++) {
          if (he.contains(this, n[t])) {
            return !0;
          }
        }
      });
    },
    closest: function(e, t) {
      for (var n, i = 0, o = this.length, r = [], a = ke.test(e) || "string" != typeof e ? he(e, t || this.context) : 0; i < o; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
            r.push(n);
            break;
          }
        }
      }
      return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r);
    },
    index: function(e) {
      return e ? "string" == typeof e ? he.inArray(this[0], he(e)) : he.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function(e, t) {
      return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), he.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function(e) {
      return we(e, "parentNode");
    },
    parentsUntil: function(e, t, n) {
      return we(e, "parentNode", n);
    },
    next: function(e) {
      return o(e, "nextSibling");
    },
    prev: function(e) {
      return o(e, "previousSibling");
    },
    nextAll: function(e) {
      return we(e, "nextSibling");
    },
    prevAll: function(e) {
      return we(e, "previousSibling");
    },
    nextUntil: function(e, t, n) {
      return we(e, "nextSibling", n);
    },
    prevUntil: function(e, t, n) {
      return we(e, "previousSibling", n);
    },
    siblings: function(e) {
      return be((e.parentNode || {}).firstChild, e);
    },
    children: function(e) {
      return be(e.firstChild);
    },
    contents: function(e) {
      return he.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : he.merge([], e.childNodes);
    }
  }, function(e, t) {
    he.fn[e] = function(n, i) {
      var o = he.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), 
      this.length > 1 && (Ee[e] || (o = he.uniqueSort(o)), Je.test(e) && (o = o.reverse())), 
      this.pushStack(o);
    };
  });
  var Me, Ae, Re = /\S+/g;
  for (Ae in he.Callbacks = function(e) {
    e = "string" == typeof e ? r(e) : he.extend({}, e);
    var t, n, i, o, a = [], s = [], l = -1, c = function() {
      for (o = e.once, i = t = !0; s.length; l = -1) {
        for (n = s.shift(); ++l < a.length; ) {
          !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
        }
      }
      e.memory || (n = !1), t = !1, o && (a = n ? [] : "");
    }, u = {
      add: function() {
        return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
          he.each(n, function(n, i) {
            he.isFunction(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== he.type(i) && t(i);
          });
        }(arguments), n && !t && c()), this;
      },
      remove: function() {
        return he.each(arguments, function(e, t) {
          for (var n; (n = he.inArray(t, a, n)) > -1; ) {
            a.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function(e) {
        return e ? he.inArray(e, a) > -1 : a.length > 0;
      },
      empty: function() {
        return a && (a = []), this;
      },
      disable: function() {
        return o = s = [], a = n = "", this;
      },
      disabled: function() {
        return !a;
      },
      lock: function() {
        return o = !0, n || u.disable(), this;
      },
      locked: function() {
        return !!o;
      },
      fireWith: function(e, n) {
        return o || (n = [ e, (n = n || []).slice ? n.slice() : n ], s.push(n), t || c()), 
        this;
      },
      fire: function() {
        return u.fireWith(this, arguments), this;
      },
      fired: function() {
        return !!i;
      }
    };
    return u;
  }, he.extend({
    Deferred: function(e) {
      var t = [ [ "resolve", "done", he.Callbacks("once memory"), "resolved" ], [ "reject", "fail", he.Callbacks("once memory"), "rejected" ], [ "notify", "progress", he.Callbacks("memory") ] ], n = "pending", i = {
        state: function() {
          return n;
        },
        always: function() {
          return o.done(arguments).fail(arguments), this;
        },
        then: function() {
          var e = arguments;
          return he.Deferred(function(n) {
            he.each(t, function(t, r) {
              var a = he.isFunction(e[t]) && e[t];
              o[r[1]](function() {
                var e = a && a.apply(this, arguments);
                e && he.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [ e ] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function(e) {
          return null != e ? he.extend(e, i) : i;
        }
      }, o = {};
      return i.pipe = i.then, he.each(t, function(e, r) {
        var a = r[2], s = r[3];
        i[r[1]] = a.add, s && a.add(function() {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
          return o[r[0] + "With"](this === o ? i : this, arguments), this;
        }, o[r[0] + "With"] = a.fireWith;
      }), i.promise(o), e && e.call(o, o), o;
    },
    when: function(e) {
      var t, n, i, o = 0, r = oe.call(arguments), a = r.length, s = 1 !== a || e && he.isFunction(e.promise) ? a : 0, l = 1 === s ? e : he.Deferred(), c = function(e, n, i) {
        return function(o) {
          n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
        };
      };
      if (a > 1) {
        for (t = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) {
          r[o] && he.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --s;
        }
      }
      return s || l.resolveWith(i, r), l.promise();
    }
  }), he.fn.ready = function(e) {
    return he.ready.promise().done(e), this;
  }, he.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? he.readyWait++ : he.ready(!0);
    },
    ready: function(e) {
      (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || (Me.resolveWith(ie, [ he ]), 
      he.fn.triggerHandler && (he(ie).triggerHandler("ready"), he(ie).off("ready"))));
    }
  }), he.ready.promise = function(t) {
    if (!Me) {
      if (Me = he.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) {
        e.setTimeout(he.ready);
      } else if (ie.addEventListener) {
        ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
      } else {
        ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
        var n = !1;
        try {
          n = null == e.frameElement && ie.documentElement;
        } catch (e) {}
        n && n.doScroll && function t() {
          if (!he.isReady) {
            try {
              n.doScroll("left");
            } catch (n) {
              return e.setTimeout(t, 50);
            }
            a(), he.ready();
          }
        }();
      }
    }
    return Me.promise(t);
  }, he.ready.promise(), he(de)) {
    break;
  }
  de.ownFirst = "0" === Ae, de.inlineBlockNeedsLayout = !1, he(function() {
    var e, t, n, i;
    (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), 
    (i = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
    n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
    de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i));
  }), function() {
    var e = ie.createElement("div");
    de.deleteExpando = !0;
    try {
      delete e.test;
    } catch (e) {
      de.deleteExpando = !1;
    }
    e = null;
  }();
  var Ne, Be = function(e) {
    var t = he.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
    return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t);
  }, Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, De = /([A-Z])/g;
  he.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return !!(e = e.nodeType ? he.cache[e[he.expando]] : e[he.expando]) && !c(e);
    },
    data: function(e, t, n) {
      return u(e, t, n);
    },
    removeData: function(e, t) {
      return d(e, t);
    },
    _data: function(e, t, n) {
      return u(e, t, n, !0);
    },
    _removeData: function(e, t) {
      return d(e, t, !0);
    }
  }), he.fn.extend({
    data: function(e, t) {
      var n, i, o, r = this[0], a = r && r.attributes;
      if (void 0 === e) {
        if (this.length && (o = he.data(r), 1 === r.nodeType && !he._data(r, "parsedAttrs"))) {
          for (n = a.length; n--; ) {
            a[n] && 0 === (i = a[n].name).indexOf("data-") && l(r, i = he.camelCase(i.slice(5)), o[i]);
          }
          he._data(r, "parsedAttrs", !0);
        }
        return o;
      }
      return "object" == typeof e ? this.each(function() {
        he.data(this, e);
      }) : arguments.length > 1 ? this.each(function() {
        he.data(this, e, t);
      }) : r ? l(r, e, he.data(r, e)) : void 0;
    },
    removeData: function(e) {
      return this.each(function() {
        he.removeData(this, e);
      });
    }
  }), he.extend({
    queue: function(e, t, n) {
      var i;
      if (e) {
        return t = (t || "fx") + "queue", i = he._data(e, t), n && (!i || he.isArray(n) ? i = he._data(e, t, he.makeArray(n)) : i.push(n)), 
        i || [];
      }
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = he.queue(e, t), i = n.length, o = n.shift(), r = he._queueHooks(e, t), a = function() {
        he.dequeue(e, t);
      };
      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), 
      delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire();
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return he._data(e, n) || he._data(e, n, {
        empty: he.Callbacks("once memory").add(function() {
          he._removeData(e, t + "queue"), he._removeData(e, n);
        })
      });
    }
  }), he.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = he.queue(this, e, t);
        he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e);
      });
    },
    dequeue: function(e) {
      return this.each(function() {
        he.dequeue(this, e);
      });
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", []);
    },
    promise: function(e, t) {
      var n, i = 1, o = he.Deferred(), r = this, a = this.length, s = function() {
        --i || o.resolveWith(r, [ r ]);
      };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) {
        (n = he._data(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
      }
      return s(), o.promise(t);
    }
  }), de.shrinkWrapBlocks = function() {
    return null != Ne ? Ne : (Ne = !1, (t = ie.getElementsByTagName("body")[0]) && t.style ? (e = ie.createElement("div"), 
    (n = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
    t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
    e.appendChild(ie.createElement("div")).style.width = "5px", Ne = 3 !== e.offsetWidth), 
    t.removeChild(n), Ne) : void 0);
    var e, t, n;
  };
  var Pe, He, _e, je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Oe = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"), Ue = [ "Top", "Right", "Bottom", "Left" ], Fe = function(e, t) {
    return e = t || e, "none" === he.css(e, "display") || !he.contains(e.ownerDocument, e);
  }, Ie = function(e, t, n, i, o, r, a) {
    var s = 0, l = e.length, c = null == n;
    if ("object" === he.type(n)) {
      for (s in o = !0, n) {
        Ie(e, t, s, n[s], !0, r, a);
      }
    } else if (void 0 !== i && (o = !0, he.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), 
    t = null) : (c = t, t = function(e, t, n) {
      return c.call(he(e), n);
    })), t)) {
      for (;s < l; s++) {
        t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      }
    }
    return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
  }, qe = /^(?:checkbox|radio)$/i, Ve = /<([\w:-]+)/, We = /^$|\/(?:java|ecma)script/i, $e = /^\s+/, ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  Pe = ie.createElement("div"), He = ie.createDocumentFragment(), _e = ie.createElement("input"), 
  Pe.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
  de.leadingWhitespace = 3 === Pe.firstChild.nodeType, de.tbody = !Pe.getElementsByTagName("tbody").length, 
  de.htmlSerialize = !!Pe.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, 
  _e.type = "checkbox", _e.checked = !0, He.appendChild(_e), de.appendChecked = _e.checked, 
  Pe.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!Pe.cloneNode(!0).lastChild.defaultValue, 
  He.appendChild(Pe), (_e = ie.createElement("input")).setAttribute("type", "radio"), 
  _e.setAttribute("checked", "checked"), _e.setAttribute("name", "t"), Pe.appendChild(_e), 
  de.checkClone = Pe.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!Pe.addEventListener, 
  Pe[he.expando] = 1, de.attributes = !Pe.getAttribute(he.expando);
  var Xe = {
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
    legend: [ 1, "<fieldset>", "</fieldset>" ],
    area: [ 1, "<map>", "</map>" ],
    param: [ 1, "<object>", "</object>" ],
    thead: [ 1, "<table>", "</table>" ],
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    _default: de.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
  };
  Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, 
  Xe.th = Xe.td;
  var Ge = /<|&#?\w+;/, Qe = /<tbody/i;
  !function() {
    var t, n, i = ie.createElement("div");
    for (t in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = !1 === i.attributes[n].expando);
    }
    i = null;
  }();
  var Ye = /^(?:input|select|textarea)$/i, Ke = /^key/, Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, et = /^(?:focusinfocus|focusoutblur)$/, tt = /^([^.]*)(?:\.(.+)|)/;
  he.event = {
    global: {},
    add: function(e, t, n, i, o) {
      var r, a, s, l, c, u, d, f, h, p, g, m = he._data(e);
      if (m) {
        for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = he.guid++), 
        (a = m.events) || (a = m.events = {}), (u = m.handle) || (u = m.handle = function(e) {
          return void 0 === he || e && he.event.triggered === e.type ? void 0 : he.event.dispatch.apply(u.elem, arguments);
        }, u.elem = e), s = (t = (t || "").match(Re) || [ "" ]).length; s--; ) {
          h = g = (r = tt.exec(t[s]) || [])[1], p = (r[2] || "").split(".").sort(), h && (c = he.event.special[h] || {}, 
          h = (o ? c.delegateType : c.bindType) || h, c = he.event.special[h] || {}, d = he.extend({
            type: h,
            origType: g,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && he.expr.match.needsContext.test(o),
            namespace: p.join(".")
          }, l), (f = a[h]) || ((f = a[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, p, u) || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), 
          c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), 
          he.event.global[h] = !0);
        }
        e = null;
      }
    },
    remove: function(e, t, n, i, o) {
      var r, a, s, l, c, u, d, f, h, p, g, m = he.hasData(e) && he._data(e);
      if (m && (u = m.events)) {
        for (c = (t = (t || "").match(Re) || [ "" ]).length; c--; ) {
          if (h = g = (s = tt.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
            for (d = he.event.special[h] || {}, f = u[h = (i ? d.delegateType : d.bindType) || h] || [], 
            s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--; ) {
              a = f[r], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1), 
              a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
            }
            l && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || he.removeEvent(e, h, m.handle), 
            delete u[h]);
          } else {
            for (h in u) {
              he.event.remove(e, h + t[c], n, i, !0);
            }
          }
        }
        he.isEmptyObject(u) && (delete m.handle, he._removeData(e, "events"));
      }
    },
    trigger: function(t, n, i, o) {
      var r, a, s, l, c, u, d, f = [ i || ie ], h = ue.call(t, "type") ? t.type : t, p = ue.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = u = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !et.test(h + he.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), 
      h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, (t = t[he.expando] ? t : new he.Event(h, "object" == typeof t && t)).isTrigger = o ? 2 : 3, 
      t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
      t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : he.makeArray(n, [ t ]), 
      c = he.event.special[h] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, n))) {
        if (!o && !c.noBubble && !he.isWindow(i)) {
          for (l = c.delegateType || h, et.test(l + h) || (s = s.parentNode); s; s = s.parentNode) {
            f.push(s), u = s;
          }
          u === (i.ownerDocument || ie) && f.push(u.defaultView || u.parentWindow || e);
        }
        for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); ) {
          t.type = d > 1 ? l : c.bindType || h, (r = (he._data(s, "events") || {})[t.type] && he._data(s, "handle")) && r.apply(s, n), 
          (r = a && s[a]) && r.apply && Be(s) && (t.result = r.apply(s, n), !1 === t.result && t.preventDefault());
        }
        if (t.type = h, !o && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(f.pop(), n)) && Be(i) && a && i[h] && !he.isWindow(i)) {
          (u = i[a]) && (i[a] = null), he.event.triggered = h;
          try {
            i[h]();
          } catch (e) {}
          he.event.triggered = void 0, u && (i[a] = u);
        }
        return t.result;
      }
    },
    dispatch: function(e) {
      e = he.event.fix(e);
      var t, n, i, o, r, a = [], s = oe.call(arguments), l = (he._data(this, "events") || {})[e.type] || [], c = he.event.special[e.type] || {};
      if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
        for (a = he.event.handlers.call(this, e, l), t = 0; (o = a[t++]) && !e.isPropagationStopped(); ) {
          for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped(); ) {
            e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, 
            void 0 !== (i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), 
            e.stopPropagation()));
          }
        }
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function(e, t) {
      var n, i, o, r, a = [], s = t.delegateCount, l = e.target;
      if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) {
        for (;l != this; l = l.parentNode || this) {
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (i = [], n = 0; n < s; n++) {
              void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? he(o, this).index(l) > -1 : he.find(o, this, null, [ l ]).length), 
              i[o] && i.push(r);
            }
            i.length && a.push({
              elem: l,
              handlers: i
            });
          }
        }
      }
      return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }), a;
    },
    fix: function(e) {
      if (e[he.expando]) {
        return e;
      }
      var t, n, i, o = e.type, r = e, a = this.fixHooks[o];
      for (a || (this.fixHooks[o] = a = Ze.test(o) ? this.mouseHooks : Ke.test(o) ? this.keyHooks : {}), 
      i = a.props ? this.props.concat(a.props) : this.props, e = new he.Event(r), t = i.length; t--; ) {
        e[n = i[t]] = r[n];
      }
      return e.target || (e.target = r.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
      e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
        e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, i, o, r = t.button, a = t.fromElement;
        return null == e.pageX && null != t.clientX && (o = (i = e.target.ownerDocument || ie).documentElement, 
        n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), 
        e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), 
        !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), 
        e;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== b() && this.focus) {
            try {
              return this.focus(), !1;
            } catch (e) {}
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === b() && this.blur) {
            return this.blur(), !1;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (he.nodeName(this, "input") && "checkbox" === this.type && this.click) {
            return this.click(), !1;
          }
        },
        _default: function(e) {
          return he.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function(e, t, n) {
      var i = he.extend(new he.Event, n, {
        type: e,
        isSimulated: !0
      });
      he.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault();
    }
  }, he.removeEvent = ie.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  } : function(e, t, n) {
    var i = "on" + t;
    e.detachEvent && (void 0 === e[i] && (e[i] = null), e.detachEvent(i, n));
  }, he.Event = function(e, t) {
    if (!(this instanceof he.Event)) {
      return new he.Event(e, t);
    }
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : w) : this.type = e, 
    t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0;
  }, he.Event.prototype = {
    constructor: he.Event,
    isDefaultPrevented: w,
    isPropagationStopped: w,
    isImmediatePropagationStopped: w,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), 
      e.cancelBubble = !0);
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
      this.stopPropagation();
    }
  }, he.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    he.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, i = this, o = e.relatedTarget, r = e.handleObj;
        return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), 
        e.type = t), n;
      }
    };
  }), de.submit || (he.event.special.submit = {
    setup: function() {
      if (he.nodeName(this, "form")) {
        return !1;
      }
      he.event.add(this, "click._submit keypress._submit", function(e) {
        var t = e.target, n = he.nodeName(t, "input") || he.nodeName(t, "button") ? he.prop(t, "form") : void 0;
        n && !he._data(n, "submit") && (he.event.add(n, "submit._submit", function(e) {
          e._submitBubble = !0;
        }), he._data(n, "submit", !0));
      });
    },
    postDispatch: function(e) {
      e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && he.event.simulate("submit", this.parentNode, e));
    },
    teardown: function() {
      if (he.nodeName(this, "form")) {
        return !1;
      }
      he.event.remove(this, "._submit");
    }
  }), de.change || (he.event.special.change = {
    setup: function() {
      if (Ye.test(this.nodeName)) {
        return "checkbox" !== this.type && "radio" !== this.type || (he.event.add(this, "propertychange._change", function(e) {
          "checked" === e.originalEvent.propertyName && (this._justChanged = !0);
        }), he.event.add(this, "click._change", function(e) {
          this._justChanged && !e.isTrigger && (this._justChanged = !1), he.event.simulate("change", this, e);
        })), !1;
      }
      he.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Ye.test(t.nodeName) && !he._data(t, "change") && (he.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || he.event.simulate("change", this.parentNode, e);
        }), he._data(t, "change", !0));
      });
    },
    handle: function(e) {
      var t = e.target;
      if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) {
        return e.handleObj.handler.apply(this, arguments);
      }
    },
    teardown: function() {
      return he.event.remove(this, "._change"), !Ye.test(this.nodeName);
    }
  }), de.focusin || he.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      he.event.simulate(t, e.target, he.event.fix(e));
    };
    he.event.special[t] = {
      setup: function() {
        var i = this.ownerDocument || this, o = he._data(i, t);
        o || i.addEventListener(e, n, !0), he._data(i, t, (o || 0) + 1);
      },
      teardown: function() {
        var i = this.ownerDocument || this, o = he._data(i, t) - 1;
        o ? he._data(i, t, o) : (i.removeEventListener(e, n, !0), he._removeData(i, t));
      }
    };
  }), he.fn.extend({
    on: function(e, t, n, i) {
      return k(this, e, t, n, i);
    },
    one: function(e, t, n, i) {
      return k(this, e, t, n, i, 1);
    },
    off: function(e, t, n) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) {
        return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
        this;
      }
      if ("object" == typeof e) {
        for (o in e) {
          this.off(o, t, e[o]);
        }
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = w), 
      this.each(function() {
        he.event.remove(this, e, n, t);
      });
    },
    trigger: function(e, t) {
      return this.each(function() {
        he.event.trigger(e, t, this);
      });
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) {
        return he.event.trigger(e, t, n, !0);
      }
    }
  });
  var nt = / jQuery\d+="(?:null|\d+)"/g, it = new RegExp("<(?:" + ze + ")[\\s/>]", "i"), ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, rt = /<script|<style|<link/i, at = /checked\s*(?:[^=]|=\s*.checked.)/i, st = /^true\/(.*)/, lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = h(ie).appendChild(ie.createElement("div"));
  he.extend({
    htmlPrefilter: function(e) {
      return e.replace(ot, "<$1></$2>");
    },
    clone: function(e, t, n) {
      var i, o, r, a, s, l = he.contains(e.ownerDocument, e);
      if (de.html5Clone || he.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (ct.innerHTML = e.outerHTML, 
      ct.removeChild(r = ct.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e))) {
        for (i = p(r), s = p(e), a = 0; null != (o = s[a]); ++a) {
          i[a] && J(o, i[a]);
        }
      }
      if (t) {
        if (n) {
          for (s = s || p(e), i = i || p(r), a = 0; null != (o = s[a]); a++) {
            S(o, i[a]);
          }
        } else {
          S(e, r);
        }
      }
      return (i = p(r, "script")).length > 0 && g(i, !l && p(e, "script")), i = s = o = null, 
      r;
    },
    cleanData: function(e, t) {
      for (var n, i, o, r, a = 0, s = he.expando, l = he.cache, c = de.attributes, u = he.event.special; null != (n = e[a]); a++) {
        if ((t || Be(n)) && (r = (o = n[s]) && l[o])) {
          if (r.events) {
            for (i in r.events) {
              u[i] ? he.event.remove(n, i) : he.removeEvent(n, i, r.handle);
            }
          }
          l[o] && (delete l[o], c || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), 
          ne.push(o));
        }
      }
    }
  }), he.fn.extend({
    domManip: E,
    detach: function(e) {
      return M(this, e, !0);
    },
    remove: function(e) {
      return M(this, e);
    },
    text: function(e) {
      return Ie(this, function(e) {
        return void 0 === e ? he.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function() {
      return E(this, arguments, function(e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || x(this, e).appendChild(e);
      });
    },
    prepend: function() {
      return E(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = x(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function() {
      return E(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function() {
      return E(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && he.cleanData(p(e, !1)); e.firstChild; ) {
          e.removeChild(e.firstChild);
        }
        e.options && he.nodeName(e, "select") && (e.options.length = 0);
      }
      return this;
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return he.clone(this, e, t);
      });
    },
    html: function(e) {
      return Ie(this, function(e) {
        var t = this[0] || {}, n = 0, i = this.length;
        if (void 0 === e) {
          return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : void 0;
        }
        if ("string" == typeof e && !rt.test(e) && (de.htmlSerialize || !it.test(e)) && (de.leadingWhitespace || !$e.test(e)) && !Xe[(Ve.exec(e) || [ "", "" ])[1].toLowerCase()]) {
          e = he.htmlPrefilter(e);
          try {
            for (;n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (he.cleanData(p(t, !1)), t.innerHTML = e);
            }
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function() {
      var e = [];
      return E(this, arguments, function(t) {
        var n = this.parentNode;
        he.inArray(this, e) < 0 && (he.cleanData(p(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), he.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    he.fn[e] = function(e) {
      for (var n, i = 0, o = [], r = he(e), a = r.length - 1; i <= a; i++) {
        n = i === a ? this : this.clone(!0), he(r[i])[t](n), ae.apply(o, n.get());
      }
      return this.pushStack(o);
    };
  });
  var ut, dt = {
    HTML: "block",
    BODY: "block"
  }, ft = /^margin/, ht = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"), pt = function(e, t, n, i) {
    var o, r, a = {};
    for (r in t) {
      a[r] = e.style[r], e.style[r] = t[r];
    }
    for (r in o = n.apply(e, i || []), t) {
      e.style[r] = a[r];
    }
    return o;
  }, gt = ie.documentElement;
  !function() {
    function t() {
      var t, u, d = ie.documentElement;
      d.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
      n = o = s = !1, i = a = !0, e.getComputedStyle && (u = e.getComputedStyle(c), n = "1%" !== (u || {}).top, 
      s = "2px" === (u || {}).marginLeft, o = "4px" === (u || {
        width: "4px"
      }).width, c.style.marginRight = "50%", i = "4px" === (u || {
        marginRight: "4px"
      }).marginRight, (t = c.appendChild(ie.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
      t.style.marginRight = t.style.width = "0", c.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), 
      c.removeChild(t)), c.style.display = "none", (r = 0 === c.getClientRects().length) && (c.style.display = "", 
      c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", 
      (t = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
      (r = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", 
      r = 0 === t[0].offsetHeight)), d.removeChild(l);
    }
    var n, i, o, r, a, s, l = ie.createElement("div"), c = ie.createElement("div");
    c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, 
    de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
    de.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = ie.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
    c.innerHTML = "", l.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, 
    he.extend(de, {
      reliableHiddenOffsets: function() {
        return null == n && t(), r;
      },
      boxSizingReliable: function() {
        return null == n && t(), o;
      },
      pixelMarginRight: function() {
        return null == n && t(), i;
      },
      pixelPosition: function() {
        return null == n && t(), n;
      },
      reliableMarginRight: function() {
        return null == n && t(), a;
      },
      reliableMarginLeft: function() {
        return null == n && t(), s;
      }
    }));
  }();
  var mt, vt, yt = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (mt = function(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  }, vt = function(e, t, n) {
    var i, o, r, a, s = e.style;
    return "" !== (a = (n = n || mt(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), 
    n && !de.pixelMarginRight() && ht.test(a) && ft.test(t) && (i = s.width, o = s.minWidth, 
    r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, 
    s.minWidth = o, s.maxWidth = r), void 0 === a ? a : a + "";
  }) : gt.currentStyle && (mt = function(e) {
    return e.currentStyle;
  }, vt = function(e, t, n) {
    var i, o, r, a, s = e.style;
    return null == (a = (n = n || mt(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), 
    ht.test(a) && !yt.test(t) && (i = s.left, (r = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), 
    s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), 
    void 0 === a ? a : a + "" || "auto";
  });
  var wt = /alpha\([^)]*\)/i, bt = /opacity\s*=\s*([^)]*)/i, kt = /^(none|table(?!-c[ea]).+)/, xt = new RegExp("^(" + je + ")(.*)$", "i"), Tt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }, Ct = {
    letterSpacing: "0",
    fontWeight: "400"
  }, St = [ "Webkit", "O", "Moz", "ms" ], Jt = ie.createElement("div").style;
  he.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = vt(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: de.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, r, a, s = he.camelCase(t), l = e.style;
        if (t = he.cssProps[s] || (he.cssProps[s] = B(s) || s), a = he.cssHooks[t] || he.cssHooks[s], 
        void 0 === n) {
          return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
        }
        if (!("string" === (r = typeof n) && (o = Oe.exec(n)) && o[1] && (n = f(e, t, o), 
        r = "number"), null == n || n != n || ("number" === r && (n += o && o[3] || (he.cssNumber[s] ? "" : "px")), 
        de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
        a && "set" in a && void 0 === (n = a.set(e, n, i))))) {
          try {
            l[t] = n;
          } catch (e) {}
        }
      }
    },
    css: function(e, t, n, i) {
      var o, r, a, s = he.camelCase(t);
      return t = he.cssProps[s] || (he.cssProps[s] = B(s) || s), (a = he.cssHooks[t] || he.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), 
      void 0 === r && (r = vt(e, t, i)), "normal" === r && t in Ct && (r = Ct[t]), "" === n || n ? (o = parseFloat(r), 
      !0 === n || isFinite(o) ? o || 0 : r) : r;
    }
  }), he.each([ "height", "width" ], function(e, t) {
    he.cssHooks[t] = {
      get: function(e, n, i) {
        if (n) {
          return kt.test(he.css(e, "display")) && 0 === e.offsetWidth ? pt(e, Tt, function() {
            return H(e, t, i);
          }) : H(e, t, i);
        }
      },
      set: function(e, n, i) {
        var o = i && mt(e);
        return D(e, n, i ? P(e, t, i, de.boxSizing && "border-box" === he.css(e, "boxSizing", !1, o), o) : 0);
      }
    };
  }), de.opacity || (he.cssHooks.opacity = {
    get: function(e, t) {
      return bt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function(e, t) {
      var n = e.style, i = e.currentStyle, o = he.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", r = i && i.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === he.trim(r.replace(wt, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
      "" === t || i && !i.filter) || (n.filter = wt.test(r) ? r.replace(wt, o) : r + " " + o);
    }
  }), he.cssHooks.marginRight = N(de.reliableMarginRight, function(e, t) {
    if (t) {
      return pt(e, {
        display: "inline-block"
      }, vt, [ e, "marginRight" ]);
    }
  }), he.cssHooks.marginLeft = N(de.reliableMarginLeft, function(e, t) {
    if (t) {
      return (parseFloat(vt(e, "marginLeft")) || (he.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left;
      }) : 0)) + "px";
    }
  }), he.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    he.cssHooks[e + t] = {
      expand: function(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [ n ]; i < 4; i++) {
          o[e + Ue[i] + t] = r[i] || r[i - 2] || r[0];
        }
        return o;
      }
    }, ft.test(e) || (he.cssHooks[e + t].set = D);
  }), he.fn.extend({
    css: function(e, t) {
      return Ie(this, function(e, t, n) {
        var i, o, r = {}, a = 0;
        if (he.isArray(t)) {
          for (i = mt(e), o = t.length; a < o; a++) {
            r[t[a]] = he.css(e, t[a], !1, i);
          }
          return r;
        }
        return void 0 !== n ? he.style(e, t, n) : he.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function() {
      return L(this, !0);
    },
    hide: function() {
      return L(this);
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        Fe(this) ? he(this).show() : he(this).hide();
      });
    }
  }), he.Tween = _, _.prototype = {
    constructor: _,
    init: function(e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, 
      this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px");
    },
    cur: function() {
      var e = _.propHooks[this.prop];
      return e && e.get ? e.get(this) : _.propHooks._default.get(this);
    },
    run: function(e) {
      var t, n = _.propHooks[this.prop];
      return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
      this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
      n && n.set ? n.set(this) : _.propHooks._default.set(this), this;
    }
  }, _.prototype.init.prototype = _.prototype, _.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function(e) {
        he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, he.easing = {
    linear: function(e) {
      return e;
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, he.fx = _.prototype.init, he.fx.step = {};
  var Et, Mt, At = /^(?:toggle|show|hide)$/, Rt = /queueHooks$/;
  he.Animation = he.extend(q, {
    tweeners: {
      "*": [ function(e, t) {
        var n = this.createTween(e, t);
        return f(n.elem, e, Oe.exec(t), n), n;
      } ]
    },
    tweener: function(e, t) {
      he.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(Re);
      for (var n, i = 0, o = e.length; i < o; i++) {
        n = e[i], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(t);
      }
    },
    prefilters: [ F ],
    prefilter: function(e, t) {
      t ? q.prefilters.unshift(e) : q.prefilters.push(e);
    }
  }), he.speed = function(e, t, n) {
    var i = e && "object" == typeof e ? he.extend({}, e) : {
      complete: n || !n && t || he.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !he.isFunction(t) && t
    };
    return i.duration = he.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in he.fx.speeds ? he.fx.speeds[i.duration] : he.fx.speeds._default, 
    null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
      he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue);
    }, i;
  }, he.fn.extend({
    fadeTo: function(e, t, n, i) {
      return this.filter(Fe).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i);
    },
    animate: function(e, t, n, i) {
      var o = he.isEmptyObject(e), r = he.speed(t, n, i), a = function() {
        var t = q(this, he.extend({}, e), r);
        (o || he._data(this, "finish")) && t.stop(!0);
      };
      return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a);
    },
    stop: function(e, t, n) {
      var i = function(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };
      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
      this.each(function() {
        var t = !0, o = null != e && e + "queueHooks", r = he.timers, a = he._data(this);
        if (o) {
          a[o] && a[o].stop && i(a[o]);
        } else {
          for (o in a) {
            a[o] && a[o].stop && Rt.test(o) && i(a[o]);
          }
        }
        for (o = r.length; o--; ) {
          r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, 
          r.splice(o, 1));
        }
        !t && n || he.dequeue(this, e);
      });
    },
    finish: function(e) {
      return !1 !== e && (e = e || "fx"), this.each(function() {
        var t, n = he._data(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = he.timers, a = i ? i.length : 0;
        for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
        t = r.length; t--; ) {
          r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        }
        for (t = 0; t < a; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }
        delete n.finish;
      });
    }
  }), he.each([ "toggle", "show", "hide" ], function(e, t) {
    var n = he.fn[t];
    he.fn[t] = function(e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, o);
    };
  }), he.each({
    slideDown: O("show"),
    slideUp: O("hide"),
    slideToggle: O("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, t) {
    he.fn[e] = function(e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), he.timers = [], he.fx.tick = function() {
    var e, t = he.timers, n = 0;
    for (Et = he.now(); n < t.length; n++) {
      (e = t[n])() || t[n] !== e || t.splice(n--, 1);
    }
    t.length || he.fx.stop(), Et = void 0;
  }, he.fx.timer = function(e) {
    he.timers.push(e), e() ? he.fx.start() : he.timers.pop();
  }, he.fx.interval = 13, he.fx.start = function() {
    Mt || (Mt = e.setInterval(he.fx.tick, he.fx.interval));
  }, he.fx.stop = function() {
    e.clearInterval(Mt), Mt = null;
  }, he.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, he.fn.delay = function(t, n) {
    return t = he.fx && he.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
      var o = e.setTimeout(n, t);
      i.stop = function() {
        e.clearTimeout(o);
      };
    });
  }, function() {
    var e, t = ie.createElement("input"), n = ie.createElement("div"), i = ie.createElement("select"), o = i.appendChild(ie.createElement("option"));
    (n = ie.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
    e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), 
    (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, 
    de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), 
    de.checkOn = !!t.value, de.optSelected = o.selected, de.enctype = !!ie.createElement("form").enctype, 
    i.disabled = !0, de.optDisabled = !o.disabled, (t = ie.createElement("input")).setAttribute("value", ""), 
    de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), 
    de.radioValue = "t" === t.value;
  }();
  var Nt = /\r/g, Bt = /[\x20\t\r\n\f]+/g;
  he.fn.extend({
    val: function(e) {
      var t, n, i, o = this[0];
      return arguments.length ? (i = he.isFunction(e), this.each(function(n) {
        var o;
        1 === this.nodeType && (null == (o = i ? e.call(this, n, he(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : he.isArray(o) && (o = he.map(o, function(e) {
          return null == e ? "" : e + "";
        })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
      })) : o ? (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Nt, "") : null == n ? "" : n : void 0;
    }
  }), he.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = he.find.attr(e, "value");
          return null != t ? t : he.trim(he.text(e)).replace(Bt, " ");
        }
      },
      select: {
        get: function(e) {
          for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++) {
            if (((n = i[l]).selected || l === o) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
              if (t = he(n).val(), r) {
                return t;
              }
              a.push(t);
            }
          }
          return a;
        },
        set: function(e, t) {
          for (var n, i, o = e.options, r = he.makeArray(t), a = o.length; a--; ) {
            if (i = o[a], he.inArray(he.valHooks.option.get(i), r) > -1) {
              try {
                i.selected = n = !0;
              } catch (e) {
                i.scrollHeight;
              }
            } else {
              i.selected = !1;
            }
          }
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), he.each([ "radio", "checkbox" ], function() {
    he.valHooks[this] = {
      set: function(e, t) {
        if (he.isArray(t)) {
          return e.checked = he.inArray(he(e).val(), t) > -1;
        }
      }
    }, de.checkOn || (he.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Lt, Dt, Pt = he.expr.attrHandle, Ht = /^(?:checked|selected)$/i, _t = de.getSetAttribute, jt = de.input;
  he.fn.extend({
    attr: function(e, t) {
      return Ie(this, he.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        he.removeAttr(this, e);
      });
    }
  }), he.extend({
    attr: function(e, t, n) {
      var i, o, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) {
        return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (t = t.toLowerCase(), 
        o = he.attrHooks[t] || (he.expr.match.bool.test(t) ? Dt : Lt)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
        n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = he.find.attr(e, t)) ? void 0 : i);
      }
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, i, o = 0, r = t && t.match(Re);
      if (r && 1 === e.nodeType) {
        for (;n = r[o++]; ) {
          i = he.propFix[n] || n, he.expr.match.bool.test(n) ? jt && _t || !Ht.test(n) ? e[i] = !1 : e[he.camelCase("default-" + n)] = e[i] = !1 : he.attr(e, n, ""), 
          e.removeAttribute(_t ? n : i);
        }
      }
    }
  }), Dt = {
    set: function(e, t, n) {
      return !1 === t ? he.removeAttr(e, n) : jt && _t || !Ht.test(n) ? e.setAttribute(!_t && he.propFix[n] || n, n) : e[he.camelCase("default-" + n)] = e[n] = !0, 
      n;
    }
  }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = Pt[t] || he.find.attr;
    jt && _t || !Ht.test(t) ? Pt[t] = function(e, t, i) {
      var o, r;
      return i || (r = Pt[t], Pt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, 
      Pt[t] = r), o;
    } : Pt[t] = function(e, t, n) {
      if (!n) {
        return e[he.camelCase("default-" + t)] ? t.toLowerCase() : null;
      }
    };
  }), jt && _t || (he.attrHooks.value = {
    set: function(e, t, n) {
      if (!he.nodeName(e, "input")) {
        return Lt && Lt.set(e, t, n);
      }
      e.defaultValue = t;
    }
  }), _t || (Lt = {
    set: function(e, t, n) {
      var i = e.getAttributeNode(n);
      if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", 
      "value" === n || t === e.getAttribute(n)) {
        return t;
      }
    }
  }, Pt.id = Pt.name = Pt.coords = function(e, t, n) {
    var i;
    if (!n) {
      return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null;
    }
  }, he.valHooks.button = {
    get: function(e, t) {
      var n = e.getAttributeNode(t);
      if (n && n.specified) {
        return n.value;
      }
    },
    set: Lt.set
  }, he.attrHooks.contenteditable = {
    set: function(e, t, n) {
      Lt.set(e, "" !== t && t, n);
    }
  }, he.each([ "width", "height" ], function(e, t) {
    he.attrHooks[t] = {
      set: function(e, n) {
        if ("" === n) {
          return e.setAttribute(t, "auto"), n;
        }
      }
    };
  })), de.style || (he.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || void 0;
    },
    set: function(e, t) {
      return e.style.cssText = t + "";
    }
  });
  var Ot = /^(?:input|select|textarea|button|object)$/i, Ut = /^(?:a|area)$/i;
  he.fn.extend({
    prop: function(e, t) {
      return Ie(this, he.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return e = he.propFix[e] || e, this.each(function() {
        try {
          this[e] = void 0, delete this[e];
        } catch (e) {}
      });
    }
  }), he.extend({
    prop: function(e, t, n) {
      var i, o, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) {
        return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), 
        void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
      }
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = he.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Ot.test(e.nodeName) || Ut.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), de.hrefNormalized || he.each([ "href", "src" ], function(e, t) {
    he.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4);
      }
    };
  }), de.optSelected || (he.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    },
    set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), he.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
    he.propFix[this.toLowerCase()] = this;
  }), de.enctype || (he.propFix.enctype = "encoding");
  var Ft = /[\t\r\n\f]/g;
  he.fn.extend({
    addClass: function(e) {
      var t, n, i, o, r, a, s, l = 0;
      if (he.isFunction(e)) {
        return this.each(function(t) {
          he(this).addClass(e.call(this, t, V(this)));
        });
      }
      if ("string" == typeof e && e) {
        for (t = e.match(Re) || []; n = this[l++]; ) {
          if (o = V(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ft, " ")) {
            for (a = 0; r = t[a++]; ) {
              i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            }
            o !== (s = he.trim(i)) && he.attr(n, "class", s);
          }
        }
      }
      return this;
    },
    removeClass: function(e) {
      var t, n, i, o, r, a, s, l = 0;
      if (he.isFunction(e)) {
        return this.each(function(t) {
          he(this).removeClass(e.call(this, t, V(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ("string" == typeof e && e) {
        for (t = e.match(Re) || []; n = this[l++]; ) {
          if (o = V(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ft, " ")) {
            for (a = 0; r = t[a++]; ) {
              for (;i.indexOf(" " + r + " ") > -1; ) {
                i = i.replace(" " + r + " ", " ");
              }
            }
            o !== (s = he.trim(i)) && he.attr(n, "class", s);
          }
        }
      }
      return this;
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
        he(this).toggleClass(e.call(this, n, V(this), t), t);
      }) : this.each(function() {
        var t, i, o, r;
        if ("string" === n) {
          for (i = 0, o = he(this), r = e.match(Re) || []; t = r[i++]; ) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else {
          void 0 !== e && "boolean" !== n || ((t = V(this)) && he._data(this, "__className__", t), 
          he.attr(this, "class", t || !1 === e ? "" : he._data(this, "__className__") || ""));
        }
      });
    },
    hasClass: function(e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++]; ) {
        if (1 === n.nodeType && (" " + V(n) + " ").replace(Ft, " ").indexOf(t) > -1) {
          return !0;
        }
      }
      return !1;
    }
  }), he.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    he.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), he.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  });
  var It = e.location, qt = he.now(), Vt = /\?/, Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  he.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse) {
      return e.JSON.parse(t + "");
    }
    var n, i = null, o = he.trim(t + "");
    return o && !he.trim(o.replace(Wt, function(e, t, o, r) {
      return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "");
    })) ? Function("return " + o)() : he.error("Invalid JSON: " + t);
  }, he.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) {
      return null;
    }
    try {
      e.DOMParser ? n = (new e.DOMParser).parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", 
      n.loadXML(t));
    } catch (e) {
      n = void 0;
    }
    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), 
    n;
  };
  var $t = /#.*$/, zt = /([?&])_=[^&]*/, Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Qt = /^(?:GET|HEAD)$/, Yt = /^\/\//, Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Zt = {}, en = {}, tn = "*/".concat("*"), nn = It.href, on = Kt.exec(nn.toLowerCase()) || [];
  he.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: nn,
      type: "GET",
      isLocal: Gt.test(on[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": tn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": he.parseJSON,
        "text xml": he.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? z(z(e, he.ajaxSettings), t) : z(he.ajaxSettings, e);
    },
    ajaxPrefilter: W(Zt),
    ajaxTransport: W(en),
    ajax: function(t, n) {
      function i(t, n, i, o) {
        var r, d, y, w, k, T = n;
        2 !== b && (b = 2, l && e.clearTimeout(l), u = void 0, s = o || "", x.readyState = t > 0 ? 4 : 0, 
        r = t >= 200 && t < 300 || 304 === t, i && (w = X(f, x, i)), w = G(f, w, x, r), 
        r ? (f.ifModified && ((k = x.getResponseHeader("Last-Modified")) && (he.lastModified[a] = k), 
        (k = x.getResponseHeader("etag")) && (he.etag[a] = k)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, 
        d = w.data, r = !(y = w.error))) : (y = T, !t && T || (T = "error", t < 0 && (t = 0))), 
        x.status = t, x.statusText = (n || T) + "", r ? g.resolveWith(h, [ d, T, x ]) : g.rejectWith(h, [ x, T, y ]), 
        x.statusCode(v), v = void 0, c && p.trigger(r ? "ajaxSuccess" : "ajaxError", [ x, f, r ? d : y ]), 
        m.fireWith(h, [ x, T ]), c && (p.trigger("ajaxComplete", [ x, f ]), --he.active || he.event.trigger("ajaxStop")));
      }
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var o, r, a, s, l, c, u, d, f = he.ajaxSetup({}, n), h = f.context || f, p = f.context && (h.nodeType || h.jquery) ? he(h) : he.event, g = he.Deferred(), m = he.Callbacks("once memory"), v = f.statusCode || {}, y = {}, w = {}, b = 0, k = "canceled", x = {
        readyState: 0,
        getResponseHeader: function(e) {
          var t;
          if (2 === b) {
            if (!d) {
              for (d = {}; t = Xt.exec(s); ) {
                d[t[1].toLowerCase()] = t[2];
              }
            }
            t = d[e.toLowerCase()];
          }
          return null == t ? null : t;
        },
        getAllResponseHeaders: function() {
          return 2 === b ? s : null;
        },
        setRequestHeader: function(e, t) {
          var n = e.toLowerCase();
          return b || (e = w[n] = w[n] || e, y[e] = t), this;
        },
        overrideMimeType: function(e) {
          return b || (f.mimeType = e), this;
        },
        statusCode: function(e) {
          var t;
          if (e) {
            if (b < 2) {
              for (t in e) {
                v[t] = [ v[t], e[t] ];
              }
            } else {
              x.always(e[x.status]);
            }
          }
          return this;
        },
        abort: function(e) {
          var t = e || k;
          return u && u.abort(t), i(0, t), this;
        }
      };
      if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || nn) + "").replace($t, "").replace(Yt, on[1] + "//"), 
      f.type = n.method || n.type || f.method || f.type, f.dataTypes = he.trim(f.dataType || "*").toLowerCase().match(Re) || [ "" ], 
      null == f.crossDomain && (o = Kt.exec(f.url.toLowerCase()), f.crossDomain = !(!o || o[1] === on[1] && o[2] === on[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (on[3] || ("http:" === on[1] ? "80" : "443")))), 
      f.data && f.processData && "string" != typeof f.data && (f.data = he.param(f.data, f.traditional)), 
      $(Zt, f, n, x), 2 === b) {
        return x;
      }
      for (r in (c = he.event && f.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), 
      f.type = f.type.toUpperCase(), f.hasContent = !Qt.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Vt.test(a) ? "&" : "?") + f.data, 
      delete f.data), !1 === f.cache && (f.url = zt.test(a) ? a.replace(zt, "$1_=" + qt++) : a + (Vt.test(a) ? "&" : "?") + "_=" + qt++)), 
      f.ifModified && (he.lastModified[a] && x.setRequestHeader("If-Modified-Since", he.lastModified[a]), 
      he.etag[a] && x.setRequestHeader("If-None-Match", he.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && x.setRequestHeader("Content-Type", f.contentType), 
      x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : f.accepts["*"]), 
      f.headers) {
        x.setRequestHeader(r, f.headers[r]);
      }
      if (f.beforeSend && (!1 === f.beforeSend.call(h, x, f) || 2 === b)) {
        return x.abort();
      }
      for (r in k = "abort", {
        success: 1,
        error: 1,
        complete: 1
      }) {
        x[r](f[r]);
      }
      if (u = $(en, f, n, x)) {
        if (x.readyState = 1, c && p.trigger("ajaxSend", [ x, f ]), 2 === b) {
          return x;
        }
        f.async && f.timeout > 0 && (l = e.setTimeout(function() {
          x.abort("timeout");
        }, f.timeout));
        try {
          b = 1, u.send(y, i);
        } catch (e) {
          if (!(b < 2)) {
            throw e;
          }
          i(-1, e);
        }
      } else {
        i(-1, "No Transport");
      }
      return x;
    },
    getJSON: function(e, t, n) {
      return he.get(e, t, n, "json");
    },
    getScript: function(e, t) {
      return he.get(e, void 0, t, "script");
    }
  }), he.each([ "get", "post" ], function(e, t) {
    he[t] = function(e, n, i, o) {
      return he.isFunction(n) && (o = o || i, i = n, n = void 0), he.ajax(he.extend({
        url: e,
        type: t,
        dataType: o,
        data: n,
        success: i
      }, he.isPlainObject(e) && e));
    };
  }), he._evalUrl = function(e) {
    return he.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    });
  }, he.fn.extend({
    wrapAll: function(e) {
      if (he.isFunction(e)) {
        return this.each(function(t) {
          he(this).wrapAll(e.call(this, t));
        });
      }
      if (this[0]) {
        var t = he(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) {
            e = e.firstChild;
          }
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(e) {
      return he.isFunction(e) ? this.each(function(t) {
        he(this).wrapInner(e.call(this, t));
      }) : this.each(function() {
        var t = he(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function(e) {
      var t = he.isFunction(e);
      return this.each(function(n) {
        he(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        he.nodeName(this, "body") || he(this).replaceWith(this.childNodes);
      }).end();
    }
  }), he.expr.filters.hidden = function(e) {
    return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Y(e);
  }, he.expr.filters.visible = function(e) {
    return !he.expr.filters.hidden(e);
  };
  var rn = /%20/g, an = /\[\]$/, sn = /\r?\n/g, ln = /^(?:submit|button|image|reset|file)$/i, cn = /^(?:input|select|textarea|keygen)/i;
  he.param = function(e, t) {
    var n, i = [], o = function(e, t) {
      t = he.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };
    if (void 0 === t && (t = he.ajaxSettings && he.ajaxSettings.traditional), he.isArray(e) || e.jquery && !he.isPlainObject(e)) {
      he.each(e, function() {
        o(this.name, this.value);
      });
    } else {
      for (n in e) {
        K(n, e[n], t, o);
      }
    }
    return i.join("&").replace(rn, "+");
  }, he.fn.extend({
    serialize: function() {
      return he.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var e = he.prop(this, "elements");
        return e ? he.makeArray(e) : this;
      }).filter(function() {
        var e = this.type;
        return this.name && !he(this).is(":disabled") && cn.test(this.nodeName) && !ln.test(e) && (this.checked || !qe.test(e));
      }).map(function(e, t) {
        var n = he(this).val();
        return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(sn, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(sn, "\r\n")
        };
      }).get();
    }
  }), he.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
    return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee();
  } : Z;
  var un = 0, dn = {}, fn = he.ajaxSettings.xhr();
  e.attachEvent && e.attachEvent("onunload", function() {
    for (var e in dn) {
      dn[e](void 0, !0);
    }
  }), de.cors = !!fn && "withCredentials" in fn, (fn = de.ajax = !!fn) && he.ajaxTransport(function(t) {
    var n;
    if (!t.crossDomain || de.cors) {
      return {
        send: function(i, o) {
          var r, a = t.xhr(), s = ++un;
          if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) {
            for (r in t.xhrFields) {
              a[r] = t.xhrFields[r];
            }
          }
          for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), 
          i) {
            void 0 !== i[r] && a.setRequestHeader(r, i[r] + "");
          }
          a.send(t.hasContent && t.data || null), n = function(e, i) {
            var r, l, c;
            if (n && (i || 4 === a.readyState)) {
              if (delete dn[s], n = void 0, a.onreadystatechange = he.noop, i) {
                4 !== a.readyState && a.abort();
              } else {
                c = {}, r = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                try {
                  l = a.statusText;
                } catch (e) {
                  l = "";
                }
                r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404;
              }
            }
            c && o(r, l, c, a.getAllResponseHeaders());
          }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = dn[s] = n : n();
        },
        abort: function() {
          n && n(void 0, !0);
        }
      };
    }
  }), he.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return he.globalEval(e), e;
      }
    }
  }), he.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), he.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n = ie.head || he("head")[0] || ie.documentElement;
      return {
        send: function(i, o) {
          (t = ie.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), 
          t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, 
            t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"));
          }, n.insertBefore(t, n.firstChild);
        },
        abort: function() {
          t && t.onload(void 0, !0);
        }
      };
    }
  });
  var hn = [], pn = /(=)\?(?=&|$)|\?\?/;
  he.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = hn.pop() || he.expando + "_" + qt++;
      return this[e] = !0, e;
    }
  }), he.ajaxPrefilter("json jsonp", function(t, n, i) {
    var o, r, a, s = !1 !== t.jsonp && (pn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) {
      return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
      s ? t[s] = t[s].replace(pn, "$1" + o) : !1 !== t.jsonp && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), 
      t.converters["script json"] = function() {
        return a || he.error(o + " was not called"), a[0];
      }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
        a = arguments;
      }, i.always(function() {
        void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, 
        hn.push(o)), a && he.isFunction(r) && r(a[0]), a = r = void 0;
      }), "script";
    }
  }), he.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) {
      return null;
    }
    "boolean" == typeof t && (n = t, t = !1), t = t || ie;
    var i = xe.exec(e), o = !n && [];
    return i ? [ t.createElement(i[1]) ] : (i = v([ e ], t, o), o && o.length && he(o).remove(), 
    he.merge([], i.childNodes));
  };
  var gn = he.fn.load;
  he.fn.load = function(e, t, n) {
    if ("string" != typeof e && gn) {
      return gn.apply(this, arguments);
    }
    var i, o, r, a = this, s = e.indexOf(" ");
    return s > -1 && (i = he.trim(e.slice(s, e.length)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, 
    t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && he.ajax({
      url: e,
      type: o || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      r = arguments, a.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e);
    }).always(n && function(e, t) {
      a.each(function() {
        n.apply(this, r || [ e.responseText, t, e ]);
      });
    }), this;
  }, he.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
    he.fn[t] = function(e) {
      return this.on(t, e);
    };
  }), he.expr.filters.animated = function(e) {
    return he.grep(he.timers, function(t) {
      return e === t.elem;
    }).length;
  }, he.offset = {
    setOffset: function(e, t, n) {
      var i, o, r, a, s, l, c = he.css(e, "position"), u = he(e), d = {};
      "static" === c && (e.style.position = "relative"), s = u.offset(), r = he.css(e, "top"), 
      l = he.css(e, "left"), ("absolute" === c || "fixed" === c) && he.inArray("auto", [ r, l ]) > -1 ? (a = (i = u.position()).top, 
      o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), 
      null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), 
      "using" in t ? t.using.call(e, d) : u.css(d);
    }
  }, he.fn.extend({
    offset: function(e) {
      if (arguments.length) {
        return void 0 === e ? this : this.each(function(t) {
          he.offset.setOffset(this, e, t);
        });
      }
      var t, n, i = {
        top: 0,
        left: 0
      }, o = this[0], r = o && o.ownerDocument;
      return r ? (t = r.documentElement, he.contains(t, o) ? (void 0 !== o.getBoundingClientRect && (i = o.getBoundingClientRect()), 
      n = te(r), {
        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : i) : void 0;
    },
    position: function() {
      if (this[0]) {
        var e, t, n = {
          top: 0,
          left: 0
        }, i = this[0];
        return "fixed" === he.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), 
        t = this.offset(), he.nodeName(e[0], "html") || (n = e.offset()), n.top += he.css(e[0], "borderTopWidth", !0), 
        n.left += he.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - he.css(i, "marginTop", !0),
          left: t.left - n.left - he.css(i, "marginLeft", !0)
        };
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && !he.nodeName(e, "html") && "static" === he.css(e, "position"); ) {
          e = e.offsetParent;
        }
        return e || gt;
      });
    }
  }), he.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = /Y/.test(t);
    he.fn[e] = function(i) {
      return Ie(this, function(e, i, o) {
        var r = te(e);
        if (void 0 === o) {
          return r ? t in r ? r[t] : r.document.documentElement[i] : e[i];
        }
        r ? r.scrollTo(n ? he(r).scrollLeft() : o, n ? o : he(r).scrollTop()) : e[i] = o;
      }, e, i, arguments.length, null);
    };
  }), he.each([ "top", "left" ], function(e, t) {
    he.cssHooks[t] = N(de.pixelPosition, function(e, n) {
      if (n) {
        return n = vt(e, t), ht.test(n) ? he(e).position()[t] + "px" : n;
      }
    });
  }), he.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    he.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, i) {
      he.fn[i] = function(i, o) {
        var r = arguments.length && (n || "boolean" != typeof i), a = n || (!0 === i || !0 === o ? "margin" : "border");
        return Ie(this, function(t, n, i) {
          var o;
          return he.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
          Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, a) : he.style(t, n, i, a);
        }, t, r ? i : void 0, r, null);
      };
    });
  }), he.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function(e, t) {
      return this.off(e, null, t);
    },
    delegate: function(e, t, n, i) {
      return this.on(t, e, n, i);
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), he.fn.size = function() {
    return this.length;
  }, he.fn.andSelf = he.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return he;
  });
  var mn = e.jQuery, vn = e.$;
  return he.noConflict = function(t) {
    return e.$ === he && (e.$ = vn), t && e.jQuery === he && (e.jQuery = mn), he;
  }, t || (e.jQuery = e.$ = he), he;
});

var Jigsaw$ = $.noConflict(!0);

(function(e) {
  var t = function() {
    var e = (new Date).getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
      var n = (e + 16 * Math.random()) % 16 | 0;
      return e = Math.floor(e / 16), ("x" == t ? n : 7 & n | 8).toString(16);
    });
  }, n = {
    host: "jigsaw.vitalsource.com",
    protocol: "https:",
    createPageViewer: function(t, n) {
      var i = {}, o = {};
      e.extend(!0, i, this.socketOptions), e.extend(!0, o, this.socketMethods);
      var r = this.host, a = this.protocol;
      /^\s*$/.test(a) && (a = window.location.protocol), /\/\/$/.test(a) || (a += "//"), 
      /^\s*$/.test(r) || (r = a + r);
      var s, l = !1;
      if ((t.start || t.end) && (l = this.getContentRange(t), t.url && (t.url = !1, l.cfi ? t.cfi = l.startBase || l.endBase : l.page && (t.page = l.startPage || l.endPage))), 
      t.url) {
        var c = document.createElement("a");
        c.href = t.url;
        var u = c.pathname + c.hash;
        /^\//.test(u) || (u = "/" + u), s = r + u;
      } else if (s = r + "/books/" + t.vbid, t.cfi) {
        var d = t.cfi;
        if (l.cfi && (l.startBase || l.endBase)) {
          var f = d.split("!")[0];
          l.startBase && (Jigsaw.CFIUtils.compareCFIs(l.startBase, f) > 0 || !l.endBase) ? d = l.startBase : l.endBase && (Jigsaw.CFIUtils.compareCFIs(l.endBase, f) < 0 || !l.startBase) && (d = l.endBase);
        }
        /^\//.test(d) || (d = "/" + d), s += "/cfi" + d;
      } else {
        t.page ? l.page ? (l.startPage && t.page < l.startPage ? t.page = l.startPage : l.endPage && t.page > l.endPage && (t.page = l.endPage), 
        s += "/pageid/" + t.page) : (s += "/pages/" + t.page, -1 === [ "recent", "first" ].indexOf(t.page) && (s += "/number")) : l.cfi ? (t.cfi = l.startBase || l.endBase, 
        /^\//.test(d) || (d = "/" + d), s += "/cfi" + t.cfi) : l.page && (t.page = l.startBase || l.endBase, 
        s += "/pageid/" + t.page);
      }
      var h = [];
      if (t.authToken && h.push("auth_token=" + t.authToken), t.brand && h.push("jigsaw_brand=" + t.brand), 
      void 0 === t.dpsOn ? h.push("dps_on=false") : h.push("dps_on=" + t.dpsOn), t.autofocus = void 0 === t.autofocus || t.autofocus, 
      h.length > 0) {
        var p = new URL(s), g = "?" + h.join("&");
        s = p.origin + p.pathname + g, p.hash && (s += p.hash);
      }
      i.remote = s, i.container = t.el, i.onReady = function() {
        e("#" + t.el + " iframe").attr({
          height: "100%",
          width: "100%",
          scrolling: "no",
          title: "Entering Book Content",
          webkitallowfullscreen: "true",
          mozallowfullscreen: "true"
        });
      };
      var m = new Jigsaw.Viewer(t, i, o);
      for (var v in o.local) {
        o.local[v].scope = m;
      }
      var y = function() {
        var e = new easyXDM.Rpc(i, o);
        m.setSocket(e), Jigsaw.addViewer(m);
        var r = function(e, i) {
          if (t.disableLinkClicks && m.Viewport.disableLinkClicks(), n) {
            var o = {
              data: i
            };
            for (var r in i) {
              i.hasOwnProperty(r) && (o[r] = i[r]);
            }
            o.data.settings = t, n(new Jigsaw.Response(o));
          }
        }, a = function() {
          if (n) {
            var e = {
              status: "error",
              code: 401,
              data: {
                code: 401
              }
            };
            n(new Jigsaw.Response(e));
          }
        };
        m.bind("viewer:create", r), m.bind("viewer:unauthorized", a), m.bind("viewer:recreate", function() {
          m.recreate.apply(m, arguments);
        }), m.once("page:ready", function(e, t) {
          t.Viewport.setAutofocus(e.autofocus), t.Snippet.enter(e);
        }.bind(this, t, m));
      };
      return y(), m;
    },
    getContentRange: function(e) {
      if (null == e.start && (e.start = ""), null == e.end && (e.end = ""), "/" === e.start[0] || "/" === e.end[0]) {
        var t = e.start.split("!"), n = e.end.split("!"), i = {
          cfi: !0,
          startBase: t.length >= 1 ? t[0] : "",
          startPath: t.length > 1 && t[1],
          endBase: n.length >= 1 ? n[0] : "",
          endPath: n.length > 1 && n[1]
        };
        return i.startPath || i.endPath || (i.startPath = "/4"), i;
      }
      var o = parseInt(e.start, 10), r = parseInt(e.end, 10);
      return {
        page: !0,
        startPage: NaN !== o && o,
        endPage: NaN !== r && r
      };
    },
    goTo: function(e, t, n) {
      this.createPageViewer({
        url: e,
        el: "vst-iframe"
      }, n);
    },
    getVSTIFrame: function(t) {
      t(e("#vst-iframe iframe"));
    },
    resizeJigsawIFrame: function() {
      this.getVSTIFrame(function(t) {
        e(t).css("width", "100%"), e(t).css("height", "100%"), e(t).css("width", e(t).width()), 
        e(t).css("height", e(t).height());
      });
    },
    Viewer: function(e, n, i) {
      null == e && (e = {}), this.settings = e, this.Book = new Jigsaw.Book(this.settings), 
      this.User = new Jigsaw.User(this.settings), this.Viewport = new Jigsaw.Viewport(this.settings), 
      this.Snippet = new Jigsaw.Snippet(this.settings), this.TTS = Jigsaw.getTTSContext(this), 
      this.uuid = t(), this.socketOptions = n, this.socketMethods = i, this.setSocket(this.settings.socket);
    }
  };
  n.Viewer.prototype.setSocket = function(e) {
    this.socket = e, this.Book.socket = e, this.User.socket = e, this.Viewport.socket = e, 
    this.Snippet.socket = e;
  }, n.Viewer.prototype.destroy = function() {
    var e = this;
    Jigsaw.removeViewer(e), this.socket && this.socket.cleanupBeforeDestroy.call(this, function() {
      e.socket.destroy(), delete e.socket, delete e.Book, delete e.User, delete e.Snippet;
    }), this.TTS.destroy();
  }, n.Viewer.prototype.recreate = function() {
    this.socket.destroy();
    var t = new easyXDM.Rpc(this.socketOptions, this.socketMethods);
    e("#" + this.socketOptions.el + " iframe").attr({
      height: "100%",
      width: "100%",
      scrolling: "no",
      title: "Entering Book Content",
      webkitallowfullscreen: "true",
      mozallowfullscreen: "true"
    }), this.setSocket(t);
  }, n.Viewer.prototype.setupSecureToken = function(e) {
    this.socket.setupSecureToken(e);
  }, n.Labs = {}, n.Book = function(e) {
    null == e && (e = {}), this.vbid = e.vbid, this.socket = e.socket;
  }, n.Email = function() {}, n.User = function() {}, n.Snippet = function() {
    this.getContentRange = function(e) {
      return Jigsaw.getContentRange(e);
    };
  }, n.Viewport = function(e) {
    null == e && (e = {}), this.socket = e.socket, this.zoomDisabled = function() {
      return !!e.zoomDisabled;
    }, this.swipeDisabled = function() {
      return !!e.swipeDisabled;
    }, this.highlightsEnabled = function() {
      return !!e.highlightsEnabled;
    }, this.noteIcon = function() {
      return e.noteIcon || {};
    }, this.getImageButtonConfig = function() {
      return e.imageButtons || {
        featureAvailable: !1
      };
    }, this.scrollTo = function(e, t) {
      this.socket.scrollTo.apply(this, [ e, t, function() {} ]);
    };
  }, this.Jigsaw = n;
}).call(this, Jigsaw$), setInterval(function() {
  Jigsaw.resizeJigsawIFrame();
}, 1e3), function(e, t, n, i, o, r) {
  function a(e, t) {
    var n = typeof e[t];
    return "function" == n || !("object" != n || !e[t]) || "unknown" == n;
  }
  function s(e, t) {
    return !("object" != typeof e[t] || !e[t]);
  }
  function l(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  }
  function c() {
    var e, t = "Shockwave Flash", n = "application/x-shockwave-flash";
    if (!w(navigator.plugins) && "object" == typeof navigator.plugins[t]) {
      var i = navigator.plugins[t].description;
      i && !w(navigator.mimeTypes) && navigator.mimeTypes[n] && navigator.mimeTypes[n].enabledPlugin && (M = i.match(/\d+/g));
    }
    if (!M) {
      try {
        e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), M = Array.prototype.slice.call(e.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1), 
        e = null;
      } catch (e) {}
    }
    if (!M) {
      return !1;
    }
    var o = parseInt(M[0], 10), r = parseInt(M[1], 10);
    return A = o > 9 && r > 0, !0;
  }
  function u() {
    if (!V) {
      V = !0;
      for (var e = 0; e < W.length; e++) {
        W[e]();
      }
      W.length = 0;
    }
  }
  function d(e, t) {
    V ? e.call(t) : W.push(function() {
      e.call(t);
    });
  }
  function f() {
    var e = parent;
    if ("" !== j) {
      for (var t = 0, n = j.split("."); t < n.length; t++) {
        e = e[n[t]];
      }
    }
    return e.easyXDM;
  }
  function h(t) {
    return e.easyXDM = U, (j = t) && (F = "easyXDM_" + j.replace(".", "_") + "_"), O;
  }
  function p(e) {
    return e.match(P)[3];
  }
  function g(e) {
    return e.match(P)[4] || "";
  }
  function m(e) {
    var t = e.toLowerCase().match(P);
    if (!t) {
      return "";
    }
    var n = t[2], i = t[3], o = t[4] || "";
    return ("http:" == n && ":80" == o || "https:" == n && ":443" == o) && (o = ""), 
    n + "//" + i + o;
  }
  function v(e) {
    if (!(e = e.replace(_, "$1/")).match(/^(http||https):\/\//)) {
      var t = "/" === e.substring(0, 1) ? "" : n.pathname;
      "/" !== t.substring(t.length - 1) && (t = t.substring(0, t.lastIndexOf("/") + 1)), 
      e = n.protocol + "//" + n.host + t + e;
    }
    for (;H.test(e); ) {
      e = e.replace(H, "");
    }
    return e;
  }
  function y(e, t) {
    var n = "", i = e.indexOf("#");
    -1 !== i && (n = e.substring(i), e = e.substring(0, i));
    var o = [];
    for (var a in t) {
      t.hasOwnProperty(a) && o.push(a + "=" + r(t[a]));
    }
    return e + (I ? "#" : -1 == e.indexOf("?") ? "?" : "&") + o.join("&") + n;
  }
  function w(e) {
    return void 0 === e;
  }
  function b(e, t, n) {
    var i;
    for (var o in t) {
      t.hasOwnProperty(o) && (o in e ? "object" == typeof (i = t[o]) ? b(e[o], i, n) : n || (e[o] = t[o]) : e[o] = t[o]);
    }
    return e;
  }
  function k() {
    var e = t.body.appendChild(t.createElement("form")), n = e.appendChild(t.createElement("input"));
    n.name = F + "TEST" + L, E = n !== e.elements[n.name], t.body.removeChild(e);
  }
  function x(e) {
    var n;
    w(E) && k(), (n = E ? t.createElement('<iframe name="' + e.props.name + '" allowfullscreen="allowfullscreen" />') : t.createElement("IFRAME")).id = n.name = e.props.name, 
    delete e.props.name, n.allowFullscreen = "allowfullscreen", "string" == typeof e.container && (e.container = t.getElementById(e.container)), 
    e.container || (b(n.style, {
      position: "absolute",
      top: "-2000px",
      left: "0px"
    }), e.container = t.body);
    var i = e.props.src;
    if (e.props.src = "javascript:false", b(n, e.props), n.border = n.frameBorder = 0, 
    n.allowTransparency = !0, e.container.appendChild(n), e.onLoad && R(n, "load", e.onLoad), 
    e.usePost) {
      var o, r = e.container.appendChild(t.createElement("form"));
      if (r.target = n.name, r.action = i, r.method = "POST", "object" == typeof e.usePost) {
        for (var a in e.usePost) {
          e.usePost.hasOwnProperty(a) && (E ? o = t.createElement('<input name="' + a + '"/>') : (o = t.createElement("INPUT")).name = a, 
          o.value = e.usePost[a], r.appendChild(o));
        }
      }
      r.submit(), r.parentNode.removeChild(r);
    } else {
      n.src = i;
    }
    return e.props.src = i, n;
  }
  function T(e, t) {
    "string" == typeof e && (e = [ e ]);
    for (var n, i = e.length; i--; ) {
      if (n = e[i], (n = new RegExp("^" == n.substr(0, 1) ? n : "^" + n.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$")).test(t)) {
        return !0;
      }
    }
    return !1;
  }
  function C(i) {
    var o, r = i.protocol;
    if (i.isHost = i.isHost || w(X.xdm_p), I = i.hash || !1, i.props || (i.props = {}), 
    i.isHost) {
      i.remote = v(i.remote), i.channel = i.channel || "default" + L++, i.secret = Math.random().toString(16).substring(2), 
      w(r) && (r = m(n.href) == m(i.remote) ? "4" : a(e, "postMessage") || a(t, "postMessage") ? "1" : i.swf && a(e, "ActiveXObject") && c() ? "6" : "Gecko" === navigator.product && "frameElement" in e && -1 == navigator.userAgent.indexOf("WebKit") ? "5" : i.remoteHelper ? "2" : "0");
    } else if (i.channel = X.xdm_c.replace(/["'<>\\]/g, ""), i.secret = X.xdm_s, i.remote = X.xdm_e.replace(/["'<>\\]/g, ""), 
    r = X.xdm_p, i.acl && !T(i.acl, i.remote)) {
      throw new Error("Access denied for " + i.remote);
    }
    switch (i.protocol = r, r) {
     case "0":
      if (b(i, {
        interval: 100,
        delay: 2e3,
        useResize: !0,
        useParent: !1,
        usePolling: !1
      }, !0), i.isHost) {
        if (!i.local) {
          for (var s, l = n.protocol + "//" + n.host, u = t.body.getElementsByTagName("img"), d = u.length; d--; ) {
            if ((s = u[d]).src.substring(0, l.length) === l) {
              i.local = s.src;
              break;
            }
          }
          i.local || (i.local = e);
        }
        var f = {
          xdm_c: i.channel,
          xdm_p: 0
        };
        i.local === e ? (i.usePolling = !0, i.useParent = !0, i.local = n.protocol + "//" + n.host + n.pathname + n.search, 
        f.xdm_e = i.local, f.xdm_pa = 1) : f.xdm_e = v(i.local), i.container && (i.useResize = !1, 
        f.xdm_po = 1), i.remote = y(i.remote, f);
      } else {
        b(i, {
          channel: X.xdm_c,
          remote: X.xdm_e,
          useParent: !w(X.xdm_pa),
          usePolling: !w(X.xdm_po),
          useResize: !i.useParent && i.useResize
        });
      }
      o = [ new O.stack.HashTransport(i), new O.stack.ReliableBehavior({}), new O.stack.QueueBehavior({
        encode: !0,
        maxLength: 4e3 - i.remote.length
      }), new O.stack.VerifyBehavior({
        initiate: i.isHost
      }) ];
      break;

     case "1":
      o = [ new O.stack.PostMessageTransport(i) ];
      break;

     case "2":
      i.isHost && (i.remoteHelper = v(i.remoteHelper)), o = [ new O.stack.NameTransport(i), new O.stack.QueueBehavior, new O.stack.VerifyBehavior({
        initiate: i.isHost
      }) ];
      break;

     case "3":
      o = [ new O.stack.NixTransport(i) ];
      break;

     case "4":
      o = [ new O.stack.SameOriginTransport(i) ];
      break;

     case "5":
      o = [ new O.stack.FrameElementTransport(i) ];
      break;

     case "6":
      M || c(), o = [ new O.stack.FlashTransport(i) ];
    }
    return o.push(new O.stack.QueueBehavior({
      lazy: i.lazy,
      remove: !0
    })), o;
  }
  function S(e) {
    for (var t, n = {
      incoming: function(e, t) {
        this.up.incoming(e, t);
      },
      outgoing: function(e, t) {
        this.down.outgoing(e, t);
      },
      callback: function(e) {
        this.up.callback(e);
      },
      init: function() {
        this.down.init();
      },
      destroy: function() {
        this.down.destroy();
      }
    }, i = 0, o = e.length; i < o; i++) {
      b(t = e[i], n, !0), 0 !== i && (t.down = e[i - 1]), i !== o - 1 && (t.up = e[i + 1]);
    }
    return t;
  }
  function J(e) {
    e.up.down = e.down, e.down.up = e.up, e.up = e.down = null;
  }
  var E, M, A, R, N, B = this, L = Math.floor(1e4 * Math.random()), D = Function.prototype, P = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/, H = /[\-\w]+\/\.\.\//, _ = /([^:])\/\//g, j = "", O = {}, U = e.easyXDM, F = "easyXDM_", I = !1;
  if (a(e, "addEventListener")) {
    R = function(e, t, n) {
      e.addEventListener(t, n, !1);
    }, N = function(e, t, n) {
      e.removeEventListener(t, n, !1);
    };
  } else {
    if (!a(e, "attachEvent")) {
      throw new Error("Browser not supported");
    }
    R = function(e, t, n) {
      e.attachEvent("on" + t, n);
    }, N = function(e, t, n) {
      e.detachEvent("on" + t, n);
    };
  }
  var q, V = !1, W = [];
  if ("readyState" in t ? (q = t.readyState, V = "complete" == q || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == q || "interactive" == q)) : V = !!t.body, 
  !V) {
    if (a(e, "addEventListener")) {
      R(t, "DOMContentLoaded", u);
    } else if (R(t, "readystatechange", function() {
      "complete" == t.readyState && u();
    }), t.documentElement.doScroll && e === top) {
      var $ = function() {
        if (!V) {
          try {
            t.documentElement.doScroll("left");
          } catch (e) {
            return void i($, 1);
          }
          u();
        }
      };
      $();
    }
    R(e, "load", u);
  }
  var z, X = function(e) {
    for (var t, n = {}, i = (e = e.substring(1).split("&")).length; i--; ) {
      n[(t = e[i].split("="))[0]] = o(t[1]);
    }
    return n;
  }(/xdm_e=/.test(n.search) ? n.search : n.hash), G = function() {
    var e = {}, t = {
      a: [ 1, 2, 3 ]
    }, n = '{"a":[1,2,3]}';
    return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(t).replace(/\s/g, "") === n ? JSON : (Object.toJSON && Object.toJSON(t).replace(/\s/g, "") === n && (e.stringify = Object.toJSON), 
    "function" == typeof String.prototype.evalJSON && (t = n.evalJSON()).a && 3 === t.a.length && 3 === t.a[2] && (e.parse = function(e) {
      return e.evalJSON();
    }), e.stringify && e.parse ? (G = function() {
      return e;
    }, e) : null);
  };
  b(O, {
    version: "2.4.19.3",
    query: X,
    stack: {},
    apply: b,
    getJSONObject: G,
    whenReady: d,
    noConflict: h
  }), O.DomHelper = {
    on: R,
    un: N,
    requiresJSON: function(n) {
      s(e, "JSON") || t.write('<script type="text/javascript" src="' + n + '"><\/script>');
    }
  }, z = {}, O.Fn = {
    set: function(e, t) {
      z[e] = t;
    },
    get: function(e, t) {
      if (z.hasOwnProperty(e)) {
        var n = z[e];
        return t && delete z[e], n;
      }
    }
  }, O.Socket = function(e) {
    var t = S(C(e).concat([ {
      incoming: function(t, n) {
        e.onMessage(t, n);
      },
      callback: function(t) {
        e.onReady && e.onReady(t);
      }
    } ])), n = m(e.remote);
    this.origin = m(e.remote), this.destroy = function() {
      t.destroy();
    }, this.postMessage = function(e) {
      t.outgoing(e, n);
    }, t.init();
  }, O.Rpc = function(e, t) {
    if (t.local) {
      for (var n in t.local) {
        if (t.local.hasOwnProperty(n)) {
          var i = t.local[n];
          "function" == typeof i && (t.local[n] = {
            method: i
          });
        }
      }
    }
    var o = S(C(e).concat([ new O.stack.RpcBehavior(this, t), {
      callback: function(t) {
        e.onReady && e.onReady(t);
      }
    } ]));
    this.origin = m(e.remote), this.destroy = function() {
      o.destroy();
    }, o.init();
  }, O.stack.SameOriginTransport = function(e) {
    var t, o, r, a;
    return t = {
      outgoing: function(e, t, n) {
        r(e), n && n();
      },
      destroy: function() {
        o && (o.parentNode.removeChild(o), o = null);
      },
      onDOMReady: function() {
        a = m(e.remote), e.isHost ? (b(e.props, {
          src: y(e.remote, {
            xdm_e: n.protocol + "//" + n.host + n.pathname,
            xdm_c: e.channel,
            xdm_p: 4
          }),
          name: F + e.channel + "_provider"
        }), o = x(e), O.Fn.set(e.channel, function(e) {
          return r = e, i(function() {
            t.up.callback(!0);
          }, 0), function(e) {
            t.up.incoming(e, a);
          };
        })) : (r = f().Fn.get(e.channel, !0)(function(e) {
          t.up.incoming(e, a);
        }), i(function() {
          t.up.callback(!0);
        }, 0));
      },
      init: function() {
        d(t.onDOMReady, t);
      }
    };
  }, O.stack.FlashTransport = function(e) {
    function o(e) {
      i(function() {
        s.up.incoming(e, c);
      }, 0);
    }
    function a(n) {
      var i = e.swf + "?host=" + e.isHost, o = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
      O.Fn.set("flash_loaded" + n.replace(/[\-.]/g, "_"), function() {
        O.stack.FlashTransport[n].swf = u = f.firstChild;
        for (var e = O.stack.FlashTransport[n].queue, t = 0; t < e.length; t++) {
          e[t]();
        }
        e.length = 0;
      }), e.swfContainer ? f = "string" == typeof e.swfContainer ? t.getElementById(e.swfContainer) : e.swfContainer : (b((f = t.createElement("div")).style, A && e.swfNoThrottle ? {
        height: "20px",
        width: "20px",
        position: "fixed",
        right: 0,
        top: 0
      } : {
        height: "1px",
        width: "1px",
        position: "absolute",
        overflow: "hidden",
        right: 0,
        top: 0
      }), t.body.appendChild(f));
      var a = "callback=flash_loaded" + r(n.replace(/[\-.]/g, "_")) + "&proto=" + B.location.protocol + "&domain=" + r(p(B.location.href)) + "&port=" + r(g(B.location.href)) + "&ns=" + r(j);
      f.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + o + "' data='" + i + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + i + "'></param><param name='flashvars' value='" + a + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + a + "' allowScriptAccess='always' wmode='transparent' src='" + i + "' height='1' width='1'></embed></object>";
    }
    var s, l, c, u, f;
    return s = {
      outgoing: function(t, n, i) {
        u.postMessage(e.channel, t.toString()), i && i();
      },
      destroy: function() {
        try {
          u.destroyChannel(e.channel);
        } catch (e) {}
        u = null, l && (l.parentNode.removeChild(l), l = null);
      },
      onDOMReady: function() {
        c = e.remote, O.Fn.set("flash_" + e.channel + "_init", function() {
          i(function() {
            s.up.callback(!0);
          });
        }), O.Fn.set("flash_" + e.channel + "_onMessage", o), e.swf = v(e.swf);
        var t = p(e.swf), r = function() {
          O.stack.FlashTransport[t].init = !0, (u = O.stack.FlashTransport[t].swf).createChannel(e.channel, e.secret, m(e.remote), e.isHost), 
          e.isHost && (A && e.swfNoThrottle && b(e.props, {
            position: "fixed",
            right: 0,
            top: 0,
            height: "20px",
            width: "20px"
          }), b(e.props, {
            src: y(e.remote, {
              xdm_e: m(n.href),
              xdm_c: e.channel,
              xdm_p: 6,
              xdm_s: e.secret
            }),
            name: F + e.channel + "_provider"
          }), l = x(e));
        };
        O.stack.FlashTransport[t] && O.stack.FlashTransport[t].init ? r() : O.stack.FlashTransport[t] ? O.stack.FlashTransport[t].queue.push(r) : (O.stack.FlashTransport[t] = {
          queue: [ r ]
        }, a(t));
      },
      init: function() {
        d(s.onDOMReady, s);
      }
    };
  }, O.stack.PostMessageTransport = function(t) {
    function o(e) {
      if (e.origin) {
        return m(e.origin);
      }
      if (e.uri) {
        return m(e.uri);
      }
      if (e.domain) {
        return n.protocol + "//" + e.domain;
      }
      throw "Unable to retrieve the origin of the event";
    }
    function r(e) {
      var n = o(e);
      n == c && "string" == typeof e.data && e.data.substring(0, t.channel.length + 1) == t.channel + " " && a.up.incoming(e.data.substring(t.channel.length + 1), n);
    }
    var a, s, l, c;
    return a = {
      outgoing: function(e, n, i) {
        l.postMessage(t.channel + " " + e, n || c), i && i();
      },
      destroy: function() {
        N(e, "message", r), s && (l = null, s.parentNode.removeChild(s), s = null);
      },
      onDOMReady: function() {
        if (c = m(t.remote), t.isHost) {
          var o = function(n) {
            n.data == t.channel + "-ready" && (l = "postMessage" in s.contentWindow ? s.contentWindow : s.contentWindow.document, 
            N(e, "message", o), R(e, "message", r), i(function() {
              a.up.callback(!0);
            }, 0));
          };
          R(e, "message", o), b(t.props, {
            src: y(t.remote, {
              xdm_e: m(n.href),
              xdm_c: t.channel,
              xdm_p: 1
            }),
            name: F + t.channel + "_provider"
          }), s = x(t);
        } else {
          R(e, "message", r), (l = "postMessage" in e.parent ? e.parent : e.parent.document).postMessage(t.channel + "-ready", c), 
          i(function() {
            a.up.callback(!0);
          }, 0);
        }
      },
      init: function() {
        d(a.onDOMReady, a);
      }
    };
  }, O.stack.FrameElementTransport = function(o) {
    var r, a, s, l;
    return r = {
      outgoing: function(e, t, n) {
        s.call(this, e), n && n();
      },
      destroy: function() {
        a && (a.parentNode.removeChild(a), a = null);
      },
      onDOMReady: function() {
        l = m(o.remote), o.isHost ? (b(o.props, {
          src: y(o.remote, {
            xdm_e: m(n.href),
            xdm_c: o.channel,
            xdm_p: 5
          }),
          name: F + o.channel + "_provider"
        }), (a = x(o)).fn = function(e) {
          return delete a.fn, s = e, i(function() {
            r.up.callback(!0);
          }, 0), function(e) {
            r.up.incoming(e, l);
          };
        }) : (t.referrer && m(t.referrer) != X.xdm_e && (e.top.location = X.xdm_e), s = e.frameElement.fn(function(e) {
          r.up.incoming(e, l);
        }), r.up.callback(!0));
      },
      init: function() {
        d(r.onDOMReady, r);
      }
    };
  }, O.stack.NameTransport = function(e) {
    function t(t) {
      var n = e.remoteHelper + (s ? "#_3" : "#_2") + e.channel;
      l.contentWindow.sendMessage(t, n);
    }
    function n() {
      s ? 2 != ++u && s || a.up.callback(!0) : (t("ready"), a.up.callback(!0));
    }
    function o(e) {
      a.up.incoming(e, h);
    }
    function r() {
      f && i(function() {
        f(!0);
      }, 0);
    }
    var a, s, l, c, u, f, h, p;
    return a = {
      outgoing: function(e, n, i) {
        f = i, t(e);
      },
      destroy: function() {
        l.parentNode.removeChild(l), l = null, s && (c.parentNode.removeChild(c), c = null);
      },
      onDOMReady: function() {
        s = e.isHost, u = 0, h = m(e.remote), e.local = v(e.local), s ? (O.Fn.set(e.channel, function(t) {
          s && "ready" === t && (O.Fn.set(e.channel, o), n());
        }), p = y(e.remote, {
          xdm_e: e.local,
          xdm_c: e.channel,
          xdm_p: 2
        }), b(e.props, {
          src: p + "#" + e.channel,
          name: F + e.channel + "_provider"
        }), c = x(e)) : (e.remoteHelper = e.remote, O.Fn.set(e.channel, o));
        var t = function() {
          var o = l || this;
          N(o, "load", t), O.Fn.set(e.channel + "_load", r), function e() {
            "function" == typeof o.contentWindow.sendMessage ? n() : i(e, 50);
          }();
        };
        l = x({
          props: {
            src: e.local + "#_4" + e.channel
          },
          onLoad: t
        });
      },
      init: function() {
        d(a.onDOMReady, a);
      }
    };
  }, O.stack.HashTransport = function(t) {
    function n(e) {
      if (g) {
        var n = t.remote + "#" + h++ + "_" + e;
        (l || !v ? g.contentWindow : g).location = n;
      }
    }
    function o(e) {
      f = e, s.up.incoming(f.substring(f.indexOf("_") + 1), y);
    }
    function r() {
      if (p) {
        var e = p.location.href, t = "", n = e.indexOf("#");
        -1 != n && (t = e.substring(n)), t && t != f && o(t);
      }
    }
    function a() {
      c = setInterval(r, u);
    }
    var s, l, c, u, f, h, p, g, v, y;
    return s = {
      outgoing: function(e) {
        n(e);
      },
      destroy: function() {
        e.clearInterval(c), !l && v || g.parentNode.removeChild(g), g = null;
      },
      onDOMReady: function() {
        if (l = t.isHost, u = t.interval, f = "#" + t.channel, h = 0, v = t.useParent, y = m(t.remote), 
        l) {
          if (b(t.props, {
            src: t.remote,
            name: F + t.channel + "_provider"
          }), v) {
            t.onLoad = function() {
              p = e, a(), s.up.callback(!0);
            };
          } else {
            var n = 0, o = t.delay / 50;
            !function e() {
              if (++n > o) {
                throw new Error("Unable to reference listenerwindow");
              }
              try {
                p = g.contentWindow.frames[F + t.channel + "_consumer"];
              } catch (e) {}
              p ? (a(), s.up.callback(!0)) : i(e, 50);
            }();
          }
          g = x(t);
        } else {
          p = e, a(), v ? (g = parent, s.up.callback(!0)) : (b(t, {
            props: {
              src: t.remote + "#" + t.channel + new Date,
              name: F + t.channel + "_consumer"
            },
            onLoad: function() {
              s.up.callback(!0);
            }
          }), g = x(t));
        }
      },
      init: function() {
        d(s.onDOMReady, s);
      }
    };
  }, O.stack.ReliableBehavior = function() {
    var e, t, n = 0, i = 0, o = "";
    return e = {
      incoming: function(r, a) {
        var s = r.indexOf("_"), l = r.substring(0, s).split(",");
        r = r.substring(s + 1), l[0] == n && (o = "", t && t(!0)), r.length > 0 && (e.down.outgoing(l[1] + "," + n + "_" + o, a), 
        i != l[1] && (i = l[1], e.up.incoming(r, a)));
      },
      outgoing: function(r, a, s) {
        o = r, t = s, e.down.outgoing(i + "," + ++n + "_" + r, a);
      }
    };
  }, O.stack.QueueBehavior = function(e) {
    function t() {
      if (e.remove && 0 === s.length) {
        J(n);
      } else if (!l && 0 !== s.length && !a) {
        l = !0;
        var o = s.shift();
        n.down.outgoing(o.data, o.origin, function(e) {
          l = !1, o.callback && i(function() {
            o.callback(e);
          }, 0), t();
        });
      }
    }
    var n, a, s = [], l = !0, c = "", u = 0, d = !1, f = !1;
    return n = {
      init: function() {
        w(e) && (e = {}), e.maxLength && (u = e.maxLength, f = !0), e.lazy ? d = !0 : n.down.init();
      },
      callback: function(e) {
        l = !1;
        var i = n.up;
        t(), i.callback(e);
      },
      incoming: function(t, i) {
        if (f) {
          var r = t.indexOf("_"), a = parseInt(t.substring(0, r), 10);
          c += t.substring(r + 1), 0 === a && (e.encode && (c = o(c)), n.up.incoming(c, i), 
          c = "");
        } else {
          n.up.incoming(t, i);
        }
      },
      outgoing: function(i, o, a) {
        e.encode && (i = r(i));
        var l, c = [];
        if (f) {
          for (;0 !== i.length; ) {
            l = i.substring(0, u), i = i.substring(l.length), c.push(l);
          }
          for (;l = c.shift(); ) {
            s.push({
              data: c.length + "_" + l,
              origin: o,
              callback: 0 === c.length ? a : null
            });
          }
        } else {
          s.push({
            data: i,
            origin: o,
            callback: a
          });
        }
        d ? n.down.init() : t();
      },
      destroy: function() {
        a = !0, n.down.destroy();
      }
    };
  }, O.stack.VerifyBehavior = function(e) {
    function t() {
      i = Math.random().toString(16).substring(2), n.down.outgoing(i);
    }
    var n, i, o;
    return n = {
      incoming: function(r, a) {
        var s = r.indexOf("_");
        -1 === s ? r === i ? n.up.callback(!0) : o || (o = r, e.initiate || t(), n.down.outgoing(r)) : r.substring(0, s) === o && n.up.incoming(r.substring(s + 1), a);
      },
      outgoing: function(e, t, o) {
        n.down.outgoing(i + "_" + e, t, o);
      },
      callback: function() {
        e.initiate && t();
      }
    };
  }, O.stack.RpcBehavior = function(e, t) {
    function n(e) {
      e.jsonrpc = "2.0", r.down.outgoing(a.stringify(e));
    }
    function i(e, t) {
      var i = Array.prototype.slice;
      return function() {
        var o, r = arguments.length, a = {
          method: t
        };
        r > 0 && "function" == typeof arguments[r - 1] ? (r > 1 && "function" == typeof arguments[r - 2] ? (o = {
          success: arguments[r - 2],
          error: arguments[r - 1]
        }, a.params = i.call(arguments, 0, r - 2)) : (o = {
          success: arguments[r - 1]
        }, a.params = i.call(arguments, 0, r - 1)), c["" + ++s] = o, a.id = s) : a.params = i.call(arguments, 0), 
        e.namedParams && 1 === a.params.length && (a.params = a.params[0]), n(a);
      };
    }
    function o(e, t, i, o) {
      if (i) {
        var r, a;
        t ? (r = function(e) {
          r = D, n({
            id: t,
            result: e
          });
        }, a = function(e, i) {
          a = D;
          var o = {
            id: t,
            error: {
              code: -32099,
              message: e
            }
          };
          i && (o.error.data = i), n(o);
        }) : r = a = D, l(o) || (o = [ o ]);
        try {
          var s = i.method.apply(i.scope, o.concat([ r, a ]));
          w(s) || r(s);
        } catch (e) {
          a(e.message);
        }
      } else {
        t && n({
          id: t,
          error: {
            code: -32601,
            message: "Procedure not found."
          }
        });
      }
    }
    var r, a = t.serializer || G(), s = 0, c = {};
    return r = {
      incoming: function(e) {
        var i = a.parse(e);
        if (i.method) {
          t.handle ? t.handle(i, n) : o(i.method, i.id, t.local[i.method], i.params);
        } else {
          var r = c[i.id];
          i.error ? r.error && r.error(i.error) : r.success && r.success(i.result), delete c[i.id];
        }
      },
      init: function() {
        if (t.remote) {
          for (var n in t.remote) {
            t.remote.hasOwnProperty(n) && (e[n] = i(t.remote[n], n));
          }
        }
        r.down.init();
      },
      destroy: function() {
        for (var n in t.remote) {
          t.remote.hasOwnProperty(n) && e.hasOwnProperty(n) && delete e[n];
        }
        r.down.destroy();
      }
    };
  }, B.easyXDM = O;
}(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent), 
function() {
  easyXDM.DomHelper.requiresJSON("/assets/easyXDM/json2-38bfab4a814dce49c74d3844667d29315813c690df81cf324c9f870c14942527.js"), 
  Jigsaw.socketMethods = {
    local: {},
    remote: {
      scrollTo: {},
      snippetHasNextPage: {},
      snippetHasPreviousPage: {},
      searchInSnippet: {},
      waldoSearchInSnippet: {},
      setupSecureToken: {}
    }
  }, Jigsaw.socketOptions = {};
  var e = function(e, t) {
    return [ function(n) {
      if (e) {
        if (t) {
          var i = {};
          i[t] = n, n = i;
        }
        var o = new Jigsaw.Response({
          status: "ok",
          data: n
        });
        e(o);
      }
    }, function(t) {
      if (e) {
        var n = t.data || {};
        for (var i in n.message = t.message, n.status = "error", n.data = {}, t.data) {
          "data" !== i && (n.data[i] = t.data[i]);
        }
        var o = new Jigsaw.Response(n);
        e(o);
      }
    } ];
  };
  Jigsaw.addRemoteMethod = function(t, n, i) {
    var o = (i = i || {}).handler || function() {
      this.socket[t].apply(this, arguments);
    };
    this.socketMethods.remote[t] = {}, n.prototype[t] = function() {
      var t = Array.prototype.slice.call(arguments), n = function() {}, r = t[t.length - 1];
      r && "function" == typeof r && (n = t.pop()), t = t.concat(e(n, i.dataAttr)), o.apply(this, t);
    };
  }, Jigsaw.addLocalSocketMethods = function(e) {
    for (var t in e) {
      e.hasOwnProperty(t) && (Jigsaw.socketMethods.local[t] = e[t]);
    }
  }, Jigsaw.Utils = {
    defaultCallbacks: e
  };
}.call(this), function() {
  for (var e = {
    ready: function() {},
    zoomDisabled: {
      method: function(e) {
        e(this.Viewport.zoomDisabled());
      }
    },
    swipeDisabled: {
      method: function(e) {
        e(this.Viewport.swipeDisabled());
      }
    },
    highlightsEnabled: {
      method: function(e) {
        e(this.Viewport.highlightsEnabled());
      }
    },
    getContentRange: {
      method: function(e, t) {
        t(this.Snippet.getContentRange(e));
      }
    },
    topURL: function(e) {
      e(window.location.toString());
    },
    noteIcon: {
      method: function(e) {
        e(this.Viewport.noteIcon());
      }
    },
    getImageButtonConfig: {
      method: function(e) {
        e(this.Viewport.getImageButtonConfig());
      }
    }
  }, t = [ "getContainerDimensions", "focus", "touchEventsEnabled" ], n = t.length - 1; n >= 0; n--) {
    Jigsaw.socketMethods.remote[t[n]] = {};
  }
  Jigsaw.addLocalSocketMethods(e);
}.call(this, Jigsaw$), function() {
  this.Jigsaw.addRemoteMethod("getPageBreaks", this.Jigsaw.Book, {
    dataAttr: "pagelist"
  }), this.Jigsaw.addRemoteMethod("getTOC", this.Jigsaw.Book, {
    dataAttr: "toc"
  }), this.Jigsaw.addRemoteMethod("getEPUBFile", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("getSpine", this.Jigsaw.Book, {
    dataAttr: "spine"
  }), this.Jigsaw.addRemoteMethod("getFigures", this.Jigsaw.Book, {
    dataAttr: "figures"
  }), this.Jigsaw.addRemoteMethod("getAncillaries", this.Jigsaw.Book, {
    dataAttr: "ancillaries"
  }), this.Jigsaw.addRemoteMethod("setBookmark", this.Jigsaw.Book, {
    dataAttr: "bookmark"
  }), this.Jigsaw.addRemoteMethod("deleteBookmark", this.Jigsaw.Book, {
    dataAttr: "bookmark"
  }), this.Jigsaw.addRemoteMethod("getBookmarks", this.Jigsaw.Book, {
    dataAttr: "bookmarks"
  }), this.Jigsaw.addRemoteMethod("getNotes", this.Jigsaw.Book, {
    dataAttr: "notes"
  }), this.Jigsaw.addRemoteMethod("addNote", this.Jigsaw.Book, {
    dataAttr: "note"
  }), this.Jigsaw.addRemoteMethod("deleteNote", this.Jigsaw.Book, {
    dataAttr: "note"
  }), this.Jigsaw.addRemoteMethod("updateNote", this.Jigsaw.Book, {
    dataAttr: "note"
  }), this.Jigsaw.addRemoteMethod("goToCFI", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("goToURL", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("goToFullURL", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("goToPage", this.Jigsaw.Book, {
    dataAttr: "page"
  }), this.Jigsaw.addRemoteMethod("goToFigure", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("goToSearchResult", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("goToBookmark", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("highlightTerm", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("focusTerm", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("reloadPage", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("unhighlightTerms", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("goToHighlight", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("goToNextPage", this.Jigsaw.Book, {
    dataAttr: "page"
  }), this.Jigsaw.addRemoteMethod("goToPreviousPage", this.Jigsaw.Book, {
    dataAttr: "page"
  }), this.Jigsaw.addRemoteMethod("hasNextPage", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("hasPreviousPage", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("getNextPage", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("getPreviousPage", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("getThumbnails", this.Jigsaw.Book, {
    dataAttr: "thumbnails"
  }), this.Jigsaw.addRemoteMethod("getCitationInfo", this.Jigsaw.Book, {
    dataAttr: "citation"
  }), this.Jigsaw.addRemoteMethod("getHighlights", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("addHighlight", this.Jigsaw.Book, {
    dataAttr: "highlight"
  }), this.Jigsaw.addRemoteMethod("searchHighlights", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("highlightCurrentSelection", this.Jigsaw.Book, {
    dataAttr: "highlight"
  }), this.Jigsaw.addRemoteMethod("redrawHighlights", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("focusHighlight", this.Jigsaw.Book, {
    dataAttr: "highlight"
  }), this.Jigsaw.addRemoteMethod("clearSelection", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("deleteHighlight", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("updateHighlight", this.Jigsaw.Book, {
    dataAttr: "highlight"
  }), this.Jigsaw.addRemoteMethod("stripCFIAssertions", this.Jigsaw.Book, {
    dataAttr: "cfi"
  }), this.Jigsaw.addRemoteMethod("searchContent", this.Jigsaw.Book, {
    dataAttr: "results"
  }), this.Jigsaw.addRemoteMethod("waldoSearchContent", this.Jigsaw.Book, {
    dataAttr: "results"
  }), this.Jigsaw.addRemoteMethod("getUniversalURL", this.Jigsaw.Book, {
    dataAttr: "url"
  }), this.Jigsaw.addRemoteMethod("getContainerDimensions", this.Jigsaw.Viewport), 
  this.Jigsaw.addRemoteMethod("focus", this.Jigsaw.Viewport), this.Jigsaw.addRemoteMethod("setAutofocus", this.Jigsaw.Viewport), 
  this.Jigsaw.addRemoteMethod("disableLinkClicks", this.Jigsaw.Viewport), this.Jigsaw.addRemoteMethod("setDPS", this.Jigsaw.Viewport), 
  this.Jigsaw.addRemoteMethod("touchEventsEnabled", this.Jigsaw.Viewport, {
    dataAttr: "value"
  }), this.Jigsaw.addRemoteMethod("setCursor", this.Jigsaw.Viewport, {
    dataAttr: "url"
  }), this.Jigsaw.addRemoteMethod("resetCursor", this.Jigsaw.Viewport), this.Jigsaw.addRemoteMethod("manageHighlights", this.Jigsaw.Book, {
    dataAttr: "added"
  }), this.Jigsaw.addRemoteMethod("getPositionForCFI", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("scrollToTop", this.Jigsaw.Viewport), 
  this.Jigsaw.addRemoteMethod("scrollToBottom", this.Jigsaw.Viewport), this.Jigsaw.addRemoteMethod("scrollToLeft", this.Jigsaw.Viewport), 
  this.Jigsaw.addRemoteMethod("cleanupBeforeDestroy", this.Jigsaw.Viewport), this.Jigsaw.addRemoteMethod("fitToHeight", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("fitToWidth", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("printPageRange", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("mimeoPrintPageRange", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("mimeoPrintPageRangeAsync", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("mimeoGetPrintRequest", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("mimeoClaimPrintRequest", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("getPrintHistory", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("getLifetimePages", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("getBookPrintSummary", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("getPrintLimits", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("getPageRange", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("copySelection", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("copyHighlight", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("increaseTextSize", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("decreaseTextSize", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("setTextSize", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("getTextSize", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("setFontFamily", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("addEnhancedFormattingCSS", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("removeEnhancedFormattingCSS", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("setDisplayMode", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("setPageMargin", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("setLineHeight", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("increaseZoomScale", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("decreaseZoomScale", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("setZoomScale", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("getZoomScale", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("enableScrolling", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("disableScrolling", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("dictionaryLookup", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("enter", this.Jigsaw.Snippet, {
    dataAttr: "data"
  }), this.Jigsaw.addRemoteMethod("exit", this.Jigsaw.Snippet, {
    dataAttr: "location"
  }), this.Jigsaw.addRemoteMethod("tts", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("ttsv2", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("getPreview", this.Jigsaw.Book, {
    dataAttr: "preview"
  }), this.Jigsaw.addRemoteMethod("enter", this.Jigsaw.Snippet, {
    dataAttr: "data"
  }), this.Jigsaw.addRemoteMethod("exit", this.Jigsaw.Snippet, {
    dataAttr: "location"
  }), this.Jigsaw.addRemoteMethod("isActive", this.Jigsaw.Snippet), this.Jigsaw.addRemoteMethod("getCFIForPoint", this.Jigsaw.Book), 
  this.Jigsaw.addRemoteMethod("fireCallback", this.Jigsaw.Book), this.Jigsaw.addRemoteMethod("enableImageButtons", this.Jigsaw.Viewport), 
  this.Jigsaw.addRemoteMethod("disableImageButtons", this.Jigsaw.Viewport);
}.call(this), function() {
  function e() {
    function e(e) {
      0 !== e.length && (y = e, w = 0, t());
    }
    function t() {
      i(y[w].text);
    }
    function i(e) {
      b = !1, v.playText(e, function() {
        f(), l();
      }, function() {
        f();
      }), f();
    }
    function o() {
      b = !0, v.pause(), f();
    }
    function r() {
      b = !1, v.isPaused() ? (v.resume(), f()) : t();
    }
    function a() {
      b = !1, v.cancel(), w = -1, y = [], f();
    }
    function s() {
      -1 !== w && c(Math.max(0, w - 1));
    }
    function l() {
      -1 !== w && (w < y.length - 1 ? c(w + 1) : a());
    }
    function c(e) {
      w = e, b ? (v.cancel(), f()) : t();
    }
    function u(e) {
      if (-1 !== w || 0 !== y.length) {
        for (var t = y[w].key, n = 0; n < e.length; n++) {
          if (e[n].key === t) {
            return w = n, void (y = e);
          }
        }
        for (n = w; n < y.length; n++) {
          for (var i = 0; i < e.length; i++) {
            var o = y[n], r = e[i];
            if (o.key === r.key) {
              return y = e, void c(i);
            }
          }
        }
        a();
      }
    }
    function d(e) {
      k = e;
    }
    function f() {
      k(p());
    }
    function h() {
      return y;
    }
    function p() {
      return {
        playing: v.isPlaying() || b,
        error: v.getError(),
        paused: b,
        index: w,
        isSupported: v.isSupported(),
        rate: v.getCurrentRate(),
        voice: v.getCurrentVoiceIndex()
      };
    }
    function g(e) {
      var t = v.setVoice(e);
      return f(), t;
    }
    function m(e) {
      var t = v.changeRate(e);
      return f(), t;
    }
    var v = n(), y = [], w = -1, b = !1, k = function() {};
    return {
      isSupported: v.isSupported,
      playFromTop: e,
      pause: o,
      cancel: a,
      resume: r,
      prev: s,
      next: l,
      setStatusHandler: d,
      getStatus: p,
      getItems: h,
      changeRate: m,
      setVoice: g,
      updateContent: u,
      getVoices: v.getVoices,
      getCurrentRate: v.getCurrentRate,
      getCurrentVoiceIndex: v.getCurrentVoiceIndex
    };
  }
  function t(t) {
    function n(e, n) {
      t.Book.ttsv2(e, n);
    }
    function i(e) {
      Jigsaw.getAllViewers().forEach(function(e) {
        e.TTS.cancel();
      }), t.unbind("page:unload", T.cancel), t.bind("page:unload", T.cancel), p(function(e) {
        var t = e.data;
        S = !0, T.playFromTop(t);
      }, e);
    }
    function o() {
      a(!0);
    }
    function r() {
      a(!1);
    }
    function a(e) {
      J = e, T.getItems().length > 0 && g(), f();
    }
    function s(e) {
      M = e;
    }
    function l() {
      i();
    }
    function c() {
      i({
        fromSelection: !0
      }), t.Book.clearSelection();
    }
    function u(e) {
      i({
        atHighlight: e
      });
    }
    function d(e) {
      S && (e.index !== C.index && e.index >= 0 ? n({
        action: "highlight",
        index: e.index
      }) : C.playing && !e.playing && n({
        action: "unhighlight"
      })), -1 !== C.index && -1 === e.index && (E = !1);
      var t = JSON.parse(JSON.stringify(e));
      delete t.index, t.canNav = -1 !== e.index, t.altEnabled = J, n({
        action: "updateStatus",
        status: t
      }), C = e;
    }
    function f() {
      d(C);
    }
    function h() {
      T.cancel(), t.unbind("page:unload", T.cancel), window.removeEventListener("unload", T.cancel);
    }
    function p(e, t) {
      t ? t.altEnabled = J : t = {
        altEnabled: J
      }, E = t.fromSelection || !!t.atHighlight, n({
        action: "getTextChunks",
        options: t
      }, function(t) {
        if (t.data.length <= 0) {
          S = !1;
          var n = {
            text: M
          };
          T.playFromTop([ n ]);
        } else {
          e && e(t);
        }
      });
    }
    function g(e) {
      p(function(t) {
        T.updateContent(t.data), e && e();
      });
    }
    function m() {
      y(T.next);
    }
    function v() {
      y(T.prev);
    }
    function y(e) {
      E ? g(e) : e();
    }
    function w(e) {
      e(T.getVoices());
    }
    function b(e, t) {
      var n = T.changeRate(e);
      t && t(n);
    }
    function k(e, t) {
      var n = T.setVoice(e);
      t && t(n);
    }
    function x(e) {
      e(T.isSupported());
    }
    var T = e(), C = T.getStatus(), S = !0, J = !1, E = !1, M = "No text can be read aloud.";
    return T.setStatusHandler(d), window.addEventListener("unload", T.cancel), {
      startFromTop: l,
      startFromSelection: c,
      startFromHighlight: u,
      enableAltText: o,
      disableAltText: r,
      setNoContentMessage: s,
      pause: T.pause,
      resume: T.resume,
      cancel: T.cancel,
      skipForward: m,
      skipBack: v,
      setVoice: k,
      changeRate: b,
      sendStatus: f,
      destroy: h,
      getVoices: w,
      isSupported: x
    };
  }
  window.speechSynthesis;
  var n = function() {
    function e() {
      function e() {
        return window.hasOwnProperty("speechSynthesis");
      }
      function t(e, t, n) {
        r(), T = t, C = n, (v = new SpeechSynthesisUtterance(e)).voice = c()[p()];
        var i = .1 - .19756096707572346 * (1 - Math.exp(3.429597 * x));
        v.rate = i, v.onend = function() {
          r(), t && t();
        }, v.onerror = function(e) {
          r(), b = {
            code: e.error,
            timestamp: (new Date).valueOf()
          }, n && n();
        }, v.onboundary = function(e) {
          "word" == e.name && (k = e.charIndex);
        };
        var o = !!v;
        Browser.isIOS() && !o ? window.speechSynthesis.speak(v) : y = window.setTimeout(function() {
          window.speechSynthesis.speak(v);
        }, 800);
      }
      function n() {
        if (v) {
          var e = {
            index: k,
            text: v.text,
            onDone: T,
            onError: C
          };
          r(), S = e;
        }
      }
      function i() {
        return !!S;
      }
      function o() {
        S && t(S.text.substring(S.index), S.onDone, S.onError);
      }
      function r() {
        v && (clearTimeout(y), v.onend = null, v.onerror = null, v.onboundary = null, v = null, 
        window.speechSynthesis.cancel()), S = null, k = null, T = null, C = null, b = null;
      }
      function a() {
        return !!v;
      }
      function s() {
        return b;
      }
      function l(t) {
        return t = parseInt(t, 10), e() ? (t !== w && t >= 0 && t < u().length && (w = t, 
        f()), p()) : -1;
      }
      function c() {
        return e() ? window.speechSynthesis.getVoices().filter(function(e) {
          return e.localService;
        }) : [];
      }
      function u() {
        return c().map(function(e) {
          return {
            name: e.name,
            lang: e.lang
          };
        });
      }
      function d(e) {
        return e = parseFloat(e), x = Math.min(Math.max(e, 0), 1), f(), x;
      }
      function f() {
        a() && !i() && (n(), o());
      }
      function h() {
        return x;
      }
      function p() {
        return w;
      }
      function g() {
        return .5;
      }
      function m() {
        return 0;
      }
      var v = null, y = null, w = m(), b = null, k = null, x = g(), T = null, C = null, S = null;
      return {
        cancel: r,
        isPlaying: a,
        getError: s,
        isSupported: e,
        playText: t,
        setVoice: l,
        changeRate: d,
        pause: n,
        resume: o,
        isPaused: i,
        getVoices: u,
        getCurrentVoiceIndex: p,
        getCurrentRate: h,
        getDefaultRate: g,
        getDefaultVoice: m
      };
    }
    var t = e();
    return function() {
      var e = t.getDefaultRate(), n = t.getDefaultVoice(), i = Object.keys(t).reduce(function(e, n) {
        return e[n] = t[n], e;
      }, {});
      return i.changeRate = function(n) {
        return e = t.changeRate(n);
      }, i.setVoice = function(e) {
        return n = t.setVoice(e);
      }, i.playText = function(i, o, r) {
        t.changeRate(e), t.setVoice(n), t.playText(i, o, r);
      }, i.getCurrentRate = function() {
        return e;
      }, i.getCurrentVoiceIndex = function() {
        return n;
      }, i;
    };
  }();
  Jigsaw.getTTSContext = function(e) {
    return t(e);
  };
}(), function() {
  this.Browser = {
    init: function() {},
    isIE: function() {},
    isIE11: function() {},
    isChrome: function() {},
    isSafari: function() {
      return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome");
    },
    isFirefox: function() {},
    isOld: function() {},
    isLimited: function() {},
    isAndroid: function() {},
    isIOS: function() {
      return /(iPhone|iPad|iPod)/.test(navigator.userAgent);
    },
    getIOSVersion: function() {
      if (this.isIOS()) {
        var e = navigator.userAgent.match(/os (\d+([_\s]\d+)*) like mac os x/i);
        if (e && e.length > 1) {
          var t = e[1].replace(/[_\s]/g, ".");
          return parseFloat(t);
        }
      }
    },
    isSurface: function() {
      return window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
    },
    isIPhone: function() {},
    isIPad: function() {},
    isMobile: function() {}
  };
}.call(this, jQuery), function() {
  var e, t = Jigsaw.Viewer ? Jigsaw.Viewer.prototype : Jigsaw, n = function(e) {
    var t = e.name ? e.name : e;
    return this.uuid && (t += "." + this.uuid), t;
  }, i = function(e) {
    var t = e.name ? e.name : e;
    return this.uuid && (t = t.replace("." + this.uuid, "")), t;
  }, o = function(e, o) {
    t.bind = function(t, i) {
      e(o).on(n.call(this, t), i);
    }, t.once = function(t, i) {
      e(o).one(n.call(this, t), i);
    }, t.unbind = function(t, i) {
      e(o).off(n.call(this, t), i);
    }, Jigsaw.socketMethods.remote.trigger = {}, t.trigger = function(t, r, a) {
      null == a && (a = !0);
      var s = n.call(this, t);
      e(o).trigger(s, r), a && this.socket.trigger(i.call(this, s), r);
    }, Jigsaw.socketMethods.local.trigger = {
      method: function(e, t) {
        var i = n.call(this, e);
        (this.trigger || Jigsaw.trigger)(i, t, !1);
      }
    };
  }, r = document;
  e = void 0 !== Jigsaw$ ? Jigsaw$ : $, "undefined" != typeof VST && VST.$ && (e = VST.$, 
  r = VST.document || r), o.call(this, e, r);
}.call(this), function() {
  var e = function(e) {
    null == e && (e = {}), this.status = e.status || "ok", this.message = e.message, 
    this.data = e.data, this.code = e.code, this.isSuccess = function() {
      return "ok" == this.status;
    }, this.code || (this.isSuccess() ? this.code = 200 : this.code = 500);
  };
  this.Jigsaw = this.Jigsaw || {}, this.Jigsaw.Response = e;
}.call(window), function() {
  LESS_THAN = -1, EQUAL = 0, GREATER_THAN = 1;
  var e = {
    compareCFIs: function(e, t) {
      if (null == e && (e = ""), null == t && (t = ""), (e = e.replace(/!$/, "")) === (t = t.replace(/!$/, ""))) {
        return EQUAL;
      }
      for (var n = /[\/@~:!]/, i = /(\[.+\]|[^\d])/g, o = e.split(n), r = t.split(n), a = 0; ;a++) {
        var s = o[a], l = r[a];
        if (null == s && null == l) {
          return EQUAL;
        }
        if (null == s) {
          return LESS_THAN;
        }
        if (null == l) {
          return GREATER_THAN;
        }
        if (s !== l) {
          if ((s = parseInt(s.replace(i, ""), 10)) < (l = parseInt(l.replace(i, ""), 10))) {
            return LESS_THAN;
          }
          if (s > l) {
            return GREATER_THAN;
          }
        }
      }
    }
  };
  this.Jigsaw.CFIUtils = e;
}.call(window), function() {
  this.Jigsaw.addRemoteMethod("getBookList", this.Jigsaw.User), this.Jigsaw.addRemoteMethod("signOut", this.Jigsaw.User), 
  this.Jigsaw.addRemoteMethod("updateLicense", this.Jigsaw.User), this.Jigsaw.addRemoteMethod("asyncUpdateLicense", this.Jigsaw.User), 
  this.Jigsaw.addRemoteMethod("asyncLicenseStatus", this.Jigsaw.User);
}.call(this), function(e, t) {
  var n = function() {
    var e = Jigsaw.host, t = Jigsaw.protocol;
    return /^\s*$/.test(t) && (t = window.location.protocol), /\/\/$/.test(t) || (t += "//"), 
    /^\s*$/.test(e) || (e = t + e), e;
  }, i = function() {
    var e = "_jigsaw-socket-container", t = document.getElementById(e);
    return t || ((t = document.createElement("div")).setAttribute("aria-hidden", "true"), 
    t.setAttribute("id", "_jigsaw-socket-container"), t.setAttribute("style", "display: none;"), 
    document.body.appendChild(t), t);
  }, o = function() {
    var o = n();
    if (e.socket) {
      if (e.socket._jigsawHost === o) {
        return e.socket;
      }
      e.socket.destroy && e.socket.destroy();
    }
    var r = {
      remote: o + "/socket",
      container: i()
    }, a = {
      local: {},
      remote: {
        getBookList: {},
        waldoSearch: {},
        search: {},
        searchBook: {},
        waldoSearchBook: {},
        searchMetadata: {},
        sendMobileAppLinkText: {},
        sendMobileAppLinkEmail: {},
        createUser: {},
        mergeAccount: {},
        updateForgottenPassword: {},
        forgotPassword: {},
        requestUserActivation: {},
        requestEmailVerification: {},
        getUserInfo: {},
        getUserGroups: {},
        getUserFollowers: {},
        getUserFollowings: {},
        unfollowUser: {},
        blockUser: {},
        unblockUser: {},
        getBlocks: {},
        ssoUser: {},
        createLTILaunch: {},
        printOnDemandURL: {},
        setUserInfo: {},
        userExists: {},
        getDevices: {},
        getPreferredLanguages: {},
        deactivateDevice: {},
        getMarker: {},
        getMarkers: {},
        createMarker: {},
        updateMarker: {},
        deleteMarker: {},
        signOut: {},
        updateLicense: {},
        asyncUpdateLicense: {},
        asyncLicenseStatus: {},
        redeemCode: {},
        addEvents: {},
        fitToWidth: {},
        fitToHeight: {},
        printPageRange: {},
        mimeoPrintPageRange: {},
        mimeoPrintPageRangeAsync: {},
        mimeoGetPrintRequest: {},
        mimeoClaimPrintRequest: {},
        getPrintHistory: {},
        getLifetimePages: {},
        getBookPrintSummary: {},
        getPrintLimits: {},
        getPageRange: {},
        subscribeTo: {},
        addEvents: {},
        getCollections: {},
        enableLab: {},
        disableLab: {},
        likeLab: {},
        dislikeLab: {},
        getLabInfo: {},
        getAllLabInfos: {},
        getHighlightSummary: {},
        getDetailedHighlightSummary: {},
        getAllTransactions: {},
        getTransaction: {},
        requestRefund: {},
        getAncillariesForVbid: {},
        redeemAncillaryForVbid: {},
        getBrandConfig: {},
        getAncillariesSummary: {},
        getAllAccessCodes: {},
        getAncillariesForVbid: {},
        redeemAncillary: {},
        setupSecureToken: {},
        generateCaptcha: {},
        resendActivationEmail: {},
        oneNote: {},
        getBookInfo: {},
        getCitationInfo: {},
        getExpiredBooks: {},
        setFlag: {}
      }
    };
    return t.extend(!0, a.local, e.socketMethods.local), e.socket = new easyXDM.Rpc(r, a), 
    e.socket._jigsawHost = o, Jigsaw.secureToken && e.setupSecureToken(Jigsaw.secureToken), 
    e.socket;
  }, r = {}, a = function(e) {
    return o(), Jigsaw.Utils.defaultCallbacks(e);
  };
  e.addViewer = function(e) {
    r[e.uuid] = e, e.setupSecureToken(this.secureToken);
  }, e.removeViewer = function(e) {
    delete r[e.uuid];
  };
  e.getAllViewers = function() {
    for (var e = Object.keys(r), t = [], n = 0; n < e.length; n++) {
      t.push(r[e[n]]);
    }
    return t;
  };
  e.generateSecureToken = function() {
    t(document).ready(function() {
      var e = document.createElement("script");
      e.src = n() + "/secure-token", e.id = "secure-token-script", document.head.appendChild(e);
    });
  }, e.setupSecureToken = function(e) {
    if (e) {
      s(this, "setupSecureToken", !1, e), this.secureToken = e, this.refreshSecureTokenAt = (new Date).getTime() + 3e5;
      for (var t = this.getAllViewers(), n = 0; n < t.length; n++) {
        t[n].setupSecureToken(e);
      }
    }
  };
  var s = function(t, n, i) {
    var o = a(i);
    if (arguments.length > 3) {
      for (var r = arguments.length - 1; r >= 3; r--) {
        o.unshift(arguments[r]);
      }
    }
    e.socket[n].apply(t, o);
  };
  e.getBookList = function(t, n) {
    1 == arguments.length && (n = t, t = {}), o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.getBookList.apply(this, i);
  }, e.waldoSearch = function(t, n, i, r) {
    arguments.length < 4 && (r = i, i = n, n = {}), wrappedCallback = function(o) {
      o.data && o.data.pages && o.data.pages > o.data.page ? (setTimeout(function() {
        n.page = o.data.page + 1, e.waldoSearch(t, n, i, r);
      }, 1), i(o)) : (i(o), r());
    }, o();
    var a = Jigsaw.Utils.defaultCallbacks(wrappedCallback);
    a.unshift(n), a.unshift(t), e.socket.waldoSearch.apply(this, a);
  }, e.waldoLazySearch = function(t, n, i) {
    arguments.length < 3 && (i = n, n = {}), o();
    var r = Jigsaw.Utils.defaultCallbacks(i);
    r.unshift(n), r.unshift(t), e.socket.waldoSearch.apply(this, r);
  }, e.waldoSearchBook = function(t, n, i) {
    o();
    var r = Jigsaw.Utils.defaultCallbacks(i);
    r.unshift(n), r.unshift(t), e.socket.waldoSearchBook.apply(this, r);
  }, e.search = function(t, n, i, r) {
    arguments.length < 4 && (r = i, i = n, n = {}), wrappedCallback = function(o) {
      o.data && o.data.pages && o.data.pages > o.data.page ? (setTimeout(function() {
        n.page = o.data.page + 1, e.search(t, n, i, r);
      }, 1), i(o)) : (i(o), r());
    }, o();
    var a = Jigsaw.Utils.defaultCallbacks(wrappedCallback);
    a.unshift(n), a.unshift(t), e.socket.search.apply(this, a);
  }, e.searchBook = function(t, n, i) {
    o();
    var r = Jigsaw.Utils.defaultCallbacks(i);
    r.unshift(n), r.unshift(t), e.socket.searchBook.apply(this, r);
  }, e.searchMetadata = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.searchMetadata.apply(this, i);
  }, e.Email.sendMobileAppLink = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.sendMobileAppLinkEmail.apply(this, i);
  }, e.User.create = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.createUser.apply(this, i);
  }, e.User.mergeAccount = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.mergeAccount.apply(this, i);
  }, e.User.getInfo = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t, "user");
    e.socket.getUserInfo.apply(this, n);
  }, e.User.requestActivation = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n, "user");
    i.unshift(t), e.socket.requestUserActivation.apply(this, i);
  }, e.User.requestEmailVerification = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.requestEmailVerification.apply(this, i);
  }, e.User.getGroups = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t, "user");
    e.socket.getUserGroups.apply(this, n);
  }, e.User.getFollowers = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t, "user");
    e.socket.getUserFollowers.apply(this, n);
  }, e.User.getFollowings = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t, "user");
    e.socket.getUserFollowings.apply(this, n);
  }, e.User.unfollow = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n, "user");
    i.unshift(t), e.socket.unfollowUser.apply(this, i);
  }, e.User.block = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n, "user");
    i.unshift(t), e.socket.blockUser.apply(this, i);
  }, e.User.unblock = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n, "user");
    i.unshift(t), e.socket.unblockUser.apply(this, i);
  }, e.User.getBlocks = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t, "user");
    e.socket.getBlocks.apply(this, n);
  }, e.User.SSO = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.ssoUser.apply(this, i);
  }, e.User.createLTILaunch = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.createLTILaunch.apply(this, i);
  }, e.User.printOnDemandURL = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.printOnDemandURL.apply(this, n);
  }, e.User.setInfo = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.setUserInfo.apply(this, i);
  }, e.User.getDevices = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.getDevices.apply(this, n);
  }, e.User.getPreferredLanguages = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.getPreferredLanguages.apply(this, n);
  }, e.User.deactivateDevice = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.deactivateDevice.apply(this, i);
  }, e.User.exists = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.userExists.apply(this, i);
  }, e.User.redeemCode = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.redeemCode.apply(this, i);
  }, e.User.subscribeTo = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.subscribeTo.apply(this, i);
  }, e.User.getHighlightSummary = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.getHighlightSummary.apply(this, n);
  }, e.User.getDetailedHighlightSummary = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.getDetailedHighlightSummary.apply(this, n);
  }, e.User.resendActivationEmail = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.resendActivationEmail.apply(this, i);
  }, e.User.oneNote = function(t, n, i) {
    o();
    var r = Jigsaw.Utils.defaultCallbacks(i);
    n.accessToken = t, r.unshift(n), e.socket.oneNote.apply(this, r);
  }, e.User.setFlag = function(e, t, n) {
    s(this, "setFlag", n, e, t);
  }, e.forgotPassword = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.forgotPassword.apply(this, i);
  }, e.updateForgottenPassword = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.updateForgottenPassword.apply(this, i);
  }, e.addEvents = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.addEvents.apply(this, i);
  }, e.getCollections = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.getCollections.apply(this, n);
  }, e.promptForLogin = function(e) {
    var t = n() + "/login?return=" + window.location.toString(), i = "Login", o = "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, height=500, width=600", r = window.open(t, i, o);
    if (e) {
      var a = window.setInterval(function() {
        !1 !== r.closed && (window.clearInterval(a), e());
      }, 200);
    }
  }, e.getAncillariesSummary = function(t) {
    e.socket || o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.getAncillariesSummary.apply(this, n);
  }, e.getAllAccessCodes = function(t) {
    e.socket || o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.getAllAccessCodes.apply(this, n);
  }, e.getAncillariesForVbid = function(e, t) {
    s(this, "getAncillariesForVbid", t, e);
  }, e.redeemAncillary = function(e, t) {
    s(this, "redeemAncillary", t, e);
  }, e.User.getMarkers = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.getMarkers.apply(this, n);
  }, e.User.createMarker = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.createMarker.apply(this, i);
  }, e.User.updateMarker = function(t, n, i) {
    o();
    var r = Jigsaw.Utils.defaultCallbacks(i);
    r.unshift(n), r.unshift(t), e.socket.updateMarker.apply(this, r);
  }, e.User.deleteMarker = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.deleteMarker.apply(this, i);
  }, e.User.getMarker = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.getMarker.apply(this, i);
  }, e.User.signOut = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.signOut.apply(this, n);
  }, e.User.updateLicense = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.updateLicense.apply(this, n);
  }, e.User.asyncUpdateLicense = function(t) {
    o();
    var n = Jigsaw.Utils.defaultCallbacks(t);
    e.socket.asyncUpdateLicense.apply(this, n);
  }, e.User.asyncLicenseStatus = function(t, n) {
    o();
    var i = Jigsaw.Utils.defaultCallbacks(n);
    i.unshift(t), e.socket.asyncLicenseStatus.apply(this, i);
  }, e.User.generateCaptcha = function(e) {
    s(this, "generateCaptcha", e);
  }, e.User.getAllTransactions = function(e) {
    s(this, "getAllTransactions", e);
  }, e.User.getTransaction = function(e, t) {
    s(this, "getTransaction", t, e);
  }, e.User.requestRefund = function(e, t) {
    s(this, "requestRefund", t, e);
  }, e.Labs.enable = function(e, t) {
    s(this, "enableLab", t, e);
  }, e.Labs.disable = function(e, t) {
    s(this, "disableLab", t, e);
  }, e.Labs.like = function(e, t) {
    s(this, "likeLab", t, e);
  }, e.Labs.dislike = function(e, t) {
    s(this, "dislikeLab", t, e);
  }, e.Labs.getInfo = function(e, t) {
    s(this, "getLabInfo", t, e);
  }, e.Labs.getAll = function(e) {
    s(this, "getAllLabInfos", e);
  }, e.getBrandConfig = function(e, t) {
    s(this, "getBrandConfig", t, e);
  }, e.getBookInfo = function(e, t) {
    s(this, "getBookInfo", t, e);
  }, e.getExpiredBooks = function(e) {
    s(this, "getExpiredBooks", e);
  }, e.getCitationInfo = function(e, t) {
    s(this, "getCitationInfo", t, e);
  }, Jigsaw.generateSecureToken(), window.addEventListener("focus", function() {
    (!Jigsaw.secureToken || !Jigsaw.refreshSecureTokenAt || (new Date).getTime() > Jigsaw.refreshSecureTokenAt) && Jigsaw.generateSecureToken();
  }), setInterval(Jigsaw.generateSecureToken, 24e4), e.Snippet.prototype.hasNextPage = function(e) {
    var t = Jigsaw.Utils.defaultCallbacks(e);
    this.socket.snippetHasNextPage.apply(this, t);
  }, e.Snippet.prototype.hasPreviousPage = function(e) {
    var t = Jigsaw.Utils.defaultCallbacks(e);
    this.socket.snippetHasPreviousPage.apply(this, t);
  }, e.Snippet.prototype.search = function(e, t, n) {
    var i = Jigsaw.Utils.defaultCallbacks(n);
    this.socket.searchInSnippet.call(this, e, t, i[0], i[1]);
  }, e.Snippet.prototype.waldoSearch = function(e, t, n) {
    var i = Jigsaw.Utils.defaultCallbacks(n);
    this.socket.waldoSearchInSnippet.call(this, e, t, i[0], i[1]);
  };
}.call(this, Jigsaw, Jigsaw$), function() {}.call(this, Jigsaw$);
//# sourceMappingURL=box.js.map