import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{i as t,t as n}from"./jsx-runtime-DU6_sasz.js";import{o as r,r as i}from"./styled-components.browser.esm-BcYycfu6.js";import{t as a}from"./useIntl-DaqDtX5V.js";import{p as o}from"./array-BlXv2BOg.js";import{M as s,i as c,n as l,q as u,r as d}from"./actions-B2bqznsY.js";r();var f=e(t());function p(){let e=u();return(0,f.useCallback)(t=>e(l(t)),[e])}var m=n(),h=18,g=10,_=i.div`
  overflow: visible;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 250px;
  &:focus {
    outline: 1px solid ${o(6)};
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
`,v=i.div`
  height: ${e=>`${e.size}px`};
  width: ${e=>`${e.size}px`};
  border-radius: 100%;
  margin: 0 ${e=>`${e.size*(g/h)}px`};
  background: ${e=>e.theme.vstui.color.primary.getShade(e.bgColor)};
`,y=({size:e=18,takeFocus:t=!1,announceLoading:n=!1,className:r=``})=>{let i=a(),o=[2,3,4,6,7],s=(0,f.useRef)(null),c=p();return(0,f.useEffect)(()=>{t&&s.current?.focus()},[t]),(0,f.useEffect)(()=>{n&&!t&&c(i.formatMessage({id:`base.loading`}))},[c,n,i,t]),(0,m.jsx)(_,{ref:s,tabIndex:t?0:void 0,"aria-label":i.formatMessage({id:`base.loading`}),className:r,children:o.map(t=>(0,m.jsx)(v,{bgColor:t,size:e},`dot ${t}`))})};r();var b=i.div`
  display: flex;
  width: 100%;
  justify-content: center;
`,x=({className:e,...t})=>(0,m.jsx)(b,{className:e,children:(0,m.jsx)(y,{...t})});r();var S={Container:i(s)`
    z-index: 1;
  `,Backdrop:i.div`
    height: 100%;
    width: 100%;
    background-color: white;
  `,Loader:i(x)`
    padding-top: 20%;
  `},C=()=>{let{isPageLoading:e}=c();return(0,m.jsx)(`div`,{children:e&&(0,m.jsx)(d,{timeout:100,children:(0,m.jsx)(S.Container,{children:(0,m.jsx)(S.Backdrop,{children:(0,m.jsx)(S.Loader,{announceLoading:!0})})})})})};export{x as n,p as r,C as t};
//# sourceMappingURL=ContentLoader-uPJQemMC.js.map