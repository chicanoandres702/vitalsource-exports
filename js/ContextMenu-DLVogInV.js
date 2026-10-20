import{a as e,r as t,t as n}from"./rolldown-runtime-B0Z9INg1.js";import{i as r,t as i}from"./jsx-runtime-DU6_sasz.js";import{n as a}from"./monitoring-fZj7Xvdu.js";import{K as o,M as s,P as c,Y as l,_ as u,b as d,c as f,f as p,g as m,h,m as g,s as _,v,y}from"./index-maEWt9hW.js";import{A as b,C as x,F as S,S as C,U as w,V as T,_ as E,c as D,f as O,h as ee,i as k,k as te,n as ne,o as A,r as re,v as ie,z as ae}from"./LocaleProvider-DoP-dlkE.js";import{i as j,n as oe,o as M,r as se,s as ce}from"./GlobalStyleProvider-BWhTP2MU.js";import{t as le}from"./uuid-DwkZyVS8.js";import{a as ue,c as de,i as fe,o as N,r as P,t as F}from"./styled-components.browser.esm-BcYycfu6.js";import{t as pe}from"./bookshelfLink-TIla8vSe.js";import{D as me,E as he,S as ge,T as _e,b as ve,d as ye,f as be,h as xe,p as Se,s as Ce,w as we,x as Te,y as Ee}from"./enrichments-DzDQ_toR.js";import{t as I}from"./useIntl-DaqDtX5V.js";import{n as De,t as Oe}from"./InlineErrorBoundary-BQmEUuh3.js";import{a as ke,n as Ae,r as je,t as Me}from"./figureOrImage-Bfd0a5pO.js";import{_ as Ne,a as Pe,f as Fe,g as Ie,h as Le,l as Re,o as ze,p as L,s as Be,t as Ve}from"./array-BlXv2BOg.js";import{f as He,i as Ue,l as We,s as Ge,u as Ke}from"./StaticLoader-LtUItV9i.js";import{$ as qe,A as Je,B as Ye,J as R,K as Xe,P as Ze,R as Qe,Y as $e,d as et,h as tt,i as nt,j as rt,q as z,r as it,u as at,x as ot,y as st}from"./actions-B2bqznsY.js";import{Ct as ct,Et as lt,Gt as ut,L as dt,Qt as ft,St as pt,Tt as mt,Zt as ht,an as gt,bt as _t,ct as vt,d as yt,dt as bt,ft as xt,gt as St,ht as Ct,it as wt,l as Tt,lt as Et,mt as Dt,n as Ot,o as kt,pt as At,t as jt,ut as Mt,vt as Nt,x as Pt,xt as Ft}from"./Tooltip-DA2Rdtm3.js";import{$ as It,$t as Lt,B as Rt,Bt as zt,C as Bt,Ct as Vt,D as Ht,Dt as Ut,E as Wt,Et as Gt,F as Kt,Ft as qt,G as Jt,Gt as Yt,H as Xt,Ht as Zt,I as Qt,It as $t,J as en,Jt as tn,K as nn,Kt as rn,L as an,Lt as on,M as sn,Mt as cn,N as ln,Nt as un,O as dn,Ot as fn,P as pn,Pt as mn,Q as hn,Qt as gn,R as _n,Rt as vn,S as yn,St as bn,T as xn,U as Sn,Ut as Cn,Vt as wn,W as Tn,Wt as En,X as Dn,Xt as On,Y as kn,Yt as An,Z as jn,Zt as Mn,_n as Nn,a as Pn,bn as Fn,bt as In,c as Ln,ct as Rn,dn as zn,dt as Bn,en as Vn,et as Hn,fn as Un,ft as Wn,gn as Gn,gt as Kn,h as qn,hn as B,ht as Jn,i as Yn,it as Xn,j as Zn,jt as Qn,k as $n,kt as er,l as tr,ln as nr,lt as rr,m as ir,mt as ar,n as or,nn as sr,o as cr,pt as lr,q as ur,qt as dr,r as fr,rt as pr,s as mr,sn as hr,st as gr,t as _r,tn as vr,tt as yr,u as br,un as xr,ut as Sr,v as Cr,w as wr,wt as Tr,x as Er,xn as Dr,xt as Or,yt as kr,z as Ar,zt as jr}from"./AccessibilityButton-CaUTVKSa.js";import{_ as Mr}from"./ReaderMain-B9TAVXtz.js";import{A as Nr,C as Pr,D as Fr,E as Ir,O as Lr,S as Rr,T as zr,_ as Br,a as Vr,b as Hr,c as Ur,i as Wr,k as Gr,l as Kr,n as qr,o as Jr,r as Yr,s as Xr,t as Zr,u as Qr,v as $r,w as ei,y as ti}from"./UnsafeHtml-CULNzw5Z.js";import{n as ni,r as ri}from"./ContentLoader-uPJQemMC.js";var V=e(o(),1),H=T(),U=b(),ii=_e(),W=e(r());N();var G=te(),ai=e(S()),K=i(),oi=32,si={Container:P.div`
    width: ${oi}px;
    height: ${oi}px;
    border-radius: ${oi}px;
    border-style: solid;
    border-width: ${e=>e.selected?`3px`:`1px`};
    color: white;
    position: relative;
    cursor: pointer;

    & > * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.75);
    }
  `};function ci({marker:e,selected:t=!1}){let n=I(),r={backgroundColor:e.vstColor,borderColor:e.vstColorDark},i=(0,K.jsx)(si.Container,{style:r,selected:t,children:e.shared&&(0,K.jsx)(G.Group,{color:`rgb(28, 28, 28, 0.5)`})});return e.shared?(e=>(0,K.jsx)(ai.default,{placement:`top`,title:n.formatMessage({id:`prefs.highlighters.publicHighlighter`}),children:e}))(i):i}function li(){let e=R(xr),t=R(nr),n=z();return(0,W.useEffect)(()=>{n(Cn())},[n]),{colorOptions:t,loadStatus:e}}var ui=e(l()),di=class extends W.Component{componentDidMount(){let e=ui.findDOMNode(this),t=j(e)[0];t&&t.focus()}render(){return this.props.children}};N();var fi=50,pi={ColorList:P.ul`
    display: flex;
    justify-content: space-between;
    margin-left: -2px;
  `,ColorListItem:P.li`
    display: inline-block;
    margin-bottom: 10px;
  `,NameLabel:P.label`
    display: inline-block;
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 1.5rem;
  `,NameLine:P.div`
    display: flex;
    align-items: center;
    & > * {
      flex: 0;
    }
    /* Text field */
    & > *:first-child {
      flex: 1;
      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  `,FooterButtons:P.div`
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 4px;
    }
  `,OuterContainer:P.div`
    padding: 8px 0 16px 0;
    margin: auto -24px;
    background-color: ${H.cloud.getShade(2)};
  `,InnerContainer:P.div`
    margin: auto 24px;
  `,IconWrapper:P.div`
    margin-bottom: 20px;
    margin-left: 8px;
    color: ${H.cloud.getShade(6)};
    & > * {
      margin-top: 2px;
      width: 2.2rem;
      height: 1.6rem;
    }
  `};function mi({markerToEdit:e,onCancel:t,onSave:n}){let r=I(),i=(0,W.useRef)(le()),{colorOptions:a}=li();function o(e){return r.formatMessage({id:`highlighters.${e.labelId}`})}let s=e||{...a[0],label:o(a[0])},[c,l]=(0,W.useState)(s.label),[u,f]=(0,W.useState)(s.shared??!1),[p,m]=(0,W.useState)(a.findIndex(e=>e.vstColor===s.vstColor)),h=d().getProp(`Sharing.enabled`);(0,W.useEffect)(()=>{c.length>fi&&l(c.substr(0,fi))},[c]);function g(){let{vstColor:e}=a[p];n({color:e,label:c,shared:u})}return(0,K.jsx)(di,{children:(0,K.jsx)(pi.OuterContainer,{children:(0,K.jsxs)(pi.InnerContainer,{children:[(0,K.jsx)(pi.ColorList,{children:a.map((t,n)=>(0,K.jsx)(pi.ColorListItem,{children:(0,K.jsx)(U.Button,{naked:!0,inline:!0,"aria-pressed":p===n,label:r.formatMessage({id:`highlighters.longName`},{name:o(t)}),onClick:()=>{m(n),e||l(o(t))},children:(0,K.jsx)(ci,{marker:t,selected:p===n})})},t.labelId))}),(0,K.jsx)(pi.NameLabel,{htmlFor:i.current,children:(0,K.jsx)(w,{id:`highlighters.highlighterName`})}),(0,K.jsxs)(pi.NameLine,{children:[(0,K.jsx)(U.TextField,{value:c,onChange:e=>{l(e.currentTarget.value)},fullWidth:!0,id:i.current}),h&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(U.Checkbox,{checked:u,label:r.formatMessage({id:`sharing.public`}),onChange:()=>f(!u),fullWidth:!0}),(0,K.jsx)(pi.IconWrapper,{children:(0,K.jsx)(G.Group,{})})]})]}),(0,K.jsxs)(pi.FooterButtons,{children:[(0,K.jsx)(U.Button,{naked:!0,onClick:t,children:(0,K.jsx)(w,{id:`base.cancel`})}),(0,K.jsx)(U.Button,{onClick:g,children:(0,K.jsx)(w,{id:`${e?`base.save`:`base.add`}`})})]})]})})})}N();var hi={Container:P.div`
    padding: 16px 0;
    margin-bottom: -1px; /* hide gray bottom border */
  `,Message:P.p`
    padding-bottom: 16px;
  `,Buttons:P.div`
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 4px;
    }
  `};function gi({marker:e,onDelete:t,onCancel:n}){return(0,K.jsx)(di,{children:(0,K.jsxs)(hi.Container,{children:[(0,K.jsx)(hi.Message,{children:(0,K.jsx)(w,{id:`highlighters.deleteConfirmMsg`,values:{name:e.label}})}),(0,K.jsxs)(hi.Buttons,{children:[(0,K.jsx)(U.Button,{onClick:n,naked:!0,"data-interaction-id":`preferences_highlighter_manage_delete`,children:(0,K.jsx)(w,{id:`base.cancel`})}),(0,K.jsx)(U.Button,{onClick:t,children:(0,K.jsx)(w,{id:`base.delete`})})]})]})})}function _i(e){let t=z();return{deleteMarker:()=>t(Zt(e)),updateMarker:n=>t(En(e,n))}}N();var vi={OuterContainer:P.div`
    margin: auto -24px;
    ${({open:e})=>e&&F`
        background-color: ${H.cloud.getShade(2)};
      `}
  `,InnerContainer:P.div`
    margin: auto 24px;
  `,RowHeader:P.div`
    display: flex;
    padding: 5px 0;
    align-items: center;
  `,MarkerButton:P.button`
    text-align: left;
    display: flex;
    flex: 1;
    padding: 3px 0;
    outline-color: ${L(6)};
  `,MarkerLabel:P.div`
    flex: 1;
    padding-left: 14px;
    padding-top: 6px;
  `};function yi({marker:e,allowDelete:t,onToggleExpand:n,isExpanded:r}){let[i,o]=(0,W.useState)(1),[s,c]=(0,W.useState)(!1),{updateMarker:l,deleteMarker:u}=_i(e.globalId),d=I();function f(){alert(d.formatMessage({id:`highlighters.error`}))}function p(t){c(!0),l(t).then(({ok:e})=>{c(!1),n(!1),e||f()}),e.label!==t.label&&a(`preferences_highlighter_edit_name`,{name:t.label}),e.color!==t.color&&a(`preferences_highlighter_edit_color`,{color:t.color}),e.shared!==t.shared&&a(`preferences_highlighter_edit_shared`,{shared:t.shared})}function m(){c(!0),u().then(({ok:e})=>{e||(c(!1),n(!1),f())})}return s?(0,K.jsx)(ni,{}):(0,K.jsx)(vi.OuterContainer,{open:r,children:(0,K.jsxs)(vi.InnerContainer,{children:[(0,K.jsxs)(vi.RowHeader,{children:[(0,K.jsxs)(vi.MarkerButton,{onClick:()=>{n(!r)},"aria-label":d.formatMessage({id:`prefs.highlighters.button.ariaLabel`},{label:e.label,isShared:e.shared}),"aria-expanded":r,children:[(0,K.jsx)(ci,{marker:e}),(0,K.jsx)(vi.MarkerLabel,{children:e.label})]}),r&&t&&i===1?(0,K.jsx)(U.Button,{inline:!0,naked:!0,size:`small`,onClick:()=>{o(0)},children:(0,K.jsx)(w,{id:`base.delete`})}):null]}),r&&i===1&&(0,K.jsx)(mi,{markerToEdit:e,onCancel:()=>n(!1),onSave:p}),r&&i===0&&(0,K.jsx)(gi,{marker:e,onDelete:m,onCancel:()=>o(1)})]})})}function bi({onCancel:e}){let{createMarker:t,labelSortedMarkers:n}=jr(),[r,i]=(0,W.useState)(!1),o=I();function s(r){i(!0),t(r).then(({ok:t})=>{i(!1),e(),t||c()}),a(`preferences_highlighter_add`,{count:n.length+1,color:r.color})}function c(){alert(o.formatMessage({id:`highlighters.error`}))}return r?(0,K.jsx)(ni,{}):(0,K.jsx)(mi,{onCancel:e,onSave:s})}N();var xi={Header:P.h3`
    margin-bottom: 24px;
    font-weight: 500;
  `,List:P.ul`
    max-height: 50vh;
  `,ListItem:P.li`
    border-bottom: 1px solid ${H.cloud.getShade(4)};
  `,AddButton:P(U.IconButton)`
    float: right;
  `};function Si({markers:e}){let t=I(),n=Gr(),[r,i]=(0,W.useState)(``);return(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(xi.Header,{children:[(0,K.jsx)(w,{id:`prefs.markers.settings.myHighlighters`}),(0,K.jsx)(xi.AddButton,{icon:(0,K.jsx)(G.Plus,{}),fullWidth:!0,rounded:!0,buttonType:`enclosed`,solid:!0,size:`small`,onClick:()=>{i(``),n.buttonProps.onClick()},label:t.formatMessage({id:`highlighters.addNew`})})]}),n.contentProps.open&&(0,K.jsx)(bi,{onCancel:n.contentProps.onRequestClose}),(0,K.jsx)(xi.List,{children:e.map(t=>(0,K.jsx)(xi.ListItem,{children:(0,K.jsx)(yi,{marker:t,isExpanded:r===t.globalId,onToggleExpand:e=>{n.contentProps.open&&n.contentProps.onRequestClose(),i(e?t.globalId:``)},allowDelete:e?.length>1})},t.globalId))})]})}N();var Ci={Container:P.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,LabelText:P.div`
    padding-right: ${({hasExtras:e})=>e?`0`:`15px`};
    font-weight: ${({isSecondary:e})=>e?`400`:`500`};
  `};function wi({labelId:e,isOn:t,onChange:n,disabled:r,labelExtra:i,isSecondary:a}){let o=(0,W.useRef)(le());return(0,K.jsxs)(Ci.Container,{children:[(0,K.jsx)(Ci.LabelText,{id:o.current,hasExtras:!!i,isSecondary:a,children:(0,K.jsx)(w,{id:e})}),i,(0,K.jsx)(U.Switch,{size:`small`,labelledBy:o.current,onChange:n,defaultPressed:t,disabled:r})]})}N();var Ti={OuterContainer:P.div`
    position: relative;
    height: 100%;
  `,PreferencesOuter:P.div`
    margin: auto -24px;
    &:not(:last-child) {
      border-bottom: 1px solid ${H.cloud.getShade(4)};
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
  `,PreferencesInner:P.div`
    margin: auto 24px;
  `,Error:P.p`
    font-size: 1.6rem;
  `};function Ei({fastHighlights:e,markerEditing:t}){let{loadStatus:n,labelSortedMarkers:r}=jr(),{loadStatus:i}=li(),{setValue:a,value:o}=xt(Ct.PREFERENCES_FAST_HIGHLIGHT_ENABLED),s=h([n,i]);return s===p.FETCHING||s===p.WAITING?(0,K.jsx)(ni,{}):s===p.ERROR?(0,K.jsx)(Ti.Error,{children:(0,K.jsx)(w,{id:`highlighters.error`})}):(0,K.jsxs)(Ti.OuterContainer,{children:[e&&(0,K.jsx)(Ti.PreferencesOuter,{children:(0,K.jsx)(Ti.PreferencesInner,{children:(0,K.jsx)(wi,{labelId:`prefs.markers.settings.fastHighlght`,isOn:!!o,onChange:a})})}),t&&(0,K.jsx)(Si,{markers:r})]})}N();var Di={Container:P.p`
    padding-top: 24px;
    text-align: center;
    border-top: 1px solid ${H.cloud.getShade(4)};
  `};function Oi(){return(0,K.jsx)(Di.Container,{children:(0,K.jsx)(w,{id:`sharing.delay`})})}N();var ki={Container:P.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 14px;
  `,Header:P.h3`
    font-weight: bold;
  `};function Ai({children:e,rightContent:t}){return(0,K.jsxs)(ki.Container,{children:[(0,K.jsx)(ki.Header,{children:e}),t]})}var ji=rt(`sharing`);function Mi(e){return ji.getData(e)}function Ni(e){return ji.getResultStatus(e)}var Pi=Qe(gt.GET_FOLLOWINGS),Fi=Qe(gt.FOLLOW),Ii=Qe(gt.UNFOLLOW),Li=function(e){return e.ALREADY_FOLLOWING=`already-following`,e.UNKNOWN=`unknown`,e}({});function Ri(e){return function(t,n){let r=Mi(n());return t(Fi(e)).then(({ok:e})=>e?t(Pi()):{ok:!1,error:`unknown`}).then(({ok:e,data:t})=>e?t.length===r.length?{ok:!1,error:`already-following`}:{ok:!0}:{ok:!1,error:`unknown`})}}function zi(e){return function(t){return t(Ii(e)).then(()=>t(Pi()))}}function Bi(){let e=R(Mi),t=R(Ni),n=z();return(0,W.useEffect)(()=>{t===p.WAITING&&n(Pi())},[t,n]),{loadStatus:t,followings:e,follow:e=>n(Ri(e)),unfollow:e=>n(zi(e))}}N();var Vi={List:P.ul`
    &:not(:last-child) {
      margin-bottom: 19px;
    }
  `,ListItem:P.li`
    display: inline-block;
  `,Empty:P.p`
    margin-bottom: 19px;
  `,FollowingTag:P(U.Tag)`
    margin: 0 8px 8px 0;
  `};function Hi({onError:e}){let t=Bi(),[n,r]=(0,W.useState)({}),i=d();function a(i){r({...n,[i.id]:!0}),t.unfollow(i.id).then(({ok:t})=>{t||e()})}return t.followings.length===0?(0,K.jsx)(Vi.Empty,{children:(0,K.jsx)(w,{id:`sharing.notFollowing`})}):(0,K.jsx)(Vi.List,{children:t.followings.map(e=>(0,K.jsx)(Vi.ListItem,{children:(0,K.jsx)(Vi.FollowingTag,{deletable:!0,onDelete:()=>a(e),disabled:!!n[e.id]||!i.getProp(`Sharing.showUnsubscribe`),outline:!0,tagType:`basic`,children:e.full_name})},e.id))})}N();function Ui(e,t){switch(t.type){case 1:return{...e,loading:!0,open:!1};case 3:return{...e,loading:!1,open:!1,error:null,email:``};case 2:return{...e,loading:!1,open:!0,error:t.error};case 0:return{...e,email:t.value,error:null};case 4:return{...e,open:!0,error:null,email:``};case 5:return{...e,open:!1,error:null,email:``};default:return e}}var Wi={TextFieldLine:P.div`
    display: flex;
    margin-bottom: -20px;
  `,TextFieldContainer:P.div`
    flex: 1;
  `,TextFieldLabel:P.label`
    display: inline-block;
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 1.5rem;
  `,EnterEmail:P.p`
    &:not(:last-child) {
      padding-bottom: 19px;
    }
  `};function Gi({onError:e}){let{follow:t}=Bi(),n=I(),r=(0,W.useRef)(null),i=(0,W.useRef)(le()),[{open:o,email:s,loading:c,error:l},u]=(0,W.useReducer)(Ui,{open:!1,email:``,loading:!1,error:null});(0,W.useEffect)(()=>{r.current?.validate()},[l]);let d=(0,W.useCallback)(()=>l===Li.ALREADY_FOLLOWING?n.formatMessage({id:`sharing.userAlreadyBeingFollowed`}):void 0,[l,n]);function f(n){n.preventDefault(),u({type:1}),t(s).then(({ok:t,error:n})=>{t?u({type:3}):(u({type:2,error:n}),n&&n!==Li.ALREADY_FOLLOWING&&e())}),a(`preferences_sharing_email`)}return c?(0,K.jsx)(ni,{}):(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Wi.EnterEmail,{children:(0,K.jsx)(w,{id:`sharing.enterEmailToFollow`,values:{a:e=>(0,K.jsx)(U.Button,{inline:!0,onClick:()=>u({type:4}),"aria-expanded":o,children:e})}})}),o&&(0,K.jsxs)(U.Form,{onSubmit:f,children:[(0,K.jsx)(Wi.TextFieldLabel,{htmlFor:i.current,children:(0,K.jsx)(w,{id:`base.emailAddress`})}),(0,K.jsxs)(Wi.TextFieldLine,{children:[(0,K.jsx)(Wi.TextFieldContainer,{children:(0,K.jsx)(U.TextField,{ref:r,type:`email`,fullWidth:!0,onChange:e=>{u({type:0,value:e.currentTarget.value})},value:s,pattern:`^([^@\\s]+)@((?:[-_a-z0-9]+\\.)+[a-z]{2,})$`,required:!0,validate:d,id:i.current})}),(0,K.jsx)(U.Button,{naked:!0,color:`neutral`,onClick:()=>{u({type:5})},type:`button`,children:(0,K.jsx)(w,{id:`base.cancel`})}),(0,K.jsx)(U.Button,{type:`submit`,children:(0,K.jsx)(w,{id:`sharing.follow`})})]})]})]})}N();var Ki={Container:P.div`
    border-top: 1px solid ${H.cloud.getShade(4)};
    padding: 24px 0;
  `};function qi(){let e=I(),{loadStatus:t}=Bi(),n=d(),[r,i]=(0,W.useState)(!1);if(!n.getProp(`Sharing.showFollowings`)&&!n.getProp(`Sharing.subscribeViaEmail`))return null;function a(){return t===p.WAITING||t===p.FETCHING?(0,K.jsx)(ni,{}):t===p.ERROR?(0,K.jsx)(w,{id:`sharing.fetchError`}):(0,K.jsxs)(K.Fragment,{children:[n.getProp(`Sharing.showFollowings`)&&(0,K.jsx)(Hi,{onError:()=>i(!0)}),n.getProp(`Sharing.subscribeViaEmail`)&&(0,K.jsx)(Gi,{onError:()=>i(!0)})]})}return(0,K.jsxs)(Ki.Container,{children:[(0,K.jsx)(Ai,{children:(0,K.jsx)(w,{id:`sharing.imFollowing`})}),a(),(0,K.jsx)(U.Toast,{open:r,toastClose:()=>i(!1),toastTitleText:e.formatMessage({id:`sharing.fetchErrorTitle`}),toastDescriptionText:e.formatMessage({id:`sharing.fetchErrorDescription`}),toastType:`error`})]})}function Ji(){let e=R(Un);return{loadStatus:zt(),count:e}}function Yi({action:e,defaultTooltip:t,...n},r){let[i,a]=(0,W.useState)(null),o=k(),s=I();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`button`,{type:`button`,...n,ref:r,"data-tooltip-id":o,onClick:t=>{t.currentTarget.focus(),e().then(e=>{a({message:e,time:Date.now()})}).catch(()=>{a({message:s.formatMessage({id:`base.error-short`}),time:Date.now()})})},onBlur:()=>a(null),onKeyUp:e=>{e.key===`Escape`&&a(null)},children:n.children}),i?(0,K.jsxs)(jt,{arrow:!0,id:o,isOpen:!0,afterHide:()=>a(null),children:[(0,K.jsx)(He,{children:(0,K.jsx)(`div`,{role:`status`,children:(0,K.jsx)(it,{timeout:250,children:i.message})})}),(0,K.jsx)(`div`,{"aria-hidden":`true`,children:i.message})]},i.time):t?(0,K.jsx)(jt,{id:o,children:(0,K.jsx)(`div`,{"aria-hidden":`true`,children:t})}):null]})}var Xi=(0,W.forwardRef)(Yi);function Zi({textToCopy:e,copy:t=Yn,onCopied:n,...r},i){let a=I();return(0,K.jsx)(Xi,{...r,ref:i,action:()=>{let r=typeof e==`function`?e():e;return r?Pn(a,()=>t(r),n):(n?.(!1),Promise.resolve(a.formatMessage({id:`base.copyFailed`})))}})}var Qi=(0,W.forwardRef)(Zi);N();var $i={Container:P.div`
    padding-bottom: 24px;
  `,CopyButton:P(Qi)`
    text-decoration-skip-ink: none;
  `};function ea(){let e=I(),{count:t,loadStatus:n}=Ji(),{userInfo:r}=ut(),i=`https://${window.location.host}/home/subscribe/${encodeURIComponent(r.email)}`;function a(){let r=e.formatMessage({id:`sharing.mySharedHighlighters`});return n===p.OK?`${r} (${t})`:r}return(0,K.jsxs)($i.Container,{children:[(0,K.jsx)(Ai,{rightContent:(0,K.jsxs)($i.CopyButton,{className:`vst-link vst-link-size-inherit`,textToCopy:i,"data-interaction-id":`preferences_sharing_copy_link`,children:[(0,K.jsx)(G.Link,{}),e.formatMessage({id:`sharing.copyLink`})]}),children:a()}),(0,K.jsx)(`p`,{children:e.formatMessage({id:`sharing.instrux`})})]})}function ta(){return(0,K.jsxs)(`div`,{children:[(0,K.jsx)(ea,{}),(0,K.jsx)(qi,{}),(0,K.jsx)(Oi,{})]})}function na(){let e=d().getProp(`CoachMe.enabled`),t=R(_n);return{isCoachMeDeactivated:e&&t}}function ra(){return(0,K.jsx)(U.Icon,{width:20,height:18,children:(0,K.jsxs)(`g`,{fill:`#9A6F07`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M10 5.252a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M11.25 13.502a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0`}),(0,K.jsx)(`path`,{d:`M10 0c-.865 0-1.729.428-2.224 1.284L.348 14.15c-.989 1.712.247 3.852 2.223 3.852H17.43c1.976 0 3.212-2.14 2.223-3.852L12.224 1.284A2.545 2.545 0 0 0 10 0m0 2c.15 0 .356.049.492.284L17.92 15.15a.54.54 0 0 1 0 .568.54.54 0 0 1-.49.284H2.57a.54.54 0 0 1-.49-.284.54.54 0 0 1 0-.568L9.507 2.284A.543.543 0 0 1 10 2`})]})})}N();var ia={Container:P.div`
    margin: 12px 0;
    display: flex;
  `,Icon:P.div`
    margin-right: 8px;
  `},aa=({icon:e,children:t})=>(0,K.jsxs)(ia.Container,{children:[(0,K.jsx)(ia.Icon,{children:e}),(0,K.jsx)(`div`,{children:t})]});N();var oa={FeatureOnOffContainer:P.div`
    font-weight: 500;
    padding-top: 19px;
    padding-bottom: 10px;
    &:has(+ *) {
      border-bottom: 1px solid ${H.cloud.getShade(4)};
    }
  `,NotificationsHeader:P.div`
    font-size: 1.5rem;
    font-weight: 500;
    padding-top: 27px;
  `,NotificationItem:P.div`
    padding-top: 10px;
  `,HowItWorksButton:P(U.Button)`
    margin-left: -2px; /* left align text due to border */
  `,Intro:P.p`
    margin-bottom: 6px;
  `,WarningText:P.div`
    font-size: 1.4rem;
    font-style: italic;
    line-height: 2rem;
  `,InfoMessage:P(Te)`
    margin-right: auto;
    margin-left: 2px;
  `};function sa(){let e=I(),{currentVal:t,setVal:n}=cr(pr.COACH_ME_DISABLED),{currentVal:r,setVal:i}=cr(pr.COACH_ME_NUDGES_DISABLED),{setVal:o,currentVal:s}=cr(pr.COACH_ME_TAG_DISABLED),{isCoachMeDeactivated:c}=na(),{isEnabled:l}=gr();return(0,W.useEffect)(()=>{s||o(!0)},[s,o]),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(oa.Intro,{children:(0,K.jsx)(w,{id:`checkpoint.settings.intro`})}),(0,K.jsx)(oa.HowItWorksButton,{inline:!0,target:`_blank`,href:e.formatMessage({id:`checkpoint.settings.moreInfoLink`}),children:(0,K.jsx)(w,{id:`base.learnButton`})}),(0,K.jsx)(oa.FeatureOnOffContainer,{children:(0,K.jsx)(wi,{labelId:`checkpoint.settings.featureEnable`,isOn:!t&&!c,disabled:c,onChange:e=>{n(!e),a(e?`enrichments_enabled`:`enrichments_disabled`)}})}),c?(0,K.jsx)(aa,{icon:(0,K.jsx)(ra,{}),children:(0,K.jsx)(oa.WarningText,{children:(0,K.jsx)(w,{id:`checkpoint.settings.publisherDeactivated`})})}):l&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(oa.NotificationsHeader,{children:(0,K.jsx)(w,{id:`checkpoint.settings.notificationSettings`})}),(0,K.jsx)(`div`,{children:(0,K.jsx)(oa.NotificationItem,{children:(0,K.jsx)(wi,{labelId:`checkpoint.settings.nudgeEnable`,labelExtra:(0,K.jsx)(oa.InfoMessage,{label:e.formatMessage({id:`base.moreInfo`}),message:e.formatMessage({id:`checkpoint.settings.nudgeEnableHelp`})}),isOn:!r,onChange:e=>{i(!e),a(e?`enrichment_nudges_enabled`:`enrichment_nudges_disabled`)},disabled:t,isSecondary:!0})})})]})]})}function ca(){return R(sn).length>0}function la(e){let{currentFontSize:t}=ei(),{currentFont:n}=Lr(),{currentMargin:r}=Ir(),{currentLineHeight:i}=zr(),{currentMode:o}=Fr(),{currentReaderView:s}=lt(),{isEnabled:c}=pt(),l=c(Ft.PAGINATION),u=(0,W.useRef)(null),d=(0,W.useCallback)(()=>({CC_size:t.value,CC_font:n.value,CC_margin:r.value,CC_height:i.value,CC_mode:o.value,...l&&{CC_reader_view:s.value}}),[t.value,n.value,r.value,i.value,o.value,l,s.value]),f=(0,W.useCallback)(()=>{u.current||=d()},[d]),p=(0,W.useCallback)(()=>{if(!u.current)return;let e=d(),t={};Object.keys(u.current).forEach(n=>{u.current[n]!==e[n]&&(t[n]=e[n])}),u.current=null,Object.keys(t).length>0&&a(`preferences_CC_selected`,t)},[d]);(0,W.useEffect)(()=>{e?f():p()},[e,f,p])}N();var ua=function(e){return e.CONTENT_CONTROLS=`contentControls`,e.HIGHLIGHTERS=`highlighters`,e.SHARING=`sharing`,e.CHECKPOINT=`checkpoint`,e}({}),da={PanelContainer:P.div`
    padding-top: 18px;
  `},fa={contentControls:`preferences_CC_open`,highlighters:`preferences_highlighter_settings`};function pa({open:e,onRequestClose:t,selectedTab:n}){let r=I(),i=d().getProp(`Sharing.enabled`),o=d().getProp(`Highlights.enabled`),s=d().getProp(`Highlights.FastHighlighting.enabled`),c=d().getProp(`Highlights.MarkerManagement.enabled`),l=ca(),{isCoachMeDeactivated:u}=na(),{currentVal:f}=cr(pr.COACH_ME_TAG_DISABLED);la(e);let p=[{heading:r.formatMessage({id:`prefs.displayOptions`})}],m=[{content:(0,K.jsx)(Rr,{}),panelKey:`contentControls`}];o&&(s||c)&&(p.push({heading:r.formatMessage({id:`prefs.highlighters`})}),m.push({content:(0,K.jsx)(Ei,{fastHighlights:s,markerEditing:c}),panelKey:`highlighters`}),i&&(p.push({heading:r.formatMessage({id:`prefs.sharing`})}),m.push({content:(0,K.jsx)(ta,{}),panelKey:`sharing`}))),(l||u)&&(p.push({heading:r.formatMessage({id:`prefs.checkpoint`}),notification:!f,notificationText:r.formatMessage({id:`base.new`})}),m.push({content:(0,K.jsx)(sa,{}),panelKey:`checkpoint`}));let h=m.map(e=>({...e,content:(0,K.jsx)(da.PanelContainer,{children:e.content})})),g=m.findIndex(e=>e.panelKey===n),[_,v]=(0,W.useState)(g),y=(0,W.useCallback)(e=>{v(e);let t=m[e].panelKey;fa[t]&&a(fa[t])},[m]);return(0,K.jsx)(Mt,{type:bt.Vstui,open:e,onRequestClose:t,title:r.formatMessage({id:`prefs.readerPreferences`}),darkHeader:!0,size:`large`,children:p.length===1?m[0].content:(0,K.jsx)(U.Tabs,{selectedIndex:_,onSelect:y,tabData:p,tabPanel:h,tabPadding:`none`})})}var ma=e(u()),ha=ae(),ga=Ee(),_a=Qe(gt.LOOKUP_TERM);function va(){let e=z(),{locale:t}=I();return(0,W.useMemo)(()=>({isSupported:t===`en-GB`||t===`en-US`,lookupTerm:t=>e(_a(t)).then(({ok:e,data:t})=>!e||!t.results[0]?null:t.results[0].senses[0].definition.join(``)?t.results[0].senses[0].definition.join(``):null)}),[t,e])}var ya=({redirectTo:e})=>e?`${pe()}/#/redirect/${encodeURIComponent(e)}?sso=true`:``,q=function(e){return e.SEARCH=`search`,e.NOTEBOOK=`notebook`,e.EXPANDED_GUTTER=`expanded-gutter`,e.ENRICHMENT=`enrichment`,e.INTEGRATIONS=`integrations`,e.ENRICHMENT_PROGRESS=`enrichment-progress`,e.AI=`ai`,e.TRANSLATE=`translate`,e}({}),ba=function(e){return e.ThreeDot=`3dot`,e.Search=`search`,e.Workbook=`workbook`,e.GutterIcon=`gutter-icon`,e.Nudge=`nudge`,e.CoachMe=`coachme`,e.AI=`ai`,e.Toc=`toc`,e}({});function xa(){return At(Ct.READER_PANEL)||{panelType:null}}function Sa(){let e=Dt(Ct.READER_PANEL),t=$e(),n=(0,W.useCallback)((t,n,r)=>{e({panelType:t,metadata:n,context:r,focusRequestedAt:Date.now()})},[e]),r=(0,W.useCallback)(t=>{e({panelType:null,...t===!0&&{context:{autoClosed:!0}}})},[e]),i=(0,W.useCallback)((e,i,a)=>{t((t,o)=>{e===St(o(),Ct.READER_PANEL)?.panelType?r():n(e,i,a)})},[t,n,r]),a=(0,W.useCallback)(()=>{t((t,n)=>{let r=St(n(),Ct.READER_PANEL);e({...r,metadata:void 0})})},[e,t]);return(0,W.useMemo)(()=>({openPanel:n,closePanel:r,togglePanel:i,clearMetadata:a}),[n,r,i,a])}function Ca(){let{panelType:e,metadata:t,context:n}=xa(),r=Xe(e),i=Xe(n),a=Xe(t),o=(0,W.useRef)(),s=(0,W.useRef)(),[c,l]=(0,W.useState)(!1);return(0,W.useEffect)(()=>{let t=!e&&!!r;l(t),t&&(n?.autoClosed?(o.current=void 0,s.current=void 0):(o.current=i?{...i}:void 0,s.current=a?{...a}:void 0))},[n,c,e,i,a,r]),{panelClosed:c,closeMetadata:s.current,closeContext:o.current}}var wa=function(e){return e.BARTLEBY=`bartleby`,e.PEARSON_SMART_THINKING=`pearsonSmartThinking`,e.MCGRAW_HILL_REDI=`mcgrawHillRed`,e.ANALYTICS=`analytics`,e.SHERPATH=`sherpath-ai`,e.NORA=`nora-ai`,e}({}),Ta=()=>(0,K.jsx)(U.Icon,{width:11,height:16,children:(0,K.jsx)(`path`,{d:`M7.3 10.942a4.906 4.906 0 01-.12.679 3.39 3.39 0 01-.393.915 1.732 1.732 0 01-.403.448c-.053.04-.111.076-.17.106l-.393.09a3.075 3.075 0 01-.614.05h-.543a3.326 3.326 0 01-.503-.05.66.66 0 01-.201-.04V8.245l.463-.16a4.048 4.048 0 011.409-.282c.206-.003.41.034.603.11.186.08.341.218.443.393.146.232.255.487.321.755.07.307.112.62.12.935.014.316.007.631-.02.946m.384-5.413a3.544 3.544 0 00-1.007-.302 6.988 6.988 0 00-.804-.06 6.64 6.64 0 00-1.007.08c-.309.05-.613.132-.905.242v-4.26a4.806 4.806 0 00-.04-.716.64.64 0 00-.172-.372A.658.658 0 003.346 0H1.501l-.162.036C1.19.072 1.043.12.901.18l-.155.07C.54.355.352.483.18.636a.609.609 0 00-.18.463v.89a.619.619 0 00.593.643h.388V14.66c0 .242.034.392.11.453.08.06.17.104.266.13a16.41 16.41 0 001.702.454c.685.132 1.383.19 2.082.17a6.168 6.168 0 001.534-.18 6.102 6.102 0 001.167-.464c.47-.243.88-.587 1.203-1.005a6.59 6.59 0 00.885-1.69 6.055 6.055 0 00.402-2.089 6.484 6.484 0 00-.639-3.058 4.026 4.026 0 00-2.011-1.85`,fill:`#FFF`,fillRule:`evenodd`})}),Ea=()=>(0,K.jsx)(U.Icon,{width:20,height:20,children:(0,K.jsx)(`g`,{fill:`#FFF`,fillRule:`evenodd`,children:(0,K.jsx)(`path`,{d:`M12.894 13.358l-3.03 2.06 3.572.814 1.023 3.52 1.878-3.147 3.663.114-2.412-2.758 1.241-3.45-3.37 1.442-2.895-2.246zM0 0l11.755 8.43L6.224 0z`})})}),Da=()=>(0,K.jsx)(U.Icon,{width:22,height:10,children:(0,K.jsx)(`g`,{fill:`#FFF`,fillRule:`evenodd`,children:(0,K.jsx)(`path`,{d:`M22 1.47c.01.861-.55 1.463-1.364 1.467-.777.004-1.363-.586-1.38-1.39-.02-.837.56-1.488 1.341-1.507.812-.02 1.394.574 1.403 1.43M6.747 4.745c.104-.682.609-.892 1.155-.917.51-.022.89.263.978.917H6.747zm2.569-2.278c-1.326-.579-3.022-.28-3.957.7-.998 1.045-1.226 2.843-.537 4.222.626 1.25 1.943 1.896 3.451 1.693 1.51-.205 2.504-1.076 2.765-2.452H8.942c.005 0-.184.283-.47.504-.499.39-1.365.15-1.664-.408-.112-.21-.13-.58-.13-.58l4.406.014s.018-.217.021-.31c.04-1.343-.542-2.837-1.79-3.383zM19.545 9.064h2.165V3.509h-2.165zM2.775 2.437c-.17.103-.319.183-.509.417v-.68H0v6.871h2.266v-.618c.001-.005.003-.005.002-.014 0-.03 0-.063-.002-.094V5.73c.029-.554.334-.802.888-1.067.318-.153.662-.133.662-.133l.035-2.278s-.64-.077-1.076.186M15.757 6.652c-.31.459-.944.568-1.368.237-.634-.492-.636-1.979-.004-2.48.482-.385 1.125-.23 1.433.336.154.282.154.587.156.71.008.536-.008.888-.217 1.197zM18.355 0h-2.378v2.772c-1.833-1.124-3.563-.486-4.183 1.445-.227.706-.241 1.42-.163 2.16.204 1.93 2.058 3.61 4.346 2.14v.532h.376c.062.004.13.002.197 0h1.805V0z`})})}),Oa=()=>(0,K.jsx)(U.Icon,{width:16,height:14,children:(0,K.jsx)(`path`,{d:`M15.003 12.002a1 1 0 010 2h-14a1 1 0 01-.994-.883l-.007-.117a1 1 0 011-1h14zM15.503 0a.5.5 0 01.5.5V4.502a.498.498 0 01-.483.495c-.006 0-.01.003-.017.003-.007 0-.012-.004-.019-.004a.511.511 0 01-.172-.034.515.515 0 01-.163-.108l-1.292-1.293-4.674 4.642a.999.999 0 01-1.413 0l-2.399-2.4-3.666 3.664a.995.995 0 01-1.408 0 .997.997 0 01-.006-1.414l4.37-4.369a1 1 0 011.412 0l.701.701.004-.004 1.7 1.7 3.964-3.935L11.15.854c0-.002 0-.004-.003-.006a.509.509 0 01-.105-.157.514.514 0 01-.038-.189c0-.067.014-.132.038-.193a.509.509 0 01.105-.157l.003-.006a.545.545 0 01.163-.108.524.524 0 01.191-.038z`,fill:`#FFF`,fillRule:`evenodd`})}),ka=()=>(0,K.jsx)(U.Icon,{width:18,height:18,children:(0,K.jsx)(`path`,{d:`M7.52 2.57c.14-.43.76-.43.9 0l1.7 5.12c.05.14.16.25.3.3l5.18 1.69c.43.14.43.75 0 .89l-5.18 1.69c-.14.05-.26.16-.3.3l-1.7 5.12c-.14.43-.76.43-.9 0l-1.7-5.12a.5.5 0 0 0-.3-.3L.33 10.57a.468.468 0 0 1 0-.89l5.18-1.69c.14-.05.26-.16.3-.3l1.7-5.12ZM14.43.18a.27.27 0 0 1 .51 0l.73 2.01c.03.08.09.14.16.16l1.98.74c.24.09.24.43 0 .52l-1.98.74c-.07.03-.13.09-.16.16l-.73 2.01a.27.27 0 0 1-.51 0l-.73-2.01a.25.25 0 0 0-.16-.16l-1.98-.74a.278.278 0 0 1 0-.52l1.98-.74c.07-.03.13-.09.16-.16z`,fill:`#FFF`})}),Aa=function(e){return e[e.PANEL=0]=`PANEL`,e[e.WINDOW=1]=`WINDOW`,e}({}),ja={[wa.BARTLEBY]:{label:`Bartleby`,target:0,icon:(0,K.jsx)(Ta,{}),color:`#0F1369`,brandFeatureFlag:`Bartleby.enabled`},[wa.SHERPATH]:{label:`Sherpath`,target:0,icon:(0,K.jsx)(Oa,{}),color:`#0F1369`,brandFeatureFlag:`SherpathAI.enabled`},[wa.NORA]:{label:`Nora AI`,buttonLabel:me({id:`integrations.askNora`,defaultMessage:`Ask Nora AI`}),target:0,icon:(0,K.jsx)(ka,{}),color:`#0056D6`,assetFeatureFlag:`nora_ai`,brandFeatureFlag:`NoraAI.enabled`},[wa.PEARSON_SMART_THINKING]:{label:`Pearson Smart Thinking`,target:1,icon:(0,K.jsx)(Ea,{}),color:`#007FA3`,assetFeatureFlag:`pearsonsmartthinking`,brandFeatureFlag:`PearsonSmartThinking.enabled`},[wa.MCGRAW_HILL_REDI]:{label:`Mcgraw Hill Redi`,target:1,icon:(0,K.jsx)(Da,{}),color:`#E41716`,assetFeatureFlag:`mcgrawhillredi`,brandFeatureFlag:`McgrawHillRedi.enabled`},[wa.ANALYTICS]:{label:`Analytics`,labelBrandKey:`VstAnalytics.label`,target:1,icon:(0,K.jsx)(Oa,{}),color:`#007FAD`,brandFeatureFlag:`VstAnalytics.enabled`,redirectDataRole:`instructor`}};function Ma(e,t){if(`to`in e&&e.to){let{to:n,...r}=e;return(0,K.jsx)(c,{ref:t,to:n,...r})}if(`href`in e&&e.href){let{children:n,target:r,...i}=e,a=r??`_blank`;return(0,K.jsxs)(`a`,{ref:t,target:a,rel:`noopener noreferrer`,...i,children:[n,a!==`_self`&&(0,K.jsx)(He,{useSpan:!0,children:(0,K.jsx)(w,{id:`base.opensInNewWindow`})})]})}return(0,K.jsx)(`button`,{ref:t,type:`button`,...e})}var Na=(0,W.forwardRef)(Ma),Pa=Qe(gt.CREATE_LTI_LAUNCH),Fa=Ye(Ze.GET_NORA_URL),Ia=(e,t)=>({[wa.BARTLEBY]:{type:`partner`,label:`Bartleby`,partner_id:`bartleby`,resource_link_id:t.cfi,isbn:t.isbn,context_id:t.brandKey,brand_key:t.brandKey},[wa.SHERPATH]:{type:`partner`,label:`sherpath-ai`,partner_id:`sherpath-ai`,resource_link_id:t.cfi,isbn:t.isbn,context_id:t.brandKey,brand_key:`sherpath-ai`},[wa.PEARSON_SMART_THINKING]:{type:`pearson_st`,isbn:t.isbn,roles:t.userInfo.roles?.join()}})[e],La=`${pe()}/#/redirect`,Ra={[wa.MCGRAW_HILL_REDI]:{getUrl:e=>`https://redi.mcgrawhill.com/?utm_medium=referral&utm_source=vital-source&utm_campaign=redi+awareness&utm_content=[${e.isbn}]`},[wa.PEARSON_SMART_THINKING]:{getUrl:e=>`${La}/lti?isbn=${e.isbn}&roles=${e.roles}&type=pearson_st&lti=true&label=Pearson%20Smart%20Thinking`},[wa.ANALYTICS]:{getUrl:e=>`${La}/lti?isbn=${e.isbn}&type=vst_analytics&lti=true&label=VST%20Analytics`}},za={getUrl:(e,t)=>Ra[e].getUrl(t),isLocalUrl:e=>!!Ra[e]},Ba=function(e){return e[e.FETCHING=0]=`FETCHING`,e[e.OK=1]=`OK`,e[e.ERROR=2]=`ERROR`,e}({}),Va=(e=p.WAITING,t)=>{switch(t.type){case 0:return p.FETCHING;case 1:return p.OK;case 2:return p.ERROR;default:return e}},Ha=()=>(0,W.useReducer)(Va,p.WAITING),Ua=e=>{let t=z(),{bookInfo:n}=ht(),{userInfo:r}=ut(),i=d(),[a,o]=Ha();return{fetchIntegrationUrl:(0,W.useCallback)(async(...a)=>{if(o({type:Ba.FETCHING}),za.isLocalUrl(e))return o({type:Ba.OK}),za.getUrl(e,{isbn:n.isbn,roles:r.roles?.join(),userToken:r.contextTokens[n.isbn]||null,brand:i});if(e===wa.NORA){let e=await t(Fa());return o({type:Ba.OK}),e.data?.redirect_url}{let s=await t(Pa(Ia(e,Object.assign({isbn:n.isbn,brandKey:i.getProp(`jigsawBrand`),userInfo:{roles:r.roles}},...a))));return o({type:Ba.OK}),s.data?.redirect_url}},[n.isbn,r.contextTokens,i,e,t,o,r.roles]),loadStatus:a}};N();var Wa=`(max-width: 767px)`,Ga=e=>F`
  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${Wa} {
    ${F(e)};
  }
`;function Ka(){return kt(Wa)}var qa=(e,t)=>{a(e,t)},Ja=(e,t)=>{let n=Array.isArray(t)?t:[t];for(let t of n)qa(e,{questionId:t})},Ya=re;function Xa({children:e}){let t=d(),n=ma.colors[t.getProp(`Theme.primary`)],r=(0,W.useMemo)(()=>({primary:Ya,secondary:n,base:Ya}),[n]);return(0,K.jsx)(ne,{theme:r,isRoot:!1,themeClass:`vst-theme-ai`,children:e})}function Za({...e}){return(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:void 0,height:18,fill:`none`,viewBox:`0 0 18 18`,"aria-hidden":`true`,focusable:`false`,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M8.466 2.143c.139-.556.93-.556 1.068 0l1.18 4.742a.55.55 0 0 0 .402.4l4.741 1.181c.556.139.556.93 0 1.068l-4.741 1.18a.55.55 0 0 0-.401.402l-1.181 4.741c-.139.556-.93.556-1.068 0l-1.18-4.741a.55.55 0 0 0-.401-.401L2.143 9.534c-.556-.139-.556-.93 0-1.068l4.742-1.18a.55.55 0 0 0 .4-.401z`})})}var Qa=(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),$a=`html`,eo=`svg`,to=`http://www.w3.org/2000/svg`,no=function(e,t){if(t===$a)return e instanceof HTMLElement;if(t===eo)return e instanceof SVGElement;throw Error(`Unrecognized element type "`+t+`" for validateElementType.`)},ro=function(e,t){var n={},r,i,a;if(e===$a)a=document.createElement(`div`);else if(e===eo)a=document.createElementNS(to,`g`);else throw Error(`Invalid element type "`+e+`" for createPortalNode: must be "html" or "svg".`);if(t&&typeof t==`object`)for(var o=0,s=Object.entries(t.attributes);o<s.length;o++){var c=s[o],l=c[0],u=c[1];a.setAttribute(l,u)}var d={element:a,elementType:e,setPortalProps:function(e){n=e},getInitialPortalProps:function(){return n},mount:function(t,n){if(n!==i){if(d.unmount(),t!==r&&!no(t,e))throw Error(`Invalid element type for portal: "`+e+`" portalNodes must be used with `+e+` elements, but OutPortal is within <`+t.tagName+`>.`);t.replaceChild(d.element,n),r=t,i=n}},unmount:function(e){e&&e!==i||r&&i&&(r.replaceChild(i,d.element),r=void 0,i=void 0)}};return d},io=function(e){Qa(t,e);function t(t){var n=e.call(this,t)||this;return n.addPropsChannel=function(){Object.assign(n.props.node,{setPortalProps:function(e){n.setState({nodeProps:e})}})},n.state={nodeProps:n.props.node.getInitialPortalProps()},n}return t.prototype.componentDidMount=function(){this.addPropsChannel()},t.prototype.componentDidUpdate=function(){this.addPropsChannel()},t.prototype.render=function(){var e=this,t=this.props,n=t.children,r=t.node;return ui.createPortal(W.Children.map(n,function(t){return W.isValidElement(t)?W.cloneElement(t,e.state.nodeProps):t}),r.element)},t}(W.PureComponent),ao=function(e){Qa(t,e);function t(t){var n=e.call(this,t)||this;return n.placeholderNode=W.createRef(),n.passPropsThroughPortal(),n}return t.prototype.passPropsThroughPortal=function(){var e=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(e)},t.prototype.componentDidMount=function(){var e=this.props.node;this.currentPortalNode=e;var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentDidUpdate=function(){var e=this.props.node;this.currentPortalNode&&e!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode.setPortalProps({}),this.currentPortalNode=e);var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentWillUnmount=function(){var e=this.props.node;e.unmount(this.placeholderNode.current),e.setPortalProps({})},t.prototype.render=function(){return W.createElement(`div`,{ref:this.placeholderNode})},t}(W.PureComponent),oo=ro.bind(null,$a);ro.bind(null,eo);var so=Ye(Ze.TRACK_LOCATION),co=Ye(Ze.RESET_TRACKED_LOCATIONS),lo=Ye(Ze.SEND_TRACKED_LOCATIONS),uo=function(e){return e.BOTTOM_RIGHT=`bottomRight`,e}({}),fo=function(e){return e.TOP=`top`,e.BOTTOM=`bottom`,e}({}),po=function(e){return e.HIGHLIGHT=`highlight`,e.ENRICHMENT=`enrichment`,e}({});function mo(e){return`h-${e.syncId}`}function ho(e){return`e-${e.id}`}function go(e){return e.locations.dimensions}function _o(e){return e.locations.locations}function vo(e,t){let n=t.find(t=>t.syncId===e.data.syncId);if(n)return{...e,data:n,uuid:mo(n),positionMode:fo.TOP}}function yo(e,t){let n=t.find(t=>t.id===e.data.id);if(n)return{...e,data:n,uuid:ho(e.data),positionMode:fo.BOTTOM}}var bo=Je(e=>_o(e),e=>sr(e),e=>Kt(e),(e,t,n)=>e.map(e=>{if(e.type===po.HIGHLIGHT)return vo(e,t);if(e.type===po.ENRICHMENT)return yo(e,n)}).filter(e=>e!==void 0)),xo=Je(e=>sr(e),e=>e.map(e=>{let t={data:{syncId:e.syncId},type:po.HIGHLIGHT};return e.cfi?{metadata:t,cfi:(0,ga.parseCfiRange)(e.cfi).start.toString()}:{metadata:t,offset:e.chapterOffset}})),So=Je(e=>Kt(e),e=>e.map(e=>({metadata:{data:{id:e.id},type:po.ENRICHMENT},cfi:e.cfi,mode:uo.BOTTOM_RIGHT,isHiddenStatic:!0}))),Co=Je(e=>xo(e),e=>So(e),e=>et(e),(e,t,n)=>{let r=[...e,...t];return n?r.filter(e=>{if(e.cfi){let t=ye(e.cfi,n);return Se(t,n)}return!1}):r});function wo(){let e=$e(),t=d().getProp(`CoachMe.enabled`);return(0,W.useEffect)(()=>{t&&e(Zn())},[e,t]),null}function To(){let e=$e(),{userInfo:t,loadStatus:n}=ut(),r=R(sn);return(0,W.useEffect)(()=>{n===p.OK&&r.length>0&&e(dn({sessionId:t.sessionId}))},[t,n,r,e]),null}function Eo(){let e=$e(),t=R(an),n=R(ln),r=R(pn),i=t=>{e($n({enrichmentIds:t}))};return(0,W.useEffect)(()=>{t!==p.OK||!n.length||!n.some(e=>!r[e])||e($n({enrichmentIds:n}))},[t,n,r,e]),{enrichmentStatus:r,loadEnrichmentStatus:e=>{i(e)}}}function Do(){zt(),Yt(),wo(),To(),Eo();let e=z(),t=R(Co),n=R(bo),r=R(go),i=d(),a=i.getProp(`Highlights.enabled`)&&i.getProp(`Highlights.Notes.enabled`),{currentVal:o}=cr(pr.COACH_ME_DISABLED);return(0,W.useEffect)(()=>{e(co()),t.forEach(t=>{e(so(t))}),e(lo())},[t,e]),(0,W.useMemo)(()=>({positionedItems:n.filter(e=>!(e.type===po.ENRICHMENT&&o)&&!(e.type===po.HIGHLIGHT&&!a)),contextHeight:r.contentHeight??r.height}),[r,n,o,a])}var Oo=Ye(Ze.SCROLL_TO_Y),ko=e=>(t,n)=>t(Oo(ot(n())+e));function Ao(){let e=z(),t=R(ot),n=(0,W.useCallback)(t=>{e(ko(t))},[e]);return(0,W.useMemo)(()=>({scrollYByOffset:n,scrollTop:t}),[n,t])}var jo=Ye(Ze.SET_PADDING),Mo=Ye(Ze.ADD_TO_PADDING),No=e=>t=>{t(jo(e))},Po=({top:e=0,right:t=0,bottom:n=0,left:r=0})=>i=>{i(Mo({top:e,right:t,bottom:n,left:r}))};function Fo(){let e=z(),t=(0,W.useCallback)(t=>{e(No(t))},[e]),n=(0,W.useCallback)(t=>{e(Po(t))},[e]);return(0,W.useMemo)(()=>({setPadding:t,addToPadding:n}),[t,n])}function Io(e,t){let n=(0,W.useRef)(e),r=(0,W.useRef)(t);(0,W.useEffect)(()=>{n.current=e},[e]);let i=(0,W.useCallback)((...e)=>{n.current(...e)},[]);return(0,W.useCallback)(Tt(r.current,i),[])}N();var Lo=32,Ro=P.div`
  width: ${Lo}px;
  height: ${Lo}px;
  border-radius: ${Lo}px;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
`,zo=P.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 100%;
  background-color: ${({$bg:e})=>e};
  ${({$color:e})=>e&&`color: ${e};`}
`,Bo=({onClick:e,ariaLabel:t,disabled:n,innerBg:r,innerColor:i,children:a})=>(0,K.jsx)(U.IconButton,{onClick:e,"aria-label":t,buttonType:`floating`,rounded:!0,size:`small`,icon:(0,K.jsx)(Ro,{children:r?(0,K.jsx)(zo,{$bg:r,$color:i,children:a}):a}),color:`custom`,customIconColor:H.cloud.getShade(10),disabled:n});N();var Vo=P.span`
  font-size: 2.1rem;
  ${Be}
`,Ho=({children:e,onClick:t,disabled:n})=>(0,K.jsx)(Bo,{onClick:t,disabled:n,children:(0,K.jsx)(Vo,{children:e})});N();var Uo=P.span`
  font-size: 1.2rem;
  font-weight: bold;
`,Wo=({color:e,onClick:t,initials:n,ariaLabel:r})=>(0,K.jsx)(Bo,{onClick:t,ariaLabel:r,innerBg:e,children:(0,K.jsx)(Uo,{children:n})});function Go(){return(0,K.jsx)(U.Icon,{width:16,height:17,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M2.667.889h10.666A2.667 2.667 0 0116 3.556v6.222a2.667 2.667 0 01-2.667 2.666h-.889v2.792a.764.764 0 01-1.24.596L6.97 12.444H2.667A2.667 2.667 0 010 9.778V3.556A2.667 2.667 0 012.667.889`,fill:`currentColor`}),(0,K.jsx)(`path`,{d:`M2.667 2.667a.89.89 0 00-.89.889v6.222c0 .49.399.889.89.889h4.928l.487.389 2.585 2.07v-2.459h2.667a.89.89 0 00.888-.89V3.557a.89.89 0 00-.889-.89H2.667`,fill:`#FFF`}),(0,K.jsx)(`path`,{fill:`currentColor`,d:`M12.444 5.333H3.556v-.889h8.888zM12.444 8H3.556v-.889h8.888z`})]})})}var Ko=({color:e,ariaLabel:t,onClick:n})=>(0,K.jsx)(Bo,{onClick:n,ariaLabel:t,innerBg:e,children:(0,K.jsx)(Go,{})});function qo({highlight:e,onClick:t,disabled:n=!1}){let r=I(),i=r.formatMessage({id:e.subscribed?`gutter.shareNoteIconLabel`:`gutter.noteIconLabel`},{date:r.formatDate(new Date(e.lastModifiedAt||0),{month:`short`,day:`numeric`,year:`numeric`}),initials:e.authorInitials});return e.isEmoji?(0,K.jsx)(Ho,{onClick:t,disabled:n,children:e.noteText}):e.subscribed?(0,K.jsx)(Wo,{color:e.vstColor,onClick:t,initials:e.authorInitials,ariaLabel:i}):(0,K.jsx)(Ko,{color:e.vstColor,ariaLabel:i,onClick:t})}N();var Jo=P.div`
  display: flex;
  & > *:first-child {
    flex-shrink: 0;
  }
  & > *:nth-child(2) {
    margin-left: 12px;
    margin-right: 21px;
    flex: 1 1 auto;
    min-width: 0;
  }
`;N();var Yo=`gutter`,Xo=`gutter-expanded`;function Zo(e){let t=[Yo];return e&&t.push(Xo),t.join(` `)}var Qo=P.div`
  display: none;
  .${Xo} & {
    display: block;
  }
`;function $o({children:e}){return(0,K.jsx)(Qo,{children:e})}function es(e){let t=z(),n=R(Lt(e)),r=R(Vn(e)),i=(0,W.useCallback)(n=>t(On({syncId:e,dataFields:n})),[t,e]),a=(0,W.useCallback)((e,n)=>t(tn({markerId:e,noteText:n})),[t]),o=(0,W.useCallback)(()=>t(rn({syncId:e})),[t,e]),s=(0,W.useCallback)(e=>{i({noteText:e})},[i]),c=(0,W.useCallback)(e=>{i({markerId:e})},[i]),l=(0,W.useCallback)(()=>{t(dr(n))},[t,n]);return(0,W.useMemo)(()=>({highlightSelection:a,deleteHighlight:o,updateNote:s,updateMarker:c,highlight:n,markerForHighlight:r,goToHighlight:l}),[a,o,s,c,n,r,l])}N();var ts={Card:P(U.Card).attrs(e=>({raised:!e.isFooter,interactive:!e.isFooter&&!e.highlight.subscribed}))`
    width: 100%;
    overflow: visible;
    position: relative;
    ${e=>e.isFooter&&F`
        box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2) !important;
        border-radius: 0;
      `}
  `,InnerContent:P.div`
    border-left: 4px solid ${e=>e.color};
    padding-left: 16px;
    margin: 16px 24px;
    overflow-wrap: break-word;
  `};function ns({children:e,highlight:t,isFooter:n,onClick:r,className:i}){return(0,K.jsx)(ts.Card,{isFooter:n,highlight:t,onClick:r,className:i,children:(0,K.jsx)(ts.InnerContent,{color:t.vstColor,children:e})})}function rs({children:e,onExit:t}){let n=(0,W.useRef)(null),[r,i]=(0,W.useState)(!1);return(0,W.useEffect)(()=>{function e(e){n.current.contains(e)?i(!0):r&&(i(!1),t())}function a(){e(document.activeElement)}function o(){e(document.activeElement)}function s(t){e(t.target)}return window.addEventListener(`focusin`,a),window.addEventListener(`blur`,o),window.addEventListener(`mousedown`,s),window.addEventListener(`touchstart`,s),()=>{window.removeEventListener(`focusin`,a),window.removeEventListener(`blur`,o),window.removeEventListener(`mousedown`,s),window.removeEventListener(`touchstart`,s)}},[t,r]),(0,K.jsx)(`div`,{ref:n,children:e})}N();var is={ButtonContainer:P.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -12px;
    & > *:not(:last-child) {
      margin-right: 8px;
    }
  `};function as({highlight:e,onDone:t,deleteHighlightIfEmptyNote:n,isFooter:r}){let i=I(),[o,s]=(0,W.useState)(e.noteText||``),{updateNote:c,deleteHighlight:l}=es(e.syncId),u=(0,W.useRef)(null),d=(0,W.useCallback)(r=>{r?.preventDefault(),n&&o===``?l():e.noteText!==o&&(c(o),a(`note_edit`)),t()},[o,e,t,c,l,n]),f=(0,W.useCallback)(()=>{n&&!e.hasNote&&l(),t()},[t,l,n,e]),p=!e.subscribed&&!e.isEmoji;return(0,K.jsx)(rs,{onExit:d,children:(0,K.jsx)(ns,{highlight:e,isFooter:r,children:(0,K.jsxs)(U.Form,{onSubmit:d,ref:u,children:[(0,K.jsx)(U.TextField,{value:o,onChange:e=>{s(e.currentTarget.value)},fullWidth:!0,rows:3,multiline:!0,label:i.formatMessage({id:`gutter.noteTextLabel`}),placeholder:i.formatMessage({id:`gutter.noteTextPlaceholder`}),onFocus:e=>{let t=e.currentTarget;t.setSelectionRange(t.value.length,t.value.length)},onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&d(e)},disabled:!p}),(0,K.jsxs)(is.ButtonContainer,{children:[p&&(0,K.jsx)(U.IconButton,{label:i.formatMessage({id:`base.save`}),icon:(0,K.jsx)(G.Checkmark,{}),buttonType:`enclosed`,solid:!0,size:`small`,type:`submit`}),(0,K.jsx)(U.IconButton,{label:i.formatMessage({id:p?`base.cancel`:`base.close`}),icon:(0,K.jsx)(G.XSmall,{}),onClick:f,buttonType:`enclosed`,solid:!0,size:`small`})]})]})})})}N();var os=(0,ha.createThemedComponent)(U.Button,{Button_paddingHorizontal_small:`14px`}),ss=8,cs=P(Nr)`
  position: absolute;
  top: 6px;
  right: 6px;
`,ls={CardFrame:P(ns)`
  ${e=>!e.highlight.subscribed&&F`
      cursor: pointer;
    `}
    &:not(:hover) ${cs}:not(:focus-within) {
      ${Ie};
    }
  `,Date:P.div`
    color: ${H.cloud.getShade(6)};
    font-size: 1.2rem;
    padding-bottom: ${ss}px;
  `,NoteText:P.div`
    white-space: pre-wrap;
    ${e=>e.isLongText&&F`
        padding-bottom: 14px;
      `}
  `,MoreButton:P(os)`
    position: absolute;
    bottom: 0;
    right: 0;
  `,SharedBy:P.p`
    color: ${H.cloud.getShade(7)};
    font-size: 1.3rem;
    padding-bottom: ${ss}px;
    font-weight: 500;
  `,ViewInBookBtn:P(_r)`
    position: absolute;
    top: 5px;
    left: 10.6rem;
    font-size: 1.2rem;
  `};function us({highlight:e,onEditRequest:t}){let n=I(),[r,i]=(0,W.useState)(!1),[a,o]=(0,W.useState)(!1),s=`gutter-note-card-${e.syncId}`,{goToHighlight:c}=es(e.syncId);function l(n){let r=!!n.target.closest(`button`);!e.subscribed&&!r&&t()}return(0,K.jsx)(ls.CardFrame,{highlight:e,onClick:l,children:(0,K.jsxs)(`div`,{id:s,children:[(0,K.jsx)(ls.Date,{children:(0,K.jsx)(he,{value:new Date(e.lastModifiedAt),year:`numeric`,month:`numeric`,day:`numeric`})}),e.subscribed&&(0,K.jsx)(ls.SharedBy,{children:(0,K.jsx)(w,{id:`gutter.sharedBy`,values:{name:e.authorName}})}),(0,K.jsx)(ls.NoteText,{isLongText:a,children:(0,K.jsx)(br,{isExpanded:r,numLines:3,onExpandableStatus:e=>o(e),children:e.noteText})}),(0,K.jsx)(ls.ViewInBookBtn,{onClick:c,children:n.formatMessage({id:`workbook.highlights.options.viewInBook`})}),!e.subscribed&&(0,K.jsx)(cs,{size:`small`,icon:(0,K.jsx)(G.Edit,{}),onClick:t,label:ee(n.formatMessage({id:`gutter.editNote`}))}),a&&(0,K.jsx)(ls.MoreButton,{naked:!0,size:`small`,onClick:()=>i(!r),children:(0,K.jsx)(w,{id:r?`base.less`:`base.more`})})]})})}var ds=(e,t)=>{switch(t){case 0:return{isEditing:!0,toFocus:`input`};case 1:return{isEditing:!1,toFocus:`edit-button`};case 2:return{...e,toFocus:`gutter-icon-button`};case 3:return{...e,toFocus:null};default:return e}};function fs({highlight:e,toggleGutterOpen:t,needsFocus:n,needsFocusProcessed:r,isNewHighlight:i,onDone:a}){let[{toFocus:o,isEditing:s},c]=(0,W.useReducer)(ds,{toFocus:null,isEditing:!1}),l=(0,W.useRef)(null);return(0,W.useEffect)(()=>{l.current&&o&&(o===`gutter-icon-button`?j(l.current)[0]?.focus():o===`edit-button`?j(l.current)[2]?.focus():o===`input`&&l.current.querySelector(`textarea`)?.focus(),c(3))},[o]),(0,W.useEffect)(()=>{if(n){let t=!e.subscribed&&!e.isEmoji;!e.hasNote&&t?c(0):c(2),r()}},[n,e,r]),s||e.hasNote?(0,K.jsxs)(Jo,{ref:l,children:[(0,K.jsx)(qo,{highlight:e,onClick:t}),!e.isEmoji&&(0,K.jsx)($o,{children:s?(0,K.jsx)(as,{highlight:e,onDone:()=>{c(1),a()},deleteHighlightIfEmptyNote:i}):(0,K.jsx)(us,{highlight:e,onEditRequest:()=>c(0)})})]}):null}N();var ps=fe`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`,ms={Container:P.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    ${!_()&&F`
      animation: ${ps} 0.2s ease-in-out;
    `};
  `};function hs({highlight:e,needsFocus:t,needsFocusProcessed:n,isNewHighlight:r,onDone:i}){let[a,o]=(0,W.useState)(!1),s=I();return(0,W.useEffect)(()=>{t&&(o(!0),n())},[t,n]),(0,K.jsxs)(K.Fragment,{children:[(a||e.hasNote)&&(0,K.jsx)(qo,{highlight:e,onClick:e.isEmoji?void 0:()=>o(!a),disabled:e.isEmoji}),(0,K.jsx)(Mt,{type:bt.FullScreen,open:a,label:s.formatMessage({id:`gutter.editNote`}),onRequestClose:()=>o(!1),disableAnimation:!0,children:(0,K.jsx)(ms.Container,{children:(0,K.jsx)(as,{highlight:e,onDone:()=>{o(!1),i()},deleteHighlightIfEmptyNote:r,isFooter:!0})})})]})}function gs(){return!Ka()}function _s({highlight:e,toggleGutterOpen:t,needsFocus:n,isNewHighlight:r}){let i=gs(),{clearMetadata:a}=Sa(),[o,s]=(0,W.useState)(r),c={highlight:e,toggleGutterOpen:t,needsFocus:n,needsFocusProcessed:a,isNewHighlight:o,onDone:()=>s(!1)};return i?(0,K.jsx)(fs,{...c}):(0,K.jsx)(hs,{...c})}function vs(e){switch(e){case Rt.COMPLETE:return L(6);case Rt.INCOMPLETE:return H.cloud.getShade(6);case Rt.CORRECT:return H.green.getShade(6);case Rt.INCORRECT:return H.red.getShade(6);default:return H.cloud.getShade(10)}}function ys(e){return e===Rt.INCOMPLETE?H.cloud.getShade(5):vs(e)}N();var bs={StatusText:P.div`
    color: ${e=>vs(e.status)};
  `};function xs({enrichmentStatus:e,className:t}){return(0,K.jsx)(bs.StatusText,{status:e,className:t})}N();var Ss={Card:P(U.Card)`
    width: 100%;
    overflow: visible;
  `,Button:P.button`
    text-align: left;
    width: 100%;
  `,InnerContent:P.div`
    border-left: 4px solid ${e=>ys(e.status)};
    margin: 16px 24px;
    padding-left: 16px;
  `,Header:P.div`
    font-size: 1.2rem;
    line-height: 1.8rem;
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;
  `,Status:P(xs)`
    margin-right: 8px;
    border: 1px solid transparent; /* match bubble layout */
  `,Bubble:P.span`
    border: 1px solid ${H.cloud.getShade(4)};
    border-radius: 10px;
    padding: 0 8px;
    font-weight: 500;
    color: ${e=>vs(e.status)};
    white-space: nowrap;
  `};function Cs({assessmentType:e,enrichmentStatus:t,questionCount:n,onClick:r}){function i(){if(e===Ar.SUMMATIVE)return(0,K.jsx)(w,{id:`checkpoint.knowledgeCheckpoint`});let r={count:n};switch(t){case Rt.INCOMPLETE:return(0,K.jsx)(w,{id:`checkpoint.startPractice`,values:r});case Rt.INCORRECT:return(0,K.jsx)(w,{id:`checkpoint.retryPractice`,values:r});default:return(0,K.jsx)(w,{id:`checkpoint.reviewPractice`,values:r})}}return(0,K.jsx)(Ss.Card,{raised:!0,interactive:!0,children:(0,K.jsx)(Ss.Button,{onClick:r,children:(0,K.jsx)(Ss.InnerContent,{status:t,children:(0,K.jsx)(`p`,{children:i()})})})})}function ws(){return(0,K.jsx)(U.Icon,{width:18,height:18,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M16 0c1.104 0 2 .733 2 1.636v14.728c0 .903-.896 1.636-2 1.636H2c-1.104 0-2-.733-2-1.636V1.636C0 .733.896 0 2 0z`,fill:`#FFF`}),(0,K.jsx)(`path`,{d:`M2 16.364h14V1.636H2v14.728zM18 1.636C18 .733 17.104 0 16 0H2C.896 0 0 .733 0 1.636v14.728C0 17.267.896 18 2 18h14c1.104 0 2-.733 2-1.636V1.636z`,fill:H.cloud.getShade(10)}),(0,K.jsx)(`g`,{fill:H.cloud.getShade(6),children:(0,K.jsx)(`path`,{d:`M9.01 4.002c.019.005.04.008.058.016.076.03.137.092.166.169.019.051.015.066.017.12l-.246 3.55h2.633l.057.005c.05.015.064.016.107.046a.294.294 0 01.124.25c-.002.052-.011.063-.028.112l-2.675 5.57c-.01.016-.02.035-.032.051a.297.297 0 01-.385.065.291.291 0 01-.128-.2c-.003-.02-.002-.04-.003-.06l.248-3.778H6.288l-.058-.006c-.049-.016-.064-.016-.107-.047A.294.294 0 016 9.612c.003-.052.012-.064.03-.112l2.675-5.342a.291.291 0 01.183-.15.38.38 0 01.121-.006z`})})]})})}N();function Ts({theme:e}){return(0,K.jsx)(U.Icon,{width:18,height:18,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M16 0c1.104 0 2 .733 2 1.636v14.728c0 .903-.896 1.636-2 1.636H2c-1.104 0-2-.733-2-1.636V1.636C0 .733.896 0 2 0z`,fill:e.vstui.color.primary.getShade(6)}),(0,K.jsx)(`path`,{d:`M9.01 4.002c.019.005.04.008.058.016.076.03.137.092.166.169.019.051.015.066.017.12l-.246 3.55h2.633l.057.005c.05.015.064.016.107.046a.294.294 0 01.124.25c-.002.052-.011.063-.028.112l-2.675 5.57c-.01.016-.02.035-.032.051a.297.297 0 01-.385.065.291.291 0 01-.128-.2c-.003-.02-.002-.04-.003-.06l.248-3.778H6.288l-.058-.006c-.049-.016-.064-.016-.107-.047A.294.294 0 016 9.612c.003-.052.012-.064.03-.112l2.675-5.342a.291.291 0 01.183-.15.38.38 0 01.121-.006z`,fill:`#FFF`})]})})}var Es=ue(Ts);N();var Ds=P.span`
  display: inline-flex;
  transform: translateX(1px);
  & > svg {
    width: 19px;
    height: 17px;
  }
`;function Os({enrichmentStatus:e,assessmentType:t}){return e===Rt.INCORRECT?(0,K.jsx)(G.XSmall,{}):e===Rt.CORRECT?(0,K.jsx)(G.Checkmark,{}):e===Rt.INCOMPLETE?t===Ar.SUMMATIVE?(0,K.jsx)(ws,{}):(0,K.jsx)(Ds,{children:(0,K.jsx)(G.CoachMe,{})}):e===Rt.COMPLETE?t===Ar.SUMMATIVE?(0,K.jsx)(Es,{}):(0,K.jsx)(G.Checkmark,{}):null}N();var ks=P.div`
  background-color: ${({$bg:e})=>e??H.cloud.getShade(10)};
  font-size: 1rem;
  font-weight: bold;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  color: white;
  display: flex;
  vertical-align: middle;
  justify-content: space-around;
  position: absolute;
  top: -4px;
  right: -4px;
`;function As(e){let t=I(),n=`checkpoint.incomplete`;return e===Rt.CORRECT?n=`checkpoint.correct`:e===Rt.INCORRECT?n=`checkpoint.incorrect`:e===Rt.COMPLETE&&(n=`checkpoint.complete`),t.formatMessage({id:n})}N();function js(e,t,n){if(e===Rt.CORRECT)return H.green.getShade(6);if(e===Rt.INCORRECT)return H.red.getShade(6);if(t===Ar.FORMATIVE)return e===Rt.COMPLETE?n:Ya.getShade(7)}function Ms({onClick:e,questionCount:t,enrichmentStatus:n,assessmentType:r,theme:i}){let a=I(),o=As(n),s=r===Ar.SUMMATIVE?a.formatMessage({id:`checkpoint.knowledgeCheckpoint`}):a.formatMessage({id:`checkpoint.practiceQuestion`},{count:t}),c=t>1&&r===Ar.FORMATIVE;s+=c?` (${t})`:``,s+=` (${o})`;let l=js(n,r,i.vstui.color.primary.getShade(6));return(0,K.jsxs)(Bo,{onClick:e,ariaLabel:s,...l?{innerBg:l,innerColor:`white`}:{},children:[(0,K.jsx)(Os,{enrichmentStatus:n,assessmentType:r}),c&&(0,K.jsx)(ks,{children:t})]})}var Ns=ue(Ms);function Ps({data:e}){let{openPanel:t}=Sa(),{registerPOI:n}=nt(),r=()=>{qa(`enrichment_icon_clicked`,{enrichmentId:e.id}),qa(`enrichment_panel_opened`,{enrichmentId:e.id}),e.cfi&&n(e.cfi,{align:`bottom`}),t(q.ENRICHMENT,e,{opener:ba.GutterIcon})};return(0,K.jsxs)(Jo,{children:[(0,K.jsx)(Ns,{onClick:r,questionCount:e.count,enrichmentStatus:e.status,assessmentType:e.type}),(0,K.jsx)($o,{children:(0,K.jsx)(Cs,{assessmentType:e.type,enrichmentStatus:e.status,questionCount:e.count,onClick:r})})]})}function Fs({type:e,data:t,toggleGutterOpen:n,needsFocus:r,itemOptions:i}){let a=(0,W.useCallback)(()=>{n(t)},[t,n]);return e===po.HIGHLIGHT?(0,K.jsx)(_s,{highlight:t,toggleGutterOpen:a,needsFocus:r,isNewHighlight:i?.willDeleteOnCancel??!1}):e===po.ENRICHMENT?(0,K.jsx)(Ps,{data:t}):null}function Is(){let[e,t]=(0,W.useState)(!1),{currentVal:n,setVal:r}=cr(pr.COACH_ME_ONBOARDING_DISABLED),i=ca();return(0,W.useEffect)(()=>{n!==!0&&i&&t(!0)},[i,n]),{showOnboarding:e,closeOnboarding:()=>{r(!0),t(!1)}}}var Ls=({className:e})=>(0,K.jsx)(G.StarFill,{className:e,color:`#F2C400`});N();var Rs={OnboardingCard:P(U.Card)`
    background-color: white;
    padding: 20px;
    position: absolute;
    z-index: 1; /* see also icon */
    margin: 70px 20px 0;
    overflow: visible;
    h1 {
      color: ${Pe(7)};
      font-weight: bold;
      font-size: 2.6rem;
      margin-bottom: 15px;
    }
  `,CloseButton:P(U.IconButton)`
    position: absolute;
    right: 10px;
    top: 10px;
  `,PowerFeature:P.div`
    text-transform: uppercase;
    display: flex;
    font-size: 1.2rem;
    color: ${H.cloud.getShade(6)};
    letter-spacing: 1.05px;
    align-items: center;
    font-weight: 500;
    margin-bottom: 15px;

    p {
      margin-top: 2px;
    }

    svg {
      height: 12px;
      width: 12px;
      margin-right: 5px;
    }
  `,List:P.ul`
    margin-left: 25px;
    li {
      list-style-type: disc !important;
      line-height: 2.2rem;
    }

    li:not(:last-child) {
      margin-bottom: 10px;
    }

    svg {
      margin-top: 3px;
    }
  `};function zs({closeOnboarding:e}){let t=I(),{contentProps:n}=Gr();return(0,K.jsxs)(Rs.OnboardingCard,{"data-coachme-onboarding-id":`coachme-onboarding`,children:[(0,K.jsxs)(Rs.PowerFeature,{children:[(0,K.jsx)(Ls,{}),(0,K.jsx)(`p`,{children:t.formatMessage({id:`base.powerFeature`})})]}),(0,K.jsx)(Rs.CloseButton,{icon:(0,K.jsx)(G.XSmall,{}),color:`custom`,customIconColor:H.cloud.getShade(10),rounded:!0,size:`small`,onClick:e,label:t.formatMessage({id:`base.close`})}),(0,K.jsx)(`h1`,{children:t.formatMessage({id:`gutter.coachMe.onboarding.title`})}),(0,K.jsxs)(Rs.List,{children:[(0,K.jsx)(`li`,{children:t.formatMessage({id:`gutter.coachMe.onboarding.bullets.1`})},`1`),(0,K.jsx)(`li`,{children:t.formatMessage({id:`gutter.coachMe.onboarding.bullets.2`})},`2`),(0,K.jsx)(`li`,{children:t.formatMessage({id:`gutter.coachMe.onboarding.bullets.3`})},`3`)]}),(0,K.jsx)(pa,{...n,selectedTab:ua.CHECKPOINT})]})}N();var Bs={Container:P.div`
    position: absolute;
    z-index: 1; /* see also card */
    top: 75px;
  `};function Vs({onClick:e,leftPosition:t}){let n=I();return(0,K.jsx)(Bs.Container,{style:{left:t},children:(0,K.jsx)(Bo,{onClick:e,ariaLabel:n.formatMessage({id:`base.powerFeature`}),children:(0,K.jsx)(Ls,{})})})}var Hs=({isGutterOpen:e,toggleGutter:t,iconLeft:n})=>{let{showOnboarding:r,closeOnboarding:i}=Is(),a=(0,W.useRef)(!1),o=gs(),s=(0,W.useCallback)(()=>{a.current=!0,t()},[t]);if((0,W.useEffect)(()=>{e||(a.current=!1)},[e]),!r||!o)return null;if(e){let e=(0,K.jsx)(zs,{closeOnboarding:i});return a.current?(0,K.jsx)(di,{children:e}):e}return(0,K.jsx)(Vs,{onClick:s,leftPosition:n})};N();var Us=`data-gutter-id`,Ws=8,Gs=32,Ks={Container:P.section`
    width: 100%;
    position: relative;
  `,ExpandButtonContainer:P.div`
    top: 15px;
    position: fixed;
    z-index: 10;
  `,ItemPositioner:P.li`
    position: absolute;
    width: 100%;
  `},qs=W.memo(Fs);function Js({isOpen:e,context:t,theme:n,hideExpandButton:r=!1,closedWidth:i,refocusGutterIconUuid:a}){let o=I(),{positionedItems:s,contextHeight:c}=Do(),l=(0,W.useRef)(null),{scrollYByOffset:u,scrollTop:d}=Ao(),p=qe(),{setPadding:m}=Fo(),h=(0,W.useRef)({}),{togglePanel:g}=Sa(),_=gs(),{registerPOI:v}=nt(),[y,b]=(0,W.useState)(!1),x=(0,W.useCallback)(e=>{if(e?.cfi){let t=be(e.cfi);t&&v(t.toString())}g(q.EXPANDED_GUTTER)},[v,g]);function S(e){return l.current?.querySelector(`[${Us}='${e}']`)}function C(e){return e.closest(`li`)}let w=(0,W.useCallback)(()=>{if(s.length===0){m({bottom:0});return}let{uuid:e}=s[s.length-1],{height:t,y:n}=h.current[e];n+t+Ws>c?m({bottom:n-c+t+Ws}):m({bottom:0})},[s,c,m]),T=(0,W.useCallback)(()=>{h.current={};let e=-1/0;s.forEach(({position:t,uuid:n,positionMode:r})=>{let i=S(n);if(i){let a=i.offsetHeight,o=r===fo.BOTTOM?Math.max(t.y-a,e):Math.max(t.y,e);o=Math.max(0,o),i.style.transform=`translateY(${o}px)`,h.current[n]={y:o,height:a},a>0&&(e=o+a+Ws)}})},[s,e]),E=(0,W.useCallback)(()=>{if(l.current&&document.activeElement&&l.current.contains(document.activeElement)){let e=C(document.activeElement),t=e.getAttribute(Us),{y:n,height:r}=h.current[t],i=n-d;document.activeElement.nodeName.toLowerCase()===`textarea`&&f()&&setTimeout(()=>{window.scrollTo(0,0),p.height-i<p.height/3&&u(p.height/2)},150),ce(e),i<0?u(i-65):i+r>p.height&&u(i-p.height+r+Ws)}},[p,u,d]),D=Io(E,300),O=Io(w,300);(0,W.useLayoutEffect)(()=>{T(),O(),D()},[T,O,D]),(0,W.useEffect)(()=>{let e=l.current;if(!e)return;let t=new MutationObserver(function(e){for(let t of e){let e=C(t.target);if(e&&(e!==t.target||t.type===`childList`)&&t.target.getAttribute(`role`)!==`tooltip`){T(),w(),E();return}}});return t.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>t.disconnect()},[T,w,E]);let k=(i-Gs)/2,te=Math.floor(k);return(0,W.useEffect)(()=>{if(a&&!y&&l.current){let e=S(ho({id:a}));e&&setTimeout(()=>{let t=e.getBoundingClientRect();t.top>0&&t.bottom<window.innerHeight&&e?.querySelector(`button`)?.focus(),b(!0)},300)}},[y,a,l]),(0,K.jsxs)(Ks.Container,{"aria-label":o.formatMessage({id:`gutter.label`}),children:[!r&&_&&(0,K.jsx)(Ks.ExpandButtonContainer,{style:{transform:`translateY(${p.top}px)`,right:Math.ceil(k)},children:(0,K.jsx)(U.IconButton,{color:`custom`,customIconColor:H.cloud.getShade(10),customIconFocusColor:n.vstui.color.primary.getShade(6),rounded:!0,onClick:x,icon:e?(0,K.jsx)(G.CaretRightSmall,{}):(0,K.jsx)(G.CaretLeftSmall,{}),label:ee(o.formatMessage({id:`gutter.openClose`})),tooltipPlacement:`bottom`,"aria-expanded":e,buttonType:`floating`,size:`small`})}),(0,K.jsx)(Hs,{isGutterOpen:e,toggleGutter:x,iconLeft:te}),(0,K.jsx)(`ul`,{ref:l,onFocus:E,style:{transform:`translateY(-${d}px)`},className:Zo(e),children:s.map(({uuid:e,data:n,type:r})=>(0,K.jsx)(Ks.ItemPositioner,{[Us]:e,style:{paddingLeft:te},children:(0,K.jsx)(qs,{type:r,data:n,toggleGutterOpen:x,needsFocus:t?.uuid===e,itemOptions:t?.options})},e))})]})}var Ys=ue(Js),Xs=Ye(Ze.SET_BOOKMARK),Zs=Ye(Ze.DELETE_BOOKMARK),Qs=Ye(Ze.GET_BOOKMARKS),$s=Ye(Ze.GO_TO_BOOKMARK);function ec(){return function(e){return e(Xs())}}function tc(e){return function(t){return t(Zs(e))}}function nc(e){return e.bookmarks}var rc=e=>nc(e).bookmarksRawData,ic=Je(rc,st,(e,t)=>e.find(e=>e.page===t)?.guid),ac=e=>nc(e).loadStatus,oc=Je(rc,e=>e?.map(e=>({id:e.guid,chapterTitle:e.chapterTitle,page:e.page,epubCfi:e.epubCfi,pbkPage:e.pbkPage,markedAt:e.markedAt,markedAtDate:e.markedAt?new Date(e.markedAt):void 0})));function sc(){let e=R(ac),t=$e();return(0,W.useEffect)(()=>{e===p.WAITING&&t(Qs())},[e,t]),e}function cc(){let e=sc(),t=R(oc),n=R(ic),r=z(),i=(0,W.useCallback)(e=>r($s(e)),[r]),a=(0,W.useCallback)(e=>r(tc(e)),[r]);return{loadStatus:h([e]),bookmarksData:t,activeBookmarkId:n,numBookmarks:t?.length??0,goToBookmark:i,setBookmark:()=>r(ec()),deleteBookmark:a}}var lc=({colors:e})=>(0,K.jsx)(`svg`,{"aria-hidden":!0,focusable:`false`,width:`32px`,height:`34px`,viewBox:`0 0 32 34`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M19.46 22.098c-.737.54-1.435 1.049-1.661 1.878l-.045.165c-.328 1.202-.427 1.536-.934 1.632h-1.621c-.478-.093-.565-.411-.842-1.538l-.06-.242c-.21-.851-.918-1.373-1.67-1.925-1.14-.84-2.432-1.793-2.432-4.14a5.86 5.86 0 015.853-5.853 5.86 5.86 0 015.852 5.853c0 2.388-1.24 3.294-2.44 4.17m-3.412-11.84c-4.23 0-7.67 3.44-7.67 7.67 0 3.266 1.909 4.672 3.173 5.603.414.304.93.685.982.897l.06.24c.154.628.292 1.143.474 1.559a2.105 2.105 0 00-.822 1.663v.25c0 .459.15.88.398 1.227a2.095 2.095 0 00-.398 1.225v.252a2.12 2.12 0 002.117 2.117h3.277a2.12 2.12 0 002.117-2.117v-.252c0-.458-.15-.88-.398-1.225.249-.347.398-.768.398-1.226v-.251a2.11 2.11 0 00-.788-1.635c.196-.425.355-.961.539-1.636l.045-.165c.058-.215.549-.573.98-.89 1.269-.925 3.186-2.325 3.186-5.636 0-4.23-3.441-7.67-7.67-7.67`,fill:e.base}),(0,K.jsx)(`path`,{d:`M15.97 7.443a.908.908 0 00.907-.908V2.831a.909.909 0 10-1.816 0v3.704c0 .501.406.908.908.908M26.35 18.497c0 .502.405.908.907.908h3.703a.908.908 0 100-1.816h-3.703a.907.907 0 00-.908.908M0 18.497c0 .502.407.908.909.908h3.703a.908.908 0 100-1.816H.909a.908.908 0 00-.91.908M4.586 7.493a.908.908 0 00-1.089 1.455l3.186 2.385a.905.905 0 001.27-.183.909.909 0 00-.181-1.272L4.586 7.493zM28.625 7.677a.91.91 0 00-1.271-.184l-3.185 2.385a.909.909 0 101.089 1.455l3.184-2.385c.402-.3.484-.87.183-1.271`,fill:e.primary})]})}),uc=({colors:e})=>(0,K.jsx)(`svg`,{"aria-hidden":!0,focusable:`false`,width:`16`,height:`18`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M.961 15.054c-.53 0-.961.448-.961 1s.43 1 .961 1H14.04c.53 0 .961-.448.961-1s-.43-1-.961-1H.96zM3.856 9.595l-2.411 2.597c-.6.604-.208 1.356.642 1.356h2.307c.377 0 .744-.118 1.051-.336l1.2-.793a.064.064 0 00.003-.09L3.974 9.597a.083.083 0 00-.12-.002`,fill:e.primary}),(0,K.jsx)(`path`,{d:`M13.088 3.996L7.966 9.117l-.826-.826 5.12-5.12a.584.584 0 11.827.826m1.415-2.24a2.587 2.587 0 00-3.655 0L4.312 8.29l3.654 3.654 6.536-6.535a2.586 2.586 0 000-3.654`,fill:e.base})]})}),dc=({colors:e})=>(0,K.jsx)(`svg`,{"aria-hidden":!0,focusable:`false`,width:`19`,height:`17`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 19 17`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M15 9.767a1 1 0 00-1 1l.002 4L2 14.77 1.998 4.767H8a1 1 0 100-2H1.998A2 2 0 000 4.765V14.77a2 2 0 001.998 1.998h12.004A2 2 0 0016 14.77v-4.002a1 1 0 00-1-1`,fill:e.primary}),(0,K.jsx)(`path`,{fill:e.base,d:`M4.5 12.93h6.999v-1H4.5zM8.206 10.254l3.89-1.768-2.122-2.123zM17.459.293a1 1 0 00-1.414 0l-.172.172-5.192 5.192 2.122 2.122 5.192-5.193.17-.171a1 1 0 000-1.415L17.46.293z`})]})}),fc=({colors:e})=>(0,K.jsx)(`svg`,{"aria-hidden":!0,focusable:`false`,width:`18`,height:`17`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M3 0a3 3 0 00-3 3v7a3 3 0 003 3h4.842l4.762 3.81A.86.86 0 0014 16.14V13h1a3 3 0 003-3V3c0-1.655-1.344-3-3-3H3zm0 2h12c.551 0 1 .449 1 1v7c0 .552-.449 1-1 1h-3v2.766l-2.909-2.328L8.543 11H3a1 1 0 01-1-1V3c0-.551.448-1 1-1z`,fill:e.base}),(0,K.jsx)(`path`,{fill:e.primary,d:`M4 5h10V4H4zM4 8h10V7H4z`})]})}),pc=({colors:e})=>(0,K.jsx)(`svg`,{"aria-hidden":!0,focusable:`false`,width:`22`,height:`10`,xmlns:`http://www.w3.org/2000/svg`,style:{marginTop:`4px`},children:(0,K.jsxs)(`g`,{fill:`#FFF`,strokeWidth:`2`,fillRule:`evenodd`,children:[(0,K.jsx)(`circle`,{stroke:e.primary,cx:`5`,cy:`5`,r:`4`}),(0,K.jsx)(`circle`,{stroke:e.base,cx:`11`,cy:`5`,r:`4`}),(0,K.jsx)(`circle`,{stroke:e.primary,cx:`17`,cy:`5`,r:`4`})]})});function mc(e){return(0,K.jsx)(U.Icon,{width:12,height:18,children:(0,K.jsx)(`path`,{d:`M10 0H2a2 2 0 00-2 2v14a1.998 1.998 0 003.562 1.249L6 14.201l2.438 3.048A2 2 0 0012 16V2a2 2 0 00-2-2m0 2v14l-4-5-4 5V2h8`,fill:e.base,fillRule:`evenodd`})})}function hc(e){return(0,K.jsx)(U.Icon,{width:12,height:19,children:(0,K.jsx)(`path`,{d:`M10 .846a2 2 0 012 2v14a1.998 1.998 0 01-3.562 1.249L6 15.047l-2.438 3.048A2 2 0 010 16.845v-14a2 2 0 012-2z`,fill:e.primary,fillRule:`evenodd`})})}function gc({colors:e}){return(0,K.jsx)(`svg`,{focusable:!1,"aria-hidden":!0,width:`15`,height:`14`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M9.835 12.982c0-.3.102-.546.306-.74.203-.195.465-.292.782-.292.318 0 .58.097.783.291a.98.98 0 01.306.741.97.97 0 01-.299.73c-.199.191-.463.288-.79.288s-.59-.097-.789-.289a.97.97 0 01-.299-.729zm.194-2.06c0-.628.077-1.128.23-1.5.151-.373.43-.739.836-1.1.405-.36.675-.655.81-.88.134-.228.201-.468.201-.719 0-.758-.349-1.137-1.048-1.137-.33 0-.597.102-.796.306-.2.204-.304.486-.313.845H8c.01-.856.285-1.526.83-2.01C9.374 4.241 10.117 4 11.058 4c.95 0 1.686.23 2.211.69.524.46.786 1.108.786 1.946 0 .382-.085.742-.255 1.08-.17.34-.469.714-.894 1.127l-.545.52c-.34.325-.535.71-.585 1.148l-.026.41h-1.72z`,fill:e.base}),(0,K.jsx)(`path`,{d:`M.961 0C.431 0 0 .448 0 1s.43 1 .961 1H13.04c.53 0 .961-.448.961-1s-.43-1-.961-1H.96zM.961 5C.431 5 0 5.448 0 6s.43 1 .961 1H5.04C5.569 7 6 6.552 6 6s-.43-1-.961-1H.96zM.961 10C.431 10 0 10.448 0 11s.43 1 .961 1H5.04c.53 0 .961-.448.961-1s-.43-1-.961-1H.96z`,fill:e.primary})]})})}function _c({colors:e}){return(0,K.jsx)(`svg`,{focusable:!1,"aria-hidden":!0,width:`14`,height:`18`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M2 16.002L1.998 2H8v4h4l.002 10L2 16.002zM13.415 4.415L9.585.585A2 2 0 008.173 0H1.998A1.999 1.999 0 000 1.998v14.004C0 17.106.895 18 1.998 18h10.004A1.998 1.998 0 0014 16.002V5.827a2 2 0 00-.585-1.412z`,fill:e.base}),(0,K.jsx)(`path`,{fill:e.primary,d:`M4 10h6V9H4zM4 13h6v-1H4z`})]})})}function vc({colors:e}){return(0,K.jsx)(`svg`,{focusable:!1,"aria-hidden":!0,width:`14`,height:`14`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M0 1.5a1.5 1.5 0 113.001.001A1.5 1.5 0 010 1.5M0 7a1.5 1.5 0 113.001.001A1.5 1.5 0 010 7M0 12.5a1.5 1.5 0 113.001.001A1.5 1.5 0 010 12.5`,fill:e.primary}),(0,K.jsx)(`path`,{d:`M6 2.5h7a1 1 0 100-2H6a1 1 0 100 2M6 8h7a1 1 0 100-2H6a1 1 0 100 2M6 13.5h7a1 1 0 100-2H6a1 1 0 100 2`,fill:e.base})]})})}function yc({colors:e}){return(0,K.jsx)(`svg`,{focusable:!1,"aria-hidden":!0,width:`18`,height:`21`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{fill:e.base,d:`M9 2a.902.902 0 00-.852.579L6.67 6.321a.915.915 0 01-.794.577l-4.017.25c-.828.051-1.165 1.09-.525 1.619l3.102 2.563c.274.226.392.59.303.934L3.736 16.16c-.16.622.332 1.147.888 1.147.162 0 .33-.045.489-.146l3.396-2.159a.916.916 0 01.982 0l3.396 2.159a.906.906 0 00.489.146c.556 0 1.048-.525.888-1.147l-1.003-3.896a.914.914 0 01.303-.934l3.102-2.563c.64-.529.303-1.568-.525-1.619l-4.017-.25a.915.915 0 01-.794-.577L9.852 2.579A.902.902 0 009 2m0 3.946l.442 1.12a2.957 2.957 0 002.556 1.858l1.202.074-.929.768a2.955 2.955 0 00-.975 3.004l.3 1.166-1.017-.646a2.934 2.934 0 00-3.158 0l-1.017.646.3-1.166a2.955 2.955 0 00-.975-3.004L4.8 8.998l1.202-.074a2.957 2.957 0 002.556-1.858L9 5.946M2.973 1.558c-.376-.375-.997-.363-1.387.028-.39.39-.403 1.011-.028 1.387l1.47 1.469c.375.375.996.363 1.386-.028.39-.39.403-1.011.028-1.387l-1.47-1.469z`}),(0,K.jsx)(`path`,{fill:e.primary,d:`M10 17.961c0-.53-.448-.961-1-.961s-1 .43-1 .961v2.078c0 .53.448.961 1 .961s1-.43 1-.961V17.96zM16.442 2.973c.375-.376.363-.997-.028-1.387-.39-.39-1.011-.403-1.387-.028l-1.469 1.47c-.375.375-.363.996.028 1.386.39.39 1.011.403 1.387.028l1.469-1.47z`})]})})}function bc({colors:e}){return(0,K.jsx)(`svg`,{focusable:!1,"aria-hidden":!0,width:`16`,height:`19`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M6.011 12H2V2h7v3.081h2v-3.08a2 2 0 00-2-2H2a2 2 0 00-2 2v10a2 2 0 002 2H6.01v-2z`,fill:e.base}),(0,K.jsx)(`path`,{d:`M15.954 16.012v-10a2 2 0 00-2-2h-7a2 2 0 00-2 2v10a2 2 0 002 2h7a2 2 0 002-2zm-9 0h7v-10h-7v10z`,fill:e.primary})]})})}function xc(e,t=`/`,n={}){let r=new URL(e);return r.pathname=`${r.pathname}${t}`.replace(`//`,`/`),r.searchParams.set(`utm_source`,`bookshelfonline`),r.searchParams.set(`source`,`bookshelf`),Object.keys(n).forEach(e=>{r.searchParams.set(e,n[e])}),r.toString()}var Sc=function(e){return e.US=`us`,e}({});function Cc(){let e=d(),t=R(at),n=e.getProp(`Store.enabled`),r=e.getProp(`Store.vstStore`),i=e.getProp(`Store.url`),a=n&&r,o=(0,W.useMemo)(()=>a&&new URL(i).pathname===`/`?`us`:null,[a,i]),s=(0,W.useCallback)((e,t={})=>a?xc(i,`/textbooks`,{...t,term:e}):void 0,[a,i]),c=(0,W.useCallback)((e,t={})=>a?xc(i,`/show/`+e,{...t,term:e}):void 0,[a,i]),l=(0,W.useCallback)(e=>c(t,{...e,renewal:!0}),[t,c]);return(0,W.useMemo)(()=>({isEnabled:n,isVstStore:a,vstStoreRegion:o,url:i,makeRenewalUrl:l,makeProductUrl:c,makeSearchUrl:s}),[n,a,i,l,c,s,o])}function wc(){return(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,K.jsx)(`path`,{d:`M10 4H5V5H10V4Z`,fill:`#012892`}),(0,K.jsx)(`path`,{d:`M16.59 15.86L14.5 13.77C15.03 12.98 15.34 12.03 15.34 11C15.34 9.22 14.4 7.66 12.99 6.78V2C12.99 0.9 12.09 0 10.99 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H6.37C7.28 15.21 8.72 16 10.34 16C11.35 16 12.29 15.69 13.08 15.18L15.18 17.28C15.38 17.48 15.63 17.57 15.89 17.57C16.15 17.57 16.4 17.47 16.6 17.28C16.99 16.89 16.99 16.26 16.6 15.87L16.59 15.86ZM4 12V2H11V6.07C10.78 6.04 10.57 6 10.35 6C7.59 6 5.35 8.24 5.35 11C5.35 11.34 5.39 11.68 5.45 12H4ZM10.35 14C8.7 14 7.35 12.65 7.35 11C7.35 9.35 8.7 8 10.35 8C12 8 13.35 9.35 13.35 11C13.35 12.65 12 14 10.35 14Z`,fill:`currentColor`})]})}function Tc(){return(0,K.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,focusable:`false`,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5 9.143C4.495 9.143 3.994 9.195 3.5 9.278V10.299C3.988 10.206 4.486 10.143 5 10.143C5.514 10.143 6.012 10.206 6.5 10.299V9.284C6.005 9.2 5.506 9.143 5 9.143ZM13 9.143C12.494 9.143 11.995 9.2 11.5 9.284V10.299C11.988 10.206 12.485 10.143 13 10.143C13.514 10.143 14.012 10.206 14.5 10.299V9.278C14.005 9.195 13.505 9.143 13 9.143ZM5 6.5C4.486 6.5 3.988 6.562 3.5 6.65V7.666C3.992 7.565 4.493 7.5 5 7.5C5.507 7.5 6.007 7.57 6.5 7.672V6.65C6.012 6.562 5.514 6.5 5 6.5ZM13 6.5C12.485 6.5 11.988 6.562 11.5 6.65V7.672C11.993 7.57 12.492 7.5 13 7.5C13.507 7.5 14.008 7.565 14.5 7.666V6.65C14.012 6.562 13.514 6.5 13 6.5ZM2 14.029V3.52C2.791 3.186 3.643 3.011 4.5 3.011C5.712 3.011 6.9 3.357 7.938 4.01L8 4.049V14.349C6.878 13.932 5.695 13.712 4.5 13.712C3.651 13.712 2.814 13.819 2 14.029ZM10 14.349V4.049L10.062 4.01C11.1 3.357 12.288 3.011 13.5 3.011C14.357 3.011 15.209 3.186 16 3.52V14.029C15.186 13.819 14.349 13.712 13.5 13.712C12.305 13.712 11.122 13.932 10 14.349ZM13.5 1C11.846 1 10.306 1.484 9 2.306C7.694 1.484 6.154 1 4.5 1C2.949 1 1.499 1.425 0.248 2.156C0.093 2.247 0 2.417 0 2.597V15.429C0 16.003 0.467 16.434 0.991 16.434C1.115 16.434 1.244 16.41 1.369 16.357C2.338 15.95 3.393 15.724 4.5 15.724C6.049 15.724 7.496 16.166 8.746 16.928C8.825 16.976 8.912 17 9 17C9.088 17 9.175 16.976 9.254 16.928C10.504 16.166 11.951 15.724 13.5 15.724C14.607 15.724 15.662 15.95 16.631 16.357C16.756 16.41 16.885 16.434 17.009 16.434C17.533 16.434 18 16.003 18 15.429V2.597C18 2.417 17.907 2.247 17.752 2.156C16.501 1.425 15.052 1 13.5 1Z`,fill:`white`})})}function Ec(){return(0,K.jsx)(`svg`,{width:`18`,height:`24`,viewBox:`0 0 18 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,focusable:`false`,children:(0,K.jsxs)(`g`,{children:[(0,K.jsx)(`path`,{d:`M6.97178 8.52063C7.12935 7.88798 8.02854 7.88798 8.18612 8.52063L9.39079 13.3573C9.44673 13.5819 9.62211 13.7573 9.84673 13.8133L14.6834 15.0179C15.3161 15.1755 15.3161 16.0747 14.6834 16.2323L9.84673 17.4369C9.62211 17.4929 9.44673 17.6683 9.39079 17.8929L8.18612 22.7295C8.02854 23.3622 7.12935 23.3622 6.97178 22.7295L5.76711 17.8929C5.71116 17.6683 5.53579 17.4929 5.31117 17.4369L0.474491 16.2323C-0.158164 16.0747 -0.158163 15.1755 0.474491 15.0179L5.31117 13.8133C5.53579 13.7573 5.71116 13.5819 5.76711 13.3573L6.97178 8.52063Z`,fill:`currentColor`}),(0,K.jsx)(`path`,{d:`M14.9303 5.96089C14.9894 5.72365 15.3266 5.72365 15.3857 5.96089L15.8375 7.77465C15.8584 7.85888 15.9242 7.92465 16.0084 7.94563L17.8222 8.39738C18.0594 8.45647 18.0594 8.79366 17.8222 8.85275L16.0084 9.3045C15.9242 9.32548 15.8584 9.39125 15.8375 9.47548L15.3857 11.2892C15.3266 11.5265 14.9894 11.5265 14.9303 11.2892L14.4786 9.47548C14.4576 9.39125 14.3918 9.32548 14.3076 9.3045L12.4939 8.85275C12.2566 8.79366 12.2566 8.45647 12.4939 8.39738L14.3076 7.94563C14.3918 7.92465 14.4576 7.85888 14.4786 7.77465L14.9303 5.96089Z`,fill:`currentColor`}),(0,K.jsx)(`path`,{d:`M5.18571 0.960893C5.2448 0.723648 5.58199 0.723648 5.64108 0.960893L6.09283 2.77465C6.11381 2.85888 6.17958 2.92465 6.26381 2.94563L8.07757 3.39738C8.31481 3.45647 8.31481 3.79366 8.07757 3.85275L6.26381 4.3045C6.17958 4.32548 6.11381 4.39125 6.09283 4.47548L5.64108 6.28924C5.58199 6.52648 5.2448 6.52648 5.18571 6.28924L4.73396 4.47548C4.71298 4.39125 4.64721 4.32548 4.56298 4.3045L2.74922 3.85275C2.51198 3.79366 2.51198 3.45647 2.74922 3.39738L4.56298 2.94563C4.64721 2.92465 4.71298 2.85888 4.73396 2.77465L5.18571 0.960893Z`,fill:`currentColor`})]})})}N();var Dc=P.label`
  ${Ie}
`,Oc=P.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;function kc(e){let t=k(),{label:n,hideLabel:r,fieldSize:i=`default`,validationStatus:a,validationMessage:o,className:s,id:c,multiline:l,...u}=e,d=c??t,f=k(),p={id:d,"aria-invalid":a===`invalid`,"aria-describedby":f};return(0,K.jsxs)(Oc,{className:s,children:[(0,K.jsxs)(`div`,{className:Ot(`vst-text-field`,i===`small`&&`vst-text-field-size-small`,i===`large`&&`vst-text-field-size-large`,a===`valid`&&`vst-text-field-validation-valid`,a===`invalid`&&`vst-text-field-validation-invalid`),children:[r?(0,K.jsx)(Dc,{htmlFor:d,children:n}):(0,K.jsx)(`label`,{htmlFor:d,children:n}),l?(0,K.jsx)(`textarea`,{...u,...p}):(0,K.jsx)(`input`,{type:`text`,...u,...p})]}),o&&(0,K.jsx)(`p`,{id:f,className:Ot(`vst-validation-message`,i===`small`&&`vst-validation-message-size-small`,i===`large`&&`vst-validation-message-size-large`,a===`valid`&&`vst-validation-message-variant-valid`),children:o})]})}function Ac(){let e=d().getProp(`BookshelfAI.StudyPlan.enabled`),{isEnabled:t}=gr();return t&&e}function jc(){let e=z(),t=R(Er),n=(0,W.useRef)(),r=(0,W.useRef)(null),i=Ac(),a=I();(0,W.useEffect)(()=>{i&&e(ir())},[e,i]);let o=(0,W.useCallback)(t=>{r.current=t;let i=new AbortController;return n.current=i,e(qn({signal:i.signal},{...t,locale:a.locale}))},[e,a]),s=(0,W.useCallback)(()=>o(r.current),[o]),c=(0,W.useCallback)(()=>{e(Cr())},[e]),l=(0,W.useCallback)(()=>{n.current?.abort()},[]);return(0,W.useMemo)(()=>({studyPlanProgress:t,generateStudyPlan:o,retryStudyPlan:s,resetStudyPlan:c,abortStudyPlan:l}),[t,o,s,c,l])}function Mc(){return kt(`(max-width: 1680px)`)}var Nc=function(e){return e.CONTENTS=`contents`,e.STUDY_PLAN=`study-plan`,e}({}),Pc={isOpen:!1,currentTab:`contents`};function Fc(e){let t=(0,W.useRef)(e),n=At(Ct.TOC_STATE),r=Dt(Ct.TOC_STATE),i=!!At(Ct.READER_PANEL)?.panelType,a=n||t.current||Pc,{closePanel:o}=Sa(),s=Mc();(0,W.useEffect)(()=>{t.current&&!n&&r(t.current)},[r,n]);let c=(0,W.useCallback)((e,t)=>{`isOpen`in e&&e.isOpen&&!a?.isOpen&&s&&i&&o(!0),a&&r({...a,...e,...t?{focusRequestedAt:Date.now(),focusRequestTarget:t}:{}})},[r,s,o,a,i]);return(0,W.useMemo)(()=>({isOpen:a?.isOpen,currentTab:a?.currentTab??`contents`,focusRequestedAt:a?.focusRequestedAt,focusRequestTarget:a?.focusRequestTarget,isPlanPromoSuppressed:a?.isPlanPromoSuppressed,setOpen:e=>c({isOpen:e},e?`panel`:void 0),setTab:e=>c({currentTab:e}),openTab:(e,t)=>c({isOpen:!0,currentTab:e,isPlanPromoSuppressed:t?.isPlanPromoSuppressed},e)}),[a,c])}function Ic(e,t){let[n,r]=(0,W.useState)(!1),i=Xe(n),a=(0,W.useRef)(0),o=(0,W.useRef)(0),[s,c]=(0,W.useState)(0);function l(e){c(Kr(e).clientX)}function u(e){Qr.MOUSE_MOVE.split(` `).forEach(function(e){window.removeEventListener(e,l)}),Qr.MOUSE_UP.split(` `).forEach(function(e){window.removeEventListener(e,u)}),r(!1)}return{startDrag:n=>{a.current=Kr(n).clientX,o.current=e.current?.offsetWidth||0,c(a.current),n.stopPropagation(),t?.startNoDefault&&n.preventDefault(),Qr.MOUSE_MOVE.split(` `).forEach(function(e){window.addEventListener(e,l)}),Qr.MOUSE_UP.split(` `).forEach(function(e){window.addEventListener(e,u)}),r(!0)},dragging:n,dragEnded:i&&!n,x:s,startWidth:o.current,deltaX:Math.floor(s-a.current),iframeDragCorrector:n?Ur():null}}N();var Lc=16,Rc=P.div`
  display: block;
  width: ${3}px;
  height: 100%;
  margin: 0 auto;
  /* intentional use of ocean */
  background-color: ${H.ocean.getShade(5)};
  visibility: hidden;
`,zc={LineContainer:P.div`
    position: absolute;
    ${({side:e})=>e===`left`?`right: 0`:`left: 0`};
    top: 0;
    bottom: 0;
    width: ${Lc}px;
    cursor: col-resize;
    :focus {
      outline: none; /* using the line instead */
    }
    :focus,
    :hover ${({dragging:e})=>e&&`, :not(:hover) `} {
      ${Rc} {
        visibility: visible;
      }
    }
    z-index: 1;
  `},Bc=({targetRef:e,onResizeStart:t,onResize:n,onResizeEnd:r,minWidth:i,maxWidth:a,curWidth:o,side:s=`left`})=>{let{dragging:c,dragEnded:l,startDrag:u,startWidth:d,deltaX:f,iframeDragCorrector:p}=Ic(e,{startNoDefault:!0});(0,W.useEffect)(()=>{c?t?.():l&&r?.()},[l,c,r,t]);let m=s===`left`?1:-1;(0,W.useEffect)(()=>{c&&n(d+f*m)},[f,m,c,n,d]);function h(t){if(e.current&&(t.key===`ArrowLeft`||t.key===`ArrowRight`)){let r=e.current.offsetWidth;t.key===`ArrowLeft`?n(Math.floor(r-20*m)):n(Math.floor(r+20*m))}}return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(zc.LineContainer,{tabIndex:0,dragging:c,side:s,onMouseDown:u,onKeyDown:h,role:`separator`,"aria-orientation":`vertical`,"aria-valuemin":i,"aria-valuemax":a,"aria-valuenow":o,children:(0,K.jsx)(Rc,{})}),p]})};N();var Vc={Container:P.div`
    position: relative; /* to dock the line */
    ${({curWidth:e,collapsed:t,collapsedWidth:n})=>t?n!==void 0&&`width: ${n}px`:e!==void 0&&`width: ${e}px`};
    ${({minWidth:e,collapsed:t})=>e!==void 0&&!t&&`min-width: ${e}px`};
    ${({maxWidth:e,maxGuardWidth:t,collapsed:n})=>e!==void 0&&!n&&`max-width: min(${e}px, ${t}%)`};
  `},Hc=e=>{let{resizeActive:t,side:n=`left`,initialWidth:r,minWidth:i,maxWidth:a,maxGuardWidth:o,collapsed:s=!1,collapsedWidth:c,children:l,className:u,onResizeEnd:d,onResizeStart:f,constrainWidth:p,panelApiRef:m}=e,[h,g]=(0,W.useState)(r),_=(0,W.useRef)(null);return(0,W.useImperativeHandle)(m,()=>({setWidth:e=>g(Ge(e,i,a)),getWidth:()=>_.current?.offsetWidth??0,isCollapsed:()=>s,collapsedWidth:c??0}),[i,a,s,c]),(0,W.useLayoutEffect)(()=>{if(s||!p)return;let e=requestAnimationFrame(()=>{g(e=>{let t=Ge(p(e),i,a);return t===e?e:t})});return()=>cancelAnimationFrame(e)},[s,p,i,a]),(0,K.jsxs)(Vc.Container,{ref:_,curWidth:h,minWidth:i,maxWidth:a,maxGuardWidth:o,collapsed:s,collapsedWidth:c,className:u,children:[l,t&&!s&&(0,K.jsx)(Bc,{curWidth:h,minWidth:i,maxWidth:a,maxGuardWidth:o,collapsed:s,className:u,side:n,targetRef:_,onResizeStart:f,onResize:e=>{e=Ge(e,i,a),p&&(e=p(e,!0),e=Ge(e,i,a)),g(e)},onResizeEnd:()=>d?.(h)})]})},Uc=`localbook`;function Wc(e){let{bookInfo:{isbn:t}}=ht(),{userInfo:{email:n}}=ut(),{value:r,updateValue:i}=O(`${t}-${ie(n)}-${Uc}-${e}`),a=(0,W.useCallback)(e=>{i(e)},[i]);return(0,W.useMemo)(()=>({value:r,updateValue:a}),[a,r])}var Gc=Ye(Ze.CAPTURE_FOCUS),Kc=Ye(Ze.RESTORE_FOCUS);function qc(){let e=z();return{capturePageFocus:(0,W.useCallback)(()=>e(Gc()).then(e=>!!e.data?.gotFocus),[e]),restorePageFocus:(0,W.useCallback)(()=>e(Kc()).then(e=>e.data?.restoredFocus===!0),[e])}}function Jc(e){let t=Array.isArray(e)?e:[e],n=Ka(),r=(0,W.useRef)(),i=(0,W.useRef)(t);i.current=t;let a=(0,W.useRef)(),o=(0,W.useRef)(!1),{capturePageFocus:s,restorePageFocus:c}=qc(),l=(0,W.useCallback)(e=>{let t=e.detail.activeEl;a.current=t,t.tagName.toLowerCase()===`iframe`?(s(),o.current=!0):o.current=!1},[s]),u=e=>{let t=!1;o.current?c().then(e=>{t=e}):r.current&&a.current?.focus(),setTimeout(()=>{let n=document.activeElement?.tagName.toLowerCase();(!n||n===`body`||n===`iframe`&&!(o.current&&t))&&e?.focus()},200)};(0,W.useEffect)(()=>(window.addEventListener(_t.OPEN,l),()=>{window.removeEventListener(_t.OPEN,l)}),[l]);let d=(0,W.useCallback)(e=>{e.target&&i.current.length>0&&(e.type!==`blur`&&i.current.some(t=>t.contains(e.target))?r.current=e.target:setTimeout(()=>r.current=null,1))},[]);return(0,W.useEffect)(()=>(window.addEventListener(`focusin`,d),window.addEventListener(`blur`,d),()=>{window.removeEventListener(`focusin`,d),window.removeEventListener(`blur`,d)}),[d]),(0,W.useEffect)(()=>{r.current?.focus()},[n]),{restoreFocusOnClose:u}}N();var Yc=P(U.IconButton)`
  position: absolute;
  top: 12px;
  z-index: 2;
  ${e=>e.noRtl?`right: 12px;`:`  inset-inline-end: 12px;`}
`,Xc=({onClick:e,className:t,noRtl:n})=>{let r=I();return(0,K.jsx)(Yc,{label:r.formatMessage({id:`base.close`}),size:`small`,rounded:!0,tooltipPlacement:`left`,icon:(0,K.jsx)(G.XSmall,{color:H.cloud.getShade(10)}),onClick:e,className:t,noRtl:n})};function Zc({colors:e}){return(0,K.jsx)(`svg`,{"aria-hidden":!0,focusable:`false`,width:`14`,height:`18`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M2 16.002L1.998 2H8v4h4l.002 10L2 16.002zM13.415 4.415L9.585.585A2 2 0 008.173 0H1.998A1.999 1.999 0 000 1.998v14.004C0 17.106.895 18 1.998 18h10.004A1.998 1.998 0 0014 16.002V5.827a2 2 0 00-.585-1.412z`,fill:`${e.base}`}),(0,K.jsx)(`path`,{fill:`${e.primary}`,d:`M4 10h6V9H4zM4 13h6v-1H4z`})]})})}function Qc({colors:e}){return(0,K.jsx)(`svg`,{"aria-hidden":!0,focusable:`false`,width:`18`,height:`16`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M16 0H2a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2zM2 14h14V2H2v12z`,fill:`${e.base}`}),(0,K.jsx)(`path`,{d:`M14.906 12.01L12.79 8.484a.655.655 0 00-1.122 0l-1.586 2.643L7.38 5.722a.631.631 0 00-1.13 0l-3.183 6.364c-.21.42.096.914.566.914h6.364c.022 0 .038-.013.06-.015.02.002.036.015.057.015h4.23a.654.654 0 00.562-.99M14 5a2 2 0 11-4.001-.001A2 2 0 0114 5`,fill:`${e.primary}`})]})})}function $c({colors:e}){return(0,K.jsx)(`svg`,{"aria-hidden":!0,focusable:`false`,width:`21`,height:`21`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{fill:`${e.primary}`,d:`M4.32 9.64h5V8.56h-5zM4.32 6.4h6.48V5.32H4.32z`}),(0,K.jsx)(`path`,{d:`M12.692 4.533V3.227H2.308v12.686h4.307a1.153 1.153 0 110 2.307H2.308A2.314 2.314 0 010 15.913V3.227A2.314 2.314 0 012.308.92h10.384A2.313 2.313 0 0115 3.227v1.306a1.153 1.153 0 11-2.308 0z`,fill:`${e.base}`}),(0,K.jsx)(`path`,{d:`M11.549 16.749a1.57 1.57 0 00-.52-1.6l-2.567-2.12 3.293-.114a1.571 1.571 0 001.361-.989l1.223-3.097 1.126 3.097c.221.564.756.952 1.36.989l3.323.207-2.596 2.028a1.57 1.57 0 00-.521 1.598l.797 3.096-2.698-1.714a1.553 1.553 0 00-.84-.245c-.298 0-.59.084-.84.245l-2.812 1.786.91-3.167z`,fill:`#FFF`}),(0,K.jsx)(`path`,{d:`M14.29 8.053c-.29 0-.578.16-.704.479l-1.224 3.097a.757.757 0 01-.657.477l-3.324.208c-.684.042-.964.902-.435 1.339l2.567 2.121a.753.753 0 01.25.772l-.829 3.225a.76.76 0 00.734.95.75.75 0 00.405-.121l2.811-1.787a.755.755 0 01.812 0l2.811 1.787a.75.75 0 00.405.12.76.76 0 00.734-.949l-.83-3.225a.755.755 0 01.25-.772l2.568-2.121c.53-.437.25-1.297-.434-1.34l-3.324-.207a.758.758 0 01-.658-.477l-1.224-3.097a.746.746 0 00-.704-.479m0 3.105l.422 1.066a2.382 2.382 0 002.063 1.5l1.144.07-.884.73a2.39 2.39 0 00-.788 2.426l.286 1.11-.967-.614a2.372 2.372 0 00-1.276-.37c-.452 0-.893.127-1.275.37l-.968.614.286-1.11a2.389 2.389 0 00-.788-2.425l-.884-.73 1.144-.072a2.385 2.385 0 002.064-1.499l.421-1.066`,fill:`${e.primary}`})]})})}function el({colors:e}){return(0,K.jsx)(`svg`,{width:`18`,height:`18`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,focusable:`false`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M9 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7M9 0a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9`,fill:e.base}),(0,K.jsx)(`path`,{d:`M13.706 6.05a.999.999 0 00-1.414 0l-4.534 4.536-2.063-2.062a.999.999 0 10-1.414 1.414l2.77 2.769a1 1 0 001.414 0l5.241-5.241a1 1 0 000-1.415`,fill:e.primary})]})})}function tl({colors:e}){return(0,K.jsx)(`svg`,{width:`22`,height:`25`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,focusable:`false`,viewBox:`2 0 22 25`,children:(0,K.jsxs)(`g`,{transform:`rotate(-16 16.615 .827)`,fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`rect`,{fill:e.base,transform:`rotate(-29 11.903 15.619)`,x:`10.753`,y:`11.119`,width:`2.3`,height:`9`,rx:`1.15`}),(0,K.jsx)(`path`,{d:`M7.1 0a7.1 7.1 0 100 14.2A7.1 7.1 0 007.1 0zm0 2.2a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8z`,fill:e.primary,fillRule:`nonzero`})]})})}function nl({colors:e}){return(0,K.jsx)(`svg`,{width:`16`,height:`19`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,focusable:`false`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{d:`M6.011 12H2V2h7v3.081h2v-3.08a2 2 0 00-2-2H2a2 2 0 00-2 2v10a2 2 0 002 2H6.01v-2z`,fill:e.base}),(0,K.jsx)(`path`,{d:`M15.954 16.012v-10a2 2 0 00-2-2h-7a2 2 0 00-2 2v10a2 2 0 002 2h7a2 2 0 002-2zm-9 0h7v-10h-7v10z`,fill:e.primary})]})})}function rl({colors:e}){return(0,K.jsx)(`svg`,{width:`18`,height:`18`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,focusable:`false`,children:(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`path`,{fill:e.primary,d:`M7 17h4v-7H7z`}),(0,K.jsx)(`path`,{d:`M14 14v2H4V6.704L9 2.33l5 4.374V14zm3.658-6.753l-8-7a.998.998 0 00-1.316 0l-8 7A1.001 1.001 0 001 9h1v7a2 2 0 002 2h10a2 2 0 002-2V9h1a1.001 1.001 0 00.658-1.753z`,fill:e.base})]})})}N();var il={Container:P.div`
    margin-top: 25px;
    padding: 15px 35px;
    overflow-y: auto;
  `,Header:P.h2`
    font-size: 2.8rem;
  `,StartSearch:P.h3`
    font-size: 2.4rem;
  `,MidText:P.p`
    font-weight: bold;
    margin-top: 35px;
  `,ListItemContainer:P.li`
    display: flex;
    padding: 25px 0px 0px;
  `,Icon:P.div`
    margin: 0px 25px 0px 0px;
    width: 5px;
  `};function al({theme:e}){let t={primary:e.vstui.color.primary.getShade(6),base:e.color.base.getShade(9)},n=I(),r=[`findKeywords`,`importantFigures`,`locate`],i=[(0,K.jsx)(Zc,{colors:t}),(0,K.jsx)(Qc,{colors:t}),(0,K.jsx)($c,{colors:t})];function a(){return r.map(e=>(0,K.jsxs)(il.ListItemContainer,{children:[(0,K.jsx)(il.Icon,{children:i[r.indexOf(e)]}),n.formatMessage({id:`search.instructions.${e}`})]},e))}return(0,K.jsxs)(il.Container,{children:[(0,K.jsx)(il.StartSearch,{children:n.formatMessage({id:`search.instructions.startSearch`})}),(0,K.jsx)(il.MidText,{children:n.formatMessage({id:`search.instructions.bookSearch`})}),(0,K.jsx)(`ul`,{children:a()})]})}var ol=ue(al),sl=function(e){return e[e.Highlight=0]=`Highlight`,e[e.Bookmark=1]=`Bookmark`,e}({}),cl=function(e){return e.CONTENT=`content`,e.FIGURES=`figures`,e.WORKBOOK=`workbook`,e}({}),ll={content:{},figures:{},workbook:{}};function ul(e,t,n=[],r=100){Array.isArray(n)||(n=[n]);let i=n.indexOf(0)!==-1,a,o,s;if(typeof t==`string`){if(o=t.length,s=e.toLowerCase().indexOf(t.toLowerCase()),s===-1){if(i||e.length<=r)return e;let t=e.indexOf(` `,r);return t!==e.length&&t!==-1?e.substr(0,t)+`...`:e}a=e.substr(s,o)}else a=e.substr(t.pos,t.len),o=t.len,s=t.pos;let c=s+o,l=Math.ceil((r-o)/2),u=l*2,d;if(i)d=e;else{let t=Math.max(0,s-l),n=Math.min(e.length,c+l);t!==0&&(t=e.lastIndexOf(` `,t-1)+1,t===-1&&(t=0),s-t>u&&(t=s-l)),n!==e.length&&(n=e.indexOf(` `,n),n===-1&&(n=e.length),n-c>u&&(n=c+l)),d=e.substring(t,n).trim(),t!==0&&(d=`...${d}`),n!==e.length&&(d+=`...`)}let f=RegExp(`(${E(a)})`,`ig`);return d=d.replace(f,`<strong>$1</strong>`),d}function dl(e,t,n){return t?Ce(e,t):e.filter(e=>parseInt(e.cfi.slice(1))===n)[0].label}function fl(e,t){let n={};return e?.forEach(e=>{e.term_locs?.forEach(r=>{let i=ul(e.text,r),a=e.term_locs.indexOf(r);n[e.chapter_title]||(n[e.chapter_title]=[]),n[e.chapter_title].push({id:e.id,chapter_title:e.chapter_title,uuid:le(),text:i,term_locs:[r],cfi:e.cfi?e.cfi:void 0,term_cfis:e.term_cfis?[e.term_cfis[a]]:null,page:dl(t,e.cfi,e.id)})})}),n}function pl(e,t,n){return t.map(e=>({figure:e,excerptedCaption:``,excerptedTitle:``,page:``})).filter(t=>{let r=t.figure,i=((r.title??``)+(r.caption??``)).toLowerCase().indexOf(e.toLowerCase())!==-1;return i&&(t.excerptedTitle=ul(r.title??``,e),t.excerptedCaption=ul(r.caption??``,e),t.page=Ce(n,r.cfi)),i}).reduce((e,t)=>{let n=t.figure.chapterTitle;return e[n]||(e[n]=[]),e[n].push(t),e},{})}function ml(e,t,n){return[].concat(t.filter(t=>((t.noteText??``)+(t.selectedText??``)).toLowerCase().indexOf(e.toLowerCase())!==-1).map(t=>({type:sl.Highlight,item:t,noteText:ul(t.noteText??``,e,0),selectedText:ul(t.selectedText??``,e)})),n.filter(t=>(t.chapterTitle??``).toLowerCase().indexOf(e.toLowerCase())!==-1).map(t=>({type:sl.Bookmark,item:t,titleText:ul(t.chapterTitle??``,e,0)}))).sort((e,t)=>gl(e,t))}var hl=e=>e.type===sl.Highlight?new Date(e.item.lastModifiedAt||0):e.item.markedAt?new Date(e.item.markedAt):new Date(0),gl=(e,t)=>{let n=hl(e);return hl(t).valueOf()-n.valueOf()};N();var _l={Container:P.div`
    border: 1px solid ${H.cloud.getShade(4)};
    border-radius: 4px;
    display: flex;
    align-items: stretch;
    flex-shrink: 0;
    margin: 0 24px 24px;
  `,IconCol:P.div`
    background-color: ${e=>e.theme.vstui.color.primary.getShade(1)};
    min-width: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,TipCol:P.div`
    padding: 16px;
  `,Title:P.div`
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 8px;
  `,Tip:P.div`
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.214;
  `},vl=({titleId:e,tipId:t,iconColors:n,tipValues:r,className:i,isAlert:a})=>{let o=I();return(0,K.jsxs)(_l.Container,{className:i,role:a?`alert`:void 0,children:[(0,K.jsx)(_l.IconCol,{children:(0,K.jsx)(lc,{colors:n})}),(0,K.jsxs)(_l.TipCol,{children:[(0,K.jsx)(_l.Title,{children:o.formatMessage({id:e})}),(0,K.jsx)(_l.Tip,{children:(0,K.jsx)(w,{id:t,values:r})})]})]})};N();var yl={NoResultsContainer:P.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
  `,Content:P.div`
    flex: 1 0 auto;
    margin: 85px 57px 0;
    text-align: center;
  `,ContentItem:P.p`
    margin-bottom: 8px;
  `,NoResultsFound:P.p`
    margin: 0 0 13px;
    font-weight: bold;
    font-size: 1.8rem;
  `};function bl({searchType:e,theme:t}){let n={primary:t.vstui.color.primary.getShade(6),base:t.color.base.getShade(9)},r=I(),i=d().getProp(`Bookmarks.enabled`),a=d().getProp(`Highlights.enabled`),{bookInfo:{hasPageBreaks:o}}=ht();return(0,K.jsxs)(yl.NoResultsContainer,{children:[(0,K.jsxs)(yl.Content,{children:[(0,K.jsx)(yl.NoResultsFound,{children:r.formatMessage({id:`search.${e}.noResultsFound`})}),(0,K.jsx)(yl.ContentItem,{children:r.formatMessage({id:`search.tabs.error`})}),e===cl.FIGURES&&(0,K.jsx)(yl.ContentItem,{children:r.formatMessage({id:`search.figures.someUnavailable`})})]}),e===cl.WORKBOOK&&a&&(0,K.jsx)(vl,{titleId:`search.workbook.studyTip`,tipId:i&&o?`search.workbook.studyTips.withBookmarks`:`search.workbook.studyTips`,iconColors:n})]})}var xl=ue(bl),Sl=(e,t)=>{let n=0,r=[],i=-1;for(let a=0;a<e.length;a++)n+=e[a],(t&&n>t||a===e.length-1)&&(r.push({indexStart:i+1,indexEnd:a}),i=a,n=0);return r};function Cl(e,t){let n=(0,W.useMemo)(()=>Sl(e,t),[e,t]),[r,i]=(0,W.useState)(0),a=(0,W.useRef)();(0,W.useEffect)(()=>{a.current=n}),a.current&&a.current!==n&&r!==0&&i(0);let o=()=>{i(Math.min(r+1,n.length-1))},s=n&&r<n.length-1;return{hasMore:s,exhausted:!s,lastVisibleBlock:{indexEnd:n?.length&&r<n?.length?n[r].indexEnd:-1,indexStart:n[r]?.indexStart},loadMore:o}}N();var wl={MoreBtnHolder:P.div`
    text-align: center;
    padding: 24px 0;
  `},Tl=({onMoreClick:e,itemInteractionId:t})=>(0,K.jsx)(wl.MoreBtnHolder,{children:(0,K.jsx)(U.Button,{outline:!0,pill:!0,size:`small`,onClick:()=>{e()},"data-interaction-id":`${t}_more`,children:(0,K.jsx)(w,{id:`base.loadMore`})})});N();var El=F`
  margin-left: 24px;
  content: "";
  display: block;
  width: calc(100% - 48px);
  border-bottom: 1px solid ${H.cloud.getShade(4)};
`,Dl={MainContainer:P.div`
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
  `,ExpandCollapse:P.div`
    padding: 3px 0 3px 24px;
  `,ListContainer:P.div`
    /* keep for now c.f right bar constrainHeight */
    /*overflow-y: auto; */
    /*overflow-x: hidden; */
    ${({noTopLine:e})=>e&&F`
        & > ul:first-child > li:first-child:before {
          display: none;
        }
      `};
  `,ListItem:P.li`
    position: relative;
    width: 100%;
    &:first-child {
      margin-top: 1px;
      :before {
        ${El};
        margin-top: -1px;
      }
    }
    &:not(:last-child) {
      margin-bottom: 1px;
      :after {
        ${El}
      }
    }
  `,ListItemButton:P.button`
    outline: none;
    &:not(:focus) {
      padding: 12px ${({isSelected:e})=>e?`16px`:`24px`} 12px
        24px;
      ${({isSelected:e})=>e&&F`
          border-right: 8px solid ${L(6)};
        `};
    }
    &:focus {
      border: 2px solid ${L(6)};
      padding: 10px ${({isSelected:e})=>e?`16px`:`22px`} 10px
        22px;
      border-right: ${({isSelected:e})=>e?`8px`:`2px`} solid
        ${L(6)};
    }
    &:hover {
      background-color: ${L(1)};
    }
    cursor: pointer;
    width: 100%;
    display: flex;
    text-align: left;
  `,HeadingItem:P.h3`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
  `,Caret:P.div`
    height: 100%;
    margin: -5px 4px 0 -7px;
  `,HeadingName:P.div`
    font-weight: bold;
    display: inline-flex;
    align-items: center;
  `,HeadingText:P.span`
    ${ze(2)};
  `,HeadingAncillary:P.div`
    color: ${H.cloud.getShade(6)};
    font-size: 1.4rem;
    text-align: right;
    white-space: nowrap;
    margin-left: 16px;
  `,SubItemsList:P.ul`
    max-height: 100%;
  `},Ol=({items:e,onItemClick:t,moreChunkSize:n=0,keepChildrenMounted:r=!1,noTopLine:i=!1,onMore:a,itemInteractionId:o,visuallyHiddenLegend:s},c)=>{let l=e=>e.filter(e=>!!e.subItems?.length),u=(0,W.useMemo)(()=>l(e).map(e=>e.heading),[e]),d=Vr(u,!0),[f,p]=(0,W.useState)(null),m=(0,W.useMemo)(()=>e.map(e=>e.subItems?.length??1),[e]),h=l(e).length>0,g=Cl(m,n),_=(0,W.useRef)(null),v=(0,W.useRef)(null),y=(e,n,r=!1)=>(0,K.jsxs)(Dl.ListItem,{ref:r&&n===g.lastVisibleBlock.indexStart?v:void 0,"aria-current":e===f,children:[(0,K.jsx)(Dl.ListItemButton,{onClick:()=>{p(e),t(e.content)},isSelected:e===f,children:c.renderItem(e.content)}),c.renderAdditionalContents?.(e.content)]},c.getItemKey(e.content)??n);return e.length?(0,K.jsxs)(Dl.MainContainer,{children:[h&&(0,K.jsx)(Dl.ExpandCollapse,{children:(0,K.jsx)(Wr,{onExpandClick:d.expandAll,onCollapseClick:d.collapseAll,allExpanded:d.fullyExpanded,allCollapsed:d.fullyCollapsed,featureId:o,visuallyHiddenLegend:s})}),(0,K.jsxs)(Dl.ListContainer,{noTopLine:i,children:[(0,K.jsx)(`ul`,{children:e.map((e,t)=>{if(t>g.lastVisibleBlock.indexEnd)return null;if(e.subItems?.length){let n=e.heading,i=d.isItemExpanded(n),a=e.subItems;return(0,K.jsxs)(Dl.ListItem,{children:[(0,K.jsxs)(Dl.HeadingItem,{children:[(0,K.jsxs)(Dl.HeadingName,{children:[(0,K.jsx)(Dl.Caret,{ref:t===g.lastVisibleBlock.indexStart?_:void 0,children:(0,K.jsx)(qr,{onClick:()=>d.toggleItem(n),isExpanded:i,ariaLabel:n,featureId:o})}),(0,K.jsx)(Dl.HeadingText,{children:n})]}),c.renderHeadingAncillary&&(0,K.jsx)(Dl.HeadingAncillary,{children:c.renderHeadingAncillary(n,a)})]}),(0,K.jsx)(Yr,{trigger:i,keepChildrenMounted:r,children:(0,K.jsx)(Dl.SubItemsList,{children:a?.map((e,t)=>y(e,t))})},n)]},c.getHeadingKey?.(n)??n)}return y(e,t,!0)})}),g.hasMore&&(0,K.jsx)(Tl,{onMoreClick:()=>{Promise.resolve(g.loadMore()).then(()=>{_.current&&j(_.current)[0]?.focus(),v.current&&j(v.current)[0]?.focus()}),setTimeout(()=>a?.(g.lastVisibleBlock.indexEnd))},itemInteractionId:o})]})]}):null};function kl(e){return Object.keys(e).map(t=>({heading:t,subItems:e[t].map(e=>({content:e}))}))}function Al(e){return e.map(e=>({content:e}))}N();var jl={SearchResultItem:P.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow-wrap: anywhere;
    strong {
      color: ${Le(7)};
    }
  `,PageNumber:P.div`
    margin-left: 5px;
    font-size: 1.2rem;
    margin-top: 0.3rem;
    min-width: 30px;
    text-align: right;
    color: ${H.cloud.getShade(7)};
  `},Ml=({result:e})=>{let{text:t,page:n}=e;return(0,K.jsxs)(jl.SearchResultItem,{children:[(0,K.jsx)(Zr,{children:t}),(0,K.jsx)(jl.PageNumber,{children:n})]})},Nl=function(e){return e.BOOK_CONTENTS=`search_scope_book_contents`,e.WORKBOOK=`search_scope_book_workbook`,e.FIGURES=`search_scope_book_figures`,e}({}),Pl=`80px`;function Fl(e){return`SearchDropdownListItem${e}`}N();var Il={Holder:P.div`
    height: 100%;
    /* vstui tabs are inset but we want our scrollbar flush */
    margin: 0 -24px;
  `},Ll=({results:e,goToSearchResult:t})=>{let n=(0,W.useMemo)(()=>kl(e),[e]),r=I();return(0,K.jsx)(Il.Holder,{children:Object.keys(e).length>0?(0,K.jsx)(Rl,{moreChunkSize:250,keepChildrenMounted:!0,items:n,onItemClick:e=>{t(e),a(`${Nl.BOOK_CONTENTS}_navigate`)},itemInteractionId:Nl.BOOK_CONTENTS,visuallyHiddenLegend:r.formatMessage({id:`search.resultsAccordion`})}):(0,K.jsx)(xl,{searchType:cl.CONTENT})})},Rl=e=>Ol(e,{renderItem:e=>(0,K.jsx)(Ml,{result:e}),getItemKey:e=>e.uuid,renderHeadingAncillary:(e,t)=>(0,K.jsx)(w,{id:`search.content.results`,values:{resultCount:t.length}})}),zl=rt(`figures`),Bl=zl.getFetchStatus,Vl=zl.getData,Hl=Je(Vl,e=>e?.reduce((e,t)=>(e[t.chapterTitle]||(e[t.chapterTitle]=[]),e[t.chapterTitle].push(t),e),{})),Ul=Je(e=>Hl(e),e=>Pt.getData(e),(e,t)=>{if(!e||!t)return null;let n=t?.reduce((e,t)=>(e[t.title]=t,e),{}),r={};return Object.entries(e).forEach(([e,t])=>{let i=n[e];i&&(r[i.uuid]={figures:t,tocInfo:i})}),r}),Wl=Ye(Ze.GET_FIGURES),Gl=Ye(Ze.GO_TO_FIGURE);function Kl(){let e=R(Bl),t=$e();return(0,W.useEffect)(()=>{e===p.WAITING&&t(Wl())},[e,t]),e}function ql(){let e=Kl(),t=R(Vl),n=R(Hl),r=R(Ul),i=e=>t.find(t=>t.figureId===e),a=z();return{loadStatus:e,figures:t,figureById:i,figuresGroupedByChapterTitle:n,figuresAndTocInfoGroupByTocUuid:r,numFigures:t?.length??0,goToFigure:e=>a(Gl(e))}}N();var Jl={FigureItem:P.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    strong {
      color: ${Le(7)};
    }
  `,ThumbnailPlaceholder:P.div`
    width: ${Pl};
    height: ${Pl};
    min-width: ${Pl};
  `,TextContent:P.div`
    margin-left: 15px;
    flex-grow: 1;
    div {
      overflow-wrap: anywhere;
    }
  `,Title:P.div`
    margin-bottom: 4px;
  `,Caption:P.div``,PageNumber:P.div`
    margin-left: 5px;
    font-size: 1.2rem;
    margin-top: 0.3rem;
    min-width: 30px;
    text-align: right;
    color: ${H.cloud.getShade(7)};
  `},Yl=({figureResult:e})=>{let{page:t,excerptedTitle:n,excerptedCaption:r}=e;return(0,K.jsxs)(Jl.FigureItem,{children:[(0,K.jsx)(Jl.ThumbnailPlaceholder,{}),(0,K.jsxs)(Jl.TextContent,{children:[(0,K.jsx)(Jl.Title,{children:(0,K.jsx)(Zr,{children:n??``})}),(0,K.jsx)(Jl.Caption,{children:(0,K.jsx)(Zr,{children:r??``})})]}),(0,K.jsx)(Jl.PageNumber,{children:t})]})},Xl=(e,t,n,r)=>{let i=(0,W.useCallback)(e=>{let t=new IntersectionObserver(n=>{n.forEach(n=>{if(n.intersectionRatio>0){let r=n.target,i=r.dataset.src,a=r.dataset.srcset;i&&(r.src=i),a&&(r.srcset=a),t.unobserve(e)}})});t.observe(e)},[]);(0,W.useEffect)(()=>{let n=e?.current?.querySelectorAll(t);n&&n.length&&n.forEach(e=>i(e),{root:e})},[i,t,e,n,r])};N();var Zl={ThumbContainer:P.div`
    position: absolute;
    top: 12px;
    left: 24px;
  `,ThumbButton:P.button`
    cursor: zoom-in;
    border: 1px solid ${H.cloud.getShade(4)};
    border-radius: 4px;
    background-color: white;
    &:hover {
      outline: 0;
      box-shadow: rgb(236, 236, 236) 0 0 0 4px;
    }
    &:focus {
      outline: 0;
      box-shadow: rgb(236, 236, 236) 0 0 0 4px, rgb(255, 255, 255) 0 0 0 6px,
        ${e=>e.theme.vstui.color.primary.getShade(6)} 0 0 0 8px;
    }
  `,Thumbnail:P.img`
    width: ${Pl};
    height: ${Pl};
    object-fit: contain;
    vertical-align: top;
  `};function Ql({imageClass:e,result:t,onRequestZoom:n}){let r=I();return(0,K.jsx)(Zl.ThumbContainer,{children:(0,K.jsx)(ai.default,{title:ee(r.formatMessage({id:`imageZoom.viewImage`})),children:(0,K.jsx)(Zl.ThumbButton,{"aria-label":r.formatMessage({id:`imageZoom.viewImage`}),onClick:()=>{n(t)},children:(0,K.jsx)(Zl.Thumbnail,{"aria-hidden":!0,className:e,src:Fe,"data-src":t.figure.thumbnailURL,"data-srcset":`${t.figure.thumbnailURL}, ${t.figure.thumbnailURL2x} 2x`})})})})}N();var $l={Holder:P.div`
    height: 100%;
    /* vstui tabs are inset but we want our scrollbar flush */
    margin: 0 -24px;
  `},eu=`search-figure-img`,tu=({results:e})=>{let{goToFigure:t,figures:n}=ql(),r=(0,W.useMemo)(()=>kl(e),[e]),i=(0,W.useRef)(null),[o,s]=(0,W.useState)(0);Xl(i,`.${eu}`,n,o);let[c,l]=(0,W.useState)(null),u=I();function d(){let e=c?.title||``,t=c?.caption||``;return e&&t?`${e} ${t}`:e||t||``}return(0,K.jsxs)($l.Holder,{ref:i,children:[Object.keys(e).length>0?(0,K.jsx)(nu,{moreChunkSize:100,keepChildrenMounted:!0,items:r,onItemClick:e=>{t(e.figure),a(`${Nl.FIGURES}_navigate`)},onRequestZoom:e=>{l(e.figure)},onMore:e=>s(e),itemInteractionId:Nl.FIGURES,visuallyHiddenLegend:u.formatMessage({id:`search.resultsAccordion`})}):(0,K.jsx)(xl,{searchType:cl.FIGURES}),(0,K.jsx)(tr,{open:!!c,src:c?.imageURL,onRequestClose:()=>l(null),description:d()})]})},nu=e=>Ol(e,{renderItem:e=>(0,K.jsx)(Yl,{figureResult:e,figureClass:eu}),getItemKey:e=>e.figure.cfi,renderHeadingAncillary:(e,t)=>(0,K.jsx)(w,{id:`search.content.results`,values:{resultCount:t.length}}),renderAdditionalContents:t=>(0,K.jsx)(Ql,{imageClass:eu,onRequestZoom:e.onRequestZoom,result:t})});N();var ru={Container:P.div`
    border-radius: 4px;
    padding: 3px 4px;
    display: inline-block;
    background-color: ${({color:e})=>e};
    font-weight: 500;
    font-size: 1.2rem;
    position: absolute;
    transform: translate(-50%, 0);
    [dir="rtl"] & {
      transform: translate(50%, 0);
    }
    ${({margin:e})=>e&&`margin: ${e};`};
  `},iu=({name:e,initials:t,color:n,colorName:r,margin:i})=>(0,K.jsx)(ru.Container,{title:`${e} ${r}`,color:n,margin:i,children:t});N();var au={ResultItem:P.div`
    position: relative;
    width: 100%;
    strong {
      color: ${Le(7)};
    }
  `,ResultRow:P.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  `,TextContent:P.div`
    font-weight: ${({isTitle:e})=>e?500:400};
    flex-grow: 1;
    div {
      overflow-wrap: anywhere;
    }
  `,EmojiHolder:P.span`
    font-size: 2rem;
    position: absolute;
    margin-left: 4px;
    transform: translate(-50%, 0);
  `,IconHolder:P.div`
    display: inline-flex;
    margin-right: 12px;
    align-items: center;
    svg {
      fill: ${L(6)};
    }
  `,Highlight:P.div`
    border-left: 4px solid ${({color:e})=>e};
    padding-left: 16px;
    line-height: 1.1875;
  `,Note:P.div`
    position: relative;
    color: ${H.cloud.getShade(6)};
    margin-top: 8px;
    margin-left: 20px;
    margin-right: 32px;
    white-space: pre-wrap;
  `,NoteIcon:P(G.ChatLines)`
    margin-left: -18px;
    position: absolute;
    top: 2px;
    transform: translate(-50%, 0) scale(-1, 1);
  `,PageNumber:P.div`
    margin-left: 5px;
    font-size: 1.2rem;
    margin-top: 0.3rem;
    min-width: 30px;
    text-align: right;
    color: ${H.cloud.getShade(7)};
  `},ou=({result:{selectedText:e,noteText:t,item:{vstColor:n,startLabel:r,hasNote:i,markerColorName:a,subscribed:o,authorName:s,authorInitials:c}}})=>{let l=i&&!!a,u=i&&!a;return(0,K.jsxs)(au.ResultItem,{children:[(o||u)&&(0,K.jsxs)(au.ResultRow,{children:[(0,K.jsx)(au.TextContent,{isTitle:!1,children:o?(0,K.jsx)(iu,{name:s,initials:c,color:n,colorName:a}):(0,K.jsx)(au.EmojiHolder,{children:t})}),(0,K.jsx)(au.PageNumber,{children:r})]}),(0,K.jsxs)(au.ResultRow,{children:[(0,K.jsxs)(au.TextContent,{isTitle:!1,children:[(0,K.jsx)(au.Highlight,{color:u?`transparent`:n,children:(0,K.jsx)(Zr,{children:e??``})}),l&&(0,K.jsxs)(au.Note,{children:[(0,K.jsx)(au.NoteIcon,{color:H.cloud.getShade(10)}),(0,K.jsx)(Zr,{children:t??``})]})]}),(0,K.jsx)(au.PageNumber,{children:!o&&!u?r:``})]})]})},su=()=>(0,K.jsx)(`svg`,{focusable:!1,"aria-hidden":!0,width:`12`,height:`18`,children:(0,K.jsx)(`path`,{d:`M10 0H2a2 2 0 00-2 2v14a1.998 1.998 0 003.562 1.249L6 14.201l2.438 3.048A2 2 0 0012 16V2a2 2 0 00-2-2m0 2v14l-4-5-4 5V2h8`,fillRule:`evenodd`})}),cu=({result:{titleText:e,item:{epubCfi:t,page:n}}})=>(0,K.jsx)(au.ResultItem,{children:(0,K.jsxs)(au.ResultRow,{children:[(0,K.jsx)(au.IconHolder,{children:(0,K.jsx)(su,{})}),(0,K.jsx)(au.TextContent,{isTitle:!0,children:(0,K.jsx)(Zr,{children:e??``})}),(0,K.jsx)(au.PageNumber,{children:n})]})}),lu=({result:e})=>e.type===sl.Highlight?(0,K.jsx)(ou,{result:e}):(0,K.jsx)(cu,{result:e});N();var uu={Holder:P.div`
    height: 100%;
    /* vstui tabs are inset but we want our scrollbar flush */
    margin: 0 -24px;
  `},du=({results:e})=>{let{goToHighlight:t}=vn(),{goToBookmark:n}=cc(),r=(0,W.useMemo)(()=>Al(e),[e]);return(0,K.jsx)(uu.Holder,{children:Object.keys(e).length>0?(0,K.jsx)(fu,{moreChunkSize:100,items:r,onItemClick:e=>{e.type===sl.Highlight?t(e.item.syncId,e.item.shared):e.type===sl.Bookmark&&n(e.item),a(`${Nl.WORKBOOK}_navigate`)},noTopLine:!0,itemInteractionId:Nl.WORKBOOK}):(0,K.jsx)(xl,{searchType:cl.WORKBOOK})})},fu=e=>Ol(e,{renderItem:e=>(0,K.jsx)(lu,{result:e}),getItemKey:e=>e.type===sl.Highlight?e.item.syncId:e.item.id,renderHeadingAncillary:(e,t)=>(0,K.jsx)(w,{id:`search.content.results`,values:{resultCount:t.length}})});N();var pu={Container:P.div`
    margin-top: 18px;
    overflow: hidden;
    height: 100%;
  `};function mu({results:e,numResults:t,goToSearchResult:n}){let r=I(),[i,o]=(0,W.useState)(0),s=Xe(i);function c(){return(0,K.jsx)(Ll,{results:e[cl.CONTENT],goToSearchResult:n})}function l(){return(0,K.jsx)(tu,{results:e[cl.FIGURES]})}function u(){return(0,K.jsx)(du,{results:e[cl.WORKBOOK]})}let d=[{content:c(),panelKey:`content`},{content:l(),panelKey:`figures`},{content:u(),panelKey:`workbook`}];return(0,W.useEffect)(()=>{s!==void 0&&s!==i&&a(`search_scope_book_${d[i].panelKey}`)},[i,d,s]),(0,K.jsx)(pu.Container,{children:(0,K.jsx)(U.Tabs,{onSelect:o,selectedIndex:i,customFontSize:15,panelStyle:`solidLine`,tabPadding:`large`,tabListPosition:`justified`,tabData:Object.values(cl).map(e=>({heading:`${r.formatMessage({id:`search.tabs.${e}`})} (${t[e]})`})),tabPanel:d})})}function hu(e){return e.search}var gu=e=>hu(e).recent;function _u(){let e=d(),t=z(),n=R(tt),[r,i]=(0,W.useState)({status:p.WAITING,result:ll}),{highlightsData:a}=vn(),o=R(gu);function s(e){t(Xt(e)).then(()=>{t(Sn(Object.values(r.result[cl.CONTENT]).flat()))})}let c=e=>{t(Tn(e))},l=t=>(r,o)=>{let s=[];Bl(o())===p.WAITING&&s.push(new Promise(e=>r(Wl()).then(()=>{e()}))),ac(o())===p.WAITING&&s.push(new Promise(e=>r(Qs()).then(()=>{e()}))),Promise.all(s).then(()=>r(Jt(t)).then(s=>{let c=Vl(o()),l=e.getProp(`Bookmarks.enabled`)?oc(o()):[],u=pl(t,c,n),d=fl(s.data,n),f=ml(t,e.getProp(`Highlights.enabled`)?a??[]:[],l??[]);if(s.ok)i({status:p.OK,result:{[cl.CONTENT]:d,[cl.FIGURES]:u,[cl.WORKBOOK]:f}}),r(Sn(Object.values(d).flat()));else throw Error()})).catch(()=>{i({status:p.ERROR,result:ll})})};return{reset:()=>{i({status:p.WAITING,result:ll})},search:e=>{c(e),i({status:p.FETCHING,result:ll}),t(l(e))},results:r.result,recent:o,loadStatus:r.status,numResults:{[cl.CONTENT]:vu(r.result[cl.CONTENT]),[cl.FIGURES]:vu(r.result[cl.FIGURES]),[cl.WORKBOOK]:vu(r.result[cl.WORKBOOK])},goToSearchResult:s,unhighlightSearchResults:()=>t(nn())}}var vu=e=>Array.isArray(e)?e.length:Object.keys(e).reduce((t,n)=>t+=e[n].length,0);N();var yu={PropItem:P.div`
    cursor: default;
    width: 100%;
    text-align: left;
    line-height: 1.5;
    color: ${H.cloud.getShade(6)};
    padding: 8px 24px 8px 24px;
  `,ListItem:P.li`
    width: 100%;
    text-align: left;
    line-height: 1.5;
    cursor: pointer;
    border: 1px solid transparent;
    border-left: 2px solid transparent;
    outline: none;
    padding: 8px 24px 8px ${({padLeft:e})=>e?`22px`:0};
    ${({selected:e,padLeft:t})=>!e&&F`
        :hover {
          border-left: 2px solid ${L(6)};
          padding-left: ${t?`22px`:`0`};
          background-color: ${L(1)};
        }
      `};
    display: flex;
    flex-direction: row;
    ${({selected:e,padLeft:t})=>e&&F`
        border-left: 2px solid ${L(6)};
        padding-left: ${t?`22px`:`0`};
        background-color: ${L(2)};
      `};
  `,IconHolder:P.div`
    min-width: 46px;
    align-self: baseline;
    text-align: center;
    svg {
      margin-top: 5px;
    }
  `,PageNumber:P.div`
    color: ${H.cloud.getShade(6)};
    font-size: 1.4rem;
  `,HiddenDiv:P.div`
    ${Ie}
  `},bu=({item:e,selected:t,onClick:n,index:r})=>{let i=()=>{switch(e.type){case wu.Prop:return e.text;case wu.Recent:return(0,K.jsx)(`div`,{children:e.query});case wu.Current:return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(yu.IconHolder,{children:[(0,K.jsx)(G.Search,{}),(0,K.jsxs)(yu.HiddenDiv,{children:[(0,K.jsx)(w,{id:`search.autocomplete.searchContent`}),`\xA0`]})]}),(0,K.jsx)(`div`,{children:e.input})]});case wu.Toc:return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(yu.IconHolder,{children:[(0,K.jsx)(G.NavContents,{}),(0,K.jsxs)(yu.HiddenDiv,{children:[(0,K.jsx)(w,{id:`search.autocomplete.tocItem`}),`\xA0`]})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`div`,{children:(0,K.jsx)(Zr,{children:e.text})}),(0,K.jsxs)(yu.PageNumber,{children:[(0,K.jsx)(w,{id:`base.page`}),` `,e.data.page]})]})]})}};return e.type===wu.Prop?(0,K.jsx)(yu.PropItem,{children:i()}):(0,K.jsx)(yu.ListItem,{role:`option`,id:Fl(r),tabIndex:-1,onMouseDown:e=>e.preventDefault(),padLeft:e.type===wu.Recent,selected:t??!1,onClick:()=>{n?.()},children:i()})};function xu(e,t,n){return!t||!t.length?-1:n===`ArrowDown`?Math.min(e+1,t.length-1):n===`ArrowUp`?Math.max(e-1,0):n===`PageDown`?Math.min(e+Math.min(Math.floor(t.length/10),5),t.length-1):n===`PageUp`?Math.max(e-Math.max(Math.floor(t.length/10),5),0):n===`Home`?0:n===`End`?t.length-1:e}function Su(e){return[`ArrowDown`,`ArrowUp`,`PageDown`,`PageUp`,`Home`,`End`].indexOf(e)!==-1}N();var Cu={Container:P.div`
    position: absolute;
    right: 24px;
    left: 24px;
    bottom: 8px;
    top: 112px;
    z-index: 10;
  `,Panel:P.div`
    background-color: white;
    z-index: 5;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    max-height: 100%;
    overflow: auto;
  `},wu=function(e){return e.Recent=`Recent`,e.Toc=`Toc`,e.Prop=`Prop`,e.Current=`Current`,e}({}),Tu=({id:e,searchTerm:t,onSelectSearchRecent:n,onSelectSearchCurrent:r,onSelectTocItem:i,className:a,inputRef:o,searchFocused:s,isVisible:c=!0,itemIndex:l,setItemIndex:u})=>{let d=I(),{recent:f}=_u(),{tocFlatData:p}=Jr(),m=ri(),h=(0,W.useRef)(null),g=(0,W.useMemo)(()=>{let e=[];return!t&&!f.length?null:(!t&&f.length?e=f.map(e=>({type:`Recent`,key:e,query:e})):(e=[{type:`Current`,key:`currentItem`,input:t}],t.length>=3&&(e=e.concat(p.filter(e=>e.title.toLowerCase().indexOf(t.toLowerCase())!==-1).map(e=>({type:`Toc`,key:e.uuid,data:e,text:Eu(e.title,t)}))))),e)},[f,t,p]),[_,v]=(0,W.useState)(0),[y,b]=(0,W.useState)(!1),x=t.length>0,S=g?.length??0,C=x?S-1:S;(0,W.useEffect)(()=>{v(C)},[C]),(0,W.useEffect)(()=>{b(s)},[s]),(0,W.useLayoutEffect)(()=>u(-1),[g,u]);let w=(0,W.useCallback)(()=>{x&&C>0?m(d.formatMessage({id:`search.autocomplete.tocHits`},{itemHitCount:C})):f.length&&!x&&m(d.formatMessage({id:`search.autocomplete.recentHits`},{itemHitCount:C}))},[d,m,C,x,f.length]);if((0,W.useEffect)(()=>{s&&!y&&C&&w()},[y,w,C,s]),(0,W.useEffect)(()=>{C!==_&&w()},[w,C,_]),(0,W.useEffect)(()=>{let e=e=>{let t,r=!1;if(g){if(Su(e.key))t=xu(l,g,e.key);else if(e.key===`Enter`&&l!==-1){let t=g[l];t.type===`Toc`?(e.stopImmediatePropagation(),e.preventDefault(),r=!0,i(t.data)):t.type===`Recent`&&n(t.query)}t!==void 0&&t!==-1&&t!==l&&(e.preventDefault(),u(t),r=!0),r&&h.current&&h.current.children[t??l].scrollIntoView({block:`nearest`})}},t=o.current;return t?.addEventListener(`keydown`,e),()=>{t?.removeEventListener(`keydown`,e)}},[g,l,o,i,n,m,f.length,u]),!g||!c)return null;let T=!t&&f.length?{type:`Prop`,key:`recentSearches`,text:d.formatMessage({id:`search.recentSearches`})}:null;return(0,K.jsx)(Cu.Container,{id:e,className:a,role:`listbox`,children:(0,K.jsx)(Cu.Panel,{children:(0,K.jsxs)(`ul`,{ref:h,children:[T&&(0,K.jsx)(bu,{item:T,index:0},T.type+`:`+T.key),g.map((e,t)=>(0,K.jsx)(bu,{item:e,selected:l===t,index:t,onClick:()=>{u(t),e.type===`Recent`?n(e.query):e.type===`Current`?r(e.input):e.type===`Toc`&&i(e.data)}},e.type+`:`+e.key))]})})})},Eu=(e,t)=>{let n=new RegExp(E(t.trim()),`gi`);return e.replace(n,e=>`<strong>`+e+`</strong>`)};N();var Du=`dropDownList`,Ou={SearchForm:P(U.SearchForm)`
    width: 100%;
  `},ku=({searchTerm:e,onChange:t,onSearch:n})=>{let r=I(),{goToTocEntry:i}=Jr(),o=(0,W.useRef)(null),[s,c]=(0,W.useState)(!1),[l,u]=(0,W.useState)(!1),d=(0,W.useRef)(null),f=(0,W.useRef)(le()),{recent:p}=_u(),[m,h]=(0,W.useState)(-1),g=(0,W.useRef)(0);(0,W.useLayoutEffect)(()=>{g.current=performance.now()},[]);let _=(0,W.useCallback)(e=>!d.current?.contains(e.target),[]),v=(0,W.useCallback)(e=>{e.timeStamp<g.current||(Gn(e)||_(e))&&(c(!1),u(!1))},[_]),y=(0,W.useCallback)(e=>{e.key===`Escape`&&(c(!1),u(!1))},[]);return(0,W.useEffect)(()=>(window.addEventListener(`keyup`,y),()=>{window.removeEventListener(`keyup`,y)}),[y]),Nn(Et.CLICK,v),(0,K.jsxs)(`div`,{ref:d,children:[(0,K.jsx)(Ou.SearchForm,{autoComplete:`off`,role:`combobox`,"aria-autocomplete":`list`,"aria-controls":f.current,"aria-expanded":s&&(!!p.length||!!e),"aria-activedescendant":l&&m>=0?Fl(m):void 0,value:e,pill:!0,fullWidth:!0,size:`small`,placeholder:r.formatMessage({id:`search.searchAcrossBook`}),nativeFormControlRef:e=>{o.current=e},formProps:{onSubmit:t=>{u(!1),t.preventDefault(),n(e)}},onChange:e=>{l||u(!0),t(e.target.value)},onFocus:()=>{u(!0),c(!0)},onBlur:e=>{c(!1)}}),(0,K.jsx)(Tu,{id:f.current,inputRef:o,searchFocused:s,className:Du,searchTerm:e,isVisible:l,itemIndex:m,setItemIndex:h,onSelectSearchRecent:e=>{u(!1),n(e),a(`search_scope_book_recent_search`)},onSelectSearchCurrent:e=>{u(!1),n(e)},onSelectTocItem:e=>{u(!1),i(e),a(`search_scope_book_TOC`)}})]})};function Au(){let e=z(),[t,n]=(0,W.useState)({status:p.WAITING,result:null}),{makeProductUrl:r,isVstStore:i}=Cc(),{bookInfo:a}=ht(),o=(0,W.useCallback)(t=>{a.isbn===t||a.intendedUses.indexOf(ct.VST_STORE)===-1||!i?n({status:p.OK,result:null}):(n({status:p.FETCHING,result:null}),e(ft(t)).then(e=>{n({status:e.ok?p.OK:p.ERROR,result:e})}))},[a,e,i]),s=(0,W.useMemo)(()=>{if(t.result?.ok&&t.result.data){let e=r(t.result.data.isbn,{utm_medium:`bookshelf-search-hit`,utm_campaign:t.result.data.isbn});if(e)return{storeURL:e,bookInfo:t.result.data,isOwned:!!t.result.data.expiresAt}}return null},[t,r]);return(0,W.useMemo)(()=>({searchForIsbn:o,isbnSearchStatus:t.status,isbnSearchResult:s}),[o,t,s])}function ju(){let{isLibraryEnabled:e,isLibraryExternal:t}=Mr(),n=e&&!t;function r(e){return`${pe()}/search?q=${encodeURIComponent(e)}`}return{isLibrarySearchSupported:n,getLibrarySearchURL:r}}var Mu=`/reader/assets/cart-graphic-C1_-mfEd.png`,Nu=`/reader/assets/photo-graphic-C3liwV-E.png`,Pu=`/reader/assets/computer-graphic-02h8oFnr.png`;N();var Fu={Container:P.div`
    border: 1px solid ${H.frost.getShade(3)};
    border-radius: 4px;
    margin: 0 auto 29px;
    width: 372px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-self: flex-end;
    cursor: pointer;
  `,Head:P.div`
    color: ${L(6)};
    font-weight: 700;
    margin-bottom: 6px;
  `,Body:P.div`
    margin-bottom: 12px;
  `,ImageContainer:P.div`
    flex-shrink: 0;
    width: 120px;
    height: 105px;
    display: flex;
    align-items: center;
    justify-content: center;
  `},Iu=[{header:`Still Can’t Find What You Are Looking For?`,body:`Visit our store.`,button:`Search our Store`,image:Mu,imageAlt:`Shopping Cart`,variant:`shopping_cart`,utmMedium:`bookshelf-search-no-hit-v1`},{header:`Visit Vitalsource.com`,body:`Browse thousands of titles on our Store`,button:`Browse Titles`,image:Nu,imageAlt:`Two women looking at a laptop computer with a cup of coffee`,variant:`real_people`,utmMedium:`bookshelf-search-no-hit-v2`},{header:`Try Searching on our Store`,body:`Search by ISBN, Title, & Author.`,button:`Visit Vitalsource.com`,image:Pu,imageAlt:`Illustration of a laptop computer with idea bubbles around it`,variant:`computer`,utmMedium:`bookshelf-search-no-hit-v3`}];function Lu({query:e}){let{makeSearchUrl:t,vstStoreRegion:n}=Cc(),{locale:r}=I(),{bookInfo:i}=ht(),o=Iu[(0,W.useRef)(We(0,Iu.length)).current],s=(r===`en-US`||r===`en-GB`)&&n===Sc.US&&i.intendedUses.includes(ct.VST_STORE),c=(0,W.useCallback)(t=>{a(t,{variant:o.variant,search_term:e})},[e,o]);(0,W.useEffect)(()=>{s&&c(`search_results_empty_store_shown`)},[s,c]);function l(){let n=t(e,{utm_medium:o.utmMedium,utm_campaign:e});if(n)return ya({redirectTo:n})}function u(e){c(`search_results_empty_store_clicked`),e.target.closest(`a`)||window.open(l(),`_blank`)}return s?(0,K.jsxs)(Fu.Container,{onClick:u,children:[(0,K.jsx)(Fu.ImageContainer,{children:(0,K.jsx)(`img`,{src:o.image,alt:o.imageAlt})}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Fu.Head,{children:o.header}),(0,K.jsx)(Fu.Body,{children:o.body}),(0,K.jsx)(U.Button,{pill:!0,size:`small`,href:l(),target:`_blank`,children:o.button})]})]}):null}N();var Ru={Container:P.div`
    padding: 44px 40px;
    height: 100%;
    overflow-y: auto;
  `,Header:P.h2`
    font-size: 2.8rem;
  `,NoMatch:P.h3`
    font-size: 2.4rem;
  `,MidText:P.p`
    font-weight: bold;
    margin-top: 35px;
  `,ListItemContainer:P.li`
    display: flex;
    padding: 25px 0 0;
  `,Icon:P.div`
    margin: 0 25px 0 0;
    width: 5px;
    align-items: center;
  `,Text:P.div`
    display: flex;
    flex-direction: column;
  `,Link:P.div`
    width: max-content;
  `};function zu({theme:e,searchTerm:t}){let n={primary:e.vstui.color.primary.getShade(6),base:e.color.base.getShade(9)},r=I(),{isLibrarySearchSupported:i,getLibrarySearchURL:a}=ju(),o=[`checkSpelling`,`checkTerm`,`copyPaste`],s=[(0,K.jsx)(el,{colors:n}),(0,K.jsx)(tl,{colors:n}),(0,K.jsx)(nl,{colors:n})];i&&(o.push(`searchLibrary`),s.push((0,K.jsx)(rl,{colors:n})));function c(){return o.map(e=>(0,K.jsxs)(Ru.ListItemContainer,{children:[(0,K.jsx)(Ru.Icon,{children:s[o.indexOf(e)]}),(0,K.jsxs)(Ru.Text,{children:[r.formatMessage({id:`search.noResults.${e}`}),e===`searchLibrary`&&(0,K.jsx)(Ru.Link,{children:(0,K.jsx)(U.Button,{inline:!0,href:a(t),children:(0,K.jsx)(w,{id:`search.noResults.goToLibrary`})})})]})]},e))}return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Ru.Container,{children:[(0,K.jsx)(Ru.NoMatch,{children:(0,K.jsx)(w,{id:`search.noResults.noMatch`,values:{term:t}})}),(0,K.jsx)(Ru.MidText,{children:r.formatMessage({id:`search.noResults.searchTips`})}),(0,K.jsx)(`ul`,{children:c()})]}),(0,K.jsx)(Lu,{query:t})]})}var Bu=ue(zu);N();var Vu={Container:P.div`
    margin: 44px 30px;
  `,Title:P.h3`
    font-size: 2.4rem;
    line-height: 2.9rem;
    margin-bottom: 16px;
  `,Box:P.div`
    border-radius: 4px;
    border: 1px solid ${H.cloud.getShade(3)};
    padding: 16px;
    position: relative;
  `,TopArea:P.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 16px;
  `,ButtonContainer:P.div`
    margin: 8px;
  `,Button:P(U.Button).attrs({pill:!0,fullWidth:!0,target:`_blank`})``,Image:P.img`
    width: 125px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    flex-grow: 0;
    flex-shrink: 0;
    align-self: flex-start;
  `,BookTitle:P.div`
    font-weight: 500;
    margin-bottom: 16px;
  `,Isbn:P.div`
    font-size: 1.2rem;
    line-height: 1.4rem;
  `,Badge:P.div`
    float: right;
    margin-left: 16px;
    margin-bottom: 16px;
    width: 36px;
    height: 36px;
    border-radius: 17px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
  `,RightContent:P.div`
    flex-grow: 1;
  `};function Hu({result:e}){let t=(0,W.useCallback)(t=>{a(t,{search_term:e.bookInfo.isbn,variant:e.isOwned?`open_book`:`store`})},[e]);(0,W.useEffect)(()=>{t(`search_isbn_result_shown`)},[t]);function n(){t(`search_isbn_result_clicked`)}return(0,K.jsxs)(Vu.Container,{children:[(0,K.jsx)(Vu.Title,{children:(0,K.jsx)(w,{id:`search.store.title`})}),(0,K.jsxs)(Vu.Box,{children:[(0,K.jsxs)(Vu.TopArea,{children:[(0,K.jsx)(Vu.Image,{src:e.bookInfo.coverURL.replace(`:width`,`150`),srcSet:`${e.bookInfo.coverURL.replace(`:width`,`320`)} 2x`,alt:``}),(0,K.jsxs)(Vu.RightContent,{children:[!e.isOwned&&(0,K.jsx)(Vu.Badge,{children:(0,K.jsx)(G.Tag,{})}),(0,K.jsx)(Vu.BookTitle,{children:e.bookInfo.title}),(0,K.jsx)(Vu.Isbn,{children:(0,K.jsx)(w,{id:`search.store.isbn`,values:{isbn:e.bookInfo.isbn}})})]})]}),(0,K.jsx)(Vu.ButtonContainer,{children:e.isOwned?(0,K.jsx)(Vu.Button,{href:`${v()}/books/${e.bookInfo.isbn}`,onClick:n,children:(0,K.jsx)(w,{id:`search.store.openBook`})}):(0,K.jsx)(Vu.Button,{href:ya({redirectTo:e.storeURL}),onClick:n,children:(0,K.jsx)(w,{id:`search.store.seePurchaseOptions`})})})]})]})}N();var Uu={SearchContainer:P.div`
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
  `,SearchTitle:P.h2`
    font-size: 2.8rem;
    margin-bottom: 16px;
  `,HeadingContainer:P.div`
    padding: 24px 24px 0;
  `,Loader:P(ni)`
    margin-top: 18px;
  `};function Wu({data:e}){let t=I(),{search:n,results:r,numResults:i,loadStatus:o,unhighlightSearchResults:s,goToSearchResult:c,reset:l}=_u(),{searchForIsbn:u,isbnSearchStatus:d,isbnSearchResult:f}=Au(),[m,h]=(0,W.useState)(``),{clearMetadata:g}=Sa();Ue(s);let _=(0,W.useCallback)(e=>{e&&(h(e),n(e),u(e),a(`search_perform`,{search_term:e}),a(`search_scope_book`))},[n,u]);(0,W.useEffect)(()=>{e&&(_(e),g())},[e,_,g]);let v=(0,W.useMemo)(()=>d===p.FETCHING||o===p.FETCHING?`loading`:d===p.OK&&f?`isbn-result`:o===p.ERROR?`error`:o===p.OK?Object.values(r).some(e=>Object.keys(e).length>0)?`book-results`:`no-results`:`instructions`,[d,o,r,f]);return(0,K.jsxs)(Uu.SearchContainer,{children:[(0,K.jsxs)(Uu.HeadingContainer,{children:[(0,K.jsx)(Uu.SearchTitle,{"aria-label":t.formatMessage({id:`search.search`}),children:t.formatMessage({id:`search.search`})}),(0,K.jsx)(ku,{searchTerm:m,onChange:e=>{h(e),l()},onSearch:_})]}),v===`instructions`?(0,K.jsx)(ol,{}):v===`loading`?(0,K.jsx)(Uu.Loader,{takeFocus:!0}):v===`no-results`?(0,K.jsx)(Bu,{searchTerm:m}):v===`book-results`?(0,K.jsx)(mu,{results:r,numResults:i,goToSearchResult:c}):v===`isbn-result`?(0,K.jsx)(Hu,{result:f}):v===`error`?(0,K.jsx)(De,{}):null]})}N();var Gu={TabHeading:P.h3`
    font-size: 2rem;
    font-weight: 500;
    flex-grow: 1;
    min-width: 0;
  `,TabHeadingContainer:P.div`
    padding-inline: 24px 16px;
    padding-block: 12px;
    background-color: ${H.cloud.getShade(2)};
    display: flex;
    align-items: center;
    min-height: 56px;
  `,Controls:P.div`
    display: flex;
    flex-shrink: 0;
    align-self: flex-start;
  `},Ku=({title:e,controls:t,leftControls:n})=>(0,K.jsxs)(Gu.TabHeadingContainer,{children:[n,(0,K.jsx)(Gu.TabHeading,{children:e}),t?(0,K.jsx)(Gu.Controls,{children:t}):null]});N();var qu={Frame:P.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: -24px;
    margin-right: -24px;
  `,Content:P.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `},Ju=({headerProps:e,children:t,isLoading:n,error:r})=>{let[i,a]=(0,W.useState)(!1),o=I();(0,W.useEffect)(()=>{a(!!r)},[r]);let s=n?{...e,controls:void 0,leftControls:void 0}:e;return(0,K.jsxs)(qu.Frame,{children:[(0,K.jsx)(Ku,{...s}),(0,K.jsx)(qu.Content,{children:n?(0,K.jsx)(ni,{}):t}),(0,K.jsx)(U.Toast,{open:i,toastClose:()=>a(!1),toastTitleText:o.formatMessage({id:`base.featureError.title`}),toastDescriptionText:o.formatMessage({id:`base.featureError.message`}),toastType:`error`})]})};function Yu(){let e=R(vr),t=R(Mn),n=R(gn),r=z();return{highlightsFilter:e,setHighlightsFilter:e=>r(An(e)),filteredHighlights:t,filteredHighlightsByChapter:n,numFilteredHighlights:t?.length??0}}N();var Xu=4,Zu=4,Qu=`overflow`,$u={Toolbar:P.div`
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 13px;
    row-gap: 6px;
  `,ToolBtn:P.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    ${({highlightFilter:e,selected:t,theme:n})=>{let r,i;e.type===B.Marker?(r=e.data.vstColor,i=e.data.vstColorDark):e.type===B.OnlyNotes?(r=`white`,i=H.cloud.getShade(5)):r=i=H.cloud.getShade(3);let a=n.vstui.color.primary.getShade(7),o=F`
        background-color: ${r};
        border: 1px solid ${i};
      `;return t?F`
          ${o};
          box-shadow: 0 0 0 3px ${i};
          &:focus,
          :hover {
            box-shadow: 0 0 0 3px ${i}, 0 0 0 5px white,
              0 0 0 7px ${a};
          }
        `:F`
          ${o};
          &:focus,
          :hover {
            box-shadow: 0 0 0 2px white, 0 0 0 4px ${a};
          }
        `}}
  `,OverflowPanel:P.div`
    background-color: white;
    display: inline-grid;
    grid-template-columns: repeat(
      ${({count:e})=>Math.min(e,Zu)},
      1fr
    );
    grid-column-gap: 25px;
    column-gap: 12px;
    grid-row-gap: 25px;
    row-gap: 12px;
    padding: 30px 16px 20px 16px;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    button {
      vertical-align: bottom;
    }
  `},ed=({userMarkers:e,subscribedMarkers:t,curFilter:n,onFilterMouseOver:r,onFilterMouseOut:i,onFilterFocus:a,onFilterBlur:o,onFilterSelect:s})=>{let c=I(),l=(0,W.useRef)(null),{allMarkers:u}=jr();if(!e||!e.length)return null;let d=u.map(e=>({type:B.Marker,data:e})),f={type:B.OnlyNotes};if(u.length>Xu){let e=d.splice(Xu);d.push(f),d.push({type:Qu,data:e})}else d.push(f);let p=e=>{let u=!!n&&(n.type===B.OnlyNotes&&e.type===B.OnlyNotes||n.type===B.Marker&&e.type===B.Marker&&n.globalId===e.data?.globalId),d=e.type===`overflow`?e.data:null,f=e.type===B.OnlyNotes?c.formatMessage({id:`workbook.highlights.filters.filterByNotes`}):e.type===B.Marker?c.formatMessage({id:`workbook.highlights.filters.filterByMarker`},{markerName:e.data.label}):c.formatMessage({id:`workbook.highlights.filters.moreColors`}),m=(0,K.jsx)($u.ToolBtn,{ref:e=>!l?.current&&(l.current=e),highlightFilter:e,selected:u,"aria-label":f,"aria-pressed":u||void 0,onMouseOver:()=>{r(e)},onMouseOut:()=>{i()},onFocus:()=>{a(e)},onBlur:()=>{o()},onClick:()=>{e.type!==`overflow`&&s(e)},"data-interaction-id":`workbook_annotations_filter`,children:e.type===B.OnlyNotes?(0,K.jsx)(G.ChatLines,{style:{transform:`scale(-1,1)`}}):e.type===`overflow`?(0,K.jsx)(G.Ellipsis,{}):t.find(t=>t.globalId===e.data.globalId)?(0,K.jsx)(G.Group,{style:{width:18},color:`rgba(28, 28, 28, 0.5)`}):null},e.type===B.Marker?e.data.globalId:e.type);return d?(0,K.jsx)(ii.Popover,{placement:`bottom`,dynamicAnchor:!0,modifiers:{offset:{offset:`32px, 16px`}},content:(0,K.jsx)($u.OverflowPanel,{count:d.length,children:d.map(e=>p(e))}),children:m},`highlight-overflow-menu`):m};return(0,K.jsxs)($u.Toolbar,{children:[d.map(e=>p(e)),n.type!==B.None&&(0,K.jsx)(U.Button,{"aria-label":c.formatMessage({id:`workbook.highlights.filters.clearLabel`}),inline:!0,onClick:()=>{s(null),l?.current?.focus()},children:c.formatMessage({id:`base.clear`})})]})};N();var td={Container:P.div`
    padding: 6px 24px;
    position: relative;
    z-index: 1;
  `,Toolbar:P.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
  `,InlineTooltip:P.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${H.cloud.getShade(7)};
    margin-bottom: 12px;
    height: 1.2rem;
  `},nd=({userMarkers:e,subscribedMarkers:t,curFilter:n,onFilter:r,onOpenMarkerPrefs:i})=>{let a=I(),{isRtl:o}=Pr(),[s,c]=(0,W.useState)(``),l=e=>e?e.type===B.OnlyNotes?a.formatMessage({id:`workbook.highlights.filters.withNotes`}):e.type===`overflow`?a.formatMessage({id:`workbook.highlights.filters.moreColors`}):e.type===B.Marker?e.data.label:null:null,u=l((r=>{if(n.type===B.OnlyNotes)return{type:B.OnlyNotes};if(n.type===B.Marker){let r=e.concat(t).find(e=>e.globalId===n.globalId);return r?{type:B.Marker,data:r}:null}return null})(n));return(0,K.jsxs)(td.Container,{children:[(0,K.jsx)(td.InlineTooltip,{children:s||u||``}),(0,K.jsxs)(td.Toolbar,{children:[(0,K.jsx)(ed,{userMarkers:e,subscribedMarkers:t,curFilter:n,onFilterMouseOver:e=>{c(l(e))},onFilterMouseOut:()=>{c(``)},onFilterFocus:e=>{c(l(e))},onFilterBlur:()=>{c(``)},onFilterSelect:e=>{e?e.type===B.OnlyNotes?r({type:B.OnlyNotes}):e.type===B.Marker&&r({type:B.Marker,globalId:e.data.globalId}):r({type:B.None})}}),(0,K.jsx)(U.IconButton,{buttonType:`enclosed`,rounded:!0,solid:!0,label:a.formatMessage({id:`workbook.highlights.addEditHighlighters`}),size:`small`,icon:(0,K.jsx)(G.Plus,{}),tooltipPlacement:o?`top-start`:`top-end`,onClick:()=>i(),"data-interaction-id":`workbook_add_highlighter_menu`})]})]})};N();var rd={Container:P.div`
    margin-top: 40px;
    max-width: 310px;
  `,Message:P.div`
    line-height: 1.9rem;
    font-weight: 500;
    margin-bottom: 24px;
    display: inline-block;
  `,List:P.ul``,Step:P.li`
    width: 100%;
    display: inline-flex;
    line-height: 1.9rem;
    margin-bottom: 24px;
    svg {
      margin-inline-end: 14px;
      overflow: visible;
      margin-top: 1px;
    }
  `},id=({messageId:e,steps:t})=>{let n=I();return(0,K.jsxs)(rd.Container,{children:[(0,K.jsx)(rd.Message,{children:n.formatMessage({id:e})}),(0,K.jsx)(rd.List,{children:t.map(e=>(0,K.jsxs)(rd.Step,{children:[e.icon,n.formatMessage({id:e.textId})]},e.textId))})]})};N();var ad={Container:P.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,Content:P.div`
    flex: 1 0 auto;
    padding: 40px 16px 16px 16px;
  `,Tagline:P.div`
    font-size: 2.4rem;
  `,Centered:P.div`
    text-align: center;
  `,Message:P.div`
    line-height: 1.9rem;
    font-weight: 500;
    margin-bottom: 16px;
    white-space: pre-line;
  `},od=({taglineId:e,messageId:t,controls:n,stepsProps:r,studyTipProps:i,className:a})=>{let o=I();return(0,K.jsxs)(ad.Container,{className:a,children:[(0,K.jsxs)(ad.Content,{children:[e&&(0,K.jsx)(ad.Tagline,{children:o.formatMessage({id:e})}),(0,K.jsxs)(ad.Centered,{children:[t&&(0,K.jsx)(ad.Message,{children:o.formatMessage({id:t})}),n&&(0,K.jsx)(`div`,{children:n})]}),r&&(0,K.jsx)(id,{...r})]}),i&&(0,K.jsx)(vl,{...i})]})};N();var sd=function(e){return e[e.NoHighlights=0]=`NoHighlights`,e[e.ColorFilterEmpty=1]=`ColorFilterEmpty`,e[e.NotesFilterEmpty=2]=`NotesFilterEmpty`,e}({}),cd=ue(({type:e,onClearFilter:t,onOpenMarkerPrefs:n,theme:r})=>{let i=I(),a={a:e=>(0,K.jsx)(U.Button,{inline:!0,onClick:()=>{n()},children:e})},o={primary:r.vstui.color.primary.getShade(6),base:r.color.base.getShade(9)};switch(e){case 0:return(0,K.jsx)(od,{taglineId:`workbook.highlights.null.highlights.tagline`,stepsProps:{messageId:`workbook.highlights.null.highlights.help`,steps:[{icon:(0,K.jsx)(uc,{colors:o}),textId:`workbook.highlights.null.highlights.help.step1`},{icon:(0,K.jsx)(pc,{colors:o}),textId:`workbook.highlights.null.highlights.help.step2`}]},studyTipProps:{titleId:`base.studyTip`,tipId:`workbook.highlights.null.highlights.studyTip`,tipValues:a,iconColors:o}});case 1:case 2:{let n=e===2;return(0,K.jsx)(od,{messageId:`workbook.highlights.null.${n?`notes`:`markers`}.prompt`,controls:(0,K.jsx)(U.Button,{"aria-label":i.formatMessage({id:`workbook.highlights.filters.clearLabel`}),inline:!0,onClick:()=>{t()},children:i.formatMessage({id:`base.clearFilter`})}),stepsProps:n?{messageId:`workbook.highlights.null.notes.help`,steps:[{icon:(0,K.jsx)(uc,{colors:o}),textId:`workbook.highlights.null.notes.help.step1`},{icon:(0,K.jsx)(dc,{colors:o}),textId:`workbook.highlights.null.notes.help.step2`},{icon:(0,K.jsx)(fc,{colors:o}),textId:`workbook.highlights.null.notes.help.step3`}]}:void 0,studyTipProps:n?void 0:{titleId:`base.studyTip`,tipId:`workbook.highlights.null.markers.studyTip`,tipValues:{...a,plusIcon:(0,K.jsx)(G.PlusCircleFill,{color:r.vstui.color.primary.getShade(6)})},iconColors:o}})}default:Nt(e)}});N();var ld={Container:P.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 8px;
  `,TextFieldLabel:P.label`
    margin-bottom: 7px;
    font-size: 1.5rem;
    font-weight: 500;
  `,TextFieldLine:P.div`
    display: flex;
    button {
      margin-inline-start: 8px;
      min-width: 32px;
      height: 32px;
      padding: 0;
    }
  `,TextField:P(U.TextField)`
    flex-grow: 1;
    min-width: 0;
    margin: 0;
    textarea {
      font-size: 1.4rem;
    }
  `},ud=({note:e,onNoteEdited:t,onRequestClose:n})=>{let r=I(),i=(0,W.useRef)(null),[a,o]=(0,W.useState)(``),[s,c]=(0,W.useState)(!1),l=(0,W.useRef)(a),u=(0,W.useRef)(!1),d=(0,W.useRef)(null),[f,p]=(0,W.useState)(!1),m=(0,W.useRef)(le());(0,W.useEffect)(()=>{h(e||``)},[e]),(0,W.useEffect)(()=>{d.current?.focus()},[d]);let h=e=>{o(e),l.current=e},g=()=>{f?p(!1):t(l.current,u.current)};return(0,K.jsxs)(ld.Container,{ref:i,onFocus:()=>{c(!0)},onClick:e=>{e.stopPropagation()},onBlur:e=>{(!e.relatedTarget||!i.current?.contains(e.relatedTarget))&&(c(!1),g())},children:[(0,K.jsx)(ld.TextFieldLabel,{htmlFor:m.current,children:(0,K.jsx)(w,{id:`gutter.noteTextLabel`})}),(0,K.jsxs)(ld.TextFieldLine,{children:[(0,K.jsx)(ld.TextField,{nativeFormControlRef:e=>d.current=e,placeholder:r.formatMessage({id:`workbook.highlights.addNote`}),multiline:!0,fullWidth:!0,rows:3,value:a,onChange:e=>{h(e.currentTarget.value)},onKeyDown:e=>{(e.key===`Enter`&&!e.shiftKey||e.key===`Escape`)&&(u.current=!0,g(),e.preventDefault())},id:m.current}),s&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(U.Button,{size:`small`,iconStart:(0,K.jsx)(G.Checkmark,{}),label:r.formatMessage({id:`base.save`}),onClick:()=>{u.current=!0,g()}}),(0,K.jsx)(U.Button,{size:`small`,iconStart:(0,K.jsx)(G.XSmall,{}),label:r.formatMessage({id:`base.cancel`}),onClick:()=>{u.current=!0,n?.(u.current)},onMouseDown:()=>p(!0)})]})]})]})},dd={position:`fixed`,left:0,top:-99999,visibility:`hidden`,pointerEvents:`none`,whiteSpace:`normal`,wordWrap:`break-word`,overflowWrap:`break-word`,wordBreak:`break-word`},fd={display:`block`,overflow:`hidden`,wordWrap:`break-word`,overflowWrap:`break-word`,wordBreak:`break-word`};function pd(e){let t=window.getComputedStyle(e),n=parseFloat(t.lineHeight);if(!Number.isNaN(n))return n;let r=parseFloat(t.fontSize);return Number.isNaN(r)?19.2:r*1.2}function md(e,t){let n=window.getComputedStyle(e),r=t.style;r.font=n.font,r.fontFamily=n.fontFamily,r.fontFeatureSettings=n.fontFeatureSettings,r.fontKerning=n.fontKerning,r.fontSize=n.fontSize,r.fontStyle=n.fontStyle,r.fontStretch=n.fontStretch,r.fontVariant=n.fontVariant,r.fontWeight=n.fontWeight,r.letterSpacing=n.letterSpacing,r.lineHeight=n.lineHeight,r.textIndent=n.textIndent,r.textTransform=n.textTransform,r.whiteSpace=n.whiteSpace,r.wordBreak=n.wordBreak,r.wordSpacing=n.wordSpacing,r.overflowWrap=n.overflowWrap,r.hyphens=n.hyphens,r.tabSize=n.tabSize,r.padding=n.padding,r.border=n.border,r.boxSizing=n.boxSizing}function hd({children:e,lines:t,ellipsis:n=`...`,className:r,as:i=`div`,onTruncate:a,showFullText:o=!1}){let s=(0,W.useRef)(null),c=(0,W.useRef)(null),l=(0,W.useRef)(),u=(0,W.useRef)(0),d=(0,W.useRef)(a);d.current=a;let[f,p]=(0,W.useState)(null),m=(0,W.useMemo)(()=>e??``,[e]),h=(0,W.useMemo)(()=>o?fd:{...fd,maxHeight:`${t}lh`},[t,o]),g=(0,W.useCallback)(()=>{let e=s.current;return e?.parentElement??e},[]),_=(0,W.useCallback)(()=>{let e=s.current,r=c.current;if(!e||!r)return;let i=g(),a=i?.clientWidth??0,o=i?window.getComputedStyle(i):null,l=o?parseFloat(o.paddingLeft)+parseFloat(o.paddingRight):0,u=Math.floor(a-l);if(u<=0)return;md(e,r),r.style.width=`${u}px`;let d=pd(r)*t+.5,f=e=>(r.textContent=e,r.offsetHeight<=d);if(f(m)){p({visibleText:m,isTruncated:!1});return}let h=0,_=m.length,v=n;for(;h<=_;){let e=Math.floor((h+_)/2),t=`${m.slice(0,e).trimEnd()}${n}`;f(t)?(v=t,h=e+1):_=e-1}p({visibleText:v,isTruncated:!0})},[n,g,t,m]);return(0,W.useEffect)(()=>{f?.isTruncated!==void 0&&d.current?.(f.isTruncated)},[f?.isTruncated]),(0,W.useLayoutEffect)(()=>{let e=s.current;if(!e)return;let t=()=>{let e=Math.floor(g()?.getBoundingClientRect().width??0);e!==u.current&&(u.current=e,l.current&&cancelAnimationFrame(l.current),l.current=requestAnimationFrame(_))};u.current=Math.floor(g()?.getBoundingClientRect().width??0),_();let n=new ResizeObserver(t);return n.observe(e),()=>{n.disconnect(),l.current&&cancelAnimationFrame(l.current)}},[g,_]),(0,K.jsxs)(K.Fragment,{children:[W.createElement(i,{ref:s,className:r,style:h,children:o?m:f?.visibleText??``}),W.createElement(i,{ref:c,"aria-hidden":!0,style:dd})]})}N();var gd={OverflowPanel:P.div`
    background-color: white;
    z-index: 5;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    min-width: 200px;
  `,PopoverWrapper:P.div`
    display: inline-block;
    ${Ne}
  `},_d=null,vd=({overflowBtnCaptionId:e,className:t,items:n,onSelect:r,onOpen:i,onBtnHovered:a,focusBtn:o,describedByUuidRefs:s})=>{let c=I(),{isRtl:l}=Pr(),[u,d]=(0,W.useState)(!1),f=(0,W.useRef)(null),p=(0,W.useRef)(null),m=(0,W.useCallback)(()=>{d(!1),i?.(!1)},[i]);(0,W.useEffect)(()=>{o&&f.current?.focus()},[o]),(0,W.useEffect)(()=>{if(u)return _d=m,()=>{_d===m&&(_d=null)}},[u,m]);let h=(0,W.useCallback)(e=>!f.current?.contains(e.target)&&!p.current?.contains(e.target),[]),g=(0,W.useCallback)(e=>{u&&(Gn(e)||h(e))&&m()},[u,h,m]);return Nn(Et.CLICK,g),(0,K.jsx)(gd.PopoverWrapper,{className:t,children:(0,K.jsx)(ii.Popover,{open:u,placement:l?`bottom-start`:`bottom-end`,dynamicAnchor:!0,modifiers:{offset:{offset:`0px, 4px`}},content:(0,K.jsx)(gd.OverflowPanel,{ref:p,children:(0,K.jsx)(ii.List,{data:[{listItems:n.map(e=>({text:c.formatMessage({id:e.optionTextLabelId}),onClick:t=>{t.stopPropagation(),m(),r(e.id)}}))}]})}),children:(0,K.jsx)(U.IconButton,{tooltipPlacement:l?`top-start`:void 0,nativeButtonRef:e=>f.current=e,color:`custom`,customIconColor:H.cloud.getShade(10),label:c.formatMessage({id:e}),icon:(0,K.jsx)(G.Ellipsis,{}),rounded:!0,size:`small`,onClick:e=>{e.stopPropagation(),u?m():(_d?.(),d(!0),i?.(!0))},onMouseEnter:()=>a?.(!0),onMouseLeave:()=>a?.(!1),"aria-describedby":s})})})};N();var yd=F`
  content: "";
  display: inline-block;
  inset-inline-start: 0;
  width: 100%;
  border-bottom: 1px solid ${H.cloud.getShade(4)};
  position: absolute;
`,bd={ListItem:P.li`
    margin: 0 -24px;
    &:first-child {
      margin-top: 1px;
      :before {
        ${yd};
        margin-top: -1px;
      }
    }
    &:not(:last-child) {
      margin-bottom: 1px;
      :after {
        ${yd}
      }
    }
  `,Container:P.div`
    cursor: pointer;
    ${({popupOpen:e})=>e&&`z-index: 10`};
    position: relative;
    outline: none;
    ${({focused:e})=>e?F`
            border: 2px solid ${L(6)};
          `:F`
            padding: 2px;
          `};
    ${({selected:e})=>e?F`
            border-inline-end: 8px solid ${L(6)};
            padding-inline-end: 0;
          `:``};
    ${({hovered:e,overflowBtnHovered:t,popupOpen:n,editingNote:r})=>e&&!t&&!n&&!r&&F`
        background-color: ${L(1)};
      `};
  `,Indent:P.div`
    position: relative;
    /* the selected right color strip influences how much margin is needed
       to keep highlight layout static, NB offset by 2 to account for focus rect */
    margin-block: 0;
    margin-inline: ${({selected:e,innerLine:t})=>e?t?`26px 16px`:`22px 16px`:t?`26px 22px`:`22px`};
    padding: 16px 0;
  `,LineContainer:P.div`
    position: relative;
    ${({showLine:e})=>e&&F`
        padding-inline-start: 4px;
      `};
    ${({nested:e})=>e&&F`
        padding-inline-start: 20px;
        margin-inline-start: -20px;
      `};
  `,HighlightLine:P.div`
    position: absolute;
    top: 0;
    bottom: 0;
    inset-inline-start: 0;
    width: 20px;

    &:after {
      content: "";
      position: absolute;
      background-color: ${({bgColor:e})=>e||`transparent`};
      inset-inline-start: 8px;
      top: 0;
      bottom: 0;
      width: 4px;
      display: block;
    }
  `,Tooltip:P(ai.default)`
    position: absolute;
    top: 0;
    bottom: 0;
    inset-inline-start: -28px;
    ${({nested:e})=>e&&F`
        inset-inline-start: -8px;
      `};
    [role="tooltip"] {
      white-space: nowrap;
    }
    ${Ne}
  `,EmojiHolder:P.span`
    font-size: 2rem;
    position: absolute;
    margin-inline-start: -16px;
    transform: translate(-50%, 0);
    [dir="rtl"] & {
      transform: translate(50%, 0);
    }
    margin-top: -3px;
  `,Content:P.div`
    margin-inline-start: 16px;
    position: relative;
  `,Date:P.div`
    display: inline;
    font-size: 1.2rem;
    color: ${H.cloud.getShade(6)};
  `,Page:P.div`
    display: inline;
    font-size: 1.2rem;
    ${Re()}
    color: ${H.cloud.getShade(6)};
  `,OverFlowMenu:P(vd)`
    ${Re()}
    margin-inline-end: 2px;
    margin-top: -5px;
    ${({hidden:e})=>e&&Ie}
  `,Highlight:P.div`
    margin-top: 8px;
    margin-inline-end: 32px;
    line-height: 1.1875;
  `,Note:P.div`
    position: relative;
    color: ${H.cloud.getShade(6)};
    margin-top: 8px;
    margin-inline-start: ${({nested:e})=>e?`18px`:`20px`};
    margin-inline-end: 32px;
    cursor: ${({editable:e})=>e?`text`:`pointer`};
    white-space: pre-wrap;
  `,NoteIcon:P(G.ChatLines)`
    margin-inline-start: -18px;
    position: absolute;
    top: 2px;
    transform: translate(-50%, 0) scale(-1, 1);
    [dir="rtl"] & {
      transform: translate(50%, 0) scale(-1, 1);
    }
  `,ViewInBookA11y:P(_r)`
    top: -8px;
    inset-inline-start: 80px;
  `},xd=W.memo(({text:e})=>(0,K.jsx)(hd,{lines:6,children:e})),Sd=({selectedText:e,vstColor:t,lastModifiedAt:n,noteText:r,hasNote:i,startLabel:a,subscribed:o,authorName:s,authorInitials:c,markerColorName:l,syncId:u,selected:d,onGoToHighlight:f,onPopupOpen:p,onDeleteHighlight:m,onUpdateNote:h})=>{let g=I(),{isRtl:v}=Pr(),[y,b]=(0,W.useState)(!1),[x,S]=(0,W.useState)(!1),[C,T]=(0,W.useState)(!1),[E,D]=(0,W.useState)(!1),[O,ee]=(0,W.useState)(!1),[k,te]=(0,W.useState)(!1),[ne,A]=(0,W.useState)(!1),[re,ie]=(0,W.useState)(!1),ae=(0,W.useRef)(null),j=(0,W.useRef)({date:le(),hiddenPageDescription:le(),highlight:le(),note:le()}),oe=g.formatDate(new Date(n||0),{year:`numeric`,month:`numeric`,day:`numeric`}),M=!!o,se=i&&!!l,ce=i&&!l;return ne&&setTimeout(()=>A(!1),1),(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(bd.ListItem,{"aria-current":d,children:(0,K.jsx)(bd.Container,{ref:ae,tabIndex:-1,hovered:y,focused:C,selected:d,popupOpen:O,editingNote:k,overflowBtnHovered:E,onMouseDown:()=>{setTimeout(()=>ie(!0),1);let e=()=>{document.removeEventListener(`mouseup`,e)};document.addEventListener(`mouseup`,e)},onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),onClick:e=>{f(u,M)},onFocus:e=>{let t=e.relatedTarget;(t&&!re&&t.parentElement===ae.current?.parentElement?.nextElementSibling||!ae.current?.parentElement?.nextElementSibling&&t===ae.current?.parentElement?.parentElement?.parentElement?.nextElementSibling?.firstElementChild)&&A(!0),S(!0),T(document.activeElement===ae.current)},onBlur:e=>{ae.current?.contains(e.relatedTarget)||(S(!1),T(!1))},onKeyDown:e=>{e.currentTarget===e.target&&e.key===` `&&e.preventDefault()},onKeyUp:e=>{e.currentTarget===e.target&&e.key===` `&&f(u,M)},onKeyPress:e=>{e.currentTarget===e.target&&e.key===`Enter`&&f(u,M)},children:(0,K.jsxs)(bd.Indent,{selected:d,innerLine:M,children:[(0,K.jsx)(bd.LineContainer,{showLine:!M,children:(0,K.jsxs)(bd.Content,{children:[M&&(0,K.jsx)(iu,{name:s,initials:c,color:t,colorName:l,margin:`2px -18px`}),ce&&(0,K.jsx)(bd.EmojiHolder,{children:r}),n&&(0,K.jsx)(bd.Date,{id:j.current.date,children:oe}),a&&(0,K.jsxs)(bd.Page,{children:[a,(0,K.jsx)(`div`,{hidden:!0,id:j.current.hiddenPageDescription,children:g.formatMessage({id:`scrubber.pageNumberValue`},{pageNumber:a})})]}),(0,K.jsx)(bd.OverFlowMenu,{focusBtn:ne,hidden:!y&&!x&&!O&&!_(),overflowBtnCaptionId:`workbook.highlights.menuOptions`,items:Cd(M,se,ce),onBtnHovered:e=>D(e),onSelect:e=>{switch(e){case`View`:f(u,M);break;case`Delete`:m(u,se);break;case`AddNote`:case`EditNote`:te(!0)}ee(!1),S(!1)},onOpen:e=>{ee(e),p(e)},describedByUuidRefs:Object.values(j.current).join(` `)}),(0,K.jsxs)(bd.LineContainer,{showLine:M,nested:M,children:[(0,K.jsx)(bd.Highlight,{id:j.current.highlight,children:(0,K.jsx)(xd,{text:e})}),M&&!ce&&(0,K.jsx)(bd.Tooltip,{placement:v?`top-end`:`top-start`,title:l,nested:M,children:(0,K.jsx)(bd.HighlightLine,{bgColor:t})})]}),(0,K.jsx)(bd.ViewInBookA11y,{onClick:()=>f(u,M),children:(0,K.jsx)(w,{id:`workbook.highlights.options.viewInBook`})}),!M&&!ce&&(0,K.jsx)(bd.Tooltip,{placement:v?`top-end`:`top-start`,title:l,children:(0,K.jsx)(bd.HighlightLine,{bgColor:t})})]})}),k?(0,K.jsx)(ud,{note:r,onNoteEdited:(e,t)=>{te(!1),e!==r&&h(u,e),t&&A(!0)},onRequestClose:e=>{e&&A(!0),te(!1)}}):se&&(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(bd.Note,{id:j.current.note,nested:M,editable:!M,onClick:e=>{M||(te(!0),e.stopPropagation())},onMouseDown:e=>{e.preventDefault()},children:[(0,K.jsx)(bd.NoteIcon,{color:H.cloud.getShade(10)}),(0,K.jsxs)(He,{children:[g.formatMessage({id:`base.noteText`}),`:`]}),r]})})]})})})})},Cd=(e,t,n)=>{let r=[{optionTextLabelId:`workbook.highlights.options.viewInBook`,id:`View`}];return e||(r.push({optionTextLabelId:`workbook.highlights.options.deleteHighlight`,id:`Delete`}),n||r.push(t?{optionTextLabelId:`workbook.highlights.options.editNote`,id:`EditNote`}:{optionTextLabelId:`workbook.highlights.options.addNote`,id:`AddNote`})),r},wd=W.memo(Sd);N();var Td={ChapterName:P.div`
    font-weight: bold;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid ${H.cloud.getShade(4)};
    ${({needsBottomBar:e})=>e&&`border-bottom: 1px solid ${H.cloud.getShade(4)};`};
    padding: 12px 0;
  `,Caret:P(qr)`
    /* caret needs to be adjusted slightly */
    margin-inline-start: -8px;
    margin-inline-end: 3px;
    margin-top: -3px;
    flex-shrink: 0;
  `},Ed=P(Yr)`
  /* highlights have some negative margin icons so we need to make sure
     they are not clipped by the width of the slider animation */
  margin: 0 -24px;
  padding: 0 24px;
  /* react-slidedown sets overflow-y:hidden during animation which forces
     overflow-x to auto — clip it to prevent a horizontal scrollbar */
  &.transitioning,
  &.transition {
    overflow-x: hidden;
  }
  /* if inner content has something open like a popup then
     don't clip when the popup is active */
  ${({dontClip:e})=>e&&`overflow: visible`};
`,Dd=ue(({expanded:e,toggleExpansion:t,chapter:n,chapterId:r,highlights:i,selectedHighlightId:a,isLast:o,onGoToHighlight:s,onDeleteHighlight:c,onUpdateNote:l,theme:u})=>{let[d,f]=(0,W.useState)(!1);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Td.ChapterName,{needsBottomBar:o&&!e,children:[(0,K.jsx)(Td.Caret,{ariaLabel:n,onClick:()=>t(r),isExpanded:e,theme:u}),(0,K.jsx)(`div`,{children:n})]}),(0,K.jsx)(Ed,{keepChildrenMounted:!0,trigger:e,dontClip:d,children:(0,K.jsx)(`ul`,{children:i?.map((e,t)=>(0,K.jsx)(wd,{selected:a===e.syncId,onGoToHighlight:s,onPopupOpen:f,onDeleteHighlight:c,onUpdateNote:l,...e},e.syncId))})},r)]})});N();var Od={PrintPage:P.div`
    display: block;
    overflow: auto;
    top: 0;
    left: 0;
    z-index: 99999;
    padding: 20px;
    width: 100%;
    height: auto;
    background-color: white;
    box-sizing: border-box;
  `,HighlightContainer:P.li`
    margin-bottom: 30px;
    break-inside: avoid;
    display: block;
  `,TopLine:P.div`
    display: flex;
  `,MarkerName:P.span`
    font-size: 1rem;
    flex-grow: 1;
  `,Emoji:P.span`
    font-size: 1.4rem;
  `,Date:P.span`
    margin-top: auto;
    font-size: 1rem;
  `,Highlight:P.div`
    margin-top: 2px;
    font-size: 1.4rem;
    padding: 10px;
    border: 1px solid ${H.cloud.getShade(10)};
  `,HighlightNote:P.div`
    font-weight: 700;
  `,LeftColumn:P.ul`
    float: left;
    width: 65%;
    list-style-type: none;
    padding: 0;
    margin: 0;
  `,RightColumn:P.div`
    float: right;
    width: 30%;
  `,SideNotes:P.h1`
    font-size: 1.5rem;
    border-bottom: 2px solid ${H.cloud.getShade(10)};
    font-weight: 700;
    margin-bottom: 40px;
  `,Disclaimer:P.div`
    position: fixed;
    bottom: 20px;
    margin-right: 20px;
    font-size: 0.8rem;
  `},kd=({intl:e,highlightsByChapter:t,document:n,userEmail:r,highlightsExportCharacterLimit:i})=>{let a=n.createElement(`link`);a.type=`text/css`,a.rel=`stylesheet`,a.href=`https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap`,n.head.appendChild(a);let o=n.createElement(`style`);return o.innerHTML=`html {font-size: 62.5%;} body {margin: 0; font-family: 'Roboto', sans-serif;}`,n.head.appendChild(o),(0,K.jsx)(de,{target:n.head,children:(0,K.jsxs)(Od.PrintPage,{children:[(0,K.jsx)(Od.LeftColumn,{children:t?.map((t,n)=>t.highlights.map(t=>{let n=i!==-1&&t.selectedText.length>i?t.selectedText.substring(0,i)+`...`:t.selectedText,r=e.formatDate(new Date(t.lastModifiedAt),{year:`numeric`,month:`numeric`,day:`numeric`});return(0,K.jsxs)(Od.HighlightContainer,{children:[(0,K.jsxs)(Od.TopLine,{children:[(0,K.jsxs)(Od.MarkerName,{children:[t.subscribed&&(0,K.jsxs)(K.Fragment,{children:[t.authorInitials,`\xA0`]}),t.markerColorName?t.markerColorName:(0,K.jsx)(Od.Emoji,{children:t.noteText})]}),(0,K.jsx)(Od.Date,{children:r})]}),(0,K.jsxs)(Od.Highlight,{children:[(0,K.jsx)(`p`,{children:n}),t.hasNote&&t.markerColorName&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`hr`,{}),(0,K.jsx)(Od.HighlightNote,{children:(0,K.jsx)(`p`,{children:t.noteText})})]})]})]},t.syncId)}))}),(0,K.jsxs)(Od.RightColumn,{children:[(0,K.jsx)(Od.SideNotes,{children:e.formatMessage({id:`workbook.highlights.print.sideNotes`})}),(0,K.jsx)(Od.Disclaimer,{children:e.formatMessage({id:`workbook.highlights.print.disclaimer`},{userEmail:r})})]})]})})};N(),P.div`
    min-width: 230px;
  `;var Ad=(e,t,n,r,i)=>{let a=window.open(``,`_blank`);a&&(a.document.title=`${e.formatMessage({id:`workbook.highlights.title`})}: ${t.title}`,ui.render((0,K.jsx)(kd,{document:a.document,intl:e,highlightsByChapter:n,userEmail:r.email,highlightsExportCharacterLimit:i}),a.document.body),setTimeout(()=>a?.print(),10))};N();var jd=function(e){return e[e.OKCancel=0]=`OKCancel`,e[e.DeleteCancel=1]=`DeleteCancel`,e}({}),Md=function(e){return e[e.Cancel=0]=`Cancel`,e[e.OK=1]=`OK`,e[e.Delete=2]=`Delete`,e}({}),Nd={MessageContent:P.div``},Pd=e=>{let t=I(),{open:n,titleId:r,messageId:i,onRequestClose:a,size:o=`small`,requireInteraction:s=!0}=e,c=``,l=``,u,d;switch(e.type){case 0:c=t.formatMessage({id:`base.ok`}),l=t.formatMessage({id:`base.cancel`}),u=()=>e.onResponse(1),d=()=>e.onResponse(0);break;case 1:c=t.formatMessage({id:`base.delete`}),l=t.formatMessage({id:`base.cancel`}),u=()=>e.onResponse(2),d=()=>e.onResponse(0)}let f=()=>setTimeout(()=>a(),1);return(0,K.jsx)(Mt,{type:bt.Vstui,open:n,requireInteraction:s,primaryActionButton:{label:c,onClick:()=>{u(),f()}},secondaryActionButton:{label:l,onClick:()=>{d(),f()}},onRequestClose:f,size:o,title:t.formatMessage({id:r}),children:(0,K.jsx)(Nd.MessageContent,{children:t.formatMessage({id:i})})})};N();var Fd={HighlightsContainer:P.div`
    position: relative;
    z-index: 0;
    margin: 0 24px;
    height: 100%;
  `,ExpandCollapseContainer:P.div`
    margin-block: 0 6px;
    margin-inline: 24px;
  `},Id=300;function Ld(){let e=I(),{isRtl:t}=Pr(),n=d(),{loadStatus:r,highlightsSubscribedMarkers:i,highlightsData:o,goToHighlight:s,numHighlights:c,deleteHighlight:l,updateHighlight:u}=vn(),{highlightsFilter:f,setHighlightsFilter:m,filteredHighlights:g,numFilteredHighlights:_,filteredHighlightsByChapter:v}=Yu(),{markers:y}=jr(),{bookInfo:b}=ht(),{userInfo:x,loadStatus:S}=ut(),C=Gr(),[w,T]=(0,W.useState)(``),[E,D]=(0,W.useState)(null),O=h([r,S])===p.OK,ee=(0,W.useMemo)(()=>v&&v.length>0?v.map(e=>e.uuid):[],[v]),k=Vr(ee,!0),te=Cl((0,W.useMemo)(()=>{let e=v||[];return e.map((t,n)=>e[n]?.highlights.length||0)},[v]),100),{currentPageCfi:ne}=nt(),[A,re]=(0,W.useState)(!1),[ie,ae]=(0,W.useState)(null),j=o?.find(e=>e.syncId===w);vt(Et.PAGE_SCROLL,e=>{if(E!==null&&e.cfi&&j?.cfi&&xe(j.cfi)){let t=ne+`!`+e.cfi,n=(0,ga.parseCfiRange)(j.cfi).start,r=ga.CFI.equals((0,ga.parseCfi)(t),n);!r&&t.indexOf(n.toString().substr(0,t.length))===0&&(r=!0),E===!0&&r?D(!1):E===!1&&!r&&(D(null),T(``))}}),(0,W.useEffect)(()=>{v?.filter(e=>e.highlights.length>Id).forEach(e=>{a(`workbook_highlights_chapter_threshold`,{threshold:Id,highlightCount:e.highlights.length,userId:x.identifier})})},[v,x]);let oe=(0,W.useCallback)((e,t)=>{T(e),D(!0),s(e,t).then(()=>{}),a(`workbook_annotations_navigate`)},[s]),M=(0,W.useCallback)((e,t)=>{t?(re(!0),ae(e)):l(e)},[l]),se=(0,W.useCallback)((e,t)=>{u(e,{noteText:t}),a(`workbook_annotations_edit`)},[u]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Ju,{isLoading:!O,headerProps:{title:e.formatMessage({id:`workbook.highlights.title`}),controls:_>0&&(0,K.jsx)(U.Button,{size:`small`,tooltipPlacement:t?`top-start`:void 0,pill:!0,label:e.formatMessage({id:`workbook.highlights.export`}),onClick:()=>{Ad(e,b,v,x,n.getProp(`Highlights.exportCharacterLimit`))},children:e.formatMessage({id:`base.export`})})},children:[c>0&&(0,K.jsx)(nd,{userMarkers:y,subscribedMarkers:i,curFilter:f,onFilter:e=>{m(e)},onOpenMarkerPrefs:C.buttonProps.onClick}),_>0&&(0,K.jsx)(Fd.ExpandCollapseContainer,{children:(0,K.jsx)(Wr,{onExpandClick:k.expandAll,onCollapseClick:k.collapseAll,allExpanded:k.fullyExpanded,allCollapsed:k.fullyCollapsed,visuallyHiddenLegend:e.formatMessage({id:`workbook.highlights.accordion`})})}),(0,K.jsxs)(Fd.HighlightsContainer,{children:[!c||!g?.length&&(f.type===B.Marker||f.type===B.OnlyNotes)?(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(cd,{type:c?f.type===B.Marker?sd.ColorFilterEmpty:sd.NotesFilterEmpty:sd.NoHighlights,onClearFilter:()=>{m({type:B.None})},onOpenMarkerPrefs:C.buttonProps.onClick})}):!g||!(g.length>0)?null:v.map((e,t,n)=>t>te.lastVisibleBlock.indexEnd?null:(0,K.jsx)(Dd,{chapter:e.title,chapterId:e.uuid,expanded:k.isItemExpanded(e.uuid),toggleExpansion:k.toggleItem,highlights:e.highlights,selectedHighlightId:w,isLast:t===n.length-1,onGoToHighlight:oe,onDeleteHighlight:M,onUpdateNote:se},e.uuid)),te.hasMore&&(0,K.jsx)(Tl,{onMoreClick:()=>te.loadMore()})]})]}),(0,K.jsx)(pa,{...C.contentProps,selectedTab:ua.HIGHLIGHTERS}),(0,K.jsx)(Pd,{type:jd.DeleteCancel,open:A,titleId:`workbook.highlights.confirmDelete.title`,messageId:`workbook.highlights.confirmDelete.message`,onRequestClose:()=>re(!1),onResponse:e=>{e===Md.Delete&&(l(ie),ae(null),re(!1))}})]})}N();var Rd=F`
  margin-inline-start: 24px;
  content: "";
  display: inline-block;
  width: calc(100% - 48px);
  border-bottom: 1px solid ${H.cloud.getShade(4)};
  position: absolute;
`,zd={ListItem:P.li`
    position: relative;
    margin: 0 -24px;
    background: white;
    &:not(:last-child) {
      margin-bottom: 1px;
      :after {
        ${Rd}
      }
    }
  `,Container:P.div`
    display: flex;
    align-items: center;
    height: 64px;
    width: 100%;
    cursor: pointer;
    position: relative;
    outline: none;
    border: 2px solid transparent;
    &:focus {
      border: 2px solid ${L(6)};
    }
    &:hover {
      ${({childHovered:e})=>!e&&F`
          background-color: ${L(1)};
        `}
    }
  `,ActiveBar:P.div`
    position: absolute;
    height: 100%;
    width: 8px;
    inset-inline-end: 0;
    top: 0;
    background: ${({selected:e})=>e?L(6):`transparent`};
  `,Indent:P.div`
    /* the selected right color strip influences how much margin is needed */
    /* to keep highlight layout static */
    margin: 0 24px;
  `,Content:P.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 24px;
  `,ChapterTitle:P.div`
    overflow: hidden;
    width: 100%;
    text-align: left;
    font-weight: 500;
    ${ze(2)}
  `,Page:P.span`
    font-size: 1rem;
    line-height: 1.75;
    color: ${H.cloud.getShade(6)};
    order: 4;
  `,BookmarkIcon:P.div`
    margin-top: 4px;
    min-width: 24px;
  `,ToolsHolder:P.div`
    position: relative;
    text-align: center;
    margin: 0 4px;
  `,TrashButton:P(U.IconButton)`
    ${({isVisible:e})=>!e&&F`
        z-index: -1;
      `}
    order: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${Ne}
  `},Bd=ue(({data:e,onGoToBookmark:t,onDeleteBookmark:n,isActive:r=!1,theme:i})=>{let a=I(),[o,s]=(0,W.useState)(!1),[c,l]=(0,W.useState)(!1),[u,d]=(0,W.useState)(!1),[f,p]=(0,W.useState)(!1),m=(0,W.useRef)(null),h={primary:i.vstui.color.primary.getShade(6),base:i.color.base.getShade(9)},g=()=>{!r&&e.id&&t(e)};return(0,K.jsxs)(zd.ListItem,{"aria-current":r,children:[(0,K.jsx)(zd.Container,{ref:m,tabIndex:-1,selected:r,"aria-label":`${a.formatMessage({id:`workbook.bookmarks.item.ariaLabel`},{chapterTitle:e.chapterTitle||``,pageNumber:e.page||``})}`,childHovered:c||u,onMouseOver:()=>s(!0),onMouseLeave:()=>s(!1),onFocus:e=>{s(!0)},onClick:()=>{g(),m.current?.focus()},onBlur:e=>{m.current?.contains(e.relatedTarget)||(s(!1),l(!1))},children:(0,K.jsxs)(zd.Content,{children:[(0,K.jsx)(zd.BookmarkIcon,{children:mc(h)}),(0,K.jsx)(zd.ChapterTitle,{children:e.chapterTitle}),(0,K.jsx)(zd.Page,{children:e.page}),(0,K.jsxs)(zd.ToolsHolder,{children:[(0,K.jsx)(_r,{layout:or.opacityHidden,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onFocus:e=>{p(!0),e.stopPropagation()},onBlur:e=>{p(!1)},children:(0,K.jsx)(w,{id:`workbook.bookmarks.gotoPage`})}),(0,K.jsx)(zd.TrashButton,{rounded:!0,size:`small`,isVisible:(o||c)&&!f,onMouseEnter:()=>l(!0),onFocus:()=>l(!0),onMouseLeave:()=>l(!1),label:a.formatMessage({id:`workbook.bookmarks.deleteBookmark`}),onKeyPress:t=>{t.stopPropagation(),t.currentTarget===t.target&&(t.key===`Enter`||t.key===` `)&&e.id&&n(e)},onClick:t=>{t.stopPropagation(),e.id&&n(e)},icon:(0,K.jsx)(G.Delete,{color:H.cloud.getShade(10)})})]})]})}),(0,K.jsx)(zd.ActiveBar,{selected:r})]})});N();var Vd=ue(({theme:e})=>{let t={primary:e.vstui.color.primary.getShade(6),base:e.color.base.getShade(9)};return(0,K.jsx)(od,{taglineId:`workbook.bookmarks.null.tagline`,stepsProps:{messageId:`workbook.bookmarks.null.help`,steps:[{icon:(0,K.jsx)(_c,{colors:t}),textId:`workbook.bookmarks.null.help.step1`},{icon:(0,K.jsx)(vc,{colors:t}),textId:`workbook.bookmarks.null.help.step2`},{icon:(0,K.jsx)(gc,{colors:t}),textId:`workbook.bookmarks.null.help.step3`},{icon:(0,K.jsx)(yc,{colors:t}),textId:`workbook.bookmarks.null.help.step4`}]}})});N();var Hd={DialogContent:P.div``},Ud=e=>({Not_unique:`notUnique`})[e]||`somethingWentWrong`,Wd=({open:e,onRequestClose:t,onAddBookmark:n})=>{let r=I(),i=R(st),a=(0,W.useRef)(document.activeElement),[o,s]=(0,W.useState)(!1),[c,l]=(0,W.useState)(``),[u,d]=(0,W.useState)(!1);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Mt,{type:bt.Vstui,alert:!0,open:e,primaryActionButton:{label:r.formatMessage({id:`workbook.bookmarks.modal.add`}),onClick:async()=>{if(u)return;d(!0);let e=await n();e.ok||(l(e.error),s(!0)),d(!1),t()}},secondaryActionButton:{label:r.formatMessage({id:`workbook.bookmarks.modal.cancel`}),onClick:t},onRequestClose:t,size:`small`,title:r.formatMessage({id:`workbook.bookmarks.modal.title`}),requireInteraction:!0,children:(0,K.jsx)(Hd.DialogContent,{children:(0,K.jsx)(w,{id:`workbook.bookmarks.modal.content`,values:{page:i}})})}),(0,K.jsx)(U.Toast,{open:o,toastClose:()=>{s(!1),a.current.focus()},toastTitleText:r.formatMessage({id:`workbook.bookmarks.error.somethingWentWrong`}),toastDescriptionText:r.formatMessage({id:`workbook.bookmarks.error.${Ud(c.split(` `).join(`_`))}`}),toastType:`error`})]})};N();var Gd={Content:P.div`
    margin: auto;
    text-align: center;
    width: 200px;
    color: ${H.cloud.getShade(7)};
    font-size: 1.6rem;
  `};function Kd(){let e=I();return(0,K.jsx)(Gd.Content,{children:e.formatMessage({id:`workbook.bookmarks.disabled`})})}N();var qd={BookmarksContainer:P.div`
    margin: 0 24px;
  `};function Jd(){let e=I(),{loadStatus:t,bookmarksData:n,deleteBookmark:r,goToBookmark:i,numBookmarks:a,setBookmark:o,activeBookmarkId:s}=cc(),{bookInfo:c}=ht(),l=!c.hasPageBreaks,u=Gr(),d=t===p.OK,f=()=>a?(0,K.jsx)(`ul`,{children:n.map((e,t)=>(0,K.jsx)(Bd,{data:e,onGoToBookmark:e=>{i(e)},onDeleteBookmark:r,isActive:s===e.id},e.id))}):(0,K.jsx)(Vd,{});return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ju,{isLoading:!d,headerProps:{title:e.formatMessage({id:`workbook.bookmarks.title`}),controls:!l&&(0,K.jsx)(U.IconButton,{size:`small`,rounded:!0,buttonType:`enclosed`,solid:!0,icon:(0,K.jsx)(G.Plus,{}),label:e.formatMessage({id:`workbook.bookmarks.addBookmark`}),...u.buttonProps})},children:l?(0,K.jsx)(Kd,{}):(0,K.jsx)(qd.BookmarksContainer,{children:f()})}),(0,K.jsx)(Wd,{...u.contentProps,onAddBookmark:o})]})}N();var Yd={List:P.ul`
    width: 100%;
    ${e=>e.hidden&&F`
        visibility: hidden;
      `};
  `},Xd=({children:e,hidden:t=!1,showCreator:n=!1,inlineEditor:r,className:i,ulRef:a})=>(0,K.jsxs)(Yd.List,{ref:a,hidden:t,className:i,children:[n&&(0,K.jsx)(`li`,{children:r}),W.Children.map(e,e=>(0,K.jsx)(`li`,{children:e}))]});N();var Zd=F`
  a,
  button {
    background-color: ${H.cloud.getShade(5)};
    border-color: ${H.cloud.getShade(5)};
    margin-right: 4px;
    min-height: 24px;
    width: 24px;
    min-width: 16px;
    height: 24px;
    svg {
      height: 12px;
      width: 12px;
    }
  }
`,Qd={ButtonOverlay:P.div`
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    pointer-events: none;
  `,RightControls:P.div`
    float: right;
    ${Zd}
  `,LeftControls:P.div`
    float: left;
    ${Zd}
  `},$d=ue(({leftControls:e,rightControls:t,className:n})=>{let r=e=>e?.map((e,t)=>W.cloneElement(e,{key:t}));return(0,K.jsxs)(Qd.ButtonOverlay,{onKeyDown:e=>e.stopPropagation(),className:n,children:[e&&(0,K.jsx)(Qd.LeftControls,{children:r(e)}),t&&(0,K.jsx)(Qd.RightControls,{children:r(t)})]})});N();var ef={Container:P.div`
    cursor: default;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    padding: 26px 16px 26px 16px;
    display: flex;
    flex-direction: column;
  `,Buttons:P.div`
    align-self: flex-end;
  `},tf=ue(({open:e,onRequestClose:t,onSave:n,data:r})=>{let i=I(),[a,o]=(0,W.useState)(r||{title:``}),s=(0,W.useRef)(document.activeElement);return(0,K.jsx)(K.Fragment,{children:e&&(0,K.jsxs)(ef.Container,{onClick:e=>e.stopPropagation(),onKeyPress:e=>e.stopPropagation(),children:[(0,K.jsx)(U.TextField,{ref:e=>e&&e.focus(),label:i.formatMessage({id:`workbook.flashcards.editor.deckTitle`}),size:`small`,type:`text`,value:a.title,onChange:e=>{o(Object.assign({},a,{title:e.target.value}))}}),(0,K.jsxs)(ef.Buttons,{children:[(0,K.jsx)(U.Button,{color:`neutral`,size:`small`,type:`cancel`,onClick:()=>{t(),s.current.focus()},children:i.formatMessage({id:`base.cancel`})}),(0,K.jsx)(U.Button,{size:`small`,type:`submit`,onClick:()=>{a&&n(a).then(()=>{s.current.focus(),t()})},children:i.formatMessage({id:`base.save`})})]})]})})});function nf(e){return e.overleaf.decks}var rf=Je(nf,e=>e.deckData?Object.values(e.deckData).sort((e,t)=>+new Date(t.inserted_at)-new Date(e.inserted_at)):[]),af=e=>nf(e).loadStatus,of=e=>nf(e).selected,sf=e=>nf(e).error,cf=Je(of,e=>nf(e).deckData,(e,t)=>!e||!t?null:t[e]);function lf(){let e=ke(),t=R(af),n=$e(),{bookInfo:r}=ht();return(0,W.useEffect)(()=>{e===g.OK&&t===p.WAITING&&n(It({isbn:r.isbn}))},[t,e,r,n]),e===g.ERROR?{initStatus:e,loadStatus:p.ERROR}:{initStatus:e,loadStatus:t}}function uf(){let e=z(),{initStatus:t,loadStatus:n}=lf(),r=R(rf),i=R(cf),{bookInfo:a}=ht(),o=R(sf),s=(0,W.useCallback)(t=>e(Dn({...t,metadata:{isbn:a.isbn}})),[a,e]),c=(0,W.useCallback)(t=>e(yr(t)),[e]),l=(0,W.useCallback)(t=>e(jn(t)),[e]);return{decksLoadStatus:n,initStatus:t,setSelectedDeck:(0,W.useCallback)(t=>{e(Hn(t))},[e]),selectedDeck:i,createDeck:s,updateDeck:c,deleteDeck:l,decks:r,numDecks:r?.length??0,error:o}}var df=({open:e,data:t,onRequestClose:n,onDeleteDeck:r})=>{let i=I();return(0,K.jsx)(Mt,{type:bt.Vstui,open:e,primaryActionButton:{label:i.formatMessage({id:`base.delete`}),onClick:()=>{r(t.uuid)}},secondaryActionButton:{label:i.formatMessage({id:`base.cancel`}),onClick:n},onRequestClose:n,size:`small`,title:i.formatMessage({id:`workbook.deck.delete.title`}),children:(0,K.jsx)(w,{id:`workbook.deck.delete.content`,values:{title:t.title}})})};N();var ff=2,pf=4,mf=P($d)`
  opacity: 0;
  transition: opacity
    ${e=>e.theme.vstui.transition.duration.shortest};
  &:focus-within {
    opacity: 1;
  }
`,hf=P.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`,gf=P(U.Card)`
  position: absolute;
  overflow: auto;
  overflow-x: hidden;
  top: ${pf}px;
  width: 100%;
  border-radius: 2px;
  height: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    ${mf} {
      opacity: 1;
    }
  }
  &:has(${hf}:focus) {
    outline-style: solid;
    outline-color: ${L(6)};
    outline-width: 2px;
    outline-offset: 1px;
  }
`,_f=P(U.Card)`
  position: absolute;
  height: 100%;
  width: calc(100% - ${4}px);
  left: ${ff}px;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  }
`,vf=P.div`
  position: relative;
  background-color: transparent;
  border-radius: 2px;

  &:has(${gf}:hover) {
    background-color: ${H.cloud.getShade(2)};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`,yf=P.div`
  text-align: center;
  padding-top: 70px;
`,bf=P.div`
  font-size: 1.5rem;
`,xf=P.div`
  font-weight: lighter;
  font-size: 1.083rem;
`,Sf=({data:e,onClick:t,isCreateMode:n=!1,onRequestClose:r,className:i})=>{let o=I(),s=Gr(n),{updateDeck:c,createDeck:l,deleteDeck:u}=uf(),d=Gr(),f=Fn();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(vf,{className:i,children:[(0,K.jsx)(_f,{raised:!0}),(0,K.jsxs)(gf,{raised:!0,children:[e&&!s.contentProps.open&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(hf,{tabIndex:s?.contentProps?.open?-1:0,role:`button`,"aria-label":e.title+`, `+o.formatMessage({id:`workbook.flashcards.nCards`},{num:e?.card_count??0}),onClick:()=>{t&&e&&(t(e.uuid),a(`workbook_flashcards_deck`,{deckId:e.uuid}))},onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&t&&e&&t(e.uuid)}}),(0,K.jsx)(mf,{leftControls:[(0,K.jsx)(U.IconButton,{rounded:!0,buttonType:`enclosed`,solid:!0,label:o.formatMessage({id:`workbook.deck.toolbar.delete`}),size:`small`,onClick:e=>{e.stopPropagation(),d.buttonProps.onClick()},icon:(0,K.jsx)(G.Delete,{color:H.cloud.getShade(1)})}),(0,K.jsx)(U.IconButton,{rounded:!0,buttonType:`enclosed`,solid:!0,label:o.formatMessage({id:`workbook.deck.toolbar.edit`}),size:`small`,icon:(0,K.jsx)(G.Edit,{color:H.cloud.getShade(1)}),onClick:e=>{e.stopPropagation(),s.buttonProps.onClick()}})],rightControls:[(0,K.jsx)(U.IconButton,{rounded:!0,buttonType:`enclosed`,solid:!0,trustedLink:!0,label:o.formatMessage({id:`workbook.flashcards.studyDeck`}),href:`${y()}/flashcards/deck/${e.uuid}`,target:`study-tab-${f}`,"data-interaction-id":`workbook_flashcards_study`,size:`small`,icon:(0,K.jsx)(G.Play,{color:H.cloud.getShade(1)})})]})]}),s.contentProps.open&&(0,K.jsx)(tf,{...s.contentProps,onRequestClose:()=>{s.contentProps.onRequestClose(),n&&r&&r()},data:e,onSave:t=>e?c(t):l(t).then(({payload:e})=>{a(`workbook_flashcards_deck_create`,{deckId:e.result,title:t.title})})}),!s.contentProps.open&&(0,K.jsxs)(yf,{children:[(0,K.jsx)(bf,{children:e?.title}),(0,K.jsx)(xf,{children:o.formatMessage({id:`workbook.flashcards.nCards`},{num:e?.card_count??0})})]})]})]}),e&&(0,K.jsx)(df,{...d.contentProps,data:e,onDeleteDeck:u})]})};N();var Cf={WorkbookElementList:P(Xd)`
    padding-top: 16px;
  `,Deck:P(Sf)`
    height: 161px;
    width: 292px;
    margin: 0 auto 16px auto;
  `},wf=({data:e,onDeckClick:t,hidden:n=!1,showCreator:r=!1,onRequestCloseCreator:i,ulRef:a})=>(0,K.jsx)(Cf.WorkbookElementList,{ulRef:a,hidden:n,showCreator:r,inlineEditor:(0,K.jsx)(Cf.Deck,{isCreateMode:!0,onRequestClose:i}),children:e.map((e,n)=>(0,K.jsx)(Cf.Deck,{data:e,onClick:t},e.uuid))});N();var Tf=(0,ha.createThemedComponent)(U.Button,{Button_paddingHorizontal_small:`14px`}),Ef={FaceContainer:P.div`
    overflow: hidden;
    position: relative;
    min-height: 155px;
    text-align: center;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${H.cloud.getShade(10)};
    ${({shortText:e})=>e&&F`
        flex-grow: 1;
      `}
  `,FigureOrImage:P(Me)`
    position: absolute;
    max-height: 127px;
    max-width: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,BodyContainer:P.div`
    font-size: 1.5rem;
    font-weight: 300;
    white-space: pre-wrap;
  `,TitleContainer:P.div`
    text-align: center;
    width: 100%;
    font-size: 1.7rem;
    font-weight: 500;
    white-space: pre-wrap;
  `,MoreButton:P(Tf)`
    position: absolute;
    bottom: 2px;
    right: 6px;
    z-index: 10;
  `},Df=({content:e,shortText:t})=>{let[n,r]=(0,W.useState)(!1),[i,a]=(0,W.useState)(!1);return e?e.type===x.IMAGE?(0,K.jsx)(Ef.FaceContainer,{children:(0,K.jsx)(Ef.FigureOrImage,{src:e.content,title:e.metadata.title,caption:e.metadata.caption,alt:e.metadata.alt})}):(0,K.jsxs)(Ef.FaceContainer,{shortText:t,children:[(0,K.jsx)(br,{isExpanded:n,numLines:t?5:6,onExpandableStatus:e=>a(e),children:t?(0,K.jsx)(Ef.TitleContainer,{children:e.content}):(0,K.jsx)(Ef.BodyContainer,{children:e.content})}),i&&(0,K.jsx)(Ef.MoreButton,{naked:!0,size:`small`,onClick:e=>{e.stopPropagation(),r(!n)},children:(0,K.jsx)(w,{id:n?`base.less`:`base.more`})})]}):null};N();var Of=.4,kf={Flippable:P.div`
    cursor: pointer;
    position: relative;
    display: inherit;
    flex-direction: inherit;
    width: 100%;
    border-radius: 2px;
    perspective: 1500px;
    &:focus {
      outline-color: ${L(6)};
      outline-width: 2px;
    }
    .inner-flippable-card {
      position: relative;
      transition: transform ${Of}s;
      &.flipped {
        transform: rotateY(180deg);
      }
    }
  `,Front:P.div`
    backface-visibility: hidden;
    &.hidden {
      position: absolute;
      visibility: hidden;
    }
  `,Back:P.div`
    position: relative;
    transform: rotateY(180deg);
    &.hidden {
      position: absolute;
      visibility: hidden;
    }
  `,A11yButton:P.button`
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 2px;
    &:focus {
      outline-style: solid;
      outline-color: ${L(6)};
      outline-width: 2px;
      outline-offset: 1px;
    }
  `},Af=({onFlipped:e,onFlipRequest:t,children:n,wrapper:r,disableA11yButton:i})=>{let[a,o]=(0,W.useState)(!1),s=(0,W.useRef)(null),c=I(),l=(0,W.useCallback)(e=>{o(e),t?.()},[t]);(0,W.useEffect)(()=>{e&&setTimeout(()=>{e(a)},Of*200)},[a,e]);let u=W.Children.toArray(n),d=()=>(0,K.jsxs)(K.Fragment,{children:[!i&&(0,K.jsx)(kf.A11yButton,{onClick:()=>{l(!a),setTimeout(()=>{s.current&&s.current?.querySelector(`button`)?.focus()},Of)},"aria-label":c.formatMessage({id:`flashcards.flipCard`})+`, `+(a?c.formatMessage({id:`workbook.flashcards.editor.BackOfCard`}):c.formatMessage({id:`workbook.flashcards.editor.FrontOfCard`}))},a?`back`:`front`),(0,K.jsx)(kf.Front,{className:a?`hidden`:``,children:u[0]}),(0,K.jsx)(kf.Back,{className:a?``:`hidden`,children:u[1]})]});return(0,K.jsx)(kf.Flippable,{onClick:()=>l(!a),ref:s,children:r?W.cloneElement(r,{className:`inner-flippable-card ${a?`flipped`:``}`,children:d()}):(0,K.jsx)(`div`,{className:`inner-flippable-card ${a?`flipped`:``}`,children:d()})})};N();var jf=e=>{switch(e){case C.Unknown:return F`
        background: repeating-linear-gradient(
          ${H.cloud.getShade(6)},
          ${H.cloud.getShade(6)} 6px,
          0px,
          ${H.cloud.getShade(4)} 17px
        );
      `;case C.High:return F`
        background: repeating-linear-gradient(
          45deg,
          ${H.green.getShade(7)},
          ${H.green.getShade(7)} 4px,
          0px,
          ${H.green.getShade(4)} 12px
        );
      `;case C.Low:return F`
        background: repeating-linear-gradient(
          -45deg,
          ${H.red.getShade(7)},
          ${H.red.getShade(7)} 4px,
          0px,
          ${H.red.getShade(4)} 12px
        );
      `}},Mf={Meter:P.div`
    position: absolute;
    top: 0;
    width: 4px;
    height: 100%;
    border-radius: 2px 0 0 2px;
    border-right-style: none;
    ${({confidenceLevel:e})=>jf(e)};
  `},Nf=({confidenceLevel:e})=>(0,K.jsx)(`div`,{children:(0,K.jsx)(Mf.Meter,{confidenceLevel:e})}),Pf={FRONT:`Front`,BACK:`Back`},Ff=1024;function If(e){return(0,K.jsx)(`svg`,{width:13,height:20,viewBox:`0 0 13 20`,xmlns:`http://www.w3.org/2000/svg`,focusable:`false`,"aria-hidden":`true`,...e,children:(0,K.jsx)(`path`,{d:`M9.393 10.034c-.626.457-1.217.89-1.408 1.592l-.039.14c-.277 1.018-.361 1.302-.791 1.382H5.781c-.405-.078-.48-.349-.714-1.305l-.05-.204c-.179-.72-.779-1.162-1.415-1.63C2.635 9.297 1.54 8.489 1.54 6.5A4.966 4.966 0 0 1 6.5 1.54a4.966 4.966 0 0 1 4.96 4.96c0 2.024-1.05 2.792-2.067 3.534zm-1.29 7.412c0 .14-.114.255-.254.255H5.07a.255.255 0 0 1-.254-.255v-.213c0-.14.115-.255.254-.255H7.85c.14 0 .254.115.254.255v.213zM6.46 14.723c.29 0 .544-.011.771-.035h.618c.14 0 .254.114.254.255v.213c0 .14-.114.255-.254.255H5.07a.255.255 0 0 1-.254-.255v-.213c0-.14.115-.255.254-.255h.65c.219.024.463.035.739.035zM6.5 0A6.507 6.507 0 0 0 0 6.5c0 2.768 1.618 3.96 2.688 4.748.352.259.79.581.834.761l.05.201c.13.533.247.97.402 1.323-.42.33-.697.836-.697 1.41v.213c0 .388.127.744.337 1.039-.21.294-.337.65-.337 1.038v.213c0 .99.805 1.794 1.794 1.794H7.85c.99 0 1.794-.804 1.794-1.794v-.213a1.78 1.78 0 0 0-.337-1.038c.21-.295.337-.651.337-1.04v-.212c0-.56-.264-1.056-.669-1.386.168-.36.302-.814.458-1.387l.038-.139c.05-.183.465-.486.832-.753C11.376 10.492 13 9.306 13 6.5 13 2.916 10.084 0 6.5 0z`,fill:`currentColor`,fillRule:`evenodd`})})}N();var Lf=4,Rf={FieldSet:P.fieldset`
    border: 0;
    margin: 0;
    padding: 0;
  `,Legend:P.legend`
    margin: 0;
    padding: 0 0 4px;
    float: left;
  `,ListContainer:P.div`
    margin: -${Lf}px;
    clear: both;
  `,List:P.div`
    width: 100%;
  `,Radio:P.input`
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    &:not(:focus):not(:checked) + *:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0 1px 3px;
    }

    &:focus + label {
      box-shadow: 0 0 0 2px
        ${e=>e.theme.vstui.color.primary.getShade(6)};
    }

    &:not(:checked) + label > span {
      display: none;
    }
  `,RadioLabel:P.label`
    position: relative;
    display: block;
    margin: 0 !important;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 1px solid ${H.cloud.getShade(4)};
    border-radius: 4px;
    overflow: hidden;
    color: white;
  `,FigureContainer:P.div`
    width: 99px;
    height: 99px;
    margin: ${Lf}px;
    display: inline-block;
    position: relative;
  `,FigureOrImage:P(Me)`
    z-index: -1;
    width: 100%;
    height: 100%;
  `,FigureImageStyles:F`
    height: 100%;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,CheckmarkHolder:P.span`
    position: absolute;
    right: 6px;
    bottom: 6px;
    color: ${e=>e.theme.vstui.color.primary.getShade(6)};
    background: white;
    border-radius: 40px;
    line-height: 0;
  `},zf=W.memo(({figures:e,onSelectFigure:t,selectedFigure:n,title:r,blockId:i,className:a})=>{let o=`figureBlock-${le()}`,s=e=>o+e.cfi,c=e=>o+`-img-`+e.cfi,l=e=>{t(e,i)};return(0,K.jsxs)(Rf.FieldSet,{className:a,children:[(0,K.jsx)(Rf.Legend,{children:r}),(0,K.jsx)(Rf.ListContainer,{children:(0,K.jsx)(Rf.List,{children:e.map(e=>(0,K.jsxs)(Rf.FigureContainer,{children:[(0,K.jsx)(Rf.Radio,{type:`radio`,"aria-describedby":c(e),name:`figure-block-figure`,value:e.figureId,id:s(e),checked:n===e.figureId,onChange:()=>{l(e.figureId)}}),(0,K.jsx)(Rf.RadioLabel,{htmlFor:s(e),children:(0,K.jsx)(Rf.CheckmarkHolder,{children:(0,K.jsx)(G.CheckmarkCircleFill,{})})}),(0,K.jsx)(Rf.FigureOrImage,{id:c(e),className:`figure-picker-img`,dataSrcSet:`${e.thumbnailURL}, ${e.thumbnailURL2x} 2x`,dataSrc:e.thumbnailURL,title:e.title,caption:e.caption,src:Fe,imageStyles:Rf.FigureImageStyles})]},e.figureId))})})]})});N();var Bf=(0,ha.createThemedComponent)(U.Dialog,{Dialog_width_large:`700px`}),Vf=12,Hf={Content:P.div`
    margin: -20px -24px 0;
  `,Banner:P.div`
    background-color: ${H.green.getShade(1)};
    padding: ${Vf}px 47px 12px 24px;
    margin: 0;
    min-height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,BulbIcon:P(If)`
    color: ${H.green.getShade(6)};
    margin-right: 20px;
  `,BannerText:P.p`
    margin: 0;
    line-height: 1.7rem;
    flex: 1;
  `,BlockContainer:P.div`
    padding: ${Vf}px 24px 0;
  `},Uf=({open:e,onAdd:t,onRequestClose:n})=>{let r=I(),i=ql(),[o,s]=(0,W.useState)(null),[c,l]=(0,W.useState)({}),[u,d]=(0,W.useState)(null),f=i.figuresAndTocInfoGroupByTocUuid,{currentUuid:p}=Jr(),m=(0,W.useRef)(),h=e=>`figure-block-${e}`,{figureById:g}=ql();Xl(m,`.figure-picker-img`,i);let _=(0,W.useCallback)((e,t)=>{if(t&&t.current){let n=t.current.querySelector(`.`+h(e));n&&n.scrollIntoView()}},[]);(0,W.useEffect)(()=>{e&&_(p,m)},[_,p,e,m]),(0,W.useEffect)(()=>{s(null)},[e]);let v=()=>{o&&t&&t(g(o)),n()},y=(0,W.useCallback)((e,t)=>{if(s(e),t!==u){let e=u;l({...c,[e]:!1,[t]:!0})}d(e=>t)},[u,c]);return(0,K.jsx)(Bf,{open:e,onRequestClose:n,size:`large`,title:r.formatMessage({id:`workbook.imagePicker.selectFigure`}),darkHeader:!0,primaryActionButton:{label:r.formatMessage({id:`workbook.imagePicker.addToCard`}),onClick:e=>{e.stopPropagation(),v(),a(`workbook_flashcards_add_image`)}},secondaryActionButton:{label:r.formatMessage({id:`base.cancel`}),onClick:e=>{e.stopPropagation(),n()}},children:(0,K.jsxs)(Hf.Content,{ref:m,children:[(0,K.jsxs)(Hf.Banner,{children:[(0,K.jsx)(Hf.BulbIcon,{width:19.5,height:30}),(0,K.jsx)(Hf.BannerText,{children:r.formatMessage({id:`workbook.imagePicker.bannerTip`})})]}),e&&f&&Object.entries(f).map(([e,t])=>(0,K.jsx)(Hf.BlockContainer,{children:(0,K.jsx)(zf,{className:h(e),blockId:e,title:t.tocInfo.title,figures:t.figures,selectedFigure:!!c[e]&&o,onSelectFigure:y})},e))]})})};N();var Wf={ImageContainer:P.div`
    text-align: center;
    max-width: 100%;
  `,ImageInnerContainer:P.div`
    position: relative;
    display: inline-block;
    max-width: 100%;
  `,ImageDeleteButton:P(U.IconButton)`
    position: absolute;
    top: -12px;
    right: -12px;
    button {
      background-color: ${H.cloud.getShade(6)};
      min-height: 24px;
      width: 24px;
      min-width: 16px;
      height: 24px;
      border: 2px solid ${H.cloud.getShade(6)} !important;
      svg {
        height: 12px;
        width: 12px;
      }
      &:focus,
      &:hover {
        background-color: ${H.cloud.getShade(7)} !important;
      }
    }
  `,TextFieldContainer:P.div`
    position: relative;
    input,
    textarea {
      margin-bottom: 0px;
      ${({showImageIcon:e})=>e&&F`
          padding-right: 36px !important;
        `};
    }
  `,InlineImageButton:P.div`
    position: absolute;
    right: 0;
    /* related textfield dimensions: inner 4.8rem, 5px padding, 1px border */
    bottom: calc((4.8rem + 12px) / 2);
    transform: translateY(50%);
    /* tooltip over horizontal separator */
    z-index: 2;
    button {
      padding: 8px;
    }
  `,TextFieldIconButton:P(U.Button)`
    /* see also button style on parent */
    outline-color: ${L(6)};
    outline-width: 2px;
  `,CardImageStyles:F`
    border: 1px solid ${H.cloud.getShade(4)};
    max-width: 100%;
    max-height: 115px;
    line-height: 0;
  `,ValidationMessage:P.div`
    color: ${e=>e.theme.vstui.color.error};
    font-size: 1.4rem;
    margin-top: -14px;
    margin-bottom: 6px;
    > svg {
      position: relative;
      height: 14px;
      width: 14px;
      margin: 1px 8px 0 0px;
    }
  `},Gf=W.memo(({content:e,side:t,onChange:n,onImageImportRequest:r,imagesEnabled:i=!0,externalValidationError:a=``,clearExternalValidationError:o})=>{let s=I(),c=(0,W.useRef)(null),[l,u]=(0,W.useState)(e.type),[d,f]=(0,W.useState)(``),[p,m]=(0,W.useState)(!1);(0,W.useEffect)(()=>{l!==e.type&&(j(c.current)[0]?.focus(),u(e.type))},[e.type,l]);let h=()=>{n(t,{content:``,type:x.TEXT})},g=e=>{e===1024?f(s.formatMessage({id:`workbook.flashcards.editor.maxInputReached`})):d&&f(``)};return(0,K.jsx)(`div`,{ref:c,children:!e||e.type===x.TEXT?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Wf.TextFieldContainer,{showImageIcon:i,children:[(0,K.jsx)(U.TextField,{size:`small`,type:`text`,value:e?.content,rows:2,multiline:!0,maxLength:Ff,"aria-describedby":`validation-err`,label:s.formatMessage({id:`workbook.flashcards.editor.${t}OfCard`}),onKeyPress:e=>g(e.target.value.length),onKeyUp:e=>{e.key===`Backspace`&&f(``)},onPaste:()=>{m(!0)},onChange:e=>{p&&(e.target.value.length===1024&&f(s.formatMessage({id:`workbook.flashcards.editor.maxInputReached`})),m(!1)),n(t,{content:e.target.value,type:x.TEXT}),o()}}),i&&(0,K.jsx)(Wf.InlineImageButton,{children:(0,K.jsx)(Wf.TextFieldIconButton,{tooltipPlacement:`bottom`,label:s.formatMessage({id:`workbook.imagePicker.addFigure${t}`}),naked:!0,size:`small`,onClick:()=>{r(t)},disabled:!!e?.content,children:(0,K.jsx)(G.Image,{})})})]}),(d||a)&&(0,K.jsxs)(Wf.ValidationMessage,{id:`validation-err`,tabIndex:-1,role:`alert`,children:[(0,K.jsx)(G.ExclamationCircleFill,{}),d||a]})]}):(0,K.jsx)(Wf.ImageContainer,{children:(0,K.jsxs)(Wf.ImageInnerContainer,{children:[(0,K.jsx)(Me,{src:e.content,title:e.metadata.title,caption:e.metadata.caption,alt:e.metadata.alt,imageStyles:Wf.CardImageStyles}),(0,K.jsx)(Wf.ImageDeleteButton,{rounded:!0,size:`small`,buttonType:`floating`,label:s.formatMessage({id:`workbook.imagePicker.deleteFigure`},{title:e.content.title||``}),icon:(0,K.jsx)(G.Delete,{color:H.cloud.getShade(1)}),type:`button`,onClick:h})]})})})});N();var Kf={Container:P.div`
    cursor: default;
    height: 100%;
    padding: 26px 16px;
    display: flex;
    flex-direction: column;
  `,Divider:P.div`
    margin: 8px -16px;
    display: flex;
  `,Line:P.div`
    width: 100%;
    position: relative;
    z-index: 1;
    border-top: 1px solid ${H.cloud.getShade(3)};
  `,SwapButton:P(U.Button)`
    z-index: 10;
    position: relative;
    top: -8px;
    button {
      height: 16px;
      min-height: 16px;
      width: 16px;
      min-width: 16px;
      padding: 0px;
      border-color: ${H.cloud.getShade(4)};
    }
  `,SwapIcon:P(U.Icon)`
    margin-top: 3px;
  `,FrontTextField:P(U.TextField)`
    margin: auto;
    margin-bottom: 16px;
    input {
      font-weight: bold;
    }
  `,Buttons:P.div`
    cursor: default;
    margin-left: auto;
  `,StyledLoader:P(ni)`
    position: absolute;
    /* using z-index of 11 to ensure it's above */
    /* all other flashcard editor components */
    z-index: 11;
    top: 0;
    left: 0;
    height: 100%;
    padding-top: 60px;
    background: rgba(255, 255, 255, 0.5);
  `},qf=ue(({open:e,onRequestClose:t,onSave:n,data:r})=>{let i=I(),a=Gr(),{numFigures:o}=ql(),[s,c]=(0,W.useState)(null),[l,u]=(0,W.useState)(!1),[f,p]=(0,W.useState)(``),m=(0,W.useRef)(document.activeElement),h=d(),g=()=>({content:``,type:`text`}),[_,v]=(0,W.useState)(g()),[y,b]=(0,W.useState)(g());(0,W.useEffect)(()=>(r&&(v(r.front),b(r.back)),()=>{v(g()),b(g())}),[r]);let S=(0,W.useCallback)(e=>{c(e),a.buttonProps.onClick()},[a]),C=()=>{f&&p(``)},w=(0,W.useCallback)((e,t)=>{e===Pf.FRONT?v(t):b(t)},[]),T=()=>{let e=y,t=_;v(e),b(t)},E=()=>{y.content===``&&_.content===``?(p(i.formatMessage({id:`workbook.flashcards.editor.blankInputs`})),u(!1)):n({...r,front:_,back:y}).then(()=>{u(!1),m.current.focus(),t()})};return(0,K.jsx)(K.Fragment,{children:e&&(0,K.jsxs)(Kf.Container,{onClick:e=>e.stopPropagation(),onKeyPress:e=>e.stopPropagation(),role:`group`,"aria-label":i.formatMessage({id:`workbook.flashcards.editor.details`}),children:[l&&(0,K.jsx)(Kf.StyledLoader,{}),(0,K.jsx)(di,{children:(0,K.jsx)(Gf,{content:_,side:Pf.FRONT,onChange:w,onImageImportRequest:S,imagesEnabled:o>0&&h.getProp(`Flashcards.figuresEnabled`),externalValidationError:f,clearExternalValidationError:C})}),(0,K.jsxs)(Kf.Divider,{children:[(0,K.jsx)(Kf.Line,{}),(0,K.jsx)(Kf.SwapButton,{color:`neutral`,size:`small`,label:i.formatMessage({id:`workbook.flashcards.editor.swap`}),onClick:T,"aria-label":i.formatMessage({id:`workbook.flashcards.editor.swapContent`}),children:(0,K.jsx)(Kf.SwapIcon,{height:10,width:10,children:(0,K.jsx)(G.Sort,{color:H.cloud.getShade(6)})})}),(0,K.jsx)(Kf.Line,{})]}),(0,K.jsx)(Gf,{content:y,side:Pf.BACK,onChange:w,onImageImportRequest:S,imagesEnabled:o>0&&h.getProp(`Flashcards.figuresEnabled`),clearExternalValidationError:C}),(0,K.jsxs)(Kf.Buttons,{children:[(0,K.jsx)(U.Button,{color:`neutral`,size:`small`,onClick:()=>{m.current.focus(),t()},children:i.formatMessage({id:`base.cancel`})}),(0,K.jsx)(U.Button,{size:`small`,onClick:()=>{u(!0),E()},disabled:l,children:i.formatMessage({id:`base.save`})})]}),(0,K.jsx)(Uf,{onAdd:s===Pf.FRONT?e=>{v({type:x.IMAGE,content:e.imageURL,metadata:{title:e.title,caption:e.caption}}),C()}:e=>{b({type:x.IMAGE,content:e.imageURL,metadata:{title:e.title,caption:e.caption}}),C()},...a.contentProps})]})})}),Jf=e=>Yf(e).loadStatus;function Yf(e){return e.overleaf.flashcards}var Xf=e=>Yf(e).flashcardData,Zf=e=>Yf(e).error,Qf=Je(cf,Xf,(e,t)=>!e||!e.cards||!t?[]:e.cards.map(e=>t[e]).sort((e,t)=>+new Date(t.inserted_at)-new Date(e.inserted_at)));function $f(){let e=R(Jf),t=R(cf),n=$e();return(0,W.useEffect)(()=>{t&&e===p.WAITING&&!t.cards&&n(hn(t.uuid))},[e,t,n]),e}function ep(){let e=z(),t=$f(),n=R(Qf),r=R(Zf),{selectedDeck:i}=uf();return{flashcardsLoadStatus:t,createFlashcard:t=>e(ur({deckUUID:i?.uuid,...t})),updateFlashcard:t=>e(kn(t)),deleteFlashcard:t=>e(en({id:t,deckUUID:i?.uuid})),flashcards:n,error:r}}N();var tp=P($d)`
  opacity: 0;
  transition: opacity
    ${e=>e.theme.vstui.transition.duration.shortest};
  &:focus-within {
    opacity: 1;
  }
`,np=P(U.Card)`
  overflow: visible;
  display: flex;
  flex-direction: column;
  &:focus {
    outline-color: ${L(6)};
  }
  &:hover {
    ${tp} {
      opacity: 1;
    }
  }
`,rp=(e,t)=>{a(e?`workbook_flashcards_card_create`:`workbook_flashcards_edit_card_save`,{front:t.front.content,frontType:t.front.type,back:t.back.content,backType:t.back.type,cardId:t.uuid})},ip=({children:e,data:t,disableToolbar:n,isCreateMode:r=!1,onRequestClose:i,className:o,flashCardEditor:s})=>{let c=I(),{createFlashcard:l,updateFlashcard:u,deleteFlashcard:d}=ep();return(0,K.jsxs)(np,{interactive:!0,raised:!0,className:o,children:[!s.contentProps.open&&t&&e,!n&&!s.contentProps.open&&t&&(0,K.jsx)(tp,{leftControls:[(0,K.jsx)(U.IconButton,{rounded:!0,buttonType:`enclosed`,solid:!0,label:c.formatMessage({id:`workbook.flashcards.toolbar.delete`}),size:`small`,onClick:e=>{e.stopPropagation(),d(t.uuid)},icon:(0,K.jsx)(G.Delete,{color:H.cloud.getShade(1)})}),(0,K.jsx)(U.IconButton,{rounded:!0,buttonType:`enclosed`,solid:!0,label:c.formatMessage({id:`workbook.flashcards.toolbar.edit`}),size:`small`,icon:(0,K.jsx)(G.Edit,{color:H.cloud.getShade(1)}),onClick:e=>{e.stopPropagation(),s.buttonProps.onClick(),a(`workbook_flashcards_edit_card`,{cardId:t?.uuid})}})]}),(0,K.jsx)(qf,{...s.contentProps,onRequestClose:()=>{s.contentProps.onRequestClose(),r&&i&&i()},data:t,onSave:e=>r?l(e).then(({payload:t})=>{rp(!0,{...e,uuid:Object.keys(t.entities?.cards)[0]})}):u(e).then(({payload:t})=>{rp(!1,e)})}),!s.contentProps.open&&(0,K.jsx)(Nf,{confidenceLevel:t?.confidenceLevel||0})]})};N();var ap={Container:P.div`
    width: 292px;
  `},op=ue(({data:e,isCreateMode:t=!1,onRequestClose:n,className:r=``})=>{let[i,o]=(0,W.useState)(!1),s=Gr(t);return(0,K.jsx)(ap.Container,{className:r,children:(0,K.jsxs)(Af,{onFlipped:o,onFlipRequest:()=>{a(`workbook_flashcards_frontback_toggle`,{cardId:e?.uuid})},wrapper:(0,K.jsx)(ip,{data:e,disableToolbar:i,isCreateMode:t,onRequestClose:n,flashCardEditor:s}),disableA11yButton:s.contentProps.open,children:[(0,K.jsx)(Df,{content:e?.front,shortText:!0}),(0,K.jsx)(Df,{content:e?.back})]})})});N();var sp={WorkbookElementList:P(Xd)`
    padding-top: 16px;
    min-height: 288px;
  `,WorkbookStudyTip:P(vl)`
    margin: 24px;
  `,WorkbookFlashcard:P(op)`
    margin: 0 auto 16px auto;
  `},cp=ue(({data:e,hidden:t,showCreator:n=!1,meta:r,onRequestCloseCreator:i,theme:a})=>{let o=(0,W.useRef)(null),s={primary:a.vstui.color.primary.getShade(6),base:a.color.base.getShade(9)};return(0,W.useEffect)(()=>{!t&&o.current&&j(o.current)[0]?.focus()},[t,o]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(sp.WorkbookElementList,{ulRef:o,hidden:t,showCreator:n,inlineEditor:(0,K.jsx)(sp.WorkbookFlashcard,{isCreateMode:!0,onRequestClose:()=>{i?.(),j(o.current)[0]?.focus()},data:r?.local.flashcard}),children:e.map((e,t)=>(0,K.jsx)(sp.WorkbookFlashcard,{data:e},e.uuid))}),!e.length&&!t&&(0,K.jsx)(sp.WorkbookStudyTip,{titleId:`base.studyTip`,tipId:`workbook.flashcards.studyTips`,tipValues:{icon:(0,K.jsx)(G.Image,{color:s.primary})},iconColors:s,isAlert:!0})]})});N();var lp=ue(({theme:e,className:t})=>{let n={primary:e.vstui.color.primary.getShade(6),base:e.color.base.getShade(9)};return(0,K.jsx)(od,{className:t,taglineId:`workbook.flashcards.null.tagline`,stepsProps:{messageId:`workbook.flashcards.null.help`,steps:[{icon:(0,K.jsx)(bc,{colors:n}),textId:`workbook.flashcards.null.help.step1`},{icon:(0,K.jsx)(Qc,{colors:n}),textId:`workbook.flashcards.null.help.step2`},{icon:(0,K.jsx)(uc,{colors:n}),textId:`workbook.flashcards.null.help.step3`}]}})});N();var up={AddButton:P(U.IconButton)`
    margin-inline-start: 8px;
  `,BackButton:P(U.Button)`
    button {
      padding: 0 8px;
    }
    float: left;
  `,StudyButton:P(U.Button)``,DeckTitle:P.span`
    font-size: 1.6rem;
  `,FlashcardInfo:P(lp)`
    padding: 0 24px;
  `},dp=({meta:e})=>{let t=I(),{decks:n,setSelectedDeck:r,selectedDeck:i,decksLoadStatus:a,numDecks:o,error:s,initStatus:c}=uf(),{flashcards:l,flashcardsLoadStatus:u,error:d}=ep(),f=Fn(),{clearMetadata:m}=Sa(),h=(0,W.useRef)(null),_=!!i,[v,b]=(0,W.useState)(!1),[x,S]=(0,W.useState)(!1);(0,W.useEffect)(()=>{e&&e.local&&e.local.deckUUID?r(e.local.deckUUID):e&&e.local&&!e?.local.deckUUID&&b(!0)},[e,r]);let C=a===p.WAITING||a===p.FETCHING||!!i&&u===p.FETCHING;(0,W.useEffect)(()=>{i&&(e?.local.deckUUID===i.uuid?S(!0):S(!i.card_count))},[e,i]);let w=()=>{_&&h.current&&setTimeout(()=>j(h.current)[0]?.focus(),0)};return(0,K.jsx)(Ju,{isLoading:C,error:s||d,headerProps:i?{title:(0,K.jsx)(up.DeckTitle,{children:i.title}),controls:[(0,K.jsx)(up.StudyButton,{size:`small`,pill:!0,trustedLink:!0,label:t.formatMessage({id:`workbook.flashcards.studyDeck`}),href:`${y()}/flashcards/deck/${i.uuid}`,target:`study-tab-${f}`,"data-interaction-id":`workbook_flashcards_study`,children:t.formatMessage({id:`workbook.flashcards.study`})},`study-btn`),(0,K.jsx)(up.AddButton,{size:`small`,rounded:!0,buttonType:`enclosed`,solid:!0,label:t.formatMessage({id:`workbook.flashcards.addNewFlashcard`}),icon:(0,K.jsx)(G.Plus,{}),onClick:()=>S(!0)},`add-flashcard-btn`)],leftControls:(0,K.jsx)(up.BackButton,{size:`small`,naked:!0,label:t.formatMessage({id:`workbook.flashcards.backToDecks`}),iconStart:(0,K.jsx)(G.CaretLeftLarge,{}),onClick:e=>{e.stopPropagation(),r(null),b(!1),w(),m()}})}:{title:(0,K.jsx)(`span`,{children:t.formatMessage({id:`workbook.flashcards.decks.title`})}),controls:(0,K.jsx)(up.AddButton,{size:`small`,rounded:!0,buttonType:`enclosed`,solid:!0,icon:(0,K.jsx)(G.Plus,{}),label:t.formatMessage({id:`workbook.flashcards.addNewDeck`}),onClick:()=>{b(!0)}})},children:c===g.ERROR?(0,K.jsx)(De,{}):!o&&!v?(0,K.jsx)(up.FlashcardInfo,{}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(wf,{ulRef:h,hidden:_,data:n,showCreator:v,onRequestCloseCreator:()=>b(!1),onDeckClick:e=>{r(e)}}),(0,K.jsx)(cp,{hidden:!_,data:l,showCreator:x,meta:e,onRequestCloseCreator:()=>{S(!1),m()}})]})})};N();var fp=`workbook.tabs`,pp={Container:P.div`
    height: 100%;
  `};function mp({data:e}){let t=I(),n=d(),[r,i]=(0,W.useState)(0),o=Ka(),[s,c,l]=(0,W.useMemo)(()=>{let r=[],i=[],a=[],o={highlights:{content:(0,K.jsx)(Ld,{}),heading:t.formatMessage({id:`${fp}.annotations`}),enabled:n.getProp(`Highlights.enabled`)&&n.getProp(`Highlights.Workbook.enabled`),log:`workbook_annotations_show`},bookmarks:{content:(0,K.jsx)(Jd,{}),heading:t.formatMessage({id:`${fp}.bookmarks`}),enabled:n.getProp(`Bookmarks.enabled`),log:`workbook_bookmarks_show`},flashcards:{content:(0,K.jsx)(dp,{meta:e?.metaData}),heading:t.formatMessage({id:`${fp}.flashcards`}),enabled:n.getProp(`Flashcards.enabled`),log:`workbook_flashcards_show`}};return Object.entries(o).forEach(([e,t])=>{t.enabled&&(r.push({heading:t.heading,tabKey:`workbookTabKey-${e}`}),i.push({content:t.content,panelKey:`workbookPanelKey-${e}`}),a.push(t.log))}),[r,i,a]},[t,n,e]),u=(0,W.useCallback)(e=>{i(e),a(l[e])},[l]);return(0,W.useEffect)(()=>{e?.panelTab&&i(c.findIndex(t=>t?.panelKey===`workbookPanelKey-${e.panelTab}`)||0)},[e,i,c]),(0,K.jsx)(pp.Container,{children:(0,K.jsx)(U.Tabs,{panelStyle:`solidLine`,tabPadding:`large`,tabListPosition:c.length===3&&!o?`justified`:void 0,tabData:s,tabPanel:c,selectedIndex:r,onSelect:u})})}N();var hp={Container:P.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,WorkbookTitle:P.h2`
    font-size: 2.8rem;
    margin-bottom: 10px;
  `,HeadingContainer:P.div`
    padding: 24px 24px 0;
  `};function gp({data:e}){let t=I();return(0,K.jsxs)(hp.Container,{children:[(0,K.jsx)(hp.HeadingContainer,{children:(0,K.jsx)(hp.WorkbookTitle,{children:t.formatMessage({id:`workbook.workbookTitle`})})}),(0,K.jsx)(mp,{data:e})]})}var _p=function(e){return e.FLASHCARDS=`flashcards`,e.ANNOTATIONS=`annotations`,e.BOOKMARKS=`bookmarks`,e}({});N();var vp={PanelContent:P.div`
    height: 100%;
    position: relative;
  `},yp=ue(({data:e,theme:t})=>{let{closePanel:n,openPanel:r}=Sa(),{panelType:i,context:a}=xa(),{createFlashcard:o}=ep(),{decks:s,createDeck:c}=uf(),{loadEnrichmentStatus:l}=Eo(),u=I(),{showOnboarding:d,closeOnboarding:f}=Is(),{isEnabled:p}=gr(),m=(0,W.useRef)(new Set),h=i===q.ENRICHMENT;(0,W.useEffect)(()=>{h&&m.current.add(e.id)},[h,e.id]);let[g,_]=(0,W.useState)(i===q.ENRICHMENT);(0,W.useEffect)(()=>{i===q.ENRICHMENT?_(!0):i===null&&_(!1)},[i]);let v=g?e.id:null,y=Xe(v);(0,W.useEffect)(()=>{y&&y!==v&&qa(`enrichment_panel_closed`,{enrichmentId:y})},[v,y]);let b=(0,W.useRef)(l);b.current=l;let S=Xe(i!==null);return(0,W.useEffect)(()=>{i===null&&S&&m.current.size&&(b.current(Array.from(m.current)),m.current.clear())},[i,S]),(0,W.useEffect)(()=>{d&&f()},[f,d]),(0,K.jsx)(vp.PanelContent,{children:(0,K.jsx)(ve,{enrichmentId:e.id,locale:u.locale,questionIndex:e.questionIndex,questionIndexToken:e.selectionToken,autoFocusOnOpen:!1,active:g,createFlashcard:({deckId:e,front:t,back:n,relatedId:r})=>o({deckUUID:e,front:{content:t,type:x.TEXT},back:{content:n,type:x.TEXT}}).then(({payload:t})=>(qa(`enrichment_tutorial_flashcard_create`,{tutorialId:r,deckId:e,cardId:Object.keys(t.entities?.cards)[0]}),Promise.resolve(!0))).catch(()=>Promise.resolve(!1)),onRequestClose:n,onShowProgress:(e,t)=>{r(q.ENRICHMENT_PROGRESS,{enrichmentId:e,bookLocation:t,navigationToken:Date.now()},{opener:a?.opener??ba.ThreeDot})},onRevealAnswer:e=>{Ja(`enrichment_answer_revealed`,e)},onRetryQuestion:e=>{Ja(`enrichment_question_retried`,e)},onTutorRequested:p?({questionId:e,reason:t})=>{qa(`enrichment_tutor_requested`,{questionId:e,reason:t}),r(q.AI,void 0,{opener:ba.AI})}:void 0,reviewFlashcards:e=>{qa(`enrichment_tutorial_flashcard_review`,{tutorialId:e}),r(q.NOTEBOOK,{panelTab:_p.FLASHCARDS})},getFlashcardDecks:()=>s&&s.length?Promise.resolve({data:s,autoAdd:!1}):c({title:u.formatMessage({id:`checkpoint.flashcards.defaultDeckTitle`})}).then(({payload:e})=>({autoAdd:!0,data:Object.values(e.entities?.decks)}))})})});function bp(){return R(an)}function xp(e,{onActivate:t,onDeactivate:n}){let{panelType:r}=xa(),i=r===e,a=Xe(i),o=(0,W.useRef)({onActivate:t,onDeactivate:n});o.current={onActivate:t,onDeactivate:n},(0,W.useEffect)(()=>{i&&!a?o.current.onActivate?.():!i&&a&&o.current.onDeactivate?.(r===null?`closed`:`switched`)},[i,a,r])}N();var Sp={PanelContent:P.div`
    height: 100%;
    position: relative;
  `},Cp=ue(({data:e,theme:t})=>{let n=I(),{closePanel:r,openPanel:i}=Sa(),{goToCFI:a}=nt(),{loadStatus:o,cfiToPage:s}=Dr(),{bookInfo:{hasPageBreaks:c}}=ht(),l=bp(),{context:u,panelType:d}=xa(),f=(0,W.useCallback)(e=>c?s(e):``,[s,c]);return xp(q.ENRICHMENT_PROGRESS,{onDeactivate:e=>{e===`closed`&&qa(`enrichment_progress_panel_closed`)}}),(0,K.jsx)(Sp.PanelContent,{children:(0,K.jsx)(ge,{enrichmentId:e?.enrichmentId,locale:n.locale,bookLocation:e?.bookLocation,navigationToken:e?.navigationToken,cfiToPage:f,autoFocusOnOpen:!1,active:d===q.ENRICHMENT_PROGRESS,initialized:l===p.OK&&(o===p.OK||!c),hasError:l===p.ERROR||c&&o===p.ERROR,onClose:r,onSelectActivity:(e,t,n)=>{qa(`enrichment_progress_panel_launch_activity`,{enrichmentId:e,cfi:t,questionIndex:n}),a(t),i(q.ENRICHMENT,{id:e,questionIndex:n===-1?void 0:n,selectionToken:Date.now()},{opener:u?.opener??ba.ThreeDot})}})})}),wp=e=>{let t=ja[e];if(t)return{text:t.label,color:t.color,icon:t.icon}};N();var Tp={Container:P.div`
    padding: 24px;
    display: flex;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  `,Text:P.span`
    margin-left: 8px;
    font-size: 2.8rem;
  `,Icon:P.span`
    display: flex;
    margin-top: 2px;
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    ${({color:e})=>F`
        background-color: ${e};
      `};
  `},Ep=({icon:e,text:t,color:n})=>(0,K.jsxs)(Tp.Container,{children:[(0,K.jsx)(Tp.Icon,{color:n||``,children:e}),(0,K.jsx)(Tp.Text,{children:t})]});N();var Dp={Container:P.div`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,Content:P.div`
    height: 100%;
    overflow: hidden;
    padding: 8px;
  `},Op=({type:e,url:t,isLoading:n,iframeRef:r})=>{let i=(0,W.useRef)(null),a=wp(e);return(0,W.useEffect)(()=>{let e=i?.current?.parentElement;e&&(e.style.height=`100%`)},[]),(0,K.jsxs)(Dp.Container,{ref:i,children:[(0,K.jsx)(Ep,{...a}),(0,K.jsx)(Dp.Content,{children:n?(0,K.jsx)(ni,{}):(0,K.jsx)(`iframe`,{ref:r,title:a?.text??e,src:t,width:`100%`,height:`100%`})})]})};function kp(e){let{fetchIntegrationUrl:t,loadStatus:n}=Ua(e),{currentPageCfi:r}=nt(),[i,a]=(0,W.useState)(),o=(0,W.useCallback)(async()=>{let e=await t({cfi:r});a(e)},[t,r]);return{url:i,isLoading:m(n)===g.PENDING,loadUrl:o}}var Ap=Ye(Ze.GET_VISIBLE_TEXT),jp=()=>{let e=z();return(0,W.useCallback)(async()=>{let t=await e(Ap());return t.ok?t.data??``:``},[e])},Mp=2e4,Np=1e3,Pp=[Et.PAGE_READY,Et.PAGE_SCROLL,Et.PAGE_INNER_PAGE_CHANGE,Et.CONTENT_RESIZE],Fp=`When responding: Elsevier Support handles questions this chat cannot resolve — login or access issues, billing, and technical problems. Support is reachable at <a href="https://service.elsevier.com/app/contact/supporthub/evolve/" target="_blank" rel="noopener noreferrer">Evolve Support Center</a> or by phone at <a href="tel:+18002229570">+1 800 222 9570</a> (toll free for US and Canadian customers)`,Ip=`toc_breadcrumb`,Lp=`page_number`,Rp=`visible_text`,zp=`support_instructions`,Bp=(e,t)=>t?`<${e}>${t}</${e}>`:``,Vp=Bp(Rp,`x`).length-1,Hp=({breadcrumb:e,page:t},n)=>{let r=Bp(Ip,e)+Bp(Lp,t),i=Bp(zp,Fp),a=Mp-r.length-i.length-Vp;return r+Bp(Rp,n.slice(0,Math.max(a,0)))+i},Up=()=>{let e=z(),t=R(yt),n=R(st),{bookInfo:r}=ht(),i=jp(),[a,o]=(0,W.useState)(``);(0,W.useEffect)(()=>{e(Xr())},[e]);let s=Io(async()=>{let e=t.join(` > `),a=r?.hasPageBreaks?n:``;o(Hp({breadcrumb:e,page:a},await i()))},Np);return vt(Pp,s),(0,W.useEffect)(()=>{s()},[s]),a};function Wp(e,t){let n=Up(),[r,i]=(0,W.useState)(!1),a=(0,W.useMemo)(()=>{try{return t?new URL(t).origin:null}catch{return null}},[t]);(0,W.useEffect)(()=>{i(!1);let t=t=>{t.source===e.current?.contentWindow&&t.origin===a&&t.data?.type===`SHERPATH_AI_IFRAME_READY`&&i(!0)};return window.addEventListener(`message`,t),()=>window.removeEventListener(`message`,t)},[e,a]),(0,W.useEffect)(()=>{let t=e.current?.contentWindow;r&&n&&t&&a&&t.postMessage({type:`SHERPATH_AI_PAGE_CONTEXT_UPDATE`,pageContext:n},a)},[r,n,a,e])}function Gp(e,t){let n=(0,W.useRef)(!1),r=Ln(e);(0,W.useEffect)(()=>{if(n.current)return r.current();n.current=!0},[...t,r])}var Kp=({type:e})=>{let{url:t,isLoading:n,loadUrl:r}=kp(e),i=(0,W.useRef)(null),a=(0,W.useRef)(!1),o=Ka(),{closePanel:s}=Sa();return Wp(i,t),(0,W.useEffect)(()=>{a.current||(a.current=!0,r())},[r]),Gp(()=>{s()},[o]),(0,K.jsx)(Op,{type:e,url:t,isLoading:n,iframeRef:i})},qp=({type:e})=>{let{url:t,isLoading:n,loadUrl:r}=kp(e);return(0,W.useEffect)(()=>{r()},[r]),(0,K.jsx)(Op,{type:e,url:t,isLoading:n})},Jp={[wa.NORA]:Kp},Yp=({data:e})=>{let t=Jp[e.type]??qp;return(0,K.jsx)(t,{type:e.type})};N();var Xp={Container:P.div`
    border-radius: 4px;
    border: 1px solid var(--vst-frost-3);
    background: var(--vst-frost-1);
    padding-inline: 16px;
    padding-block: 8px;
    line-height: 2.2rem;
  `,TruncateContainer:P.div`
    border-radius: 2px;

    &:focus-visible {
      outline: 2px solid var(--vst-theme-main);
      outline-offset: 2px;
    }
  `};function Zp({children:e}){let[t,n]=(0,W.useState)(!1),[r,i]=(0,W.useState)(!1),a=(0,W.useRef)(null);return(0,W.useEffect)(()=>{r&&se(a.current)},[r]),(0,K.jsxs)(Xp.Container,{children:[(0,K.jsx)(Xp.TruncateContainer,{ref:a,children:(0,K.jsx)(hd,{lines:4,showFullText:r,onTruncate:n,children:e})}),t&&(0,K.jsx)(Na,{className:Ot(`vst-link`,`vst-link-option-no-underline`),"aria-expanded":r,onClick:()=>i(e=>!e),children:r?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(w,{id:`base.less`}),(0,K.jsx)(G.CaretUpSmall,{})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(w,{id:`base.more`}),(0,K.jsx)(G.CaretDownSmall,{})]})})]})}var Qp=[],$p=`9781319286453.9781319322359.9781319339173.9781319357955.9781319365011.9781319377649.9781319387341.9781319417451.9781319419776.9781319419981.9781319429904.9781319432096.9781319433826.9781319440947.9781319441975.9781319452650.9781319458850.9781319458867.9781319458980.9781319458997.9781319469849.9781319480707.9781319496470.9781319503215.9781319513894.9781319513900.9781319543228.9781319553128.9781319567712.9781319569464.9781319571634.9781319575113.9781319576974.9781319579289.9781319595449.9781319595517.9781319607340.9781319615994.9781319616007.9781319616014.9781319618513.9781319628307.9781319576882.9781319602789.9781319535872.9781319607357.9781319496845`.split(`.`);function em(){return er()?$p:Qp}var tm=1500;function nm(){let e=d().getProp(`Translate.enabled`),{bookInfo:t}=ht(),n=e&&em().includes(t.isbn),r=z(),i=(0,W.useCallback)((e,t,n,i)=>r(Kn({text:e,language:t,cfiRange:n,surroundingText:i})),[r]);return(0,W.useMemo)(()=>({isTranslateEnabled:n,translateText:i}),[n,i])}N();var rm={Button:P.button`
    text-decoration: underline;
    font-size: 1.4rem;
    font-weight: 500;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 2rem;
    padding-inline: 18px;
    padding-block: 0;

    &:focus {
      outline-offset: 2px;
      outline: 2px solid white;
    }

    ${e=>e.buttonTheme==="default"&&F`
        color: ${H.frost.getShade(7)};

        svg {
          color: ${Pe(7)};
        }

        &:active {
          color: ${H.frost.getShade(7)};
        }

        &:focus {
          outline-color: ${H.frost.getShade(7)};
        }
      `}
  `};function im({theme:e,className:t,onClick:n}){return(0,K.jsxs)(rm.Button,{onClick:n,buttonTheme:e,className:t,children:[(0,K.jsx)(Ec,{}),(0,K.jsx)(w,{id:`ai.responsibility`})]})}function am({open:e,onRequestClose:t,sourceLanguage:n,translationLanguage:r,closeOnContinue:i}){let a=I(),{setVal:o}=cr(pr.TRANSLATE_LANGUAGE),s=(0,W.useRef)(),c=new Intl.Collator(a.locale,{sensitivity:`base`});return(0,K.jsxs)(Mt,{type:bt.Vstui,open:e,onRequestClose:t,title:a.formatMessage({id:`translate.translateSelected`}),primaryActionButton:{label:a.formatMessage({id:`base.continue`}),onClick:()=>{s.current&&o(s.current.value),i&&t()}},secondaryActionButton:{label:a.formatMessage({id:`base.cancel`}),onClick:t},children:[(0,K.jsx)(U.Select,{label:a.formatMessage({id:`translate.translateFrom`}),disabled:!0,fullWidth:!0,children:(0,K.jsx)(`option`,{value:n,children:a.formatMessage({id:`translate.langDetected`},{lang:a.formatMessage({id:`lang.${n}`})})})}),(0,K.jsx)(U.Select,{label:a.formatMessage({id:`translate.translateTo`}),fullWidth:!0,defaultValue:r||a.locale,nativeFormControlRef:e=>s.current=e,children:[...Object.keys(D),`af-ZA`,`sk-SK`,`xh-ZA`,`zu-ZA`].map(e=>({id:e,name:a.formatMessage({id:`lang.${e}`})})).sort((e,t)=>c.compare(e.name,t.name)).map(e=>(0,K.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})}function om({fill:e}){let t=k();return(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:e??`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,K.jsx)(`g`,{clipPath:`url(#${t})`,children:(0,K.jsx)(`path`,{d:`M5.83317 9.16699L9.1665 1.66699C9.82954 1.66699 10.4654 1.93038 10.9343 2.39923C11.4031 2.86807 11.6665 3.50395 11.6665 4.16699V7.50032H16.3832C16.6248 7.49759 16.8641 7.54741 17.0845 7.64634C17.3049 7.74527 17.5012 7.89094 17.6597 8.07325C17.8183 8.25557 17.9353 8.47018 18.0026 8.7022C18.07 8.93423 18.0861 9.17812 18.0498 9.41699L16.8998 16.917C16.8396 17.3144 16.6377 17.6767 16.3314 17.937C16.0252 18.1973 15.6351 18.3382 15.2332 18.3337H5.83317M5.83317 9.16699V18.3337M5.83317 9.16699H3.33317C2.89114 9.16699 2.46722 9.34259 2.15466 9.65515C1.8421 9.96771 1.6665 10.3916 1.6665 10.8337V16.667C1.6665 17.109 1.8421 17.5329 2.15466 17.8455C2.46722 18.1581 2.89114 18.3337 3.33317 18.3337H5.83317`,stroke:`currentColor`,strokeWidth:`1.66667`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,K.jsx)(`defs`,{children:(0,K.jsx)(`clipPath`,{id:t,children:(0,K.jsx)(`rect`,{width:`20`,height:`20`,fill:`white`})})})]})}function sm({fill:e}){let t=k();return(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:e??`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,K.jsx)(`g`,{clipPath:`url(#${t})`,children:(0,K.jsx)(`path`,{d:`M14.1667 10.833L10.8334 18.333C10.1703 18.333 9.53443 18.0696 9.06559 17.6008C8.59675 17.1319 8.33336 16.496 8.33336 15.833V12.4996H3.61669C3.3751 12.5024 3.13581 12.4526 2.91538 12.3536C2.69496 12.2547 2.49868 12.109 2.34014 11.9267C2.18161 11.7444 2.0646 11.5298 1.99724 11.2978C1.92988 11.0657 1.91377 10.8219 1.95003 10.583L3.10003 3.08298C3.16029 2.68556 3.36216 2.32331 3.66844 2.06298C3.97471 1.80265 4.36475 1.66177 4.76669 1.66632H14.1667M14.1667 10.833V1.66632M14.1667 10.833H16.3917C16.8633 10.8413 17.3216 10.6762 17.6795 10.369C18.0375 10.0617 18.2701 9.63377 18.3334 9.16632V3.33298C18.2701 2.86553 18.0375 2.43757 17.6795 2.13033C17.3216 1.8231 16.8633 1.65798 16.3917 1.66632H14.1667`,stroke:`currentColor`,strokeWidth:`1.66667`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,K.jsx)(`defs`,{children:(0,K.jsx)(`clipPath`,{id:t,children:(0,K.jsx)(`rect`,{width:`20`,height:`20`,fill:`white`})})})]})}function cm(){return(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,K.jsx)(`path`,{d:`M10 2H8V7.17L3.83 5.17L2.83 6.83L7 8.83L2.83 10.83L3.83 12.49L8 10.49V16H10V10.49L14.17 12.49L15.17 10.83L11 8.83L15.17 6.83L14.17 5.17L10 7.17V2Z`,fill:`currentColor`})})}function lm(){let e=$e(),t=(0,W.useCallback)(t=>{e(lr(t))},[e]),n=(0,W.useCallback)(t=>{e(Wn(t))},[e]);return(0,W.useMemo)(()=>({logThumbs:t,logGeneralFeedback:n}),[t,n])}N();var um={Container:P.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-block: 10px;
    gap: 2px;

    & > * {
      margin-inline: -0.2rem;
    }
  `,TextField:P(U.TextField)`
    /* zero out the big margin but make sure the focus outline is visible */
    margin-bottom: 1px;
  `};function dm({isSelected:e,theme:t,icon:n,...r}){return(0,K.jsx)(U.IconButton,{...r,size:`small`,rounded:!0,color:`custom`,customIconColor:e?t.vstui.color.primary.getShade(6):H.frost.getShade(6),"aria-pressed":e,icon:e?W.cloneElement(n,{fill:t.vstui.color.primary.getShade(7)}):n})}var fm=ue(dm);function pm({traceId:e,requestId:t}){let n=I(),[r,i]=W.useState(!1),[a,o]=W.useState(-1),{logThumbs:s}=lm(),c=(0,W.useRef)(),l=(0,W.useCallback)(()=>{a!==-1&&s({traceId:e,value:a,comment:c.current.value,requestId:t}),i(!1)},[a,s,e,t]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(um.Container,{children:[(0,K.jsx)(fm,{isSelected:a===1,icon:(0,K.jsx)(om,{}),onClick:()=>{o(1),i(!0)},label:n.formatMessage({id:`ai.thumbsUp`})}),(0,K.jsx)(fm,{isSelected:a===0,icon:(0,K.jsx)(sm,{}),onClick:()=>{o(0),i(!0)},label:n.formatMessage({id:`ai.thumbsDown`})})]}),(0,K.jsx)(Mt,{open:r,type:bt.Vstui,title:n.formatMessage({id:`translate.thumbsDialogTitle`}),size:`large`,onRequestClose:()=>{c.current.value=``,l()},primaryActionButton:{label:n.formatMessage({id:`base.submit`}),onClick:l},children:(0,K.jsx)(um.TextField,{nativeFormControlRef:e=>c.current=e,label:n.formatMessage({id:`translate.thumbsDialogInputLabel`}),lines:4,multiline:!0,fullWidth:!0})})]})}function mm(e){let t=(0,W.useRef)();(0,W.useEffect)(()=>{function n(){t.current&&(t.current.style.display=``)}if(e){let e=document.querySelector(`[aria-modal='true'][role='dialog']:not([aria-hidden='true'])`);e&&(t.current=e,e.style.display=`none`)}else n();return()=>{n()}},[e])}N();var hm={SectionHeader:P.h3`
    font-weight: 700;
  `,Section:P.div`
    margin-block: 24px;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      /* make sure focus outline is visible */
      margin-bottom: 2px;
    }
    a,
    a:visited,
    a:active,
    button,
    button:active {
      color: ${L(6)};
      text-decoration: underline;
      border-radius: 4px;
      font-weight: 500;
    }

    a:focus,
    button:focus {
      outline-offset: 2px;
      outline: 2px solid ${L(6)};
    }
  `,TextField:P(U.TextField)`
    margin-bottom: 1px;
  `},gm=P.div`
  ${hm.Section} a, button {
    color: var(--vst-ai-4);

    &:focus {
      outline-color: var(--vst-ai-4);
    }
  }
`;function _m({header:e,body:t}){return(0,K.jsxs)(hm.Section,{children:[(0,K.jsx)(hm.SectionHeader,{children:e}),(0,K.jsx)(`div`,{children:t})]})}var vm=()=>(0,K.jsx)(_m,{header:(0,K.jsx)(w,{id:`ai.responsibilityDialog.section1.title`}),body:(0,K.jsx)(w,{id:`ai.responsibilityDialog.section1.body`,values:{a:e=>(0,K.jsx)(`a`,{rel:`noopener noreferrer`,target:`_blank`,href:`https://get.vitalsource.com/ai-principles`,children:e})}})}),ym=()=>(0,K.jsx)(_m,{header:(0,K.jsx)(w,{id:`ai.responsibilityDialog.section2.title`}),body:(0,K.jsx)(w,{id:`ai.responsibilityDialog.section2.body`})}),bm=()=>{let e=I();return(0,K.jsx)(_m,{header:(0,K.jsx)(w,{id:`ai.responsibilityDialog.section3.title`}),body:(0,K.jsx)(w,{id:`ai.responsibilityDialog.section3.body`,values:{a:t=>(0,K.jsx)(`a`,{rel:`noopener noreferrer`,target:`_blank`,href:e.formatMessage({id:`myAccount.privacyPolicy.url`}),children:t})}})})};N();var xm={TextField:P(U.TextField)`
    margin-bottom: 1px;
  `},Sm=({onSubmitted:e,traceId:t,requestId:n})=>{let r=I(),[i,a]=(0,W.useState)(!1),o=(0,W.useRef)(),{logGeneralFeedback:s}=lm();return mm(i),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(_m,{header:(0,K.jsx)(w,{id:`ai.responsibilityDialog.section4.title`}),body:(0,K.jsx)(w,{id:`ai.responsibilityDialog.section4.body`,values:{button:e=>(0,K.jsx)(`button`,{type:`button`,onClick:()=>a(!0),children:e})}})}),(0,K.jsx)(Mt,{size:`large`,open:i,type:bt.Vstui,title:r.formatMessage({id:`translate.feedbackDialogTitle`}),onRequestClose:()=>a(!1),primaryActionButton:{label:r.formatMessage({id:`base.submit`}),onClick:()=>{o.current&&o.current.value&&s({comment:o.current.value,traceId:t,requestId:n}),a(!1),e()}},children:(0,K.jsx)(xm.TextField,{nativeFormControlRef:e=>o.current=e,label:r.formatMessage({id:`translate.feedbackDialogInputLabel`}),lines:4,multiline:!0,fullWidth:!0})})]})};function Cm({traceId:e,open:t,onRequestClose:n,requestId:r}){let i=I();return(0,K.jsxs)(Mt,{open:t,onRequestClose:n,type:bt.Vstui,size:`large`,primaryActionButton:{label:i.formatMessage({id:`base.gotIt`}),onClick:n},title:i.formatMessage({id:`ai.responsibilityDialog.title`}),children:[(0,K.jsx)(vm,{}),(0,K.jsx)(ym,{}),(0,K.jsx)(Sm,{onSubmitted:n,traceId:e,requestId:r})]})}N();var wm=P.div`
  padding: 16px 24px;
  padding-block: 16px;
  padding-inline-start: 58px;
  padding-inline-end: 24px;
  border-radius: 4px;
  background: ${e=>e.type===`warning`?H.cheddar.getShade(1):H.red.getShade(1)};
  line-height: 1.5;
  position: relative;

  & > svg:first-child {
    position: absolute;
    top: calc(16px + 0.5lh);
    inset-inline-start: 24px;
    transform: translateY(-50%);
  }
`;function Tm({children:e,type:t=`error`,className:n}){return(0,K.jsxs)(wm,{type:t,className:n,children:[{error:(0,K.jsx)(G.ExclamationCircle,{}),warning:(0,K.jsx)(G.MiscWarning,{})}[t],e]})}N();var Em={HeaderSection:P.div`
    padding: 24px 24px 12px 24px;
    border-bottom: 1px solid ${H.frost.getShade(3)};
  `,HeaderText:P.h2`
    font-size: 2.8rem;
  `,AIButton:P(im)`
    float: inline-end;
    margin-inline-start: 8px;
    margin-top: -6px;
  `,BodySection:P.div`
    margin: 24px;
  `,SectionHeader:P.h3`
    font-weight: 500;
    margin-top: 24px;
    margin-bottom: 8px;
  `,SectionSubheader:P.div`
    font-weight: 300;
    color: ${H.frost.getShade(7)};
    margin-bottom: 8px;
    margin-top: -6px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      margin-block: -3rem;
      position: relative;
      top: 0.2rem;
    }

    &:has(button) {
      justify-content: flex-start;
    }
  `,CharacterCount:P.span`
    font-size: 1.4rem;
  `,Translation:P.div`
    border-top: 1px solid ${H.frost.getShade(3)};
    padding-top: 8px;
    line-height: 2.2rem;
  `,Footnote:P.div`
    border-top: 1px solid ${H.frost.getShade(3)};
    font-size: 1rem;
    color: ${H.cloud.getShade(7)};
    padding-top: 8px;
    margin-top: 8px;
  `,Error:P.div`
    margin-block: 16px;
  `,WarningBox:P(Tm)`
    margin-bottom: 16px;
  `};function Dm(){return(0,K.jsx)(Em.SectionHeader,{children:(0,K.jsx)(w,{id:`translate.translated`})})}function Om({translationResponse:e,setLanguageDialogOpen:t}){let n=I();return e?!e.ok||e.data.outcome===`error`?(0,K.jsx)(Em.Error,{children:(0,K.jsx)(w,{id:`base.error`})}):e.data.outcome===`blocked`?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Dm,{}),(0,K.jsx)(Em.Translation,{children:(0,K.jsx)(Tm,{children:(0,K.jsx)(w,{id:`translate.notAvailable`})})})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Dm,{}),(0,K.jsxs)(Em.SectionSubheader,{children:[(0,K.jsx)(w,{tagName:`span`,id:`lang.${e.data.targetLanguage}`}),(0,K.jsx)(U.IconButton,{rounded:!0,size:`small`,icon:(0,K.jsx)(G.Edit,{}),label:n.formatMessage({id:`translate.changeLanguage`}),onClick:()=>t(!0)})]}),(0,K.jsxs)(Em.Translation,{children:[e.data.outcome===`partial`&&(0,K.jsx)(Em.WarningBox,{type:`warning`,children:(0,K.jsx)(w,{id:`translate.partialNotAvailable`})}),(0,K.jsx)(`div`,{lang:e.data.targetLanguage,dir:A(e.data.targetLanguage),children:e.data.translatedText})]}),(0,K.jsx)(pm,{traceId:e.data.traceId,requestId:e.data.requestId}),(0,K.jsx)(Em.Footnote,{children:(0,K.jsx)(w,{id:`translate.disclaimer`})})]}):(0,K.jsx)(ni,{size:8})}function km({data:e}){let{translateText:t}=nm(),[n,r]=(0,W.useState)(null),i=I(),{currentVal:a}=cr(pr.TRANSLATE_LANGUAGE),[o,s]=(0,W.useState)(!1),c=(0,W.useRef)(null),[l,u]=(0,W.useState)(!1);return(0,W.useEffect)(()=>{r(null),c.current?.closest(`[tabindex='-1']`)?.focus(),t(e.selectedText,a,e.cfiRange,e.surroundingText).then(e=>{r(e)})},[e.selectedText,e.cfiRange,e.surroundingText,t,a]),(0,K.jsxs)(`div`,{ref:c,children:[(0,K.jsxs)(Em.HeaderSection,{children:[(0,K.jsx)(Em.AIButton,{theme:`default`,onClick:()=>u(!0)}),(0,K.jsx)(Em.HeaderText,{children:(0,K.jsx)(w,{id:`translate.translate`})})]}),(0,K.jsxs)(Em.BodySection,{children:[(0,K.jsx)(Em.SectionHeader,{children:(0,K.jsx)(w,{id:`translate.original`})}),n&&n.ok&&n.data.sourceLanguage&&(0,K.jsxs)(Em.SectionSubheader,{children:[(0,K.jsx)(w,{tagName:`span`,id:`translate.langDetected`,values:{lang:i.formatMessage({id:`lang.${n.data.sourceLanguage}`})}}),(0,K.jsxs)(Em.CharacterCount,{children:[e.selectedText.length,`/`,1500]})]}),(0,K.jsx)(Zp,{children:e.selectedText},e.selectedText),(0,K.jsx)(Om,{translationResponse:n,setLanguageDialogOpen:s})]}),(0,K.jsx)(am,{sourceLanguage:n?.data?.sourceLanguage||`en`,translationLanguage:n?.data?.targetLanguage,open:o,onRequestClose:()=>s(!1),closeOnContinue:!0}),(0,K.jsx)(Cm,{open:l,onRequestClose:()=>u(!1),traceId:n?.data?.traceId,requestId:n?.data?.requestId})]})}function Am(){let e=z(),t=R(cn),{currentVal:n}=cr(pr.COACH_ME_DISABLED),{isCoachMeDeactivated:r}=na(),i=!!d().getProp(`CoachMe.enabled`)&&!n&&!r,a=R(un),o=R(mn),s=R($t),c=(0,W.useCallback)(t=>{e(Rn(t,i))},[e,i]),l=(0,W.useCallback)(t=>{e(Rn(t.question,i))},[e,i]),u=(0,W.useCallback)(()=>{e(Jn())},[e]);return(0,W.useMemo)(()=>({ask:c,chatLog:t,newChat:u,retry:l,isLoadingChat:a,lastChatInteraction:o,chatSessionId:s}),[c,t,u,l,a,o,s])}function jm(){let e=z(),{clearMetadata:t}=Sa(),n=R(bn),r=(0,W.useRef)(),i=R(Vt),a=R(Or),o=(0,W.useCallback)(()=>{e(kr())},[e]),s=(0,W.useCallback)((t,n=!1)=>{n&&o();let i=new AbortController;r.current=i,e(In({signal:i.signal},{...t,action:Tr.REPHRASE}))},[e,o]),c=(0,W.useCallback)(()=>{let t=new AbortController;r.current=t,e(In({signal:t.signal},{action:Tr.SIMPLIFY_AGAIN}))},[e]),l=(0,W.useCallback)(()=>{let t=new AbortController;r.current=t,e(In({signal:t.signal},{action:Tr.SAY_IT_BACK_REMINDER}))},[e]),u=(0,W.useCallback)(t=>{let n=new AbortController;r.current=n,e(In({signal:n.signal},{...t,action:Tr.SAY_IT_BACK}))},[e]),d=(0,W.useCallback)(()=>{r.current?.abort()},[]),f=(0,W.useCallback)(()=>{d(),o(),t()},[d,o,t]);return(0,W.useMemo)(()=>({simplify:s,simplifyAgain:c,startSayItBack:l,sayItBack:u,simplifyLogs:n,simplifySessionId:i,isLoadingSimplify:a,endSimplify:f}),[s,c,l,u,n,i,a,f])}function Mm(e){return e.personalization.data}function Nm(e){return e.personalization.status}var Pm=Qe(gt.AI_GET_PERSONALIZATION),Fm=Qe(gt.AI_SAVE_PERSONALIZATION),Im=Qe(gt.AI_DELETE_PERSONALIZATION);function Lm(){return(e,t)=>e(Pm(at(t())))}function Rm(){return(e,t)=>{if(Nm(t())===p.WAITING)return e(Lm())}}function zm(e){return(t,n)=>t(Fm(at(n()),e))}function Bm(){return(e,t)=>e(Im(at(t())))}function Vm(){let e=z(),t=R(Mm),n=R(Nm);(0,W.useEffect)(()=>{e(Rm())},[e]);let r=(0,W.useCallback)(t=>{e(zm(t))},[e]),i=(0,W.useCallback)(()=>{e(Bm())},[e]);return(0,W.useMemo)(()=>({personalization:t,isLoading:n===p.WAITING||n===p.FETCHING,savePersonalization:r,resetPersonalization:i}),[t,n,r,i])}function Hm(){let{resetPersonalization:e}=Vm(),{currentVal:t,setVal:n,removeVal:r}=cr(pr.AI_ONBOARDING_COMPLETED),i=(0,W.useCallback)(()=>{n(e=>({name:e?.name,completedAt:new Date().toISOString()}))},[n]),a=(0,W.useCallback)(e=>{e&&n(t=>({...t,name:e.trim()}))},[n]),o=(0,W.useCallback)(()=>{e(),r()},[e,r]);return(0,W.useMemo)(()=>({markComplete:i,isComplete:!!t,updateName:a,reset:o,currentName:t?.name,completedAt:t?.completedAt}),[t,i,a,o])}var Um=`ai-onboarding`;function Wm(){let{updateName:e,currentName:t,completedAt:n}=Hm(),r=I(),i=(0,W.useMemo)(()=>n?{id:Um,agenticInterface:`supernova-internal-onboarding`,summary:t||r.formatMessage({id:`ai.onboarding.chatName`}),createdAt:n,updatedAt:n}:null,[t,n,r]);return(0,W.useMemo)(()=>({onboardingChatEntry:i,updateName:e}),[i,e])}function Gm(){let{value:e,setValue:t}=xt(Ct.AI_ONBOARDING_REPLAY),{newChat:n}=Am(),r=(0,W.useCallback)(()=>{t(!0),n()},[t,n]),i=(0,W.useCallback)(()=>{t(!1)},[t]);return(0,W.useMemo)(()=>({isReplaying:!!e,startReplay:r,endReplay:i}),[e,r,i])}function Km(){let{value:e,setValue:t}=xt(Ct.AI_MODE),n=e||Gt.ASK_YOUR_BOOK;return{currentMode:n,setCurrentMode:(0,W.useCallback)(e=>{n!==e&&t(e)},[n,t])}}function qm(){let e=z(),t=R(on),n=R(Qn),r=R($t),i=R(qt),{simplifySessionId:a,endSimplify:o}=jm(),{newChat:s,chatSessionId:c}=Am(),{onboardingChatEntry:l,updateName:u}=Wm(),{reset:d}=Hm(),{startReplay:f}=Gm(),{currentMode:m,setCurrentMode:h}=Km(),g=a||c,_=(0,W.useMemo)(()=>[...l?[...t,l]:t].sort((e,t)=>new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),[t,l]),v=(0,W.useCallback)(()=>{m===Gt.SIMPLIFY?o():m===Gt.ASK_YOUR_BOOK&&s()},[m,o,s]),y=(0,W.useCallback)(()=>{n===p.WAITING&&e(Sr())},[e,n]);W.useEffect(()=>{y()},[y]);let b=(0,W.useCallback)((t,n)=>{if(t!==g){if(v(),h(n||Gt.ASK_YOUR_BOOK),t===l?.id)f();else return e(Bn(t))}},[e,g,v,h,l,f]),x=(0,W.useCallback)(t=>{if(t!==l?.id)return t===g&&(v(),h(Gt.ASK_YOUR_BOOK)),e(rr(t));d()},[e,g,v,h,l,d]),S=(0,W.useCallback)((t,n)=>{if(t===l?.id)return u(n);let r=n?.trim();return e(ar(t,r))},[e,l,u]),C=(0,W.useCallback)(()=>{e(Sr())},[e]);return(0,W.useMemo)(()=>({allChats:_,activeSessionId:g,currentChatId:r,pendingDeleteIds:i,loadConversation:b,deleteConversation:x,renameConversation:S,fetchHistory:y,refreshHistory:C,isLoading:n===p.WAITING||n===p.FETCHING}),[_,g,r,i,b,x,S,y,C,n])}N();var Jm={Container:P.div`
    flex: 1;
    display: flex;
    gap: 8px;
    align-items: flex-start;
    margin-top: 2px;
  `,Input:P.input`
    flex: 1;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${H.cloud.getShade(10)};
    line-height: 1.6;
    padding: 0.525rem 1.5rem;
    border: 2px solid ${H.cloud.getShade(10)};
    border-radius: 4px;
    background: white;
    width: 0;

    &:focus {
      outline: 2px solid var(--vst-ai-6);
      outline-offset: 2px;
    }
  `,ActionButton:P(U.IconButton)`
    & button {
      background-color: var(--vst-ai-6) !important;
      border-radius: 4px;
      color: white;
      border: none;

      &:focus {
        outline: 2px solid var(--vst-ai-6);
        outline-offset: 2px;
      }
    }
  `};function Ym({initialTitle:e,onSave:t,onCancel:n}){let r=I(),i=(0,W.useRef)(null),[a,o]=(0,W.useState)(e);(0,W.useEffect)(()=>{i.current&&(i.current.focus(),i.current.select())},[]);let s=(0,W.useCallback)(()=>{let e=a.trim();t(e.length===0?null:e)},[a,t]),c=(0,W.useCallback)(e=>{e.key===`Enter`?(e.preventDefault(),s()):e.key===`Escape`&&n()},[s,n]);return(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(Jm.Container,{onClick:e=>e.stopPropagation(),children:[(0,K.jsx)(Jm.Input,{ref:i,value:a,onChange:e=>{o(e.target.value)},onKeyDown:c,placeholder:r.formatMessage({id:`ai.chatHistory.untitled`}),"aria-label":r.formatMessage({id:`ai.chatHistory.editTitle`}),id:`chat-history-title-input`}),(0,K.jsx)(Jm.ActionButton,{icon:(0,K.jsx)(G.Checkmark,{}),size:`medium`,color:`custom`,customIconColor:`white`,onClick:s,"aria-label":r.formatMessage({id:`base.save`}),label:r.formatMessage({id:`base.save`})}),(0,K.jsx)(Jm.ActionButton,{icon:(0,K.jsx)(G.XSmall,{}),size:`medium`,color:`custom`,customIconColor:`white`,onClick:n,"aria-label":r.formatMessage({id:`base.cancel`}),label:r.formatMessage({id:`base.cancel`})})]})})}function Xm({updatedAt:e}){let t=I(),n=(0,W.useMemo)(()=>{let n=new Date(e),r=new Date,i=n.toDateString()===r.toDateString(),a=new Date(r);a.setDate(a.getDate()-1);let o=n.toDateString()===a.toDateString(),s=n.getFullYear()===r.getFullYear(),c=t.formatTime(n,{hour:`numeric`,minute:`2-digit`});return i?t.formatMessage({id:`ai.chatHistory.today`},{time:c}):o?t.formatMessage({id:`ai.chatHistory.yesterday`},{time:c}):`${t.formatDate(n,{month:`long`,day:`numeric`,year:s?void 0:`numeric`})}, ${c}`},[e,t]);return(0,K.jsx)(K.Fragment,{children:n})}N();var Zm={Container:P.div`
    width: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.15s ease;

    &:hover {
      /* stylelint-disable-next-line color-no-hex */
      background-color: #ebf3fe;
    }
  `,Content:P.button`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border: none;
    background: transparent;
    text-align: start;
    cursor: pointer;
    padding: 0 4px;

    &:focus {
      outline: 2px solid var(--vst-ai-6);
      outline-offset: 2px;
    }
  `,Header:P.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,Title:P.div`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${H.cloud.getShade(10)};
    line-height: 1.6;
    overflow-wrap: anywhere;
    flex: 1;
    text-align: start;
  `,Actions:P.div`
    display: flex;
    flex-shrink: 0;
    gap: 0.5rem;
  `,ActionButton:P(U.IconButton)`
    button {
      background: transparent;
      color: ${H.cloud.getShade(7)};
      border: none;
      transform: none !important;

      &:focus {
        outline: 2px solid var(--vst-ai-6);
        outline-offset: 2px;
      }
    }
  `,Timestamp:P.div`
    font-size: 1.4rem;
    color: ${H.cloud.getShade(7)};
    line-height: 1.4;
    font-weight: 300;
  `,EditorWrapper:P.div`
    flex: 1;
    padding: 0 4px;
  `};function Qm({conversation:e,isEditing:t,onLoad:n,onEdit:r,onSave:i,onCancelEdit:a,onDelete:o}){let s=I(),c=(0,W.useRef)(null),l=(0,W.useRef)(t);(0,W.useEffect)(()=>{l.current&&!t&&(c.current?.querySelector(`button`))?.focus(),l.current=t},[t]);let u=e.summary||s.formatMessage({id:`ai.chatHistory.untitled`});return(0,K.jsx)(Zm.Container,{children:t?(0,K.jsxs)(Zm.EditorWrapper,{children:[(0,K.jsx)(Zm.Header,{children:(0,K.jsx)(Zm.Title,{children:u})}),(0,K.jsx)(Ym,{initialTitle:e.summary||``,onSave:t=>{i(e.id,t)},onCancel:a})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Zm.Content,{"data-chat-item-button":!0,onClick:()=>{t||n(e.id,e.mode)},"aria-label":s.formatMessage({id:`ai.chatHistory.loadChat`},{title:u}),children:(0,K.jsxs)(Zm.Header,{children:[(0,K.jsx)(Zm.Title,{children:u}),(0,K.jsx)(Zm.Timestamp,{children:(0,K.jsx)(Xm,{updatedAt:e.updatedAt})})]})}),(0,K.jsxs)(Zm.Actions,{children:[(0,K.jsx)(`div`,{ref:c,children:(0,K.jsx)(Zm.ActionButton,{icon:(0,K.jsx)(G.Edit,{}),size:`small`,rounded:!0,color:`custom`,customIconColor:H.cloud.getShade(7),onClick:()=>{r(e.id)},"aria-label":s.formatMessage({id:`ai.chatHistory.renameChat`},{title:u}),label:s.formatMessage({id:`ai.chatHistory.renameChat`},{title:u})})}),(0,K.jsx)(`div`,{"data-chat-delete-button":!0,children:(0,K.jsx)(Zm.ActionButton,{icon:(0,K.jsx)(G.Delete,{}),size:`small`,rounded:!0,color:`custom`,customIconColor:H.cloud.getShade(7),onClick:()=>{o(e.id,u)},"aria-label":s.formatMessage({id:`ai.chatHistory.deleteChat`},{title:u}),label:s.formatMessage({id:`ai.chatHistory.deleteChat`},{title:u})})})]})]})})}N();var $m={Container:P.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 100%;
    flex: 1;
  `,EmptyState:P.div`
    padding: 16px 0 32px;
    text-align: center;
    color: ${H.cloud.getShade(7)};
    font-size: 1.4rem;
    margin: auto 0;
  `};function eh({chats:e,isLoading:t,focusIndex:n,pendingDeleteIds:r,onLoadConversation:i,onRenameConversation:a,onDeleteConversation:o,onFocusHandled:s}){let c=I(),[l,u]=(0,W.useState)(null),d=(0,W.useRef)(null);(0,W.useEffect)(()=>{if(n!==null&&e.length>0){let t=Math.min(n,e.length-1);setTimeout(()=>{(d.current?.querySelectorAll(`[data-chat-item-button]`))?.[t]?.focus(),s()},0)}},[n,e.length,s]);let f=e=>{u(e)},p=(e,t)=>{a(e,t),u(null)},m=()=>{u(null)};return(0,K.jsx)($m.Container,{ref:d,"data-chat-list-container":!0,children:t?(0,K.jsx)($m.EmptyState,{children:c.formatMessage({id:`ai.chatHistory.loading`})}):e.length===0?(0,K.jsx)($m.EmptyState,{children:c.formatMessage({id:`ai.chatHistory.empty`})}):e.filter(e=>!r.includes(e.id)).map((e,t)=>(0,K.jsx)(Qm,{conversation:e,isEditing:l===e.id,onLoad:i,onEdit:f,onSave:p,onCancelEdit:m,onDelete:(e,n)=>o(e,n,t)},e.id))})}N();var th={PopoverContent:P.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    background: white;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    overflow: hidden;
    box-sizing: border-box;
    width: min(483px, calc(100cqw - 32px));
    min-height: 125px;
    max-height: calc(100cqh - 125px);
  `,Header:P.div`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    color: ${H.cloud.getShade(10)};
    width: 100%;
    padding: 16px 16px 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,Count:P.span`
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.5;
    color: ${H.cloud.getShade(7)};
  `,DialogContent:P.div`
    font-size: 1.6rem;
    line-height: 1.5;
  `};function nh({children:e,dynamicAnchor:t}){let n=I(),[r,i]=(0,W.useState)(!1),[a,o]=(0,W.useState)(null),[s,c]=(0,W.useState)(null),l=(0,W.useRef)(),u=(0,W.useRef)(null),d=(0,W.useRef)(!1),f=(0,W.useRef)(0),{activeSessionId:p,pendingDeleteIds:m,loadConversation:h,deleteConversation:g,renameConversation:_,isLoading:v,allChats:y}=qm(),{isRtl:b}=Pr();d.current=r;let x=(0,W.useCallback)(()=>{if(l.current){let e=l.current.popoverId;document.querySelector(`[aria-controls=${e}]`)?.focus()}},[]),S=(0,W.useCallback)(()=>u.current?.querySelector(`[data-chat-list-container]`),[]),C=(0,W.useCallback)(()=>{d.current&&setTimeout(()=>{l.current?.setState?.({open:!0}),setTimeout(()=>{let e=S();e&&(e.scrollTop=f.current)},0)},0)},[S]),T=(0,W.useCallback)((e,t,n)=>{let r=S();r&&(f.current=r.scrollTop),o({id:e,summary:t,index:n}),i(!0)},[S]),E=(0,W.useCallback)((e,t)=>{h(e,t),l.current?.close()},[h]),D=(0,W.useCallback)(()=>{if(a){let e=a.id===p,t=y.length===1,n=e||t;n&&(d.current=!1),g(a.id),i(!1),o(null),n?(l.current?.close(),setTimeout(()=>x(),0)):c(a.index)}},[a,g,p,y.length,x]),O=(0,W.useCallback)(()=>{let e=a?.index;i(!1),o(null),e!==void 0&&setTimeout(()=>{(u.current?.querySelectorAll(`[data-chat-delete-button] button`))?.[e]?.focus()},0)},[a?.index]),ee=(0,W.useCallback)(()=>{c(null)},[]),k=(0,W.useMemo)(()=>(0,K.jsxs)(th.PopoverContent,{ref:u,role:`dialog`,"aria-label":n.formatMessage({id:`ai.chatHistory`}),children:[(0,K.jsxs)(th.Header,{children:[(0,K.jsx)(`span`,{children:n.formatMessage({id:`ai.chatHistory`})}),(0,K.jsx)(th.Count,{children:n.formatMessage({id:`ai.chatHistory.count`},{count:y.length})})]}),(0,K.jsx)(eh,{chats:y,isLoading:v,focusIndex:s,pendingDeleteIds:m,onLoadConversation:E,onRenameConversation:_,onDeleteConversation:T,onFocusHandled:ee})]}),[y,v,s,m,n,E,_,T,ee]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(ii.Popover,{ref:l,onClose:C,content:k,dynamicAnchor:t,placement:b?`bottom-end`:`bottom-start`,style:{contain:`layout`},modifiers:{offset:{offset:b?`40px, 20px`:`-40px, 20px`},preventOverflow:{enabled:!1},flip:{enabled:!1}},children:e}),(0,K.jsx)(Mt,{type:bt.Vstui,open:r,onRequestClose:O,size:`small`,title:n.formatMessage({id:`ai.chatHistory.deleteTitle`},{title:a?.summary}),primaryActionButton:{label:n.formatMessage({id:`base.delete`}),onClick:D},secondaryActionButton:{label:n.formatMessage({id:`base.cancel`}),onClick:O},children:(0,K.jsx)(th.DialogContent,{children:(0,K.jsx)(w,{id:`ai.chatHistory.deleteWarning`})})})]})}function rh(e){return function(t){let[n,r]=(0,W.useState)(!1),[i,a]=(0,W.useState)(!1);return(0,W.useEffect)(()=>{r(t.open),t.open||a(!1)},[t.open]),(0,W.useEffect)(()=>{n&&a(!0)},[n]),n?(0,K.jsx)(e,{...t,open:i}):null}}function ih(){let e=z(),t=(0,W.useCallback)(({artifactEntryId:t,sessionId:n})=>{e(Ht({artifactEntryId:t,sessionId:n,name:yn.THUMBS,value:1,type:Bt.SCORE}))},[e]),n=(0,W.useCallback)(({artifactEntryId:t,sessionId:n})=>{e(Ht({artifactEntryId:t,sessionId:n,name:yn.THUMBS,value:0,type:Bt.SCORE}))},[e]),r=(0,W.useCallback)(t=>{e(Ht({...t,type:Bt.EVENT}))},[e]);return(0,W.useMemo)(()=>({thumbsUp:t,thumbsDown:n,sendAIEvent:r}),[t,n,r])}N();var ah=`14px`,oh=`1.4rem`,sh=5,ch={Instructions:P.p`
    margin-bottom: 20px;
  `,Fieldset:P.fieldset`
    margin-block: 16px;

    legend {
      font-weight: 500;
      margin-bottom: 8px;
    }
  `,InputRow:P.div`
    background: ${H.frost.getShade(1)};
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    margin-bottom: calc(${oh} + ${ah});
  `,InputLabel:P.label`
    /* Extra 1px due to focus whole px needs */
    padding-block: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border-bottom: 7px solid transparent;
    flex-basis: 20%;
    font-size: 1.2rem;
    line-height: 1.4rem;
    position: relative;

    &:nth-of-type(1) {
      border-color: ${H.red.getShade(6)};
      border-end-start-radius: inherit;
    }
    &:nth-of-type(2) {
      border-color: ${H.cheddar.getShade(4)};
    }
    &:nth-of-type(3) {
      /* stylelint-disable-next-line color-no-hex */
      border-color: #e8b520;
    }
    &:nth-of-type(4) {
      border-color: ${H.green.getShade(4)};
    }
    &:nth-of-type(5) {
      border-color: ${H.green.getShade(6)};
      border-end-end-radius: inherit;
    }

    input {
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 18px;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.43);
      margin-bottom: 8px;
      cursor: pointer;

      &:focus {
        outline: none;
        border-color: ${H.cloud.getShade(10)};
        box-shadow: 0 0 0 5px var(--vst-ai-2);
      }

      &:checked {
        border-color: var(--vst-ai-6);
        border-width: 6px;
      }
    }
  `,ScaleLabel:P.span`
    font-size: ${oh};
    position: absolute;
    top: calc(100% + ${ah});
    pointer-events: none;
    /* allows long text to go under neighboring radio buttons */
    white-space: nowrap;

    label:first-of-type & {
      align-self: flex-start;
    }

    label:last-of-type & {
      align-self: flex-end;
    }
  `,TextField:P(U.TextField)`
    margin-bottom: 4px;
  `},lh=[{labelId:`ai.feedbackDialog.quality`,name:yn.SURVEY_QUALITY},{labelId:`ai.feedbackDialog.confidence`,name:yn.SURVEY_CONFIDENCE},{labelId:`ai.feedbackDialog.helpfulness`,name:yn.SURVEY_HELPFULNESS}];function uh({open:e,onRequestClose:t,entry:n}){let r=I(),i=(0,W.useRef)(null),[a,o]=(0,W.useState)(!1),{sendAIEvent:s}=ih();function c(){(i.current?.querySelectorAll(`input:checked`))?.forEach(e=>{let t=lh.find(({name:t})=>t===e.name);if(!t)return;let r=parseInt(e.value,10);s({name:t.name,value:r,artifactEntryId:n.artifactEntryId,sessionId:n.sessionId})});let e=i.current?.querySelector(`textarea`);e?.value&&s({name:yn.SURVEY_FEEDBACK,comment:e.value,artifactEntryId:n.artifactEntryId,sessionId:n.sessionId}),o(!0),window.setTimeout(()=>{t()},0)}return(0,K.jsxs)(U.Dialog,{size:`large`,open:e,onRequestClose:t,title:r.formatMessage({id:`ai.feedbackDialog.title`}),primaryActionButton:{label:r.formatMessage({id:`base.submit`}),onClick:c},children:[(0,K.jsxs)(`div`,{ref:i,children:[(0,K.jsx)(ch.Instructions,{children:(0,K.jsx)(w,{id:`ai.feedbackDialog.instructions`})}),lh.map(e=>(0,K.jsxs)(ch.Fieldset,{children:[(0,K.jsx)(`legend`,{children:(0,K.jsx)(w,{id:e.labelId})}),(0,K.jsx)(ch.InputRow,{children:Array(sh).fill({}).map((t,n)=>(0,K.jsxs)(ch.InputLabel,{children:[(0,K.jsx)(`input`,{type:`radio`,name:e.name,value:n+1}),n+1,(0,K.jsxs)(ch.ScaleLabel,{children:[n===0&&(0,K.jsx)(w,{id:`base.poor`}),n===4&&(0,K.jsx)(w,{id:`base.excellent`})]})]},n))})]},e.labelId)),(0,K.jsx)(ch.TextField,{multiline:!0,rows:3,fullWidth:!0,label:r.formatMessage({id:`ai.feedbackDialog.moreFeedback`})})]}),(0,K.jsx)(U.Toast,{open:a,toastClose:()=>o(!1),toastType:`success`,toastTitleText:r.formatMessage({id:`ai.feedbackDialog.submitted.title`}),toastDescriptionText:r.formatMessage({id:`ai.feedbackDialog.submitted.body`})})]})}var dh=rh(uh);N();var fh={Header:P.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding-inline-start: 16px;
    padding-inline-end: 8px;
    height: ${`calc(3.4rem + 12px)`};
    box-sizing: border-box;
    border-bottom: 1px solid ${H.frost.getShade(4)};
    z-index: 1;
    position: relative;
  `,LightButton:P(U.IconButton)`
    margin: 0;

    &:disabled {
      border-color: transparent;
    }
  `,RightButtons:P.div`
    margin-inline-start: auto;
    display: flex;
    align-items: center;
    gap: 16px;
  `};function ph({disableNewButton:e}){let{closePanel:t}=Sa(),n=I(),{setCurrentMode:r}=Km(),{newChat:i,lastChatInteraction:a}=Am(),[o,s]=(0,W.useState)(!1);return(0,K.jsxs)(fh.Header,{children:[(0,K.jsx)(fh.LightButton,{onClick:()=>{r(Gt.ASK_YOUR_BOOK),i()},icon:(0,K.jsx)(G.AddNote,{}),label:ee(n.formatMessage({id:`ai.newChat`})),customIconColor:`#012892`,customIconFocusColor:`#012892`,color:`custom`,rounded:!0,size:`small`,disabled:e,tooltipPlacement:`bottom`}),(0,K.jsx)(nh,{children:(0,K.jsx)(fh.LightButton,{icon:(0,K.jsx)(G.Clock,{}),label:ee(n.formatMessage({id:`ai.chatHistory`})),customIconColor:`#012892`,customIconFocusColor:`#012892`,color:`custom`,rounded:!0,size:`small`,tooltipPlacement:`bottom`})}),(0,K.jsxs)(fh.RightButtons,{children:[!!a&&(0,K.jsx)(`button`,{className:Ot(`vst-link`,`vst-link-option-no-underline`,`vst-link-size-small`),onClick:()=>s(!0),children:(0,K.jsx)(w,{id:`base.feedback`})}),(0,K.jsx)(U.IconButton,{onClick:t,icon:(0,K.jsx)(G.XSmall,{}),label:n.formatMessage({id:`base.close`}),customIconColor:H.cloud.getShade(10),customIconFocusColor:H.cloud.getShade(10),color:`custom`,rounded:!0,size:`small`,tooltipPlacement:`bottom`})]}),(0,K.jsx)(dh,{open:o,onRequestClose:()=>s(!1),entry:a})]})}N();var mh={SubmitButton:P.button`
    color: white;
    background: ${L(7)};
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;

    &:focus {
      outline: 2px solid ${L(7)};
      outline-offset: 2px;
    }

    &:active {
      color: white;
    }

    ${({size:e})=>{switch(e){case`large`:return F`
            width: 4.8rem;
            height: 4.8rem;

            svg {
              width: 1.6rem;
              height: 1.6rem;
            }
          `;case`medium`:return F`
            width: 3.2rem;
            height: 3.2rem;

            svg {
              width: 1.2rem;
              height: 1.2rem;
            }
          `;default:return F`
            width: 2.4rem;
            height: 2.4rem;

            svg {
              width: 0.8rem;
              height: 0.8rem;
            }
          `}}}
  `};function hh(){return(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M0.553825 4.89215L3.5 4.05039L0.581183 3.21644L0.0155125 1.02166C-0.0535338 0.753761 0.114385 0.482294 0.390571 0.41532C0.505595 0.387427 0.627017 0.398849 0.734372 0.447662L7.76663 3.64512C7.90904 3.70987 8 3.84867 8 4.00123C8 4.15379 7.90904 4.29258 7.76663 4.35733L0.734372 7.55479C0.476601 7.67199 0.169685 7.56431 0.0488548 7.31428C-0.00146802 7.21014 -0.0132436 7.09237 0.0155125 6.98079L0.553825 4.89215Z`,fill:`currentColor`})})}function gh({size:e}){let t=I();return(0,K.jsx)(mh.SubmitButton,{type:`submit`,"aria-label":t.formatMessage({id:`base.submit`}),size:e,children:(0,K.jsx)(hh,{})})}N();var _h={Button:P.button`
    color: ${L(6)};
    height: 34px;
    font-size: 1.4rem;
    white-space: nowrap;
    border-radius: 52px;
    padding: 8px 16px 8px 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    &[aria-expanded="true"],
    &:hover {
      background: ${H.frost.getShade(2)};
    }

    &[aria-expanded="true"] {
      outline: 1px solid ${L(6)};
      outline-offset: 2px;
    }

    &:focus-visible {
      background: ${H.frost.getShade(2)};
      outline: 2px solid ${L(6)};
      outline-offset: 2px;
    }
  `};function vh({...e}){return(0,K.jsxs)(_h.Button,{...e,children:[(0,K.jsx)(Ec,{"aria-hidden":`true`}),(0,K.jsx)(w,{id:`ai.suggestedPrompts`})]})}N();function yh({className:e}){return(0,K.jsx)(`svg`,{className:e,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`18`,viewBox:`0 0 20 18`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M7.98756 1.53821C11.2485 1.17793 14.3432 2.60988 16.261 5.35657C16.7993 6.1263 17.2086 6.95024 17.4876 7.79505L17.4661 7.82435C18.0125 9.48014 18.0587 11.2408 17.596 12.924L17.8674 12.7687C18.3482 12.4963 18.9585 12.6651 19.2307 13.1447C19.5096 13.6296 19.3349 14.2368 18.8548 14.5079L15.72 16.2872C15.429 16.4516 15.0736 16.4608 14.7756 16.3107C14.5363 16.1898 14.3587 15.9798 14.2766 15.7316C14.2561 15.6693 14.241 15.6055 14.2327 15.5392L13.7952 11.9591C13.7294 11.4116 14.1201 10.9134 14.6682 10.8458C15.2152 10.7782 15.7163 11.1603 15.7805 11.7179L15.8001 11.8654C16.1485 10.0411 15.739 8.13414 14.6106 6.51282C13.1149 4.37438 10.7056 3.26352 8.18483 3.53724C5.66395 3.81137 3.56717 5.40813 2.56081 7.81458C1.5578 10.2304 1.90515 12.8759 3.49245 14.879C3.83551 15.3133 3.7579 15.9393 3.33327 16.2794C2.90851 16.6193 2.27617 16.5544 1.93288 16.1202C-0.111378 13.5308 -0.566729 10.1421 0.722915 7.03138C2.0127 3.95231 4.72658 1.89876 7.98756 1.53821ZM8.36842 7.02845C8.50706 6.4727 9.29707 6.47278 9.43581 7.02845L9.9192 8.96888C9.96847 9.166 10.1225 9.32004 10.3196 9.36927L12.26 9.85266C12.8156 9.99146 12.8157 10.7814 12.26 10.92L10.3196 11.4025C10.1223 11.4517 9.96836 11.6065 9.9192 11.8038L9.43581 13.7433C9.29723 14.2993 8.50692 14.2994 8.36842 13.7433L7.886 11.8038C7.83683 11.6064 7.68207 11.4516 7.48463 11.4025L5.54518 10.92C4.9891 10.7815 4.98913 9.9912 5.54518 9.85266L7.48463 9.36927C7.68196 9.32012 7.83674 9.16616 7.886 8.96888L8.36842 7.02845Z`,fill:`currentColor`})})}var bh=P(yh)`
  color: var(--vst-ai-main);
`;N();var xh={ItemContent:P.span`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 1.6rem;
    line-height: 2.4rem;
  `,IconWrapper:P.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    flex-shrink: 0;
  `},Sh=[{id:`ai.suggestedPrompts.quizPrep`,icon:(0,K.jsx)(G.CoachMe,{})},{id:`ai.suggestedPrompts.studyPlan`,icon:(0,K.jsx)(G.List,{})},{id:`ai.suggestedPrompts.flashcards`,icon:(0,K.jsx)(G.FlashCard,{})},{id:`ai.suggestedPrompts.simplify`,icon:(0,K.jsx)(yh,{})},{id:`ai.suggestedPrompts.definitions`,icon:(0,K.jsx)(cm,{})}];function Ch(){let e=I(),t=d(),{ask:n}=Am(),r=(0,W.useRef)(),{isRtl:i}=Pr(),a=Sh.filter(e=>e.id!==`ai.suggestedPrompts.studyPlan`||t.getProp(`BookshelfAI.StudyPlan.enabled`)).map(t=>({itemKey:t.id,text:(0,K.jsxs)(xh.ItemContent,{children:[(0,K.jsx)(xh.IconWrapper,{children:t.icon}),(0,K.jsx)(w,{id:t.id})]}),onClick:()=>{n(e.formatMessage({id:t.id})),r.current?.close()}}));return(0,K.jsx)(ii.Popover,{ref:r,modifiers:{applyStyle:{enabled:!1},offset:{offset:i?`-4px, 14px`:`4px, 14px`},applyReactStyle:{enabled:!0,fn:e=>(e.styles.minWidth=`271px`,e)}},content:[{listItems:a}],placement:i?`top-end`:`top-start`,children:(0,K.jsx)(vh,{})})}N();var wh={Footer:P.div`
    border: 1px solid var(--vst-frost-4);
    border-radius: 4px;
    background: white;
    margin: 0 16px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: 50cqh;

    &:has(textarea:focus) {
      border: 1px solid var(--vst-theme-main);
    }
  `,Form:P.form`
    display: flex;
    gap: 16px;
    padding: 8px;
    padding-inline-end: 16px;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
  `,Input:P.textarea`
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.4rem;
    resize: none;
    padding: 8px;
    box-sizing: border-box;
    flex: 0 1 auto;
    min-height: 0;
    overflow-y: auto;

    &:focus {
      outline: none;
      border-radius: 2px;
    }

    &::placeholder {
      color: var(--vst-cloud-6);
    }
  `,InputButtonsContainer:P.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
  `};function Th(){let e=(0,W.useRef)(null),{ask:t,newChat:n}=Am(),r=I(),i=(0,W.useRef)(le()),{currentMode:a,setCurrentMode:o}=Km();function s(r){r.preventDefault(),e.current&&e.current.value&&(a!==Gt.ASK_YOUR_BOOK&&(o(Gt.ASK_YOUR_BOOK),n()),t(e.current.value),e.current.value=``,e.current.style.height=`auto`)}function c(e){let t=e.currentTarget;t.style.height=`auto`,t.style.height=`${t.scrollHeight}px`}return(0,K.jsx)(wh.Footer,{children:(0,K.jsxs)(wh.Form,{onSubmit:s,children:[(0,K.jsx)(He,{children:(0,K.jsx)(`label`,{htmlFor:i.current,children:(0,K.jsx)(w,{id:`ai.askYourBook`})})}),(0,K.jsx)(wh.Input,{ref:e,id:i.current,rows:2,placeholder:a===Gt.SIMPLIFY?r.formatMessage({id:`ai.startNewChat`}):r.formatMessage({id:`ai.askMe`}),onInput:c,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&s(e)}}),(0,K.jsxs)(wh.InputButtonsContainer,{children:[(0,K.jsx)(Ch,{}),(0,K.jsx)(gh,{size:`medium`})]})]})})}N();var Eh={Wrapper:P.div`
    background: var(--vst-frost-1);
    padding: 16px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    &:focus {
      outline-offset: -2px;
      outline: 2px solid var(--vst-theme-main);
    }
  `,Frame:P.div`
    background: white;
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1 1 auto;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    padding-bottom: 16px;
    border-radius: 8px;
    container-type: size;
  `,Content:P.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1 1 auto;
    container-type: size;
  `,ScrollRegion:P.div`
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    container-type: size;
    padding: 16px;
  `,Disclaimer:P.div`
    font-size: 1rem;
    text-align: center;
    color: var(--vst-cloud-7);
  `};function Dh({className:e,children:t,disableNewButton:n}){let r=(0,W.useRef)(null),{dir:i}=Pr();return(0,W.useEffect)(()=>{r.current?.focus()},[]),(0,K.jsxs)(Eh.Wrapper,{ref:r,tabIndex:-1,dir:i,children:[(0,K.jsx)(He,{children:(0,K.jsx)(w,{tagName:`h2`,id:`ai.askQuestion`})}),(0,K.jsxs)(Eh.Frame,{children:[(0,K.jsx)(ph,{disableNewButton:n}),(0,K.jsxs)(Eh.Content,{children:[(0,K.jsx)(Eh.ScrollRegion,{className:e,children:t}),(0,K.jsx)(Th,{})]})]}),(0,K.jsx)(Eh.Disclaimer,{children:(0,K.jsx)(w,{tagName:`span`,id:`ai.disclaimer`})})]})}function Oh(e){let t=z(),n=(0,W.useCallback)(()=>{t(Wt(e,1))},[t,e]),r=(0,W.useCallback)(()=>{t(Wt(e,0))},[t,e]),i=(0,W.useCallback)((n,r)=>{t(wr(e,n,r))},[t,e]);return(0,W.useMemo)(()=>({onThumbsUp:n,onThumbsDown:r,event:i}),[n,r,i])}var kh=[`http`,`https`,`mailto`,`tel`];function Ah(e){let t=(e||``).trim(),n=t.charAt(0);if(n===`#`||n===`/`)return t;let r=t.indexOf(`:`);if(r===-1)return t;let i=-1;for(;++i<kh.length;){let e=kh[i];if(r===e.length&&t.slice(0,e.length).toLowerCase()===e)return t}return i=t.indexOf(`?`),i!==-1&&r>i||(i=t.indexOf(`#`),i!==-1&&r>i)?t:`javascript:void(0)`}var jh=n(((e,t)=>{t.exports=function(e){return e!=null&&e.constructor!=null&&typeof e.constructor.isBuffer==`function`&&e.constructor.isBuffer(e)}}));function Mh(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Ph(e.position):`start`in e||`end`in e?Ph(e):`line`in e||`column`in e?Nh(e):``}function Nh(e){return Fh(e&&e.line)+`:`+Fh(e&&e.column)}function Ph(e){return Nh(e&&e.start)+`-`+Nh(e&&e.end)}function Fh(e){return e&&typeof e==`number`?e:1}var Ih=class extends Error{constructor(e,t,n){let r=[null,null],i={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof t==`string`&&(n=t,t=void 0),typeof n==`string`){let e=n.indexOf(`:`);e===-1?r[1]=n:(r[0]=n.slice(0,e),r[1]=n.slice(e+1))}t&&(`type`in t||`position`in t?t.position&&(i=t.position):`start`in t||`end`in t?i=t:(`line`in t||`column`in t)&&(i.start=t)),this.name=Mh(t)||`1:1`,this.message=typeof e==`object`?e.message:e,this.stack=``,typeof e==`object`&&e.stack&&(this.stack=e.stack),this.reason=this.message,this.fatal,this.line=i.start.line,this.column=i.start.column,this.position=i,this.source=r[0],this.ruleId=r[1],this.file,this.actual,this.expected,this.url,this.note}};Ih.prototype.file=``,Ih.prototype.name=``,Ih.prototype.reason=``,Ih.prototype.message=``,Ih.prototype.stack=``,Ih.prototype.fatal=null,Ih.prototype.column=null,Ih.prototype.line=null,Ih.prototype.source=null,Ih.prototype.ruleId=null,Ih.prototype.position=null;var Lh=e(jh(),1),Rh={basename:zh,dirname:Bh,extname:Vh,join:Hh,sep:`/`};function zh(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);Gh(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.charCodeAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.charCodeAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.charCodeAt(i)===t.charCodeAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function Bh(e){if(Gh(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.charCodeAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.charCodeAt(0)===47?`/`:`.`:t===1&&e.charCodeAt(0)===47?`//`:e.slice(0,t)}function Vh(e){Gh(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.charCodeAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function Hh(...e){let t=-1,n;for(;++t<e.length;)Gh(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:Uh(n)}function Uh(e){Gh(e);let t=e.charCodeAt(0)===47,n=Wh(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.charCodeAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function Wh(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.charCodeAt(o);else if(s===47)break;else s=47;if(s===47){if(i!==o-1&&a!==1){if(i!==o-1&&a===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1}i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function Gh(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var Kh={cwd:qh};function qh(){return`/`}function Jh(e){return typeof e==`object`&&!!e&&e.href&&e.origin}function Yh(e){if(typeof e==`string`)e=new URL(e);else if(!Jh(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return Xh(e)}function Xh(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.charCodeAt(n)===37&&t.charCodeAt(n+1)===50){let e=t.charCodeAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Zh=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],Qh=class{constructor(e){let t;t=e?typeof e==`string`||ng(e)?{value:e}:Jh(e)?{path:e}:e:{},this.data={},this.messages=[],this.history=[],this.cwd=Kh.cwd(),this.value,this.stored,this.result,this.map;let n=-1;for(;++n<Zh.length;){let e=Zh[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Zh.includes(r)||(this[r]=t[r])}get path(){return this.history[this.history.length-1]}set path(e){Jh(e)&&(e=Yh(e)),eg(e,`path`),this.path!==e&&this.history.push(e)}get dirname(){return typeof this.path==`string`?Rh.dirname(this.path):void 0}set dirname(e){tg(this.basename,`dirname`),this.path=Rh.join(e||``,this.basename)}get basename(){return typeof this.path==`string`?Rh.basename(this.path):void 0}set basename(e){eg(e,`basename`),$h(e,`basename`),this.path=Rh.join(this.dirname||``,e)}get extname(){return typeof this.path==`string`?Rh.extname(this.path):void 0}set extname(e){if($h(e,`extname`),tg(this.dirname,`extname`),e){if(e.charCodeAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Rh.join(this.dirname,this.stem+(e||``))}get stem(){return typeof this.path==`string`?Rh.basename(this.path,this.extname):void 0}set stem(e){eg(e,`stem`),$h(e,`stem`),this.path=Rh.join(this.dirname||``,e+(this.extname||``))}toString(e){return(this.value||``).toString(e||void 0)}message(e,t,n){let r=new Ih(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=null,r}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}};function $h(e,t){if(e&&e.includes(Rh.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Rh.sep+"`")}function eg(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function tg(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function ng(e){return(0,Lh.default)(e)}function rg(e){if(e)throw e}var ig=e(n(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}))(),1);function ag(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function og(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?sg(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function sg(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var cg=ug().freeze(),lg={}.hasOwnProperty;function ug(){let e=og(),t=[],n={},r,i=-1;return a.data=o,a.Parser=void 0,a.Compiler=void 0,a.freeze=s,a.attachers=t,a.use=c,a.parse=l,a.stringify=u,a.run=d,a.runSync=f,a.process=p,a.processSync=m,a;function a(){let e=ug(),r=-1;for(;++r<t.length;)e.use(...t[r]);return e.data((0,ig.default)(!0,{},n)),e}function o(e,t){return typeof e==`string`?arguments.length===2?(hg(`data`,r),n[e]=t,a):lg.call(n,e)&&n[e]||null:e?(hg(`data`,r),n=e,a):n}function s(){if(r)return a;for(;++i<t.length;){let[n,...r]=t[i];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);let o=n.call(a,...r);typeof o==`function`&&e.use(o)}return r=!0,i=1/0,a}function c(e,...i){let o;if(hg(`use`,r),e!=null){if(typeof e==`function`)u(e,...i);else if(typeof e==`object`)Array.isArray(e)?l(e):c(e);else throw TypeError("Expected usable value, not `"+e+"`")}return o&&(n.settings=Object.assign(n.settings||{},o)),a;function s(e){if(typeof e==`function`)u(e);else if(typeof e==`object`){if(Array.isArray(e)){let[t,...n]=e;u(t,...n)}else c(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function c(e){l(e.plugins),e.settings&&(o=Object.assign(o||{},e.settings))}function l(e){let t=-1;if(e!=null){if(Array.isArray(e))for(;++t<e.length;){let n=e[t];s(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function u(e,n){let r=-1,i;for(;++r<t.length;)if(t[r][0]===e){i=t[r];break}i?(ag(i[1])&&ag(n)&&(n=(0,ig.default)(!0,i[1],n)),i[1]=n):t.push([...arguments])}}function l(e){a.freeze();let t=vg(e),n=a.Parser;return pg(`parse`,n),dg(n,`parse`)?new n(String(t),t).parse():n(String(t),t)}function u(e,t){a.freeze();let n=vg(t),r=a.Compiler;return mg(`stringify`,r),gg(e),dg(r,`compile`)?new r(e,n).compile():r(e,n)}function d(t,n,r){if(gg(t),a.freeze(),!r&&typeof n==`function`&&(r=n,n=void 0),!r)return new Promise(i);i(null,r);function i(i,a){e.run(t,vg(n),o);function o(e,n,o){n||=t,e?a(e):i?i(n):r(null,n,o)}}}function f(e,t){let n,r;return a.run(e,t,i),_g(`runSync`,`run`,r),n;function i(e,t){rg(e),n=t,r=!0}}function p(e,t){if(a.freeze(),pg(`process`,a.Parser),mg(`process`,a.Compiler),!t)return new Promise(n);n(null,t);function n(n,r){let i=vg(e);a.run(a.parse(i),i,(e,t,n)=>{if(e||!t||!n)o(e);else{let r=a.stringify(t,n);r==null||(bg(r)?n.value=r:n.result=r),o(e,n)}});function o(e,i){e||!i?r(e):n?n(i):t(null,i)}}}function m(e){let t;a.freeze(),pg(`processSync`,a.Parser),mg(`processSync`,a.Compiler);let n=vg(e);return a.process(n,r),_g(`processSync`,`process`,t),n;function r(e){t=!0,rg(e)}}}function dg(e,t){return typeof e==`function`&&e.prototype&&(fg(e.prototype)||t in e.prototype)}function fg(e){let t;for(t in e)if(lg.call(e,t))return!0;return!1}function pg(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `Parser`")}function mg(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `Compiler`")}function hg(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function gg(e){if(!ag(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function _g(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function vg(e){return yg(e)?e:new Qh(e)}function yg(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function bg(e){return typeof e==`string`||(0,Lh.default)(e)}var xg={};function Sg(e,t){let n=t||xg;return Cg(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function Cg(e,t,n){if(Tg(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return wg(e.children,t,n)}return Array.isArray(e)?wg(e,t,n):``}function wg(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Cg(e[i],t,n);return r.join(``)}function Tg(e){return!!(e&&typeof e==`object`)}function Eg(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Dg(e,t){return e.length>0?(Eg(e,e.length,0,t),e):t}var Og={}.hasOwnProperty;function kg(e){let t={},n=-1;for(;++n<e.length;)Ag(t,e[n]);return t}function Ag(e,t){let n;for(n in t){let r=(Og.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){Og.call(r,a)||(r[a]=[]);let e=i[a];jg(r[a],Array.isArray(e)?e:e?[e]:[])}}}function jg(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);Eg(e,0,0,r)}var Mg=/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,Ng=Ug(/[A-Za-z]/),Pg=Ug(/[\dA-Za-z]/),Fg=Ug(/[#-'*+\--9=?A-Z^-~]/);function Ig(e){return e!==null&&(e<32||e===127)}var Lg=Ug(/\d/),Rg=Ug(/[\dA-Fa-f]/),zg=Ug(/[!-/:-@[-`{-~]/);function J(e){return e!==null&&e<-2}function Bg(e){return e!==null&&(e<0||e===32)}function Y(e){return e===-2||e===-1||e===32}var Vg=Ug(Mg),Hg=Ug(/\s/);function Ug(e){return t;function t(t){return t!==null&&e.test(String.fromCharCode(t))}}function X(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return Y(r)?(e.enter(n),s(r)):t(r)}function s(r){return Y(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var Wg={tokenize:Gg};function Gg(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),X(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return J(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Kg={tokenize:Jg},qg={tokenize:Yg};function Jg(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end=Object.assign({},o),s++;return Eg(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(qg,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(qg,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{contentType:`flow`,previous:a,_tokenizer:i}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return J(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},c),e++;Eg(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Yg(e,t,n){return X(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function Xg(e){if(e===null||Bg(e)||Hg(e))return 1;if(Vg(e))return 2}function Zg(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Qg={name:`attention`,tokenize:e_,resolveAll:$g};function $g(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d=Object.assign({},e[r][1].end),f=Object.assign({},e[n][1].start);t_(d,-c),t_(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:Object.assign({},e[r][1].end)},s={type:c>1?`strongSequence`:`emphasisSequence`,start:Object.assign({},e[n][1].start),end:f},a={type:c>1?`strongText`:`emphasisText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:c>1?`strong`:`emphasis`,start:Object.assign({},o.start),end:Object.assign({},s.end)},e[r][1].end=Object.assign({},o.start),e[n][1].start=Object.assign({},s.end),l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=Dg(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=Dg(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=Dg(l,Zg(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=Dg(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=Dg(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,Eg(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function e_(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Xg(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=Xg(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function t_(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var n_={name:`autolink`,tokenize:r_};function r_(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return Ng(t)?(e.consume(t),o):l(t)}function o(e){return e===43||e===45||e===46||Pg(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Pg(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||Ig(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Fg(t)?(e.consume(t),l):n(t)}function u(e){return Pg(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Pg(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var i_={tokenize:a_,partial:!0};function a_(e,t,n){return r;function r(t){return Y(t)?X(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||J(e)?t(e):n(e)}}var o_={name:`blockQuote`,tokenize:s_,continuation:{tokenize:c_},exit:l_};function s_(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return Y(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function c_(e,t,n){let r=this;return i;function i(t){return Y(t)?X(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(o_,t,n)(r)}}function l_(e){e.exit(`blockQuote`)}var u_={name:`characterEscape`,tokenize:d_};function d_(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return zg(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var f_=document.createElement(`i`);function p_(e){let t=`&`+e+`;`;f_.innerHTML=t;let n=f_.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`?!1:n!==t&&n}var m_={name:`characterReference`,tokenize:h_};function h_(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Pg,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=Rg,u):(e.enter(`characterReferenceValue`),a=7,o=Lg,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Pg&&!p_(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var g_={tokenize:y_,partial:!0},__={name:`codeFenced`,tokenize:v_,concrete:!0};function v_(e,t,n){let r=this,i={tokenize:x,partial:!0},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),Y(t)?X(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||J(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(g_,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||J(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):Y(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),X(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||J(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||J(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&Y(t)?X(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||J(t)?e.check(g_,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||J(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),Y(t)?X(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),Y(t)?X(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||J(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function y_(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var b_={name:`codeIndented`,tokenize:S_},x_={tokenize:C_,partial:!0};function S_(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),X(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):J(t)?e.attempt(x_,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||J(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function C_(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):J(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):X(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):J(e)?i(e):n(e)}}var w_={name:`codeText`,tokenize:D_,resolve:T_,previous:E_};function T_(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function E_(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function D_(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):J(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||J(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}function O_(e){let t={},n=-1,r,i,a,o,s,c,l;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type===`chunkFlow`&&e[n-1][1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,k_(e,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--&&(o=e[a],o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`);)o[0]===`enter`&&(i&&(e[i][1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);i&&(r[1].end=Object.assign({},e[i][1].start),s=e.slice(i,n),s.unshift(r),Eg(e,i,n-i+1,s))}}return!l}function k_(e,t){let n=e[t][1],r=e[t][2],i=t-1,a=[],o=n._tokenizer||r.parser[n.contentType](n.start),s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e[++i][1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.unshift([n,n+t.length-1]),Eg(e,n,2,t)}for(f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var A_={tokenize:N_,resolve:M_},j_={tokenize:P_,partial:!0};function M_(e){return O_(e),e}function N_(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):J(t)?e.check(j_,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function P_(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),X(e,a,`linePrefix`)}function a(i){if(i===null||J(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function F_(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||Ig(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||J(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||Bg(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||Ig(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function I_(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):J(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||J(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!Y(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function L_(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):J(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),X(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||J(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function R_(e,t){let n;return r;function r(i){return J(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):Y(i)?X(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}function z_(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var B_={name:`definition`,tokenize:H_},V_={tokenize:U_,partial:!0};function H_(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return I_.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=z_(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return Bg(t)?R_(e,l)(t):l(t)}function l(t){return F_(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(V_,d,d)(t)}function d(t){return Y(t)?X(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||J(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function U_(e,t,n){return r;function r(t){return Bg(t)?R_(e,i)(t):n(t)}function i(t){return L_(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return Y(t)?X(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||J(e)?t(e):n(e)}}var W_={name:`hardBreakEscape`,tokenize:G_};function G_(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return J(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var K_={name:`headingAtx`,tokenize:J_,resolve:q_};function q_(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},Eg(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function J_(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||Bg(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||J(n)?(e.exit(`atxHeading`),t(n)):Y(n)?X(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||Bg(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Y_=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),X_=[`pre`,`script`,`style`,`textarea`],Z_={name:`htmlFlow`,tokenize:tv,resolveTo:ev,concrete:!0},Q_={tokenize:rv,partial:!0},$_={tokenize:nv,partial:!0};function ev(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function tv(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:ae):Ng(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):Ng(a)?(e.consume(a),i=4,r.interrupt?t:ae):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:ae):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:O:m):n(i)}function h(t){return Ng(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||Bg(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&X_.includes(l)?(i=1,r.interrupt?t(s):O(s)):Y_.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):O(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Pg(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:O):n(i)}function v(t){return Y(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||Ng(t)?(e.consume(t),b):Y(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||Pg(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):Y(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):Y(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||J(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||Bg(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||Y(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),D):n(t)}function D(t){return t===null||J(t)?O(t):Y(t)?(e.consume(t),D):n(t)}function O(t){return t===45&&i===2?(e.consume(t),ne):t===60&&i===1?(e.consume(t),A):t===62&&i===4?(e.consume(t),j):t===63&&i===3?(e.consume(t),ae):t===93&&i===5?(e.consume(t),ie):J(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(Q_,oe,ee)(t)):t===null||J(t)?(e.exit(`htmlFlowData`),ee(t)):(e.consume(t),O)}function ee(t){return e.check($_,k,oe)(t)}function k(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),te}function te(t){return t===null||J(t)?ee(t):(e.enter(`htmlFlowData`),O(t))}function ne(t){return t===45?(e.consume(t),ae):O(t)}function A(t){return t===47?(e.consume(t),o=``,re):O(t)}function re(t){if(t===62){let n=o.toLowerCase();return X_.includes(n)?(e.consume(t),j):O(t)}return Ng(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),re):O(t)}function ie(t){return t===93?(e.consume(t),ae):O(t)}function ae(t){return t===62?(e.consume(t),j):t===45&&i===2?(e.consume(t),ae):O(t)}function j(t){return t===null||J(t)?(e.exit(`htmlFlowData`),oe(t)):(e.consume(t),j)}function oe(n){return e.exit(`htmlFlow`),t(n)}}function nv(e,t,n){let r=this;return i;function i(t){return J(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function rv(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(i_,t,n)}}var iv={name:`htmlText`,tokenize:av};function av(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):Ng(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):Ng(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):J(t)?(o=d,A(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?ne(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):J(t)?(o=h,A(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?ne(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?ne(t):J(t)?(o=v,A(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):J(t)?(o=y,A(t)):(e.consume(t),y)}function b(e){return e===62?ne(e):y(e)}function x(t){return Ng(t)?(e.consume(t),S):n(t)}function S(t){return t===45||Pg(t)?(e.consume(t),S):C(t)}function C(t){return J(t)?(o=C,A(t)):Y(t)?(e.consume(t),C):ne(t)}function w(t){return t===45||Pg(t)?(e.consume(t),w):t===47||t===62||Bg(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),ne):t===58||t===95||Ng(t)?(e.consume(t),E):J(t)?(o=T,A(t)):Y(t)?(e.consume(t),T):ne(t)}function E(t){return t===45||t===46||t===58||t===95||Pg(t)?(e.consume(t),E):D(t)}function D(t){return t===61?(e.consume(t),O):J(t)?(o=D,A(t)):Y(t)?(e.consume(t),D):T(t)}function O(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,ee):J(t)?(o=O,A(t)):Y(t)?(e.consume(t),O):(e.consume(t),k)}function ee(t){return t===i?(e.consume(t),i=void 0,te):t===null?n(t):J(t)?(o=ee,A(t)):(e.consume(t),ee)}function k(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||Bg(t)?T(t):(e.consume(t),k)}function te(e){return e===47||e===62||Bg(e)?T(e):n(e)}function ne(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function A(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),re}function re(t){return Y(t)?X(e,ie,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):ie(t)}function ie(t){return e.enter(`htmlTextData`),o(t)}}var ov={name:`labelEnd`,tokenize:fv,resolveTo:dv,resolveAll:uv},sv={tokenize:pv},cv={tokenize:mv},lv={tokenize:hv};function uv(e){let t=-1;for(;++t<e.length;){let n=e[t][1];(n.type===`labelImage`||n.type===`labelLink`||n.type===`labelEnd`)&&(e.splice(t+1,n.type===`labelImage`?4:2),n.type=`data`,t++)}return e}function dv(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:Object.assign({},e[a][1].start),end:Object.assign({},e[e.length-1][1].end)},l={type:`label`,start:Object.assign({},e[a][1].start),end:Object.assign({},e[o][1].end)},u={type:`labelText`,start:Object.assign({},e[a+r+2][1].end),end:Object.assign({},e[o-2][1].start)};return s=[[`enter`,c,t],[`enter`,l,t]],s=Dg(s,e.slice(a+1,a+r+3)),s=Dg(s,[[`enter`,u,t]]),s=Dg(s,Zg(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=Dg(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=Dg(s,e.slice(o+1)),s=Dg(s,[[`exit`,c,t]]),Eg(e,a,e.length,s),e}function fv(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(z_(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(sv,u,o?u:d)(t):t===91?e.attempt(cv,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(lv,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function pv(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return Bg(t)?R_(e,a)(t):a(t)}function a(t){return t===41?u(t):F_(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return Bg(t)?R_(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?L_(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return Bg(t)?R_(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function mv(e,t,n){let r=this;return i;function i(t){return I_.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(z_(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function hv(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var gv={name:`labelStartImage`,tokenize:_v,resolveAll:ov.resolveAll};function _v(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var vv={name:`labelStartLink`,tokenize:yv,resolveAll:ov.resolveAll};function yv(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var bv={name:`lineEnding`,tokenize:xv};function xv(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),X(e,t,`linePrefix`)}}var Sv={name:`thematicBreak`,tokenize:Cv};function Cv(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||J(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),Y(t)?X(e,s,`whitespace`)(t):s(t))}}var wv={name:`list`,tokenize:Dv,continuation:{tokenize:Ov},exit:Av},Tv={tokenize:jv,partial:!0},Ev={tokenize:kv,partial:!0};function Dv(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:Lg(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(Sv,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return Lg(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(i_,r.interrupt?n:u,e.attempt(Tv,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return Y(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function Ov(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(i_,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,X(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!Y(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Ev,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,X(e,e.attempt(wv,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function kv(e,t,n){let r=this;return X(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function Av(e){e.exit(this.containerState.type)}function jv(e,t,n){let r=this;return X(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!Y(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Mv={name:`setextUnderline`,tokenize:Pv,resolveTo:Nv};function Nv(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end=Object.assign({},e[a][1].end)):e[r][1]=o,e.push([`exit`,o,t]),e}function Pv(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),Y(t)?X(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||J(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Fv={tokenize:Iv};function Iv(e){let t=this,n=e.attempt(i_,r,e.attempt(this.parser.constructs.flowInitial,i,X(e,e.attempt(this.parser.constructs.flow,i,e.attempt(A_,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Lv={resolveAll:Vv()},Rv=Bv(`string`),zv=Bv(`text`);function Bv(e){return{tokenize:t,resolveAll:Vv(e===`text`?Hv:void 0)};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Vv(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Hv(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{line:r.end.line,column:r.end.column-s,offset:r.end.offset-s,_index:r.start._index+a,_bufferIndex:a?o:r.start._bufferIndex+o},end:Object.assign({},r.end)};r.end=Object.assign({},i.start),r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}function Uv(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),i={},a=[],o=[],s=[],c={consume:v,enter:y,exit:b,attempt:C(x),check:C(S),interrupt:C(S,{interrupt:!0})},l={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:f,now:m,defineSkip:h,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=Dg(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=Zg(a,l.events,l),l.events):[]}function f(e,t){return Gv(p(e),t)}function p(e){return Wv(o,e)}function m(){let{line:e,column:t,offset:n,_index:i,_bufferIndex:a}=r;return{line:e,column:t,offset:n,_index:i,_bufferIndex:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){J(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&Eg(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{restore:o,from:i};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Wv(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Gv(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}var Kv=t({attentionMarkers:()=>ey,contentInitial:()=>Jv,disable:()=>ty,document:()=>qv,flow:()=>Xv,flowInitial:()=>Yv,insideSpan:()=>$v,string:()=>Zv,text:()=>Qv}),qv={42:wv,43:wv,45:wv,48:wv,49:wv,50:wv,51:wv,52:wv,53:wv,54:wv,55:wv,56:wv,57:wv,62:o_},Jv={91:B_},Yv={[-2]:b_,[-1]:b_,32:b_},Xv={35:K_,42:Sv,45:[Mv,Sv],60:Z_,61:Mv,95:Sv,96:__,126:__},Zv={38:m_,92:u_},Qv={[-5]:bv,[-4]:bv,[-3]:bv,33:gv,38:m_,42:Qg,60:[n_,iv],91:vv,92:[W_,u_],93:ov,95:Qg,96:w_},$v={null:[Qg,Lv]},ey={null:[42,95]},ty={null:[]};function ny(e){let t={defined:[],lazy:{},constructs:kg([Kv,...(e||{}).extensions||[]]),content:n(Wg),document:n(Kg),flow:n(Fv),string:n(Rv),text:n(zv)};return t;function n(e){return n;function n(n){return Uv(t,e,n)}}}var ry=/[\0\t\n\r]/g;function iy(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+i.toString(a),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(ry.lastIndex=u,c=ry.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}function ay(e){for(;!O_(e););return e}function oy(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCharCode(n)}var sy=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function cy(e){return e.replace(sy,ly)}function ly(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return oy(n.slice(t?2:1),t?16:10)}return p_(n)||e}function uy(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?fy(e.position):`start`in e||`end`in e?fy(e):`line`in e||`column`in e?dy(e):``}function dy(e){return py(e&&e.line)+`:`+py(e&&e.column)}function fy(e){return dy(e&&e.start)+`-`+dy(e&&e.end)}function py(e){return e&&typeof e==`number`?e:1}var my={}.hasOwnProperty,hy=function(e,t,n){return typeof t!=`string`&&(n=t,t=void 0),gy(n)(ay(ny(n).document().write(iy()(e,t,!0))))};function gy(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:s(be),autolinkProtocol:D,autolinkEmail:D,atxHeading:s(ge),blockQuote:s(P),characterEscape:D,characterReference:D,codeFenced:s(F),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:s(F,c),codeText:s(pe,c),codeTextData:D,data:D,codeFlowValue:D,definition:s(me),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:s(he),hardBreakEscape:s(_e),hardBreakTrailing:s(_e),htmlFlow:s(ve,c),htmlFlowData:D,htmlText:s(ve,c),htmlTextData:D,image:s(ye),label:c,link:s(be),listItem:s(Se),listItemValue:m,listOrdered:s(xe,p),listUnordered:s(xe),paragraph:s(Ce),reference:ce,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:s(ge),strong:s(we),thematicBreak:s(Ee)},exit:{atxHeading:u(),atxHeadingSequence:C,autolink:u(),autolinkEmail:N,autolinkProtocol:fe,blockQuote:u(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:ue,characterReferenceMarkerNumeric:ue,characterReferenceValue:de,codeFenced:u(v),codeFencedFence:_,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:O,codeIndented:u(y),codeText:u(A),codeTextData:O,data:O,definition:u(),definitionDestinationString:S,definitionLabelString:b,definitionTitleString:x,emphasis:u(),hardBreakEscape:u(k),hardBreakTrailing:u(k),htmlFlow:u(te),htmlFlowData:O,htmlText:u(ne),htmlTextData:O,image:u(ie),label:j,labelText:ae,lineEnding:ee,link:u(re),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:le,resourceDestinationString:oe,resourceTitleString:M,resource:se,setextHeading:u(E),setextHeadingLineSequence:T,setextHeadingText:w,strong:u(),thematicBreak:u()}};vy(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let n={type:`root`,children:[]},r={stack:[n],tokenStack:[],config:t,enter:l,exit:d,buffer:c,resume:f,setData:a,getData:o},s=[],u=-1;for(;++u<e.length;)(e[u][1].type===`listOrdered`||e[u][1].type===`listUnordered`)&&(e[u][0]===`enter`?s.push(u):u=i(e,s.pop(),u));for(u=-1;++u<e.length;){let n=t[e[u][0]];my.call(n,e[u][1].type)&&n[e[u][1].type].call(Object.assign({sliceSerialize:e[u][2].sliceSerialize},r),e[u][1])}if(r.tokenStack.length>0){let e=r.tokenStack[r.tokenStack.length-1];(e[1]||by).call(r,void 0,e[0])}for(n.position={start:_y(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:_y(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},u=-1;++u<t.transforms.length;)n=t.transforms[u](n)||n;return n}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];if(t[1].type===`listUnordered`||t[1].type===`listOrdered`||t[1].type===`blockQuote`?(t[0]===`enter`?i++:i--,l=void 0):t[1].type===`lineEndingBlank`?t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0):t[1].type===`linePrefix`||t[1].type===`listItemValue`||t[1].type===`listItemMarker`||t[1].type===`listItemPrefix`||t[1].type===`listItemPrefixWhitespace`||(l=void 0),!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}t[1].type===`listItemPrefix`&&(o={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0},e.splice(r,0,[`enter`,o,t[2]]),r++,n++,c=void 0,l=!0)}}return e[t][1]._spread=a,n}function a(e,t){n[e]=t}function o(e){return n[e]}function s(e,t){return n;function n(n){l.call(this,e(n),n),t&&t.call(this,n)}}function c(){this.stack.push({type:`fragment`,children:[]})}function l(e,t,n){return this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),e.position={start:_y(t.start)},e}function u(e){return t;function t(t){e&&e.call(this,t),d.call(this,t)}}function d(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||by).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+uy({start:e.start,end:e.end})+`): it’s not open`);return n.position.end=_y(e.end),n}function f(){return Sg(this.stack.pop())}function p(){a(`expectingFirstListItemValue`,!0)}function m(e){if(o(`expectingFirstListItemValue`)){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),a(`expectingFirstListItemValue`)}}function h(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function _(){o(`flowCodeInside`)||(this.buffer(),a(`flowCodeInside`,!0))}function v(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),a(`flowCodeInside`)}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function b(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=z_(this.sliceSerialize(e)).toLowerCase()}function x(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function S(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function C(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function w(){a(`setextHeadingSlurpLineEnding`,!0)}function T(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).charCodeAt(0)===61?1:2}function E(){a(`setextHeadingSlurpLineEnding`)}function D(e){let t=this.stack[this.stack.length-1],n=t.children[t.children.length-1];(!n||n.type!==`text`)&&(n=Te(),n.position={start:_y(e.start)},t.children.push(n)),this.stack.push(n)}function O(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=_y(e.end)}function ee(e){let n=this.stack[this.stack.length-1];if(o(`atHardBreak`)){let t=n.children[n.children.length-1];t.position.end=_y(e.end),a(`atHardBreak`);return}!o(`setextHeadingSlurpLineEnding`)&&t.canContainEols.includes(n.type)&&(D.call(this,e),O.call(this,e))}function k(){a(`atHardBreak`,!0)}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.stack[this.stack.length-1];if(o(`inReference`)){let t=o(`referenceType`)||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;a(`referenceType`)}function ie(){let e=this.stack[this.stack.length-1];if(o(`inReference`)){let t=o(`referenceType`)||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;a(`referenceType`)}function ae(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=cy(t),n.identifier=z_(t).toLowerCase()}function j(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];a(`inReference`,!0),n.type===`link`?n.children=e.children:n.alt=t}function oe(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function M(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function se(){a(`inReference`)}function ce(){a(`referenceType`,`collapsed`)}function le(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=z_(this.sliceSerialize(e)).toLowerCase(),a(`referenceType`,`full`)}function ue(e){a(`characterReferenceType`,e.type)}function de(e){let t=this.sliceSerialize(e),n=o(`characterReferenceType`),r;n?(r=oy(t,n===`characterReferenceMarkerNumeric`?10:16),a(`characterReferenceType`)):r=p_(t);let i=this.stack.pop();i.value+=r,i.position.end=_y(e.end)}function fe(e){O.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function N(e){O.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function P(){return{type:`blockquote`,children:[]}}function F(){return{type:`code`,lang:null,meta:null,value:``}}function pe(){return{type:`inlineCode`,value:``}}function me(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function he(){return{type:`emphasis`,children:[]}}function ge(){return{type:`heading`,depth:void 0,children:[]}}function _e(){return{type:`break`}}function ve(){return{type:`html`,value:``}}function ye(){return{type:`image`,title:null,url:``,alt:null}}function be(){return{type:`link`,title:null,url:``,children:[]}}function xe(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function Se(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Ce(){return{type:`paragraph`,children:[]}}function we(){return{type:`strong`,children:[]}}function Te(){return{type:`text`,value:``}}function Ee(){return{type:`thematicBreak`}}}function _y(e){return{line:e.line,column:e.column,offset:e.offset}}function vy(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?vy(e,r):yy(e,r)}}function yy(e,t){let n;for(n in t)if(my.call(t,n)){if(n===`canContainEols`){let r=t[n];r&&e[n].push(...r)}else if(n===`transforms`){let r=t[n];r&&e[n].push(...r)}else if(n===`enter`||n===`exit`){let r=t[n];r&&Object.assign(e[n],r)}}}function by(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+uy({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+uy({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+uy({start:t.start,end:t.end})+`) is still open`)}function xy(e){Object.assign(this,{Parser:t=>{let n=this.data(`settings`);return hy(t,Object.assign({},n,e,{extensions:this.data(`micromarkExtensions`)||[],mdastExtensions:this.data(`fromMarkdownExtensions`)||[]}))}})}function Sy(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Cy(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function wy(e,t){let n=t.value?t.value+`
`:``,r=t.lang?t.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,i={};r&&(i.className=[`language-`+r]);let a={type:`element`,tagName:`code`,properties:i,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function Ty(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ey(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Dy(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Pg(e.charCodeAt(n+1))&&Pg(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function Oy(e,t){let n=String(t.identifier).toUpperCase(),r=Dy(n.toLowerCase()),i=e.footnoteOrder.indexOf(n),a;i===-1?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,a=e.footnoteOrder.length):(e.footnoteCounts[n]++,a=i+1);let o=e.footnoteCounts[n],s={type:`element`,tagName:`a`,properties:{href:`#`+e.clobberPrefix+`fn-`+r,id:e.clobberPrefix+`fnref-`+r+(o>1?`-`+o:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(a)}]};e.patch(t,s);let c={type:`element`,tagName:`sup`,properties:{},children:[s]};return e.patch(t,c),e.applyData(t,c)}function ky(e,t){let n=e.footnoteById,r=1;for(;r in n;)r++;let i=String(r);return n[i]={type:`footnoteDefinition`,identifier:i,children:[{type:`paragraph`,children:t.children}],position:t.position},Oy(e,{type:`footnoteReference`,identifier:i,position:t.position})}function Ay(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function jy(e,t){if(e.dangerous){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}return null}function My(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return{type:`text`,value:`![`+t.alt+r};let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function Ny(e,t){let n=e.definition(t.identifier);if(!n)return My(e,t);let r={src:Dy(n.url||``),alt:t.alt};n.title!==null&&n.title!==void 0&&(r.title=n.title);let i={type:`element`,tagName:`img`,properties:r,children:[]};return e.patch(t,i),e.applyData(t,i)}function Py(e,t){let n={src:Dy(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Fy(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Iy(e,t){let n=e.definition(t.identifier);if(!n)return My(e,t);let r={href:Dy(n.url||``)};n.title!==null&&n.title!==void 0&&(r.title=n.title);let i={type:`element`,tagName:`a`,properties:r,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function Ly(e,t){let n={href:Dy(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ry(e,t,n){let r=e.all(t),i=n?zy(n):By(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function zy(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=By(n[r])}return t}function By(e){return e.spread??e.children.length>1}function Vy(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Hy(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Uy(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Wy(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Gy=Jy(`start`),Ky=Jy(`end`);function qy(e){return{start:Gy(e),end:Ky(e)}}function Jy(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};return{line:n.line||null,column:n.column||null,offset:n.offset>-1?n.offset:null}}}function Yy(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Gy(t.children[1]),o=Ky(t.children[t.children.length-1]);a.line&&o.line&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Xy(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(t,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Zy(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Qy=9,$y=32;function eb(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(tb(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(tb(t.slice(i),i>0,!1)),a.join(``)}function tb(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Qy||t===$y;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Qy||t===$y;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function nb(e,t){let n={type:`text`,value:eb(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function rb(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var ib={blockquote:Sy,break:Cy,code:wy,delete:Ty,emphasis:Ey,footnoteReference:Oy,footnote:ky,heading:Ay,html:jy,imageReference:Ny,image:Py,inlineCode:Fy,linkReference:Iy,link:Ly,listItem:Ry,list:Vy,paragraph:Hy,root:Uy,strong:Wy,table:Yy,tableCell:Zy,tableRow:Xy,text:nb,thematicBreak:rb,toml:ab,yaml:ab,definition:ab,footnoteDefinition:ab};function ab(){return null}var ob=(function(e){if(e==null)return db;if(typeof e==`string`)return lb(e);if(typeof e==`object`)return Array.isArray(e)?sb(e):cb(e);if(typeof e==`function`)return ub(e);throw Error(`Expected function, string, or object as test`)});function sb(e){let t=[],n=-1;for(;++n<e.length;)t[n]=ob(e[n]);return ub(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].call(this,...e))return!0;return!1}}function cb(e){return ub(t);function t(t){let n;for(n in e)if(t[n]!==e[n])return!1;return!0}}function lb(e){return ub(t);function t(t){return t&&t.type===e}}function ub(e){return t;function t(t,...n){return!!(t&&typeof t==`object`&&`type`in t&&e.call(this,t,...n))}}function db(){return!0}function fb(e){return e}var pb=(function(e,t,n,r){typeof t==`function`&&typeof n!=`function`&&(r=n,n=t,t=null);let i=ob(t),a=r?-1:1;o(e,void 0,[])();function o(e,s,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+fb(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=[],u,d,f;if((!t||i(e,s,c[c.length-1]||null))&&(l=mb(n(e,c)),l[0]===!1))return l;if(e.children&&l[0]!==`skip`)for(d=(r?e.children.length:-1)+a,f=c.concat(e);d>-1&&d<e.children.length;){if(u=o(e.children[d],d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+a}return l}}});function mb(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:[e]}var hb=(function(e,t,n,r){typeof t==`function`&&typeof n!=`function`&&(r=n,n=t,t=null),pb(e,t,i,r);function i(e,t){let r=t[t.length-1];return n(e,r?r.children.indexOf(e):null,r)}});function gb(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}var _b={}.hasOwnProperty;function vb(e){let t=Object.create(null);if(!e||!e.type)throw Error(`mdast-util-definitions expected node`);return hb(e,`definition`,e=>{let n=yb(e.identifier);n&&!_b.call(t,n)&&(t[n]=e)}),n;function n(e){let n=yb(e);return n&&_b.call(t,n)?t[n]:null}}function yb(e){return String(e||``).toUpperCase()}var bb={}.hasOwnProperty;function xb(e,t){let n=t||{},r=n.allowDangerousHtml||!1,i={};return o.dangerous=r,o.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?`user-content-`:n.clobberPrefix,o.footnoteLabel=n.footnoteLabel||`Footnotes`,o.footnoteLabelTagName=n.footnoteLabelTagName||`h2`,o.footnoteLabelProperties=n.footnoteLabelProperties||{className:[`sr-only`]},o.footnoteBackLabel=n.footnoteBackLabel||`Back to content`,o.unknownHandler=n.unknownHandler,o.passThrough=n.passThrough,o.handlers={...ib,...n.handlers},o.definition=vb(e),o.footnoteById=i,o.footnoteOrder=[],o.footnoteCounts={},o.patch=Sb,o.applyData=Cb,o.one=s,o.all=c,o.wrap=Db,o.augment=a,hb(e,`footnoteDefinition`,e=>{let t=String(e.identifier).toUpperCase();bb.call(i,t)||(i[t]=e)}),o;function a(e,t){if(e&&`data`in e&&e.data){let n=e.data;n.hName&&(t.type!==`element`&&(t={type:`element`,tagName:``,properties:{},children:[]}),t.tagName=n.hName),t.type===`element`&&n.hProperties&&(t.properties={...t.properties,...n.hProperties}),`children`in t&&t.children&&n.hChildren&&(t.children=n.hChildren)}if(e){let n=`type`in e?e:{position:e};gb(n)||(t.position={start:Gy(n),end:Ky(n)})}return t}function o(e,t,n,r){return Array.isArray(n)&&(r=n,n={}),a(e,{type:`element`,tagName:t,properties:n||{},children:r||[]})}function s(e,t){return wb(o,e,t)}function c(e){return Tb(o,e)}}function Sb(e,t){e.position&&(t.position=qy(e))}function Cb(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:[]}),n.type===`element`&&i&&(n.properties={...n.properties,...i}),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function wb(e,t,n){let r=t&&t.type;if(!r)throw Error("Expected node, got `"+t+"`");return bb.call(e.handlers,r)?e.handlers[r](e,t,n):e.passThrough&&e.passThrough.includes(r)?`children`in t?{...t,children:Tb(e,t)}:t:e.unknownHandler?e.unknownHandler(e,t,n):Eb(e,t)}function Tb(e,t){let n=[];if(`children`in t){let r=t.children,i=-1;for(;++i<r.length;){let a=wb(e,r[i],t);if(a){if(i&&r[i-1].type===`break`&&(!Array.isArray(a)&&a.type===`text`&&(a.value=a.value.replace(/^\s+/,``)),!Array.isArray(a)&&a.type===`element`)){let e=a.children[0];e&&e.type===`text`&&(e.value=e.value.replace(/^\s+/,``))}Array.isArray(a)?n.push(...a):n.push(a)}}}return n}function Eb(e,t){let n=t.data||{},r=`value`in t&&!(bb.call(n,`hProperties`)||bb.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:Tb(e,t)};return e.patch(t,r),e.applyData(t,r)}function Db(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Ob(e){let t=[],n=-1;for(;++n<e.footnoteOrder.length;){let r=e.footnoteById[e.footnoteOrder[n]];if(!r)continue;let i=e.all(r),a=String(r.identifier).toUpperCase(),o=Dy(a.toLowerCase()),s=0,c=[];for(;++s<=e.footnoteCounts[a];){let t={type:`element`,tagName:`a`,properties:{href:`#`+e.clobberPrefix+`fnref-`+o+(s>1?`-`+s:``),dataFootnoteBackref:!0,className:[`data-footnote-backref`],ariaLabel:e.footnoteBackLabel},children:[{type:`text`,value:`↩`}]};s>1&&t.children.push({type:`element`,tagName:`sup`,children:[{type:`text`,value:String(s)}]}),c.length>0&&c.push({type:`text`,value:` `}),c.push(t)}let l=i[i.length-1];if(l&&l.type===`element`&&l.tagName===`p`){let e=l.children[l.children.length-1];e&&e.type===`text`?e.value+=` `:l.children.push({type:`text`,value:` `}),l.children.push(...c)}else i.push(...c);let u={type:`element`,tagName:`li`,properties:{id:e.clobberPrefix+`fn-`+o},children:e.wrap(i,!0)};e.patch(r,u),t.push(u)}if(t.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:e.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:`footnote-label`},children:[{type:`text`,value:e.footnoteLabel}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(t,!0)},{type:`text`,value:`
`}]}}function kb(e,t){let n=xb(e,t),r=n.one(e,null),i=Ob(n);return i&&r.children.push({type:`text`,value:`
`},i),Array.isArray(r)?{type:`root`,children:r}:r}var Ab=(function(e,t){return e&&`run`in e?jb(e,t):Mb(e||t)});function jb(e,t){return(n,r,i)=>{e.run(kb(n,t),r,e=>{i(e)})}}function Mb(e){return t=>kb(t,e)}var Nb=class{constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}};Nb.prototype.property={},Nb.prototype.normal={},Nb.prototype.space=null;function Pb(e,t){let n={},r={},i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new Nb(n,r,t)}function Fb(e){return e.toLowerCase()}var Ib=class{constructor(e,t){this.property=e,this.attribute=t}};Ib.prototype.space=null,Ib.prototype.boolean=!1,Ib.prototype.booleanish=!1,Ib.prototype.overloadedBoolean=!1,Ib.prototype.number=!1,Ib.prototype.commaSeparated=!1,Ib.prototype.spaceSeparated=!1,Ib.prototype.commaOrSpaceSeparated=!1,Ib.prototype.mustUseProperty=!1,Ib.prototype.defined=!1;var Lb=t({boolean:()=>Z,booleanish:()=>zb,commaOrSpaceSeparated:()=>Hb,commaSeparated:()=>Vb,number:()=>Q,overloadedBoolean:()=>Bb,spaceSeparated:()=>$}),Rb=0,Z=Ub(),zb=Ub(),Bb=Ub(),Q=Ub(),$=Ub(),Vb=Ub(),Hb=Ub();function Ub(){return 2**++Rb}var Wb=Object.keys(Lb),Gb=class extends Ib{constructor(e,t,n,r){let i=-1;if(super(e,t),Kb(this,`space`,r),typeof n==`number`)for(;++i<Wb.length;){let e=Wb[i];Kb(this,Wb[i],(n&Lb[e])===Lb[e])}}};Gb.prototype.defined=!0;function Kb(e,t,n){n&&(e[t]=n)}var qb={}.hasOwnProperty;function Jb(e){let t={},n={},r;for(r in e.properties)if(qb.call(e.properties,r)){let i=e.properties[r],a=new Gb(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Fb(r)]=r,n[Fb(a.attribute)]=r}return new Nb(t,n,e.space)}var Yb=Jb({space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Xb=Jb({space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Zb(e,t){return t in e?e[t]:t}function Qb(e,t){return Zb(e,t.toLowerCase())}var $b=Jb({space:`xmlns`,attributes:{xmlnsxlink:`xmlns:xlink`},transform:Qb,properties:{xmlns:null,xmlnsXLink:null}}),ex=Jb({transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:zb,ariaAutoComplete:null,ariaBusy:zb,ariaChecked:zb,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:$,ariaCurrent:null,ariaDescribedBy:$,ariaDetails:null,ariaDisabled:zb,ariaDropEffect:$,ariaErrorMessage:null,ariaExpanded:zb,ariaFlowTo:$,ariaGrabbed:zb,ariaHasPopup:null,ariaHidden:zb,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:$,ariaLevel:Q,ariaLive:null,ariaModal:zb,ariaMultiLine:zb,ariaMultiSelectable:zb,ariaOrientation:null,ariaOwns:$,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:zb,ariaReadOnly:zb,ariaRelevant:null,ariaRequired:zb,ariaRoleDescription:$,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:zb,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null}}),tx=Jb({space:`html`,attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},transform:Qb,mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:Vb,acceptCharset:$,accessKey:$,action:null,allow:null,allowFullScreen:Z,allowPaymentRequest:Z,allowUserMedia:Z,alt:null,as:null,async:Z,autoCapitalize:null,autoComplete:$,autoFocus:Z,autoPlay:Z,blocking:$,capture:null,charSet:null,checked:Z,cite:null,className:$,cols:Q,colSpan:null,content:null,contentEditable:zb,controls:Z,controlsList:$,coords:Q|Vb,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Z,defer:Z,dir:null,dirName:null,disabled:Z,download:Bb,draggable:zb,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Z,formTarget:null,headers:$,height:Q,hidden:Z,high:Q,href:null,hrefLang:null,htmlFor:$,httpEquiv:$,id:null,imageSizes:null,imageSrcSet:null,inert:Z,inputMode:null,integrity:null,is:null,isMap:Z,itemId:null,itemProp:$,itemRef:$,itemScope:Z,itemType:$,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Z,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:Z,muted:Z,name:null,nonce:null,noModule:Z,noValidate:Z,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Z,optimum:Q,pattern:null,ping:$,placeholder:null,playsInline:Z,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Z,referrerPolicy:null,rel:$,required:Z,reversed:Z,rows:Q,rowSpan:Q,sandbox:$,scope:null,scoped:Z,seamless:Z,selected:Z,shadowRootClonable:Z,shadowRootDelegatesFocus:Z,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:zb,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:Z,useMap:null,value:zb,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:$,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Z,declare:Z,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:Z,noHref:Z,noShade:Z,noWrap:Z,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:zb,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Z,disableRemotePlayback:Z,prefix:null,property:null,results:Q,security:null,unselectable:null}}),nx=Jb({space:`svg`,attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},transform:Zb,properties:{about:Hb,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:$,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:Z,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Vb,g2:Vb,glyphName:Vb,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:Hb,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:$,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Hb,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Hb,rev:Hb,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Hb,requiredFeatures:Hb,requiredFonts:Hb,requiredFormats:Hb,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:Hb,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Hb,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Hb,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),rx=/^data[-\w.:]+$/i,ix=/-[a-z]/g,ax=/[A-Z]/g;function ox(e,t){let n=Fb(t),r=t,i=Ib;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&rx.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(ix,cx);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!ix.test(e)){let n=e.replace(ax,sx);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=Gb}return new i(r,t)}function sx(e){return`-`+e.toLowerCase()}function cx(e){return e.charAt(1).toUpperCase()}var lx={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},ux=Pb([Xb,Yb,$b,ex,tx],`html`),dx=Pb([Xb,Yb,$b,ex,nx],`svg`),fx=(function(e){if(e==null)return _x;if(typeof e==`string`)return hx(e);if(typeof e==`object`)return Array.isArray(e)?px(e):mx(e);if(typeof e==`function`)return gx(e);throw Error(`Expected function, string, or object as test`)});function px(e){let t=[],n=-1;for(;++n<e.length;)t[n]=fx(e[n]);return gx(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].call(this,...e))return!0;return!1}}function mx(e){return gx(t);function t(t){let n;for(n in e)if(t[n]!==e[n])return!1;return!0}}function hx(e){return gx(t);function t(t){return t&&t.type===e}}function gx(e){return t;function t(t,...n){return!!(t&&typeof t==`object`&&`type`in t&&e.call(this,t,...n))}}function _x(){return!0}function vx(e){return e}var yx=(function(e,t,n,r){typeof t==`function`&&typeof n!=`function`&&(r=n,n=t,t=null);let i=fx(t),a=r?-1:1;o(e,void 0,[])();function o(e,s,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+vx(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=[],u,d,f;if((!t||i(e,s,c[c.length-1]||null))&&(l=bx(n(e,c)),l[0]===!1))return l;if(e.children&&l[0]!==`skip`)for(d=(r?e.children.length:-1)+a,f=c.concat(e);d>-1&&d<e.children.length;){if(u=o(e.children[d],d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+a}return l}}});function bx(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:[e]}var xx=(function(e,t,n,r){typeof t==`function`&&typeof n!=`function`&&(r=n,n=t,t=null),yx(e,t,i,r);function i(e,t){let r=t[t.length-1];return n(e,r?r.children.indexOf(e):null,r)}});function Sx(e){if(e.allowedElements&&e.disallowedElements)throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{xx(t,`element`,(t,n,r)=>{let i=r,a;if(e.allowedElements?a=!e.allowedElements.includes(t.tagName):e.disallowedElements&&(a=e.disallowedElements.includes(t.tagName)),!a&&e.allowElement&&typeof n==`number`&&(a=!e.allowElement(t,n,i)),a&&typeof n==`number`)return e.unwrapDisallowed&&t.children?i.children.splice(n,1,...t.children):i.children.splice(n,1),n})}}var Cx=n((e=>{var t=Symbol.for(`react.fragment`),n=Symbol.for(`react.strict_mode`),r=Symbol.for(`react.profiler`),i=Symbol.for(`react.provider`),a=Symbol.for(`react.context`),o=Symbol.for(`react.forward_ref`),s=Symbol.for(`react.suspense`),c=Symbol.for(`react.suspense_list`),l=Symbol.for(`react.memo`),u=Symbol.for(`react.lazy`),d=Symbol.for(`react.offscreen`),f=Symbol.for(`react.module.reference`);e.isValidElementType=function(e){return!!(typeof e==`string`||typeof e==`function`||e===t||e===r||e===n||e===s||e===c||e===d||typeof e==`object`&&e&&(e.$$typeof===u||e.$$typeof===l||e.$$typeof===i||e.$$typeof===a||e.$$typeof===o||e.$$typeof===f||e.getModuleId!==void 0))}})),wx=e(n(((e,t)=>{t.exports=Cx()}))(),1);function Tx(e){let t=e&&typeof e==`object`&&e.type===`text`?e.value||``:e;return typeof t==`string`&&t.replace(/[ \t\n\f\r]/g,``)===``}function Ex(e){return e.join(` `).trim()}function Dx(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var Ox=e(n(((e,t)=>{var n=we();function r(e,t){var r=null;if(!e||typeof e!=`string`)return r;for(var i,a=n(e),o=typeof t==`function`,s,c,l=0,u=a.length;l<u;l++)i=a[l],s=i.property,c=i.value,o?t(s,c,i):c&&(r||={},r[s]=c);return r}t.exports=r,t.exports.default=r}))(),1).default,kx={}.hasOwnProperty,Ax=new Set([`table`,`thead`,`tbody`,`tfoot`,`tr`]);function jx(e,t){let n=[],r=-1,i;for(;++r<t.children.length;)i=t.children[r],i.type===`element`?n.push(Mx(e,i,r,t)):i.type===`text`?(t.type!==`element`||!Ax.has(t.tagName)||!Tx(i))&&n.push(i.value):i.type===`raw`&&!e.options.skipHtml&&n.push(i.value);return n}function Mx(e,t,n,r){let i=e.options,a=i.transformLinkUri===void 0?Ah:i.transformLinkUri,o=e.schema,s=t.tagName,c={},l=o,u;if(o.space===`html`&&s===`svg`&&(l=dx,e.schema=l),t.properties)for(u in t.properties)kx.call(t.properties,u)&&Fx(c,u,t.properties[u],e);(s===`ol`||s===`ul`)&&e.listDepth++;let d=jx(e,t);(s===`ol`||s===`ul`)&&e.listDepth--,e.schema=o;let f=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},p=i.components&&kx.call(i.components,s)?i.components[s]:s,m=typeof p==`string`||p===W.default.Fragment;if(!wx.isValidElementType(p))throw TypeError(`Component for name \`${s}\` not defined or is not renderable`);if(c.key=[s,f.start.line,f.start.column,n].join(`-`),s===`a`&&i.linkTarget&&(c.target=typeof i.linkTarget==`function`?i.linkTarget(String(c.href||``),t.children,typeof c.title==`string`?c.title:null):i.linkTarget),s===`a`&&a&&(c.href=a(String(c.href||``),t.children,typeof c.title==`string`?c.title:null)),!m&&s===`code`&&r.type===`element`&&r.tagName!==`pre`&&(c.inline=!0),!m&&(s===`h1`||s===`h2`||s===`h3`||s===`h4`||s===`h5`||s===`h6`)&&(c.level=Number.parseInt(s.charAt(1),10)),s===`img`&&i.transformImageUri&&(c.src=i.transformImageUri(String(c.src||``),String(c.alt||``),typeof c.title==`string`?c.title:null)),!m&&s===`li`&&r.type===`element`){let e=Nx(t);c.checked=e&&e.properties?!!e.properties.checked:null,c.index=Px(r,t),c.ordered=r.tagName===`ol`}return!m&&(s===`ol`||s===`ul`)&&(c.ordered=s===`ol`,c.depth=e.listDepth),(s===`td`||s===`th`)&&(c.align&&(c.style||={},c.style.textAlign=c.align,delete c.align),m||(c.isHeader=s===`th`)),!m&&s===`tr`&&r.type===`element`&&(c.isHeader=r.tagName===`thead`),i.sourcePos&&(c[`data-sourcepos`]=Rx(f)),!m&&i.rawSourcePos&&(c.sourcePosition=t.position),!m&&i.includeElementIndex&&(c.index=Px(r,t),c.siblingCount=Px(r)),m||(c.node=t),d.length>0?W.createElement(p,c,d):W.createElement(p,c)}function Nx(e){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n.type===`element`&&n.tagName===`input`)return n}return null}function Px(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)e.children[n].type===`element`&&r++;return r}function Fx(e,t,n,r){let i=ox(r.schema,t),a=n;a!=null&&a===a&&(Array.isArray(a)&&(a=i.commaSeparated?Dx(a):Ex(a)),i.property===`style`&&typeof a==`string`&&(a=Ix(a)),i.space&&i.property?e[kx.call(lx,i.property)?lx[i.property]:i.property]=a:i.attribute&&(e[i.attribute]=a))}function Ix(e){let t={};try{Ox(e,n)}catch{}return t;function n(e,n){let r=e.slice(0,4)===`-ms-`?`ms-${e.slice(4)}`:e;t[r.replace(/-([a-z])/g,Lx)]=n}}function Lx(e,t){return t.toUpperCase()}function Rx(e){return[e.start.line,`:`,e.start.column,`-`,e.end.line,`:`,e.end.column].map(String).join(``)}var zx={}.hasOwnProperty,Bx=`https://github.com/remarkjs/react-markdown/blob/main/changelog.md`,Vx={plugins:{to:`remarkPlugins`,id:`change-plugins-to-remarkplugins`},renderers:{to:`components`,id:`change-renderers-to-components`},astPlugins:{id:`remove-buggy-html-in-markdown-parser`},allowDangerousHtml:{id:`remove-buggy-html-in-markdown-parser`},escapeHtml:{id:`remove-buggy-html-in-markdown-parser`},source:{to:`children`,id:`change-source-to-children`},allowNode:{to:`allowElement`,id:`replace-allownode-allowedtypes-and-disallowedtypes`},allowedTypes:{to:`allowedElements`,id:`replace-allownode-allowedtypes-and-disallowedtypes`},disallowedTypes:{to:`disallowedElements`,id:`replace-allownode-allowedtypes-and-disallowedtypes`},includeNodeIndex:{to:`includeElementIndex`,id:`change-includenodeindex-to-includeelementindex`}};function Hx(e){for(let t in Vx)if(zx.call(Vx,t)&&zx.call(e,t)){let e=Vx[t];console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:`remove`} \`${t}\` (see <${Bx}#${e.id}> for more info)`),delete Vx[t]}let t=cg().use(xy).use(e.remarkPlugins||[]).use(Ab,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(Sx,e),n=new Qh;typeof e.children==`string`?n.value=e.children:e.children!==void 0&&e.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);let r=t.runSync(t.parse(n),n);if(r.type!==`root`)throw TypeError("Expected a `root` node");let i=W.createElement(W.default.Fragment,{},jx({options:e,schema:ux,listDepth:0},r));return e.className&&(i=W.createElement(`div`,{className:e.className},i)),i}Hx.propTypes={children:V.default.string,className:V.default.string,allowElement:V.default.func,allowedElements:V.default.arrayOf(V.default.string),disallowedElements:V.default.arrayOf(V.default.string),unwrapDisallowed:V.default.bool,remarkPlugins:V.default.arrayOf(V.default.oneOfType([V.default.object,V.default.func,V.default.arrayOf(V.default.oneOfType([V.default.bool,V.default.string,V.default.object,V.default.func,V.default.arrayOf(V.default.any)]))])),rehypePlugins:V.default.arrayOf(V.default.oneOfType([V.default.object,V.default.func,V.default.arrayOf(V.default.oneOfType([V.default.bool,V.default.string,V.default.object,V.default.func,V.default.arrayOf(V.default.any)]))])),sourcePos:V.default.bool,rawSourcePos:V.default.bool,skipHtml:V.default.bool,includeElementIndex:V.default.bool,transformLinkUri:V.default.oneOfType([V.default.func,V.default.bool]),linkTarget:V.default.oneOfType([V.default.func,V.default.string]),transformImageUri:V.default.func,components:V.default.object},N();var Ux=P.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 1.167em;
  border-radius: 16px;
  background: var(--vst-frost-2);
  pointer-events: none;

  color: var(--vst-ai-4);
  font-size: 0.75em;
  font-weight: bold;
  line-height: 1;
`,Wx={FootnoteButton:P.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 1lh;
  line-height: inherit;
  padding: 0;
  margin: 0 3px;
  border: 0;
  background: transparent;
  vertical-align: middle;

  &:focus-visible {
    outline: none;
  }

  &:hover ${Ux} {
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
  }

  &:focus ${Ux} {
    outline: 2px solid var(--vst-ai-4);
    outline-offset: 2px;
  }
`,FootnoteBadge:Ux,TermButton:P.span`
    text-decoration: underline dotted;
    font-weight: 600;
    cursor: pointer;
    border-radius: 2px;

    &:focus {
      outline-offset: 0;
      outline: 2px solid var(--vst-ai-4);
    }
  `};function Gx({entry:e,source:t,index:n}){let r=I(),{tocFlatData:i}=Jr(),{currentPageCfi:o,goToCFI:s}=nt(),{event:c}=Oh(e),{bookInfo:l}=ht(),u=l.vbkType===mt.EPUB;if(!t)return null;let d=i.find(e=>e.path.split(`#`)[0]===t.htmlPath),f=d?d.page?r.formatMessage({id:`ai.footnote.tooltipLabel`},{title:d.title,pageNumber:d.page}):d.title:r.formatMessage({id:`nav.goToPage`}),p=d?d?.cfi.split(`!`)[0]+`!`:o+`!`;return(0,K.jsx)(ai.default,{placement:`top`,title:f,children:(0,K.jsx)(Wx.FootnoteButton,{type:`button`,"aria-label":f,onClick:()=>{s(u?p+t.cfi:t.cfi),c(yn.CLICK_LINK,`${t.htmlPath}#${t.cfi}`),a(`citation_link_clicked`,{htmlPath:t.htmlPath,cfi:t.cfi})},children:(0,K.jsx)(Wx.FootnoteBadge,{children:n+1})})})}function Kx(e,t){return t?Object.keys(t).reduce((e,t)=>{let n=RegExp(`\\b(${E(t)})\\b`,`ig`);return e.replace(n,`[$1](term-link)`)},e):e}function qx({entry:e,definitions:t,...n}){let[r,i]=(0,W.useState)(!1),{event:a}=Oh(e),[o,s]=(0,W.useMemo)(()=>{let e=``,r=``;return Object.keys(t).forEach(i=>{i.toLowerCase()===n.children[0].toLowerCase()&&(e=i,r=t[i])}),[e,r]},[t,n.children]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Wx.TermButton,{...n,onClick:()=>{i(!0),a(yn.CLICK_DEFINITION,`term: ${o}, click`)},role:`button`,onKeyUp:e=>{e.key===`Enter`&&i(!0),a(yn.CLICK_DEFINITION,`term: ${o}, key`)},tabIndex:0}),(0,K.jsx)(U.Dialog,{open:r,title:o,onRequestClose:()=>i(!1),children:s})]})}function Jx({interaction:e,entry:t,liveLinks:n,sourceOffset:r}){return(0,K.jsx)(Hx,{components:{a(i){return i.href===`vst-cfi`?n?(0,K.jsx)(K.Fragment,{children:e.sources.map((e,n)=>(0,K.jsx)(Gx,{source:e,entry:t,index:n+r},n))}):null:n?(0,K.jsx)(qx,{definitions:t.answer.definitions,entry:t,children:i.children}):(0,K.jsx)(`strong`,{children:i.children})}},children:Kx(e.text+` [](vst-cfi)`,t.answer.definitions)},e.text)}function Yx({entry:e,liveLinks:t}){let n=0;return(0,K.jsx)(K.Fragment,{children:e.answer?.interaction.map(r=>{let i=n;return n+=r.sources.length,(0,K.jsx)(Jx,{interaction:r,entry:e,liveLinks:t,sourceOffset:i},r.text)})})}function Xx(){let[e,t]=(0,W.useState)(!1),{rate:n,voiceIndex:r,voices:i}=ti(),{pause:a,resume:o}=$r(``),s=Br(),c=Xe(s),l=(0,W.useCallback)(()=>{t(!1)},[]),u=(0,W.useCallback)(()=>{e&&window.speechSynthesis.cancel()},[e]),d=(0,W.useCallback)(()=>s===wt.PLAYING?a():Promise.resolve(),[a,s]),f=(0,W.useCallback)(async e=>{await d();let a=new SpeechSynthesisUtterance(e);a.rate=n;let o=window.speechSynthesis.getVoices(),s=i[r];s.lang.startsWith(`en`)||(s=i.find(e=>e.lang.startsWith(`en`))),s&&(a.voice=o.find(e=>e.name===s.name&&e.lang===s.lang)||null),a.onend=()=>{l()},a.onerror=()=>{l()},window.speechSynthesis.cancel(),window.speechSynthesis.speak(a),t(!0)},[d,n,r,i,l]);return Ue(u),(0,W.useEffect)(()=>{e&&s===wt.PLAYING&&c!==wt.PLAYING&&d().then(()=>{u(),o()})},[d,s,o,e,c,u]),(0,W.useMemo)(()=>({isPlaying:e,play:f,stop:u}),[e,f,u])}N();var Zx={Header:P.h4`
    color: var(--vst-ai-4);
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 700;
    margin-bottom: 4px;
    margin-top: 40px;
  `,Options:P.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      background: ${H.frost.getShade(2)};
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: 400;
      padding: 4px 12px;
      border-radius: 3rem;
      text-align: start;

      &:focus {
        outline-offset: 2px;
        outline: 2px solid var(--vst-ai-4);
      }
    }
  `};function Qx({answer:e,noHeader:t}){let n=I(),{ask:r}=Am();return!e.possible_responses||e.possible_responses.length===0?null:(0,K.jsxs)(K.Fragment,{children:[!t&&(0,K.jsxs)(Zx.Header,{children:[e.possible_responses_header||n.formatMessage({id:`ai.continueLearning`}),`:`]}),(0,K.jsx)(Zx.Options,{children:e.possible_responses.map((e,t)=>(0,K.jsx)(`li`,{children:(0,K.jsx)(`button`,{onClick:()=>r(e),children:e})},t))})]})}N();var $x={Container:P.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: -0.8rem;
    margin-inline: -0.4rem;

    & > * {
      display: flex;
      gap: 4px;
    }

    button {
      &:hover,
      &:focus {
        background-color: transparent !important;
        border-color: transparent !important;
        box-shadow: none !important;
        outline-offset: -2px;
        outline: 2px solid var(--vst-ai-4);
      }
    }
  `,FeedbackRow:P.div`
    & > * {
      margin-inline: -0.4rem;
    }
  `,CopyButton:P(Qi)`
    --vst-icon-button-icon-color: ${H.frost.getShade(6)};
    vertical-align: top;
  `};function eS(e){let{icon:t}=e;return(0,K.jsx)(U.IconButton,{icon:t,customIconColor:H.frost.getShade(6),customIconFocusColor:H.frost.getShade(6),customIconFocusBGColor:!0,color:`custom`,size:`small`,rounded:!0,...e})}function tS({entry:e}){let t=I(),{onThumbsUp:n,onThumbsDown:r,event:i}=Oh(e),a=(0,W.useRef)(null),o=(0,W.useRef)(null),{isPlaying:s,play:c,stop:l}=Xx();return(0,K.jsxs)($x.Container,{children:[(0,K.jsxs)(`div`,{children:[s?(0,K.jsx)(eS,{icon:(0,K.jsx)(G.Stop,{}),onClick:()=>{l()},label:t.formatMessage({id:`base.stop`})}):(0,K.jsx)(eS,{icon:(0,K.jsx)(G.SpeakerOutline,{}),onClick:()=>{c(a.current.innerText+` `+o.current.innerText),i(yn.SPEAK)},label:t.formatMessage({id:`base.play`})}),(0,K.jsx)($x.CopyButton,{className:`vst-icon-button-circle vst-icon-button-size-small`,"aria-label":t.formatMessage({id:`base.copy`}),defaultTooltip:t.formatMessage({id:`base.copy`}),textToCopy:()=>a.current?.innerHTML,copy:fr,onCopied:()=>i(yn.COPY),children:(0,K.jsx)(G.Copy,{})}),(0,K.jsxs)(`div`,{style:{display:`none`},children:[(0,K.jsx)(`div`,{ref:a,children:(0,K.jsx)(Yx,{entry:e,liveLinks:!1})}),(0,K.jsx)(`div`,{ref:o,children:(0,K.jsx)(Qx,{answer:e.answer,noHeader:!0})})]})]}),(0,K.jsxs)($x.FeedbackRow,{children:[(0,K.jsx)(eS,{icon:(0,K.jsx)(om,{fill:fn(e,1)?`#00FF00`:`none`}),onClick:n,label:t.formatMessage({id:`ai.thumbsUp`})}),(0,K.jsx)(eS,{icon:(0,K.jsx)(sm,{fill:fn(e,0)?`#FF0000`:`none`}),onClick:r,label:t.formatMessage({id:`ai.thumbsDown`})})]})]})}N();var nS={Row:P.div`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
    margin-block: 16px;

    &:empty {
      display: none;
    }
  `,ImageButton:P.button`
    width: 100%;
    aspect-ratio: 1;
    cursor: zoom-in;
    border: 1px solid ${H.cloud.getShade(4)};
    border-radius: 4px;
    background-color: white;
    overflow: hidden;

    &:hover {
      outline: 0;
      box-shadow: rgb(236, 236, 236) 0 0 0 4px;
    }

    &:focus {
      outline: 0;
      box-shadow: rgb(236, 236, 236) 0 0 0 4px, rgb(255, 255, 255) 0 0 0 6px,
        var(--vst-ai-4) 0 0 0 8px;
    }
  `,Image:P.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  `};function rS({image:e}){let[t,n]=(0,W.useState)(!1),r=I(),i=Fn(),a=`https://${window.Jigsaw.host}/books/${i}/epub/${e.path}`;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(nS.ImageButton,{onClick:()=>n(!0),"aria-label":r.formatMessage({id:`imageZoom.viewImage`}),children:(0,K.jsx)(nS.Image,{src:a})}),(0,K.jsx)(tr,{open:t,onRequestClose:()=>n(!1),src:a,description:``})]})}function iS({images:e}){return(0,K.jsx)(nS.Row,{children:e.map(e=>(0,K.jsx)(rS,{image:e},e.path))})}N();var aS={Container:P.ul`
    margin-block: 16px;

    dl {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
    }

    li {
      margin-block: 24px;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    dt {
      font-weight: 700;
    }
  `};function oS({flashcards:e}){return!e||e.length===0?null:(0,K.jsx)(aS.Container,{children:e.map(e=>(0,K.jsx)(`li`,{children:(0,K.jsxs)(`dl`,{children:[(0,K.jsx)(`dt`,{children:(0,K.jsx)(w,{id:`ai.cardFront`})}),(0,K.jsx)(`dd`,{children:e.front}),(0,K.jsx)(`dt`,{children:(0,K.jsx)(w,{id:`ai.cardBack`})}),(0,K.jsx)(`dd`,{children:e.back})]})},e.front))})}function sS(e){let{createDeck:t}=uf(),{createFlashcard:n}=ep(),[r,i]=(0,W.useState)(p.WAITING),{openPanel:a}=Sa(),o=(0,W.useRef)(``),s=e.question,{event:c}=Oh(e),l=(0,W.useCallback)(()=>{a(q.NOTEBOOK,{panelTab:_p.FLASHCARDS,metaData:{local:{deckUUID:o.current}}})},[a]),u=(0,W.useCallback)(async()=>{if(r!==p.WAITING||!e.answer?.data?.flashcards)return;i(p.FETCHING);let a=await t({title:s});o.current=a.payload.result;let l=e?.answer?.data?.flashcards?.map(e=>n({deckUUID:o.current,front:{content:e.front,type:x.TEXT},back:{content:e.back,type:x.TEXT}}));Promise.all(l).then(()=>i(p.OK)).catch(()=>i(p.ERROR)),c(yn.CREATE_FLASHCARDS,`deck: ${s}`)},[e,t,n,r,s,c]);return(0,W.useMemo)(()=>({onViewFlashcards:l,onCreateFlashcards:u,creationStatus:r,deckName:s}),[l,u,r,s])}N();var cS={Button:P.button`
    margin-top: 16px;
  `};function lS({entry:e}){let{creationStatus:t,onViewFlashcards:n,onCreateFlashcards:r,deckName:i}=sS(e),[a,o]=(0,W.useState)(!1),s=I();if(!e.answer?.data.flashcards||e.answer?.data.flashcards.length===0)return null;let c=t===p.OK;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(U.Toast,{open:c&&!a,toastType:`success`,toastClose:()=>o(!0),toastTitleText:s.formatMessage({id:`ai.deckCreatedTitle`}),toastDescriptionText:s.formatMessage({id:`ai.deckCreatedBody`},{name:i}),toastLinkButtonText:s.formatMessage({id:`ai.studyFlashcards`}),toastLinkButtonOnClick:n}),c?(0,K.jsx)(cS.Button,{className:`vst-button-pill`,onClick:n,children:(0,K.jsx)(w,{id:`ai.studyFlashcards`})}):(0,K.jsx)(cS.Button,{className:`vst-button-pill`,onClick:r,children:(0,K.jsx)(w,{id:`ai.saveFlashcards`})})]})}function uS(e){let t=z(),n=(0,W.useRef)(`idle`);return(0,W.useCallback)(async()=>{if(n.current!==`idle`)return;n.current=`sending`;let r=await t(xn(e));n.current=r?.ok?`reported`:`idle`},[t,e])}N();var dS={Wrapper:P.div`
    margin-block: 24px;
  `};function fS({entry:e}){let t=I(),{openPanel:n}=Sa(),r=R(sn),{currentVal:i}=cr(pr.COACH_ME_DISABLED),{isCoachMeDeactivated:a}=na(),o=uS(e),s=e.answer?.data?.coachMe;return a||i||!s?.enrichmentId||!r.some(e=>e.id===s.enrichmentId)?null:(0,K.jsx)(dS.Wrapper,{children:(0,K.jsx)(U.Button,{outline:!0,pill:!0,iconStart:(0,K.jsx)(G.CoachMe,{}),onClick:()=>{o(),n(q.ENRICHMENT,{id:s.enrichmentId,questionIndex:s.questionIndex},{opener:ba.CoachMe})},children:t.formatMessage({id:`ai.coachMe.startQuestions`})})})}N();var pS={ResponseBlock:P.div`
    p,
    ul,
    li {
      margin-block: 16px;
    }
  `};function mS({entry:e}){if(!e.answer?.interaction)return null;let t=e.answer;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(pS.ResponseBlock,{children:(0,K.jsx)(Yx,{entry:e,liveLinks:!0})}),(0,K.jsx)(iS,{images:t.images}),(0,K.jsx)(fS,{entry:e}),(0,K.jsx)(oS,{flashcards:t.data?.flashcards}),(0,K.jsx)(tS,{entry:e}),(0,K.jsx)(lS,{entry:e}),(0,K.jsx)(Qx,{answer:t})]})}N();var hS={Error:P.div`
    font-size: 1.8rem;
    margin-block: 16px;
  `,RetryButton:P(U.Button)`
    margin-top: 12px;
    margin-inline-start: 6px;
  `};function gS({chatLogEntry:e}){let t=I(),{retry:n}=Am();return(0,K.jsx)(s,{children:(0,K.jsx)(`div`,{children:e.hasError?(0,K.jsxs)(hS.Error,{children:[(0,K.jsx)(w,{id:`base.error-short`}),(0,K.jsx)(hS.RetryButton,{onClick:()=>{n(e)},inline:!0,children:t.formatMessage({id:`base.tryAgain`})})]}):e.answer?(0,K.jsx)(mS,{entry:e}):(0,K.jsx)(ni,{size:8})})})}N();var _S={QuestionBubble:P.h3`
    margin-bottom: 24px;
    display: flex;
    width: 100%;
    justify-content: flex-end;

    &:not(:first-child) {
      margin-top: 56px;
    }

    span {
      background: ${H.frost.getShade(2)};
      padding: 16px;
      border-radius: 16px;
      color: var(--vst-ai-4);
      font-weight: 500;
      line-height: 110%;
      font-size: 1.6rem;
      max-width: calc(100% - 96px);
    }
  `};function vS(){let{chatLog:e}=Am(),{setVal:t,currentVal:n}=mr(Xn.AI_CHAT_COUNT),r=n??0,i=e[e.length-1]?.supernovaId,{value:a,setValue:o}=xt(Ct.AI_CHAT_LULL_MESSAGE_ID),s=(0,W.useCallback)(()=>{i&&a!==i&&(t(r+1),o(i))},[r,t,a,o,i]);return Ue(()=>{s()}),null}function yS(){let{chatLog:e}=Am(),t=(0,W.useMemo)(()=>Ut(e),[e]),n=t.length,r=t[t.length-1],i=r?.answer?n:n-1,a=(0,W.useRef)(null);return(0,W.useEffect)(()=>{if(n>1&&a.current){let e=oe(a.current);e&&e.scrollTo({top:a.current.offsetTop,behavior:`smooth`})}},[n,i,r]),vS(),(0,K.jsx)(K.Fragment,{children:t.map((e,n)=>(0,K.jsxs)(W.default.Fragment,{children:[(0,K.jsx)(_S.QuestionBubble,{ref:n===t.length-1?a:void 0,children:(0,K.jsx)(`span`,{children:e.question})}),(0,K.jsx)(gS,{chatLogEntry:e})]},e.supernovaId))})}N();var bS={Container:P.div`
    margin: 16px 0;
    gap: 26px;
    display: flex;
    flex-direction: column;
  `,Tools:P.div`
    display: flex;
    justify-content: space-between;

    button {
      &:hover,
      &:focus {
        background-color: transparent !important;
        border-color: transparent !important;
        box-shadow: none !important;
        outline-offset: -2px;
        outline: 2px solid var(--vst-ai-4);
      }
    }
  `,Suggestions:P.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  `,CopyButton:P(Qi)`
    --vst-icon-button-icon-color: ${H.frost.getShade(6)};
    vertical-align: top;
  `};function xS(e){let{icon:t}=e;return(0,K.jsx)(U.IconButton,{icon:t,customIconColor:H.frost.getShade(6),customIconFocusColor:H.frost.getShade(6),customIconFocusBGColor:!0,color:`custom`,size:`small`,rounded:!0,...e})}function SS({responseRef:e,artifactEntryId:t,log:n}){let r=I(),{isPlaying:i,play:a,stop:o}=Xx(),{thumbsUp:s,thumbsDown:c,sendAIEvent:l}=ih(),{simplifySessionId:u,simplifyAgain:d,startSayItBack:f}=jm(),p=[{icon:(0,K.jsx)(bh,{}),text:r.formatMessage({id:`ai.simplify.simplifyAgain`}),onClick:()=>d()},{icon:(0,K.jsx)(G.Refresh,{}),text:r.formatMessage({id:`ai.simplify.sayItBack`}),onClick:()=>f()}],m=n.score?.name===`thumbs`&&n.score?.value===1,h=n.score?.name===`thumbs`&&n.score?.value===0;return(0,K.jsxs)(bS.Container,{children:[(0,K.jsxs)(bS.Tools,{children:[(0,K.jsxs)(`div`,{children:[i?(0,K.jsx)(xS,{onClick:()=>o(),label:r.formatMessage({id:`base.stop`}),icon:(0,K.jsx)(G.Stop,{})}):(0,K.jsx)(xS,{onClick:()=>{a(e.current.innerText),l({artifactEntryId:t,sessionId:u,name:yn.SPEAK})},label:r.formatMessage({id:`base.play`}),icon:(0,K.jsx)(G.SpeakerOutline,{})}),(0,K.jsx)(bS.CopyButton,{className:`vst-icon-button-circle vst-icon-button-size-small`,"aria-label":r.formatMessage({id:`base.copy`}),defaultTooltip:r.formatMessage({id:`base.copy`}),textToCopy:()=>e.current?.innerHTML,copy:fr,onCopied:()=>l({artifactEntryId:t,sessionId:u,name:yn.COPY}),children:(0,K.jsx)(G.Copy,{})})]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(xS,{onClick:()=>{m||s({artifactEntryId:t,sessionId:u})},label:r.formatMessage({id:`ai.thumbsUp`}),icon:(0,K.jsx)(om,{fill:m?`#00FF00`:`none`})}),(0,K.jsx)(xS,{onClick:()=>{h||c({artifactEntryId:t,sessionId:u})},label:r.formatMessage({id:`ai.thumbsDown`}),icon:(0,K.jsx)(sm,{fill:h?`#FF0000`:`none`})})]})]}),(0,K.jsx)(bS.Suggestions,{children:p.map(({icon:e,text:t,onClick:n},r)=>(0,K.jsxs)(`button`,{onClick:n,className:`vst-button-pill vst-button-size-small vst-button-variant-outline`,children:[e,t]},r))})]})}N();var CS={Form:P.form`
    border-radius: 4px;
    background: var(--vst-frost-1);
    box-shadow: 0 3.575px 14.301px 0 rgba(47, 62, 66, 0.16);
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 4px;
    margin-top: 16px;
  `,Input:P(kc)`
    label,
    input,
    textarea {
      font-size: 1.8rem;
    }
  `,ReminderHeader:P.p`
    font-weight: var(--vst-font-weight-bold);
  `,SubmitButton:P.button`
    margin-inline-start: auto;
    margin-top: 4px;
  `};function wS({onSubmit:e}){let t=I(),{sayItBack:n}=jm(),[r,i]=(0,W.useState)(null),a=t=>{t.preventDefault(),r&&(e(),n({content:r}))};return(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(CS.Form,{onSubmit:a,children:[(0,K.jsx)(CS.Input,{multiline:!0,label:t.formatMessage({id:`ai.simplify.sayItBack.header`}),placeholder:t.formatMessage({id:`ai.simplify.sayItBack.placeholder`}),onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&a(e)}}),(0,K.jsx)(CS.SubmitButton,{type:`submit`,className:`vst-button-pill vst-button-size-small`,children:t.formatMessage({id:`ai.simplify.sayItBack.submitResponse`})})]})})}N();var TS={Container:P.div`
    margin-bottom: 24px;
  `,Error:P.div`
    font-size: 1.6rem;
    margin-block: 16px;
  `,RetryButton:P.div`
    margin-top: 12px;
    margin-inline-start: 6px;
  `,SayItBackHeader:P.p`
    font-weight: var(--vst-font-weight-bold);
  `};function ES({log:e,isLastLog:t,data:n}){let r=I(),i=(0,W.useRef)(null),[a,o]=(0,W.useState)(!0),{simplify:s,simplifyAgain:c,startSayItBack:l,sayItBack:u}=jm(),d={[Tr.REPHRASE]:()=>{n?.selectedText&&s({content:n.selectedText,selectionCfi:n.cfiRange,selectionOffsets:n.selectionOffsets})},[Tr.SAY_IT_BACK_REMINDER]:()=>l(),[Tr.SAY_IT_BACK]:()=>{e.sayItBack&&u({content:e.sayItBack})},[Tr.SIMPLIFY_AGAIN]:()=>c()};return e.hasError?(0,K.jsxs)(TS.Error,{children:[(0,K.jsx)(w,{id:`base.error-short`}),(0,K.jsx)(TS.RetryButton,{className:`vst-link`,onClick:()=>{d[e.action]()},children:r.formatMessage({id:`base.tryAgain`})})]}):e.artifactEntryId?(0,K.jsx)(TS.Container,{children:(0,K.jsx)(`div`,{children:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`div`,{ref:i,children:e.interaction?.map((e,t)=>(0,K.jsxs)(W.default.Fragment,{children:[e.header?(0,K.jsx)(TS.SayItBackHeader,{children:e.header}):null,(0,K.jsx)(`p`,{children:e.text})]},t))}),e.action===Tr.SAY_IT_BACK_REMINDER&&(!e.fromHistory||t)&&a?(0,K.jsx)(wS,{onSubmit:()=>o(!1)}):(0,K.jsx)(SS,{responseRef:i,artifactEntryId:e.artifactEntryId,log:e})]})},e.artifactEntryId)}):(0,K.jsx)(ni,{size:8})}N();var DS={b:e=>(0,K.jsx)(`strong`,{children:e})},OS={Container:P.div`
    background: linear-gradient(
      252deg,
      var(--vst-ai-4) 17.84%,
      var(--vst-ai-6) 83.73%
    );
    padding: 16px;
    border-radius: 8px;
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
  `,Heading:P.h3`
    font-weight: var(--vst-font-weight-bold);
    font-size: 2rem;
    margin-bottom: 8px;
  `,StudyTips:P.div`
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,Button:P.button`
    margin-top: 16px;
    margin-inline-start: auto;
  `,Stars:P.div`
    position: absolute;
    height: 47px;
    bottom: 16px;
    inset-inline-start: 16px;

    svg {
      color: rgba(255, 255, 255, 0.5);
      position: absolute;

      &:first-child {
        bottom: 0;
      }

      &:nth-child(2) {
        top: 0;
        inset-inline-start: 45px;
      }
    }
  `};function kS(){let{closePanel:e,clearMetadata:t}=Sa();return(0,K.jsxs)(OS.Container,{children:[(0,K.jsx)(OS.Heading,{children:(0,K.jsx)(w,{id:`base.studyTip`})}),(0,K.jsx)(OS.StudyTips,{children:(0,K.jsx)(w,{id:`ai.simplify.studyTip.1`,values:DS,tagName:`p`})}),(0,K.jsx)(OS.Button,{className:`vst-button-pill vst-button-variant-white`,onClick:()=>{e(),t()},children:(0,K.jsx)(w,{id:`base.gotIt`})}),(0,K.jsxs)(OS.Stars,{children:[(0,K.jsx)(Za,{height:35}),(0,K.jsx)(Za,{height:24})]})]})}N();var AS={QuestionBubble:P.h3`
    margin-bottom: 24px;
    display: flex;
    width: 100%;
    justify-content: flex-end;

    span {
      display: flex;
      gap: 8px;
      background: var(--vst-frost-2);
      padding: 16px;
      border-radius: 16px;
      color: var(--vst-ai-4);
      font-weight: 500;
      line-height: 110%;
      font-size: 1.6rem;
      max-width: calc(100% - 96px);
    }
  `};function jS({data:e}){let{simplify:t,simplifyLogs:n,isLoadingSimplify:r,endSimplify:i}=jm(),a=I(),o=n[n.length-1],s=(0,W.useRef)(null);(0,W.useEffect)(()=>{if(n.length>1&&s.current){let e=oe(s.current);e&&e.scrollTo({top:s.current.offsetTop,behavior:`smooth`})}},[o,n.length]);let c={[Tr.REPHRASE]:(0,K.jsxs)(`span`,{children:[(0,K.jsx)(bh,{}),a.formatMessage({id:`contextMenu.explainSelection`})]}),[Tr.SAY_IT_BACK_REMINDER]:(0,K.jsxs)(`span`,{children:[(0,K.jsx)(G.Refresh,{}),a.formatMessage({id:`ai.simplify.sayItBack`})]}),[Tr.SIMPLIFY_AGAIN]:(0,K.jsxs)(`span`,{children:[(0,K.jsx)(bh,{}),a.formatMessage({id:`ai.simplify.simplifyAgain`})]})};return(0,W.useEffect)(()=>{e?.selectedText&&!e?.textIsTooLong&&t({content:e.selectedText,selectionCfi:e.cfiRange,selectionOffsets:e.selectionOffsets},!0)},[e,t]),Ue(i),(0,K.jsx)(K.Fragment,{children:e?.textIsTooLong?(0,K.jsx)(kS,{}):r?(0,K.jsx)(ni,{size:8}):n.map((t,r)=>(0,K.jsxs)(W.default.Fragment,{children:[(0,K.jsx)(AS.QuestionBubble,{ref:r===n.length-1?s:void 0,children:t.sayItBack?(0,K.jsx)(`span`,{children:t.sayItBack}):c[t.action]}),(0,K.jsx)(ES,{log:t,isLastLog:r===n.length-1,data:e})]},r))})}N();var MS=P.div`
  background: var(--vst-theme-main);
  color: white;
  padding: 16px;
  border-radius: 8px;
  min-height: 100cqh;
`;N();var NS={Container:P.div`
    display: flex;
  `,Button:P.button`
    background: none;
    border: none;
    padding: 8px;
    margin: 0;
    cursor: pointer;
    border-radius: 50%;
    line-height: 0;

    &:focus-visible {
      outline: 1.5px solid var(--vst-frost-3);
      outline-offset: 1px;
    }

    &:disabled {
      cursor: default;
    }
  `,CircleSvg:P.svg`
    display: block;
    stroke: var(--vst-frost-3);
    ${e=>e.isFilled&&`fill: var(--vst-frost-3);`}
  `};function PS({isFilled:e}){return(0,K.jsx)(NS.CircleSvg,{xmlns:`http://www.w3.org/2000/svg`,width:8,height:8,viewBox:`0 0 8 8`,fill:`none`,"aria-hidden":`true`,focusable:`false`,isFilled:e,children:(0,K.jsx)(`circle`,{cx:`4`,cy:`4`,r:`3.5`})})}function FS({count:e,total:t,onNavigate:n}){let r=I();return(0,K.jsx)(NS.Container,{children:Array.from({length:t},(i,a)=>{let o=a+1,s=a===e-1,c=a<e,l=r.formatMessage({id:`ai.onboarding.circles.step`},{n:o,total:t});return(0,K.jsx)(ai.default,{title:l,children:(0,K.jsx)(NS.Button,{"aria-label":l,"aria-current":s?`step`:void 0,onClick:()=>n(a),children:(0,K.jsx)(PS,{isFilled:c})})},a)})})}N();var IS={CardFrame:P(MS)`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    scroll-margin-top: 16px;
    line-height: 2.4rem;

    &:not(:first-child) {
      margin-top: 16px;
    }

    &:focus-visible {
      outline: 2px solid var(--vst-theme-main);
      outline-offset: 2px;
    }
  `,Header:P.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    gap: 8px;
    font-weight: 400;
    color: var(--vst-frost-3);
    margin-inline-end: -8px;
    margin-top: -4px;
  `,HeaderLeft:P.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    line-height: normal;

    svg {
      color: var(--vst-frost-3);
      width: 12.931px;
      height: 16.819px;
      flex-grow: 0;
      flex-shrink: 0;
    }
  `,Footer:P.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: auto;
  `,FooterStars:P.div`
    color: rgba(255, 255, 255, 0.25);
    height: 4.4rem;
    display: flex;
    justify-content: space-between;
    margin-inline-start: 40px;
    margin-inline-end: 66px;
    width: 100%;

    & > *:last-child {
      align-self: flex-end;
      transform: translateY(-0.2rem);
      height: 2.4rem;
    }
  `,LeftStars:P.div`
    display: flex;
    gap: 0.8rem;

    & > *:first-child {
      align-self: flex-end;
      height: 3rem;
    }
    & > *:last-child {
      align-self: flex-start;
      height: 2rem;
    }
  `,Nav:P.div`
    font-size: 1.2rem;
    color: var(--vst-frost-3);
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  `,ProgressText:P.span`
    white-space: nowrap;
  `,NavButton:P(U.IconButton)`
    button:focus,
    button:hover:not(:disabled):focus {
      box-shadow: 0 0 0 2px var(--vst-theme-main), 0 0 0 4px white;
    }
  `,Done:P.div`
    svg {
      width: 23.112px;
      height: 17.778px;
    }
  `};function LS({children:e,count:t,total:n,onNext:r,onNavigate:i,style:a}){let o=I(),s=k();return(0,K.jsxs)(IS.CardFrame,{tabIndex:-1,style:a,role:`group`,"aria-label":o.formatMessage({id:`ai.onboarding.step`},{count:t,total:n}),children:[(0,K.jsxs)(IS.Header,{children:[(0,K.jsxs)(IS.HeaderLeft,{children:[(0,K.jsx)(Ec,{}),(0,K.jsx)(w,{id:`ai.onboarding`})]}),(0,K.jsx)(FS,{count:t,total:n,onNavigate:i})]}),(0,K.jsx)(`div`,{children:e}),(0,K.jsxs)(IS.Footer,{children:[(0,K.jsxs)(IS.FooterStars,{children:[(0,K.jsxs)(IS.LeftStars,{children:[(0,K.jsx)(Za,{}),(0,K.jsx)(Za,{})]}),(0,K.jsx)(Za,{})]}),(0,K.jsxs)(IS.Nav,{children:[(0,K.jsxs)(IS.ProgressText,{id:s,children:[t,` / `,n]}),n===t?(0,K.jsx)(IS.Done,{children:(0,K.jsx)(G.Checkmark,{})}):(0,K.jsx)(IS.NavButton,{secondary:!0,icon:(0,K.jsx)(G.ArrowDown,{}),rounded:!0,buttonType:`floating`,label:o.formatMessage({id:`base.next`}),onClick:r,"aria-describedby":s})]})]})]})}N();var RS={Outer:P.div`
    padding-inline: 16px;
  `,Title:P.h3`
    font-size: 2rem;
    line-height: 2.4rem;
    font-family: "Roboto Slab", "Roboto", sans-serif;
    font-weight: 600;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > * {
      font-family: inherit;
    }
  `};function zS({title:e,titleLines:t,children:n}){return(0,K.jsxs)(RS.Outer,{children:[(0,K.jsxs)(RS.Title,{children:[e,t?.map((e,t)=>(0,K.jsx)(`span`,{children:e},t))]}),n]})}N();var BS={List:P.ul`
    margin: 0;
    padding-inline-start: 24px;

    li {
      list-style-type: disc;
    }
  `};function VS(){let e=I();return(0,K.jsx)(zS,{titleLines:[e.formatMessage({id:`ai.onboarding.welcome.title`}),e.formatMessage({id:`ai.onboarding.welcome.intro`})],children:(0,K.jsxs)(BS.List,{children:[(0,K.jsx)(`li`,{children:(0,K.jsx)(w,{id:`ai.onboarding.welcome.simplify`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(w,{id:`ai.onboarding.welcome.testPrep`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(w,{id:`ai.onboarding.welcome.askQuestions`})}),(0,K.jsx)(`li`,{children:(0,K.jsx)(w,{id:`ai.onboarding.welcome.notesAndFlashcards`})})]})})}var HS=function(e){return e.EVERY_DAY=`EVERY_DAY`,e.FEW_TIMES_A_WEEK=`FEW_TIMES_A_WEEK`,e.ONCE_A_WEEK=`ONCE_A_WEEK`,e.OCCASIONALLY=`OCCASIONALLY`,e}({}),US=function(e){return e.NEW_TO_SUBJECT=`NEW_TO_SUBJECT`,e.SOME_BACKGROUND=`SOME_BACKGROUND`,e.ALREADY_FAMILIAR=`ALREADY_FAMILIAR`,e}({}),WS=function(e){return e.ASSIGNED_COURSEWORK=`ASSIGNED_COURSEWORK`,e.EXAM_PREP=`EXAM_PREP`,e.REFERENCE_MATERIAL=`REFERENCE_MATERIAL`,e}({});N();var GS={Form:P.form`
    display: flex;
    flex-direction: column;
    gap: 4px;

    & > *:last-child {
      margin-bottom: 0;
    }

    label {
      color: white;
    }

    select:has(option[hidden]:checked) {
      color: var(--vst-cloud-6);
      font-weight: 300;
    }

    select:focus,
    input:focus {
      outline: 2px solid white;
      outline-offset: 2px;
      border-color: white;
      box-shadow: none;
    }
  `};function KS({placeholder:e,children:t,...n}){return(0,K.jsxs)(U.Select,{...n,fullWidth:!0,secondary:!0,children:[(0,K.jsx)(`option`,{value:``,hidden:!0,children:e}),t]})}function qS(){let e=I(),{personalization:t,savePersonalization:n}=Vm(),r=(0,W.useRef)(null),i=(0,W.useCallback)(()=>{let e=r.current;if(!e)return;let i=new FormData(e);function a(e){let t=i.get(e);return typeof t==`string`&&t?t:void 0}let o=a(`preferredName`)?.trim(),s=o===void 0&&t?.preferredName?``:o;n({courseUse:a(`courseUse`),familiarity:a(`familiarity`),studyFrequency:a(`studyFrequency`),preferredName:s})},[t,n]);return(0,K.jsx)(zS,{title:e.formatMessage({id:`ai.onboarding.personalization.title`}),children:(0,K.jsxs)(GS.Form,{ref:r,onSubmit:e=>e.preventDefault(),children:[(0,K.jsxs)(KS,{name:`courseUse`,label:e.formatMessage({id:`ai.onboarding.personalization.courseUsage`}),defaultValue:t?.courseUse??``,onChange:i,placeholder:e.formatMessage({id:`base.selectOption`}),children:[(0,K.jsx)(`option`,{value:WS.ASSIGNED_COURSEWORK,children:e.formatMessage({id:`ai.onboarding.personalization.courseUsage.assigned`})}),(0,K.jsx)(`option`,{value:WS.EXAM_PREP,children:e.formatMessage({id:`ai.onboarding.personalization.courseUsage.examPrep`})}),(0,K.jsx)(`option`,{value:WS.REFERENCE_MATERIAL,children:e.formatMessage({id:`ai.onboarding.personalization.courseUsage.reference`})})]}),(0,K.jsxs)(KS,{name:`familiarity`,label:e.formatMessage({id:`ai.onboarding.personalization.familiarity`}),defaultValue:t?.familiarity??``,onChange:i,placeholder:e.formatMessage({id:`base.selectOption`}),children:[(0,K.jsx)(`option`,{value:US.NEW_TO_SUBJECT,children:e.formatMessage({id:`ai.onboarding.personalization.familiarity.new`})}),(0,K.jsx)(`option`,{value:US.SOME_BACKGROUND,children:e.formatMessage({id:`ai.onboarding.personalization.familiarity.some`})}),(0,K.jsx)(`option`,{value:US.ALREADY_FAMILIAR,children:e.formatMessage({id:`ai.onboarding.personalization.familiarity.already`})})]}),(0,K.jsxs)(KS,{name:`studyFrequency`,label:e.formatMessage({id:`ai.onboarding.personalization.studyFrequency`}),defaultValue:t?.studyFrequency??``,onChange:i,placeholder:e.formatMessage({id:`base.selectOption`}),children:[(0,K.jsx)(`option`,{value:HS.EVERY_DAY,children:e.formatMessage({id:`ai.onboarding.personalization.studyFrequency.daily`})}),(0,K.jsx)(`option`,{value:HS.FEW_TIMES_A_WEEK,children:e.formatMessage({id:`ai.onboarding.personalization.studyFrequency.severalWeekly`})}),(0,K.jsx)(`option`,{value:HS.ONCE_A_WEEK,children:e.formatMessage({id:`ai.onboarding.personalization.studyFrequency.weekly`})}),(0,K.jsx)(`option`,{value:HS.OCCASIONALLY,children:e.formatMessage({id:`ai.onboarding.personalization.studyFrequency.occasionally`})})]}),(0,K.jsx)(U.TextField,{name:`preferredName`,label:e.formatMessage({id:`ai.onboarding.personalization.name`}),placeholder:e.formatMessage({id:`ai.onboarding.personalization.name.placeholder`}),defaultValue:t?.preferredName??``,onBlur:i,fullWidth:!0,maxLength:50})]})})}N();var JS=P.div`
  font-weight: 700;
  margin: 0 0 8px;
`,YS=P.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-inline-start: 16px;

  li {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    line-height: normal;
  }

  li > svg {
    flex-shrink: 0;
    width: 1.8rem;
    height: 1.8rem;
    transform: translateY(calc(0.5lh - 50%));
  }
`;N();var XS={b:e=>(0,K.jsx)(`strong`,{children:e})};function ZS(){return(0,K.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,focusable:`false`,children:[(0,K.jsx)(`path`,{d:`M10 4H5V5H10V4Z`,fill:`white`}),(0,K.jsx)(`path`,{d:`M16.59 15.86L14.5 13.77C15.03 12.98 15.34 12.03 15.34 11C15.34 9.22 14.4 7.66 12.99 6.78V2C12.99 0.9 12.09 0 10.99 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H6.37C7.28 15.21 8.72 16 10.34 16C11.35 16 12.29 15.69 13.08 15.18L15.18 17.28C15.38 17.48 15.63 17.57 15.89 17.57C16.15 17.57 16.4 17.47 16.6 17.28C16.99 16.89 16.99 16.26 16.6 15.87L16.59 15.86ZM4 12V2H11V6.07C10.78 6.04 10.57 6 10.35 6C7.59 6 5.35 8.24 5.35 11C5.35 11.34 5.39 11.68 5.45 12H4ZM10.35 14C8.7 14 7.35 12.65 7.35 11C7.35 9.35 8.7 8 10.35 8C12 8 13.35 9.35 13.35 11C13.35 12.65 12 14 10.35 14Z`,fill:`white`})]})}var QS={Cta:P.div`
    font-family: "Roboto Slab", "Roboto", sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 2rem;
    margin-top: 24px;
  `};function $S(){let e=I();return(0,K.jsxs)(zS,{title:e.formatMessage({id:`ai.onboarding.capabilities.title`}),children:[(0,K.jsx)(JS,{children:(0,K.jsx)(w,{id:`ai.onboarding.capabilities.whatICanDo`})}),(0,K.jsxs)(YS,{children:[(0,K.jsxs)(`li`,{children:[(0,K.jsx)(ZS,{}),(0,K.jsx)(w,{id:`ai.onboarding.capabilities.findFast`,values:XS,tagName:`span`})]}),(0,K.jsxs)(`li`,{children:[(0,K.jsx)(Tc,{}),(0,K.jsx)(w,{id:`ai.onboarding.capabilities.understand`,values:XS,tagName:`span`})]}),(0,K.jsxs)(`li`,{children:[(0,K.jsx)(G.CoachMe,{}),(0,K.jsx)(w,{id:`ai.onboarding.capabilities.studyHelp`,values:XS,tagName:`span`})]})]}),(0,K.jsx)(QS.Cta,{children:(0,K.jsx)(w,{id:`ai.onboarding.capabilities.cta`})})]})}var eC={b:e=>(0,K.jsx)(`strong`,{children:e})};function tC(){return(0,K.jsxs)(`svg`,{width:`18`,height:`17`,viewBox:`0 0 18 17`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,focusable:`false`,children:[(0,K.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M2.25 15.017h13.5v-11.9H2.25zm13.5-13.884c1.242 0 2.25.889 2.25 1.984v11.9C18 16.112 16.992 17 15.75 17H2.25C1.008 17 0 16.111 0 15.017v-11.9c0-1.095 1.008-1.984 2.25-1.984z`,clipRule:`evenodd`}),(0,K.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M1.125 6.8A1.13 1.13 0 0 1 2.25 5.667h13.5A1.13 1.13 0 0 1 16.875 6.8a1.13 1.13 0 0 1-1.125 1.133H2.25A1.13 1.13 0 0 1 1.125 6.8`,clipRule:`evenodd`}),(0,K.jsx)(`path`,{fill:`#fff`,d:`M4.5 1.133A1.13 1.13 0 0 1 5.625 0 1.13 1.13 0 0 1 6.75 1.133V3.4a1.13 1.13 0 0 1-1.125 1.133A1.13 1.13 0 0 1 4.5 3.4zM11.25 1.133A1.13 1.13 0 0 1 12.375 0 1.13 1.13 0 0 1 13.5 1.133V3.4a1.13 1.13 0 0 1-1.125 1.133A1.13 1.13 0 0 1 11.25 3.4z`})]})}function nC(){let e=I();return(0,K.jsxs)(zS,{title:e.formatMessage({id:`ai.onboarding.coachMe.title`}),children:[(0,K.jsx)(JS,{children:(0,K.jsx)(w,{id:`ai.onboarding.coachMe.benefits`})}),(0,K.jsxs)(YS,{children:[(0,K.jsxs)(`li`,{children:[(0,K.jsx)(tC,{}),(0,K.jsx)(w,{id:`ai.onboarding.coachMe.provenByScience`,values:eC,tagName:`span`})]}),(0,K.jsxs)(`li`,{children:[(0,K.jsx)(Tc,{}),(0,K.jsx)(w,{id:`ai.onboarding.coachMe.instantFeedback`,values:eC,tagName:`span`})]}),(0,K.jsxs)(`li`,{children:[(0,K.jsx)(G.CoachMe,{}),(0,K.jsx)(w,{id:`ai.onboarding.coachMe.checkProgress`,values:eC,tagName:`span`})]})]})]})}N();var rC={b:e=>(0,K.jsx)(`strong`,{children:e})};function iC(){return(0,K.jsxs)(`svg`,{width:`18`,height:`17`,viewBox:`0 0 18 17`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,focusable:`false`,children:[(0,K.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M2.25 15.017h13.5v-11.9H2.25zm13.5-13.884c1.242 0 2.25.889 2.25 1.984v11.9C18 16.112 16.992 17 15.75 17H2.25C1.008 17 0 16.111 0 15.017v-11.9c0-1.095 1.008-1.984 2.25-1.984z`,clipRule:`evenodd`}),(0,K.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M1.125 6.8A1.13 1.13 0 0 1 2.25 5.667h13.5A1.13 1.13 0 0 1 16.875 6.8a1.13 1.13 0 0 1-1.125 1.133H2.25A1.13 1.13 0 0 1 1.125 6.8`,clipRule:`evenodd`}),(0,K.jsx)(`path`,{fill:`#fff`,d:`M4.5 1.133A1.13 1.13 0 0 1 5.625 0 1.13 1.13 0 0 1 6.75 1.133V3.4a1.13 1.13 0 0 1-1.125 1.133A1.13 1.13 0 0 1 4.5 3.4zM11.25 1.133A1.13 1.13 0 0 1 12.375 0 1.13 1.13 0 0 1 13.5 1.133V3.4a1.13 1.13 0 0 1-1.125 1.133A1.13 1.13 0 0 1 11.25 3.4z`})]})}var aC={Footer:P.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
  `,AskBelow:P.p`
    font-family: "Roboto Slab", "Roboto", sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 2rem;
  `};function oC(){let e=I(),t=ca(),{openTab:n}=Fc();return(0,K.jsxs)(zS,{title:e.formatMessage({id:`ai.onboarding.studyPlan.title`}),children:[(0,K.jsx)(JS,{children:(0,K.jsx)(w,{id:`ai.onboarding.studyPlan.benefits`})}),(0,K.jsxs)(YS,{children:[(0,K.jsxs)(`li`,{children:[(0,K.jsx)(iC,{}),(0,K.jsx)(w,{id:`ai.onboarding.studyPlan.manageSchedule`,values:rC,tagName:`span`})]}),(0,K.jsxs)(`li`,{children:[(0,K.jsx)(Tc,{}),(0,K.jsx)(w,{id:`ai.onboarding.studyPlan.studyWhatMatters`,values:rC,tagName:`span`})]}),t&&(0,K.jsxs)(`li`,{children:[(0,K.jsx)(G.CoachMe,{}),(0,K.jsx)(w,{id:`ai.onboarding.studyPlan.checkProgress`,values:rC,tagName:`span`})]})]}),(0,K.jsxs)(aC.Footer,{children:[(0,K.jsxs)(Na,{className:Ot(`vst-button-pill`,`vst-button-size-large`,`vst-button-variant-white`,`ai-light`),onClick:()=>n(Nc.STUDY_PLAN,{isPlanPromoSuppressed:!0}),children:[(0,K.jsx)(G.PlusCircleFill,{}),(0,K.jsx)(w,{id:`ai.onboarding.studyPlan.createButton`})]}),(0,K.jsx)(aC.AskBelow,{children:(0,K.jsx)(w,{id:`ai.onboarding.studyPlan.askBelow`})})]})]})}function sC(){let e=R(Qt);return e===p.WAITING||e===p.FETCHING}function cC(){let[e,t]=(0,W.useState)(0),n=(0,W.useRef)(null),r=ca(),i=d().getProp(`BookshelfAI.StudyPlan.enabled`),{markComplete:a,isComplete:o}=Hm(),{personalization:s,isLoading:c}=Vm(),l=sC(),u=i&&s?.courseUse!==WS.REFERENCE_MATERIAL,f=[{element:(0,K.jsx)(VS,{}),enabled:!0},{element:(0,K.jsx)(qS,{}),enabled:!0},{element:(0,K.jsx)(nC,{}),enabled:r},u?{element:(0,K.jsx)(oC,{}),enabled:!0}:{element:(0,K.jsx)($S,{}),enabled:!0}].filter(e=>e.enabled).map(e=>e.element),p=(0,W.useCallback)(e=>{let t=n.current?.children[e];t&&(t.focus({preventScroll:!0}),M(t))},[]),m=(0,W.useCallback)(n=>{n>e?(t(n),n===f.length-1&&!o&&a()):p(n)},[e,p,f.length,o,a]),h=(0,W.useCallback)(e=>{m(e+1)},[m]);return(0,W.useLayoutEffect)(()=>{e>0&&p(e)},[e,p]),c||l?(0,K.jsx)(ni,{size:8}):(0,K.jsx)(`div`,{ref:n,children:f.map((t,n)=>(0,K.jsx)(LS,{count:n+1,total:f.length,onNext:()=>h(n),onNavigate:e=>m(e),style:n>e?{display:`none`}:void 0,children:t},n))})}function lC({theme:e,className:t}){let[n,r]=(0,W.useState)(!1),i=I();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(im,{theme:e,onClick:()=>r(!0),className:t}),(0,K.jsx)(Mt,{type:bt.Vstui,size:`large`,open:n,title:i.formatMessage({id:`ai.responsibilityDialog.title`}),onRequestClose:()=>r(!1),primaryActionButton:{label:i.formatMessage({id:`base.gotIt`}),onClick:()=>r(!1)},children:(0,K.jsxs)(gm,{children:[(0,K.jsx)(vm,{}),(0,K.jsx)(ym,{}),(0,K.jsx)(bm,{})]})})]})}var uC=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='388'%20height='404'%20fill='none'%3e%3cpath%20fill='url(%23a)'%20d='M618.425%20370.172a42.46%2042.46%200%200%201%2021.231%2036.775v392.559a42.46%2042.46%200%200%201-21.231%2036.774l-339.967%20196.28a42.44%2042.44%200%200%201-42.464%200l-339.966-196.28a42.46%2042.46%200%200%201-21.232-36.774V406.947a42.46%2042.46%200%200%201%2021.232-36.775l339.966-196.28a42.47%2042.47%200%200%201%2042.464%200z'%20opacity='.3'/%3e%3cpath%20fill='%230169c6'%20d='M453.8%20402.303a42.46%2042.46%200%200%201%2021.232%2036.774v207.959a42.47%2042.47%200%200%201-21.232%2036.775L273.703%20787.79a42.47%2042.47%200%200%201-42.464%200L51.142%20683.811a42.47%2042.47%200%200%201-21.232-36.775V439.077a42.46%2042.46%200%200%201%2021.232-36.774l180.097-103.979a42.46%2042.46%200%200%201%2042.464%200z'%20opacity='.8'/%3e%3cpath%20fill='%237188c7'%20d='M32.021%20245.584c.232-.93%201.554-.93%201.786%200l1.267%205.086c.082.33.34.588.67.671l5.086%201.266c.93.232.93%201.554%200%201.786l-5.086%201.266a.92.92%200%200%200-.67.671l-1.267%205.086c-.232.93-1.554.93-1.786%200l-1.266-5.086a.92.92%200%200%200-.67-.671l-5.087-1.266c-.93-.232-.93-1.554%200-1.786l5.086-1.266a.92.92%200%200%200%20.67-.671zM182.866%20196.208c.272-1.092%201.824-1.092%202.096%200l1.487%205.97c.097.388.399.69.787.787l5.97%201.487c1.092.272%201.092%201.824%200%202.096l-5.97%201.487a1.08%201.08%200%200%200-.787.787l-1.487%205.97c-.272%201.092-1.824%201.092-2.096%200l-1.487-5.97a1.08%201.08%200%200%200-.787-.787l-5.97-1.487c-1.092-.272-1.092-1.824%200-2.096l5.97-1.487a1.08%201.08%200%200%200%20.787-.787zM86.706%20290.468c.444-1.779%202.973-1.779%203.416%200l2.423%209.73c.158.632.65%201.125%201.283%201.282l9.729%202.424c1.78.443%201.78%202.972%200%203.415l-9.73%202.423a1.76%201.76%200%200%200-1.282%201.283l-2.423%209.73c-.443%201.779-2.972%201.779-3.416%200l-2.423-9.73A1.76%201.76%200%200%200%2083%20309.742l-9.73-2.423c-1.779-.443-1.779-2.972%200-3.415L83%20301.48a1.76%201.76%200%200%200%201.283-1.282z'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='639.656'%20x2='-125.204'%20y1='382.43'%20y2='824.022'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2301339b'/%3e%3cstop%20offset='1'%20stop-color='%230176d0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`;N();var dC={Outer:P(MS).attrs({className:`ReturningUser-Outer`})`
    background-image: url("${uC}");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: bottom left;
  `,Header:P.h3`
    font-size: 2.4rem;
    line-height: 114%;
    font-weight: 600;
    font-family: "Roboto Slab", "Roboto", sans-serif;
    margin-bottom: 24px;
    margin-top: 24px;
    text-align: center;
    text-wrap: pretty;
  `,IdeaHeader:P.div`
    font-size: 1.3rem;
    line-height: 2.4rem;
  `,IdeaBoxes:P.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 8px;
    margin-top: 12px;
    margin-bottom: 32px;
    margin-inline: 4px;

    button {
      border: 1px solid var(--vst-frost-2);
      font-size: 1.4rem;
      line-height: 1.6rem;
      font-weight: 500;
      padding: 14px 16px;
      text-align: start;
      background: white;
      border-radius: 8px;
      display: grid;
      grid-template-columns: 18px 1fr;
      gap: 8px;
      align-items: center;
      width: 100%;
      height: 100%;
      color: var(--vst-theme-5);

      &:active {
        color: var(--vst-theme-5);
      }

      &:focus {
        outline-offset: 2px;
        outline: 2px solid white;
      }
    }

    svg {
      flex-grow: 0;
      flex-shrink: 0;
      color: var(--vst-theme-main);
      justify-self: center;
    }
  `,Footer:P.div`
    display: flex;
    justify-content: center;
  `,Loader:P(ni)`
    margin-top: 48px;
  `},fC=5;function pC(){let e=I(),{ask:t}=Am(),{openTab:n}=Fc(),r=d().getProp(`BookshelfAI.StudyPlan.enabled`),{personalization:i,isLoading:a}=Vm(),o=i?.preferredName?.trim(),{studyPlanProgress:s}=jc(),c=(0,W.useMemo)(()=>Ke(1,fC),[]),l=o?e.formatMessage({id:`ai.onboarding.returning.header.named.${c}`},{name:o}):e.formatMessage({id:`ai.onboarding.returning.header.${c}`}),u=[{text:e.formatMessage({id:`ai.ideas.testPrep`}),icon:(0,K.jsx)(G.CheckmarkCircle,{})},r?{text:s.plan?e.formatMessage({id:`ai.ideas.viewStudyPlan`}):e.formatMessage({id:`ai.ideas.createStudyPlan`}),icon:(0,K.jsx)(G.PageText,{}),onClick:()=>n(Nc.STUDY_PLAN,{isPlanPromoSuppressed:!0})}:{text:e.formatMessage({id:`ai.ideas.define`}),icon:(0,K.jsx)(wc,{})},{text:e.formatMessage({id:`ai.ideas.flashcards`}),icon:(0,K.jsx)(G.FlashCard,{})},{text:e.formatMessage({id:`ai.ideas.ask`}),icon:(0,K.jsx)(G.QuestionCircle,{})}];return a||r&&[`refetching`,`uninitialized`].includes(s.phase)?(0,K.jsx)(it,{timeout:250,children:(0,K.jsx)(dC.Loader,{size:8})}):(0,K.jsxs)(dC.Outer,{children:[(0,K.jsx)(dC.Header,{children:l}),(0,K.jsx)(dC.IdeaHeader,{children:(0,K.jsx)(w,{id:`ai.ideas.header`})}),(0,K.jsx)(dC.IdeaBoxes,{children:u.map(e=>(0,K.jsx)(`li`,{children:(0,K.jsxs)(`button`,{onClick:e.onClick??(()=>t(e.text)),children:[e.icon,` `,(0,K.jsx)(`span`,{children:e.text})]})},e.text))}),(0,K.jsx)(dC.Footer,{children:(0,K.jsx)(lC,{theme:`white`})})]})}N();var mC={FrameNew:P(Dh)`
    overflow-y: scroll;
  `};function hC({data:e}){let{panelType:t}=xa(),n=t===q.AI,{chatLog:r,isLoadingChat:i,chatSessionId:a}=Am(),{markComplete:o,isComplete:s}=Hm(),{simplifyLogs:c,isLoadingSimplify:l,endSimplify:u,simplifySessionId:d}=jm(),{currentMode:f,setCurrentMode:p}=Km(),m=!!a||!!d,h=i||l,{isReplaying:g,endReplay:_}=Gm(),v=!s&&!m&&!h,y=m||h||!!e?.selectedText,b=Xe(y),[x,S]=(0,W.useState)(v),C=[...c,...r],w=f===Gt.ASK_YOUR_BOOK&&C.length===0;if((0,W.useEffect)(()=>{v&&S(!0)},[v]),(0,W.useEffect)(()=>{y&&!b&&(S(!1),_(),s||o())},[y,b,s,_,o]),(0,W.useEffect)(()=>{!n&&f===Gt.SIMPLIFY&&(u(),p(Gt.ASK_YOUR_BOOK))},[n,u,f,p]),x||g)return(0,K.jsx)(Xa,{children:(0,K.jsx)(mC.FrameNew,{disableNewButton:!0,children:(0,K.jsx)(cC,{})})});let T={[Gt.SIMPLIFY]:(0,K.jsx)(jS,{data:e}),[Gt.ASK_YOUR_BOOK]:r.length===0?(0,K.jsx)(pC,{}):(0,K.jsx)(yS,{})};return(0,K.jsx)(Xa,{children:(0,K.jsx)(Dh,{disableNewButton:w,children:h?(0,K.jsx)(ni,{size:8}):(0,K.jsx)(K.Fragment,{children:T[f]})})})}N();var gC=452,_C=900,vC=60,yC=16,bC=12,xC={Dialog:P(Mt)`
    display: flex;
    background-color: white;
    flex-direction: column;
    font-size: 1.6rem;
  `,ContentScroller:P.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    position: relative;
  `,OuterContainer:P(Hc)`
    overflow: hidden;
    flex-shrink: 0;
    background: ${({$bg:e})=>e??H.frost.getShade(1)};
  `,Content:P.div`
    background-color: white;
    position: relative;
    height: 100%;
    ${({showPanelFrame:e})=>e&&F`
        border-radius: 8px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
        width: calc(100% - ${32}px);
        margin: ${bC}px ${yC}px;
        height: calc(100% - ${24}px);
      `};
  `,ContentContainer:P.div`
    /* panel contents in the main were initially designed with a blend of static
       and inner scrolled elements, we have since made the whole panel scroll
       this breaks the 100% height given to the panel content, making it overflow
       but leaves open the possibility of a return or future mode option
       coachme is different and needs 100% height to dock bottom controls */
    ${({constrainHeight:e})=>e&&F`
        height: 100%;
      `}
  `,FullWidthContent:P.div`
    height: 100%;
  `,PanelRegion:P.div`
    height: 100%;
    /* establish a block formatting context so a framed panel's card margin
       doesn't collapse through the region and push it (and its focus ring) out
       past the clipped container edges */
    display: flow-root;
    /* show the outer panel focus ring only for keyboard users; on a mouse click
       it would be noisy (and the panel still receives focus regardless) */
    &:focus-visible {
      /* use AI blue like the study tools toolbar that launches them */
      outline: 2px solid ${Ya.getShade(6)};
      outline-offset: -2px;
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `},SC={[q.SEARCH]:{Component:Wu,titleId:`search.search`},[q.NOTEBOOK]:{Component:gp,titleId:`workbook.workbookTitle`},[q.ENRICHMENT]:{Component:yp,titleId:`checkpoint.title.main`,selfManaged:!0},[q.INTEGRATIONS]:{Component:Yp},[q.ENRICHMENT_PROGRESS]:{Component:Cp,titleId:`checkpoint.title.progress`,selfManaged:!0},[q.AI]:{Component:hC,naked:!0},[q.TRANSLATE]:{Component:km,titleId:`translate.translate`}},CC=[q.AI,q.ENRICHMENT_PROGRESS,q.ENRICHMENT,q.NOTEBOOK];function wC(e){return CC.includes(e)}function TC(e,t=5){let n=0,r=()=>{let i=e();i?.isConnected?i.focus({preventScroll:!0}):n++<t&&requestAnimationFrame(r)};r()}var EC={[q.AI]:`header.panel.tutor`,[q.ENRICHMENT_PROGRESS]:`header.panel.coachMe`,[q.ENRICHMENT]:`checkpoint.title.main`,[q.NOTEBOOK]:`header.panel.workbook`},DC=({needOuterScroll:e,needCloseButton:t,onClose:n,children:r})=>e?(0,K.jsxs)(xC.ContentScroller,{className:`inner-scroller`,children:[t&&(0,K.jsx)(Xc,{onClick:n,noRtl:!0}),(0,K.jsx)(xC.ContentContainer,{constrainHeight:!1,children:r})]}):(0,K.jsxs)(K.Fragment,{children:[t&&(0,K.jsx)(Xc,{onClick:n,noRtl:!0}),(0,K.jsx)(xC.ContentContainer,{constrainHeight:!0,children:r})]});function OC({closedWidth:e,hideGutterExpand:t,backgroundColor:n,constrainWidth:r,panelApiRef:i}){let o=I(),{panelType:s,metadata:c,context:l,focusRequestedAt:u}=xa(),{closePanel:f,openPanel:p}=Sa(),m=d(),{registerPOI:h}=nt(),{panelClosed:g,closeContext:_,closeMetadata:v}=Ca(),y=!!s&&s!==q.EXPANDED_GUTTER,b=Xe(y),x=(0,W.useRef)(),S=Ka(),C=Xe(S),w=(0,W.useRef)(S);w.current=S;let T=gs(),E=!!s&&s===q.EXPANDED_GUTTER&&(S||!T),D=s&&SC[s],O=W.useMemo(()=>oo({attributes:{style:`height: 100%`}}),[]),ee=W.useMemo(()=>Object.fromEntries(CC.map(e=>[e,oo({attributes:{style:`height: 100%`}})])),[]),k=(0,W.useRef)(new Set),te=(0,W.useRef)(new Map),ne=(0,W.useRef)({}),{restoreFocusOnClose:A}=Jc(W.useMemo(()=>[O.element,...CC.map(e=>ee[e].element)],[ee,O]));(0,W.useEffect)(()=>{(S&&!y&&b||!S&&C&&b)&&A()},[y,S,A,C,b]),(0,W.useEffect)(()=>{g&&_?.opener===ba.GutterIcon?x.current=v.id:x.current=void 0},[_,v,g,s]),(0,W.useEffect)(()=>{if(!s||l?.autoOpened)return;let e=w.current;if(wC(s)){e||TC(()=>ne.current[s]);return}e&&s!==q.SEARCH||TC(()=>{let e=Array.from(j(O.element));if(s===q.SEARCH){let t=e.find(e=>e.type===`search`);if(t)return t}return e[0]})},[s,O,l?.autoOpened,u]),(0,W.useEffect)(()=>{s===null&&h(``)},[s,h]);let{isEnabled:re}=gr(),{value:ie,updateValue:ae}=Wc(`rightBarWidth`),oe=e=>typeof e==`number`?Ge(e,356,_C):gC;(0,W.useEffect)(()=>{re&&p(q.AI,void 0,{autoOpened:!0})},[p,re]);let M=!!(s&&wC(s));(0,W.useEffect)(()=>{s&&wC(s)&&(k.current.add(s),te.current.set(s,c))},[s,c]);let se=new Set(k.current);M&&se.add(s);let ce=e=>e===s?c:te.current.get(e);function le(e,t,n){return n.naked?(0,K.jsx)(Oe,{children:(0,K.jsx)(e,{data:t})},n.elementKey):(0,K.jsx)(xC.Content,{showPanelFrame:!S,children:(0,K.jsx)(Oe,{children:(0,K.jsx)(DC,{needOuterScroll:n.needOuterScroll,needCloseButton:n.needCloseButton,onClose:()=>f(),children:(0,K.jsx)(e,{data:t})})})},n.elementKey)}function ue(){let e=Array.from(se).map(e=>({key:e,node:ee[e],entry:SC[e],data:ce(e),isActive:s===e,regionType:e}));return!M&&D?.Component&&e.push({key:`shared`,node:O,entry:D,data:c,isActive:!0,elementKey:s??void 0}),(0,K.jsx)(K.Fragment,{children:e.map(({key:e,node:t,entry:n,data:r,isActive:i,elementKey:a,regionType:s})=>{let c=le(n.Component,r,{isActive:i,naked:n.naked,needOuterScroll:!n.selfManaged,needCloseButton:!n.selfManaged,elementKey:a});return(0,K.jsx)(io,{node:t,children:s?(0,K.jsx)(xC.PanelRegion,{role:`region`,"aria-label":o.formatMessage({id:EC[s]}),tabIndex:-1,ref:e=>{ne.current[s]=e},children:c}):c},e)})})}function de(){return(0,K.jsx)(xC.Dialog,{type:bt.ResponsiveModal,open:!0,label:D?.titleId?o.formatMessage({id:D.titleId}):``,onRequestClose:e=>{e?.reason||f()},disableAnimation:!0,children:(0,K.jsx)(ao,{node:M?ee[s]:O})})}function fe(){let o=m.getProp(`Gutters.rightEnabled`);if(!(s||o))return null;let l=S&&y||!y||E,u=!!s&&!E,d=o&&!D?.Component&&!M;return(0,K.jsxs)(xC.OuterContainer,{resizeActive:!0,side:`right`,initialWidth:oe(ie),minWidth:356,maxWidth:_C,maxGuardWidth:vC,collapsed:l,collapsedWidth:s===q.EXPANDED_GUTTER&&!E?gC:e,$bg:n,constrainWidth:r,panelApiRef:i,onResizeEnd:e=>{ae(e),a(`right_bar_resize`,{width:Math.floor((e-356)/544*100)})},children:[y&&!S&&!M&&(0,K.jsx)(ao,{node:O}),Array.from(se).map(e=>{let t=s===e;return t&&S?null:(0,K.jsx)(`div`,{style:t?{height:`100%`}:{display:`none`},children:(0,K.jsx)(ao,{node:ee[e]})},e)}),d&&(0,K.jsx)(xC.FullWidthContent,{style:{width:u?gC:e},children:(0,K.jsx)(Ys,{isOpen:u,context:c,closedWidth:e,refocusGutterIconUuid:x.current,hideExpandButton:t})})]})}return(0,K.jsxs)(K.Fragment,{children:[ue(),fe(),S&&y&&de()]})}var kC=OC;function AC(e){return e.textSelect}var jC=e=>AC(e).text,MC=e=>AC(e).selectedTextContext,NC=e=>AC(e).highlight,PC=e=>AC(e).location,FC=e=>AC(e).cfiRange,IC=e=>AC(e).surroundingText,LC=e=>AC(e).selectionOffsets,RC=Ye(Ze.CLEAR_SELECTION),zC=[Et.SELECTION_CANCELLED,Et.HIGHLIGHT_CLICK_OUTSIDE,Et.PAGE_SCROLL,Et.NAVIGATION_REQUESTED];function BC(){let[e,t]=(0,W.useState)(!1),n=R(jC),r=R(MC),i=R(FC),a=R(IC),o=R(NC),s=R(PC),c=qe(),l=$e(),u=n!==``,d=R(LC),f=xt(Ct.PREFERENCES_FAST_HIGHLIGHT_ENABLED).value,p=(0,W.useCallback)(()=>{u&&l(RC())},[u,l]);vt(zC,p),(0,W.useEffect)(()=>{n!==``&&t(!1)},[n,o]);let m=(0,W.useCallback)(()=>{t(!0)},[]);return{isOpen:u&&!f&&!e,eventLocation:{top:s.top+c.top,left:s.left+c.left},readerRect:c,selectedText:n,selectedTextContext:r,cfiRange:i,surroundingText:a,close:m,selectedHighlight:o,selectionOffsets:d}}N();var VC=e=>[{unicode:`❤️`,label:e.formatMessage({id:`emoji.heart`})},{unicode:`👀`,label:e.formatMessage({id:`emoji.eyes`})},{unicode:`😀`,label:e.formatMessage({id:`emoji.grinning`})},{unicode:`🤔`,label:e.formatMessage({id:`emoji.thinking`})},{unicode:`😱`,label:e.formatMessage({id:`emoji.scared`})}],HC=P.div`
  content: "";
  display: block;
  width: 100%;
  border-bottom: 1px solid ${H.cloud.getShade(4)};
`;N();var UC={Container:P.div`
    overflow-y: auto;
    padding: 10px 10px 0 10px;
    display: inline-block;
  `,MarkerName:P.div`
    margin: 0 0 2px 4px;
    font-weight: bold;
    color: ${H.cloud.getShade(6)};
    font-size: 1.2rem;
    height: 14px;
  `,OverflowContainer:P.div`
    max-height: 175px;
    overflow-y: auto;
  `,MarkersContainer:P.div`
    width: 217px;
    display: inline-block;
  `,HighlightButton:P.button`
    box-sizing: content-box;
    position: relative;
    border-radius: 50%;
    background-color: ${e=>e.bgColor};
    width: 25px;
    height: 25px;
    margin: 2px 4px;
    border: solid ${e=>e.borderColor} 1px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &:hover {
      border-width: 3px;
      margin: 0 2px;
    }
  `,StyledGroup:P(G.Group)`
    opacity: 0.6;
    position: absolute;
    width: 16px;
    height: 16px;
  `,SelectedMarker:P.div`
    position: absolute;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  `};function WC({selectedHighlight:e,closeMenu:t}){let{markers:n}=jr(),{updateMarker:r,highlightSelection:i,deleteHighlight:a,markerForHighlight:o}=es(e?.syncId),[s,c]=(0,W.useState)(e?o?.label:void 0),[l,u]=(0,W.useState)(!1),[f,p]=(0,W.useState)(n),m=I(),h=d();(0,W.useEffect)(()=>{e&&(c(o?.label),p(Ve(n,o)))},[e,o,n]);let g=t=>e?e.marker.globalId===t.globalId?m.formatMessage({id:`contextMenu.deleteHighlight`}):m.formatMessage({id:`contextMenu.changeColor`},{color:t.label}):m.formatMessage({id:`contextMenu.addHighlight`},{color:t.label});return(0,K.jsx)(K.Fragment,{children:h.getProp(`Highlights.enabled`)&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(UC.Container,{children:[(0,K.jsx)(UC.MarkerName,{children:s}),(0,K.jsx)(UC.OverflowContainer,{children:(0,K.jsx)(di,{children:(0,K.jsx)(UC.MarkersContainer,{children:f.map(n=>(0,K.jsxs)(UC.HighlightButton,{"aria-label":g(n),bgColor:n.vstColor,borderColor:n.vstColorDark,onMouseOver:()=>c(n.label),onMouseLeave:()=>c(e?o?.label:void 0),onClick:()=>{e?e.marker.globalId===n.globalId?e.hasNote?u(!0):(a(),t()):(r(n.globalId),t()):(i(n.globalId),t())},children:[n.shared?(0,K.jsx)(UC.StyledGroup,{}):null,e?.marker.globalId===n.globalId?(0,K.jsx)(UC.SelectedMarker,{children:(0,K.jsx)(G.XSmall,{})}):null]},n.globalId))})})}),(0,K.jsx)(HC,{})]}),(0,K.jsx)(Pd,{type:jd.DeleteCancel,open:l,titleId:`contextMenu.confirmDeleteTitle`,messageId:`contextMenu.confirmDeleteMessage`,onRequestClose:()=>u(!1),onResponse:e=>{e===Md.Delete&&(a(),u(!1),t())}})]})})}function GC(e){let t=R(zn),n=z(),r=(0,W.useCallback)(e=>{if(t.length===0)return n(wn({label:hr})).then(t=>{let r=t.data.globalId;return n(tn({markerId:r,noteText:e}))});{let r=t[0].globalId;n(tn({markerId:r,noteText:e}))}},[n,t]),i=(0,W.useCallback)(t=>{n(On({syncId:e,dataFields:t}))},[n,e]);return{addEmojiToCurrentSelection:r,changeEmoji:(0,W.useCallback)(e=>i({noteText:e}),[i]),deleteEmoji:(0,W.useCallback)(()=>n(rn({syncId:e})),[n,e])}}N();var KC={Container:P.div`
    padding: 0 10px;
  `,EmojiList:P.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 3rem;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 40px;
    ${Be}
  `,EmojiButton:P.button`
    margin: 0 5px;
    display: flex;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
  `,SelectedEmoji:P.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,X:P(G.XLarge)`
    color: white;
  `};function qC({selectedHighlight:e,closeMenu:t}){let n=I(),r=d().getProp(`Highlights.enabled`),{isEnabled:i}=pt(),{addEmojiToCurrentSelection:a,changeEmoji:o,deleteEmoji:s}=GC(e?.syncId),c=t=>e?e.noteText===t.unicode?n.formatMessage({id:`contextMenu.deleteEmoji`}):n.formatMessage({id:`contextMenu.changeEmoji`},{emoji:t.label}):n.formatMessage({id:`contextMenu.addEmoji`},{emoji:t.label}),l=n=>(0,K.jsxs)(KC.EmojiButton,{onClick:()=>{e?e.noteText===n.unicode?s():o(n.unicode):a(n.unicode),t()},"aria-label":c(n),children:[n.unicode,e?.noteText===n.unicode?(0,K.jsx)(KC.SelectedEmoji,{children:(0,K.jsx)(KC.X,{})}):null]},n.label);return r&&i(Ft.EMOJI)?(0,K.jsxs)(KC.Container,{children:[(0,K.jsx)(KC.EmojiList,{children:VC(n).map(e=>l(e))}),(0,K.jsx)(HC,{})]}):null}function JC({open:e,closeDialog:t,defineText:n}){let{lookupTerm:r}=va(),[i,a]=(0,W.useState)(``);(0,W.useEffect)(()=>{a(``),e&&r(n).then(e=>{a(e)})},[e,n,r]);function o(){return i===``?(0,K.jsx)(ni,{}):i===null?(0,K.jsx)(w,{id:`dictionary-lookup.no-def-found`}):(0,K.jsx)(`p`,{children:i})}return(0,K.jsx)(Mt,{type:bt.Vstui,onRequestClose:t,size:`small`,open:e,title:e?n:``,children:o()})}N();var YC={Container:P.div`
    padding: 10px 14px;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${H.cloud.getShade(7)};
    display: flex;
    align-items: center;
  `,Color:P.div`
    background-color: ${e=>e.color};
    width: 24px;
    height: 20px;
    margin-right: 7px;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    color: ${H.cloud.getShade(10)};
  `};function XC({highlight:e}){let t=I();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(YC.Container,{children:[(0,K.jsx)(YC.Color,{color:e.vstColor,children:e.authorInitials}),t.formatMessage({id:`contextMenu.sharedBy`},{name:e.authorName})]}),(0,K.jsx)(HC,{})]})}N();var ZC={Header:P.h3`
    color: ${H.cloud.getShade(6)};
    margin: 14px 0 0 16px;
  `,OverflowContainer:P.div`
    display: inline-block;
    max-height: 212px;
    overflow-y: auto;
    ul {
      /* to prevent double scrollbar within List and OverflowContainer */
      max-height: none;
    }
  `,DeckContainer:P.div`
    width: 200px;
    display: inline-block;
  `};function QC({decks:e,callback:t=e=>{},close:n=()=>{}}){let r=I(),i=(0,W.useRef)(null),o=r.formatMessage({id:`contextMenu.createFlashcard`}),s=le(),c=(0,W.useRef)(null);return(0,W.useEffect)(()=>{i.current&&(i.current.setAttribute(`tabindex`,`-1`),i.current.focus())},[]),(0,K.jsxs)(`div`,{role:`dialog`,"aria-labelledby":s,ref:i,children:[(0,K.jsx)(ZC.Header,{id:s,children:o}),(0,K.jsx)(ZC.OverflowContainer,{children:(0,K.jsx)(ZC.DeckContainer,{ref:c,onKeyDown:e=>{if(c.current){let t=c.current.querySelector(`ul`)?.lastElementChild,r=e.target;!e.shiftKey&&e.keyCode===9&&r.closest(`li`)===t&&n()}},children:(0,K.jsx)(ii.List,{data:[{listItems:(()=>{let n=[];return e?.forEach(e=>{n.push({onClick:()=>{t(e.uuid),a(`workbook_flashcards_deck_reader`)},text:e.title})}),n})()}]})})})]})}function $C(){let e=$e();return{playPending:()=>e(dt())}}function ew({open:e,text:t,cfiRange:n,surroundingText:r,onRequestClose:i}){let{currentVal:a}=cr(pr.TRANSLATE_LANGUAGE),{openPanel:o}=Sa(),[s,c]=(0,W.useState)(!1),l=I(),u=t.length<=tm;return(0,W.useEffect)(()=>{e&&!u&&(c(!0),i())},[e,i,u]),(0,W.useEffect)(()=>{e&&a&&u&&(o(q.TRANSLATE,{selectedText:t,cfiRange:n,surroundingText:r}),i())},[e,a,u,o,t,n,r,i]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(am,{open:e&&!a&&u,onRequestClose:i,sourceLanguage:`en`}),(0,K.jsx)(U.Toast,{open:s,toastType:`error`,toastClose:()=>c(!1),toastTitleText:l.formatMessage({id:`translate.maxCharCount`}),toastDescriptionText:l.formatMessage({id:`translate.charLimit`},{charCount:tm})})]})}N();var tw={Menu:P(U.Card)`
    left: ${({location:e})=>e.left}px;
    ${({location:e})=>e.top?`top: ${e.top}px;`:`bottom: ${e.bottom}px;`}
    position: absolute;
    z-index: 500;
  `,Simplify:P.div`
    display: flex;
    gap: 16px;
  `},nw=60,rw=500;function iw(){let{isOpen:e,eventLocation:t,selectedText:n,cfiRange:r,surroundingText:i,close:o,readerRect:s,selectedHighlight:c,selectionOffsets:l}=BC(),u=es(c?.syncId),[f,m]=(0,W.useState)(!1),[h,g]=(0,W.useState)({height:0,width:0}),[v,y]=(0,W.useState)(!1),[b,S]=(0,W.useState)(!1),[C,w]=(0,W.useState)(!1),T=n.split(` `).filter(e=>e).sort(function(e,t){return t.length-e.length}),{isEnabled:E,loadStatus:D}=pt(),O=I(),{playPending:ee}=$C(),{playFromCurrentSelection:k,playFromLocation:te}=$r(O.formatMessage({id:`tts.cantRead`})),ne=(0,W.useRef)(null),A=d(),re=A.getProp(`ContextMenu.enabled`),{decks:ie,numDecks:ae}=uf(),{markers:j}=jr(),{openPanel:oe}=Sa(),{isSupported:M}=va(),{bookInfo:se}=ht(),ce=A.getProp(`locale`),{registerPOI:le}=nt(),{isTranslateEnabled:ue}=nm(),[de,fe]=(0,W.useState)(!1),{isEnabled:N}=gr(),{setCurrentMode:P}=Km();(0,W.useEffect)(()=>{if(y(!1),e){let e=ne.current?.firstElementChild?.scrollWidth,t=ne.current?.firstElementChild?.scrollHeight;e&&t&&g({height:t,width:e})}},[e,t.top,t.left,s,y]);let F=()=>{c?c.cfi?te(c.cfi):te(c.chapterOffset):k()};function pe(){if(u.highlight?.subscribed){if(u.highlight?.hasNote)return`contextMenu.viewNote`}else if(!u.highlight?.isEmoji)return u.highlight?.hasNote?`contextMenu.viewNote`:`workbook.highlights.addNote`}let me=e=>{y(!1),oe(q.NOTEBOOK,{panelTab:_p.FLASHCARDS,metaData:{local:{deckUUID:e,flashcard:{front:{content:n,type:x.TEXT},back:{content:``,type:x.TEXT}}}}}),o()},he=e=>{let t=e.replace(/\s/g,``).length;return t<nw?-1:+(t>rw)},ge=e=>e.replace(/[\n\t\r]/g,` `),_e=()=>{let e=he(n);return N&&e!==-1},ve=async()=>{let e=ge(n),t=he(e);P(Gt.SIMPLIFY),oe(q.AI,{selectedText:e,cfiRange:r,textIsTooLong:t===1,selectionOffsets:l}),o()},ye=()=>ce===`es_MX`?`https://es.wikipedia.org/wiki/${T[0]}`:ce===`pt_BR`?`https://pt.wikipedia.org/wiki/${T[0]}`:`https://en.wikipedia.org/wiki/${T[0]}`;return D===p.OK&&re?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(JC,{open:f,closeDialog:()=>m(!1),defineText:T[0]}),e&&(0,K.jsx)(`div`,{ref:ne,onKeyUp:e=>{e.key===`Escape`&&o()},children:(0,K.jsx)(tw.Menu,{location:(()=>{let e=Ae(h.width,h.height,t.left,t.top+20,je(s,20,25)),n=e.top,r;return t.top>=window.innerHeight/2+20&&t.top-h.height>s.top&&(n=void 0,r=window.innerHeight-t.top+15,_()&&(r+=60)),{top:n,bottom:r,left:e.left}})(),raised:!0,children:v?(0,K.jsx)(QC,{decks:ie,callback:me}):(0,K.jsxs)(K.Fragment,{children:[(()=>{let e=u.highlight;return e?.subscribed?(0,K.jsx)(XC,{highlight:e}):e?e.isEmoji?(0,K.jsx)(qC,{selectedHighlight:c,closeMenu:o}):(0,K.jsx)(WC,{selectedHighlight:c,closeMenu:o}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(WC,{selectedHighlight:c,closeMenu:o}),(0,K.jsx)(qC,{selectedHighlight:c,closeMenu:o})]})})(),(0,K.jsx)(ii.List,{data:[{listItems:(()=>{let e=[];return pe()&&A.getProp(`Highlights.enabled`)&&A.getProp(`Highlights.Notes.enabled`)&&e.push({onClick:()=>{if(u.highlight?.cfi){let e=be(u.highlight?.cfi);e&&le(e.toString())}a(`note_make`),u.highlight?oe(q.EXPANDED_GUTTER,{uuid:mo(u.highlight)}):u.highlightSelection(j[0]?.globalId).then(e=>{oe(q.EXPANDED_GUTTER,{uuid:mo(e.data),options:{willDeleteOnCancel:!0}})}),o()},text:O.formatMessage({id:pe()})}),M&&E(Ft.DEFINE)&&T.length<=2&&e.push({onClick:()=>{o(),m(!0),a(`define`,{lookup_term:n})},text:O.formatMessage({id:`dictionary-lookup.define`})}),ue&&e.push({text:O.formatMessage({id:`translate.translate`}),onClick:()=>{fe(!0),o()},notificationText:O.formatMessage({id:`ai.beta`}).toUpperCase()}),A.getProp(`Copy.enabled`)&&se.copyLimit!==0&&e.push({onClick:()=>{Yn(n).then(()=>{w(!0),c?a(`highlight_copy`,{text:n,sync_id:c.syncId,length:n.length}):a(`selection_copy`,{text:n})}),o()},text:O.formatMessage({id:`base.copy`})}),A.getProp(`Wikipedia.enabled`)&&(c||e.push({onClick:()=>o(),target:`_blank`,href:ye(),text:O.formatMessage({id:`contextMenu.wikipedia`})})),A.getProp(`Flashcards.enabled`)&&e.push({onClick:()=>{if(n.length>1024){S(!0),o();return}ae>1?y(!0):ae===1?me(ie[0].uuid):ae===0&&me()},text:O.formatMessage({id:`contextMenu.createFlashcard`})}),A.getProp(`TTS.enabled`)&&e.push({onClick:()=>{ee(),Hr(),setTimeout(()=>F(),0),a(`tts_play_from_location`),o()},text:O.formatMessage({id:`contextMenu.readAloud`})}),_e()&&e.push({onClick:()=>{ve()},text:(0,K.jsxs)(tw.Simplify,{children:[(0,K.jsx)(bh,{}),O.formatMessage({id:`contextMenu.explainSelection`})]})}),e})()}]})]})})}),(0,K.jsx)(U.Toast,{open:b,toastType:`error`,toastClose:()=>S(!1),toastTitleText:O.formatMessage({id:`contextMenu.flashcardError.title`}),toastDescriptionText:O.formatMessage({id:`workbook.flashcards.editor.maxInputReached`})}),(0,K.jsx)(U.Toast,{open:C,toastType:`success`,toastClose:()=>w(!1),toastTitleText:O.formatMessage({id:`base.copied`})}),(0,K.jsx)(ew,{text:n,cfiRange:r,surroundingText:i,open:de,onRequestClose:()=>fe(!1)})]}):null}export{aa as $,io as A,Na as B,Ls as C,Ao as D,Go as E,Ya as F,xa as G,Aa as H,qa as I,ya as J,Sa as K,Ga as L,oo as M,Za as N,Do as O,Xa as P,ca as Q,Ka as R,cc as S,gs as T,ba as U,ja as V,q as W,pa as X,va as Y,ua as Z,kc as _,dh as a,hc as b,Xc as c,Hc as d,ra as et,Nc as f,Ac as g,jc as h,kC as i,ao as j,po as k,Jc as l,Mc as m,QC as n,Qi as nt,_p as o,Fc as p,Ca as q,BC as r,di as rt,uf as s,iw as t,na as tt,Wc as u,Ec as v,ks as w,mc as x,Cc as y,Ua as z};
//# sourceMappingURL=ContextMenu-DLVogInV.js.map