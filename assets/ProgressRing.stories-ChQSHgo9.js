import{P as R}from"./ProgressRing-Cmidc6uI.js";const L={title:"Shared/ProgressRing",component:R,args:{label:"SYNC",value:50,maxValue:100,size:120,kind:"default"},argTypes:{kind:{control:"inline-radio",options:["default","warn","crit","tox"]},value:{control:{type:"range",min:0,max:100,step:1}},size:{control:{type:"range",min:48,max:240,step:8}}},parameters:{layout:"centered",docs:{description:{component:"Circular telemetry dial. A neon arc on a muted ring; a short uppercase `label` sits under the percentage. Use for single-dimension metrics where the visual weight of a dial is warranted (core temperature, uplink integrity, sync). Prefer `<Meter>` when comparing multiple metrics side-by-side."}}}},e={},r={args:{value:0}},a={args:{value:100}},s={args:{value:70,kind:"warn",label:"COOLANT"}},o={args:{value:92,kind:"crit",label:"CORE"}},n={args:{value:40,kind:"tox",label:"ATMO"}},t={args:{size:64,value:66}},c={args:{size:200,value:33}};var l,i,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,v,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,y,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 70,
    kind: 'warn',
    label: 'COOLANT'
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var O,x,k;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: 92,
    kind: 'crit',
    label: 'CORE'
  }
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,T,h;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 40,
    kind: 'tox',
    label: 'ATMO'
  }
}`,...(h=(T=n.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var w,z,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 64,
    value: 66
  }
}`,...(P=(z=t.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var _,A,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 200,
    value: 33
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const M=["Default","Empty","Full","Warn","Crit","Tox","Small","Large"],j=Object.freeze(Object.defineProperty({__proto__:null,Crit:o,Default:e,Empty:r,Full:a,Large:c,Small:t,Tox:n,Warn:s,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{j as P};
