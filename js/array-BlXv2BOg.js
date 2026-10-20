import{o as e,t}from"./styled-components.browser.esm-BcYycfu6.js";e();var n=e=>`var(--vst-theme-${e})`,r=e=>`var(--vst-secondary-${e})`,i=e=>`var(--vst-base-${e})`,a=e=>t`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${e};
  -webkit-box-orient: vertical;
`,o=t`
  /* stylelint-disable property-no-vendor-prefix -- intentional fallbacks; --fix would collapse these into duplicate user-select declarations */
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  /* Rules below not implemented in browsers yet */
  -o-user-select: none;
  user-select: none;
  /* stylelint-enable property-no-vendor-prefix */
`,s=t`
  position: absolute;
  /* stylelint-disable-next-line declaration-block-no-duplicate-properties -- IE only understands the comma-separated rect() form */
  clip: rect(1px 1px 1px 1px);
  /* for Internet Explorer */
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  white-space: nowrap;
  overflow: hidden;
`,c=t`
  font-family: Segoe UI Emoji, sans-serif;
`,l=`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs`,u=e=>e?t`
      opacity: 1;
      visibility: visible;
      transition: opacity ${200}ms ease-in-out, visibility 0s;
    `:t`
    opacity: 0;
    visibility: hidden;
    transition: opacity ${200}ms ease-in-out, visibility ${200}ms;
  `,d=e=>e?t`
      visibility: visible;
      transition: transform ${300}ms;
      transform: scale(1);
    `:t`
    visibility: hidden;
    transform: scale(0.5);
  `;t`
  a {
    text-decoration: underline;
    color: ${n(6)};
    font-weight: 500;
    border-radius: 4px;
    border: 2px solid transparent;
    &:focus {
      outline: none;
      box-shadow: ${n(6)} 0px 0px 0px 2px;
    }
  }
  p {
    margin: 12px 0;
  }
  i,
  em {
    font-style: italic;
  }
  b,
  strong {
    font-weight: bold;
  }
`;var f=()=>t`
  float: right;
  [dir="rtl"] & {
    float: left;
  }
`,p=()=>t`
  float: left;
  [dir="rtl"] & {
    float: right;
  }
`,m=t`
  [role="tooltip"] {
    display: none;
  }
  &:hover [role="tooltip"],
  &:focus-within [role="tooltip"] {
    display: block;
  }
`;function h(e,t){let n=e.indexOf(t);if(n!==-1){let t=[...e];return t.splice(n,1),t}return e}function g(e,t=e=>e){let n={};return e.filter(e=>!n[t(e)]&&(n[t(e)]=!0,!0))}var _=(e,t)=>{e=[...e];let n=e.indexOf(t);return n!==-1&&e.unshift(e.splice(n,1)[0]),e},v=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t};export{m as _,i as a,u as c,o as d,l as f,s as g,r as h,v as i,f as l,d as m,g as n,a as o,n as p,h as r,c as s,_ as t,p as u};
//# sourceMappingURL=array-BlXv2BOg.js.map