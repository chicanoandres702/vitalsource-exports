import { a as e } from "./rolldown-runtime-B0Z9INg1.js";

import { i as t, t as n } from "./jsx-runtime-DU6_sasz.js";

import { A as r, F as i, i as a, m as o, r as s } from "./index-maEWt9hW.js";

import { c } from "./GlobalStyleProvider-BWhTP2MU.js";

var l = e(t()), u = n(), d = {}, f = class extends l.Component {
  constructor(...e) {
    super(...e), this.state = {
      status: o.PENDING
    };
  }
  componentDidMount() {
    let {src: e, onLoad: t} = this.props;
    d[e] || (d[e] = c(this.props.src).then(t)), d[e].then(() => {
      this.setState({
        status: o.OK
      });
    }).catch(() => {
      this.setState({
        status: o.ERROR
      });
    });
  }
  render() {
    return this.state.status === o.PENDING ? null : this.state.status === o.ERROR ? (0, 
    u.jsx)(i, {
      to: r
    }) : this.props.children;
  }
};

function p(e) {
  a(`productionJigsaw`, e, 2);
  let t = window.setInterval(() => {
    `${s(`productionJigsaw`)}` == `${e}` && (window.clearInterval(t), window.location.reload());
  }, 200);
}

function m() {
  p(`true`);
}

function h() {
  p(`false`);
}

function g() {
  return s(`productionJigsaw`) === `true`;
}

function _() {
  return (0, u.jsxs)(`div`, {
    style: {
      background: `black`,
      color: `white`,
      padding: 6,
      position: `fixed`,
      top: 0,
      left: 0,
      fontSize: `16px`,
      zIndex: 99999
    },
    children: [ `Pointed To Prod`, (0, u.jsx)(`button`, {
      onClick: h,
      style: {
        marginLeft: 6,
        background: `white`,
        borderRadius: 4,
        padding: 6
      },
      children: `Reset`
    }) ]
  });
}

function v() {
  return `//${g(), `jigsaw.vitalsource.com`}/mosaic/mosaic.js`;
}

var y = e => (0, u.jsxs)(f, {
  src: v(),
  onLoad: () => window.Jigsaw.init(window.location.hostname),
  children: [ e.children, g() && (0, u.jsx)(_, {}) ]
});

export { m as i, g as n, h as r, y as t };
//# sourceMappingURL=MosaicProvider-AuGlbFtG.js.map
//# sourceMappingURL=MosaicProvider-AuGlbFtG.js.map