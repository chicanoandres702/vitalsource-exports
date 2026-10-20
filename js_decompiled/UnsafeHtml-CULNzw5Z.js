import { a as e, i as t, n, r, t as i } from "./rolldown-runtime-B0Z9INg1.js";

import { i as a, t as o } from "./jsx-runtime-DU6_sasz.js";

import { n as s } from "./monitoring-fZj7Xvdu.js";

import { a as c, b as l, f as u } from "./index-maEWt9hW.js";

import { A as d, U as f, V as p, h as m, k as h, z as g } from "./LocaleProvider-DoP-dlkE.js";

import { i as _, t as ee } from "./GlobalStyleProvider-BWhTP2MU.js";

import { t as v } from "./uuid-DwkZyVS8.js";

import { a as y, i as te, o as b, r as x, t as S } from "./styled-components.browser.esm-BcYycfu6.js";

import { u as C, v as ne, y as re } from "./enrichments-DzDQ_toR.js";

import { t as w } from "./useIntl-DaqDtX5V.js";

import { d as T, g as ie, p as E } from "./array-BlXv2BOg.js";

import { i as ae } from "./StaticLoader-LtUItV9i.js";

import { B as D, J as O, P as k, Y as A, o as oe, q as se } from "./actions-B2bqznsY.js";

import { $ as ce, A as le, At as ue, B as de, Bt as fe, C as pe, D as me, Dt as he, E as ge, Et as _e, F as ve, Ft as ye, G as be, H as xe, Ht as Se, I as Ce, It as we, J as Te, K as Ee, M as De, Mt as Oe, N as ke, Nt as j, O as Ae, Ot as je, P as Me, Pt as M, Q as Ne, R as Pe, Rt as Fe, St as Ie, T as Le, Tt as Re, U as ze, Ut as Be, V as Ve, Vt as He, W as Ue, Wt as We, X as Ge, Y as Ke, Z as qe, Zt as Je, _ as Ye, a as Xe, c as Ze, dt as Qe, et as $e, f as et, g as tt, h as nt, it as rt, j as it, jt as at, k as ot, kt as st, n as ct, nt as lt, p as ut, q as N, rt as dt, tt as ft, u as pt, ut as mt, v as ht, xt as gt, y as _t, z as vt, zt as yt } from "./Tooltip-DA2Rdtm3.js";

var P = e(a()), F = d(), I = p();

b();

var L = o();

function bt(e) {
  let {icon: t, theme: n} = e;
  return (0, L.jsx)(F.IconButton, {
    icon: t,
    customIconColor: I.cloud.getShade(10),
    customIconFocusColor: n.vstui.color.primary.getShade(6),
    customIconFocusBGColor: !0,
    color: `custom`,
    rounded: !0,
    ...e
  });
}

var xt = y(bt);

function St(e = !1) {
  let [t, n] = (0, P.useState)(e);
  return {
    buttonProps: {
      onClick: () => n(!0)
    },
    contentProps: {
      open: t,
      onRequestClose: () => n(!1)
    }
  };
}

var Ct = g();

b();

var wt = e => (0, Ct.createThemedComponent)(F.Button, {
  Button_borderRadius: e,
  Button_paddingHorizontal_medium: `26px`,
  Button_backgroundColor_themePrimary: `#FFF`,
  Button_color_themePrimary: e => e.theme.vstui.color.primary.getShade(6)
}), Tt = x.div`
  width: 100%;
  display: flex;
`, R = x.div`
  ${e => `width: calc(${100 / e.buttonCount}% + 1px)`};
  ${e => e.active && `\n    button {\n      background: ${e.theme.vstui.color.primary.getShade(7)};\n      color: #fff;\n    }\n  `}

  margin-right: -1px;
  button {
    position: relative;
    &:focus {
      z-index: 1;
    }
  }
`, Et = wt(`4px 0 0 4px`), Dt = wt(`0 0 0 0`), Ot = wt(`0 4px 4px 0`), kt = ({btn: e, active: t, buttonCount: n}) => (0, 
L.jsx)(R, {
  active: t,
  buttonCount: n,
  children: (0, L.jsx)(Et, {
    "aria-current": t,
    onClick: e.onClick,
    iconStart: e.icon ? (0, L.jsx)(e.icon, {}) : void 0,
    label: e.label,
    fullWidth: !0,
    children: e.content
  })
}), At = ({btn: e, active: t, buttonCount: n}) => (0, L.jsx)(R, {
  active: t,
  buttonCount: n,
  children: (0, L.jsx)(Ot, {
    "aria-current": t,
    onClick: e.onClick,
    label: e.label,
    fullWidth: !0,
    iconStart: e.icon ? (0, L.jsx)(e.icon, {}) : void 0,
    children: e.content
  })
}), jt = ({buttons: e = [], selectedButton: t}) => {
  let n = (n, r) => (0, L.jsx)(R, {
    active: r === t,
    buttonCount: e.length,
    onClick: n.onClick,
    children: (0, L.jsx)(Dt, {
      "aria-current": r === t,
      label: n.label,
      fullWidth: !0,
      children: n.content
    })
  }, n.label);
  return (0, L.jsx)(Tt, {
    children: e.map((r, i) => {
      let a = e.length === 1, o = i === 0, s = i === e.length - 1, c = e.length, l = {
        ...r,
        onClick: () => r.onClick()
      };
      return a ? (0, L.jsx)(R, {
        active: i === t,
        buttonCount: c,
        children: (0, L.jsx)(F.Button, {
          "aria-current": i === t,
          fullWidth: !0,
          children: l.content
        })
      }, l.label) : o ? (0, L.jsx)(kt, {
        btn: l,
        active: i === t,
        buttonCount: c
      }, l.label) : s ? (0, L.jsx)(At, {
        btn: l,
        active: i === t,
        buttonCount: c
      }, l.label) : n(l, i);
    })
  });
}, Mt = () => (0, L.jsx)(F.Icon, {
  width: 76,
  height: 52,
  children: (0, L.jsx)(`g`, {
    stroke: I.cloud.getShade(5),
    strokeWidth: 2,
    fill: `none`,
    fillRule: `evenodd`,
    strokeLinecap: `square`,
    children: (0, L.jsx)(`path`, {
      d: `M9 45h58M9 32h58M9 20h58M9 9h58`
    })
  })
}), Nt = () => (0, L.jsx)(F.Icon, {
  width: 76,
  height: 52,
  children: (0, L.jsx)(`g`, {
    stroke: I.cloud.getShade(5),
    strokeWidth: 2,
    fill: `none`,
    fillRule: `evenodd`,
    strokeLinecap: `square`,
    children: (0, L.jsx)(`path`, {
      d: `M9 45h58M9 36h58M9 27h58M9 18h58M9 9h58`
    })
  })
}), Pt = () => (0, L.jsx)(F.Icon, {
  width: 76,
  height: 52,
  children: (0, L.jsx)(`g`, {
    stroke: I.cloud.getShade(5),
    strokeWidth: 2,
    fill: `none`,
    fillRule: `evenodd`,
    strokeLinecap: `square`,
    children: (0, L.jsx)(`path`, {
      d: `M9 45h58M9 39h58M9 33h58M9 27h58M9 21h58M9 15h58M9 9h58`
    })
  })
}), Ft = () => (0, L.jsx)(F.Icon, {
  width: 76,
  height: 52,
  children: (0, L.jsx)(`rect`, {
    width: `24`,
    height: `40`,
    x: `25`,
    y: `6`,
    fill: I.cloud.getShade(5)
  })
}), It = () => (0, L.jsx)(F.Icon, {
  width: 76,
  height: 52,
  children: (0, L.jsx)(`rect`, {
    width: `40`,
    height: `40`,
    x: `18`,
    y: `6`,
    fill: I.cloud.getShade(5)
  })
}), Lt = () => (0, L.jsx)(F.Icon, {
  width: 76,
  height: 52,
  children: (0, L.jsx)(`rect`, {
    width: `60`,
    height: `40`,
    x: `8`,
    y: `6`,
    fill: I.cloud.getShade(5)
  })
});

function Rt() {
  let e = A();
  return {
    currentFont: O(He),
    setFont: t => {
      e(st(t));
    }
  };
}

function zt() {
  let e = A();
  return {
    currentMode: O(fe),
    setMode: t => {
      e(je(t));
    }
  };
}

function Bt() {
  let e = A();
  return {
    currentMargin: O(We),
    setMargin: t => {
      e(at(t));
    }
  };
}

function Vt() {
  let e = A();
  return {
    currentLineHeight: O(Be),
    setLineHeight: t => {
      e(ue(t));
    }
  };
}

function Ht() {
  let e = A();
  return {
    currentFontSize: O(Se),
    setFontSize: t => {
      e(Oe(t));
    }
  };
}

function Ut() {
  let e = A();
  return {
    resetFormatting: () => {
      e(he(!0));
    }
  };
}

var Wt = () => (0, L.jsx)(F.Icon, {
  width: 27,
  height: 16,
  children: (0, L.jsx)(`g`, {
    fill: I.cloud.getShade(5),
    fillRule: `evenodd`,
    children: (0, L.jsx)(`path`, {
      d: `M12 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2ZM27 2v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z`
    })
  })
}), Gt = () => (0, L.jsx)(F.Icon, {
  width: 14,
  height: 16,
  children: (0, L.jsx)(`path`, {
    d: `M13.17 2v12a2 2 0 0 1-2 2H2.247a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8.923a2 2 0 0 1 2 2Z`,
    fill: I.cloud.getShade(5),
    fillRule: `evenodd`
  })
}), Kt = () => (0, L.jsx)(F.Icon, {
  width: 14,
  height: 20,
  children: (0, L.jsx)(`g`, {
    fill: I.cloud.getShade(5),
    fillRule: `evenodd`,
    children: (0, L.jsx)(`path`, {
      d: `M0 0h14v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V0ZM14 20H0v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4Z`
    })
  })
});

b();

var qt = 24, Jt = `${qt}px`, Yt = `8px ${qt}px 24px`, z = (e, t, n) => (0, Ct.createThemedComponent)(F.Button, {
  Button_borderWidth: `1px`,
  Button_borderColor_themePrimary: n || `transparent`,
  Button_borderColor_themePrimary_focus: n || `transparent`,
  Button_borderColor_themePrimary_hover: n || `transparent`,
  Button_backgroundColor_themePrimary: e,
  Button_backgroundColor_themePrimary_active: e,
  Button_backgroundColor_themePrimary_focus: e,
  Button_backgroundColor_themePrimary_hover: e,
  Button_color_themePrimary: t,
  Button_color_themePrimary_focus: t,
  Button_color_themePrimary_hover: t,
  Button_color_themePrimary_active: t
}), Xt = z(`#FFF`, I.cloud.getShade(9), I.cloud.getShade(5)), Zt = z(I.ninja.getShade(9), `#FFF`), Qt = z(`#e7dcd1`, `#493420`), $t = z(`#d8e8f0`, `#3c3c3c`), en = () => (0, 
Ct.createThemedComponent)(F.Button, {
  Button_borderWidth: `1px`,
  Button_borderColor_themePrimaryNaked: I.cloud.getShade(5),
  Button_borderColor_themePrimaryNaked_focus: I.cloud.getShade(5),
  Button_borderColor_themePrimaryNaked_hover: I.cloud.getShade(5),
  Button_color_themePrimaryOutline: I.cloud.getShade(9),
  Button_color_themePrimaryOutline_hover: I.cloud.getShade(9),
  Button_color_themePrimaryOutline_focus: I.cloud.getShade(9)
}), tn = en(), B = {
  readerView: [ {
    key: `default`,
    value: yt.DEFAULT,
    img: Kt
  }, {
    key: `singlePage`,
    value: yt.SINGLE_PAGE,
    img: Gt
  }, {
    key: `doublePage`,
    value: yt.DOUBLE_PAGE,
    img: Wt
  } ],
  fonts: [ {
    key: `default`,
    value: j.DEFAULT
  }, {
    key: `sansSerif`,
    value: j.SANS
  }, {
    key: `oldStyle`,
    value: j.OLD_STYLE
  }, {
    key: `modern`,
    value: j.MODERN
  }, {
    key: `humanist`,
    value: j.HUMANIST
  }, {
    key: `monospace`,
    value: j.MONO
  }, {
    key: `openDyslexic`,
    value: j.DYSLEXIC
  }, {
    key: `hyperlegible`,
    value: j.HYPERLEGIBLE
  } ],
  lineHeightSizes: [ {
    key: `small`,
    value: we.SMALL,
    img: Pt
  }, {
    key: `medium`,
    value: we.MEDIUM,
    img: Nt
  }, {
    key: `large`,
    value: we.LARGE,
    img: Mt
  } ],
  marginSizes: [ {
    key: `small`,
    value: Fe.SMALL,
    img: Lt
  }, {
    key: `medium`,
    value: Fe.MEDIUM,
    img: It
  }, {
    key: `large`,
    value: Fe.LARGE,
    img: Ft
  } ],
  modes: [ {
    key: M.DAY,
    button: Xt
  }, {
    key: M.NIGHT,
    button: Zt
  }, {
    key: M.SEPIA,
    button: Qt
  }, {
    key: M.CYAN,
    button: $t
  } ],
  fontSizes: [ {
    size: 1
  }, {
    size: 1.5
  }, {
    size: 2
  }, {
    size: 4
  } ]
}, nn = S`
  outline: none;
  transform: scale(1.04);
  ${e => e.theme && `box-shadow: 0 3px 5px 0 #0003, 0 0 0 2px #fff, 0 0 0 4px ${e.theme.vstui.color.primary.getShade(6)};`}
