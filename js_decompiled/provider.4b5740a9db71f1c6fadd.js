(() => {
  var t = {
    10920(t, u) {
      var P, A, M, q;
      function _objectSpread(t) {
        for (var u = 1; u < arguments.length; u++) {
          var P = arguments[u] ?? {}, A = Object.keys(P);
          "function" == typeof Object.getOwnPropertySymbols && (A = A.concat(Object.getOwnPropertySymbols(P).filter(function(t) {
            return Object.getOwnPropertyDescriptor(P, t).enumerable;
          }))), A.forEach(function(u) {
            _defineProperty(t, u, P[u]);
          });
        }
        return t;
      }
      function _defineProperty(t, u, P) {
        return u in t ? Object.defineProperty(t, u, {
          value: P,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[u] = P, t;
      }
      function _typeof(t) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t;
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, _typeof(t);
      }
      q = function(t) {
        "use strict";
        var u = Math.min;
        function b(t) {
          return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
        }
        function d(t, u) {
          return t(u = {
            exports: {}
          }, u.exports), u.exports;
        }
        function e(t) {
          return t && t.default || t;
        }
        function f(t) {
          return Math.pow((t + .055) / 1.055, 2.4);
        }
        function g(t, P) {
          return (Math.max(t, P) + .05) / (u(t, P) + .05);
        }
        function h(t, u) {
          return g(C(t), C(u));
        }
        function j(t, u, P) {
          return t = k(t, P), u = k(u, P), se.rgb(t, u);
        }
        function k(t, u) {
          if ("string" != typeof t) throw new TypeError("get-contrast expects colors as strings");
          return yc(t) && (t = Na[t]), (t = l(t, u)).match(/\((.*)\)/)[1].split(",").slice(0, 3);
        }
        function l(t, u) {
          u = u || {};
          var P = (t = ae(t)).match(/\((.*)\)/)[1].split(",");
          if (4 != P.length || "0" != P[3] || u.ignoreAlpha) return t;
          throw new TypeError("get-contrast cannot contrast transparent colors");
        }
        var P = {
          maroon: "#800000",
          red: "#ff0000",
          orange: "#ffA500",
          yellow: "#ffff00",
          olive: "#808000",
          purple: "#800080",
          fuchsia: "#ff00ff",
          white: "#ffffff",
          lime: "#00ff00",
          green: "#008000",
          navy: "#000080",
          blue: "#0000ff",
          aqua: "#00ffff",
          teal: "#008080",
          black: "#000000",
          silver: "#c0c0c0",
          gray: "#808080",
          transparent: "#0000"
        }, o = function(t, u, P, A) {
          var M = Math.round;
          return (null == A || "" === A) && (A = 1), t = parseFloat(t), u = parseFloat(u), 
          P = parseFloat(P), A = parseFloat(A), 255 >= t && 0 <= t && 255 >= u && 0 <= u && 255 >= P && 0 <= P && 1 >= A && 0 <= A ? [ M(t), M(u), M(P), A ] : null;
        }, r = function(t, u, P) {
          return 0 > P && (P += 1), 1 < P && (P -= 1), P < 1 / 6 ? t + 6 * (u - t) * P : P < .5 ? u : P < 2 / 3 ? t + (u - t) * (2 / 3 - P) * 6 : t;
        }, s = function(t, u, P, A) {
          var M, q, ee;
          if ((null == A || "" === A) && (A = 1), t = parseFloat(t) / 360, u = parseFloat(u) / 100, 
          P = parseFloat(P) / 100, A = parseFloat(A) / 1, 1 < t || 0 > t || 1 < u || 0 > u || 1 < P || 0 > P || 1 < A || 0 > A) return null;
          if (0 === u) M = q = ee = P; else {
            var te = .5 > P ? P * (1 + u) : P + u - P * u, re = 2 * P - te;
            M = r(re, te, t + 1 / 3), ee = r(re, te, t), q = r(re, te, t - 1 / 3);
          }
          return [ 255 * M, 255 * ee, 255 * q, A ];
        }, A = [];
        for (var M in P) A.push(M);
        var q = "(" + A.join("|") + ")", ee = /(?:#([a-f0-9]{3,8}))/i, te = /(?:rgb)a?\(\s*([.\d%]+)\s*,\s*([.\d%]+)\s*,\s*([.\d%]+)\s*(?:,\s*([.\d]+)\s*)?\)/i, re = /(?:hsl)a?\(\s*([.\d%]+)\s*,\s*([.\d%]+)\s*,\s*([.\d%]+)\s*(?:,\s*([.\d]+)\s*)?\)/i, x = function(t, u) {
          if (null == t) return null;
          t = (t + "").replace(/\s+/, "");
          var A = P[t];
          if (A) return x(A, u);
          if (A = t.match(ee)) t = function(t) {
            if (3 === t.length && (t += "f"), 4 === t.length) {
              var u = t.charAt(0), P = t.charAt(1), A = t.charAt(2), M = t.charAt(3);
              t = u + u + P + P + A + A + M + M;
            }
            6 === t.length && (t += "ff");
            for (var q = [], ee = 0, te = t.length; ee < te; ee += 2) q.push(parseInt(t.substr(ee, 2), 16) / (6 == ee ? 255 : 1));
            return q;
          }(A[1]); else if (A = t.match(te)) t = A.slice(1); else {
            if (!(A = t.match(re))) return null;
            t = s.apply(null, A.slice(1));
          }
          return t && (t = o.apply(null, t)) ? u ? t : (1 === t[3] && t.splice(3, 1), "rgb" + (4 === t.length ? "a" : "") + "(" + t + ")") : null;
        }, ne = RegExp([ q, "(?:#([a-f0-9]{3,8}))", "(?:rgb)a?\\(\\s*([.\\d%]+)\\s*,\\s*([.\\d%]+)\\s*,\\s*([.\\d%]+)\\s*(?:,\\s*([.\\d]+)\\s*)?\\)", "(?:hsl)a?\\(\\s*([.\\d%]+)\\s*,\\s*([.\\d%]+)\\s*,\\s*([.\\d%]+)\\s*(?:,\\s*([.\\d]+)\\s*)?\\)" ].join("|"), "gi");
        x.replace = function(t, u) {
          return u || (u = function(t) {
            return x(t);
          }), (t + "").replace(ne, u);
        }, x.matches = function(t) {
          return !!(t + "").match(ne);
        };
        var oe, ae = x, ie = 1 / 12.92, C = function(t) {
          var u = t[0] / 255, P = t[1] / 255, A = t[2] / 255;
          return .2126 * (.03928 >= u ? u * ie : f(u)) + .7152 * (.03928 >= P ? P * ie : f(P)) + .0722 * (.03928 >= A ? A * ie : f(A));
        }, D = function(t) {
          if ("string" != typeof t) throw new TypeError("Expected a string");
          3 === (t = t.replace(/^#/, "")).length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
          var u = parseInt(t, 16);
          return [ u >> 16, 255 & u >> 8, 255 & u ];
        }, se = {
          luminance: g,
          rgb: h,
          hex: function(t, u) {
            return h(D(t), D(u));
          },
          score: function(t) {
            return 7 <= t ? "AAA" : 4.5 <= t ? "AA" : "";
          }
        }, ue = Object.prototype.hasOwnProperty, H = function(t) {
          return "string" == typeof t && function i() {
            return oe || (oe = /^[\s	\n\v\f\r   ᠎             　\u2028\u2029﻿"]+$/);
          }().test(t);
        }, I = function(t) {
          return "boolean" != typeof t && ("string" == typeof t && t.length ? H(t) : function(t) {
            if (null == t) return !0;
            if ("number" == typeof t) return 0 == t;
            if (void 0 !== t.length) return 0 === t.length;
            for (var u in t) if (ue.call(t, u)) return !1;
            return !0;
          }(t));
        }, ce = "#00ffff", fe = "#f0f8ff", le = "#faebd7", de = "#000000", pe = "#0000ff", he = "#00ffff", ye = "#00008b", ge = "#008b8b", be = "#006400", ve = "#00ced1", me = "#00bfff", _e = "#008000", we = "#00ff00", Oe = "#0000cd", Se = "#00fa9a", ke = "#000080", xe = "#00ff7f", Pe = "#008080", je = "#191970", Ee = "#1e90ff", Te = "#20b2aa", Ae = "#228b22", Re = "#2e8b57", Ie = "#2f4f4f", Me = "#2f4f4f", Fe = "#32cd32", Ce = "#3cb371", De = "#40e0d0", Le = "#4169e1", Ge = "#4682b4", Be = "#483d8b", Ne = "#48d1cc", qe = "#4b0082", Ue = "#556b2f", He = "#5f9ea0", Ke = "#6495ed", ze = "#66cdaa", We = "#696969", $e = "#696969", Je = "#6a5acd", Ve = "#6b8e23", Qe = "#708090", Xe = "#708090", Ye = "#778899", Ze = "#778899", et = "#7b68ee", tt = "#7cfc00", rt = "#7fffd4", nt = "#7fff00", ot = "#808080", at = "#808080", it = "#800000", st = "#808000", ut = "#800080", ct = "#87cefa", ft = "#87ceeb", lt = "#8a2be2", dt = "#8b008b", pt = "#8b0000", ht = "#8b4513", yt = "#8fbc8f", gt = "#90ee90", bt = "#9370db", vt = "#9400d3", mt = "#98fb98", _t = "#9932cc", wt = "#9acd32", Ot = "#a0522d", St = "#a52a2a", kt = "#a9a9a9", xt = "#a9a9a9", Pt = "#adff2f", jt = "#add8e6", Et = "#afeeee", Tt = "#b0c4de", At = "#b0e0e6", Rt = "#b22222", It = "#b8860b", Mt = "#ba55d3", Ft = "#bc8f8f", Ct = "#bdb76b", Dt = "#c0c0c0", Lt = "#c71585", Gt = "#cd5c5c", Bt = "#cd853f", Nt = "#d2691e", qt = "#d2b48c", Ut = "#d3d3d3", Ht = "#d3d3d3", Kt = "#d8bfd8", zt = "#daa520", Wt = "#da70d6", $t = "#db7093", Jt = "#dc143c", Vt = "#dcdcdc", Qt = "#dda0dd", Xt = "#deb887", Yt = "#e0ffff", Zt = "#e6e6fa", er = "#e9967a", tr = "#eee8aa", rr = "#ee82ee", nr = "#f0ffff", or = "#f0fff0", ar = "#f0e68c", ir = "#f08080", sr = "#f4a460", ur = "#f5f5dc", cr = "#f5fffa", fr = "#f5deb3", lr = "#f5f5f5", dr = "#f8f8ff", pr = "#fafad2", hr = "#faf0e6", yr = "#fa8072", gr = "#fdf5e6", br = "#ffe4c4", vr = "#ffebcd", mr = "#ff7f50", _r = "#fff8dc", wr = "#ff8c00", Or = "#ff1493", Sr = "#fffaf0", kr = "#ff00ff", xr = "#ffd700", Pr = "#ff69b4", jr = "#fffff0", Er = "#fff0f5", Tr = "#fffacd", Ar = "#ffb6c1", Rr = "#ffa07a", Ir = "#ffffe0", Mr = "#ff00ff", Fr = "#ffe4e1", Cr = "#ffe4b5", Dr = "#ffdead", Lr = "#ffa500", Gr = "#ff4500", Br = "#ffefd5", Nr = "#ffdab9", qr = "#ffc0cb", Ur = "#ff0000", Hr = "#fff5ee", Kr = "#fffafa", zr = "#ff6347", Wr = "#ffffff", $r = "#ffff00", Jr = "#663399", Vr = e(Object.freeze({
          aqua: ce,
          aliceblue: fe,
          antiquewhite: le,
          black: de,
          blue: pe,
          cyan: he,
          darkblue: ye,
          darkcyan: ge,
          darkgreen: be,
          darkturquoise: ve,
          deepskyblue: me,
          green: _e,
          lime: we,
          mediumblue: Oe,
          mediumspringgreen: Se,
          navy: ke,
          springgreen: xe,
          teal: Pe,
          midnightblue: je,
          dodgerblue: Ee,
          lightseagreen: Te,
          forestgreen: Ae,
          seagreen: Re,
          darkslategray: Ie,
          darkslategrey: Me,
          limegreen: Fe,
          mediumseagreen: Ce,
          turquoise: De,
          royalblue: Le,
          steelblue: Ge,
          darkslateblue: Be,
          mediumturquoise: Ne,
          indigo: qe,
          darkolivegreen: Ue,
          cadetblue: He,
          cornflowerblue: Ke,
          mediumaquamarine: ze,
          dimgray: We,
          dimgrey: $e,
          slateblue: Je,
          olivedrab: Ve,
          slategray: Qe,
          slategrey: Xe,
          lightslategray: Ye,
          lightslategrey: Ze,
          mediumslateblue: et,
          lawngreen: tt,
          aquamarine: rt,
          chartreuse: nt,
          gray: ot,
          grey: at,
          maroon: it,
          olive: st,
          purple: ut,
          lightskyblue: ct,
          skyblue: ft,
          blueviolet: lt,
          darkmagenta: dt,
          darkred: pt,
          saddlebrown: ht,
          darkseagreen: yt,
          lightgreen: gt,
          mediumpurple: bt,
          darkviolet: vt,
          palegreen: mt,
          darkorchid: _t,
          yellowgreen: wt,
          sienna: Ot,
          brown: St,
          darkgray: kt,
          darkgrey: xt,
          greenyellow: Pt,
          lightblue: jt,
          paleturquoise: Et,
          lightsteelblue: Tt,
          powderblue: At,
          firebrick: Rt,
          darkgoldenrod: It,
          mediumorchid: Mt,
          rosybrown: Ft,
          darkkhaki: Ct,
          silver: Dt,
          mediumvioletred: Lt,
          indianred: Gt,
          peru: Bt,
          chocolate: Nt,
          tan: qt,
          lightgray: Ut,
          lightgrey: Ht,
          thistle: Kt,
          goldenrod: zt,
          orchid: Wt,
          palevioletred: $t,
          crimson: Jt,
          gainsboro: Vt,
          plum: Qt,
          burlywood: Xt,
          lightcyan: Yt,
          lavender: Zt,
          darksalmon: er,
          palegoldenrod: tr,
          violet: rr,
          azure: nr,
          honeydew: or,
          khaki: ar,
          lightcoral: ir,
          sandybrown: sr,
          beige: ur,
          mintcream: cr,
          wheat: fr,
          whitesmoke: lr,
          ghostwhite: dr,
          lightgoldenrodyellow: pr,
          linen: hr,
          salmon: yr,
          oldlace: gr,
          bisque: br,
          blanchedalmond: vr,
          coral: mr,
          cornsilk: _r,
          darkorange: wr,
          deeppink: Or,
          floralwhite: Sr,
          fuchsia: kr,
          gold: xr,
          hotpink: Pr,
          ivory: jr,
          lavenderblush: Er,
          lemonchiffon: Tr,
          lightpink: Ar,
          lightsalmon: Rr,
          lightyellow: Ir,
          magenta: Mr,
          mistyrose: Fr,
          moccasin: Cr,
          navajowhite: Dr,
          orange: Lr,
          orangered: Gr,
          papayawhip: Br,
          peachpuff: Nr,
          pink: qr,
          red: Ur,
          seashell: Hr,
          snow: Kr,
          tomato: zr,
          white: Wr,
          yellow: $r,
          rebeccapurple: Jr,
          default: {
            aqua: ce,
            aliceblue: fe,
            antiquewhite: le,
            black: de,
            blue: pe,
            cyan: he,
            darkblue: ye,
            darkcyan: ge,
            darkgreen: be,
            darkturquoise: ve,
            deepskyblue: me,
            green: _e,
            lime: we,
            mediumblue: Oe,
            mediumspringgreen: Se,
            navy: ke,
            springgreen: xe,
            teal: Pe,
            midnightblue: je,
            dodgerblue: Ee,
            lightseagreen: Te,
            forestgreen: Ae,
            seagreen: Re,
            darkslategray: Ie,
            darkslategrey: Me,
            limegreen: Fe,
            mediumseagreen: Ce,
            turquoise: De,
            royalblue: Le,
            steelblue: Ge,
            darkslateblue: Be,
            mediumturquoise: Ne,
            indigo: qe,
            darkolivegreen: Ue,
            cadetblue: He,
            cornflowerblue: Ke,
            mediumaquamarine: ze,
            dimgray: We,
            dimgrey: $e,
            slateblue: Je,
            olivedrab: Ve,
            slategray: Qe,
            slategrey: Xe,
            lightslategray: Ye,
            lightslategrey: Ze,
            mediumslateblue: et,
            lawngreen: tt,
            aquamarine: rt,
            chartreuse: nt,
            gray: ot,
            grey: at,
            maroon: it,
            olive: st,
            purple: ut,
            lightskyblue: ct,
            skyblue: ft,
            blueviolet: lt,
            darkmagenta: dt,
            darkred: pt,
            saddlebrown: ht,
            darkseagreen: yt,
            lightgreen: gt,
            mediumpurple: bt,
            darkviolet: vt,
            palegreen: mt,
            darkorchid: _t,
            yellowgreen: wt,
            sienna: Ot,
            brown: St,
            darkgray: kt,
            darkgrey: xt,
            greenyellow: Pt,
            lightblue: jt,
            paleturquoise: Et,
            lightsteelblue: Tt,
            powderblue: At,
            firebrick: Rt,
            darkgoldenrod: It,
            mediumorchid: Mt,
            rosybrown: Ft,
            darkkhaki: Ct,
            silver: Dt,
            mediumvioletred: Lt,
            indianred: Gt,
            peru: Bt,
            chocolate: Nt,
            tan: qt,
            lightgray: Ut,
            lightgrey: Ht,
            thistle: Kt,
            goldenrod: zt,
            orchid: Wt,
            palevioletred: $t,
            crimson: Jt,
            gainsboro: Vt,
            plum: Qt,
            burlywood: Xt,
            lightcyan: Yt,
            lavender: Zt,
            darksalmon: er,
            palegoldenrod: tr,
            violet: rr,
            azure: nr,
            honeydew: or,
            khaki: ar,
            lightcoral: ir,
            sandybrown: sr,
            beige: ur,
            mintcream: cr,
            wheat: fr,
            whitesmoke: lr,
            ghostwhite: dr,
            lightgoldenrodyellow: pr,
            linen: hr,
            salmon: yr,
            oldlace: gr,
            bisque: br,
            blanchedalmond: vr,
            coral: mr,
            cornsilk: _r,
            darkorange: wr,
            deeppink: Or,
            floralwhite: Sr,
            fuchsia: kr,
            gold: xr,
            hotpink: Pr,
            ivory: jr,
            lavenderblush: Er,
            lemonchiffon: Tr,
            lightpink: Ar,
            lightsalmon: Rr,
            lightyellow: Ir,
            magenta: Mr,
            mistyrose: Fr,
            moccasin: Cr,
            navajowhite: Dr,
            orange: Lr,
            orangered: Gr,
            papayawhip: Br,
            peachpuff: Nr,
            pink: qr,
            red: Ur,
            seashell: Hr,
            snow: Kr,
            tomato: zr,
            white: Wr,
            yellow: $r,
            rebeccapurple: Jr
          }
        })), yc = function(t) {
          if ("string" != typeof t) throw new TypeError("is-named-css-color expects a string");
          return new RegExp("^" + Object.keys(Vr).join("|") + "$", "i").test(t);
        }, Qr = "#f0f8ff", Xr = "#faebd7", Yr = "#00ffff", Zr = "#7fffd4", en = "#f0ffff", rn = "#f5f5dc", on = "#ffe4c4", an = "#000000", sn = "#ffebcd", un = "#0000ff", cn = "#8a2be2", fn = "#a52a2a", ln = "#deb887", dn = "#5f9ea0", pn = "#7fff00", hn = "#d2691e", yn = "#ff7f50", gn = "#6495ed", bn = "#fff8dc", vn = "#dc143c", mn = "#00ffff", _n = "#00008b", wn = "#008b8b", On = "#b8860b", Sn = "#a9a9a9", kn = "#006400", xn = "#a9a9a9", Pn = "#bdb76b", jn = "#8b008b", En = "#556b2f", Tn = "#ff8c00", An = "#9932cc", Rn = "#8b0000", In = "#e9967a", Mn = "#8fbc8f", Fn = "#483d8b", Cn = "#2f4f4f", Dn = "#2f4f4f", Ln = "#00ced1", Gn = "#9400d3", Bn = "#ff1493", Nn = "#00bfff", qn = "#696969", Un = "#696969", Hn = "#1e90ff", Kn = "#b22222", zn = "#fffaf0", Wn = "#228b22", $n = "#ff00ff", Jn = "#dcdcdc", Vn = "#f8f8ff", Qn = "#ffd700", Xn = "#daa520", Yn = "#808080", Zn = "#008000", eo = "#adff2f", to = "#808080", ro = "#f0fff0", no = "#ff69b4", oo = "#cd5c5c", ao = "#4b0082", io = "#fffff0", so = "#f0e68c", uo = "#e6e6fa", co = "#fff0f5", fo = "#7cfc00", lo = "#fffacd", po = "#add8e6", ho = "#f08080", yo = "#e0ffff", go = "#fafad2", bo = "#d3d3d3", vo = "#90ee90", mo = "#d3d3d3", _o = "#ffb6c1", wo = "#ffa07a", Oo = "#20b2aa", So = "#87cefa", ko = "#778899", xo = "#778899", Po = "#b0c4de", jo = "#ffffe0", Eo = "#00ff00", To = "#32cd32", Ao = "#faf0e6", Ro = "#ff00ff", Io = "#800000", Mo = "#66cdaa", Fo = "#0000cd", Co = "#ba55d3", Do = "#9370db", Lo = "#3cb371", Go = "#7b68ee", Bo = "#00fa9a", No = "#48d1cc", qo = "#c71585", Uo = "#191970", Ho = "#f5fffa", Ko = "#ffe4e1", zo = "#ffe4b5", Wo = "#ffdead", $o = "#000080", Jo = "#fdf5e6", Vo = "#808000", Qo = "#6b8e23", Xo = "#ffa500", Yo = "#ff4500", Zo = "#da70d6", ea = "#eee8aa", ta = "#98fb98", ra = "#afeeee", na = "#db7093", oa = "#ffefd5", aa = "#ffdab9", ia = "#cd853f", sa = "#ffc0cb", ua = "#dda0dd", ca = "#b0e0e6", fa = "#800080", la = "#663399", da = "#ff0000", pa = "#bc8f8f", ha = "#4169e1", ya = "#8b4513", ga = "#fa8072", ba = "#f4a460", va = "#2e8b57", ma = "#fff5ee", _a = "#a0522d", wa = "#c0c0c0", Oa = "#87ceeb", Sa = "#6a5acd", ka = "#708090", xa = "#708090", Pa = "#fffafa", ja = "#00ff7f", Ea = "#4682b4", Ta = "#d2b48c", Aa = "#008080", Ra = "#d8bfd8", Ia = "#ff6347", Ma = "#40e0d0", Fa = "#ee82ee", Ca = "#f5deb3", Da = "#ffffff", La = "#f5f5f5", Ga = "#ffff00", Ba = "#9acd32", Na = e(Object.freeze({
          aliceblue: Qr,
          antiquewhite: Xr,
          aqua: Yr,
          aquamarine: Zr,
          azure: en,
          beige: rn,
          bisque: on,
          black: an,
          blanchedalmond: sn,
          blue: un,
          blueviolet: cn,
          brown: fn,
          burlywood: ln,
          cadetblue: dn,
          chartreuse: pn,
          chocolate: hn,
          coral: yn,
          cornflowerblue: gn,
          cornsilk: bn,
          crimson: vn,
          cyan: mn,
          darkblue: _n,
          darkcyan: wn,
          darkgoldenrod: On,
          darkgray: Sn,
          darkgreen: kn,
          darkgrey: xn,
          darkkhaki: Pn,
          darkmagenta: jn,
          darkolivegreen: En,
          darkorange: Tn,
          darkorchid: An,
          darkred: Rn,
          darksalmon: In,
          darkseagreen: Mn,
          darkslateblue: Fn,
          darkslategray: Cn,
          darkslategrey: Dn,
          darkturquoise: Ln,
          darkviolet: Gn,
          deeppink: Bn,
          deepskyblue: Nn,
          dimgray: qn,
          dimgrey: Un,
          dodgerblue: Hn,
          firebrick: Kn,
          floralwhite: zn,
          forestgreen: Wn,
          fuchsia: $n,
          gainsboro: Jn,
          ghostwhite: Vn,
          gold: Qn,
          goldenrod: Xn,
          gray: Yn,
          green: Zn,
          greenyellow: eo,
          grey: to,
          honeydew: ro,
          hotpink: no,
          indianred: oo,
          indigo: ao,
          ivory: io,
          khaki: so,
          lavender: uo,
          lavenderblush: co,
          lawngreen: fo,
          lemonchiffon: lo,
          lightblue: po,
          lightcoral: ho,
          lightcyan: yo,
          lightgoldenrodyellow: go,
          lightgray: bo,
          lightgreen: vo,
          lightgrey: mo,
          lightpink: _o,
          lightsalmon: wo,
          lightseagreen: Oo,
          lightskyblue: So,
          lightslategray: ko,
          lightslategrey: xo,
          lightsteelblue: Po,
          lightyellow: jo,
          lime: Eo,
          limegreen: To,
          linen: Ao,
          magenta: Ro,
          maroon: Io,
          mediumaquamarine: Mo,
          mediumblue: Fo,
          mediumorchid: Co,
          mediumpurple: Do,
          mediumseagreen: Lo,
          mediumslateblue: Go,
          mediumspringgreen: Bo,
          mediumturquoise: No,
          mediumvioletred: qo,
          midnightblue: Uo,
          mintcream: Ho,
          mistyrose: Ko,
          moccasin: zo,
          navajowhite: Wo,
          navy: $o,
          oldlace: Jo,
          olive: Vo,
          olivedrab: Qo,
          orange: Xo,
          orangered: Yo,
          orchid: Zo,
          palegoldenrod: ea,
          palegreen: ta,
          paleturquoise: ra,
          palevioletred: na,
          papayawhip: oa,
          peachpuff: aa,
          peru: ia,
          pink: sa,
          plum: ua,
          powderblue: ca,
          purple: fa,
          rebeccapurple: la,
          red: da,
          rosybrown: pa,
          royalblue: ha,
          saddlebrown: ya,
          salmon: ga,
          sandybrown: ba,
          seagreen: va,
          seashell: ma,
          sienna: _a,
          silver: wa,
          skyblue: Oa,
          slateblue: Sa,
          slategray: ka,
          slategrey: xa,
          snow: Pa,
          springgreen: ja,
          steelblue: Ea,
          tan: Ta,
          teal: Aa,
          thistle: Ra,
          tomato: Ia,
          turquoise: Ma,
          violet: Fa,
          wheat: Ca,
          white: Da,
          whitesmoke: La,
          yellow: Ga,
          yellowgreen: Ba,
          default: {
            aliceblue: Qr,
            antiquewhite: Xr,
            aqua: Yr,
            aquamarine: Zr,
            azure: en,
            beige: rn,
            bisque: on,
            black: an,
            blanchedalmond: sn,
            blue: un,
            blueviolet: cn,
            brown: fn,
            burlywood: ln,
            cadetblue: dn,
            chartreuse: pn,
            chocolate: hn,
            coral: yn,
            cornflowerblue: gn,
            cornsilk: bn,
            crimson: vn,
            cyan: mn,
            darkblue: _n,
            darkcyan: wn,
            darkgoldenrod: On,
            darkgray: Sn,
            darkgreen: kn,
            darkgrey: xn,
            darkkhaki: Pn,
            darkmagenta: jn,
            darkolivegreen: En,
            darkorange: Tn,
            darkorchid: An,
            darkred: Rn,
            darksalmon: In,
            darkseagreen: Mn,
            darkslateblue: Fn,
            darkslategray: Cn,
            darkslategrey: Dn,
            darkturquoise: Ln,
            darkviolet: Gn,
            deeppink: Bn,
            deepskyblue: Nn,
            dimgray: qn,
            dimgrey: Un,
            dodgerblue: Hn,
            firebrick: Kn,
            floralwhite: zn,
            forestgreen: Wn,
            fuchsia: $n,
            gainsboro: Jn,
            ghostwhite: Vn,
            gold: Qn,
            goldenrod: Xn,
            gray: Yn,
            green: Zn,
            greenyellow: eo,
            grey: to,
            honeydew: ro,
            hotpink: no,
            indianred: oo,
            indigo: ao,
            ivory: io,
            khaki: so,
            lavender: uo,
            lavenderblush: co,
            lawngreen: fo,
            lemonchiffon: lo,
            lightblue: po,
            lightcoral: ho,
            lightcyan: yo,
            lightgoldenrodyellow: go,
            lightgray: bo,
            lightgreen: vo,
            lightgrey: mo,
            lightpink: _o,
            lightsalmon: wo,
            lightseagreen: Oo,
            lightskyblue: So,
            lightslategray: ko,
            lightslategrey: xo,
            lightsteelblue: Po,
            lightyellow: jo,
            lime: Eo,
            limegreen: To,
            linen: Ao,
            magenta: Ro,
            maroon: Io,
            mediumaquamarine: Mo,
            mediumblue: Fo,
            mediumorchid: Co,
            mediumpurple: Do,
            mediumseagreen: Lo,
            mediumslateblue: Go,
            mediumspringgreen: Bo,
            mediumturquoise: No,
            mediumvioletred: qo,
            midnightblue: Uo,
            mintcream: Ho,
            mistyrose: Ko,
            moccasin: zo,
            navajowhite: Wo,
            navy: $o,
            oldlace: Jo,
            olive: Vo,
            olivedrab: Qo,
            orange: Xo,
            orangered: Yo,
            orchid: Zo,
            palegoldenrod: ea,
            palegreen: ta,
            paleturquoise: ra,
            palevioletred: na,
            papayawhip: oa,
            peachpuff: aa,
            peru: ia,
            pink: sa,
            plum: ua,
            powderblue: ca,
            purple: fa,
            rebeccapurple: la,
            red: da,
            rosybrown: pa,
            royalblue: ha,
            saddlebrown: ya,
            salmon: ga,
            sandybrown: ba,
            seagreen: va,
            seashell: ma,
            sienna: _a,
            silver: wa,
            skyblue: Oa,
            slateblue: Sa,
            slategray: ka,
            slategrey: xa,
            snow: Pa,
            springgreen: ja,
            steelblue: Ea,
            tan: Ta,
            teal: Aa,
            thistle: Ra,
            tomato: Ia,
            turquoise: Ma,
            violet: Fa,
            wheat: Ca,
            white: Da,
            whitesmoke: La,
            yellow: Ga,
            yellowgreen: Ba
          }
        })), qa = {
          ratio: j,
          score: function(t, u, P) {
            var A = se.score(j(t, u, P));
            return I(A) ? "F" : A;
          },
          isAccessible: function(t, u, P) {
            return 4.5 < j(t, u, P);
          },
          isNotTransparent: l
        }, Ua = d(function(t, P) {
          Object.defineProperty(P, "__esModule", {
            value: !0
          });
          var A = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(qa), d = function(t, P) {
            for (var M = 6, q = A.default.isAccessible(t[M], P); !q; ) void 0 === t[++M] ? (console.warn("Shades #6 and higher in the color palette do not have a high enough contrast ratio against a background color of " + P + "."), 
            q = !0) : q = A.default.isAccessible(t[M], P);
            return u(M, Object.keys(t).length - 1);
          };
          P.default = function c(t, P) {
            return {
              get name() {
                return P;
              },
              getShade: function(u) {
                return t[u];
              },
              getMainShade: function() {
                var P, A = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, M = A.backgroundColor, q = void 0 === M ? "#ffffff" : M, ee = A.offset, te = void 0 === ee ? 0 : ee;
                return P = "#ffffff" === q ? (t.inflection || d(t, q)) + te : d(t, q) + te, t[u(P, Object.keys(t).length - 1)];
              }
            };
          };
        }), Ha = b(Ua), Ka = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#eef7ff",
            2: "#deedfd",
            3: "#bddbf4",
            4: "#84baeb",
            5: "#3b8fde",
            6: "#1176d4",
            7: "#0d66b8",
            8: "#09549c",
            9: "#0a4276",
            10: "#072d52",
            inflection: 6
          }, "blue");
        });
        b(Ka);
        var za = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#fef3f1",
            2: "#fac3bb",
            3: "#faa094",
            4: "#fa7d6d",
            5: "#eb4f3b",
            6: "#d24634",
            7: "#b83e2e",
            8: "#9e3528",
            9: "#7a291f",
            10: "#571d16",
            inflection: 6
          }, "brick");
        });
        b(za);
        var Wa = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#fef3e9",
            2: "#fec491",
            3: "#fead64",
            4: "#f58525",
            5: "#e06107",
            6: "#ca500f",
            7: "#b0430c",
            8: "#983600",
            9: "#772700",
            10: "#571d00",
            inflection: 6
          }, "cheddar");
        });
        b(Wa);
        var $a = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#f54250",
            2: "#cc313d"
          }, "cherry");
        });
        b($a);
        var Ja = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#fafafa",
            2: "#f6f6f6",
            3: "#ececec",
            4: "#dadada",
            5: "#949494",
            6: "#757575",
            7: "#646464",
            8: "#525252",
            9: "#3c3c3c",
            10: "#1c1c1c",
            inflection: 6
          }, "cloud");
        });
        b(Ja);
        var Va = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#f8f5fa",
            2: "#ddcbe9",
            3: "#c4a4d9",
            4: "#b389d0",
            5: "#a775c9",
            6: "#945eb9",
            7: "#794d96",
            8: "#5e3c75",
            9: "#3f284f",
            10: "#2d1c38",
            inflection: 6
          }, "eggplant");
        });
        b(Va);
        var Qa = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#fff5dd",
            2: "#ffe29c",
            3: "#ffd560",
            4: "#e8b520",
            5: "#be8a0d",
            6: "#9a6f07",
            7: "#855f07",
            8: "#715005",
            9: "#5a4206",
            10: "#3b2b04",
            inflection: 6
          }, "gold");
        });
        b(Qa);
        var Xa = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#21a921",
            2: "#0a870a"
          }, "grass");
        });
        b(Xa);
        var Ya = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#edf7ed",
            2: "#d1ead1",
            3: "#a3d4a3",
            4: "#79c679",
            5: "#35a335",
            6: "#048a04",
            7: "#047103",
            8: "#015e02",
            9: "#024d03",
            10: "#023302",
            inflection: 6
          }, "green");
        });
        b(Ya);
        var Za = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#e8f7f2",
            2: "#c0eadb",
            3: "#86e0c2",
            4: "#24c991",
            5: "#1a9c6e",
            6: "#16825c",
            7: "#12694a",
            8: "#0d4f38",
            9: "#0a3c2b",
            10: "#07291d",
            inflection: 6
          }, "jungle");
        });
        b(Za);
        var ei = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#f2f4f9",
            2: "#d2d9ed",
            3: "#b2bee0",
            4: "#91a3d4",
            5: "#7188c7",
            6: "#5773bf",
            7: "#425ba1",
            8: "#334a88",
            9: "#24386e",
            10: "#002244",
            inflection: 6
          }, "magic");
        });
        b(ei);
        var ti = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#ebf9fc",
            2: "#c9e5ea",
            3: "#acd5dd",
            4: "#6eadba",
            5: "#5f96a1",
            6: "#4f7e87",
            7: "#41666e",
            8: "#324e54",
            9: "#273e42",
            10: "#1d2d30",
            inflection: 6
          }, "mist");
        });
        b(ti);
        var ri = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            9: "#40404c",
            10: "#2f2f39",
            11: "#1b1b26"
          }, "ninja");
        });
        b(ri);
        var ni = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#eaf7fc",
            2: "#b0e3f4",
            3: "#75cfec",
            4: "#00a7db",
            5: "#0093c4",
            6: "#007fad",
            7: "#006c94",
            8: "#005a75",
            9: "#00465c",
            10: "#003342",
            inflection: 6
          }, "ocean");
        });
        b(ni);
        var oi = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#fff3e3",
            2: "#ffd69b",
            3: "#ffb55f",
            4: "#ff943b",
            5: "#e65f14",
            6: "#d04a00",
            7: "#b54102",
            8: "#983702",
            9: "#7a2d00",
            10: "#541f00",
            inflection: 6
          }, "orange");
        });
        b(oi);
        var ai = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#f4f6ea",
            2: "#e0eab8",
            3: "#ccde87",
            4: "#a3c523",
            5: "#7e9e06",
            6: "#637d05",
            7: "#536904",
            8: "#415203",
            9: "#303d02",
            10: "#202902",
            inflection: 6
          }, "pickle");
        });
        b(ai);
        var ii = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#f7f5ff",
            2: "#e3dbff",
            3: "#ccbdfe",
            4: "#bca9fa",
            5: "#9375f2",
            6: "#8956f0",
            7: "#683ac8",
            8: "#532ca6",
            9: "#3f1c86",
            10: "#2a1359",
            inflection: 6
          }, "purple");
        });
        b(ii);
        var si = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#fff2f4",
            2: "#ffe1e6",
            3: "#fabcc5",
            4: "#f78394",
            5: "#ed596f",
            6: "#e71d3a",
            7: "#d21c35",
            8: "#a9172c",
            9: "#7e1021",
            10: "#5c0c18",
            inflection: 6
          }, "red");
        });
        b(si);
        var ui = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#fdf2f5",
            2: "#fbcada",
            3: "#f8a2bf",
            4: "#f57aa3",
            5: "#ed3e79",
            6: "#d81e5d",
            7: "#bf1b52",
            8: "#a61747",
            9: "#8c143c",
            10: "#610e29",
            inflection: 6
          }, "sangria");
        });
        b(ui);
        var ci = d(function(t, u) {
          Object.defineProperty(u, "__esModule", {
            value: !0
          });
          var P = function(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }(Ua);
          u.default = (0, P.default)({
            1: "#fafafa",
            2: "#f6f6f6",
            3: "#ececec",
            4: "#dadada",
            5: "#949494",
            6: "#757575",
            7: "#646464",
            8: "#525252",
            9: "#3c3c3c",
            10: "#1c1c1c",
            inflection: 6
          }, "silver");
        });
        b(ci);
        var fi = d(function(t, u) {
          function c(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }
          Object.defineProperty(u, "__esModule", {
            value: !0
          }), Object.defineProperty(u, "blue", {
            enumerable: !0,
            get: function() {
              return c(Ka).default;
            }
          }), Object.defineProperty(u, "brick", {
            enumerable: !0,
            get: function() {
              return c(za).default;
            }
          }), Object.defineProperty(u, "cheddar", {
            enumerable: !0,
            get: function() {
              return c(Wa).default;
            }
          }), Object.defineProperty(u, "cherry", {
            enumerable: !0,
            get: function() {
              return c($a).default;
            }
          }), Object.defineProperty(u, "cloud", {
            enumerable: !0,
            get: function() {
              return c(Ja).default;
            }
          }), Object.defineProperty(u, "eggplant", {
            enumerable: !0,
            get: function() {
              return c(Va).default;
            }
          }), Object.defineProperty(u, "gold", {
            enumerable: !0,
            get: function() {
              return c(Qa).default;
            }
          }), Object.defineProperty(u, "grass", {
            enumerable: !0,
            get: function() {
              return c(Xa).default;
            }
          }), Object.defineProperty(u, "green", {
            enumerable: !0,
            get: function() {
              return c(Ya).default;
            }
          }), Object.defineProperty(u, "jungle", {
            enumerable: !0,
            get: function() {
              return c(Za).default;
            }
          }), Object.defineProperty(u, "magic", {
            enumerable: !0,
            get: function() {
              return c(ei).default;
            }
          }), Object.defineProperty(u, "mist", {
            enumerable: !0,
            get: function() {
              return c(ti).default;
            }
          }), Object.defineProperty(u, "ninja", {
            enumerable: !0,
            get: function() {
              return c(ri).default;
            }
          }), Object.defineProperty(u, "ocean", {
            enumerable: !0,
            get: function() {
              return c(ni).default;
            }
          }), Object.defineProperty(u, "orange", {
            enumerable: !0,
            get: function() {
              return c(oi).default;
            }
          }), Object.defineProperty(u, "pickle", {
            enumerable: !0,
            get: function() {
              return c(ai).default;
            }
          }), Object.defineProperty(u, "purple", {
            enumerable: !0,
            get: function() {
              return c(ii).default;
            }
          }), Object.defineProperty(u, "red", {
            enumerable: !0,
            get: function() {
              return c(si).default;
            }
          }), Object.defineProperty(u, "sangria", {
            enumerable: !0,
            get: function() {
              return c(ui).default;
            }
          }), Object.defineProperty(u, "silver", {
            enumerable: !0,
            get: function() {
              return c(ci).default;
            }
          });
        }), li = _objectSpread({}, b(fi), {
          chegg: Ha({
            1: "#fef3e9",
            2: "#fedbbd",
            3: "#fedbbd",
            4: "#fead64",
            5: "#ff993f",
            6: "#f58525",
            7: "#EB7100",
            8: "#e06107",
            9: "#ca500f",
            10: "#b0430c"
          }, "chegg"),
          macmillan: Ha({
            1: "#FFF2F4",
            2: "#FFC9CE",
            3: "#FF929B",
            4: "#F86C78",
            5: "#EB4756",
            6: "#DA1B2C",
            7: "#BD1724",
            8: "#A31420",
            9: "#85101A",
            10: "#630C13"
          }, "macmillan"),
          jrPurple: Ha({
            1: "#F7F5FF",
            2: "#DED6FF",
            3: "#C2B4FF",
            4: "#A793FF",
            5: "#866BFF",
            6: "#6840F7",
            7: "#461DD9",
            8: "#2D04BF",
            9: "#290B97",
            10: "#1C056F"
          }, "jrPurple")
        }), Rf = function(t) {
          var u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            return t.json().then(function(t) {
              return _objectSpread({}, u, {
                response: t.data || t
              });
            });
          } catch (t) {
            return null;
          }
        }, Sf = function(t, u) {
          var P = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "prod", A = "https://".concat("dev" === P ? "chameleon-dev.vitalbook.com" : "chameleon.vitalsource.com", "/api/brands/").concat(t, "/").concat(u);
          return Vf(A, 2500).then(function(A) {
            return 200 === A.status ? Rf(A, {
              fromChameleon: !0,
              isFallback: !1,
              fromGCS: !1
            }) : Tf(t, u, Rf(A, {
              fromChameleon: !0,
              fromGCS: !1,
              isFallback: !0
            }), P);
          }).catch(function() {
            return Tf(t, u, null, P);
          });
        }, Tf = function(t, u, P) {
          var A = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "prod", M = "https://storage.googleapis.com/vst-chameleon-".concat(A, "/backups/backup_").concat(t, "_").concat(u, ".json"), f = function() {
            return P || Tf("default", u, {
              response: "BrandError"
            }, A);
          };
          return fetch(M).then(function(u) {
            return 200 === u.status ? Rf(u, {
              fromChameleon: !1,
              fromGCS: !0,
              isFallback: "default" === t
            }) : f();
          }).catch(f);
        }, Vf = function(t, u) {
          return new Promise(function(P, A) {
            var M = !1, q = setTimeout(function() {
              M = !0, A(new Error("Request timed out"));
            }, u);
            fetch(t).then(function(t) {
              clearTimeout(q), M || P(t);
            }).catch(function(t) {
              M || A(t);
            });
          });
        }, di = function e(t, u) {
          var P = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "prod", A = function(t) {
            return t.replace(/\.\.|[\\&<>"'/]/gi, "");
          }(t);
          return new Promise(function(t) {
            Sf(A, u, P).then(function(u) {
              var P = u.response;
              return t(P);
            }).catch(function(t) {
              return console.log(t);
            });
          });
        }, pi = Sf, hi = li;
        t.loadBrand = di, t.fetchBrandWithDetails = pi, t.colors = hi, t.default = {
          loadBrand: di,
          fetchBrandWithDetails: pi,
          colors: hi
        }, Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, "object" === _typeof(u) ? q(u) : (A = [ u ], void 0 === (M = "function" == typeof (P = q) ? P.apply(u, A) : P) || (t.exports = M));
    },
    59085(t) {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    7473(t, u, P) {
      var A = P(65335);
      t.exports = function(t) {
        if (!A(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    },
    40298(t, u, P) {
      var A = P(31602), M = P(53105), q = P(43610), ee = A("unscopables"), te = Array.prototype;
      null == te[ee] && q.f(te, ee, {
        configurable: !0,
        value: M(null)
      }), t.exports = function(t) {
        te[ee][t] = !0;
      };
    },
    67234(t, u, P) {
      "use strict";
      var A = P(77804).charAt;
      t.exports = function(t, u, P) {
        return u + (P ? A(t, u).length : 1);
      };
    },
    65190(t) {
      t.exports = function(t, u, P) {
        if (!(t instanceof u)) throw TypeError("Incorrect " + (P ? P + " " : "") + "invocation");
        return t;
      };
    },
    73938(t, u, P) {
      var A = P(65335);
      t.exports = function(t) {
        if (!A(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    10516(t, u, P) {
      "use strict";
      var A = P(91344).forEach, M = P(92349), q = P(23638), ee = M("forEach"), te = q("forEach");
      t.exports = ee && te ? [].forEach : function forEach(t) {
        return A(this, t, arguments.length > 1 ? arguments[1] : void 0);
      };
    },
    51027(t, u, P) {
      "use strict";
      var A = P(46885), M = P(92612), q = P(41332), ee = P(99034), te = P(33747), re = P(52057), ne = P(51898);
      t.exports = function from(t) {
        var u, P, oe, ae, ie, se, ue = M(t), ce = "function" == typeof this ? this : Array, fe = arguments.length, le = fe > 1 ? arguments[1] : void 0, de = void 0 !== le, pe = ne(ue), he = 0;
        if (de && (le = A(le, fe > 2 ? arguments[2] : void 0, 2)), null == pe || ce == Array && ee(pe)) for (P = new ce(u = te(ue.length)); u > he; he++) se = de ? le(ue[he], he) : ue[he], 
        re(P, he, se); else for (ie = (ae = pe.call(ue)).next, P = new ce; !(oe = ie.call(ae)).done; he++) se = de ? q(ae, le, [ oe.value, he ], !0) : oe.value, 
        re(P, he, se);
        return P.length = he, P;
      };
    },
    58186(t, u, P) {
      var A = P(5476), M = P(33747), q = P(6539), createMethod = function(t) {
        return function(u, P, ee) {
          var te, re = A(u), ne = M(re.length), oe = q(ee, ne);
          if (t && P != P) {
            for (;ne > oe; ) if ((te = re[oe++]) != te) return !0;
          } else for (;ne > oe; oe++) if ((t || oe in re) && re[oe] === P) return t || oe || 0;
          return !t && -1;
        };
      };
      t.exports = {
        includes: createMethod(!0),
        indexOf: createMethod(!1)
      };
    },
    91344(t, u, P) {
      var A = P(46885), M = P(48664), q = P(92612), ee = P(33747), te = P(62998), re = [].push, createMethod = function(t) {
        var u = 1 == t, P = 2 == t, ne = 3 == t, oe = 4 == t, ae = 6 == t, ie = 5 == t || ae;
        return function(se, ue, ce, fe) {
          for (var le, de, pe = q(se), he = M(pe), ye = A(ue, ce, 3), ge = ee(he.length), be = 0, ve = fe || te, me = u ? ve(se, ge) : P ? ve(se, 0) : void 0; ge > be; be++) if ((ie || be in he) && (de = ye(le = he[be], be, pe), 
          t)) if (u) me[be] = de; else if (de) switch (t) {
           case 3:
            return !0;

           case 5:
            return le;

           case 6:
            return be;

           case 2:
            re.call(me, le);
          } else if (oe) return !1;
          return ae ? -1 : ne || oe ? oe : me;
        };
      };
      t.exports = {
        forEach: createMethod(0),
        map: createMethod(1),
        filter: createMethod(2),
        some: createMethod(3),
        every: createMethod(4),
        find: createMethod(5),
        findIndex: createMethod(6)
      };
    },
    45634(t, u, P) {
      var A = P(92074), M = P(31602), q = P(6845), ee = M("species");
      t.exports = function(t) {
        return q >= 51 || !A(function() {
          var u = [];
          return (u.constructor = {})[ee] = function() {
            return {
              foo: 1
            };
          }, 1 !== u[t](Boolean).foo;
        });
      };
    },
    92349(t, u, P) {
      "use strict";
      var A = P(92074);
      t.exports = function(t, u) {
        var P = [][t];
        return !!P && A(function() {
          P.call(null, u || function() {
            throw 1;
          }, 1);
        });
      };
    },
    23638(t, u, P) {
      var A = P(65077), M = P(92074), q = P(31883), ee = Object.defineProperty, te = {}, thrower = function(t) {
        throw t;
      };
      t.exports = function(t, u) {
        if (q(te, t)) return te[t];
        u || (u = {});
        var P = [][t], re = !!q(u, "ACCESSORS") && u.ACCESSORS, ne = q(u, 0) ? u[0] : thrower, oe = q(u, 1) ? u[1] : void 0;
        return te[t] = !!P && !M(function() {
          if (re && !A) return !0;
          var t = {
            length: -1
          };
          re ? ee(t, 1, {
            enumerable: !0,
            get: thrower
          }) : t[1] = 1, P.call(t, ne, oe);
        });
      };
    },
    52237(t, u, P) {
      var A = P(59085), M = P(92612), q = P(48664), ee = P(33747), createMethod = function(t) {
        return function(u, P, te, re) {
          A(P);
          var ne = M(u), oe = q(ne), ae = ee(ne.length), ie = t ? ae - 1 : 0, se = t ? -1 : 1;
          if (te < 2) for (;;) {
            if (ie in oe) {
              re = oe[ie], ie += se;
              break;
            }
            if (ie += se, t ? ie < 0 : ae <= ie) throw TypeError("Reduce of empty array with no initial value");
          }
          for (;t ? ie >= 0 : ae > ie; ie += se) ie in oe && (re = P(re, oe[ie], ie, ne));
          return re;
        };
      };
      t.exports = {
        left: createMethod(!1),
        right: createMethod(!0)
      };
    },
    62998(t, u, P) {
      var A = P(65335), M = P(18679), q = P(31602)("species");
      t.exports = function(t, u) {
        var P;
        return M(t) && ("function" != typeof (P = t.constructor) || P !== Array && !M(P.prototype) ? A(P) && null === (P = P[q]) && (P = void 0) : P = void 0), 
        new (void 0 === P ? Array : P)(0 === u ? 0 : u);
      };
    },
    41332(t, u, P) {
      var A = P(73938);
      t.exports = function(t, u, P, M) {
        try {
          return M ? u(A(P)[0], P[1]) : u(P);
        } catch (u) {
          var q = t.return;
          throw void 0 !== q && A(q.call(t)), u;
        }
      };
    },
    97499(t, u, P) {
      var A = P(31602)("iterator"), M = !1;
      try {
        var q = 0, ee = {
          next: function() {
            return {
              done: !!q++
            };
          },
          return: function() {
            M = !0;
          }
        };
        ee[A] = function() {
          return this;
        }, Array.from(ee, function() {
          throw 2;
        });
      } catch (t) {}
      t.exports = function(t, u) {
        if (!u && !M) return !1;
        var P = !1;
        try {
          var q = {};
          q[A] = function() {
            return {
              next: function() {
                return {
                  done: P = !0
                };
              }
            };
          }, t(q);
        } catch (t) {}
        return P;
      };
    },
    18569(t) {
      var u = {}.toString;
      t.exports = function(t) {
        return u.call(t).slice(8, -1);
      };
    },
    83062(t, u, P) {
      var A = P(43129), M = P(18569), q = P(31602)("toStringTag"), ee = "Arguments" == M(function() {
        return arguments;
      }());
      t.exports = A ? M : function(t) {
        var u, P, A;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (P = function(t, u) {
          try {
            return t[u];
          } catch (t) {}
        }(u = Object(t), q)) ? P : ee ? M(u) : "Object" == (A = M(u)) && "function" == typeof u.callee ? "Arguments" : A;
      };
    },
    5959(t, u, P) {
      "use strict";
      var A = P(43610).f, M = P(53105), q = P(13075), ee = P(46885), te = P(65190), re = P(52929), ne = P(45723), oe = P(93524), ae = P(65077), ie = P(82014).fastKey, se = P(99206), ue = se.set, ce = se.getterFor;
      t.exports = {
        getConstructor: function(t, u, P, ne) {
          var oe = t(function(t, A) {
            te(t, oe, u), ue(t, {
              type: u,
              index: M(null),
              first: void 0,
              last: void 0,
              size: 0
            }), ae || (t.size = 0), null != A && re(A, t[ne], t, P);
          }), se = ce(u), define = function(t, u, P) {
            var A, M, q = se(t), ee = getEntry(t, u);
            return ee ? ee.value = P : (q.last = ee = {
              index: M = ie(u, !0),
              key: u,
              value: P,
              previous: A = q.last,
              next: void 0,
              removed: !1
            }, q.first || (q.first = ee), A && (A.next = ee), ae ? q.size++ : t.size++, "F" !== M && (q.index[M] = ee)), 
            t;
          }, getEntry = function(t, u) {
            var P, A = se(t), M = ie(u);
            if ("F" !== M) return A.index[M];
            for (P = A.first; P; P = P.next) if (P.key == u) return P;
          };
          return q(oe.prototype, {
            clear: function clear() {
              for (var t = se(this), u = t.index, P = t.first; P; ) P.removed = !0, P.previous && (P.previous = P.previous.next = void 0), 
              delete u[P.index], P = P.next;
              t.first = t.last = void 0, ae ? t.size = 0 : this.size = 0;
            },
            delete: function(t) {
              var u = this, P = se(u), A = getEntry(u, t);
              if (A) {
                var M = A.next, q = A.previous;
                delete P.index[A.index], A.removed = !0, q && (q.next = M), M && (M.previous = q), 
                P.first == A && (P.first = M), P.last == A && (P.last = q), ae ? P.size-- : u.size--;
              }
              return !!A;
            },
            forEach: function forEach(t) {
              for (var u, P = se(this), A = ee(t, arguments.length > 1 ? arguments[1] : void 0, 3); u = u ? u.next : P.first; ) for (A(u.value, u.key, this); u && u.removed; ) u = u.previous;
            },
            has: function has(t) {
              return !!getEntry(this, t);
            }
          }), q(oe.prototype, P ? {
            get: function get(t) {
              var u = getEntry(this, t);
              return u && u.value;
            },
            set: function set(t, u) {
              return define(this, 0 === t ? 0 : t, u);
            }
          } : {
            add: function add(t) {
              return define(this, t = 0 === t ? 0 : t, t);
            }
          }), ae && A(oe.prototype, "size", {
            get: function() {
              return se(this).size;
            }
          }), oe;
        },
        setStrong: function(t, u, P) {
          var A = u + " Iterator", M = ce(u), q = ce(A);
          ne(t, u, function(t, u) {
            ue(this, {
              type: A,
              target: t,
              state: M(t),
              kind: u,
              last: void 0
            });
          }, function() {
            for (var t = q(this), u = t.kind, P = t.last; P && P.removed; ) P = P.previous;
            return t.target && (t.last = P = P ? P.next : t.state.first) ? "keys" == u ? {
              value: P.key,
              done: !1
            } : "values" == u ? {
              value: P.value,
              done: !1
            } : {
              value: [ P.key, P.value ],
              done: !1
            } : (t.target = void 0, {
              value: void 0,
              done: !0
            });
          }, P ? "entries" : "values", !P, !0), oe(u);
        }
      };
    },
    76784(t, u, P) {
      "use strict";
      var A = P(13075), M = P(82014).getWeakData, q = P(73938), ee = P(65335), te = P(65190), re = P(52929), ne = P(91344), oe = P(31883), ae = P(99206), ie = ae.set, se = ae.getterFor, ue = ne.find, ce = ne.findIndex, fe = 0, uncaughtFrozenStore = function(t) {
        return t.frozen || (t.frozen = new UncaughtFrozenStore);
      }, UncaughtFrozenStore = function() {
        this.entries = [];
      }, findUncaughtFrozen = function(t, u) {
        return ue(t.entries, function(t) {
          return t[0] === u;
        });
      };
      UncaughtFrozenStore.prototype = {
        get: function(t) {
          var u = findUncaughtFrozen(this, t);
          if (u) return u[1];
        },
        has: function(t) {
          return !!findUncaughtFrozen(this, t);
        },
        set: function(t, u) {
          var P = findUncaughtFrozen(this, t);
          P ? P[1] = u : this.entries.push([ t, u ]);
        },
        delete: function(t) {
          var u = ce(this.entries, function(u) {
            return u[0] === t;
          });
          return ~u && this.entries.splice(u, 1), !!~u;
        }
      }, t.exports = {
        getConstructor: function(t, u, P, ne) {
          var ae = t(function(t, A) {
            te(t, ae, u), ie(t, {
              type: u,
              id: fe++,
              frozen: void 0
            }), null != A && re(A, t[ne], t, P);
          }), ue = se(u), define = function(t, u, P) {
            var A = ue(t), ee = M(q(u), !0);
            return !0 === ee ? uncaughtFrozenStore(A).set(u, P) : ee[A.id] = P, t;
          };
          return A(ae.prototype, {
            delete: function(t) {
              var u = ue(this);
              if (!ee(t)) return !1;
              var P = M(t);
              return !0 === P ? uncaughtFrozenStore(u).delete(t) : P && oe(P, u.id) && delete P[u.id];
            },
            has: function has(t) {
              var u = ue(this);
              if (!ee(t)) return !1;
              var P = M(t);
              return !0 === P ? uncaughtFrozenStore(u).has(t) : P && oe(P, u.id);
            }
          }), A(ae.prototype, P ? {
            get: function get(t) {
              var u = ue(this);
              if (ee(t)) {
                var P = M(t);
                return !0 === P ? uncaughtFrozenStore(u).get(t) : P ? P[u.id] : void 0;
              }
            },
            set: function set(t, u) {
              return define(this, t, u);
            }
          } : {
            add: function add(t) {
              return define(this, t, !0);
            }
          }), ae;
        }
      };
    },
    92327(t, u, P) {
      "use strict";
      var A = P(51605), M = P(30200), q = P(84977), ee = P(97485), te = P(82014), re = P(52929), ne = P(65190), oe = P(65335), ae = P(92074), ie = P(97499), se = P(75282), ue = P(93054);
      t.exports = function(t, u, P) {
        var ce = -1 !== t.indexOf("Map"), fe = -1 !== t.indexOf("Weak"), le = ce ? "set" : "add", de = M[t], pe = de && de.prototype, he = de, ye = {}, fixMethod = function(t) {
          var u = pe[t];
          ee(pe, t, "add" == t ? function add(t) {
            return u.call(this, 0 === t ? 0 : t), this;
          } : "delete" == t ? function(t) {
            return !(fe && !oe(t)) && u.call(this, 0 === t ? 0 : t);
          } : "get" == t ? function get(t) {
            return fe && !oe(t) ? void 0 : u.call(this, 0 === t ? 0 : t);
          } : "has" == t ? function has(t) {
            return !(fe && !oe(t)) && u.call(this, 0 === t ? 0 : t);
          } : function set(t, P) {
            return u.call(this, 0 === t ? 0 : t, P), this;
          });
        };
        if (q(t, "function" != typeof de || !(fe || pe.forEach && !ae(function() {
          (new de).entries().next();
        })))) he = P.getConstructor(u, t, ce, le), te.REQUIRED = !0; else if (q(t, !0)) {
          var ge = new he, be = ge[le](fe ? {} : -0, 1) != ge, ve = ae(function() {
            ge.has(1);
          }), me = ie(function(t) {
            new de(t);
          }), _e = !fe && ae(function() {
            for (var t = new de, u = 5; u--; ) t[le](u, u);
            return !t.has(-0);
          });
          me || ((he = u(function(u, P) {
            ne(u, he, t);
            var A = ue(new de, u, he);
            return null != P && re(P, A[le], A, ce), A;
          })).prototype = pe, pe.constructor = he), (ve || _e) && (fixMethod("delete"), fixMethod("has"), 
          ce && fixMethod("get")), (_e || be) && fixMethod(le), fe && pe.clear && delete pe.clear;
        }
        return ye[t] = he, A({
          global: !0,
          forced: he != de
        }, ye), se(he, t), fe || P.setStrong(he, t, ce), he;
      };
    },
    84361(t, u, P) {
      var A = P(31883), M = P(15816), q = P(97632), ee = P(43610);
      t.exports = function(t, u) {
        for (var P = M(u), te = ee.f, re = q.f, ne = 0; ne < P.length; ne++) {
          var oe = P[ne];
          A(t, oe) || te(t, oe, re(u, oe));
        }
      };
    },
    44177(t, u, P) {
      var A = P(31602)("match");
      t.exports = function(t) {
        var u = /./;
        try {
          "/./"[t](u);
        } catch (P) {
          try {
            return u[A] = !1, "/./"[t](u);
          } catch (t) {}
        }
        return !1;
      };
    },
    7168(t, u, P) {
      var A = P(92074);
      t.exports = !A(function() {
        function F() {}
        return F.prototype.constructor = null, Object.getPrototypeOf(new F) !== F.prototype;
      });
    },
    72147(t, u, P) {
      "use strict";
      var A = P(49306).IteratorPrototype, M = P(53105), q = P(66843), ee = P(75282), te = P(52228), returnThis = function() {
        return this;
      };
      t.exports = function(t, u, P) {
        var re = u + " Iterator";
        return t.prototype = M(A, {
          next: q(1, P)
        }), ee(t, re, !1, !0), te[re] = returnThis, t;
      };
    },
    97712(t, u, P) {
      var A = P(65077), M = P(43610), q = P(66843);
      t.exports = A ? function(t, u, P) {
        return M.f(t, u, q(1, P));
      } : function(t, u, P) {
        return t[u] = P, t;
      };
    },
    66843(t) {
      t.exports = function(t, u) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: u
        };
      };
    },
    52057(t, u, P) {
      "use strict";
      var A = P(50874), M = P(43610), q = P(66843);
      t.exports = function(t, u, P) {
        var ee = A(u);
        ee in t ? M.f(t, ee, q(0, P)) : t[ee] = P;
      };
    },
    31137(t, u, P) {
      "use strict";
      var A = P(73938), M = P(50874);
      t.exports = function(t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return M(A(this), "number" !== t);
      };
    },
    45723(t, u, P) {
      "use strict";
      var A = P(51605), M = P(72147), q = P(97970), ee = P(39686), te = P(75282), re = P(97712), ne = P(97485), oe = P(31602), ae = P(6926), ie = P(52228), se = P(49306), ue = se.IteratorPrototype, ce = se.BUGGY_SAFARI_ITERATORS, fe = oe("iterator"), le = "keys", de = "values", pe = "entries", returnThis = function() {
        return this;
      };
      t.exports = function(t, u, P, oe, se, he, ye) {
        M(P, u, oe);
        var ge, be, ve, getIterationMethod = function(t) {
          if (t === se && Se) return Se;
          if (!ce && t in we) return we[t];
          switch (t) {
           case le:
            return function keys() {
              return new P(this, t);
            };

           case de:
            return function values() {
              return new P(this, t);
            };

           case pe:
            return function entries() {
              return new P(this, t);
            };
          }
          return function() {
            return new P(this);
          };
        }, me = u + " Iterator", _e = !1, we = t.prototype, Oe = we[fe] || we["@@iterator"] || se && we[se], Se = !ce && Oe || getIterationMethod(se), ke = "Array" == u && we.entries || Oe;
        if (ke && (ge = q(ke.call(new t)), ue !== Object.prototype && ge.next && (ae || q(ge) === ue || (ee ? ee(ge, ue) : "function" != typeof ge[fe] && re(ge, fe, returnThis)), 
        te(ge, me, !0, !0), ae && (ie[me] = returnThis))), se == de && Oe && Oe.name !== de && (_e = !0, 
        Se = function values() {
          return Oe.call(this);
        }), ae && !ye || we[fe] === Se || re(we, fe, Se), ie[u] = Se, se) if (be = {
          values: getIterationMethod(de),
          keys: he ? Se : getIterationMethod(le),
          entries: getIterationMethod(pe)
        }, ye) for (ve in be) (ce || _e || !(ve in we)) && ne(we, ve, be[ve]); else A({
          target: u,
          proto: !0,
          forced: ce || _e
        }, be);
        return be;
      };
    },
    91272(t, u, P) {
      var A = P(29720), M = P(31883), q = P(30802), ee = P(43610).f;
      t.exports = function(t) {
        var u = A.Symbol || (A.Symbol = {});
        M(u, t) || ee(u, t, {
          value: q.f(t)
        });
      };
    },
    65077(t, u, P) {
      var A = P(92074);
      t.exports = !A(function() {
        return 7 != Object.defineProperty({}, 1, {
          get: function() {
            return 7;
          }
        })[1];
      });
    },
    23262(t, u, P) {
      var A = P(30200), M = P(65335), q = A.document, ee = M(q) && M(q.createElement);
      t.exports = function(t) {
        return ee ? q.createElement(t) : {};
      };
    },
    5549(t) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    },
    62050(t, u, P) {
      var A = P(47061);
      t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(A);
    },
    47061(t, u, P) {
      var A = P(56492);
      t.exports = A("navigator", "userAgent") || "";
    },
    6845(t, u, P) {
      var A, M, q = P(30200), ee = P(47061), te = q.process, re = te && te.versions, ne = re && re.v8;
      ne ? M = (A = ne.split("."))[0] + A[1] : ee && (!(A = ee.match(/Edge\/(\d+)/)) || A[1] >= 74) && (A = ee.match(/Chrome\/(\d+)/)) && (M = A[1]), 
      t.exports = M && +M;
    },
    30290(t) {
      t.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
    },
    51605(t, u, P) {
      var A = P(30200), M = P(97632).f, q = P(97712), ee = P(97485), te = P(55975), re = P(84361), ne = P(84977);
      t.exports = function(t, u) {
        var P, oe, ae, ie, se, ue = t.target, ce = t.global, fe = t.stat;
        if (P = ce ? A : fe ? A[ue] || te(ue, {}) : (A[ue] || {}).prototype) for (oe in u) {
          if (ie = u[oe], ae = t.noTargetGet ? (se = M(P, oe)) && se.value : P[oe], !ne(ce ? oe : ue + (fe ? "." : "#") + oe, t.forced) && void 0 !== ae) {
            if (typeof ie == typeof ae) continue;
            re(ie, ae);
          }
          (t.sham || ae && ae.sham) && q(ie, "sham", !0), ee(P, oe, ie, t);
        }
      };
    },
    92074(t) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    20779(t, u, P) {
      "use strict";
      P(87136);
      var A = P(97485), M = P(92074), q = P(31602), ee = P(70054), te = P(97712), re = q("species"), ne = !M(function() {
        var t = /./;
        return t.exec = function() {
          var t = [];
          return t.groups = {
            a: "7"
          }, t;
        }, "7" !== "".replace(t, "$<a>");
      }), oe = "$0" === "a".replace(/./, "$0"), ae = q("replace"), ie = !!/./[ae] && "" === /./[ae]("a", "$0"), se = !M(function() {
        var t = /(?:)/, u = t.exec;
        t.exec = function() {
          return u.apply(this, arguments);
        };
        var P = "ab".split(t);
        return 2 !== P.length || "a" !== P[0] || "b" !== P[1];
      });
      t.exports = function(t, u, P, ae) {
        var ue = q(t), ce = !M(function() {
          var u = {};
          return u[ue] = function() {
            return 7;
          }, 7 != ""[t](u);
        }), fe = ce && !M(function() {
          var u = !1, P = /a/;
          return "split" === t && ((P = {}).constructor = {}, P.constructor[re] = function() {
            return P;
          }, P.flags = "", P[ue] = /./[ue]), P.exec = function() {
            return u = !0, null;
          }, P[ue](""), !u;
        });
        if (!ce || !fe || "replace" === t && (!ne || !oe || ie) || "split" === t && !se) {
          var le = /./[ue], de = P(ue, ""[t], function(t, u, P, A, M) {
            return u.exec === ee ? ce && !M ? {
              done: !0,
              value: le.call(u, P, A)
            } : {
              done: !0,
              value: t.call(P, u, A)
            } : {
              done: !1
            };
          }, {
            REPLACE_KEEPS_$0: oe,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: ie
          }), pe = de[0], he = de[1];
          A(String.prototype, t, pe), A(RegExp.prototype, ue, 2 == u ? function(t, u) {
            return he.call(t, this, u);
          } : function(t) {
            return he.call(t, this);
          });
        }
        ae && te(RegExp.prototype[ue], "sham", !0);
      };
    },
    55159(t, u, P) {
      var A = P(92074);
      t.exports = !A(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    46885(t, u, P) {
      var A = P(59085);
      t.exports = function(t, u, P) {
        if (A(t), void 0 === u) return t;
        switch (P) {
         case 0:
          return function() {
            return t.call(u);
          };

         case 1:
          return function(P) {
            return t.call(u, P);
          };

         case 2:
          return function(P, A) {
            return t.call(u, P, A);
          };

         case 3:
          return function(P, A, M) {
            return t.call(u, P, A, M);
          };
        }
        return function() {
          return t.apply(u, arguments);
        };
      };
    },
    38891(t, u, P) {
      "use strict";
      var A = P(59085), M = P(65335), q = [].slice, ee = {};
      t.exports = Function.bind || function bind(t) {
        var u = A(this), P = q.call(arguments, 1), te = function bound() {
          var A = P.concat(q.call(arguments));
          return this instanceof te ? function(t, u, P) {
            if (!(u in ee)) {
              for (var A = [], M = 0; M < u; M++) A[M] = "a[" + M + "]";
              ee[u] = Function("C,a", "return new C(" + A.join(",") + ")");
            }
            return ee[u](t, P);
          }(u, A.length, A) : u.apply(t, A);
        };
        return M(u.prototype) && (te.prototype = u.prototype), te;
      };
    },
    56492(t, u, P) {
      var A = P(29720), M = P(30200), aFunction = function(t) {
        return "function" == typeof t ? t : void 0;
      };
      t.exports = function(t, u) {
        return arguments.length < 2 ? aFunction(A[t]) || aFunction(M[t]) : A[t] && A[t][u] || M[t] && M[t][u];
      };
    },
    51898(t, u, P) {
      var A = P(83062), M = P(52228), q = P(31602)("iterator");
      t.exports = function(t) {
        if (null != t) return t[q] || t["@@iterator"] || M[A(t)];
      };
    },
    79526(t, u, P) {
      var A = P(73938), M = P(51898);
      t.exports = function(t) {
        var u = M(t);
        if ("function" != typeof u) throw TypeError(String(t) + " is not iterable");
        return A(u.call(t));
      };
    },
    30200(t, u, P) {
      var check = function(t) {
        return t && t.Math == Math && t;
      };
      t.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof P.g && P.g) || Function("return this")();
    },
    31883(t) {
      var u = {}.hasOwnProperty;
      t.exports = function(t, P) {
        return u.call(t, P);
      };
    },
    67708(t) {
      t.exports = {};
    },
    69778(t, u, P) {
      var A = P(30200);
      t.exports = function(t, u) {
        var P = A.console;
        P && P.error && (1 === arguments.length ? P.error(t) : P.error(t, u));
      };
    },
    28890(t, u, P) {
      var A = P(56492);
      t.exports = A("document", "documentElement");
    },
    87694(t, u, P) {
      var A = P(65077), M = P(92074), q = P(23262);
      t.exports = !A && !M(function() {
        return 7 != Object.defineProperty(q("div"), "a", {
          get: function() {
            return 7;
          }
        }).a;
      });
    },
    48664(t, u, P) {
      var A = P(92074), M = P(18569), q = "".split;
      t.exports = A(function() {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function(t) {
        return "String" == M(t) ? q.call(t, "") : Object(t);
      } : Object;
    },
    93054(t, u, P) {
      var A = P(65335), M = P(39686);
      t.exports = function(t, u, P) {
        var q, ee;
        return M && "function" == typeof (q = u.constructor) && q !== P && A(ee = q.prototype) && ee !== P.prototype && M(t, ee), 
        t;
      };
    },
    69965(t, u, P) {
      var A = P(49310), M = Function.toString;
      "function" != typeof A.inspectSource && (A.inspectSource = function(t) {
        return M.call(t);
      }), t.exports = A.inspectSource;
    },
    82014(t, u, P) {
      var A = P(67708), M = P(65335), q = P(31883), ee = P(43610).f, te = P(50665), re = P(55159), ne = te("meta"), oe = 0, ae = Object.isExtensible || function() {
        return !0;
      }, setMetadata = function(t) {
        ee(t, ne, {
          value: {
            objectID: "O" + ++oe,
            weakData: {}
          }
        });
      }, ie = t.exports = {
        REQUIRED: !1,
        fastKey: function(t, u) {
          if (!M(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
          if (!q(t, ne)) {
            if (!ae(t)) return "F";
            if (!u) return "E";
            setMetadata(t);
          }
          return t[ne].objectID;
        },
        getWeakData: function(t, u) {
          if (!q(t, ne)) {
            if (!ae(t)) return !0;
            if (!u) return !1;
            setMetadata(t);
          }
          return t[ne].weakData;
        },
        onFreeze: function(t) {
          return re && ie.REQUIRED && ae(t) && !q(t, ne) && setMetadata(t), t;
        }
      };
      A[ne] = !0;
    },
    99206(t, u, P) {
      var A, M, q, ee = P(82886), te = P(30200), re = P(65335), ne = P(97712), oe = P(31883), ae = P(25904), ie = P(67708), se = te.WeakMap;
      if (ee) {
        var ue = new se, ce = ue.get, fe = ue.has, le = ue.set;
        A = function(t, u) {
          return le.call(ue, t, u), u;
        }, M = function(t) {
          return ce.call(ue, t) || {};
        }, q = function(t) {
          return fe.call(ue, t);
        };
      } else {
        var de = ae("state");
        ie[de] = !0, A = function(t, u) {
          return ne(t, de, u), u;
        }, M = function(t) {
          return oe(t, de) ? t[de] : {};
        }, q = function(t) {
          return oe(t, de);
        };
      }
      t.exports = {
        set: A,
        get: M,
        has: q,
        enforce: function(t) {
          return q(t) ? M(t) : A(t, {});
        },
        getterFor: function(t) {
          return function(u) {
            var P;
            if (!re(u) || (P = M(u)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
            return P;
          };
        }
      };
    },
    99034(t, u, P) {
      var A = P(31602), M = P(52228), q = A("iterator"), ee = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (M.Array === t || ee[q] === t);
      };
    },
    18679(t, u, P) {
      var A = P(18569);
      t.exports = Array.isArray || function isArray(t) {
        return "Array" == A(t);
      };
    },
    84977(t, u, P) {
      var A = P(92074), M = /#|\.prototype\./, isForced = function(t, u) {
        var P = ee[q(t)];
        return P == re || P != te && ("function" == typeof u ? A(u) : !!u);
      }, q = isForced.normalize = function(t) {
        return String(t).replace(M, ".").toLowerCase();
      }, ee = isForced.data = {}, te = isForced.NATIVE = "N", re = isForced.POLYFILL = "P";
      t.exports = isForced;
    },
    65335(t) {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    6926(t) {
      t.exports = !1;
    },
    62449(t, u, P) {
      var A = P(65335), M = P(18569), q = P(31602)("match");
      t.exports = function(t) {
        var u;
        return A(t) && (void 0 !== (u = t[q]) ? !!u : "RegExp" == M(t));
      };
    },
    52929(t, u, P) {
      var A = P(73938), M = P(99034), q = P(33747), ee = P(46885), te = P(51898), re = P(41332), Result = function(t, u) {
        this.stopped = t, this.result = u;
      };
      (t.exports = function(t, u, P, ne, oe) {
        var ae, ie, se, ue, ce, fe, le, de = ee(u, P, ne ? 2 : 1);
        if (oe) ae = t; else {
          if ("function" != typeof (ie = te(t))) throw TypeError("Target is not iterable");
          if (M(ie)) {
            for (se = 0, ue = q(t.length); ue > se; se++) if ((ce = ne ? de(A(le = t[se])[0], le[1]) : de(t[se])) && ce instanceof Result) return ce;
            return new Result(!1);
          }
          ae = ie.call(t);
        }
        for (fe = ae.next; !(le = fe.call(ae)).done; ) if ("object" == typeof (ce = re(ae, de, le.value, ne)) && ce && ce instanceof Result) return ce;
        return new Result(!1);
      }).stop = function(t) {
        return new Result(!0, t);
      };
    },
    49306(t, u, P) {
      "use strict";
      var A, M, q, ee = P(97970), te = P(97712), re = P(31883), ne = P(31602), oe = P(6926), ae = ne("iterator"), ie = !1;
      [].keys && ("next" in (q = [].keys()) ? (M = ee(ee(q))) !== Object.prototype && (A = M) : ie = !0), 
      null == A && (A = {}), oe || re(A, ae) || te(A, ae, function() {
        return this;
      }), t.exports = {
        IteratorPrototype: A,
        BUGGY_SAFARI_ITERATORS: ie
      };
    },
    52228(t) {
      t.exports = {};
    },
    47462(t, u, P) {
      var A, M, q, ee, te, re, ne, oe, ae = P(30200), ie = P(97632).f, se = P(18569), ue = P(74922).set, ce = P(62050), fe = ae.MutationObserver || ae.WebKitMutationObserver, le = ae.process, de = ae.Promise, pe = "process" == se(le), he = ie(ae, "queueMicrotask"), ye = he && he.value;
      ye || (A = function() {
        var t, u;
        for (pe && (t = le.domain) && t.exit(); M; ) {
          u = M.fn, M = M.next;
          try {
            u();
          } catch (t) {
            throw M ? ee() : q = void 0, t;
          }
        }
        q = void 0, t && t.enter();
      }, pe ? ee = function() {
        le.nextTick(A);
      } : fe && !ce ? (te = !0, re = document.createTextNode(""), new fe(A).observe(re, {
        characterData: !0
      }), ee = function() {
        re.data = te = !te;
      }) : de && de.resolve ? (ne = de.resolve(void 0), oe = ne.then, ee = function() {
        oe.call(ne, A);
      }) : ee = function() {
        ue.call(ae, A);
      }), t.exports = ye || function(t) {
        var u = {
          fn: t,
          next: void 0
        };
        q && (q.next = u), M || (M = u, ee()), q = u;
      };
    },
    83737(t, u, P) {
      var A = P(30200);
      t.exports = A.Promise;
    },
    61849(t, u, P) {
      var A = P(92074);
      t.exports = !!Object.getOwnPropertySymbols && !A(function() {
        return !String(Symbol());
      });
    },
    84516(t, u, P) {
      var A = P(92074), M = P(31602), q = P(6926), ee = M("iterator");
      t.exports = !A(function() {
        var t = new URL("b?a=1&b=2&c=3", "http://a"), u = t.searchParams, P = "";
        return t.pathname = "c%20d", u.forEach(function(t, A) {
          u.delete("b"), P += A + t;
        }), q && !t.toJSON || !u.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== u.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !u[ee] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== P || "x" !== new URL("http://x", void 0).host;
      });
    },
    82886(t, u, P) {
      var A = P(30200), M = P(69965), q = A.WeakMap;
      t.exports = "function" == typeof q && /native code/.test(M(q));
    },
    39836(t, u, P) {
      "use strict";
      var A = P(59085), PromiseCapability = function(t) {
        var u, P;
        this.promise = new t(function(t, A) {
          if (void 0 !== u || void 0 !== P) throw TypeError("Bad Promise constructor");
          u = t, P = A;
        }), this.resolve = A(u), this.reject = A(P);
      };
      t.exports.f = function(t) {
        return new PromiseCapability(t);
      };
    },
    92588(t, u, P) {
      var A = P(62449);
      t.exports = function(t) {
        if (A(t)) throw TypeError("The method doesn't accept regular expressions");
        return t;
      };
    },
    81688(t, u, P) {
      "use strict";
      var A = P(65077), M = P(92074), q = P(91641), ee = P(18916), te = P(9304), re = P(92612), ne = P(48664), oe = Object.assign, ae = Object.defineProperty;
      t.exports = !oe || M(function() {
        if (A && 1 !== oe({
          b: 1
        }, oe(ae({}, "a", {
          enumerable: !0,
          get: function() {
            ae(this, "b", {
              value: 3,
              enumerable: !1
            });
          }
        }), {
          b: 2
        })).b) return !0;
        var t = {}, u = {}, P = Symbol(), M = "abcdefghijklmnopqrst";
        return t[P] = 7, M.split("").forEach(function(t) {
          u[t] = t;
        }), 7 != oe({}, t)[P] || q(oe({}, u)).join("") != M;
      }) ? function assign(t, u) {
        for (var P = re(t), M = arguments.length, oe = 1, ae = ee.f, ie = te.f; M > oe; ) for (var se, ue = ne(arguments[oe++]), ce = ae ? q(ue).concat(ae(ue)) : q(ue), fe = ce.length, le = 0; fe > le; ) se = ce[le++], 
        A && !ie.call(ue, se) || (P[se] = ue[se]);
        return P;
      } : oe;
    },
    53105(t, u, P) {
      var A, M = P(73938), q = P(65318), ee = P(30290), te = P(67708), re = P(28890), ne = P(23262), oe = P(25904), ae = "prototype", ie = "script", se = oe("IE_PROTO"), EmptyConstructor = function() {}, scriptTag = function(t) {
        return "<" + ie + ">" + t + "</" + ie + ">";
      }, NullProtoObject = function() {
        try {
          A = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, u, P;
        NullProtoObject = A ? function(t) {
          t.write(scriptTag("")), t.close();
          var u = t.parentWindow.Object;
          return t = null, u;
        }(A) : (u = ne("iframe"), P = "java" + ie + ":", u.style.display = "none", re.appendChild(u), 
        u.src = String(P), (t = u.contentWindow.document).open(), t.write(scriptTag("document.F=Object")), 
        t.close(), t.F);
        for (var M = ee.length; M--; ) delete NullProtoObject[ae][ee[M]];
        return NullProtoObject();
      };
      te[se] = !0, t.exports = Object.create || function create(t, u) {
        var P;
        return null !== t ? (EmptyConstructor[ae] = M(t), P = new EmptyConstructor, EmptyConstructor[ae] = null, 
        P[se] = t) : P = NullProtoObject(), void 0 === u ? P : q(P, u);
      };
    },
    65318(t, u, P) {
      var A = P(65077), M = P(43610), q = P(73938), ee = P(91641);
      t.exports = A ? Object.defineProperties : function defineProperties(t, u) {
        q(t);
        for (var P, A = ee(u), te = A.length, re = 0; te > re; ) M.f(t, P = A[re++], u[P]);
        return t;
      };
    },
    43610(t, u, P) {
      var A = P(65077), M = P(87694), q = P(73938), ee = P(50874), te = Object.defineProperty;
      u.f = A ? te : function defineProperty(t, u, P) {
        if (q(t), u = ee(u, !0), q(P), M) try {
          return te(t, u, P);
        } catch (t) {}
        if ("get" in P || "set" in P) throw TypeError("Accessors not supported");
        return "value" in P && (t[u] = P.value), t;
      };
    },
    97632(t, u, P) {
      var A = P(65077), M = P(9304), q = P(66843), ee = P(5476), te = P(50874), re = P(31883), ne = P(87694), oe = Object.getOwnPropertyDescriptor;
      u.f = A ? oe : function getOwnPropertyDescriptor(t, u) {
        if (t = ee(t), u = te(u, !0), ne) try {
          return oe(t, u);
        } catch (t) {}
        if (re(t, u)) return q(!M.f.call(t, u), t[u]);
      };
    },
    56509(t, u, P) {
      var A = P(5476), M = P(64789).f, q = {}.toString, ee = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t.exports.f = function getOwnPropertyNames(t) {
        return ee && "[object Window]" == q.call(t) ? function(t) {
          try {
            return M(t);
          } catch (t) {
            return ee.slice();
          }
        }(t) : M(A(t));
      };
    },
    64789(t, u, P) {
      var A = P(16347), M = P(30290).concat("length", "prototype");
      u.f = Object.getOwnPropertyNames || function getOwnPropertyNames(t) {
        return A(t, M);
      };
    },
    18916(t, u) {
      u.f = Object.getOwnPropertySymbols;
    },
    97970(t, u, P) {
      var A = P(31883), M = P(92612), q = P(25904), ee = P(7168), te = q("IE_PROTO"), re = Object.prototype;
      t.exports = ee ? Object.getPrototypeOf : function(t) {
        return t = M(t), A(t, te) ? t[te] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? re : null;
      };
    },
    16347(t, u, P) {
      var A = P(31883), M = P(5476), q = P(58186).indexOf, ee = P(67708);
      t.exports = function(t, u) {
        var P, te = M(t), re = 0, ne = [];
        for (P in te) !A(ee, P) && A(te, P) && ne.push(P);
        for (;u.length > re; ) A(te, P = u[re++]) && (~q(ne, P) || ne.push(P));
        return ne;
      };
    },
    91641(t, u, P) {
      var A = P(16347), M = P(30290);
      t.exports = Object.keys || function keys(t) {
        return A(t, M);
      };
    },
    9304(t, u) {
      "use strict";
      var P = {}.propertyIsEnumerable, A = Object.getOwnPropertyDescriptor, M = A && !P.call({
        1: 2
      }, 1);
      u.f = M ? function propertyIsEnumerable(t) {
        var u = A(this, t);
        return !!u && u.enumerable;
      } : P;
    },
    39686(t, u, P) {
      var A = P(73938), M = P(7473);
      t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, u = !1, P = {};
        try {
          (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(P, []), 
          u = P instanceof Array;
        } catch (t) {}
        return function setPrototypeOf(P, q) {
          return A(P), M(q), u ? t.call(P, q) : P.__proto__ = q, P;
        };
      }() : void 0);
    },
    23172(t, u, P) {
      var A = P(65077), M = P(91641), q = P(5476), ee = P(9304).f, createMethod = function(t) {
        return function(u) {
          for (var P, te = q(u), re = M(te), ne = re.length, oe = 0, ae = []; ne > oe; ) P = re[oe++], 
          A && !ee.call(te, P) || ae.push(t ? [ P, te[P] ] : te[P]);
          return ae;
        };
      };
      t.exports = {
        entries: createMethod(!0),
        values: createMethod(!1)
      };
    },
    94972(t, u, P) {
      "use strict";
      var A = P(43129), M = P(83062);
      t.exports = A ? {}.toString : function toString() {
        return "[object " + M(this) + "]";
      };
    },
    15816(t, u, P) {
      var A = P(56492), M = P(64789), q = P(18916), ee = P(73938);
      t.exports = A("Reflect", "ownKeys") || function ownKeys(t) {
        var u = M.f(ee(t)), P = q.f;
        return P ? u.concat(P(t)) : u;
      };
    },
    29720(t, u, P) {
      var A = P(30200);
      t.exports = A;
    },
    50242(t) {
      t.exports = function(t) {
        try {
          return {
            error: !1,
            value: t()
          };
        } catch (t) {
          return {
            error: !0,
            value: t
          };
        }
      };
    },
    9803(t, u, P) {
      var A = P(73938), M = P(65335), q = P(39836);
      t.exports = function(t, u) {
        if (A(t), M(u) && u.constructor === t) return u;
        var P = q.f(t);
        return (0, P.resolve)(u), P.promise;
      };
    },
    13075(t, u, P) {
      var A = P(97485);
      t.exports = function(t, u, P) {
        for (var M in u) A(t, M, u[M], P);
        return t;
      };
    },
    97485(t, u, P) {
      var A = P(30200), M = P(97712), q = P(31883), ee = P(55975), te = P(69965), re = P(99206), ne = re.get, oe = re.enforce, ae = String(String).split("String");
      (t.exports = function(t, u, P, te) {
        var re = !!te && !!te.unsafe, ne = !!te && !!te.enumerable, ie = !!te && !!te.noTargetGet;
        "function" == typeof P && ("string" != typeof u || q(P, "name") || M(P, "name", u), 
        oe(P).source = ae.join("string" == typeof u ? u : "")), t !== A ? (re ? !ie && t[u] && (ne = !0) : delete t[u], 
        ne ? t[u] = P : M(t, u, P)) : ne ? t[u] = P : ee(u, P);
      })(Function.prototype, "toString", function toString() {
        return "function" == typeof this && ne(this).source || te(this);
      });
    },
    66793(t, u, P) {
      var A = P(18569), M = P(70054);
      t.exports = function(t, u) {
        var P = t.exec;
        if ("function" == typeof P) {
          var q = P.call(t, u);
          if ("object" != typeof q) throw TypeError("RegExp exec method returned something other than an Object or null");
          return q;
        }
        if ("RegExp" !== A(t)) throw TypeError("RegExp#exec called on incompatible receiver");
        return M.call(t, u);
      };
    },
    70054(t, u, P) {
      "use strict";
      var A, M, q = P(16844), ee = P(12192), te = RegExp.prototype.exec, re = String.prototype.replace, ne = te, oe = (A = /a/, 
      M = /b*/g, te.call(A, "a"), te.call(M, "a"), 0 !== A.lastIndex || 0 !== M.lastIndex), ae = ee.UNSUPPORTED_Y || ee.BROKEN_CARET, ie = void 0 !== /()??/.exec("")[1];
      (oe || ie || ae) && (ne = function exec(t) {
        var u, P, A, M, ee = this, ne = ae && ee.sticky, se = q.call(ee), ue = ee.source, ce = 0, fe = t;
        return ne && (-1 === (se = se.replace("y", "")).indexOf("g") && (se += "g"), fe = String(t).slice(ee.lastIndex), 
        ee.lastIndex > 0 && (!ee.multiline || ee.multiline && "\n" !== t[ee.lastIndex - 1]) && (ue = "(?: " + ue + ")", 
        fe = " " + fe, ce++), P = new RegExp("^(?:" + ue + ")", se)), ie && (P = new RegExp("^" + ue + "$(?!\\s)", se)), 
        oe && (u = ee.lastIndex), A = te.call(ne ? P : ee, fe), ne ? A ? (A.input = A.input.slice(ce), 
        A[0] = A[0].slice(ce), A.index = ee.lastIndex, ee.lastIndex += A[0].length) : ee.lastIndex = 0 : oe && A && (ee.lastIndex = ee.global ? A.index + A[0].length : u), 
        ie && A && A.length > 1 && re.call(A[0], P, function() {
          for (M = 1; M < arguments.length - 2; M++) void 0 === arguments[M] && (A[M] = void 0);
        }), A;
      }), t.exports = ne;
    },
    16844(t, u, P) {
      "use strict";
      var A = P(73938);
      t.exports = function() {
        var t = A(this), u = "";
        return t.global && (u += "g"), t.ignoreCase && (u += "i"), t.multiline && (u += "m"), 
        t.dotAll && (u += "s"), t.unicode && (u += "u"), t.sticky && (u += "y"), u;
      };
    },
    12192(t, u, P) {
      "use strict";
      var A = P(92074);
      function RE(t, u) {
        return RegExp(t, u);
      }
      u.UNSUPPORTED_Y = A(function() {
        var t = RE("a", "y");
        return t.lastIndex = 2, null != t.exec("abcd");
      }), u.BROKEN_CARET = A(function() {
        var t = RE("^r", "gy");
        return t.lastIndex = 2, null != t.exec("str");
      });
    },
    71229(t) {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    54741(t) {
      t.exports = Object.is || function is(t, u) {
        return t === u ? 0 !== t || 1 / t == 1 / u : t != t && u != u;
      };
    },
    55975(t, u, P) {
      var A = P(30200), M = P(97712);
      t.exports = function(t, u) {
        try {
          M(A, t, u);
        } catch (P) {
          A[t] = u;
        }
        return u;
      };
    },
    93524(t, u, P) {
      "use strict";
      var A = P(56492), M = P(43610), q = P(31602), ee = P(65077), te = q("species");
      t.exports = function(t) {
        var u = A(t), P = M.f;
        ee && u && !u[te] && P(u, te, {
          configurable: !0,
          get: function() {
            return this;
          }
        });
      };
    },
    75282(t, u, P) {
      var A = P(43610).f, M = P(31883), q = P(31602)("toStringTag");
      t.exports = function(t, u, P) {
        t && !M(t = P ? t : t.prototype, q) && A(t, q, {
          configurable: !0,
          value: u
        });
      };
    },
    25904(t, u, P) {
      var A = P(50002), M = P(50665), q = A("keys");
      t.exports = function(t) {
        return q[t] || (q[t] = M(t));
      };
    },
    49310(t, u, P) {
      var A = P(30200), M = P(55975), q = "__core-js_shared__", ee = A[q] || M(q, {});
      t.exports = ee;
    },
    50002(t, u, P) {
      var A = P(6926), M = P(49310);
      (t.exports = function(t, u) {
        return M[t] || (M[t] = void 0 !== u ? u : {});
      })("versions", []).push({
        version: "3.6.4",
        mode: A ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      });
    },
    23444(t, u, P) {
      var A = P(73938), M = P(59085), q = P(31602)("species");
      t.exports = function(t, u) {
        var P, ee = A(t).constructor;
        return void 0 === ee || null == (P = A(ee)[q]) ? u : M(P);
      };
    },
    77804(t, u, P) {
      var A = P(7317), M = P(71229), createMethod = function(t) {
        return function(u, P) {
          var q, ee, te = String(M(u)), re = A(P), ne = te.length;
          return re < 0 || re >= ne ? t ? "" : void 0 : (q = te.charCodeAt(re)) < 55296 || q > 56319 || re + 1 === ne || (ee = te.charCodeAt(re + 1)) < 56320 || ee > 57343 ? t ? te.charAt(re) : q : t ? te.slice(re, re + 2) : ee - 56320 + (q - 55296 << 10) + 65536;
        };
      };
      t.exports = {
        codeAt: createMethod(!1),
        charAt: createMethod(!0)
      };
    },
    83150(t) {
      "use strict";
      var u = 2147483647, P = /[^\0-\u007E]/, A = /[.\u3002\uFF0E\uFF61]/g, M = "Overflow: input needs wider integers to process", q = Math.floor, ee = String.fromCharCode, digitToBasic = function(t) {
        return t + 22 + 75 * (t < 26);
      }, adapt = function(t, u, P) {
        var A = 0;
        for (t = P ? q(t / 700) : t >> 1, t += q(t / u); t > 455; A += 36) t = q(t / 35);
        return q(A + 36 * t / (t + 38));
      }, encode = function(t) {
        var P = [];
        t = function(t) {
          for (var u = [], P = 0, A = t.length; P < A; ) {
            var M = t.charCodeAt(P++);
            if (M >= 55296 && M <= 56319 && P < A) {
              var q = t.charCodeAt(P++);
              56320 == (64512 & q) ? u.push(((1023 & M) << 10) + (1023 & q) + 65536) : (u.push(M), 
              P--);
            } else u.push(M);
          }
          return u;
        }(t);
        var A, te, re = t.length, ne = 128, oe = 0, ae = 72;
        for (A = 0; A < t.length; A++) (te = t[A]) < 128 && P.push(ee(te));
        var ie = P.length, se = ie;
        for (ie && P.push("-"); se < re; ) {
          var ue = u;
          for (A = 0; A < t.length; A++) (te = t[A]) >= ne && te < ue && (ue = te);
          var ce = se + 1;
          if (ue - ne > q((u - oe) / ce)) throw RangeError(M);
          for (oe += (ue - ne) * ce, ne = ue, A = 0; A < t.length; A++) {
            if ((te = t[A]) < ne && ++oe > u) throw RangeError(M);
            if (te == ne) {
              for (var fe = oe, le = 36; ;le += 36) {
                var de = le <= ae ? 1 : le >= ae + 26 ? 26 : le - ae;
                if (fe < de) break;
                var pe = fe - de, he = 36 - de;
                P.push(ee(digitToBasic(de + pe % he))), fe = q(pe / he);
              }
              P.push(ee(digitToBasic(fe))), ae = adapt(oe, ce, se == ie), oe = 0, ++se;
            }
          }
          ++oe, ++ne;
        }
        return P.join("");
      };
      t.exports = function(t) {
        var u, M, q = [], ee = t.toLowerCase().replace(A, ".").split(".");
        for (u = 0; u < ee.length; u++) M = ee[u], q.push(P.test(M) ? "xn--" + encode(M) : M);
        return q.join(".");
      };
    },
    89233(t, u, P) {
      var A = P(92074), M = P(55073);
      t.exports = function(t) {
        return A(function() {
          return !!M[t]() || "​᠎" != "​᠎"[t]() || M[t].name !== t;
        });
      };
    },
    69163(t, u, P) {
      var A = P(71229), M = "[" + P(55073) + "]", q = RegExp("^" + M + M + "*"), ee = RegExp(M + M + "*$"), createMethod = function(t) {
        return function(u) {
          var P = String(A(u));
          return 1 & t && (P = P.replace(q, "")), 2 & t && (P = P.replace(ee, "")), P;
        };
      };
      t.exports = {
        start: createMethod(1),
        end: createMethod(2),
        trim: createMethod(3)
      };
    },
    74922(t, u, P) {
      var A, M, q, ee = P(30200), te = P(92074), re = P(18569), ne = P(46885), oe = P(28890), ae = P(23262), ie = P(62050), se = ee.location, ue = ee.setImmediate, ce = ee.clearImmediate, fe = ee.process, le = ee.MessageChannel, de = ee.Dispatch, pe = 0, he = {}, ye = "onreadystatechange", run = function(t) {
        if (he.hasOwnProperty(t)) {
          var u = he[t];
          delete he[t], u();
        }
      }, runner = function(t) {
        return function() {
          run(t);
        };
      }, listener = function(t) {
        run(t.data);
      }, post = function(t) {
        ee.postMessage(t + "", se.protocol + "//" + se.host);
      };
      ue && ce || (ue = function setImmediate(t) {
        for (var u = [], P = 1; arguments.length > P; ) u.push(arguments[P++]);
        return he[++pe] = function() {
          ("function" == typeof t ? t : Function(t)).apply(void 0, u);
        }, A(pe), pe;
      }, ce = function clearImmediate(t) {
        delete he[t];
      }, "process" == re(fe) ? A = function(t) {
        fe.nextTick(runner(t));
      } : de && de.now ? A = function(t) {
        de.now(runner(t));
      } : le && !ie ? (q = (M = new le).port2, M.port1.onmessage = listener, A = ne(q.postMessage, q, 1)) : !ee.addEventListener || "function" != typeof postMessage || ee.importScripts || te(post) ? A = ye in ae("script") ? function(t) {
        oe.appendChild(ae("script"))[ye] = function() {
          oe.removeChild(this), run(t);
        };
      } : function(t) {
        setTimeout(runner(t), 0);
      } : (A = post, ee.addEventListener("message", listener, !1))), t.exports = {
        set: ue,
        clear: ce
      };
    },
    6539(t, u, P) {
      var A = P(7317), M = Math.max, q = Math.min;
      t.exports = function(t, u) {
        var P = A(t);
        return P < 0 ? M(P + u, 0) : q(P, u);
      };
    },
    5476(t, u, P) {
      var A = P(48664), M = P(71229);
      t.exports = function(t) {
        return A(M(t));
      };
    },
    7317(t) {
      var u = Math.ceil, P = Math.floor;
      t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? P : u)(t);
      };
    },
    33747(t, u, P) {
      var A = P(7317), M = Math.min;
      t.exports = function(t) {
        return t > 0 ? M(A(t), 9007199254740991) : 0;
      };
    },
    92612(t, u, P) {
      var A = P(71229);
      t.exports = function(t) {
        return Object(A(t));
      };
    },
    50874(t, u, P) {
      var A = P(65335);
      t.exports = function(t, u) {
        if (!A(t)) return t;
        var P, M;
        if (u && "function" == typeof (P = t.toString) && !A(M = P.call(t))) return M;
        if ("function" == typeof (P = t.valueOf) && !A(M = P.call(t))) return M;
        if (!u && "function" == typeof (P = t.toString) && !A(M = P.call(t))) return M;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    43129(t, u, P) {
      var A = {};
      A[P(31602)("toStringTag")] = "z", t.exports = "[object z]" === String(A);
    },
    50665(t) {
      var u = 0, P = Math.random();
      t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++u + P).toString(36);
      };
    },
    5225(t, u, P) {
      var A = P(61849);
      t.exports = A && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    30802(t, u, P) {
      var A = P(31602);
      u.f = A;
    },
    31602(t, u, P) {
      var A = P(30200), M = P(50002), q = P(31883), ee = P(50665), te = P(61849), re = P(5225), ne = M("wks"), oe = A.Symbol, ae = re ? oe : oe && oe.withoutSetter || ee;
      t.exports = function(t) {
        return q(ne, t) || (te && q(oe, t) ? ne[t] = oe[t] : ne[t] = ae("Symbol." + t)), 
        ne[t];
      };
    },
    55073(t) {
      t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    80115(t, u, P) {
      "use strict";
      var A = P(51605), M = P(92074), q = P(18679), ee = P(65335), te = P(92612), re = P(33747), ne = P(52057), oe = P(62998), ae = P(45634), ie = P(31602), se = P(6845), ue = ie("isConcatSpreadable"), ce = 9007199254740991, fe = "Maximum allowed index exceeded", le = se >= 51 || !M(function() {
        var t = [];
        return t[ue] = !1, t.concat()[0] !== t;
      }), de = ae("concat"), isConcatSpreadable = function(t) {
        if (!ee(t)) return !1;
        var u = t[ue];
        return void 0 !== u ? !!u : q(t);
      };
      A({
        target: "Array",
        proto: !0,
        forced: !le || !de
      }, {
        concat: function concat(t) {
          var u, P, A, M, q, ee = te(this), ae = oe(ee, 0), ie = 0;
          for (u = -1, A = arguments.length; u < A; u++) if (isConcatSpreadable(q = -1 === u ? ee : arguments[u])) {
            if (ie + (M = re(q.length)) > ce) throw TypeError(fe);
            for (P = 0; P < M; P++, ie++) P in q && ne(ae, ie, q[P]);
          } else {
            if (ie >= ce) throw TypeError(fe);
            ne(ae, ie++, q);
          }
          return ae.length = ie, ae;
        }
      });
    },
    17(t, u, P) {
      "use strict";
      var A = P(51605), M = P(91344).filter, q = P(45634), ee = P(23638), te = q("filter"), re = ee("filter");
      A({
        target: "Array",
        proto: !0,
        forced: !te || !re
      }, {
        filter: function filter(t) {
          return M(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    58476(t, u, P) {
      "use strict";
      var A = P(51605), M = P(10516);
      A({
        target: "Array",
        proto: !0,
        forced: [].forEach != M
      }, {
        forEach: M
      });
    },
    15195(t, u, P) {
      var A = P(51605), M = P(51027);
      A({
        target: "Array",
        stat: !0,
        forced: !P(97499)(function(t) {
          Array.from(t);
        })
      }, {
        from: M
      });
    },
    19693(t, u, P) {
      "use strict";
      var A = P(51605), M = P(58186).indexOf, q = P(92349), ee = P(23638), te = [].indexOf, re = !!te && 1 / [ 1 ].indexOf(1, -0) < 0, ne = q("indexOf"), oe = ee("indexOf", {
        ACCESSORS: !0,
        1: 0
      });
      A({
        target: "Array",
        proto: !0,
        forced: re || !ne || !oe
      }, {
        indexOf: function indexOf(t) {
          return re ? te.apply(this, arguments) || 0 : M(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    4895(t, u, P) {
      P(51605)({
        target: "Array",
        stat: !0
      }, {
        isArray: P(18679)
      });
    },
    18665(t, u, P) {
      "use strict";
      var A = P(5476), M = P(40298), q = P(52228), ee = P(99206), te = P(45723), re = "Array Iterator", ne = ee.set, oe = ee.getterFor(re);
      t.exports = te(Array, "Array", function(t, u) {
        ne(this, {
          type: re,
          target: A(t),
          index: 0,
          kind: u
        });
      }, function() {
        var t = oe(this), u = t.target, P = t.kind, A = t.index++;
        return !u || A >= u.length ? (t.target = void 0, {
          value: void 0,
          done: !0
        }) : "keys" == P ? {
          value: A,
          done: !1
        } : "values" == P ? {
          value: u[A],
          done: !1
        } : {
          value: [ A, u[A] ],
          done: !1
        };
      }, "values"), q.Arguments = q.Array, M("keys"), M("values"), M("entries");
    },
    80475(t, u, P) {
      "use strict";
      var A = P(51605), M = P(48664), q = P(5476), ee = P(92349), te = [].join, re = M != Object, ne = ee("join", ",");
      A({
        target: "Array",
        proto: !0,
        forced: re || !ne
      }, {
        join: function join(t) {
          return te.call(q(this), void 0 === t ? "," : t);
        }
      });
    },
    59581(t, u, P) {
      "use strict";
      var A = P(51605), M = P(91344).map, q = P(45634), ee = P(23638), te = q("map"), re = ee("map");
      A({
        target: "Array",
        proto: !0,
        forced: !te || !re
      }, {
        map: function map(t) {
          return M(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    533(t, u, P) {
      "use strict";
      var A = P(51605), M = P(52237).left, q = P(92349), ee = P(23638), te = q("reduce"), re = ee("reduce", {
        1: 0
      });
      A({
        target: "Array",
        proto: !0,
        forced: !te || !re
      }, {
        reduce: function reduce(t) {
          return M(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    14913(t, u, P) {
      "use strict";
      var A = P(51605), M = P(65335), q = P(18679), ee = P(6539), te = P(33747), re = P(5476), ne = P(52057), oe = P(31602), ae = P(45634), ie = P(23638), se = ae("slice"), ue = ie("slice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
      }), ce = oe("species"), fe = [].slice, le = Math.max;
      A({
        target: "Array",
        proto: !0,
        forced: !se || !ue
      }, {
        slice: function slice(t, u) {
          var P, A, oe, ae = re(this), ie = te(ae.length), se = ee(t, ie), ue = ee(void 0 === u ? ie : u, ie);
          if (q(ae) && ("function" != typeof (P = ae.constructor) || P !== Array && !q(P.prototype) ? M(P) && null === (P = P[ce]) && (P = void 0) : P = void 0, 
          P === Array || void 0 === P)) return fe.call(ae, se, ue);
          for (A = new (void 0 === P ? Array : P)(le(ue - se, 0)), oe = 0; se < ue; se++, 
          oe++) se in ae && ne(A, oe, ae[se]);
          return A.length = oe, A;
        }
      });
    },
    63555(t, u, P) {
      "use strict";
      var A = P(51605), M = P(91344).some, q = P(92349), ee = P(23638), te = q("some"), re = ee("some");
      A({
        target: "Array",
        proto: !0,
        forced: !te || !re
      }, {
        some: function some(t) {
          return M(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    },
    35231(t, u, P) {
      "use strict";
      var A = P(51605), M = P(59085), q = P(92612), ee = P(92074), te = P(92349), re = [], ne = re.sort, oe = ee(function() {
        re.sort(void 0);
      }), ae = ee(function() {
        re.sort(null);
      }), ie = te("sort");
      A({
        target: "Array",
        proto: !0,
        forced: oe || !ae || !ie
      }, {
        sort: function sort(t) {
          return void 0 === t ? ne.call(q(this)) : ne.call(q(this), M(t));
        }
      });
    },
    89560(t, u, P) {
      P(51605)({
        target: "Date",
        stat: !0
      }, {
        now: function now() {
          return (new Date).getTime();
        }
      });
    },
    53270(t, u, P) {
      "use strict";
      var A = P(51605), M = P(92074), q = P(92612), ee = P(50874);
      A({
        target: "Date",
        proto: !0,
        forced: M(function() {
          return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
              return 1;
            }
          });
        })
      }, {
        toJSON: function toJSON(t) {
          var u = q(this), P = ee(u);
          return "number" != typeof P || isFinite(P) ? u.toISOString() : null;
        }
      });
    },
    87787(t, u, P) {
      var A = P(97712), M = P(31137), q = P(31602)("toPrimitive"), ee = Date.prototype;
      q in ee || A(ee, q, M);
    },
    79389(t, u, P) {
      var A = P(97485), M = Date.prototype, q = "Invalid Date", ee = "toString", te = M[ee], re = M.getTime;
      new Date(NaN) + "" != q && A(M, ee, function toString() {
        var t = re.call(this);
        return t == t ? te.call(this) : q;
      });
    },
    64189(t, u, P) {
      P(51605)({
        target: "Function",
        proto: !0
      }, {
        bind: P(38891)
      });
    },
    98741(t, u, P) {
      var A = P(65077), M = P(43610).f, q = Function.prototype, ee = q.toString, te = /^\s*function ([^ (]*)/, re = "name";
      A && !(re in q) && M(q, re, {
        configurable: !0,
        get: function() {
          try {
            return ee.call(this).match(te)[1];
          } catch (t) {
            return "";
          }
        }
      });
    },
    7918(t, u, P) {
      "use strict";
      var A = P(92327), M = P(5959);
      t.exports = A("Map", function(t) {
        return function Map() {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      }, M);
    },
    94009(t, u, P) {
      "use strict";
      var A = P(65077), M = P(30200), q = P(84977), ee = P(97485), te = P(31883), re = P(18569), ne = P(93054), oe = P(50874), ae = P(92074), ie = P(53105), se = P(64789).f, ue = P(97632).f, ce = P(43610).f, fe = P(69163).trim, le = "Number", de = M[le], pe = de.prototype, he = re(ie(pe)) == le, toNumber = function(t) {
        var u, P, A, M, q, ee, te, re, ne = oe(t, !1);
        if ("string" == typeof ne && ne.length > 2) if (43 === (u = (ne = fe(ne)).charCodeAt(0)) || 45 === u) {
          if (88 === (P = ne.charCodeAt(2)) || 120 === P) return NaN;
        } else if (48 === u) {
          switch (ne.charCodeAt(1)) {
           case 66:
           case 98:
            A = 2, M = 49;
            break;

           case 79:
           case 111:
            A = 8, M = 55;
            break;

           default:
            return +ne;
          }
          for (ee = (q = ne.slice(2)).length, te = 0; te < ee; te++) if ((re = q.charCodeAt(te)) < 48 || re > M) return NaN;
          return parseInt(q, A);
        }
        return +ne;
      };
      if (q(le, !de(" 0o1") || !de("0b1") || de("+0x1"))) {
        for (var ye, ge = function Number(t) {
          var u = arguments.length < 1 ? 0 : t, P = this;
          return P instanceof ge && (he ? ae(function() {
            pe.valueOf.call(P);
          }) : re(P) != le) ? ne(new de(toNumber(u)), P, ge) : toNumber(u);
        }, be = A ? se(de) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), ve = 0; be.length > ve; ve++) te(de, ye = be[ve]) && !te(ge, ye) && ce(ge, ye, ue(de, ye));
        ge.prototype = pe, pe.constructor = ge, ee(M, le, ge);
      }
    },
    97755(t, u, P) {
      P(51605)({
        target: "Object",
        stat: !0,
        sham: !P(65077)
      }, {
        create: P(53105)
      });
    },
    36012(t, u, P) {
      var A = P(51605), M = P(65077);
      A({
        target: "Object",
        stat: !0,
        forced: !M,
        sham: !M
      }, {
        defineProperties: P(65318)
      });
    },
    15852(t, u, P) {
      var A = P(51605), M = P(65077);
      A({
        target: "Object",
        stat: !0,
        forced: !M,
        sham: !M
      }, {
        defineProperty: P(43610).f
      });
    },
    84095(t, u, P) {
      var A = P(51605), M = P(23172).entries;
      A({
        target: "Object",
        stat: !0
      }, {
        entries: function entries(t) {
          return M(t);
        }
      });
    },
    10678(t, u, P) {
      var A = P(51605), M = P(92074), q = P(5476), ee = P(97632).f, te = P(65077), re = M(function() {
        ee(1);
      });
      A({
        target: "Object",
        stat: !0,
        forced: !te || re,
        sham: !te
      }, {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, u) {
          return ee(q(t), u);
        }
      });
    },
    3101(t, u, P) {
      var A = P(51605), M = P(65077), q = P(15816), ee = P(5476), te = P(97632), re = P(52057);
      A({
        target: "Object",
        stat: !0,
        sham: !M
      }, {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
          for (var u, P, A = ee(t), M = te.f, ne = q(A), oe = {}, ae = 0; ne.length > ae; ) void 0 !== (P = M(A, u = ne[ae++])) && re(oe, u, P);
          return oe;
        }
      });
    },
    67579(t, u, P) {
      var A = P(51605), M = P(92074), q = P(56509).f;
      A({
        target: "Object",
        stat: !0,
        forced: M(function() {
          return !Object.getOwnPropertyNames(1);
        })
      }, {
        getOwnPropertyNames: q
      });
    },
    41412(t, u, P) {
      var A = P(51605), M = P(92074), q = P(92612), ee = P(97970), te = P(7168);
      A({
        target: "Object",
        stat: !0,
        forced: M(function() {
          ee(1);
        }),
        sham: !te
      }, {
        getPrototypeOf: function getPrototypeOf(t) {
          return ee(q(t));
        }
      });
    },
    7899(t, u, P) {
      var A = P(51605), M = P(92612), q = P(91641);
      A({
        target: "Object",
        stat: !0,
        forced: P(92074)(function() {
          q(1);
        })
      }, {
        keys: function keys(t) {
          return q(M(t));
        }
      });
    },
    4632(t, u, P) {
      P(51605)({
        target: "Object",
        stat: !0
      }, {
        setPrototypeOf: P(39686)
      });
    },
    5086(t, u, P) {
      var A = P(43129), M = P(97485), q = P(94972);
      A || M(Object.prototype, "toString", q, {
        unsafe: !0
      });
    },
    69193(t, u, P) {
      "use strict";
      var A, M, q, ee, te = P(51605), re = P(6926), ne = P(30200), oe = P(56492), ae = P(83737), ie = P(97485), se = P(13075), ue = P(75282), ce = P(93524), fe = P(65335), le = P(59085), de = P(65190), pe = P(18569), he = P(69965), ye = P(52929), ge = P(97499), be = P(23444), ve = P(74922).set, me = P(47462), _e = P(9803), we = P(69778), Oe = P(39836), Se = P(50242), ke = P(99206), xe = P(84977), Pe = P(31602), je = P(6845), Ee = Pe("species"), Te = "Promise", Ae = ke.get, Re = ke.set, Ie = ke.getterFor(Te), Me = ae, Fe = ne.TypeError, Ce = ne.document, De = ne.process, Le = oe("fetch"), Ge = Oe.f, Be = Ge, Ne = "process" == pe(De), qe = !!(Ce && Ce.createEvent && ne.dispatchEvent), Ue = "unhandledrejection", He = xe(Te, function() {
        if (!(he(Me) !== String(Me))) {
          if (66 === je) return !0;
          if (!Ne && "function" != typeof PromiseRejectionEvent) return !0;
        }
        if (re && !Me.prototype.finally) return !0;
        if (je >= 51 && /native code/.test(Me)) return !1;
        var t = Me.resolve(1), FakePromise = function(t) {
          t(function() {}, function() {});
        };
        return (t.constructor = {})[Ee] = FakePromise, !(t.then(function() {}) instanceof FakePromise);
      }), Ke = He || !ge(function(t) {
        Me.all(t).catch(function() {});
      }), isThenable = function(t) {
        var u;
        return !(!fe(t) || "function" != typeof (u = t.then)) && u;
      }, notify = function(t, u, P) {
        if (!u.notified) {
          u.notified = !0;
          var A = u.reactions;
          me(function() {
            for (var M = u.value, q = 1 == u.state, ee = 0; A.length > ee; ) {
              var te, re, ne, oe = A[ee++], ae = q ? oe.ok : oe.fail, ie = oe.resolve, se = oe.reject, ue = oe.domain;
              try {
                ae ? (q || (2 === u.rejection && onHandleUnhandled(t, u), u.rejection = 1), !0 === ae ? te = M : (ue && ue.enter(), 
                te = ae(M), ue && (ue.exit(), ne = !0)), te === oe.promise ? se(Fe("Promise-chain cycle")) : (re = isThenable(te)) ? re.call(te, ie, se) : ie(te)) : se(M);
              } catch (t) {
                ue && !ne && ue.exit(), se(t);
              }
            }
            u.reactions = [], u.notified = !1, P && !u.rejection && onUnhandled(t, u);
          });
        }
      }, dispatchEvent = function(t, u, P) {
        var A, M;
        qe ? ((A = Ce.createEvent("Event")).promise = u, A.reason = P, A.initEvent(t, !1, !0), 
        ne.dispatchEvent(A)) : A = {
          promise: u,
          reason: P
        }, (M = ne["on" + t]) ? M(A) : t === Ue && we("Unhandled promise rejection", P);
      }, onUnhandled = function(t, u) {
        ve.call(ne, function() {
          var P, A = u.value;
          if (isUnhandled(u) && (P = Se(function() {
            Ne ? De.emit("unhandledRejection", A, t) : dispatchEvent(Ue, t, A);
          }), u.rejection = Ne || isUnhandled(u) ? 2 : 1, P.error)) throw P.value;
        });
      }, isUnhandled = function(t) {
        return 1 !== t.rejection && !t.parent;
      }, onHandleUnhandled = function(t, u) {
        ve.call(ne, function() {
          Ne ? De.emit("rejectionHandled", t) : dispatchEvent("rejectionhandled", t, u.value);
        });
      }, bind = function(t, u, P, A) {
        return function(M) {
          t(u, P, M, A);
        };
      }, internalReject = function(t, u, P, A) {
        u.done || (u.done = !0, A && (u = A), u.value = P, u.state = 2, notify(t, u, !0));
      }, internalResolve = function(t, u, P, A) {
        if (!u.done) {
          u.done = !0, A && (u = A);
          try {
            if (t === P) throw Fe("Promise can't be resolved itself");
            var M = isThenable(P);
            M ? me(function() {
              var A = {
                done: !1
              };
              try {
                M.call(P, bind(internalResolve, t, A, u), bind(internalReject, t, A, u));
              } catch (P) {
                internalReject(t, A, P, u);
              }
            }) : (u.value = P, u.state = 1, notify(t, u, !1));
          } catch (P) {
            internalReject(t, {
              done: !1
            }, P, u);
          }
        }
      };
      He && (Me = function Promise(t) {
        de(this, Me, Te), le(t), A.call(this);
        var u = Ae(this);
        try {
          t(bind(internalResolve, this, u), bind(internalReject, this, u));
        } catch (t) {
          internalReject(this, u, t);
        }
      }, (A = function Promise(t) {
        Re(this, {
          type: Te,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0
        });
      }).prototype = se(Me.prototype, {
        then: function then(t, u) {
          var P = Ie(this), A = Ge(be(this, Me));
          return A.ok = "function" != typeof t || t, A.fail = "function" == typeof u && u, 
          A.domain = Ne ? De.domain : void 0, P.parent = !0, P.reactions.push(A), 0 != P.state && notify(this, P, !1), 
          A.promise;
        },
        catch: function(t) {
          return this.then(void 0, t);
        }
      }), M = function() {
        var t = new A, u = Ae(t);
        this.promise = t, this.resolve = bind(internalResolve, t, u), this.reject = bind(internalReject, t, u);
      }, Oe.f = Ge = function(t) {
        return t === Me || t === q ? new M(t) : Be(t);
      }, re || "function" != typeof ae || (ee = ae.prototype.then, ie(ae.prototype, "then", function then(t, u) {
        var P = this;
        return new Me(function(t, u) {
          ee.call(P, t, u);
        }).then(t, u);
      }, {
        unsafe: !0
      }), "function" == typeof Le && te({
        global: !0,
        enumerable: !0,
        forced: !0
      }, {
        fetch: function fetch(t) {
          return _e(Me, Le.apply(ne, arguments));
        }
      }))), te({
        global: !0,
        wrap: !0,
        forced: He
      }, {
        Promise: Me
      }), ue(Me, Te, !1, !0), ce(Te), q = oe(Te), te({
        target: Te,
        stat: !0,
        forced: He
      }, {
        reject: function reject(t) {
          var u = Ge(this);
          return u.reject.call(void 0, t), u.promise;
        }
      }), te({
        target: Te,
        stat: !0,
        forced: re || He
      }, {
        resolve: function resolve(t) {
          return _e(re && this === q ? Me : this, t);
        }
      }), te({
        target: Te,
        stat: !0,
        forced: Ke
      }, {
        all: function all(t) {
          var u = this, P = Ge(u), A = P.resolve, M = P.reject, q = Se(function() {
            var P = le(u.resolve), q = [], ee = 0, te = 1;
            ye(t, function(t) {
              var re = ee++, ne = !1;
              q.push(void 0), te++, P.call(u, t).then(function(t) {
                ne || (ne = !0, q[re] = t, --te || A(q));
              }, M);
            }), --te || A(q);
          });
          return q.error && M(q.value), P.promise;
        },
        race: function race(t) {
          var u = this, P = Ge(u), A = P.reject, M = Se(function() {
            var M = le(u.resolve);
            ye(t, function(t) {
              M.call(u, t).then(P.resolve, A);
            });
          });
          return M.error && A(M.value), P.promise;
        }
      });
    },
    79073(t, u, P) {
      var A = P(65077), M = P(30200), q = P(84977), ee = P(93054), te = P(43610).f, re = P(64789).f, ne = P(62449), oe = P(16844), ae = P(12192), ie = P(97485), se = P(92074), ue = P(99206).set, ce = P(93524), fe = P(31602)("match"), le = M.RegExp, de = le.prototype, pe = /a/g, he = /a/g, ye = new le(pe) !== pe, ge = ae.UNSUPPORTED_Y;
      if (A && q("RegExp", !ye || ge || se(function() {
        return he[fe] = !1, le(pe) != pe || le(he) == he || "/a/i" != le(pe, "i");
      }))) {
        for (var be = function RegExp(t, u) {
          var P, A = this instanceof be, M = ne(t), q = void 0 === u;
          if (!A && M && t.constructor === be && q) return t;
          ye ? M && !q && (t = t.source) : t instanceof be && (q && (u = oe.call(t)), t = t.source), 
          ge && (P = !!u && u.indexOf("y") > -1) && (u = u.replace(/y/g, ""));
          var te = ee(ye ? new le(t, u) : le(t, u), A ? this : de, be);
          return ge && P && ue(te, {
            sticky: P
          }), te;
        }, proxy = function(t) {
          t in be || te(be, t, {
            configurable: !0,
            get: function() {
              return le[t];
            },
            set: function(u) {
              le[t] = u;
            }
          });
        }, ve = re(le), me = 0; ve.length > me; ) proxy(ve[me++]);
        de.constructor = be, be.prototype = de, ie(M, "RegExp", be);
      }
      ce("RegExp");
    },
    87136(t, u, P) {
      "use strict";
      var A = P(51605), M = P(70054);
      A({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== M
      }, {
        exec: M
      });
    },
    6048(t, u, P) {
      "use strict";
      var A = P(97485), M = P(73938), q = P(92074), ee = P(16844), te = "toString", re = RegExp.prototype, ne = re[te], oe = q(function() {
        return "/a/b" != ne.call({
          source: "a",
          flags: "b"
        });
      }), ae = ne.name != te;
      (oe || ae) && A(RegExp.prototype, te, function toString() {
        var t = M(this), u = String(t.source), P = t.flags;
        return "/" + u + "/" + String(void 0 === P && t instanceof RegExp && !("flags" in re) ? ee.call(t) : P);
      }, {
        unsafe: !0
      });
    },
    67500(t, u, P) {
      "use strict";
      var A, M = P(51605), q = P(97632).f, ee = P(33747), te = P(92588), re = P(71229), ne = P(44177), oe = P(6926), ae = "".endsWith, ie = Math.min, se = ne("endsWith");
      M({
        target: "String",
        proto: !0,
        forced: !!(oe || se || (A = q(String.prototype, "endsWith"), !A || A.writable)) && !se
      }, {
        endsWith: function endsWith(t) {
          var u = String(re(this));
          te(t);
          var P = arguments.length > 1 ? arguments[1] : void 0, A = ee(u.length), M = void 0 === P ? A : ie(ee(P), A), q = String(t);
          return ae ? ae.call(u, q, M) : u.slice(M - q.length, M) === q;
        }
      });
    },
    29979(t, u, P) {
      "use strict";
      var A = P(77804).charAt, M = P(99206), q = P(45723), ee = "String Iterator", te = M.set, re = M.getterFor(ee);
      q(String, "String", function(t) {
        te(this, {
          type: ee,
          string: String(t),
          index: 0
        });
      }, function next() {
        var t, u = re(this), P = u.string, M = u.index;
        return M >= P.length ? {
          value: void 0,
          done: !0
        } : (t = A(P, M), u.index += t.length, {
          value: t,
          done: !1
        });
      });
    },
    40173(t, u, P) {
      "use strict";
      var A = P(20779), M = P(73938), q = P(92612), ee = P(33747), te = P(7317), re = P(71229), ne = P(67234), oe = P(66793), ae = Math.max, ie = Math.min, se = Math.floor, ue = /\$([$&'`]|\d\d?|<[^>]*>)/g, ce = /\$([$&'`]|\d\d?)/g, maybeToString = function(t) {
        return void 0 === t ? t : String(t);
      };
      A("replace", 2, function(t, u, P, A) {
        var fe = A.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, le = A.REPLACE_KEEPS_$0, de = fe ? "$" : "$0";
        return [ function replace(P, A) {
          var M = re(this), q = null == P ? void 0 : P[t];
          return void 0 !== q ? q.call(P, M, A) : u.call(String(M), P, A);
        }, function(t, A) {
          if (!fe && le || "string" == typeof A && -1 === A.indexOf(de)) {
            var q = P(u, t, this, A);
            if (q.done) return q.value;
          }
          var re = M(t), se = String(this), ue = "function" == typeof A;
          ue || (A = String(A));
          var ce = re.global;
          if (ce) {
            var pe = re.unicode;
            re.lastIndex = 0;
          }
          for (var he = []; ;) {
            var ye = oe(re, se);
            if (null === ye) break;
            if (he.push(ye), !ce) break;
            "" === String(ye[0]) && (re.lastIndex = ne(se, ee(re.lastIndex), pe));
          }
          for (var ge = "", be = 0, ve = 0; ve < he.length; ve++) {
            ye = he[ve];
            for (var me = String(ye[0]), _e = ae(ie(te(ye.index), se.length), 0), we = [], Oe = 1; Oe < ye.length; Oe++) we.push(maybeToString(ye[Oe]));
            var Se = ye.groups;
            if (ue) {
              var ke = [ me ].concat(we, _e, se);
              void 0 !== Se && ke.push(Se);
              var xe = String(A.apply(void 0, ke));
            } else xe = getSubstitution(me, se, _e, we, Se, A);
            _e >= be && (ge += se.slice(be, _e) + xe, be = _e + me.length);
          }
          return ge + se.slice(be);
        } ];
        function getSubstitution(t, P, A, M, ee, te) {
          var re = A + t.length, ne = M.length, oe = ce;
          return void 0 !== ee && (ee = q(ee), oe = ue), u.call(te, oe, function(u, q) {
            var te;
            switch (q.charAt(0)) {
             case "$":
              return "$";

             case "&":
              return t;

             case "`":
              return P.slice(0, A);

             case "'":
              return P.slice(re);

             case "<":
              te = ee[q.slice(1, -1)];
              break;

             default:
              var oe = +q;
              if (0 === oe) return u;
              if (oe > ne) {
                var ae = se(oe / 10);
                return 0 === ae ? u : ae <= ne ? void 0 === M[ae - 1] ? q.charAt(1) : M[ae - 1] + q.charAt(1) : u;
              }
              te = M[oe - 1];
            }
            return void 0 === te ? "" : te;
          });
        }
      });
    },
    50785(t, u, P) {
      "use strict";
      var A = P(20779), M = P(73938), q = P(71229), ee = P(54741), te = P(66793);
      A("search", 1, function(t, u, P) {
        return [ function search(u) {
          var P = q(this), A = null == u ? void 0 : u[t];
          return void 0 !== A ? A.call(u, P) : new RegExp(u)[t](String(P));
        }, function(t) {
          var A = P(u, t, this);
          if (A.done) return A.value;
          var q = M(t), re = String(this), ne = q.lastIndex;
          ee(ne, 0) || (q.lastIndex = 0);
          var oe = te(q, re);
          return ee(q.lastIndex, ne) || (q.lastIndex = ne), null === oe ? -1 : oe.index;
        } ];
      });
    },
    58649(t, u, P) {
      "use strict";
      var A = P(20779), M = P(62449), q = P(73938), ee = P(71229), te = P(23444), re = P(67234), ne = P(33747), oe = P(66793), ae = P(70054), ie = P(92074), se = [].push, ue = Math.min, ce = 4294967295, fe = !ie(function() {
        return !RegExp(ce, "y");
      });
      A("split", 2, function(t, u, P) {
        var A;
        return A = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, P) {
          var A = String(ee(this)), q = void 0 === P ? ce : P >>> 0;
          if (0 === q) return [];
          if (void 0 === t) return [ A ];
          if (!M(t)) return u.call(A, t, q);
          for (var te, re, ne, oe = [], ie = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), ue = 0, fe = new RegExp(t.source, ie + "g"); (te = ae.call(fe, A)) && !((re = fe.lastIndex) > ue && (oe.push(A.slice(ue, te.index)), 
          te.length > 1 && te.index < A.length && se.apply(oe, te.slice(1)), ne = te[0].length, 
          ue = re, oe.length >= q)); ) fe.lastIndex === te.index && fe.lastIndex++;
          return ue === A.length ? !ne && fe.test("") || oe.push("") : oe.push(A.slice(ue)), 
          oe.length > q ? oe.slice(0, q) : oe;
        } : "0".split(void 0, 0).length ? function(t, P) {
          return void 0 === t && 0 === P ? [] : u.call(this, t, P);
        } : u, [ function split(u, P) {
          var M = ee(this), q = null == u ? void 0 : u[t];
          return void 0 !== q ? q.call(u, M, P) : A.call(String(M), u, P);
        }, function(t, M) {
          var ee = P(A, t, this, M, A !== u);
          if (ee.done) return ee.value;
          var ae = q(t), ie = String(this), se = te(ae, RegExp), le = ae.unicode, de = (ae.ignoreCase ? "i" : "") + (ae.multiline ? "m" : "") + (ae.unicode ? "u" : "") + (fe ? "y" : "g"), pe = new se(fe ? ae : "^(?:" + ae.source + ")", de), he = void 0 === M ? ce : M >>> 0;
          if (0 === he) return [];
          if (0 === ie.length) return null === oe(pe, ie) ? [ ie ] : [];
          for (var ye = 0, ge = 0, be = []; ge < ie.length; ) {
            pe.lastIndex = fe ? ge : 0;
            var ve, me = oe(pe, fe ? ie : ie.slice(ge));
            if (null === me || (ve = ue(ne(pe.lastIndex + (fe ? 0 : ge)), ie.length)) === ye) ge = re(ie, ge, le); else {
              if (be.push(ie.slice(ye, ge)), be.length === he) return be;
              for (var _e = 1; _e <= me.length - 1; _e++) if (be.push(me[_e]), be.length === he) return be;
              ge = ye = ve;
            }
          }
          return be.push(ie.slice(ye)), be;
        } ];
      }, !fe);
    },
    54989(t, u, P) {
      "use strict";
      var A, M = P(51605), q = P(97632).f, ee = P(33747), te = P(92588), re = P(71229), ne = P(44177), oe = P(6926), ae = "".startsWith, ie = Math.min, se = ne("startsWith");
      M({
        target: "String",
        proto: !0,
        forced: !!(oe || se || (A = q(String.prototype, "startsWith"), !A || A.writable)) && !se
      }, {
        startsWith: function startsWith(t) {
          var u = String(re(this));
          te(t);
          var P = ee(ie(arguments.length > 1 ? arguments[1] : void 0, u.length)), A = String(t);
          return ae ? ae.call(u, A, P) : u.slice(P, P + A.length) === A;
        }
      });
    },
    68329(t, u, P) {
      "use strict";
      var A = P(51605), M = P(69163).trim;
      A({
        target: "String",
        proto: !0,
        forced: P(89233)("trim")
      }, {
        trim: function trim() {
          return M(this);
        }
      });
    },
    27727(t, u, P) {
      P(91272)("asyncIterator");
    },
    40590(t, u, P) {
      "use strict";
      var A = P(51605), M = P(65077), q = P(30200), ee = P(31883), te = P(65335), re = P(43610).f, ne = P(84361), oe = q.Symbol;
      if (M && "function" == typeof oe && (!("description" in oe.prototype) || void 0 !== oe().description)) {
        var ae = {}, ie = function Symbol() {
          var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]), u = this instanceof ie ? new oe(t) : void 0 === t ? oe() : oe(t);
          return "" === t && (ae[u] = !0), u;
        };
        ne(ie, oe);
        var se = ie.prototype = oe.prototype;
        se.constructor = ie;
        var ue = se.toString, ce = "Symbol(test)" == String(oe("test")), fe = /^Symbol\((.*)\)[^)]+$/;
        re(se, "description", {
          configurable: !0,
          get: function description() {
            var t = te(this) ? this.valueOf() : this, u = ue.call(t);
            if (ee(ae, t)) return "";
            var P = ce ? u.slice(7, -1) : u.replace(fe, "$1");
            return "" === P ? void 0 : P;
          }
        }), A({
          global: !0,
          forced: !0
        }, {
          Symbol: ie
        });
      }
    },
    64216(t, u, P) {
      P(91272)("iterator");
    },
    63534(t, u, P) {
      "use strict";
      var A = P(51605), M = P(30200), q = P(56492), ee = P(6926), te = P(65077), re = P(61849), ne = P(5225), oe = P(92074), ae = P(31883), ie = P(18679), se = P(65335), ue = P(73938), ce = P(92612), fe = P(5476), le = P(50874), de = P(66843), pe = P(53105), he = P(91641), ye = P(64789), ge = P(56509), be = P(18916), ve = P(97632), me = P(43610), _e = P(9304), we = P(97712), Oe = P(97485), Se = P(50002), ke = P(25904), xe = P(67708), Pe = P(50665), je = P(31602), Ee = P(30802), Te = P(91272), Ae = P(75282), Re = P(99206), Ie = P(91344).forEach, Me = ke("hidden"), Fe = "Symbol", Ce = "prototype", De = je("toPrimitive"), Le = Re.set, Ge = Re.getterFor(Fe), Be = Object[Ce], Ne = M.Symbol, qe = q("JSON", "stringify"), Ue = ve.f, He = me.f, Ke = ge.f, ze = _e.f, We = Se("symbols"), $e = Se("op-symbols"), Je = Se("string-to-symbol-registry"), Ve = Se("symbol-to-string-registry"), Qe = Se("wks"), Xe = M.QObject, Ye = !Xe || !Xe[Ce] || !Xe[Ce].findChild, Ze = te && oe(function() {
        return 7 != pe(He({}, "a", {
          get: function() {
            return He(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? function(t, u, P) {
        var A = Ue(Be, u);
        A && delete Be[u], He(t, u, P), A && t !== Be && He(Be, u, A);
      } : He, wrap = function(t, u) {
        var P = We[t] = pe(Ne[Ce]);
        return Le(P, {
          type: Fe,
          tag: t,
          description: u
        }), te || (P.description = u), P;
      }, et = ne ? function(t) {
        return "symbol" == typeof t;
      } : function(t) {
        return Object(t) instanceof Ne;
      }, tt = function defineProperty(t, u, P) {
        t === Be && tt($e, u, P), ue(t);
        var A = le(u, !0);
        return ue(P), ae(We, A) ? (P.enumerable ? (ae(t, Me) && t[Me][A] && (t[Me][A] = !1), 
        P = pe(P, {
          enumerable: de(0, !1)
        })) : (ae(t, Me) || He(t, Me, de(1, {})), t[Me][A] = !0), Ze(t, A, P)) : He(t, A, P);
      }, rt = function defineProperties(t, u) {
        ue(t);
        var P = fe(u), A = he(P).concat(it(P));
        return Ie(A, function(u) {
          te && !nt.call(P, u) || tt(t, u, P[u]);
        }), t;
      }, nt = function propertyIsEnumerable(t) {
        var u = le(t, !0), P = ze.call(this, u);
        return !(this === Be && ae(We, u) && !ae($e, u)) && (!(P || !ae(this, u) || !ae(We, u) || ae(this, Me) && this[Me][u]) || P);
      }, ot = function getOwnPropertyDescriptor(t, u) {
        var P = fe(t), A = le(u, !0);
        if (P !== Be || !ae(We, A) || ae($e, A)) {
          var M = Ue(P, A);
          return !M || !ae(We, A) || ae(P, Me) && P[Me][A] || (M.enumerable = !0), M;
        }
      }, at = function getOwnPropertyNames(t) {
        var u = Ke(fe(t)), P = [];
        return Ie(u, function(t) {
          ae(We, t) || ae(xe, t) || P.push(t);
        }), P;
      }, it = function getOwnPropertySymbols(t) {
        var u = t === Be, P = Ke(u ? $e : fe(t)), A = [];
        return Ie(P, function(t) {
          !ae(We, t) || u && !ae(Be, t) || A.push(We[t]);
        }), A;
      };
      (re || (Ne = function Symbol() {
        if (this instanceof Ne) throw TypeError("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, u = Pe(t), setter = function(t) {
          this === Be && setter.call($e, t), ae(this, Me) && ae(this[Me], u) && (this[Me][u] = !1), 
          Ze(this, u, de(1, t));
        };
        return te && Ye && Ze(Be, u, {
          configurable: !0,
          set: setter
        }), wrap(u, t);
      }, Oe(Ne[Ce], "toString", function toString() {
        return Ge(this).tag;
      }), Oe(Ne, "withoutSetter", function(t) {
        return wrap(Pe(t), t);
      }), _e.f = nt, me.f = tt, ve.f = ot, ye.f = ge.f = at, be.f = it, Ee.f = function(t) {
        return wrap(je(t), t);
      }, te && (He(Ne[Ce], "description", {
        configurable: !0,
        get: function description() {
          return Ge(this).description;
        }
      }), ee || Oe(Be, "propertyIsEnumerable", nt, {
        unsafe: !0
      }))), A({
        global: !0,
        wrap: !0,
        forced: !re,
        sham: !re
      }, {
        Symbol: Ne
      }), Ie(he(Qe), function(t) {
        Te(t);
      }), A({
        target: Fe,
        stat: !0,
        forced: !re
      }, {
        for: function(t) {
          var u = String(t);
          if (ae(Je, u)) return Je[u];
          var P = Ne(u);
          return Je[u] = P, Ve[P] = u, P;
        },
        keyFor: function keyFor(t) {
          if (!et(t)) throw TypeError(t + " is not a symbol");
          if (ae(Ve, t)) return Ve[t];
        },
        useSetter: function() {
          Ye = !0;
        },
        useSimple: function() {
          Ye = !1;
        }
      }), A({
        target: "Object",
        stat: !0,
        forced: !re,
        sham: !te
      }, {
        create: function create(t, u) {
          return void 0 === u ? pe(t) : rt(pe(t), u);
        },
        defineProperty: tt,
        defineProperties: rt,
        getOwnPropertyDescriptor: ot
      }), A({
        target: "Object",
        stat: !0,
        forced: !re
      }, {
        getOwnPropertyNames: at,
        getOwnPropertySymbols: it
      }), A({
        target: "Object",
        stat: !0,
        forced: oe(function() {
          be.f(1);
        })
      }, {
        getOwnPropertySymbols: function getOwnPropertySymbols(t) {
          return be.f(ce(t));
        }
      }), qe) && A({
        target: "JSON",
        stat: !0,
        forced: !re || oe(function() {
          var t = Ne();
          return "[null]" != qe([ t ]) || "{}" != qe({
            a: t
          }) || "{}" != qe(Object(t));
        })
      }, {
        stringify: function stringify(t, u, P) {
          for (var A, M = [ t ], q = 1; arguments.length > q; ) M.push(arguments[q++]);
          if (A = u, (se(u) || void 0 !== t) && !et(t)) return ie(u) || (u = function(t, u) {
            if ("function" == typeof A && (u = A.call(this, t, u)), !et(u)) return u;
          }), M[1] = u, qe.apply(null, M);
        }
      });
      Ne[Ce][De] || we(Ne[Ce], De, Ne[Ce].valueOf), Ae(Ne, Fe), xe[Me] = !0;
    },
    36611(t, u, P) {
      P(91272)("toPrimitive");
    },
    10121(t, u, P) {
      "use strict";
      var A, M = P(30200), q = P(13075), ee = P(82014), te = P(92327), re = P(76784), ne = P(65335), oe = P(99206).enforce, ae = P(82886), ie = !M.ActiveXObject && "ActiveXObject" in M, se = Object.isExtensible, wrapper = function(t) {
        return function WeakMap() {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      }, ue = t.exports = te("WeakMap", wrapper, re);
      if (ae && ie) {
        A = re.getConstructor(wrapper, "WeakMap", !0), ee.REQUIRED = !0;
        var ce = ue.prototype, fe = ce.delete, le = ce.has, de = ce.get, pe = ce.set;
        q(ce, {
          delete: function(t) {
            if (ne(t) && !se(t)) {
              var u = oe(this);
              return u.frozen || (u.frozen = new A), fe.call(this, t) || u.frozen.delete(t);
            }
            return fe.call(this, t);
          },
          has: function has(t) {
            if (ne(t) && !se(t)) {
              var u = oe(this);
              return u.frozen || (u.frozen = new A), le.call(this, t) || u.frozen.has(t);
            }
            return le.call(this, t);
          },
          get: function get(t) {
            if (ne(t) && !se(t)) {
              var u = oe(this);
              return u.frozen || (u.frozen = new A), le.call(this, t) ? de.call(this, t) : u.frozen.get(t);
            }
            return de.call(this, t);
          },
          set: function set(t, u) {
            if (ne(t) && !se(t)) {
              var P = oe(this);
              P.frozen || (P.frozen = new A), le.call(this, t) ? pe.call(this, t, u) : P.frozen.set(t, u);
            } else pe.call(this, t, u);
            return this;
          }
        });
      }
    },
    58379(t, u, P) {
      var A = P(30200), M = P(5549), q = P(10516), ee = P(97712);
      for (var te in M) {
        var re = A[te], ne = re && re.prototype;
        if (ne && ne.forEach !== q) try {
          ee(ne, "forEach", q);
        } catch (t) {
          ne.forEach = q;
        }
      }
    },
    14602(t, u, P) {
      var A = P(30200), M = P(5549), q = P(18665), ee = P(97712), te = P(31602), re = te("iterator"), ne = te("toStringTag"), oe = q.values;
      for (var ae in M) {
        var ie = A[ae], se = ie && ie.prototype;
        if (se) {
          if (se[re] !== oe) try {
            ee(se, re, oe);
          } catch (t) {
            se[re] = oe;
          }
          if (se[ne] || ee(se, ne, ae), M[ae]) for (var ue in q) if (se[ue] !== q[ue]) try {
            ee(se, ue, q[ue]);
          } catch (t) {
            se[ue] = q[ue];
          }
        }
      }
    },
    18772(t, u, P) {
      var A = P(51605), M = P(30200), q = P(47061), ee = [].slice, wrap = function(t) {
        return function(u, P) {
          var A = arguments.length > 2, M = A ? ee.call(arguments, 2) : void 0;
          return t(A ? function() {
            ("function" == typeof u ? u : Function(u)).apply(this, M);
          } : u, P);
        };
      };
      A({
        global: !0,
        bind: !0,
        forced: /MSIE .\./.test(q)
      }, {
        setTimeout: wrap(M.setTimeout),
        setInterval: wrap(M.setInterval)
      });
    },
    60933(t, u, P) {
      "use strict";
      P(18665);
      var A = P(51605), M = P(56492), q = P(84516), ee = P(97485), te = P(13075), re = P(75282), ne = P(72147), oe = P(99206), ae = P(65190), ie = P(31883), se = P(46885), ue = P(83062), ce = P(73938), fe = P(65335), le = P(53105), de = P(66843), pe = P(79526), he = P(51898), ye = P(31602), ge = M("fetch"), be = M("Headers"), ve = ye("iterator"), me = "URLSearchParams", _e = me + "Iterator", we = oe.set, Oe = oe.getterFor(me), Se = oe.getterFor(_e), ke = /\+/g, xe = Array(4), percentSequence = function(t) {
        return xe[t - 1] || (xe[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"));
      }, percentDecode = function(t) {
        try {
          return decodeURIComponent(t);
        } catch (u) {
          return t;
        }
      }, deserialize = function(t) {
        var u = t.replace(ke, " "), P = 4;
        try {
          return decodeURIComponent(u);
        } catch (t) {
          for (;P; ) u = u.replace(percentSequence(P--), percentDecode);
          return u;
        }
      }, Pe = /[!'()~]|%20/g, je = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
      }, replacer = function(t) {
        return je[t];
      }, serialize = function(t) {
        return encodeURIComponent(t).replace(Pe, replacer);
      }, parseSearchParams = function(t, u) {
        if (u) for (var P, A, M = u.split("&"), q = 0; q < M.length; ) (P = M[q++]).length && (A = P.split("="), 
        t.push({
          key: deserialize(A.shift()),
          value: deserialize(A.join("="))
        }));
      }, updateSearchParams = function(t) {
        this.entries.length = 0, parseSearchParams(this.entries, t);
      }, validateArgumentsLength = function(t, u) {
        if (t < u) throw TypeError("Not enough arguments");
      }, Ee = ne(function Iterator(t, u) {
        we(this, {
          type: _e,
          iterator: pe(Oe(t).entries),
          kind: u
        });
      }, "Iterator", function next() {
        var t = Se(this), u = t.kind, P = t.iterator.next(), A = P.value;
        return P.done || (P.value = "keys" === u ? A.key : "values" === u ? A.value : [ A.key, A.value ]), 
        P;
      }), Te = function URLSearchParams() {
        ae(this, Te, me);
        var t, u, P, A, M, q, ee, te, re, ne = arguments.length > 0 ? arguments[0] : void 0, oe = [];
        if (we(this, {
          type: me,
          entries: oe,
          updateURL: function() {},
          updateSearchParams
        }), void 0 !== ne) if (fe(ne)) if ("function" == typeof (t = he(ne))) for (P = (u = t.call(ne)).next; !(A = P.call(u)).done; ) {
          if ((ee = (q = (M = pe(ce(A.value))).next).call(M)).done || (te = q.call(M)).done || !q.call(M).done) throw TypeError("Expected sequence with length 2");
          oe.push({
            key: ee.value + "",
            value: te.value + ""
          });
        } else for (re in ne) ie(ne, re) && oe.push({
          key: re,
          value: ne[re] + ""
        }); else parseSearchParams(oe, "string" == typeof ne ? "?" === ne.charAt(0) ? ne.slice(1) : ne : ne + "");
      }, Ae = Te.prototype;
      te(Ae, {
        append: function append(t, u) {
          validateArgumentsLength(arguments.length, 2);
          var P = Oe(this);
          P.entries.push({
            key: t + "",
            value: u + ""
          }), P.updateURL();
        },
        delete: function(t) {
          validateArgumentsLength(arguments.length, 1);
          for (var u = Oe(this), P = u.entries, A = t + "", M = 0; M < P.length; ) P[M].key === A ? P.splice(M, 1) : M++;
          u.updateURL();
        },
        get: function get(t) {
          validateArgumentsLength(arguments.length, 1);
          for (var u = Oe(this).entries, P = t + "", A = 0; A < u.length; A++) if (u[A].key === P) return u[A].value;
          return null;
        },
        getAll: function getAll(t) {
          validateArgumentsLength(arguments.length, 1);
          for (var u = Oe(this).entries, P = t + "", A = [], M = 0; M < u.length; M++) u[M].key === P && A.push(u[M].value);
          return A;
        },
        has: function has(t) {
          validateArgumentsLength(arguments.length, 1);
          for (var u = Oe(this).entries, P = t + "", A = 0; A < u.length; ) if (u[A++].key === P) return !0;
          return !1;
        },
        set: function set(t, u) {
          validateArgumentsLength(arguments.length, 1);
          for (var P, A = Oe(this), M = A.entries, q = !1, ee = t + "", te = u + "", re = 0; re < M.length; re++) (P = M[re]).key === ee && (q ? M.splice(re--, 1) : (q = !0, 
          P.value = te));
          q || M.push({
            key: ee,
            value: te
          }), A.updateURL();
        },
        sort: function sort() {
          var t, u, P, A = Oe(this), M = A.entries, q = M.slice();
          for (M.length = 0, P = 0; P < q.length; P++) {
            for (t = q[P], u = 0; u < P; u++) if (M[u].key > t.key) {
              M.splice(u, 0, t);
              break;
            }
            u === P && M.push(t);
          }
          A.updateURL();
        },
        forEach: function forEach(t) {
          for (var u, P = Oe(this).entries, A = se(t, arguments.length > 1 ? arguments[1] : void 0, 3), M = 0; M < P.length; ) A((u = P[M++]).value, u.key, this);
        },
        keys: function keys() {
          return new Ee(this, "keys");
        },
        values: function values() {
          return new Ee(this, "values");
        },
        entries: function entries() {
          return new Ee(this, "entries");
        }
      }, {
        enumerable: !0
      }), ee(Ae, ve, Ae.entries), ee(Ae, "toString", function toString() {
        for (var t, u = Oe(this).entries, P = [], A = 0; A < u.length; ) t = u[A++], P.push(serialize(t.key) + "=" + serialize(t.value));
        return P.join("&");
      }, {
        enumerable: !0
      }), re(Te, me), A({
        global: !0,
        forced: !q
      }, {
        URLSearchParams: Te
      }), q || "function" != typeof ge || "function" != typeof be || A({
        global: !0,
        enumerable: !0,
        forced: !0
      }, {
        fetch: function fetch(t) {
          var u, P, A, M = [ t ];
          return arguments.length > 1 && (fe(u = arguments[1]) && (P = u.body, ue(P) === me && ((A = u.headers ? new be(u.headers) : new be).has("content-type") || A.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), 
          u = le(u, {
            body: de(0, String(P)),
            headers: de(0, A)
          }))), M.push(u)), ge.apply(this, M);
        }
      }), t.exports = {
        URLSearchParams: Te,
        getState: Oe
      };
    },
    30789(t, u, P) {
      "use strict";
      P(29979);
      var A, M = P(51605), q = P(65077), ee = P(84516), te = P(30200), re = P(65318), ne = P(97485), oe = P(65190), ae = P(31883), ie = P(81688), se = P(51027), ue = P(77804).codeAt, ce = P(83150), fe = P(75282), le = P(60933), de = P(99206), pe = te.URL, he = le.URLSearchParams, ye = le.getState, ge = de.set, be = de.getterFor("URL"), ve = Math.floor, me = Math.pow, _e = "Invalid scheme", we = "Invalid host", Oe = "Invalid port", Se = /[A-Za-z]/, ke = /[\d+\-.A-Za-z]/, xe = /\d/, Pe = /^(0x|0X)/, je = /^[0-7]+$/, Ee = /^\d+$/, Te = /^[\dA-Fa-f]+$/, Ae = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, Re = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/, Ie = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, Me = /[\u0009\u000A\u000D]/g, parseHost = function(t, u) {
        var P, A, M;
        if ("[" == u.charAt(0)) {
          if ("]" != u.charAt(u.length - 1)) return we;
          if (!(P = parseIPv6(u.slice(1, -1)))) return we;
          t.host = P;
        } else if (isSpecial(t)) {
          if (u = ce(u), Ae.test(u)) return we;
          if (null === (P = parseIPv4(u))) return we;
          t.host = P;
        } else {
          if (Re.test(u)) return we;
          for (P = "", A = se(u), M = 0; M < A.length; M++) P += percentEncode(A[M], Fe);
          t.host = P;
        }
      }, parseIPv4 = function(t) {
        var u, P, A, M, q, ee, te, re = t.split(".");
        if (re.length && "" == re[re.length - 1] && re.pop(), (u = re.length) > 4) return t;
        for (P = [], A = 0; A < u; A++) {
          if ("" == (M = re[A])) return t;
          if (q = 10, M.length > 1 && "0" == M.charAt(0) && (q = Pe.test(M) ? 16 : 8, M = M.slice(8 == q ? 1 : 2)), 
          "" === M) ee = 0; else {
            if (!(10 == q ? Ee : 8 == q ? je : Te).test(M)) return t;
            ee = parseInt(M, q);
          }
          P.push(ee);
        }
        for (A = 0; A < u; A++) if (ee = P[A], A == u - 1) {
          if (ee >= me(256, 5 - u)) return null;
        } else if (ee > 255) return null;
        for (te = P.pop(), A = 0; A < P.length; A++) te += P[A] * me(256, 3 - A);
        return te;
      }, parseIPv6 = function(t) {
        var u, P, A, M, q, ee, te, re = [ 0, 0, 0, 0, 0, 0, 0, 0 ], ne = 0, oe = null, ae = 0, char = function() {
          return t.charAt(ae);
        };
        if (":" == char()) {
          if (":" != t.charAt(1)) return;
          ae += 2, oe = ++ne;
        }
        for (;char(); ) {
          if (8 == ne) return;
          if (":" != char()) {
            for (u = P = 0; P < 4 && Te.test(char()); ) u = 16 * u + parseInt(char(), 16), ae++, 
            P++;
            if ("." == char()) {
              if (0 == P) return;
              if (ae -= P, ne > 6) return;
              for (A = 0; char(); ) {
                if (M = null, A > 0) {
                  if (!("." == char() && A < 4)) return;
                  ae++;
                }
                if (!xe.test(char())) return;
                for (;xe.test(char()); ) {
                  if (q = parseInt(char(), 10), null === M) M = q; else {
                    if (0 == M) return;
                    M = 10 * M + q;
                  }
                  if (M > 255) return;
                  ae++;
                }
                re[ne] = 256 * re[ne] + M, 2 != ++A && 4 != A || ne++;
              }
              if (4 != A) return;
              break;
            }
            if (":" == char()) {
              if (ae++, !char()) return;
            } else if (char()) return;
            re[ne++] = u;
          } else {
            if (null !== oe) return;
            ae++, oe = ++ne;
          }
        }
        if (null !== oe) for (ee = ne - oe, ne = 7; 0 != ne && ee > 0; ) te = re[ne], re[ne--] = re[oe + ee - 1], 
        re[oe + --ee] = te; else if (8 != ne) return;
        return re;
      }, serializeHost = function(t) {
        var u, P, A, M;
        if ("number" == typeof t) {
          for (u = [], P = 0; P < 4; P++) u.unshift(t % 256), t = ve(t / 256);
          return u.join(".");
        }
        if ("object" == typeof t) {
          for (u = "", A = function(t) {
            for (var u = null, P = 1, A = null, M = 0, q = 0; q < 8; q++) 0 !== t[q] ? (M > P && (u = A, 
            P = M), A = null, M = 0) : (null === A && (A = q), ++M);
            return M > P && (u = A, P = M), u;
          }(t), P = 0; P < 8; P++) M && 0 === t[P] || (M && (M = !1), A === P ? (u += P ? ":" : "::", 
          M = !0) : (u += t[P].toString(16), P < 7 && (u += ":")));
          return "[" + u + "]";
        }
        return t;
      }, Fe = {}, Ce = ie({}, Fe, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
      }), De = ie({}, Ce, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1
      }), Le = ie({}, De, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
      }), percentEncode = function(t, u) {
        var P = ue(t, 0);
        return P > 32 && P < 127 && !ae(u, t) ? t : encodeURIComponent(t);
      }, Ge = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
      }, isSpecial = function(t) {
        return ae(Ge, t.scheme);
      }, includesCredentials = function(t) {
        return "" != t.username || "" != t.password;
      }, cannotHaveUsernamePasswordPort = function(t) {
        return !t.host || t.cannotBeABaseURL || "file" == t.scheme;
      }, isWindowsDriveLetter = function(t, u) {
        var P;
        return 2 == t.length && Se.test(t.charAt(0)) && (":" == (P = t.charAt(1)) || !u && "|" == P);
      }, startsWithWindowsDriveLetter = function(t) {
        var u;
        return t.length > 1 && isWindowsDriveLetter(t.slice(0, 2)) && (2 == t.length || "/" === (u = t.charAt(2)) || "\\" === u || "?" === u || "#" === u);
      }, shortenURLsPath = function(t) {
        var u = t.path, P = u.length;
        !P || "file" == t.scheme && 1 == P && isWindowsDriveLetter(u[0], !0) || u.pop();
      }, isSingleDot = function(t) {
        return "." === t || "%2e" === t.toLowerCase();
      }, isDoubleDot = function(t) {
        return ".." === (t = t.toLowerCase()) || "%2e." === t || ".%2e" === t || "%2e%2e" === t;
      }, Be = {}, Ne = {}, qe = {}, Ue = {}, He = {}, Ke = {}, ze = {}, We = {}, $e = {}, Je = {}, Ve = {}, Qe = {}, Xe = {}, Ye = {}, Ze = {}, et = {}, tt = {}, rt = {}, nt = {}, ot = {}, at = {}, parseURL = function(t, u, P, M) {
        var q, ee, te, re, ne = P || Be, oe = 0, ie = "", ue = !1, ce = !1, fe = !1;
        for (P || (t.scheme = "", t.username = "", t.password = "", t.host = null, t.port = null, 
        t.path = [], t.query = null, t.fragment = null, t.cannotBeABaseURL = !1, u = u.replace(Ie, "")), 
        u = u.replace(Me, ""), q = se(u); oe <= q.length; ) {
          switch (ee = q[oe], ne) {
           case Be:
            if (!ee || !Se.test(ee)) {
              if (P) return _e;
              ne = qe;
              continue;
            }
            ie += ee.toLowerCase(), ne = Ne;
            break;

           case Ne:
            if (ee && (ke.test(ee) || "+" == ee || "-" == ee || "." == ee)) ie += ee.toLowerCase(); else {
              if (":" != ee) {
                if (P) return _e;
                ie = "", ne = qe, oe = 0;
                continue;
              }
              if (P && (isSpecial(t) != ae(Ge, ie) || "file" == ie && (includesCredentials(t) || null !== t.port) || "file" == t.scheme && !t.host)) return;
              if (t.scheme = ie, P) return void (isSpecial(t) && Ge[t.scheme] == t.port && (t.port = null));
              ie = "", "file" == t.scheme ? ne = Ye : isSpecial(t) && M && M.scheme == t.scheme ? ne = Ue : isSpecial(t) ? ne = We : "/" == q[oe + 1] ? (ne = He, 
              oe++) : (t.cannotBeABaseURL = !0, t.path.push(""), ne = nt);
            }
            break;

           case qe:
            if (!M || M.cannotBeABaseURL && "#" != ee) return _e;
            if (M.cannotBeABaseURL && "#" == ee) {
              t.scheme = M.scheme, t.path = M.path.slice(), t.query = M.query, t.fragment = "", 
              t.cannotBeABaseURL = !0, ne = at;
              break;
            }
            ne = "file" == M.scheme ? Ye : Ke;
            continue;

           case Ue:
            if ("/" != ee || "/" != q[oe + 1]) {
              ne = Ke;
              continue;
            }
            ne = $e, oe++;
            break;

           case He:
            if ("/" == ee) {
              ne = Je;
              break;
            }
            ne = rt;
            continue;

           case Ke:
            if (t.scheme = M.scheme, ee == A) t.username = M.username, t.password = M.password, 
            t.host = M.host, t.port = M.port, t.path = M.path.slice(), t.query = M.query; else if ("/" == ee || "\\" == ee && isSpecial(t)) ne = ze; else if ("?" == ee) t.username = M.username, 
            t.password = M.password, t.host = M.host, t.port = M.port, t.path = M.path.slice(), 
            t.query = "", ne = ot; else {
              if ("#" != ee) {
                t.username = M.username, t.password = M.password, t.host = M.host, t.port = M.port, 
                t.path = M.path.slice(), t.path.pop(), ne = rt;
                continue;
              }
              t.username = M.username, t.password = M.password, t.host = M.host, t.port = M.port, 
              t.path = M.path.slice(), t.query = M.query, t.fragment = "", ne = at;
            }
            break;

           case ze:
            if (!isSpecial(t) || "/" != ee && "\\" != ee) {
              if ("/" != ee) {
                t.username = M.username, t.password = M.password, t.host = M.host, t.port = M.port, 
                ne = rt;
                continue;
              }
              ne = Je;
            } else ne = $e;
            break;

           case We:
            if (ne = $e, "/" != ee || "/" != ie.charAt(oe + 1)) continue;
            oe++;
            break;

           case $e:
            if ("/" != ee && "\\" != ee) {
              ne = Je;
              continue;
            }
            break;

           case Je:
            if ("@" == ee) {
              ue && (ie = "%40" + ie), ue = !0, te = se(ie);
              for (var le = 0; le < te.length; le++) {
                var de = te[le];
                if (":" != de || fe) {
                  var pe = percentEncode(de, Le);
                  fe ? t.password += pe : t.username += pe;
                } else fe = !0;
              }
              ie = "";
            } else if (ee == A || "/" == ee || "?" == ee || "#" == ee || "\\" == ee && isSpecial(t)) {
              if (ue && "" == ie) return "Invalid authority";
              oe -= se(ie).length + 1, ie = "", ne = Ve;
            } else ie += ee;
            break;

           case Ve:
           case Qe:
            if (P && "file" == t.scheme) {
              ne = et;
              continue;
            }
            if (":" != ee || ce) {
              if (ee == A || "/" == ee || "?" == ee || "#" == ee || "\\" == ee && isSpecial(t)) {
                if (isSpecial(t) && "" == ie) return we;
                if (P && "" == ie && (includesCredentials(t) || null !== t.port)) return;
                if (re = parseHost(t, ie)) return re;
                if (ie = "", ne = tt, P) return;
                continue;
              }
              "[" == ee ? ce = !0 : "]" == ee && (ce = !1), ie += ee;
            } else {
              if ("" == ie) return we;
              if (re = parseHost(t, ie)) return re;
              if (ie = "", ne = Xe, P == Qe) return;
            }
            break;

           case Xe:
            if (!xe.test(ee)) {
              if (ee == A || "/" == ee || "?" == ee || "#" == ee || "\\" == ee && isSpecial(t) || P) {
                if ("" != ie) {
                  var he = parseInt(ie, 10);
                  if (he > 65535) return Oe;
                  t.port = isSpecial(t) && he === Ge[t.scheme] ? null : he, ie = "";
                }
                if (P) return;
                ne = tt;
                continue;
              }
              return Oe;
            }
            ie += ee;
            break;

           case Ye:
            if (t.scheme = "file", "/" == ee || "\\" == ee) ne = Ze; else {
              if (!M || "file" != M.scheme) {
                ne = rt;
                continue;
              }
              if (ee == A) t.host = M.host, t.path = M.path.slice(), t.query = M.query; else if ("?" == ee) t.host = M.host, 
              t.path = M.path.slice(), t.query = "", ne = ot; else {
                if ("#" != ee) {
                  startsWithWindowsDriveLetter(q.slice(oe).join("")) || (t.host = M.host, t.path = M.path.slice(), 
                  shortenURLsPath(t)), ne = rt;
                  continue;
                }
                t.host = M.host, t.path = M.path.slice(), t.query = M.query, t.fragment = "", ne = at;
              }
            }
            break;

           case Ze:
            if ("/" == ee || "\\" == ee) {
              ne = et;
              break;
            }
            M && "file" == M.scheme && !startsWithWindowsDriveLetter(q.slice(oe).join("")) && (isWindowsDriveLetter(M.path[0], !0) ? t.path.push(M.path[0]) : t.host = M.host), 
            ne = rt;
            continue;

           case et:
            if (ee == A || "/" == ee || "\\" == ee || "?" == ee || "#" == ee) {
              if (!P && isWindowsDriveLetter(ie)) ne = rt; else if ("" == ie) {
                if (t.host = "", P) return;
                ne = tt;
              } else {
                if (re = parseHost(t, ie)) return re;
                if ("localhost" == t.host && (t.host = ""), P) return;
                ie = "", ne = tt;
              }
              continue;
            }
            ie += ee;
            break;

           case tt:
            if (isSpecial(t)) {
              if (ne = rt, "/" != ee && "\\" != ee) continue;
            } else if (P || "?" != ee) if (P || "#" != ee) {
              if (ee != A && (ne = rt, "/" != ee)) continue;
            } else t.fragment = "", ne = at; else t.query = "", ne = ot;
            break;

           case rt:
            if (ee == A || "/" == ee || "\\" == ee && isSpecial(t) || !P && ("?" == ee || "#" == ee)) {
              if (isDoubleDot(ie) ? (shortenURLsPath(t), "/" == ee || "\\" == ee && isSpecial(t) || t.path.push("")) : isSingleDot(ie) ? "/" == ee || "\\" == ee && isSpecial(t) || t.path.push("") : ("file" == t.scheme && !t.path.length && isWindowsDriveLetter(ie) && (t.host && (t.host = ""), 
              ie = ie.charAt(0) + ":"), t.path.push(ie)), ie = "", "file" == t.scheme && (ee == A || "?" == ee || "#" == ee)) for (;t.path.length > 1 && "" === t.path[0]; ) t.path.shift();
              "?" == ee ? (t.query = "", ne = ot) : "#" == ee && (t.fragment = "", ne = at);
            } else ie += percentEncode(ee, De);
            break;

           case nt:
            "?" == ee ? (t.query = "", ne = ot) : "#" == ee ? (t.fragment = "", ne = at) : ee != A && (t.path[0] += percentEncode(ee, Fe));
            break;

           case ot:
            P || "#" != ee ? ee != A && ("'" == ee && isSpecial(t) ? t.query += "%27" : t.query += "#" == ee ? "%23" : percentEncode(ee, Fe)) : (t.fragment = "", 
            ne = at);
            break;

           case at:
            ee != A && (t.fragment += percentEncode(ee, Ce));
          }
          oe++;
        }
      }, it = function URL(t) {
        var u, P, A = oe(this, it, "URL"), M = arguments.length > 1 ? arguments[1] : void 0, ee = String(t), te = ge(A, {
          type: "URL"
        });
        if (void 0 !== M) if (M instanceof it) u = be(M); else if (P = parseURL(u = {}, String(M))) throw TypeError(P);
        if (P = parseURL(te, ee, null, u)) throw TypeError(P);
        var re = te.searchParams = new he, ne = ye(re);
        ne.updateSearchParams(te.query), ne.updateURL = function() {
          te.query = String(re) || null;
        }, q || (A.href = serializeURL.call(A), A.origin = getOrigin.call(A), A.protocol = getProtocol.call(A), 
        A.username = getUsername.call(A), A.password = getPassword.call(A), A.host = getHost.call(A), 
        A.hostname = getHostname.call(A), A.port = getPort.call(A), A.pathname = getPathname.call(A), 
        A.search = getSearch.call(A), A.searchParams = getSearchParams.call(A), A.hash = getHash.call(A));
      }, st = it.prototype, serializeURL = function() {
        var t = be(this), u = t.scheme, P = t.username, A = t.password, M = t.host, q = t.port, ee = t.path, te = t.query, re = t.fragment, ne = u + ":";
        return null !== M ? (ne += "//", includesCredentials(t) && (ne += P + (A ? ":" + A : "") + "@"), 
        ne += serializeHost(M), null !== q && (ne += ":" + q)) : "file" == u && (ne += "//"), 
        ne += t.cannotBeABaseURL ? ee[0] : ee.length ? "/" + ee.join("/") : "", null !== te && (ne += "?" + te), 
        null !== re && (ne += "#" + re), ne;
      }, getOrigin = function() {
        var t = be(this), u = t.scheme, P = t.port;
        if ("blob" == u) try {
          return new URL(u.path[0]).origin;
        } catch (t) {
          return "null";
        }
        return "file" != u && isSpecial(t) ? u + "://" + serializeHost(t.host) + (null !== P ? ":" + P : "") : "null";
      }, getProtocol = function() {
        return be(this).scheme + ":";
      }, getUsername = function() {
        return be(this).username;
      }, getPassword = function() {
        return be(this).password;
      }, getHost = function() {
        var t = be(this), u = t.host, P = t.port;
        return null === u ? "" : null === P ? serializeHost(u) : serializeHost(u) + ":" + P;
      }, getHostname = function() {
        var t = be(this).host;
        return null === t ? "" : serializeHost(t);
      }, getPort = function() {
        var t = be(this).port;
        return null === t ? "" : String(t);
      }, getPathname = function() {
        var t = be(this), u = t.path;
        return t.cannotBeABaseURL ? u[0] : u.length ? "/" + u.join("/") : "";
      }, getSearch = function() {
        var t = be(this).query;
        return t ? "?" + t : "";
      }, getSearchParams = function() {
        return be(this).searchParams;
      }, getHash = function() {
        var t = be(this).fragment;
        return t ? "#" + t : "";
      }, accessorDescriptor = function(t, u) {
        return {
          get: t,
          set: u,
          configurable: !0,
          enumerable: !0
        };
      };
      if (q && re(st, {
        href: accessorDescriptor(serializeURL, function(t) {
          var u = be(this), P = String(t), A = parseURL(u, P);
          if (A) throw TypeError(A);
          ye(u.searchParams).updateSearchParams(u.query);
        }),
        origin: accessorDescriptor(getOrigin),
        protocol: accessorDescriptor(getProtocol, function(t) {
          var u = be(this);
          parseURL(u, String(t) + ":", Be);
        }),
        username: accessorDescriptor(getUsername, function(t) {
          var u = be(this), P = se(String(t));
          if (!cannotHaveUsernamePasswordPort(u)) {
            u.username = "";
            for (var A = 0; A < P.length; A++) u.username += percentEncode(P[A], Le);
          }
        }),
        password: accessorDescriptor(getPassword, function(t) {
          var u = be(this), P = se(String(t));
          if (!cannotHaveUsernamePasswordPort(u)) {
            u.password = "";
            for (var A = 0; A < P.length; A++) u.password += percentEncode(P[A], Le);
          }
        }),
        host: accessorDescriptor(getHost, function(t) {
          var u = be(this);
          u.cannotBeABaseURL || parseURL(u, String(t), Ve);
        }),
        hostname: accessorDescriptor(getHostname, function(t) {
          var u = be(this);
          u.cannotBeABaseURL || parseURL(u, String(t), Qe);
        }),
        port: accessorDescriptor(getPort, function(t) {
          var u = be(this);
          cannotHaveUsernamePasswordPort(u) || ("" == (t = String(t)) ? u.port = null : parseURL(u, t, Xe));
        }),
        pathname: accessorDescriptor(getPathname, function(t) {
          var u = be(this);
          u.cannotBeABaseURL || (u.path = [], parseURL(u, t + "", tt));
        }),
        search: accessorDescriptor(getSearch, function(t) {
          var u = be(this);
          "" == (t = String(t)) ? u.query = null : ("?" == t.charAt(0) && (t = t.slice(1)), 
          u.query = "", parseURL(u, t, ot)), ye(u.searchParams).updateSearchParams(u.query);
        }),
        searchParams: accessorDescriptor(getSearchParams),
        hash: accessorDescriptor(getHash, function(t) {
          var u = be(this);
          "" != (t = String(t)) ? ("#" == t.charAt(0) && (t = t.slice(1)), u.fragment = "", 
          parseURL(u, t, at)) : u.fragment = null;
        })
      }), ne(st, "toJSON", function toJSON() {
        return serializeURL.call(this);
      }, {
        enumerable: !0
      }), ne(st, "toString", function toString() {
        return serializeURL.call(this);
      }, {
        enumerable: !0
      }), pe) {
        var ut = pe.createObjectURL, ct = pe.revokeObjectURL;
        ut && ne(it, "createObjectURL", function createObjectURL(t) {
          return ut.apply(pe, arguments);
        }), ct && ne(it, "revokeObjectURL", function revokeObjectURL(t) {
          return ct.apply(pe, arguments);
        });
      }
      fe(it, "URL"), M({
        global: !0,
        forced: !ee,
        sham: !q
      }, {
        URL: it
      });
    },
    58565(t, u, P) {
      "use strict";
      P(51605)({
        target: "URL",
        proto: !0,
        enumerable: !0
      }, {
        toJSON: function toJSON() {
          return URL.prototype.toString.call(this);
        }
      });
    },
    14744(t) {
      "use strict";
      var u = function isMergeableObject(t) {
        return function isNonNullObject(t) {
          return !!t && "object" == typeof t;
        }(t) && !function isSpecial(t) {
          var u = Object.prototype.toString.call(t);
          return "[object RegExp]" === u || "[object Date]" === u || function isReactElement(t) {
            return t.$$typeof === P;
          }(t);
        }(t);
      };
      var P = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
      function cloneUnlessOtherwiseSpecified(t, u) {
        return !1 !== u.clone && u.isMergeableObject(t) ? deepmerge(function emptyTarget(t) {
          return Array.isArray(t) ? [] : {};
        }(t), t, u) : t;
      }
      function defaultArrayMerge(t, u, P) {
        return t.concat(u).map(function(t) {
          return cloneUnlessOtherwiseSpecified(t, P);
        });
      }
      function getKeys(t) {
        return Object.keys(t).concat(function getEnumerableOwnPropertySymbols(t) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(u) {
            return Object.propertyIsEnumerable.call(t, u);
          }) : [];
        }(t));
      }
      function propertyIsOnObject(t, u) {
        try {
          return u in t;
        } catch (t) {
          return !1;
        }
      }
      function mergeObject(t, u, P) {
        var A = {};
        return P.isMergeableObject(t) && getKeys(t).forEach(function(u) {
          A[u] = cloneUnlessOtherwiseSpecified(t[u], P);
        }), getKeys(u).forEach(function(M) {
          (function propertyIsUnsafe(t, u) {
            return propertyIsOnObject(t, u) && !(Object.hasOwnProperty.call(t, u) && Object.propertyIsEnumerable.call(t, u));
          })(t, M) || (propertyIsOnObject(t, M) && P.isMergeableObject(u[M]) ? A[M] = function getMergeFunction(t, u) {
            if (!u.customMerge) return deepmerge;
            var P = u.customMerge(t);
            return "function" == typeof P ? P : deepmerge;
          }(M, P)(t[M], u[M], P) : A[M] = cloneUnlessOtherwiseSpecified(u[M], P));
        }), A;
      }
      function deepmerge(t, P, A) {
        (A = A || {}).arrayMerge = A.arrayMerge || defaultArrayMerge, A.isMergeableObject = A.isMergeableObject || u, 
        A.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
        var M = Array.isArray(P);
        return M === Array.isArray(t) ? M ? A.arrayMerge(t, P, A) : mergeObject(t, P, A) : cloneUnlessOtherwiseSpecified(P, A);
      }
      deepmerge.all = function deepmergeAll(t, u) {
        if (!Array.isArray(t)) throw new Error("first argument should be an array");
        return t.reduce(function(t, P) {
          return deepmerge(t, P, u);
        }, {});
      };
      var A = deepmerge;
      t.exports = A;
    },
    14117(t, u, P) {
      !function(t, u) {
        "use strict";
        function _interopNamespace(t) {
          if (t && t.__esModule) return t;
          var u = Object.create(null);
          return t && Object.keys(t).forEach(function(P) {
            if ("default" !== P) {
              var A = Object.getOwnPropertyDescriptor(t, P);
              Object.defineProperty(u, P, A.get ? A : {
                enumerable: !0,
                get: function() {
                  return t[P];
                }
              });
            }
          }), u.default = t, Object.freeze(u);
        }
        var P = _interopNamespace(u);
        const generateUUID = () => {
          let t = (new Date).getTime();
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(u) {
            const P = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16), ("x" === u ? P : 7 & P | 8).toString(16);
          });
        }, encodeCFIString = t => {
          const u = [ "!", ":", "/" ];
          let P = "";
          for (let A = 0; A < t.length; A++) -1 === u.indexOf(t[A]) ? P += encodeURIComponent(t[A]) : P += t[A];
          return P;
        }, A = [ "^", "[", "]", "(", ")", ",", ";", "=" ], escapeCFIString = t => {
          let u = "";
          for (let P = 0; P < t.length; P++) -1 !== A.indexOf(t[P]) ? u += `^${t[P]}` : u += t[P];
          return u;
        }, unescapeCFIString = t => {
          if (null === t) return t;
          let u = "";
          for (let P = 0; P < t.length; P++) "^" === t[P] && -1 !== A.indexOf(t[P + 1]) ? (u += t[P + 1], 
          P++) : u += t[P];
          return u;
        }, escapeRegExp = t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), M = P.string("/"), q = P.string("!"), ee = P.digits.map(Number), te = P.seqMap(P.digits, P.string("."), P.digits, (t, u, P) => Number(`${t}.${P}`)).or(ee), re = P.string("[").chain(function(t) {
          let u = !1;
          return P.takeWhile(function(t) {
            return u ? (u = !1, !0) : "]" !== t && (u = "^" === t, !0);
          }).skip(P.string("]"));
        }), parseCharOffsetAssertion = t => {
          if (null === t) return t;
          if ("," === t[0]) return {
            precedingText: "",
            trailingText: unescapeCFIString(t.slice(1)) || ""
          };
          const u = t.search(/[^^],/);
          return -1 === u ? {
            precedingText: unescapeCFIString(t) || "",
            trailingText: ""
          } : {
            precedingText: unescapeCFIString(t.slice(0, u + 1)) || "",
            trailingText: unescapeCFIString(t.slice(u + 2)) || ""
          };
        }, ne = P.seqMap(P.string(":"), ee, re.fallback(null), (t, u, P) => ({
          offset: u,
          assert: parseCharOffsetAssertion(P)
        })), oe = P.seqMap(P.string("@"), te, P.string(":"), te, (t, u, P, A) => ({
          x: u,
          y: A
        })), ae = P.string("~").then(te), ie = P.seqMap(M, te, re.fallback(null), (t, u, P) => ({
          step: u,
          assert: unescapeCFIString(P)
        })), se = P.seqMap(ie.many(), q, (t, u) => new CFI({
          steps: t
        })), ue = P.seqMap(se.fallback(null), ie.many(), ne.fallback(null), ae.fallback(null), oe.fallback(null), (t, u, P, A, M) => new CFI({
          contentDoc: t,
          steps: u,
          charOffset: P,
          spatialOffset: M,
          temporalOffset: A
        })), ce = P.seqMap(ue, P.string(","), ue, P.string(","), ue, (t, u, P, A, M) => {
          const q = t.toString(), ee = P.toString(), te = M.toString();
          if (!q || void 0 === P || void 0 === M) throw new Error("cfi is not a valid range (wrong number of pieces)");
          if (1 === CFI.compare(P, M)) throw new Error("cfi is not a valid range (start is after end)");
          return new CFIRange({
            base: t,
            start: parseCfi(q + ee),
            end: parseCfi(q + te)
          });
        }), decodeIfNecessary = function(t, u = !1) {
          if (u && t.match(/\^|\[|\]|;|=/)) return t;
          if (t.match(/\^|\[|\]|;|=/)) return t;
          try {
            return decodeURIComponent(t);
          } catch (u) {
            return t;
          }
        }, parseOrThrow = function(t, u) {
          const P = u.parse(t);
          if (!P.status) throw new Error(`${t} does not look valid`);
          return P.value;
        }, parseCfi = function(t) {
          return parseOrThrow(decodeIfNecessary(t), ue);
        }, parseCfiRange = function(t) {
          return parseOrThrow(decodeIfNecessary(t), ce);
        };
        var fe;
        !function(t) {
          t[t.LESS_THAN = -1] = "LESS_THAN", t[t.EQUAL = 0] = "EQUAL", t[t.GREATER_THAN = 1] = "GREATER_THAN";
        }(fe || (fe = {}));
        class Step {
          constructor({step: t, assert: u}) {
            this.step = t, this.assert = u;
          }
          static equals(t, u, P = {
            checkAssertions: !1
          }) {
            return P.checkAssertions && t.assert && u.assert ? t.assert === u.assert : t.step === u.step;
          }
          static compare(t, u) {
            return t.step < u.step ? fe.LESS_THAN : t.step > u.step ? fe.GREATER_THAN : fe.EQUAL;
          }
        }
        const getCollectedStep = (t, u) => {
          let P = t[u], A = u;
          for (;!isNaN(parseInt(t[A + 1])); ) P += t[A + 1], A++;
          return P;
        }, getAssertionEndIndex = (t, u) => {
          let P = !1;
          for (let A = u + 1; A < t.length; A++) if (P) P = !1; else if ("^" === t[A]) P = !0; else if ("]" === t[A]) return A;
          return t.length - 1;
        };
        class CFIRange {
          constructor({base: t, start: u, end: P}) {
            if (this.toString = (t = {}) => {
              const u = this.base.toString(t);
              return `${u},${this.start.toString(t).slice(u.length)},${this.end.toString(t).slice(u.length)}`;
            }, this.getBase = () => this.base, this.getStart = () => this.start, this.getEnd = () => this.end, 
            t) this.base = t, this.start = u, this.end = P; else {
              const t = u.toString(), A = P.toString();
              let M, q = "";
              for (M = 0; M < Math.min(t.length, A.length); M) {
                if ("[" === t[M]) {
                  const u = getAssertionEndIndex(t, M), P = t.slice(M, u + 1);
                  if (P !== A.slice(M, u + 1)) break;
                  q += P, M = u + 1;
                  continue;
                }
                const u = getCollectedStep(t, M), P = getCollectedStep(A, M);
                if (u === P && -1 !== [ ":", "@", "~" ].indexOf(t[M])) {
                  q += t[M];
                  break;
                }
                if (u !== P) break;
                q += u, M += u.length;
              }
              -1 !== [ "/", ":", "@", "~", "!" ].indexOf(q[q.length - 1]) && (q = q.slice(0, -1));
              const ee = parseCfiRange(`${q},${t.slice(q.length)},${A.slice(q.length)}`);
              this.base = ee.base, this.start = ee.start, this.end = ee.end;
            }
          }
        }
        class CFI {
          constructor({steps: t = [], contentDoc: u, charOffset: P, spatialOffset: A, temporalOffset: M}) {
            this.toString = (t = {}) => {
              const u = {
                assertions: !0,
                uriEncoded: !1
              }, P = Object.assign(Object.assign({}, u), t);
              let A = "";
              if (this.contentDoc && (A = this.contentDoc.toString(Object.assign(Object.assign({}, t), {
                uriEncoded: !1
              })) + "!"), A = this.steps.reduce((t, {step: u, assert: A}) => (t += `/${u}`, P.assertions && A && (t += `[${A}]`), 
              t), A), this.charOffset && (A += `:${this.charOffset.offset}`, P.assertions && this.charOffset.assert && (A += `[${escapeCFIString(this.charOffset.assert.precedingText || "")}${this.charOffset.assert.trailingText ? `,${escapeCFIString(this.charOffset.assert.trailingText)}` : ""}]`)), 
              this.temporalOffset && (A += `~${this.temporalOffset}`), this.spatialOffset) {
                const t = this.spatialOffset;
                A += `@${t.x}:${t.y}`;
              }
              return P.uriEncoded && (A = encodeCFIString(A)), A;
            }, this.steps = t.map(t => new Step(t)), u && (this.contentDoc = new CFI(u)), this.charOffset = P, 
            this.spatialOffset = A, this.temporalOffset = M || null;
          }
          static equals(t, u, P = {
            compareOffsets: !1,
            checkAssertions: !1
          }) {
            var A, M, q, ee;
            if (t.contentDoc && u.contentDoc) {
              if (!CFI.equals(t.contentDoc, u.contentDoc, P)) return !1;
            } else if (t.contentDoc && !u.contentDoc || !t.contentDoc && u.contentDoc) return !1;
            for (let A = 0; A < t.steps.length; A++) {
              if (!u.steps[A]) return !1;
              if (!Step.equals(t.steps[A], u.steps[A], P)) return !1;
            }
            if (t.steps.length < u.steps.length) return !1;
            if (P.compareOffsets) {
              if (t.charOffset && u.charOffset) return P.checkAssertions ? (null === (A = t.charOffset.assert) || void 0 === A ? void 0 : A.precedingText) === (null === (M = u.charOffset.assert) || void 0 === M ? void 0 : M.precedingText) && (null === (q = t.charOffset.assert) || void 0 === q ? void 0 : q.trailingText) === (null === (ee = u.charOffset.assert) || void 0 === ee ? void 0 : ee.trailingText) : t.charOffset.offset === u.charOffset.offset;
              if (t.charOffset || u.charOffset) return !1;
              if (t.spatialOffset && u.spatialOffset) return t.spatialOffset.x === u.spatialOffset.x && t.spatialOffset.y === u.spatialOffset.y;
              if (t.spatialOffset || u.spatialOffset) return !1;
              if (null !== t.temporalOffset && null !== u.temporalOffset) return t.temporalOffset === u.temporalOffset;
              if (null !== t.temporalOffset || null !== u.temporalOffset) return !1;
            }
            return !0;
          }
          static compare(t, u, P = {
            compareOffsets: !1
          }) {
            if (t.contentDoc && u.contentDoc) {
              const P = CFI.compare(t.contentDoc, u.contentDoc);
              if (P !== fe.EQUAL) return P;
            }
            for (let P = 0; P < t.steps.length; P++) {
              if (!u.steps[P]) return fe.GREATER_THAN;
              const A = Step.compare(t.steps[P], u.steps[P]);
              if (A !== fe.EQUAL) return A;
            }
            if (t.steps.length < u.steps.length) return fe.LESS_THAN;
            if (P.compareOffsets) {
              if (t.charOffset && u.charOffset) {
                if (t.charOffset.offset === u.charOffset.offset) return fe.EQUAL;
                if (t.charOffset.offset < u.charOffset.offset) return fe.LESS_THAN;
                if (t.charOffset.offset > u.charOffset.offset) return fe.GREATER_THAN;
              } else {
                if (t.charOffset && !u.charOffset) return fe.GREATER_THAN;
                if (!t.charOffset && u.charOffset) return fe.LESS_THAN;
              }
              if (null !== t.temporalOffset && null !== u.temporalOffset) {
                if (t.temporalOffset === u.temporalOffset) return fe.EQUAL;
                if (t.temporalOffset < u.temporalOffset) return fe.LESS_THAN;
                if (t.temporalOffset > u.temporalOffset) return fe.GREATER_THAN;
              } else {
                if (null !== t.temporalOffset && null === u.temporalOffset) return fe.GREATER_THAN;
                if (null === t.temporalOffset && null !== u.temporalOffset) return fe.LESS_THAN;
              }
              if (t.spatialOffset && u.spatialOffset) {
                if (t.spatialOffset.x === u.spatialOffset.x && t.spatialOffset.y === u.spatialOffset.y) return fe.EQUAL;
                if (t.spatialOffset.y > u.spatialOffset.y) return fe.GREATER_THAN;
                if (t.spatialOffset.y < u.spatialOffset.y) return fe.LESS_THAN;
                if (t.spatialOffset.x < u.spatialOffset.x) return fe.LESS_THAN;
                if (t.spatialOffset.x > u.spatialOffset.x) return fe.GREATER_THAN;
              } else {
                if (t.spatialOffset && !u.spatialOffset) return fe.GREATER_THAN;
                if (!t.spatialOffset && u.spatialOffset) return fe.LESS_THAN;
              }
            }
            return fe.EQUAL;
          }
        }
        const le = "vstignore", de = "vstskip", pe = "data-markup-id", he = "vstdonthighlight", ye = "vstskipassertion", shouldIgnoreNode = (t, u) => u.ignoreFn ? u.ignoreFn(t, u) : hasClass(t, le), shouldSkipAssertion = t => hasClass(t, ye), isMathNode = (t, u) => {
          var P;
          return !isTextNode(t) && ("http://www.w3.org/1998/Math/MathML" === t.namespaceURI && "math" === t.localName || "http://www.w3.org/2000/svg" === t.namespaceURI && "svg" === t.localName || "MathJax_Message" === t.getAttribute("id") || !!hasClass(t, "MathJax") || !(!t.getAttribute || "math" !== t.getAttribute("role")) || "MathJax_SVG_Hidden" === (null === (P = t.children[0]) || void 0 === P ? void 0 : P.getAttribute("id")));
        }, shouldSkipNode = (t, u) => u.skipFn ? u.skipFn(t, u) : t.nodeType === Node.COMMENT_NODE || hasClass(t, de) || isMathNode(t), hasClass = (t, u) => t.classList && t.classList.contains(u), shouldMarkupTextNode = t => {
          var u, P, A;
          let M = !0;
          const q = [ "mtext", "mi", "mn", "mo" ], ee = [ "table", "tr", "thead", "tbody", "tfoot", "colgroup", "col" ], te = (null === (u = t.parentElement) || void 0 === u ? void 0 : u.localName) || (null === (P = t.parentElement) || void 0 === P ? void 0 : P.nodeName);
          return "http://www.w3.org/1998/Math/MathML" === (null === (A = t.parentElement) || void 0 === A ? void 0 : A.namespaceURI) && te && -1 === q.indexOf(te.toLowerCase()) && (M = !1), 
          te && -1 !== ee.indexOf(te.toLowerCase()) && (M = !1), M;
        }, getCFIForNode = (t, u) => parseCfi(getCFIStringForNode(t, u || {})), getCFIStringForNode = (t, u) => {
          const P = u || {}, A = getParent(t, P);
          if (A) {
            const u = getStepForNode(t, P);
            if (u) {
              let t = `/${u.step}`;
              return u.assert && (t = `${t}[${escapeCFIString(u.assert)}]`), getCFIStringForNode(A, P) + t;
            }
            return "";
          }
          return "";
        }, isValidStep = (t, u) => 1 === t.nodeType && !(shouldSkipNode(t, u) || shouldIgnoreNode(t, u)), getParent = (t, u) => {
          if (!t) return null;
          let P = t.parentElement;
          for (;P && !isValidStep(P, u); ) P = P.parentElement;
          return P;
        }, getChildren = (t, u) => Array.from(t.childNodes).reduce((t, P) => 3 === P.nodeType ? P.textContent && P.textContent.replace(/\s/g, "").length ? t.concat([ P ]) : t : 1 === P.nodeType ? shouldSkipNode(P, u) ? t : shouldIgnoreNode(P, u) ? t.concat(getChildren(P, u)) : t.concat([ P ]) : t, []), getStepForNode = (t, u) => {
          const P = getParent(t, u);
          if (P) {
            const A = getChildren(P, u);
            let M = 0;
            for (let u = 0; u < A.length; u++) {
              const P = A[u];
              if (1 === P.nodeType ? (M++, M % 2 != 0 && M++) : 3 === P.nodeType && M % 2 == 0 && M++, 
              P === t) {
                const u = t;
                return new Step({
                  step: M,
                  assert: shouldSkipAssertion(u) ? void 0 : u.id
                });
              }
            }
            return null;
          }
          return null;
        }, getChildAtStep = (t, u, P) => {
          if (!t) return null;
          let A = 0;
          const M = t.ownerDocument, q = getChildren(t, P).find(t => (1 === t.nodeType ? (A++, 
          A % 2 != 0 && A++) : isTextNode(t) && A % 2 == 0 && A++, A === u.step)) || null;
          return !u.assert || q && q.id === u.assert ? q : (null == M ? void 0 : M.getElementById(u.assert)) || null;
        }, findPositionalNode = (t, u) => {
          if (!t) return null;
          const P = t.nodeType === Node.ELEMENT_NODE ? t : t.parentElement;
          if (!P) return null;
          if (P.getClientRects().length && !shouldSkipNode(P, u)) return P;
          let A = P;
          for (A = P; A; ) if (A = A.previousElementSibling, A && !shouldSkipNode(A, u) && A.getClientRects().length > 0) return A;
          for (A = P; A; ) if (A = A.nextElementSibling, A && !shouldSkipNode(A, u) && A.getClientRects().length > 0) return A;
          return findPositionalNode(P.parentElement, u);
        }, getNodeForCFI = (t, u, P) => {
          const A = P || {};
          let M = t.firstElementChild;
          for (let t = 0; t < u.steps.length; t++) {
            const P = getChildAtStep(M, u.steps[t], A);
            if (!P) {
              A.allowNull && (M = null);
              break;
            }
            M = P;
          }
          if (M && isTextNode(M) && u.charOffset) {
            const t = [ M ];
            let P = getPreviousSibling(M, A);
            for (;P && isTextNode(P); ) t.unshift(P), P = getPreviousSibling(P, A);
            let q = getNextSibling(M, A);
            for (;q && isTextNode(q); ) t.push(q), q = getNextSibling(q, A);
            if (t.length > 0) {
              const P = t.reduce((t, u) => {
                const P = u.textContent || "";
                return {
                  fullString: t.fullString + P,
                  nodes: [ ...t.nodes, {
                    node: u,
                    startIndex: t.fullString.length,
                    endIndex: t.fullString.length + P.length
                  } ]
                };
              }, {
                fullString: "",
                nodes: []
              }), A = findClosestIndexToOffset(u.charOffset, P.fullString, 0), q = P.nodes.find(t => t.startIndex <= A && t.endIndex > A) || P.nodes[P.nodes.length - 1];
              M = q ? q.node : null;
            }
          }
          return M && A.isPositional && (M = findPositionalNode(M, A)), M;
        }, getTextOffset = (t, u, P = {}) => {
          const A = getNormalizedTextNodes(t, P), M = A.findIndex(u => u === t);
          return A.slice(0, M).map(t => t.textContent).join("").length + u;
        }, getTextOffsetAssertion = (t, u, P) => {
          const A = getNormalizedTextNodes(t, P).map(t => t.textContent).join("");
          if (A) {
            const t = A.slice(Math.max(0, u - 3), u), P = A.slice(u, Math.min(A.length, u + 3));
            return P.length ? {
              precedingText: t,
              trailingText: P
            } : {
              precedingText: t,
              trailingText: ""
            };
          }
          return null;
        }, getCFIForRange = (t, u) => {
          const P = getCFIForNode(t.startContainer, u), A = getTextOffset(t.startContainer, t.startOffset, u);
          P.charOffset = {
            offset: A,
            assert: getTextOffsetAssertion(t.startContainer, A, u || {})
          };
          const M = getCFIForNode(t.endContainer, u), q = getTextOffset(t.endContainer, t.endOffset, u);
          return M.charOffset = {
            offset: q,
            assert: getTextOffsetAssertion(t.endContainer, q, u || {})
          }, new CFIRange({
            start: P,
            end: M
          });
        }, isTextNode = (t, u) => {
          const P = t.nodeType;
          return 3 === P || 4 === P || 5 === P;
        }, getNextParentSibling = (t, u, P) => {
          var A, M;
          return t ? (null === (A = t.parentElement) || void 0 === A ? void 0 : A.nextSibling) ? null === (M = t.parentElement) || void 0 === M ? void 0 : M.nextSibling : t !== u ? getNextParentSibling(t.parentElement, u) : null : null;
        }, getNextSibling = (t, u) => {
          if (t) {
            let P = t.nextSibling;
            if (!P) {
              const P = t.parentElement;
              return P && shouldIgnoreNode(P, u) ? getNextSibling(P, u) : null;
            }
            if (isTextNode(P)) return P;
            if (shouldSkipNode(P, u)) return getNextSibling(P, u);
            for (;P && shouldIgnoreNode(P, u); ) if (P = (null == P ? void 0 : P.firstChild) || null, 
            P && isTextNode(P)) return P;
            return P;
          }
          return null;
        }, getPreviousSibling = (t, u) => {
          if (t) {
            let P = t.previousSibling;
            if (!P) {
              const P = t.parentElement;
              return P && shouldIgnoreNode(P, u) ? getPreviousSibling(P, u) : null;
            }
            if (isTextNode(P)) return P;
            if (shouldSkipNode(P, u)) return getPreviousSibling(P, u);
            for (;P && shouldIgnoreNode(P, u); ) if (P = (null == P ? void 0 : P.lastChild) || null, 
            P && isTextNode(P)) return P;
            return P;
          }
          return null;
        }, getNormalizedTextNodes = (t, u = {}) => {
          if (isTextNode(t)) {
            const P = [ t ];
            let A = getPreviousSibling(t, u);
            for (;A && isTextNode(A); ) P.unshift(A), A = getPreviousSibling(A, u);
            let M = getNextSibling(t, u);
            for (;M && isTextNode(M); ) P.push(M), M = getNextSibling(M, u);
            return P;
          }
          return [];
        }, getTextNodeSetsInRange = (t, u, P) => {
          const A = getNodeForCFI(t, u.base, P), M = getNodeForCFI(t, u.start, P), q = getNodeForCFI(t, u.end, P);
          if (!A || !M || !q) return [];
          if (M !== q && q.compareDocumentPosition(M) & Node.DOCUMENT_POSITION_FOLLOWING) return [];
          const ee = [];
          let te = M;
          for (;te; ) if (isTextNode(te)) {
            const t = [ te ];
            let u = getPreviousSibling(te, P);
            for (;u && isTextNode(u); ) t.unshift(u), u = getPreviousSibling(u, P);
            let M = getNextSibling(te, P);
            for (;M && isTextNode(M); ) {
              if (te === q) return ee.push(t), ee;
              t.push(M), te = M, M = getNextSibling(M, P);
            }
            if (ee.push(t), te === q) return ee;
            te = (null == te ? void 0 : te.nextSibling) || getNextParentSibling(te, A);
          } else {
            if (te === q) return ee;
            te = shouldSkipNode(te, P) ? te.nextSibling || getNextParentSibling(te, A) : te.firstChild || te.nextSibling || getNextParentSibling(te, A);
          }
          return ee;
        }, findClosestIndexToOffset = (t, u, P = 0, A) => {
          if (!t) return P;
          const M = t.offset || P, q = t.assert;
          if (q) {
            const {precedingText: t, trailingText: P} = q, A = t + P;
            if (u.slice(M - ((null == t ? void 0 : t.length) || 0), M + ((null == P ? void 0 : P.length) || 0)) !== A) {
              const P = new RegExp(escapeRegExp(A), "ig");
              let q;
              const ee = [];
              for (;q = P.exec(u); ) ee.push(q.index + t.length);
              const te = ee.reduce((t, u) => {
                const P = Math.abs(u - M), A = t.distance;
                return !A || P < A ? {
                  distance: P,
                  result: u
                } : t;
              }, {
                distance: null,
                result: null
              }).result;
              return null === te ? M : te;
            }
          }
          return M;
        }, getCorrectedCFI = (t, u, P) => {
          const A = getNodeForCFI(t, u, P);
          return A ? getCFIForNode(A, P) : null;
        }, getTextNodes = (t, u) => t.reduce((t, u) => isTextNode(u) ? [ ...t, u ] : [ ...t, ...getTextNodes(Array.from(u.childNodes)) ], []), markupNodes = (t, u, P, A) => {
          if (t.length) {
            const A = t[0].ownerDocument;
            if (A) {
              let M, q = generateUUID();
              return "string" == typeof u ? q = u : "function" == typeof u && (M = u), "string" == typeof P ? q = P : "function" == typeof P && (M = P), 
              {
                nodes: getTextNodes(t).map((t, u) => {
                  var P;
                  const ee = A.createElement("span");
                  return ee.textContent = t.textContent, ee.classList.add(le), ee.setAttribute(pe, q), 
                  M && M(ee, u), null === (P = t.parentNode) || void 0 === P || P.insertBefore(ee, t), 
                  t.remove(), ee;
                }),
                identifier: q,
                unmark: () => unmarkDOM(A, {
                  identifier: q
                })
              };
            }
          }
          return {
            nodes: [],
            identifier: "",
            unmark: () => {}
          };
        }, markupHighlight = (t, u, P, A, M) => markupDOM(t, u, P, A, Object.assign(Object.assign({}, M), {
          skipFn: (t, u) => (null == u ? void 0 : u.skipFn) && u.skipFn(t, {}) || shouldSkipNode(t, {}) || hasClass(t, he)
        })), recursivelyRemove = t => {
          t.replacedByTheseTextNodes && t.replacedByTheseTextNodes.forEach(t => {
            t.ignoreNode ? t.ignoreNode.remove() : t.remove(), recursivelyRemove(t);
          }), t.remove();
        }, markupDOM = (t, u, P, A, M) => {
          const q = M || {};
          let ee, te = generateUUID();
          "string" == typeof P ? te = P : "function" == typeof P && (ee = P), "string" == typeof A ? te = A : "function" == typeof A && (ee = A);
          const re = getNodeForCFI(t, u.start, q), ne = getNodeForCFI(t, u.end, q), markup = (u, P) => {
            const A = [];
            if (u.textContent === P.join("") && (P.forEach((P, M) => {
              var q, re;
              if (P.length > 0) if (1 === M) {
                const re = t.createElement("span");
                if (re.textContent = P, re.classList.add(le), re.setAttribute(pe, te), ee && ee(re, M), 
                ae.push(re), re.firstChild) {
                  const t = re.firstChild;
                  t.markupId = te, A.push(t), t && (t.ignoreNode = re, t.replaces = u);
                }
                shouldMarkupTextNode(u) && (null === (q = u.parentNode) || void 0 === q || q.insertBefore(re, u));
              } else {
                const M = t.createTextNode(P);
                M.replaces = u, A.push(M), M.markupId = te, null === (re = u.parentNode) || void 0 === re || re.insertBefore(M, u);
              }
            }), A.length)) {
              u.replacedByTheseTextNodes = A;
              const P = t.defaultView;
              P && (P.markups = P.markups || {}, P.markups[te] = P.markups[te] || [], P.markups[te].push(u)), 
              u.removedByMe = !0, setTimeout(() => {
                u.removedByMe = !1;
              }), u.textContent = "", u.hidden = !0;
            }
          }, oe = getTextNodeSetsInRange(t, u, q), ae = [];
          return oe.forEach(P => {
            var A, M;
            let q = 0, ee = P.length - 1, te = 0, oe = 0, ae = P;
            const ie = P.reduce((t, u) => {
              const P = u.textContent || "";
              return {
                fullString: t.fullString + P,
                nodes: [ ...t.nodes, {
                  node: u,
                  startIndex: t.fullString.length,
                  endIndex: t.fullString.length + P.length
                } ]
              };
            }, {
              fullString: "",
              nodes: []
            });
            if (-1 !== P.indexOf(re) && P.length > 0) {
              const t = findClosestIndexToOffset(u.start.charOffset, ie.fullString, 0);
              q = ie.nodes.findIndex(u => u.startIndex <= t && u.endIndex > t), -1 === q && (q = 0), 
              te = t - (null === (A = ie.nodes[q]) || void 0 === A ? void 0 : A.startIndex);
            }
            if (-1 !== P.indexOf(ne) && P.length > 0) {
              const t = findClosestIndexToOffset(u.end.charOffset, ie.fullString, 0);
              ee = ie.nodes.findIndex(u => u.startIndex <= t && u.endIndex > t), -1 === ee && (ee = ie.nodes.length - 1), 
              oe = t - (null === (M = ie.nodes[ee]) || void 0 === M ? void 0 : M.startIndex);
            }
            ae = ie.nodes.slice(q, ee + 1).map(t => t.node), ae.forEach(t => {
              const P = t.textContent || "";
              let A = 0, M = P.length;
              if (t === re) {
                const t = u.start.charOffset;
                void 0 !== te ? A = te : t && (A = t.offset);
              }
              if (t === ne) {
                const t = u.end.charOffset;
                void 0 !== oe ? M = oe : t && (M = t.offset);
              }
              const q = [ P.slice(0, A) || "", P.slice(A, M) || "", P.slice(M) || "" ];
              markup(t, q);
            });
            const observerCallback = (t, u) => {
              const P = t.reduce((t, u) => [ ...t, ...u.removedNodes ], []);
              getTextNodes(P).forEach(t => {
                t.removedByMe || !t.replacedByTheseTextNodes || t.replaces || t.replacedByTheseTextNodes.forEach(t => {
                  recursivelyRemove(t);
                });
              }), t.forEach(t => {
                if ("characterData" === t.type) {
                  const u = t.target;
                  u && !u.replaces && (u.textContent || "").length > 0 && (t.target.replacedByTheseTextNodes || []).forEach(t => {
                    recursivelyRemove(t);
                  });
                }
              });
            };
            if (t.defaultView) {
              const u = new t.defaultView.MutationObserver(observerCallback);
              t.hasObserver || (t.hasObserver = !0, u.observe(t, {
                characterData: !0,
                attributes: !0,
                childList: !0,
                subtree: !0
              }));
            }
          }), {
            nodes: ae,
            identifier: te,
            unmark: () => unmarkDOM(t, {
              identifier: te
            })
          };
        }, unmarkDOM = (t, u, P) => {
          if (u.identifier) {
            const P = t.defaultView, A = (null == P ? void 0 : P.markups) && P.markups[u.identifier];
            A && P && (A.forEach(t => {
              var A;
              if (t && (null === (A = t.replacedByTheseTextNodes) || void 0 === A ? void 0 : A.length)) if (t.replacedByTheseTextNodes.forEach(t => {
                const P = t.ignoreNode;
                P && P.getAttribute(pe) === u.identifier && (Array.from(P.childNodes).forEach(t => {
                  var u;
                  null === (u = P.parentElement) || void 0 === u || u.insertBefore(t, P);
                }), P.remove(), t.ignoreNode = void 0);
              }), t.replacedByTheseTextNodes.every(t => !t.hidden && !t.ignoreNode)) {
                const u = t.replacedByTheseTextNodes[0], P = t.replacedByTheseTextNodes;
                t.replacedByTheseTextNodes = void 0;
                const A = u.parentElement;
                A && A.insertBefore(t, u), t.textContent = P.reduce((t, u) => t + u.textContent, ""), 
                t.hidden = !1, P.forEach(t => t.remove());
              } else t.replacedByTheseTextNodes = t.replacedByTheseTextNodes.reduce((u, A) => A.replacedByTheseTextNodes ? (A.replacedByTheseTextNodes.forEach(u => {
                if (u.markupId && u.replaces) {
                  const A = P.markups[u.markupId].indexOf(u.replaces);
                  P.markups[u.markupId][A] = t;
                }
                u.replaces = t;
              }), [ ...u, ...A.replacedByTheseTextNodes ]) : [ ...u, A ], []);
            }), delete P.markups[u.identifier]);
          }
        }, insertAdjacentElementSafely = (t, u, P, A) => {
          const M = A || generateUUID();
          return u.classList.add(de), u.setAttribute(pe, M), {
            node: P.insertAdjacentElement(t, u),
            identifier: M,
            remove: () => u.remove()
          };
        }, getNodesByIdentifier = (t, u) => Array.from(t.querySelectorAll(`[${pe}="${u}"]`)), getNodeIdentifier = t => t.getAttribute(pe), nodeHasIdentifier = (t, u) => t.getAttribute(pe) === u, isSpatialElement = (t, u) => -1 !== [ "img", "video", "audio" ].indexOf(t.tagName.toLowerCase()), correctBoundingRectToBeAbsolute = (t, u = 0, P = 0) => {
          const A = t.top + P, M = t.left + u;
          return {
            bottom: t.bottom + P,
            height: t.height,
            right: t.right + u,
            width: t.width,
            x: M,
            y: A,
            left: M,
            top: A
          };
        }, getAbsoluteBoundingRectOfRange = (t, u = 0, P = 0) => {
          var A;
          let M = t.getClientRects()[0], q = null;
          for (t.commonAncestorContainer.nodeType === Node.ELEMENT_NODE ? q = t.commonAncestorContainer : t.commonAncestorContainer.nodeType === Node.TEXT_NODE && (q = t.commonAncestorContainer.parentElement); !M && q; ) M = null === (A = q.getClientRects) || void 0 === A ? void 0 : A.call(q)[0], 
          q = q.parentElement;
          return M || (M = t.getBoundingClientRect()), correctBoundingRectToBeAbsolute(M, u, P);
        }, getAbsoluteBoundingRect = (t, u = 0, P = 0) => {
          var A;
          const M = t.ownerDocument;
          if (isTextNode(t)) {
            const q = null == M ? void 0 : M.createRange();
            if (q) {
              q.setStart(t, 0), q.setEnd(t, ((null === (A = t.textContent) || void 0 === A ? void 0 : A.length) || 0) - 1);
              const M = getAbsoluteBoundingRectOfRange(q, u, P);
              return q.detach(), M;
            }
            return {
              x: 0,
              y: 0,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              height: 0,
              width: 0
            };
          }
          return correctBoundingRectToBeAbsolute(t.getBoundingClientRect(), u, P);
        }, isBeforeXY = (t, u, P) => P > t.bottom || P >= t.top && P <= t.bottom && u > t.left, isDirectHit = (t, u, P) => P >= t.top && P <= t.bottom && u >= t.left && u <= t.right, getChildForPoint = (t, u, P, A, M, q) => {
          var ee;
          const handleReturn = t => {
            var q;
            if (!isTextNode(t.element) && t.element.classList.contains(le)) return getChildForPoint(t.element, u, P, A, M);
            if (t.guess && isTextNode(t.element)) {
              const ee = t.element, te = ee.textContent;
              if (te) {
                let t = 0;
                for (let M = 0; M < te.length - 1; M++) {
                  const te = null === (q = ee.ownerDocument) || void 0 === q ? void 0 : q.createRange();
                  if (te) {
                    te.setStart(ee, M), te.setEnd(ee, M + 1);
                    const q = getAbsoluteBoundingRectOfRange(te, A.left, A.top);
                    if (te.detach(), !isBeforeXY(q, u, P)) break;
                    t = M;
                  }
                }
                const re = {
                  offset: t
                }, ne = getNormalizedTextNodes(ee, M), oe = null == ne ? void 0 : ne.indexOf(ee);
                return {
                  element: ee,
                  guess: !0,
                  characterOffset: {
                    offset: (null == ne ? void 0 : ne.slice(0, oe).reduce((t, u) => t + (u.textContent || "").length, 0)) + re.offset,
                    assert: {
                      precedingText: te.slice(re.offset - 3, re.offset),
                      trailingText: te.slice(re.offset, re.offset + 3)
                    }
                  }
                };
              }
              return t;
            }
            if (t.guess || isTextNode(t.element) || !isSpatialElement(t.element)) return t;
            {
              const M = getAbsoluteBoundingRect(t.element, A.left, A.top);
              return Object.assign(Object.assign({}, t), {
                spatialOffset: {
                  x: Math.max(0, Math.min(100, Math.round((u - M.left) / M.width * 100))),
                  y: Math.max(0, Math.min(100, Math.round((P - M.top) / M.height * 100)))
                }
              });
            }
          };
          let te = q || t;
          const re = getChildren(t, M);
          if (0 === t.childNodes.length) return handleReturn({
            element: t,
            guess: !0
          });
          let ne = !1;
          for (let q = 0; q < re.length; q++) {
            const oe = re[q];
            if (3 === oe.nodeType) {
              const t = oe.textContent;
              if (t) for (let q = 0; q < t.length - 1; q++) {
                const t = null === (ee = oe.ownerDocument) || void 0 === ee ? void 0 : ee.createRange();
                if (t) {
                  t.setStart(oe, q), t.setEnd(oe, q + 1);
                  const ee = getAbsoluteBoundingRectOfRange(t, A.left, A.top);
                  if (t.detach(), isDirectHit(ee, u, P)) {
                    const t = getNormalizedTextNodes(oe, M), u = null == t ? void 0 : t.indexOf(oe), P = t.reduce((t, u) => t + u.textContent, ""), A = (null == t ? void 0 : t.slice(0, u).reduce((t, u) => t + (u.textContent || "").length, 0)) + q;
                    return {
                      element: oe,
                      guess: !1,
                      characterOffset: {
                        offset: A,
                        assert: {
                          precedingText: P.slice(A - 3, A),
                          trailingText: P.slice(A, A + 3)
                        }
                      }
                    };
                  }
                  isBeforeXY(ee, u, P) && (te = oe, ne = !0);
                }
              }
              ne || (te = oe);
              continue;
            }
            {
              const q = oe.getBoundingClientRect();
              if (oe.classList.contains(de) || q && (0 === q.width || 0 === q.height)) continue;
              const ee = getAbsoluteBoundingRect(oe, A.left, A.top);
              if (isDirectHit(ee, u, P)) {
                const t = getChildForPoint(oe, u, P, A, M, oe);
                if (t.guess) {
                  if (t.element === oe) return handleReturn({
                    element: oe,
                    guess: !1
                  });
                  ne ? isBeforeXY(ee, u, P) && getAbsoluteBoundingRect(te, A.left, A.top).bottom <= ee.bottom && (te = t.element) : (ne = !0, 
                  te = t.element);
                  continue;
                }
                return t;
              }
              if (ne) {
                if (isBeforeXY(ee, u, P) && getAbsoluteBoundingRect(te, A.left, A.top).bottom <= ee.bottom) {
                  const t = getChildForPoint(oe, u, P, A, M);
                  if (!t.guess) return t;
                  te = t.element;
                }
                continue;
              }
              if (P >= ee.bottom) {
                te = oe;
                continue;
              }
              if (P <= ee.top && !isInline(oe)) return te === t || te === oe ? handleReturn({
                element: te,
                guess: !0
              }) : getChildForPoint(te, u, P, A, M);
            }
            te = oe;
          }
          return handleReturn({
            element: te,
            guess: !0
          });
        }, isInline = t => {
          var u;
          const P = null === (u = t.ownerDocument) || void 0 === u ? void 0 : u.defaultView;
          return !!P && "inline" === P.getComputedStyle(t, "").display;
        }, getScrollOffsets = t => {
          var u;
          const P = null === (u = t.ownerDocument) || void 0 === u ? void 0 : u.scrollingElement;
          return P ? {
            left: P.scrollLeft,
            top: P.scrollTop
          } : {
            left: 0,
            top: 0
          };
        }, getCFIChildForPoint = (t, u, P, A) => {
          const M = getScrollOffsets(t), q = A || {}, ee = getChildForPoint(t, u + M.left, P + M.top, M, q).element.ownerDocument;
          return ee ? getNodeForCFI(ee, getCFIForPoint(t, u + M.left, P + M.top, q), q) : null;
        }, getCFIForPoint = (t, u, P, A) => {
          const M = getScrollOffsets(t), q = getChildForPoint(t, u + M.left, P + M.top, M, A || {}), ee = getCFIForNode(q.element, A || {});
          return ee.charOffset = q.characterOffset, ee.spatialOffset = q.spatialOffset, ee;
        }, locateCFI = (t, u, P) => {
          const A = getScrollOffsets(t.body), M = P || {}, q = getNodeForCFI(t, u, M);
          if (q) {
            const {x: P, y: ee, width: te, height: re} = getAbsoluteBoundingRect(q, A.left, A.top);
            let ne = P, oe = ee;
            if (u.spatialOffset && isSpatialElement(q) && (ne = P + te * (u.spatialOffset.x / 100), 
            oe = ee + re * (u.spatialOffset.y / 100)), u.charOffset && isTextNode(q)) {
              const P = getNormalizedTextNodes(q, M), ee = P.indexOf(q), te = P.slice(0, ee).reduce((t, u) => t + u.textContent, ""), re = t.createRange(), ne = u.charOffset.offset - te.length;
              re.setStart(q, ne), re.setEnd(q, ne + 1);
              const {x: oe, y: ae} = getAbsoluteBoundingRectOfRange(re, A.left, A.top);
              return re.detach(), {
                x: oe,
                y: ae,
                node: q
              };
            }
            return {
              x: ne,
              y: oe,
              node: q
            };
          }
          return {
            x: 0,
            y: 0
          };
        };
        t.CFI = CFI, t.CFIRange = CFIRange, t.getCFIChildForPoint = getCFIChildForPoint, 
        t.getCFIForNode = getCFIForNode, t.getCFIForPoint = getCFIForPoint, t.getCFIForRange = getCFIForRange, 
        t.getChildForPoint = getChildForPoint, t.getCorrectedCFI = getCorrectedCFI, t.getNodeForCFI = getNodeForCFI, 
        t.getNodeIdentifier = getNodeIdentifier, t.getNodesByIdentifier = getNodesByIdentifier, 
        t.insertAdjacentElementSafely = insertAdjacentElementSafely, t.locateCFI = locateCFI, 
        t.markupDOM = markupDOM, t.markupHighlight = markupHighlight, t.markupNodes = markupNodes, 
        t.nodeHasIdentifier = nodeHasIdentifier, t.parseCfi = parseCfi, t.parseCfiRange = parseCfiRange, 
        t.unmarkDOM = unmarkDOM, Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }(u, P(4650));
    },
    4650(t) {
      "undefined" != typeof self && self, t.exports = function(t) {
        var u = {};
        function r(P) {
          if (u[P]) return u[P].exports;
          var A = u[P] = {
            i: P,
            l: !1,
            exports: {}
          };
          return t[P].call(A.exports, A, A.exports, r), A.l = !0, A.exports;
        }
        return r.m = t, r.c = u, r.d = function(t, u, P) {
          r.o(t, u) || Object.defineProperty(t, u, {
            configurable: !1,
            enumerable: !0,
            get: P
          });
        }, r.r = function(t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }, r.n = function(t) {
          var u = t && t.__esModule ? function() {
            return t.default;
          } : function() {
            return t;
          };
          return r.d(u, "a", u), u;
        }, r.o = function(t, u) {
          return Object.prototype.hasOwnProperty.call(t, u);
        }, r.p = "", r(r.s = 0);
      }([ function(t, u, P) {
        "use strict";
        function e(t) {
          if (!(this instanceof e)) return new e(t);
          this._ = t;
        }
        var A = e.prototype;
        function o(t, u) {
          for (var P = 0; P < t; P++) u(P);
        }
        function i(t, u, P) {
          return function(t, u) {
            o(u.length, function(P) {
              t(u[P], P, u);
            });
          }(function(P, A, M) {
            u = t(u, P, A, M);
          }, P), u;
        }
        function f(t, u) {
          return i(function(u, P, A, M) {
            return u.concat([ t(P, A, M) ]);
          }, [], u);
        }
        function a(t, u) {
          var P = {
            v: 0,
            buf: u
          };
          return o(t, function() {
            var t;
            P = {
              v: P.v << 1 | (t = P.buf, t[0] >> 7),
              buf: function(t) {
                var u = i(function(t, u, P, A) {
                  return t.concat(P === A.length - 1 ? Buffer.from([ u, 0 ]).readUInt16BE(0) : A.readUInt16BE(P));
                }, [], t);
                return Buffer.from(f(function(t) {
                  return (t << 1 & 65535) >> 8;
                }, u));
              }(P.buf)
            };
          }), P;
        }
        function c() {
          return "undefined" != typeof Buffer;
        }
        function s() {
          if (!c()) throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.");
        }
        function l(t) {
          s();
          var u = i(function(t, u) {
            return t + u;
          }, 0, t);
          if (u % 8 != 0) throw new Error("The bits [" + t.join(", ") + "] add up to " + u + " which is not an even number of bytes; the total should be divisible by 8");
          var P, A = u / 8, M = (P = function(t) {
            return t > 48;
          }, i(function(t, u) {
            return t || (P(u) ? u : t);
          }, null, t));
          if (M) throw new Error(M + " bit range requested exceeds 48 bit (6 byte) Number max.");
          return new e(function(u, P) {
            var M = A + P;
            return M > u.length ? x(P, A.toString() + " bytes") : b(M, i(function(t, u) {
              var P = a(u, t.buf);
              return {
                coll: t.coll.concat(P.v),
                buf: P.buf
              };
            }, {
              coll: [],
              buf: u.slice(P, M)
            }, t).coll);
          });
        }
        function h(t, u) {
          return new e(function(P, A) {
            return s(), A + u > P.length ? x(A, u + " bytes for " + t) : b(A + u, P.slice(A, A + u));
          });
        }
        function p(t, u) {
          if ("number" != typeof (P = u) || Math.floor(P) !== P || u < 0 || u > 6) throw new Error(t + " requires integer length in range [0, 6].");
          var P;
        }
        function d(t) {
          return p("uintBE", t), h("uintBE(" + t + ")", t).map(function(u) {
            return u.readUIntBE(0, t);
          });
        }
        function v(t) {
          return p("uintLE", t), h("uintLE(" + t + ")", t).map(function(u) {
            return u.readUIntLE(0, t);
          });
        }
        function g(t) {
          return p("intBE", t), h("intBE(" + t + ")", t).map(function(u) {
            return u.readIntBE(0, t);
          });
        }
        function m(t) {
          return p("intLE", t), h("intLE(" + t + ")", t).map(function(u) {
            return u.readIntLE(0, t);
          });
        }
        function y(t) {
          return t instanceof e;
        }
        function E(t) {
          return "[object Array]" === {}.toString.call(t);
        }
        function w(t) {
          return c() && Buffer.isBuffer(t);
        }
        function b(t, u) {
          return {
            status: !0,
            index: t,
            value: u,
            furthest: -1,
            expected: []
          };
        }
        function x(t, u) {
          return E(u) || (u = [ u ]), {
            status: !1,
            index: -1,
            value: null,
            furthest: t,
            expected: u
          };
        }
        function B(t, u) {
          if (!u) return t;
          if (t.furthest > u.furthest) return t;
          var P = t.furthest === u.furthest ? function(t, u) {
            for (var P = {}, A = 0; A < t.length; A++) P[t[A]] = !0;
            for (var M = 0; M < u.length; M++) P[u[M]] = !0;
            var q = [];
            for (var ee in P) ({}).hasOwnProperty.call(P, ee) && q.push(ee);
            return q.sort(), q;
          }(t.expected, u.expected) : u.expected;
          return {
            status: t.status,
            index: t.index,
            value: t.value,
            furthest: u.furthest,
            expected: P
          };
        }
        function j(t, u) {
          if (w(t)) return {
            offset: u,
            line: -1,
            column: -1
          };
          var P = t.slice(0, u).split("\n");
          return {
            offset: u,
            line: P.length,
            column: P[P.length - 1].length + 1
          };
        }
        function O(t) {
          if (!y(t)) throw new Error("not a parser: " + t);
        }
        function L(t, u) {
          return "string" == typeof t ? t.charAt(u) : t[u];
        }
        function _(t) {
          if ("number" != typeof t) throw new Error("not a number: " + t);
        }
        function S(t) {
          if ("function" != typeof t) throw new Error("not a function: " + t);
        }
        function k(t) {
          if ("string" != typeof t) throw new Error("not a string: " + t);
        }
        var M = 2, q = 3, ee = 8, te = 5 * ee, re = 4 * ee, ne = "  ";
        function z(t, u) {
          return new Array(u + 1).join(t);
        }
        function R(t, u, P) {
          var A = u - t.length;
          return A <= 0 ? t : z(P, A) + t;
        }
        function U(t, u, P, A) {
          return {
            from: t - u > 0 ? t - u : 0,
            to: t + P > A ? A : t + P
          };
        }
        function W(t, u) {
          var P, A, oe, ae, ie, se = u.index, ue = se.offset, ce = 1;
          if (ue === t.length) return "Got the end of the input";
          if (w(t)) {
            var fe = ue - ue % ee, le = ue - fe, de = U(fe, te, re + ee, t.length), pe = f(function(t) {
              return f(function(t) {
                return R(t.toString(16), 2, "0");
              }, t);
            }, function(t, u) {
              var P = t.length, A = [], M = 0;
              if (P <= u) return [ t.slice() ];
              for (var q = 0; q < P; q++) A[M] || A.push([]), A[M].push(t[q]), (q + 1) % u == 0 && M++;
              return A;
            }(t.slice(de.from, de.to).toJSON().data, ee));
            ae = function(t) {
              return 0 === t.from && 1 === t.to ? {
                from: t.from,
                to: t.to
              } : {
                from: t.from / ee,
                to: Math.floor(t.to / ee)
              };
            }(de), A = fe / ee, P = 3 * le, le >= 4 && (P += 1), ce = 2, oe = f(function(t) {
              return t.length <= 4 ? t.join(" ") : t.slice(0, 4).join(" ") + "  " + t.slice(4).join(" ");
            }, pe), (ie = (8 * (ae.to > 0 ? ae.to - 1 : ae.to)).toString(16).length) < 2 && (ie = 2);
          } else {
            var he = t.split(/\r\n|[\n\r\u2028\u2029]/);
            P = se.column - 1, A = se.line - 1, ae = U(A, M, q, he.length), oe = he.slice(ae.from, ae.to), 
            ie = ae.to.toString().length;
          }
          var ye = A - ae.from;
          return w(t) && (ie = (8 * (ae.to > 0 ? ae.to - 1 : ae.to)).toString(16).length) < 2 && (ie = 2), 
          i(function(u, A, M) {
            var q, ee = M === ye, te = ee ? "> " : ne;
            return q = w(t) ? R((8 * (ae.from + M)).toString(16), ie, "0") : R((ae.from + M + 1).toString(), ie, " "), 
            [].concat(u, [ te + q + " | " + A ], ee ? [ ne + z(" ", ie) + " | " + R("", P, " ") + z("^", ce) ] : []);
          }, [], oe).join("\n");
        }
        function D(t, u) {
          return [ "\n", "-- PARSING FAILED " + z("-", 50), "\n\n", W(t, u), "\n\n", (P = u.expected, 
          1 === P.length ? "Expected:\n\n" + P[0] : "Expected one of the following: \n\n" + P.join(", ")), "\n" ].join("");
          var P;
        }
        function N(t) {
          var u = "" + t;
          return u.slice(u.lastIndexOf("/") + 1);
        }
        function G() {
          for (var t = [].slice.call(arguments), u = t.length, P = 0; P < u; P += 1) O(t[P]);
          return e(function(P, A) {
            for (var M, q = new Array(u), ee = 0; ee < u; ee += 1) {
              if (!(M = B(t[ee]._(P, A), M)).status) return M;
              q[ee] = M.value, A = M.index;
            }
            return B(b(A, q), M);
          });
        }
        function J() {
          var t = [].slice.call(arguments);
          if (0 === t.length) throw new Error("seqMap needs at least one argument");
          var u = t.pop();
          return S(u), G.apply(null, t).map(function(t) {
            return u.apply(null, t);
          });
        }
        function T() {
          var t = [].slice.call(arguments), u = t.length;
          if (0 === u) return X("zero alternates");
          for (var P = 0; P < u; P += 1) O(t[P]);
          return e(function(u, P) {
            for (var A, M = 0; M < t.length; M += 1) if ((A = B(t[M]._(u, P), A)).status) return A;
            return A;
          });
        }
        function V(t, u) {
          return C(t, u).or(Q([]));
        }
        function C(t, u) {
          return O(t), O(u), J(t, u.then(t).many(), function(t, u) {
            return [ t ].concat(u);
          });
        }
        function H(t) {
          k(t);
          var u = "'" + t + "'";
          return e(function(P, A) {
            var M = A + t.length, q = P.slice(A, M);
            return q === t ? b(M, q) : x(A, u);
          });
        }
        function K(t, u) {
          !function(t) {
            if (!(t instanceof RegExp)) throw new Error("not a regexp: " + t);
            for (var u = N(t), P = 0; P < u.length; P++) {
              var A = u.charAt(P);
              if ("i" !== A && "m" !== A && "u" !== A) throw new Error('unsupported regexp flag "' + A + '": ' + t);
            }
          }(t), arguments.length >= 2 ? _(u) : u = 0;
          var P = function(t) {
            return RegExp("^(?:" + t.source + ")", N(t));
          }(t), A = "" + t;
          return e(function(t, M) {
            var q = P.exec(t.slice(M));
            if (q) {
              if (0 <= u && u <= q.length) {
                var ee = q[0], te = q[u];
                return b(M + ee.length, te);
              }
              return x(M, "valid match group (0 to " + q.length + ") in " + A);
            }
            return x(M, A);
          });
        }
        function Q(t) {
          return e(function(u, P) {
            return b(P, t);
          });
        }
        function X(t) {
          return e(function(u, P) {
            return x(P, t);
          });
        }
        function Y(t) {
          if (y(t)) return e(function(u, P) {
            var A = t._(u, P);
            return A.index = P, A.value = "", A;
          });
          if ("string" == typeof t) return Y(H(t));
          if (t instanceof RegExp) return Y(K(t));
          throw new Error("not a string, regexp, or parser: " + t);
        }
        function Z(t) {
          return O(t), e(function(u, P) {
            var A = t._(u, P), M = u.slice(P, A.index);
            return A.status ? x(P, 'not "' + M + '"') : b(P, null);
          });
        }
        function $(t) {
          return S(t), e(function(u, P) {
            var A = L(u, P);
            return P < u.length && t(A) ? b(P + 1, A) : x(P, "a character/byte matching " + t);
          });
        }
        function nn(t, u) {
          arguments.length < 2 && (u = t, t = void 0);
          var P = e(function(t, A) {
            return P._ = u()._, P._(t, A);
          });
          return t ? P.desc(t) : P;
        }
        function tn() {
          return X("fantasy-land/empty");
        }
        A.parse = function(t) {
          if ("string" != typeof t && !w(t)) throw new Error(".parse must be called with a string or Buffer as its argument");
          var u = this.skip(se)._(t, 0);
          return u.status ? {
            status: !0,
            value: u.value
          } : {
            status: !1,
            index: j(t, u.furthest),
            expected: u.expected
          };
        }, A.tryParse = function(t) {
          var u = this.parse(t);
          if (u.status) return u.value;
          var P = D(t, u), A = new Error(P);
          throw A.type = "ParsimmonError", A.result = u, A;
        }, A.assert = function(t, u) {
          return this.chain(function(P) {
            return t(P) ? Q(P) : X(u);
          });
        }, A.or = function(t) {
          return T(this, t);
        }, A.trim = function(t) {
          return this.wrap(t, t);
        }, A.wrap = function(t, u) {
          return J(t, this, u, function(t, u) {
            return u;
          });
        }, A.thru = function(t) {
          return t(this);
        }, A.then = function(t) {
          return O(t), G(this, t).map(function(t) {
            return t[1];
          });
        }, A.many = function() {
          var t = this;
          return e(function(u, P) {
            for (var A = [], M = void 0; ;) {
              if (!(M = B(t._(u, P), M)).status) return B(b(P, A), M);
              if (P === M.index) throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");
              P = M.index, A.push(M.value);
            }
          });
        }, A.tieWith = function(t) {
          return k(t), this.map(function(u) {
            if (function(t) {
              if (!E(t)) throw new Error("not an array: " + t);
            }(u), u.length) {
              k(u[0]);
              for (var P = u[0], A = 1; A < u.length; A++) k(u[A]), P += t + u[A];
              return P;
            }
            return "";
          });
        }, A.tie = function() {
          return this.tieWith("");
        }, A.times = function(t, u) {
          var P = this;
          return arguments.length < 2 && (u = t), _(t), _(u), e(function(A, M) {
            for (var q = [], ee = void 0, te = void 0, re = 0; re < t; re += 1) {
              if (te = B(ee = P._(A, M), te), !ee.status) return te;
              M = ee.index, q.push(ee.value);
            }
            for (;re < u && (te = B(ee = P._(A, M), te), ee.status); re += 1) M = ee.index, 
            q.push(ee.value);
            return B(b(M, q), te);
          });
        }, A.result = function(t) {
          return this.map(function() {
            return t;
          });
        }, A.atMost = function(t) {
          return this.times(0, t);
        }, A.atLeast = function(t) {
          return J(this.times(t), this.many(), function(t, u) {
            return t.concat(u);
          });
        }, A.map = function(t) {
          S(t);
          var u = this;
          return e(function(P, A) {
            var M = u._(P, A);
            return M.status ? B(b(M.index, t(M.value)), M) : M;
          });
        }, A.contramap = function(t) {
          S(t);
          var u = this;
          return e(function(P, A) {
            var M = u.parse(t(P.slice(A)));
            return M.status ? b(A + P.length, M.value) : M;
          });
        }, A.promap = function(t, u) {
          return S(t), S(u), this.contramap(t).map(u);
        }, A.skip = function(t) {
          return G(this, t).map(function(t) {
            return t[0];
          });
        }, A.mark = function() {
          return J(oe, this, oe, function(t, u, P) {
            return {
              start: t,
              value: u,
              end: P
            };
          });
        }, A.node = function(t) {
          return J(oe, this, oe, function(u, P, A) {
            return {
              name: t,
              value: P,
              start: u,
              end: A
            };
          });
        }, A.sepBy = function(t) {
          return V(this, t);
        }, A.sepBy1 = function(t) {
          return C(this, t);
        }, A.lookahead = function(t) {
          return this.skip(Y(t));
        }, A.notFollowedBy = function(t) {
          return this.skip(Z(t));
        }, A.desc = function(t) {
          E(t) || (t = [ t ]);
          var u = this;
          return e(function(P, A) {
            var M = u._(P, A);
            return M.status || (M.expected = t), M;
          });
        }, A.fallback = function(t) {
          return this.or(Q(t));
        }, A.ap = function(t) {
          return J(t, this, function(t, u) {
            return t(u);
          });
        }, A.chain = function(t) {
          var u = this;
          return e(function(P, A) {
            var M = u._(P, A);
            return M.status ? B(t(M.value)._(P, M.index), M) : M;
          });
        }, A.concat = A.or, A.empty = tn, A.of = Q, A["fantasy-land/ap"] = A.ap, A["fantasy-land/chain"] = A.chain, 
        A["fantasy-land/concat"] = A.concat, A["fantasy-land/empty"] = A.empty, A["fantasy-land/of"] = A.of, 
        A["fantasy-land/map"] = A.map;
        var oe = e(function(t, u) {
          return b(u, j(t, u));
        }), ae = e(function(t, u) {
          return u >= t.length ? x(u, "any character/byte") : b(u + 1, L(t, u));
        }), ie = e(function(t, u) {
          return b(t.length, t.slice(u));
        }), se = e(function(t, u) {
          return u < t.length ? x(u, "EOF") : b(u, null);
        }), ue = K(/[0-9]/).desc("a digit"), ce = K(/[0-9]*/).desc("optional digits"), fe = K(/[a-z]/i).desc("a letter"), le = K(/[a-z]*/i).desc("optional letters"), de = K(/\s*/).desc("optional whitespace"), pe = K(/\s+/).desc("whitespace"), he = H("\r"), ye = H("\n"), ge = H("\r\n"), be = T(ge, ye, he).desc("newline"), ve = T(be, se);
        e.all = ie, e.alt = T, e.any = ae, e.cr = he, e.createLanguage = function(t) {
          var u = {};
          for (var P in t) ({}).hasOwnProperty.call(t, P) && function(P) {
            u[P] = nn(function() {
              return t[P](u);
            });
          }(P);
          return u;
        }, e.crlf = ge, e.custom = function(t) {
          return e(t(b, x));
        }, e.digit = ue, e.digits = ce, e.empty = tn, e.end = ve, e.eof = se, e.fail = X, 
        e.formatError = D, e.index = oe, e.isParser = y, e.lazy = nn, e.letter = fe, e.letters = le, 
        e.lf = ye, e.lookahead = Y, e.makeFailure = x, e.makeSuccess = b, e.newline = be, 
        e.noneOf = function(t) {
          return $(function(u) {
            return t.indexOf(u) < 0;
          }).desc("none of '" + t + "'");
        }, e.notFollowedBy = Z, e.of = Q, e.oneOf = function(t) {
          for (var u = t.split(""), P = 0; P < u.length; P++) u[P] = "'" + u[P] + "'";
          return $(function(u) {
            return t.indexOf(u) >= 0;
          }).desc(u);
        }, e.optWhitespace = de, e.Parser = e, e.range = function(t, u) {
          return $(function(P) {
            return t <= P && P <= u;
          }).desc(t + "-" + u);
        }, e.regex = K, e.regexp = K, e.sepBy = V, e.sepBy1 = C, e.seq = G, e.seqMap = J, 
        e.seqObj = function() {
          for (var t, u = {}, P = 0, A = (t = arguments, Array.prototype.slice.call(t)), M = A.length, q = 0; q < M; q += 1) {
            var ee = A[q];
            if (!y(ee)) {
              if (E(ee) && 2 === ee.length && "string" == typeof ee[0] && y(ee[1])) {
                var te = ee[0];
                if (Object.prototype.hasOwnProperty.call(u, te)) throw new Error("seqObj: duplicate key " + te);
                u[te] = !0, P++;
                continue;
              }
              throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.");
            }
          }
          if (0 === P) throw new Error("seqObj expects at least one named parser, found zero");
          return e(function(t, u) {
            for (var P, q = {}, ee = 0; ee < M; ee += 1) {
              var te, re;
              if (E(A[ee]) ? (te = A[ee][0], re = A[ee][1]) : (te = null, re = A[ee]), !(P = B(re._(t, u), P)).status) return P;
              te && (q[te] = P.value), u = P.index;
            }
            return B(b(u, q), P);
          });
        }, e.string = H, e.succeed = Q, e.takeWhile = function(t) {
          return S(t), e(function(u, P) {
            for (var A = P; A < u.length && t(L(u, A)); ) A++;
            return b(A, u.slice(P, A));
          });
        }, e.test = $, e.whitespace = pe, e["fantasy-land/empty"] = tn, e["fantasy-land/of"] = Q, 
        e.Binary = {
          bitSeq: l,
          bitSeqObj: function(t) {
            s();
            var u = {}, P = 0, A = f(function(t) {
              if (E(t)) {
                var A = t;
                if (2 !== A.length) throw new Error("[" + A.join(", ") + "] should be length 2, got length " + A.length);
                if (k(A[0]), _(A[1]), Object.prototype.hasOwnProperty.call(u, A[0])) throw new Error("duplicate key in bitSeqObj: " + A[0]);
                return u[A[0]] = !0, P++, A;
              }
              return _(t), [ null, t ];
            }, t);
            if (P < 1) throw new Error("bitSeqObj expects at least one named pair, got [" + t.join(", ") + "]");
            var M = f(function(t) {
              return t[0];
            }, A);
            return l(f(function(t) {
              return t[1];
            }, A)).map(function(t) {
              return i(function(t, u) {
                return null !== u[0] && (t[u[0]] = u[1]), t;
              }, {}, f(function(u, P) {
                return [ u, t[P] ];
              }, M));
            });
          },
          byte: function(t) {
            if (s(), _(t), t > 255) throw new Error("Value specified to byte constructor (" + t + "=0x" + t.toString(16) + ") is larger in value than a single byte.");
            var u = (t > 15 ? "0x" : "0x0") + t.toString(16);
            return e(function(P, A) {
              var M = L(P, A);
              return M === t ? b(A + 1, M) : x(A, u);
            });
          },
          buffer: function(t) {
            return h("buffer", t).map(function(t) {
              return Buffer.from(t);
            });
          },
          encodedString: function(t, u) {
            return h("string", u).map(function(u) {
              return u.toString(t);
            });
          },
          uintBE: d,
          uint8BE: d(1),
          uint16BE: d(2),
          uint32BE: d(4),
          uintLE: v,
          uint8LE: v(1),
          uint16LE: v(2),
          uint32LE: v(4),
          intBE: g,
          int8BE: g(1),
          int16BE: g(2),
          int32BE: g(4),
          intLE: m,
          int8LE: m(1),
          int16LE: m(2),
          int32LE: m(4),
          floatBE: h("floatBE", 4).map(function(t) {
            return t.readFloatBE(0);
          }),
          floatLE: h("floatLE", 4).map(function(t) {
            return t.readFloatLE(0);
          }),
          doubleBE: h("doubleBE", 8).map(function(t) {
            return t.readDoubleBE(0);
          }),
          doubleLE: h("doubleLE", 8).map(function(t) {
            return t.readDoubleLE(0);
          })
        }, t.exports = e;
      } ]);
    }
  }, u = {};
  function __webpack_require__(P) {
    var A = u[P];
    if (void 0 !== A) return A.exports;
    var M = u[P] = {
      exports: {}
    };
    return t[P].call(M.exports, M, M.exports, __webpack_require__), M.exports;
  }
  __webpack_require__.n = t => {
    var u = t && t.__esModule ? () => t.default : () => t;
    return __webpack_require__.d(u, {
      a: u
    }), u;
  }, __webpack_require__.d = (t, u) => {
    for (var P in u) __webpack_require__.o(u, P) && !__webpack_require__.o(t, P) && Object.defineProperty(t, P, {
      enumerable: !0,
      get: u[P]
    });
  }, __webpack_require__.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  }(), __webpack_require__.o = (t, u) => Object.prototype.hasOwnProperty.call(t, u), 
  __webpack_require__.dn = t => {
    (Object.getOwnPropertyDescriptor(t, "name") || {}).writable || Object.defineProperty(t, "name", {
      value: "default",
      configurable: !0
    });
  }, (() => {
    "use strict";
    var t = "URLSearchParams" in self, u = "Symbol" in self && "iterator" in Symbol, P = "FileReader" in self && "Blob" in self && function() {
      try {
        return new Blob, !0;
      } catch (t) {
        return !1;
      }
    }(), A = "FormData" in self, M = "ArrayBuffer" in self;
    if (M) var q = [ "[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]" ], ee = ArrayBuffer.isView || function(t) {
      return t && q.indexOf(Object.prototype.toString.call(t)) > -1;
    };
    function normalizeName(t) {
      if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
      return t.toLowerCase();
    }
    function normalizeValue(t) {
      return "string" != typeof t && (t = String(t)), t;
    }
    function iteratorFor(t) {
      var P = {
        next: function() {
          var u = t.shift();
          return {
            done: void 0 === u,
            value: u
          };
        }
      };
      return u && (P[Symbol.iterator] = function() {
        return P;
      }), P;
    }
    function Headers(t) {
      this.map = {}, t instanceof Headers ? t.forEach(function(t, u) {
        this.append(u, t);
      }, this) : Array.isArray(t) ? t.forEach(function(t) {
        this.append(t[0], t[1]);
      }, this) : t && Object.getOwnPropertyNames(t).forEach(function(u) {
        this.append(u, t[u]);
      }, this);
    }
    function consumed(t) {
      if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
      t.bodyUsed = !0;
    }
    function fileReaderReady(t) {
      return new Promise(function(u, P) {
        t.onload = function() {
          u(t.result);
        }, t.onerror = function() {
          P(t.error);
        };
      });
    }
    function readBlobAsArrayBuffer(t) {
      var u = new FileReader, P = fileReaderReady(u);
      return u.readAsArrayBuffer(t), P;
    }
    function bufferClone(t) {
      if (t.slice) return t.slice(0);
      var u = new Uint8Array(t.byteLength);
      return u.set(new Uint8Array(t)), u.buffer;
    }
    function Body() {
      return this.bodyUsed = !1, this._initBody = function(u) {
        this._bodyInit = u, u ? "string" == typeof u ? this._bodyText = u : P && Blob.prototype.isPrototypeOf(u) ? this._bodyBlob = u : A && FormData.prototype.isPrototypeOf(u) ? this._bodyFormData = u : t && URLSearchParams.prototype.isPrototypeOf(u) ? this._bodyText = u.toString() : M && P && function isDataView(t) {
          return t && DataView.prototype.isPrototypeOf(t);
        }(u) ? (this._bodyArrayBuffer = bufferClone(u.buffer), this._bodyInit = new Blob([ this._bodyArrayBuffer ])) : M && (ArrayBuffer.prototype.isPrototypeOf(u) || ee(u)) ? this._bodyArrayBuffer = bufferClone(u) : this._bodyText = u = Object.prototype.toString.call(u) : this._bodyText = "", 
        this.headers.get("content-type") || ("string" == typeof u ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t && URLSearchParams.prototype.isPrototypeOf(u) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
      }, P && (this.blob = function() {
        var t = consumed(this);
        if (t) return t;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
        return Promise.resolve(new Blob([ this._bodyText ]));
      }, this.arrayBuffer = function() {
        return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(readBlobAsArrayBuffer);
      }), this.text = function() {
        var t = consumed(this);
        if (t) return t;
        if (this._bodyBlob) return function readBlobAsText(t) {
          var u = new FileReader, P = fileReaderReady(u);
          return u.readAsText(t), P;
        }(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(function readArrayBufferAsText(t) {
          for (var u = new Uint8Array(t), P = new Array(u.length), A = 0; A < u.length; A++) P[A] = String.fromCharCode(u[A]);
          return P.join("");
        }(this._bodyArrayBuffer));
        if (this._bodyFormData) throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText);
      }, A && (this.formData = function() {
        return this.text().then(decode);
      }), this.json = function() {
        return this.text().then(JSON.parse);
      }, this;
    }
    Headers.prototype.append = function(t, u) {
      t = normalizeName(t), u = normalizeValue(u);
      var P = this.map[t];
      this.map[t] = P ? P + ", " + u : u;
    }, Headers.prototype.delete = function(t) {
      delete this.map[normalizeName(t)];
    }, Headers.prototype.get = function(t) {
      return t = normalizeName(t), this.has(t) ? this.map[t] : null;
    }, Headers.prototype.has = function(t) {
      return this.map.hasOwnProperty(normalizeName(t));
    }, Headers.prototype.set = function(t, u) {
      this.map[normalizeName(t)] = normalizeValue(u);
    }, Headers.prototype.forEach = function(t, u) {
      for (var P in this.map) this.map.hasOwnProperty(P) && t.call(u, this.map[P], P, this);
    }, Headers.prototype.keys = function() {
      var t = [];
      return this.forEach(function(u, P) {
        t.push(P);
      }), iteratorFor(t);
    }, Headers.prototype.values = function() {
      var t = [];
      return this.forEach(function(u) {
        t.push(u);
      }), iteratorFor(t);
    }, Headers.prototype.entries = function() {
      var t = [];
      return this.forEach(function(u, P) {
        t.push([ P, u ]);
      }), iteratorFor(t);
    }, u && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
    var te = [ "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT" ];
    function Request(t, u) {
      var P = (u = u || {}).body;
      if (t instanceof Request) {
        if (t.bodyUsed) throw new TypeError("Already read");
        this.url = t.url, this.credentials = t.credentials, u.headers || (this.headers = new Headers(t.headers)), 
        this.method = t.method, this.mode = t.mode, this.signal = t.signal, P || null == t._bodyInit || (P = t._bodyInit, 
        t.bodyUsed = !0);
      } else this.url = String(t);
      if (this.credentials = u.credentials || this.credentials || "same-origin", !u.headers && this.headers || (this.headers = new Headers(u.headers)), 
      this.method = function normalizeMethod(t) {
        var u = t.toUpperCase();
        return te.indexOf(u) > -1 ? u : t;
      }(u.method || this.method || "GET"), this.mode = u.mode || this.mode || null, this.signal = u.signal || this.signal, 
      this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && P) throw new TypeError("Body not allowed for GET or HEAD requests");
      this._initBody(P);
    }
    function decode(t) {
      var u = new FormData;
      return t.trim().split("&").forEach(function(t) {
        if (t) {
          var P = t.split("="), A = P.shift().replace(/\+/g, " "), M = P.join("=").replace(/\+/g, " ");
          u.append(decodeURIComponent(A), decodeURIComponent(M));
        }
      }), u;
    }
    function Response(t, u) {
      u || (u = {}), this.type = "default", this.status = void 0 === u.status ? 200 : u.status, 
      this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in u ? u.statusText : "OK", 
      this.headers = new Headers(u.headers), this.url = u.url || "", this._initBody(t);
    }
    Request.prototype.clone = function() {
      return new Request(this, {
        body: this._bodyInit
      });
    }, Body.call(Request.prototype), Body.call(Response.prototype), Response.prototype.clone = function() {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    }, Response.error = function() {
      var t = new Response(null, {
        status: 0,
        statusText: ""
      });
      return t.type = "error", t;
    };
    var re = [ 301, 302, 303, 307, 308 ];
    Response.redirect = function(t, u) {
      if (-1 === re.indexOf(u)) throw new RangeError("Invalid status code");
      return new Response(null, {
        status: u,
        headers: {
          location: t
        }
      });
    };
    var ne = self.DOMException;
    try {
      new ne;
    } catch (t) {
      (ne = function(t, u) {
        this.message = t, this.name = u;
        var P = Error(t);
        this.stack = P.stack;
      }).prototype = Object.create(Error.prototype), ne.prototype.constructor = ne;
    }
    function fetch_fetch(t, u) {
      return new Promise(function(A, M) {
        var q = new Request(t, u);
        if (q.signal && q.signal.aborted) return M(new ne("Aborted", "AbortError"));
        var ee = new XMLHttpRequest;
        function abortXhr() {
          ee.abort();
        }
        ee.onload = function() {
          var t, u, P = {
            status: ee.status,
            statusText: ee.statusText,
            headers: (t = ee.getAllResponseHeaders() || "", u = new Headers, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
              var P = t.split(":"), A = P.shift().trim();
              if (A) {
                var M = P.join(":").trim();
                u.append(A, M);
              }
            }), u)
          };
          P.url = "responseURL" in ee ? ee.responseURL : P.headers.get("X-Request-URL");
          var M = "response" in ee ? ee.response : ee.responseText;
          A(new Response(M, P));
        }, ee.onerror = function() {
          M(new TypeError("Network request failed"));
        }, ee.ontimeout = function() {
          M(new TypeError("Network request failed"));
        }, ee.onabort = function() {
          M(new ne("Aborted", "AbortError"));
        }, ee.open(q.method, q.url, !0), "include" === q.credentials ? ee.withCredentials = !0 : "omit" === q.credentials && (ee.withCredentials = !1), 
        "responseType" in ee && P && (ee.responseType = "blob"), q.headers.forEach(function(t, u) {
          ee.setRequestHeader(u, t);
        }), q.signal && (q.signal.addEventListener("abort", abortXhr), ee.onreadystatechange = function() {
          4 === ee.readyState && q.signal.removeEventListener("abort", abortXhr);
        }), ee.send(void 0 === q._bodyInit ? null : q._bodyInit);
      });
    }
    fetch_fetch.polyfill = !0, self.fetch || (self.fetch = fetch_fetch, self.Headers = Headers, 
    self.Request = Request, self.Response = Response);
    __webpack_require__(63534), __webpack_require__(40590), __webpack_require__(64216), 
    __webpack_require__(36611), __webpack_require__(17), __webpack_require__(58476), 
    __webpack_require__(18665), __webpack_require__(87787), __webpack_require__(94009), 
    __webpack_require__(36012), __webpack_require__(15852), __webpack_require__(10678), 
    __webpack_require__(3101), __webpack_require__(7899), __webpack_require__(5086), 
    __webpack_require__(29979), __webpack_require__(58379), __webpack_require__(14602), 
    __webpack_require__(19693), __webpack_require__(64189), __webpack_require__(97755), 
    __webpack_require__(41412), __webpack_require__(4632), __webpack_require__(80115), 
    __webpack_require__(59581), __webpack_require__(53270), __webpack_require__(98741), 
    __webpack_require__(69193), __webpack_require__(87136), __webpack_require__(40173);
    var oe, ae = __webpack_require__(14744), ie = __webpack_require__.n(ae), se = {};
    const ue = {
      set: function set(t) {
        return oe = t;
      },
      get: function get() {
        return oe;
      }
    };
    __webpack_require__(89560), __webpack_require__(79389), __webpack_require__(50785), 
    __webpack_require__(10121), __webpack_require__(60933);
    var ce = __webpack_require__(10920), fe = __webpack_require__.n(ce);
    function _typeof(t) {
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, _typeof(t);
    }
    function _defineProperties(t, u) {
      for (var P = 0; P < u.length; P++) {
        var A = u[P];
        A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), 
        Object.defineProperty(t, _toPropertyKey(A.key), A);
      }
    }
    function _createClass(t, u, P) {
      return u && _defineProperties(t.prototype, u), P && _defineProperties(t, P), Object.defineProperty(t, "prototype", {
        writable: !1
      }), t;
    }
    function _classPrivateFieldInitSpec(t, u, P) {
      (function _checkPrivateRedeclaration(t, u) {
        if (u.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object");
      })(t, u), u.set(t, P);
    }
    function _defineProperty(t, u, P) {
      return (u = _toPropertyKey(u)) in t ? Object.defineProperty(t, u, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[u] = P, t;
    }
    function _toPropertyKey(t) {
      var u = function _toPrimitive(t, u) {
        if ("object" != _typeof(t) || !t) return t;
        var P = t[Symbol.toPrimitive];
        if (void 0 !== P) {
          var A = P.call(t, u || "default");
          if ("object" != _typeof(A)) return A;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === u ? String : Number)(t);
      }(t, "string");
      return "symbol" == _typeof(u) ? u : u + "";
    }
    function _classPrivateFieldGet(t, u) {
      return t.get(_assertClassBrand(t, u));
    }
    function _assertClassBrand(t, u, P) {
      if ("function" == typeof t ? t === u : t.has(u)) return arguments.length < 3 ? u : P;
      throw new TypeError("Private element is not present on this object");
    }
    var le = function getBrandLookupFromURL() {
      var t = new URLSearchParams(window.location.search).get("brand");
      if (t) return decodeURIComponent(t);
    }, de = new WeakMap, pe = new WeakMap, he = new WeakMap, ye = new WeakMap, ge = _createClass(function MosaicConfig() {
      var t = this;
      !function _classCallCheck(t, u) {
        if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function");
      }(this, MosaicConfig), _defineProperty(this, "env", "production"), _defineProperty(this, "protocol", "https:"), 
      _defineProperty(this, "MIMEO_HOST", "print.vitalsource.com"), _defineProperty(this, "MIMEO_SCRIPT", "".concat(this.protocol, "//").concat(this.MIMEO_HOST, "/js/app.js?v=").concat(Date.now())), 
      _defineProperty(this, "WALDO_HOST", "search.vitalsource.com"), _defineProperty(this, "WALDO_SCRIPT", "".concat(this.protocol, "//").concat(this.WALDO_HOST, "/js/app.js?v=").concat(Date.now())), 
      _defineProperty(this, "LUMBERJACK_HOST", "lumberjack.vitalsource.com"), _defineProperty(this, "TIME_TRACKER_HOST", "lumberjack-cfw.vitalsource.com"), 
      _defineProperty(this, "LUMBERJACK_SCRIPT", "".concat(this.protocol, "//").concat(this.LUMBERJACK_HOST, "/js/app.js?v=").concat(Date.now())), 
      _defineProperty(this, "JIGSAW_HOST", "jigsaw.vitalsource.com"), _defineProperty(this, "JIGSAW_URL", "".concat(this.protocol, "//").concat(this.JIGSAW_HOST)), 
      _classPrivateFieldInitSpec(this, de, void 0), _classPrivateFieldInitSpec(this, pe, {
        lookup: le() || window.location.hostname,
        schema: "mosaic",
        fetchedAt: null
      }), _classPrivateFieldInitSpec(this, he, void 0), _classPrivateFieldInitSpec(this, ye, function(u) {
        return t.JIGSAW_HOST = u.jigsawHost || u.jigsaw_host || "jigsaw.vitalsource.com", 
        t.JIGSAW_URL = "".concat(t.protocol, "//").concat(t.JIGSAW_HOST), _classPrivateFieldGet(pe, t).fetchedAt = new Date, 
        function _classPrivateFieldSet(t, u, P) {
          return t.set(_assertClassBrand(t, u), P), P;
        }(he, t, u), u;
      }), _defineProperty(this, "setBrandConfig", _classPrivateFieldGet(ye, this)), _defineProperty(this, "getBrand", function() {
        return _classPrivateFieldGet(he, t);
      }), _defineProperty(this, "getBrandConfig", function() {
        return _classPrivateFieldGet(pe, t);
      }), _defineProperty(this, "loadBrand", function() {
        var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _classPrivateFieldGet(pe, t).lookup, P = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _classPrivateFieldGet(pe, t).schema;
        return _classPrivateFieldGet(de, t) && u === _classPrivateFieldGet(pe, t).lookup && P === _classPrivateFieldGet(pe, t).schema ? _classPrivateFieldGet(de, t) : (_classPrivateFieldGet(pe, t).lookup = u, 
        fe().loadBrand(u, P).then(_classPrivateFieldGet(ye, t)));
      });
    });
    window.MosaicConfig = new ge;
    const be = window.MosaicConfig;
    var ve, me = function createResponse(t, u) {
      return {
        ok: !0,
        data: t,
        status: u
      };
    }, _e = function createResponseError(t, u) {
      return {
        ok: !1,
        error: t,
        status: u
      };
    }, we = (__webpack_require__(63555), __webpack_require__(18772), function get() {
      return ve;
    }), Oe = function detect() {
      try {
        ve = ve || navigator.webdriver || Object.keys(window).some(function(t) {
          return t.toLowerCase().indexOf("cdc_") >= 0;
        });
      } catch (t) {}
      ve || setTimeout(Oe, 5e3);
    };
    __webpack_require__.dn(function() {
      Oe();
    });
    __webpack_require__(27727), __webpack_require__(15195), __webpack_require__(4895), 
    __webpack_require__(80475), __webpack_require__(14913), __webpack_require__(6048), 
    __webpack_require__(67500), __webpack_require__(54989);
    function asyncGeneratorStep(t, u, P, A, M, q, ee) {
      try {
        var te = t[q](ee), re = te.value;
      } catch (t) {
        return void P(t);
      }
      te.done ? u(re) : Promise.resolve(re).then(A, M);
    }
    function _createForOfIteratorHelper(t, u) {
      var P = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (!P) {
        if (Array.isArray(t) || (P = function _unsupportedIterableToArray(t, u) {
          if (t) {
            if ("string" == typeof t) return _arrayLikeToArray(t, u);
            var P = {}.toString.call(t).slice(8, -1);
            return "Object" === P && t.constructor && (P = t.constructor.name), "Map" === P || "Set" === P ? Array.from(t) : "Arguments" === P || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P) ? _arrayLikeToArray(t, u) : void 0;
          }
        }(t)) || u && t && "number" == typeof t.length) {
          P && (t = P);
          var A = 0, M = function F() {};
          return {
            s: M,
            n: function n() {
              return A >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[A++]
              };
            },
            e: function e(t) {
              throw t;
            },
            f: M
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var q, ee = !0, te = !1;
      return {
        s: function s() {
          P = P.call(t);
        },
        n: function n() {
          var t = P.next();
          return ee = t.done, t;
        },
        e: function e(t) {
          te = !0, q = t;
        },
        f: function f() {
          try {
            ee || null == P.return || P.return();
          } finally {
            if (te) throw q;
          }
        }
      };
    }
    function _arrayLikeToArray(t, u) {
      (null == u || u > t.length) && (u = t.length);
      for (var P = 0, A = Array(u); P < u; P++) A[P] = t[P];
      return A;
    }
    function _regenerator() {
      var t, u, P = "function" == typeof Symbol ? Symbol : {}, A = P.iterator || "@@iterator", M = P.toStringTag || "@@toStringTag";
      function i(P, A, M, ee) {
        var te = A && A.prototype instanceof Generator ? A : Generator, re = Object.create(te.prototype);
        return _regeneratorDefine2(re, "_invoke", function(P, A, M) {
          var ee, te, re, ne = 0, oe = M || [], ae = !1, ie = {
            p: 0,
            n: 0,
            v: t,
            a: d,
            f: d.bind(t, 4),
            d: function d(u, P) {
              return ee = u, te = 0, re = t, ie.n = P, q;
            }
          };
          function d(P, A) {
            for (te = P, re = A, u = 0; !ae && ne && !M && u < oe.length; u++) {
              var M, ee = oe[u], se = ie.p, ue = ee[2];
              P > 3 ? (M = ue === A) && (re = ee[(te = ee[4]) ? 5 : (te = 3, 3)], ee[4] = ee[5] = t) : ee[0] <= se && ((M = P < 2 && se < ee[1]) ? (te = 0, 
              ie.v = A, ie.n = ee[1]) : se < ue && (M = P < 3 || ee[0] > A || A > ue) && (ee[4] = P, 
              ee[5] = A, ie.n = ue, te = 0));
            }
            if (M || P > 1) return q;
            throw ae = !0, A;
          }
          return function(M, oe, se) {
            if (ne > 1) throw TypeError("Generator is already running");
            for (ae && 1 === oe && d(oe, se), te = oe, re = se; (u = te < 2 ? t : re) || !ae; ) {
              ee || (te ? te < 3 ? (te > 1 && (ie.n = -1), d(te, re)) : ie.n = re : ie.v = re);
              try {
                if (ne = 2, ee) {
                  if (te || (M = "next"), u = ee[M]) {
                    if (!(u = u.call(ee, re))) throw TypeError("iterator result is not an object");
                    if (!u.done) return u;
                    re = u.value, te < 2 && (te = 0);
                  } else 1 === te && (u = ee.return) && u.call(ee), te < 2 && (re = TypeError("The iterator does not provide a '" + M + "' method"), 
                  te = 1);
                  ee = t;
                } else if ((u = (ae = ie.n < 0) ? re : P.call(A, ie)) !== q) break;
              } catch (u) {
                ee = t, te = 1, re = u;
              } finally {
                ne = 1;
              }
            }
            return {
              value: u,
              done: ae
            };
          };
        }(P, M, ee), !0), re;
      }
      var q = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      u = Object.getPrototypeOf;
      var ee = [][A] ? u(u([][A]())) : (_regeneratorDefine2(u = {}, A, function() {
        return this;
      }), u), te = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(ee);
      function f(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, 
        _regeneratorDefine2(t, M, "GeneratorFunction")), t.prototype = Object.create(te), 
        t;
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(te, "constructor", GeneratorFunctionPrototype), 
      _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), 
      GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, M, "GeneratorFunction"), 
      _regeneratorDefine2(te), _regeneratorDefine2(te, M, "Generator"), _regeneratorDefine2(te, A, function() {
        return this;
      }), _regeneratorDefine2(te, "toString", function() {
        return "[object Generator]";
      }), (_regenerator = function _regenerator() {
        return {
          w: i,
          m: f
        };
      })();
    }
    function _regeneratorDefine2(t, u, P, A) {
      var M = Object.defineProperty;
      try {
        M({}, "", {});
      } catch (t) {
        M = 0;
      }
      _regeneratorDefine2 = function _regeneratorDefine(t, u, P, A) {
        function o(u, P) {
          _regeneratorDefine2(t, u, function(t) {
            return this._invoke(u, P, t);
          });
        }
        u ? M ? M(t, u, {
          value: P,
          enumerable: !A,
          configurable: !A,
          writable: !A
        }) : t[u] = P : (o("next", 0), o("throw", 1), o("return", 2));
      }, _regeneratorDefine2(t, u, P, A);
    }
    function _asyncIterator(t) {
      var u, P, A, M = 2;
      for ("undefined" != typeof Symbol && (P = Symbol.asyncIterator, A = Symbol.iterator); M--; ) {
        if (P && null != (u = t[P])) return u.call(t);
        if (A && null != (u = t[A])) return new AsyncFromSyncIterator(u.call(t));
        P = "@@asyncIterator", A = "@@iterator";
      }
      throw new TypeError("Object is not async iterable");
    }
    function AsyncFromSyncIterator(t) {
      function AsyncFromSyncIteratorContinuation(t) {
        if (Object(t) !== t) return Promise.reject(new TypeError(t + " is not an object."));
        var u = t.done;
        return Promise.resolve(t.value).then(function(t) {
          return {
            value: t,
            done: u
          };
        });
      }
      return AsyncFromSyncIterator = function AsyncFromSyncIterator(t) {
        this.s = t, this.n = t.next;
      }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function next() {
          return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function _return(t) {
          var u = this.s.return;
          return void 0 === u ? Promise.resolve({
            value: t,
            done: !0
          }) : AsyncFromSyncIteratorContinuation(u.apply(this.s, arguments));
        },
        throw: function _throw(t) {
          var u = this.s.return;
          return void 0 === u ? Promise.reject(t) : AsyncFromSyncIteratorContinuation(u.apply(this.s, arguments));
        }
      }, new AsyncFromSyncIterator(t);
    }
    function _awaitAsyncGenerator(t) {
      return new _OverloadYield(t, 0);
    }
    function AsyncGenerator(t) {
      var u, P;
      function resume(u, P) {
        try {
          var A = t[u](P), M = A.value, q = M instanceof _OverloadYield;
          Promise.resolve(q ? M.v : M).then(function(P) {
            if (q) {
              var ee = "return" === u && M.k ? u : "next";
              if (!M.k || P.done) return resume(ee, P);
              P = t[ee](P).value;
            }
            settle(!!A.done, P);
          }, function(t) {
            resume("throw", t);
          });
        } catch (t) {
          settle(2, t);
        }
      }
      function settle(t, A) {
        2 === t ? u.reject(A) : u.resolve({
          value: A,
          done: t
        }), (u = u.next) ? resume(u.key, u.arg) : P = null;
      }
      this._invoke = function(t, A) {
        return new Promise(function(M, q) {
          var ee = {
            key: t,
            arg: A,
            resolve: M,
            reject: q,
            next: null
          };
          P ? P = P.next = ee : (u = P = ee, resume(t, A));
        });
      }, "function" != typeof t.return && (this.return = void 0);
    }
    function _OverloadYield(t, u) {
      this.v = t, this.k = u;
    }
    function readSseChunks(t, u) {
      return _readSseChunks.apply(this, arguments);
    }
    function _readSseChunks() {
      return _readSseChunks = function _wrapAsyncGenerator(t) {
        return function() {
          return new AsyncGenerator(t.apply(this, arguments));
        };
      }(_regenerator().m(function _callee(t, u) {
        var P, A, M, q, ee;
        return _regenerator().w(function(te) {
          for (;;) switch (te.p = te.n) {
           case 0:
            P = t.getReader(), A = new TextDecoder, te.p = 1;

           case 2:
            if (!(ee = !(null != u && u.aborted))) {
              te.n = 4;
              break;
            }
            return te.n = 3, _awaitAsyncGenerator(P.read());

           case 3:
            ee = !(M = te.v).done;

           case 4:
            if (!ee) {
              te.n = 6;
              break;
            }
            return te.n = 5, A.decode(M.value, {
              stream: !0
            });

           case 5:
            te.n = 2;
            break;

           case 6:
            if (!(q = A.decode())) {
              te.n = 7;
              break;
            }
            return te.n = 7, q;

           case 7:
            return te.p = 7, P.releaseLock(), te.f(7);

           case 8:
            return te.a(2);
          }
        }, _callee, null, [ [ 1, , 7, 8 ] ]);
      })), _readSseChunks.apply(this, arguments);
    }
    function parseFrame(t) {
      var u, P = "message", A = [], M = _createForOfIteratorHelper(t.split("\n"));
      try {
        for (M.s(); !(u = M.n()).done; ) {
          var q = u.value;
          if (q && !q.startsWith(":")) {
            var ee = q.indexOf(":"), te = -1 === ee ? q : q.slice(0, ee), re = -1 === ee ? "" : q.slice(ee + 1).replace(/^ /, "");
            "event" === te ? P = re : "data" === te && A.push(re);
          }
        }
      } catch (t) {
        M.e(t);
      } finally {
        M.f();
      }
      if (!A.length) return null;
      var ne = A.join("\n"), oe = ne;
      try {
        oe = JSON.parse(ne);
      } catch (t) {}
      return {
        event: P,
        data: oe
      };
    }
    function createSseParser() {
      var t = "", u = !1;
      return {
        push: function push(P) {
          u && P.startsWith("\n") && (P = P.slice(1)), u = P.endsWith("\r"), t += P.replace(/\r\n|\r/g, "\n");
          for (var A, M = []; -1 !== (A = t.indexOf("\n\n")); ) {
            var q = t.slice(0, A);
            t = t.slice(A + 2);
            var ee = parseFrame(q);
            ee && M.push(ee);
          }
          return M;
        },
        flush: function flush() {
          var u = t;
          return t = "", u ? parseFrame(u) : null;
        }
      };
    }
    function streamSse(t, u) {
      return _streamSse.apply(this, arguments);
    }
    function _streamSse() {
      return _streamSse = function _asyncToGenerator(t) {
        return function() {
          var u = this, P = arguments;
          return new Promise(function(A, M) {
            var q = t.apply(u, P);
            function _next(t) {
              asyncGeneratorStep(q, A, M, _next, _throw, "next", t);
            }
            function _throw(t) {
              asyncGeneratorStep(q, A, M, _next, _throw, "throw", t);
            }
            _next(void 0);
          });
        };
      }(_regenerator().m(function _callee2(t, u) {
        var P, A, M, q, ee, te, re, ne, oe, ae, ie, se, ue, ce, fe, le, de, pe, he, ye, ge, be, ve = arguments;
        return _regenerator().w(function(me) {
          for (;;) switch (me.p = me.n) {
           case 0:
            P = u.emit, M = (A = ve.length > 2 && void 0 !== ve[2] ? ve[2] : {}).terminal, q = void 0 === M ? "done" : M, 
            ee = A.failure, te = void 0 === ee ? "error" : ee, re = createSseParser(), ne = function handle(t) {
              return null !== te && t.event === te ? {
                ok: !1,
                error: t.data
              } : null !== q && t.event === q ? {
                ok: !0,
                data: t.data
              } : (P(t.event, t.data), null);
            }, oe = !1, ae = !1, me.p = 1, se = _asyncIterator(t);

           case 2:
            return me.n = 3, se.next();

           case 3:
            if (!(oe = !(ue = me.v).done)) {
              me.n = 11;
              break;
            }
            ce = ue.value, fe = _createForOfIteratorHelper(re.push(ce)), me.p = 4, fe.s();

           case 5:
            if ((le = fe.n()).done) {
              me.n = 7;
              break;
            }
            if (de = le.value, !(pe = ne(de))) {
              me.n = 6;
              break;
            }
            return me.a(2, pe);

           case 6:
            me.n = 5;
            break;

           case 7:
            me.n = 9;
            break;

           case 8:
            me.p = 8, ge = me.v, fe.e(ge);

           case 9:
            return me.p = 9, fe.f(), me.f(9);

           case 10:
            oe = !1, me.n = 2;
            break;

           case 11:
            me.n = 13;
            break;

           case 12:
            me.p = 12, be = me.v, ae = !0, ie = be;

           case 13:
            if (me.p = 13, me.p = 14, !oe || null == se.return) {
              me.n = 15;
              break;
            }
            return me.n = 15, se.return();

           case 15:
            if (me.p = 15, !ae) {
              me.n = 16;
              break;
            }
            throw ie;

           case 16:
            return me.f(15);

           case 17:
            return me.f(13);

           case 18:
            if (!(he = re.flush())) {
              me.n = 19;
              break;
            }
            if (!(ye = ne(he))) {
              me.n = 19;
              break;
            }
            return me.a(2, ye);

           case 19:
            if (null !== q) {
              me.n = 20;
              break;
            }
            return me.a(2, {
              ok: !0,
              data: void 0
            });

           case 20:
            return me.a(2, {
              ok: !1,
              error: {
                code: "stream_ended",
                message: "stream ended without a terminal"
              }
            });
          }
        }, _callee2, null, [ [ 14, , 15, 17 ], [ 4, 8, 9, 10 ], [ 1, 12, 13, 18 ] ]);
      })), _streamSse.apply(this, arguments);
    }
    AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
      return this;
    }, AsyncGenerator.prototype.next = function(t) {
      return this._invoke("next", t);
    }, AsyncGenerator.prototype.throw = function(t) {
      return this._invoke("throw", t);
    }, AsyncGenerator.prototype.return = function(t) {
      return this._invoke("return", t);
    };
    var Se = [ "headers" ];
    function utils_typeof(t) {
      return utils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, utils_typeof(t);
    }
    function utils_regenerator() {
      var t, u, P = "function" == typeof Symbol ? Symbol : {}, A = P.iterator || "@@iterator", M = P.toStringTag || "@@toStringTag";
      function i(P, A, M, ee) {
        var te = A && A.prototype instanceof Generator ? A : Generator, re = Object.create(te.prototype);
        return utils_regeneratorDefine2(re, "_invoke", function(P, A, M) {
          var ee, te, re, ne = 0, oe = M || [], ae = !1, ie = {
            p: 0,
            n: 0,
            v: t,
            a: d,
            f: d.bind(t, 4),
            d: function d(u, P) {
              return ee = u, te = 0, re = t, ie.n = P, q;
            }
          };
          function d(P, A) {
            for (te = P, re = A, u = 0; !ae && ne && !M && u < oe.length; u++) {
              var M, ee = oe[u], se = ie.p, ue = ee[2];
              P > 3 ? (M = ue === A) && (re = ee[(te = ee[4]) ? 5 : (te = 3, 3)], ee[4] = ee[5] = t) : ee[0] <= se && ((M = P < 2 && se < ee[1]) ? (te = 0, 
              ie.v = A, ie.n = ee[1]) : se < ue && (M = P < 3 || ee[0] > A || A > ue) && (ee[4] = P, 
              ee[5] = A, ie.n = ue, te = 0));
            }
            if (M || P > 1) return q;
            throw ae = !0, A;
          }
          return function(M, oe, se) {
            if (ne > 1) throw TypeError("Generator is already running");
            for (ae && 1 === oe && d(oe, se), te = oe, re = se; (u = te < 2 ? t : re) || !ae; ) {
              ee || (te ? te < 3 ? (te > 1 && (ie.n = -1), d(te, re)) : ie.n = re : ie.v = re);
              try {
                if (ne = 2, ee) {
                  if (te || (M = "next"), u = ee[M]) {
                    if (!(u = u.call(ee, re))) throw TypeError("iterator result is not an object");
                    if (!u.done) return u;
                    re = u.value, te < 2 && (te = 0);
                  } else 1 === te && (u = ee.return) && u.call(ee), te < 2 && (re = TypeError("The iterator does not provide a '" + M + "' method"), 
                  te = 1);
                  ee = t;
                } else if ((u = (ae = ie.n < 0) ? re : P.call(A, ie)) !== q) break;
              } catch (u) {
                ee = t, te = 1, re = u;
              } finally {
                ne = 1;
              }
            }
            return {
              value: u,
              done: ae
            };
          };
        }(P, M, ee), !0), re;
      }
      var q = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      u = Object.getPrototypeOf;
      var ee = [][A] ? u(u([][A]())) : (utils_regeneratorDefine2(u = {}, A, function() {
        return this;
      }), u), te = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(ee);
      function f(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, 
        utils_regeneratorDefine2(t, M, "GeneratorFunction")), t.prototype = Object.create(te), 
        t;
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, utils_regeneratorDefine2(te, "constructor", GeneratorFunctionPrototype), 
      utils_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), 
      GeneratorFunction.displayName = "GeneratorFunction", utils_regeneratorDefine2(GeneratorFunctionPrototype, M, "GeneratorFunction"), 
      utils_regeneratorDefine2(te), utils_regeneratorDefine2(te, M, "Generator"), utils_regeneratorDefine2(te, A, function() {
        return this;
      }), utils_regeneratorDefine2(te, "toString", function() {
        return "[object Generator]";
      }), (utils_regenerator = function _regenerator() {
        return {
          w: i,
          m: f
        };
      })();
    }
    function utils_regeneratorDefine2(t, u, P, A) {
      var M = Object.defineProperty;
      try {
        M({}, "", {});
      } catch (t) {
        M = 0;
      }
      utils_regeneratorDefine2 = function _regeneratorDefine(t, u, P, A) {
        function o(u, P) {
          utils_regeneratorDefine2(t, u, function(t) {
            return this._invoke(u, P, t);
          });
        }
        u ? M ? M(t, u, {
          value: P,
          enumerable: !A,
          configurable: !A,
          writable: !A
        }) : t[u] = P : (o("next", 0), o("throw", 1), o("return", 2));
      }, utils_regeneratorDefine2(t, u, P, A);
    }
    function ownKeys(t, u) {
      var P = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var A = Object.getOwnPropertySymbols(t);
        u && (A = A.filter(function(u) {
          return Object.getOwnPropertyDescriptor(t, u).enumerable;
        })), P.push.apply(P, A);
      }
      return P;
    }
    function _objectSpread(t) {
      for (var u = 1; u < arguments.length; u++) {
        var P = null != arguments[u] ? arguments[u] : {};
        u % 2 ? ownKeys(Object(P), !0).forEach(function(u) {
          utils_defineProperty(t, u, P[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P)) : ownKeys(Object(P)).forEach(function(u) {
          Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(P, u));
        });
      }
      return t;
    }
    function utils_defineProperty(t, u, P) {
      return (u = function utils_toPropertyKey(t) {
        var u = function utils_toPrimitive(t, u) {
          if ("object" != utils_typeof(t) || !t) return t;
          var P = t[Symbol.toPrimitive];
          if (void 0 !== P) {
            var A = P.call(t, u || "default");
            if ("object" != utils_typeof(A)) return A;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === u ? String : Number)(t);
        }(t, "string");
        return "symbol" == utils_typeof(u) ? u : u + "";
      }(u)) in t ? Object.defineProperty(t, u, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[u] = P, t;
    }
    function utils_asyncGeneratorStep(t, u, P, A, M, q, ee) {
      try {
        var te = t[q](ee), re = te.value;
      } catch (t) {
        return void P(t);
      }
      te.done ? u(re) : Promise.resolve(re).then(A, M);
    }
    function utils_asyncToGenerator(t) {
      return function() {
        var u = this, P = arguments;
        return new Promise(function(A, M) {
          var q = t.apply(u, P);
          function _next(t) {
            utils_asyncGeneratorStep(q, A, M, _next, _throw, "next", t);
          }
          function _throw(t) {
            utils_asyncGeneratorStep(q, A, M, _next, _throw, "throw", t);
          }
          _next(void 0);
        });
      };
    }
    var ke = function jigsawFetchInit() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = t.headers, P = function _objectWithoutProperties(t, u) {
        if (null == t) return {};
        var P, A, M = function _objectWithoutPropertiesLoose(t, u) {
          if (null == t) return {};
          var P = {};
          for (var A in t) if ({}.hasOwnProperty.call(t, A)) {
            if (-1 !== u.indexOf(A)) continue;
            P[A] = t[A];
          }
          return P;
        }(t, u);
        if (Object.getOwnPropertySymbols) {
          var q = Object.getOwnPropertySymbols(t);
          for (A = 0; A < q.length; A++) P = q[A], -1 === u.indexOf(P) && {}.propertyIsEnumerable.call(t, P) && (M[P] = t[P]);
        }
        return M;
      }(t, Se), A = be.getBrand(), M = ue.get(), q = _objectSpread({
        "x-vitalsource-secure-token": "string" == typeof M ? M : "",
        "x-vitalsource-brand": null == A ? void 0 : A.name
      }, u);
      return we() && (q["x-vitalsource-sed"] = "secure"), _objectSpread(_objectSpread({
        method: "GET",
        credentials: "include"
      }, P), {}, {
        headers: q
      });
    }, xe = function() {
      var t = utils_asyncToGenerator(utils_regenerator().m(function _callee2(t) {
        var u, P, A, M = arguments;
        return utils_regenerator().w(function(q) {
          for (;;) if (0 === q.n) return P = M.length > 2 && void 0 !== M[2] ? M[2] : function(t) {
            return t;
          }, (u = ke(_objectSpread(_objectSpread({}, u = M.length > 1 && void 0 !== M[1] ? M[1] : {}), {}, {
            headers: _objectSpread({
              accept: "application/json"
            }, u.headers)
          }))).body && "string" != typeof u.body && (A = !1 !== u.underscoreKeys ? Re(u.body) : u.body, 
          u.body = JSON.stringify(A), u.headers["Content-Type"] = "application/json; charset=UTF-8"), 
          delete u.underscoreKeys, q.a(2, fetch("".concat(be.JIGSAW_URL).concat(t), u).then(Ee).then(function(t) {
            return t.ok && (t.data = P(t.data)), t;
          }).catch(function(t) {
            return _e(t.message);
          }));
        }, _callee2);
      }));
      return function callJigsaw(u) {
        return t.apply(this, arguments);
      };
    }(), Pe = function() {
      var t = utils_asyncToGenerator(utils_regenerator().m(function _callee3(t) {
        var u, P, A, M, q, ee, te, re, ne = arguments;
        return utils_regenerator().w(function(oe) {
          for (;;) switch (oe.p = oe.n) {
           case 0:
            return P = (u = ne.length > 1 && void 0 !== ne[1] ? ne[1] : {}).emit, A = u.signal, 
            M = u.body, q = u.terminal, ee = u.failure, oe.p = 1, oe.n = 2, fetch("".concat(be.JIGSAW_URL).concat(t), _objectSpread(_objectSpread({}, ke({
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              }
            })), {}, {
              body: JSON.stringify(M),
              signal: A
            }));

           case 2:
            if ((te = oe.v).ok) {
              oe.n = 3;
              break;
            }
            return oe.a(2, {
              ok: !1,
              status: te.status
            });

           case 3:
            return oe.n = 4, streamSse(readSseChunks(te.body, A), {
              emit: P,
              signal: A
            }, {
              terminal: q,
              failure: ee
            });

           case 4:
            return oe.a(2, oe.v);

           case 5:
            if (oe.p = 5, re = oe.v, !(null != A && A.aborted || "AbortError" === (null == re ? void 0 : re.name))) {
              oe.n = 6;
              break;
            }
            return oe.a(2, {
              ok: !1,
              aborted: !0
            });

           case 6:
            return oe.a(2, {
              ok: !1
            });
          }
        }, _callee3, null, [ [ 1, 5 ] ]);
      }));
      return function streamJigsaw(u) {
        return t.apply(this, arguments);
      };
    }(), je = function memoizedJigsaw(t, u, P) {
      return function applyPromiseCache(t, u) {
        return se[t] || (se[t] = u()), se[t].then(function(t) {
          return ie()({}, t);
        });
      }(t, function() {
        return xe(t, u, P);
      });
    }, Ee = function() {
      var t = utils_asyncToGenerator(utils_regenerator().m(function _callee4(t) {
        var u, P, A, M, q;
        return utils_regenerator().w(function(ee) {
          for (;;) switch (ee.p = ee.n) {
           case 0:
            return P = null, ee.p = 1, ee.n = 2, t.text();

           case 2:
            A = ee.v, P = A ? JSON.parse(A) : null, ee.n = 4;
            break;

           case 3:
            return ee.p = 3, q = ee.v, M = q.message, ee.a(2, _e(M, t.status));

           case 4:
            if (!t.ok) {
              ee.n = 5;
              break;
            }
            return ee.a(2, me(P, t.status));

           case 5:
            return ee.a(2, _e(null === (u = P) || void 0 === u ? void 0 : u.message, t.status));
          }
        }, _callee4, null, [ [ 1, 3 ] ]);
      }));
      return function wrapResponse(u) {
        return t.apply(this, arguments);
      };
    }(), Te = function transformKeys(t, u) {
      var P = {};
      for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (P[u(A)] = "object" === utils_typeof(t[A]) ? Te(t[A], u) : t[A]);
      return P;
    }, Ae = function underscore(t) {
      return t.replace(/[A-Z]/g, function(t) {
        return "_" + t.toLowerCase();
      });
    }, Re = function underscoreKeys(t) {
      return Te(t, Ae);
    };
    __webpack_require__(533), __webpack_require__(35231), __webpack_require__(84095), 
    __webpack_require__(67579), __webpack_require__(79073), __webpack_require__(58649), 
    __webpack_require__(68329), __webpack_require__(30789), __webpack_require__(58565);
    function getWindow(t) {
      var u;
      return t.document ? t : !!t.defaultView ? t.defaultView : null === (u = t.ownerDocument) || void 0 === u ? void 0 : u.defaultView;
    }
    var Ie = function findObjectFromPath(t) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "").split(".").reduce(function(t, u) {
        return t && t[u] ? t[u] : null;
      }, t);
    }, Me = function findObjectParentFromPath(t) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "").split(".").slice(0, -1).reduce(function(t, u) {
        return t && t[u] ? t[u] : null;
      }, t);
    }, Fe = function buildJigsawURL(t) {
      var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, P = [], A = Object.keys(u).sort(function(t, u) {
        return t.length > u.length ? -1 : 1;
      }).reduce(function(t, A) {
        var M = new RegExp(":".concat(A), "g");
        return M.test(t) ? t.replace(M, encodeURIComponent(u[A])) : (P.push(A), t);
      }, t);
      if (P.length > 0) {
        var M = "https://mosaic.test", q = new URL("".concat(M).concat(A));
        P.forEach(function(t) {
          q.searchParams.set(Ae(t), u[t]);
        }), A = q.toString().replace(M, "");
      }
      return A;
    }, Ce = function memoize(t) {
      var u = {}, P = Array.prototype.slice;
      return function() {
        var A = P.call(arguments);
        if (A in u) return u[A];
        var M = t.apply(this, A);
        return u[A] = M, M;
      };
    };
    function user_typeof(t) {
      return user_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, user_typeof(t);
    }
    function user_ownKeys(t, u) {
      var P = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var A = Object.getOwnPropertySymbols(t);
        u && (A = A.filter(function(u) {
          return Object.getOwnPropertyDescriptor(t, u).enumerable;
        })), P.push.apply(P, A);
      }
      return P;
    }
    function user_objectSpread(t) {
      for (var u = 1; u < arguments.length; u++) {
        var P = null != arguments[u] ? arguments[u] : {};
        u % 2 ? user_ownKeys(Object(P), !0).forEach(function(u) {
          user_defineProperty(t, u, P[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P)) : user_ownKeys(Object(P)).forEach(function(u) {
          Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(P, u));
        });
      }
      return t;
    }
    function user_defineProperty(t, u, P) {
      return (u = function user_toPropertyKey(t) {
        var u = function user_toPrimitive(t, u) {
          if ("object" != user_typeof(t) || !t) return t;
          var P = t[Symbol.toPrimitive];
          if (void 0 !== P) {
            var A = P.call(t, u || "default");
            if ("object" != user_typeof(A)) return A;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === u ? String : Number)(t);
        }(t, "string");
        return "symbol" == user_typeof(u) ? u : u + "";
      }(u)) in t ? Object.defineProperty(t, u, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[u] = P, t;
    }
    function getJigsawBooklist() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = function getNextParams() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return user_objectSpread(user_objectSpread({}, t), {}, {
          offset: (t.offset || 0) + (t.perPage || 25)
        });
      }(t), P = je(Fe("/books", user_objectSpread({}, t))).then(function(t) {
        var P = t.data;
        return P.books && P.books.length > 0 ? {
          data: P,
          next: u
        } : {
          data: P
        };
      });
      return {
        request: P,
        next: u
      };
    }
    const De = {
      getHighlightSummary: function getHighlightSummary() {
        return xe("/highlights");
      },
      getBooklist: function getBooklist() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = getJigsawBooklist(t = user_objectSpread({
          preload: !0
        }, t)), P = u.request, A = u.next;
        return t.preload && getJigsawBooklist(A), new Promise(function(t, u) {
          P.then(function(u) {
            t(user_objectSpread(user_objectSpread({}, u), {}, {
              next: A
            }));
          });
        });
      },
      SSO: function SSO(t) {
        return xe("/user/sso", {
          method: "POST",
          body: {
            redirect: t
          }
        });
      },
      createLTILaunch: function createLTILaunch() {
        return xe("/user/lti", {
          method: "POST",
          body: {
            launch: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          },
          dataType: "json"
        });
      },
      getInfo: function getInfo() {
        return xe("/user");
      },
      setInfo: function setInfo(t) {
        return xe("/user", {
          method: "PUT",
          body: {
            user: t
          }
        });
      },
      forgotPassword: function forgotPassword() {
        return xe("/forgot", {
          method: "POST"
        });
      },
      updateForgottenPassword: function updateForgottenPassword(t) {
        return xe(Fe("/forgot/:token", {
          token: t.token
        }), {
          method: "PUT",
          body: {
            forgot: t
          }
        });
      },
      signOut: function signOut() {
        return xe("/logout", {
          method: "DELETE"
        });
      },
      updateLicense: function updateLicense() {
        return xe(Fe("/user/update_license"), {
          method: "POST"
        });
      },
      asyncUpdateLicense: function asyncUpdateLicense() {
        return xe(Fe("/user/async_license"), {
          method: "POST"
        });
      },
      asyncLicenseStatus: function asyncLicenseStatus(t) {
        return xe(Fe("/user/".concat(t, "/async_license_status")));
      },
      dynamicLink: function dynamicLink(t) {
        return xe("/user/dynamic_link", {
          method: "POST",
          body: {
            data: t
          },
          dataType: "json"
        });
      },
      updatePreferences: function updatePreferences(t) {
        return xe("/user/update_user_preferences", {
          method: "POST",
          body: {
            preferences: t
          },
          underscoreKeys: !1
        });
      }
    };
    function ai_typeof(t) {
      return ai_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, ai_typeof(t);
    }
    function ai_ownKeys(t, u) {
      var P = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var A = Object.getOwnPropertySymbols(t);
        u && (A = A.filter(function(u) {
          return Object.getOwnPropertyDescriptor(t, u).enumerable;
        })), P.push.apply(P, A);
      }
      return P;
    }
    function ai_objectSpread(t) {
      for (var u = 1; u < arguments.length; u++) {
        var P = null != arguments[u] ? arguments[u] : {};
        u % 2 ? ai_ownKeys(Object(P), !0).forEach(function(u) {
          ai_defineProperty(t, u, P[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P)) : ai_ownKeys(Object(P)).forEach(function(u) {
          Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(P, u));
        });
      }
      return t;
    }
    function ai_defineProperty(t, u, P) {
      return (u = function ai_toPropertyKey(t) {
        var u = function ai_toPrimitive(t, u) {
          if ("object" != ai_typeof(t) || !t) return t;
          var P = t[Symbol.toPrimitive];
          if (void 0 !== P) {
            var A = P.call(t, u || "default");
            if ("object" != ai_typeof(A)) return A;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === u ? String : Number)(t);
        }(t, "string");
        return "symbol" == ai_typeof(u) ? u : u + "";
      }(u)) in t ? Object.defineProperty(t, u, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[u] = P, t;
    }
    var Le = Ce(function() {
      return De.getInfo().then(function(t) {
        return t.data.sessionId;
      });
    }), Ge = {
      one: function one(t) {
        return xe(Fe("/ai/one", {}), {
          body: t,
          method: "POST",
          underscoreKeys: !1
        });
      },
      oneIndexed: function oneIndexed(t) {
        return xe(Fe("/ai/one/indexed"), {
          body: t,
          method: "POST",
          underscoreKeys: !1
        });
      },
      getAssetStatus: function getAssetStatus(t) {
        return xe(Fe("/ai/api/asset-status/:assetId", {
          assetId: t
        }));
      },
      translate: function translate(t) {
        return Le().then(function(u) {
          return xe(Fe("/ai/translate"), {
            body: ai_objectSpread(ai_objectSpread({}, t), {}, {
              jigsawSessionId: u
            }),
            method: "POST",
            underscoreKeys: !1
          });
        });
      },
      translateEvent: function translateEvent(t) {
        return Le().then(function(u) {
          return xe(Fe("/ai/translate/event"), {
            body: ai_objectSpread(ai_objectSpread({}, t), {}, {
              sessionId: u
            }),
            method: "POST",
            underscoreKeys: !1
          });
        });
      },
      listChats: function listChats(t) {
        return xe(Fe("/ai/one/chats", {
          vbid: t
        }), {
          method: "GET",
          underscoreKeys: !1
        });
      },
      getChat: function getChat(t) {
        return xe(Fe("/ai/one/chat/".concat(t)), {
          method: "GET",
          underscoreKeys: !1
        });
      },
      updateChat: function updateChat(t, u) {
        return xe(Fe("/ai/one/chat/".concat(t)), {
          body: u,
          method: "PUT",
          underscoreKeys: !1
        });
      },
      deleteChat: function deleteChat(t) {
        return xe(Fe("/ai/one/chat/".concat(t)), {
          method: "DELETE",
          underscoreKeys: !1
        });
      },
      savePersonalization: function savePersonalization(t, u) {
        return xe(Fe("/ai/api/users/me/personalization"), {
          method: "PUT",
          body: ai_objectSpread({
            vbid: t
          }, u),
          underscoreKeys: !1
        });
      },
      getPersonalization: function getPersonalization(t) {
        return xe(Fe("/ai/api/users/me/personalization", {
          vbid: t
        }), {
          method: "GET",
          underscoreKeys: !1
        });
      },
      deletePersonalization: function deletePersonalization(t) {
        return xe(Fe("/ai/api/users/me/personalization", {
          vbid: t
        }), {
          method: "DELETE",
          underscoreKeys: !1
        });
      },
      simplify: function simplify(t, u) {
        var P = t.emit, A = t.signal;
        return Pe("/ai/api/mode/simplify", {
          emit: P,
          signal: A,
          body: u
        });
      },
      createEvent: function createEvent(t) {
        return xe(Fe("/ai/api/users/me/events"), {
          method: "POST",
          body: t,
          underscoreKeys: !1
        });
      }
    };
    const Be = Ge;
    __webpack_require__(7918);
    function babble_createForOfIteratorHelper(t, u) {
      var P = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (!P) {
        if (Array.isArray(t) || (P = function babble_unsupportedIterableToArray(t, u) {
          if (t) {
            if ("string" == typeof t) return babble_arrayLikeToArray(t, u);
            var P = {}.toString.call(t).slice(8, -1);
            return "Object" === P && t.constructor && (P = t.constructor.name), "Map" === P || "Set" === P ? Array.from(t) : "Arguments" === P || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P) ? babble_arrayLikeToArray(t, u) : void 0;
          }
        }(t)) || u && t && "number" == typeof t.length) {
          P && (t = P);
          var A = 0, M = function F() {};
          return {
            s: M,
            n: function n() {
              return A >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[A++]
              };
            },
            e: function e(t) {
              throw t;
            },
            f: M
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var q, ee = !0, te = !1;
      return {
        s: function s() {
          P = P.call(t);
        },
        n: function n() {
          var t = P.next();
          return ee = t.done, t;
        },
        e: function e(t) {
          te = !0, q = t;
        },
        f: function f() {
          try {
            ee || null == P.return || P.return();
          } finally {
            if (te) throw q;
          }
        }
      };
    }
    function babble_arrayLikeToArray(t, u) {
      (null == u || u > t.length) && (u = t.length);
      for (var P = 0, A = Array(u); P < u; P++) A[P] = t[P];
      return A;
    }
    function babble_regenerator() {
      var t, u, P = "function" == typeof Symbol ? Symbol : {}, A = P.iterator || "@@iterator", M = P.toStringTag || "@@toStringTag";
      function i(P, A, M, ee) {
        var te = A && A.prototype instanceof Generator ? A : Generator, re = Object.create(te.prototype);
        return babble_regeneratorDefine2(re, "_invoke", function(P, A, M) {
          var ee, te, re, ne = 0, oe = M || [], ae = !1, ie = {
            p: 0,
            n: 0,
            v: t,
            a: d,
            f: d.bind(t, 4),
            d: function d(u, P) {
              return ee = u, te = 0, re = t, ie.n = P, q;
            }
          };
          function d(P, A) {
            for (te = P, re = A, u = 0; !ae && ne && !M && u < oe.length; u++) {
              var M, ee = oe[u], se = ie.p, ue = ee[2];
              P > 3 ? (M = ue === A) && (re = ee[(te = ee[4]) ? 5 : (te = 3, 3)], ee[4] = ee[5] = t) : ee[0] <= se && ((M = P < 2 && se < ee[1]) ? (te = 0, 
              ie.v = A, ie.n = ee[1]) : se < ue && (M = P < 3 || ee[0] > A || A > ue) && (ee[4] = P, 
              ee[5] = A, ie.n = ue, te = 0));
            }
            if (M || P > 1) return q;
            throw ae = !0, A;
          }
          return function(M, oe, se) {
            if (ne > 1) throw TypeError("Generator is already running");
            for (ae && 1 === oe && d(oe, se), te = oe, re = se; (u = te < 2 ? t : re) || !ae; ) {
              ee || (te ? te < 3 ? (te > 1 && (ie.n = -1), d(te, re)) : ie.n = re : ie.v = re);
              try {
                if (ne = 2, ee) {
                  if (te || (M = "next"), u = ee[M]) {
                    if (!(u = u.call(ee, re))) throw TypeError("iterator result is not an object");
                    if (!u.done) return u;
                    re = u.value, te < 2 && (te = 0);
                  } else 1 === te && (u = ee.return) && u.call(ee), te < 2 && (re = TypeError("The iterator does not provide a '" + M + "' method"), 
                  te = 1);
                  ee = t;
                } else if ((u = (ae = ie.n < 0) ? re : P.call(A, ie)) !== q) break;
              } catch (u) {
                ee = t, te = 1, re = u;
              } finally {
                ne = 1;
              }
            }
            return {
              value: u,
              done: ae
            };
          };
        }(P, M, ee), !0), re;
      }
      var q = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      u = Object.getPrototypeOf;
      var ee = [][A] ? u(u([][A]())) : (babble_regeneratorDefine2(u = {}, A, function() {
        return this;
      }), u), te = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(ee);
      function f(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, 
        babble_regeneratorDefine2(t, M, "GeneratorFunction")), t.prototype = Object.create(te), 
        t;
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, babble_regeneratorDefine2(te, "constructor", GeneratorFunctionPrototype), 
      babble_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), 
      GeneratorFunction.displayName = "GeneratorFunction", babble_regeneratorDefine2(GeneratorFunctionPrototype, M, "GeneratorFunction"), 
      babble_regeneratorDefine2(te), babble_regeneratorDefine2(te, M, "Generator"), babble_regeneratorDefine2(te, A, function() {
        return this;
      }), babble_regeneratorDefine2(te, "toString", function() {
        return "[object Generator]";
      }), (babble_regenerator = function _regenerator() {
        return {
          w: i,
          m: f
        };
      })();
    }
    function babble_regeneratorDefine2(t, u, P, A) {
      var M = Object.defineProperty;
      try {
        M({}, "", {});
      } catch (t) {
        M = 0;
      }
      babble_regeneratorDefine2 = function _regeneratorDefine(t, u, P, A) {
        function o(u, P) {
          babble_regeneratorDefine2(t, u, function(t) {
            return this._invoke(u, P, t);
          });
        }
        u ? M ? M(t, u, {
          value: P,
          enumerable: !A,
          configurable: !A,
          writable: !A
        }) : t[u] = P : (o("next", 0), o("throw", 1), o("return", 2));
      }, babble_regeneratorDefine2(t, u, P, A);
    }
    function babble_asyncGeneratorStep(t, u, P, A, M, q, ee) {
      try {
        var te = t[q](ee), re = te.value;
      } catch (t) {
        return void P(t);
      }
      te.done ? u(re) : Promise.resolve(re).then(A, M);
    }
    function babble_asyncToGenerator(t) {
      return function() {
        var u = this, P = arguments;
        return new Promise(function(A, M) {
          var q = t.apply(u, P);
          function _next(t) {
            babble_asyncGeneratorStep(q, A, M, _next, _throw, "next", t);
          }
          function _throw(t) {
            babble_asyncGeneratorStep(q, A, M, _next, _throw, "throw", t);
          }
          _next(void 0);
        });
      };
    }
    var Ne = "/ai";
    function getHeaders() {
      var t, u, P = ue.get();
      return {
        "Content-Type": "application/json",
        "x-vitalsource-secure-token": "string" == typeof P ? P : "",
        "x-vitalsource-brand": null !== (t = null === (u = be.getBrand()) || void 0 === u ? void 0 : u.name) && void 0 !== t ? t : ""
      };
    }
    var qe = new Map;
    function sendEvent(t, u, P) {
      window.parent.postMessage({
        type: "event",
        context: "jigsaw",
        uuid: t,
        event: u,
        data: P
      }, "*");
    }
    function parseSSEStream(t, u, P) {
      return _parseSSEStream.apply(this, arguments);
    }
    function _parseSSEStream() {
      return (_parseSSEStream = babble_asyncToGenerator(babble_regenerator().m(function _callee9(t, u, P) {
        var A, M, q, ee, te, re, ne, oe, ae, ie, se, ue, ce, fe, le, de, pe, he, ye, ge, be;
        return babble_regenerator().w(function(ve) {
          for (;;) switch (ve.p = ve.n) {
           case 0:
            A = t.body.getReader(), M = new TextDecoder, q = "", ee = !1, ve.p = 1;

           case 2:
            if (!(ye = !(null != P && P.aborted))) {
              ve.n = 4;
              break;
            }
            return ve.n = 3, A.read();

           case 3:
            ye = !(te = ve.v).done;

           case 4:
            if (!ye) {
              ve.n = 21;
              break;
            }
            q += M.decode(te.value, {
              stream: !0
            }), ne = q.split("\n\n"), q = null !== (re = ne.pop()) && void 0 !== re ? re : "", 
            oe = babble_createForOfIteratorHelper(ne), ve.p = 5, oe.s();

           case 6:
            if ((ae = oe.n()).done) {
              ve.n = 17;
              break;
            }
            if ((se = ae.value).trim()) {
              ve.n = 7;
              break;
            }
            return ve.a(3, 16);

           case 7:
            ue = "message", ce = "", fe = babble_createForOfIteratorHelper(se.split("\n"));
            try {
              for (fe.s(); !(le = fe.n()).done; ) (de = le.value).startsWith("event:") ? ue = de.slice(6).trim() : de.startsWith("data:") && (ce = de.slice(5).trim());
            } catch (t) {
              fe.e(t);
            } finally {
              fe.f();
            }
            if (ce) {
              ve.n = 8;
              break;
            }
            return ve.a(3, 16);

           case 8:
            pe = void 0, ve.p = 9, pe = JSON.parse(ce), ve.n = 11;
            break;

           case 10:
            return ve.p = 10, ge = ve.v, sendEvent(u, "error", {
              code: "parse_error",
              message: 'Malformed JSON in SSE "'.concat(ue, '" event: ').concat(ge.message)
            }), ee = !0, ve.a(2);

           case 11:
            if ("status" !== ue) {
              ve.n = 12;
              break;
            }
            sendEvent(u, "status", {
              status: "string" == typeof pe ? pe : String(pe)
            }), ve.n = 16;
            break;

           case 12:
            if ("chunk" !== ue) {
              ve.n = 13;
              break;
            }
            sendEvent(u, "chunk", {
              text: null !== (ie = pe.text) && void 0 !== ie ? ie : ""
            }), ve.n = 16;
            break;

           case 13:
            if ("error" !== ue) {
              ve.n = 14;
              break;
            }
            return sendEvent(u, "error", {
              code: pe.code,
              message: pe.message
            }), ee = !0, ve.a(2);

           case 14:
            if ("done" !== ue) {
              ve.n = 15;
              break;
            }
            return sendEvent(u, "done", {
              durationMs: null !== (he = pe.durationMs) && void 0 !== he ? he : 0,
              artifactEntryId: "number" == typeof pe.artifactEntryId ? pe.artifactEntryId : null
            }), ee = !0, ve.a(2);

           case 15:
            sendEvent(u, ue, pe);

           case 16:
            ve.n = 6;
            break;

           case 17:
            ve.n = 19;
            break;

           case 18:
            ve.p = 18, be = ve.v, oe.e(be);

           case 19:
            return ve.p = 19, oe.f(), ve.f(19);

           case 20:
            ve.n = 2;
            break;

           case 21:
            return ve.p = 21, ee || null != P && P.aborted || sendEvent(u, "error", {
              code: "stream_ended",
              message: "The response stream ended without a completion signal"
            }), A.releaseLock(), ve.f(21);

           case 22:
            return ve.a(2);
          }
        }, _callee9, null, [ [ 9, 10 ], [ 5, 18, 19, 20 ], [ 1, , 21, 22 ] ]);
      }))).apply(this, arguments);
    }
    var Ue, He, Ke, ze, We, $e, Je, Ve, Qe = {
      agenticInterface: (Ve = babble_asyncToGenerator(babble_regenerator().m(function _callee(t, u, P) {
        var A, M, q, ee, te;
        return babble_regenerator().w(function(re) {
          for (;;) switch (re.p = re.n) {
           case 0:
            return A = new AbortController, qe.set(P, A), re.p = 1, re.n = 2, fetch("".concat(Ne, "/api/agentic-interface/").concat(encodeURIComponent(t)), {
              method: "POST",
              headers: getHeaders(),
              credentials: "include",
              body: JSON.stringify(u),
              signal: A.signal
            });

           case 2:
            if ((M = re.v).ok) {
              re.n = 4;
              break;
            }
            return re.n = 3, M.json().catch(function() {
              return {};
            });

           case 3:
            return ee = re.v, sendEvent(P, "error", {
              code: null !== (q = ee.code) && void 0 !== q ? q : "HTTP_".concat(M.status),
              message: ee.message
            }), re.a(2);

           case 4:
            return (te = M.headers.get("X-Babble-Session-Id")) && sendEvent(P, "session", {
              id: te
            }), re.n = 5, parseSSEStream(M, P, A.signal);

           case 5:
            return re.a(2, {
              sessionId: te
            });

           case 6:
            return re.p = 6, qe.delete(P), re.f(6);

           case 7:
            return re.a(2);
          }
        }, _callee, null, [ [ 1, , 6, 7 ] ]);
      })), function agenticInterface(t, u, P) {
        return Ve.apply(this, arguments);
      }),
      abortAgenticInterface: function abortAgenticInterface(t) {
        var u;
        null === (u = qe.get(t)) || void 0 === u || u.abort(), qe.delete(t);
      },
      deleteSession: (Je = babble_asyncToGenerator(babble_regenerator().m(function _callee2(t) {
        var u;
        return babble_regenerator().w(function(P) {
          for (;;) switch (P.n) {
           case 0:
            return P.n = 1, fetch("".concat(Ne, "/api/users/me/session/").concat(encodeURIComponent(t)), {
              method: "DELETE",
              headers: getHeaders(),
              credentials: "include"
            });

           case 1:
            return u = P.v, P.a(2, {
              ok: u.ok
            });
          }
        }, _callee2);
      })), function deleteSession(t) {
        return Je.apply(this, arguments);
      }),
      updateSession: ($e = babble_asyncToGenerator(babble_regenerator().m(function _callee3(t, u) {
        var P, A;
        return babble_regenerator().w(function(M) {
          for (;;) switch (M.n) {
           case 0:
            return P = u.summary, M.n = 1, fetch("".concat(Ne, "/api/users/me/session/").concat(encodeURIComponent(t)), {
              method: "PUT",
              headers: getHeaders(),
              credentials: "include",
              body: JSON.stringify({
                summary: P
              })
            });

           case 1:
            return A = M.v, M.a(2, {
              ok: A.ok
            });
          }
        }, _callee3);
      })), function updateSession(t, u) {
        return $e.apply(this, arguments);
      }),
      listSessions: (We = babble_asyncToGenerator(babble_regenerator().m(function _callee4() {
        var t, u, P, A = arguments;
        return babble_regenerator().w(function(M) {
          for (;;) switch (M.n) {
           case 0:
            return t = new URLSearchParams(A.length > 0 && void 0 !== A[0] ? A[0] : {}).toString(), 
            M.n = 1, fetch("".concat(Ne, "/api/users/me/sessions").concat(t ? "?".concat(t) : ""), {
              headers: getHeaders(),
              credentials: "include"
            });

           case 1:
            return u = M.v, M.n = 2, u.json().catch(function() {
              return null;
            });

           case 2:
            return P = M.v, M.a(2, {
              ok: u.ok,
              data: P
            });
          }
        }, _callee4);
      })), function listSessions() {
        return We.apply(this, arguments);
      }),
      getSession: (ze = babble_asyncToGenerator(babble_regenerator().m(function _callee5(t) {
        var u, P;
        return babble_regenerator().w(function(A) {
          for (;;) switch (A.n) {
           case 0:
            return A.n = 1, fetch("".concat(Ne, "/api/users/me/session/").concat(encodeURIComponent(t)), {
              headers: getHeaders(),
              credentials: "include"
            });

           case 1:
            return u = A.v, A.n = 2, u.json().catch(function() {
              return null;
            });

           case 2:
            return P = A.v, A.a(2, {
              ok: u.ok,
              data: P
            });
          }
        }, _callee5);
      })), function getSession(t) {
        return ze.apply(this, arguments);
      }),
      getArtifact: (Ke = babble_asyncToGenerator(babble_regenerator().m(function _callee6(t) {
        var u, P;
        return babble_regenerator().w(function(A) {
          for (;;) switch (A.n) {
           case 0:
            return A.n = 1, fetch("".concat(Ne, "/api/users/me/artifact/").concat(encodeURIComponent(t)), {
              headers: getHeaders(),
              credentials: "include"
            });

           case 1:
            return u = A.v, A.n = 2, u.json().catch(function() {
              return null;
            });

           case 2:
            return P = A.v, A.a(2, {
              ok: u.ok,
              data: P
            });
          }
        }, _callee6);
      })), function getArtifact(t) {
        return Ke.apply(this, arguments);
      }),
      createEvent: (He = babble_asyncToGenerator(babble_regenerator().m(function _callee7(t) {
        var u, P, A, M, q, ee, te, re, ne;
        return babble_regenerator().w(function(oe) {
          for (;;) switch (oe.n) {
           case 0:
            return u = t.sessionId, P = t.artifactEntryId, A = t.type, M = t.name, q = t.value, 
            ee = t.comment, te = t.evaluator, oe.n = 1, fetch("".concat(Ne, "/api/users/me/events"), {
              method: "POST",
              headers: getHeaders(),
              credentials: "include",
              body: JSON.stringify({
                sessionId: u,
                artifactEntryId: P,
                type: A,
                name: M,
                value: q,
                comment: ee,
                evaluator: te
              })
            });

           case 1:
            return re = oe.v, oe.n = 2, re.json().catch(function() {
              return null;
            });

           case 2:
            return ne = oe.v, oe.a(2, {
              ok: re.ok,
              data: ne
            });
          }
        }, _callee7);
      })), function createEvent(t) {
        return He.apply(this, arguments);
      }),
      updateEvent: (Ue = babble_asyncToGenerator(babble_regenerator().m(function _callee8(t, u) {
        var P, A, M, q, ee, te, re, ne;
        return babble_regenerator().w(function(oe) {
          for (;;) switch (oe.n) {
           case 0:
            return P = u.sessionId, A = u.artifactEntryId, M = u.type, q = u.name, ee = u.value, 
            te = u.comment, re = u.evaluator, oe.n = 1, fetch("".concat(Ne, "/api/users/me/event/").concat(encodeURIComponent(t)), {
              method: "PUT",
              headers: getHeaders(),
              credentials: "include",
              body: JSON.stringify({
                sessionId: P,
                artifactEntryId: A,
                type: M,
                name: q,
                value: ee,
                comment: te,
                evaluator: re
              })
            });

           case 1:
            return ne = oe.v, oe.a(2, {
              ok: ne.ok
            });
          }
        }, _callee8);
      })), function updateEvent(t, u) {
        return Ue.apply(this, arguments);
      })
    };
    const Xe = Qe;
    const Ye = {
      getAll: function getAll() {
        return xe("/labs");
      },
      getInfo: function getInfo(t) {
        return xe(Fe("/labs/:name", {
          name: t
        }));
      },
      enable: function enable(t) {
        return xe(Fe("/user/labs/:name/enable", {
          name: t
        }), {
          method: "POST"
        });
      },
      disable: function disable(t) {
        return xe(Fe("/user/labs/:name/disable", {
          name: t
        }), {
          method: "POST"
        });
      },
      like: function like(t) {
        return xe(Fe("/user/labs/:name/like", {
          name: t
        }), {
          method: "POST"
        });
      },
      dislike: function dislike(t) {
        return xe(Fe("/user/labs/:name/dislike", {
          name: t
        }), {
          method: "POST"
        });
      }
    };
    var Ze = __webpack_require__(14117);
    function highlights_typeof(t) {
      return highlights_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, highlights_typeof(t);
    }
    function highlights_ownKeys(t, u) {
      var P = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var A = Object.getOwnPropertySymbols(t);
        u && (A = A.filter(function(u) {
          return Object.getOwnPropertyDescriptor(t, u).enumerable;
        })), P.push.apply(P, A);
      }
      return P;
    }
    function highlights_objectSpread(t) {
      for (var u = 1; u < arguments.length; u++) {
        var P = null != arguments[u] ? arguments[u] : {};
        u % 2 ? highlights_ownKeys(Object(P), !0).forEach(function(u) {
          highlights_defineProperty(t, u, P[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P)) : highlights_ownKeys(Object(P)).forEach(function(u) {
          Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(P, u));
        });
      }
      return t;
    }
    function highlights_defineProperty(t, u, P) {
      return (u = function highlights_toPropertyKey(t) {
        var u = function highlights_toPrimitive(t, u) {
          if ("object" != highlights_typeof(t) || !t) return t;
          var P = t[Symbol.toPrimitive];
          if (void 0 !== P) {
            var A = P.call(t, u || "default");
            if ("object" != highlights_typeof(A)) return A;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === u ? String : Number)(t);
        }(t, "string");
        return "symbol" == highlights_typeof(u) ? u : u + "";
      }(u)) in t ? Object.defineProperty(t, u, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[u] = P, t;
    }
    function getHighlights(t) {
      var u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], P = Fe("/books/:isbn/highlights", {
        isbn: t
      });
      return u && function resetPromiseCacheByKey(t) {
        delete se[t];
      }(P), je(P);
    }
    function filterByPage(t, u) {
      var P = (0, Ze.parseCfi)(u.cfi);
      return t.filter(function(t) {
        if (t.cfi) try {
          var A = (0, Ze.parseCfiRange)(t.cfi);
          if (A.base.contentDoc) return Ze.CFI.equals(A.base.contentDoc, P, {
            checkAssertions: !0
          });
        } catch (t) {}
        return u.index === t.startPage;
      });
    }
    const et = {
      createBookmark: function createBookmark(t, u) {
        return xe(Fe("/books/:isbn/bookmarks", {
          isbn: t
        }), {
          method: "POST",
          body: {
            bookmark: u
          }
        });
      },
      deleteBookmark: function deleteBookmark(t, u) {
        return xe(Fe("/books/:isbn/bookmarks/:id", {
          isbn: t,
          id: u
        }), {
          method: "DELETE"
        });
      },
      createLogBookmark: function createLogBookmark(t, u, P) {
        return xe(Fe("/books/:isbn/logs/bookmark", {
          isbn: t
        }), {
          method: "POST",
          body: {
            log: {
              page: u,
              insecure: !1,
              cfi: P
            }
          }
        });
      },
      getBookmarks: function getBookmarks(t) {
        return xe(Fe("/books/:isbn/bookmarks", {
          isbn: t
        }));
      }
    };
    var tt = [ "index", "number" ];
    function book_methods_typeof(t) {
      return book_methods_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, book_methods_typeof(t);
    }
    function book_methods_ownKeys(t, u) {
      var P = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var A = Object.getOwnPropertySymbols(t);
        u && (A = A.filter(function(u) {
          return Object.getOwnPropertyDescriptor(t, u).enumerable;
        })), P.push.apply(P, A);
      }
      return P;
    }
    function book_methods_objectSpread(t) {
      for (var u = 1; u < arguments.length; u++) {
        var P = null != arguments[u] ? arguments[u] : {};
        u % 2 ? book_methods_ownKeys(Object(P), !0).forEach(function(u) {
          book_methods_defineProperty(t, u, P[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P)) : book_methods_ownKeys(Object(P)).forEach(function(u) {
          Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(P, u));
        });
      }
      return t;
    }
    function book_methods_defineProperty(t, u, P) {
      return (u = function book_methods_toPropertyKey(t) {
        var u = function book_methods_toPrimitive(t, u) {
          if ("object" != book_methods_typeof(t) || !t) return t;
          var P = t[Symbol.toPrimitive];
          if (void 0 !== P) {
            var A = P.call(t, u || "default");
            if ("object" != book_methods_typeof(A)) return A;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === u ? String : Number)(t);
        }(t, "string");
        return "symbol" == book_methods_typeof(u) ? u : u + "";
      }(u)) in t ? Object.defineProperty(t, u, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[u] = P, t;
    }
    var rt = book_methods_objectSpread(book_methods_objectSpread(book_methods_objectSpread({
      getInfo: function getInfo(t) {
        var u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], P = Fe("/info/books.json", u ? {
          isbns: t,
          reloadLicense: !0
        } : {
          isbns: t
        });
        return (u ? xe : je)(P).then(function(t) {
          return t.ok ? t.data.books.length > 0 ? book_methods_objectSpread(book_methods_objectSpread({}, t), {}, {
            data: t.data.books[0]
          }) : {
            ok: !1,
            status: 404
          } : t;
        });
      },
      getCitations: function getCitations(t) {
        return je(Fe("/books/:isbn/citation", {
          isbn: t
        }));
      },
      getPageBreaks: function getPageBreaks(t) {
        return je(Fe("/books/:isbn/pagebreaks", {
          isbn: t
        })).then(function(u) {
          return u.ok && (u.data = u.data.map(function(u) {
            return -1 === u.url.indexOf("/books/".concat(t, "/epub")) ? u.absoluteURL = "/books/".concat(t, "/epub").concat(u.url) : u.absoluteURL = u.url, 
            u;
          })), u;
        });
      },
      getPages: function getPages(t) {
        return je(Fe("/books/:isbn/pages", {
          isbn: t
        }), {}, function(t) {
          return t.map(function(t) {
            var u = t.index, P = t.number;
            return book_methods_objectSpread(book_methods_objectSpread({}, function book_methods_objectWithoutProperties(t, u) {
              if (null == t) return {};
              var P, A, M = function book_methods_objectWithoutPropertiesLoose(t, u) {
                if (null == t) return {};
                var P = {};
                for (var A in t) if ({}.hasOwnProperty.call(t, A)) {
                  if (-1 !== u.indexOf(A)) continue;
                  P[A] = t[A];
                }
                return P;
              }(t, u);
              if (Object.getOwnPropertySymbols) {
                var q = Object.getOwnPropertySymbols(t);
                for (A = 0; A < q.length; A++) P = q[A], -1 === u.indexOf(P) && {}.propertyIsEnumerable.call(t, P) && (M[P] = t[P]);
              }
              return M;
            }(t, tt)), {}, {
              index: null != u ? u : P
            });
          });
        });
      },
      getTOC: function getTOC(t) {
        return je(Fe("/books/:isbn/toc", {
          isbn: t
        }));
      },
      getFigures: function getFigures(t) {
        return je(Fe("/books/:isbn/figures", {
          isbn: t
        }));
      },
      getAncillariesSummary: function getAncillariesSummary() {
        return je(Fe("/ancillaries.json"));
      },
      getAncillariesByIsbn: function getAncillariesByIsbn(t) {
        return je(Fe("/books/:isbn/ancillaries.json", {
          isbn: t
        }));
      },
      getSpine: function getSpine(t) {
        return je(Fe("/books/:isbn/pages.json", {
          isbn: t
        })).then(function(t) {
          return t.ok && (t.data = t.data.map(function(t) {
            return {
              url: t.path,
              linear: null == t.linear || t.linear,
              cfi: t.cfi,
              cfiWithoutAssertions: t.cfiWithoutAssertions
            };
          })), t;
        });
      },
      getRebuildProgress: function getRebuildProgress(t) {
        return xe(Fe("/books/:isbn/build_progress.json", {
          isbn: t
        }));
      }
    }, {
      getHighlights,
      getHighlightsForPage: function getHighlightsForPage(t, u) {
        return getHighlights(t, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]).then(function(t) {
          return t.ok ? highlights_objectSpread(highlights_objectSpread({}, t), {}, {
            data: highlights_objectSpread(highlights_objectSpread({}, t.data), {}, {
              highlights: filterByPage(t.data.highlights, u),
              subscribedHighlights: filterByPage(t.data.subscribedHighlights, u)
            })
          }) : t;
        });
      },
      getHighlight: function getHighlight(t, u, P) {
        return xe(Fe("/books/:isbn/highlights/:syncId".concat(P ? "/shared" : ""), {
          isbn: t,
          syncId: u
        }));
      }
    }), et), {}, {
      updateUserPreferences: function updateUserPreferences(t, u) {
        return xe("/user/update_user_book_preferences", {
          method: "POST",
          body: {
            preferences: u,
            isbn: t
          },
          underscoreKeys: !1
        });
      },
      getNoraURL: function getNoraURL(t) {
        return xe("/user/nora", {
          method: "POST",
          body: {
            nora: {
              isbn: t
            }
          }
        });
      }
    });
    const nt = rt;
    const ot = {
      getVaultInfo: function getVaultInfo(t) {
        return {
          message: "Maybe we get some info here some day"
        };
      }
    };
    const at = {
      lookup: function lookup(t) {
        return xe(Fe("/dictionary/pearson/:word", {
          word: t
        }));
      }
    };
    var it = function injectScript(t, u) {
      var P, A, M = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window, q = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document.head;
      if (u) {
        try {
          A = new URL(t).toString();
        } catch (u) {
          P = t;
        }
        return new Promise(function(t) {
          !function onDomReady(t, u) {
            var P = getWindow(t);
            [ "complete", "interactive" ].some(function(t) {
              return t === P.document.readyState;
            }) ? u() : P.addEventListener("DOMContentLoaded", u);
          }(M, function() {
            if (ut(u, q)) t(); else {
              var M = document.createElement("script");
              M.id = u, M.type = "text/javascript", A ? (M.src = A, M.onload = function() {
                return t();
              }, q.appendChild(M)) : P && (M.innerText = P, q.appendChild(M), t());
            }
          });
        });
      }
      throw new Error("Injected scripts requires an id!");
    }, st = function findScript(t) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.head).querySelector("#".concat(t));
    }, ut = function containsScript(t) {
      arguments.length > 1 && void 0 !== arguments[1] || document.head;
      return !!st(t);
    };
    function search_typeof(t) {
      return search_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, search_typeof(t);
    }
    function search_regenerator() {
      var t, u, P = "function" == typeof Symbol ? Symbol : {}, A = P.iterator || "@@iterator", M = P.toStringTag || "@@toStringTag";
      function i(P, A, M, ee) {
        var te = A && A.prototype instanceof Generator ? A : Generator, re = Object.create(te.prototype);
        return search_regeneratorDefine2(re, "_invoke", function(P, A, M) {
          var ee, te, re, ne = 0, oe = M || [], ae = !1, ie = {
            p: 0,
            n: 0,
            v: t,
            a: d,
            f: d.bind(t, 4),
            d: function d(u, P) {
              return ee = u, te = 0, re = t, ie.n = P, q;
            }
          };
          function d(P, A) {
            for (te = P, re = A, u = 0; !ae && ne && !M && u < oe.length; u++) {
              var M, ee = oe[u], se = ie.p, ue = ee[2];
              P > 3 ? (M = ue === A) && (re = ee[(te = ee[4]) ? 5 : (te = 3, 3)], ee[4] = ee[5] = t) : ee[0] <= se && ((M = P < 2 && se < ee[1]) ? (te = 0, 
              ie.v = A, ie.n = ee[1]) : se < ue && (M = P < 3 || ee[0] > A || A > ue) && (ee[4] = P, 
              ee[5] = A, ie.n = ue, te = 0));
            }
            if (M || P > 1) return q;
            throw ae = !0, A;
          }
          return function(M, oe, se) {
            if (ne > 1) throw TypeError("Generator is already running");
            for (ae && 1 === oe && d(oe, se), te = oe, re = se; (u = te < 2 ? t : re) || !ae; ) {
              ee || (te ? te < 3 ? (te > 1 && (ie.n = -1), d(te, re)) : ie.n = re : ie.v = re);
              try {
                if (ne = 2, ee) {
                  if (te || (M = "next"), u = ee[M]) {
                    if (!(u = u.call(ee, re))) throw TypeError("iterator result is not an object");
                    if (!u.done) return u;
                    re = u.value, te < 2 && (te = 0);
                  } else 1 === te && (u = ee.return) && u.call(ee), te < 2 && (re = TypeError("The iterator does not provide a '" + M + "' method"), 
                  te = 1);
                  ee = t;
                } else if ((u = (ae = ie.n < 0) ? re : P.call(A, ie)) !== q) break;
              } catch (u) {
                ee = t, te = 1, re = u;
              } finally {
                ne = 1;
              }
            }
            return {
              value: u,
              done: ae
            };
          };
        }(P, M, ee), !0), re;
      }
      var q = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      u = Object.getPrototypeOf;
      var ee = [][A] ? u(u([][A]())) : (search_regeneratorDefine2(u = {}, A, function() {
        return this;
      }), u), te = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(ee);
      function f(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, 
        search_regeneratorDefine2(t, M, "GeneratorFunction")), t.prototype = Object.create(te), 
        t;
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, search_regeneratorDefine2(te, "constructor", GeneratorFunctionPrototype), 
      search_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), 
      GeneratorFunction.displayName = "GeneratorFunction", search_regeneratorDefine2(GeneratorFunctionPrototype, M, "GeneratorFunction"), 
      search_regeneratorDefine2(te), search_regeneratorDefine2(te, M, "Generator"), search_regeneratorDefine2(te, A, function() {
        return this;
      }), search_regeneratorDefine2(te, "toString", function() {
        return "[object Generator]";
      }), (search_regenerator = function _regenerator() {
        return {
          w: i,
          m: f
        };
      })();
    }
    function search_regeneratorDefine2(t, u, P, A) {
      var M = Object.defineProperty;
      try {
        M({}, "", {});
      } catch (t) {
        M = 0;
      }
      search_regeneratorDefine2 = function _regeneratorDefine(t, u, P, A) {
        function o(u, P) {
          search_regeneratorDefine2(t, u, function(t) {
            return this._invoke(u, P, t);
          });
        }
        u ? M ? M(t, u, {
          value: P,
          enumerable: !A,
          configurable: !A,
          writable: !A
        }) : t[u] = P : (o("next", 0), o("throw", 1), o("return", 2));
      }, search_regeneratorDefine2(t, u, P, A);
    }
    function search_ownKeys(t, u) {
      var P = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var A = Object.getOwnPropertySymbols(t);
        u && (A = A.filter(function(u) {
          return Object.getOwnPropertyDescriptor(t, u).enumerable;
        })), P.push.apply(P, A);
      }
      return P;
    }
    function search_objectSpread(t) {
      for (var u = 1; u < arguments.length; u++) {
        var P = null != arguments[u] ? arguments[u] : {};
        u % 2 ? search_ownKeys(Object(P), !0).forEach(function(u) {
          search_defineProperty(t, u, P[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P)) : search_ownKeys(Object(P)).forEach(function(u) {
          Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(P, u));
        });
      }
      return t;
    }
    function search_asyncGeneratorStep(t, u, P, A, M, q, ee) {
      try {
        var te = t[q](ee), re = te.value;
      } catch (t) {
        return void P(t);
      }
      te.done ? u(re) : Promise.resolve(re).then(A, M);
    }
    function search_defineProperties(t, u) {
      for (var P = 0; P < u.length; P++) {
        var A = u[P];
        A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), 
        Object.defineProperty(t, search_toPropertyKey(A.key), A);
      }
    }
    function search_defineProperty(t, u, P) {
      return (u = search_toPropertyKey(u)) in t ? Object.defineProperty(t, u, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[u] = P, t;
    }
    function search_toPropertyKey(t) {
      var u = function search_toPrimitive(t, u) {
        if ("object" != search_typeof(t) || !t) return t;
        var P = t[Symbol.toPrimitive];
        if (void 0 !== P) {
          var A = P.call(t, u || "default");
          if ("object" != search_typeof(A)) return A;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === u ? String : Number)(t);
      }(t, "string");
      return "symbol" == search_typeof(u) ? u : u + "";
    }
    var ct = Ce(function() {
      return it(be.WALDO_SCRIPT, "vst-injected-script-waldo").then(function() {
        return new Waldo(be.JIGSAW_HOST);
      });
    }), ft = function() {
      return function search_createClass(t, u, P) {
        return u && search_defineProperties(t.prototype, u), P && search_defineProperties(t, P), 
        Object.defineProperty(t, "prototype", {
          writable: !1
        }), t;
      }(function CountResults(t) {
        var u = this, P = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        !function search_classCallCheck(t, u) {
          if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function");
        }(this, CountResults), search_defineProperty(this, "results", {}), search_defineProperty(this, "pages", 1), 
        search_defineProperty(this, "currentPage", 1), search_defineProperty(this, "queueNext", function(t) {
          for (var P, A = function _loop(t) {
            if (t > u.pages) return {
              v: void 0
            };
            u.results[t] = u.results[t] || ct().then(function(P) {
              return P.counts({
                page: t,
                query: u.query
              });
            });
          }, M = u.currentPage; M < t + u.currentPage; M++) if (P = A(M)) return P.v;
        }), this.query = t, this.uuid = function generateUUID() {
          var t = (new Date).getTime();
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(u) {
            var P = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16), ("x" === u ? P : 7 & P | 8).toString(16);
          });
        }(), this.opts = P;
      }, [ {
        key: "next",
        value: (t = function search_asyncToGenerator(t) {
          return function() {
            var u = this, P = arguments;
            return new Promise(function(A, M) {
              var q = t.apply(u, P);
              function _next(t) {
                search_asyncGeneratorStep(q, A, M, _next, _throw, "next", t);
              }
              function _throw(t) {
                search_asyncGeneratorStep(q, A, M, _next, _throw, "throw", t);
              }
              _next(void 0);
            });
          };
        }(search_regenerator().m(function _callee() {
          var t, u, P, A, M, q = this, ee = arguments;
          return search_regenerator().w(function(te) {
            for (;;) switch (te.n) {
             case 0:
              if (t = ee.length > 0 && void 0 !== ee[0] ? ee[0] : {}, !(this.currentPage > this.pages)) {
                te.n = 1;
                break;
              }
              return te.a(2, {
                results: {}
              });

             case 1:
              return this.results[this.currentPage] = this.results[this.currentPage] || ct().then(function(t) {
                return t.counts({
                  page: q.currentPage,
                  query: q.query
                });
              }), te.n = 2, this.results[this.currentPage];

             case 2:
              if (u = te.v, P = u.results, A = u.pages, this.pages = A, this.currentPage++, this.queueNext(2), 
              !(P && Object.keys(P).length > 0)) {
                te.n = 4;
                break;
              }
              if (M = Object.keys(P).reduce(function(t, u) {
                return "number" == typeof P[u].count && P[u].count > 0 && (t[u.replace(".DASHPUB", "")] = search_objectSpread({}, P[u])), 
                t;
              }, {}), !(Object.keys(M).length > 0)) {
                te.n = 3;
                break;
              }
              P = search_objectSpread({}, M), te.n = 4;
              break;

             case 3:
              return te.a(2, this.next(t));

             case 4:
              return te.a(2, {
                results: P,
                cursor: this.currentPage > this.pages ? void 0 : this.uuid
              });
            }
          }, _callee, this);
        })), function next() {
          return t.apply(this, arguments);
        })
      } ]);
      var t;
    }(), lt = {};
    var dt = function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
    }, pt = function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    }, ht = {
      logEvent: function logEvent(t) {
        var u = t.name, P = t.json, A = t.vbid;
        return xe("/events/log_supernova_event", {
          method: "POST",
          body: {
            event: {
              name: u,
              vbid: A,
              json: P,
              deviceType: pt() || dt() ? "mobile" : "desktop"
            }
          }
        });
      }
    };
    function study_plan_typeof(t) {
      return study_plan_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, study_plan_typeof(t);
    }
    function study_plan_ownKeys(t, u) {
      var P = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var A = Object.getOwnPropertySymbols(t);
        u && (A = A.filter(function(u) {
          return Object.getOwnPropertyDescriptor(t, u).enumerable;
        })), P.push.apply(P, A);
      }
      return P;
    }
    function study_plan_objectSpread(t) {
      for (var u = 1; u < arguments.length; u++) {
        var P = null != arguments[u] ? arguments[u] : {};
        u % 2 ? study_plan_ownKeys(Object(P), !0).forEach(function(u) {
          study_plan_defineProperty(t, u, P[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P)) : study_plan_ownKeys(Object(P)).forEach(function(u) {
          Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(P, u));
        });
      }
      return t;
    }
    function study_plan_defineProperty(t, u, P) {
      return (u = function study_plan_toPropertyKey(t) {
        var u = function study_plan_toPrimitive(t, u) {
          if ("object" != study_plan_typeof(t) || !t) return t;
          var P = t[Symbol.toPrimitive];
          if (void 0 !== P) {
            var A = P.call(t, u || "default");
            if ("object" != study_plan_typeof(A)) return A;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === u ? String : Number)(t);
        }(t, "string");
        return "symbol" == study_plan_typeof(u) ? u : u + "";
      }(u)) in t ? Object.defineProperty(t, u, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[u] = P, t;
    }
    function studyPlanUrl(t) {
      return Fe("/ai/api/users/me/study-plan", {
        vbid: t
      });
    }
    var yt = {
      generateStudyPlan: function generateStudyPlan(t, u) {
        var P = t.emit, A = t.signal;
        return Pe("/ai/api/mode/study-plan", {
          emit: P,
          signal: A,
          body: study_plan_objectSpread({
            content: ""
          }, u)
        });
      },
      getStudyPlan: function getStudyPlan(t) {
        var u = t.vbid;
        return xe(studyPlanUrl(u));
      },
      editStudyPlan: function editStudyPlan(t) {
        var u = t.vbid, P = t.operations;
        return xe(studyPlanUrl(u), {
          method: "PUT",
          body: {
            operations: P
          },
          underscoreKeys: !1
        });
      },
      deleteStudyPlan: function deleteStudyPlan(t) {
        var u = t.vbid;
        return xe(studyPlanUrl(u), {
          method: "DELETE"
        });
      },
      logStudyPlanEvent: function logStudyPlanEvent(t) {
        var u = t.vbid, P = t.artifactEntryId, A = t.event;
        return xe("/ai/api/users/me/events", {
          method: "POST",
          body: {
            mode: "StudyPlan",
            event: A,
            vbid: u,
            artifactEntryId: P
          },
          underscoreKeys: !1
        });
      }
    };
    const gt = {
      AI: Be,
      Babble: Xe,
      Ancillaries: {
        getSummary: function getSummary() {
          return xe("/ancillaries");
        },
        getAllAccessCodes: function getAllAccessCodes() {
          return xe("/ancillaries/code");
        },
        getForVbid: function getForVbid(t) {
          return xe(Fe("/books/:vbid/ancillaries", {
            vbid: t
          }));
        },
        redeem: function redeem(t) {
          return xe(Fe("/ancillaries/:vbid/redeem", {
            vbid: t
          }), {
            method: "PUT"
          });
        }
      },
      User: De,
      Labs: Ye,
      Dictionary: at,
      Book: nt,
      Vault: ot,
      Markers: {
        getMarkers: function getMarkers() {
          return xe("/markers");
        },
        getMarker: function getMarker(t) {
          return xe(Fe("/markers/:markerId", {
            markerId: t
          }));
        },
        createMarker: function createMarker(t) {
          return xe("/markers", {
            method: "POST",
            body: {
              marker: t
            }
          });
        },
        deleteMarker: function deleteMarker(t) {
          return xe(Fe("/markers/:markerId", {
            markerId: t
          }), {
            method: "DELETE"
          });
        },
        mergeMarkers: function mergeMarkers(t, u) {
          return xe(Fe("/markers/:markerIdToDelete", {
            markerIdToDelete: u
          }), {
            method: "DELETE",
            body: {
              mergeWith: t
            }
          });
        },
        updateMarker: function updateMarker(t, u) {
          return xe(Fe("/markers/:markerId", {
            markerId: t
          }), {
            method: "PUT",
            body: {
              marker: u
            }
          });
        }
      },
      Search: {
        counts: function counts(t) {
          var u, P = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (P = search_objectSpread({
            preload: !0
          }, P)).cursor && (u = lt[P.cursor], delete P.cursor), u || (u = new ft(t, P), lt[u.uuid] = u), 
          u.next(search_objectSpread({}, P));
        },
        search: function search() {
          for (var t = arguments.length, u = new Array(t), P = 0; P < t; P++) u[P] = arguments[P];
          return ct().then(function(t) {
            return t.search.apply(t, u);
          });
        },
        metadata: function metadata(t) {
          return xe(Fe("/search/metadata", {
            q: t
          }));
        }
      },
      Sharing: {
        getFollowings: function getFollowings() {
          return xe("/user/followings");
        },
        unfollow: function unfollow(t) {
          return xe(Fe("/user/followings/:id", {
            id: t
          }), {
            method: "DELETE"
          });
        },
        follow: function follow(t) {
          return xe("/user/subscriptions", {
            method: "POST",
            body: {
              email: t
            }
          });
        }
      },
      SecureToken: ue,
      Brands: {
        setBrandConfig: function setBrandConfig(t) {
          be.setBrandConfig(t);
        }
      },
      Events: ht,
      StudyPlan: yt
    };
    function MessageRelay_ownKeys(t, u) {
      var P = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var A = Object.getOwnPropertySymbols(t);
        u && (A = A.filter(function(u) {
          return Object.getOwnPropertyDescriptor(t, u).enumerable;
        })), P.push.apply(P, A);
      }
      return P;
    }
    function MessageRelay_objectSpread(t) {
      for (var u = 1; u < arguments.length; u++) {
        var P = null != arguments[u] ? arguments[u] : {};
        u % 2 ? MessageRelay_ownKeys(Object(P), !0).forEach(function(u) {
          MessageRelay_defineProperty(t, u, P[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P)) : MessageRelay_ownKeys(Object(P)).forEach(function(u) {
          Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(P, u));
        });
      }
      return t;
    }
    function MessageRelay_regenerator() {
      var t, u, P = "function" == typeof Symbol ? Symbol : {}, A = P.iterator || "@@iterator", M = P.toStringTag || "@@toStringTag";
      function i(P, A, M, ee) {
        var te = A && A.prototype instanceof Generator ? A : Generator, re = Object.create(te.prototype);
        return MessageRelay_regeneratorDefine2(re, "_invoke", function(P, A, M) {
          var ee, te, re, ne = 0, oe = M || [], ae = !1, ie = {
            p: 0,
            n: 0,
            v: t,
            a: d,
            f: d.bind(t, 4),
            d: function d(u, P) {
              return ee = u, te = 0, re = t, ie.n = P, q;
            }
          };
          function d(P, A) {
            for (te = P, re = A, u = 0; !ae && ne && !M && u < oe.length; u++) {
              var M, ee = oe[u], se = ie.p, ue = ee[2];
              P > 3 ? (M = ue === A) && (re = ee[(te = ee[4]) ? 5 : (te = 3, 3)], ee[4] = ee[5] = t) : ee[0] <= se && ((M = P < 2 && se < ee[1]) ? (te = 0, 
              ie.v = A, ie.n = ee[1]) : se < ue && (M = P < 3 || ee[0] > A || A > ue) && (ee[4] = P, 
              ee[5] = A, ie.n = ue, te = 0));
            }
            if (M || P > 1) return q;
            throw ae = !0, A;
          }
          return function(M, oe, se) {
            if (ne > 1) throw TypeError("Generator is already running");
            for (ae && 1 === oe && d(oe, se), te = oe, re = se; (u = te < 2 ? t : re) || !ae; ) {
              ee || (te ? te < 3 ? (te > 1 && (ie.n = -1), d(te, re)) : ie.n = re : ie.v = re);
              try {
                if (ne = 2, ee) {
                  if (te || (M = "next"), u = ee[M]) {
                    if (!(u = u.call(ee, re))) throw TypeError("iterator result is not an object");
                    if (!u.done) return u;
                    re = u.value, te < 2 && (te = 0);
                  } else 1 === te && (u = ee.return) && u.call(ee), te < 2 && (re = TypeError("The iterator does not provide a '" + M + "' method"), 
                  te = 1);
                  ee = t;
                } else if ((u = (ae = ie.n < 0) ? re : P.call(A, ie)) !== q) break;
              } catch (u) {
                ee = t, te = 1, re = u;
              } finally {
                ne = 1;
              }
            }
            return {
              value: u,
              done: ae
            };
          };
        }(P, M, ee), !0), re;
      }
      var q = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      u = Object.getPrototypeOf;
      var ee = [][A] ? u(u([][A]())) : (MessageRelay_regeneratorDefine2(u = {}, A, function() {
        return this;
      }), u), te = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(ee);
      function f(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, 
        MessageRelay_regeneratorDefine2(t, M, "GeneratorFunction")), t.prototype = Object.create(te), 
        t;
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, MessageRelay_regeneratorDefine2(te, "constructor", GeneratorFunctionPrototype), 
      MessageRelay_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), 
      GeneratorFunction.displayName = "GeneratorFunction", MessageRelay_regeneratorDefine2(GeneratorFunctionPrototype, M, "GeneratorFunction"), 
      MessageRelay_regeneratorDefine2(te), MessageRelay_regeneratorDefine2(te, M, "Generator"), 
      MessageRelay_regeneratorDefine2(te, A, function() {
        return this;
      }), MessageRelay_regeneratorDefine2(te, "toString", function() {
        return "[object Generator]";
      }), (MessageRelay_regenerator = function _regenerator() {
        return {
          w: i,
          m: f
        };
      })();
    }
    function MessageRelay_regeneratorDefine2(t, u, P, A) {
      var M = Object.defineProperty;
      try {
        M({}, "", {});
      } catch (t) {
        M = 0;
      }
      MessageRelay_regeneratorDefine2 = function _regeneratorDefine(t, u, P, A) {
        function o(u, P) {
          MessageRelay_regeneratorDefine2(t, u, function(t) {
            return this._invoke(u, P, t);
          });
        }
        u ? M ? M(t, u, {
          value: P,
          enumerable: !A,
          configurable: !A,
          writable: !A
        }) : t[u] = P : (o("next", 0), o("throw", 1), o("return", 2));
      }, MessageRelay_regeneratorDefine2(t, u, P, A);
    }
    function MessageRelay_toConsumableArray(t) {
      return function MessageRelay_arrayWithoutHoles(t) {
        if (Array.isArray(t)) return MessageRelay_arrayLikeToArray(t);
      }(t) || function MessageRelay_iterableToArray(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
      }(t) || function MessageRelay_unsupportedIterableToArray(t, u) {
        if (t) {
          if ("string" == typeof t) return MessageRelay_arrayLikeToArray(t, u);
          var P = {}.toString.call(t).slice(8, -1);
          return "Object" === P && t.constructor && (P = t.constructor.name), "Map" === P || "Set" === P ? Array.from(t) : "Arguments" === P || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P) ? MessageRelay_arrayLikeToArray(t, u) : void 0;
        }
      }(t) || function MessageRelay_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function MessageRelay_arrayLikeToArray(t, u) {
      (null == u || u > t.length) && (u = t.length);
      for (var P = 0, A = Array(u); P < u; P++) A[P] = t[P];
      return A;
    }
    function MessageRelay_typeof(t) {
      return MessageRelay_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, MessageRelay_typeof(t);
    }
    function MessageRelay_asyncGeneratorStep(t, u, P, A, M, q, ee) {
      try {
        var te = t[q](ee), re = te.value;
      } catch (t) {
        return void P(t);
      }
      te.done ? u(re) : Promise.resolve(re).then(A, M);
    }
    function MessageRelay_defineProperties(t, u) {
      for (var P = 0; P < u.length; P++) {
        var A = u[P];
        A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), 
        Object.defineProperty(t, MessageRelay_toPropertyKey(A.key), A);
      }
    }
    function MessageRelay_defineProperty(t, u, P) {
      return (u = MessageRelay_toPropertyKey(u)) in t ? Object.defineProperty(t, u, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[u] = P, t;
    }
    function MessageRelay_toPropertyKey(t) {
      var u = function MessageRelay_toPrimitive(t, u) {
        if ("object" != MessageRelay_typeof(t) || !t) return t;
        var P = t[Symbol.toPrimitive];
        if (void 0 !== P) {
          var A = P.call(t, u || "default");
          if ("object" != MessageRelay_typeof(A)) return A;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === u ? String : Number)(t);
      }(t, "string");
      return "symbol" == MessageRelay_typeof(u) ? u : u + "";
    }
    function MessageRelay_classPrivateFieldInitSpec(t, u, P) {
      (function MessageRelay_checkPrivateRedeclaration(t, u) {
        if (u.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object");
      })(t, u), u.set(t, P);
    }
    function MessageRelay_classPrivateFieldGet(t, u) {
      return t.get(MessageRelay_assertClassBrand(t, u));
    }
    function MessageRelay_classPrivateFieldSet(t, u, P) {
      return t.set(MessageRelay_assertClassBrand(t, u), P), P;
    }
    function MessageRelay_assertClassBrand(t, u, P) {
      if ("function" == typeof t ? t === u : t.has(u)) return arguments.length < 3 ? u : P;
      throw new TypeError("Private element is not present on this object");
    }
    var bt = new WeakMap, vt = new WeakMap, mt = new WeakMap, _t = new WeakMap, wt = function() {
      return function MessageRelay_createClass(t, u, P) {
        return u && MessageRelay_defineProperties(t.prototype, u), P && MessageRelay_defineProperties(t, P), 
        Object.defineProperty(t, "prototype", {
          writable: !1
        }), t;
      }(function MessageRelay(t, u) {
        var P = this, A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        !function MessageRelay_classCallCheck(t, u) {
          if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function");
        }(this, MessageRelay), MessageRelay_classPrivateFieldInitSpec(this, bt, void 0), 
        MessageRelay_classPrivateFieldInitSpec(this, vt, void 0), MessageRelay_classPrivateFieldInitSpec(this, mt, void 0), 
        MessageRelay_classPrivateFieldInitSpec(this, _t, new Map), MessageRelay_defineProperty(this, "onMessage", function() {
          var t = function MessageRelay_asyncToGenerator(t) {
            return function() {
              var u = this, P = arguments;
              return new Promise(function(A, M) {
                var q = t.apply(u, P);
                function _next(t) {
                  MessageRelay_asyncGeneratorStep(q, A, M, _next, _throw, "next", t);
                }
                function _throw(t) {
                  MessageRelay_asyncGeneratorStep(q, A, M, _next, _throw, "throw", t);
                }
                _next(void 0);
              });
            };
          }(MessageRelay_regenerator().m(function _callee(t) {
            var u, A, M, q, ee, te, re, ne, oe, ae, ie, se, ue, ce, fe, le, de;
            return MessageRelay_regenerator().w(function(pe) {
              for (;;) switch (pe.n) {
               case 0:
                if (u = t.source, A = t.origin, (M = t.data) && M.uuid) {
                  pe.n = 1;
                  break;
                }
                return pe.a(2);

               case 1:
                if ("abort" !== M.type) {
                  pe.n = 2;
                  break;
                }
                return null === (q = MessageRelay_classPrivateFieldGet(_t, P).get(M.uuid)) || void 0 === q || q.abort(), 
                MessageRelay_classPrivateFieldGet(_t, P).delete(M.uuid), pe.a(2);

               case 2:
                if (M.name) {
                  pe.n = 3;
                  break;
                }
                return console.warn("MessageRelay: message skipped", {
                  source: u,
                  origin: A,
                  data: M
                }), pe.a(2);

               case 3:
                if (ee = M.args, te = void 0 === ee ? [] : ee, re = M.uuid, ne = M.name, oe = M.viewerUUID, 
                ae = M.streaming, ie = Ie(MessageRelay_classPrivateFieldGet(bt, P), ne), se = Me(MessageRelay_classPrivateFieldGet(bt, P), ne), 
                "function" === (ue = MessageRelay_typeof(ie))) {
                  pe.n = 4;
                  break;
                }
                return P.sendErrorResponse(u, A, M), pe.a(2);

               case 4:
                if (ae) {
                  pe.n = 6;
                  break;
                }
                return pe.n = 5, ie.apply(se, te);

               case 5:
                return ce = pe.v, P.sendResponse(u, A, {
                  uuid: re,
                  viewerUUID: oe,
                  message: ce,
                  type: ue
                }), pe.a(2);

               case 6:
                return fe = function emit(t, M) {
                  return P.sendResponse(u, A, {
                    uuid: re,
                    viewerUUID: oe,
                    event: t,
                    data: M,
                    type: "event"
                  });
                }, le = new AbortController, MessageRelay_classPrivateFieldGet(_t, P).set(re, le), 
                pe.n = 7, ie.apply(se, [ {
                  emit: fe,
                  signal: le.signal
                } ].concat(MessageRelay_toConsumableArray(te)));

               case 7:
                de = pe.v, P.sendResponse(u, A, {
                  uuid: re,
                  viewerUUID: oe,
                  message: de,
                  type: ue
                }), MessageRelay_classPrivateFieldGet(_t, P).delete(re);

               case 8:
                return pe.a(2);
              }
            }, _callee);
          }));
          return function(u) {
            return t.apply(this, arguments);
          };
        }()), MessageRelay_classPrivateFieldSet(bt, this, u), MessageRelay_classPrivateFieldSet(vt, this, A), 
        MessageRelay_classPrivateFieldSet(mt, this, t), window.addEventListener("message", this.onMessage);
      }, [ {
        key: "sendResponse",
        value: function sendResponse(t, u, P) {
          var A = MessageRelay_objectSpread(MessageRelay_objectSpread({}, P), {}, {
            context: MessageRelay_classPrivateFieldGet(mt, this),
            metadata: MessageRelay_classPrivateFieldGet(vt, this)
          });
          t.postMessage(A, u);
        }
      }, {
        key: "sendErrorResponse",
        value: function sendErrorResponse(t, u, P) {
          var A = P.name, M = P.uuid, q = P.viewerUUID;
          this.sendResponse(t, u, {
            uuid: M,
            viewerUUID: q,
            message: "".concat(A, " is not a function"),
            type: "exception"
          });
        }
      } ]);
    }();
    it(be.MIMEO_SCRIPT, "vst-injected-script-mimeo"), it(be.WALDO_SCRIPT, "vst-injected-script-waldo"), 
    new wt("jigsaw", gt);
  })();
})();