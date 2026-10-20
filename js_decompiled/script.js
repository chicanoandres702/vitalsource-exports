(function(e) {
  typeof define == `function` && define.amd ? define([], e) : e();
})(function() {
  var e = {
    inert: `:not([inert]):not([inert] *)`,
    negTabIndex: `:not([tabindex^="-"])`,
    disabled: `:not(:disabled)`
  }, t = [ `a[href]${e.inert}${e.negTabIndex}`, `area[href]${e.inert}${e.negTabIndex}`, `input:not([type="hidden"]):not([type="radio"])${e.inert}${e.negTabIndex}${e.disabled}`, `input[type="radio"]${e.inert}${e.negTabIndex}${e.disabled}`, `select${e.inert}${e.negTabIndex}${e.disabled}`, `textarea${e.inert}${e.negTabIndex}${e.disabled}`, `button${e.inert}${e.negTabIndex}${e.disabled}`, `details${e.inert} > summary:first-of-type${e.negTabIndex}`, `iframe${e.inert}${e.negTabIndex}`, `audio[controls]${e.inert}${e.negTabIndex}`, `video[controls]${e.inert}${e.negTabIndex}`, `[contenteditable]${e.inert}${e.negTabIndex}`, `[tabindex]${e.inert}${e.negTabIndex}` ];
  function n(e) {
    (e.querySelector(`[autofocus]`) || e).focus();
  }
  function r(e) {
    let t = i(e, !0);
    return [ t, t ? i(e, !1) || t : null ];
  }
  function i(e, t) {
    if (t && c(e)) return e;
    if (l(e)) {
      if (e.shadowRoot) {
        let n = a(e.shadowRoot, t);
        for (;n; ) {
          let e = i(n, t);
          if (e) return e;
          n = o(n, t);
        }
      } else if (e.localName === `slot`) {
        let n = e.assignedElements({
          flatten: !0
        });
        t || n.reverse();
        for (let e of n) {
          let n = i(e, t);
          if (n) return n;
        }
      } else {
        let n = a(e, t);
        for (;n; ) {
          let e = i(n, t);
          if (e) return e;
          n = o(n, t);
        }
      }
    }
    return !t && c(e) ? e : null;
  }
  function a(e, t) {
    return t ? e.firstElementChild : e.lastElementChild;
  }
  function o(e, t) {
    return t ? e.nextElementSibling : e.previousElementSibling;
  }
  var s = e => e.matches(`details:not([open]) *`) && !e.matches(`details>summary:first-of-type`) ? !0 : !(e.offsetWidth || e.offsetHeight || e.getClientRects().length), c = e => !e.shadowRoot?.delegatesFocus && e.matches(t.join(`,`)) && !s(e);
  function l(e) {
    return e.shadowRoot && e.getAttribute(`tabindex`) === `-1` ? !1 : !e.matches(`:disabled,[hidden],[inert]`);
  }
  function u(e = document) {
    let t = e.activeElement;
    return t ? t.shadowRoot ? u(t.shadowRoot) || document.activeElement : t : null;
  }
  function d(e, t) {
    let [n, i] = r(e);
    if (!n) return t.preventDefault();
    let a = u();
    t.shiftKey && a === n ? (i.focus(), t.preventDefault()) : !t.shiftKey && a === i && (n.focus(), 
    t.preventDefault());
  }
  function f(e, t) {
    function n(t) {
      if (!t || t === document || t === window) return null;
      let r = p(t);
      return r && (t = r), t.closest(e) || n(t.getRootNode().host);
    }
    return n(t);
  }
  function p(e) {
    return e.assignedSlot || (e.parentNode ? p(e.parentNode) : null);
  }
  var m = `data-a11y-dialog`, h = class {
    $el;
    id;
    previouslyFocused;
    shown;
    constructor(e) {
      this.$el = e, this.id = this.$el.getAttribute(m) || this.$el.id, this.previouslyFocused = null, 
      this.shown = !1, this.maintainFocus = this.maintainFocus.bind(this), this.bindKeypress = this.bindKeypress.bind(this), 
      this.handleTriggerClicks = this.handleTriggerClicks.bind(this), this.show = this.show.bind(this), 
      this.hide = this.hide.bind(this), this.$el.setAttribute(`aria-hidden`, `true`), 
      this.$el.setAttribute(`aria-modal`, `true`), this.$el.setAttribute(`tabindex`, `-1`), 
      this.$el.hasAttribute(`role`) || this.$el.setAttribute(`role`, `dialog`), document.addEventListener(`click`, this.handleTriggerClicks, !0);
    }
    destroy() {
      return this.fire(`destroy`).defaultPrevented ? this : (this.hide(), document.removeEventListener(`click`, this.handleTriggerClicks, !0), 
      this.$el.replaceWith(this.$el.cloneNode(!0)), this);
    }
    show(e) {
      return this.shown || this.fire(`show`, e).defaultPrevented ? this : (this.shown = !0, 
      this.$el.removeAttribute(`aria-hidden`), this.previouslyFocused = u(), this.previouslyFocused?.tagName === `BODY` && e?.target && (this.previouslyFocused = e.target), 
      e?.type === `focus` ? this.maintainFocus() : n(this.$el), document.body.addEventListener(`focus`, this.maintainFocus, !0), 
      this.$el.addEventListener(`keydown`, this.bindKeypress, !0), this);
    }
    hide(e) {
      return !this.shown || this.fire(`hide`, e).defaultPrevented ? this : (this.shown = !1, 
      this.$el.setAttribute(`aria-hidden`, `true`), document.body.removeEventListener(`focus`, this.maintainFocus, !0), 
      this.$el.removeEventListener(`keydown`, this.bindKeypress, !0), this.previouslyFocused?.focus?.(), 
      this);
    }
    on(e, t, n) {
      return this.$el.addEventListener(e, t, n), this;
    }
    off(e, t, n) {
      return this.$el.removeEventListener(e, t, n), this;
    }
    fire(e, t) {
      let n = new CustomEvent(e, {
        detail: t,
        cancelable: !0
      });
      return this.$el.dispatchEvent(n), n;
    }
    handleTriggerClicks(e) {
      let t = e.composedPath()[0], n = f(`[${m}-show="${this.id}"]`, t), r = f(`[${m}-hide="${this.id}"]`, t), i = f(`[${m}-hide]`, t) && f(`[aria-modal="true"]`, t) === this.$el;
      n && this.show(e), (r || i) && this.hide(e);
    }
    bindKeypress(e) {
      if (f(`[aria-modal="true"]`, u()) !== this.$el) return;
      let t = !1;
      try {
        t = !!this.$el.querySelector(`[popover]:not([popover="manual"]):popover-open`);
      } catch {}
      e.key === `Escape` && this.$el.getAttribute(`role`) !== `alertdialog` && !t && (e.preventDefault(), 
      this.hide(e)), e.key === `Tab` && d(this.$el, e);
    }
    maintainFocus() {
      let e = u();
      f(`[aria-modal="true"], [${m}-ignore-focus-trap]`, e) || n(this.$el);
    }
  };
  function g() {
    for (let e of document.querySelectorAll(`[data-a11y-dialog]`)) new h(e);
  }
  typeof document < `u` && (document.readyState === `loading` ? document.addEventListener(`DOMContentLoaded`, g) : g());
  function _(e, t) {
    let n = document.createElement(`div`);
    if (n.classList.add(`vst-dialog-component-main`, `vst-dialog-component-main-banner`, `vst-theme-${e || `ocean`}`), 
    n.id = `cookiecat-dialog`, n.setAttribute(`aria-labelledby`, `cookie-banner-heading`), 
    t) n.innerHTML = `\n  <button id="close-banner" class="vst-dialog-close-button" type="button" aria-label="${t(`base.close`)}"   data-tooltip-content="${t(`base.close`)}" data-tooltip-place="top"></button>\n  <div class="vst-dialog-component-body">\n    <div id="cookiecat-body">\n    <h2 id="cookie-banner-heading" class="vst-dialog-component-header hidden">${t(`base.cookie-settings`)}</h2>\n      <div class="cookiecat-textarea">\n      <p>${t(`base.paragraph-1`, {
      link: `<a href=${t(`base.cookie-policy-url`)} class="vst-link vst-link-size-inherit" target="_blank">${t(`base.cookie-policy`)}</a>`
    })}</p>\n        <p>${t(`base.paragraph-2`)}</p>\n      </div>\n      <form id="cookiecat-form-banner">\n        <button id="accept-all-cookies" class="vst-button-pill vst-button-size-small" type="button" data-test-id="accept-all-cookies">${t(`base.accept-all`)}</button>\n        <button id="accept-essential-cookies" class="vst-button-pill vst-button-variant-outline vst-button-size-small" type="button" data-test-id="accept-essential-cookies">${t(`base.decline-all`)}</button>\n        <button id="manage-preferences" class="vst-link vst-link-size-small" data-test-id="manage-preferences" type="button">${t(`base.manage-preferences`)}</button>\n      </form>\n    </div>\n  </div>\n  `; else throw Error(`intl object or formatMessage method is missing.`);
    return n;
  }
  function v(e, t, n) {
    let r = document.createElement(`div`);
    if (r.classList.add(`vst-dialog-component-main`, `vst-theme-${e || `ocean`}`), r.id = `cookiecat-manage-preferences-dialog`, 
    r.setAttribute(`aria-labelledby`, `manage-preferences-heading`), n) {
      let e = window.CookieCat._info, i = [ {
        title: n(`manage.essential-cookies`),
        content: n(`manage.essential-paragraph`),
        expanded: !0,
        id: `essential-cookies`,
        label: `<label for="switchLabel">${n(`base.always-active`)}</label>`,
        checked: `checked`,
        disabled: `disabled`
      }, {
        title: n(`manage.performance-cookies`),
        content: n(`manage.performance-paragraph`),
        expanded: !0,
        id: `performance-cookies`,
        checked: e?.performance ? `checked` : ``
      }, {
        title: n(`manage.functionality-cookies`),
        content: n(`manage.functionality-paragraph`),
        expanded: !0,
        id: `functionality-cookies`,
        checked: e?.functionality ? `checked` : ``
      }, {
        title: n(`manage.marketing-cookies`),
        content: n(`manage.marketing-paragraph`),
        expanded: !0,
        id: `marketing-cookies`,
        checked: e?.marketing ? `checked` : ``
      } ], a = ``;
      i.forEach(e => {
        a += `\n\t\t\t<h4 class="vst-accordion" data-expanded="${e.expanded}">\n\t\t\t\t<button aria-expanded="${e.expanded}" type="button" class="accordion-button">\n\t\t\t\t\t${e.title}\n\t\t\t\t</button>\n\t\t\t\t<span class="vst-accordion-subtext">\n\t\t\t\t\t${e.label ? e.label : ``}\n\t\t\t\t\t<input type="checkbox" class="vst-switch ${e.id}" id="switchLabel" ${e.checked ? e.checked : ``} ${e.disabled ? e.disabled : ``}/>\n\t\t\t\t</span>\n\t\t\t</h4>\n\t\t\t<div class="vst-accordion-content">${e.content}</div>\n    `;
      }), setTimeout(() => {
        if (t) {
          let e = t.querySelectorAll(`.accordion-button`);
          t.querySelector(`#manage-preferences-form`)?.addEventListener(`submit`, e => {
            e.preventDefault();
          }), e.forEach(e => {
            e.addEventListener(`click`, () => {
              let t = e.parentElement, n = t?.getAttribute(`data-expanded`) === `true`;
              t?.setAttribute(`data-expanded`, String(!n));
              let r = e.getAttribute(`aria-expanded`) === `true`;
              e.setAttribute(`aria-expanded`, String(!r));
            });
          });
        }
      }, 1e3), r.innerHTML = `\n\t\t<form id="manage-preferences-form">\n\t\t\t<div class="manage-preferences-container">\n\t\t\t\t<h2 id="manage-preferences-heading" class="vst-dialog-component-header">${n(`manage.cookie-preferences`)}</h2>  \n\t\t\t\t<div class="vst-dialog-component-body">\n\t\t\t\t\t<p>${n(`manage.paragraph-1`)}</p>\n          <p>${n(`manage.paragraph-2`, {
        link: `<a href=${n(`base.cookie-policy-url`)} class="vst-link vst-link-size-inherit" target="_blank">${n(`base.cookie-policy`)}</a>`
      })}</p>\n\t\t\t\t\t<p>${n(`manage.paragraph-3`)}</p>\n\t\t\t\t</div>\n\t\t\t\t<h3 class="vst-dialog-component-header">${n(`manage.cookie-categories`)}</h3>\n\t\t\t\t<div class="vst-dialog-component-body">\n\t\t\t\t\t${a}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="vst-dialog-component-footer">\n\t\t\t\t<button id="cancel-manage-preferences" class="vst-button-rectangle vst-button-variant-naked" type="button" data-test-id="cancel-manage-preferences">${n(`base.cancel`)}</button>\n\t\t\t\t<button id="save-close-manage-preferences" class="vst-button-rectangle" type="button" data-test-id="save-close-manage-preferences">${n(`base.save-close`)}</button>\n\t\t\t</div>\n\t\t<form>\n    `;
    } else throw Error(`intl object or formatMessage method is missing.`);
    return r;
  }
  var y = function(e, t) {
    return y = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }, y(e, t);
  };
  function b(e, t) {
    if (typeof t != `function` && t !== null) throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
    y(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n);
  }
  var x = function() {
    return x = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], 
      t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e;
    }, x.apply(this, arguments);
  };
  function ee(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`) for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  }
  function S(e, t, n) {
    if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), 
    a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t));
  }
  function C(e, t) {
    var n = t && t.cache ? t.cache : le, r = t && t.serializer ? t.serializer : se;
    return (t && t.strategy ? t.strategy : ie)(e, {
      cache: n,
      serializer: r
    });
  }
  function te(e) {
    return e == null || typeof e == `number` || typeof e == `boolean`;
  }
  function ne(e, t, n, r) {
    var i = te(r) ? r : n(r), a = t.get(i);
    return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
  }
  function re(e, t, n) {
    var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
    return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
  }
  function w(e, t, n, r, i) {
    return n.bind(t, e, r, i);
  }
  function ie(e, t) {
    var n = e.length === 1 ? ne : re;
    return w(e, this, n, t.cache.create(), t.serializer);
  }
  function ae(e, t) {
    return w(e, this, re, t.cache.create(), t.serializer);
  }
  function oe(e, t) {
    return w(e, this, ne, t.cache.create(), t.serializer);
  }
  var se = function() {
    return JSON.stringify(arguments);
  }, ce = function() {
    function e() {
      this.cache = Object.create(null);
    }
    return e.prototype.get = function(e) {
      return this.cache[e];
    }, e.prototype.set = function(e, t) {
      this.cache[e] = t;
    }, e;
  }(), le = {
    create: function() {
      return new ce;
    }
  }, T = {
    variadic: ae,
    monadic: oe
  }, E;
  (function(e) {
    e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = `EXPECT_ARGUMENT_CLOSING_BRACE`, e[e.EMPTY_ARGUMENT = 2] = `EMPTY_ARGUMENT`, 
    e[e.MALFORMED_ARGUMENT = 3] = `MALFORMED_ARGUMENT`, e[e.EXPECT_ARGUMENT_TYPE = 4] = `EXPECT_ARGUMENT_TYPE`, 
    e[e.INVALID_ARGUMENT_TYPE = 5] = `INVALID_ARGUMENT_TYPE`, e[e.EXPECT_ARGUMENT_STYLE = 6] = `EXPECT_ARGUMENT_STYLE`, 
    e[e.INVALID_NUMBER_SKELETON = 7] = `INVALID_NUMBER_SKELETON`, e[e.INVALID_DATE_TIME_SKELETON = 8] = `INVALID_DATE_TIME_SKELETON`, 
    e[e.EXPECT_NUMBER_SKELETON = 9] = `EXPECT_NUMBER_SKELETON`, e[e.EXPECT_DATE_TIME_SKELETON = 10] = `EXPECT_DATE_TIME_SKELETON`, 
    e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = `UNCLOSED_QUOTE_IN_ARGUMENT_STYLE`, 
    e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = `EXPECT_SELECT_ARGUMENT_OPTIONS`, e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = `EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE`, 
    e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = `INVALID_PLURAL_ARGUMENT_OFFSET_VALUE`, 
    e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = `EXPECT_SELECT_ARGUMENT_SELECTOR`, e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = `EXPECT_PLURAL_ARGUMENT_SELECTOR`, 
    e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = `EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT`, 
    e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = `EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT`, 
    e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = `INVALID_PLURAL_ARGUMENT_SELECTOR`, 
    e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = `DUPLICATE_PLURAL_ARGUMENT_SELECTOR`, 
    e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = `DUPLICATE_SELECT_ARGUMENT_SELECTOR`, 
    e[e.MISSING_OTHER_CLAUSE = 22] = `MISSING_OTHER_CLAUSE`, e[e.INVALID_TAG = 23] = `INVALID_TAG`, 
    e[e.INVALID_TAG_NAME = 25] = `INVALID_TAG_NAME`, e[e.UNMATCHED_CLOSING_TAG = 26] = `UNMATCHED_CLOSING_TAG`, 
    e[e.UNCLOSED_TAG = 27] = `UNCLOSED_TAG`;
  })(E ||= {});
  var D;
  (function(e) {
    e[e.literal = 0] = `literal`, e[e.argument = 1] = `argument`, e[e.number = 2] = `number`, 
    e[e.date = 3] = `date`, e[e.time = 4] = `time`, e[e.select = 5] = `select`, e[e.plural = 6] = `plural`, 
    e[e.pound = 7] = `pound`, e[e.tag = 8] = `tag`;
  })(D ||= {});
  var O;
  (function(e) {
    e[e.number = 0] = `number`, e[e.dateTime = 1] = `dateTime`;
  })(O ||= {});
  function ue(e) {
    return e.type === D.literal;
  }
  function de(e) {
    return e.type === D.argument;
  }
  function fe(e) {
    return e.type === D.number;
  }
  function pe(e) {
    return e.type === D.date;
  }
  function me(e) {
    return e.type === D.time;
  }
  function he(e) {
    return e.type === D.select;
  }
  function ge(e) {
    return e.type === D.plural;
  }
  function _e(e) {
    return e.type === D.pound;
  }
  function ve(e) {
    return e.type === D.tag;
  }
  function k(e) {
    return !!(e && typeof e == `object` && e.type === O.number);
  }
  function A(e) {
    return !!(e && typeof e == `object` && e.type === O.dateTime);
  }
  var ye = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, be = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  function xe(e) {
    var t = {};
    return e.replace(be, function(e) {
      var n = e.length;
      switch (e[0]) {
       case `G`:
        t.era = n === 4 ? `long` : n === 5 ? `narrow` : `short`;
        break;

       case `y`:
        t.year = n === 2 ? `2-digit` : `numeric`;
        break;

       case `Y`:
       case `u`:
       case `U`:
       case `r`:
        throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");

       case `q`:
       case `Q`:
        throw RangeError("`q/Q` (quarter) patterns are not supported");

       case `M`:
       case `L`:
        t.month = [ `numeric`, `2-digit`, `short`, `long`, `narrow` ][n - 1];
        break;

       case `w`:
       case `W`:
        throw RangeError("`w/W` (week) patterns are not supported");

       case `d`:
        t.day = [ `numeric`, `2-digit` ][n - 1];
        break;

       case `D`:
       case `F`:
       case `g`:
        throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");

       case `E`:
        t.weekday = n === 4 ? `long` : n === 5 ? `narrow` : `short`;
        break;

       case `e`:
        if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = [ `short`, `long`, `narrow`, `short` ][n - 4];
        break;

       case `c`:
        if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = [ `short`, `long`, `narrow`, `short` ][n - 4];
        break;

       case `a`:
        t.hour12 = !0;
        break;

       case `b`:
       case `B`:
        throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");

       case `h`:
        t.hourCycle = `h12`, t.hour = [ `numeric`, `2-digit` ][n - 1];
        break;

       case `H`:
        t.hourCycle = `h23`, t.hour = [ `numeric`, `2-digit` ][n - 1];
        break;

       case `K`:
        t.hourCycle = `h11`, t.hour = [ `numeric`, `2-digit` ][n - 1];
        break;

       case `k`:
        t.hourCycle = `h24`, t.hour = [ `numeric`, `2-digit` ][n - 1];
        break;

       case `j`:
       case `J`:
       case `C`:
        throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");

       case `m`:
        t.minute = [ `numeric`, `2-digit` ][n - 1];
        break;

       case `s`:
        t.second = [ `numeric`, `2-digit` ][n - 1];
        break;

       case `S`:
       case `A`:
        throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");

       case `z`:
        t.timeZoneName = n < 4 ? `short` : `long`;
        break;

       case `Z`:
       case `O`:
       case `v`:
       case `V`:
       case `X`:
       case `x`:
        throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
      }
      return ``;
    }), t;
  }
  var Se = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  function Ce(e) {
    if (e.length === 0) throw Error(`Number skeleton cannot be empty`);
    for (var t = e.split(Se).filter(function(e) {
      return e.length > 0;
    }), n = [], r = 0, i = t; r < i.length; r++) {
      var a = i[r].split(`/`);
      if (a.length === 0) throw Error(`Invalid number skeleton`);
      for (var o = a[0], s = a.slice(1), c = 0, l = s; c < l.length; c++) if (l[c].length === 0) throw Error(`Invalid number skeleton`);
      n.push({
        stem: o,
        options: s
      });
    }
    return n;
  }
  function we(e) {
    return e.replace(/^(.*?)-/, ``);
  }
  var j = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, M = /^(@+)?(\+|#+)?[rs]?$/g, Te = /(\*)(0+)|(#+)(0+)|(0+)/g, N = /^(0+)$/;
  function Ee(e) {
    var t = {};
    return e[e.length - 1] === `r` ? t.roundingPriority = `morePrecision` : e[e.length - 1] === `s` && (t.roundingPriority = `lessPrecision`), 
    e.replace(M, function(e, n, r) {
      return typeof r == `string` ? r === `+` ? t.minimumSignificantDigits = n.length : n[0] === `#` ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, 
      t.maximumSignificantDigits = n.length + (typeof r == `string` ? r.length : 0)) : (t.minimumSignificantDigits = n.length, 
      t.maximumSignificantDigits = n.length), ``;
    }), t;
  }
  function De(e) {
    switch (e) {
     case `sign-auto`:
      return {
        signDisplay: `auto`
      };

     case `sign-accounting`:
     case `()`:
      return {
        currencySign: `accounting`
      };

     case `sign-always`:
     case `+!`:
      return {
        signDisplay: `always`
      };

     case `sign-accounting-always`:
     case `()!`:
      return {
        signDisplay: `always`,
        currencySign: `accounting`
      };

     case `sign-except-zero`:
     case `+?`:
      return {
        signDisplay: `exceptZero`
      };

     case `sign-accounting-except-zero`:
     case `()?`:
      return {
        signDisplay: `exceptZero`,
        currencySign: `accounting`
      };

     case `sign-never`:
     case `+_`:
      return {
        signDisplay: `never`
      };
    }
  }
  function Oe(e) {
    var t;
    if (e[0] === `E` && e[1] === `E` ? (t = {
      notation: `engineering`
    }, e = e.slice(2)) : e[0] === `E` && (t = {
      notation: `scientific`
    }, e = e.slice(1)), t) {
      var n = e.slice(0, 2);
      if (n === `+!` ? (t.signDisplay = `always`, e = e.slice(2)) : n === `+?` && (t.signDisplay = `exceptZero`, 
      e = e.slice(2)), !N.test(e)) throw Error(`Malformed concise eng/scientific notation`);
      t.minimumIntegerDigits = e.length;
    }
    return t;
  }
  function ke(e) {
    return De(e) || {};
  }
  function Ae(e) {
    for (var t = {}, n = 0, r = e; n < r.length; n++) {
      var i = r[n];
      switch (i.stem) {
       case `percent`:
       case `%`:
        t.style = `percent`;
        continue;

       case `%x100`:
        t.style = `percent`, t.scale = 100;
        continue;

       case `currency`:
        t.style = `currency`, t.currency = i.options[0];
        continue;

       case `group-off`:
       case `,_`:
        t.useGrouping = !1;
        continue;

       case `precision-integer`:
       case `.`:
        t.maximumFractionDigits = 0;
        continue;

       case `measure-unit`:
       case `unit`:
        t.style = `unit`, t.unit = we(i.options[0]);
        continue;

       case `compact-short`:
       case `K`:
        t.notation = `compact`, t.compactDisplay = `short`;
        continue;

       case `compact-long`:
       case `KK`:
        t.notation = `compact`, t.compactDisplay = `long`;
        continue;

       case `scientific`:
        t = x(x(x({}, t), {
          notation: `scientific`
        }), i.options.reduce(function(e, t) {
          return x(x({}, e), ke(t));
        }, {}));
        continue;

       case `engineering`:
        t = x(x(x({}, t), {
          notation: `engineering`
        }), i.options.reduce(function(e, t) {
          return x(x({}, e), ke(t));
        }, {}));
        continue;

       case `notation-simple`:
        t.notation = `standard`;
        continue;

       case `unit-width-narrow`:
        t.currencyDisplay = `narrowSymbol`, t.unitDisplay = `narrow`;
        continue;

       case `unit-width-short`:
        t.currencyDisplay = `code`, t.unitDisplay = `short`;
        continue;

       case `unit-width-full-name`:
        t.currencyDisplay = `name`, t.unitDisplay = `long`;
        continue;

       case `unit-width-iso-code`:
        t.currencyDisplay = `symbol`;
        continue;

       case `scale`:
        t.scale = parseFloat(i.options[0]);
        continue;

       case `rounding-mode-floor`:
        t.roundingMode = `floor`;
        continue;

       case `rounding-mode-ceiling`:
        t.roundingMode = `ceil`;
        continue;

       case `rounding-mode-down`:
        t.roundingMode = `trunc`;
        continue;

       case `rounding-mode-up`:
        t.roundingMode = `expand`;
        continue;

       case `rounding-mode-half-even`:
        t.roundingMode = `halfEven`;
        continue;

       case `rounding-mode-half-down`:
        t.roundingMode = `halfTrunc`;
        continue;

       case `rounding-mode-half-up`:
        t.roundingMode = `halfExpand`;
        continue;

       case `integer-width`:
        if (i.options.length > 1) throw RangeError(`integer-width stems only accept a single optional option`);
        i.options[0].replace(Te, function(e, n, r, i, a, o) {
          if (n) t.minimumIntegerDigits = r.length; else if (i && a) throw Error(`We currently do not support maximum integer digits`); else if (o) throw Error(`We currently do not support exact integer digits`);
          return ``;
        });
        continue;
      }
      if (N.test(i.stem)) {
        t.minimumIntegerDigits = i.stem.length;
        continue;
      }
      if (j.test(i.stem)) {
        if (i.options.length > 1) throw RangeError(`Fraction-precision stems only accept a single optional option`);
        i.stem.replace(j, function(e, n, r, i, a, o) {
          return r === `*` ? t.minimumFractionDigits = n.length : i && i[0] === `#` ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, 
          t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, 
          t.maximumFractionDigits = n.length), ``;
        });
        var a = i.options[0];
        a === `w` ? t = x(x({}, t), {
          trailingZeroDisplay: `stripIfInteger`
        }) : a && (t = x(x({}, t), Ee(a)));
        continue;
      }
      if (M.test(i.stem)) {
        t = x(x({}, t), Ee(i.stem));
        continue;
      }
      var o = De(i.stem);
      o && (t = x(x({}, t), o));
      var s = Oe(i.stem);
      s && (t = x(x({}, t), s));
    }
    return t;
  }
  var P = {
    "001": [ `H`, `h` ],
    419: [ `h`, `H`, `hB`, `hb` ],
    AC: [ `H`, `h`, `hb`, `hB` ],
    AD: [ `H`, `hB` ],
    AE: [ `h`, `hB`, `hb`, `H` ],
    AF: [ `H`, `hb`, `hB`, `h` ],
    AG: [ `h`, `hb`, `H`, `hB` ],
    AI: [ `H`, `h`, `hb`, `hB` ],
    AL: [ `h`, `H`, `hB` ],
    AM: [ `H`, `hB` ],
    AO: [ `H`, `hB` ],
    AR: [ `h`, `H`, `hB`, `hb` ],
    AS: [ `h`, `H` ],
    AT: [ `H`, `hB` ],
    AU: [ `h`, `hb`, `H`, `hB` ],
    AW: [ `H`, `hB` ],
    AX: [ `H` ],
    AZ: [ `H`, `hB`, `h` ],
    BA: [ `H`, `hB`, `h` ],
    BB: [ `h`, `hb`, `H`, `hB` ],
    BD: [ `h`, `hB`, `H` ],
    BE: [ `H`, `hB` ],
    BF: [ `H`, `hB` ],
    BG: [ `H`, `hB`, `h` ],
    BH: [ `h`, `hB`, `hb`, `H` ],
    BI: [ `H`, `h` ],
    BJ: [ `H`, `hB` ],
    BL: [ `H`, `hB` ],
    BM: [ `h`, `hb`, `H`, `hB` ],
    BN: [ `hb`, `hB`, `h`, `H` ],
    BO: [ `h`, `H`, `hB`, `hb` ],
    BQ: [ `H` ],
    BR: [ `H`, `hB` ],
    BS: [ `h`, `hb`, `H`, `hB` ],
    BT: [ `h`, `H` ],
    BW: [ `H`, `h`, `hb`, `hB` ],
    BY: [ `H`, `h` ],
    BZ: [ `H`, `h`, `hb`, `hB` ],
    CA: [ `h`, `hb`, `H`, `hB` ],
    CC: [ `H`, `h`, `hb`, `hB` ],
    CD: [ `hB`, `H` ],
    CF: [ `H`, `h`, `hB` ],
    CG: [ `H`, `hB` ],
    CH: [ `H`, `hB`, `h` ],
    CI: [ `H`, `hB` ],
    CK: [ `H`, `h`, `hb`, `hB` ],
    CL: [ `h`, `H`, `hB`, `hb` ],
    CM: [ `H`, `h`, `hB` ],
    CN: [ `H`, `hB`, `hb`, `h` ],
    CO: [ `h`, `H`, `hB`, `hb` ],
    CP: [ `H` ],
    CR: [ `h`, `H`, `hB`, `hb` ],
    CU: [ `h`, `H`, `hB`, `hb` ],
    CV: [ `H`, `hB` ],
    CW: [ `H`, `hB` ],
    CX: [ `H`, `h`, `hb`, `hB` ],
    CY: [ `h`, `H`, `hb`, `hB` ],
    CZ: [ `H` ],
    DE: [ `H`, `hB` ],
    DG: [ `H`, `h`, `hb`, `hB` ],
    DJ: [ `h`, `H` ],
    DK: [ `H` ],
    DM: [ `h`, `hb`, `H`, `hB` ],
    DO: [ `h`, `H`, `hB`, `hb` ],
    DZ: [ `h`, `hB`, `hb`, `H` ],
    EA: [ `H`, `h`, `hB`, `hb` ],
    EC: [ `h`, `H`, `hB`, `hb` ],
    EE: [ `H`, `hB` ],
    EG: [ `h`, `hB`, `hb`, `H` ],
    EH: [ `h`, `hB`, `hb`, `H` ],
    ER: [ `h`, `H` ],
    ES: [ `H`, `hB`, `h`, `hb` ],
    ET: [ `hB`, `hb`, `h`, `H` ],
    FI: [ `H` ],
    FJ: [ `h`, `hb`, `H`, `hB` ],
    FK: [ `H`, `h`, `hb`, `hB` ],
    FM: [ `h`, `hb`, `H`, `hB` ],
    FO: [ `H`, `h` ],
    FR: [ `H`, `hB` ],
    GA: [ `H`, `hB` ],
    GB: [ `H`, `h`, `hb`, `hB` ],
    GD: [ `h`, `hb`, `H`, `hB` ],
    GE: [ `H`, `hB`, `h` ],
    GF: [ `H`, `hB` ],
    GG: [ `H`, `h`, `hb`, `hB` ],
    GH: [ `h`, `H` ],
    GI: [ `H`, `h`, `hb`, `hB` ],
    GL: [ `H`, `h` ],
    GM: [ `h`, `hb`, `H`, `hB` ],
    GN: [ `H`, `hB` ],
    GP: [ `H`, `hB` ],
    GQ: [ `H`, `hB`, `h`, `hb` ],
    GR: [ `h`, `H`, `hb`, `hB` ],
    GT: [ `h`, `H`, `hB`, `hb` ],
    GU: [ `h`, `hb`, `H`, `hB` ],
    GW: [ `H`, `hB` ],
    GY: [ `h`, `hb`, `H`, `hB` ],
    HK: [ `h`, `hB`, `hb`, `H` ],
    HN: [ `h`, `H`, `hB`, `hb` ],
    HR: [ `H`, `hB` ],
    HU: [ `H`, `h` ],
    IC: [ `H`, `h`, `hB`, `hb` ],
    ID: [ `H` ],
    IE: [ `H`, `h`, `hb`, `hB` ],
    IL: [ `H`, `hB` ],
    IM: [ `H`, `h`, `hb`, `hB` ],
    IN: [ `h`, `H` ],
    IO: [ `H`, `h`, `hb`, `hB` ],
    IQ: [ `h`, `hB`, `hb`, `H` ],
    IR: [ `hB`, `H` ],
    IS: [ `H` ],
    IT: [ `H`, `hB` ],
    JE: [ `H`, `h`, `hb`, `hB` ],
    JM: [ `h`, `hb`, `H`, `hB` ],
    JO: [ `h`, `hB`, `hb`, `H` ],
    JP: [ `H`, `K`, `h` ],
    KE: [ `hB`, `hb`, `H`, `h` ],
    KG: [ `H`, `h`, `hB`, `hb` ],
    KH: [ `hB`, `h`, `H`, `hb` ],
    KI: [ `h`, `hb`, `H`, `hB` ],
    KM: [ `H`, `h`, `hB`, `hb` ],
    KN: [ `h`, `hb`, `H`, `hB` ],
    KP: [ `h`, `H`, `hB`, `hb` ],
    KR: [ `h`, `H`, `hB`, `hb` ],
    KW: [ `h`, `hB`, `hb`, `H` ],
    KY: [ `h`, `hb`, `H`, `hB` ],
    KZ: [ `H`, `hB` ],
    LA: [ `H`, `hb`, `hB`, `h` ],
    LB: [ `h`, `hB`, `hb`, `H` ],
    LC: [ `h`, `hb`, `H`, `hB` ],
    LI: [ `H`, `hB`, `h` ],
    LK: [ `H`, `h`, `hB`, `hb` ],
    LR: [ `h`, `hb`, `H`, `hB` ],
    LS: [ `h`, `H` ],
    LT: [ `H`, `h`, `hb`, `hB` ],
    LU: [ `H`, `h`, `hB` ],
    LV: [ `H`, `hB`, `hb`, `h` ],
    LY: [ `h`, `hB`, `hb`, `H` ],
    MA: [ `H`, `h`, `hB`, `hb` ],
    MC: [ `H`, `hB` ],
    MD: [ `H`, `hB` ],
    ME: [ `H`, `hB`, `h` ],
    MF: [ `H`, `hB` ],
    MG: [ `H`, `h` ],
    MH: [ `h`, `hb`, `H`, `hB` ],
    MK: [ `H`, `h`, `hb`, `hB` ],
    ML: [ `H` ],
    MM: [ `hB`, `hb`, `H`, `h` ],
    MN: [ `H`, `h`, `hb`, `hB` ],
    MO: [ `h`, `hB`, `hb`, `H` ],
    MP: [ `h`, `hb`, `H`, `hB` ],
    MQ: [ `H`, `hB` ],
    MR: [ `h`, `hB`, `hb`, `H` ],
    MS: [ `H`, `h`, `hb`, `hB` ],
    MT: [ `H`, `h` ],
    MU: [ `H`, `h` ],
    MV: [ `H`, `h` ],
    MW: [ `h`, `hb`, `H`, `hB` ],
    MX: [ `h`, `H`, `hB`, `hb` ],
    MY: [ `hb`, `hB`, `h`, `H` ],
    MZ: [ `H`, `hB` ],
    NA: [ `h`, `H`, `hB`, `hb` ],
    NC: [ `H`, `hB` ],
    NE: [ `H` ],
    NF: [ `H`, `h`, `hb`, `hB` ],
    NG: [ `H`, `h`, `hb`, `hB` ],
    NI: [ `h`, `H`, `hB`, `hb` ],
    NL: [ `H`, `hB` ],
    NO: [ `H`, `h` ],
    NP: [ `H`, `h`, `hB` ],
    NR: [ `H`, `h`, `hb`, `hB` ],
    NU: [ `H`, `h`, `hb`, `hB` ],
    NZ: [ `h`, `hb`, `H`, `hB` ],
    OM: [ `h`, `hB`, `hb`, `H` ],
    PA: [ `h`, `H`, `hB`, `hb` ],
    PE: [ `h`, `H`, `hB`, `hb` ],
    PF: [ `H`, `h`, `hB` ],
    PG: [ `h`, `H` ],
    PH: [ `h`, `hB`, `hb`, `H` ],
    PK: [ `h`, `hB`, `H` ],
    PL: [ `H`, `h` ],
    PM: [ `H`, `hB` ],
    PN: [ `H`, `h`, `hb`, `hB` ],
    PR: [ `h`, `H`, `hB`, `hb` ],
    PS: [ `h`, `hB`, `hb`, `H` ],
    PT: [ `H`, `hB` ],
    PW: [ `h`, `H` ],
    PY: [ `h`, `H`, `hB`, `hb` ],
    QA: [ `h`, `hB`, `hb`, `H` ],
    RE: [ `H`, `hB` ],
    RO: [ `H`, `hB` ],
    RS: [ `H`, `hB`, `h` ],
    RU: [ `H` ],
    RW: [ `H`, `h` ],
    SA: [ `h`, `hB`, `hb`, `H` ],
    SB: [ `h`, `hb`, `H`, `hB` ],
    SC: [ `H`, `h`, `hB` ],
    SD: [ `h`, `hB`, `hb`, `H` ],
    SE: [ `H` ],
    SG: [ `h`, `hb`, `H`, `hB` ],
    SH: [ `H`, `h`, `hb`, `hB` ],
    SI: [ `H`, `hB` ],
    SJ: [ `H` ],
    SK: [ `H` ],
    SL: [ `h`, `hb`, `H`, `hB` ],
    SM: [ `H`, `h`, `hB` ],
    SN: [ `H`, `h`, `hB` ],
    SO: [ `h`, `H` ],
    SR: [ `H`, `hB` ],
    SS: [ `h`, `hb`, `H`, `hB` ],
    ST: [ `H`, `hB` ],
    SV: [ `h`, `H`, `hB`, `hb` ],
    SX: [ `H`, `h`, `hb`, `hB` ],
    SY: [ `h`, `hB`, `hb`, `H` ],
    SZ: [ `h`, `hb`, `H`, `hB` ],
    TA: [ `H`, `h`, `hb`, `hB` ],
    TC: [ `h`, `hb`, `H`, `hB` ],
    TD: [ `h`, `H`, `hB` ],
    TF: [ `H`, `h`, `hB` ],
    TG: [ `H`, `hB` ],
    TH: [ `H`, `h` ],
    TJ: [ `H`, `h` ],
    TL: [ `H`, `hB`, `hb`, `h` ],
    TM: [ `H`, `h` ],
    TN: [ `h`, `hB`, `hb`, `H` ],
    TO: [ `h`, `H` ],
    TR: [ `H`, `hB` ],
    TT: [ `h`, `hb`, `H`, `hB` ],
    TW: [ `hB`, `hb`, `h`, `H` ],
    TZ: [ `hB`, `hb`, `H`, `h` ],
    UA: [ `H`, `hB`, `h` ],
    UG: [ `hB`, `hb`, `H`, `h` ],
    UM: [ `h`, `hb`, `H`, `hB` ],
    US: [ `h`, `hb`, `H`, `hB` ],
    UY: [ `h`, `H`, `hB`, `hb` ],
    UZ: [ `H`, `hB`, `h` ],
    VA: [ `H`, `h`, `hB` ],
    VC: [ `h`, `hb`, `H`, `hB` ],
    VE: [ `h`, `H`, `hB`, `hb` ],
    VG: [ `h`, `hb`, `H`, `hB` ],
    VI: [ `h`, `hb`, `H`, `hB` ],
    VN: [ `H`, `h` ],
    VU: [ `h`, `H` ],
    WF: [ `H`, `hB` ],
    WS: [ `h`, `H` ],
    XK: [ `H`, `hB`, `h` ],
    YE: [ `h`, `hB`, `hb`, `H` ],
    YT: [ `H`, `hB` ],
    ZA: [ `H`, `h`, `hb`, `hB` ],
    ZM: [ `h`, `hb`, `H`, `hB` ],
    ZW: [ `H`, `h` ],
    "af-ZA": [ `H`, `h`, `hB`, `hb` ],
    "ar-001": [ `h`, `hB`, `hb`, `H` ],
    "ca-ES": [ `H`, `h`, `hB` ],
    "en-001": [ `h`, `hb`, `H`, `hB` ],
    "en-HK": [ `h`, `hb`, `H`, `hB` ],
    "en-IL": [ `H`, `h`, `hb`, `hB` ],
    "en-MY": [ `h`, `hb`, `H`, `hB` ],
    "es-BR": [ `H`, `h`, `hB`, `hb` ],
    "es-ES": [ `H`, `h`, `hB`, `hb` ],
    "es-GQ": [ `H`, `h`, `hB`, `hb` ],
    "fr-CA": [ `H`, `h`, `hB` ],
    "gl-ES": [ `H`, `h`, `hB` ],
    "gu-IN": [ `hB`, `hb`, `h`, `H` ],
    "hi-IN": [ `hB`, `h`, `H` ],
    "it-CH": [ `H`, `h`, `hB` ],
    "it-IT": [ `H`, `h`, `hB` ],
    "kn-IN": [ `hB`, `h`, `H` ],
    "ml-IN": [ `hB`, `h`, `H` ],
    "mr-IN": [ `hB`, `hb`, `h`, `H` ],
    "pa-IN": [ `hB`, `hb`, `h`, `H` ],
    "ta-IN": [ `hB`, `h`, `hb`, `H` ],
    "te-IN": [ `hB`, `h`, `H` ],
    "zu-ZA": [ `H`, `hB`, `hb`, `h` ]
  };
  function je(e, t) {
    for (var n = ``, r = 0; r < e.length; r++) {
      var i = e.charAt(r);
      if (i === `j`) {
        for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; ) a++, r++;
        var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = `a`, l = Me(t);
        for ((l == `H` || l == `k`) && (s = 0); s-- > 0; ) n += c;
        for (;o-- > 0; ) n = l + n;
      } else n += i === `J` ? `H` : i;
    }
    return n;
  }
  function Me(e) {
    var t = e.hourCycle;
    if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), 
    t) switch (t) {
     case `h24`:
      return `k`;

     case `h23`:
      return `H`;

     case `h12`:
      return `h`;

     case `h11`:
      return `K`;

     default:
      throw Error(`Invalid hourCycle`);
    }
    var n = e.language, r;
    return n !== `root` && (r = e.maximize().region), (P[r || ``] || P[n || ``] || P[`${n}-001`] || P[`001`])[0];
  }
  var Ne = RegExp(`^${ye.source}*`), Pe = RegExp(`${ye.source}*$`);
  function F(e, t) {
    return {
      start: e,
      end: t
    };
  }
  var Fe = !!String.prototype.startsWith && `_a`.startsWith(`a`, 1), Ie = !!String.fromCodePoint, Le = !!Object.fromEntries, Re = !!String.prototype.codePointAt, ze = !!String.prototype.trimStart, Be = !!String.prototype.trimEnd, Ve = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
    return typeof e == `number` && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
  }, I = !0;
  try {
    I = qe(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`).exec(`a`)?.[0] === `a`;
  } catch {
    I = !1;
  }
  var He = Fe ? function(e, t, n) {
    return e.startsWith(t, n);
  } : function(e, t, n) {
    return e.slice(n, n + t.length) === t;
  }, L = Ie ? String.fromCodePoint : function() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    for (var n = ``, r = e.length, i = 0, a; r > i; ) {
      if (a = e[i++], a > 1114111) throw RangeError(a + ` is not a valid code point`);
      n += a < 65536 ? String.fromCharCode(a) : String.fromCharCode(((a -= 65536) >> 10) + 55296, a % 1024 + 56320);
    }
    return n;
  }, Ue = Le ? Object.fromEntries : function(e) {
    for (var t = {}, n = 0, r = e; n < r.length; n++) {
      var i = r[n], a = i[0];
      t[a] = i[1];
    }
    return t;
  }, We = Re ? function(e, t) {
    return e.codePointAt(t);
  } : function(e, t) {
    var n = e.length;
    if (!(t < 0 || t >= n)) {
      var r = e.charCodeAt(t), i;
      return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
    }
  }, Ge = ze ? function(e) {
    return e.trimStart();
  } : function(e) {
    return e.replace(Ne, ``);
  }, Ke = Be ? function(e) {
    return e.trimEnd();
  } : function(e) {
    return e.replace(Pe, ``);
  };
  function qe(e, t) {
    return new RegExp(e, t);
  }
  var R;
  if (I) {
    var Je = qe(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`);
    R = function(e, t) {
      return Je.lastIndex = t, Je.exec(e)[1] ?? ``;
    };
  } else R = function(e, t) {
    for (var n = []; ;) {
      var r = We(e, t);
      if (r === void 0 || Qe(r) || $e(r)) break;
      n.push(r), t += r >= 65536 ? 2 : 1;
    }
    return L.apply(void 0, n);
  };
  var Ye = function() {
    function e(e, t) {
      t === void 0 && (t = {}), this.message = e, this.position = {
        offset: 0,
        line: 1,
        column: 1
      }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, 
      this.shouldParseSkeletons = !!t.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0) throw Error(`parser can only be used once`);
      return this.parseMessage(0, ``, !1);
    }, e.prototype.parseMessage = function(e, t, n) {
      for (var r = []; !this.isEOF(); ) {
        var i = this.char();
        if (i === 123) {
          var a = this.parseArgument(e, n);
          if (a.err) return a;
          r.push(a.val);
        } else if (i === 125 && e > 0) break; else if (i === 35 && (t === `plural` || t === `selectordinal`)) {
          var o = this.clonePosition();
          this.bump(), r.push({
            type: D.pound,
            location: F(o, this.clonePosition())
          });
        } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
          if (n) break;
          return this.error(E.UNMATCHED_CLOSING_TAG, F(this.clonePosition(), this.clonePosition()));
        } else if (i === 60 && !this.ignoreTag && z(this.peek() || 0)) {
          var a = this.parseTag(e, t);
          if (a.err) return a;
          r.push(a.val);
        } else {
          var a = this.parseLiteral(e, t);
          if (a.err) return a;
          r.push(a.val);
        }
      }
      return {
        val: r,
        err: null
      };
    }, e.prototype.parseTag = function(e, t) {
      var n = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf(`/>`)) return {
        val: {
          type: D.literal,
          value: `<${r}/>`,
          location: F(n, this.clonePosition())
        },
        err: null
      };
      if (this.bumpIf(`>`)) {
        var i = this.parseMessage(e + 1, t, !0);
        if (i.err) return i;
        var a = i.val, o = this.clonePosition();
        if (this.bumpIf(`</`)) {
          if (this.isEOF() || !z(this.char())) return this.error(E.INVALID_TAG, F(o, this.clonePosition()));
          var s = this.clonePosition();
          return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(`>`) ? {
            val: {
              type: D.tag,
              value: r,
              children: a,
              location: F(n, this.clonePosition())
            },
            err: null
          } : this.error(E.INVALID_TAG, F(o, this.clonePosition()))) : this.error(E.UNMATCHED_CLOSING_TAG, F(s, this.clonePosition()));
        }
        return this.error(E.UNCLOSED_TAG, F(n, this.clonePosition()));
      }
      return this.error(E.INVALID_TAG, F(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Ze(this.char()); ) this.bump();
      return this.message.slice(e, this.offset());
    }, e.prototype.parseLiteral = function(e, t) {
      for (var n = this.clonePosition(), r = ``; ;) {
        var i = this.tryParseQuote(t);
        if (i) {
          r += i;
          continue;
        }
        var a = this.tryParseUnquoted(e, t);
        if (a) {
          r += a;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          r += o;
          continue;
        }
        break;
      }
      var s = F(n, this.clonePosition());
      return {
        val: {
          type: D.literal,
          value: r,
          location: s
        },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Xe(this.peek() || 0)) ? (this.bump(), 
      `<`) : null;
    }, e.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39) return null;
      switch (this.peek()) {
       case 39:
        return this.bump(), this.bump(), `'`;

       case 123:
       case 60:
       case 62:
       case 125:
        break;

       case 35:
        if (e === `plural` || e === `selectordinal`) break;
        return null;

       default:
        return null;
      }
      this.bump();
      var t = [ this.char() ];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39) {
          if (this.peek() === 39) t.push(39), this.bump(); else {
            this.bump();
            break;
          }
        } else t.push(n);
        this.bump();
      }
      return L.apply(void 0, t);
    }, e.prototype.tryParseUnquoted = function(e, t) {
      if (this.isEOF()) return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (t === `plural` || t === `selectordinal`) || n === 125 && e > 0 ? null : (this.bump(), 
      L(n));
    }, e.prototype.parseArgument = function(e, t) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition()));
      if (this.char() === 125) return this.bump(), this.error(E.EMPTY_ARGUMENT, F(n, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r) return this.error(E.MALFORMED_ARGUMENT, F(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF()) return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition()));
      switch (this.char()) {
       case 125:
        return this.bump(), {
          val: {
            type: D.argument,
            value: r,
            location: F(n, this.clonePosition())
          },
          err: null
        };

       case 44:
        return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);

       default:
        return this.error(E.MALFORMED_ARGUMENT, F(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), t = this.offset(), n = R(this.message, t), r = t + n.length;
      return this.bumpTo(r), {
        value: n,
        location: F(e, this.clonePosition())
      };
    }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
      var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
      switch (a) {
       case ``:
        return this.error(E.EXPECT_ARGUMENT_TYPE, F(i, o));

       case `number`:
       case `date`:
       case `time`:
        this.bumpSpace();
        var s = null;
        if (this.bumpIf(`,`)) {
          this.bumpSpace();
          var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
          if (l.err) return l;
          var u = Ke(l.val);
          if (u.length === 0) return this.error(E.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
          s = {
            style: u,
            styleLocation: F(c, this.clonePosition())
          };
        }
        var d = this.tryParseArgumentClose(r);
        if (d.err) return d;
        var f = F(r, this.clonePosition());
        if (s && He(s?.style, `::`, 0)) {
          var p = Ge(s.style.slice(2));
          if (a === `number`) {
            var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
            return l.err ? l : {
              val: {
                type: D.number,
                value: n,
                location: f,
                style: l.val
              },
              err: null
            };
          }
          if (p.length === 0) return this.error(E.EXPECT_DATE_TIME_SKELETON, f);
          var m = p;
          this.locale && (m = je(p, this.locale));
          var u = {
            type: O.dateTime,
            pattern: m,
            location: s.styleLocation,
            parsedOptions: this.shouldParseSkeletons ? xe(m) : {}
          };
          return {
            val: {
              type: a === `date` ? D.date : D.time,
              value: n,
              location: f,
              style: u
            },
            err: null
          };
        }
        return {
          val: {
            type: a === `number` ? D.number : a === `date` ? D.date : D.time,
            value: n,
            location: f,
            style: s?.style ?? null
          },
          err: null
        };

       case `plural`:
       case `selectordinal`:
       case `select`:
        var h = this.clonePosition();
        if (this.bumpSpace(), !this.bumpIf(`,`)) return this.error(E.EXPECT_SELECT_ARGUMENT_OPTIONS, F(h, x({}, h)));
        this.bumpSpace();
        var g = this.parseIdentifierIfPossible(), _ = 0;
        if (a !== `select` && g.value === `offset`) {
          if (!this.bumpIf(`:`)) return this.error(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F(this.clonePosition(), this.clonePosition()));
          this.bumpSpace();
          var l = this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, E.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
          if (l.err) return l;
          this.bumpSpace(), g = this.parseIdentifierIfPossible(), _ = l.val;
        }
        var v = this.tryParsePluralOrSelectOptions(e, a, t, g);
        if (v.err) return v;
        var d = this.tryParseArgumentClose(r);
        if (d.err) return d;
        var y = F(r, this.clonePosition());
        return a === `select` ? {
          val: {
            type: D.select,
            value: n,
            options: Ue(v.val),
            location: y
          },
          err: null
        } : {
          val: {
            type: D.plural,
            value: n,
            options: Ue(v.val),
            offset: _,
            pluralType: a === `plural` ? `cardinal` : `ordinal`,
            location: y
          },
          err: null
        };

       default:
        return this.error(E.INVALID_ARGUMENT_TYPE, F(i, o));
      }
    }, e.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, F(e, this.clonePosition())) : (this.bump(), 
      {
        val: !0,
        err: null
      });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, t = this.clonePosition(); !this.isEOF(); ) switch (this.char()) {
       case 39:
        this.bump();
        var n = this.clonePosition();
        if (!this.bumpUntil(`'`)) return this.error(E.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, F(n, this.clonePosition()));
        this.bump();
        break;

       case 123:
        e += 1, this.bump();
        break;

       case 125:
        if (e > 0) --e; else return {
          val: this.message.slice(t.offset, this.offset()),
          err: null
        };
        break;

       default:
        this.bump();
      }
      return {
        val: this.message.slice(t.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
      var n = [];
      try {
        n = Ce(e);
      } catch {
        return this.error(E.INVALID_NUMBER_SKELETON, t);
      }
      return {
        val: {
          type: O.number,
          tokens: n,
          location: t,
          parsedOptions: this.shouldParseSkeletons ? Ae(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
      for (var i, a = !1, o = [], s = new Set, c = r.value, l = r.location; ;) {
        if (c.length === 0) {
          var u = this.clonePosition();
          if (t !== `select` && this.bumpIf(`=`)) {
            var d = this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_SELECTOR, E.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err) return d;
            l = F(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
          } else break;
        }
        if (s.has(c)) return this.error(t === `select` ? E.DUPLICATE_SELECT_ARGUMENT_SELECTOR : E.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
        c === `other` && (a = !0), this.bumpSpace();
        var f = this.clonePosition();
        if (!this.bumpIf(`{`)) return this.error(t === `select` ? E.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : E.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, F(this.clonePosition(), this.clonePosition()));
        var p = this.parseMessage(e + 1, t, n);
        if (p.err) return p;
        var m = this.tryParseArgumentClose(f);
        if (m.err) return m;
        o.push([ c, {
          value: p.val,
          location: F(f, this.clonePosition())
        } ]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, 
        l = i.location;
      }
      return o.length === 0 ? this.error(t === `select` ? E.EXPECT_SELECT_ARGUMENT_SELECTOR : E.EXPECT_PLURAL_ARGUMENT_SELECTOR, F(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(E.MISSING_OTHER_CLAUSE, F(this.clonePosition(), this.clonePosition())) : {
        val: o,
        err: null
      };
    }, e.prototype.tryParseDecimalInteger = function(e, t) {
      var n = 1, r = this.clonePosition();
      this.bumpIf(`+`) || this.bumpIf(`-`) && (n = -1);
      for (var i = !1, a = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57) i = !0, a = a * 10 + (o - 48), this.bump(); else break;
      }
      var s = F(r, this.clonePosition());
      return i ? (a *= n, Ve(a) ? {
        val: a,
        err: null
      } : this.error(t, s)) : this.error(e, s);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length) throw Error(`out of bound`);
      var t = We(this.message, e);
      if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
      return t;
    }, e.prototype.error = function(e, t) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: t
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, 
        this.position.offset += e < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(e) {
      if (He(this.message, e, this.offset())) {
        for (var t = 0; t < e.length; t++) this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(e) {
      var t = this.offset(), n = this.message.indexOf(e, t);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(e) {
      if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
      for (e = Math.min(e, this.message.length); ;) {
        var t = this.offset();
        if (t === e) break;
        if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
        if (this.bump(), this.isEOF()) break;
      }
    }, e.prototype.bumpSpace = function() {
      for (;!this.isEOF() && Qe(this.char()); ) this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF()) return null;
      var e = this.char(), t = this.offset();
      return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
    }, e;
  }();
  function z(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
  }
  function Xe(e) {
    return z(e) || e === 47;
  }
  function Ze(e) {
    return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
  }
  function Qe(e) {
    return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
  }
  function $e(e) {
    return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
  }
  function B(e) {
    e.forEach(function(e) {
      if (delete e.location, he(e) || ge(e)) for (var t in e.options) delete e.options[t].location, 
      B(e.options[t].value); else fe(e) && k(e.style) || (pe(e) || me(e)) && A(e.style) ? delete e.style.location : ve(e) && B(e.children);
    });
  }
  function et(e, t) {
    t === void 0 && (t = {}), t = x({
      shouldParseSkeletons: !0,
      requiresOtherClause: !0
    }, t);
    var n = new Ye(e, t).parse();
    if (n.err) {
      var r = SyntaxError(E[n.err.kind]);
      throw r.location = n.err.location, r.originalMessage = n.err.message, r;
    }
    return t?.captureLocation || B(n.val), n.val;
  }
  var V;
  (function(e) {
    e.MISSING_VALUE = `MISSING_VALUE`, e.INVALID_VALUE = `INVALID_VALUE`, e.MISSING_INTL_API = `MISSING_INTL_API`;
  })(V ||= {});
  var H = function(e) {
    b(t, e);
    function t(t, n, r) {
      var i = e.call(this, t) || this;
      return i.code = n, i.originalMessage = r, i;
    }
    return t.prototype.toString = function() {
      return `[formatjs Error: ${this.code}] ${this.message}`;
    }, t;
  }(Error), tt = function(e) {
    b(t, e);
    function t(t, n, r, i) {
      return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join(`", "`)}"`, V.INVALID_VALUE, i) || this;
    }
    return t;
  }(H), nt = function(e) {
    b(t, e);
    function t(t, n, r) {
      return e.call(this, `Value for "${t}" must be of type ${n}`, V.INVALID_VALUE, r) || this;
    }
    return t;
  }(H), rt = function(e) {
    b(t, e);
    function t(t, n) {
      return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, V.MISSING_VALUE, n) || this;
    }
    return t;
  }(H), U;
  (function(e) {
    e[e.literal = 0] = `literal`, e[e.object = 1] = `object`;
  })(U ||= {});
  function it(e) {
    return e.length < 2 ? e : e.reduce(function(e, t) {
      var n = e[e.length - 1];
      return !n || n.type !== U.literal || t.type !== U.literal ? e.push(t) : n.value += t.value, 
      e;
    }, []);
  }
  function at(e) {
    return typeof e == `function`;
  }
  function W(e, t, n, r, i, a, o) {
    if (e.length === 1 && ue(e[0])) return [ {
      type: U.literal,
      value: e[0].value
    } ];
    for (var s = [], c = 0, l = e; c < l.length; c++) {
      var u = l[c];
      if (ue(u)) {
        s.push({
          type: U.literal,
          value: u.value
        });
        continue;
      }
      if (_e(u)) {
        typeof a == `number` && s.push({
          type: U.literal,
          value: n.getNumberFormat(t).format(a)
        });
        continue;
      }
      var d = u.value;
      if (!(i && d in i)) throw new rt(d, o);
      var f = i[d];
      if (de(u)) {
        (!f || typeof f == `string` || typeof f == `number`) && (f = typeof f == `string` || typeof f == `number` ? String(f) : ``), 
        s.push({
          type: typeof f == `string` ? U.literal : U.object,
          value: f
        });
        continue;
      }
      if (pe(u)) {
        var p = typeof u.style == `string` ? r.date[u.style] : A(u.style) ? u.style.parsedOptions : void 0;
        s.push({
          type: U.literal,
          value: n.getDateTimeFormat(t, p).format(f)
        });
        continue;
      }
      if (me(u)) {
        var p = typeof u.style == `string` ? r.time[u.style] : A(u.style) ? u.style.parsedOptions : r.time.medium;
        s.push({
          type: U.literal,
          value: n.getDateTimeFormat(t, p).format(f)
        });
        continue;
      }
      if (fe(u)) {
        var p = typeof u.style == `string` ? r.number[u.style] : k(u.style) ? u.style.parsedOptions : void 0;
        p && p.scale && (f *= p.scale || 1), s.push({
          type: U.literal,
          value: n.getNumberFormat(t, p).format(f)
        });
        continue;
      }
      if (ve(u)) {
        var m = u.children, h = u.value, g = i[h];
        if (!at(g)) throw new nt(h, `function`, o);
        var _ = g(W(m, t, n, r, i, a).map(function(e) {
          return e.value;
        }));
        Array.isArray(_) || (_ = [ _ ]), s.push.apply(s, _.map(function(e) {
          return {
            type: typeof e == `string` ? U.literal : U.object,
            value: e
          };
        }));
      }
      if (he(u)) {
        var v = u.options[f] || u.options.other;
        if (!v) throw new tt(u.value, f, Object.keys(u.options), o);
        s.push.apply(s, W(v.value, t, n, r, i));
        continue;
      }
      if (ge(u)) {
        var v = u.options[`=${f}`];
        if (!v) {
          if (!Intl.PluralRules) throw new H(`Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n`, V.MISSING_INTL_API, o);
          var y = n.getPluralRules(t, {
            type: u.pluralType
          }).select(f - (u.offset || 0));
          v = u.options[y] || u.options.other;
        }
        if (!v) throw new tt(u.value, f, Object.keys(u.options), o);
        s.push.apply(s, W(v.value, t, n, r, i, f - (u.offset || 0)));
        continue;
      }
    }
    return it(s);
  }
  function ot(e, t) {
    return t ? x(x(x({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
      return n[r] = x(x({}, e[r]), t[r] || {}), n;
    }, {})) : e;
  }
  function st(e, t) {
    return t ? Object.keys(e).reduce(function(n, r) {
      return n[r] = ot(e[r], t[r]), n;
    }, x({}, e)) : e;
  }
  function G(e) {
    return {
      create: function() {
        return {
          get: function(t) {
            return e[t];
          },
          set: function(t, n) {
            e[t] = n;
          }
        };
      }
    };
  }
  function ct(e) {
    return e === void 0 && (e = {
      number: {},
      dateTime: {},
      pluralRules: {}
    }), {
      getNumberFormat: C(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.NumberFormat).bind.apply(e, S([ void 0 ], t, !1)));
      }, {
        cache: G(e.number),
        strategy: T.variadic
      }),
      getDateTimeFormat: C(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.DateTimeFormat).bind.apply(e, S([ void 0 ], t, !1)));
      }, {
        cache: G(e.dateTime),
        strategy: T.variadic
      }),
      getPluralRules: C(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.PluralRules).bind.apply(e, S([ void 0 ], t, !1)));
      }, {
        cache: G(e.pluralRules),
        strategy: T.variadic
      })
    };
  }
  var lt = function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(e) {
        var t = a.formatToParts(e);
        if (t.length === 1) return t[0].value;
        var n = t.reduce(function(e, t) {
          return !e.length || t.type !== U.literal || typeof e[e.length - 1] != `string` ? e.push(t.value) : e[e.length - 1] += t.value, 
          e;
        }, []);
        return n.length <= 1 ? n[0] || `` : n;
      }, this.formatToParts = function(e) {
        return W(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
      }, this.resolvedOptions = function() {
        return {
          locale: a.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == `string`) {
        if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = i || {};
        o.formatters;
        var s = ee(o, [ `formatters` ]);
        this.ast = e.__parse(t, x(x({}, s), {
          locale: this.resolvedLocale
        }));
      } else this.ast = t;
      if (!Array.isArray(this.ast)) throw TypeError(`A message must be provided as a String or AST.`);
      this.formats = st(e.formats, r), this.formatters = i && i.formatters || ct(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale ||= (new Intl.NumberFormat).resolvedOptions().locale, 
        e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
      if (Intl.Locale !== void 0) {
        var t = Intl.NumberFormat.supportedLocalesOf(e);
        return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == `string` ? e : e[0]);
      }
    }, e.__parse = et, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: `currency`
        },
        percent: {
          style: `percent`
        }
      },
      date: {
        short: {
          month: `numeric`,
          day: `numeric`,
          year: `2-digit`
        },
        medium: {
          month: `short`,
          day: `numeric`,
          year: `numeric`
        },
        long: {
          month: `long`,
          day: `numeric`,
          year: `numeric`
        },
        full: {
          weekday: `long`,
          month: `long`,
          day: `numeric`,
          year: `numeric`
        }
      },
      time: {
        short: {
          hour: `numeric`,
          minute: `numeric`
        },
        medium: {
          hour: `numeric`,
          minute: `numeric`,
          second: `numeric`
        },
        long: {
          hour: `numeric`,
          minute: `numeric`,
          second: `numeric`,
          timeZoneName: `short`
        },
        full: {
          hour: `numeric`,
          minute: `numeric`,
          second: `numeric`,
          timeZoneName: `short`
        }
      }
    }, e;
  }(), K = e => {
    let t = window.location.origin;
    try {
      let n = new URL(e, t);
      return n.username = ``, n.password = ``, n.toString();
    } catch {
      return e;
    }
  }, ut = (e, t) => {
    t && [ `ar-SA`, `he-IL` ].includes(t) ? e.setAttribute(`dir`, `rtl`) : e.setAttribute(`dir`, `ltr`);
  }, q = () => {
    if (typeof document > `u`) return `/cookiecat`;
    let e = document.currentScript ?? document.querySelector(`script[src*="/cookiecat/script.js"]`);
    if (e?.src) try {
      let t = new URL(e.src, window.location.origin).origin + `/cookiecat`;
      return t.endsWith(`/`) && (t = t.slice(0, -1)), t;
    } catch (e) {
      console.warn(`Could not find baseUrl from script.src`, e);
    }
    return `/cookiecat`;
  }, dt = q(), ft = async e => {
    let t;
    try {
      t = await fetch(K(`${dt}/translations.json?locale=${e}`)).then(e => e.json());
    } catch (n) {
      console.error(`Failed to load translations for locale ${e}:`, n);
      try {
        t = `{{INJECTED_TRANSLATIONS}}`;
      } catch (e) {
        console.error(`Failed to load fallback translations:`, e), t = {};
      }
    }
    return t.default || t;
  }, pt = async e => {
    let t = e === `en-US`, [n, r] = await Promise.all([ ft(e), t ? Promise.resolve(null) : ft(`en-US`) ]), i = r ?? n;
    return (t, r) => {
      let a = n[t] ?? i[t];
      if (a === void 0) return;
      let o = new lt(a, e).format(r);
      return typeof o == `string` ? o : void 0;
    };
  }, J = q(), Y = {
    essential: !0,
    performance: !1,
    functionality: !1,
    marketing: !1,
    showBanner: !0
  }, mt = () => {
    let e = document.createElement(`div`);
    e.classList.add(`vst-dialog`), e.style.pointerEvents = `none`, e.style.position = `fixed`, 
    e.style.top = `0`, e.style.insetInlineStart = `0`, e.style.width = `100%`, e.style.height = `100%`, 
    e.style.display = `flex`, e.style.alignItems = `center`, e.style.justifyContent = `center`;
    let t = () => {
      document.body.setAttribute(`data-a11y-dialog-ignore-focus-trap`, ``);
    }, n = () => {
      document.body.removeAttribute(`data-a11y-dialog-ignore-focus-trap`);
    }, r = (r, i) => {
      let a = r === `blur` ? t : n;
      e[i ? `addEventListener` : `removeEventListener`](r, a);
    }, i = [ `blur`, `focus` ];
    i.forEach(e => r(e, !0));
    let a = new MutationObserver(t => {
      t.forEach(t => {
        t.removedNodes.forEach(t => {
          t === e && (i.forEach(e => r(e, !1)), a.disconnect());
        });
      });
    });
    return a.observe(document.body, {
      childList: !0,
      subtree: !0
    }), e;
  }, ht = () => {
    let e = document.createElement(`div`);
    return e.classList.add(`vst-dialog-component-backdrop`), e;
  };
  function gt() {
    let e = document.createElement(`div`);
    e.style.fontSize = `1rem`, document.body.appendChild(e);
    let t = window.getComputedStyle(e).fontSize;
    return document.body.removeChild(e), parseFloat(t);
  }
  var _t = () => {
    let e = document.createElement(`div`), t = document.createElement(`link`);
    return t.rel = `stylesheet`, t.href = `${J}/style.css`, t.onload = () => {
      e.appendChild(vt()), e.dispatchEvent(new Event(`stylesheetLoaded`));
    }, e.appendChild(t), e;
  }, vt = () => {
    function e(e, t) {
      return e / t + `rem`;
    }
    function t(t) {
      let n = `:root, :host {`;
      for (let r = 1; r <= 50; r++) n += `  --vst-size-${r}: ${e(r, t)};`;
      return n += `}`, n;
    }
    let n = t(gt()), r = document.createElement(`style`);
    return r.innerText = n, r;
  }, yt = (e, t) => {
    document.body.prepend(e), window.CookieCat._dialog = new h(t), window.CookieCat._dialog.show();
  }, bt = async (e, t) => {
    let n = mt();
    n.id = `cookiecat-host`, n.style.zIndex = `1499`, ut(n, t);
    let r = n.attachShadow({
      mode: `open`
    }), i = document.createElement(`div`);
    i.id = `cookiecat-banner`, i.style.pointerEvents = `all`, i.style.opacity = `0`;
    let a = _t(), o = await pt(t || `en-US`), s = _(e, o);
    i.appendChild(a), r.appendChild(i), a.addEventListener(`stylesheetLoaded`, () => {
      i.appendChild(s);
      let n = (e, t) => {
        let n = r.querySelector(e);
        n && n.addEventListener(`click`, t);
      };
      [ {
        selector: `#accept-all-cookies`,
        handler: $.acceptAll
      }, {
        selector: `#accept-essential-cookies`,
        handler: $.acceptEssential
      }, {
        selector: `#manage-preferences`,
        handler: () => xt(e, o, t)
      }, {
        selector: `#close-banner`,
        handler: $.dismissBanner
      } ].forEach(({selector: e, handler: t}) => {
        n(e, t);
      }), document.addEventListener(`DOMContentLoaded`, function() {
        let e = document.getElementById(`cookiecat-host`);
        e && e.focus();
      }), i.style.opacity = `1`;
    }), yt(n, i);
  }, xt = (e, t, n) => {
    let r = mt();
    r.id = `cookiecat-manage-preferences-host`, r.style.zIndex = `1500`, r.style.display = `flex`, 
    r.style.position = `fixed`, r.style.inset = `0`, ut(r, n);
    let i = r.attachShadow({
      mode: `open`
    }), a = document.createElement(`div`);
    a.id = `cookiecat-manage-preferences-dialog`, a.style.pointerEvents = `all`, a.style.opacity = `0`;
    let o = _t(), s = ht(), c = v(e, i, t);
    a.append(o, s), i.appendChild(a), o.addEventListener(`stylesheetLoaded`, () => {
      a.appendChild(c);
      let e = i.querySelector(`#manage-preferences`);
      e && e.addEventListener(`click`, () => {
        a.appendChild(c);
      });
      let t = () => {
        let e = document.querySelector(`#cookiecat-manage-preferences-host`);
        e && e.remove();
      };
      document.addEventListener(`keydown`, e => {
        (e.key === `Escape` || e.code === `Escape`) && t();
      }), i.querySelectorAll(`#cancel-manage-preferences, .vst-dialog-component-backdrop`).forEach(e => {
        e.addEventListener(`click`, t);
      });
      let n = i.querySelector(`#save-close-manage-preferences`);
      n && n.addEventListener(`click`, $.saveAndClose), a.style.opacity = `1`;
    }), yt(r, a);
  }, X = null, Z = async e => {
    let t = e || $._app;
    if (X) return X;
    try {
      return X = (async () => {
        let e = await fetch(K(`${J}/info?app=${t}`), {
          credentials: `include`
        });
        if (!e.ok) throw Error(`Failed to fetch: ${e.statusText}`);
        let n = await e.json();
        return $._info = n, n;
      })(), await X;
    } catch {
      return Y;
    } finally {
      X = null;
    }
  }, Q = (e, t = `${J}/accept?app=${$._app}`, n = {
    method: `POST`,
    body: JSON.stringify(e),
    credentials: `include`
  }, r = 2, i = 5e3) => {
    let a = 0, o = () => {
      fetch(K(t), n).then(async t => {
        if (!t.ok) throw Error(`Cookie status: ${t.status}`);
        let n = await t.json();
        $.removeBanner(), $.callbacks.forEach(t => {
          t({
            ...e,
            ...n
          });
        });
      }).catch(t => {
        console.error(`Cookie Cat response status:`, t), a += 1, a >= r ? (console.error(`Failed to accept cookies:`, t), 
        $.callbacks.forEach(t => {
          t({
            ...Y,
            ...e
          });
        })) : ($.removeBanner(), setTimeout(o, i));
      });
    };
    o();
  }, $ = {
    _app: ``,
    _theme: `ocean`,
    _locale: `en-US`,
    _info: Y,
    callbacks: [],
    updateAccepted: () => {
      let e = document.querySelector(`#cookiecat-manage-preferences-host`)?.shadowRoot;
      if (!e) return Y;
      let t = t => e.querySelector(`.${t}`);
      return {
        essential: t(`essential-cookies`).checked,
        performance: t(`performance-cookies`).checked,
        functionality: t(`functionality-cookies`).checked,
        marketing: t(`marketing-cookies`).checked
      };
    },
    saveAndClose: e => {
      Q($.updateAccepted());
    },
    acceptAll: e => {
      Q({
        essential: !0,
        performance: !0,
        functionality: !0,
        marketing: !0
      });
    },
    acceptEssential: e => {
      Q({
        essential: !0,
        performance: !1,
        functionality: !1,
        marketing: !1
      });
    },
    dismissBanner: () => {
      let {essential: e, performance: t, functionality: n, marketing: r} = $._info;
      Q({
        essential: e,
        performance: t,
        functionality: n,
        marketing: r
      });
    },
    removeBanner: () => {
      window.CookieCat._dialog?.destroy(), document.querySelectorAll(`#cookiecat-host, #cookiecat-manage-preferences-host`).forEach(e => {
        e.remove();
      });
    },
    showBanner: e => {
      $.removeBanner();
      let {app: t = $._app, locale: n = $._locale, theme: r = $._theme} = e || {};
      Z(t).then(() => {
        bt(r, n);
      }).catch(e => {
        console.error(e), bt(r, n);
      });
    },
    onAccept: e => {
      $.callbacks.push(e);
    },
    info: e => (Z($._app).then(t => {
      e && e(t);
    }).catch(t => {
      console.error(t), e && e($._info);
    }), $.callbacks),
    init: (e, t) => {
      if (e) {
        let {app: n, theme: r, locale: i} = e;
        n && ($._app = n), r && ($._theme = r), i && ($._locale = i), Z(n).then(e => {
          e.showBanner ? $.showBanner({
            app: n,
            theme: r,
            locale: i
          }) : $.callbacks.forEach(t => t({
            ...e
          })), t && t($._info);
        }).catch(e => {
          console.error(e), $.showBanner({
            app: n,
            theme: r,
            locale: i
          }), t && t($._info);
        });
      } else $.showBanner(), t && t($._info);
    }
  };
  window.CookieCat = $;
});