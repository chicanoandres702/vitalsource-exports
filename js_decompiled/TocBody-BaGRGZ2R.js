import { a as e } from "./rolldown-runtime-B0Z9INg1.js";

import { i as t, t as n } from "./jsx-runtime-DU6_sasz.js";

import { n as r } from "./monitoring-fZj7Xvdu.js";

import { f as i, o as a } from "./index-maEWt9hW.js";

import { A as o, F as s, U as c, V as l, i as u, k as d } from "./LocaleProvider-DoP-dlkE.js";

import { a as f } from "./GlobalStyleProvider-BWhTP2MU.js";

import { t as p } from "./uuid-DwkZyVS8.js";

import { a as m, o as h, r as g, t as _ } from "./styled-components.browser.esm-BcYycfu6.js";

import { t as v } from "./useIntl-DaqDtX5V.js";

import { d as y } from "./array-BlXv2BOg.js";

import { f as b, s as ee } from "./StaticLoader-LtUItV9i.js";

import { $ as x, C as S, J as C, X as w, Y as T, b as E, h as D, i as O, o as k, x as A } from "./actions-B2bqznsY.js";

import { $t as j, Zt as M, ct as te, dt as N, lt as ne, m as P, qt as F, t as I, u as re, ut as L, v as R } from "./Tooltip-DA2Rdtm3.js";

import { c as ie, g as ae } from "./ReaderMain-B9TAVXtz.js";

import { C as z, a as oe, c as se, d as ce, f as le, h as ue, i as de, l as fe, m as pe, n as me, o as B, p as he, r as ge, u as V } from "./UnsafeHtml-CULNzw5Z.js";

function _e() {
  let e = T();
  return {
    signOut: () => e(F())
  };
}

var H = e(t()), U = n(), ve = ({open: e, onRequestClose: t}) => {
  let n = v(), {downloadApp: i} = ie();
  return (0, U.jsx)(L, {
    type: N.Vstui,
    open: e,
    title: n.formatMessage({
      id: `readOffline.launchingApp.title`
    }),
    alert: !0,
    requireInteraction: !0,
    onRequestClose: t,
    primaryActionButton: {
      label: n.formatMessage({
        id: `base.download`
      }),
      onClick: () => {
        r(`download_app_launch_app`), i();
      }
    },
    secondaryActionButton: {
      label: n.formatMessage({
        id: `base.cancel`
      }),
      onClick: t
    },
    children: n.formatMessage({
      id: `readOffline.launchingApp.description`
    })
  });
};

h();

var W = l(), ye = e(s());

function be() {
  let e = C(j), t = C(D), n = C(R);
  return {
    getCfiForDistance: r => ce({
      bookInfo: e,
      pageBreaks: t,
      toc: n,
      distance: r
    }),
    getChapterTitleForDistance: r => le({
      bookInfo: e,
      pageBreaks: t,
      toc: n,
      distance: r
    }),
    getDistanceThroughBookWithCfi: r => he({
      bookInfo: e,
      pageBreaks: t,
      toc: n,
      cfi: r
    }),
    getDistanceThroughBookWithPage: n => pe({
      bookInfo: e,
      pageBreaks: t,
      page: n
    }),
    getPageLabelForDistance: n => ue({
      bookInfo: e,
      pageBreaks: t,
      distance: n
    })
  };
}

function xe(e) {
  return w(null, e => ({
    goToLocation: t => e(k(t))
  }))(e);
}

var G = 99.99, K = {
  Scrubber: g.div`
    position: relative;
    height: 2px;
    cursor: pointer;
    overflow: visible;
    border-radius: 2px;
    background: ${W.cloud.getShade(5)};
    display: flex;
    flex: 1;
    margin: 0;
    ${y}

    [role="tooltip"] {
      white-space: nowrap;
      top: -15px !important;
    }
  `,
  Progress: g.div`
    position: absolute;
    inset-inline-start: 0;
    inset-inline-end: ${({progress: e}) => Math.abs(e - G)}%;
    cursor: pointer;
    overflow: visible;
    height: 4px;
    margin-top: -1px;
    border-radius: 100px 0 0 100px;
    background-color: ${e => e.theme.vstui.color.primary.getShade(4)};
    ${y}
  `,
  Handle: g.div`
    inset-inline-end: -10px;
    top: -8px;
    display: block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 100%;
    background-color: ${e => e.theme.vstui.color.primary.getShade(8)};
    ${y}

    /** Tooltip container */
    > * {
      position: relative;
      left: 10px;
    }
  `,
  Overhandle: g.div`
    position: absolute;
    height: 30px;
    width: 50px;
    top: -20px;
    left: -25px;
    cursor: pointer;
    ${e => e.grabbed && `\n    cursor: -webkit-grabbing;\n    cursor: -moz-grabbing;\n    cursor: col-resize;\n  `};
  `
};