`, rn = S`
  outline: none;
  border-color: transparent;
  ${e => e.theme && `box-shadow: 0 0 0 4px ${e.theme.vstui.color.primary.getShade(6)};`}
`, an = S`
  outline: none;
  transform: scale(1.04);
  border-color: transparent;
  ${e => e.theme && `box-shadow: 0 0 0 4px ${e.theme.vstui.color.primary.getShade(6)}, 0 0 0 6px #fff, 0 0 0 8px ${e.theme.vstui.color.primary.getShade(6)};`}
`, V = {
  SelectedContainer: x.div`
    ${e => e.flex && `\n        flex: 1;\n      `}
    ${e => e.border && `\n        display: flex;\n        align-items: center;\n        margin: 0 1px;\n      `}
    button {
      padding: 4px 0;
      :hover:not(:disabled) {
        transform: scale(1.04);
        /* stylelint-disable-next-line color-no-hex */
        box-shadow: 0 3px 5px 0 #0003;
        :focus {
          transform: scale(1.04);
          ${nn}
          ${e => e.active && an}
        }
        ${e => e.active && rn}
      }
      :focus {
        ${nn}
        ${e => e.active && an}
      }
      ${e => e.active && rn}
      ${e => !e.hasText && S`
          svg {
            width: auto;
            height: auto;
            g {
              ${e.active && `rect {fill: ${e.theme.vstui.color.primary.getShade(6)};}`}
              ${e.active && `stroke: ${e.theme.vstui.color.primary.getShade(6)};`}
            }
          }
        `}
      ${e => e.hasText && `font-size: 1.4rem;`}
      ${e => e.hasText && e.active && S`
          /* vstui doesn't have selected state so force the issue */
          color: ${E(6)} !important;
          svg {
            path,
            g {
              fill: ${E(6)};
            }
          }
        `}
    }
  `,
  Footer: x.div`
    text-align: center;
    border-top: 1px solid ${I.cloud.getShade(3)};
    padding: 12px 16px 0 16px;
    margin-top: auto;

    ${({isTinyScreen: e}) => e && `margin-bottom: 30px;`}
  `,
  MenuSection: x.fieldset`
    padding: ${Yt};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    & > * {
      margin: 0 8px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    legend + * {
      margin-left: 0;
    }
  `,
  MenuContainer: x.div`
    width: calc(100% + ${48}px);
    margin: 0 -${Jt};
    display: flex;
    flex-direction: column;
  `,
  MenuSectionsContainer: x.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    & > * {
      flex: 1;
      margin: 0;
    }

    ${({isTinyScreen: e}) => e && `flex-direction: column;`}
  `,
  ResetLink: x.div`
    padding-top: 2px;
  `,
  Header: x.h3`
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 500;
    padding: 0 ${Jt};
  `,
  DropDownContainer: x.div`
    margin-bottom: -20px;
    width: 100%;
  `,
  VisuallyHiddenLegend: x.legend`
    ${ie}
  `,
  OptionButton: x(en)``
}, on = ({isTinyScreen: e, className: t}) => {
  let n = w(), r = _e(), i = Rt(), a = zt(), o = Bt(), s = Vt(), c = Ht(), u = Ut(), d = l(), {isEnabled: p} = Ie(), m = p(gt.PAGINATION);
  return (0, L.jsxs)(V.MenuContainer, {
    "data-testid": `enhanced_menu`,
    className: t,
    children: [ m && (0, L.jsxs)(L.Fragment, {
      children: [ (0, L.jsx)(V.Header, {
        children: (0, L.jsx)(f, {
          id: `format.readerView`
        })
      }), (0, L.jsxs)(V.MenuSection, {
        children: [ (0, L.jsx)(V.VisuallyHiddenLegend, {
          children: (0, L.jsx)(f, {
            id: `format.readerView`
          })
        }), B.readerView.map(e => (0, L.jsx)(V.SelectedContainer, {
          active: r.currentReaderView.value === e.key,
          flex: !0,
          hasText: !0,
          children: (0, L.jsx)(tn, {
            fullWidth: !0,
            outline: !0,
            iconStart: (0, L.jsx)(e.img, {}),
            onClick: () => r.setReaderView(e.value),
            children: n.formatMessage({
              id: `format.readerView.${e.key}`
            })
          })
        }, e.key)) ]
      }) ]
    }), (0, L.jsx)(V.Header, {
      children: (0, L.jsx)(f, {
        id: `format.textSize`
      })
    }), (0, L.jsxs)(V.MenuSection, {
      children: [ (0, L.jsx)(V.VisuallyHiddenLegend, {
        children: (0, L.jsx)(f, {
          id: `format.textSize`
        })
      }), (0, L.jsx)(jt, {
        selectedButton: c.currentFontSize.enabled ? B.fontSizes.findIndex(e => e.size === c.currentFontSize.value) : -1,
        buttons: [ {
          label: n.formatMessage({
            id: `format.textSize.small`
          }),
          content: (0, L.jsx)(`div`, {
            style: {
              fontSize: 12
            },
            children: `Aa`
          }),
          onClick: () => c.setFontSize(ye.SMALL)
        }, {
          label: n.formatMessage({
            id: `format.textSize.normal`
          }),
          content: (0, L.jsx)(`div`, {
            style: {
              fontSize: 16
            },
            children: `Aa`
          }),
          onClick: () => c.setFontSize(ye.MEDIUM)
        }, {
          label: n.formatMessage({
            id: `format.textSize.large`
          }),
          content: (0, L.jsx)(`div`, {
            style: {
              fontSize: 19
            },
            children: `Aa`
          }),
          onClick: () => c.setFontSize(ye.LARGE)
        }, {
          label: n.formatMessage({
            id: `format.textSize.extraLarge`
          }),
          content: (0, L.jsx)(`div`, {
            style: {
              fontSize: 22
            },
            children: `Aa`
          }),
          onClick: () => c.setFontSize(ye.EXTRA_LARGE)
        } ]
      }) ]
    }), (0, L.jsx)(V.Header, {
      children: (0, L.jsx)(f, {
        id: `format.font`
      })
    }), (0, L.jsx)(V.MenuSection, {
      children: (0, L.jsx)(V.DropDownContainer, {
        children: (0, L.jsx)(F.Select, {
          label: n.formatMessage({
            id: `format.fontStyle`
          }),
          labelHidden: !0,
          onChange: e => {
            i.setFont(e.target.value);
          },
          fullWidth: !0,
          value: i.currentFont.value,
          children: B.fonts.map(e => (0, L.jsx)(`option`, {
            value: e.value,
            children: n.formatMessage({
              id: `format.font.${e.key}`
            })
          }, e.key))
        })
      })
    }), (0, L.jsx)(V.Header, {
      children: (0, L.jsx)(f, {
        id: `format.mode`
      })
    }), (0, L.jsxs)(V.MenuSection, {
      children: [ (0, L.jsx)(V.VisuallyHiddenLegend, {
        children: (0, L.jsx)(f, {
          id: `format.mode`
        })
      }), B.modes.map(e => (0, L.jsx)(V.SelectedContainer, {
        active: a.currentMode.value === e.key,
        flex: !0,
        children: (0, L.jsx)(e.button, {
          "aria-current": a.currentMode.value === e.key,
          fullWidth: !0,
          onClick: () => a.setMode(e.key),
          children: n.formatMessage({
            id: `format.mode.${e.key}`
          })
        })
      }, e.key)) ]
    }), (0, L.jsxs)(V.MenuSectionsContainer, {
      isTinyScreen: e,
      children: [ d.getProp(`ContentControls.Margin.enabled`) && (0, L.jsxs)(`div`, {
        children: [ (0, L.jsx)(V.Header, {
          children: (0, L.jsx)(f, {
            id: `format.margin`
          })
        }), (0, L.jsxs)(V.MenuSection, {
          children: [ (0, L.jsx)(V.VisuallyHiddenLegend, {
            children: (0, L.jsx)(f, {
              id: `format.margin`
            })
          }), B.marginSizes.map(e => (0, L.jsx)(V.SelectedContainer, {
            border: !0,
            flex: !0,
            active: o.currentMargin.value === e.value,
            children: (0, L.jsx)(tn, {
              naked: !0,
              inline: !0,
              fullWidth: !0,
              "aria-current": o.currentMargin.value === e.value,
              label: n.formatMessage({
                id: `format.margin.${e.key}`
              }),
              onClick: () => o.setMargin(e.value),
              children: (0, L.jsx)(e.img, {})
            })
          }, e.key)) ]
        }) ]
      }), (0, L.jsxs)(`div`, {
        children: [ (0, L.jsx)(V.Header, {
          children: (0, L.jsx)(f, {
            id: `format.lineHeight`
          })
        }), (0, L.jsxs)(V.MenuSection, {
          children: [ (0, L.jsx)(V.VisuallyHiddenLegend, {
            children: (0, L.jsx)(f, {
              id: `format.lineHeight`
            })
          }), B.lineHeightSizes.map(e => (0, L.jsx)(V.SelectedContainer, {
            border: !0,
            flex: !0,
            active: s.currentLineHeight.value === e.value,
            children: (0, L.jsx)(tn, {
              naked: !0,
              inline: !0,
              fullWidth: !0,
              "aria-current": s.currentLineHeight.value === e.value,
              label: n.formatMessage({
                id: `format.lineHeight.${e.key}`
              }),
              onClick: () => s.setLineHeight(e.value),
              children: (0, L.jsx)(e.img, {})
            })
          }, e.key)) ]
        }) ]
      }) ]
    }), (0, L.jsxs)(V.Footer, {
      isTinyScreen: e,
      children: [ (0, L.jsx)(f, {
        id: `format.lookRight`
      }), (0, L.jsx)(V.ResetLink, {
        children: (0, L.jsx)(`button`, {
          className: ct(`vst-link`),
          onClick: u.resetFormatting,
          "data-interaction-id": `preferences_CC_Reset`,
          children: (0, L.jsx)(f, {
            id: `format.reset`
          })
        })
      }) ]
    }) ]
  });
}, H = h();

