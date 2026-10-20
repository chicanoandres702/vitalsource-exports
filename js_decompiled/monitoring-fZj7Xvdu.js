function e(e) {
  console.error(e);
  let t = e;
  if (typeof e == `string` && (t = Error(e)), window.newrelic) try {
    throw t;
  } catch (e) {
    window.newrelic.noticeError(e);
  }
}

function t(e, t) {
  window.newrelic && window.newrelic.addPageAction(e, t);
}

function n(e, t) {
  window.newrelic && window.newrelic.setCustomAttribute(e, t);
}

function r(e) {
  window.newrelic && window.newrelic.setCustomAttribute(e, void 0);
}

var i = {
  noticeError: e,
  noticeInteraction: t,
  setAttribute: n,
  unsetAttribute: r
}, a = {};

function o(e, t) {
  window.Jigsaw && window.Jigsaw.Events.logEvent({
    name: e,
    json: t,
    vbid: a.vbid
  });
}

function s(e, t) {
  a[e] = t;
}

function c(e) {
  delete a[e];
}

var l = {
  noticeInteraction: o,
  setAttribute: s,
  unsetAttribute: c
}, u = i.noticeError, d = (e, t = {}) => {
  if (console.log(`noticeInteraction: ${e} ${JSON.stringify(t)}`), typeof t != `object`) throw Error(`extra params must be type object`);
  i.noticeInteraction(e, t), l.noticeInteraction(e, t);
}, f = (e, t) => {
  i.setAttribute(e, t), l.setAttribute(e, t);
}, p = e => {
  i.unsetAttribute(e), l.unsetAttribute(e);
};

export { p as i, d as n, f as r, u as t };
//# sourceMappingURL=monitoring-fZj7Xvdu.js.map