function Se(e, t) {
  return e && e.current ? Math.min(100, (t - e.current.getBoundingClientRect().left) / e.current.offsetWidth * 100) : 100;
}

var Ce = m(xe(({goToLocation: e, theme: t}) => {
  let n = v(), {isRtl: r} = z(), {currentPage: i, currentPageBreakLabel: a, isPageLoading: o} = O(), {getDistanceThroughBookWithCfi: s, getDistanceThroughBookWithPage: c, getChapterTitleForDistance: l, getCfiForDistance: u, getPageLabelForDistance: d} = be(), [f, m] = (0, 
  H.useState)(), [h, g] = (0, H.useState)(0), [_, y] = (0, H.useState)(), b = (0, 
  H.useRef)(null), x = (0, H.useRef)(null), S = p(), C = f || i?.chapterTitle, w = x.current || a, T = h * 100, E = _ || T;
  te(ne.PAGE_SCROLL, (0, H.useCallback)(e => {
    A(e);
  }, [ i, o ])), (0, H.useEffect)(() => {
    i && k();
  }, [ i ]);
  function D(e) {
    let t = l(e);
    m(t);
  }
  function k() {
    let e;
    i.cfi ? e = s(i.cfi) : i.page && (e = c(i.page)), e !== void 0 && (g(e), _ && y(void 0)), 
    x.current = null;
  }
  function A(e) {
    let t = e;
    if (!o) {
      if (t.cfi && i?.cfi) {
        let e = s(`${i.cfi}!${t.cfi}`);
        x.current = null, g(e), D(e * 100);
      }
      y(void 0);
    }
  }
  function j(t) {
    t = Math.min(G, Math.max(t, 0));
    let n = u(t);
    n && e(n);
  }
  function M(e) {
    e = Math.min(G, Math.max(e, 0));
    let t = d(e);
    x.current = t, D(e);
  }
  let N = re(150, !0, e => M(e));
  function P(e) {
    e = fe(e);
    let t = e.clientX, n = Se(b, t);
    return r && (n = ee(Math.abs(G - n), 0, G)), n;
  }
  function F(e) {
    let t = P(e);
    y(t), j(t);
  }
  function I(e) {
    let t = P(e);
    y(t), N(t);
  }
  function L(e) {
    e.stopPropagation(), V.MOUSE_MOVE.split(` `).forEach(function(e) {
      window.removeEventListener(e, I, !1);
    }), V.MOUSE_UP.split(` `).forEach(function(e) {
      window.removeEventListener(e, L, !1);
    }), _ ? j(_) : F(e);
  }
  function R(e) {
    e.stopPropagation(), V.MOUSE_MOVE.split(` `).forEach(function(e) {
      window.addEventListener(e, I, !1);
    }), V.MOUSE_UP.split(` `).forEach(function(e) {
      window.addEventListener(e, L, !1);
    });
  }
  return (0, U.jsxs)(U.Fragment, {
    children: [ (0, U.jsx)(K.Scrubber, {
      onMouseDown: R,
      ref: b,
      role: `slider`,
      "aria-label": n.formatMessage({
        id: `scrubber.bookProgression`
      }),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": _ || T,
      "aria-valuetext": n.formatMessage({
        id: `scrubber.pageNumberValue`
      }, {
        pageNumber: x.current || a
      }),
      tabIndex: 0,
      children: (0, U.jsx)(K.Progress, {
        progress: E,
        children: (0, U.jsx)(K.Handle, {
          className: _ ? `grabbed` : ``,
          onMouseDown: R,
          onTouchStart: R,
          children: o ? (0, U.jsx)(K.Overhandle, {
            grabbed: _
          }) : (0, U.jsx)(ye.default, {
            id: S,
            placement: `top`,
            theme: t,
            title: `${C}${w ? n.formatMessage({
              id: `scrubber.handleTooltip`
            }, {
              pageNumber: w
            }) : ``}`,
            children: (0, U.jsx)(K.Overhandle, {
              grabbed: _
            })
          })
        })
      })
    }), _ && (0, U.jsx)(se, {}) ]
  });
})), we = o(), q = d();