function sn(e) {
  return e.contentControls.basic;
}

function cn(e) {
  return sn(e).zoom;
}

function ln(e) {
  return sn(e).pageFit;
}

function un(e) {
  return sn(e).pageLayout;
}

var dn = D(k.SET_ZOOM);

D(k.GET_ZOOM);

var fn = D(k.ZOOM_IN), pn = D(k.ZOOM_OUT), mn = D(k.FIT_WIDTH), hn = D(k.FIT_HEIGHT), gn = D(k.SET_LAYOUT_MODE);

function _n() {
  let e = O(un), t = A();
  function n(e) {
    t(gn(e));
  }
  return {
    currentMode: e,
    setMode: n
  };
}

var vn = () => (0, L.jsxs)(L.Fragment, {
  children: [ (0, L.jsx)(H.Page, {
    style: {
      marginRight: `3px`,
      transform: `scale(-1, 1)`
    }
  }), (0, L.jsx)(H.Page, {}) ]
}), yn = () => {
  let e = w(), {currentMode: t, setMode: n} = _n();
  return (0, L.jsx)(jt, {
    selectedButton: +(t === Ze.DOUBLE),
    buttons: [ {
      icon: H.Page,
      label: e.formatMessage({
        id: `format.onePage`
      }),
      onClick: () => {
        n(Ze.SINGLE), s(`facing_pages_off`);
      }
    }, {
      icon: vn,
      label: e.formatMessage({
        id: `format.twoPage`
      }),
      onClick: () => {
        n(Ze.DOUBLE), s(`facing_pages_on`);
      }
    } ]
  });
};

function bn() {
  let e = A();
  return {
    currentZoom: O(cn),
    setZoom: t => {
      e(dn(t));
    },
    zoomIn: () => {
      e(fn());
    },
    zoomOut: () => {
      e(pn());
    }
  };
}

function xn() {
  let e = A();
  return {
    currentPageFit: O(ln),
    fitWidth: () => {
      e(mn());
    },
    fitHeight: () => {
      e(hn());
    }
  };
}

var Sn = `\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  pointer-events: none;\n  background-color: rgba(250, 200, 155, 0.4);\n  z-index: 9999;\n`;

function Cn() {
  let e = (0, P.useRef)(document.getElementsByClassName(`night-mode`).length > 0);
  function t() {
    let t = document.createElement(`div`);
    t.classList.add(`night-mode`), t.setAttribute(`style`, Sn), document.body.appendChild(t), 
    e.current = !0;
  }
  function n() {
    document.getElementsByClassName(`night-mode`)[0].remove(), e.current = !1;
  }
  function r() {
    document.getElementsByClassName(`night-mode`).length ? n() : t();
  }
  return {
    isNightModeActive: e.current,
    toggleNightMode: r
  };
}

b();

var U = {
  StepLabelList: x.div`
    position: absolute;
    display: inline-block;
    font-size: 1.2rem;
    width: calc(100% - ${({inset: e}) => e * 2}px);
    height: auto;
    top: 10px;
    padding: 0 12px;
    pointer-events: none;
    z-index: -2;
    /* disable text selection */
    ${T}
  `,
  StepLabelOption: x.div`
    position: absolute;
    inset-inline-start: ${({pos: e}) => e};
    width: 2px;
    height: 7px;
    border-radius: 4px;
    background-color: ${I.cloud.getShade(9)};
    padding: 0;
  `,
  StepLabelOptionCaption: x.div`
    position: absolute;
    width: max-content;
    transform: translateX(-50%);
    margin-top: 25px;
  `,
  AxisTitleContainer: x.div`
    padding: 0 ${({inset: e}) => e}px;
    display: flex;
    margin-top: 25px;
    width: calc(100% + ${({inset: e}) => e * 2}px);
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 700;
  `,
  AxisTitle: x.span`
    margin-top: 4px;
  `
}, wn = ({rangeLabels: e, inset: t, min: n, max: r}) => {
  if (!e?.length) {
    return null;
  }
  let i = e => {
    let t = (e - n) / (r - n), i = t < .1 ? 2 : t > .9 ? -2 : 0;
    return `calc(${t * 100}% + ${i}px)`;
  };
  return (0, L.jsxs)(L.Fragment, {
    children: [ (0, L.jsx)(U.StepLabelList, {
      "aria-hidden": !0,
      inset: t,
      children: e.map(e => (0, L.jsx)(U.StepLabelOption, {
        pos: i(e.value),
        children: (0, L.jsx)(U.StepLabelOptionCaption, {
          children: e.caption
        })
      }, e.value))
    }), (0, L.jsx)(U.AxisTitleContainer, {
      "aria-hidden": !0,
      inset: t,
      children: e.map(e => e.title && (0, L.jsx)(U.AxisTitle, {
        children: e.title
      }, e.value))
    }) ]
  });
}, W = () => {
  let e = w().locale.split(`-`)[0], t = e === `ar` || e === `he`;
  return (0, P.useMemo)(() => ({
    isRtl: t,
    dir: t ? `rtl` : `ltr`
  }), [ t ]);
};

b();

var Tn = {
  ValueTipContainer: x.div`
    display: ${({visible: e}) => e ? `block` : `none`};
    position: absolute;
    top: 0;
    width: 100%;
    transform: translateY(-100%);
    padding: 0 10px;
    margin-top: calc(${({sliderHeight: e}) => -e / 2}px - 8px);
  `,
  ValueTip: x.div`
    padding: 3px 8px;
    background-color: ${I.cloud.getShade(10)};
    color: white;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    display: inline-block;
    transform: translateX(${({isRtl: e}) => e ? 50 : -50}%);
    white-space: nowrap;
    inset-inline-start: ${({perc: e}) => e}%;
  `
}, En = ({inset: e, isActive: t, perc: n, caption: r, sliderHeight: i}) => {
  let {isRtl: a} = W();
  return (0, L.jsx)(Tn.ValueTipContainer, {
    inset: e,
    visible: t,
    sliderHeight: i,
    "aria-hidden": !0,
    children: (0, L.jsx)(`div`, {
      style: {
        width: `100%`,
        position: `relative`
      },
      children: (0, L.jsx)(Tn.ValueTip, {
        perc: n,
        isRtl: a,
        children: r
      })
    })
  });
};

b();

var Dn = 14, On = {
  IndicatorContainer: x.div`
    color: ${I.cloud.getShade(9)};
    display: flex;
    align-items: center;
    width: ${18}px;
    &:first-child {
      margin-inline-end: ${Dn}px;
    }
    &:last-child {
      margin-inline-start: ${Dn}px;
    }
  `,
  IndicatorButton: x.button`
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    display: flex;
    align-items: center;
    height: 20px;
    &:focus {
      outline: 0;
      border-radius: 2px;
      box-shadow: rgb(255, 255, 255) 0 0 0 2px,
        ${e => e.theme.vstui.color.primary.getShade(6)} 0 0 0 4px;
    }
    svg {
      overflow: visible;
    }
  `
}, kn = ({onClick: e, label: t, children: n}) => (0, L.jsx)(On.IndicatorContainer, {
  children: (0, L.jsx)(On.IndicatorButton, {
    onClick: e,
    type: `button`,
    "aria-label": t,
    children: n
  })
});

b();

var G = 4, K = 24, An = 6, jn = 18, Mn = 8, Nn = 28, Pn = 10, Fn = function(e) {
  return e[e.Knob = 0] = `Knob`, e[e.Bar = 1] = `Bar`, e;
}({}), q = {
  trackStyles: S`
    appearance: none;
    height: ${G}px;
    border-radius: ${G}px;
    z-index: 1;
  `,
  thumbStyles: S`
    z-index: 1;
    appearance: none;
    height: ${({sliderType: e}) => e === 0 ? K : jn}px;
    width: ${({sliderType: e}) => e === 0 ? K : An}px;
    border-radius: ${({sliderType: e}) => e === 0 ? K : G}px;
    background: ${({theme: e, sliderType: t}) => t === 0 ? `white` : e.vstui.color.primary.getShade(9)};
    border: ${({sliderType: e}) => e === 0 ? `1px solid ${I.cloud.getShade(5)};` : `none`};
    box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.27);
  `
}, J = {
  RangeInput: x.input`
    appearance: none;
    width: 100%;
    height: ${Nn}px;
    border: 0;
    cursor: pointer;
    position: relative;
    &:focus {
      /* handled in wrapper due to outset */
      outline: none;
    }
    /* These get cranky if you use shared declarations, so reusing vars instead */
    &::-webkit-slider-runnable-track {
      ${q.trackStyles}
      background-color: transparent;
    }
    &::-moz-range-track {
      ${q.trackStyles}
      background-color: transparent;
    }
    &::-moz-range-progress {
      border-radius: 2px;
      background-color: transparent;
    }
    &::-ms-track {
      height: ${G}px;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    &::-ms-fill-lower {
      ${q.trackStyles}
    }
    &::-ms-fill-upper {
      ${q.trackStyles}
    }
    &::-webkit-slider-thumb {
      margin-top: ${({sliderType: e}) => -((e === 0 ? K : jn) / 2 - G / 2)}px;
      ${q.thumbStyles}
    }
    &::-moz-range-thumb {
      ${q.thumbStyles}
    }
    &::-ms-thumb {
      ${q.thumbStyles}
    }
  `,
  SliderContainer: x.div`
    width: 100%;
  `,
  SliderLabel: x.label`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.8rem;
    display: block;
    margin-bottom: 7px;
    color: ${I.ninja.getShade(11)}; /* match vstui select label */
  `,
  RangeContainer: x.div`
    display: flex;
    flex-direction: ${({inset: e}) => e ? `column` : `row`};
    align-items: center;
    position: relative;
    padding: 0 ${({inset: e}) => e > 0 ? 0 : Mn}px;
  `,
  RangeTrack: x.div`
    height: ${({height: e}) => e}px;
    width: 100%;
    padding: 0 ${({inset: e}) => e}px;
    position: relative;
    &:focus-within {
      border: 0;
      border-radius: 2px;
      box-shadow: 0 0 0 2px white,
        0 0 0 4px ${e => e.theme.vstui.color.primary.getShade(6)};
      outline: none;
    }
    /* drawn here rather than as the input's own ::before/::after: on Safari
       26.6.2 those stopped painting on <input> (VST-100193), even though
       ::-webkit-slider-thumb still renders fine */
    &:before {
      ${q.trackStyles}
      position: absolute;
      inset-inline-start: 0;
      inset-block-start: calc(50% - ${G / 2}px);
      content: " ";
      width: 100%;
      z-index: -1;
      /* the start overhang is part of the "on" color */
      /* note no logical positioning for gradient so rtl passed in */
      background: linear-gradient(
        ${({isRtl: e}) => e ? `270` : `90`}deg,
        ${E(5)} 0px,
        ${E(5)} ${({inset: e}) => e}px,
        rgba(0, 0, 0, 0.42) ${({inset: e}) => e + 1}px
      );
    }
    &:after {
      content: "";
      position: absolute;
      display: block;
      inset-inline-start: ${({inset: e}) => e}px;
      inset-block-start: calc(50% - (${G / 2}px));
      width: calc(
        (100% - ${({inset: e}) => e * 2}px) *
          ${({progressPercentage: e}) => e / 100}
      );
      height: ${G}px;
      border-radius: ${G}px;
      background-color: ${e => e.theme.vstui.color.primary.getShade(5)};
      z-index: -1;
    }
  `
};

