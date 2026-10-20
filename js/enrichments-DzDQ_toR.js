import{a as e,i as t,t as n}from"./rolldown-runtime-B0Z9INg1.js";import{i as r}from"./jsx-runtime-DU6_sasz.js";import{K as i,Y as a,l as o}from"./index-maEWt9hW.js";import{A as s,B as c,F as l,H as u,I as d,L as f,N as p,O as m,P as h,R as g,U as _,V as v,W as y,j as b,k as x,z as S}from"./LocaleProvider-DoP-dlkE.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./styled-components.browser.esm-BcYycfu6.js";import{t as A,u as j}from"./injectIntl-AqYQwB7i.js";import{t as M}from"./useIntl-DaqDtX5V.js";var N=e(a()),P=e(r()),F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},I;(function(e){e.formatDate=`FormattedDate`,e.formatTime=`FormattedTime`,e.formatNumber=`FormattedNumber`,e.formatList=`FormattedList`,e.formatDisplayName=`FormattedDisplayName`})(I||={});var L;(function(e){e.formatDate=`FormattedDateParts`,e.formatTime=`FormattedTimeParts`,e.formatNumber=`FormattedNumberParts`,e.formatList=`FormattedListParts`})(L||={});function R(e){var t=function(t){return P.createElement(A.Consumer,null,function(n){j(n);var r=t.value,i=t.children,a=F(t,[`value`,`children`]),o=typeof r==`string`?new Date(r||0):r;return i(e===`formatDate`?n.formatDateToParts(o,a):n.formatTimeToParts(o,a))})};return t.displayName=L[e],t}function z(e){var t=function(t){return P.createElement(A.Consumer,null,function(n){j(n);var r=t.value,i=t.children,a=F(t,[`value`,`children`]),o=n[e](r,a);if(typeof i==`function`)return i(o);var s=n.textComponent||P.Fragment;return P.createElement(s,null,o)})};return t.displayName=I[e],t}function B(e){return e}function ee(e){return e}var te=z(`formatDate`);z(`formatTime`),z(`formatNumber`),z(`formatList`),z(`formatDisplayName`),R(`formatDate`),R(`formatTime`);var ne=n(((e,t)=>{t.exports=Array.isArray})),re=n(((e,t)=>{function n(e,t,n){if(typeof e!=`function`)throw TypeError(`Expected a function`);return setTimeout(function(){e.apply(void 0,n)},t)}t.exports=n})),ie=n(((e,t)=>{function n(e){return e}t.exports=n})),ae=n(((e,t)=>{function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}t.exports=n})),oe=n(((e,t)=>{var n=ae(),r=Math.max;function i(e,t,i){return t=r(t===void 0?e.length-1:t,0),function(){for(var a=arguments,o=-1,s=r(a.length-t,0),c=Array(s);++o<s;)c[o]=a[t+o];o=-1;for(var l=Array(t+1);++o<t;)l[o]=a[o];return l[t]=i(c),n(e,this,l)}}t.exports=i})),se=n(((e,t)=>{function n(e){return function(){return e}}t.exports=n})),V=n(((e,t)=>{t.exports=typeof global==`object`&&global&&global.Object===Object&&global})),H=n(((e,t)=>{var n=V(),r=typeof self==`object`&&self&&self.Object===Object&&self;t.exports=n||r||Function(`return this`)()})),ce=n(((e,t)=>{t.exports=H().Symbol})),le=n(((e,t)=>{var n=ce(),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,o=n?n.toStringTag:void 0;function s(e){var t=i.call(e,o),n=e[o];try{e[o]=void 0;var r=!0}catch{}var s=a.call(e);return r&&(t?e[o]=n:delete e[o]),s}t.exports=s})),U=n(((e,t)=>{var n=Object.prototype.toString;function r(e){return n.call(e)}t.exports=r})),W=n(((e,t)=>{var n=ce(),r=le(),i=U(),a=`[object Null]`,o=`[object Undefined]`,s=n?n.toStringTag:void 0;function c(e){return e==null?e===void 0?o:a:s&&s in Object(e)?r(e):i(e)}t.exports=c})),G=n(((e,t)=>{function n(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}t.exports=n})),ue=n(((e,t)=>{var n=W(),r=G(),i=`[object AsyncFunction]`,a=`[object Function]`,o=`[object GeneratorFunction]`,s=`[object Proxy]`;function c(e){if(!r(e))return!1;var t=n(e);return t==a||t==o||t==i||t==s}t.exports=c})),de=n(((e,t)=>{t.exports=H()[`__core-js_shared__`]})),fe=n(((e,t)=>{var n=de(),r=function(){var e=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function i(e){return!!r&&r in e}t.exports=i})),pe=n(((e,t)=>{var n=Function.prototype.toString;function r(e){if(e!=null){try{return n.call(e)}catch{}try{return e+``}catch{}}return``}t.exports=r})),me=n(((e,t)=>{var n=ue(),r=fe(),i=G(),a=pe(),o=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,d=l.hasOwnProperty,f=RegExp(`^`+u.call(d).replace(o,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function p(e){return!i(e)||r(e)?!1:(n(e)?f:s).test(a(e))}t.exports=p})),he=n(((e,t)=>{function n(e,t){return e?.[t]}t.exports=n})),ge=n(((e,t)=>{var n=me(),r=he();function i(e,t){var i=r(e,t);return n(i)?i:void 0}t.exports=i})),_e=n(((e,t)=>{var n=ge();t.exports=function(){try{var e=n(Object,`defineProperty`);return e({},``,{}),e}catch{}}()})),ve=n(((e,t)=>{var n=se(),r=_e(),i=ie();t.exports=r?function(e,t){return r(e,`toString`,{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:i})),ye=n(((e,t)=>{var n=Date.now;function r(e){var t=0,r=0;return function(){var i=n(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}t.exports=r})),be=n(((e,t)=>{var n=ve();t.exports=ye()(n)})),xe=n(((e,t)=>{var n=ie(),r=oe(),i=be();function a(e,t){return i(r(e,t,n),e+``)}t.exports=a})),Se=n(((e,t)=>{var n=re();t.exports=xe()(function(e,t){return n(e,1,t)})})),Ce=n(((e,t)=>{var n=H();t.exports=function(){return n.Date.now()}})),we=n(((e,t)=>{var n=/\s/;function r(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}t.exports=r})),Te=n(((e,t)=>{var n=we(),r=/^\s+/;function i(e){return e&&e.slice(0,n(e)+1).replace(r,``)}t.exports=i})),Ee=n(((e,t)=>{function n(e){return typeof e==`object`&&!!e}t.exports=n})),De=n(((e,t)=>{var n=W(),r=Ee(),i=`[object Symbol]`;function a(e){return typeof e==`symbol`||r(e)&&n(e)==i}t.exports=a})),Oe=n(((e,t)=>{var n=Te(),r=G(),i=De(),a=NaN,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;function u(e){if(typeof e==`number`)return e;if(i(e))return a;if(r(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=r(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=n(e);var u=s.test(e);return u||c.test(e)?l(e.slice(2),u?2:8):o.test(e)?a:+e}t.exports=u})),ke=n(((e,t)=>{var n=G(),r=Ce(),i=Oe(),a=`Expected a function`,o=Math.max,s=Math.min;function c(e,t,c){var l,u,d,f,p,m,h=0,g=!1,_=!1,v=!0;if(typeof e!=`function`)throw TypeError(a);t=i(t)||0,n(c)&&(g=!!c.leading,_=`maxWait`in c,d=_?o(i(c.maxWait)||0,t):d,v=`trailing`in c?!!c.trailing:v);function y(t){var n=l,r=u;return l=u=void 0,h=t,f=e.apply(r,n),f}function b(e){return h=e,p=setTimeout(C,t),g?y(e):f}function x(e){var n=e-m,r=e-h,i=t-n;return _?s(i,d-r):i}function S(e){var n=e-m,r=e-h;return m===void 0||n>=t||n<0||_&&r>=d}function C(){var e=r();if(S(e))return w(e);p=setTimeout(C,x(e))}function w(e){return p=void 0,v&&l?y(e):(l=u=void 0,f)}function T(){p!==void 0&&clearTimeout(p),h=0,l=m=u=p=void 0}function E(){return p===void 0?f:w(r())}function D(){var e=r(),n=S(e);if(l=arguments,u=this,m=e,n){if(p===void 0)return b(m);if(_)return clearTimeout(p),p=setTimeout(C,t),y(m)}return p===void 0&&(p=setTimeout(C,t)),f}return D.cancel=T,D.flush=E,D}t.exports=c})),Ae=n(((e,t)=>{var n=re(),r=xe(),i=Oe();t.exports=r(function(e,t,r){return n(e,i(t)||0,r)})})),je=n(((e,t)=>{var n=W(),r=Ee(),i=`[object Number]`;function a(e){return typeof e==`number`||r(e)&&n(e)==i}t.exports=a})),Me=n(((e,t)=>{var n=Math.ceil,r=Math.max;function i(e,t,i,a){for(var o=-1,s=r(n((t-e)/(i||1)),0),c=Array(s);s--;)c[a?s:++o]=e,e+=i;return c}t.exports=i})),Ne=n(((e,t)=>{function n(e,t){return e===t||e!==e&&t!==t}t.exports=n})),Pe=n(((e,t)=>{function n(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=9007199254740991}t.exports=n})),Fe=n(((e,t)=>{var n=ue(),r=Pe();function i(e){return e!=null&&r(e.length)&&!n(e)}t.exports=i})),Ie=n(((e,t)=>{var n=/^(?:0|[1-9]\d*)$/;function r(e,t){var r=typeof e;return t??=9007199254740991,!!t&&(r==`number`||r!=`symbol`&&n.test(e))&&e>-1&&e%1==0&&e<t}t.exports=r})),Le=n(((e,t)=>{var n=Ne(),r=Fe(),i=Ie(),a=G();function o(e,t,o){if(!a(o))return!1;var s=typeof t;return(s==`number`?r(o)&&i(t,o.length):s==`string`&&t in o)?n(o[t],e):!1}t.exports=o})),Re=n(((e,t)=>{var n=Oe(),r=1/0,i=17976931348623157e292;function a(e){return e?(e=n(e),e===r||e===-r?(e<0?-1:1)*i:e===e?e:0):e===0?e:0}t.exports=a})),ze=n(((e,t)=>{var n=Me(),r=Le(),i=Re();function a(e){return function(t,a,o){return o&&typeof o!=`number`&&r(t,a,o)&&(a=o=void 0),t=i(t),a===void 0?(a=t,t=0):a=i(a),o=o===void 0?t<a?1:-1:i(o),n(t,a,o,e)}}t.exports=a})),Be=n(((e,t)=>{t.exports=ze()()})),Ve=n(((e,t)=>{function n(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}t.exports=n})),He=n(((e,t)=>{var n=Math.floor,r=Math.random;function i(e,t){return e+n(r()*(t-e+1))}t.exports=i})),Ue=n(((e,t)=>{var n=He();function r(e,t){var r=-1,i=e.length,a=i-1;for(t=t===void 0?i:t;++r<t;){var o=n(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}t.exports=r})),We=n(((e,t)=>{var n=Ve(),r=Ue();function i(e){return r(n(e))}t.exports=i})),Ge=n(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}t.exports=n})),Ke=n(((e,t)=>{var n=Ge();function r(e,t){return n(t,function(t){return e[t]})}t.exports=r})),qe=n(((e,t)=>{function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}t.exports=n})),Je=n(((e,t)=>{var n=W(),r=Ee(),i=`[object Arguments]`;function a(e){return r(e)&&n(e)==i}t.exports=a})),Ye=n(((e,t)=>{var n=Je(),r=Ee(),i=Object.prototype,a=i.hasOwnProperty,o=i.propertyIsEnumerable;t.exports=n(function(){return arguments}())?n:function(e){return r(e)&&a.call(e,`callee`)&&!o.call(e,`callee`)}})),Xe=n(((e,t)=>{function n(){return!1}t.exports=n})),Ze=n(((e,t)=>{var n=H(),r=Xe(),i=typeof e==`object`&&e&&!e.nodeType&&e,a=i&&typeof t==`object`&&t&&!t.nodeType&&t,o=a&&a.exports===i?n.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||r})),Qe=n(((e,t)=>{var n=W(),r=Pe(),i=Ee(),a=`[object Arguments]`,o=`[object Array]`,s=`[object Boolean]`,c=`[object Date]`,l=`[object Error]`,u=`[object Function]`,d=`[object Map]`,f=`[object Number]`,p=`[object Object]`,m=`[object RegExp]`,h=`[object Set]`,g=`[object String]`,_=`[object WeakMap]`,v=`[object ArrayBuffer]`,y=`[object DataView]`,b=`[object Float32Array]`,x=`[object Float64Array]`,S=`[object Int8Array]`,C=`[object Int16Array]`,w=`[object Int32Array]`,T=`[object Uint8Array]`,E=`[object Uint8ClampedArray]`,D=`[object Uint16Array]`,O=`[object Uint32Array]`,k={};k[b]=k[x]=k[S]=k[C]=k[w]=k[T]=k[E]=k[D]=k[O]=!0,k[a]=k[o]=k[v]=k[s]=k[y]=k[c]=k[l]=k[u]=k[d]=k[f]=k[p]=k[m]=k[h]=k[g]=k[_]=!1;function A(e){return i(e)&&r(e.length)&&!!k[n(e)]}t.exports=A})),$e=n(((e,t)=>{function n(e){return function(t){return e(t)}}t.exports=n})),et=n(((e,t)=>{var n=V(),r=typeof e==`object`&&e&&!e.nodeType&&e,i=r&&typeof t==`object`&&t&&!t.nodeType&&t,a=i&&i.exports===r&&n.process;t.exports=function(){try{return i&&i.require&&i.require(`util`).types||a&&a.binding&&a.binding(`util`)}catch{}}()})),tt=n(((e,t)=>{var n=Qe(),r=$e(),i=et(),a=i&&i.isTypedArray;t.exports=a?r(a):n})),nt=n(((e,t)=>{var n=qe(),r=Ye(),i=ne(),a=Ze(),o=Ie(),s=tt(),c=Object.prototype.hasOwnProperty;function l(e,t){var l=i(e),u=!l&&r(e),d=!l&&!u&&a(e),f=!l&&!u&&!d&&s(e),p=l||u||d||f,m=p?n(e.length,String):[],h=m.length;for(var g in e)(t||c.call(e,g))&&!(p&&(g==`length`||d&&(g==`offset`||g==`parent`)||f&&(g==`buffer`||g==`byteLength`||g==`byteOffset`)||o(g,h)))&&m.push(g);return m}t.exports=l})),rt=n(((e,t)=>{var n=Object.prototype;function r(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||n)}t.exports=r})),it=n(((e,t)=>{function n(e,t){return function(n){return e(t(n))}}t.exports=n})),at=n(((e,t)=>{t.exports=it()(Object.keys,Object)})),ot=n(((e,t)=>{var n=rt(),r=at(),i=Object.prototype.hasOwnProperty;function a(e){if(!n(e))return r(e);var t=[];for(var a in Object(e))i.call(e,a)&&a!=`constructor`&&t.push(a);return t}t.exports=a})),st=n(((e,t)=>{var n=nt(),r=ot(),i=Fe();function a(e){return i(e)?n(e):r(e)}t.exports=a})),ct=n(((e,t)=>{var n=Ke(),r=st();function i(e){return e==null?[]:n(e,r(e))}t.exports=i})),lt=n(((e,t)=>{var n=Ue(),r=ct();function i(e){return n(r(e))}t.exports=i})),ut=n(((e,t)=>{var n=We(),r=lt(),i=ne();function a(e){return(i(e)?n:r)(e)}t.exports=a})),dt=n(((e,t)=>{function n(e,t,n){return e===e&&(n!==void 0&&(e=e<=n?e:n),t!==void 0&&(e=e>=t?e:t)),e}t.exports=n})),ft=n(((e,t)=>{var n=ce(),r=Ge(),i=ne(),a=De(),o=1/0,s=n?n.prototype:void 0,c=s?s.toString:void 0;function l(e){if(typeof e==`string`)return e;if(i(e))return r(e,l)+``;if(a(e))return c?c.call(e):``;var t=e+``;return t==`0`&&1/e==-o?`-0`:t}t.exports=l})),pt=n(((e,t)=>{var n=Re();function r(e){var t=n(e),r=t%1;return t===t?r?t-r:t:0}t.exports=r})),mt=n(((e,t)=>{var n=ft();function r(e){return e==null?``:n(e)}t.exports=r})),ht=n(((e,t)=>{var n=dt(),r=ft(),i=pt(),a=mt();function o(e,t,o){return e=a(e),o=o==null?0:n(i(o),0,e.length),t=r(t),e.slice(o,o+t.length)==t}t.exports=o})),gt=n((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=S();e.default=function(e){var n=e.vstui,r=n.color,i=n.typography,a=r.cloud.getShade(3);return(0,t.createComponentTheme)(e,{List_backgroundColor:r.surface,ListDivider_color:a,ListItem_paddingHorizontal:`16px`,ListItem_backgroundColor_hover:r.primary.getShade(1),ListItem_color:r.onSurface,ListItem_fontFamily:i.fontFamily,ListItem_fontSize:i.fontSize,ListItem_fontWeight:i.fontWeightRegular,ListItem_boxShadow_focus:`inset 0 1px 0px 0px rgba(0,0,0,0.43), inset 0 -1px 0px 0px rgba(0,0,0,0.43)`})}})),_t=n((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=S();e.default=function(e){var n=e.vstui,r=n.color,i=n.typography,a=r.cloud.getShade(2),o=r.cloud.getShade(3);return(0,t.createComponentTheme)(e,{ListHeader_backgroundColor:a,ListHeader_borderColor:o,ListHeader_color:r.onSurface,ListHeader_fontFamily:i.fontFamily,ListHeader_fontSize:i.fontSize-3,ListHeader_fontWeight:i.fontWeightLight,ListHeader_textTransform:`uppercase`})}})),vt=n((e=>{var n=function(){function e(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,`value`in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=r(),o=m(a),s=m(i()),l=(E(),t(O)),u=m(l),d=m(_t()),f=S(),p=c();Object.defineProperty(e,"__esModule",{value:!0});function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function g(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function _(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v={h3:u.default.h3.withConfig({displayName:`ListHeader__h3`})([`margin:0;padding:3px 16px;background:`,`;border-top:1px solid `,`;border-bottom:1px solid `,`;color:`,`;font-family:`,`;font-size:`,`;font-weight:`,`;text-transform:`,`;`],(0,f.getStyle)(`ListHeader_backgroundColor`),(0,f.getStyle)(`ListHeader_borderColor`),(0,f.getStyle)(`ListHeader_borderColor`),(0,f.getStyle)(`ListHeader_color`),(0,f.getStyle)(`ListHeader_fontFamily`),function(e){return e.theme.vstui.rem((0,f.getStyle)(`ListHeader_fontSize`)(e))},(0,f.getStyle)(`ListHeader_fontWeight`),(0,f.getStyle)(`ListHeader_textTransform`))},y=function(e){function t(){return h(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,e),n(t,[{key:`render`,value:function(){var e=this.props,t=e.children,n=e.theme,r=(0,d.default)(n);return o.default.createElement(v.h3,{theme:r},t)}}]),t}(a.Component);y.propTypes={theme:p.themeShape,children:s.default.string},y.defaultProps={theme:(0,f.createTheme)()},y.displayName=`ListHeader`;var b=(0,l.withTheme)(y);b.WrappedComponent=y,e.default=b})),yt=n((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=vt();Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n(t).default}});function n(e){return e&&e.__esModule?e:{default:e}}})),bt=n((e=>{var n=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a=function(){function e(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,`value`in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=r(),s=y(o),l=y(i()),u=y((E(),t(O))),d=S(),f=c(),m=y(gt()),g=p(),_=y(h()),v=y(yt());Object.defineProperty(e,"__esModule",{value:!0});function y(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function x(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function C(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var w={hr:{},li:{},span:{}};w.ul=u.default.ul.withConfig({displayName:`List__ul`})([`max-height:60vh;margin:0;padding:0;overflow-y:auto;background-color:`,`;& > li:first-child > h3{border-top:none;}`],(0,d.getStyle)(`List_backgroundColor`)),w.li.base=u.default.li.withConfig({displayName:`List__base`})([`display:block;color:`,`;font-family:`,`;font-size:`,`;font-weight:`,`;& > ul{display:none;}`],(0,d.getStyle)(`ListItem_color`),(0,d.getStyle)(`ListItem_fontFamily`),function(e){return e.theme.vstui.rem((0,d.getStyle)(`ListItem_fontSize`)(e))},(0,d.getStyle)(`ListItem_fontWeight`)),w.li.start=(0,u.default)(w.li.base).withConfig({displayName:`List__start`})([`padding-top:4px;`]),w.li.end=(0,u.default)(w.li.base).withConfig({displayName:`List__end`})([`padding-bottom:4px;`]),w.li.startEnd=(0,u.default)(w.li.base).withConfig({displayName:`List__startEnd`})([`padding-top:4px;padding-bottom:4px;`]),w.hr.divider=u.default.hr.withConfig({displayName:`List__divider`})([`margin:0;border-style:none none solid;border-width:1px;border-color:`,`;`],(0,d.getStyle)(`ListDivider_color`)),w.span.NotificationPill=u.default.span.withConfig({displayName:`List__NotificationPill`})([`display:inline-flex;margin-left:10px;padding:0px 5px;background-color:#ca500f;border:none;border-radius:7px;color:white;font-size:0.9rem;font-weight:400;line-height:1.6;text-align:center;vertical-align:middle;`]);var T=function(e){function t(){return b(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,e),a(t,[{key:`render`,value:function(){return s.default.createElement(_.default,n({},this.props,{fullWidth:!0,naked:!0}))}}]),t}(o.Component),D=function(e){function t(){return b(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,e),a(t,[{key:`getThemedListItemButton`,value:function(e){return(0,d.createThemedComponent)(T,{Button_backgroundColor_themePrimaryNaked_active:(0,d.getStyle)(`ListItem_backgroundColor_hover`)({theme:e}),Button_backgroundColor_themePrimaryNaked_focus:(0,d.getStyle)(`ListItem_backgroundColor_hover`)({theme:e}),Button_backgroundColor_themePrimaryNaked_hover:(0,d.getStyle)(`ListItem_backgroundColor_hover`)({theme:e}),Button_color_themePrimaryNaked:(0,d.getStyle)(`ListItem_color`)({theme:e}),Button_color_themePrimaryNaked_active:(0,d.getStyle)(`ListItem_color`)({theme:e}),Button_color_themePrimaryNaked_focus:(0,d.getStyle)(`ListItem_color`)({theme:e}),Button_color_themePrimaryNaked_hover:(0,d.getStyle)(`ListItem_color`)({theme:e}),Button_fontFamily:(0,d.getStyle)(`ListItem_fontFamily`)({theme:e}),Button_fontSize_medium:(0,d.getStyle)(`ListItem_fontSize`)({theme:e}),Button_fontWeight_naked:(0,d.getStyle)(`ListItem_fontWeight`)({theme:e}),Button_paddingHorizontal_fullWidth:(0,d.getStyle)(`ListItem_paddingHorizontal`)({theme:e}),Button_borderRadius:0,Button_boxShadow_themePrimaryNaked_focus:(0,d.getStyle)(`ListItem_boxShadow_focus`)({theme:e}),ButtonContent_justifyContent:`left`})}},{key:`getContent`,value:function(e){var t=e.data,n=e.theme,r=e.ThemedListItemButton,i=[];return t.forEach(function(e,t){var a=e.header,o=e.headerKey,c=e.listItems,l=o||a;a?i.push(s.default.createElement(w.li.base,{key:`list-header-`+l,theme:n},s.default.createElement(v.default,{theme:n},a))):t!==0&&i.push(s.default.createElement(w.hr.divider,{key:`group`+t+`-divider`,theme:n})),c&&c.forEach(function(e,t){var o=e.itemKey,l=e.text,u=e.type,d=e.onClick,f=e.href,p=e.target,m=e.notificationText,h=o||a+`-`+l,_=void 0;_=c.length===1?w.li.startEnd:t===0?w.li.start:t===c.length-1?w.li.end:w.li.base,i.push(s.default.createElement(_,{key:`list-item-`+h,theme:n},s.default.createElement(r,{href:f,iconStart:u===`radioGroup`&&s.default.createElement(g.Checkmark,null),onClick:d,target:p},l,m&&s.default.createElement(w.span.NotificationPill,null,m))))})}),s.default.createElement(w.ul,{theme:n},i)}},{key:`render`,value:function(){var e=this.props,t=e.data,n=e.theme,r=(0,m.default)(n),i=this.getThemedListItemButton(r);return this.getContent({data:t,theme:r,ThemedListItemButton:i})}}]),t}(o.Component);D.propTypes={data:l.default.array,theme:f.themeShape},D.defaultProps={theme:(0,d.createTheme)()},D.displayName=`List`;var k=(0,d.withTheme)(D);k.WrappedComponent=D,e.default=k})),xt=n((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=bt();Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n(t).default}});function n(e){return e&&e.__esModule?e:{default:e}}})),St=n((e=>{var n=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a=function(){function e(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,`value`in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=r(),s=_(o),l=_(i()),u=_((E(),t(O))),p=(d(),t(f)),m=S(),h=c(),g=_(b());Object.defineProperty(e,"__esModule",{value:!0});function _(e){return e&&e.__esModule?e:{default:e}}function v(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function y(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function x(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function C(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var w={div:{}};w.div.popper=u.default.div.withConfig({displayName:`PopoverContent__popper`})([`display:block;max-width:100%;height:100%;padding:0;overflow:hidden;background-color:`,`;border-color:`,`;border-width:`,`;border-style:`,`;border-radius:`,`;box-shadow:`,`;`],(0,m.getStyle)(`Popover_backgroundColor`),(0,m.getStyle)(`Popover_borderColor`),(0,m.getStyle)(`Popover_borderWidth`),(0,m.getStyle)(`Popover_borderStyle`),(0,m.getStyle)(`Popover_borderRadius`),(0,m.getStyle)(`Popover_boxShadow`));var T=function(e){function t(){return y(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,e),a(t,[{key:`render`,value:function(){var e=this.props,t=e.children,r=e.modifiers,i=e.placement,a=e.theme,o=v(e,[`children`,`modifiers`,`placement`,`theme`]),c=(0,g.default)(a);return s.default.createElement(p.Popper,{modifiers:r,placement:i},function(e){var r=e.popperProps,i=e.otherWrapperProps,a=n({},r,i);return s.default.createElement(`div`,n({},a,o),s.default.createElement(w.div.popper,{theme:c},t))})}}]),t}(o.Component);T.propTypes={children:l.default.node.isRequired,hidden:l.default.bool,modifiers:l.default.object,placement:l.default.oneOf([`auto`,`top`,`right`,`bottom`,`left`,`auto-start`,`top-start`,`right-start`,`bottom-start`,`left-start`,`auto-end`,`top-end`,`right-end`,`bottom-end`,`left-end`]),theme:h.themeShape},T.defaultProps={theme:(0,m.createTheme)()},T.displayName=`PopoverContent`;var D=(0,m.withTheme)(T);D.WrappedComponent=T,e.default=D})),Ct=n((e=>{var n=function(){function e(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,`value`in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=r(),o=h(a),s=h(i()),l=h((E(),t(O))),u=(d(),t(f)),p=S(),m=c();Object.defineProperty(e,"__esModule",{value:!0});function h(e){return e&&e.__esModule?e:{default:e}}function g(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function _(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function v(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function y(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b={Target:(0,l.default)(u.Target).withConfig({displayName:`PopoverTrigger__Target`})([`display:inline-block;`])},x=function(e){function t(){return _(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),n(t,[{key:`render`,value:function(){var e=this.props,t=e.children;e.theme;var n=g(e,[`children`,`theme`]);return o.default.createElement(b.Target,{component:`span`},(0,a.cloneElement)(t,n))}}]),t}(a.Component);x.propTypes={children:s.default.node.isRequired,theme:m.themeShape},x.defaultProps={theme:(0,p.createTheme)()},x.displayName=`PopoverTrigger`;var C=(0,p.withTheme)(x);C.WrappedComponent=x,e.default=C})),wt=n((e=>{var n=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a=function(){function e(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,`value`in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=r(),s=x(o),l=x(i()),u=x((E(),t(O))),p=(d(),t(f)),m=x(St()),h=x(Ct()),_=c(),v=S(),y=g(),b=x(bt());Object.defineProperty(e,"__esModule",{value:!0});function x(e){return e&&e.__esModule?e:{default:e}}function C(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function w(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function T(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function D(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k={Manager:(0,u.default)(p.Manager).withConfig({displayName:`Popover__Manager`})([`display:inline-block;`]),PopoverContent:(0,u.default)(m.default).withConfig({displayName:`Popover__PopoverContent`})([`z-index:1;`])},A=function(e){function t(e){w(this,t);var n=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1},n.popoverId=(0,y.generateUniqueId)(`popover`),n.open=n.open.bind(n),n.close=n.close.bind(n),n.handleBlur=n.handleBlur.bind(n),n.handleClick=n.handleClick.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleKeyDown=n.handleKeyDown.bind(n),n.renderContent=n.renderContent.bind(n),n.renderTrigger=n.renderTrigger.bind(n),n}return D(t,e),a(t,[{key:`componentWillMount`,value:function(){var e=this.props.open;this.isControlled=e!==void 0}},{key:`componentDidUpdate`,value:function(e){if(this.isControlled){var t=e.dynamicAnchor&&e.open,n=this.props.dynamicAnchor&&this.props.open;t&&!n&&this.disconnectResizeObserver()}}},{key:`componentWillUnmount`,value:function(){document.removeEventListener(`keydown`,this.handleKeyDown),this.disconnectResizeObserver()}},{key:`open`,value:function(e){var t=this;this.focusElement=e.currentTarget,this.focusElement.focus(),this.setState({open:!0},function(){document.addEventListener(`keydown`,t.handleKeyDown)}),this.props.onOpen&&this.props.onOpen()}},{key:`close`,value:function(){var e=this,t=0<arguments.length&&arguments[0]!==void 0&&arguments[0];this.disconnectResizeObserver(),this.timeoutId=setTimeout(function(){e.setState({open:!1},function(){document.removeEventListener(`keydown`,e.handleKeyDown),e.props.focusOnClose&&t&&e.focusElement.focus()})}),this.props.onClose&&this.props.onClose()}},{key:`disconnectResizeObserver`,value:function(){this.resizeObserver&&=(this.resizeObserver.disconnect(),null)}},{key:`createList`,value:function(e){var t=this,r=[];return e.forEach(function(e){if(e.listItems){var i={listItems:[]};r.push(i),e.listItems.forEach(function(e){var r=e.onClick;if(r){var a=n({},e,{onClick:function(){t.focusElement.focus(),r()}});i.listItems.push(a)}else i.listItems.push(e)})}else r.push(e)}),s.default.createElement(b.default,{data:r})}},{key:`handleBlur`,value:function(){this.close()}},{key:`handleClick`,value:function(e){this.state.open?this.close(!0):this.open(e)}},{key:`handleFocus`,value:function(){clearTimeout(this.timeoutId)}},{key:`handleKeyDown`,value:function(e){e.which===27&&this.close(!0)}},{key:`renderTrigger`,value:function(){var e=this.props,t=e.children;e.content,e.dynamicAnchor,e.focusOnClose;var r=e.open,i=C(e,[`children`,`content`,`dynamicAnchor`,`focusOnClose`,`open`]),a=this.state.open,c=this.isControlled?r:a,l=t?o.Children.only(t):void 0;return this.isControlled||(l=s.default.cloneElement(l,{onClick:this.handleClick})),s.default.createElement(h.default,n({"aria-controls":this.popoverId,"aria-expanded":c},i),l)}},{key:`renderContent`,value:function(){var e=this,t=this.props,r=t.content,i=t.dynamicAnchor,a=t.modifiers,o=t.open,c=t.placement,l=this.state.open,u=this.isControlled?o:l,d=r;if(Array.isArray(r)&&(d=this.createList(r)),!u)return null;var f=a;return i&&typeof ResizeObserver<`u`&&(f=n({},a,{watchResize:{enabled:!0,order:1,fn:function(t){if(!e.resizeObserver){for(var n,r=t.instance.reference.parentElement;r&&(n=getComputedStyle(r),!/(auto|scroll|hidden)/.test(n.overflow+n.overflowX+n.overflowY));)r=r.parentElement;r||=document.documentElement,e.resizeObserver=new ResizeObserver(function(){t.instance.state.isDestroyed?e.disconnectResizeObserver():t.instance.scheduleUpdate()}),e.resizeObserver.observe(r)}return t}}})),s.default.createElement(k.PopoverContent,{hidden:!u,id:this.popoverId,modifiers:f,placement:c,tabIndex:-1},d)}},{key:`render`,value:function(){var e=this.props;e.content,e.dynamicAnchor,e.focusOnClose,e.theme;var t=C(e,[`content`,`dynamicAnchor`,`focusOnClose`,`theme`]);return s.default.createElement(k.Manager,n({onBlur:this.handleBlur,onFocus:this.handleFocus,tag:`div`},t),this.renderTrigger(),this.renderContent())}}]),t}(o.Component);A.propTypes={children:l.default.node.isRequired,content:l.default.any.isRequired,disabled:l.default.bool,dynamicAnchor:l.default.bool,focusOnClose:l.default.bool,modifiers:l.default.object,onOpen:l.default.func,onClose:l.default.func,open:l.default.bool,placement:l.default.oneOf([`auto`,`top`,`right`,`bottom`,`left`,`auto-start`,`top-start`,`right-start`,`bottom-start`,`left-start`,`auto-end`,`top-end`,`right-end`,`bottom-end`,`left-end`]),theme:_.themeShape},A.defaultProps={focusOnClose:!0,theme:(0,v.createTheme)()},A.displayName=`Popover`;var j=(0,v.withTheme)(A);j.WrappedComponent=A,e.default=j})),Tt=n((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=wt();Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n(t).default}});function n(e){return e&&e.__esModule?e:{default:e}}})),Et=n((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=xt();Object.defineProperty(e,"List",{enumerable:!0,get:function(){return i(t).default}});var n=yt();Object.defineProperty(e,"ListHeader",{enumerable:!0,get:function(){return i(n).default}});var r=Tt();Object.defineProperty(e,"Popover",{enumerable:!0,get:function(){return i(r).default}});function i(e){return e&&e.__esModule?e:{default:e}}})),Dt=n(((e,t)=>{var n=ne(),r=De(),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;function o(e,t){if(n(e))return!1;var o=typeof e;return o==`number`||o==`symbol`||o==`boolean`||e==null||r(e)?!0:a.test(e)||!i.test(e)||t!=null&&e in Object(t)}t.exports=o})),Ot=n(((e,t)=>{t.exports=ge()(Object,`create`)})),kt=n(((e,t)=>{var n=Ot();function r(){this.__data__=n?n(null):{},this.size=0}t.exports=r})),At=n(((e,t)=>{function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}t.exports=n})),jt=n(((e,t)=>{var n=Ot(),r=`__lodash_hash_undefined__`,i=Object.prototype.hasOwnProperty;function a(e){var t=this.__data__;if(n){var a=t[e];return a===r?void 0:a}return i.call(t,e)?t[e]:void 0}t.exports=a})),Mt=n(((e,t)=>{var n=Ot(),r=Object.prototype.hasOwnProperty;function i(e){var t=this.__data__;return n?t[e]!==void 0:r.call(t,e)}t.exports=i})),Nt=n(((e,t)=>{var n=Ot(),r=`__lodash_hash_undefined__`;function i(e,t){var i=this.__data__;return this.size+=+!this.has(e),i[e]=n&&t===void 0?r:t,this}t.exports=i})),Pt=n(((e,t)=>{var n=kt(),r=At(),i=jt(),a=Mt(),o=Nt();function s(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=o,t.exports=s})),Ft=n(((e,t)=>{function n(){this.__data__=[],this.size=0}t.exports=n})),It=n(((e,t)=>{var n=Ne();function r(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}t.exports=r})),Lt=n(((e,t)=>{var n=It(),r=Array.prototype.splice;function i(e){var t=this.__data__,i=n(t,e);return i<0?!1:(i==t.length-1?t.pop():r.call(t,i,1),--this.size,!0)}t.exports=i})),Rt=n(((e,t)=>{var n=It();function r(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}t.exports=r})),zt=n(((e,t)=>{var n=It();function r(e){return n(this.__data__,e)>-1}t.exports=r})),Bt=n(((e,t)=>{var n=It();function r(e,t){var r=this.__data__,i=n(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}t.exports=r})),Vt=n(((e,t)=>{var n=Ft(),r=Lt(),i=Rt(),a=zt(),o=Bt();function s(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=o,t.exports=s})),Ht=n(((e,t)=>{t.exports=ge()(H(),`Map`)})),Ut=n(((e,t)=>{var n=Pt(),r=Vt(),i=Ht();function a(){this.size=0,this.__data__={hash:new n,map:new(i||r),string:new n}}t.exports=a})),Wt=n(((e,t)=>{function n(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}t.exports=n})),Gt=n(((e,t)=>{var n=Wt();function r(e,t){var r=e.__data__;return n(t)?r[typeof t==`string`?`string`:`hash`]:r.map}t.exports=r})),Kt=n(((e,t)=>{var n=Gt();function r(e){var t=n(this,e).delete(e);return this.size-=+!!t,t}t.exports=r})),qt=n(((e,t)=>{var n=Gt();function r(e){return n(this,e).get(e)}t.exports=r})),Jt=n(((e,t)=>{var n=Gt();function r(e){return n(this,e).has(e)}t.exports=r})),Yt=n(((e,t)=>{var n=Gt();function r(e,t){var r=n(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this}t.exports=r})),Xt=n(((e,t)=>{var n=Ut(),r=Kt(),i=qt(),a=Jt(),o=Yt();function s(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=o,t.exports=s})),Zt=n(((e,t)=>{var n=Xt(),r=`Expected a function`;function i(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(r);var a=function(){var n=arguments,r=t?t.apply(this,n):n[0],i=a.cache;if(i.has(r))return i.get(r);var o=e.apply(this,n);return a.cache=i.set(r,o)||i,o};return a.cache=new(i.Cache||n),a}i.Cache=n,t.exports=i})),Qt=n(((e,t)=>{var n=Zt(),r=500;function i(e){var t=n(e,function(e){return i.size===r&&i.clear(),e}),i=t.cache;return t}t.exports=i})),$t=n(((e,t)=>{var n=Qt(),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g;t.exports=n(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(r,function(e,n,r,a){t.push(r?a.replace(i,`$1`):n||e)}),t})})),en=n(((e,t)=>{var n=ne(),r=Dt(),i=$t(),a=mt();function o(e,t){return n(e)?e:r(e,t)?[e]:i(a(e))}t.exports=o})),tn=n(((e,t)=>{var n=De(),r=1/0;function i(e){if(typeof e==`string`||n(e))return e;var t=e+``;return t==`0`&&1/e==-r?`-0`:t}t.exports=i})),nn=n(((e,t)=>{var n=en(),r=tn();function i(e,t){t=n(t,e);for(var i=0,a=t.length;e!=null&&i<a;)e=e[r(t[i++])];return i&&i==a?e:void 0}t.exports=i})),rn=n(((e,t)=>{var n=nn();function r(e,t,r){var i=e==null?void 0:n(e,t);return i===void 0?r:i}t.exports=r})),an,on=new Uint8Array(16);function sn(){if(!an&&(an=typeof crypto<`u`&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<`u`&&typeof msCrypto.getRandomValues==`function`&&msCrypto.getRandomValues.bind(msCrypto),!an))throw Error(`crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`);return an(on)}var cn=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ln(e){return typeof e==`string`&&cn.test(e)}for(var un=[],dn=0;dn<256;++dn)un.push((dn+256).toString(16).substr(1));function fn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(un[e[t+0]]+un[e[t+1]]+un[e[t+2]]+un[e[t+3]]+`-`+un[e[t+4]]+un[e[t+5]]+`-`+un[e[t+6]]+un[e[t+7]]+`-`+un[e[t+8]]+un[e[t+9]]+`-`+un[e[t+10]]+un[e[t+11]]+un[e[t+12]]+un[e[t+13]]+un[e[t+14]]+un[e[t+15]]).toLowerCase();if(!ln(n))throw TypeError(`Stringified UUID is invalid`);return n}function pn(e,t,n){e||={};var r=e.random||(e.rng||sn)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n||=0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return fn(r)}var mn=n(((e,t)=>{t.exports={Properties:{autoFocus:4,accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:4,allowTransparency:0,alt:0,as:0,async:4,autoComplete:0,autoPlay:4,capture:4,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:5,cite:0,classID:0,className:0,cols:24,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:4,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:4,defer:4,dir:0,disabled:4,download:32,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:4,formTarget:0,frameBorder:0,headers:0,height:0,hidden:4,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:4,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:5,muted:5,name:0,nonce:0,noValidate:4,open:4,optimum:0,pattern:0,placeholder:0,playsInline:4,poster:0,preload:0,profile:0,radioGroup:0,readOnly:4,referrerPolicy:0,rel:0,required:4,reversed:4,role:0,rows:24,rowSpan:8,sandbox:0,scope:0,scoped:4,scrolling:0,seamless:4,selected:5,shape:0,size:24,sizes:0,span:24,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:8,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:4,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:`accept-charset`,className:`class`,htmlFor:`for`,httpEquiv:`http-equiv`}}})),hn=n(((e,t)=>{t.exports={Properties:{accentHeight:0,accumulate:0,additive:0,alignmentBaseline:0,allowReorder:0,alphabetic:0,amplitude:0,arabicForm:0,ascent:0,attributeName:0,attributeType:0,autoReverse:0,azimuth:0,baseFrequency:0,baseProfile:0,baselineShift:0,bbox:0,begin:0,bias:0,by:0,calcMode:0,capHeight:0,clip:0,clipPath:0,clipRule:0,clipPathUnits:0,colorInterpolation:0,colorInterpolationFilters:0,colorProfile:0,colorRendering:0,contentScriptType:0,contentStyleType:0,cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:0,direction:0,display:0,divisor:0,dominantBaseline:0,dur:0,dx:0,dy:0,edgeMode:0,elevation:0,enableBackground:0,end:0,exponent:0,externalResourcesRequired:0,fill:0,fillOpacity:0,fillRule:0,filter:0,filterRes:0,filterUnits:0,floodColor:0,floodOpacity:0,focusable:0,fontFamily:0,fontSize:0,fontSizeAdjust:0,fontStretch:0,fontStyle:0,fontVariant:0,fontWeight:0,format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:0,glyphOrientationHorizontal:0,glyphOrientationVertical:0,glyphRef:0,gradientTransform:0,gradientUnits:0,hanging:0,horizAdvX:0,horizOriginX:0,ideographic:0,imageRendering:0,in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:0,kernelUnitLength:0,kerning:0,keyPoints:0,keySplines:0,keyTimes:0,lengthAdjust:0,letterSpacing:0,lightingColor:0,limitingConeAngle:0,local:0,markerEnd:0,markerMid:0,markerStart:0,markerHeight:0,markerUnits:0,markerWidth:0,mask:0,maskContentUnits:0,maskUnits:0,mathematical:0,mode:0,numOctaves:0,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:0,overlineThickness:0,paintOrder:0,panose1:0,pathLength:0,patternContentUnits:0,patternTransform:0,patternUnits:0,pointerEvents:0,points:0,pointsAtX:0,pointsAtY:0,pointsAtZ:0,preserveAlpha:0,preserveAspectRatio:0,primitiveUnits:0,r:0,radius:0,refX:0,refY:0,renderingIntent:0,repeatCount:0,repeatDur:0,requiredExtensions:0,requiredFeatures:0,restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:0,slope:0,spacing:0,specularConstant:0,specularExponent:0,speed:0,spreadMethod:0,startOffset:0,stdDeviation:0,stemh:0,stemv:0,stitchTiles:0,stopColor:0,stopOpacity:0,strikethroughPosition:0,strikethroughThickness:0,string:0,stroke:0,strokeDasharray:0,strokeDashoffset:0,strokeLinecap:0,strokeLinejoin:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0,surfaceScale:0,systemLanguage:0,tableValues:0,targetX:0,targetY:0,textAnchor:0,textDecoration:0,textRendering:0,textLength:0,to:0,transform:0,u1:0,u2:0,underlinePosition:0,underlineThickness:0,unicode:0,unicodeBidi:0,unicodeRange:0,unitsPerEm:0,vAlphabetic:0,vHanging:0,vIdeographic:0,vMathematical:0,values:0,vectorEffect:0,version:0,vertAdvY:0,vertOriginX:0,vertOriginY:0,viewBox:0,viewTarget:0,visibility:0,widths:0,wordSpacing:0,writingMode:0,x:0,xHeight:0,x1:0,x2:0,xChannelSelector:0,xlinkActuate:0,xlinkArcrole:0,xlinkHref:0,xlinkRole:0,xlinkShow:0,xlinkTitle:0,xlinkType:0,xmlBase:0,xmlns:0,xmlnsXlink:0,xmlLang:0,xmlSpace:0,y:0,y1:0,y2:0,yChannelSelector:0,z:0,zoomAndPan:0},DOMAttributeNames:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDasharray:`stroke-dasharray`,strokeDashoffset:`stroke-dashoffset`,strokeLinecap:`stroke-linecap`,strokeLinejoin:`stroke-linejoin`,strokeMiterlimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,xlinkActuate:`xlink:actuate`,xlinkArcrole:`xlink:arcrole`,xlinkHref:`xlink:href`,xlinkRole:`xlink:role`,xlinkShow:`xlink:show`,xlinkTitle:`xlink:title`,xlinkType:`xlink:type`,xmlBase:`xml:base`,xmlnsXlink:`xmlns:xlink`,xmlLang:`xml:lang`,xmlSpace:`xml:space`}}})),gn=n(((e,t)=>{t.exports={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32}})),_n=n(((e,t)=>{var n=mn(),r=hn(),i=gn(),a=i.MUST_USE_PROPERTY,o=i.HAS_BOOLEAN_VALUE,s=i.HAS_NUMERIC_VALUE,c=i.HAS_POSITIVE_NUMERIC_VALUE,l=i.HAS_OVERLOADED_BOOLEAN_VALUE;function u(e,t){return(e&t)===t}function d(e,t,n){var r=e.Properties,i=e.DOMAttributeNames,d,f,p;for(f in r)d=i[f]||(n?f:f.toLowerCase()),p=r[f],t[d]={attributeName:d,propertyName:f,mustUseProperty:u(p,a),hasBooleanValue:u(p,o),hasNumericValue:u(p,s),hasPositiveNumericValue:u(p,c),hasOverloadedBooleanValue:u(p,l)}}var f={};d(n,f);var p={};d(r,p,!0);var m={};d(n,m),d(r,m,!0),t.exports={html:f,svg:p,properties:m,isCustomAttribute:RegExp.prototype.test.bind(RegExp(`^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`))}})),vn=n(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g;t.exports=function(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,d=1;function f(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);d=~n?e.length-n:d+e.length}function p(){var e={line:l,column:d};return function(t){return t.position=new m(e),v(),t}}function m(e){this.start=e,this.end={line:l,column:d},this.source=t.source}m.prototype.content=e;var h=[];function g(n){var r=Error(t.source+`:`+l+`:`+d+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=d,r.source=e,t.silent)h.push(r);else throw r}function _(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function v(){_(i)}function y(e){var t;for(e||=[];t=b();)t!==!1&&e.push(t);return e}function b(){var t=p();if(e.charAt(0)==`/`&&e.charAt(1)==`*`){for(var n=2;e.charAt(n)!=``&&(e.charAt(n)!=`*`||e.charAt(n+1)!=`/`);)++n;if(n+=2,e.charAt(n-1)===``)return g(`End of comment missing`);var r=e.slice(2,n-2);return d+=2,f(r),e=e.slice(n),d+=2,t({type:`comment`,comment:r})}}function x(){var e=p(),t=_(a);if(t){if(b(),!_(o))return g(`property missing ':'`);var r=_(s),i=e({type:`declaration`,property:u(t[0].replace(n,``)),value:r?u(r[0].replace(n,``)):``});return _(c),i}}function S(){var e=[];y(e);for(var t;t=x();)t!==!1&&(e.push(t),y(e));return e}return v(),S()};function u(e){return e?e.replace(l,``):``}})),yn=n(((e,t)=>{var n=vn();function r(e,t){var r=null;if(!e||typeof e!=`string`)return r;for(var i,a=n(e),o=typeof t==`function`,s,c,l=0,u=a.length;l<u;l++)i=a[l],s=i.property,c=i.value,o?t(s,c,i):c&&(r||={},r[s]=c);return r}t.exports=r})),bn=n(((e,t)=>{var n=r(),i=/-([a-z])/g,a=/^--[a-zA-Z0-9-]+$|^[^-]+$/;function o(e){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);return a.test(e)?e:e.toLowerCase().replace(i,function(e,t){return t.toUpperCase()})}function s(e,t){if(!e||typeof e!=`object`)throw TypeError(`First argument must be an object`);var n,r,i=typeof t==`function`,a={},o={};for(n in e){if(r=e[n],i&&(a=t(n,r),a&&a.length===2)){o[a[0]]=a[1];continue}typeof r==`string`&&(o[r]=n)}return o}function c(e,t){if(e.indexOf(`-`)===-1)return t&&typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}t.exports={PRESERVE_CUSTOM_ATTRIBUTES:n.version.split(`.`)[0]>=16,camelCase:o,invertObject:s,isCustomComponent:c}})),xn=n(((e,t)=>{var n=_n(),r=yn(),i=bn(),a=i.camelCase,o=n.html,s=n.svg,c=n.isCustomAttribute,l=Object.prototype.hasOwnProperty;function u(e){e||={};var t,n,r,a,u={};for(t in e){if(r=e[t],c(t)){u[t]=r;continue}if(n=t.toLowerCase(),l.call(o,n)){a=o[n],u[a.propertyName]=a.hasBooleanValue||a.hasOverloadedBooleanValue&&!r?!0:r;continue}if(l.call(s,t)){a=s[t],u[a.propertyName]=r;continue}i.PRESERVE_CUSTOM_ATTRIBUTES&&(u[t]=r)}return e.style!=null&&(u.style=d(e.style)),u}function d(e){var t={};return e&&r(e,function(e,n){e&&n&&(t[a(e)]=n)}),t}t.exports=u})),Sn=n(((e,t)=>{var n=xn(),i=bn();function a(e,t){t||={};for(var i=t.library||r(),s=i.cloneElement,c=i.createElement,l=i.isValidElement,u=[],d,f=typeof t.replace==`function`,p,m,h,g,_=t.trim,v=0,y=e.length;v<y;v++){if(d=e[v],f&&(p=t.replace(d),l(p))){y>1&&(p=s(p,{key:p.key||v})),u.push(p);continue}if(d.type===`text`){_?(g=d.data.trim(),g&&u.push(d.data)):u.push(d.data);continue}switch(m=d.attribs,o(d)||(m=n(d.attribs)),h=null,d.type){case`script`:case`style`:d.children[0]&&(m.dangerouslySetInnerHTML={__html:d.children[0].data});break;case`tag`:d.name===`textarea`&&d.children[0]?m.defaultValue=d.children[0].data:d.children&&d.children.length&&(h=a(d.children,t));break;default:continue}y>1&&(m.key=v),u.push(c(d.name,m,h))}return u.length===1?u[0]:u}function o(e){return i.PRESERVE_CUSTOM_ATTRIBUTES&&e.type===`tag`&&i.isCustomComponent(e.name,e.attribs)}t.exports=a})),Cn=n(((e,t)=>{t.exports={CASE_SENSITIVE_TAG_NAMES:`animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussainBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath`.split(`.`)}})),wn=n(((e,t)=>{for(var n=Cn().CASE_SENSITIVE_TAG_NAMES,r={},i,a=0,o=n.length;a<o;a++)i=n[a],r[i.toLowerCase()]=i;function s(e){return r[e]}function c(e){for(var t={},n,r=0,i=e.length;r<i;r++)n=e[r],t[n.name]=n.value;return t}function l(e){return e=e.toLowerCase(),s(e)||e}function u(e,t,n){t||=null;for(var r=[],i,a,o,s=0,d=e.length;s<d;s++){switch(i=e[s],o={next:null,prev:r[s-1]||null,parent:t},a=r[s-1],a&&(a.next=o),i.nodeName[0]!==`#`&&(o.name=l(i.nodeName),o.attribs={},i.attributes&&i.attributes.length&&(o.attribs=c(i.attributes))),i.nodeType){case 1:o.name===`script`||o.name===`style`?o.type=o.name:o.type=`tag`,o.children=u(i.childNodes,o);break;case 3:o.type=`text`,o.data=i.nodeValue;break;case 8:o.type=`comment`,o.data=i.nodeValue}r.push(o)}return n&&(r.unshift({name:n.substring(0,n.indexOf(` `)).toLowerCase(),data:n,type:`directive`,next:r[0]?r[0]:null,prev:null,parent:t}),r[1]&&(r[1].prev=r[0])),r}function d(e){return e?document.documentMode===e:/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}t.exports={formatAttributes:c,formatDOM:u,isIE:d}})),Tn=n(((e,t)=>{var n=wn(),r=`html`,i=`head`,a=`body`,o=/<([a-zA-Z]+[0-9]?)/,s=/<head.*>/i,c=/<body.*>/i,l=/<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,u=n.isIE(9),d=u||n.isIE(),f=function(){throw Error("This browser does not support `document.implementation.createHTMLDocument`")},p=function(){throw Error("This browser does not support `DOMParser.prototype.parseFromString`")};if(typeof window.DOMParser==`function`){var m=new window.DOMParser,h=u?`text/xml`:`text/html`;p=function(e,t){return t&&(e=`<`+t+`>`+e+`</`+t+`>`),u&&(e=e.replace(l,`<$1$2$3/>`)),m.parseFromString(e,h)},f=p}if(document.implementation){var g=document.implementation.createHTMLDocument(d?`html-dom-parser`:void 0);f=function(e,t){if(t)return g.documentElement.getElementsByTagName(t)[0].innerHTML=e,g;try{return g.documentElement.innerHTML=e,g}catch{if(p)return p(e)}}}var _=document.createElement(`template`),v;_.content&&(v=function(e){return _.innerHTML=e,_.content.childNodes});function y(e){var t,n=e.match(o);n&&n[1]&&(t=n[1].toLowerCase());var l,u,d;switch(t){case r:return l=p(e),s.test(e)||(u=l.getElementsByTagName(i)[0],u&&u.parentNode.removeChild(u)),c.test(e)||(u=l.getElementsByTagName(a)[0],u&&u.parentNode.removeChild(u)),l.getElementsByTagName(r);case i:case a:return d=f(e).getElementsByTagName(t),c.test(e)&&s.test(e)?d[0].parentNode.childNodes:d;default:return v?v(e):f(e,a).getElementsByTagName(a)[0].childNodes}}t.exports=y})),En=n(((e,t)=>{var n=Tn(),r=wn(),i=r.formatDOM,a=r.isIE(9),o=/<(![a-zA-Z\s]+)>/;function s(e){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];var t=e.match(o),r;return t&&t[1]&&(r=t[1],a&&(e=e.replace(t[0],``))),i(n(e),null,r)}t.exports=s})),Dn=n(((e,t)=>{var n=Sn(),r=En(),i={decodeEntities:!0,lowerCaseAttributeNames:!1};function a(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);return e===``?[]:(t||={},n(r(e,t.htmlparser2||i),t))}a.domToReact=n,a.htmlToDOM=r,t.exports=a,t.exports.default=a})),On=n(((e,t)=>{var n=Vt();function r(){this.__data__=new n,this.size=0}t.exports=r})),kn=n(((e,t)=>{function n(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}t.exports=n})),An=n(((e,t)=>{function n(e){return this.__data__.get(e)}t.exports=n})),jn=n(((e,t)=>{function n(e){return this.__data__.has(e)}t.exports=n})),Mn=n(((e,t)=>{var n=Vt(),r=Ht(),i=Xt(),a=200;function o(e,t){var o=this.__data__;if(o instanceof n){var s=o.__data__;if(!r||s.length<a-1)return s.push([e,t]),this.size=++o.size,this;o=this.__data__=new i(s)}return o.set(e,t),this.size=o.size,this}t.exports=o})),Nn=n(((e,t)=>{var n=Vt(),r=On(),i=kn(),a=An(),o=jn(),s=Mn();function c(e){var t=this.__data__=new n(e);this.size=t.size}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=o,c.prototype.set=s,t.exports=c})),Pn=n(((e,t)=>{function n(e){return this.__data__.set(e,`__lodash_hash_undefined__`),this}t.exports=n})),Fn=n(((e,t)=>{function n(e){return this.__data__.has(e)}t.exports=n})),In=n(((e,t)=>{var n=Xt(),r=Pn(),i=Fn();function a(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}a.prototype.add=a.prototype.push=r,a.prototype.has=i,t.exports=a})),Ln=n(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}t.exports=n})),Rn=n(((e,t)=>{function n(e,t){return e.has(t)}t.exports=n})),zn=n(((e,t)=>{var n=In(),r=Ln(),i=Rn(),a=1,o=2;function s(e,t,s,c,l,u){var d=s&a,f=e.length,p=t.length;if(f!=p&&!(d&&p>f))return!1;var m=u.get(e),h=u.get(t);if(m&&h)return m==t&&h==e;var g=-1,_=!0,v=s&o?new n:void 0;for(u.set(e,t),u.set(t,e);++g<f;){var y=e[g],b=t[g];if(c)var x=d?c(b,y,g,t,e,u):c(y,b,g,e,t,u);if(x!==void 0){if(x)continue;_=!1;break}if(v){if(!r(t,function(e,t){if(!i(v,t)&&(y===e||l(y,e,s,c,u)))return v.push(t)})){_=!1;break}}else if(!(y===b||l(y,b,s,c,u))){_=!1;break}}return u.delete(e),u.delete(t),_}t.exports=s})),Bn=n(((e,t)=>{t.exports=H().Uint8Array})),Vn=n(((e,t)=>{function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}t.exports=n})),Hn=n(((e,t)=>{function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}t.exports=n})),Un=n(((e,t)=>{var n=ce(),r=Bn(),i=Ne(),a=zn(),o=Vn(),s=Hn(),c=1,l=2,u=`[object Boolean]`,d=`[object Date]`,f=`[object Error]`,p=`[object Map]`,m=`[object Number]`,h=`[object RegExp]`,g=`[object Set]`,_=`[object String]`,v=`[object Symbol]`,y=`[object ArrayBuffer]`,b=`[object DataView]`,x=n?n.prototype:void 0,S=x?x.valueOf:void 0;function C(e,t,n,x,C,w,T){switch(n){case b:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case y:return!(e.byteLength!=t.byteLength||!w(new r(e),new r(t)));case u:case d:case m:return i(+e,+t);case f:return e.name==t.name&&e.message==t.message;case h:case _:return e==t+``;case p:var E=o;case g:var D=x&c;if(E||=s,e.size!=t.size&&!D)return!1;var O=T.get(e);if(O)return O==t;x|=l,T.set(e,t);var k=a(E(e),E(t),x,C,w,T);return T.delete(e),k;case v:if(S)return S.call(e)==S.call(t)}return!1}t.exports=C})),Wn=n(((e,t)=>{function n(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}t.exports=n})),Gn=n(((e,t)=>{var n=Wn(),r=ne();function i(e,t,i){var a=t(e);return r(e)?a:n(a,i(e))}t.exports=i})),Kn=n(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}t.exports=n})),qn=n(((e,t)=>{function n(){return[]}t.exports=n})),Jn=n(((e,t)=>{var n=Kn(),r=qn(),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols;t.exports=a?function(e){return e==null?[]:(e=Object(e),n(a(e),function(t){return i.call(e,t)}))}:r})),Yn=n(((e,t)=>{var n=Gn(),r=Jn(),i=st();function a(e){return n(e,i,r)}t.exports=a})),Xn=n(((e,t)=>{var n=Yn(),r=1,i=Object.prototype.hasOwnProperty;function a(e,t,a,o,s,c){var l=a&r,u=n(e),d=u.length;if(d!=n(t).length&&!l)return!1;for(var f=d;f--;){var p=u[f];if(!(l?p in t:i.call(t,p)))return!1}var m=c.get(e),h=c.get(t);if(m&&h)return m==t&&h==e;var g=!0;c.set(e,t),c.set(t,e);for(var _=l;++f<d;){p=u[f];var v=e[p],y=t[p];if(o)var b=l?o(y,v,p,t,e,c):o(v,y,p,e,t,c);if(!(b===void 0?v===y||s(v,y,a,o,c):b)){g=!1;break}_||=p==`constructor`}if(g&&!_){var x=e.constructor,S=t.constructor;x!=S&&`constructor`in e&&`constructor`in t&&!(typeof x==`function`&&x instanceof x&&typeof S==`function`&&S instanceof S)&&(g=!1)}return c.delete(e),c.delete(t),g}t.exports=a})),Zn=n(((e,t)=>{t.exports=ge()(H(),`DataView`)})),Qn=n(((e,t)=>{t.exports=ge()(H(),`Promise`)})),$n=n(((e,t)=>{t.exports=ge()(H(),`Set`)})),er=n(((e,t)=>{t.exports=ge()(H(),`WeakMap`)})),tr=n(((e,t)=>{var n=Zn(),r=Ht(),i=Qn(),a=$n(),o=er(),s=W(),c=pe(),l=`[object Map]`,u=`[object Object]`,d=`[object Promise]`,f=`[object Set]`,p=`[object WeakMap]`,m=`[object DataView]`,h=c(n),g=c(r),_=c(i),v=c(a),y=c(o),b=s;(n&&b(new n(new ArrayBuffer(1)))!=m||r&&b(new r)!=l||i&&b(i.resolve())!=d||a&&b(new a)!=f||o&&b(new o)!=p)&&(b=function(e){var t=s(e),n=t==u?e.constructor:void 0,r=n?c(n):``;if(r)switch(r){case h:return m;case g:return l;case _:return d;case v:return f;case y:return p}return t}),t.exports=b})),nr=n(((e,t)=>{var n=Nn(),r=zn(),i=Un(),a=Xn(),o=tr(),s=ne(),c=Ze(),l=tt(),u=1,d=`[object Arguments]`,f=`[object Array]`,p=`[object Object]`,m=Object.prototype.hasOwnProperty;function h(e,t,h,g,_,v){var y=s(e),b=s(t),x=y?f:o(e),S=b?f:o(t);x=x==d?p:x,S=S==d?p:S;var C=x==p,w=S==p,T=x==S;if(T&&c(e)){if(!c(t))return!1;y=!0,C=!1}if(T&&!C)return v||=new n,y||l(e)?r(e,t,h,g,_,v):i(e,t,x,h,g,_,v);if(!(h&u)){var E=C&&m.call(e,`__wrapped__`),D=w&&m.call(t,`__wrapped__`);if(E||D){var O=E?e.value():e,k=D?t.value():t;return v||=new n,_(O,k,h,g,v)}}return T?(v||=new n,a(e,t,h,g,_,v)):!1}t.exports=h})),rr=n(((e,t)=>{var n=nr(),r=Ee();function i(e,t,a,o,s){return e===t?!0:e==null||t==null||!r(e)&&!r(t)?e!==e&&t!==t:n(e,t,a,o,i,s)}t.exports=i})),ir=n(((e,t)=>{var n=rr();function r(e,t){return n(e,t)}t.exports=r})),ar=function(e){return e.reduce(function(e,t){var n=t[0];return e[n]=t[1],e},{})},or=typeof window<`u`&&window.document&&window.document.createElement?P.useLayoutEffect:P.useEffect,sr=`bottom`,cr=`right`,lr=`left`,ur=`auto`,dr=[`top`,sr,cr,lr],fr=`start`,pr=`clippingParents`,mr=`viewport`,hr=`popper`,gr=`reference`,_r=dr.reduce(function(e,t){return e.concat([t+`-`+fr,t+`-end`])},[]),vr=[].concat(dr,[ur]).reduce(function(e,t){return e.concat([t,t+`-`+fr,t+`-end`])},[]),yr=[`beforeRead`,`read`,`afterRead`,`beforeMain`,`main`,`afterMain`,`beforeWrite`,`write`,`afterWrite`];function br(e){return e?(e.nodeName||``).toLowerCase():null}function xr(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Sr(e){return e instanceof xr(e).Element||e instanceof Element}function Cr(e){return e instanceof xr(e).HTMLElement||e instanceof HTMLElement}function wr(e){return typeof ShadowRoot>`u`?!1:e instanceof xr(e).ShadowRoot||e instanceof ShadowRoot}function Tr(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];!Cr(i)||!br(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];t===!1?i.removeAttribute(e):i.setAttribute(e,t===!0?``:t)}))})}function Er(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});!Cr(r)||!br(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}}var Dr={name:`applyStyles`,enabled:!0,phase:`write`,fn:Tr,effect:Er,requires:[`computeStyles`]};function Or(e){return e.split(`-`)[0]}var kr=Math.max,Ar=Math.min,jr=Math.round;function Mr(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function Nr(){return!/^((?!chrome|android).)*safari/i.test(Mr())}function Pr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&Cr(e)&&(i=e.offsetWidth>0&&jr(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&jr(r.height)/e.offsetHeight||1);var o=(Sr(e)?xr(e):window).visualViewport,s=!Nr()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function Fr(e){var t=Pr(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Ir(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&wr(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Lr(e){return xr(e).getComputedStyle(e)}function Rr(e){return[`table`,`td`,`th`].indexOf(br(e))>=0}function zr(e){return((Sr(e)?e.ownerDocument:e.document)||window.document).documentElement}function Br(e){return br(e)===`html`?e:e.assignedSlot||e.parentNode||(wr(e)?e.host:null)||zr(e)}function Vr(e){return!Cr(e)||Lr(e).position===`fixed`?null:e.offsetParent}function Hr(e){var t=/firefox/i.test(Mr());if(/Trident/i.test(Mr())&&Cr(e)&&Lr(e).position===`fixed`)return null;var n=Br(e);for(wr(n)&&(n=n.host);Cr(n)&&[`html`,`body`].indexOf(br(n))<0;){var r=Lr(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}function Ur(e){for(var t=xr(e),n=Vr(e);n&&Rr(n)&&Lr(n).position===`static`;)n=Vr(n);return n&&(br(n)===`html`||br(n)===`body`&&Lr(n).position===`static`)?t:n||Hr(e)||t}function Wr(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function Gr(e,t,n){return kr(e,Ar(t,n))}function Kr(e,t,n){var r=Gr(e,t,n);return r>n?n:r}function qr(){return{top:0,right:0,bottom:0,left:0}}function Jr(e){return Object.assign({},qr(),e)}function Yr(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var Xr=function(e,t){return e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e,Jr(typeof e==`number`?Yr(e,dr):e)};function Zr(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=Or(n.placement),c=Wr(s),l=[`left`,`right`].indexOf(s)>=0?`height`:`width`;if(!(!a||!o)){var u=Xr(i.padding,n),d=Fr(a),f=c===`y`?`top`:lr,p=c===`y`?sr:cr,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=Ur(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=Gr(y,x,b),C=c;n.modifiersData[r]=(t={},t[C]=S,t.centerOffset=S-x,t)}}function Qr(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r==`string`&&(r=t.elements.popper.querySelector(r),!r)||Ir(t.elements.popper,r)&&(t.elements.arrow=r))}var $r={name:`arrow`,enabled:!0,phase:`main`,fn:Zr,effect:Qr,requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function ei(e){return e.split(`-`)[1]}var ti={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function ni(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:jr(n*i)/i||0,y:jr(r*i)/i||0}}function ri(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=lr,b=`top`,x=window;if(l){var S=Ur(n),C=`clientHeight`,w=`clientWidth`;if(S===xr(n)&&(S=zr(n),Lr(S).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`)),S=S,i===`top`||(i===`left`||i===`right`)&&a===`end`){b=sr;var T=d&&S===x&&x.visualViewport?x.visualViewport.height:S[C];h-=T-r.height,h*=c?1:-1}if(i===`left`||(i===`top`||i===`bottom`)&&a===`end`){y=cr;var E=d&&S===x&&x.visualViewport?x.visualViewport.width:S[w];p-=E-r.width,p*=c?1:-1}}var D=Object.assign({position:s},l&&ti),O=u===!0?ni({x:p,y:h},xr(n)):{x:p,y:h};if(p=O.x,h=O.y,c){var k;return Object.assign({},D,(k={},k[b]=v?`0`:``,k[y]=_?`0`:``,k.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,k))}return Object.assign({},D,(t={},t[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}function ii(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:Or(t.placement),variation:ei(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ri(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ri(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ai={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:ii,data:{}},oi={passive:!0};function si(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=xr(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,oi)}),s&&c.addEventListener(`resize`,n.update,oi),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,oi)}),s&&c.removeEventListener(`resize`,n.update,oi)}}var ci={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:si,data:{}},li={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function ui(e){return e.replace(/left|right|bottom|top/g,function(e){return li[e]})}var di={start:`end`,end:`start`};function fi(e){return e.replace(/start|end/g,function(e){return di[e]})}function pi(e){var t=xr(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function mi(e){return Pr(zr(e)).left+pi(e).scrollLeft}function hi(e,t){var n=xr(e),r=zr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=Nr();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+mi(e),y:c}}function gi(e){var t=zr(e),n=pi(e),r=e.ownerDocument?.body,i=kr(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=kr(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+mi(e),s=-n.scrollTop;return Lr(r||t).direction===`rtl`&&(o+=kr(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}function _i(e){var t=Lr(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function vi(e){return[`html`,`body`,`#document`].indexOf(br(e))>=0?e.ownerDocument.body:Cr(e)&&_i(e)?e:vi(Br(e))}function yi(e,t){t===void 0&&(t=[]);var n=vi(e),r=n===e.ownerDocument?.body,i=xr(n),a=r?[i].concat(i.visualViewport||[],_i(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(yi(Br(a)))}function bi(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function xi(e,t){var n=Pr(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Si(e,t,n){return t===`viewport`?bi(hi(e,n)):Sr(t)?xi(t,n):bi(gi(zr(e)))}function Ci(e){var t=yi(Br(e)),n=[`absolute`,`fixed`].indexOf(Lr(e).position)>=0&&Cr(e)?Ur(e):e;return Sr(n)?t.filter(function(e){return Sr(e)&&Ir(e,n)&&br(e)!==`body`}):[]}function wi(e,t,n,r){var i=t===`clippingParents`?Ci(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=Si(e,n,r);return t.top=kr(i.top,t.top),t.right=Ar(i.right,t.right),t.bottom=Ar(i.bottom,t.bottom),t.left=kr(i.left,t.left),t},Si(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ti(e){var t=e.reference,n=e.element,r=e.placement,i=r?Or(r):null,a=r?ei(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(i){case`top`:c={x:o,y:t.y-n.height};break;case sr:c={x:o,y:t.y+t.height};break;case cr:c={x:t.x+t.width,y:s};break;case lr:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var l=i?Wr(i):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(a){case fr:c[l]=c[l]-(t[u]/2-n[u]/2);break;case`end`:c[l]=c[l]+(t[u]/2-n[u]/2)}}return c}function Ei(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?pr:s,l=n.rootBoundary,u=l===void 0?mr:l,d=n.elementContext,f=d===void 0?hr:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=Jr(typeof g==`number`?Yr(g,dr):g),v=f===`popper`?gr:hr,y=e.rects.popper,b=e.elements[m?v:f],x=wi(Sr(b)?b:b.contextElement||zr(e.elements.popper),c,u,o),S=Pr(e.elements.reference),C=Ti({reference:S,element:y,strategy:`absolute`,placement:i}),w=bi(Object.assign({},y,C)),T=f===`popper`?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},D=e.modifiersData.offset;if(f===`popper`&&D){var O=D[i];Object.keys(E).forEach(function(e){var t=[`right`,`bottom`].indexOf(e)>=0?1:-1,n=[`top`,`bottom`].indexOf(e)>=0?`y`:`x`;E[e]+=O[n]*t})}return E}function Di(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?vr:c,u=ei(r),d=u?s?_r:_r.filter(function(e){return ei(e)===u}):dr,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=Ei(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[Or(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}function Oi(e){if(Or(e)===`auto`)return[];var t=ui(e);return[fi(e),t,fi(t)]}function ki(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=Or(g)===g,v=c||(_||!m?[ui(g)]:Oi(g)),y=[g].concat(v).reduce(function(e,n){return e.concat(Or(n)===`auto`?Di(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],D=Or(E),O=ei(E)===fr,k=[`top`,sr].indexOf(D)>=0,A=k?`width`:`height`,j=Ei(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),M=k?O?cr:lr:O?sr:`top`;b[A]>x[A]&&(M=ui(M));var N=ui(M),P=[];if(a&&P.push(j[D]<=0),s&&P.push(j[M]<=0,j[N]<=0),P.every(function(e){return e})){w=E,C=!1;break}S.set(E,P)}if(C)for(var F=m?3:1,I=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},L=F;L>0&&I(L)!==`break`;L--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}}var Ai={name:`flip`,enabled:!0,phase:`main`,fn:ki,requiresIfExists:[`offset`],data:{_skip:!1}};function ji(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Mi(e){return[`top`,cr,sr,lr].some(function(t){return e[t]>=0})}function Ni(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=Ei(t,{elementContext:`reference`}),s=Ei(t,{altBoundary:!0}),c=ji(o,r),l=ji(s,i,a),u=Mi(c),d=Mi(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var Pi={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:Ni};function Fi(e,t,n){var r=Or(e),i=[`left`,`top`].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[`left`,`right`].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function Ii(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=vr.reduce(function(e,n){return e[n]=Fi(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var Li={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:Ii};function Ri(e){var t=e.state,n=e.name;t.modifiersData[n]=Ti({reference:t.rects.reference,element:t.rects.popper,strategy:`absolute`,placement:t.placement})}var zi={name:`popperOffsets`,enabled:!0,phase:`read`,fn:Ri,data:{}};function Bi(e){return e===`x`?`y`:`x`}function Vi(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=Ei(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=Or(t.placement),v=ei(t.placement),y=!v,b=Wr(_),x=Bi(b),S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(S){if(a){var k=b===`y`?`top`:lr,A=b===`y`?sr:cr,j=b===`y`?`height`:`width`,M=S[b],N=M+g[k],P=M-g[A],F=p?-w[j]/2:0,I=v===`start`?C[j]:w[j],L=v===`start`?-w[j]:-C[j],R=t.elements.arrow,z=p&&R?Fr(R):{width:0,height:0},B=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:qr(),ee=B[k],te=B[A],ne=Gr(0,C[j],z[j]),re=y?C[j]/2-F-ne-ee-E.mainAxis:I-ne-ee-E.mainAxis,ie=y?-C[j]/2+F+ne+te+E.mainAxis:L+ne+te+E.mainAxis,ae=t.elements.arrow&&Ur(t.elements.arrow),oe=ae?b===`y`?ae.clientTop||0:ae.clientLeft||0:0,se=D?.[b]??0,V=M+re-se-oe,H=M+ie-se,ce=Gr(p?Ar(N,V):N,M,p?kr(P,H):P);S[b]=ce,O[b]=ce-M}if(s){var le=b===`x`?`top`:lr,U=b===`x`?sr:cr,W=S[x],G=x===`y`?`height`:`width`,ue=W+g[le],de=W-g[U],fe=[`top`,lr].indexOf(_)!==-1,pe=D?.[x]??0,me=fe?ue:W-C[G]-w[G]-pe+E.altAxis,he=fe?W+C[G]+w[G]-pe-E.altAxis:de,ge=p&&fe?Kr(me,W,he):Gr(p?me:ue,W,p?he:de);S[x]=ge,O[x]=ge-W}t.modifiersData[r]=O}}var Hi={name:`preventOverflow`,enabled:!0,phase:`main`,fn:Vi,requiresIfExists:[`offset`]};function Ui(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Wi(e){return e===xr(e)||!Cr(e)?pi(e):Ui(e)}function Gi(e){var t=e.getBoundingClientRect(),n=jr(t.width)/e.offsetWidth||1,r=jr(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Ki(e,t,n){n===void 0&&(n=!1);var r=Cr(t),i=Cr(t)&&Gi(t),a=zr(t),o=Pr(e,i,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((br(t)!==`body`||_i(a))&&(s=Wi(t)),Cr(t)?(c=Pr(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=mi(a))),{x:o.left+s.scrollLeft-c.x,y:o.top+s.scrollTop-c.y,width:o.width,height:o.height}}function qi(e){var t=new Map,n=new Set,r=[];e.forEach(function(e){t.set(e.name,e)});function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){n.has(e.name)||i(e)}),r}function Ji(e){var t=qi(e);return yr.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function Yi(e){var t;return function(){return t||=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})}),t}}function Xi(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var Zi={placement:`bottom`,modifiers:[],strategy:`absolute`};function Qi(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function $i(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?Zi:i;return function(e,t,n){n===void 0&&(n=a);var i={placement:`bottom`,orderedModifiers:[],options:Object.assign({},Zi,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],s=!1,c={state:i,setOptions:function(n){var o=typeof n==`function`?n(i.options):n;u(),i.options=Object.assign({},a,i.options,o),i.scrollParents={reference:Sr(e)?yi(e):e.contextElement?yi(e.contextElement):[],popper:yi(t)};var s=Ji(Xi([].concat(r,i.options.modifiers)));return i.orderedModifiers=s.filter(function(e){return e.enabled}),l(),c.update()},forceUpdate:function(){if(!s){var e=i.elements,t=e.reference,n=e.popper;if(Qi(t,n)){i.rects={reference:Ki(t,Ur(n),i.options.strategy===`fixed`),popper:Fr(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<i.orderedModifiers.length;r++){if(i.reset===!0){i.reset=!1,r=-1;continue}var a=i.orderedModifiers[r],o=a.fn,l=a.options,u=l===void 0?{}:l,d=a.name;typeof o==`function`&&(i=o({state:i,options:u,name:d,instance:c})||i)}}}},update:Yi(function(){return new Promise(function(e){c.forceUpdate(),e(i)})}),destroy:function(){u(),s=!0}};if(!Qi(e,t))return c;c.setOptions(n).then(function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)});function l(){i.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,a=e.effect;if(typeof a==`function`){var s=a({state:i,name:t,instance:c,options:r});o.push(s||function(){})}})}function u(){o.forEach(function(e){return e()}),o=[]}return c}}var ea=$i({defaultModifiers:[ci,zi,ai,Dr,Li,Ai,Hi,$r,Pi]}),ta=e(m()),na=[],ra=function(e,t,n){n===void 0&&(n={});var r=P.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||`bottom`,strategy:n.strategy||`absolute`,modifiers:n.modifiers||na},a=P.useState({styles:{popper:{position:i.strategy,left:`0`,top:`0`},arrow:{position:`absolute`}},attributes:{}}),o=a[0],s=a[1],c=P.useMemo(function(){return{name:`updateState`,enabled:!0,phase:`write`,fn:function(e){var t=e.state,n=Object.keys(t.elements);N.flushSync(function(){s({styles:ar(n.map(function(e){return[e,t.styles[e]||{}]})),attributes:ar(n.map(function(e){return[e,t.attributes[e]]}))})})},requires:[`computeStyles`]}},[]),l=P.useMemo(function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:`applyStyles`,enabled:!1}])};return(0,ta.default)(r.current,e)?r.current||e:(r.current=e,e)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),u=P.useRef();return or(function(){u.current&&u.current.setOptions(l)},[l]),or(function(){if(e!=null&&t!=null){var r=(n.createPopper||ea)(e,t,l);return u.current=r,function(){r.destroy(),u.current=null}}},[e,t,n.createPopper]),{state:u.current?u.current.state:null,styles:o.styles,attributes:o.attributes,update:u.current?u.current.update:null,forceUpdate:u.current?u.current.forceUpdate:null}},ia=e(ne());E();var K=e(Se()),aa=e(ke()),oa=e(Ae()),sa=e(je()),ca=s(),q=v(),la=x(),ua=e(Be()),da=e(ut()),fa=e(ht()),pa=p(),ma=Et(),ha=e(rn()),ga=e(Dn()),_a=e(ir()),va=S(),ya=e(u()),ba=e(l()),J=function(){return J=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},J.apply(this,arguments)};function xa(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Sa(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function Y(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var Ca;(function(e){e[e.AssessmentDontCreate=0]=`AssessmentDontCreate`,e[e.AssessmentCreateIfDoesNotExist=1]=`AssessmentCreateIfDoesNotExist`})(Ca||={});var wa=-1,Ta=null,Ea=null,X;(function(e){e.Incomplete=`Incomplete`,e.Complete=`Complete`,e.Correct=`Correct`,e.Incorrect=`Incorrect`})(X||={});var Da;(function(e){e.Formative=`Formative`,e.Summative=`Summative`})(Da||={});var Z;(function(e){e.Standalone=`Standalone`,e.StandaloneInGroup=`StandaloneInGroup`,e.Tutorial=`Tutorial`,e.TutorialFollowup=`TutorialFollowup`,e.Child=`Child`})(Z||={});var Oa;(function(e){e.None=`None`,e.HaloShadow=`HaloShadow`})(Oa||={});var ka;(function(e){e[e.FlaggedBad=0]=`FlaggedBad`,e[e.FlaggedGood=1]=`FlaggedGood`})(ka||={});var Aa;(function(e){e.CorrectAnswerWrong=`CorrectAnswerWrong`,e.UserAnswerAlsoCorrect=`UserAnswerAlsoCorrect`,e.QuestionUnclear=`QuestionUnclear`,e.QuestionNotRelevant=`QuestionNotRelevant`})(Aa||={});var ja;(function(e){e.EvaluationError=`EvaluationError`,e.RevealAnswerError=`RevealAnswerError`,e.ImprovementFeedbackError=`ImprovementFeedbackError`})(ja||={});var Ma;(function(e){e.Waiting=`Waiting`})(Ma||={});var Na=function(){return{id:``,started:!0,loaded:!1,submitRequested:!1,numSubmitRequestedAttempts:0,submitActive:!1,completed:!1,submitted:!1,answerCorrect:void 0,revealAnswer:!1,answerRevealed:!1,startTime:wa,numAttempts:0,validationErrorMsg:void 0,validationErrorCode:void 0,feedback:void 0,systemFeedback:void 0,locked:!1,improvementStatus:void 0}};function Pa(e){var t=e.src,n=e.onLoad,r=e.onError,i=document.createElement(`script`);i.src=t,i.type=`text/javascript`,i.onload=n,i.onerror=r,document.getElementsByTagName(`head`)[0].appendChild(i)}function Fa(e){return new Promise(function(t,n){document.querySelector(`script[src="${e}"]`)?t():Pa({src:e,onLoad:function(){return t()},onError:function(){return n()}})})}var Ia;(function(e){e[e.Pending=0]=`Pending`,e[e.Open=1]=`Open`,e[e.Closed=2]=`Closed`})(Ia||={});var La=new(function(){function e(){this.connections={}}return e.inject=function(e){return Fa(e)},Object.defineProperty(e.prototype,"client",{get:function(){return this._client},enumerable:!1,configurable:!0}),e.prototype.init=function(t){var n=this,r=`https`;t.clientProtocol&&(r=t.clientProtocol);var i=new URL(`${r}://${t.clientHost}`);return e.inject(`${i.protocol}//${i.host}/static/assessment/tightrope.js`).then(function(){var e,i;if(n._client&&n.currentConnection&&n.currentConnection.status===Ia.Open)try{n._client.disconnect()}catch{console.error(`Unable to close tightrope connection`)}var a={vbid:t.vbid,tenantId:t.tenantId};if(t.serverHost){var o=t.serverProtocol;o||=r;var s=`ws`;o===`https`&&(s+=`s`);var c=new URL(`${o}://${t.serverHost}`);a=Object.assign({},a,{authUrl:`${c.protocol}//${c.host}/common/v1/api/auth/token`,wsUrl:`${s}://${c.host}/assessment/v1/ws`})}return n.currentConnection={status:Ia.Pending,args:t},n.connections[n.argsToConnectionKey(t)]=n.currentConnection,n._client=new TightropeClient(t.sessionId,a),(e=n._client)==null||e.on(`open`,function(e){n.currentConnection.status=Ia.Open}),(i=n._client)==null||i.on(`close`,function(e){n.currentConnection.status=Ia.Closed}),n._client?.connect().then(function(){var e;return(e=n._client)==null||e.log(`connected!`),Promise.resolve()}).catch(function(e){return console.error(e),Promise.reject(e)})})},e.prototype.waitForInit=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(this.currentConnection)switch(this.currentConnection.status){case Ia.Pending:return new Promise(function(r,i){setTimeout(function(){t.waitForInit.apply(t,Sa([e],n,!1)).then(r).catch(i)},500)});case Ia.Open:return this[e](n);default:return Promise.reject(Error(`Tightrope service connection closed`))}else return Promise.reject(Error(`No initialized connections found for Tightrope service`))},e.prototype.hasClient=function(){return!!this._client},e.prototype.argsToConnectionKey=function(e){return this.stringToHashcode(`${e.vbid}`)},e.prototype.stringToHashcode=function(e){var t=0;if(e.length==0)return t;for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return t},e}()),Ra=function(e){return La.init(e)},za=new Proxy({},{get:function(e,t,n){return La.hasClient()?La.client[t]:La.waitForInit.bind(La,t)}}),Ba=function(){return function(e){return e}},Va=B(Ba()({ok:{id:`coachme.base.ok`},cancel:{id:`coachme.base.cancel`},continue:{id:`coachme.base.continue`},submit:{id:`coachme.base.submit`},loading:{id:`coachme.base.loading`},close:{id:`coachme.base.close`},back:{id:`coachme.base.back`},moreInfo:{id:`coachme.base.moreInfo`},taglinePoweredBy:{id:`coachme.base.taglinePoweredBy`},evaluating:{id:`coachme.base.evaluating`},questions:{id:`coachme.base.questions`},coachme:{id:`coachme.base.coachme`},a11yTitle:{id:`coachme.base.a11yTitle`}})),Q=B(Ba()({status:{id:`coachme.question.status`},pip:{id:`coachme.question.pip`},typeMultipleChoice:{id:`coachme.question.type.multipleChoice`},typeGapFill:{id:`coachme.question.type.gapFill`},typeSubmitCompare:{id:`coachme.question.type.submitCompare`},notificationAttention:{id:`coachme.question.notification.attention`},feedbackAnswerCorrect:{id:`coachme.question.feedback.answerCorrect`},feedbackAnswerIncorrect:{id:`coachme.question.feedback.answerIncorrect`},feedbackSubmissionThanks:{id:`coachme.question.feedback.submissionThanks`},feedbackWrongAnswersSpecific:{id:`coachme.question.feedback.wrongAnswersSpecific`},feedbackWrongAnswersGeneric:{id:`coachme.question.feedback.wrongAnswersGeneric`},feedbackWrongAnswerPrompt:{id:`coachme.question.feedback.wrongAnswersPrompt`},feedbackWrongAnswerPromptNotIndicated:{id:`coachme.question.feedback.wrongAnswersPromptNotIndicated`},feedbackItemCorrectAnswer:{id:`coachme.question.feedback.itemCorrectAnswer`},feedbackItemIncorrectAnswer:{id:`coachme.question.feedback.itemIncorrectAnswer`},feedbackItemRevealedCorrectAnswer:{id:`coachme.question.feedback.itemRevealedCorrectAnswer`},feedbackCorrectAnswerIs:{id:`coachme.question.feedback.correctAnswerIs`},feedbackRevealAnswerAnnouncement:{id:`coachme.question.feedback.revealAnnouncement`},feedbackResetAnnouncement:{id:`coachme.question.feedback.resetAnnouncement`},feedbackTightropeResponse:{id:`coachme.question.feedback.tightropeResponse`},controlsCheckAnswer:{id:`coachme.question.controls.checkAnswer`},controlsRevealAnswer:{id:`coachme.question.controls.revealAnswer`},controlsSubmit:{id:`coachme.question.controls.submit`},controlsNextQuestion:{id:`coachme.question.controls.nextQuestion`},controlsDone:{id:`coachme.question.controls.done`},controlsRetry:{id:`coachme.question.controls.retry`},controlsTutorDiscuss:{id:`coachme.question.controls.tutorDiscuss`},controlsTutorReview:{id:`coachme.question.controls.tutorReview`},controlsTypedPlaceHolder:{id:`coachme.question.controls.typedPlaceHolder`},controlsTypedLabel:{id:`coachme.question.controls.typedLabel`},controlsSelectPlaceHolder:{id:`coachme.question.controls.selectPlaceHolder`},validationPleaseSelectAnswer:{id:`coachme.question.validation.pleaseSelectAnswer`},validationTypeAnAnswer:{id:`coachme.question.validation.typeAnAnswer`},statusComplete:{id:`coachme.question.status.complete`},statusIncomplete:{id:`coachme.question.status.incomplete`},statusCorrect:{id:`coachme.question.status.correct`},statusIncorrect:{id:`coachme.question.status.incorrect`},suggestionsPrompt:{id:`coachme.question.suggestions.prompt`},suggestionsClose:{id:`coachme.question.suggestions.close`},suggestionsSelectedA11y:{id:`coachme.question.suggestions.selectedA11y`}})),Ha=B(Ba()({inputFieldLabel:{id:`coachme.submitCompare.inputFieldLabel`},answerSaved:{id:`coachme.submitCompare.answerSaved`},compareWithExpert:{id:`coachme.submitCompare.compareWithExpert`},selfAssessmentAnnouncement:{id:`coachme.submitCompare.selfAssessmentAnnouncement`}}));Ba()({similarTermsLabel:{id:`coachme.enhancedQuestions.similarTermsLabel`},writingQuestionLabel:{id:`coachme.enhancedQuestions.writingQuestionLabel`}});var Ua=B(Ba()({gapNumberLabel:{id:`coachme.gapFill.gapNumberLabel`},fillInTheBlankPrompt:{id:`coachme.gapFill.fillInTheBlankPrompt`},validationNotFilledIn:{id:`coachme.gapFill.validation.notFilledIn`},validationSameAnswerRepeated:{id:`coachme.gapFill.validation.sameAnswerRepeated`},wordBankHeaderLabel:{id:`coachme.gapFill.wordBank.headerLabel`},wordBankWordSpent:{id:`coachme.gapFill.wordBank.wordSpent`},wordBankFooterLabel:{id:`coachme.gapFill.wordBank.footerLabel`}})),Wa=B(Ba()({addToFlashcard:{id:`coachme.widgets.addToFlashcard`},createANote:{id:`coachme.widgets.createANote`},noteCreated:{id:`coachme.widgets.noteCreated`},reviewNote:{id:`coachme.widgets.reviewNote`},createAFlashcard:{id:`coachme.widgets.createAFlashcard`},flashcardCreated:{id:`coachme.widgets.flashcardCreated`},reviewFlashcard:{id:`coachme.widgets.reviewFlashcard`}})),Ga=B(Ba()({previousQuestion:{id:`coachme.questionGroup.previousQuestion`},nextQuestion:{id:`coachme.questionGroup.nextQuestion`},assessmentStart:{id:`coachme.questionGroup.assessmentStart`},assessmentResetA11y:{id:`coachme.questionGroup.assessmentResetA11y`},assessmentAnswersRevealedA11y:{id:`coachme.questionGroup.assessmentAnswersRevealedA11y`},checkAllAnswers:{id:`coachme.questionGroup.checkAllAnswers`},retryQuestions:{id:`coachme.questionGroup.retryQuestions`},revealAnswers:{id:`coachme.questionGroup.revealAnswers`},questionPanelA11y:{id:`coachme.questionGroup.questionPanelA11y`}})),Ka=B(Ba()({formativeTitle:{id:`coachme.assessment.formativeTitle`},formativeA11yTitle:{id:`coachme.assessment.formativeA11yTitle`},summativeTitle:{id:`coachme.assessment.summativeTitle`},summativeA11yTitle:{id:`coachme.assessment.summativeA11yTitle`},questionCount:{id:`coachme.assessment.questionCount`},scoreCorrectPercent:{id:`coachme.assessment.scoreCorrectPercent`},scoreCorrectCount:{id:`coachme.assessment.scoreCorrectCount`},scoreIncorrectCount:{id:`coachme.assessment.scoreIncorrectCount`},scoreIncompleteCount:{id:`coachme.assessment.scoreIncompleteCount`},resultsTitle:{id:`coachme.assessment.resultsTitle`},resultsA11yLineItem:{id:`coachme.assessment.resultsA11yLineItem`},resultsA11y:{id:`coachme.assessment.resultsA11y`},resultsFocusA11y:{id:`coachme.assessment.resultsFocusA11y`}})),qa=B(Ba()({prompt:{id:`coachme.questionImprovement.prompt`},thumbsUp:{id:`coachme.questionImprovement.thumbsUp`},thumbsDown:{id:`coachme.questionImprovement.thumbsDown`}})),Ja=B(Ba()({title:{id:`coachme.questionImprovement.dialog.title`},information:{id:`coachme.questionImprovement.dialog.information`},issueWrongAnswer:{id:`coachme.questionImprovement.dialog.issue.wrongAnswer`},issueMineAlsoCorrect:{id:`coachme.questionImprovement.dialog.issue.mineAlsoCorrect`},issueQuestionUnclear:{id:`coachme.questionImprovement.dialog.issue.questionUnclear`},issueQuestionNotRelevant:{id:`coachme.questionImprovement.dialog.issue.questionNotRelevant`},otherFeedback:{id:`coachme.questionImprovement.dialog.otherFeedback`},feedbackPlaceholder:{id:`coachme.questionImprovement.dialog.feedbackPlaceholder`}})),Ya=B(Ba()({title:{id:`coachme.assessment.confirmIncompleteDialog.title`},message:{id:`coachme.assessment.confirmIncompleteDialog.message`}})),Xa=B(Ba()({evaluateErrorTitle:{id:`coachme.errors.evaluateErrorTitle`},evaluateErrorDescription:{id:`coachme.errors.evaluateErrorDescription`},revealAnswerErrorTitle:{id:`coachme.errors.revealAnswerErrorTitle`},revealAnswerErrorDescription:{id:`coachme.errors.revealAnswerErrorDescription`},submitAssessmentErrorTitle:{id:`coachme.errors.submitAssessmentErrorTitle`},submitAssessmentErrorDescription:{id:`coachme.errors.submitAssessmentErrorDescription`},improvementFeedbackErrorTitle:{id:`coachme.errors.improvementFeedbackErrorTitle`},improvementFeedbackErrorDescription:{id:`coachme.errors.improvementFeedbackErrorDescription`},enrichmentLoadErrorTitle:{id:`coachme.errors.enrichmentLoadErrorTitle`},enrichmentLoadErrorDescription:{id:`coachme.errors.enrichmentLoadErrorDescription`},progressLoadErrorTitle:{id:`coachme.errors.progressLoadErrorTitle`},progressLoadErrorDescription:{id:`coachme.errors.progressLoadErrorDescription`},explainSelectionErrorTitle:{id:`coachme.errors.explainSelectionErrorTitle`},explainSelectionErrorDescription:{id:`coachme.errors.explainSelectionErrorDescription`}})),Za=B(Ba()({title:{id:`coachme.progress.title`},countComplete:{id:`coachme.progress.countComplete`},countIncomplete:{id:`coachme.progress.countIncomplete`},indicatorA11y:{id:`coachme.progress.indicatorA11y`},countBreakdownA11y:{id:`coachme.progress.countBreakdownA11y`},questionStatusA11y:{id:`coachme.progress.questionStatusA11y`},detailListItemA11y:{id:`coachme.progress.detailListItemA11y`},backToAll:{id:`coachme.progress.backToAll`}}));Ba()({title:{id:`coachme.explainSelection.title`},simplifyAgain:{id:`coachme.explainSelection.simplifyAgain`},endSession:{id:`coachme.explainSelection.endSession`},simplifyAgainFollowup:{id:`coachme.explainSelection.simplifyAgainFollowup`},simplifyResponse:{id:`coachme.explainSelection.simplifyResponse`},simplifyFollowup:{id:`coachme.explainSelection.simplifyFollowup`},simplifyAgainResponse:{id:`coachme.explainSelection.simplifyAgainResponse`},letMeTrySayingItBackToYou:{id:`coachme.explainSelection.letMeTrySayingItBackToYou`},explainInYourOwnWords:{id:`coachme.explainSelection.explainInYourOwnWords`},explainInYourOwnWordsPlaceholder:{id:`coachme.explainSelection.explainInYourOwnWordsPlaceholder`},validationNotFilledIn:{id:`coachme.explainSelection.validation.notFilledIn`},chatRoleAssistant:{id:`coachme.explainSelection.chatRoleAssistant`},chatRoleUser:{id:`coachme.explainSelection.chatRoleUser`}});var Qa=B(Ba()({aiDisclaimer:{id:`coachme.enhanced.aiDisclaimer`}})),$a=new(function(){function e(){this.getSocket=function(){return za}}return e.prototype.init=function(e){return Ra(e)},e.prototype.enrichmentEvent=function(t,n,r,i){return za.enrichmentEvent(J(J({event_type:n,enrichment_id:t},r&&{tutorial_id:r}),i&&{step_id:i})).then(function(e){return e.result}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.evaluateResponse=function(t,n,r,i,a,o){return za.evaluateResponse(J(J(J({enrichment_id:t,question_id:n,student_answers:r},i&&{tutorial_id:i}),a&&{step_id:a}),o?.skipSuggestions!==void 0&&{skip_suggestions:o.skipSuggestions})).then(function(e){return J(J({},e.result),{feedback:{descriptor:Q.feedbackTightropeResponse,values:{feedback:e.result.feedback}}})}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.evaluateEnhancedResponse=function(t,n,r){return za.evaluateEnhancedQuestion({enrichment_id:t,question_id:n,student_answers:r}).then(function(e){return J(J({},e.result),{feedback:{descriptor:Q.feedbackTightropeResponse,values:{feedback:e.result.feedback}}})}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.explainSelection=function(t,n,r,i,a){return za.explainSelection({feature_state:{selected_text:t,student_rephrase:r,step:i,text_context:n,first_explanation:a}}).then(function(e){return e.result}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.revealAnswer=function(t,n){return za.revealAnswer({enrichment_id:t,question_id:n}).then(function(e){return{correct_answers:e.result.correct_answer}}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.restoreEnrichment=function(t,n,r){return za.restoreAssessment(J({enrichment_id:t},r===Ca.AssessmentCreateIfDoesNotExist&&{create_if_does_not_exist:!0})).then(function(e){var t=e.result.questions,n=Object.keys(t).reduce(function(e,n){var r=t[n];return e.questions[n]=J(J({},r),{feedback:{descriptor:Q.feedbackTightropeResponse,values:{feedback:r.feedback}},improvementStatus:r.flagged_question?{}:void 0}),e},{questions:{}});return n.assessment=e.result.assessment,n}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.startAssessment=function(t){return za.startAssessment({enrichment_id:t}).then(function(){return Promise.resolve()}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.submitAssessment=function(t,n){return Promise.all(Object.keys(n).map(function(e){return Object.keys(n[e]).length?za.storeAnswers({enrichment_id:t,question_id:e,student_answers:n[e]}):Promise.resolve()})).then(function(){return za.submitAssessment({enrichment_id:t})}).then(function(e){return J(J({},e.result),{questions:Object.keys(n).reduce(function(t,r){return Object.keys(n[r]).length?(t[r]=e.result.questions[r],t[r].feedback={descriptor:Q.feedbackTightropeResponse,values:{feedback:t[r].feedback}}):t[r]={correct:!1,feedback:null,input_correctness:{},first_attempt_correct:!1},t},{})})}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.storeAnswers=function(t,n,r){return za.storeAnswers({enrichment_id:t,question_id:n,student_answers:r}).then(function(){return Promise.resolve()}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.saveParameters=function(t,n,r){return za.saveParameters({enrichment_id:t,question_id:n,parameters:r}).then(function(){return Promise.resolve()}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.submitQuestionImprovementStatus=function(t,n,r,i,a){return za.flagQuestion(J(J(J({enrichment_id:t,question_id:n,rating:r.flag===ka.FlaggedBad?`thumbs_down`:`thumbs_up`},i&&{tutorial_id:i}),a&&{step_id:a}),{comments:r.feedback?.otherFeedback??null,reasons:r.feedback?.issues??null})).then(function(){return Promise.resolve()}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.practiceCompleted=function(t){return za.send(J({},t&&{book_location:t}),{action:`practice_completed`}).then(function(e){return e.result.engagement_scores.map(function(e,t){return{id:t.toString(),detailId:e.book_location,title:e.book_location,completionTotal:e.total_questions,completionCount:e.questions_attempted,percentComplete:e.percent_score??0,firstCfiLocation:e.first_cfi_location,isHighWaterMark:e.is_high_water_mark}})}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.questionStatus=function(t){return za.send(J(J({},(0,ia.default)(t)&&{enrichment_ids:t}),!(0,ia.default)(t)&&{book_location:t}),{action:`question_status`}).then(function(t){return{activities:t.result.status.map(function(t){return{id:t.enrichment_id,cfi:t.cfi_location,page:``,questions:Object.values(t.question_status).sort(function(e,t){return e.ordinal-t.ordinal}).map(function(t){return{id:t.component_id,status:e.convertQuestionStatus(t.status)}})}})}}).catch(function(t){return Promise.reject(e.parseError(t))})},e.prototype.getEnrichmentService=function(e){return{enrichmentEvent:this.enrichmentEvent.bind(this,e),revealAnswer:this.revealAnswer.bind(this,e),evaluateResponse:this.evaluateResponse.bind(this,e),explainSelection:this.explainSelection.bind(this),evaluateEnhancedResponse:this.evaluateEnhancedResponse.bind(this,e),startAssessment:this.startAssessment.bind(this,e),submitAssessment:this.submitAssessment.bind(this,e),storeAnswers:this.storeAnswers.bind(this,e),saveParameters:this.saveParameters.bind(this,e),submitQuestionImprovementStatus:this.submitQuestionImprovementStatus.bind(this,e)}},e.parseError=function(t){return t instanceof Error?t:`errors`in t?Error(e.findNestedErrorStrings(t.errors)[0]):t.message?Error(t.message):Error(`Unknown assessment error: ${t}`)},e.findNestedErrorStrings=function(t,n){n===void 0&&(n=[]);var r=`error`;return Object.keys(t).forEach(function(i){var a=t[i];i.indexOf(r)!==-1&&typeof a==`string`?n.push(a):typeof a==`object`&&e.findNestedErrorStrings(a,n)}),n},e.convertQuestionStatus=function(e){return e===`correct`?X.Correct:e===`incorrect`?X.Incorrect:e===`complete`?X.Complete:X.Incomplete},e}()),eo=`https`,to=`jigsaw.vitalsource.com`,no=function(e){return`${e}/smartauthor/enrichments_service`},ro=function(e){return`${no(e)}/manifests`},io=function(e){return`${no(e)}/enrichments`},ao=new(function(){function e(){this.serviceHost=`${eo}://${to}`}return e.prototype.init=function(e){var t=eo;e.protocol&&(t=e.protocol);var n=new URL(`${t}://${e.host}`);return this.serviceHost=`${n.protocol}//${n.host}`,Promise.resolve()},e.prototype.getManifest=function(e){return this.getJson(this.manifestUrl(e),{})},e.prototype.getEnrichment=function(t){return this.getJson(this.enrichmentUrl(t),{}).then(function(t){return e.transformJSONAPI(t)})},e.prototype.manifestUrl=function(e){return`${ro(this.serviceHost)}/${e}`},e.prototype.enrichmentUrl=function(e){return`${io(this.serviceHost)}/${e}`},e.prototype.getJson=function(e,t){return t&&(e=this.applyParamsToUrl(e,t)),fetch(e,{credentials:`include`}).then(this.handleResponse)},e.prototype.handleResponse=function(e){return e.json().then(function(t){if(!e.ok){var n=Object.assign({},t,{status:e.status,statusText:e.statusText});return Promise.reject(n)}return t.errors?Promise.reject({status:t.errors[0].code,statusText:t.errors[0].detail||t.errors[0].title}):t})},e.prototype.applyParamsToUrl=function(e,t){if(!t||!Object.keys(t).length)return e;var n=new URLSearchParams(t).toString();return e.concat(`?${n}`)},e.processItem=function(e,t){return J(J({},e),{relationships:this.processRelationships(e.relationships?e.relationships:{},t)})},e.processRelationships=function(e,t){var n=this;return Object.entries(e).reduce(function(e,r){var i=r[0],a=r[1];if(a&&a.data){var o=a.data;if(Array.isArray(o)){var s=o.reduce(function(e,r){var i=t.find(function(e){return e.id===r.id});return i&&e.push(n.processItem(i,t)),e},[]);s.length>0&&(e[i]={data:s})}else{var c=t.find(function(e){return e.id===o.id});c&&(e[i]={data:[n.processItem(c,t)]})}}return e},{})},e.transformJSONAPI=function(e){return this.processItem(e.data,e.included)},e.rawEnrichmentToAssessment=function(t){return e.transformJSONAPI(t).relationships?.contents.data[0]},e}()),oo=new(function(){function e(){}return e.prototype.initEvaluatorService=function(e){return $a.init(e)},e.prototype.initEnrichmentsService=function(e){return ao.init(e)},e.prototype.getManifest=function(e){return ao.getManifest(e)},e.prototype.getTightropeClient=function(){return $a.getSocket()},e}()),so;(function(e){e.ASSESSMENTS=`assessments`})(so||={});var co;(function(e){e.FORMATIVE=`formative`,e.SUMMATIVE=`summative`})(co||={});var lo;(function(e){e.QuestionCorrect=`QuestionCorrect`,e.QuestionIncorrect=`QuestionIncorrect`,e.QuestionUngraded=`QuestionUngraded`})(lo||={});var uo;(function(e){e.None=`None`,e.RetrieveEnrichment=`RetrieveEnrichment`,e.RestoreEnrichment=`RestoreEnrichment`,e.UnknownEnrichmentType=`UnknownEnrichmentType`})(uo||={});var fo=function(e){var t=(0,P.useState)(void 0),n=t[0],r=t[1],i=(0,P.useState)(void 0),a=i[0],o=i[1],s=(0,P.useState)(void 0),c=s[0],l=s[1];return(0,P.useEffect)(function(){r(void 0),o(void 0),ao.getEnrichment(e).then(function(e){r(e)}).catch(function(e){l({type:uo.RetrieveEnrichment,detail:e.toString()})})},[e]),(0,P.useEffect)(function(){if(n!==void 0){var t=n.relationships?.content.data[0].attributes.assessment_type;$a.restoreEnrichment(e,t,t===co.SUMMATIVE?Ca.AssessmentCreateIfDoesNotExist:Ca.AssessmentDontCreate).then(function(e){o(e)}).catch(function(e){l({type:uo.RestoreEnrichment,detail:e.toString()})})}},[n,e]),a&&n?{data:n,restoredData:a,error:c}:{data:void 0,restoredData:void 0,error:c}},po=function(e){return k(wo||=Y([`
    `,`
  `],[`
    `,`
  `]),function(t){return t.theme.vstui.color.primary.getShade(e)})},mo=function(e,t){return t.vstui.color.primary.getShade(e)},$=function(){return k(To||=Y([`
    `,`
  `],[`
    `,`
  `]),function(e){return e.theme.vstui.color.primary.getMainShade()})},ho=function(e){return e.vstui.color.primary.getMainShade()},go=k(Eo||=Y([`
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid `,`;
`],[`
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid `,`;
`]),q.cloud.getShade(3)),_o=k(Do||=Y([`
  `,`;
  background-color: `,`;
  border: 1px solid `,`;
`],[`
  `,`;
  background-color: `,`;
  border: 1px solid `,`;
`]),go,q.green.getShade(1),q.green.getShade(6)),vo=k(Oo||=Y([`
  `,`;
  background-color: `,`;
  border: 1px solid `,`;
`],[`
  `,`;
  background-color: `,`;
  border: 1px solid `,`;
`]),go,q.red.getShade(1),q.red.getShade(6)),yo=k(ko||=Y([`
  `,`;
  background-color: `,`;
  border: 1px solid `,`;
`],[`
  `,`;
  background-color: `,`;
  border: 1px solid `,`;
`]),go,q.cloud.getShade(1),q.cloud.getShade(4)),bo=k(Ao||=Y([`
  `,`;
  background-color: `,`;
  border: 1px solid `,`;
  border-radius: 4px;
`],[`
  `,`;
  background-color: `,`;
  border: 1px solid `,`;
  border-radius: 4px;
`]),go,q.frost.getShade(2),$()),xo=k(jo||=Y([`
  .callout {
    padding: 1rem;
    background-color: `,`;
    border: 1px solid `,`;
    border-radius: 4px;
    font-weight: 400;
  }
  .answer {
    font-weight: 900;
  }
  .term,
  .definition {
    font-style: italic;
  }
`],[`
  .callout {
    padding: 1rem;
    background-color: `,`;
    border: 1px solid `,`;
    border-radius: 4px;
    font-weight: 400;
  }
  .answer {
    font-weight: 900;
  }
  .term,
  .definition {
    font-style: italic;
  }
`]),q.cloud.getShade(1),q.cloud.getShade(4)),So=k(Mo||=Y([`
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  /* for Internet Explorer */
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  white-space: nowrap;
  overflow: hidden;
`],[`
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  /* for Internet Explorer */
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  white-space: nowrap;
  overflow: hidden;
`])),Co=k(No||=Y([`
  border-radius: 4px;
  outline: none;
  box-shadow: 0 0 0 4px white, 0 0 0 6px `,`;
  scroll-margin: 12px;
`],[`
  border-radius: 4px;
  outline: none;
  box-shadow: 0 0 0 4px white, 0 0 0 6px `,`;
  scroll-margin: 12px;
`]),$()),wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po={Button:D(ca.Button).withConfig({displayName:`SubmitButton__Button`})(Io||=Y([`
    margin: 15px 0 0 0;
    background-color: `,`;
    border-color: `,`;
    border-radius: 20px;
    &:hover:not(:disabled),
    &:focus:not(:disabled),
    &:active {
      background-color: `,`;
      border-color: `,`;
    }
    &:focus {
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff, 0 0 0 4px `,`;
    }
    &:hover:not(:disabled):focus {
      border-color: `,`;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff, 0 0 0 4px `,`;
    }
  `],[`
    margin: 15px 0 0 0;
    background-color: `,`;
    border-color: `,`;
    border-radius: 20px;
    &:hover:not(:disabled),
    &:focus:not(:disabled),
    &:active {
      background-color: `,`;
      border-color: `,`;
    }
    &:focus {
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff, 0 0 0 4px `,`;
    }
    &:hover:not(:disabled):focus {
      border-color: `,`;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff, 0 0 0 4px `,`;
    }
  `]),$(),$(),$(),$(),$(),$(),$())},Fo=(0,P.forwardRef)(function(e,t){var n=e.children,r=xa(e,[`children`]);return P.createElement(Po.Button,J({ref:t,type:`submit`,fullWidth:!0},r),n)}),Io,Lo={Button:D(ca.Button).withConfig({displayName:`CTAButton__Button`})(zo||=Y([`
    box-shadow: none;
    color: `,` !important;
    background: `,` !important;
    line-height: 1.1;
    border-radius: 16px;
    padding: 16px;
    min-height: 50px;
    height: auto;
    border: 0;
    > div {
      > div {
        white-space: normal;
      }
    }

    &:hover {
      background: `,`;
      box-shadow: 0px 4px 8px rgba(47, 62, 66, 0.12) !important;
      transform: none !important;
      transition: box-shadow 250ms;
    }

    &:focus {
      background: `,`;
      box-shadow: 0 0 0 2px `,`;
      transform: none !important;
      transition: box-shadow 250ms;
    }
  `],[`
    box-shadow: none;
    color: `,` !important;
    background: `,` !important;
    line-height: 1.1;
    border-radius: 16px;
    padding: 16px;
    min-height: 50px;
    height: auto;
    border: 0;
    > div {
      > div {
        white-space: normal;
      }
    }

    &:hover {
      background: `,`;
      box-shadow: 0px 4px 8px rgba(47, 62, 66, 0.12) !important;
      transform: none !important;
      transition: box-shadow 250ms;
    }

    &:focus {
      background: `,`;
      box-shadow: 0 0 0 2px `,`;
      transform: none !important;
      transition: box-shadow 250ms;
    }
  `]),$(),q.frost.getShade(2),q.frost.getShade(2),q.frost.getShade(2),$())},Ro=(0,P.forwardRef)(function(e,t){var n=e.children,r=xa(e,[`children`]);return P.createElement(Lo.Button,J({color:`neutral`,ref:t},r),n)}),zo,Bo={Container:D.div.withConfig({displayName:`QuestionGroupControls__Container`})(Ho||=Y([`
    font-size: 1.6rem;
    padding: 16px;
    position: relative;
    &:before {
      content: "";
      display: block;
      box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.2);
      height: 1px;
      top: 0;
      left: 0;
      width: 100%;
      position: absolute;
    }
  `],[`
    font-size: 1.6rem;
    padding: 16px;
    position: relative;
    &:before {
      content: "";
      display: block;
      box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.2);
      height: 1px;
      top: 0;
      left: 0;
      width: 100%;
      position: absolute;
    }
  `])),ButtonStrip:D.div.withConfig({displayName:`QuestionGroupControls__ButtonStrip`})(Uo||=Y([`
    margin-bottom: 16px;
    display: flex;
    button {
      // todo need option in vstui for wrapping button
      height: auto;
      div:first-child {
        white-space: normal;
        margin: 2px;
        text-align: center;
      }
      flex: 1 1 0;
      &:not(:last-of-type) {
        margin-right: 12px;
      }
    }
  `],[`
    margin-bottom: 16px;
    display: flex;
    button {
      // todo need option in vstui for wrapping button
      height: auto;
      div:first-child {
        white-space: normal;
        margin: 2px;
        text-align: center;
      }
      flex: 1 1 0;
      &:not(:last-of-type) {
        margin-right: 12px;
      }
    }
  `]))},Vo=function(e){var t=e.submitted,n=e.onSubmit,r=e.onReveal,i=e.onReset,a=e.onDone;return P.createElement(Bo.Container,null,t?P.createElement(P.default.Fragment,null,P.createElement(Bo.ButtonStrip,null,P.createElement(Ro,{onClick:function(){i()}},P.createElement(_,J({},Ga.retryQuestions))),P.createElement(Ro,{onClick:function(){r()}},P.createElement(_,J({},Ga.revealAnswers)))),a&&P.createElement(Fo,{onClick:function(){a()}},P.createElement(_,J({},Q.controlsDone)))):P.createElement(Fo,{onClick:function(){n()}},P.createElement(_,J({},Ga.checkAllAnswers))))},Ho,Uo,Wo=function(e,t){var n=t.smoothScrollIntoView,r=n===void 0||n,i=t.takeFocus,a=i===void 0||i,o=t.temporary,s=o!==void 0&&o,c=t.onceOnly,l=c!==void 0&&c,u=t.isDeferred,d=u!==void 0&&u,f=(0,P.useRef)(!1),p=(0,P.useState)(!1),m=p[0],h=p[1];(0,P.useEffect)(function(){var e;return d&&(e=setTimeout(function(){return h(!0)},10)),function(){return clearTimeout(e)}},[d]),(0,P.useEffect)(function(){a&&e.current&&!f.current&&(d&&m||!d)?(s&&e.current.setAttribute(`tabindex`,`-1`),r?(e.current.focus({preventScroll:!0}),e.current.scrollIntoView({behavior:`smooth`,block:`nearest`})):e.current.focus(),f.current=!0,e.current.addEventListener(`blur`,function(){var t;s&&((t=e.current)==null||t.removeAttribute(`tabindex`)),l||(f.current=!1)},{once:!0})):f.current=!1},[m,d,l,e,r,a,s])},Go=D.span.withConfig({displayName:`A11y__A11yHiddenSpan`})(qo||=Y([`
  `,`;
`],[`
  `,`;
`]),So),Ko=function(e){var t=e.children,n=e.focused,r=n!==void 0&&n,i=xa(e,[`children`,`focused`]),a=(0,P.useRef)(null);return Wo(a,{takeFocus:r,temporary:!0}),P.createElement(Go,J({ref:a},i),t)},qo,Jo=22,Yo=`pipFocus`,Xo={ContainerBtn:D.button.withConfig({displayName:`QuestionNavBarPip__ContainerBtn`})(es||=Y([`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `,`px;
    height: `,`px;
    margin: 0 4px;
    position: relative;
    border: none;
    padding: 0;
    background-color: transparent;
    outline: none;
    .`,` {
      display: none;
    }
    :focus {
      .`,` {
        display: block;
      }
    }
  `],[`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `,`px;
    height: `,`px;
    margin: 0 4px;
    position: relative;
    border: none;
    padding: 0;
    background-color: transparent;
    outline: none;
    .`,` {
      display: none;
    }
    :focus {
      .`,` {
        display: block;
      }
    }
  `]),Jo,Jo,Yo,Yo),SvgWrapper:D.div.withConfig({displayName:`QuestionNavBarPip__SvgWrapper`})(ts||=Y([`
    position: absolute;
    top: 0;
    left: 0;
    height: `,`px;
    svg {
      overflow: visible;
    }
  `],[`
    position: absolute;
    top: 0;
    left: 0;
    height: `,`px;
    svg {
      overflow: visible;
    }
  `]),Jo),QuestionNumber:D.span.withConfig({displayName:`QuestionNavBarPip__QuestionNumber`})(ns||=Y([`
    font-size: 1.1rem;
    position: relative;
  `],[`
    font-size: 1.1rem;
    position: relative;
  `])),IconHolder:D.span.withConfig({displayName:`QuestionNavBarPip__IconHolder`})(rs||=Y([`
    position: relative;
    svg {
      transform: scale(0.9);
      vertical-align: middle;
      margin-top: -2px;
    }
  `],[`
    position: relative;
    svg {
      transform: scale(0.9);
      vertical-align: middle;
      margin-top: -2px;
    }
  `]))},Zo;(function(e){e[e.Stroke=0]=`Stroke`,e[e.Fill=1]=`Fill`})(Zo||={});var Qo=function(e,t,n){return e===X.Complete?t===Zo.Stroke?ho(n):mo(1,n):e===X.Correct?t===Zo.Stroke?q.green.getShade(6):q.green.getShade(1):e===X.Incorrect?t===Zo.Stroke?q.red.getShade(6):q.red.getShade(1):t===Zo.Stroke?q.cloud.getShade(6):q.cloud.getShade(1)},$o=C(function(e){var t=e.index,n=e.status,r=e.panelId,i=e.selected,a=e.onClick,o=e.theme,s=M(),c=i?`4`:`1.5`;return P.createElement(Xo.ContainerBtn,{role:`tab`,"aria-controls":r,tabIndex:i?0:-1,"aria-selected":i,onClick:function(){return a()}},P.createElement(Xo.SvgWrapper,{"aria-hidden":!0},P.createElement(`svg`,{width:Jo,height:Jo,xmlns:`http://www.w3.org/2000/svg`},P.createElement(`g`,{fill:`none`,fillRule:`evenodd`},P.createElement(`circle`,{stroke:Qo(n,Zo.Stroke,o),strokeWidth:c,fill:Qo(n,Zo.Fill,o),cx:Jo/2,cy:Jo/2,r:i?`11.25`:`10.25`})),P.createElement(`g`,{className:Yo,fill:`none`,fillRule:`evenodd`},P.createElement(`circle`,{stroke:ho(o),strokeWidth:2,cx:Jo/2,cy:Jo/2,r:i?16:14})))),n===X.Incomplete?P.createElement(Xo.QuestionNumber,{"aria-hidden":!0},t+1):n===X.Incorrect?P.createElement(Xo.IconHolder,{"aria-hidden":!0},P.createElement(la.XSmall,{color:Qo(n,Zo.Stroke,o)})):P.createElement(Xo.IconHolder,{"aria-hidden":!0},P.createElement(la.Checkmark,{color:Qo(n,Zo.Stroke,o)})),P.createElement(Ko,null,P.createElement(_,J({},Q.pip,{values:{index:t+1,status:s.formatMessage(Q.status,{status:n})}}))))}),es,ts,ns,rs,is;(function(e){e.ArrowUp=`ArrowUp`,e.ArrowDown=`ArrowDown`,e.ArrowLeft=`ArrowLeft`,e.ArrowRight=`ArrowRight`,e.Enter=`Enter`,e.Home=`Home`,e.End=`End`})(is||={});var as;(function(e){e[e.Pips=0]=`Pips`,e[e.Button=1]=`Button`})(as||={});var os={Container:D.div.withConfig({displayName:`QuestionNavBar__Container`})(cs||=Y([`
    text-align: center;
    background-color: `,`;
    box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.2);
    display: flex;
  `],[`
    text-align: center;
    background-color: `,`;
    box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.2);
    display: flex;
  `]),q.frost.getShade(1)),BtnHolder:D.div.withConfig({displayName:`QuestionNavBar__BtnHolder`})(ls||=Y([`
    min-width: 40px;
    padding: 6px 8px;
    box-sizing: content-box;
  `],[`
    min-width: 40px;
    padding: 6px 8px;
    box-sizing: content-box;
  `])),PipsHolder:D.div.withConfig({displayName:`QuestionNavBar__PipsHolder`})(us||=Y([`
    flex-grow: 1;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `],[`
    flex-grow: 1;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `]))},ss=function(e){var t=e.items,n=e.itemIndex,r=e.onChange,i=M(),a=(0,P.useRef)(null),o=function(e,t){var n;t&&t.preventDefault(),t&&a.current&&((n=a.current.querySelectorAll(`[role="tab"]`)[e])==null||n.focus()),r(e,t?as.Pips:as.Button)};return P.createElement(os.Container,{ref:a},P.createElement(os.BtnHolder,null,n>0&&P.createElement(ca.IconButton,{rounded:!0,"aria-label":i.formatMessage(Ga.previousQuestion),icon:P.createElement(la.CaretLeftLarge,{color:q.frost.getShade(10)}),onClick:function(){o(n-1)}})),P.createElement(os.PipsHolder,{role:`tablist`,onKeyDown:function(e){switch(e.key){case is.ArrowLeft:o(n>0?n-1:t.length-1,e);break;case is.ArrowRight:o(n<t.length-1?n+1:0,e);break;case is.Home:o(0,e);break;case is.End:o(t.length-1,e)}}},t.map(function(e,t){return P.createElement($o,{key:`question-${t}`,index:t,status:e.status,panelId:e.panelId,selected:t===n,onClick:function(){t!==n&&o(t)}})})),P.createElement(os.BtnHolder,null,n<t.length-1&&P.createElement(ca.IconButton,{rounded:!0,"aria-label":i.formatMessage(Ga.nextQuestion),icon:P.createElement(la.CaretRightLarge,{color:q.frost.getShade(10)}),onClick:function(){o(n+1)}})))},cs,ls,us,ds;(function(e){e.Polite=`Polite`,e.Assertive=`Assertive`})(ds||={});var fs=`QUESTION`,ps=`QUESTION_STARTED`,ms=`QUESTION_LOADED`,hs=`QUESTION_RESET`,gs=`QUESTION_SUBMIT_REQUESTED`,_s=`QUESTION_VALIDATION_ERROR`,vs=`QUESTION_COMPLETED`,ys=`QUESTION_SUBMITTED`,bs=`QUESTION_CLEAR_SUBMIT_ACTIVE`,xs=`QUESTION_ATTEMPT`,Ss=`QUESTION_ASSESSED`,Cs=`QUESTION_REVEAL_ANSWER`,ws=`QUESTION_ANSWER_REVEALED`,Ts=`QUESTION_TIME_STARTED`,Es=`QUESTION_SET_FEEDBACK`,Ds=`QUESTION_ARIA_LIVE_MESSAGE`,Os=`QUESTION_FOCUS_START`,ks=`QUESTION_EVALUATED`,As=`QUESTION_LOCK`,js=`QUESTION_UNLOCK`,Ms=`QUESTION_SYSTEM_ERROR`,Ns=`QUESTION_CLEAR_SYSTEM_ERROR`,Ps=`QUESTION_SET_IMPROVEMENT_STATUS`,Fs=`QUESTION_CLEAR_IMPROVEMENT_STATUS`,Is=`QUESTION_SET_ANSWER_SUGGESTIONS`,Ls=`QUESTION_DISMISS_ANSWER_SUGGESTION`,Rs=function(e,t){return{type:e,payload:t}},zs=function(){return{type:ms}},Bs=function(e){return{type:hs,state:e}},Vs=function(e){return Rs(ks,e)},Hs=function(e,t){return{type:gs,submitRequested:e,byUser:t}},Us=function(e,t){return{type:_s,errorMsg:e,errorCode:t}},Ws=function(e){return{type:ys,submitted:e}},Gs=function(){return{type:bs}},Ks=function(){return{type:xs}},qs=function(e){return{type:Ss,correct:e}},Js=function(e){return{type:Cs,revealAnswer:e}},Ys=function(e){return{type:ws,answerRevealed:e}},Xs=function(e){return{type:Ts,startTime:e}},Zs=function(e,t){return{type:Es,feedback:e,systemFeedback:t}},Qs=function(e,t){return t===void 0&&(t=ds.Polite),{type:Ds,message:e,mode:t}},$s=function(e){return e===void 0&&(e=!0),{type:Os,focus:e}},ec=function(e,t){return t===void 0&&(t=Date.now()),{type:As,lockedReason:e,lockStartTime:t}},tc=function(){return{type:js}},nc=function(e){return{type:Ms,systemError:e}},rc=function(){return{type:Ns}},ic=function(e){return{type:Ps,status:e}},ac=function(){return{type:Fs}},oc=function(e){return{type:Is,answerSuggestions:e}},sc=function(e){return{type:Ls,answerId:e}},cc=function(e,t,n,r,i,a){var o=r.id,s=r.startTime;return t!==o&&i(Bs(J(J({},a()),{id:t}))),n?(s===wa&&i(Xs(Date.now())),!0):!1},lc=function(e){var t=e.mode,n=e.id,r=e.tutorialId,i=e.tutorialStep,a=e.data,o=e.events,s=e.state,c=s.submitRequested,l=s.validationErrorMsg,u=s.revealAnswer,d=s.answerRevealed,f=s.focusQuestionStart,p=s.locked,m=s.answerSuggestions,h=e.dispatch,g=e.dontEval,_=e.preprocessing,v=e.validation,y=e.buildUserAnswer,b=e.evaluator,x=e.onEvaluate,S=e.onRevealAnswer;if(f&&(0,K.default)(function(){return h($s(!1))}),_&&c&&_())return h(Hs(!1)),(0,K.default)(function(){return h(Hs(!0))}),!0;var C=[].concat(v||[]);if(c){var w=C.find(function(e){return e.condition()});if(w)return h(Us(w.errorMessage,w.errorCode)),h(Hs(!1)),(0,K.default)(function(){return(o?.onValidate)?.call(o,n,!1)}),!0;(0,K.default)(function(){return(o?.onValidate)?.call(o,n,!0)})}if(l&&!C.find(function(e){return e.condition()}))return h(Us()),!0;if(c){if(h(Hs(!1)),g)return h(Ws(!0)),(0,K.default)(function(){return(o?.onSubmitPrep)?.call(o,n)}),!0;h(Ks()),(t===Z.Standalone||t===Z.StandaloneInGroup)&&h(ec(Ma.Waiting));var T=y();return(0,K.default)(function(){return(o?.onEvalStart)?.call(o,n)}),b[a.question_type===`ChatFreeResponse`?`evaluateEnhancedResponse`:`evaluateResponse`](n,T,r,i,{skipSuggestions:!!m}).then(function(e){if(e.suggestions){h(oc(e.suggestions)),(t===Z.Standalone||t===Z.StandaloneInGroup)&&h(tc()),(0,K.default)(function(){return(o?.onEvalDeferred)?.call(o,n)});return}var r=e.correct,i=e.feedback;h(qs(r)),h(Zs(i??void 0)),h(Ws(!0)),(t===Z.Standalone||t===Z.StandaloneInGroup)&&h(tc()),(0,K.default)(function(){x?.(e),(0,K.default)(function(){return(o?.onSubmit)?.call(o,n,r,T,e.followup?.step)}),(0,K.default)(function(){return h(Gs())})})}).catch(function(e){h(tc()),h(nc({type:ja.EvaluationError,detail:e.message}))}),!0}return u&&!p&&!d?(h(ec(Ma.Waiting)),b.revealAnswer(n).then(function(e){e.correct_answers?(h(Ys(!0)),h(tc()),S?.(e)):h(nc({type:ja.RevealAnswerError,detail:`Missing correct_answers value`}))}).catch(function(e){h(Js(!1)),h(tc()),h(nc({type:ja.RevealAnswerError,detail:e.message}))}),!0):!1},uc=function(e){switch(e){case null:return X.Complete;case!0:return X.Correct;case!1:return X.Incorrect;default:return X.Incomplete}},dc=`MULTIPLE_CHOICE_SET_RESPONSE`,fc=`MULTIPLE_CHOICE_SET_REVEALED_ANSWER`,pc=function(e){return{type:dc,response:e}},mc=function(e){return{type:fc,revealedAnswer:e}},hc=function(e,t){switch(t.type){case dc:return J(J({},e),{response:t.response});case fc:return J(J({},e),{revealedAnswer:t.revealedAnswer});default:return e}},gc=function(e,t){var n;if(!(0,fa.default)(t.type,fs))return e;switch(t.type){case ps:return J(J({},e),{started:t.started});case ms:return e.loaded?e:J(J({},e),{loaded:!0});case hs:return J(J({},t.state),{improvementStatus:e.improvementStatus});case ks:return J(J({},e),t.payload);case gs:return J(J({},e),{submitRequested:t.submitRequested,submitActive:!!t.byUser||e.submitActive,numSubmitRequestedAttempts:t.submitRequested?e.numSubmitRequestedAttempts+1:e.numSubmitRequestedAttempts});case _s:return J(J({},e),{validationErrorMsg:t.errorMsg,validationErrorCode:t.errorCode,submitActive:!1});case ys:return J(J({},e),{submitted:t.submitted});case bs:return J(J({},e),{submitActive:!1});case Ss:return J(J({},e),{answerCorrect:t.correct});case vs:return J(J({},e),{completed:t.completed});case Cs:return J(J({},e),{revealAnswer:t.revealAnswer});case ws:return J(J({},e),{answerRevealed:t.answerRevealed});case Ts:return J(J({},e),{startTime:t.startTime});case xs:return J(J({},e),{numAttempts:e.numAttempts+1});case Es:return J(J({},e),{feedback:t.feedback,systemFeedback:t.systemFeedback});case Ds:return J(J({},e),{ariaLiveMessage:t.message,ariaLiveMode:t.mode});case Os:return J(J({},e),{focusQuestionStart:t.focus});case As:return e.locked?e:J(J({},e),{locked:!0,lockedReason:t.lockedReason});case js:return e.locked?J(J({},e),{locked:!1,lockedReason:void 0}):e;case Ms:return J(J({},e),{systemError:t.systemError});case Ns:return J(J({},e),{systemError:void 0});case Ps:return J(J({},e),{improvementStatus:t.status});case Fs:return J(J({},e),{improvementStatus:void 0});case Is:for(var r={},i=0,a=Object.keys(t.answerSuggestions);i<a.length;i++){var o=a[i];r[o]={dismissed:!1}}return J(J({},e),{answerSuggestions:t.answerSuggestions,answerSuggestionsControls:r});case Ls:return e.answerSuggestionsControls?.[t.answerId]?J(J({},e),{answerSuggestionsControls:J(J({},e.answerSuggestionsControls),(n={},n[t.answerId]=J(J({},e.answerSuggestionsControls[t.answerId]),{dismissed:!0}),n))}):e;default:return e}},_c=function(e){var t=Na(),n=Object.keys(e.options)[0],r=e.options[n],i=Object.keys(r).length,a=(0,ua.default)(0,i);return e.shuffle!==!1&&(a=(0,da.default)(a)),J(J({},t),{response:Ea,answerOrder:a,revealedAnswer:void 0,improvementStatus:void 0})},vc=function(e,t){var n=Ea,r=e.submitted,i=e.answerCorrect,a=e.feedback,o=e.improvementStatus;if(t){if(t.answers){var s=Object.keys(t.answers)[0],c=t.answers[s];c&&(n=c)}r=t.correct!==void 0,t.correct!==void 0&&(i=t.correct),t.feedback&&(a=t.feedback),t.improvementStatus&&(o=t.improvementStatus)}return J(J({},e),{response:n,revealedAnswer:void 0,submitted:r,answerCorrect:i,feedback:a,improvementStatus:o})},yc=function(e,t){var n=gc(e,t);return n=hc(n,t),n},bc,xc;(function(e){e[e.Bad=0]=`Bad`,e[e.Good=1]=`Good`,e[e.Neutral=2]=`Neutral`})(xc||={});var Sc;(function(e){e[e.None=0]=`None`,e[e.ExclamationCircle=1]=`ExclamationCircle`})(Sc||={});var Cc=(bc={},bc[Sc.None]=null,bc[Sc.ExclamationCircle]=pa.ExclamationCircle,bc),wc=D.div.withConfig({displayName:`Notification__NotificationContainer`})(kc||=Y([`
  background: `,`;
  border: 1px solid `,`;
  border-radius: 4px;
  padding: 24px;
  `,`
  &:focus {
    `,`
  }
  margin-bottom: 20px;
  position: relative;
`],[`
  background: `,`;
  border: 1px solid `,`;
  border-radius: 4px;
  padding: 24px;
  `,`
  &:focus {
    `,`
  }
  margin-bottom: 20px;
  position: relative;
`]),q.red.getShade(1),q.red.getShade(6),function(e){return!e.withoutMarginTop&&k(Oc||=Y([`
      margin-top: 20px;
    `],[`
      margin-top: 20px;
    `]))},Co),Tc=D.span.withConfig({displayName:`Notification__IconHolder`})(Ac||=Y([`
  position: absolute;
  svg {
    fill: `,`;
  }
`],[`
  position: absolute;
  svg {
    fill: `,`;
  }
`]),q.red.getShade(6)),Ec=D.div.withConfig({displayName:`Notification__NotificationMsg`})(jc||=Y([`
  font-weight: 500;
  font-size: 1.6rem;
  color: `,`;
  margin-left: 34px;
`],[`
  font-weight: 500;
  font-size: 1.6rem;
  color: `,`;
  margin-left: 34px;
`]),q.cloud.getShade(10)),Dc=function(e){var t=e.id,n=e.children,r=e.message,i=e.focused,a=e.withoutMarginTop,o=a!==void 0&&a,s=e.notificationIcon,c=s===void 0?Sc.None:s,l=M(),u=(0,P.useRef)(null);Wo(u,{takeFocus:i,temporary:!0,smoothScrollIntoView:!0});var d=Cc[c];return P.createElement(wc,{id:t,key:t,ref:u,withoutMarginTop:o},d&&P.createElement(Tc,null,P.createElement(d,null)),P.createElement(Ko,null,l.formatMessage(Q.notificationAttention),` `),P.createElement(Ec,null,r||n))},Oc,kc,Ac,jc,Mc;(function(e){e[e.Normal=0]=`Normal`})(Mc||={});var Nc=D.div.withConfig({displayName:`AnswerFeedback__AnswerFeedbackContainer`})(Lc||=Y([`
  `,`;
  margin-top: 32px;
  margin-bottom: 8px;
  line-height: 24px;
  &:focus {
    `,`
  }
`],[`
  `,`;
  margin-top: 32px;
  margin-bottom: 8px;
  line-height: 24px;
  &:focus {
    `,`
  }
`]),xo,Co),Pc=D.div.withConfig({displayName:`AnswerFeedback__AnswerFeedbackMessage`})(Rc||=Y([`
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 8px;
  color: `,`;
`],[`
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 8px;
  color: `,`;
`]),function(e){return e.correct===!0?q.green.getShade(6):e.correct===!1?q.red.getShade(6):ho(e.theme)}),Fc=D.div.withConfig({displayName:`AnswerFeedback__AnswerFeedbackContent`})(zc||=Y([`
  font-weight: 400;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`],[`
  font-weight: 400;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`])),Ic=function(e){var t=e.id,n=e.children,r=e.correct,i=e.numAnswers,a=e.wrongAnswersIndicated,o=e.message,s=e.content,c=e.padding,l=c===void 0?Mc.Normal:c,u=e.focused,d=e.hideFeedbackMessage,f=M(),p=(0,P.useRef)(null);return Wo(p,{takeFocus:u,temporary:!0,smoothScrollIntoView:!0}),o||=r===!0?f.formatMessage(Q.feedbackAnswerCorrect):r===!1?f.formatMessage(i>1?Q.feedbackWrongAnswersGeneric:Q.feedbackAnswerIncorrect):f.formatMessage(Q.feedbackSubmissionThanks),P.createElement(Nc,{id:t,ref:p},d!==!0&&P.createElement(Pc,{correct:r,padding:l},o),i>1&&r===!1&&P.createElement(Ko,null,f.formatMessage(a?Q.feedbackWrongAnswerPrompt:Q.feedbackWrongAnswerPromptNotIndicated)),s?P.createElement(Fc,{padding:l,dangerouslySetInnerHTML:{__html:s}}):n?P.createElement(Fc,null,n):null)},Lc,Rc,zc,Bc;(function(e){e.Left=`Left`,e.Center=`Center`,e.Right=`Right`})(Bc||={});var Vc;(function(e){e[e.Primary=0]=`Primary`,e[e.Secondary=1]=`Secondary`})(Vc||={});var Hc={Container:D.div.withConfig({displayName:`Controls__Container`})(qc||=Y([`
    font-size: 1.6rem;
    padding: 16px;
    position: relative;
    text-align: `,`;
    `,`;
    `,`;
    `,`;
  `],[`
    font-size: 1.6rem;
    padding: 16px;
    position: relative;
    text-align: `,`;
    `,`;
    `,`;
    `,`;
  `]),function(e){var t=e.align;return t===Bc.Right?`right`:t===Bc.Center?`center`:`left`},function(e){return e.type===Vc.Primary&&k(Wc||=Y([`
        &:before {
          content: "";
          display: block;
          box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.2);
          height: 1px;
          top: 0;
          left: 0;
          width: 100%;
          position: absolute;
        }
      `],[`
        &:before {
          content: "";
          display: block;
          box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.2);
          height: 1px;
          top: 0;
          left: 0;
          width: 100%;
          position: absolute;
        }
      `]))},function(e){return e.type===Vc.Secondary&&k(Gc||=Y([`
        button:not(:last-child) {
          margin-right: 12px;
          margin-bottom: 12px;
        }
      `],[`
        button:not(:last-child) {
          margin-right: 12px;
          margin-bottom: 12px;
        }
      `]))},function(e){return e.dockToBottom&&k(Kc||=Y([`
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
      `],[`
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
      `]))})},Uc=P.forwardRef(function(e,t){var n=e.type,r=e.align,i=e.children,a=e.dockToBottom,o=e.visible;return o===void 0||o?P.createElement(Hc.Container,{ref:t||void 0,type:n,align:r,dockToBottom:a},i):null}),Wc,Gc,Kc,qc,Jc={FlashcardMenu:D.div.withConfig({displayName:`CreateFlashcardButton__FlashcardMenu`})(Zc||=Y([`
    width: 200px;
  `],[`
    width: 200px;
  `])),Header:D.div.withConfig({displayName:`CreateFlashcardButton__Header`})(Qc||=Y([`
    color: `,`;
    padding-top: 14px;
    margin: 0 16px;
    font-size: 1.4rem;
    font-weight: 300;
    &:only-child {
      padding-bottom: 14px;
    }
  `],[`
    color: `,`;
    padding-top: 14px;
    margin: 0 16px;
    font-size: 1.4rem;
    font-weight: 300;
    &:only-child {
      padding-bottom: 14px;
    }
  `]),q.cloud.getShade(6))},Yc=1024,Xc=function(e){var t=e.front,n=e.back,r=e.hostApi,i=e.relatedId,a=e.onNotifyCreate,o=e.isCreated,s=M(),c=(0,P.useState)(),l=c[0],u=c[1],d=(0,P.useState)(!1),f=d[0],p=d[1],m=(0,P.useState)(!1),h=m[0],g=m[1];(0,P.useEffect)(function(){r?.getFlashcardDecks&&r.getFlashcardDecks().then(function(e){p(e.autoAdd),u(e.data)})},[r]),(0,P.useEffect)(function(){(t.length>Yc||n.length>Yc)&&!h&&g(!0),t.length<=Yc&&n.length<=Yc&&h&&g(!1)},[h,t,n]);var v=function(){p(!1),a()},y=function(){var e;l&&((e=r?.createFlashcard)==null||e.call(r,{deckId:l[0].uuid,front:t,back:n,relatedId:i}).then(v))},b=function(e){return P.createElement(Ro,J({},e,{className:`add-to-flashcard`}),o?s.formatMessage(Wa.reviewFlashcard):s.formatMessage(Wa.addToFlashcard))};return h?null:o?P.createElement(b,{onClick:function(){return(r?.reviewFlashcards)?.call(r,i)}}):f?P.createElement(b,{onClick:y}):P.createElement(ma.Popover,{placement:`top`,modifiers:{offset:{offset:`0, 12px`}},content:P.createElement(Jc.FlashcardMenu,null,P.createElement(Jc.Header,null,P.createElement(_,J({},Wa.addToFlashcard))),l&&l.length>0&&!f&&!o&&P.createElement(ma.List,{data:[{listItems:l?.map(function(e){return{text:e.title,onClick:function(){var a;(a=r?.createFlashcard)==null||a.call(r,{deckId:e.uuid,front:t,back:n,relatedId:i}).then(v)}}})}]}))},P.createElement(b,null))},Zc,Qc,$c;(function(e){e[e.CheckAnswer=0]=`CheckAnswer`,e[e.SubmitAnswer=1]=`SubmitAnswer`,e[e.DynamicLabel=2]=`DynamicLabel`})($c||={});var el=P.forwardRef(function(e,t){var n=M(),r=e.type,i=e.align,a=e.submitted,o=e.dispatch,s=e.awaitingFeedback,c=e.visible,l=c===void 0||c,u=(0,P.useState)(!1),d=u[0],f=u[1];if(!l)return null;if(e.type===Vc.Primary){var p=e.mode,m=e.type,h=e.align,g=e.submitted,v=e.dockToBottom,y=e.dispatch,b=e.showNextQuestion,x=e.onNextQuestion,S=e.onDone,C=e.submitButtonLabel;return P.createElement(Uc,{ref:t,type:m,align:h,dockToBottom:v,visible:l},!g&&P.createElement(Fo,J({loading:s,onClick:function(){y(Hs(!0,!0))}},s&&{"aria-label":n.formatMessage(Va.evaluating)}),s?``:p===$c.DynamicLabel&&C?C:p===$c.CheckAnswer?P.createElement(_,J({},Q.controlsCheckAnswer)):P.createElement(_,J({},Q.controlsSubmit))),g&&b&&P.createElement(Fo,{onClick:function(){x?.()}},P.createElement(_,J({},Q.controlsNextQuestion))),g&&!b&&P.createElement(Fo,{onClick:function(){S?.()}},P.createElement(_,J({},Q.controlsDone))))}var w=e.showReveal,T=e.showRetry,E=e.answerCorrect,D=e.revealAnswer,O=e.getResetQuestionState,k=e.onRevealAnswer,A=e.onReset,j=e.onTutorRequested,N=e.addToFlashcard,F=E===!0?lo.QuestionCorrect:E===!1?lo.QuestionIncorrect:lo.QuestionUngraded,I=N.show,L=N.hostApi,R=N.front,z=N.back,B=N.relatedId;return P.createElement(Uc,{type:r,align:i},a&&w&&!E&&!D&&P.createElement(Ro,{onClick:function(){k?.(),o(Js(!0)),o($s()),o(Qs(n.formatMessage(Q.feedbackRevealAnswerAnnouncement),ds.Assertive))}},P.createElement(_,J({},Q.controlsRevealAnswer))),a&&T&&P.createElement(Ro,{onClick:function(){o(Bs(O())),A?.(),(0,K.default)(function(){o($s()),o(Qs(n.formatMessage(Q.feedbackResetAnnouncement),ds.Assertive))})}},P.createElement(_,J({},Q.controlsRetry))),a&&j&&P.createElement(Ro,{onClick:function(){return j(F)}},P.createElement(_,J({},F===lo.QuestionIncorrect?Q.controlsTutorReview:Q.controlsTutorDiscuss))),I&&P.createElement(Xc,{front:R,back:z,hostApi:L,relatedId:B,isCreated:d,onNotifyCreate:function(){return f(!0)},key:B}))}),tl=function(e){var t=(0,P.useRef)(e);return(0,P.useEffect)(function(){t.current=e}),t.current},nl=D.div.withConfig({displayName:`AriaLiveRegion__AriaLiveHiddenDiv`})(il||=Y([`
  `,`
`],[`
  `,`
`]),So),rl=function(e){var t=e.text,n=e.children,r=e.mode,i=r===void 0?ds.Polite:r,a=e.onClear,o=(0,P.useRef)((0,aa.default)(function(){a()},2e3));return(t||n)&&o.current(),P.createElement(nl,{role:`status`,"aria-live":i===ds.Assertive?`assertive`:`polite`,"aria-atomic":`true`},t||n)},il,al=18,ol=10,sl=D.div.withConfig({displayName:`Loader__Container`})(ul||=Y([`
  overflow: visible;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 250px;
  &:focus {
    outline: 1px solid `,`;
  }
  @keyframes loadingPulse {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.5);
    }
    20% {
      transform: scale(2);
    }
    30% {
      transform: scale(1.5);
    }
    40% {
      transform: scale(1);
    }
  }
  & div:first-child {
    animation: loadingPulse 1.5s infinite linear;
  }
  & div:nth-child(2) {
    animation: loadingPulse 1.5s 0.15s infinite linear;
  }
  & div:nth-child(3) {
    animation: loadingPulse 1.5s 0.3s infinite linear;
  }
  & div:nth-child(4) {
    animation: loadingPulse 1.5s 0.45s infinite linear;
  }
  & div:last-child {
    animation: loadingPulse 1.5s 0.6s infinite linear;
  }
`],[`
  overflow: visible;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 250px;
  &:focus {
    outline: 1px solid `,`;
  }
  @keyframes loadingPulse {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.5);
    }
    20% {
      transform: scale(2);
    }
    30% {
      transform: scale(1.5);
    }
    40% {
      transform: scale(1);
    }
  }
  & div:first-child {
    animation: loadingPulse 1.5s infinite linear;
  }
  & div:nth-child(2) {
    animation: loadingPulse 1.5s 0.15s infinite linear;
  }
  & div:nth-child(3) {
    animation: loadingPulse 1.5s 0.3s infinite linear;
  }
  & div:nth-child(4) {
    animation: loadingPulse 1.5s 0.45s infinite linear;
  }
  & div:last-child {
    animation: loadingPulse 1.5s 0.6s infinite linear;
  }
`]),$()),cl=D.div.withConfig({displayName:`Loader__Dot`})(dl||=Y([`
  height: `,`;
  width: `,`;
  border-radius: 100%;
  margin: 0 `,`;
  background: `,`;
`],[`
  height: `,`;
  width: `,`;
  border-radius: 100%;
  margin: 0 `,`;
  background: `,`;
`]),function(e){return`${e.size}px`},function(e){return`${e.size}px`},function(e){return`${e.size*(ol/al)}px`},function(e){return e.theme.vstui.color.primary.getShade(e.bgColor)}),ll=function(e){var t=e.size,n=t===void 0?18:t,r=e.takeFocus,i=r!==void 0&&r,a=M(),o=[2,3,4,6,7],s=(0,P.useRef)(null);return(0,P.useEffect)(function(){var e;i&&((e=s.current)==null||e.focus())},[i]),P.createElement(sl,{ref:s,tabIndex:i?0:void 0,"aria-label":a.formatMessage(Va.loading)},o.map(function(e){return P.createElement(cl,{key:`dot ${e}`,bgColor:e,size:n})}))},ul,dl,fl=D.div.withConfig({displayName:`CenteredLoader__OuterContainer`})(hl||=Y([`
  display: flex;
  width: 100%;
  justify-content: center;
  `,`;
`],[`
  display: flex;
  width: 100%;
  justify-content: center;
  `,`;
`]),function(e){return e.vertCenter&&k(ml||=Y([`
      align-items: center;
      height: 100%;
    `],[`
      align-items: center;
      height: 100%;
    `]))}),pl=function(e){return P.createElement(fl,{vertCenter:e.vertCenter,className:e.className},P.createElement(ll,J({},e)))},ml,hl,gl={Background:D.div.withConfig({displayName:`ModalBlock__Background`})(vl||=Y([`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  `],[`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  `]))},_l=function(e){var t=e.blocked,n=(0,P.useState)(!1),r=n[0],i=n[1];return(0,P.useEffect)(function(){i(!1),t&&setTimeout(function(){i(!0)},750)},[t]),t?P.createElement(gl.Background,null,r&&P.createElement(pl,{vertCenter:!0})):null},vl,yl=function(e){var t=e.open,n=e.text,r=n===void 0?{title:``,description:``}:n,i=r.title,a=r.description,o=r.detail,s=`${a}${o?` `+o:``}`;return P.createElement(`div`,null,P.createElement(ca.Toast,{open:t,toastTitleText:i,toastDescriptionText:s,toastType:`error`}))},bl=function(e){var t=e.systemError,n=M(),r=(0,P.useMemo)(function(){if(t?.type==ja.EvaluationError)return{title:n.formatMessage(Xa.evaluateErrorTitle),description:n.formatMessage(Xa.evaluateErrorDescription),detail:t.detail};if(t?.type==ja.RevealAnswerError)return{title:n.formatMessage(Xa.revealAnswerErrorTitle),description:n.formatMessage(Xa.revealAnswerErrorDescription),detail:t.detail};if(t?.type==ja.ImprovementFeedbackError)return{title:n.formatMessage(Xa.evaluateErrorTitle),description:n.formatMessage(Xa.improvementFeedbackErrorDescription),detail:t.detail}},[n,t?.detail,t?.type]);return P.createElement(yl,{open:!!t,text:r})},xl=function(e){var t=e.selected,n=e.theme,r=e.down,i=r!==void 0&&r?{transform:`rotate(180deg)`,transformOrigin:`center`}:void 0;return P.createElement(`svg`,{style:i,width:`15`,height:`15`,xmlns:`http://www.w3.org/2000/svg`,focusable:`false`},P.createElement(`path`,{d:`M2.357 12.164c.421.03 1.036.086 1.577.19.436.084.636.155.94.262.306.109.687.243 1.448.447 1.053.283 2.726.252 3.766.077 1.001-.168 1.5-.76 1.551-1.271a.951.951 0 00-.032-.368c.336-.157.639-.435.708-.892.052-.358-.011-.639-.122-.848.22-.205.4-.508.4-.925 0-.363-.135-.641-.315-.844.138-.174.236-.411.236-.729 0-.86-.712-1.126-1.016-1.239-.549-.205-2.317-.28-2.924-.302-.027-.076-.026-.197.097-.366.067-.105 1.65-2.563.432-3.924-.082-.101-.52-.599-1.053-.599l-.014.001c-.264.003-.5.129-.681.362l-.082.105-.007.135c0 .019-.105 1.79-1.031 2.721-.804.809-1.501 1.743-2.116 2.567-.172.23-.34.455-.506.67l-1.224.037c-.427.013-.762.378-.762.83v3.074c0 .435.32.8.73.83z`,stroke:q.cloud.getShade(6),fill:t?ho(n):`none`,fillRule:`evenodd`}))},Sl=function(e){return P.createElement(xl,J({},e,{down:!0}))},Cl=C(xl),wl=C(Sl),Tl=[{type:Aa.CorrectAnswerWrong,message:Ja.issueWrongAnswer},{type:Aa.UserAnswerAlsoCorrect,message:Ja.issueMineAlsoCorrect},{type:Aa.QuestionUnclear,message:Ja.issueQuestionUnclear},{type:Aa.QuestionNotRelevant,message:Ja.issueQuestionNotRelevant}],El={CheckListContainer:D.fieldset.withConfig({displayName:`QuestionImprovementDialog__CheckListContainer`})(Ol||=Y([`
    border: none;
    padding: 24px 0 0 0;
  `],[`
    border: none;
    padding: 24px 0 0 0;
  `])),InfoText:D.div.withConfig({displayName:`QuestionImprovementDialog__InfoText`})(kl||=Y([`
    font-size: 1.4rem;
    color: `,`;
  `],[`
    font-size: 1.4rem;
    color: `,`;
  `]),q.cloud.getShade(6))},Dl=function(e){var t=e.open,n=e.onFeedback,r=M(),i=(0,P.useState)(``),a=i[0],o=i[1],s=(0,P.useState)([]),c=s[0],l=s[1];return P.createElement(ca.Dialog,{open:t,requireInteraction:!1,primaryActionButton:{label:r.formatMessage(J({},Va.submit)),onClick:function(){n({issues:c,otherFeedback:a})}},secondaryActionButton:{label:r.formatMessage(J({},Va.cancel)),onClick:function(){n()}},onRequestClose:function(){return n()},size:`large`,title:r.formatMessage(J({},Ja.title))},P.createElement(El.InfoText,null,P.createElement(_,J({},Ja.information))),P.createElement(El.CheckListContainer,null,Tl.map(function(e){return P.createElement(ca.Checkbox,{key:e.type,checked:c.indexOf(e.type)!==-1,onChange:function(t){t.target.checked?l(Sa(Sa([],c,!0),[e.type],!1)):l(c.filter(function(t){return t!==e.type}))},label:r.formatMessage(e.message),fullWidth:!0})})),P.createElement(ca.TextField,{label:r.formatMessage(J({},Ja.otherFeedback)),type:`text`,onChange:function(e){return o(e.target.value)},value:a,multiline:!0,fullWidth:!0,placeholder:r.formatMessage(J({},Ja.feedbackPlaceholder))}))},Ol,kl,Al=function(e,t,n){var r=n?n.current:window,i=(0,P.useRef)(t);(0,P.useEffect)(function(){i.current=t},[t]),(0,P.useEffect)(function(){if(!(!r||!r.addEventListener)){var t=function(e){return i.current?.call(i,e)};return r.addEventListener(e,t),function(){r.removeEventListener(e,t)}}},[e,r])},jl=w(Pl||=Y([`
  from {
    opacity: 0;
  }
  50%  { opacity: 0 }   
  to {
    opacity: 1;
  }
`],[`
  from {
    opacity: 0;
  }
  50%  { opacity: 0 }   
  to {
    opacity: 1;
  }
`])),Ml={Container:D.div.withConfig({displayName:`QuestionImprovement__Container`})(Ll||=Y([`
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;    
    padding: 0 16px 16px;
    text-align: end;
    color: `,`
    font-weight: 500;
    font-size: 1.4rem;
    `,`;    
    `,`;
  `],[`
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;    
    padding: 0 16px 16px;
    text-align: end;
    color: `,`
    font-weight: 500;
    font-size: 1.4rem;
    `,`;    
    `,`;
  `]),q.cloud.getShade(6),function(e){return e.animateIn&&k(Fl||=Y([`
        animation: `,` 1.25s ease;
      `],[`
        animation: `,` 1.25s ease;
      `]),jl)},function(e){return e.fadeOut&&k(Il||=Y([`
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.75s ease 0.5s;
      `],[`
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.75s ease 0.5s;
      `]))}),Fieldset:D.fieldset.withConfig({displayName:`QuestionImprovement__Fieldset`})(Rl||=Y([`
    border: none;
  `],[`
    border: none;
  `])),Caption:D.legend.withConfig({displayName:`QuestionImprovement__Caption`})(zl||=Y([`
    margin-right: 4px;
    margin-top: 2px;
    float: left;
  `],[`
    margin-right: 4px;
    margin-top: 2px;
    float: left;
  `])),FeedbackButton:D.button.withConfig({displayName:`QuestionImprovement__FeedbackButton`})(Bl||=Y([`
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 2px 4px;
    border-radius: 4px;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px `,`;
    }
  `],[`
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 2px 4px;
    border-radius: 4px;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px `,`;
    }
  `]),$())},Nl=function(e){var t=e.appearEffect,n=e.onStatus,r=e.onAppearStart,i=e.scrollWhenAppearing,a=e.onAnimationEnd,o=M(),s=(0,P.useRef)(null),c=(0,P.useState)(!1),l=c[0],u=c[1],d=(0,P.useState)(void 0),f=d[0],p=d[1],m=(0,P.useState)(!1),h=m[0],g=m[1],v=(0,P.useState)(null),y=v[0],b=v[1],x=(0,P.useState)(!1),S=x[0],C=x[1],w=(0,P.useState)(!1),T=w[0],E=w[1];return Al(`transitionend`,(0,P.useCallback)(function(){T&&!h&&g(!0)},[T,h]),s),t&&!S&&C(!0),(0,P.useEffect)(function(){if(h){if(y===null)throw`Question improvement expected a result but got null`;n({flag:y,feedback:f})}},[h,f,n,y]),h?null:P.createElement(P.default.Fragment,null,P.createElement(Ml.Container,{ref:s,animateIn:S,fadeOut:T,onAnimationStart:function(){var e;r?.(s.current),s.current&&i&&((e=s.current)==null||e.scrollIntoView({behavior:`smooth`}))},onAnimationEnd:function(){return a?.()}},P.createElement(Ml.Fieldset,null,P.createElement(Ml.Caption,null,P.createElement(_,J({},qa.prompt))),P.createElement(Ml.FeedbackButton,{"aria-label":o.formatMessage(J({},qa.thumbsUp)),"aria-pressed":y===ka.FlaggedGood,onClick:function(){b(ka.FlaggedGood),E(!0)}},P.createElement(Cl,{selected:y===ka.FlaggedGood})),P.createElement(Ml.FeedbackButton,{"aria-label":o.formatMessage(J({},qa.thumbsDown)),"aria-pressed":y===ka.FlaggedBad,onClick:function(){u(!0)}},P.createElement(wl,{selected:y===ka.FlaggedBad})))),l&&P.createElement(Dl,{open:l,onFeedback:function(e){u(!1),e&&p(e),b(ka.FlaggedBad),E(!0)}}))},Pl,Fl,Il,Ll,Rl,zl,Bl,Vl={Container:D.div.withConfig({displayName:`AiDisclaimer__Container`})(Ul||=Y([`
    margin: 16px 16px 8px 16px;
    border-radius: 4px;
    padding: 8px;
    background-color: `,`;
    color: `,`;
    font-size: 1.1rem;
  `],[`
    margin: 16px 16px 8px 16px;
    border-radius: 4px;
    padding: 8px;
    background-color: `,`;
    color: `,`;
    font-size: 1.1rem;
  `]),q.frost.getShade(1),q.cloud.getShade(7)),Anchor:D.a.withConfig({displayName:`AiDisclaimer__Anchor`})(Wl||=Y([`
    text-decoration: underline;
    color: `,`;
  `],[`
    text-decoration: underline;
    color: `,`;
  `]),q.cloud.getShade(7))},Hl=function(e){var t=e.className,n=e.prependAsterisk,r=M();return P.createElement(Vl.Container,{className:t},n&&`* `,r.formatMessage(Qa.aiDisclaimer))},Ul,Wl,Gl={QuestionDiv:D.div.withConfig({displayName:`QuestionContainer__QuestionDiv`})(Xl||=Y([`
    background: #ffffff;
    & ul,
    ol {
      // if question is part of question group the wrapping list tag caused hollow bullets
      list-style-type: disc;
    }
    `,`;
    `,`;
    `,`;
  `],[`
    background: #ffffff;
    & ul,
    ol {
      // if question is part of question group the wrapping list tag caused hollow bullets
      list-style-type: disc;
    }
    `,`;
    `,`;
    `,`;
  `]),function(e){return e.standalone&&k(ql||=Y([`
        height: 100%;
        display: flex;
        flex-direction: column;
      `],[`
        height: 100%;
        display: flex;
        flex-direction: column;
      `]))},function(e){return e.border===Oa.HaloShadow&&k(Jl||=Y([`
        box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        font-weight: 500;
        margin: 8px;
      `],[`
        box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        font-weight: 500;
        margin: 8px;
      `]))},function(e){var t=e.standalone,n=e.needsDivider;return(n===void 0||n)&&!t&&k(Yl||=Y([`
        :not(:last-child):after {
          content: "";
          display: inline-block;
          width: calc(100% - 32px);
          margin-left: 16px;
          margin-top: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid `,`;
        }
      `],[`
        :not(:last-child):after {
          content: "";
          display: inline-block;
          width: calc(100% - 32px);
          margin-left: 16px;
          margin-top: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid `,`;
        }
      `]),q.cloud.getShade(4))}),PrologueWrapper:D.div.withConfig({displayName:`QuestionContainer__PrologueWrapper`})(Ql||=Y([`
    `,`;
    `,`;
  `],[`
    `,`;
    `,`;
  `]),function(e){return e.vertMargin?`margin-top: 16px`:``},function(e){return e.isFixed&&k(Zl||=Y([`
        position: sticky;
        top: 0;
        z-index: 1;
      `],[`
        position: sticky;
        top: 0;
        z-index: 1;
      `]))}),ScrollingFrame:D.div.withConfig({displayName:`QuestionContainer__ScrollingFrame`})(eu||=Y([`
    `,`;
  `],[`
    `,`;
  `]),function(e){return e.needInternalScroll&&k($l||=Y([`
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      `],[`
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      `]))}),ScrollingContent:D.div.withConfig({displayName:`QuestionContainer__ScrollingContent`})(tu||=Y([`
    padding-top: `,`;
    margin: `,` 16px;
    position: relative;
  `],[`
    padding-top: `,`;
    margin: `,` 16px;
    position: relative;
  `]),function(e){return e.isGapFill?`9px`:`0`},function(e){return e.needVertMargin?`16px`:`0`})},Kl=function(e){var t,n=e.id,r=e.className,i=e.mode,a=e.border,o=a===void 0?Oa.None:a,s=e.questionIndex,c=e.siblingQuestionCount,l=e.status,u=e.controlsVisible,d=e.secondaryControlsVisible,f=d===void 0||d,p=e.tutorRequestedVisible,m=p===void 0||p,h=e.secondaryControlsAfterEpilogue,g=h!==void 0&&h,_=e.controlsMode,v=e.feedbackNumAnswers,y=e.feedbackWrongAnswersIndicated,b=e.systemFeedbackMessage,x=e.feedbackMessage,S=e.feedbackPadding,C=e.feedbackNeutral,w=e.errorMsgDisplayID,T=e.questionTypeLabel,E=e.state,D=E.submitted,O=E.submitActive,k=E.answerCorrect,A=E.validationErrorMsg,j=E.revealAnswer,N=E.ariaLiveMessage,F=E.ariaLiveMode,I=E.focusQuestionStart,L=E.locked,R=E.systemError,z=E.improvementStatus,B=E.loaded,ee=E.numSubmitRequestedAttempts,te=e.dispatch,ne=e.getResetQuestionState,re=e.fixedPrologue,ie=re!==void 0&&re,ae=e.prologue,oe=e.body,se=e.epilogue,V=e.events,H=e.isGapFill,ce=e.enhanced,le=e.submitButtonLabel,U=e.hostApi,W=e.flashcardData,G=M(),ue=tl(D),de=P.useRef(null),fe=i===Z.Standalone||i===Z.StandaloneInGroup,pe=i===Z.Standalone&&!D||i===Z.StandaloneInGroup,me=!!U?.onTutorRequested&&m,he=fe&&D&&(f||me),ge=i===Z.Tutorial||i===Z.TutorialFollowup,_e=tl(ee),ve=(0,P.useMemo)(function(){return ee!==_e},[ee,_e]),ye=(0,P.useState)(!1),be=ye[0],xe=ye[1];(0,P.useEffect)(function(){ve&&xe(!0)},[ve]),(0,P.useEffect)(function(){be&&xe(!1)},[be]),R&&(0,K.default)(function(){return te(rc())}),(0,P.useEffect)(function(){var e;de.current&&((e=V?.onSetControlsSize)==null||e.call(V,n,de.current.offsetHeight))},[V,n]);var Se=he&&P.createElement(el,{type:Vc.Secondary,align:Bc.Left,submitted:D,answerCorrect:k,revealAnswer:j,awaitingFeedback:L,dispatch:te,getResetQuestionState:ne,showReveal:f&&fe&&k!==null&&ce!==!0,showRetry:f,addToFlashcard:{show:D&&ce===!0,front:W?.front||``,back:W?.back||``,hostApi:U,relatedId:n},onRevealAnswer:function(){return(V?.onRevealAnswer)?.call(V,n)},onReset:function(){return(V?.onReset)?.call(V,n)},onTutorRequested:me?function(e){return(V?.onTutorRequested)?.call(V,n,e)}:void 0});return P.createElement(Gl.QuestionDiv,J({key:n,id:n,className:r,border:o,standalone:fe},i===Z.StandaloneInGroup&&(c??0)>1&&(t={role:`tabpanel`},t[`aria-label`]=G.formatMessage(Q.pip,{index:(s??0)+1,status:l}),t)),P.createElement(rl,{mode:F,onClear:function(){te(Qs(``))}},N),P.createElement(Ko,{focused:I},T),ae&&ie&&P.createElement(Gl.PrologueWrapper,{vertMargin:fe,isFixed:!0},ae),P.createElement(Gl.ScrollingFrame,{needInternalScroll:i===Z.Standalone},P.createElement(Gl.ScrollingContent,{isGapFill:H,needVertMargin:fe&&!(ae&&ie)},ae&&!ie&&P.createElement(Gl.PrologueWrapper,{vertMargin:!1,isFixed:!1},ae),A&&P.createElement(Dc,{id:w,message:G.formatMessage(A.descriptor),notificationIcon:Sc.ExclamationCircle,focused:be,withoutMarginTop:H,key:w}),typeof oe==`function`?oe(L):oe,D&&P.createElement(Ic,{correct:C||k===void 0?Ta:k,numAnswers:v,wrongAnswersIndicated:y,message:b,content:x,padding:S,focused:B&&!ue&&D&&i!==Z.Child,hideFeedbackMessage:ce})),ce&&D&&P.createElement(Hl,null),!g&&Se,se||null,g&&Se,D&&!ge&&!z&&k!==void 0&&P.createElement(Nl,{status:z,appearEffect:O,onStatus:function(e){te(ic(e))},scrollWhenAppearing:!1})),pe&&P.createElement(el,{ref:de,type:Vc.Primary,align:Bc.Center,visible:u,mode:_,awaitingFeedback:L&&!!ce,submitted:D,answerCorrect:k,revealAnswer:j,dockToBottom:i===Z.StandaloneInGroup,dispatch:te,showNextQuestion:fe&&s!==void 0&&c!==void 0&&s<c-1,onNextQuestion:function(){var e;(e=V?.onNextQuestion)==null||e.call(V,n)},onDone:function(){var e;(e=V?.onDone)==null||e.call(V,n)},submitButtonLabel:le}),P.createElement(bl,{systemError:R}),P.createElement(_l,{blocked:L&&i!==Z.StandaloneInGroup}))},ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu=function(){return P.createElement(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,"aria-hidden":`true`,focusable:`false`,xmlns:`http://www.w3.org/2000/svg`},P.createElement(`g`,{fill:`none`,fillRule:`evenodd`},P.createElement(`circle`,{fill:q.red.getShade(6),cx:`10`,cy:`10`,r:`10`}),P.createElement(`path`,{d:`M11.414 10l3.293-3.293a.999.999 0 10-1.414-1.414L10 8.586 6.707 5.293a.999.999 0 10-1.414 1.414L8.586 10l-3.293 3.293a.999.999 0 101.414 1.414L10 11.414l3.293 3.293a.997.997 0 001.414 0 .999.999 0 000-1.414L11.414 10z`,fill:`#FFF`})))},ru=function(){return P.createElement(`svg`,{width:`20`,height:`20`,viewBox:`0 0 18 18`,"aria-hidden":`true`,focusable:`false`,xmlns:`http://www.w3.org/2000/svg`},P.createElement(`path`,{fill:q.green.getShade(6),d:`M13.706 7.466l-5.24 5.24a1 1 0 0 1-1.416 0L4.281 9.939a1 1 0 0 1 1.414-1.414l2.063 2.062 4.534-4.535a1 1 0 1 1 1.414 1.415M9 0a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9`}))},iu=function(){return P.createElement(`svg`,{width:`20`,height:`20`,viewBox:`0 0 18 18`,"aria-hidden":`true`,focusable:`false`,xmlns:`http://www.w3.org/2000/svg`},P.createElement(`path`,{fill:q.green.getShade(6),d:`M9 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7M9 0a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9zm4.706 6.05a.999.999 0 0 0-1.414 0l-4.534 4.536-2.063-2.062a.999.999 0 1 0-1.414 1.414l2.77 2.769a1 1 0 0 0 1.414 0l5.241-5.241a1 1 0 0 0 0-1.415z`,fillRule:`evenodd`}))},au=16,ou=k(lu||=Y([`
  position: absolute;
  display: inline-block;
  content: "";
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.43);
  box-sizing: border-box;
  margin-left: `,`px;
  background-color: white;
  margin-top: 3px;
`],[`
  position: absolute;
  display: inline-block;
  content: "";
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.43);
  box-sizing: border-box;
  margin-left: `,`px;
  background-color: white;
  margin-top: 3px;
`]),-2*au),su=D.label.withConfig({displayName:`MultipleChoiceAnswer__Answer`})(du||=Y([`
  `,`;
  position: relative;
  display: block;
  font-weight: 400;
  padding: 16px;
  margin-top: 16px;
  cursor: `,`;
  &:hover {
    `,`;
  }
  `,`
  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  input + span::before {
    `,`
  }
  input:checked + span::before {
    border: 5px solid `,`;
  }
  input:focus + span::before {
    box-shadow: 0 0 0 1px `,`, 0 0 0 6px `,`;
  }
  `,`
  svg {
    margin-top: 1px;
    position: absolute;
  }
  > span {
    padding-left: `,`px;
    vertical-align: middle;
    display: inline-block;
    line-height: 1.5;
  }
`],[`
  `,`;
  position: relative;
  display: block;
  font-weight: 400;
  padding: 16px;
  margin-top: 16px;
  cursor: `,`;
  &:hover {
    `,`;
  }
  `,`
  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  input + span::before {
    `,`
  }
  input:checked + span::before {
    border: 5px solid `,`;
  }
  input:focus + span::before {
    box-shadow: 0 0 0 1px `,`, 0 0 0 6px `,`;
  }
  `,`
  svg {
    margin-top: 1px;
    position: absolute;
  }
  > span {
    padding-left: `,`px;
    vertical-align: middle;
    display: inline-block;
    line-height: 1.5;
  }
`]),function(e){var t=e.correct,n=e.submitted,r=e.checked,i=e.revealed;return n?t===!0&&r?_o:i&&t?yo:t===!1&&r?vo:t===null&&r?bo:go:go},function(e){return e.submitted?`auto`:`pointer`},function(e){return e.submitted?``:`background-color: ${q.cloud.getShade(1)};`},function(e){var t=e.checked,n=e.submitted;return t&&!n?`background-color: ${q.cloud.getShade(1)};`:``},ou,$(),q.ninja.getShade(11),po(3),function(e){var t=e.checked,n=e.submitted,r=e.correct;return t&&n&&r===null&&k(uu||=Y([`
      span::before {
        `,`;
        border: 5px solid `,`;
      }
    `],[`
      span::before {
        `,`;
        border: 5px solid `,`;
      }
    `]),ou,$())},au*2),cu=function(e){var t=e.text,n=e.value,r=e.groupID,i=e.answerID,a=e.index,o=e.checked,s=e.submitted,c=e.disabled,l=e.correct,u=e.revealed,d=e.errorMsg,f=e.errorMsgDisplayID,p=e.onSelectAnswer,m=M(),h=``;return s&&u&&l?h=m.formatMessage(Q.feedbackItemRevealedCorrectAnswer):s&&o&&(h=l?m.formatMessage(Q.feedbackItemCorrectAnswer):m.formatMessage(Q.feedbackItemIncorrectAnswer)),P.createElement(su,{htmlFor:i,correct:l,checked:o,submitted:s,revealed:u},s&&u&&l?P.createElement(iu,null):!s||!o?P.createElement(`input`,{type:`radio`,name:r,id:i,checked:o,value:n,disabled:c,"aria-invalid":d?!0:void 0,"aria-describedby":d?f:void 0,onChange:function(){p(n,a)}}):l===!0?P.createElement(ru,null):l===!1?P.createElement(nu,null):null,P.createElement(`span`,{dangerouslySetInnerHTML:{__html:t}}),h&&P.createElement(Ko,null,h))},lu,uu,du,fu;(function(e){e[e.Plain=0]=`Plain`,e[e.Inline=1]=`Inline`})(fu||={});var pu=function(e,t,n){return n===void 0&&(n=fu.Inline),t?.previousAnswers?e.replace(/({{.*?}})/g,function(e){var r,i=e.slice(2,-2).trim().split(`.`);if(i.pop()===`value`){var a=i.shift();if(a){var o=t.previousAnswers[a];r=(0,ha.default)(o.inputVars,i.join(`.`))}}return r?n===fu.Inline?`<span class="answer">${r}</span>`:r:e}):e},mu=function(e,t){if(!t)return e;if(e.trim().search(/<p\s*?>/)===0){var n=e.trim().indexOf(`>`);return e.substring(0,n+1)+t+e.substring(n+1)}return t+e};function hu(e){if(!e)return null;var t=e.scrollHeight>e.clientHeight,n=window.getComputedStyle(e).overflowY.indexOf(`auto`)!==-1;return t&&n}function gu(e){return!e||e===document.body?document.body:hu(e)?e:gu(e.parentElement)}function _u(e){return e&&new DOMParser().parseFromString(e,`text/html`).body.textContent||``}var vu;(function(e){e[e.Div=0]=`Div`,e[e.Label=1]=`Label`})(vu||={});var yu=function(e,t){return t===void 0&&(t=1.5),(e*16*t-e*16)/2/16},bu=function(e){return e===void 0&&(e=!1),e?2.5:1.5},xu={QuestionDiv:D.div.withConfig({displayName:`QuestionText__QuestionDiv`})(Cu||=Y([`
    `,`;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: `,`;
    & p:first-of-type {
      margin-top: 0;
      &:before {
        content: "";
        display: block;
        margin-top: -`,`rem;
      }
    }
    & p:last-of-type {
      margin-bottom: 0;
    }
  `],[`
    `,`;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: `,`;
    & p:first-of-type {
      margin-top: 0;
      &:before {
        content: "";
        display: block;
        margin-top: -`,`rem;
      }
    }
    & p:last-of-type {
      margin-bottom: 0;
    }
  `]),xo,function(e){var t=e.isGapFill;return bu(t)},function(e){var t=e.isGapFill;return yu(1.25,bu(t))})},Su=function(e){var t=e.type,n=e.isGapFill,r=e.questionIndex,i=e.text,a=e.children,o=xa(e,[`type`,`isGapFill`,`questionIndex`,`text`,`children`]),s=r===void 0?null:`<span>${r+1}. </span>`,c=(0,P.useMemo)(function(){return t===vu.Label&&i?_u(i):``},[i,t]);if(a)return P.createElement(xu.QuestionDiv,{isGapFill:n},s,a);s&&i&&(i=mu(i,s));var l=t===vu.Label;return P.createElement(P.default.Fragment,null,P.createElement(xu.QuestionDiv,{"aria-hidden":l?!0:void 0,dangerouslySetInnerHTML:{__html:i??``}}),l&&P.createElement(Ko,{"aria-hidden":!0},P.createElement(`label`,{htmlFor:o.labelForId},c)))},Cu;function wu(e,t,n,r,i){var a=e.controlledSubmit,o=e.controlledReveal,s=e.controlledReset,c=t.submitted,l=t.revealAnswer;(0,P.useEffect)(function(){a&&!c&&!i&&n(Hs(!0))},[a,n,i,c]),(0,P.useEffect)(function(){o&&!l&&n(Js(!0))},[o,n,l]),(0,P.useEffect)(function(){s&&n(Bs(J({},r())))},[s,n,r])}var Tu;(function(e){e[e.Normal=0]=`Normal`,e[e.Parent=1]=`Parent`})(Tu||={});var Eu=function(e,t,n,r,i,a){a===void 0&&(a=Tu.Normal);var o=(0,P.useRef)(!1),s=a===Tu.Parent;(0,P.useEffect)(function(){e&&(!o.current||s)&&!n.submitted&&(t(Vs(r(n,e,i))),o.current=!0)},[t,e,r,i,n,s]),(0,P.useEffect)(function(){s&&!n.loaded&&(0,K.default)(function(){return t(zs())})},[t,e,s,n.loaded])};function Du(e,t,n,r){var i=n.improvementStatus,a=(0,P.useRef)(!1),o=(0,P.useRef)(!1);(0,P.useEffect)(function(){!n||!a.current||o.current||i?.flag===void 0||t.submitQuestionImprovementStatus(e,i).then(function(){o.current=!0}).catch(function(e){r(ac()),r(nc({type:ja.ImprovementFeedbackError,detail:e.message})),(0,K.default)(function(){return o.current=!1})})},[r,t,e,i,n]),(0,P.useEffect)(function(){n.loaded&&!a.current&&(a.current=!0,o.current=i?.flag!==void 0)},[i?.flag,n.loaded])}var Ou=function(e){var t=e.className,n=e.id,r=e.visible,i=e.data,a=e.events,o=e.mode,s=o===void 0?Z.Standalone:o,c=e.questionIndex,l=e.siblingQuestionCount,u=e.showQuestionIndex,d=e.status,f=e.controlledSubmit,p=e.controlledReveal,m=e.controlledReset,h=e.dontValidate,g=e.evaluator,_=e.evaluatedData,v=e.parentEvaluatedData,y=e.tutorialId,b=e.tutorialStep,x=e.hostApi,S=M(),C=function(){return _c(i)},w=function(){return J(J({},C()),{answerOrder:j,id:n})},T=(0,P.useReducer)(yc,C()),E=T[0],D=T[1],O=E.submitted,k=E.validationErrorMsg,A=E.response,j=E.answerOrder,N=E.answerCorrect,F=E.revealAnswer,I=E.revealedAnswer,L=E.feedback,R=`${n}-radio-group`,z=`${n}-radio-`,B=`${n}-error`,ee=L?S.formatMessage(L.descriptor,L.values):``;return Du(n,g,E,D),wu({controlledSubmit:f,controlledReveal:p,controlledReset:m},E,D,w),Eu(_,D,E,vc,i),Eu(v,D,E,vc,i,Tu.Parent),cc(i,n,r,E,D,C)?(lc({mode:s,id:n,tutorialId:y,tutorialStep:b,data:i,events:a,state:E,dispatch:D,evaluator:g,validation:h?void 0:{errorMessage:{descriptor:Q.validationPleaseSelectAnswer},condition:function(){return A===Ea}},buildUserAnswer:function(){var e;return e={},e[i.inputs[0].name]=A??``,e},onRevealAnswer:function(e){if(e.correct_answers){var t=Object.values(e.correct_answers)[0];t&&D(mc(t))}}}),P.createElement(Kl,J({key:n,className:t,id:n,mode:s,hostApi:x,questionIndex:c,siblingQuestionCount:l},s===Z.StandaloneInGroup&&{status:d},{controlsMode:$c.CheckAnswer,feedbackNumAnswers:1,feedbackWrongAnswersIndicated:!0,feedbackMessage:ee,feedbackPadding:Mc.Normal,errorMsgDisplayID:B,questionTypeLabel:S.formatMessage(Q.typeMultipleChoice),getResetQuestionState:w,state:E,dispatch:D,events:a,prologue:P.createElement(Su,{type:vu.Div,text:i.stem,questionIndex:u?c:void 0}),body:j.map(function(e,t){var r=i.options[Object.keys(i.options)[0]],o=Object.entries(r)[e],s=o[0],c=o[1],l=F&&I===s,u=A===s;return P.createElement(cu,{key:z+t,text:c,value:s,groupID:R,answerID:z+t,index:e,checked:u,submitted:O,disabled:O,correct:N===null&&u?null:N&&u||l,revealed:l,errorMsg:k,errorMsgDisplayID:B,onSelectAnswer:function(e){var t,r;D(pc(e)),(r=a?.onAnswerGiven)==null||r.call(a,n,!0,(t={},t[i.inputs[0].name]=e,t))}})})}))):null},ku;(function(e){e[e.TypeIn=0]=`TypeIn`,e[e.DropDown=1]=`DropDown`})(ku||={});var Au;(function(e){e[e.NotFilledIn=0]=`NotFilledIn`,e[e.SameAnswerRepeated=1]=`SameAnswerRepeated`})(Au||={});var ju=`GAP_FILL_SET_RESPONSE`,Mu=`GAP_FILL_EVALUATE`,Nu=`GAP_FILL_SET_CORRECT_ANSWERS`,Pu=function(e,t){return{type:ju,index:e,response:t}},Fu=function(e){return{type:Mu,evaluation:e}},Iu=function(e){return{type:Nu,correctAnswers:e}},Lu=function(e,t){var n;switch(t.type){case ju:var r=J({},e.gaps[t.index]);r.response=t.response;var i=Object.assign(Sa([],e.gaps,!0),(n={},n[t.index]=r,n)),a=[];return e.wordBank&&(a=i.map(function(e){return e.response}).filter(function(e){return e}).reduce(function(e,t,n,r){return t&&r.indexOf(t)!==n&&e.indexOf(t)===-1&&e.push(t),e},[])),J(J({},e),{gaps:i,responseDuplicates:e.wordBank?a:null});case Mu:return J(J({},e),{gaps:e.gaps.map(function(e){return J(J({},e),{correct:t.evaluation[e.inputVarName]})})});case Nu:return J(J({},e),{gaps:e.gaps.map(function(e){return J(J({},e),{revealedAnswer:t.correctAnswers[e.inputVarName]})})});default:return e}},Ru=/({{.*?}})/g,zu=function(e,t){var n=Na(),r=e.question_type===`TextEntry`?ku.TypeIn:ku.DropDown,i=null;e.question_type===`Matching`&&(i=e.options.map(function(e){return{value:e,text:e}}));var a=(pu(e.stem,t).match(Ru)||[]).map(function(t,n){var a={type:r,index:n,inputVarName:t.slice(2,-2).trim(),response:Ea,nextChar:e.stem.charAt(e.stem.indexOf(t)+t.length),correct:Ta,revealedAnswer:void 0};if(r===ku.DropDown){var o=e;if(i)a.options=i,a.optionsOrder=(0,ua.default)(i.length);else{var s=o.options[a.inputVarName];a.options=Object.entries(s).map(function(e){return{value:e[0],text:e[1]}});var c=a.options.length;a.optionsOrder=o.shuffle?(0,da.default)((0,ua.default)(c)):(0,ua.default)(c)}}return a}),o=i?i.length===a.length:null;return J(J({},n),{type:r,wordBank:i,wordBankNoDistractors:o,responseDuplicates:i?[]:null,gaps:a})},Bu=function(e,t){var n=e.submitted,r=e.answerCorrect,i=e.feedback,a=e.systemFeedback,o=e.improvementStatus;if(t&&(n=t.correct!==void 0,t.correct!==void 0&&(r=t.correct),t.feedback&&(i=t.feedback),t.improvementStatus&&(o=t.improvementStatus),t.answers)){var s=t.input_correctness;if(e.gaps.forEach(function(e){var n=e.inputVarName;if(e.response=t.answers?.[n]||e.response,s){var r=s?.[n];r!==void 0&&(e.correct=r)}}),s&&!r&&e.wordBank&&e.wordBankNoDistractors){var c=Object.entries(s).filter(function(e){return!e[1]}).length;a={descriptor:Q.feedbackAnswerIncorrect},i={descriptor:Q.feedbackWrongAnswersSpecific,values:{wrongCount:c}}}}return J(J({},e),{systemFeedback:a,feedback:i,improvementStatus:o,submitted:n,answerCorrect:r})},Vu=function(e,t){var n=gc(e,t);return n=Lu(n,t),n},Hu=function(){return P.createElement(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,"aria-hidden":`true`,focusable:`false`,xmlns:`http://www.w3.org/2000/svg`},P.createElement(`path`,{fill:q.red.getShade(6),d:`M8 6a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0v2zm-1 5a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0z`}))},Uu=function(){return P.createElement(`svg`,{width:`12.8`,height:`7.7`,viewBox:`0 0 14 8`,"aria-hidden":`true`,focusable:`false`,xmlns:`http://www.w3.org/2000/svg`},P.createElement(`path`,{d:`M0 1A.999.999 0 0 1 1.707.293L7 5.586 12.293.293a.999.999 0 1 1 1.414 1.414l-6 6a.999.999 0 0 1-1.414 0l-6-6A.997.997 0 0 1 0 1`}))},Wu,Gu;(function(e){e[e.Error=0]=`Error`,e[e.Correct=1]=`Correct`,e[e.InCorrect=2]=`InCorrect`,e[e.Revealed=3]=`Revealed`,e[e.DropDown=4]=`DropDown`})(Gu||={});var Ku=(Wu={},Wu[Gu.Error]=Hu,Wu[Gu.Correct]=ru,Wu[Gu.InCorrect]=nu,Wu[Gu.Revealed]=iu,Wu[Gu.DropDown]=Uu,Wu),qu=D.span.withConfig({displayName:`GapFillGapAdornment__GapAdornmentHolder`})(Yu||=Y([`
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: `,`;
  pointer-events: none;
  svg {
    `,`;
    vertical-align: middle;
    width: `,`;
    height: `,`;
  }
`],[`
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: `,`;
  pointer-events: none;
  svg {
    `,`;
    vertical-align: middle;
    width: `,`;
    height: `,`;
  }
`]),function(e){return e.insetAmount||`1.6rem`},function(e){var t=e.fillColor;return t?`fill: ${t}`:``},function(e){return e.size||``},function(e){return e.size||``}),Ju=function(e){var t=e.type,n=e.insetAmount,r=e.size,i=e.fillColor,a=Ku[t];return P.createElement(qu,{insetAmount:n,size:r,fillColor:i},P.createElement(a,null))},Yu,Xu={Container:D.span.withConfig({displayName:`TagSelectorPanel__Container`})(Qu||=Y([`
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    &:focus {
      scroll-margin: `,`;
      outline: none;
      border-radius: 4px;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff, 0 0 0 4px `,`;
    }
  `],[`
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    &:focus {
      scroll-margin: `,`;
      outline: none;
      border-radius: 4px;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff, 0 0 0 4px `,`;
    }
  `]),function(e){return e.scrollMargin},$()),InlineBox:D.span.withConfig({displayName:`TagSelectorPanel__InlineBox`})($u||=Y([`
    `,`;
    display: inline-block;
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
  `],[`
    `,`;
    display: inline-block;
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
  `]),bo),Prompt:D.span.withConfig({displayName:`TagSelectorPanel__Prompt`})(td||=Y([`
    display: inline-block;
    width: 100%;
    font-size: 1.6rem;
    position: relative;
    font-weight: 500;
    line-height: 1.75;
    margin-bottom: 8px;
    `,`
    svg {
      fill: `,`;
      vertical-align: middle;
      margin-right: 10px;
    }
  `],[`
    display: inline-block;
    width: 100%;
    font-size: 1.6rem;
    position: relative;
    font-weight: 500;
    line-height: 1.75;
    margin-bottom: 8px;
    `,`
    svg {
      fill: `,`;
      vertical-align: middle;
      margin-right: 10px;
    }
  `]),function(e){return e&&k(ed||=Y([`
        padding-right: 32px;
        box-sizing: border-box;
      `],[`
        padding-right: 32px;
        box-sizing: border-box;
      `]))},$()),TagButton:D.button.withConfig({displayName:`TagSelectorPanel__TagButton`})(rd||=Y([`
    font-size: 1.4rem;
    background-color: `,`;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    font-family: "Roboto";
    font-weight: 500;
    border-radius: 20px;
    margin-right: 6px;
    padding: 4px 12px;
    border: 1px solid rgba(0, 0, 0, 0);
    color: `,`;
    line-height: initial;
    position: relative;
    display: inline-flex;
    justify-content: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: `,`;
    pointer-events: `,`;
    `,`;
    outline: none;
    &:focus {
      border: 1px solid white;
      box-shadow: 0 0 0 2px `,`;
      outline: none;
    }
  `],[`
    font-size: 1.4rem;
    background-color: `,`;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    font-family: "Roboto";
    font-weight: 500;
    border-radius: 20px;
    margin-right: 6px;
    padding: 4px 12px;
    border: 1px solid rgba(0, 0, 0, 0);
    color: `,`;
    line-height: initial;
    position: relative;
    display: inline-flex;
    justify-content: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: `,`;
    pointer-events: `,`;
    `,`;
    outline: none;
    &:focus {
      border: 1px solid white;
      box-shadow: 0 0 0 2px `,`;
      outline: none;
    }
  `]),function(e){return e.selected?$():`#ffffff`},function(e){return e.selected?`#FFFFFF`:$()},function(e){return e.selected?`default`:`pointer`},function(e){return e.disabled&&`none`},function(e){return!e.disabled&&k(nd||=Y([`
        &:hover {
          background-color: `,`;
          color: #ffffff;
        }
      `],[`
        &:hover {
          background-color: `,`;
          color: #ffffff;
        }
      `]),$())},$()),Feedback:D.span.withConfig({displayName:`TagSelectorPanel__Feedback`})(id||=Y([`
    display: inline-block;
    width: 100%;
    margin-top: 24px;
    color: `,`;
    &:focus {
      outline: none;
      border-radius: 4px;
      box-shadow: 0 0 0 4px `,`;
    }
    scroll-margin-bottom: 20px;
  `],[`
    display: inline-block;
    width: 100%;
    margin-top: 24px;
    color: `,`;
    &:focus {
      outline: none;
      border-radius: 4px;
      box-shadow: 0 0 0 4px `,`;
    }
    scroll-margin-bottom: 20px;
  `]),q.cloud.getShade(10),$()),CloseBtn:D.button.withConfig({displayName:`TagSelectorPanel__CloseBtn`})(ad||=Y([`
    position: absolute;
    top: 11px;
    right: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: `,`;
    }
    &:focus {
      outline: none;
      box-shadow: `,` 0 0 0 2px, `,` 0 0 0 4px;
    }
  `],[`
    position: absolute;
    top: 11px;
    right: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: `,`;
    }
    &:focus {
      outline: none;
      box-shadow: `,` 0 0 0 2px, `,` 0 0 0 4px;
    }
  `]),q.cloud.getShade(3),$(),$())},Zu=P.forwardRef(function(e,t){var n=e.id,r=e.prompt,i=e.options,a=e.selectedOption,o=e.feedback,s=e.disabled,c=e.onSelect,l=e.onClose,u=e.closeBtnCaption,d=e.className,f=e.scrollMargin,p=f===void 0?`20px`:f,m=M(),h=(0,P.useState)(!1),g=h[0],_=h[1],v=(0,P.useRef)(null),y=`${n}-selector-legend`;Wo(v,{takeFocus:g&&!!v.current,temporary:!0,smoothScrollIntoView:!0});var b=function(e){(e.value??e.option!==a)&&(c(e.value??e.option),(0,K.default)(function(){_(!0)}))};return P.createElement(Xu.Container,{className:d,ref:t,scrollMargin:p,role:`group`,"aria-labelledby":y},P.createElement(Xu.InlineBox,null,P.createElement(Xu.Prompt,{"aria-hidden":!0,id:y,hasClose:!!l},P.createElement(la.QuestionCircle,null),r),l&&P.createElement(Xu.CloseBtn,{"aria-label":u||m.formatMessage(Va.close),onClick:function(){return l()}},P.createElement(la.XSmall,{color:q.cloud.getShade(9)})),i.map(function(e){var t=e.value??e.option,n=!!a&&a===t;return P.createElement(Xu.TagButton,{key:e.value,selected:n,disabled:!!s,onClick:function(){return b(e)},"aria-pressed":n},e.option)}),o&&P.createElement(Xu.Feedback,{ref:v},o)))}),Qu,$u,ed,td,nd,rd,id,ad,od=50,sd=10,cd=`gapPadder`,ld=`gapPanel`,ud={Container:D.span.withConfig({displayName:`GapFillGapSuggestions__Container`})(fd||=Y([`
    left: 0;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    position: absolute;
    font-weight: 500;
    margin-top: `,`px;
    scroll-margin: 100px;
  `],[`
    left: 0;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    position: absolute;
    font-weight: 500;
    margin-top: `,`px;
    scroll-margin: 100px;
  `]),function(e){return e.yOffset}),IconHolder:D.span.withConfig({displayName:`GapFillGapSuggestions__IconHolder`})(pd||=Y([`
    margin-right: 10px;
    svg {
      vertical-align: middle;
    }
  `],[`
    margin-right: 10px;
    svg {
      vertical-align: middle;
    }
  `])),InsertCollator:D.span.withConfig({displayName:`GapFillGapSuggestions__InsertCollator`})(md||=Y([`
    // keeps the yOffset of padder and panel the same
    white-space: nowrap;
    span > * {
      white-space: normal;
    }
  `],[`
    // keeps the yOffset of padder and panel the same
    white-space: nowrap;
    span > * {
      white-space: normal;
    }
  `])),VertPadder:D.span.withConfig({displayName:`GapFillGapSuggestions__VertPadder`})(hd||=Y([`
    display: inline-block;
    vertical-align: top;
    margin-bottom: `,`px;
    white-space: nowrap;
  `],[`
    display: inline-block;
    vertical-align: top;
    margin-bottom: `,`px;
    white-space: nowrap;
  `]),sd)},dd=function(e){var t=e.id,n=e.suggestions,r=e.onSelect,i=e.onClose,a=e.selectedSuggestion,o=e.takeFocus,s=M(),c=(0,P.useRef)(null),l=(0,P.useRef)(null),u=(0,P.useState)(0),d=u[0],f=u[1],p=(0,P.useState)(od),m=p[0],h=p[1],g=(0,P.useMemo)(function(){return n?n.map(function(e){return{option:e}}):[]},[n]),_=(0,P.useCallback)(function(){if(!c.current||!l.current)f(0),h(od);else{var e=c.current,t=e.parentElement,n=e.parentElement?.parentElement;if(!t||!n)throw Error(`Bad gap fill suggestions dom structure`);var r=Array.from(n.querySelectorAll(`.${cd}`)??[]).filter(function(n,r,i){return i.indexOf(e)>i.indexOf(n)&&t.offsetTop===n.parentElement?.offsetTop}).reduce(function(e,t){return e+(t.parentElement?.querySelector(`.${ld}`)?.offsetHeight??0)+sd},0);f(od+l.current.offsetHeight+r),h(od+r)}},[]);return Al(`resize`,_),(0,P.useEffect)(_,[c.current,l.current,_]),Wo(l,{takeFocus:o,temporary:!0}),P.createElement(ud.InsertCollator,null,P.createElement(ud.VertPadder,{className:cd,ref:c,style:{height:d+`px`}}),P.createElement(ud.Container,{yOffset:m},P.createElement(Zu,{id:t,className:ld,ref:l,prompt:s.formatMessage(Q.suggestionsPrompt,{count:g.length}),options:g,selectedOption:a,onSelect:r,onClose:i,closeBtnCaption:s.formatMessage(Q.suggestionsClose),scrollMargin:`80px`})))},fd,pd,md,hd,gd;(function(e){e[e.Typed=0]=`Typed`,e[e.Suggestion=1]=`Suggestion`})(gd||={});var _d={GapContainer:D.span.withConfig({displayName:`GapFillTypedGap__GapContainer`})(yd||=Y([`
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-top: 0;
    margin-bottom: 3px;
  `],[`
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-top: 0;
    margin-bottom: 3px;
  `])),GapInput:D.input.withConfig({displayName:`GapFillTypedGap__GapInput`})(bd||=Y([`
    width: 200px;
    `,`;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.43);
    border-radius: 3px;
    appearance: none;
    font-size: 1.6rem;
    padding: 8px 16px 9px 16px;
    box-sizing: border-box;
    font-family: inherit;
    `,`;
    &:focus {
      outline: none;
      border-color: `,`;
      box-shadow: 0 0 0 1px `,`;
    }
  `],[`
    width: 200px;
    `,`;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.43);
    border-radius: 3px;
    appearance: none;
    font-size: 1.6rem;
    padding: 8px 16px 9px 16px;
    box-sizing: border-box;
    font-family: inherit;
    `,`;
    &:focus {
      outline: none;
      border-color: `,`;
      box-shadow: 0 0 0 1px `,`;
    }
  `]),function(e){return e.gapNextChar===` `?``:`margin-right: 2px`},function(e){return e.validationError&&`border-color: ${q.red.getShade(6)};`},q.ninja.getShade(11),q.ninja.getShade(11))},vd=function(e){var t=e.response,n=e.gapIndex,r=e.validationError,i=e.errorMsgDisplayID,a=e.gapNextChar,o=e.onGapChange,s=e.id,c=e.suggestions,l=e.isFirstSuggestion,u=e.onCloseSuggestion,d=M();return P.createElement(P.default.Fragment,null,P.createElement(_d.GapContainer,null,P.createElement(_d.GapInput,{type:`text`,gapNextChar:a,validationError:r,"aria-invalid":r?!0:void 0,"aria-describedby":r?i:void 0,"aria-label":d.formatMessage(Ua.fillInTheBlankPrompt,{blankIndex:n+1}),name:s,id:s,spellCheck:`false`,autoComplete:`off`,value:t??``,onChange:function(e){o(e.currentTarget.value,n)}}),r&&P.createElement(Ju,{type:Gu.Error,size:`1.6rem`})),c&&P.createElement(dd,{id:`${s}-suggestions`,suggestions:c,takeFocus:l,selectedSuggestion:t??void 0,onSelect:function(e){return o(e,n,gd.Suggestion)},onClose:u}))},yd,bd,xd=D.span.withConfig({displayName:`GapFillGapFeedback__GapHolder`})(Ed||=Y([`
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin-top: 1px;
  margin-bottom: 4px;
`],[`
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin-top: 1px;
  margin-bottom: 4px;
`])),Sd=k(Dd||=Y([`
  `,`;
  background: `,`;
  border: 1px solid `,`;
`],[`
  `,`;
  background: `,`;
  border: 1px solid `,`;
`]),go,q.cloud.getShade(1),q.cloud.getShade(4)),Cd=D.span.withConfig({displayName:`GapFillGapFeedback__GapFeedback`})(Od||=Y([`
  `,`;
  position: relative;
  display: block;
  width: 200px;
  border-radius: 3px;
  font-weight: 400;
  font-size: 1.6rem;
  padding: 0.8rem 1.6rem;
  box-sizing: border-box;
  min-height: 2.5rem;
  line-height: normal;
  vertical-align: baseline;
  `,`;
  `,`;
`],[`
  `,`;
  position: relative;
  display: block;
  width: 200px;
  border-radius: 3px;
  font-weight: 400;
  font-size: 1.6rem;
  padding: 0.8rem 1.6rem;
  box-sizing: border-box;
  min-height: 2.5rem;
  line-height: normal;
  vertical-align: baseline;
  `,`;
  `,`;
`]),function(e){var t=e.correct,n=e.revealedAnswer,r=e.suppressed;return n?yo:r?Sd:t===!0?_o:t===!1?vo:t===null?bo:null},function(e){return e.nextChar===` `?``:`margin-right: 2px`},function(e){return e.revealedAnswer?`margin-top: 0.5rem`:``}),wd=D.span.withConfig({displayName:`GapFillGapFeedback__GapFeedbackText`})(kd||=Y([`
  display: inline-flex;
  margin-bottom: 1px;
  margin-right: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`],[`
  display: inline-flex;
  margin-bottom: 1px;
  margin-right: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`])),Td=function(e){var t=e.gap,n=t.index,r=t.type,i=t.response,a=t.nextChar,o=t.correct,s=t.revealedAnswer,c=t.options,l=e.suppressFeedback,u=M(),d=function(e){if(!e)return`\xA0`;if(r===ku.TypeIn)return e;if(c)return c.filter(function(t){return t.value===e})[0].text;throw Error(`Found Dropdown gapfill with no options`)},f=d(i)+`. `+u.formatMessage(Ua.gapNumberLabel,{blankIndex:n+1});return!l&&o!==Ta&&(f+=o?` `+u.formatMessage(Q.feedbackItemCorrectAnswer):` `+u.formatMessage(Q.feedbackItemIncorrectAnswer),s&&!o&&(f+=` `+u.formatMessage(Q.feedbackCorrectAnswerIs,{correctAnswer:d(s)})+`.`)),P.createElement(xd,null,P.createElement(P.default.Fragment,null,P.createElement(`span`,{"aria-hidden":`true`},P.createElement(Cd,{suppressed:l===!0,nextChar:a,correct:o,revealedAnswer:void 0},P.createElement(wd,null,d(i)),o!==Ta&&!l&&P.createElement(Ju,{type:o?Gu.Correct:Gu.InCorrect,size:`1.6rem`})),s&&!o&&P.createElement(Cd,{nextChar:a,correct:o,revealedAnswer:s},P.createElement(wd,null,d(s)),P.createElement(Ju,{type:Gu.Revealed,size:`1.6rem`}))),P.createElement(Ko,null,f)))},Ed,Dd,Od,kd,Ad=D.span.withConfig({displayName:`GapFillDropDownGap__GapContainer`})(Nd||=Y([`
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin-bottom: 3px;
`],[`
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin-bottom: 3px;
`])),jd=D.select.withConfig({displayName:`GapFillDropDownGap__GapSelect`})(Pd||=Y([`
  appearance: none;
  padding: 8px 16px 9px 16px;
  width: 200px;
  font-size: 1.6rem;
  font-family: inherit;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.43);
  `,`;
  `,`;
  `,`;
  &:focus {
    outline: none;
    border-color: `,`;
    box-shadow: 0 0 0 1px `,`;
  }
`],[`
  appearance: none;
  padding: 8px 16px 9px 16px;
  width: 200px;
  font-size: 1.6rem;
  font-family: inherit;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.43);
  `,`;
  `,`;
  `,`;
  &:focus {
    outline: none;
    border-color: `,`;
    box-shadow: 0 0 0 1px `,`;
  }
`]),function(e){return e.gapNextChar===` `?``:`margin-right: 2px;`},function(e){return e.validationError&&`border-color: ${q.red.getShade(6)};`},function(e){return e.response?``:`color: ${q.cloud.getShade(6)};`},q.ninja.getShade(11),q.ninja.getShade(11)),Md=C(function(e){var t=e.response,n=e.gapIndex,r=e.validationError,i=e.errorMsgDisplayID,a=e.gapNextChar,o=e.options,s=e.optionsOrder,c=e.onGapChange,l=e.id,u=e.theme,d=M();return P.createElement(Ad,null,P.createElement(jd,{response:t,placeholder:d.formatMessage(Q.controlsSelectPlaceHolder),gapNextChar:a,validationError:r,"aria-invalid":r?!0:void 0,"aria-describedby":r?i:void 0,"aria-label":d.formatMessage(Ua.fillInTheBlankPrompt,{blankIndex:n+1}),name:`name`,id:l,spellCheck:`false`,autoComplete:`off`,value:t??``,onChange:function(e){c(e.currentTarget.value,n)}},P.createElement(`option`,{disabled:!0,value:``},d.formatMessage(Q.controlsSelectPlaceHolder)),s.map(function(e,t){return P.createElement(`option`,{key:t,value:o[e].value},o[e].text)})),P.createElement(Ju,{type:Gu.DropDown,fillColor:r?q.red.getShade(6):ho(u)}),r&&P.createElement(Ju,{type:Gu.Error,insetAmount:`4.5rem`,size:`1.6rem`}))}),Nd,Pd,Fd=D.div.withConfig({displayName:`GapFillWordBank__WordBankBox`})(Rd||=Y([`
  background-color: `,`;
  border-radius: 4px;
  text-align: left;
  margin: 0 16px 16px;
  padding: 14px 16px;
  line-height: 2;
`],[`
  background-color: `,`;
  border-radius: 4px;
  text-align: left;
  margin: 0 16px 16px;
  padding: 14px 16px;
  line-height: 2;
`]),q.frost.getShade(1)),Id=D.div.withConfig({displayName:`GapFillWordBank__WordBankWord`})(zd||=Y([`
  display: inline-block;
  background: `,`;
  border: 1px solid `,`;
  border-radius: 16px;
  margin: 0 8px 8px;
  padding: 4px 12px;
  line-height: normal;
  font-weight: 400;
  font-size: 1.4rem;
  `,`;
`],[`
  display: inline-block;
  background: `,`;
  border: 1px solid `,`;
  border-radius: 16px;
  margin: 0 8px 8px;
  padding: 4px 12px;
  line-height: normal;
  font-weight: 400;
  font-size: 1.4rem;
  `,`;
`]),q.cloud.getShade(1),q.cloud.getShade(4),function(e){return e.spent?`opacity: 0.4`:``}),Ld=function(e){var t=e.wordBank,n=e.gaps;return P.createElement(Fd,null,P.createElement(Ko,null,P.createElement(_,J({},Ua.wordBankHeaderLabel))),t.map(function(e){var t=!!n.find(function(t){return t.response===e.value});return P.createElement(Id,{spent:t,key:e.text},e.text,t&&P.createElement(Ko,null,`. `,P.createElement(_,J({},Ua.wordBankWordSpent))))}),P.createElement(Ko,null,P.createElement(_,J({},Ua.wordBankFooterLabel))))},Rd,zd,Bd=function(e){var t=e.className,n=e.id,r=e.visible,i=e.data,a=e.mode,o=a===void 0?Z.Standalone:a,s=e.questionIndex,c=e.siblingQuestionCount,l=e.showQuestionIndex,u=e.status,d=e.events,f=e.context,p=e.controlledSubmit,m=e.controlledReveal,h=e.controlledReset,g=e.dontValidate,_=e.evaluator,v=e.evaluatedData,y=e.parentEvaluatedData,b=e.tutorialId,x=e.tutorialStep,S=e.hostApi,C=M(),w=function(){return zu(i,f)},T=function(){return J(J({},w()),{id:n})},E=(0,P.useReducer)(Vu,w()),D=E[0],O=E[1],k=D.type,A=D.submitRequested,j=D.submitted,N=D.validationErrorMsg,F=D.validationErrorCode,I=D.answerCorrect,L=D.revealAnswer,R=D.wordBank,z=D.wordBankNoDistractors,B=D.gaps,ee=D.responseDuplicates,te=D.feedback,ne=D.answerSuggestions,re=D.answerSuggestionsControls,ie=`${n}-error`,ae=F===Au.NotFilledIn,oe=F===Au.SameAnswerRepeated,se=te?C.formatMessage(te.descriptor,te.values):``;if(Du(n,_,D,O),wu({controlledSubmit:p,controlledReveal:m,controlledReset:h},D,O,T),Eu(v,O,D,Bu,i),Eu(y,O,D,Bu,i,Tu.Parent),!cc(i,n,r,D,O,w))return null;var V=function(){return Object.fromEntries(B.map(function(e){return[e.inputVarName,e.response??``]}))};lc({mode:o,id:n,tutorialId:b,tutorialStep:x,data:i,events:d,state:D,dispatch:O,evaluator:_,preprocessing:function(){var e=!1;if(A&&k===ku.TypeIn)for(var t=0,n=B;t<n.length;t++){var r=n[t];if(r.response){var i=r.response.trim().replace(/  +/g,` `);r.response!==i&&(O(Pu(r.index,i)),e=!0)}}return e},validation:g?void 0:[{errorMessage:{descriptor:Ua.validationNotFilledIn},errorCode:Au.NotFilledIn,condition:function(){return B.some(function(e){return!e.response})}},{errorMessage:{descriptor:Ua.validationSameAnswerRepeated},errorCode:Au.SameAnswerRepeated,condition:function(){return!!R&&!!ee&&ee.length>0}}],buildUserAnswer:V,onEvaluate:function(e){var t=e.correct,n;if(!t&&t!==null&&R&&z){var r=Object.entries(e.input_correctness).filter(function(e){return!e[1]}).length;n={descriptor:Q.feedbackAnswerIncorrect},O(Zs({descriptor:Q.feedbackWrongAnswersSpecific,values:{wrongCount:r}},n))}O(Fu(e.input_correctness))},onRevealAnswer:function(e){e.correct_answers&&O(Iu(e.correct_answers))}});var H=0,ce=pu(i.stem,f),le;return P.createElement(Kl,J({className:t,id:n,mode:o,hostApi:S,questionIndex:s,siblingQuestionCount:c},o===Z.StandaloneInGroup&&{status:u},{controlsMode:$c.CheckAnswer,feedbackMessage:o===Z.Child?void 0:se,feedbackNumAnswers:B.length,feedbackWrongAnswersIndicated:!(R&&z),getResetQuestionState:T,errorMsgDisplayID:ie,questionTypeLabel:C.formatMessage(Q.typeGapFill),state:D,dispatch:O,events:d,isGapFill:!0,fixedPrologue:!0,prologue:R?P.createElement(Ld,{wordBank:R,gaps:B}):void 0,body:P.createElement(Su,{type:vu.Div,isGapFill:!0},(0,ga.default)(mu(ce.replace(Ru,`<gap></gap>`),s!==void 0&&l?`<span>${s+1}. </span>`:``),{replace:function(e){if(e.name===`gap`){var t=H++,r=B[t],i=ne?.[r.inputVarName];return i&&!le&&(le=r.inputVarName),i&&re&&re[r.inputVarName].dismissed&&(i=void 0),j?P.createElement(Td,{gap:r,suppressFeedback:I===!1&&!L&&!!R&&!!z&&o!==Z.Child}):k===ku.TypeIn?P.createElement(vd,{id:`${n}-gap-${t}`,gapIndex:t,response:r.response,gapNextChar:r.nextChar,validationError:!!N&&!r.response,errorMsgDisplayID:ie,onGapChange:function(e,t,r){var i;O(Pu(t,e)),r===gd.Suggestion&&O(Qs(C.formatMessage(Q.suggestionsSelectedA11y,{index:t+1,value:e})));var a=V();a[B[t].inputVarName]=e,(i=d?.onAnswerGiven)==null||i.call(d,n,Vd(B,e,t),a,{debounce:!0})},isFirstSuggestion:!!le&&le===r.inputVarName,suggestions:i,onCloseSuggestion:function(){O(sc(r.inputVarName)),(0,K.default)(function(){return window.dispatchEvent(new Event(`resize`))})}}):P.createElement(Md,{id:`${n}-gap-${t}`,gapIndex:t,response:r.response,gapNextChar:r.nextChar,validationError:ae&&!r.response||oe&&r.response!==Ea&&ee?.indexOf(r.response)!==-1,errorMsgDisplayID:ie,options:r.options??[],optionsOrder:r.optionsOrder??[],onGapChange:function(e,t){var r;O(Pu(t,e));var i=V();i[B[t].inputVarName]=e,(r=d?.onAnswerGiven)==null||r.call(d,n,Vd(B,e,t),i)}})}}}))}))},Vd=function(e,t,n){var r=e.map(function(e){return e.response});return r[n]=t,r.every(function(e){return e&&e.trim().length>0})},Hd=function(e){return P.createElement(Bd,J({},e))},Ud=`SUBMIT_COMPARE_SET_RESPONSE`,Wd=`SUBMIT_COMPARE_SHOW_SELF_ASSESSMENT`,Gd=`SUBMIT_COMPARE_SET_SELF_ASSESSMENT`,Kd=function(e){return{type:Ud,response:e}},qd=function(e){return{type:Wd,showSelfAssessment:e}},Jd=function(e){return{type:Gd,selfAssessment:e}},Yd=function(e,t){switch(t.type){case Ud:return J(J({},e),{response:t.response});case Wd:return J(J({},e),{showSelfAssessment:t.showSelfAssessment});case Gd:return J(J({},e),{selfAssessment:t.selfAssessment});default:return e}},Xd=function(){var e=Na();return J(J({},e),{response:Ea,selfAssessment:void 0,showSelfAssessment:!1})},Zd=function(e,t,n){var r=e.submitted,i=e.response,a=e.feedback,o=e.selfAssessment,s=e.showSelfAssessment,c=e.improvementStatus,l=e.answerCorrect;if(t){if(t.answers){var u=Object.keys(t.answers)[0],d=t.answers[u];d&&(i=d),r=!0;var f=n.inputs.filter(function(e){return e.type===`yes_no`}),p=f.length&&t.answers[f[0].name];p&&(o=p,s=!0)}t.feedback&&(a=t.feedback),t.improvementStatus&&(c=t.improvementStatus),l=t.correct}return J(J({},e),{feedback:a,improvementStatus:c,submitted:r,response:i,selfAssessment:o,showSelfAssessment:s,answerCorrect:l})},Qd=function(e,t){var n=gc(e,t);return n=Yd(n,t),n},$d={Container:D.div.withConfig({displayName:`SelfAssessment__Container`})(tf||=Y([`
    margin: 16px;
  `],[`
    margin: 16px;
  `]))},ef=function(e){var t=e.id,n=e.prompt,r=e.choices,i=e.selectedChoice,a=e.feedback,o=e.disabled,s=e.onAssessment;return P.createElement($d.Container,null,P.createElement(Zu,{id:t,prompt:n,options:r,disabled:o,onSelect:function(e){return s(e)},feedback:a,selectedOption:i}))},tf,nf=D.textarea.withConfig({displayName:`InputBox__StyledInputBox`})(sf||=Y([`
  display: block;
  width: 100%;
  padding: 10px 16px;
  margin-top: 8px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.43);
  border-radius: 3px;
  height: 194px;
  line-height: 1.5;
  resize: none;
  box-sizing: border-box;
  color: `,`;
  font-size: 1.6rem;
  font-family: inherit;
  &:focus {
    border: 1px solid `,`;
    box-shadow: 0 0 0 1px `,`;
    outline: none;
  }
  ::placeholder {
    font-weight: 300;
    color: rgba(0, 0, 0, 0.57);
  }
  `,`;
`],[`
  display: block;
  width: 100%;
  padding: 10px 16px;
  margin-top: 8px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.43);
  border-radius: 3px;
  height: 194px;
  line-height: 1.5;
  resize: none;
  box-sizing: border-box;
  color: `,`;
  font-size: 1.6rem;
  font-family: inherit;
  &:focus {
    border: 1px solid `,`;
    box-shadow: 0 0 0 1px `,`;
    outline: none;
  }
  ::placeholder {
    font-weight: 300;
    color: rgba(0, 0, 0, 0.57);
  }
  `,`;
`]),q.cloud.getShade(10),q.cloud.getShade(10),q.cloud.getShade(10),function(e){var t=e.submitted,n=e.disabled;return(t||n)&&k(of||=Y([`
      background: `,`;
      border: 1px solid rgba(0, 0, 0, 0.43);
    `],[`
      background: `,`;
      border: 1px solid rgba(0, 0, 0, 0.43);
    `]),q.cloud.getShade(2))}),rf=D.fieldset.withConfig({displayName:`InputBox__StyledFieldset`})(cf||=Y([`
  border: none;
  padding-left: 0;
  margin-top: 16px;
  > legend {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`],[`
  border: none;
  padding-left: 0;
  margin-top: 16px;
  > legend {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`])),af=(0,P.forwardRef)(function(e,t){var n=M();return P.createElement(rf,null,P.createElement(`legend`,null,n.formatMessage(Q.controlsTypedLabel)),P.createElement(nf,J({ref:t},e)))}),of,sf,cf,lf=2e3,uf=function(e){var t=e.className,n=e.id,r=e.visible,i=e.data,a=e.context,o=e.events,s=e.mode,c=s===void 0?Z.Standalone:s,l=e.questionIndex,u=e.siblingQuestionCount,d=e.status,f=e.controlledSubmit,p=e.controlledReveal,m=e.controlledReset,h=e.evaluator,g=e.evaluatedData,_=e.parentEvaluatedData,v=e.tutorialId,y=e.tutorialStep,b=e.hostApi,x=M(),S=function(){return Xd()},C=(0,P.useReducer)(Qd,S()),w=C[0],T=C[1],E=w.submitRequested,D=w.submitted,O=w.response,k=w.showSelfAssessment,A=w.selfAssessment,j=w.validationErrorMsg,N=w.feedback,F=w.answerCorrect,I=i.question_type===`SelfGradedSubmitAndCompare`,L=N?x.formatMessage(N.descriptor,N.values):``;Du(n,h,w,T),wu({controlledSubmit:f,controlledReveal:p,controlledReset:m},w,T,S,I&&k),(0,P.useEffect)(function(){if(D&&I&&!k){var e=setTimeout(function(){T(Qs(x.formatMessage(Ha.selfAssessmentAnnouncement))),T(qd(!0))},lf);return function(){clearTimeout(e)}}},[D,k,I,x]);var R=`${n}-input`,z=`${n}-error`,B=`${n}-self-assessment`;return Eu(g,T,w,Zd,i),Eu(_,T,w,Zd,i,Tu.Parent),cc(i,n,r,w,T,S)?(E&&O&&T(Kd(O.trim())),lc({mode:c,id:n,tutorialId:v,tutorialStep:y,data:i,events:o,state:w,dispatch:T,dontEval:I&&!A,evaluator:h,validation:{errorMessage:{descriptor:Q.validationTypeAnAnswer},condition:function(){return!O?.trim().length}},buildUserAnswer:function(){var e,t,n=i.inputs.filter(function(e){return e.type===`line`||e.type===`box`})?.[0],r=i.inputs.filter(function(e){return e.type===`yes_no`})?.[0];return J(J({},n?.name&&(e={},e[n.name]=O??``,e)),r?.name&&(t={},t[r.name]=A?A.toLowerCase():``,t))}}),P.createElement(Kl,J({className:t,id:n,mode:c,hostApi:b,questionIndex:l,siblingQuestionCount:u},c===Z.StandaloneInGroup&&{status:d},{controlsVisible:!I||!(D&&!A),secondaryControlsVisible:!1,tutorRequestedVisible:!I||!!A&&F!==void 0,secondaryControlsAfterEpilogue:I,controlsMode:$c.SubmitAnswer,feedbackNumAnswers:1,feedbackWrongAnswersIndicated:!0,feedbackMessage:I?i.model_answer:L,systemFeedbackMessage:I?x.formatMessage(Ha.compareWithExpert):x.formatMessage(Ha.answerSaved),feedbackNeutral:I,errorMsgDisplayID:z,questionTypeLabel:x.formatMessage(Q.typeSubmitCompare),getResetQuestionState:S,state:w,dispatch:T,events:o,prologue:P.createElement(Su,{type:vu.Label,labelForId:R,text:pu(i.stem,a)}),body:P.createElement(af,{id:R,value:O??``,disabled:D,spellCheck:`false`,autoComplete:`off`,"aria-invalid":j?!0:void 0,"aria-describedby":j?z:void 0,placeholder:x.formatMessage(Q.controlsTypedPlaceHolder),submitted:D,onChange:function(e){T(Kd(e.currentTarget.value))}}),epilogue:D&&k?P.createElement(ef,{id:B,prompt:i.grading_prompt,selectedChoice:A,choices:[{option:`Yes`,value:`yes`},{option:`No`,value:`no`}],onAssessment:function(e){T(Jd(e)),T(Hs(!0))},feedback:L,disabled:!!A}):void 0}))):null},df=`ENHANCED_SET_RESPONSE`,ff=function(e){return{type:df,response:e}},pf=function(e,t){switch(t.type){case df:return J(J({},e),{response:t.response});default:return e}},mf=function(){var e=Na();return J(J({},e),{response:Ea})},hf=function(e,t){var n=e.submitted,r=e.response,i=e.feedback;if(t){if(t.answers){var a=Object.keys(t.answers)[0],o=t.answers[a];o&&(r=o),n=!0}t.feedback&&(i=t.feedback)}return J(J({},e),{feedback:i,submitted:n,response:r})},gf=function(e,t){var n=gc(e,t);return n=pf(n,t),n},_f={MultipleChoice:Ou,TextEntry:Hd,Pulldown:Hd,FreeResponse:uf,SelfGradedSubmitAndCompare:uf,Matching:Hd,ChatFreeResponse:function(e){var t=e.className,n=e.id,r=e.visible,i=e.data,a=e.context,o=e.events,s=e.mode,c=s===void 0?Z.Standalone:s,l=e.questionIndex,u=e.siblingQuestionCount,d=e.status,f=e.controlledSubmit,p=e.controlledReveal,m=e.controlledReset,h=e.evaluator,g=e.evaluatedData,_=e.parentEvaluatedData,v=e.tutorialId,y=e.tutorialStep,b=e.hostApi,x=M(),S=function(){return mf()},C=(0,P.useReducer)(gf,S()),w=C[0],T=C[1],E=w.submitRequested,D=w.submitted,O=w.response,k=w.validationErrorMsg,A=w.feedback,j=w.focusQuestionStart,N=(0,P.useRef)(null),F=A?x.formatMessage(A.descriptor,A.values):``;Du(n,h,w,T),wu({controlledSubmit:f,controlledReveal:p,controlledReset:m},w,T,S,!1);var I=`${n}-input`,L=`${n}-error`;if(Eu(g,T,w,hf,i),Eu(_,T,w,hf,i,Tu.Parent),(0,P.useEffect)(function(){var e;j===!0&&((e=N?.current)==null||e.focus())},[j]),!cc(i,n,r,w,T,S))return null;E&&O&&T(ff(O.trim()));var R=function(){var e,t=i.inputs.filter(function(e){return e.type===`line`||e.type===`box`})?.[0];return J({},t?.name&&(e={},e[t.name]=O??``,e))},z=pu(i.stem,a),B=`${Object.values(R())[0]||``} 
 - 
 ${F}`;return lc({mode:c,id:n,tutorialId:v,tutorialStep:y,data:i,events:o,state:w,dispatch:T,dontEval:!1,evaluator:h,validation:{errorMessage:{descriptor:Q.validationTypeAnAnswer},condition:function(){return!O?.trim().length}},buildUserAnswer:R}),P.createElement(Kl,J({enhanced:!0,hostApi:b,flashcardData:{front:z,back:B},submitButtonLabel:i.chat_request_button_label,className:t,id:n,mode:c,questionIndex:l,siblingQuestionCount:u},c===Z.StandaloneInGroup&&{status:d},{controlsVisible:!0,secondaryControlsVisible:!0,controlsMode:$c.DynamicLabel,feedbackNumAnswers:1,feedbackWrongAnswersIndicated:!0,feedbackMessage:F,feedbackNeutral:!1,errorMsgDisplayID:L,questionTypeLabel:x.formatMessage(Q.typeSubmitCompare),getResetQuestionState:S,state:w,dispatch:T,events:o,prologue:P.createElement(Su,{type:vu.Label,labelForId:I,text:z}),body:function(e){return P.createElement(af,{id:I,ref:N,value:O??``,disabled:D||e,spellCheck:`false`,autoComplete:`off`,"aria-invalid":k?!0:void 0,"aria-describedby":k?L:void 0,placeholder:x.formatMessage(Q.controlsTypedPlaceHolder),submitted:D,onChange:function(e){T(ff(e.currentTarget.value))}})}}))},YesNo:null,HotText:null,MultipleChoiceMultipleSelect:null},vf=function(e,t){switch(t.type){case`QUESTION_GROUP_SET_ITEM_INDEX`:return J(J({},e),{itemIndex:t.itemIndex});case`QUESTION_GROUP_ANSWER_GIVEN_ITEM`:var n=e.itemStates[t.id];if(n.answerGiven!==t.answerGiven||!(0,_a.default)(n.userAnswer,t.userAnswer)){var r=J({},e.itemStates);return r[t.id].answerGiven=t.answerGiven,r[t.id].userAnswer=t.userAnswer,J(J({},e),{itemStates:r})}return e;case`QUESTION_GROUP_SUBMIT_ITEM`:var r=J({},e.itemStates);return r[t.id].correct=t.correct,r[t.id].inputVars=t.inputVars,J(J({},e),{itemStates:r});case`QUESTION_GROUP_RESET_ITEM`:var r=J({},e.itemStates);return r[t.id].correct=void 0,r[t.id].inputVars={},J(J({},e),{itemStates:r});case`QUESTION_GROUP_SUBMIT_REQUESTED`:return J(J({},e),{submitRequested:t.submitRequested});case`QUESTION_GROUP_SUBMITTED`:return J(J({},e),{submitted:t.submitted,submitRequested:!1});case`QUESTION_GROUP_EVALUATED`:return J(J({},e),{result:t.result.assessment??null,questionEvaluations:Object.keys(t.result.questions).reduce(function(n,r){return n[r]=t.result.questions[r],n[r].answers=e.itemStates[r].userAnswer,n},{}),itemStates:Object.keys(t.result.questions).reduce(function(n,r){return n[r]=J(J({},e.itemStates[r]),{correct:t.result.questions[r].correct}),n},{})});case`QUESTION_GROUP_ANSWER_REVEALED`:return J(J({},e),{answerRevealed:t.answerRevealed});case`QUESTION_GROUP_RESET`:return t.reset===!1?J(J({},e),{reset:!1}):J(J({},t.reset),{reset:!0,answerRevealed:!1,submitted:!1,result:null,questionEvaluations:void 0});case`QUESTION_GROUP_LOCK`:return e.locked?e:J(J({},e),{locked:!0});case`QUESTION_GROUP_UNLOCK`:return e.locked?J(J({},e),{locked:!1,lockedReason:void 0}):e;case`QUESTION_GROUP_SYSTEM_ERROR`:return J(J({},e),{systemError:t.error});case`QUESTION_GROUP_CLEAR_SYSTEM_ERROR`:return J(J({},e),{systemError:void 0});case`QUESTION_GROUP_SEND_ARIA_LIVE_MESSAGE`:return J(J({},e),{ariaLiveMessage:t.message,ariaLiveMode:t.mode});default:return e}},yf;(function(e){e.Waiting=`Waiting`})(yf||={});var bf=function(e,t,n){var r={itemStates:e.reduce(function(e,n){var r=ep(n),i=t?.questions[r];return e[r]=Qf(n)?Cf(n,t):i&&i.answers?{correct:i.correct,inputVars:i.answers,answerGiven:!0,userAnswer:i.answers}:{correct:!t?.assessment&&void 0,inputVars:{},answerGiven:!1,userAnswer:{}},e},{}),itemIndex:n??0,submitted:!1,submitRequested:!1,result:null,answerRevealed:!1,reset:!1,locked:!1};return typeof t?.assessment?.score==`number`&&(r.submitted=!0,r.result=t.assessment),r},xf=function(e,t){return vf(e,t)},Sf=function(e,t,n){if(e.question&&(t.push({id:e.question.id,depth:n}),e.followup))for(var r=0,i=e.followup;r<i.length;r++){var a=i[r];a.step&&Sf(a.step,t,n+1)}},Cf=function(e,t){if(t){var n=[];Sf(e.step,n,0),n=n.reverse();for(var r=0,i=n;r<i.length;r++){var a=i[r],o=t?.questions[a.id];if(o&&o.answers)return{correct:o.correct,inputVars:o.answers,answerGiven:!0,userAnswer:o.answers}}return{correct:void 0,inputVars:{},answerGiven:!1,userAnswer:{}}}return{correct:void 0,inputVars:{},answerGiven:!1,userAnswer:{}}},wf=`QUESTION_GROUP_SET_ITEM_INDEX`,Tf=`QUESTION_GROUP_ANSWER_GIVEN_ITEM`,Ef=`QUESTION_GROUP_SUBMIT_ITEM`,Df=`QUESTION_GROUP_RESET_ITEM`,Of=`QUESTION_GROUP_SUBMIT_REQUESTED`,kf=`QUESTION_GROUP_SUBMITTED`,Af=`QUESTION_GROUP_EVALUATED`,jf=`QUESTION_GROUP_ANSWER_REVEALED`,Mf=`QUESTION_GROUP_RESET`,Nf=`QUESTION_GROUP_LOCK`,Pf=`QUESTION_GROUP_UNLOCK`,Ff=`QUESTION_GROUP_SYSTEM_ERROR`,If=`QUESTION_GROUP_CLEAR_SYSTEM_ERROR`,Lf=`QUESTION_GROUP_SEND_ARIA_LIVE_MESSAGE`,Rf=function(e){return{type:wf,itemIndex:e}},zf=function(e,t,n){return{type:Tf,id:e,answerGiven:t,userAnswer:n}},Bf=function(e,t,n){return{type:Ef,id:e,correct:t,inputVars:n}},Vf=function(e){return{type:Df,id:e}},Hf=function(e){return{type:Of,submitRequested:e}},Uf=function(e){return{type:kf,submitted:e}},Wf=function(e){return{type:Af,result:e}},Gf=function(e){return{type:jf,answerRevealed:e}},Kf=function(e){return{type:Mf,reset:e}},qf=function(e){return{type:Nf,lockedReason:e}},Jf=function(){return{type:Pf}},Yf=function(e){return{type:Ff,error:e}},Xf=function(){return{type:If}},Zf=function(e,t){return t===void 0&&(t=ds.Polite),{type:Lf,message:e,mode:t}},Qf=function(e){return e.object_type===`Tutorial`&&!!e.step.question},$f=function(e){return!!e.question_type},ep=function(e){if($f(e)||Qf(e))return e.id;throw Error(`Cannot determine id for a question like object`)},tp=P.createContext(null),np=function(e){var t=e.groupId,n=e.questions,r=e.questionIndex,i=e.questionIndexToken,a=e.children,o=e.evaluator,s=e.evaluatedData,c=e.hostApi,l=e.bookLocation,u=(0,P.useReducer)(xf,bf(n,s,r)),d=u[0],f=u[1],p=(0,P.useRef)(i);(0,P.useEffect)(function(){i!=null&&i!==p.current&&f(Rf(r??0)),p.current=i},[r,i]);var m=(0,P.useMemo)(function(){return{groupId:t,state:d,dispatch:f,questions:n,evaluator:o,evaluatedData:s,hostApi:c,bookLocation:l}},[t,d,n,o,s,c,l]);return P.createElement(tp.Provider,{value:m},a)},rp=function(){var e=(0,P.useContext)(tp);if(!e)throw Error(`Found missing question group context in question group`);var t=e.state,n=e.dispatch,r=e.questions,i=e.evaluator,a=e.evaluatedData,o=e.hostApi,s=e.groupId,c=e.bookLocation,l=t.itemIndex,u=t.itemStates,d=t.submitRequested,f=t.submitted,p=t.result,m=t.questionEvaluations,h=t.answerRevealed,g=t.reset,_=t.locked,v=t.systemError,y=t.ariaLiveMessage,b=t.ariaLiveMode,x=function(e){n(Rf(e))},S=function(e,t,r){n(zf(e,t,r))},C=function(e,t,r){n(Bf(e,t,r))},w=function(e){n(Vf(e))},T=function(e){n(Hf(e))},E=function(e){n(Uf(e))},D=function(e){n(Wf(e))},O=function(e){n(Gf(e))},k=function(e){n(Kf(e?bf(r):!1))},A=function(e){n(qf(e))},j=function(){n(Jf())},M=function(e){n(Yf(e))},N=function(){n(Xf())},F=function(e,t){t===void 0&&(t=ds.Polite),n(Zf(e,t))},I=function(){n(Zf(``))};(0,P.useEffect)(function(){v&&(0,K.default)(function(){return n(Xf())})});var L=uc(u[ep(r[l])].correct),R=p?p.correct_questions:0,z=p?p.incorrect_questions:0,B=0;r.forEach(function(e){u[ep(e)].answerGiven&&B++});var ee=r.length-B,te=r.length,ne=te-B,re=B===te;return{groupId:s,bookLocation:c,questions:r,evaluator:i,itemIndex:l,setItemIndex:x,submitItem:C,resetItem:w,itemStates:u,currentItemStatus:L,setSubmitRequested:T,submitRequested:d,submitted:f,setSubmitted:E,result:p,setEvaluatedResult:D,questionEvaluations:m,answerRevealed:h,setAnswerRevealed:O,reset:g,setReset:k,totalCorrect:R,totalIncorrect:z,totalIncomplete:ee,scorePercent:p?p.percent_correct:0,numQuestions:te,incorrectlyAnsweredQuestions:r.filter(function(e){var t=u[ep(e)];return f&&(t.correct===!1||!t.answerGiven)}).map(function(e){return e.id}),setItemAnswerGiven:S,totalAnswersGiven:B,allQuestionsAreAnswered:re,someQuestionsAreUnanswered:!re,totalQuestionsUnanswered:ne,evaluatedData:a,locked:_,setLocked:A,setUnlocked:j,systemError:v,notifySystemError:M,clearNotifySystemError:N,hostApi:o,ariaLiveMessage:y,ariaLiveMode:b,sendAriaLiveMessage:F,clearAriaLiveMessage:I}},ip;(function(e){e[e.OKCancel=0]=`OKCancel`,e[e.ContinueCancel=1]=`ContinueCancel`})(ip||={});var ap;(function(e){e[e.Cancel=0]=`Cancel`,e[e.OK=1]=`OK`,e[e.Continue=2]=`Continue`})(ap||={});var op={MessageContent:D.div.withConfig({displayName:`MessageBox__MessageContent`})(cp||=Y([``],[``]))},sp=function(e){var t=M(),n=e.open,r=e.title,i=e.message,a=e.onRequestClose,o=e.size,s=o===void 0?`small`:o,c=e.requireInteraction,l=c===void 0||c,u=``,d=``,f,p;switch(e.type){case ip.OKCancel:u=t.formatMessage(Va.ok),d=t.formatMessage(Va.cancel),f=function(){return e.onResponse(ap.OK)},p=function(){return e.onResponse(ap.Cancel)};break;case ip.ContinueCancel:u=t.formatMessage(Va.continue),d=t.formatMessage(Va.cancel),f=function(){return e.onResponse(ap.Continue)},p=function(){return e.onResponse(ap.Cancel)}}var m=function(){return setTimeout(function(){return a()},1)};return P.createElement(ca.Dialog,{open:n,requireInteraction:l,primaryActionButton:{label:u,onClick:function(){f(),m()}},secondaryActionButton:{label:d,onClick:function(){p(),m()}},onRequestClose:m,size:s,title:r},P.createElement(op.MessageContent,null,i))},cp,lp;(function(e){e.Waiting=`Waiting`})(lp||={});var up;(function(e){e.ImprovementFeedbackError=`ImprovementFeedbackError`})(up||={});var dp=`TUTORIAL_LOADED`,fp=`TUTORIAL_STEP_SUBMITTED`,pp=`TUTORIAL_STEP_EVALUATING`,mp=`TUTORIAL_STEP_COMPLETE`,hp=`TUTORIAL_STEP_SUBMIT_PREP`,gp=`TUTORIAL_REGISTER_ANSWER`,_p=`TUTORIAL_STEP_RESET`,vp=`TUTORIAL_EXECUTE_PENDING_STEP`,yp=`TUTORIAL_SYSTEM_ERROR`,bp=`TUTORIAL_CLEAR_SYSTEM_ERROR`,xp=`TUTORIAL_SET_IMPROVEMENT_STATUS`,Sp=`TUTORIAL_CLEAR_IMPROVEMENT_STATUS`,Cp=`TUTORIAL_REMEMBER_FLASHCARD_CREATED`,wp=`TUTORIAL_LOCK`,Tp=`TUTORIAL_UNLOCK`,Ep=function(){return{type:dp}},Dp=function(e){return{type:fp,stepSubmitted:e}},Op=function(e){return{type:pp,stepEvaluating:e}},kp=function(e){return{type:mp,stepComplete:e}},Ap=function(e){return{type:hp,stepSubmitPrep:e}},jp=function(e,t){return{type:gp,id:e,record:t}},Mp=function(e){return{type:_p,stepReset:e}},Np=function(){return{type:vp}},Pp=function(e){return{type:yp,systemError:e}},Fp=function(){return{type:bp}},Ip=function(e){return{type:xp,improvementStatus:e}},Lp=function(){return{type:Sp}},Rp=function(){return{type:Cp}},zp=function(e){return{type:wp,lockedReason:e}},Bp=function(){return{type:Tp}},Vp=function(e,t){var n;switch(t.type){case dp:return e.loaded?e:J(J({},e),{loaded:!0});case fp:return J(J({},e),{stepSubmitted:t.stepSubmitted});case pp:return J(J({},e),{stepEvaluating:t.stepEvaluating});case gp:var r=t.record,i=e.steps[e.steps.length-1],a={correct:r.correct,followupId:r.followupId,inputVars:r.inputVars},o=J(J({},e.context),{previousAnswers:J(J({},e.context.previousAnswers),(n={},n[i.identifier]=a,n))}),s=Wp(i,r.followupId),c=!s&&r.correct===!1,l=!s?.followup,u=!!(s?.flashcard||s?.notes);return J(J({},e),{context:o,stepPending:s??void 0,stepUserMustRetry:c,stepCorrect:r.correct,tutorialComplete:!s&&r.correct!==!1,autoContinue:l&&u});case mp:return J(J({},e),{stepComplete:t.stepComplete});case hp:return J(J({},e),{stepSubmitPrep:t.stepSubmitPrep});case _p:return t.stepReset?J(J({},e),{stepReset:!0,stepSubmitted:!1,stepEvaluating:!1,stepComplete:!1,stepCorrect:void 0,stepSubmitPrep:!1,tutorialComplete:!1}):J(J({},e),{stepReset:!1});case vp:if(!e.stepPending)throw`Tutorial executed a pending step that wasn't defined`;return J(J({},e),{steps:Sa(Sa([],e.steps,!0),[e.stepPending],!1),stepPending:void 0,stepSubmitted:!1,stepEvaluating:!1,stepComplete:!1,stepSubmitPrep:!1,stepCorrect:void 0,tutorialComplete:!e.stepPending.followup&&!e.stepPending?.question,autoContinue:!1});case yp:return J(J({},e),{systemError:t.systemError});case bp:return J(J({},e),{systemError:void 0});case xp:return J(J({},e),{improvementStatus:t.improvementStatus});case Sp:return J(J({},e),{improvementStatus:void 0});case Cp:return J(J({},e),{params:J(J({},e.params),{isFlashcardCreated:!0})});case wp:return J(J({},e),{locked:!0,lockedReason:lp.Waiting});case Tp:return J(J({},e),{locked:!1});default:return e}},Hp=function(e,t){var n={loaded:!1,context:{previousAnswers:{}},steps:[e.step],stepPending:void 0,tutorialComplete:!1,stepSubmitted:!1,stepEvaluating:!1,stepComplete:!1,stepCorrect:!1,stepReset:!1,stepUserMustRetry:!1,stepSubmitPrep:!1,locked:!1,autoContinue:!1};return n=Kp(e,n,t),n},Up=function(e,t){return Vp(e,t)},Wp=function(e,t){if(!t)return null;if(e.identifier===t)return e;if(e.followup)for(var n=0,r=e.followup;n<r.length;n++){var i=r[n],a=Wp(i.step,t);if(a)return a}return null},Gp=function(e,t,n,r,i){if(e.question&&r.questions[e.question.id]){var a=r.questions[e.question.id];if(a.correct===void 0||a.answers==null)throw`Tutorial failed to load step answers from state`;if(t[e.identifier]={correct:a.correct,inputVars:a.answers},i.push(e),a.followup?.step){var o=Wp(e,a.followup?.step);o&&Gp(o,t,n,r,i)}}else i.push(e)},Kp=function(e,t,n){if(!n)return t;var r=[],i={};Gp(e.step,i,e,n,r),t.steps=r,t.context.previousAnswers=i;var a=t.steps[t.steps.length-1],o=!!a.followup?.length,s=a.question&&n.questions[a.question.id],c=s&&s.correct===!1&&!s.followup?.step;c?(t.stepUserMustRetry=c,t.stepComplete=!0):a.question&&!s?t.stepComplete=!1:(s&&s.correct!==!1&&!s.followup?.step||!o||!a.question)&&(t.stepComplete=!0,t.tutorialComplete=!0),s&&(t.stepCorrect=s.correct);var l=e.step.question?.id;return l&&(t.improvementStatus=n.questions[l]?.improvementStatus),l&&(t.params=n.questions[l]?.parameters),t},qp=function(){return P.createElement(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,"aria-hidden":`true`,focusable:`false`,xmlns:`http://www.w3.org/2000/svg`},P.createElement(`path`,{d:`M15 7a1 1 0 0 1 1 1v6.002A2 2 0 0 1 14.002 16H1.998A2 2 0 0 1 0 14.002V1.998A2 2 0 0 1 1.998 0H8a1 1 0 1 1 0 2H1.998L2 14.002 14.002 14 14 8a1 1 0 0 1 1-1zM4.747 11.253l1.768-3.89 2.121 2.122-3.889 1.768zM15.707 1a.999.999 0 0 1 0 1.414l-.172.172-6.192 6.192-2.121-2.121L13.414.465l.172-.172a.999.999 0 0 1 1.414 0l.707.707z`}))},Jp=D.div.withConfig({displayName:`Widget__WidgetBox`})($p||=Y([`
  `,`;
  padding: 16px;
  margin: 0 16px;
`],[`
  `,`;
  padding: 16px;
  margin: 0 16px;
`]),bo),Yp=D.div.withConfig({displayName:`Widget__WidgetPromptContainer`})(em||=Y([`
  font-size: 1.6rem;
  color: `,`;
  font-weight: 500;
  line-height: 2.25;
  svg {
    margin-right: 1rem;
    vertical-align: middle;
  }
`],[`
  font-size: 1.6rem;
  color: `,`;
  font-weight: 500;
  line-height: 2.25;
  svg {
    margin-right: 1rem;
    vertical-align: middle;
  }
`]),q.cloud.getShade(10)),Xp=D.div.withConfig({displayName:`Widget__WidgetPrompt`})(tm||=Y([`
  margin-bottom: 8px;
`],[`
  margin-bottom: 8px;
`])),Zp=D.div.withConfig({displayName:`Widget__WidgetFeedback`})(nm||=Y([`
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 1.6rem;
`],[`
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 1.6rem;
`])),Qp=function(e){var t=e.prompt,n=e.controls,r=e.feedback;return P.createElement(Jp,null,P.createElement(Yp,null,P.createElement(Xp,null,t),P.createElement(`div`,null,n)),r&&P.createElement(Zp,null,r))},$p,em,tm,nm,rm={Button:D(ca.Button).withConfig({displayName:`WidgetButton__Button`})(am||=Y([`
    button {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      color: `,` !important;
    }
  `],[`
    button {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      color: `,` !important;
    }
  `]),q.cloud.getShade(10))},im=function(e){var t=e.label,n=e.text,r=xa(e,[`label`,`text`]);return P.createElement(rm.Button,J({color:`white`,size:`small`,pill:!0,label:t},r),n)},am,om=function(e){var t=e.hostApi,n=e.prompt,r=e.note,i=M(),a=(0,P.useState)(!1),o=a[0],s=a[1];return P.createElement(Qp,{prompt:P.createElement(P.default.Fragment,null,P.createElement(qp,null),o?i.formatMessage(J({},Wa.noteCreated)):n),controls:o?P.createElement(im,{label:i.formatMessage(J({},Wa.reviewNote)),text:i.formatMessage(J({},Wa.reviewNote)),onClick:function(){return(t?.viewNote)?.call(t)}}):P.createElement(im,{label:i.formatMessage(J({},Wa.createANote)),text:i.formatMessage(J({},Wa.createANote)),onClick:function(){t?.createNote?t?.createNote(r).then(function(){s(!0)}):(console.log(`Call notes api to create note
${r}`),s(!0))}})})},sm=w(um||=Y([`
  from {
    transform: translate(0, -100%);
  }
  to {
    transform: translate(0, 0%);
  }
`],[`
  from {
    transform: translate(0, -100%);
  }
  to {
    transform: translate(0, 0%);
  }
`])),cm={Container:D.div.withConfig({displayName:`StepHolder__Container`})(dm||=Y([`
    overflow: hidden;
  `],[`
    overflow: hidden;
  `])),Step:D.div.withConfig({displayName:`StepHolder__Step`})(pm||=Y([`
    `,`;
    margin-bottom: 19px;
  `],[`
    `,`;
    margin-bottom: 19px;
  `]),function(e){return e.animate&&k(fm||=Y([`
        animation: `,` 0.8s;
      `],[`
        animation: `,` 0.8s;
      `]),sm)})},lm=function(e){var t=e.children,n=e.stepIndex,r=e.animate,i=e.onAnimationEnd;return P.createElement(cm.Container,null,P.createElement(cm.Step,{ref:r?function(e){if(e){var t=gu(e);t&&(0,K.default)(function(){t.scrollTo({left:0,top:e.offsetTop-16,behavior:`smooth`})})}}:void 0,stepIndex:n,animate:r,onAnimationEnd:function(){return i()}},t))},um,dm,fm,pm,mm;(function(e){e[e.Submit=0]=`Submit`,e[e.NextQuestion=1]=`NextQuestion`,e[e.Done=2]=`Done`})(mm||={});var hm={Container:D.div.withConfig({displayName:`TutorialControls__Container`})(vm||=Y([`
    font-size: 1.6rem;
    padding: 16px;
    position: relative;
    background-color: white;
    &:before {
      content: "";
      display: block;
      box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.2);
      height: 1px;
      top: 0;
      left: 0;
      width: 100%;
      position: absolute;
    }
    `,`;
  \` ,
};    
  `],[`
    font-size: 1.6rem;
    padding: 16px;
    position: relative;
    background-color: white;
    &:before {
      content: "";
      display: block;
      box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.2);
      height: 1px;
      top: 0;
      left: 0;
      width: 100%;
      position: absolute;
    }
    `,`;
  \\\` ,
};    
  `]),function(e){return e.dockToBottom&&k(_m||=Y([`
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
      `],[`
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
      `]))})},gm=P.forwardRef(function(e,t){if(e.type===mm.Submit&&!e.submitted){var n=e.onSubmit;return P.createElement(hm.Container,{ref:t||void 0,dockToBottom:e.dockToBottom},P.createElement(Fo,{onClick:function(){n()}},P.createElement(_,J({},Q.controlsCheckAnswer))))}if(e.type===mm.NextQuestion){var r=e.onNextQuestion;return P.createElement(hm.Container,{ref:t||void 0,dockToBottom:e.dockToBottom},P.createElement(Fo,{onClick:function(){r()}},P.createElement(_,J({},Q.controlsNextQuestion))))}if(e.type===mm.Done){var i=e.onDone;return P.createElement(hm.Container,{ref:t||void 0,dockToBottom:e.dockToBottom},P.createElement(Fo,{onClick:function(){i()}},P.createElement(_,J({},Q.controlsDone))))}return null}),_m,vm;function ym(e,t,n,r){var i=(0,P.useRef)(!1),a=tl(n.improvementStatus),o=tl(n.params),s=n.improvementStatus,c=n.params,l=n.systemError,u=e.step?.question?.id,d=e.id,f=e.step?.identifier;if(!u||!d||!f)throw Error(`Tutorial found without expected id structure`);(0,P.useEffect)(function(){!n||!i||s===a||s?.flag!==void 0&&t.submitQuestionImprovementStatus(u,s,d,f).catch(function(e){r(Pp({type:up.ImprovementFeedbackError,detail:e.message})),r(Lp())})},[r,t,s,a,i,u,n,f,d]),(0,P.useEffect)(function(){!n||!i||c===o||c&&t.saveParameters(u,c).catch(function(){})},[t,o,i,c,u,n]),(0,P.useEffect)(function(){(0,K.default)(function(){l&&r(Fp())})}),(0,P.useEffect)(function(){n.loaded&&!i.current&&(i.current=!0)},[n.loaded]),(0,P.useEffect)(function(){n.autoContinue&&(0,K.default)(function(){return r(Np())})},[r,n.autoContinue])}var bm=function(e){var t=e.systemError,n=M(),r=(0,P.useMemo)(function(){if(t?.type==up.ImprovementFeedbackError)return{title:n.formatMessage(Xa.improvementFeedbackErrorTitle),description:n.formatMessage(Xa.improvementFeedbackErrorDescription),detail:t.detail}},[n,t?.detail,t?.type]);return P.createElement(yl,{open:!!t,text:r})},xm={Container:D.div.withConfig({displayName:`Tutorial__Container`})(Cm||=Y([`
    display: `,`;
    flex-direction: column;
    height: 100%;
  `],[`
    display: `,`;
    flex-direction: column;
    height: 100%;
  `]),function(e){return e.visible?`flex`:`none`}),ScrollPane:D.div.withConfig({displayName:`Tutorial__ScrollPane`})(wm||=Y([`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  `],[`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  `])),ScrollContent:D.div.withConfig({displayName:`Tutorial__ScrollContent`})(Tm||=Y([`
    margin: 0;
    padding: 0;
    padding-top: 16px;
    box-sizing: border-box;
  `],[`
    margin: 0;
    padding: 0;
    padding-top: 16px;
    box-sizing: border-box;
  `])),QuestionsContainer:D.div.withConfig({displayName:`Tutorial__QuestionsContainer`})(Em||=Y([`
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0 0 0 0;
    .add-to-flashcard {
      margin-top: 2px;
      margin-left: 16px;
    }
  `],[`
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0 0 0 0;
    .add-to-flashcard {
      margin-top: 2px;
      margin-left: 16px;
    }
  `])),InlineControlHolder:D.div.withConfig({displayName:`Tutorial__InlineControlHolder`})(Dm||=Y([`
    margin: 0 24px;
    margin-top: 8px;
    padding-bottom: 16px;
  `],[`
    margin: 0 24px;
    margin-top: 8px;
    padding-bottom: 16px;
  `])),FlashcardActions:D.div.withConfig({displayName:`Tutorial__FlashcardActions`})(Om||=Y([`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  `],[`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  `]))},Sm=function(e){var t,n=e.data,r=e.visible,i=e.evaluator,a=e.evaluatedData,o=e.events,s=e.questionIndex,c=e.siblingQuestionCount,l=e.status,u=e.hostApi,d=M(),f=(0,P.useReducer)(Up,function(){return Hp(n,a)}()),p=f[0],m=f[1],h=p.steps,g=p.context,v=p.stepPending,y=p.stepSubmitted,b=p.stepReset,x=p.stepComplete,S=p.stepSubmitPrep,C=p.tutorialComplete,w=p.stepUserMustRetry,T=p.systemError,E=p.improvementStatus,D=p.locked,O=p.autoContinue,k=tl(h[h.length-1]),A=(0,P.useState)(!1),j=A[0],N=A[1],F=(0,P.useState)(!1),I=F[0],L=F[1],R=P.useRef(null),z=(0,P.useRef)(void 0);(0,P.useEffect)(function(){var e;R.current?.offsetHeight!==z.current&&(z.current=R.current?.offsetHeight,(e=o?.onSetControlsSize)==null||e.call(o,n.id,R.current?.offsetHeight??0))}),(0,P.useEffect)(function(){p.loaded||(0,K.default)(function(){return m(Ep())})},[m,a,p.loaded]),ym(n,i,p,m),(0,P.useEffect)(function(){b&&m(Mp(!1))},[b]);var B=(0,P.useCallback)(function(){I&&L(!1),C&&!j&&E===void 0&&N(!0)},[I,C,j,E]);if(!h)return P.createElement(`div`,{style:{margin:`24px`}},P.createElement(`p`,null,`Tutorial Display Error:`),P.createElement(`p`,null,`This tutorial has no question content`));var ee={onSubmit:function(e,t,r,i){m(Op(!1)),m(Bp()),m(jp(e,{correct:t,inputVars:r,followupId:i})),m(kp(!0)),(0,K.default)(function(){return(o?.onSubmit)?.call(o,n.id,t,r,i)})},onValidate:function(e,t){t||m(Dp(!1))},onEvalStart:function(){m(zp(lp.Waiting)),m(Op(!0))},onEvalDeferred:function(){m(Dp(!1)),m(Bp()),m(Op(!1))},onSubmitPrep:function(){m(Ap(!0))}},te=!!u?.onTutorRequested,ne=h.some(function(e){return g.previousAnswers[e.identifier]?.correct===!1}),re=g.previousAnswers[h[h.length-1].identifier]?.correct,ie=ne?lo.QuestionIncorrect:re===!0?lo.QuestionCorrect:lo.QuestionUngraded,ae=function(){return P.createElement(Ro,{onClick:function(){(0,K.default)(function(){return(u?.onTutorRequested)?.call(u,{reason:ie,questionId:n.id})})}},P.createElement(_,J({},ie===lo.QuestionIncorrect?Q.controlsTutorReview:Q.controlsTutorDiscuss)))},oe=function(e,t,r){var o=e.question;if(!o)throw Error(`Expected tutorial step question but it was undefined`);var s=_f[o.question_type];if(!s)throw Error(`Tutorial cannot find implementation for question ${o.question_type}`);var c=r===h.length-1&&I,l=a?.questions[o.id];return t===Z.Tutorial?P.createElement(s,{controlledSubmit:h.length===1&&y,controlledReset:h.length===1&&b,mode:t,visible:!0,id:o.id,data:o,events:ee,context:g,evaluator:i,evaluatedData:l,tutorialId:n.id,tutorialStep:e.identifier}):P.createElement(lm,{key:o.id,stepIndex:r,animate:c,onAnimationEnd:B},P.createElement(s,{controlledSubmit:r===h.length-1&&y,controlledReset:h.length-1==1&&b,mode:t,visible:!0,id:o.id,data:o,events:ee,context:g,evaluator:i,evaluatedData:l,tutorialId:n.id,tutorialStep:e.identifier}))},se=function(e,t){var r=t===h.length-1&&e!==k;if(!I&&r&&L(r),e.question)return oe(e,Z.TutorialFollowup,t);if(e.notes){var a=pu(e.notes.note_string,g,fu.Plain);return P.createElement(lm,{key:e.identifier,stepIndex:t,animate:r||I,onAnimationEnd:B},P.createElement(om,{prompt:e.notes?.prompt,note:a}))}if(e.flashcard){var o=e.flashcard;return P.createElement(lm,{key:e.identifier,stepIndex:t,animate:r||I,onAnimationEnd:B},P.createElement(Xc,{front:o.flashcard_front,back:o.flashcard_back,hostApi:u,relatedId:n.id,isCreated:!!p.params?.isFlashcardCreated,onNotifyCreate:function(){i.enrichmentEvent(`enrichment_tutorial_flashcard_create`,n.id,e.identifier),m(Rp())}}))}throw Error(`Tutorial unknown or missing step type`)},V=h[h.length-1],H=V?.flashcard,ce=s!==void 0&&c!==void 0,le=ce&&s<c-1,U=ce&&!le;return P.createElement(xm.Container,J({visible:r},ce&&(c??0)>1&&(t={role:`tabpanel`},t[`aria-label`]=d.formatMessage(Q.pip,{index:(s??0)+1,status:l}),t)),P.createElement(xm.ScrollPane,null,P.createElement(xm.ScrollContent,null,P.createElement(xm.QuestionsContainer,null,oe(h[0],Z.Tutorial,0),h.slice(1).map(function(e,t){var n=t+1;return n===h.length-1&&H?null:se(e,n)})),H&&P.createElement(xm.InlineControlHolder,null,P.createElement(xm.FlashcardActions,null,P.createElement(Xc,{front:H.flashcard_front,back:H.flashcard_back,hostApi:u,relatedId:n.id,isCreated:!!p.params?.isFlashcardCreated,onNotifyCreate:function(){i.enrichmentEvent(`enrichment_tutorial_flashcard_create`,n.id,V.identifier),m(Rp())}}),C&&te&&ae())),x&&v&&!w&&!O&&P.createElement(xm.InlineControlHolder,null,P.createElement(Ro,{onClick:function(){m(Np())}},P.createElement(_,J({},Va.continue)))),x&&w&&P.createElement(xm.InlineControlHolder,null,P.createElement(Ro,{onClick:function(){m(Mp(!0)),(0,K.default)(function(){return(o?.onReset)?.call(o,n.id)})}},P.createElement(_,J({},Q.controlsRetry)))),C&&te&&!H&&P.createElement(xm.InlineControlHolder,null,ae()),C&&!E&&!I&&P.createElement(Nl,{status:E,appearEffect:j&&C&&!I,onStatus:function(e){m(Ip(e))},onAppearStart:function(e){if(e&&j){var t=gu(e);t&&(0,K.default)(function(){t.scrollTo({left:0,top:e.offsetTop-16,behavior:`smooth`})})}},onAnimationEnd:function(){N(!1)}}))),!x&&!C&&!S&&P.createElement(gm,{ref:R,type:mm.Submit,submitted:!1,dockToBottom:ce,onSubmit:function(){m(Dp(!0))}}),C&&ce&&le&&P.createElement(gm,{ref:R,type:mm.NextQuestion,dockToBottom:ce,onNextQuestion:function(){var e;(e=o?.onNextQuestion)==null||e.call(o,n.id)}}),C&&ce&&U&&P.createElement(gm,{ref:R,type:mm.Done,dockToBottom:ce,onDone:function(){var e;(e=o?.onDone)==null||e.call(o,n.id)}}),P.createElement(bm,{systemError:T}),P.createElement(_l,{blocked:D}))},Cm,wm,Tm,Em,Dm,Om,km=function(e){var t=e.systemError,n=M(),r=(0,P.useMemo)(function(){if(t?.type==Hh.SubmitAssessmentFailure)return{title:n.formatMessage(Xa.submitAssessmentErrorTitle),description:n.formatMessage(Xa.submitAssessmentErrorDescription),detail:t.detail}},[n,t]);return P.createElement(yl,{open:!!t,text:r})},Am;(function(e){e.Amalgamated=`Amalgamated`,e.Autonomous=`Autonomous`})(Am||={});var jm;(function(e){e.VerticalAllTogether=`VerticalAllTogether`,e.OneAtAtime=`OneAtAtime`})(jm||={});var Mm;(function(e){e[e.Top=0]=`Top`,e[e.TopOfQuestions=1]=`TopOfQuestions`,e[e.TopOfQuestion=2]=`TopOfQuestion`})(Mm||={});var Nm={Container:D.div.withConfig({displayName:`QuestionGroup__Container`})(Fm||=Y([`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  `],[`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  `])),ScrollPane:D.div.withConfig({displayName:`QuestionGroup__ScrollPane`})(Lm||=Y([`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    `,`
  `],[`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    `,`
  `]),function(e){var t=e.controlsHeight;return k(Im||=Y([`
        margin-bottom: `,`px;
      `],[`
        margin-bottom: `,`px;
      `]),(0,sa.default)(t)?t:0)}),ScrollContent:D.div.withConfig({displayName:`QuestionGroup__ScrollContent`})(Rm||=Y([`
    margin: 0;
    padding: 0;
  `],[`
    margin: 0;
    padding: 0;
  `])),QuestionsContainer:D.div.withConfig({displayName:`QuestionGroup__QuestionsContainer`})(Vm||=Y([`
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    `,`
    `,`
  `],[`
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    `,`
    `,`
  `]),function(e){return e.vertMargin&&k(zm||=Y([`
        padding: 16px 0;
      `],[`
        padding: 16px 0;
      `]))},function(e){return e.fullHeight&&k(Bm||=Y([`
        display: inline-block;
      `],[`
        display: inline-block;
      `]))})},Pm=function(e){var t=e.mode,n=e.header,r=e.prologue,i=M(),a=rp(),o=a.questions,s=a.evaluator,c=a.itemIndex,l=a.setItemIndex,u=a.itemStates,d=a.submitItem,f=a.resetItem,p=a.submitRequested,m=a.setSubmitRequested,h=a.submitted,g=a.setSubmitted,_=a.result,v=a.questionEvaluations,y=a.setEvaluatedResult,b=a.answerRevealed,x=a.setAnswerRevealed,S=a.reset,C=a.setReset,w=a.totalQuestionsUnanswered,T=a.setItemAnswerGiven,E=a.someQuestionsAreUnanswered,D=a.evaluatedData,O=a.allQuestionsAreAnswered,k=a.incorrectlyAnsweredQuestions,A=a.locked,j=a.setLocked,N=a.setUnlocked,F=a.systemError,I=a.notifySystemError,L=a.hostApi,R=a.ariaLiveMessage,z=a.ariaLiveMode,B=a.sendAriaLiveMessage,ee=a.clearAriaLiveMessage,te=(0,P.useRef)(null),ne=(0,P.useRef)(null),re=(0,P.useState)(0),ie=re[0],ae=re[1];(0,P.useEffect)(function(){S&&(B(i.formatMessage(Ga.assessmentResetA11y)),s.startAssessment(),C(!1))});var oe=(0,P.useState)(!1),se=oe[0],V=oe[1];(0,P.useEffect)(function(){se&&(B(i.formatMessage(Ga.assessmentAnswersRevealedA11y)),V(!1))},[se,i,B]);var H=(0,P.useMemo)(function(){var e=``;return o.some(function(e){return!ep(e)})?e=`Question group has detected questions with missing ids`:o.some(function(e){return!Object.keys(e).length})?e=`Question group has detected questions without data`:Array.from(new Set(o.map(function(e){return ep(e)}))).length!==o.length&&(e=`Question group has detected duplicated question ids`),e},[o]),ce=(0,P.useMemo)(function(){return{correct:!1,answers:{}}},[]),le=(0,P.useMemo)(function(){return(0,aa.default)(function(e,t){s.storeAnswers(e,t)},1e3)},[s]);if(H)return P.createElement(`div`,{style:{margin:`24px`}},P.createElement(`p`,null,`Question Display Error:`),P.createElement(`p`,null,H));var U=t===Am.Amalgamated,W=t===Am.Autonomous,G=function(e){e===void 0&&(e=Mm.Top),setTimeout(function(){if(te.current&&ne.current){var t=e===Mm.TopOfQuestions||e===Mm.TopOfQuestion?ne.current.offsetTop:0;te.current.scroll({top:t,behavior:`smooth`})}},1)};if(h&&!_&&!A&&!F){var ue=Object.keys(u).reduce(function(e,t){return e[t]=u[t].userAnswer,e},{});B(i.formatMessage(Va.evaluating),ds.Assertive),j(yf.Waiting),s?.submitAssessment(ue).then(function(e){(0,K.default)(function(){y(e),N(),G()})}).catch(function(e){(0,K.default)(function(){g(!1),N(),I({type:Hh.SubmitAssessmentFailure,detail:e.toString()})})})}return P.createElement(P.default.Fragment,null,P.createElement(Nm.Container,null,P.createElement(Nm.ScrollPane,{ref:te,controlsHeight:ie},P.createElement(Nm.ScrollContent,null,n,r,W&&o.length>1&&P.createElement(ss,{itemIndex:c,items:o.map(function(e){return{panelId:e.id,status:uc(u[ep(e)].correct)}}),onChange:function(e,t){l(e),t===as.Button&&B(i.formatMessage(Ga.questionPanelA11y,{index:e+1}))}}),P.createElement(Nm.QuestionsContainer,{ref:ne,fullHeight:W,vertMargin:U},U&&P.createElement(Ko,{focused:S||se},i.formatMessage(Ga.assessmentStart)),o.map(function(e,t){var n=U||W&&t===c,r=uc(u[ep(e)].correct);if(Qf(e))return P.createElement(Sm,{key:e.id,visible:n,evaluator:s,evaluatedData:D,questionIndex:t,siblingQuestionCount:o.length,status:r,data:e,events:{onSubmit:function(e,t,n){(0,oa.default)(function(){return d(e,t,n)},20)},onReset:function(e){f(e)},onNextQuestion:function(){G(),(0,K.default)(function(){return l(Math.min(c+1,o.length-1))})},onDone:function(){var e;(e=L?.onRequestClose)==null||e.call(L)},onSetControlsSize:function(e,t){ae(t)}},hostApi:L});var i=_f[e.question_type];if(!i)throw`Question group unknown question type`+e.question_type;var a=D?.questions?.[e.id]||(typeof D?.assessment?.score==`number`?ce:void 0);return P.createElement(i,{key:e.id,role:`tabpanel`,data:e,visible:n,id:e.id,mode:U?Z.Child:W?Z.StandaloneInGroup:Z.Standalone,questionIndex:t,siblingQuestionCount:o.length,showQuestionIndex:U,status:r,controlledSubmit:h&&W,controlledReveal:b,controlledReset:S,dontValidate:U,evaluator:s,evaluatedData:a,parentEvaluatedData:h&&v?v[e.id]:null,events:{onAnswerGiven:function(e,t,n,r){U&&(r?.debounce?le(e,n):s.storeAnswers(e,n)),T(e,t,n)},onSubmit:function(e,t,n){d(e,t,n)},onRevealAnswer:function(e){G(Mm.TopOfQuestion),(0,K.default)(function(){return(L?.onRevealAnswer)?.call(L,e)})},onReset:function(e){G(),f(e),(0,K.default)(function(){return(L?.onRetryQuestion)?.call(L,e)})},onTutorRequested:function(e,t){(0,K.default)(function(){return(L?.onTutorRequested)?.call(L,{reason:t,questionId:e})})},onNextQuestion:function(){G(),l(Math.min(c+1,o.length-1))},onDone:function(){var e;(e=L?.onRequestClose)==null||e.call(L)},onSetControlsSize:function(e,t){ae(t)}},hostApi:L})})))),U&&P.createElement(Vo,{submitted:h&&!!_,onSubmit:function(){O?g(!0):m(!0)},onReset:function(){C(!0),x(!1),g(!1),G(Mm.TopOfQuestions),(0,K.default)(function(){var e;o.length&&((e=L?.onRetryQuestion)==null||e.call(L,o.map(function(e){return e.id})))})},onReveal:function(){x(!0),V(!0),G(Mm.TopOfQuestions),(0,K.default)(function(){var e;k.length&&((e=L?.onRevealAnswer)==null||e.call(L,k))})},onDone:function(){var e;(e=L?.onRequestClose)==null||e.call(L)}})),P.createElement(km,{systemError:F}),P.createElement(_l,{blocked:A}),E&&p&&P.createElement(sp,{type:ip.ContinueCancel,open:E&&p,title:i.formatMessage(Ya.title,{count:w}),message:i.formatMessage(Ya.message),onRequestClose:function(){m(!1)},onResponse:function(e){e===ap.Continue&&g(!0)}}),P.createElement(rl,{mode:z,onClear:function(){ee()}},R))},Fm,Im,Lm,Rm,zm,Bm,Vm;function Hm(e){switch(e){case X.Complete:return $();case X.Incomplete:return q.cloud.getShade(6);case X.Correct:return q.green.getShade(6);case X.Incorrect:return q.red.getShade(6);default:return q.cloud.getShade(10)}}var Um={StatusText:D.div.withConfig({displayName:`StatusText`})(Gm||=Y([`
    font-weight: 500;
    color: `,`;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 12px;
      min-width: 18px;
    }
  `],[`
    font-weight: 500;
    color: `,`;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 12px;
      min-width: 18px;
    }
  `]),function(e){return Hm(e.status)})},Wm=function(e){var t=e.status,n=e.className,r=e.count,i=e.withIcon,a=r===void 0?Q[`status`+t]:Ka[`score`+t+`Count`];return P.createElement(Um.StatusText,{status:t,className:n},i&&t===X.Correct?P.createElement(la.Checkmark,null):i&&t===X.Incorrect?P.createElement(la.XSmall,null):i&&t===X.Incomplete?P.createElement(la.QuestionCircle,null):null,P.createElement(_,J({},a,{values:{count:r}})))},Gm,Km={Container:D.div.withConfig({displayName:`CoachmeAssessmentResults__Container`})(Jm||=Y([`
    text-align: center;
    margin: 16px 16px 0;
    position: relative;
  `],[`
    text-align: center;
    margin: 16px 16px 0;
    position: relative;
  `])),SvgBackground:D.div.withConfig({displayName:`CoachmeAssessmentResults__SvgBackground`})(Ym||=Y([`
    margin-bottom: 24px;
  `],[`
    margin-bottom: 24px;
  `])),SvgForeground:D.div.withConfig({displayName:`CoachmeAssessmentResults__SvgForeground`})(Xm||=Y([`
    width: 387px;
    position: absolute;
    top: 0;
  `],[`
    width: 387px;
    position: absolute;
    top: 0;
  `])),TextOverlay:D.div.withConfig({displayName:`CoachmeAssessmentResults__TextOverlay`})(Zm||=Y([`
    position: absolute;
    top: 0;
    width: 100%;
    font-size: 1.8rem;
  `],[`
    position: absolute;
    top: 0;
    width: 100%;
    font-size: 1.8rem;
  `])),TextOverlayTitle:D.div.withConfig({displayName:`CoachmeAssessmentResults__TextOverlayTitle`})(Qm||=Y([`
    text-transform: uppercase;
    text-align: center;
  `],[`
    text-transform: uppercase;
    text-align: center;
  `])),TextOverlayTitleText:D.h3.withConfig({displayName:`CoachmeAssessmentResults__TextOverlayTitleText`})($m||=Y([`
    display: inline-block;
    margin-top: 13px;
    margin-bottom: 13px;
    font-weight: 800;
    font-size: 1.8rem;
    padding: 3px;
    :focus {
      border-radius: 4px;
      outline: none;
      box-shadow: 0 0 0 2px `,`;
    }
  `],[`
    display: inline-block;
    margin-top: 13px;
    margin-bottom: 13px;
    font-weight: 800;
    font-size: 1.8rem;
    padding: 3px;
    :focus {
      border-radius: 4px;
      outline: none;
      box-shadow: 0 0 0 2px `,`;
    }
  `]),$()),TextOverlayEntries:D.div.withConfig({displayName:`CoachmeAssessmentResults__TextOverlayEntries`})(eh||=Y([`
    display: inline-block;
    text-align: left;
    margin-left: 180px;
    div {
      margin-bottom: 16px;
    }
  `],[`
    display: inline-block;
    text-align: left;
    margin-left: 180px;
    div {
      margin-bottom: 16px;
    }
  `]))},qm=function(e){var t=e.id,n=e.scorePercent,r=e.totalCorrect,i=e.totalIncorrect,a=e.totalIncomplete,o=e.focusResults,s=M(),c=q.frost.getShade(1),l=q.frost.getShade(4),u=q.magic.getShade(3),d=q.magic.getShade(4),f=q.magic.getShade(5),p=q.magic.getShade(6),m=q.magic.getShade(8),h=(0,P.useRef)(null);Wo(h,{takeFocus:o,temporary:!0,smoothScrollIntoView:!0});var g=[{count:r,type:X.Correct},{count:i-a,type:X.Incorrect},{count:a,type:X.Incomplete}],v=s.formatMessage(Ka.resultsA11y,{count:r+i,score:n,breakdown:g.reduce(function(e,t){return e+(t.count?s.formatMessage(Ka.resultsA11yLineItem,{count:t.count,status:s.formatMessage(Q.status,{status:t.type})})+`, `:``)},``)}),y=`results-title-a11y-`+t;return P.createElement(Km.Container,null,P.createElement(Km.SvgBackground,{"aria-hidden":!0},P.createElement(`svg`,{width:`100%`,height:`216px`,preserveAspectRatio:`none`,viewBox:`0 0 387 216`,xmlns:`http://www.w3.org/2000/svg`,xmlnsXlink:`http://www.w3.org/1999/xlink`},P.createElement(`defs`,null,P.createElement(`linearGradient`,{x1:`99.455%`,y1:`35.521%`,x2:`3.03%`,y2:`65.492%`,id:`prefix__a`},P.createElement(`stop`,{stopColor:c,offset:`0%`}),P.createElement(`stop`,{stopColor:l,offset:`100%`})),P.createElement(`linearGradient`,{x1:`99.238%`,y1:`35.588%`,x2:`2.499%`,y2:`65.657%`,id:`prefix__c`},P.createElement(`stop`,{stopColor:c,offset:`0%`}),P.createElement(`stop`,{stopColor:l,offset:`100%`})),P.createElement(`path`,{d:`M.538 4.004A4 4 0 014.548 0h377.98a4.003 4.003 0 014.01 4.004v207.992a4 4 0 01-4.01 4.004H4.548a4.003 4.003 0 01-4.01-4.004V4.004z`,id:`prefix__b`})),P.createElement(`g`,{fill:`none`,fillRule:`evenodd`},P.createElement(`path`,{d:`M.538 4.004A4 4 0 014.548 0h377.98a4.003 4.003 0 014.01 4.004v207.992a4 4 0 01-4.01 4.004H4.548a4.003 4.003 0 01-4.01-4.004V4.004z`,fill:`url(#prefix__a)`}),P.createElement(`mask`,{id:`prefix__d`,fill:`#fff`},P.createElement(`use`,{xlinkHref:`#prefix__b`})),P.createElement(`use`,{fill:`url(#prefix__c)`,xlinkHref:`#prefix__b`}),P.createElement(`path`,{fill:`#FFF`,mask:`url(#prefix__d)`,d:`M-7 192l404.963-30v70H-7z`})))),P.createElement(Km.SvgForeground,{"aria-hidden":!0},P.createElement(`svg`,{viewBox:`0 0 387 216`,xmlns:`http://www.w3.org/2000/svg`,xmlnsXlink:`http://www.w3.org/1999/xlink`},P.createElement(`defs`,null,P.createElement(`linearGradient`,{x1:`99.455%`,y1:`35.521%`,x2:`3.03%`,y2:`65.492%`,id:`prefix__a`},P.createElement(`stop`,{stopColor:c,offset:`0%`}),P.createElement(`stop`,{stopColor:l,offset:`100%`})),P.createElement(`linearGradient`,{x1:`99.238%`,y1:`35.588%`,x2:`2.499%`,y2:`65.657%`,id:`prefix__c`},P.createElement(`stop`,{stopColor:c,offset:`0%`}),P.createElement(`stop`,{stopColor:l,offset:`100%`})),P.createElement(`path`,{d:`M.538 4.004A4 4 0 014.548 0h377.98a4.003 4.003 0 014.01 4.004v207.992a4 4 0 01-4.01 4.004H4.548a4.003 4.003 0 01-4.01-4.004V4.004z`,id:`prefix__b`})),P.createElement(`g`,{fill:`none`,fillRule:`evenodd`},P.createElement(`mask`,{id:`prefix__d`,fill:`#fff`},P.createElement(`use`,{xlinkHref:`#prefix__b`})),P.createElement(`path`,{d:`M12.436 176.76h1.948c6.91 0 12.402 5.504 12.402 12.428v3.906c0 2.13 1.772 3.906 3.898 3.906h1.063c2.126 0 3.897-1.775 3.897-3.906v-3.906c0-6.924 5.492-12.427 12.402-12.427h1.594c2.126 0 3.898-1.775 3.898-3.906v-.71c0-2.13-1.772-3.906-3.898-3.906h-1.77c-6.91 0-12.402-5.503-12.402-12.427v-3.906c0-2.13-1.772-3.906-3.898-3.906h-1.064c-2.125 0-3.897 1.775-3.897 3.906v3.906c0 2.84-1.063 5.503-2.658 7.634h-.177v.355c-2.303 2.663-5.67 4.438-9.567 4.438h-1.771c-2.126 0-3.898 1.775-3.898 3.906v.71c0 2.308 1.772 3.906 3.898 3.906z`,fill:`#FFF`,opacity:.386,mask:`url(#prefix__d)`}),P.createElement(`path`,{d:`M34.548 105c-3.213 3.217-3.213 8.365 0 11.675l4.675 5.148c1.948 2.114 2.727 4.872 2.24 7.722l-1.46 6.435c-.975 4.412 1.752 8.825 6.135 10.02m3-72l-3.807 1.212c-4.378 1.4-6.947 5.876-5.996 10.166L40.763 92m89.375-29.447l-.555-1.7c-1.386-4.112-5.822-6.527-10.074-5.632l-6.562 1.34c-2.773.716-5.638-.267-7.764-2.056l-5.176-4.292c-3.235-2.95-8.41-2.95-11.738 0l-5.176 4.292c-2.126 1.789-4.899 2.504-7.764 2.057l-6.47-1.341c-4.436-.895-8.872 1.61-10.074 5.633L58.138 63m86.204 82c4.095-1.367 6.498-5.742 5.608-9.935l-1.335-6.47c-.712-2.735.267-5.56 2.047-7.657l4.273-5.104c2.937-3.19 2.937-8.294 0-11.575l-4.273-5.104c-1.78-2.096-2.492-4.83-2.047-7.656l1.335-6.47c.89-4.376-1.602-8.75-5.608-9.935L141.138 74`,stroke:d,strokeWidth:3.818,strokeLinecap:`round`,mask:`url(#prefix__d)`}),P.createElement(`path`,{fill:p,fillRule:`nonzero`,mask:`url(#prefix__d)`,d:`M78.545 215.908V216l21.593-66.05L68.731 140l-21.593 65.959.093.092 20.378-9.673z`}),P.createElement(`path`,{fill:p,fillRule:`nonzero`,mask:`url(#prefix__d)`,d:`M143.046 201.822h.092L117.06 138l-29.922 12.178L113.216 214h.092l9.15-20.236z`}),P.createElement(`path`,{d:`M93.823 148.503l-25.14-7.95-5.545 17.178c1.848 1.37 4.16 2.01 6.47 1.553l6.007-1.279c2.588-.64 5.084.183 7.025 1.919l4.713 4.02c2.958 2.741 7.671 2.741 10.629 0l4.714-4.02c1.94-1.645 4.436-2.559 7.024-1.919l6.007 1.28c3.42.73 6.84-.823 8.411-3.656L117.298 139l-23.475 9.503z`,fill:m,fillRule:`nonzero`,mask:`url(#prefix__d)`}),P.createElement(`path`,{d:`M143.288 106.25l-3.563-4.203c-1.553-1.736-2.101-4.02-1.736-6.212l1.097-5.299c.73-3.563-1.37-7.217-4.751-8.13l-5.299-1.736c-2.1-.731-3.745-2.467-4.568-4.568l-1.735-5.299c-1.097-3.38-4.75-5.481-8.131-4.75l-5.299 1.096c-2.284.548-4.568-.183-6.212-1.736l-4.202-3.563c-2.65-2.467-6.852-2.467-9.502 0l-4.202 3.563c-1.736 1.553-4.02 2.101-6.212 1.736l-5.299-1.097c-3.563-.73-7.217 1.37-8.13 4.751l-1.737 5.299c-.73 2.1-2.466 3.745-4.567 4.568l-5.3 1.735c-3.38 1.097-5.48 4.75-4.75 8.131l1.097 5.299c.548 2.284-.183 4.568-1.736 6.212l-3.563 4.202c-2.467 2.65-2.467 6.852 0 9.502l3.563 4.202c1.553 1.736 2.101 4.02 1.736 6.212l-1.097 5.299c-.73 3.563 1.37 7.217 4.75 8.13l5.3 1.736c2.1.731 3.745 2.467 4.567 4.568l1.736 5.299c1.097 3.38 4.75 5.481 8.131 4.75l5.299-1.096c2.284-.548 4.568.183 6.212 1.736l4.202 3.563c2.65 2.467 6.852 2.467 9.502 0l4.202-3.563c1.736-1.553 4.02-2.284 6.212-1.736l5.299 1.097c3.563.73 7.217-1.37 8.13-4.751l1.736-5.299c.731-2.1 2.467-3.745 4.568-4.568l5.299-1.735c3.38-1.097 5.481-4.75 4.75-8.131l-1.096-5.299c-.548-2.284.183-4.568 1.736-6.212l3.563-4.202c2.467-2.65 2.467-6.852 0-9.502z`,fill:u,fillRule:`nonzero`,mask:`url(#prefix__d)`}),P.createElement(`path`,{d:`M90.379 61.828l-4.293 3.564c-1.773 1.554-4.105 2.103-6.345 1.737l-5.412-1.097c-3.64-.73-7.372 1.371-8.305 4.753l-1.773 5.301c-.747 2.102-2.52 3.747-4.666 4.57l-5.412 1.736c-3.453 1.097-5.6 4.753-4.853 8.135l1.12 5.301c.56 2.285-.187 4.57-1.773 6.215l-3.64 4.204c-2.519 2.65-2.519 6.855 0 9.506l3.64 4.204c1.586 1.737 2.146 4.021 1.773 6.215l-1.12 5.301c-.746 3.565 1.4 7.22 4.853 8.135l5.412 1.736c2.146.731 3.826 2.468 4.666 4.57l1.773 5.301c1.12 3.382 4.852 5.484 8.305 4.753l5.412-1.097c2.333-.548 4.666.183 6.345 1.737l4.293 3.564c1.306 1.188 3.08 1.828 4.759 1.828V60c-1.68 0-3.36.64-4.76 1.828z`,fill:f,fillRule:`nonzero`,opacity:.39,mask:`url(#prefix__d)`}),P.createElement(`circle`,{fill:`#FFF`,mask:`url(#prefix__d)`,cx:95.138,cy:111,r:35}),P.createElement(`path`,{d:`M24.256 46.891h1.56c5.527 0 9.92 4.38 9.92 9.892v3.108c0 1.696 1.418 3.109 3.119 3.109h.85c1.7 0 3.118-1.413 3.118-3.109v-3.108c0-5.511 4.394-9.892 9.921-9.892h1.276c1.7 0 3.118-1.413 3.118-3.108v-.566c0-1.695-1.417-3.108-3.118-3.108h-1.417c-5.528 0-9.922-4.38-9.922-9.892V27.11c0-1.696-1.417-3.109-3.118-3.109h-.85c-1.701 0-3.118 1.413-3.118 3.109v3.108c0 2.261-.85 4.38-2.126 6.076h-.142v.283c-1.843 2.12-4.535 3.533-7.654 3.533h-1.417c-1.7 0-3.118 1.413-3.118 3.108v.566c0 1.837 1.417 3.108 3.118 3.108z`,fill:`#FFF`,fillRule:`nonzero`,opacity:.448,mask:`url(#prefix__d)`}),P.createElement(`path`,{d:`M139.784 56.326h.822c2.918 0 5.237 2.359 5.237 5.326v1.674c0 .913.748 1.674 1.645 1.674h.449c.898 0 1.646-.76 1.646-1.674v-1.674c0-2.967 2.319-5.326 5.236-5.326h.673c.898 0 1.646-.76 1.646-1.674v-.304c0-.913-.748-1.674-1.646-1.674h-.748c-2.917 0-5.236-2.359-5.236-5.326v-1.674c0-.913-.748-1.674-1.646-1.674h-.448c-.898 0-1.646.76-1.646 1.674v1.674c0 1.217-.449 2.359-1.122 3.272h-.075v.152c-.972 1.141-2.394 1.902-4.04 1.902h-.747c-.898 0-1.646.76-1.646 1.674v.304c0 .99.748 1.674 1.646 1.674z`,fill:`#FFF`,fillRule:`nonzero`,opacity:.63,mask:`url(#prefix__d)`})),P.createElement(`g`,{textAnchor:`middle`,dominantBaseline:`middle`},P.createElement(`text`,{x:`96`,y:`114`,style:{fontWeight:700,fontSize:`2.8rem`},fill:`black`},n,`%`)))),P.createElement(Km.TextOverlay,null,P.createElement(Km.TextOverlayTitle,null,P.createElement(Km.TextOverlayTitleText,{ref:h,"aria-describedby":y},P.createElement(_,J({},Ka.resultsTitle)))),P.createElement(Ko,{id:y,"aria-hidden":!0},v),P.createElement(Km.TextOverlayEntries,{"aria-hidden":!0},g.map(function(e){return P.createElement(Wm,{key:e.type,withIcon:!0,status:e.type,count:e.count})}))))},Jm,Ym,Xm,Zm,Qm,$m,eh,th=function(e){var t=e.onClick,n=M();return P.createElement(ca.IconButton,{label:n.formatMessage(Va.close),size:`small`,rounded:!0,tooltipPlacement:`left`,icon:P.createElement(la.XSmall,{color:q.cloud.getShade(10)}),onClick:t})},nh;(function(e){e.Bottom=`bottom`,e.Top=`top`})(nh||={});var rh=8,ih=D.div.withConfig({displayName:`InfoMessage__Arrow`})(sh||=Y([`
  position: absolute;
  border: `,`px solid transparent;
  width: 0;
  height: 0;
`],[`
  position: absolute;
  border: `,`px solid transparent;
  width: 0;
  height: 0;
`]),rh),ah={InfoButton:D.button.withConfig({displayName:`InfoMessage__InfoButton`})(ch||=Y([`
    cursor: pointer;
    background-color: transparent;
    padding: 3px;
    border: none;
    line-height: 1;

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px `,`;
    }

    svg {
      color: `,`;
    }
  `],[`
    cursor: pointer;
    background-color: transparent;
    padding: 3px;
    border: none;
    line-height: 1;

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px `,`;
    }

    svg {
      color: `,`;
    }
  `]),$(),q.cloud.getShade(5)),MessageHolder:D.aside.withConfig({displayName:`InfoMessage__MessageHolder`})(lh||=Y([`
    visibility: `,`;
    font-size: 1.2rem;
    background-color: `,`;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    color: #ffffff;
    padding: 14px 16px;
    border-radius: 4px;
    width: `,`px;
    line-height: 1.5;
    position: absolute;
    cursor: default;

    &[data-popper-placement^="bottom"] `,` {
      top: -`,`px;
      border-bottom: `,`px solid `,`;
    }

    &[data-popper-placement^="top"] `,` {
      bottom: -`,`px;
      border-top: `,`px solid `,`;
    }
  `],[`
    visibility: `,`;
    font-size: 1.2rem;
    background-color: `,`;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    color: #ffffff;
    padding: 14px 16px;
    border-radius: 4px;
    width: `,`px;
    line-height: 1.5;
    position: absolute;
    cursor: default;

    &[data-popper-placement^="bottom"] `,` {
      top: -`,`px;
      border-bottom: `,`px solid `,`;
    }

    &[data-popper-placement^="top"] `,` {
      bottom: -`,`px;
      border-top: `,`px solid `,`;
    }
  `]),function(e){return e.isOpen?`visible`:`hidden`},q.cloud.getShade(10),function(e){var t=e.maxWidth;return t===void 0?212:t},ih,2*rh,rh,q.cloud.getShade(10),ih,2*rh,rh,q.cloud.getShade(10))},oh=function(e){var t=e.id,n=e.message,r=e.label,i=e.maxWidth,a=e.baseOrientation,o=a===void 0?nh.Top:a,s=e.icon,c=s===void 0?P.createElement(la.ICircleSmall,{style:{width:16,height:16}}):s,l=e.className,u=(0,P.useState)(!1),d=u[0],f=u[1],p=(0,P.useState)(o)[0],m=`tooltip-`+(0,P.useRef)(t??pn()).current;(0,P.useEffect)(function(){var e=function(){f(!1)};return d?(0,K.default)(function(){return window.addEventListener(`click`,e)}):window.removeEventListener(`click`,e),function(){return window.removeEventListener(`click`,e)}},[d]);var h=(0,P.useState)(null),g=h[0],_=h[1],v=(0,P.useState)(null),y=v[0],b=v[1],x=(0,P.useState)(null),S=x[0],C=x[1],w=ra(g,y,{placement:o,modifiers:[{name:`arrow`,options:{element:S}},{name:`offset`,options:{offset:[0,12]}},{name:`flip`,enabled:!1}]}),T=w.styles,E=w.attributes;return P.createElement(P.default.Fragment,null,P.createElement(ah.InfoButton,{className:l,ref:_,"aria-label":r,"aria-describedby":m,"aria-expanded":d?`true`:`false`,onClick:function(){return f(!d)},onBlur:function(e){var t=e.relatedTarget;t&&t.closest(`a,button`)&&y?.contains(t)||f(!1)},onKeyDown:function(e){e.key===`Escape`&&(f(!1),e.stopPropagation())}},c),P.createElement(ah.MessageHolder,J({id:m,ref:function(e){return b(e)},isOpen:d,maxWidth:i,popupOrientation:p,style:T.popper},E.popper),d&&P.createElement(`span`,{role:`tooltip`,"aria-live":`polite`},n),P.createElement(ih,{ref:C,style:T.arrow})))},sh,ch,lh,uh=(0,P.createContext)({autoFocusOnOpen:!0}),dh=uh.Provider,fh=function(){return(0,P.useContext)(uh)},ph={Container:D.div.withConfig({displayName:`MainHeader__Container`})(hh||=Y([`
    position: relative;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  `],[`
    position: relative;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  `])),TopArea:D.div.withConfig({displayName:`MainHeader__TopArea`})(gh||=Y([`
    position: absolute;
    right: 12px;
    top: 12px;
    display: inline-flex;
    z-index: 1;
    > * {
      margin-left: 6px;
    }
  `],[`
    position: absolute;
    right: 12px;
    top: 12px;
    display: inline-flex;
    z-index: 1;
    > * {
      margin-left: 6px;
    }
  `])),HeadingContainer:D.div.withConfig({displayName:`MainHeader__HeadingContainer`})(_h||=Y([`
    padding: 16px 32px 12px 32px;
  `],[`
    padding: 16px 32px 12px 32px;
  `])),BrandTitle:D.div.withConfig({displayName:`MainHeader__BrandTitle`})(vh||=Y([`
    display: flex;
    align-items: center;
  `],[`
    display: flex;
    align-items: center;
  `])),BrandTitleText:D.div.withConfig({displayName:`MainHeader__BrandTitleText`})(yh||=Y([`
    color: `,`;
    font-size: 1.6rem;
    font-weight: 500;
  `],[`
    color: `,`;
    font-size: 1.6rem;
    font-weight: 500;
  `]),q.cloud.getShade(6)),MainHeading:D.h2.withConfig({displayName:`MainHeader__MainHeading`})(bh||=Y([`
    display: inline-block;
    font-size: 2.8rem;
    font-weight: 400;
    margin: 4px 0 0 0;
    color: `,`;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px `,`;
      border-radius: 4px;
    }
  `],[`
    display: inline-block;
    font-size: 2.8rem;
    font-weight: 400;
    margin: 4px 0 0 0;
    color: `,`;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px `,`;
      border-radius: 4px;
    }
  `]),q.cloud.getShade(10),$()),InfoMessage:D(oh).withConfig({displayName:`MainHeader__InfoMessage`})(xh||=Y([`
    margin-left: 3px;
    margin-top: -4px;
  `],[`
    margin-left: 3px;
    margin-top: -4px;
  `]))},mh=function(e){var t=e.onClose,n=e.title,r=e.titleA11y,i=e.baseId,a=e.hasInfo,o=a!==void 0&&a,s=e.topSlot,c=e.children,l=M(),u=(0,P.useRef)(null),d=`titleA11yDescription`+i,f=fh(),p=f.noCloseBtn,m=f.autoFocusOnOpen;return Wo(u,{takeFocus:m,temporary:!0,onceOnly:!0}),P.createElement(ph.Container,null,P.createElement(ph.HeadingContainer,null,P.createElement(ph.BrandTitle,null,P.createElement(ph.BrandTitleText,null,P.createElement(_,J({},Va.coachme))),o&&P.createElement(ph.InfoMessage,{id:`info-popup-`+i,maxWidth:160,baseOrientation:nh.Bottom,icon:P.createElement(la.ICircleSmall,{style:{width:10,height:10}}),message:l.formatMessage(Va.taglinePoweredBy),label:l.formatMessage(Va.moreInfo)})),P.createElement(ph.MainHeading,{ref:u,"aria-describedby":r?d:void 0},n),r&&P.createElement(Ko,{"aria-hidden":!0,id:d},r),c,P.createElement(ph.TopArea,null,s,!p&&P.createElement(th,{onClick:t}))))},hh,gh,_h,vh,yh,bh,xh,Sh={ProgressButton:D(ca.Button).withConfig({displayName:`CoachmeAssessmentHeader__ProgressButton`})(wh||=Y([`
    padding: 4px;
    min-height: auto;
    margin-top: -1px;
  `],[`
    padding: 4px;
    min-height: auto;
    margin-top: -1px;
  `])),HeaderTitle:D.div.withConfig({displayName:`CoachmeAssessmentHeader__HeaderTitle`})(Th||=Y([`
    display: flex;
    align-items: center;
  `],[`
    display: flex;
    align-items: center;
  `])),HeaderSubTitle:D.div.withConfig({displayName:`CoachmeAssessmentHeader__HeaderSubTitle`})(Eh||=Y([`
    margin-top: 8px;
    margin-left: 48px;
  `],[`
    margin-top: 8px;
    margin-left: 48px;
  `])),TitleText:D.h2.withConfig({displayName:`CoachmeAssessmentHeader__TitleText`})(Dh||=Y([`
    margin: 0;
    font-size: 2.8rem;
    font-weight: 400;
  `],[`
    margin: 0;
    font-size: 2.8rem;
    font-weight: 400;
  `])),Content:D.div.withConfig({displayName:`CoachmeAssessmentHeader__Content`})(Oh||=Y([`
    flex-grow: 1;
    min-height: 0;
    height: 100%;
  `],[`
    flex-grow: 1;
    min-height: 0;
    height: 100%;
  `])),PillHolder:D.div.withConfig({displayName:`CoachmeAssessmentHeader__PillHolder`})(kh||=Y([`
    margin: 8px 0;
  `],[`
    margin: 8px 0;
  `])),PillText:D.span.withConfig({displayName:`CoachmeAssessmentHeader__PillText`})(Ah||=Y([`
    font-size: 1.2rem;
    font-weight: `,`;
    color: `,`;
    border: 1px solid `,`;
    border-radius: 10px;
    padding: 4px 8px;
  `],[`
    font-size: 1.2rem;
    font-weight: `,`;
    color: `,`;
    border: 1px solid `,`;
    border-radius: 10px;
    padding: 4px 8px;
  `]),function(e){return e.submitted?700:500},function(e){return e.submitted?$():q.cloud.getShade(6)},q.cloud.getShade(4))},Ch=function(e){var t=e.type,n=M(),r=fh().noProgressBtn,i=rp(),a=i.groupId,o=i.bookLocation,s=i.itemIndex,c=i.currentItemStatus,l=i.questions,u=i.submitted,d=i.scorePercent,f=i.result,p=i.hostApi,m=t===Vh.Formative,h=!m,g=m?Ka.formativeTitle:Ka.summativeTitle,v=m?Ka.formativeA11yTitle:Ka.summativeA11yTitle,y=h?u&&f?X.Complete:X.Incomplete:c,b=n.formatMessage(v,{count:l.length,index:s+1,status:n.formatMessage(Q.status,{status:y}),score:y===X.Complete?n.formatMessage(Ka.scoreCorrectPercent,{score:d}):``}),x=``;return h&&u&&f?x=n.formatMessage(Ka.scoreCorrectPercent,{score:d}):h&&!u&&(x=n.formatMessage(Ka.questionCount,{count:l.length})),P.createElement(mh,{title:n.formatMessage(g,{count:l.length}),titleA11y:b,onClose:function(){return(p?.onRequestClose)?.call(p)},baseId:a,hasInfo:!0,topSlot:m&&!r&&P.createElement(Sh.ProgressButton,{naked:!0,size:`small`,onClick:function(){return(p?.onShowProgress)?.call(p,a,o)}},P.createElement(_,J({},Za.title)))},x&&P.createElement(Sh.PillHolder,null,P.createElement(Sh.PillText,{submitted:u},x)))},wh,Th,Eh,Dh,Oh,kh,Ah,jh={Container:D.div.withConfig({displayName:`CoachmeAssessmentContent__Container`})(Nh||=Y([`
    display: flex;
    flex-direction: column;
    height: 100%;
  `],[`
    display: flex;
    flex-direction: column;
    height: 100%;
  `])),Header:D.div.withConfig({displayName:`CoachmeAssessmentContent__Header`})(Ph||=Y([`
    padding: 24px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  `],[`
    padding: 24px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  `])),HeaderTitle:D.div.withConfig({displayName:`CoachmeAssessmentContent__HeaderTitle`})(Fh||=Y([`
    display: flex;
    align-items: center;
  `],[`
    display: flex;
    align-items: center;
  `])),HeaderSubTitle:D.div.withConfig({displayName:`CoachmeAssessmentContent__HeaderSubTitle`})(Ih||=Y([`
    margin-top: 8px;
    margin-left: 48px;
  `],[`
    margin-top: 8px;
    margin-left: 48px;
  `])),TitleText:D.h2.withConfig({displayName:`CoachmeAssessmentContent__TitleText`})(Lh||=Y([`
    margin: 0 0 0 16px;
    font-size: 2.8rem;
    font-weight: 400;
  `],[`
    margin: 0 0 0 16px;
    font-size: 2.8rem;
    font-weight: 400;
  `])),Content:D.div.withConfig({displayName:`CoachmeAssessmentContent__Content`})(Rh||=Y([`
    flex-grow: 1;
    min-height: 0;
    z-index: 0;
    height: 100%;
  `],[`
    flex-grow: 1;
    min-height: 0;
    z-index: 0;
    height: 100%;
  `]))},Mh=function(e){var t=e.type,n=M(),r=rp(),i=r.groupId,a=r.submitted,o=r.scorePercent,s=r.totalCorrect,c=r.totalIncorrect,l=r.totalIncomplete,u=r.result,d=r.sendAriaLiveMessage,f=t===Vh.Formative,p=!f,m=tl(u),h=(0,P.useState)(!1),g=h[0],_=h[1];return(0,P.useEffect)(function(){!m&&u&&p&&(_(!0),d(n.formatMessage(Ka.resultsFocusA11y)))},[n,p,m,u,d,a]),P.createElement(jh.Container,{role:`region`,"aria-label":n.formatMessage(Va.a11yTitle)},P.createElement(jh.Content,null,P.createElement(Pm,{mode:f?Am.Autonomous:Am.Amalgamated,layout:f?jm.OneAtAtime:jm.VerticalAllTogether,header:P.createElement(Ch,{type:t}),prologue:p&&a&&u&&P.createElement(qm,{id:`summative-results-`+i,focusResults:g,scorePercent:o,totalCorrect:s,totalIncorrect:c,totalIncomplete:l})})))},Nh,Ph,Fh,Ih,Lh,Rh,zh=function(e){return e.type===`assessments`},Bh=function(e){return e?zh(e)?e.relationships?.contents.data.filter(function(e){return e.attributes.content_type===`Question`||e.attributes.content_type===`Tutorial`}).map(function(e){var t=e.attributes;return J({},t.data)}):e:[]},Vh;(function(e){e.Formative=`Formative`,e.Summative=`Summative`})(Vh||={});var Hh;(function(e){e.None=`None`,e.SubmitAssessmentFailure=`SubmitAssessmentFailure`})(Hh||={});var Uh=function(e){var t=e.groupId,n=e.type,r=e.questionData,i=e.questionIndex,a=e.questionIndexToken,o=e.evaluator,s=e.evaluatedData,c=e.onInit,l=e.onRequestClose,u=e.onShowProgress,d=e.onRevealAnswer,f=e.onRetryQuestion,p=e.onTutorRequested,m=e.createFlashcard,h=e.getFlashcardDecks,g=e.reviewFlashcards,_=e.bookLocation,v=(0,P.useMemo)(function(){return Bh(r)},[r]);return(0,P.useEffect)(function(){c?.()},[s,c]),P.createElement(np,{groupId:t,bookLocation:_,questions:v,questionIndex:i,questionIndexToken:a,evaluator:o,evaluatedData:s,hostApi:{onRequestClose:l,onShowProgress:u,onRevealAnswer:d,onRetryQuestion:f,onTutorRequested:p,getFlashcardDecks:h,createFlashcard:m,reviewFlashcards:g}},P.createElement(Mh,{type:n}))},Wh={ErrorContainer:D.div.withConfig({displayName:`InlineError__ErrorContainer`})(Kh||=Y([`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: `,`;
    height: 100%;
  `],[`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: `,`;
    height: 100%;
  `]),function(e){return e.vertCenter?`center`:`flex-start`}),ErrorIconWrapper:D.div.withConfig({displayName:`InlineError__ErrorIconWrapper`})(qh||=Y([`
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
  `],[`
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
  `])),ErrorContent:D.div.withConfig({displayName:`InlineError__ErrorContent`})(Yh||=Y([`
    padding: 16px;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    justify-content: center;
    width: 75%;
    `,`
  `],[`
    padding: 16px;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    justify-content: center;
    width: 75%;
    `,`
  `]),function(e){return!e.vertCenter&&k(Jh||=Y([`
        margin-top: 72px;
      `],[`
        margin-top: 72px;
      `]))}),ErrorTitle:D.div.withConfig({displayName:`InlineError__ErrorTitle`})(Xh||=Y([`
    margin-bottom: 0;
    font-weight: 700;
    text-align: center;
  `],[`
    margin-bottom: 0;
    font-weight: 700;
    text-align: center;
  `])),ErrorMessage:D.div.withConfig({displayName:`InlineError__ErrorMessage`})(Zh||=Y([`
    margin: 12px 0 0 0;
    font-weight: 400;
    text-align: center;
  `],[`
    margin: 12px 0 0 0;
    font-weight: 400;
    text-align: center;
  `]))},Gh=function(e){var t=e.error,n=e.vertCenter,r=n===void 0||n;return P.createElement(Wh.ErrorContainer,{vertCenter:r},P.createElement(Wh.ErrorContent,{vertCenter:r},P.createElement(Wh.ErrorIconWrapper,null,P.createElement(pa.ExclamationCircle,{color:q.red.getShade(6)})),P.createElement(Wh.ErrorTitle,null,t.title),P.createElement(Wh.ErrorMessage,null,t.description)))},Kh,qh,Jh,Yh,Xh,Zh,Qh=function(e){var t=e.id,n=e.enrichment,r=e.evaluator,i=e.evaluatedData,a=e.errorData,o=xa(e,[`id`,`enrichment`,`evaluator`,`evaluatedData`,`errorData`]),s=M(),c=fh().noCloseBtn,l=(0,P.useState)(a),u=l[0],d=l[1];(0,P.useEffect)(function(){d(a)},[a]);var f=(0,P.useMemo)(function(){if(u&&u.type!=uo.None)return{title:s.formatMessage(Xa.enrichmentLoadErrorTitle),description:s.formatMessage(Xa.enrichmentLoadErrorDescription)}},[s,u]);if(f)return P.createElement(P.default.Fragment,null,P.createElement(Gh,{error:f}),!c&&P.createElement(th,{onClick:function(){return o.onRequestClose?.call(o)}}));if(n&&n.id===t&&i){var p=n.relationships?.content.data[0];(n.type!=`book_enrichments`||n.relationships?.content.data[0].type!=`assessments`)&&d({type:uo.UnknownEnrichmentType});var m=n.relationships?.content.data[0].attributes.data?.book_location;return P.createElement(Uh,J({type:p.attributes.assessment_type===co.FORMATIVE?Vh.Formative:Vh.Summative,groupId:n.id,questionData:p,evaluator:r,evaluatedData:i,bookLocation:m},o))}return P.createElement(P.default.Fragment,null,P.createElement(pl,{vertCenter:!0}),!c&&P.createElement(th,{onClick:function(){return o.onRequestClose?.call(o)}}))},$h={"coachme.base.ok":`OK`,"coachme.base.cancel":`Cancel`,"coachme.base.continue":`Continue`,"coachme.base.submit":`Submit`,"coachme.base.loading":`Loading`,"coachme.base.close":`Close`,"coachme.base.back":`Back`,"coachme.base.moreInfo":`More information`,"coachme.base.taglinePoweredBy":`Powered by VitalSource’s artificial intelligence technology.`,"coachme.base.evaluating":`Evaluating - standby`,"coachme.base.questions":`Questions`,"coachme.base.coachme":`CoachMe`,"coachme.base.a11yTitle":`CoachMe Questions`,"coachme.base.more":`more`,"coachme.base.less":`less`,"coachme.question.status":`{status, select, Incomplete {Incomplete} Complete {Complete} Correct {Correct} Incorrect {Incorrect} other {{status}}}`,"coachme.question.pip":`question {index} status {status}`,"coachme.question.type.multipleChoice":`Multiple Choice Question`,"coachme.question.type.gapFill":`Cloze Question`,"coachme.question.type.submitCompare":`Submit Compare Question`,"coachme.question.notification.attention":`Attention.`,"coachme.question.feedback.answerCorrect":`Your answer is correct.`,"coachme.question.feedback.answerIncorrect":`Your answer is incorrect.`,"coachme.question.feedback.submissionThanks":`Thank you for your submission.`,"coachme.question.feedback.wrongAnswersSpecific":`You have {wrongCount} answers that are incorrect.`,"coachme.question.feedback.wrongAnswersGeneric":`One or more answers is incorrect.`,"coachme.question.feedback.wrongAnswersPrompt":`See question and answers above to see which ones you got wrong.`,"coachme.question.feedback.wrongAnswersPromptNotIndicated":`Information about which blanks are incorrect is not available in order to avoid revealing the correct answers before you've had the opportunity to try again.`,"coachme.question.feedback.itemCorrectAnswer":`Correct answer.`,"coachme.question.feedback.itemIncorrectAnswer":`Incorrect answer.`,"coachme.question.feedback.itemRevealedCorrectAnswer":`Revealed as the correct answer.`,"coachme.question.feedback.correctAnswerIs":`The correct answer is {correctAnswer}`,"coachme.question.feedback.revealAnnouncement":`Question solution has been revealed. You have moved back to the top of question area. Navigate the question area to find the answers.`,"coachme.question.feedback.resetAnnouncement":`Question has reset. You have moved back to the top of the question area.`,"coachme.question.feedback.tightropeResponse":`{feedback}`,"coachme.question.controls.checkAnswer":`Check Answer`,"coachme.question.controls.revealAnswer":`Reveal Answer`,"coachme.question.controls.submit":`Submit`,"coachme.question.controls.retry":`Retry`,"coachme.question.controls.tutorDiscuss":`Discuss this with tutor`,"coachme.question.controls.tutorReview":`Review with tutor`,"coachme.question.controls.nextQuestion":`Next Question`,"coachme.question.controls.done":`Done`,"coachme.question.controls.typedPlaceHolder":`Type your response`,"coachme.question.controls.typedLabel":`Enter your Response`,"coachme.question.controls.selectPlaceHolder":`- Select -`,"coachme.question.validation.pleaseSelectAnswer":`Please select an answer.`,"coachme.question.validation.typeAnAnswer":`Please type an answer.`,"coachme.question.status.incomplete":`Incomplete`,"coachme.question.status.complete":`Complete`,"coachme.question.status.incorrect":`Incorrect`,"coachme.question.status.correct":`Correct`,"coachme.question.suggestions.prompt":`You may have misspelled your answer. {count, plural, one {Does this one look right} other {Do any of these look right}}?`,"coachme.question.suggestions.close":`Close Suggestions`,"coachme.question.suggestions.selectedA11y":`Gap {index} has been filled with the suggestion {value}`,"coachme.submitCompare.inputFieldLabel":`Your answer.`,"coachme.submitCompare.answerSaved":`Your answer has been saved.`,"coachme.submitCompare.compareWithExpert":`Compare your response to an expert’s answer:`,"coachme.submitCompare.selfAssessmentAnnouncement":`A self assessment panel has appeared beneath the expert's answer.`,"coachme.enhanced.aiDisclaimer":`This content was generated by AI and may contain mistakes. Be sure to check important information.`,"coachme.enhancedQuestions.similarTermsLabel":`Explain the difference between the term {term1} and {term2}.`,"coachme.enhancedQuestions.writingQuestionLabel":`Write a Test Question.`,"coachme.explainSelection.title":`Explain selection`,"coachme.explainSelection.simplifyResponse":`Sure! I can simplify this for you:`,"coachme.explainSelection.simplifyFollowup":`Did that help? If you think it did, try saying it back to me. If not, I can try to simplify differently.`,"coachme.explainSelection.simplifyAgain":`Simplify again`,"coachme.explainSelection.simplifyAgainResponse":`No problem! Here's another way to put it:`,"coachme.explainSelection.simplifyAgainFollowup":`Now that you've seen this put another way, try explaining it back to me in your own words. If you're still feeling stuck, highlight the passage in the book to ask an instructor or peer about later.`,"coachme.explainSelection.endSession":`End Session`,"coachme.explainSelection.letMeTrySayingItBackToYou":`Let me try saying it back to you`,"coachme.explainSelection.explainInYourOwnWords":`Here's the text you highlighted. Try explaining in your own words:`,"coachme.explainSelection.explainInYourOwnWordsPlaceholder":`Enter your response`,"coachme.explainSelection.validation.notFilledIn":`Please fill out this field.`,"coachme.explainSelection.chatRoleAssistant":`Bot:`,"coachme.explainSelection.chatRoleUser":`You:`,"coachme.gapFill.gapNumberLabel":`{blankIndex, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} blank.`,"coachme.gapFill.fillInTheBlankPrompt":`Fill in the {blankIndex, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} blank.`,"coachme.gapFill.validation.notFilledIn":`Please select an answer for each blank.`,"coachme.gapFill.validation.sameAnswerRepeated":`Each answer can only be used once.`,"coachme.gapFill.wordBank.headerLabel":`Word bank. Each word in the bank can only be used once.`,"coachme.gapFill.wordBank.wordSpent":`This word has been used.`,"coachme.gapFill.wordBank.footerLabel":`End of word bank.`,"coachme.widgets.addToFlashcard":`Add to Flashcard`,"coachme.widgets.createANote":`Create a Note`,"coachme.widgets.noteCreated":`Note created. Go back and review.`,"coachme.widgets.reviewNote":`Review Note`,"coachme.widgets.createAFlashcard":`Create a Flashcard`,"coachme.widgets.reviewFlashcard":`Review Flashcard`,"coachme.widgets.flashcardCreated":`Flashcard created. Go back and review.`,"coachme.questionGroup.previousQuestion":`Previous question`,"coachme.questionGroup.nextQuestion":`Next question`,"coachme.questionGroup.assessmentStart":`Start of assessment area`,"coachme.questionGroup.assessmentResetA11y":`The assessment has been reset`,"coachme.questionGroup.assessmentAnswersRevealedA11y":`Answers have been revealed see questions below for details`,"coachme.questionGroup.checkAllAnswers":`Check All Answers`,"coachme.questionGroup.retryQuestions":`Retry Questions`,"coachme.questionGroup.revealAnswers":`Reveal Answers`,"coachme.questionGroup.questionPanelA11y":`Question {index} panel shown below`,"coachme.assessment.formativeTitle":`Practice {count, plural, one {Question} other {Questions}}`,"coachme.assessment.formativeA11yTitle":`{count, plural, one {, status {status}} other {, current question {index}, status {status}}}, {count, plural, other {contains # questions}}`,"coachme.assessment.summativeTitle":`Knowledge Check`,"coachme.assessment.summativeA11yTitle":`status {status}, {score}, contains {count, plural, one {one question} other {# questions}}`,"coachme.assessment.questionCount":`{count, plural, one {# Question} other {# Questions}}`,"coachme.assessment.scoreCorrectPercent":`{score}% Correct`,"coachme.assessment.scoreCorrectCount":`{count} Correct`,"coachme.assessment.scoreIncorrectCount":`{count} Incorrect`,"coachme.assessment.scoreIncompleteCount":`{count} Incomplete`,"coachme.assessment.confirmIncompleteDialog.title":`You have {count} incomplete {count, plural, one {question} other {questions}}`,"coachme.assessment.confirmIncompleteDialog.message":`All incomplete questions will be marked as ‘Incorrect’. Are you sure you want to continue?`,"coachme.assessment.resultsTitle":`Your results`,"coachme.assessment.resultsA11yLineItem":`{count, plural, one {# question} other {# questions}} {status}`,"coachme.assessment.resultsA11y":`Score {score}%, {breakdown}. See {count, plural, one {question} other {questions}} below for more details.`,"coachme.assessment.resultsFocusA11y":`A results panel has appeared above the question content.`,"coachme.questionImprovement.prompt":`Was this question helpful?`,"coachme.questionImprovement.thumbsUp":`Yes`,"coachme.questionImprovement.thumbsDown":`No`,"coachme.questionImprovement.dialog.title":`Tell Us Why`,"coachme.questionImprovement.dialog.information":`Bookshelf CoachMe practice questions are powered by VitalSource’s artificial intelligence technology. Your feedback will help us continue to improve the learner experience.`,"coachme.questionImprovement.dialog.issue.wrongAnswer":`I think the correct answer is wrong`,"coachme.questionImprovement.dialog.issue.mineAlsoCorrect":`I think my answer is also correct`,"coachme.questionImprovement.dialog.issue.questionUnclear":`The question is unclear to me`,"coachme.questionImprovement.dialog.issue.questionNotRelevant":`I don't think the question is relevant to the material`,"coachme.questionImprovement.dialog.otherFeedback":`Other/Additional Feedback`,"coachme.questionImprovement.dialog.feedbackPlaceholder":`Leave a comment`,"coachme.errors.evaluateErrorTitle":`An error occurred`,"coachme.errors.evaluateErrorDescription":`We are unable to submit your answer. Try again in a few minutes.`,"coachme.errors.revealAnswerErrorTitle":`An error occurred`,"coachme.errors.revealAnswerErrorDescription":`We are unable to reveal your answer. Try again in a few minutes.`,"coachme.errors.submitAssessmentErrorTitle":`An error occurred`,"coachme.errors.submitAssessmentErrorDescription":`We are unable to submit your assessment for evaluation. Try again in a few minutes.`,"coachme.errors.improvementFeedbackErrorTitle":`An error occurred`,"coachme.errors.improvementFeedbackErrorDescription":`We are unable to register your feedback. Try again in a few minutes.`,"coachme.errors.enrichmentLoadErrorTitle":`An error occurred loading questions.`,"coachme.errors.enrichmentLoadErrorDescription":`We are working on getting it back up. Sorry for the inconvenience.`,"coachme.errors.progressLoadErrorTitle":`An error occurred loading question progress.`,"coachme.errors.progressLoadErrorDescription":`We are working on getting it back up. Sorry for the inconvenience.`,"coachme.errors.explainSelectionErrorTitle":`An error occurred`,"coachme.errors.explainSelectionErrorDescription":`We are unable to simplify your selection. Please try again in a few.`,"coachme.progress.title":`Question Progress`,"coachme.progress.countComplete":`{completionCount} complete`,"coachme.progress.countIncomplete":`{countIncomplete} incomplete`,"coachme.progress.countBreakdownA11y":`{completionCount, plural, one {# question} other {# questions}} complete, {countIncomplete, plural, one {# question} other {# questions}} incomplete`,"coachme.progress.indicatorA11y":`{percentComplete}% or {completionCount} out of {completionTotal, plural, one {# question} other {# questions}} complete`,"coachme.progress.questionStatusA11y":`Question {status}`,"coachme.progress.detailListItemA11y":`Activity on page {page} contains {questionCount, plural, one {# question} other {# questions}}`,"coachme.progress.backToAll":`Back to All Chapters`,"coachme.progress.highWatermark.button":`Alert`,"coachme.progress.highWatermark.alertText":`Some questions in this chapter have been replaced. Your overall progress completion has not changed. <a>Learn More</a>`,"coachme.progress.highWatermark.supportUrl":`https://support.vitalsource.com/hc/en-us/articles/17344774368791`},eg=Object.freeze({__proto__:null,default:$h}),tg={supported:[[`es-MX`,`es-MX`],[`pt-BR`,`pt-BR`]]};function ng(e){switch(e){case`../../locale/en.json`:return Promise.resolve().then(function(){return eg});case`../../locale/es-MX.json`:return o(()=>import(`./es-MX-43ae3319-CDKChBjK.js`),[]);case`../../locale/pt-BR.json`:return o(()=>import(`./pt-BR-5f0b7299-CaJIIPmF.js`),[]);default:return new Promise(function(t,n){(typeof queueMicrotask==`function`?queueMicrotask:setTimeout)(n.bind(null,Error(`Unknown variable dynamic import: `+e)))})}}var rg=function(e){return!!tg.supported.find(function(t){return t[0]===e})},ig=function(e){var t=e.locale,n=e.children,r=t||navigator.language,i=(0,P.useState)(),a=i[0],o=i[1],s=(0,P.useCallback)(function(e){var t=J({},e);delete t.smartling,o(t)},[]),c=(0,P.useCallback)(function(){s($h)},[s]);return(0,P.useEffect)(function(){rg(r)?ng(`../../locale/${r}.json`).then(function(e){s(J(J({},$h),e.default))}).catch(function(){c()}):c()},[s,c,r]),a?P.createElement(y,{locale:r,messages:a},n):null},ag=(0,ya.default)({1:`#E6ECFF`,2:`#B3C7FE`,3:`#6790FE`,4:`#1B58FD`,5:`#0138CB`,6:`#012892`,7:`#01237F`,8:`#011C65`,9:`#01154C`,10:`#000E33`,inflection:6},`ai`),og=(0,va.createTheme)({color:{primary:ag},typography:{htmlFontSize:10}}),sg=(0,P.createContext)(null),cg=function(e){var t=e.theme,n=e.children,r=(0,P.useContext)(sg)??og;return P.createElement(va.ThemeProvider,{theme:t??r},n)},lg=(0,P.createContext)({active:!0}),ug=lg.Provider,dg=function(){return(0,P.useContext)(lg)},fg=function(e){var t=e.enrichmentId,n=e.theme,r=e.locale,i=e.active,a=e.noCloseBtn,o=e.noProgressBtn,s=e.autoFocusOnOpen,c=s===void 0||s,l=xa(e,[`enrichmentId`,`theme`,`locale`,`active`,`noCloseBtn`,`noProgressBtn`,`autoFocusOnOpen`]),u=fo(t),d=u.data,f=u.restoredData,p=u.error,m=$a,h=(0,P.useMemo)(function(){return m.getEnrichmentService(t)},[t,m]),g=i??!0;(0,P.useEffect)(function(){if(g)return h.enrichmentEvent(`enrichment_panel_opened`),function(){h.enrichmentEvent(`enrichment_panel_closed`)}},[h,g]);var _=(0,P.useMemo)(function(){return{noCloseBtn:a,noProgressBtn:o,autoFocusOnOpen:c}},[a,o,c]),v=(0,P.useMemo)(function(){return{active:g}},[g]);return P.createElement(ig,{locale:r},P.createElement(cg,{theme:n},P.createElement(dh,{value:_},P.createElement(ug,{value:v},P.createElement(`div`,{style:{height:`100%`}},function(){return P.createElement(Qh,J({id:t,enrichment:d,evaluator:h,evaluatedData:f,errorData:p},l))}())))))},pg;(function(e){e.Rephrasing=`rephrasing`,e.RephraseAgain=`rephrase_again`,e.StudentExplanation=`student_explanation`,e.AwaitingStudentExplanation=`awaiting_student_explanation`,e.EndSession=`end_session`})(pg||={});var mg;(function(e){e.ExplainItBack=`ExplainItBack`,e.RephraseAgain=`RephraseAgain`,e.SaveAsFlashcard=`SaveAsFlashcard`,e.EndSession=`EndSession`})(mg||={});var hg=function(e){return k(gg||=Y([`
  overflow: hidden;
  text-overflow: ellipsis;
  /* stylelint-disable property-no-vendor-prefix -- clamp is well supported */
  /* stylelint-disable value-no-vendor-prefix -- using these prefixes */
  display: -webkit-box;
  -webkit-line-clamp: `,`;
  -webkit-box-orient: vertical;
  /* stylelint-enable value-no-vendor-prefix */
  /* stylelint-enable property-no-vendor-prefix */
`],[`
  overflow: hidden;
  text-overflow: ellipsis;
  /* stylelint-disable property-no-vendor-prefix -- clamp is well supported */
  /* stylelint-disable value-no-vendor-prefix -- using these prefixes */
  display: -webkit-box;
  -webkit-line-clamp: `,`;
  -webkit-box-orient: vertical;
  /* stylelint-enable value-no-vendor-prefix */
  /* stylelint-enable property-no-vendor-prefix */
`]),e)};D.div.withConfig({displayName:`ExpandableTruncator__OuterContainer`})(_g||=Y([`
    position: relative;
  `],[`
    position: relative;
  `])),D.div.withConfig({displayName:`ExpandableTruncator__ClampedContainer`})(vg||=Y([`
    `,`;
  `],[`
    `,`;
  `]),function(e){return!e.isExpanded&&hg(e.lines)}),D.div.attrs({"aria-hidden":!0}).withConfig({displayName:`ExpandableTruncator__HiddenContent`})(yg||=Y([`
    pointer-events: none;
    height: 0;
    opacity: 0;
  `],[`
    pointer-events: none;
    height: 0;
    opacity: 0;
  `]));var gg,_g,vg,yg,bg=250,xg=w(wg||=Y([`
  0% {
    transform: scale(0);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
`],[`
  0% {
    transform: scale(0);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
`])),Sg=w(Tg||=Y([`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`],[`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`]));D.div.withConfig({displayName:`ChatMessage__Wrapper`})(Eg||=Y([`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: `,`;
    margin-top: 12px;
    &:first-of-type: {
      margin-top: 0;
    }
    &.chat-message-assistant + .chat-message-user {
      margin-top: 24px;
    }
    &.chat-message-user + .chat-message-assistant {
      margin-top: 24px;
    }
    &.chat-message-user + .chat-message-user {
      margin-top: 12px;
    }
  `],[`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: `,`;
    margin-top: 12px;
    &:first-of-type: {
      margin-top: 0;
    }
    &.chat-message-assistant + .chat-message-user {
      margin-top: 24px;
    }
    &.chat-message-user + .chat-message-assistant {
      margin-top: 24px;
    }
    &.chat-message-user + .chat-message-user {
      margin-top: 12px;
    }
  `]),function(e){return e.$role===Cg.User?`flex-end`:`flex-start`}),D.div.withConfig({displayName:`ChatMessage__Message`})(Og||=Y([`
    margin-left: 0px;
    margin-right: 10px;
    background: #ffffff;
    border-radius: 4px 16px 16px 16px;
    box-shadow: 0px 4px 16px rgba(47, 62, 66, 0.16);
    padding: 16px;
    line-height: 1.1;
    animation: `,` `,`ms
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `,`
  `],[`
    margin-left: 0px;
    margin-right: 10px;
    background: #ffffff;
    border-radius: 4px 16px 16px 16px;
    box-shadow: 0px 4px 16px rgba(47, 62, 66, 0.16);
    padding: 16px;
    line-height: 1.1;
    animation: `,` `,`ms
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `,`
  `]),xg,bg,function(e){return e.$role===Cg.User&&k(Dg||=Y([`
        margin-left: 10px;
        margin-right: 0;
        color: #ffffff;
        background: linear-gradient(251.54deg, `,` 17.84%, `,` 83.73%);
        border-radius: 16px 16px 2px 16px;
        animation: `,` `,`ms
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      `],[`
        margin-left: 10px;
        margin-right: 0;
        color: #ffffff;
        background: linear-gradient(251.54deg, `,` 17.84%, `,` 83.73%);
        border-radius: 16px 16px 2px 16px;
        animation: `,` `,`ms
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      `]),po(5),$(),Sg,bg)}),D(ca.Button).withConfig({displayName:`ChatMessage__MoreButton`})(kg||=Y([`
    margin-top: 8px;
    position: relative;
    left: -2px;
    text-transform: capitalize;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `],[`
    margin-top: 8px;
    position: relative;
    left: -2px;
    text-transform: capitalize;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `]));var Cg;(function(e){e.Assistant=`Assistant`,e.User=`User`})(Cg||={});var wg,Tg,Eg,Dg,Og,kg,Ag=18,jg=10;D.div.withConfig({displayName:`CoachMeLoader__Container`})(Mg||=Y([`
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: `,`;
  height: `,`;

  background: `,`;
  border-radius: 4px;

  &:focus {
    outline: 1px solid `,`;
  }
  @keyframes loadingPulse {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.5);
    }
    20% {
      transform: scale(2);
    }
    30% {
      transform: scale(1.5);
    }
    40% {
      transform: scale(1);
    }
  }
  & div:first-child {
    animation: loadingPulse 1.5s infinite linear;
  }
  & div:nth-child(2) {
    animation: loadingPulse 1.5s 0.15s infinite linear;
  }
  & div:nth-child(3) {
    animation: loadingPulse 1.5s 0.3s infinite linear;
  }
  & div:nth-child(4) {
    animation: loadingPulse 1.5s 0.45s infinite linear;
  }
  & div:last-child {
    animation: loadingPulse 1.5s 0.6s infinite linear;
  }
`],[`
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: `,`;
  height: `,`;

  background: `,`;
  border-radius: 4px;

  &:focus {
    outline: 1px solid `,`;
  }
  @keyframes loadingPulse {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.5);
    }
    20% {
      transform: scale(2);
    }
    30% {
      transform: scale(1.5);
    }
    40% {
      transform: scale(1);
    }
  }
  & div:first-child {
    animation: loadingPulse 1.5s infinite linear;
  }
  & div:nth-child(2) {
    animation: loadingPulse 1.5s 0.15s infinite linear;
  }
  & div:nth-child(3) {
    animation: loadingPulse 1.5s 0.3s infinite linear;
  }
  & div:nth-child(4) {
    animation: loadingPulse 1.5s 0.45s infinite linear;
  }
  & div:last-child {
    animation: loadingPulse 1.5s 0.6s infinite linear;
  }
`]),function(e){return`${(e.dotsLength+jg)*e.size-jg}px`},function(e){return`${e.dotsLength*e.size}px`},po(1),$()),D.div.withConfig({displayName:`CoachMeLoader__Dot`})(Ng||=Y([`
  height: `,`;
  width: `,`;
  border-radius: 100%;
  margin: 0 `,`;
  background: `,`;
`],[`
  height: `,`;
  width: `,`;
  border-radius: 100%;
  margin: 0 `,`;
  background: `,`;
`]),function(e){return`${e.size}px`},function(e){return`${e.size}px`},function(e){return`${e.size*(jg/Ag)}px`},function(e){return e.theme.vstui.color.primary.getShade(e.bgColor)});var Mg,Ng,Pg=w(Bg||=Y([`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`],[`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`])),Fg=500,Ig=250,Lg=200,Rg=Fg+Ig+Lg+3e3,zg=k(Vg||=Y([`
  `,` `,`ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
`],[`
  `,` `,`ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
`]),Pg,Ig);D.div.withConfig({displayName:`ChatLoader`})(Hg||=Y([`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    padding: 24px 0;
    min-height: 88px;
    box-sizing: border-box;
    opacity: 0;
    animation: `,`;
    animation-delay: `,`ms;
  `],[`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    padding: 24px 0;
    min-height: 88px;
    box-sizing: border-box;
    opacity: 0;
    animation: `,`;
    animation-delay: `,`ms;
  `]),function(e){return e.$visible?zg:`none`},Fg),D.div.withConfig({displayName:`ChatLoader__LoaderWrapper`})(Ug||=Y([`
    opacity: 0;
    animation: `,`;
    animation-delay: `,`ms;
  `],[`
    opacity: 0;
    animation: `,`;
    animation-delay: `,`ms;
  `]),function(e){return e.$visible?zg:`none`},Fg+Ig+Lg);var Bg,Vg,Hg,Ug;Rg+200,D.div.withConfig({displayName:`ChatContainer__Container`})(Wg||=Y([`
    display: flex;
    flex-direction: column;
    padding: 10px 24px 24px 24px;
    flex: 1;
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    > * {
      flex-shrink: 0;
    }
  `],[`
    display: flex;
    flex-direction: column;
    padding: 10px 24px 24px 24px;
    flex: 1;
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    > * {
      flex-shrink: 0;
    }
  `]));var Wg,Gg=w(Kg||=Y([`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`],[`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`]));D.div.withConfig({displayName:`ChatActions__Container`})(qg||=Y([`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 12px 8px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 24px;
    animation: `,` 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    > * {
      flex-shrink: 0;
    }
  `],[`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 12px 8px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 24px;
    animation: `,` 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    > * {
      flex-shrink: 0;
    }
  `]),Gg);var Kg,qg;D.div.withConfig({displayName:`ChatInputBox__InputBoxContainer`})(Jg||=Y([`
    margin-top: auto;
    border-top: 1px solid `,`;
    padding-top: 16px;
  `],[`
    margin-top: auto;
    border-top: 1px solid `,`;
    padding-top: 16px;
  `]),q.frost.getShade(4)),D.textarea.withConfig({displayName:`ChatInputBox__TextArea`})(Yg||=Y([`
    display: block;
    width: 100%;
    padding: 10px 16px;
    margin-top: 8px;
    margin-bottom: 10px;
    background-color: #ffffff;
    border-width: 1px;
    border-style: solid;
    border-color: `,`;
    border-radius: 8px;
    height: 80px;
    line-height: 1.5;
    resize: none;
    box-sizing: border-box;
    color: `,`;
    font-size: 1.6rem;
    font-family: inherit;
    &:focus {
      border: 1px solid `,`;
      box-shadow: 0 0 0 1px `,`;
      outline: none;
    }
    ::placeholder {
      font-weight: 300;
      color: rgba(0, 0, 0, 0.57);
    }
  `],[`
    display: block;
    width: 100%;
    padding: 10px 16px;
    margin-top: 8px;
    margin-bottom: 10px;
    background-color: #ffffff;
    border-width: 1px;
    border-style: solid;
    border-color: `,`;
    border-radius: 8px;
    height: 80px;
    line-height: 1.5;
    resize: none;
    box-sizing: border-box;
    color: `,`;
    font-size: 1.6rem;
    font-family: inherit;
    &:focus {
      border: 1px solid `,`;
      box-shadow: 0 0 0 1px `,`;
      outline: none;
    }
    ::placeholder {
      font-weight: 300;
      color: rgba(0, 0, 0, 0.57);
    }
  `]),function(e){return e.$hasError?q.red.getShade(6):`rgba(0, 0, 0, 0.43)`},q.cloud.getShade(10),q.cloud.getShade(10),q.cloud.getShade(10)),D(ca.Button).withConfig({displayName:`ChatInputBox__MoreButton`})(Xg||=Y([`
    margin-top: 8px;
    position: relative;
    left: -2px;
    text-transform: capitalize;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `],[`
    margin-top: 8px;
    position: relative;
    left: -2px;
    text-transform: capitalize;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `])),D.p.withConfig({displayName:`ChatInputBox__ValidationError`})(Zg||=Y([`
    color: `,`;
    margin: 0;
    svg {
      margin-right: 10px;
    }
  `],[`
    color: `,`;
    margin: 0;
    svg {
      margin-right: 10px;
    }
  `]),q.red.getShade(7)),D.p.withConfig({displayName:`ChatInputBox__Title`})(Qg||=Y([`
    font-weight: bold;
    margin: 0 0 10px 0;
  `],[`
    font-weight: bold;
    margin: 0 0 10px 0;
  `])),D.fieldset.withConfig({displayName:`ChatInputBox__Fieldset`})($g||=Y([`
    border: none;
    padding-left: 0;
    margin-top: 16px;
    > legend {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.5;
    }
  `],[`
    border: none;
    padding-left: 0;
    margin-top: 16px;
    > legend {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.5;
    }
  `]));var Jg,Yg,Xg,Zg,Qg,$g,e_=w(n_||=Y([`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`],[`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`])),t_=w(r_||=Y([`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`],[`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`]));D.div.withConfig({displayName:`ExplainSelectionContent__ContentWrapper`})(i_||=Y([`
    height: 100%;
    display: flex;
    flex-direction: column;
  `],[`
    height: 100%;
    display: flex;
    flex-direction: column;
  `])),D.div.withConfig({displayName:`ExplainSelectionContent__Container`})(a_||=Y([`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
  `],[`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
  `])),D.div.withConfig({displayName:`ExplainSelectionContent__InputBoxContainer`})(o_||=Y([`
    margin-top: auto;
  `],[`
    margin-top: auto;
  `])),D.div.withConfig({displayName:`ExplainSelectionContent__TopArea`})(s_||=Y([`
    display: flex;
    justify-content: end;
    > * {
      position: relative;
      right: -15px;
    }
  `],[`
    display: flex;
    justify-content: end;
    > * {
      position: relative;
      right: -15px;
    }
  `])),D.div.withConfig({displayName:`ExplainSelectionContent__LoaderWrapper`})(l_||=Y([`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    padding: 24px 0;
    opacity: 0;
    animation: `,` 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    `,`
  `],[`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    padding: 24px 0;
    opacity: 0;
    animation: `,` 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    `,`
  `]),e_,function(e){return!e.$visible&&k(c_||=Y([`
        animation: `,` 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      `],[`
        animation: `,` 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      `]),t_)}),D.div.withConfig({displayName:`ExplainSelectionContent__AiDisclaimerWrapper`})(u_||=Y([`
    padding: 24px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 25px;
      top: -25px;
      left: 0;
      right: 0;
      background: linear-gradient(rgba(255, 255, 255, 0.001), white);
    }
  `],[`
    padding: 24px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 25px;
      top: -25px;
      left: 0;
      right: 0;
      background: linear-gradient(rgba(255, 255, 255, 0.001), white);
    }
  `])),D(Hl).withConfig({displayName:`ExplainSelectionContent__AiDisclaimer`})(d_||=Y([`
    margin: 0;
    animation: `,` 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation-delay: `,`ms;
  `],[`
    margin: 0;
    animation: `,` 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation-delay: `,`ms;
  `]),e_,Rg+500);var n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_=function(e){var t=M();return P.createElement(mh,J({},e,{title:t.formatMessage(Za.title)}))},p_;(function(e){e[e.Normal=0]=`Normal`,e[e.Large=1]=`Large`})(p_||={});var m_=`percentCaption`,h_=`totalCaption`,g_=function(e){return w(y_||=Y([`
  0% {
    stroke-dashoffset: 100
  }
  100% {
    stroke-dashoffset: `,`
  }
`],[`
  0% {
    stroke-dashoffset: 100
  }
  100% {
    stroke-dashoffset: `,`
  }
`]),e)},__={Container:D.span.withConfig({displayName:`ProgressIndicator__Container`})(C_||=Y([`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    `,`;
    `,`
  `],[`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    `,`;
    `,`
  `]),function(e){var t=e.diameter;return k(b_||=Y([`
        width: `,`px;
        height: `,`px;
      `],[`
        width: `,`px;
        height: `,`px;
      `]),t,t)},function(e){var t=e.isToggled;return t===void 0?k(x_||=Y([`
            & .`,` {
              display: none;
            }
            @media (hover: hover) and (pointer: fine) {
              &:hover {
                .`,` {
                  display: inline-flex;
                }
                .`,` {
                  display: none;
                }
              }
            }
          `],[`
            & .`,` {
              display: none;
            }
            @media (hover: hover) and (pointer: fine) {
              &:hover {
                .`,` {
                  display: inline-flex;
                }
                .`,` {
                  display: none;
                }
              }
            }
          `]),m_,m_,h_):k(S_||=Y([`
            & .`,` {
              display: `,`;
            }
            & .`,` {
              display: `,`;
            }
          `],[`
            & .`,` {
              display: `,`;
            }
            & .`,` {
              display: `,`;
            }
          `]),m_,t?`inline-flex`:`none`,h_,t?`none`:`inline-flex`)}),Caption:D.span.withConfig({displayName:`ProgressIndicator__Caption`})(w_||=Y([`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: `,`;
    z-index: 1;
    user-select: none;
  `],[`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: `,`;
    z-index: 1;
    user-select: none;
  `]),function(e){return e.size===p_.Normal?`1.2rem`:`2.0rem`}),MainText:D.span.withConfig({displayName:`ProgressIndicator__MainText`})(T_||=Y([`
    font-weight: 500;
  `],[`
    font-weight: 500;
  `])),Annotation:D.span.withConfig({displayName:`ProgressIndicator__Annotation`})(E_||=Y([`
    font-size: 1.2rem;
    color: `,`;
    margin-top: 2px;
  `],[`
    font-size: 1.2rem;
    color: `,`;
    margin-top: 2px;
  `]),q.cloud.getShade(6)),ProgressCircle:D.svg.withConfig({displayName:`ProgressIndicator__ProgressCircle`})(O_||=Y([`
    `,`;
  `],[`
    `,`;
  `]),function(e){var t=e.pos;return t!==void 0&&k(D_||=Y([`
        animation: `,` 0.6s linear forwards;
      `],[`
        animation: `,` 0.6s linear forwards;
      `]),g_(t))})},v_=function(e){var t=e.size,n=t===void 0?p_.Normal:t,r=e.completionCount,i=e.completionTotal,a=e.percentComplete,o=e.autoTapToggle,s=o!==void 0&&o,c=e.showAltFormat,l=e.onProgressTap,u=e.animate,d=u!==void 0&&u,f=xa(e,[`size`,`completionCount`,`completionTotal`,`percentComplete`,`autoTapToggle`,`showAltFormat`,`onProgressTap`,`animate`]),p=(0,P.useContext)(T),m=n===p_.Normal?60:150,h=n===p_.Normal?8:20,g=n===p_.Normal?1:2,v=m-g*2,y=m/2,b=v/2-h/2,x=2*Math.PI*b,S=(0,P.useState)(void 0),C=S[0],w=S[1];return P.createElement(__.Container,J({onClick:function(e){(e.nativeEvent instanceof TouchEvent||e.nativeEvent instanceof PointerEvent&&e.nativeEvent.pointerType===`touch`)&&(s&&w(!C),l?.(),e.stopPropagation())}},f,{diameter:m,isToggled:s?C:c}),P.createElement(Ko,null,P.createElement(_,J({},Za.indicatorA11y,{values:{completionCount:r,completionTotal:i,percentComplete:a}}))),P.createElement(__.ProgressCircle,{pos:d?100-a:void 0,focusable:!1,"aria-hidden":!0,width:m,height:m,viewBox:`0 0 ${m} ${m}`,style:{transform:`rotate(-90deg)`,position:`absolute`}},P.createElement(`circle`,{cx:y,cy:y,r:v/2,fill:q.frost.getShade(1),stroke:q.frost.getShade(5),strokeWidth:g}),P.createElement(`circle`,{cx:y,cy:y,r:v/2-h,fill:`#ffffff`,stroke:q.frost.getShade(5),strokeWidth:g}),P.createElement(`circle`,{cx:y,cy:y,r:b,fill:`none`,stroke:a>0?p.vstui.color.primary.getShade(6):`none`,strokeWidth:h,strokeLinecap:`round`,pathLength:x,strokeDasharray:x,strokeDashoffset:d?void 0:x-a/100*x})),P.createElement(__.Caption,{size:n,className:m_,"aria-hidden":!0},P.createElement(__.MainText,null,a+`%`)),P.createElement(__.Caption,{size:n,className:h_,"aria-hidden":!0},P.createElement(`span`,null,P.createElement(__.MainText,null,r),`/`,i),n===p_.Large&&P.createElement(__.Annotation,null,P.createElement(_,J({},Va.questions)))))},y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_={ListItem:D.li.withConfig({displayName:`ProgressListItem__ListItem`})(j_||=Y([`
    list-style: none;
  `],[`
    list-style: none;
  `])),Button:D.button.withConfig({displayName:`ProgressListItem__Button`})(N_||=Y([`
    //    -webkit-tap-highlight-color: transparent;
    background: none;
    font-size: inherit;
    font-family: inherit;
    text-align: left;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 8px 16px;
    margin-bottom: 8px;
    border: 1px solid `,`;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
    }
    `,`;
    &:focus {
      outline: none;
      border-color: `,`;
      box-shadow: 0 0 2px 2px `,`;
    }
  `],[`
    //    -webkit-tap-highlight-color: transparent;
    background: none;
    font-size: inherit;
    font-family: inherit;
    text-align: left;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 8px 16px;
    margin-bottom: 8px;
    border: 1px solid `,`;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
    }
    `,`;
    &:focus {
      outline: none;
      border-color: `,`;
      box-shadow: 0 0 2px 2px `,`;
    }
  `]),q.cloud.getShade(3),function(e){return e.started&&k(M_||=Y([`
        font-weight: 500;
      `],[`
        font-weight: 500;
      `]))},$(),$()),Title:D.span.withConfig({displayName:`ProgressListItem__Title`})(P_||=Y([`
    flex-grow: 1;
    margin-right: 8px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  `],[`
    flex-grow: 1;
    margin-right: 8px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  `])),ProgressContainer:D.span.withConfig({displayName:`ProgressListItem__ProgressContainer`})(F_||=Y([`
    flex-shrink: 0;
  `],[`
    flex-shrink: 0;
  `]))},A_=function(e){var t=e.data,n=e.onSelect,r=e.onProgressIndicatorTap,i=e.showAltProgress,a=e.focussed,o=M(),s=t.title,c=t.completionCount,l=t.completionTotal,u=t.percentComplete,d=t.id,f=o.formatMessage(Za.indicatorA11y,{completionCount:c,completionTotal:l,percentComplete:u}),p=(0,P.useRef)(null);return Wo(p,{takeFocus:a,onceOnly:!0,smoothScrollIntoView:!1}),P.createElement(k_.ListItem,null,P.createElement(k_.Button,{ref:p,"aria-label":`${s}. ${f}`,started:c>0,onClick:function(){n(d)}},P.createElement(k_.Title,null,s),P.createElement(k_.ProgressContainer,{"aria-hidden":!0},P.createElement(v_,J({showAltFormat:i,onProgressTap:r},t)))))},j_,M_,N_,P_,F_,I_={Container:D.div.withConfig({displayName:`ProgressList__Container`})(R_||=Y([`
    ul {
      margin: 0;
      padding: 0;
    }
  `],[`
    ul {
      margin: 0;
      padding: 0;
    }
  `]))},L_=function(e){var t=e.items,n=e.onSelect,r=e.itemId,i=(0,P.useState)(),a=i[0],o=i[1];return P.createElement(I_.Container,null,P.createElement(`ul`,null,t.map(function(e){return P.createElement(A_,{focussed:e.id===r,key:e.id,data:e,onSelect:n,onProgressIndicatorTap:function(){return o(!a)},showAltProgress:a})})))},R_,z_=function(){return P.createElement(`svg`,{width:`16`,height:`16`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,focusable:!1},P.createElement(`g`,{fill:`none`,fillRule:`evenodd`},P.createElement(`circle`,{cx:`8`,cy:`8`,r:`7.25`,fill:q.green.getShade(1),stroke:q.green.getShade(6),strokeWidth:`1.5`}),P.createElement(`path`,{d:`M7.985 10.31a.647.647 0 0 1-.915 0L5.28 8.52a.647.647 0 0 1 .914-.914L7.528 8.94l2.93-2.931a.646.646 0 1 1 .915.915L7.985 10.31Z`,fill:q.green.getShade(6)})))},B_=function(){return P.createElement(`svg`,{width:`16`,height:`16`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,focusable:!1},P.createElement(`g`,{fill:`none`,fillRule:`evenodd`},P.createElement(`circle`,{cx:`8`,cy:`8`,r:`7.25`,fill:q.red.getShade(1),stroke:q.red.getShade(6),strokeWidth:`1.5`}),P.createElement(`path`,{d:`m8.8 8 1.863-1.863a.565.565 0 1 0-.8-.8L8 7.2 6.137 5.338a.565.565 0 1 0-.8.8L7.2 8 5.338 9.863a.565.565 0 1 0 .8.8L8 8.8l1.863 1.863a.564.564 0 0 0 .8 0 .565.565 0 0 0 0-.8L8.8 8Z`,fill:q.red.getShade(6)})))},V_=24,H_={MainCircle:D.button.withConfig({displayName:`ProgressStatusPip__MainCircle`})(G_||=Y([`
    position: relative;
    background-color: `,`;
    border: 2px solid
      `,`;
    border-radius: 100%;
    width: `,`px;
    height: `,`px;
    margin-right: 12px;
    margin-bottom: 16px;
    box-sizing: border-box;
    outline: none;
    `,`
  `],[`
    position: relative;
    background-color: `,`;
    border: 2px solid
      `,`;
    border-radius: 100%;
    width: `,`px;
    height: `,`px;
    margin-right: 12px;
    margin-bottom: 16px;
    box-sizing: border-box;
    outline: none;
    `,`
  `]),function(e){return e.status===X.Incomplete?q.frost.getShade(1):$()},function(e){return e.status===X.Incomplete?q.frost.getShade(5):$()},V_,V_,function(e){return!e.isStatic&&k(W_||=Y([`
        cursor: pointer;
        &:hover,
        &:focus {
          box-shadow: 0 0 0 2px white, 0 0 0 4px `,`;
        }
      `],[`
        cursor: pointer;
        &:hover,
        &:focus {
          box-shadow: 0 0 0 2px white, 0 0 0 4px `,`;
        }
      `]),$())}),StatusCircle:D.div.withConfig({displayName:`ProgressStatusPip__StatusCircle`})(K_||=Y([`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    box-shadow: 0 0 0 2px white;
  `],[`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    box-shadow: 0 0 0 2px white;
  `]))},U_=function(e){var t=e.className,n=e.status,r=e.isStatic,i=r!==void 0&&r,a=e.onClick,o=M(),s=n===X.Correct||n===X.Incorrect,c=P.createElement(H_.MainCircle,{as:i?`div`:`button`,className:t,status:n,isStatic:i,tabIndex:i?void 0:0,onClick:function(e){a?.(),e.stopPropagation()},"aria-label":o.formatMessage(Za.questionStatusA11y,{status:o.formatMessage(Q.status,{status:n})})},s?P.createElement(H_.StatusCircle,null,n===X.Correct?P.createElement(z_,null):P.createElement(B_,null)):P.createElement(H_.StatusCircle,{style:{opacity:0}}));return i?c:P.createElement(ba.default,{placement:`top`,title:o.formatMessage(Q.status,{status:n})},c)},W_,G_,K_,q_={Container:D.div.withConfig({displayName:`ProgressStatusPips__Container`})(Y_||=Y([`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  `],[`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  `]))},J_=function(e){var t=e.items,n=e.onClick;return P.createElement(q_.Container,null,t.map(function(e,t){return P.createElement(U_,{key:e.id??t,id:e.id,status:e.status,onClick:function(){return n(t)}})}))},Y_,X_={ActivityListItem:D.li.withConfig({displayName:`ProgressActivityListItem__ActivityListItem`})(Q_||=Y([`
    display: flex;
    align-items: baseline;
    list-style: none;
    padding: 16px 16px 0;
    margin-bottom: 8px;
    border: 1px solid `,`;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
    }
    &:focus-visible {
      outline: none;
      border-color: `,`;
      box-shadow: 0 0 2px 2px `,`;
    }
  `],[`
    display: flex;
    align-items: baseline;
    list-style: none;
    padding: 16px 16px 0;
    margin-bottom: 8px;
    border: 1px solid `,`;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
    }
    &:focus-visible {
      outline: none;
      border-color: `,`;
      box-shadow: 0 0 2px 2px `,`;
    }
  `]),q.cloud.getShade(3),$(),$()),Page:D.div.withConfig({displayName:`ProgressActivityListItem__Page`})($_||=Y([`
    flex-grow: 1;
    margin-left: 32px;
    text-align: right;
    font-size: 1.2rem;
    color: `,`;
    align-self: flex-start;
    line-height: `,`px;
  `],[`
    flex-grow: 1;
    margin-left: 32px;
    text-align: right;
    font-size: 1.2rem;
    color: `,`;
    align-self: flex-start;
    line-height: `,`px;
  `]),q.cloud.getShade(7),V_)},Z_=function(e){var t=e.questions,n=e.page,r=e.onClick,i=M(),a=t.map(function(e){return{status:e.status,id:e.id}});return P.createElement(X_.ActivityListItem,{"aria-label":i.formatMessage(Za.detailListItemA11y,{questionCount:t.length,page:n}),onClick:function(){r(t.findIndex(function(e){return e.status===X.Incomplete}))}},P.createElement(J_,{items:a,onClick:function(e){r(e)}}),P.createElement(X_.Page,{"aria-hidden":!0},n))},Q_,$_,ev=`12px`,tv={Container:D.div.withConfig({displayName:`ProgressChapterDetailPanel__Container`})(rv||=Y([`
    display: flex;
    flex-direction: column;
  `],[`
    display: flex;
    flex-direction: column;
  `])),Title:D.div.withConfig({displayName:`ProgressChapterDetailPanel__Title`})(iv||=Y([`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: `,`;
    padding: 16px;
  `],[`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: `,`;
    padding: 16px;
  `]),q.frost.getShade(2)),TitleTxt:D.div.withConfig({displayName:`ProgressChapterDetailPanel__TitleTxt`})(av||=Y([`
    margin-left: 8px;
    font-size: 1.6rem;
    font-weight: 500;
    flex-grow: 1;
  `],[`
    margin-left: 8px;
    font-size: 1.6rem;
    font-weight: 500;
    flex-grow: 1;
  `])),ProgressIndicator:D(v_).withConfig({displayName:`ProgressChapterDetailPanel__ProgressIndicator`})(ov||=Y([`
    align-self: center;
    margin-top: 20px;
    margin-bottom: calc(`,`px + `,`);
  `],[`
    align-self: center;
    margin-top: 20px;
    margin-bottom: calc(`,`px + `,`);
  `]),V_,ev),ProgressStatusPip:D(U_).withConfig({displayName:`ProgressChapterDetailPanel__ProgressStatusPip`})(sv||=Y([`
    margin: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, calc(-100% - `,`));
  `],[`
    margin: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, calc(-100% - `,`));
  `]),ev),CompleteIncomplete:D.div.withConfig({displayName:`ProgressChapterDetailPanel__CompleteIncomplete`})(cv||=Y([`
    display: flex;
    margin-top: 16px;
    justify-content: center;
    margin-bottom: 22px;
  `],[`
    display: flex;
    margin-top: 16px;
    justify-content: center;
    margin-bottom: 22px;
  `])),CompleteIncompleteCaption:D.div.withConfig({displayName:`ProgressChapterDetailPanel__CompleteIncompleteCaption`})(lv||=Y([`
    position: relative;
    font-size: 1.4rem;
    color: `,`;
  `],[`
    position: relative;
    font-size: 1.4rem;
    color: `,`;
  `]),q.cloud.getShade(10)),CompleteIncompleteDivider:D.div.withConfig({displayName:`ProgressChapterDetailPanel__CompleteIncompleteDivider`})(uv||=Y([`
    display: inline-block;
    width: 2px;
    margin: 0 16px;
    background-color: `,`;
  `],[`
    display: inline-block;
    width: 2px;
    margin: 0 16px;
    background-color: `,`;
  `]),q.cloud.getShade(5)),ActivitiesList:D.ul.withConfig({displayName:`ProgressChapterDetailPanel__ActivitiesList`})(dv||=Y([`
    margin: 0 24px;
    padding: 0;
  `],[`
    margin: 0 24px;
    padding: 0;
  `])),HighWatermarkButton:D(ca.Button).withConfig({displayName:`ProgressChapterDetailPanel__HighWatermarkButton`})(fv||=Y([`
    color: `,` !important;
  `],[`
    color: `,` !important;
  `]),po(3)),InfoMessage:D(oh).withConfig({displayName:`ProgressChapterDetailPanel__InfoMessage`})(pv||=Y([`
    margin-left: 4px;
  `],[`
    margin-left: 4px;
  `]))},nv=function(e){var t=e.title,n=e.completionCount,r=e.completionTotal,i=e.percentComplete,a=e.activities,o=e.onBack,s=e.onSelect,c=e.isHighWaterMark,l=M(),u=r-n;return P.createElement(tv.Container,null,P.createElement(tv.Title,null,P.createElement(ca.IconButton,{rounded:!0,label:l.formatMessage(Za.backToAll),icon:P.createElement(la.CaretLeftLarge,{color:q.frost.getShade(10)}),onClick:function(){o()}}),P.createElement(tv.TitleTxt,null,t)),P.createElement(tv.ProgressIndicator,J({animate:!1,autoTapToggle:!0,size:p_.Large},{completionCount:n,completionTotal:r,percentComplete:i})),P.createElement(tv.CompleteIncomplete,{"aria-hidden":!0},P.createElement(tv.CompleteIncompleteCaption,null,P.createElement(tv.ProgressStatusPip,{status:X.Complete,isStatic:!0}),P.createElement(_,J({},Za.countComplete,{values:{completionCount:n}}))),P.createElement(tv.CompleteIncompleteDivider,null),P.createElement(tv.CompleteIncompleteCaption,null,P.createElement(tv.ProgressStatusPip,{status:X.Incomplete,isStatic:!0}),P.createElement(_,J({},Za.countIncomplete,{values:{countIncomplete:u}})),c&&P.createElement(tv.InfoMessage,{baseOrientation:nh.Top,icon:P.createElement(la.MiscWarning,{color:q.gold.getShade(6),style:{width:15,height:13}}),label:l.formatMessage({id:`coachme.progress.highWatermark.button`}),message:l.formatMessage({id:`coachme.progress.highWatermark.alertText`},{a:function(e){return P.createElement(tv.HighWatermarkButton,{inline:!0,href:l.formatMessage({id:`coachme.progress.highWatermark.supportUrl`}),target:`_blank`},e)}})}))),P.createElement(Ko,null,P.createElement(_,J({},Za.countBreakdownA11y,{values:{completionCount:n,countIncomplete:u}}))),P.createElement(tv.ActivitiesList,null,a.map(function(e,t){return P.createElement(Z_,J({key:t},e,{onClick:function(t){s(e.id,e.cfi,t)}}))})))},rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv={Container:D.div.withConfig({displayName:`ProgressPanel__Container`})(gv||=Y([`
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  `],[`
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  `])),ListContent:D.div.withConfig({displayName:`ProgressPanel__ListContent`})(_v||=Y([`
    padding: 16px;
  `],[`
    padding: 16px;
  `]))},hv=function(e){var t=e.onClose,n=e.onSelect,r=e.onDetailSelect,i=e.onBack,a=e.items,o=e.detail,s=e.itemId,c=(0,P.useRef)(null);return P.createElement(mv.Container,{ref:c},P.createElement(f_,{onClose:t}),o?P.createElement(nv,J({},o,{onSelect:function(e,t,n){r(e,t,n)},onBack:function(){i()}})):P.createElement(mv.ListContent,null,P.createElement(L_,{items:a,itemId:s,onSelect:function(e){var t=a.find(function(t){return t.id===e});t&&(c.current&&(c.current.scrollTop=0),n(t.detailId,t.id))}})))},gv,_v,vv={Container:D.div.withConfig({displayName:`ProgressContent__Container`})(xv||=Y([`
    height: 100%;
    display: flex;
    flex-direction: column;
  `],[`
    height: 100%;
    display: flex;
    flex-direction: column;
  `]))},yv=function(e){var t=e.children,n=M();return P.createElement(vv.Container,{role:`region`,"aria-label":n.formatMessage(Va.a11yTitle)},t)},bv=function(e){var t=e.getChapterProgress,n=e.getChapterProgressDetail,r=e.cfiToPage,i=e.onClose,a=e.onSelectActivity,o=e.initialized,s=e.hasError,c=e.bookLocation,l=e.navigationToken,u=M(),d=dg().active,f=tl(d),p=(0,P.useState)(),m=p[0],h=p[1],g=(0,P.useState)(),_=g[0],v=g[1],y=(0,P.useState)(),b=y[0],x=y[1],S=(0,P.useState)(),C=S[0],w=S[1],T=(0,P.useState)(),E=T[0],D=T[1],O=(0,P.useState)(),k=O[0],A=O[1],j=(0,P.useCallback)(function(){t().then(function(e){v(e)}).catch(function(e){h(e)})},[t]),N=(0,P.useCallback)(function(e){n(e).then(function(t){var n=_?.find(function(t){return t.detailId===e});if(!n)throw Error(`progress data not found`);if(r)for(var i=0,a=t.activities;i<a.length;i++){var o=a[i];o.page=r(o.cfi)}D(J(J({},n),t))}).catch(function(e){h(e)})},[r,n,_]);if((0,P.useEffect)(function(){!_&&o!==!1&&j()},[o,j,_]),(0,P.useEffect)(function(){d&&f===!1&&o!==!1&&j()},[d,f,o,j]),(0,P.useEffect)(function(){C&&_&&!m&&N(C)},[C,_,m,N]),l!==void 0&&l!==k&&_){A(l);var F=c?_.map(function(e){return e.title}).indexOf(c):-1,I=F===-1?void 0:_[F];x(I?.id),w(I?.detailId),D(void 0)}return m||s?P.createElement(yv,null,P.createElement(f_,{onClose:i}),P.createElement(Gh,{vertCenter:!1,error:{title:u.formatMessage(Xa.progressLoadErrorTitle),description:u.formatMessage(Xa.enrichmentLoadErrorDescription)}})):!_||C&&!E?P.createElement(yv,null,P.createElement(f_,{onClose:i}),P.createElement(pl,{vertCenter:!0})):P.createElement(yv,null,P.createElement(hv,{items:_,itemId:b,detail:E,onClose:i,onBack:function(){w(void 0),D(void 0)},onSelect:function(e,t){x(t),w(e),D(void 0)},onDetailSelect:function(e,t,n){a(e,t,n)}}))},xv,Sv=function(e){var t=e.locale,n=e.evaluator,r=e.localeProvided,i=e.theme,a=e.active,o=e.noCloseBtn,s=e.autoFocusOnOpen,c=s===void 0||s,l=xa(e,[`locale`,`evaluator`,`localeProvided`,`theme`,`active`,`noCloseBtn`,`autoFocusOnOpen`]),u=n??$a,d=(0,P.useMemo)(function(){return{noCloseBtn:o,autoFocusOnOpen:c}},[o,c]),f=(0,P.useMemo)(function(){return{active:a??!0}},[a]),p=P.createElement(cg,{theme:i},P.createElement(dh,{value:d},P.createElement(ug,{value:f},P.createElement(bv,J({getChapterProgress:u.practiceCompleted,getChapterProgressDetail:u.questionStatus,onClose:function(){return l.onClose?.call(l)},onSelectActivity:function(e,t,n){return l.onSelectActivity?.call(l,e,t,n)}},l)))));return r?p:P.createElement(ig,{locale:t},p)},Cv=n(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define([],r):typeof e==`object`?e.Parsimmon=r():n.Parsimmon=r()})(typeof self<`u`?self:e,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,`a`,t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=``,n(n.s=0)}([function(e,t,n){function r(e){if(!(this instanceof r))return new r(e);this._=e}var i=r.prototype;function a(e,t){for(var n=0;n<e;n++)t(n)}function o(e,t,n){return function(e,t){a(t.length,function(n){e(t[n],n,t)})}(function(n,r,i){t=e(t,n,r,i)},n),t}function s(e,t){return o(function(t,n,r,i){return t.concat([e(n,r,i)])},[],t)}function c(e,t){var n={v:0,buf:t};return a(e,function(){var e;n={v:n.v<<1|(e=n.buf,e[0]>>7),buf:function(e){var t=o(function(e,t,n,r){return e.concat(n===r.length-1?Buffer.from([t,0]).readUInt16BE(0):r.readUInt16BE(n))},[],e);return Buffer.from(s(function(e){return(e<<1&65535)>>8},t))}(n.buf)}}),n}function l(){return typeof Buffer<`u`}function u(){if(!l())throw Error(`Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.`)}function d(e){u();var t=o(function(e,t){return e+t},0,e);if(t%8!=0)throw Error(`The bits [`+e.join(`, `)+`] add up to `+t+` which is not an even number of bytes; the total should be divisible by 8`);var n,i=t/8,a=(n=function(e){return e>48},o(function(e,t){return e||(n(t)?t:e)},null,e));if(a)throw Error(a+` bit range requested exceeds 48 bit (6 byte) Number max.`);return new r(function(t,n){var r=i+n;return r>t.length?S(n,i.toString()+` bytes`):x(r,o(function(e,t){var n=c(t,e.buf);return{coll:e.coll.concat(n.v),buf:n.buf}},{coll:[],buf:t.slice(n,r)},e).coll)})}function f(e,t){return new r(function(n,r){return u(),r+t>n.length?S(r,t+` bytes for `+e):x(r+t,n.slice(r,r+t))})}function p(e,t){if(typeof(n=t)!=`number`||Math.floor(n)!==n||t<0||t>6)throw Error(e+` requires integer length in range [0, 6].`);var n}function m(e){return p(`uintBE`,e),f(`uintBE(`+e+`)`,e).map(function(t){return t.readUIntBE(0,e)})}function h(e){return p(`uintLE`,e),f(`uintLE(`+e+`)`,e).map(function(t){return t.readUIntLE(0,e)})}function g(e){return p(`intBE`,e),f(`intBE(`+e+`)`,e).map(function(t){return t.readIntBE(0,e)})}function _(e){return p(`intLE`,e),f(`intLE(`+e+`)`,e).map(function(t){return t.readIntLE(0,e)})}function v(e){return e instanceof r}function y(e){return{}.toString.call(e)===`[object Array]`}function b(e){return l()&&Buffer.isBuffer(e)}function x(e,t){return{status:!0,index:e,value:t,furthest:-1,expected:[]}}function S(e,t){return y(t)||(t=[t]),{status:!1,index:-1,value:null,furthest:e,expected:t}}function C(e,t){if(!t||e.furthest>t.furthest)return e;var n=e.furthest===t.furthest?function(e,t){if(function(){if(r._supportsSet!==void 0)return r._supportsSet;var e=typeof Set<`u`;return r._supportsSet=e,e}()&&Array.from){for(var n=new Set(e),i=0;i<t.length;i++)n.add(t[i]);var a=Array.from(n);return a.sort(),a}for(var o={},s=0;s<e.length;s++)o[e[s]]=!0;for(var c=0;c<t.length;c++)o[t[c]]=!0;var l=[];for(var u in o)({}).hasOwnProperty.call(o,u)&&l.push(u);return l.sort(),l}(e.expected,t.expected):t.expected;return{status:e.status,index:e.index,value:e.value,furthest:t.furthest,expected:n}}var w={};function T(e,t){if(b(e))return{offset:t,line:-1,column:-1};if(w.input===e&&w.i===t)return w.value;var n=e.slice(0,t).split(`
`),r={offset:t,line:n.length,column:n[n.length-1].length+1};return w.input=e,w.i=t,w.value=r,r}function E(e){if(!v(e))throw Error(`not a parser: `+e)}function D(e,t){return typeof e==`string`?e.charAt(t):e[t]}function O(e){if(typeof e!=`number`)throw Error(`not a number: `+e)}function k(e){if(typeof e!=`function`)throw Error(`not a function: `+e)}function A(e){if(typeof e!=`string`)throw Error(`not a string: `+e)}var j=2,M=3,N=8,P=5*N,F=4*N,I=`  `;function L(e,t){return Array(t+1).join(e)}function R(e,t,n){var r=t-e.length;return r<=0?e:L(n,r)+e}function z(e,t,n,r){return{from:e-t>0?e-t:0,to:e+n>r?r:e+n}}function B(e,t){var n,r,i,a,c,l=t.index,u=l.offset,d=1;if(u===e.length)return`Got the end of the input`;if(b(e)){var f=u-u%N,p=u-f,m=z(f,P,F+N,e.length),h=s(function(e){return s(function(e){return R(e.toString(16),2,`0`)},e)},function(e,t){var n=e.length,r=[],i=0;if(n<=t)return[e.slice()];for(var a=0;a<n;a++)r[i]||r.push([]),r[i].push(e[a]),(a+1)%t==0&&i++;return r}(e.slice(m.from,m.to).toJSON().data,N));a=function(e){return e.from===0&&e.to===1?{from:e.from,to:e.to}:{from:e.from/N,to:Math.floor(e.to/N)}}(m),r=f/N,n=3*p,p>=4&&(n+=1),d=2,i=s(function(e){return e.length<=4?e.join(` `):e.slice(0,4).join(` `)+`  `+e.slice(4).join(` `)},h),(c=(8*(a.to>0?a.to-1:a.to)).toString(16).length)<2&&(c=2)}else{var g=e.split(/\r\n|[\n\r\u2028\u2029]/);n=l.column-1,r=l.line-1,a=z(r,j,M,g.length),i=g.slice(a.from,a.to),c=a.to.toString().length}var _=r-a.from;return b(e)&&(c=(8*(a.to>0?a.to-1:a.to)).toString(16).length)<2&&(c=2),o(function(t,r,i){var o,s=i===_,l=s?`> `:I;return o=b(e)?R((8*(a.from+i)).toString(16),c,`0`):R((a.from+i+1).toString(),c,` `),[].concat(t,[l+o+` | `+r],s?[I+L(` `,c)+` | `+R(``,n,` `)+L(`^`,d)]:[])},[],i).join(`
`)}function ee(e,t){return[`
`,`-- PARSING FAILED `+L(`-`,50),`

`,B(e,t),`

`,(n=t.expected,n.length===1?`Expected:

`+n[0]:`Expected one of the following: 

`+n.join(`, `)),`
`].join(``);var n}function te(e){return e.flags===void 0?[e.global?`g`:``,e.ignoreCase?`i`:``,e.multiline?`m`:``,e.unicode?`u`:``,e.sticky?`y`:``].join(``):e.flags}function ne(){for(var e=[].slice.call(arguments),t=e.length,n=0;n<t;n+=1)E(e[n]);return r(function(n,r){for(var i,a=Array(t),o=0;o<t;o+=1){if(!(i=C(e[o]._(n,r),i)).status)return i;a[o]=i.value,r=i.index}return C(x(r,a),i)})}function re(){var e=[].slice.call(arguments);if(e.length===0)throw Error(`seqMap needs at least one argument`);var t=e.pop();return k(t),ne.apply(null,e).map(function(e){return t.apply(null,e)})}function ie(){var e=[].slice.call(arguments),t=e.length;if(t===0)return ce(`zero alternates`);for(var n=0;n<t;n+=1)E(e[n]);return r(function(t,n){for(var r,i=0;i<e.length;i+=1)if((r=C(e[i]._(t,n),r)).status)return r;return r})}function ae(e,t){return oe(e,t).or(H([]))}function oe(e,t){return E(e),E(t),re(e,t.then(e).many(),function(e,t){return[e].concat(t)})}function se(e){A(e);var t=`'`+e+`'`;return r(function(n,r){var i=r+e.length,a=n.slice(r,i);return a===e?x(i,a):S(r,t)})}function V(e,t){(function(e){if(!(e instanceof RegExp))throw Error(`not a regexp: `+e);for(var t=te(e),n=0;n<t.length;n++){var r=t.charAt(n);if(r!==`i`&&r!==`m`&&r!==`u`&&r!==`s`)throw Error(`unsupported regexp flag "`+r+`": `+e)}})(e),arguments.length>=2?O(t):t=0;var n=function(e){return RegExp(`^(?:`+e.source+`)`,te(e))}(e),i=``+e;return r(function(e,r){var a=n.exec(e.slice(r));if(a){if(0<=t&&t<=a.length){var o=a[0],s=a[t];return x(r+o.length,s)}return S(r,`valid match group (0 to `+a.length+`) in `+i)}return S(r,i)})}function H(e){return r(function(t,n){return x(n,e)})}function ce(e){return r(function(t,n){return S(n,e)})}function le(e){if(v(e))return r(function(t,n){var r=e._(t,n);return r.index=n,r.value=``,r});if(typeof e==`string`)return le(se(e));if(e instanceof RegExp)return le(V(e));throw Error(`not a string, regexp, or parser: `+e)}function U(e){return E(e),r(function(t,n){var r=e._(t,n),i=t.slice(n,r.index);return r.status?S(n,`not "`+i+`"`):x(n,null)})}function W(e){return k(e),r(function(t,n){var r=D(t,n);return n<t.length&&e(r)?x(n+1,r):S(n,`a character/byte matching `+e)})}function G(e,t){arguments.length<2&&(t=e,e=void 0);var n=r(function(e,r){return n._=t()._,n._(e,r)});return e?n.desc(e):n}function ue(){return ce(`fantasy-land/empty`)}i.parse=function(e){if(typeof e!=`string`&&!b(e))throw Error(`.parse must be called with a string or Buffer as its argument`);var t=this.skip(me)._(e,0);return t.status?{status:!0,value:t.value}:{status:!1,index:T(e,t.furthest),expected:t.expected}},i.tryParse=function(e){var t=this.parse(e);if(t.status)return t.value;var n=ee(e,t),r=Error(n);throw r.type=`ParsimmonError`,r.result=t,r},i.assert=function(e,t){return this.chain(function(n){return e(n)?H(n):ce(t)})},i.or=function(e){return ie(this,e)},i.trim=function(e){return this.wrap(e,e)},i.wrap=function(e,t){return re(e,this,t,function(e,t){return t})},i.thru=function(e){return e(this)},i.then=function(e){return E(e),ne(this,e).map(function(e){return e[1]})},i.many=function(){var e=this;return r(function(t,n){for(var r=[],i=void 0;;){if(!(i=C(e._(t,n),i)).status)return C(x(n,r),i);if(n===i.index)throw Error(`infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause`);n=i.index,r.push(i.value)}})},i.tieWith=function(e){return A(e),this.map(function(t){if(function(e){if(!y(e))throw Error(`not an array: `+e)}(t),t.length){A(t[0]);for(var n=t[0],r=1;r<t.length;r++)A(t[r]),n+=e+t[r];return n}return``})},i.tie=function(){return this.tieWith(``)},i.times=function(e,t){var n=this;return arguments.length<2&&(t=e),O(e),O(t),r(function(r,i){for(var a=[],o=void 0,s=void 0,c=0;c<e;c+=1){if(s=C(o=n._(r,i),s),!o.status)return s;i=o.index,a.push(o.value)}for(;c<t&&(s=C(o=n._(r,i),s),o.status);c+=1)i=o.index,a.push(o.value);return C(x(i,a),s)})},i.result=function(e){return this.map(function(){return e})},i.atMost=function(e){return this.times(0,e)},i.atLeast=function(e){return re(this.times(e),this.many(),function(e,t){return e.concat(t)})},i.map=function(e){k(e);var t=this;return r(function(n,r){var i=t._(n,r);return i.status?C(x(i.index,e(i.value)),i):i})},i.contramap=function(e){k(e);var t=this;return r(function(n,r){var i=t.parse(e(n.slice(r)));return i.status?x(r+n.length,i.value):i})},i.promap=function(e,t){return k(e),k(t),this.contramap(e).map(t)},i.skip=function(e){return ne(this,e).map(function(e){return e[0]})},i.mark=function(){return re(de,this,de,function(e,t,n){return{start:e,value:t,end:n}})},i.node=function(e){return re(de,this,de,function(t,n,r){return{name:e,value:n,start:t,end:r}})},i.sepBy=function(e){return ae(this,e)},i.sepBy1=function(e){return oe(this,e)},i.lookahead=function(e){return this.skip(le(e))},i.notFollowedBy=function(e){return this.skip(U(e))},i.desc=function(e){y(e)||(e=[e]);var t=this;return r(function(n,r){var i=t._(n,r);return i.status||(i.expected=e),i})},i.fallback=function(e){return this.or(H(e))},i.ap=function(e){return re(e,this,function(e,t){return e(t)})},i.chain=function(e){var t=this;return r(function(n,r){var i=t._(n,r);return i.status?C(e(i.value)._(n,i.index),i):i})},i.concat=i.or,i.empty=ue,i.of=H,i[`fantasy-land/ap`]=i.ap,i[`fantasy-land/chain`]=i.chain,i[`fantasy-land/concat`]=i.concat,i[`fantasy-land/empty`]=i.empty,i[`fantasy-land/of`]=i.of,i[`fantasy-land/map`]=i.map;var de=r(function(e,t){return x(t,T(e,t))}),fe=r(function(e,t){return t>=e.length?S(t,`any character/byte`):x(t+1,D(e,t))}),pe=r(function(e,t){return x(e.length,e.slice(t))}),me=r(function(e,t){return t<e.length?S(t,`EOF`):x(t,null)}),he=V(/[0-9]/).desc(`a digit`),ge=V(/[0-9]*/).desc(`optional digits`),_e=V(/[a-z]/i).desc(`a letter`),ve=V(/[a-z]*/i).desc(`optional letters`),ye=V(/\s*/).desc(`optional whitespace`),be=V(/\s+/).desc(`whitespace`),xe=se(`\r`),Se=se(`
`),Ce=se(`\r
`),we=ie(Ce,Se,xe).desc(`newline`),Te=ie(we,me);r.all=pe,r.alt=ie,r.any=fe,r.cr=xe,r.createLanguage=function(e){var t={};for(var n in e)({}).hasOwnProperty.call(e,n)&&function(n){t[n]=G(function(){return e[n](t)})}(n);return t},r.crlf=Ce,r.custom=function(e){return r(e(x,S))},r.digit=he,r.digits=ge,r.empty=ue,r.end=Te,r.eof=me,r.fail=ce,r.formatError=ee,r.index=de,r.isParser=v,r.lazy=G,r.letter=_e,r.letters=ve,r.lf=Se,r.lookahead=le,r.makeFailure=S,r.makeSuccess=x,r.newline=we,r.noneOf=function(e){return W(function(t){return e.indexOf(t)<0}).desc(`none of '`+e+`'`)},r.notFollowedBy=U,r.of=H,r.oneOf=function(e){for(var t=e.split(``),n=0;n<t.length;n++)t[n]=`'`+t[n]+`'`;return W(function(t){return e.indexOf(t)>=0}).desc(t)},r.optWhitespace=ye,r.Parser=r,r.range=function(e,t){return W(function(n){return e<=n&&n<=t}).desc(e+`-`+t)},r.regex=V,r.regexp=V,r.sepBy=ae,r.sepBy1=oe,r.seq=ne,r.seqMap=re,r.seqObj=function(){for(var e,t={},n=0,i=(e=arguments,Array.prototype.slice.call(e)),a=i.length,o=0;o<a;o+=1){var s=i[o];if(!v(s)){if(y(s)&&s.length===2&&typeof s[0]==`string`&&v(s[1])){var c=s[0];if(Object.prototype.hasOwnProperty.call(t,c))throw Error(`seqObj: duplicate key `+c);t[c]=!0,n++;continue}throw Error(`seqObj arguments must be parsers or [string, parser] array pairs.`)}}if(n===0)throw Error(`seqObj expects at least one named parser, found zero`);return r(function(e,t){for(var n,r={},o=0;o<a;o+=1){var s,c;if(y(i[o])?(s=i[o][0],c=i[o][1]):(s=null,c=i[o]),!(n=C(c._(e,t),n)).status)return n;s&&(r[s]=n.value),t=n.index}return C(x(t,r),n)})},r.string=se,r.succeed=H,r.takeWhile=function(e){return k(e),r(function(t,n){for(var r=n;r<t.length&&e(D(t,r));)r++;return x(r,t.slice(n,r))})},r.test=W,r.whitespace=be,r[`fantasy-land/empty`]=ue,r[`fantasy-land/of`]=H,r.Binary={bitSeq:d,bitSeqObj:function(e){u();var t={},n=0,r=s(function(e){if(y(e)){var r=e;if(r.length!==2)throw Error(`[`+r.join(`, `)+`] should be length 2, got length `+r.length);if(A(r[0]),O(r[1]),Object.prototype.hasOwnProperty.call(t,r[0]))throw Error(`duplicate key in bitSeqObj: `+r[0]);return t[r[0]]=!0,n++,r}return O(e),[null,e]},e);if(n<1)throw Error(`bitSeqObj expects at least one named pair, got [`+e.join(`, `)+`]`);var i=s(function(e){return e[0]},r);return d(s(function(e){return e[1]},r)).map(function(e){return o(function(e,t){return t[0]!==null&&(e[t[0]]=t[1]),e},{},s(function(t,n){return[t,e[n]]},i))})},byte:function(e){if(u(),O(e),e>255)throw Error(`Value specified to byte constructor (`+e+`=0x`+e.toString(16)+`) is larger in value than a single byte.`);var t=(e>15?`0x`:`0x0`)+e.toString(16);return r(function(n,r){var i=D(n,r);return i===e?x(r+1,i):S(r,t)})},buffer:function(e){return f(`buffer`,e).map(function(e){return Buffer.from(e)})},encodedString:function(e,t){return f(`string`,t).map(function(t){return t.toString(e)})},uintBE:m,uint8BE:m(1),uint16BE:m(2),uint32BE:m(4),uintLE:h,uint8LE:h(1),uint16LE:h(2),uint32LE:h(4),intBE:g,int8BE:g(1),int16BE:g(2),int32BE:g(4),intLE:_,int8LE:_(1),int16LE:_(2),int32LE:_(4),floatBE:f(`floatBE`,4).map(function(e){return e.readFloatBE(0)}),floatLE:f(`floatLE`,4).map(function(e){return e.readFloatLE(0)}),doubleBE:f(`doubleBE`,8).map(function(e){return e.readDoubleBE(0)}),doubleLE:f(`doubleLE`,8).map(function(e){return e.readDoubleLE(0)})},e.exports=r}])})})),wv=n(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e,Cv()):typeof define==`function`&&define.amd?define([`exports`,`parsimmon`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.epubjs={},n.P))})(e,(function(e,t){function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var r=n(t);let i=()=>{let e=new Date().getTime();return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(t){let n=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t===`x`?n:n&7|8).toString(16)})},a=e=>{let t=[`!`,`:`,`/`],n=``;for(let r=0;r<e.length;r++)t.indexOf(e[r])===-1?n+=encodeURIComponent(e[r]):n+=e[r];return n},o=[`^`,`[`,`]`,`(`,`)`,`,`,`;`,`=`],s=e=>{let t=``;for(let n=0;n<e.length;n++)o.indexOf(e[n])===-1?t+=e[n]:t+=`^${e[n]}`;return t},c=e=>{if(e===null)return e;let t=``;for(let n=0;n<e.length;n++)e[n]===`^`&&o.indexOf(e[n+1])!==-1?(t+=e[n+1],n++):t+=e[n];return t},l=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),u=r.string(`/`),d=r.string(`!`),f=r.digits.map(Number),p=r.seqMap(r.digits,r.string(`.`),r.digits,(e,t,n)=>Number(`${e}.${n}`)).or(f),m=r.string(`[`).chain(function(e){let t=!1;return r.takeWhile(function(e){return t?(t=!1,!0):e!==`]`&&(t=e===`^`,!0)}).skip(r.string(`]`))}),h=e=>{if(e===null)return e;if(e[0]===`,`)return{precedingText:``,trailingText:c(e.slice(1))||``};let t=e.search(/[^^],/);return t===-1?{precedingText:c(e)||``,trailingText:``}:{precedingText:c(e.slice(0,t+1))||``,trailingText:c(e.slice(t+2))||``}},g=r.seqMap(r.string(`:`),f,m.fallback(null),(e,t,n)=>({offset:t,assert:h(n)})),_=r.seqMap(r.string(`@`),p,r.string(`:`),p,(e,t,n,r)=>({x:t,y:r})),v=r.string(`~`).then(p),y=r.seqMap(u,p,m.fallback(null),(e,t,n)=>({step:t,assert:c(n)})),b=r.seqMap(y.many(),d,(e,t)=>new j({steps:e})),x=r.seqMap(b.fallback(null),y.many(),g.fallback(null),v.fallback(null),_.fallback(null),(e,t,n,r,i)=>new j({contentDoc:e,steps:t,charOffset:n,spatialOffset:i,temporalOffset:r})),S=r.seqMap(x,r.string(`,`),x,r.string(`,`),x,(e,t,n,r,i)=>{let a=e.toString(),o=n.toString(),s=i.toString();if(!a||n===void 0||i===void 0)throw Error(`cfi is not a valid range (wrong number of pieces)`);if(j.compare(n,i)===1)throw Error(`cfi is not a valid range (start is after end)`);return new A({base:e,start:T(a+o),end:T(a+s)})}),C=function(e,t=!1){if(t&&e.match(/\^|\[|\]|;|=/)||e.match(/\^|\[|\]|;|=/))return e;try{return decodeURIComponent(e)}catch{return e}},w=function(e,t){let n=t.parse(e);if(!n.status)throw Error(`${e} does not look valid`);return n.value},T=function(e){return w(C(e),x)},E=function(e){return w(C(e),S)};var D;(function(e){e[e.LESS_THAN=-1]=`LESS_THAN`,e[e.EQUAL=0]=`EQUAL`,e[e.GREATER_THAN=1]=`GREATER_THAN`})(D||={});class O{constructor({step:e,assert:t}){this.step=e,this.assert=t}static equals(e,t,n={checkAssertions:!1}){return n.checkAssertions&&e.assert&&t.assert?e.assert===t.assert:e.step===t.step}static compare(e,t){return e.step<t.step?D.LESS_THAN:e.step>t.step?D.GREATER_THAN:D.EQUAL}}let k=(e,t)=>{let n=e[t],r=t;for(;!isNaN(parseInt(e[r+1]));)n+=e[r+1],r++;return n};class A{constructor({base:e,start:t,end:n}){if(this.toString=(e={})=>{let t=this.base.toString(e);return`${t},${this.start.toString(e).slice(t.length)},${this.end.toString(e).slice(t.length)}`},this.getBase=()=>this.base,this.getStart=()=>this.start,this.getEnd=()=>this.end,e)this.base=e,this.start=t,this.end=n;else{let e=t.toString(),r=n.toString(),i=``,a;for(a=0;a<Math.min(e.length,r.length);){let t=k(e,a),n=k(r,a);if(t===n&&[`:`,`@`,`~`].indexOf(e[a])!==-1){i+=e[a];break}if(t===n)i+=t,a+=t.length;else break}[`/`,`:`,`@`,`~`,`!`].indexOf(i[i.length-1])!==-1&&(i=i.slice(0,-1));let o=E(`${i},${e.slice(i.length)},${r.slice(i.length)}`);this.base=o.base,this.start=o.start,this.end=o.end}}}class j{constructor({steps:e=[],contentDoc:t,charOffset:n,spatialOffset:r,temporalOffset:i}){this.toString=(e={})=>{let t=Object.assign(Object.assign({},{assertions:!0,uriEncoded:!1}),e),n=``;if(this.contentDoc&&(n=this.contentDoc.toString(Object.assign(Object.assign({},e),{uriEncoded:!1}))+`!`),n=this.steps.reduce((e,{step:n,assert:r})=>(e+=`/${n}`,t.assertions&&r&&(e+=`[${r}]`),e),n),this.charOffset&&(n+=`:${this.charOffset.offset}`,t.assertions&&this.charOffset.assert&&(n+=`[${s(this.charOffset.assert.precedingText||``)}${this.charOffset.assert.trailingText?`,${s(this.charOffset.assert.trailingText)}`:``}]`)),this.temporalOffset&&(n+=`~${this.temporalOffset}`),this.spatialOffset){let e=this.spatialOffset;n+=`@${e.x}:${e.y}`}return t.uriEncoded&&(n=a(n)),n},this.steps=e.map(e=>new O(e)),t&&(this.contentDoc=new j(t)),this.charOffset=n,this.spatialOffset=r,this.temporalOffset=i||null}static equals(e,t,n={compareOffsets:!1,checkAssertions:!1}){if(e.contentDoc&&t.contentDoc){if(!j.equals(e.contentDoc,t.contentDoc,n))return!1}else if(e.contentDoc&&!t.contentDoc||!e.contentDoc&&t.contentDoc)return!1;for(let r=0;r<e.steps.length;r++)if(!t.steps[r]||!O.equals(e.steps[r],t.steps[r],n))return!1;if(e.steps.length<t.steps.length)return!1;if(n.compareOffsets){if(e.charOffset&&t.charOffset)return n.checkAssertions?e.charOffset.assert?.precedingText===t.charOffset.assert?.precedingText&&e.charOffset.assert?.trailingText===t.charOffset.assert?.trailingText:e.charOffset.offset===t.charOffset.offset;if(e.charOffset||t.charOffset)return!1;if(e.spatialOffset&&t.spatialOffset)return e.spatialOffset.x===t.spatialOffset.x&&e.spatialOffset.y===t.spatialOffset.y;if(e.spatialOffset||t.spatialOffset)return!1;if(e.temporalOffset!==null&&t.temporalOffset!==null)return e.temporalOffset===t.temporalOffset;if(e.temporalOffset!==null||t.temporalOffset!==null)return!1}return!0}static compare(e,t,n={compareOffsets:!1}){if(e.contentDoc&&t.contentDoc){let n=j.compare(e.contentDoc,t.contentDoc);if(n!==D.EQUAL)return n}for(let n=0;n<e.steps.length;n++){if(!t.steps[n])return D.GREATER_THAN;let r=O.compare(e.steps[n],t.steps[n]);if(r!==D.EQUAL)return r}if(e.steps.length<t.steps.length)return D.LESS_THAN;if(n.compareOffsets){if(e.charOffset&&t.charOffset){if(e.charOffset.offset===t.charOffset.offset)return D.EQUAL;if(e.charOffset.offset<t.charOffset.offset)return D.LESS_THAN;if(e.charOffset.offset>t.charOffset.offset)return D.GREATER_THAN}else{if(e.charOffset&&!t.charOffset)return D.GREATER_THAN;if(!e.charOffset&&t.charOffset)return D.LESS_THAN}if(e.temporalOffset!==null&&t.temporalOffset!==null){if(e.temporalOffset===t.temporalOffset)return D.EQUAL;if(e.temporalOffset<t.temporalOffset)return D.LESS_THAN;if(e.temporalOffset>t.temporalOffset)return D.GREATER_THAN}else if(e.temporalOffset!==null&&t.temporalOffset===null)return D.GREATER_THAN;else if(e.temporalOffset===null&&t.temporalOffset!==null)return D.LESS_THAN;if(e.spatialOffset&&t.spatialOffset){if(e.spatialOffset.x===t.spatialOffset.x&&e.spatialOffset.y===t.spatialOffset.y)return D.EQUAL;if(e.spatialOffset.y>t.spatialOffset.y)return D.GREATER_THAN;if(e.spatialOffset.y<t.spatialOffset.y||e.spatialOffset.x<t.spatialOffset.x)return D.LESS_THAN;if(e.spatialOffset.x>t.spatialOffset.x)return D.GREATER_THAN}else{if(e.spatialOffset&&!t.spatialOffset)return D.GREATER_THAN;if(!e.spatialOffset&&t.spatialOffset)return D.LESS_THAN}}return D.EQUAL}}let M=`vstignore`,N=`vstskip`,P=`data-markup-id`,F=(e,t)=>t.ignoreFn?t.ignoreFn(e,t):z(e,M),I=e=>z(e,`vstskipassertion`),L=(e,t)=>U(e)?!1:e.namespaceURI===`http://www.w3.org/1998/Math/MathML`&&e.localName===`math`||e.namespaceURI===`http://www.w3.org/2000/svg`&&e.localName===`svg`||e.getAttribute(`id`)===`MathJax_Message`||z(e,`MathJax`)||e.getAttribute&&e.getAttribute(`role`)===`math`?!0:e.children[0]?.getAttribute(`id`)===`MathJax_SVG_Hidden`,R=(e,t)=>t.skipFn?t.skipFn(e,t):e.nodeType===Node.COMMENT_NODE||z(e,N)||L(e),z=(e,t)=>e.classList&&e.classList.contains(t),B=e=>{let t=!0,n=[`mtext`,`mi`,`mn`,`mo`],r=[`table`,`tr`,`thead`,`tbody`,`tfoot`,`colgroup`,`col`],i=e.parentElement?.localName||e.parentElement?.nodeName;return e.parentElement?.namespaceURI===`http://www.w3.org/1998/Math/MathML`&&i&&n.indexOf(i.toLowerCase())===-1&&(t=!1),i&&r.indexOf(i.toLowerCase())!==-1&&(t=!1),t},ee=(e,t)=>T(te(e,t||{})),te=(e,t)=>{let n=t||{},r=re(e,n);if(r){let t=ae(e,n);if(t){let e=`/${t.step}`;return t.assert&&(e=`${e}[${s(t.assert)}]`),te(r,n)+e}return``}return``},ne=(e,t)=>e.nodeType===1&&!(R(e,t)||F(e,t)),re=(e,t)=>{if(!e)return null;let n=e.parentElement;for(;n&&!ne(n,t);)n=n.parentElement;return n},ie=(e,t)=>Array.from(e.childNodes).reduce((e,n)=>n.nodeType===3?n.textContent&&n.textContent.replace(/\s/g,``).length?e.concat([n]):e:n.nodeType===1?R(n,t)?e:F(n,t)?e.concat(ie(n,t)):e.concat([n]):e,[]),ae=(e,t)=>{let n=re(e,t);if(n){let r=ie(n,t),i=0;for(let t=0;t<r.length;t++){let n=r[t];if(n.nodeType===1?(i++,i%2!=0&&i++):n.nodeType===3&&i%2==0&&i++,n===e){let t=e;return new O({step:i,assert:I(t)?void 0:t.id})}}return null}return null},oe=(e,t,n)=>{if(!e)return null;let r=0,i=e.ownerDocument,a=ie(e,n).find(e=>(e.nodeType===1?(r++,r%2!=0&&r++):U(e)&&r%2==0&&r++,r===t.step))||null;return t.assert&&(!a||a.id!==t.assert)?i?.getElementById(t.assert)||null:a},se=(e,t)=>{if(!e)return null;let n=e.nodeType===Node.ELEMENT_NODE?e:e.parentElement;if(!n)return null;if(n.getClientRects().length&&!R(n,t))return n;let r=n;for(r=n;r;)if(r=r.previousElementSibling,r&&!R(r,t)&&r.getClientRects().length>0)return r;for(r=n;r;)if(r=r.nextElementSibling,r&&!R(r,t)&&r.getClientRects().length>0)return r;return se(n.parentElement,t)},V=(e,t,n)=>{let r=n||{},i=e.firstElementChild;for(let e=0;e<t.steps.length;e++){let n=oe(i,t.steps[e],r);if(n)i=n;else{r.allowNull&&(i=null);break}}if(i&&U(i)&&t.charOffset){let e=[i],n=ue(i,r);for(;n&&U(n);)e.unshift(n),n=ue(n,r);let a=G(i,r);for(;a&&U(a);)e.push(a),a=G(a,r);if(e.length>0){let n=e.reduce((e,t)=>{let n=t.textContent||``;return{fullString:e.fullString+n,nodes:[...e.nodes,{node:t,startIndex:e.fullString.length,endIndex:e.fullString.length+n.length}]}},{fullString:``,nodes:[]}),r=pe(t.charOffset,n.fullString,0),a=n.nodes.find(e=>e.startIndex<=r&&e.endIndex>r)||n.nodes[n.nodes.length-1];i=a?a.node:null}}return i&&r.isPositional&&(i=se(i,r)),i},H=(e,t,n={})=>{let r=de(e,n),i=r.findIndex(t=>t===e);return r.slice(0,i).map(e=>e.textContent).join(``).length+t},ce=(e,t,n)=>{let r=de(e,n).map(e=>e.textContent).join(``);if(r){let e=r.slice(Math.max(0,t-3),t),n=r.slice(t,Math.min(r.length,t+3));return n.length?{precedingText:e,trailingText:n}:{precedingText:e,trailingText:``}}return null},le=(e,t)=>{let n=ee(e.startContainer,t),r=H(e.startContainer,e.startOffset,t);n.charOffset={offset:r,assert:ce(e.startContainer,r,t||{})};let i=ee(e.endContainer,t),a=H(e.endContainer,e.endOffset,t);return i.charOffset={offset:a,assert:ce(e.endContainer,a,t||{})},new A({start:n,end:i})},U=(e,t)=>{let n=e.nodeType;return n===3||n===4||n===5},W=(e,t,n)=>e?e.parentElement?.nextSibling?e.parentElement?.nextSibling:e===t?null:W(e.parentElement,t):null,G=(e,t)=>{if(e){let n=e.nextSibling;if(!n){let n=e.parentElement;return n&&F(n,t)?G(n,t):null}if(U(n))return n;if(R(n,t))return G(n,t);for(;n&&F(n,t);)if(n=n?.firstChild||null,n&&U(n))return n;return n}return null},ue=(e,t)=>{if(e){let n=e.previousSibling;if(!n){let n=e.parentElement;return n&&F(n,t)?ue(n,t):null}if(U(n))return n;if(R(n,t))return ue(n,t);for(;n&&F(n,t);)if(n=n?.lastChild||null,n&&U(n))return n;return n}return null},de=(e,t={})=>{if(U(e)){let n=[e],r=ue(e,t);for(;r&&U(r);)n.unshift(r),r=ue(r,t);let i=G(e,t);for(;i&&U(i);)n.push(i),i=G(i,t);return n}return[]},fe=(e,t,n)=>{let r=V(e,t.base,n),i=V(e,t.start,n),a=V(e,t.end,n);if(!r||!i||!a||i!==a&&a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING)return[];let o=[],s=i;for(;s;)if(U(s)){let e=[s],t=ue(s,n);for(;t&&U(t);)e.unshift(t),t=ue(t,n);let i=G(s,n);for(;i&&U(i);){if(s===a)return o.push(e),o;e.push(i),s=i,i=G(i,n)}if(o.push(e),s===a)return o;s=s?.nextSibling||W(s,r)}else{if(s===a)return o;s=R(s,n)?s.nextSibling||W(s,r):s.firstChild||s.nextSibling||W(s,r)}return o},pe=(e,t,n=0,r)=>{if(!e)return n;let i=e.offset||n,a=e.assert;if(a){let{precedingText:e,trailingText:n}=a,r=e+n;if(t.slice(i-(e?.length||0),i+(n?.length||0))!==r){let n=new RegExp(l(r),`ig`),a,o=[];for(;a=n.exec(t);)o.push(a.index+e.length);let s=o.reduce((e,t)=>{let n=Math.abs(t-i),r=e.distance;return!r||n<r?{distance:n,result:t}:e},{distance:null,result:null}).result;return s===null?i:s}}return i},me=(e,t,n)=>{let r=V(e,t,n);return r?ee(r,n):null},he=(e,t)=>e.reduce((e,t)=>U(t)?[...e,t]:[...e,...he(Array.from(t.childNodes))],[]),ge=(e,t,n,r)=>{if(e.length){let r=e[0].ownerDocument;if(r){let a=i(),o;return typeof t==`string`?a=t:typeof t==`function`&&(o=t),typeof n==`string`?a=n:typeof n==`function`&&(o=n),{nodes:he(e).map((e,t)=>{var n;let i=r.createElement(`span`);return i.textContent=e.textContent,i.classList.add(M),i.setAttribute(P,a),o&&o(i,t),(n=e.parentNode)==null||n.insertBefore(i,e),e.remove(),i}),identifier:a,unmark:()=>be(r,{identifier:a})}}}return{nodes:[],identifier:``,unmark:()=>{}}},_e=(e,t,n,r,i)=>ye(e,t,n,r,Object.assign(Object.assign({},i),{skipFn:(e,t)=>t?.skipFn&&t.skipFn(e,{})||R(e,{})||z(e,`vstdonthighlight`)})),ve=e=>{e.replacedByTheseTextNodes&&e.replacedByTheseTextNodes.forEach(e=>{e.ignoreNode?e.ignoreNode.remove():e.remove(),ve(e)}),e.remove()},ye=(e,t,n,r,a)=>{let o=a||{},s=i(),c;typeof n==`string`?s=n:typeof n==`function`&&(c=n),typeof r==`string`?s=r:typeof r==`function`&&(c=r);let l=V(e,t.start,o),u=V(e,t.end,o),d=(t,n)=>{let r=[];if(t.textContent===n.join(``)&&(n.forEach((n,i)=>{var a,o;if(n.length>0){if(i===1){let o=e.createElement(`span`);if(o.textContent=n,o.classList.add(M),o.setAttribute(P,s),c&&c(o,i),p.push(o),o.firstChild){let e=o.firstChild;e.markupId=s,r.push(e),e&&(e.ignoreNode=o,e.replaces=t)}B(t)&&((a=t.parentNode)==null||a.insertBefore(o,t))}else{let i=e.createTextNode(n);i.replaces=t,r.push(i),i.markupId=s,(o=t.parentNode)==null||o.insertBefore(i,t)}}}),r.length)){t.replacedByTheseTextNodes=r;let n=e.defaultView;n&&(n.markups=n.markups||{},n.markups[s]=n.markups[s]||[],n.markups[s].push(t)),t.removedByMe=!0,setTimeout(()=>{t.removedByMe=!1}),t.textContent=``,t.hidden=!0}},f=fe(e,t,o),p=[];return f.forEach(n=>{let r=0,i=n.length-1,a=0,o=0,s=n,c=n.reduce((e,t)=>{let n=t.textContent||``;return{fullString:e.fullString+n,nodes:[...e.nodes,{node:t,startIndex:e.fullString.length,endIndex:e.fullString.length+n.length}]}},{fullString:``,nodes:[]});if(n.indexOf(l)!==-1&&n.length>0){let e=pe(t.start.charOffset,c.fullString,0);r=c.nodes.findIndex(t=>t.startIndex<=e&&t.endIndex>e),r===-1&&(r=0),a=e-c.nodes[r]?.startIndex}if(n.indexOf(u)!==-1&&n.length>0){let e=pe(t.end.charOffset,c.fullString,0);i=c.nodes.findIndex(t=>t.startIndex<=e&&t.endIndex>e),i===-1&&(i=c.nodes.length-1),o=e-c.nodes[i]?.startIndex}s=c.nodes.slice(r,i+1).map(e=>e.node),s.forEach(e=>{let n=e.textContent||``,r=0,i=n.length;if(e===l){let e=t.start.charOffset;a===void 0?e&&(r=e.offset):r=a}if(e===u){let e=t.end.charOffset;o===void 0?e&&(i=e.offset):i=o}let s=[n.slice(0,r)||``,n.slice(r,i)||``,n.slice(i)||``];d(e,s)});let f=(e,t)=>{let n=e.reduce((e,t)=>[...e,...t.removedNodes],[]);he(n).forEach(e=>{!e.removedByMe&&e.replacedByTheseTextNodes&&!e.replaces&&e.replacedByTheseTextNodes.forEach(e=>{ve(e)})}),e.forEach(e=>{if(e.type===`characterData`){let t=e.target;t&&!t.replaces&&(t.textContent||``).length>0&&(e.target.replacedByTheseTextNodes||[]).forEach(e=>{ve(e)})}})};if(e.defaultView){let t=new e.defaultView.MutationObserver(f);e.hasObserver||(e.hasObserver=!0,t.observe(e,{characterData:!0,attributes:!0,childList:!0,subtree:!0}))}}),{nodes:p,identifier:s,unmark:()=>be(e,{identifier:s})}},be=(e,t,n)=>{if(t.identifier){let n=e.defaultView,r=n?.markups&&n.markups[t.identifier];r&&n&&(r.forEach(e=>{if(e&&e.replacedByTheseTextNodes?.length){if(e.replacedByTheseTextNodes.forEach(e=>{let n=e.ignoreNode;n&&n.getAttribute(P)===t.identifier&&(Array.from(n.childNodes).forEach(e=>{var t;(t=n.parentElement)==null||t.insertBefore(e,n)}),n.remove(),e.ignoreNode=void 0)}),e.replacedByTheseTextNodes.every(e=>!e.hidden&&!e.ignoreNode)){let t=e.replacedByTheseTextNodes[0],n=e.replacedByTheseTextNodes;e.replacedByTheseTextNodes=void 0;let r=t.parentElement;r&&r.insertBefore(e,t),e.textContent=n.reduce((e,t)=>e+t.textContent,``),e.hidden=!1,n.forEach(e=>e.remove())}else e.replacedByTheseTextNodes=e.replacedByTheseTextNodes.reduce((t,r)=>r.replacedByTheseTextNodes?(r.replacedByTheseTextNodes.forEach(t=>{if(t.markupId&&t.replaces){let r=n.markups[t.markupId].indexOf(t.replaces);n.markups[t.markupId][r]=e}t.replaces=e}),[...t,...r.replacedByTheseTextNodes]):[...t,r],[])}}),delete n.markups[t.identifier])}},xe=(e,t,n,r)=>{let a=r||i();return t.classList.add(N),t.setAttribute(P,a),{node:n.insertAdjacentElement(e,t),identifier:a,remove:()=>t.remove()}},Se=(e,t)=>Array.from(e.querySelectorAll(`[${P}="${t}"]`)),Ce=e=>e.getAttribute(P),we=(e,t)=>e.getAttribute(P)===t,Te=(e,t)=>[`img`,`video`,`audio`].indexOf(e.tagName.toLowerCase())!==-1,Ee=(e,t=0,n=0)=>{let r=e.top+n,i=e.left+t;return{bottom:e.bottom+n,height:e.height,right:e.right+t,width:e.width,x:i,y:r,left:i,top:r}},De=(e,t=0,n=0)=>{let r=e.getClientRects()[0],i=null;for(e.commonAncestorContainer.nodeType===Node.ELEMENT_NODE?i=e.commonAncestorContainer:e.commonAncestorContainer.nodeType===Node.TEXT_NODE&&(i=e.commonAncestorContainer.parentElement);!r&&i;)r=i.getClientRects?.call(i)[0],i=i.parentElement;return r||=e.getBoundingClientRect(),Ee(r,t,n)},Oe=(e,t=0,n=0)=>{let r=e.ownerDocument;if(U(e)){let i=r?.createRange();if(i){i.setStart(e,0),i.setEnd(e,(e.textContent?.length||0)-1);let r=De(i,t,n);return i.detach(),r}return{x:0,y:0,left:0,right:0,top:0,bottom:0,height:0,width:0}}return Ee(e.getBoundingClientRect(),t,n)},ke=(e,t,n)=>n>e.bottom||n>=e.top&&n<=e.bottom&&t>e.left,Ae=(e,t,n)=>n>=e.top&&n<=e.bottom&&t>=e.left&&t<=e.right,je=(e,t,n,r,i,a)=>{let o=e=>{if(!U(e.element)&&e.element.classList.contains(M))return je(e.element,t,n,r,i);if(e.guess&&U(e.element)){let a=e.element,o=a.textContent;if(o){let e=0;for(let i=0;i<o.length-1;i++){let o=a.ownerDocument?.createRange();if(o){o.setStart(a,i),o.setEnd(a,i+1);let s=De(o,r.left,r.top);if(o.detach(),ke(s,t,n))e=i;else break}}let s={offset:e},c=de(a,i),l=c?.indexOf(a);return{element:a,guess:!0,characterOffset:{offset:c?.slice(0,l).reduce((e,t)=>e+(t.textContent||``).length,0)+s.offset,assert:{precedingText:o.slice(s.offset-3,s.offset),trailingText:o.slice(s.offset,s.offset+3)}}}}return e}if(!e.guess&&!U(e.element)&&Te(e.element)){let i=Oe(e.element,r.left,r.top);return Object.assign(Object.assign({},e),{spatialOffset:{x:Math.max(0,Math.min(100,Math.round((t-i.left)/i.width*100))),y:Math.max(0,Math.min(100,Math.round((n-i.top)/i.height*100)))}})}return e},s=a||e,c=ie(e,i);if(e.childNodes.length===0)return o({element:e,guess:!0});let l=!1;for(let a=0;a<c.length;a++){let u=c[a];if(u.nodeType===3){let e=u.textContent;if(e)for(let a=0;a<e.length-1;a++){let e=u.ownerDocument?.createRange();if(e){e.setStart(u,a),e.setEnd(u,a+1);let o=De(e,r.left,r.top);if(e.detach(),Ae(o,t,n)){let e=de(u,i),t=e?.indexOf(u),n=e.reduce((e,t)=>e+t.textContent,``),r=e?.slice(0,t).reduce((e,t)=>e+(t.textContent||``).length,0)+a;return{element:u,guess:!1,characterOffset:{offset:r,assert:{precedingText:n.slice(r-3,r),trailingText:n.slice(r,r+3)}}}}ke(o,t,n)&&(s=u,l=!0)}}l||(s=u);continue}{let a=u.getBoundingClientRect();if(u.classList.contains(N)||a&&(a.width===0||a.height===0))continue;let c=Oe(u,r.left,r.top);if(Ae(c,t,n)){let e=je(u,t,n,r,i,u);if(!e.guess)return e;if(e.element===u)return o({element:u,guess:!1});l?ke(c,t,n)&&Oe(s,r.left,r.top).bottom<=c.bottom&&(s=e.element):(l=!0,s=e.element);continue}if(l){if(ke(c,t,n)&&Oe(s,r.left,r.top).bottom<=c.bottom){let e=je(u,t,n,r,i);if(!e.guess)return e;s=e.element}continue}if(n>=c.bottom){s=u;continue}if(n<=c.top&&!Me(u))return s===e||s===u?o({element:s,guess:!0}):je(s,t,n,r,i)}s=u}return o({element:s,guess:!0})},Me=e=>{let t=e.ownerDocument?.defaultView;return t?t.getComputedStyle(e,``).display===`inline`:!1},Ne=e=>{let t=e.ownerDocument?.scrollingElement;return t?{left:t.scrollLeft,top:t.scrollTop}:{left:0,top:0}},Pe=(e,t,n,r)=>{let i=Ne(e),a=r||{},o=je(e,t+i.left,n+i.top,i,a).element.ownerDocument;return o?V(o,Fe(e,t+i.left,n+i.top,a),a):null},Fe=(e,t,n,r)=>{let i=Ne(e),a=je(e,t+i.left,n+i.top,i,r||{}),o=ee(a.element,r||{});return o.charOffset=a.characterOffset,o.spatialOffset=a.spatialOffset,o};e.CFI=j,e.CFIRange=A,e.getCFIChildForPoint=Pe,e.getCFIForNode=ee,e.getCFIForPoint=Fe,e.getCFIForRange=le,e.getChildForPoint=je,e.getCorrectedCFI=me,e.getNodeForCFI=V,e.getNodeIdentifier=Ce,e.getNodesByIdentifier=Se,e.insertAdjacentElementSafely=xe,e.locateCFI=(e,t,n)=>{let r=Ne(e.body),i=n||{},a=V(e,t,i);if(a){let{x:n,y:o,width:s,height:c}=Oe(a,r.left,r.top),l=n,u=o;if(t.spatialOffset&&Te(a)&&(l=n+s*(t.spatialOffset.x/100),u=o+c*(t.spatialOffset.y/100)),t.charOffset&&U(a)){let n=de(a,i),o=n.indexOf(a),s=n.slice(0,o).reduce((e,t)=>e+t.textContent,``),c=e.createRange(),l=t.charOffset.offset-s.length;c.setStart(a,l),c.setEnd(a,l+1);let{x:u,y:d}=De(c,r.left,r.top);return c.detach(),{x:u,y:d,node:a}}return{x:l,y:u,node:a}}return{x:0,y:0}},e.markupDOM=ye,e.markupHighlight=_e,e.markupNodes=ge,e.nodeHasIdentifier=we,e.parseCfi=T,e.parseCfiRange=E,e.unmarkDOM=be,Object.defineProperty(e,"__esModule",{value:!0})}))})),Tv=wv(),Ev=(e,t,n,r=!1)=>{if(!t.length)return-1;let i,a=0,o=t.length-1;for(;a<=o;){i=Math.floor((a+o)/2);let r=n(e,t[i]);if(r===0)return i;r===1?a=i+1:o=i-1}return r?o:-1};function Dv(e){return e&&(e.indexOf(`!`)===-1?`${e}!/4`:e)}function Ov(e,t,n){if(e.length===0||!n)return-1;let r=(0,Tv.parseCfi)(n);for(let n=0;n<e.length-1;n++){let i=t(e[n]),a=(0,Tv.parseCfi)(i);if(!r.contentDoc||!a.contentDoc)return-1;if(Tv.CFI.equals(r.contentDoc,a.contentDoc)){let i=Tv.CFI.compare(r,a),o=Tv.CFI.compare(r,(0,Tv.parseCfi)(t(e[n+1])));if(i===0||o<0)return n}}return-1}function kv(e,t,n){return!e||e.length===0||!n?-1:Ev((0,Tv.parseCfi)(n),e,(e,n)=>Tv.CFI.compare(e,(0,Tv.parseCfi)(t(n))),!0)}function Av(e,t){return e?.length?e[Ev((0,Tv.parseCfi)(t),e,(e,t)=>{let n=(0,Tv.parseCfi)(t.extendedCfi);return Tv.CFI.compare(e,n)},!0)]?.label??``:``}function jv(e){try{return(0,Tv.parseCfi)(e),!0}catch{return!1}}function Mv(e){try{return(0,Tv.parseCfiRange)(e),!0}catch{return!1}}function Nv(e){try{return(0,Tv.parseCfi)(e)}catch{return null}}function Pv(e){try{return(0,Tv.parseCfiRange)(e)}catch{return null}}function Fv(e){try{return Pv(e)?.start}catch{return null}}function Iv(e,t){let n=Nv(e),r=Pv(t);return n&&r?Tv.CFI.compare(r.start,n)<=0&&Tv.CFI.compare(r.end,n)>=0:!1}function Lv(e){try{return decodeURIComponent(e)}catch{return e}}function Rv(e,t=!1){let n=Nv(e);if(!n)return null;let r=n.contentDoc;if(n.contentDoc||(r=n),r.steps.length>0&&r.steps[r.steps.length-1].assert){let e=r.steps[r.steps.length-1].assert;if(e){t&&(e=Lv(e));let[n,r]=e.split(`=`);return r||n}return e}return null}function zv(e,t){let n=Nv(e);if(n){let r=Rv(n.toString());if(r&&t[r]){let i=Nv(t[r]);i&&!Tv.CFI.equals(n.contentDoc,i)&&(n.contentDoc=i,e=n.toString())}}return e}var Bv=(e,t)=>{let n=Fv(t);if(n){let t=Rv(n.toString(),!0);if(t)return zv(e,{[t]:n.contentDoc.toString()})}return e},{REACT_APP_TIGHTROPE_HOST:Vv,REACT_APP_MOSAIC_HOST:Hv,REACT_APP_TIGHTROPE_TENANT:Uv}={REACT_APP_MOSAIC_HOST:`jigsaw.vitalsource.com`,REACT_APP_TIGHTROPE_HOST:`tightrope.vitalsource.com`,REACT_APP_TIGHTROPE_TENANT:`bookshelf`};function Wv(){return oo.initEnrichmentsService({host:window.Jigsaw.host||Hv})}function Gv(e,t){let n={clientHost:Vv,sessionId:e,tenantId:Uv,vbid:t};return oo.initEvaluatorService(n)}function Kv(e){return oo.getManifest(e)}function qv(e){let t=oo.getTightropeClient();return t?t.assessmentStatus({enrichment_ids:e}):Promise.resolve()}export{ra as C,ee as D,te as E,Sv as S,Et as T,Pv as _,kv as a,fg as b,Rv as c,Bv as d,Fv as f,Nv as g,Mv as h,Kv as i,zv as l,jv as m,Wv as n,Ov as o,Iv as p,Gv as r,Av as s,qv as t,Dv as u,Ev as v,vn as w,oh as x,wv as y};
//# sourceMappingURL=enrichments-DzDQ_toR.js.map