function Te() {
  return C(S);
}

function Ee() {
  let e = C(A), t = C(E), n = x(), r = e === 0, i = Math.round(e) + n.height === Math.round(t);
  return (0, H.useMemo)(() => ({
    isAtTop: r,
    isAtBottom: i
  }), [ r, i ]);
}

h();

var J = g(we.IconButton)`
  margin-inline: 10px 10px;
  &:first-child {
    margin-inline-start: 0;
  }
  &:last-child {
    margin-inline-end: 0;
  }
`, De = J, Oe = J;

function ke(e) {
  let {children: t} = e, {handleGoToNextPage: n, handleGoToPrevPage: r, hasNextPage: i, hasPreviousPage: a, isPageLoading: o} = O(), {isAtTop: s, isAtBottom: c} = Ee(), l = Te(), {bookInfo: u} = M(), d = v();
  return (0, U.jsxs)(U.Fragment, {
    children: [ (0, U.jsx)(Oe, {
      disabled: !a,
      icon: (0, U.jsx)(q.CaretLeftLarge, {}),
      label: d.formatMessage({
        id: `base.prev`
      }),
      onClick: r,
      rounded: !0,
      size: `small`,
      selected: s && !u.isFixedLayout && !o && l
    }), t, (0, U.jsx)(De, {
      disabled: !i,
      icon: (0, U.jsx)(q.CaretRightLarge, {}),
      label: d.formatMessage({
        id: `base.next`
      }),
      onClick: n,
      rounded: !0,
      size: `small`,
      selected: c && !u.isFixedLayout && !o
    }) ]
  });
}

function Ae(e, t) {
  return e[t] ?? {
    symbol: t,
    label: t
  };
}

function je() {
  let e = v();
  return (0, H.useMemo)(() => {
    let t = e.formatMessage({
      id: `key.alt`
    }), n = e.formatMessage({
      id: `key.ctrl`
    }), r = e.formatMessage({
      id: `key.cmd`
    }), i = e.formatMessage({
      id: `key.win`
    }), o = e.formatMessage({
      id: `key.esc`
    }), s = a();
    return {
      left: {
        symbol: `←`,
        label: e.formatMessage({
          id: `key.left`
        })
      },
      right: {
        symbol: `→`,
        label: e.formatMessage({
          id: `key.right`
        })
      },
      shift: {
        symbol: `⇧`,
        label: e.formatMessage({
          id: `key.shift`
        })
      },
      esc: {
        symbol: o,
        label: o
      },
      opt: s ? {
        symbol: `⌥`,
        label: e.formatMessage({
          id: `key.opt`
        })
      } : {
        symbol: t,
        label: t
      },
      ctrl: s ? {
        symbol: `⌃`,
        label: n
      } : {
        symbol: n,
        label: n
      },
      cmdOrCtrl: s ? {
        symbol: `⌘`,
        label: r
      } : {
        symbol: n,
        label: n
      },
      cmdOrWin: s ? {
        symbol: `⌘`,
        label: r
      } : {
        symbol: i,
        label: i
      }
    };
  }, [ e ]);
}

function Y(e) {
  return Ae(je(), e);
}

function X({name: e}) {
  let {symbol: t, label: n} = Y(e);
  return t === n ? (0, U.jsx)(U.Fragment, {
    children: t
  }) : (0, U.jsxs)(U.Fragment, {
    children: [ (0, U.jsx)(`span`, {
      "aria-hidden": `true`,
      children: t
    }), (0, U.jsx)(b, {
      useSpan: !0,
      children: n
    }) ]
  });
}

h();

var Me = {
  NormalButton: g.button`
    position: absolute;
    top: 10px;
    padding: 0;
    font-size: 1.3rem;
    height: 22px;
    min-height: 22px;
    max-height: 22px;
  `
}, Ne = function(e) {
  return e[e.Normal = 0] = `Normal`, e[e.Compact = 1] = `Compact`, e;
}({});

function Pe() {
  return (0, U.jsx)(`div`, {
    "aria-hidden": `true`,
    children: (0, U.jsx)(c, {
      id: `nav.backToPageLabel`,
      values: {
        shortcut: (0, U.jsxs)(U.Fragment, {
          children: [ (0, U.jsx)(X, {
            name: `shift`
          }), ` J` ]
        })
      }
    })
  });
}