function In(e) {
  return parseFloat(e.toFixed(2));
}

var Ln = class extends P.Component {
  constructor(e) {
    super(e), this.inputId = v(), this.handleRangeIncrease = () => {
      this.props.sliderType === 0 && (this.props.onIncrease?.(), this.getCorrectedValue() < this.props.max && this.sendFakeEvent(this.props.step));
    }, this.handleRangeDecrease = () => {
      this.props.sliderType === 0 && (this.props.onDecrease?.(), this.getCorrectedValue() > this.props.min && this.sendFakeEvent(-this.props.step));
    }, this.handleRangeChange = e => {
      this.props.onChange?.(parseFloat(e.currentTarget.value));
    }, this.state = {
      inputRef: P.createRef(),
      focused: !1,
      pointerTracking: !1
    }, this.checkFocus = this.checkFocus.bind(this), this.pointerDown = this.pointerDown.bind(this), 
    this.pointerUp = this.pointerUp.bind(this);
  }
  getCorrectedValue() {
    return In(this.props.value);
  }
  sendFakeEvent(e) {
    let t = this.getCorrectedValue() + e;
    this.props.onChange?.(In(t));
  }
  checkFocus() {
    this.setState({
      focused: this.state.inputRef.current?.matches(`:focus-visible`) || !1
    });
  }
  pointerDown() {
    this.setState({
      pointerTracking: !0
    });
  }
  pointerUp() {
    this.setState({
      pointerTracking: !1
    });
  }
  componentDidMount() {
    this.state.inputRef.current?.addEventListener(`focus`, this.checkFocus), this.state.inputRef.current?.addEventListener(`blur`, this.checkFocus), 
    this.state.inputRef.current?.addEventListener(`pointerdown`, this.pointerDown), 
    this.state.inputRef.current?.addEventListener(`pointerup`, this.pointerUp);
  }
  componentWillUnmount() {
    this.state.inputRef.current?.removeEventListener(`focus`, this.checkFocus), this.state.inputRef.current?.removeEventListener(`blur`, this.checkFocus), 
    this.state.inputRef.current?.removeEventListener(`pointerdown`, this.pointerDown), 
    this.state.inputRef.current?.removeEventListener(`pointerup`, this.pointerUp);
  }
  render() {
    let {sliderType: e, decreaseButtonLabel: t, increaseButtonLabel: n, label: r, labelWrappedWithTag: i, max: a, min: o, step: s, rangeLabels: c = [], isRtl: l, showValueTip: u = !1, valueTip: d} = this.props, f = this.getCorrectedValue(), p = i, m = (f - o) * 100 / (a - o), h = c?.length ? Pn : 0, g = (f - o) / (a - o) * 100;
    return (0, L.jsxs)(J.SliderContainer, {
      children: [ p ? (0, L.jsx)(p, {
        children: (0, L.jsx)(J.SliderLabel, {
          htmlFor: this.inputId,
          children: r
        })
      }) : (0, L.jsx)(J.SliderLabel, {
        htmlFor: this.inputId,
        children: r
      }), (0, L.jsxs)(J.RangeContainer, {
        inset: h,
        children: [ e === 0 && (0, L.jsx)(kn, {
          onClick: this.handleRangeDecrease,
          label: t,
          children: (0, L.jsx)(H.MinusCircle, {})
        }), (0, L.jsx)(J.RangeTrack, {
          inset: h,
          height: Nn,
          progressPercentage: m,
          isRtl: l,
          children: (0, L.jsx)(J.RangeInput, {
            ref: this.state.inputRef,
            sliderType: e,
            id: this.inputId,
            max: a,
            min: o,
            onChange: this.handleRangeChange,
            step: s,
            type: `range`,
            value: f
          })
        }), e === 0 && (0, L.jsx)(kn, {
          onClick: this.handleRangeIncrease,
          label: n,
          children: (0, L.jsx)(H.PlusCircle, {})
        }), u && (0, L.jsx)(En, {
          inset: h,
          isActive: this.state.focused || this.state.pointerTracking,
          perc: g,
          caption: d || f,
          sliderHeight: Nn
        }), (0, L.jsx)(wn, {
          rangeLabels: c,
          inset: h,
          min: o,
          max: a
        }) ]
      }) ]
    });
  }
};

b();

var Rn = 24, zn = `${Rn}px`, Bn = `15px ${Rn}px`, Vn = S`
  outline: none;
  border-radius: 4px;
  box-shadow: 0 0 0 2px white, 0 0 0 4px ${E(6)};
`, Hn = S`
  display: flex;
  align-items: center;
  justify-content: center;
`, Y = {
  MenuContainer: x.div`
    width: calc(100% + ${48}px);
    margin: 0 -${zn};
  `,
  GreyBlockHeight: x.div`
    background: ${I.cloud.getShade(6)};
    width: 70%;
    height: 37px;
    ${Hn}
  `,
  GreyBlockWidth: x.div`
    background: ${I.cloud.getShade(6)};
    width: 100%;
    height: 25px;
    ${Hn}
  `,
  MenuContentContainer: x.div`
    padding: 0 ${Rn}px;
    display: block;
  `,
  LeftButtonContent: x.span`
    ${Hn}
    height: 45px;
    width: 50px;
    padding: 4px;
    border: 1px solid ${I.cloud.getShade(5)};
    border-radius: 4px;
  `,
  RightButtonContent: x.span`
    align-items: center;
    display: flex;
    padding: 0 10px 0 15px;
    place-content: space-between;
    width: 100%;
  `,
  ButtonTextContainer: x.span`
    max-width: 90%;
  `,
  FitButton: x.button`
    ${Hn}
    width: 100%;
    :focus {
      ${Vn}
    }
    &[aria-current="true"] {
      div {
        background: ${E(6)};
      }
    }
  `,
  Header: x.h3`
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 500;
    padding: 15px ${zn};

    + div {
      padding-top: 0;
    }
  `,
  MenuSection: x.div`
    position: relative;
    padding: ${Bn};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${I.cloud.getShade(4)};
    & > * {
      margin: 0 8px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
        flex-shrink: 0;
      }
    }
  `,
  PageViewContainer: x.div`
    border-bottom: 1px solid ${I.cloud.getShade(4)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${Bn};
  `,
  PageViewDivider: x.span`
    background-color: ${I.cloud.getShade(4)};
    height: 1px;
    margin: 10px 0;
    width: 100%;
  `,
  Description: x.p`
    color: ${I.cloud.getShade(6)};
    font-size: 1.3rem;
    line-height: 1.6rem;
  `,
  TextSection: x.div`
    width: 339px;
    margin-right: 40px;
    flex: 1;

    h3 {
      padding: 0;
      margin-bottom: 4px;
    }
  `
}, Un = v(), Wn = ({fitTo: e, theme: t, pageFit: n}) => {
  let r = ({active: e}) => e && (0, L.jsx)(F.Icon, {
    height: 13,
    width: 13,
    children: (0, L.jsx)(H.Checkmark, {
      color: t.vstui.color.primary.getShade(6)
    })
  }), i = {
    height: {
      isActive: n.currentPageFit === `height`,
      onClick: n.fitHeight,
      icon: (0, L.jsx)(Y.GreyBlockHeight, {}),
      text: `format.fitHeight`
    },
    width: {
      isActive: n.currentPageFit === `width`,
      onClick: n.fitWidth,
      icon: (0, L.jsx)(Y.GreyBlockWidth, {}),
      text: `format.fitWidth`
    }
  };
  return (0, L.jsxs)(Y.FitButton, {
    "aria-current": i[e].isActive,
    onClick: i[e].onClick,
    children: [ (0, L.jsx)(Y.LeftButtonContent, {
      children: i[e].icon
    }), (0, L.jsxs)(Y.RightButtonContent, {
      children: [ (0, L.jsx)(Y.ButtonTextContainer, {
        children: (0, L.jsx)(f, {
          id: i[e].text
        })
      }), (0, L.jsx)(r, {
        active: i[e].isActive
      }) ]
    }) ]
  });
}, Gn = y(({theme: e, className: t}) => {
  let n = w(), r = bn(), i = xn(), {bookInfo: a} = Je(), {isNightModeActive: o, toggleNightMode: s} = Cn(), {isRtl: c} = W(), [l, u] = (0, 
  P.useState)(r.currentZoom), d = pt(300, e => {
    r.setZoom(e);
  });
  function p(e) {
    u(e), d(e);
  }
  return (0, P.useEffect)(() => {
    u(r.currentZoom);
  }, [ r.currentZoom ]), (0, L.jsxs)(Y.MenuContainer, {
    "data-testid": `basic_menu`,
    className: t,
    children: [ (0, L.jsx)(Y.MenuSection, {
      children: (0, L.jsx)(Ln, {
        sliderType: Fn.Knob,
        decreaseButtonLabel: n.formatMessage({
          id: `format.zoomOut`
        }),
        increaseButtonLabel: n.formatMessage({
          id: `format.zoomIn`
        }),
        label: n.formatMessage({
          id: `format.zoom`
        }),
        labelWrappedWithTag: `h3`,
        min: .25,
        max: 4,
        onChange: p,
        step: .25,
        value: l,
        isRtl: c
      })
    }), a.vbkType === Re.PBK && (0, L.jsxs)(L.Fragment, {
      children: [ (0, L.jsx)(Y.Header, {
        children: (0, L.jsx)(f, {
          id: `format.pageView`
        })
      }), (0, L.jsxs)(Y.PageViewContainer, {
        children: [ (0, L.jsx)(Wn, {
          fitTo: `height`,
          theme: e,
          pageFit: i
        }), (0, L.jsx)(Y.PageViewDivider, {}), (0, L.jsx)(Wn, {
          fitTo: `width`,
          theme: e,
          pageFit: i
        }) ]
      }) ]
    }), (0, L.jsxs)(Y.MenuSection, {
      children: [ (0, L.jsxs)(Y.TextSection, {
        id: Un,
        children: [ (0, L.jsx)(Y.Header, {
          children: (0, L.jsx)(f, {
            id: `format.nightDisplay`
          })
        }), (0, L.jsx)(Y.Description, {
          children: (0, L.jsx)(f, {
            id: `format.nightDisplayDescription`
          })
        }) ]
      }), (0, L.jsx)(F.Switch, {
        defaultPressed: o,
        id: Un,
        labelledBy: Un,
        onClick: s,
        size: `small`
      }) ]
    }), a.dpsAvailable && (0, L.jsxs)(L.Fragment, {
      children: [ (0, L.jsx)(Y.Header, {
        children: (0, L.jsx)(f, {
          id: `format.pageView`
        })
      }), (0, L.jsx)(Y.MenuContentContainer, {
        children: (0, L.jsx)(yn, {})
      }) ]
    }) ]
  });
});

