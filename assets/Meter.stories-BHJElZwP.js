import{M as L}from"./Meter-C6qMo3Pc.js";const A={title:"Shared/Meter",component:L,args:{label:"CORE TEMP",value:50,maxValue:100,segments:24,kind:"default"},argTypes:{kind:{control:"inline-radio",options:["default","warn","crit","tox"]},value:{control:{type:"range",min:0,max:100,step:1}}},parameters:{layout:"padded",docs:{description:{component:'No smooth fills. Meters are broken into discrete slivers — a nod to CRT health bars and analog VU scales. Each tick is an earned unit. `kind="crit"` flickers. Use for telemetry (what _is_), not for progress (what _will be_) — reach for `ProgressBar` there.'}}}},e={},r={args:{value:0}},a={args:{value:100}},s={args:{value:70,kind:"warn",label:"COOLANT"}},o={args:{value:92,kind:"crit",label:"CORE TEMP"}},n={args:{value:40,kind:"tox",label:"ATMOSPHERE"}},t={args:{segments:8,value:60}},l={args:{label:"FUEL",value:12,maxValue:40,renderValue:({value:P,maxValue:F})=>`${P}/${F} L`}};var c,u,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var g,v,E;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...(E=(v=a.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var S,b,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 70,
    kind: 'warn',
    label: 'COOLANT'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,k,M;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 92,
    kind: 'crit',
    label: 'CORE TEMP'
  }
}`,...(M=(k=o.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var O,T,C;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: 40,
    kind: 'tox',
    label: 'ATMOSPHERE'
  }
}`,...(C=(T=n.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var V,_,h;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    segments: 8,
    value: 60
  }
}`,...(h=(_=t.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var w,y,R;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'FUEL',
    value: 12,
    maxValue: 40,
    renderValue: ({
      value,
      maxValue
    }) => \`\${value}/\${maxValue} L\`
  }
}`,...(R=(y=l.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};const U=["Default","Empty","Full","Warn","Crit","Tox","FewSegments","CustomRenderValue"],N=Object.freeze(Object.defineProperty({__proto__:null,Crit:o,CustomRenderValue:l,Default:e,Empty:r,FewSegments:t,Full:a,Tox:n,Warn:s,__namedExportsOrder:U,default:A},Symbol.toStringTag,{value:"Module"}));export{N as M};