var Fe = ({type: e = 0, className: t}) => {
  let n = v(), {label: r} = Y(`shift`), {lastPage: i, toggleLastPage: a} = ae(), o = u();
  if (!i) {
    return null;
  }
  let s = `${r} J`, c = n.formatMessage({
    id: `nav.backToPageLabel`
  }, {
    shortcut: s
  }), l = (0, U.jsx)(I, {
    id: o,
    children: (0, U.jsx)(Pe, {})
  });
  return e === 0 ? (0, U.jsxs)(U.Fragment, {
    children: [ (0, U.jsxs)(Me.NormalButton, {
      type: `button`,
      className: `vst-link vst-link-size-small vst-link-option-no-underline`,
      onClick: a,
      "aria-label": c,
      "data-tooltip-id": o,
      children: [ (0, U.jsx)(q.Flip, {}), n.formatMessage({
        id: `nav.backToPage`
      }) ]
    }), l ]
  }) : (0, U.jsxs)(`div`, {
    className: t,
    children: [ (0, U.jsx)(`button`, {
      type: `button`,
      className: `vst-icon-button-circle vst-icon-button-size-small`,
      onClick: a,
      "aria-label": c,
      "data-tooltip-id": o,
      children: (0, U.jsx)(q.Flip, {})
    }), l ]
  });
};

h();

var Z = {
  TitleContainer: g.div`
    width: 100%;
    position: relative;
    border-inline-end: 8px solid
      ${e => e.isCurrent ? e.theme.vstui.color.primary.getShade(6) : `transparent`};
  `,
  ExpandButtonContainer: g.div`
    position: absolute;
    inset-inline-start: 0;
    top: 10px;
  `,
  Title: g.span`
    display: block;
    font-size: 1.4rem;
    font-weight: ${e => e.isCurrent ? 700 : 400};
    text-align: start;
  `,
  PageLabel: g.span`
    color: ${W.cloud.getShade(9)};
    display: block;
    font-weight: ${e => e.isCurrent ? 700 : 400};
    padding-inline-start: 10px;
    max-width: 88px;
    min-width: 48px;
    font-size: 1.2rem;
    text-align: end;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform: translateY(${e => e.isSmall ? 1 : 3}px);
  `,
  EntryButton: g.button`
    text-align: start;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-block: ${12}px;
    padding-inline: 30px 14px;
    border: 2px solid transparent;

    ${e => e.isSmall && _`
        font-size: ${1.4 / 1.6}em;
        padding-top: ${13}px;
        padding-bottom: ${13}px;
      `}

    &:hover {
      background-color: ${e => e.theme.vstui.color.primary.getShade(1)};
    }

    &:focus {
      outline: none;
      border-color: ${e => e.theme.vstui.color.primary.getShade(6)};
      border-radius: ${e => e.isCurrent ? `4px 0px 0px 4px` : `4px`};
    }
  `
};

function Ie({isExpanded: e = !1, toc: t, onClick: n, isCurrent: i = !1}) {
  let {page: a, title: o, uuid: s, levelChildren: c, level: l} = t, {goToTocEntry: u} = B(), d = l >= 3, f = v();
  return (0, U.jsxs)(Z.TitleContainer, {
    isCurrent: i,
    children: [ c?.length > 0 && (0, U.jsx)(Z.ExpandButtonContainer, {
      children: (0, U.jsx)(me, {
        isExpanded: e,
        onClick: n,
        ariaLabel: f.formatMessage({
          id: `toc.caret.ariaLabel`
        }, {
          title: o || ``
        }),
        featureId: `toc`
      })
    }), (0, U.jsxs)(Z.EntryButton, {
      onClick: () => {
        u(t), r(`toc_gotobook`);
      },
      isSmall: d,
      "data-uuid": s,
      isCurrent: i,
      "aria-current": i,
      "aria-label": f.formatMessage({
        id: `toc.item.ariaLabel`
      }, {
        title: o || ``,
        page: a || ``
      }),
      children: [ (0, U.jsx)(Z.Title, {
        isCurrent: i,
        children: o
      }), (0, U.jsx)(Z.PageLabel, {
        isSmall: d,
        isCurrent: i,
        "aria-label": a,
        children: a
      }) ]
    }) ]
  });
}

function Le(e, t) {
  if (e[t]) {
    return e[t].parent;
  }
}

function Re(e, t) {
  let n = [], r = t;
  for (;r = Le(e, r); ) {
    n.push(r);
  }
  return n;
}

var ze = (e, t, n) => {
  let r = Re(t, e).reverse();
  for (let t = 0; t < r.length; t++) {
    if (!n(r[t])) {
      e = r[t];
      break;
    }
  }
  return e;
};