function Kn({isTinyScreen: e = !1, className: t = ``}) {
  let {bookInfo: n} = Je();
  return n.vbkType === Re.EPUB && !n.isFixedLayout ? (0, L.jsx)(on, {
    className: t,
    isTinyScreen: e
  }) : (0, L.jsx)(Gn, {
    className: t
  });
}

function qn() {
  window.dispatchEvent(new CustomEvent(`tts-open`));
}

function Jn() {
  window.dispatchEvent(new CustomEvent(`tts-close`));
}

function Yn() {
  let [e, t] = (0, P.useState)(!1), [n, r] = (0, P.useState)(!1), i = (0, P.useCallback)(() => {
    t(!0), r(!0);
  }, []);
  (0, P.useEffect)(() => {
    n && r(!1);
  }, [ n ]);
  let a = (0, P.useCallback)(() => {
    t(!1);
  }, []);
  return (0, P.useEffect)(() => (window.addEventListener(`tts-open`, i), () => {
    window.removeEventListener(`tts-open`, i);
  }), [ i ]), (0, P.useEffect)(() => (window.addEventListener(`tts-close`, a), () => {
    window.removeEventListener(`tts-close`, a);
  }), [ a ]), {
    open: e,
    reopened: n
  };
}

function Xn() {
  let e = A(), t = O(Te), n = O(Ke), r = O($e), i = O(ce), a = O(Ge), o = O(ft), s = O(lt), c = O(dt), l = (0, 
  P.useRef)(!1), u = (0, P.useCallback)(e => {
    let t = e.indexOf(`(`), n = e.lastIndexOf(`)`);
    return t !== -1 && n !== -1 && (e = e.substring(0, t) + e.substring(n + 1)), e.trim();
  }, []);
  return (0, P.useEffect)(() => {
    if (o.length && r && r !== a && !l.current) {
      let t = o.findIndex(e => e.name === r);
      if (t === -1) {
        let e = u(r);
        if (i) {
          let n = i;
          t = o.findIndex(t => u(t.name) === e && n === t.lang), t === -1 && (t = o.findIndex(e => n === e.lang));
        }
        t === -1 && (t = o.findIndex(e => e.default)), t === -1 && (t = o.findIndex(e => navigator.language === e.lang)), 
        t === -1 && (t = 0);
      }
      e(xe(t));
    }
  }, [ o, a, n, r, e, u, i ]), (0, P.useEffect)(() => {
    o.length && (l.current = !0);
  }, [ o.length ]), (0, P.useEffect)(() => {
    o.length === 0 && (e(le()), e(it()));
  }, [ e, o ]), {
    rate: t,
    voiceIndex: n,
    voices: o,
    altEnabled: s,
    simplifiedReadingEnabled: c,
    setVoiceIndex: t => e(xe(t)),
    setRawRate: t => e(Ve(t)),
    enableAltText: () => e(Ae()),
    disableAltText: () => e(ge()),
    enableSimplifiedReading: () => e(ot()),
    disableSimplifiedReading: () => e(me()),
    cleanVoiceName: u
  };
}

b();

function Zn({theme: e}) {
  return (0, L.jsx)(F.Icon, {
    width: 24,
    height: 25,
    children: (0, L.jsxs)(`g`, {
      fill: `none`,
      fillRule: `evenodd`,
      children: [ (0, L.jsx)(`path`, {
        fill: I.cloud.getShade(9),
        d: `M14.24 15.65c-.54.4-1.051.775-1.217 1.388l-.033.122c-.24.888-.312 1.135-.683 1.206h-1.186c-.35-.068-.413-.303-.616-1.136l-.043-.18c-.155-.628-.673-1.014-1.222-1.422-.835-.62-1.78-1.325-1.78-3.06 0-2.385 1.92-4.326 4.282-4.326 2.36 0 4.282 1.941 4.282 4.326 0 1.765-.907 2.435-1.785 3.082M11.742 6.9c-3.095 0-5.612 2.542-5.612 5.668 0 2.414 1.397 3.453 2.322 4.141.303.225.68.507.718.663l.044.178c.113.464.214.844.347 1.152a1.562 1.562 0 0 0-.602 1.229v.185c0 .339.11.65.292.907a1.559 1.559 0 0 0-.292.905v.186c0 .863.695 1.565 1.55 1.565h2.397c.854 0 1.55-.702 1.55-1.565v-.186c0-.338-.11-.65-.292-.905.182-.257.291-.568.291-.907v-.185c0-.489-.228-.92-.576-1.208.143-.315.26-.71.394-1.21l.033-.122c.042-.158.402-.423.717-.657.929-.684 2.331-1.719 2.331-4.166 0-3.126-2.517-5.669-5.612-5.669`
      }), (0, L.jsx)(`path`, {
        fill: e.vstui.color.primary.getShade(6),
        d: `M11.685 4.82c.367 0 .664-.302.664-.672V1.41a.668.668 0 0 0-.664-.671.668.668 0 0 0-.665.671v2.738c0 .37.298.671.665.671M19.28 12.989c0 .37.297.671.664.671h2.71c.367 0 .665-.3.665-.671a.668.668 0 0 0-.665-.671h-2.71c-.367 0-.664.3-.664.67M0 12.989c0 .37.298.671.665.671h2.71c.367 0 .664-.3.664-.671a.668.668 0 0 0-.665-.671H.664c-.366 0-.664.3-.664.67M3.355 4.856a.66.66 0 0 0-.93.136.676.676 0 0 0 .133.94L4.89 7.693a.658.658 0 0 0 .93-.135.676.676 0 0 0-.133-.94L3.355 4.856ZM20.945 4.992a.661.661 0 0 0-.93-.136l-2.33 1.762a.678.678 0 0 0-.135.941.663.663 0 0 0 .931.135l2.33-1.763a.675.675 0 0 0 .134-.94`
      }) ]
    })
  });
}

var Qn = y(Zn);

b();

var X = {
  Note: x.div`
    font-style: italic;
    font-size: 1.2rem;
    margin-top: -12px;
    margin-bottom: -6px;
  `,
  Header: x.h3`
    background: ${I.cloud.getShade(2)};
    color: ${I.cloud.getShade(9)};
    padding: 6px 17px;
    border-bottom: 1px solid ${I.cloud.getShade(3)};
    font-size: 1.5rem;
    font-weight: 500;
  `,
  InnerContent: x.div`
    padding: 0;
  `,
  SliderContainer: x.div`
    padding: 20px 2px;
    height: 198px;
  `,
  VoiceContainer: x.div`
    padding: 20px 2px 0 2px;
  `,
  Footer: x.div`
    border-top: 1px solid ${I.cloud.getShade(4)};
    margin: 0 -24px -24px -24px;
    font-size: 1.4rem;
    text-align: left;
    line-height: 1.7rem;
    display: flex;
    align-items: center;
    background-color: ${I.frost.getShade(2)};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  `,
  Message: x.div`
    padding: 16px 24px 18px 24px;
  `,
  VoiceMessage: x.div`
    font-size: 1.4rem;
    padding: 0 0 10px 0;
  `,
  VoiceCaveatMessage: x.div`
    font-size: 1.2rem;
    font-style: italic;
    margin: -15px 0 10px 0;
  `,
  LinkText: x.div`
    font-size: 1.4rem;
    margin-top: 5px;
  `,
  IconContainer: x.div`
    background-color: white;
    border-radius: 100%;
    min-width: 40px;
    height: 40px;
    margin-inline-start: 20px;
    padding: 8px;
  `,
  ContentContainer: x.div`
    padding-top: 20px;
  `,
  RadioGroup: x.fieldset`
    & legend {
      color: rgb(0, 0, 0);
    }
    & label {
      margin: 16px 0;
      display: flex;
    }
    & input {
      outline: none;
      flex-shrink: 0;
      appearance: none;
      margin: 0.3rem 8px 0 0;
      font: inherit;
      color: ${I.cloud.getShade(7)};
      width: 1.6rem;
      height: 1.6rem;
      border: 1px solid ${I.cloud.getShade(7)};
      border-radius: 50%;
      display: grid;
      place-content: center;
    }
    & input:checked {
      border: 5px solid ${E(6)};
    }
    & input:focus {
      box-shadow: 0 0 0 2px white, 0 0 0 4px ${E(7)};
    }
  `,
  RadioCaption: x.div`
    display: flex;
    flex-direction: column;
    color: ${({isDisabled: e}) => I.cloud.getShade(e ? 7 : 10)};
  `,
  RadioHelperText: x.div`
    color: ${I.cloud.getShade(7)};
    font-size: 1.4rem;
    margin-top: 6px;
    line-height: 1.7rem;
  `,
  FeedbackLink: x(F.Button)`
    font-size: 1.4rem;
    margin-left: 28px;
  `
};

