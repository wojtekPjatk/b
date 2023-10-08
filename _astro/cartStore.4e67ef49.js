import{r as a}from"./index.ed373d49.js";var c={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=a,v=Symbol.for("react.element"),x=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function y(s,l,i){var e,r={},u=null,t=null;i!==void 0&&(u=""+i),l.key!==void 0&&(u=""+l.key),l.ref!==void 0&&(t=l.ref);for(e in l)m.call(l,e)&&!k.hasOwnProperty(e)&&(r[e]=l[e]);if(s&&s.defaultProps)for(e in l=s.defaultProps,l)r[e]===void 0&&(r[e]=l[e]);return{$$typeof:v,type:s,key:u,ref:t,props:r,_owner:d.current}}f.Fragment=x;f.jsx=y;f.jsxs=y;c.exports=f;var S=c.exports;let n=[],b=(s,l)=>{let i=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},l:l||0,lc:0,listen(r,u){return e.lc=i.push(r,u||e.l)/2,()=>{let t=i.indexOf(r);~t&&(i.splice(t,2),e.lc--,e.lc||e.off())}},notify(r){let u=!n.length;for(let t=0;t<i.length;t+=2)n.push(i[t],e.value,r,i[t+1]);if(u){for(let t=0;t<n.length;t+=4){let p=!1;for(let o=t+7;o<n.length;o+=4)if(n[o]<n[t+3]){p=!0;break}p?n.push(n[t],n[t+1],n[t+2],n[t+3]):n[t](n[t+1],n[t+2])}n.length=0}},off(){},set(r){e.value!==r&&(e.value=r,e.notify())},subscribe(r,u){let t=e.listen(r,u);return r(e.value),t},value:s};return e};function h(s,l,i){let e=new Set([...l,void 0]);return s.listen((r,u)=>{e.has(u)&&i(r,u)})}function E(s,l={}){let i=a.useCallback(r=>l.keys?h(s,l.keys,r):s.listen(r),[l.keys,s]),e=s.get.bind(s);return a.useSyncExternalStore(i,e,e)}const R=b(!1);export{R as i,S as j,E as u};
