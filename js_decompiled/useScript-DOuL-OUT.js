import { a as e } from "./rolldown-runtime-B0Z9INg1.js";

import { i as t } from "./jsx-runtime-DU6_sasz.js";

import { m as n } from "./index-maEWt9hW.js";

import { c as r } from "./GlobalStyleProvider-BWhTP2MU.js";

var i = e(t()), a = e => {
  let [t, a] = (0, i.useState)(document.querySelector(`script[src="${e}"]`)?.getAttribute(`data-status`) || n.PENDING), o = (0, 
  i.useCallback)((e, t) => {
    document.querySelector(`script[src="${e}"]`)?.setAttribute(`data-status`, t), a(t);
  }, []);
  return (0, i.useEffect)(() => {
    r(e).then(() => {
      o(e, n.OK);
    }).catch(() => {
      o(e, n.ERROR);
    });
  }, [ e, o ]), t;
};

export { a as t };
//# sourceMappingURL=useScript-DOuL-OUT.js.map