function $n({open: e, closeDialog: t, alert: n}) {
  let r = Xn(), [i, a] = (0, P.useState)(r.rate), o = w(), l = Xe(), [u, d] = (0, 
  P.useState)(N.SPEED), {isRtl: p} = W(), {bookInfo: m} = Je(), h = m.vbkType === Re.PBK, g = o.formatMessage({
    id: `base.default`
  }), _ = Array.from(navigator.languages || navigator.language);
  _.unshift(o.locale);
  let ee = (0, P.useMemo)(() => {
    let e = r.voices;
    if (!r.voices.length) {
      return null;
    }
    let t = e.filter(e => e.default)[0];
    t && _.indexOf(t.lang) === -1 && (t = null);
    let n;
    Intl.DisplayNames && (n = new Intl.DisplayNames(_, {
      type: `language`
    }));
    let i = e => {
      try {
        if (n) {
          return n.of(e);
        }
      } catch {}
      return e;
    }, a = Array.from(new Set(e.map(e => e.lang)).values()), o = e => `${r.cleanVoiceName(e.name)} (${i(e.lang)})${e.default ? ` (${g})` : ``}`, s = (e, t) => e < t ? -1 : +(e > t), c = a.reduce((n, r) => {
      let a = {
        lang: r,
        langDisplay: i(r),
        entries: e.filter(e => e.lang === r && e !== t).map(t => ({
          ...t,
          index: e.indexOf(t),
          displayName: o(t)
        })).sort((e, t) => s(e.displayName, t.displayName))
      };
      return n.push(a), n;
    }, []), l = _.reverse();
    return c.sort((e, t) => {
      let n = l.indexOf(e.lang), r = l.indexOf(t.lang);
      return n === r ? s(e.langDisplay, t.langDisplay) : r - n;
    }), t && c.unshift({
      lang: t.lang,
      langDisplay: g,
      entries: [ t ].map(t => ({
        ...t,
        index: e.indexOf(t),
        displayName: o(t)
      }))
    }), c;
  }, [ g, r, _ ]);
  function v() {
    return [ N.SPEED, N.VOICE, N.SETTINGS ];
  }
  function y(e) {
    let t = parseInt(e.currentTarget.value, 10);
    r.setVoiceIndex(t);
  }
  let te = pt(300, e => {
    r.setRawRate(e), s(`tts_speed`, {
      selected_speed: e
    });
  });
  function b(e) {
    a(e), te(e);
  }
  function x() {
    return (0, L.jsxs)(`div`, {
      children: [ (0, L.jsx)(X.SliderContainer, {
        children: (0, L.jsx)(Ln, {
          sliderType: Fn.Bar,
          label: o.formatMessage({
            id: `tts.speed`
          }),
          min: .5,
          max: 4,
          onChange: b,
          step: .1,
          value: i,
          showValueTip: !0,
          valueTip: `${i.toFixed(1)}x`,
          rangeLabels: [ {
            value: .5,
            caption: `0.5x`,
            title: o.formatMessage({
              id: `tts.slower`
            })
          }, {
            value: 1,
            caption: `1.0x`
          }, {
            value: 2,
            caption: `2.0x`
          }, {
            value: 3,
            caption: `3.0x`
          }, {
            value: 4,
            caption: `4.0x`,
            title: o.formatMessage({
              id: `tts.faster`
            })
          } ],
          isRtl: p
        })
      }), (0, L.jsxs)(X.Footer, {
        children: [ (0, L.jsx)(X.IconContainer, {
          children: (0, L.jsx)(Qn, {})
        }), (0, L.jsx)(X.Message, {
          children: (0, L.jsx)(f, {
            id: `tts.speedFooterMessage`
          })
        }) ]
      }) ]
    });
  }
  function S() {
    return (0, L.jsxs)(X.VoiceContainer, {
      children: [ (0, L.jsx)(F.Select, {
        label: o.formatMessage({
          id: `tts.voice`
        }),
        onChange: y,
        value: r.voiceIndex,
        fullWidth: !0,
        children: ee && ee.map((e, t) => (0, L.jsx)(`optgroup`, {
          label: e.langDisplay,
          children: e.entries.map(e => (0, L.jsx)(`option`, {
            value: e.index,
            children: e.displayName
          }, e.index))
        }, e.langDisplay))
      }), (0, L.jsxs)(L.Fragment, {
        children: [ c() && (0, L.jsx)(X.VoiceCaveatMessage, {
          children: (0, L.jsx)(f, {
            id: `tts.footerMessage.voiceCaveat`
          })
        }), (0, L.jsx)(X.VoiceMessage, {
          children: (0, L.jsx)(f, {
            id: `tts.footerMessage.line.1`
          })
        }), (0, L.jsx)(X.VoiceMessage, {
          children: (0, L.jsx)(f, {
            id: `tts.footerMessage.line.2`
          })
        }), (0, L.jsx)(X.LinkText, {
          children: (0, L.jsx)(f, {
            id: `tts.viewCommitment`,
            values: {
              link: e => (0, L.jsx)(F.Button, {
                inline: !0,
                href: o.formatMessage({
                  id: `tts.footerURL`
                }),
                target: `_blank`,
                children: e
              })
            }
          })
        }) ]
      }) ]
    });
  }
  function C() {
    let e = `contentSettings`;
    return (0, L.jsxs)(X.ContentContainer, {
      children: [ (0, L.jsxs)(X.RadioGroup, {
        children: [ (0, L.jsx)(`legend`, {
          children: o.formatMessage({
            id: `tts.contentSettingsHeading`
          })
        }), (0, L.jsxs)(`div`, {
          children: [ (0, L.jsxs)(`label`, {
            children: [ (0, L.jsx)(`input`, {
              type: `radio`,
              name: e,
              disabled: h,
              checked: !h && r.simplifiedReadingEnabled,
              onChange: () => {
                s(`tts_content_settings`, {
                  simplified: !0
                }), r.enableSimplifiedReading();
              }
            }), (0, L.jsxs)(X.RadioCaption, {
              isDisabled: h,
              children: [ (0, L.jsx)(`div`, {
                children: (0, L.jsx)(f, {
                  id: `tts.simplifiedReadingLabel`
                })
              }), (0, L.jsx)(X.RadioHelperText, {
                children: (0, L.jsx)(f, {
                  id: h ? `tts.simplifiedReadingUnavailable` : `tts.simplifiedReadingHelperText`
                })
              }) ]
            }) ]
          }), (0, L.jsxs)(`label`, {
            children: [ (0, L.jsx)(`input`, {
              type: `radio`,
              name: e,
              checked: h ? !0 : !r.simplifiedReadingEnabled,
              onChange: () => {
                s(`tts_content_settings`, {
                  simplified: !1
                }), r.disableSimplifiedReading();
              }
            }), (0, L.jsxs)(X.RadioCaption, {
              children: [ (0, L.jsx)(`div`, {
                children: (0, L.jsx)(f, {
                  id: `tts.detailedReadingLabel`
                })
              }), (0, L.jsx)(X.RadioHelperText, {
                children: (0, L.jsx)(f, {
                  id: `tts.detailedReadingHelperText`
                })
              }) ]
            }) ]
          }) ]
        }) ]
      }), (0, L.jsx)(X.FeedbackLink, {
        inline: !0,
        href: o.formatMessage({
          id: `tts.feedbackURL`
        }),
        target: `_blank`,
        children: (0, L.jsx)(f, {
          id: `tts.leaveFeedback`
        })
      }) ]
    });
  }
  function ne(e) {
    if (e === N.SPEED) {
      return x();
    }
    if (e === N.VOICE) {
      return S();
    }
    if (e === N.SETTINGS) {
      return C();
    }
  }
  let re = v().map(e => ({
    heading: o.formatMessage({
      id: `tts.${e}`
    })
  })), T = v().map(e => ({
    content: ne(e),
    panelKey: e
  })), ie = T.findIndex(e => e.panelKey === u), E = e => {
    let t = T[e].panelKey;
    d(t);
  };
  return (0, L.jsx)(mt, {
    type: Qe.Vstui,
    open: e,
    title: o.formatMessage({
      id: `tts.readAloudSettings`
    }),
    darkHeader: !l,
    onRequestClose: t,
    size: `large`,
    alert: n,
    children: (0, L.jsx)(X.InnerContent, {
      children: (0, L.jsx)(F.Tabs, {
        onSelect: e => E(e),
        selectedIndex: ie,
        tabData: re,
        tabPanel: T,
        tabPadding: `none`
      })
    })
  });
}

function er(e) {
  let t = se();
  return (0, P.useEffect)(() => {
    t(de(e));
  }, [ e, t ]), (0, P.useMemo)(() => ({
    play: () => t(ke()),
    pause: () => t(De()),
    stop: () => t(be()),
    resume: () => t(vt()),
    skipForward: () => t(Ue()),
    skipBack: () => t(ze()),
    playFromLocation: e => t(ve({
      location: e
    })),
    playFromCurrentSelection: () => t(Me()),
    cuePlayback: () => t(Le()),
    uncuePlayback: () => t(Ee())
  }), [ t ]);
}

function tr() {
  let e = O(qe), t = A();
  return {
    decentered: e,
    recenter: () => t(Pe()),
    playFromViewport: () => t(Ce())
  };
}

b();

var nr = 48, rr = {
  Container: x.div`
    position: absolute;
    margin-top: 16px;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    white-space: nowrap;
    padding: 8px 20px;
    background-color: ${I.frost.getShade(1)};
    border: 1px solid ${I.frost.getShade(3)};
    border-radius: 26px;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.3);
  `,
  Button: x.button`
    font-size: 1.6rem;
    padding: 2px;
    color: ${E(7)};
    outline: none;
    border-radius: 4px;
    &:focus {
      box-shadow: 0 0 0 1px white, 0 0 0 3px ${E(7)};
    }
    &:active {
      color: ${E(10)};
    }
    &:not(:last-child) {
      margin-right: ${nr}px;
      &::after {
        position: absolute;
        display: inline-block;
        content: "";
        top: 0;
        background-color: ${I.frost.getShade(4)};
        bottom: 0;
        width: 2px;
        margin: 9px ${nr / 2}px;
      }
    }
  `
};

function ir() {
  let {recenter: e, playFromViewport: t} = tr();
  return (0, L.jsxs)(rr.Container, {
    children: [ (0, L.jsx)(rr.Button, {
      onClick: () => e(),
      children: (0, L.jsx)(f, {
        id: `tts.recenter`
      })
    }), (0, L.jsx)(rr.Button, {
      onClick: () => t(),
      children: (0, L.jsx)(f, {
        id: `tts.readFromHere`
      })
    }) ]
  });
}

function ar() {
  return O(Ne);
}

b();

var or = te`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`, sr = {
  ControlContainer: x.div`
    ${({dockedRecenter: e}) => e && `position: relative;`}
    display: flex;
    justify-content: space-between;
    padding: 0.7rem;
    align-items: center;
    background: ${I.frost.getShade(1)};
    border: 1px solid ${I.frost.getShade(3)};
    border-radius: 2.5rem;
    min-width: 21rem;
    > * {
      animation: ${or} 0.1s;
    }
  `,
  MiddleContainer: x.div`
    display: flex;
    justify-content: space-between;
    max-width: 12.4rem;
    flex: 1;
    margin: 0 10px;
  `,
  IconButton: x(F.IconButton)`
    svg {
      transform: scale(${e => e.large ? 1.4 : 1});
      margin-left: ${e => e.shiftMarginLeft ? `3px` : `0px`};
    }
  `
}, Z = y(({onClick: e, label: t, "data-interaction-id": n, icon: r, large: i = !1, theme: a, style: o, iconSVGColor: s, shiftMarginLeft: c}) => {
  let l = a.vstui.color.primary.getShade(6), u = s || a.color.base.getShade(10);
  return (0, L.jsx)(sr.IconButton, {
    onClick: e,
    rounded: !0,
    label: m(t),
    "data-interaction-id": n,
    icon: r,
    size: `small`,
    large: i,
    color: `custom`,
    customIconColor: u,
    customIconFocusColor: l,
    customIconFocusBGColor: !0,
    style: o,
    shiftMarginLeft: c
  });
}), cr = y(({size: e = `300px`, alertDialog: t = !1, theme: n, dockedRecenter: r = !1}) => {
  let i = w(), {reopened: a} = Yn(), o = er(i.formatMessage({
    id: `tts.cantRead`
  })), s = ar(), [c, l] = (0, P.useState)(!1), u = n.color.base.getShade(10), {decentered: d} = tr(), f = (0, 
  P.useRef)(null);
  return ae(() => void o.stop()), (0, P.useEffect)(() => (f.current && f.current.querySelector(`button`)?.focus(), 
  o.cuePlayback(), () => {
    o.uncuePlayback();
  }), [ o ]), (0, P.useEffect)(() => {
    a && f.current && f.current.querySelector(`button`)?.focus();
  }, [ a ]), (0, L.jsx)(L.Fragment, {
    children: (0, L.jsxs)(sr.ControlContainer, {
      dockedRecenter: r,
      style: {
        width: e
      },
      children: [ (0, L.jsx)($n, {
        open: c,
        closeDialog: () => l(!1),
        alert: t
      }), (0, L.jsx)(Z, {
        icon: (0, L.jsx)(H.Gear, {}),
        onClick: () => l(!0),
        label: i.formatMessage({
          id: `tts.readAloudSettings`
        })
      }), (0, L.jsxs)(sr.MiddleContainer, {
        children: [ (0, L.jsx)(Z, {
          label: i.formatMessage({
            id: `tts.skipBack`
          }),
          onClick: o.skipBack,
          icon: (0, L.jsx)(H.StartOver, {}),
          style: {
            transform: `rotateY(180deg)`
          }
        }), (0, L.jsx)(`div`, {
          ref: f,
          children: s === rt.PLAYING ? (0, L.jsx)(Z, {
            label: i.formatMessage({
              id: `base.pause`
            }),
            onClick: o.pause,
            "data-interaction-id": `tts_pause`,
            icon: (0, L.jsx)(H.Pause, {}),
            style: {
              backgroundColor: u
            },
            iconSVGColor: `white`
          }) : (0, L.jsx)(Z, {
            label: i.formatMessage({
              id: `base.play`
            }),
            onClick: o.play,
            "data-interaction-id": `tts_play`,
            icon: (0, L.jsx)(H.Play, {}),
            style: {
              backgroundColor: u
            },
            iconSVGColor: `white`,
            shiftMarginLeft: !0
          })
        }), (0, L.jsx)(Z, {
          label: i.formatMessage({
            id: `tts.skipForward`
          }),
          onClick: o.skipForward,
          icon: (0, L.jsx)(H.StartOver, {})
        }) ]
      }), (0, L.jsx)(Z, {
        icon: (0, L.jsx)(H.XSmall, {}),
        onClick: () => {
          o.stop(), Jn();
        },
        label: i.formatMessage({
          id: `base.close`
        }),
        "data-interaction-id": `tts_stop`
      }), d && (0, L.jsx)(ir, {}) ]
    })
  });
}), Q = re(), lr = function(e) {
  return e.MOUSE_MOVE = `mousemove touchmove pointermove MSPointerMove`, e.MOUSE_DOWN = `mousedown touchstart pointerdown MSPointerDown`, 
  e.MOUSE_UP = `mouseup touchend pointerup MSPointerUp`, e;
}({});