function Be(e, t) {
  return e?.querySelector(`[data-uuid='${t}']`);
}

function Ve(e) {
  let {currentUuid: t} = B(), n = C(P);
  return (0, H.useMemo)(() => ze(t, n, e), [ t, n, e ]);
}

h();

var He = 16, Q = e => Math.min(e - 1, 4) * He, Ue = g.div`
  width: calc(100% - ${e => Q(e.level)}px);
  margin-inline-start: ${e => Q(e.level)}px;
  border-bottom: 1px solid ${W.cloud.getShade(4)};
  ${({isRtl: e}) => e && `direction: rtl;`}
`;

function We({tocItem: e, treeExpander: t}) {
  let {level: n, levelChildren: r, uuid: i} = e, a = i === Ve(t.isItemExpanded), {isRtl: o} = z();
  return (0, U.jsxs)(`li`, {
    children: [ (0, U.jsx)(Ue, {
      level: n,
      isRtl: o,
      children: (0, U.jsx)(Ie, {
        isExpanded: t.isItemExpanded(i),
        toc: e,
        onClick: () => t.toggleItem(i),
        isCurrent: a
      })
    }), (0, U.jsx)(ge, {
      trigger: t.isItemExpanded(i),
      children: (0, U.jsx)(`ul`, {
        children: r?.map((e, n) => (0, U.jsx)(We, {
          treeExpander: t,
          tocItem: e
        }, e.uuid))
      })
    }) ]
  });
}

h();

var Ge = g.ul`
  width: 100%;
`;

function Ke({tocRef: e, treeExpander: t}) {
  let {tocData: n} = B();
  return (0, U.jsx)(Ge, {
    ref: e,
    children: n.map(e => (0, U.jsx)(We, {
      treeExpander: t,
      tocItem: e
    }, e.uuid))
  });
}

h();

var $ = {
  NoTocScroll: g.div`
    overflow-y: auto;
    flex-grow: 1;
    min-height: 0;
  `,
  NoTocMessage: g.p`
    color: var(--vst-cloud-7);
    text-align: center;
    padding-block: 100px;
    padding-inline: 75px;
    margin: 0;
  `,
  NavContainer: g.nav`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    min-height: 0;
  `,
  ScrollBox: g.div`
    overflow: auto;
    flex-grow: 1;
    position: relative;
    padding-inline: 16px;
    padding-bottom: 16px;
    /* Keep the first row from looking cut off when it's the active page*/
    margin-top: 1px;
  `
};

function qe(e) {
  let {loadStatus: t, tocData: n, uuidsWithChildren: r, currentUuidParentList: a, currentUuid: o} = e, s = (0, 
  H.useRef)(null), [l, u] = (0, H.useState)(!1), d = oe(r, !1), p = v();
  return (0, H.useEffect)(() => {
    t === i.OK && o && !l && (a.forEach(e => {
      d.expandItem(e);
    }), window.setTimeout(() => {
      let e = Be(s.current, o);
      f(e);
    }, 650), u(!0));
  }, [ d, a, o, l, t ]), (0, U.jsx)($.NavContainer, {
    "aria-label": p.formatMessage({
      id: `toc.tableOfContents`
    }),
    children: t === i.ERROR || n.length === 0 ? (0, U.jsx)($.NoTocScroll, {
      children: (0, U.jsx)($.NoTocMessage, {
        children: (0, U.jsx)(c, {
          id: `toc.noToc`
        })
      })
    }) : (0, U.jsxs)(U.Fragment, {
      children: [ r.length > 0 && (0, U.jsx)(de, {
        styleVariant: `frost-bg`,
        onExpandClick: d.expandAll,
        onCollapseClick: d.collapseAll,
        allExpanded: d.fullyExpanded,
        allCollapsed: d.fullyCollapsed,
        featureId: `toc`,
        visuallyHiddenLegend: p.formatMessage({
          id: `toc.sections`
        })
      }), (0, U.jsx)($.ScrollBox, {
        children: (0, U.jsx)(Ke, {
          tocRef: s,
          treeExpander: d
        })
      }) ]
    })
  });
}

export { Y as a, ve as c, X as i, _e as l, Fe as n, ke as o, Ne as r, Ce as s, qe as t };
//# sourceMappingURL=TocBody-BaGRGZ2R.js.map
//# sourceMappingURL=TocBody-BaGRGZ2R.js.map