function ur(e, t) {
  if (t.length === 0) {
    return !1;
  }
  if (t.length === 1) {
    return t[0];
  }
  {
    let n = C(e), r = ne((0, Q.parseCfi)(n), t, (e, t) => {
      let n = C(t.cfi);
      try {
        return Q.CFI.compare(e, (0, Q.parseCfi)(n));
      } catch {
        return null;
      }
    }, !0);
    return r === -1 && (r = 0), t[r];
  }
}

function dr({bookInfo: e, pageBreaks: t, toc: n, cfi: r}) {
  if (e.hasPageBreaks && t.length > 0) {
    let e = ur(r, t);
    return t.indexOf(e) / t.length;
  }
  if (n && n.length > 0) {
    for (let e = 0; e < n.length; e++) {
      r = r.split(`!`)[0];
      let t = C(r), i = C(n[e].cfi), a;
      try {
        a = Q.CFI.compare((0, Q.parseCfi)(t), (0, Q.parseCfi)(i));
      } catch {}
      if (a <= 0) {
        return Math.max(0, e) / (n.length - 1);
      }
    }
  }
  return NaN;
}

function fr({bookInfo: e, pageBreaks: t, page: n}) {
  if (e.hasPageBreaks) {
    for (let e = 0; e < t.length; e++) {
      if (t[e].label === n) {
        return (e + 1) / t.length;
      }
    }
  }
  return !1;
}

function pr({pageBreaks: e, distance: t}) {
  return e ? e[Math.floor(e.length * (t / 100))] : null;
}

function mr({toc: e, distance: t}) {
  return e ? e[Math.floor(e.length * (t / 100))] : null;
}

function hr({bookInfo: e, pageBreaks: t, toc: n, distance: r}) {
  if (e.hasPageBreaks) {
    let e = pr({
      pageBreaks: t,
      distance: r
    });
    if (e) {
      return e.cfi;
    }
  } else {
    let e = mr({
      toc: n,
      distance: r
    });
    if (e) {
      return e.cfi;
    }
  }
}

function gr({bookInfo: e, pageBreaks: t, distance: n}) {
  if (e.hasPageBreaks) {
    let e = pr({
      pageBreaks: t,
      distance: n
    });
    if (e) {
      return e.label;
    }
  }
}

function _r({bookInfo: e, pageBreaks: t, toc: n, distance: r}) {
  if (e.hasPageBreaks) {
    let e = pr({
      pageBreaks: t,
      distance: r
    });
    if (e) {
      return pe(e.cfi, {
        toc: n
      });
    }
  } else {
    let e = mr({
      toc: n,
      distance: r
    });
    return e ? e.title : ``;
  }
}

function vr(e) {
  let t = {};
  if (t.type = e.type, t.currentTarget = e.currentTarget, e.type === `touchstart` || e.type === `touchmove` || e.type === `touchend`) {
    if (e.touches && e.touches.length > 0 || e.changedTouches && e.changedTouches.length > 0) {
      let n;
      e.touches && (n = e.touches[0]), !n && e.changedTouches.length && (n = e.changedTouches[0]), 
      t.clientX = n.clientX, t.clientY = n.clientY;
    } else {
      t.clientX = e.clientX, t.clientY = e.clientY;
    }
  } else {
    (e.type === `mousedown` || e.type === `mouseup` || e.type === `mousemove` || e.type === `pointerdown` || e.type === `pointerup` || e.type === `pointermove` || e.type === `MSPointerDown` || e.type === `MSPointerUp` || e.type === `MSPointerMove`) && (t.clientX = e.clientX, 
    t.clientY = e.clientY);
  }
  return t;
}

var yr = () => (0, L.jsx)(ee, {
  styles: `iframe { pointer-events: none }`
}), br = D(k.GET_TOC);

function xr() {
  return function(e, t) {
    if (_t(t()) === u.WAITING) {
      return e(br());
    }
  };
}

function Sr() {
  let e = O(_t), t = O(tt), n = O(nt), r = O(Ye), i = O(et), a = O(ut), o = O(ht), s = A();
  (0, P.useEffect)(() => {
    e === u.WAITING && s(xr());
  }, [ e, s ]);
  function c(e) {
    s(oe(e.cfi));
  }
  return {
    loadStatus: e,
    tocFlatData: t,
    tocData: n,
    currentUuid: i,
    currentUuidParentList: a,
    goToTocEntry: c,
    uuidsWithChildren: r,
    tocNodesWithValidCFIS: o
  };
}

function Cr(e, t, n) {
  return e[t.id] === void 0 ? (console.error(`Can't update id ${t.id} because it is not expandable`), 
  e) : {
    ...e,
    [t.id]: n
  };
}

function wr(e, t) {
  switch (t.type) {
   case `expand-item`:
    return Cr(e, t, !0);

   case `collapse-item`:
    return Cr(e, t, !1);

   case `toggle-item`:
    return Cr(e, t, !e[t.id]);

   case `expand-all`:
    return Object.keys(e).reduce((e, t) => (e[t] = !0, e), {});

   case `collapse-all`:
    return Object.keys(e).reduce((e, t) => (e[t] = !1, e), {});

   case `update-nodes`:
    {
      let n = {};
      return t.nodes.forEach(r => {
        e[r] === void 0 ? n[r] = t.defaultExpanded : n[r] = e[r];
      }), n;
    }

   default:
    return e;
  }
}

function Tr(e, t) {
  return e.reduce((e, n) => (e[n] = t, e), {});
}

function Er(e, t) {
  let [n, r] = (0, P.useReducer)(wr, Tr(e, t)), i = (0, P.useRef)(!1);
  (0, P.useEffect)(() => {
    i.current ? r({
      type: `update-nodes`,
      nodes: e,
      defaultExpanded: t
    }) : i.current = !0;
  }, [ e, t ]);
  let a = (0, P.useCallback)(e => !!n[e], [ n ]), o = (0, P.useCallback)(e => {
    r({
      type: `expand-item`,
      id: e
    });
  }, []), s = (0, P.useCallback)(e => {
    r({
      type: `collapse-item`,
      id: e
    });
  }, []), c = (0, P.useCallback)(() => {
    r({
      type: `expand-all`
    });
  }, []), l = (0, P.useCallback)(() => {
    r({
      type: `collapse-all`
    });
  }, []), u = (0, P.useCallback)(e => {
    r({
      type: `toggle-item`,
      id: e
    });
  }, []);
  return {
    fullyExpanded: (0, P.useMemo)(() => !Object.values(n).some(e => !e), [ n ]),
    fullyCollapsed: (0, P.useMemo)(() => !Object.values(n).some(e => e), [ n ]),
    isItemExpanded: a,
    expandAll: c,
    collapseAll: l,
    expandItem: o,
    collapseItem: s,
    toggleItem: u,
    isItemExpandable: (0, P.useCallback)(e => n[e] !== void 0, [ n ])
  };
}

b();

var Dr = {
  Separator: x.span`
    padding: 0 5px;
    color: var(--vst-cloud-7);
    font-size: 1.4rem;
  `,
  ButtonContainer: x.fieldset`
    padding-left: 2px;
    padding-block: 6px;

    ${e => e.styleVariant === `frost-bg` ? S`
            padding-inline: 24px;
            padding-block: 16px;
            background: var(--vst-frost-1);
          ` : ``}
  `,
  VisuallyHiddenLegend: x.legend`
    ${ie}
  `
};

function Or(e) {
  return (0, L.jsx)(`button`, {
    ...e,
    type: `button`,
    className: ct(`vst-link`, `vst-link-size-small`, `vst-link-option-no-underline`, e.disabled && `vst-link-variant-black`)
  });
}

function kr({onExpandClick: e, onCollapseClick: t, allExpanded: n, allCollapsed: r, featureId: i, visuallyHiddenLegend: a, styleVariant: o = `default`}) {
  let s = w(), c = (0, P.useRef)(null), l = e => {
    Promise.resolve(e).then(() => {
      _(c.current)[0]?.focus();
    });
  };
  return (0, L.jsxs)(Dr.ButtonContainer, {
    ref: c,
    styleVariant: o,
    children: [ (0, L.jsx)(Dr.VisuallyHiddenLegend, {
      children: a
    }), (0, L.jsx)(Or, {
      onClick: () => {
        l(e());
      },
      disabled: n,
      "data-interaction-id": i ? n ? void 0 : `${i}_expand_all` : void 0,
      children: s.formatMessage({
        id: `base.expandAll`
      })
    }), (0, L.jsx)(Dr.Separator, {
      children: `|`
    }), (0, L.jsx)(Or, {
      onClick: () => {
        l(t());
      },
      disabled: r,
      "data-interaction-id": i ? r ? void 0 : `${i}_collapse_all` : void 0,
      children: s.formatMessage({
        id: `base.collapseAll`
      })
    }) ]
  });
}

var Ar = r({
  __assign: () => $r,
  __asyncDelegator: () => Gr,
  __asyncGenerator: () => Wr,
  __asyncValues: () => Kr,
  __await: () => $,
  __awaiter: () => Ir,
  __classPrivateFieldGet: () => Xr,
  __classPrivateFieldSet: () => Zr,
  __createBinding: () => Rr,
  __decorate: () => Nr,
  __exportStar: () => zr,
  __extends: () => jr,
  __generator: () => Lr,
  __importDefault: () => Yr,
  __importStar: () => Jr,
  __makeTemplateObject: () => qr,
  __metadata: () => Fr,
  __param: () => Pr,
  __read: () => Vr,
  __rest: () => Mr,
  __spread: () => Hr,
  __spreadArrays: () => Ur,
  __values: () => Br
});

function jr(e, t) {
  Qr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n);
}

function Mr(e, t) {
  var n = {};
  for (var r in e) {
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  }
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    }
  }
  return n;
}

function Nr(e, t, n, r) {
  var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`) {
    a = Reflect.decorate(e, t, n, r);
  } else {
    for (var s = e.length - 1; s >= 0; s--) {
      (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
    }
  }
  return i > 3 && a && Object.defineProperty(t, n, a), a;
}

function Pr(e, t) {
  return function(n, r) {
    t(n, r, e);
  };
}

function Fr(e, t) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`) {
    return Reflect.metadata(e, t);
  }
}

function Ir(e, t, n, r) {
  function i(e) {
    return e instanceof n ? e : new n(function(t) {
      t(e);
    });
  }
  return new (n ||= Promise)(function(n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      e.done ? n(e.value) : i(e.value).then(o, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}

function Lr(e, t) {
  var n = {
    label: 0,
    sent: function() {
      if (a[0] & 1) {
        throw a[1];
      }
      return a[1];
    },
    trys: [],
    ops: []
  }, r, i, a, o;
  return o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }, typeof Symbol == `function` && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(e) {
    return function(t) {
      return c([ e, t ]);
    };
  }
  function c(o) {
    if (r) {
      throw TypeError(`Generator is already executing.`);
    }
    for (;n; ) {
      try {
        if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 
        0) : i.next) && !(a = a.call(i, o[1])).done) {
          return a;
        }
        switch (i = 0, a && (o = [ o[0] & 2, a.value ]), o[0]) {
         case 0:
         case 1:
          a = o;
          break;

         case 4:
          return n.label++, {
            value: o[1],
            done: !1
          };

         case 5:
          n.label++, i = o[1], o = [ 0 ];
          continue;

         case 7:
          o = n.ops.pop(), n.trys.pop();
          continue;

         default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (o[0] === 6 || o[0] === 2)) {
            n = 0;
            continue;
          }
          if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
            n.label = o[1];
            break;
          }
          if (o[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = o;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(o);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
        }
        o = t.call(e, n);
      } catch (e) {
        o = [ 6, e ], i = 0;
      } finally {
        r = a = 0;
      }
    }
    if (o[0] & 5) {
      throw o[1];
    }
    return {
      value: o[0] ? o[1] : void 0,
      done: !0
    };
  }
}

function Rr(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}

function zr(e, t) {
  for (var n in e) {
    n !== "default" && !t.hasOwnProperty(n) && (t[n] = e[n]);
  }
}

function Br(e) {
  var t = typeof Symbol == `function` && Symbol.iterator, n = t && e[t], r = 0;
  if (n) {
    return n.call(e);
  }
  if (e && typeof e.length == `number`) {
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw TypeError(t ? `Object is not iterable.` : `Symbol.iterator is not defined.`);
}

function Vr(e, t) {
  var n = typeof Symbol == `function` && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  var r = n.call(e), i, a = [], o;
  try {
    for (;(t === void 0 || t-- > 0) && !(i = r.next()).done; ) {
      a.push(i.value);
    }
  } catch (e) {
    o = {
      error: e
    };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return a;
}

function Hr() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(Vr(arguments[t]));
  }
  return e;
}

function Ur() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
    e += arguments[t].length;
  }
  for (var r = Array(e), i = 0, t = 0; t < n; t++) {
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) {
      r[i] = a[o];
    }
  }
  return r;
}

function $(e) {
  return this instanceof $ ? (this.v = e, this) : new $(e);
}

function Wr(e, t, n) {
  if (!Symbol.asyncIterator) {
    throw TypeError(`Symbol.asyncIterator is not defined.`);
  }
  var r = n.apply(e, t || []), i, a = [];
  return i = {}, o(`next`), o(`throw`), o(`return`), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(e) {
    r[e] && (i[e] = function(t) {
      return new Promise(function(n, r) {
        a.push([ e, t, n, r ]) > 1 || s(e, t);
      });
    });
  }
  function s(e, t) {
    try {
      c(r[e](t));
    } catch (e) {
      d(a[0][3], e);
    }
  }
  function c(e) {
    e.value instanceof $ ? Promise.resolve(e.value.v).then(l, u) : d(a[0][2], e);
  }
  function l(e) {
    s(`next`, e);
  }
  function u(e) {
    s(`throw`, e);
  }
  function d(e, t) {
    e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}

function Gr(e) {
  var t, n;
  return t = {}, r(`next`), r(`throw`, function(e) {
    throw e;
  }), r(`return`), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function r(r, i) {
    t[r] = e[r] ? function(t) {
      return (n = !n) ? {
        value: $(e[r](t)),
        done: r === `return`
      } : i ? i(t) : t;
    } : i;
  }
}

function Kr(e) {
  if (!Symbol.asyncIterator) {
    throw TypeError(`Symbol.asyncIterator is not defined.`);
  }
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof Br == `function` ? Br(e) : e[Symbol.iterator](), 
  n = {}, r(`next`), r(`throw`), r(`return`), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(t) {
    n[t] = e[t] && function(n) {
      return new Promise(function(r, a) {
        n = e[t](n), i(r, a, n.done, n.value);
      });
    };
  }
  function i(e, t, n, r) {
    Promise.resolve(r).then(function(t) {
      e({
        value: t,
        done: n
      });
    }, t);
  }
}

function qr(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", {
    value: t
  }) : e.raw = t, e;
}

function Jr(e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = {};
  if (e != null) {
    for (var n in e) {
      Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
  }
  return t.default = e, t;
}

function Yr(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

function Xr(e, t) {
  if (!t.has(e)) {
    throw TypeError(`attempted to get private field on non-instance`);
  }
  return t.get(e);
}

function Zr(e, t, n) {
  if (!t.has(e)) {
    throw TypeError(`attempted to set private field on non-instance`);
  }
  return t.set(e, n), n;
}

var Qr, $r, ei = n(() => {
  Qr = function(e, t) {
    return Qr = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    }, Qr(e, t);
  }, $r = function() {
    return $r = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var i in t = arguments[n], t) {
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
      }
      return e;
    }, $r.apply(this, arguments);
  };
}), ti = i(e => {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = (ei(), t(Ar)), r = n.__importStar(a()), i = function(e) {
    n.__extends(t, e);
    function t(t) {
      var n = e.call(this, t) || this;
      return n.outerRef = null, n.handleRef = function(e) {
        if (n.outerRef = e, n.props.forwardedRef) {
          if (typeof n.props.forwardedRef == `function`) {
            n.props.forwardedRef(e);
          } else if (typeof n.props.forwardedRef == `object`) {
            var t = n.props.forwardedRef;
            t.current = e;
          } else {
            throw Error(`Invalid forwardedRef ` + n.props.forwardedRef);
          }
        }
      }, n.handleTransitionEnd = function(e) {
        e.target === n.outerRef && e.propertyName === `height` && (n.state.childrenLeaving ? n.setState({
          children: null,
          childrenLeaving: !1
        }, function() {
          return n.endTransition();
        }) : n.endTransition());
      }, n.state = {
        children: t.children,
        childrenLeaving: !1
      }, n;
    }
    return t.prototype.componentDidMount = function() {
      this.outerRef && (this.props.closed || !this.props.children ? (this.outerRef.classList.add(`closed`), 
      this.outerRef.style.height = `0px`) : this.props.transitionOnAppear ? this.startTransition(`0px`) : this.outerRef.style.height = `auto`);
    }, t.prototype.getSnapshotBeforeUpdate = function() {
      return this.outerRef ? this.outerRef.getBoundingClientRect().height + `px` : null;
    }, t.getDerivedStateFromProps = function(e, t) {
      return e.children ? {
        children: e.children,
        childrenLeaving: !1
      } : t.children ? {
        children: t.children,
        childrenLeaving: !0
      } : null;
    }, t.prototype.componentDidUpdate = function(e, t, n) {
      this.outerRef && this.startTransition(n);
    }, t.prototype.startTransition = function(e) {
      var t = `0px`;
      !this.props.closed && !this.state.childrenLeaving && this.state.children && (this.outerRef.classList.remove(`closed`), 
      this.outerRef.style.height = `auto`, t = getComputedStyle(this.outerRef).height), 
      parseFloat(t).toFixed(2) !== parseFloat(e).toFixed(2) && (this.outerRef.classList.add(`transitioning`), 
      this.outerRef.style.height = e, this.outerRef.offsetHeight, this.outerRef.style.transitionProperty = `height`, 
      this.outerRef.style.height = t);
    }, t.prototype.endTransition = function() {
      this.outerRef.classList.remove(`transitioning`), this.outerRef.style.transitionProperty = `none`, 
      this.outerRef.style.height = this.props.closed ? `0px` : `auto`, (this.props.closed || !this.state.children) && this.outerRef.classList.add(`closed`);
    }, t.prototype.render = function() {
      var e = this.props, t = e.as, i = t === void 0 ? `div` : t;
      e.children;
      var a = e.className;
      e.closed, e.transitionOnAppear, e.forwardedRef;
      var o = n.__rest(e, [ `as`, `children`, `className`, `closed`, `transitionOnAppear`, `forwardedRef` ]), s = a ? `react-slidedown ` + a : `react-slidedown`;
      return r.default.createElement(i, n.__assign({
        ref: this.handleRef,
        className: s,
        onTransitionEnd: this.handleTransitionEnd
      }, o), this.state.children);
    }, t.defaultProps = {
      transitionOnAppear: !0,
      closed: !1
    }, t;
  }(r.Component);
  e.SlideDown = r.forwardRef(function(e, t) {
    return r.default.createElement(i, n.__assign({}, e, {
      forwardedRef: t
    }));
  }), e.default = e.SlideDown;
})();

b();

var ni = x(ti.SlideDown)`
  transition-duration: ${600}ms;
  transition-timing-function: linear;
`;

function ri({trigger: e, children: t, className: n = void 0, keepChildrenMounted: r = !1, transitionOnAppear: i = !1}) {
  return (0, L.jsx)(ni, {
    closed: r ? !e : void 0,
    className: n,
    transitionOnAppear: i,
    children: e || r ? t : null
  });
}

b();

var ii = x.span`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${({rotateMe: e}) => e && `transform: rotate(-180deg);`};
`;

function ai({rotate: e, children: t}) {
  return (0, L.jsx)(ii, {
    rotateMe: e,
    children: t
  });
}

b();

var oi = {
  IconButton: x.button`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 26px;
    width: 26px;
    background: none;
    border-radius: 50px;
    :hover {
      background: ${e => e.theme.vstui.color.primary.getShade(1)};
    }
    :focus {
      border: 2px solid ${e => e.theme.vstui.color.primary.getShade(6)};
      outline: none;
    }
  `
};

function si({onClick: e, isExpanded: t, theme: n, ariaLabel: r, className: i, labelledById: a, featureId: o}) {
  return (0, L.jsx)(oi.IconButton, {
    className: i,
    onClick: e,
    "aria-label": r,
    "aria-expanded": t,
    "aria-labelledby": a,
    "data-interaction-id": o ? t ? `${o}_collapse` : `${o}_expand` : void 0,
    children: (0, L.jsx)(ai, {
      rotate: t,
      children: (0, L.jsx)(H.CaretDownSmall, {
        color: n.vstui.color.primary.getShade(6)
      })
    })
  });
}

var ci = y(si);

function li({children: e, tag: t = `span`, ...n}) {
  return (0, L.jsx)(t, {
    dangerouslySetInnerHTML: {
      __html: e
    },
    ...n
  });
}

export { xt as A, W as C, zt as D, Bt as E, Rt as O, Kn as S, Vt as T, ar as _, Er as a, qn as b, yr as c, hr as d, _r as f, cr as g, gr as h, kr as i, St as k, vr as l, fr as m, ci as n, Sr as o, dr as p, ri as r, xr as s, li as t, lr as u, er as v, Ht as w, Yn as x, Xn as y };
//# sourceMappingURL=UnsafeHtml-CULNzw5Z.js.map
//# sourceMappingURL=UnsafeHtml-CULNzw5Z.js.map