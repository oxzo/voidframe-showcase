import{B as _}from"./Button-q-nZj2ek.js";const f={title:"Shared/Button",component:_,parameters:{docs:{description:{component:"A command, issued. Four intents: `primary` (the act), `secondary` (the alternate), `ghost` (the retreat), `destructive` (the consequence). One `primary` per view — if you have two, you have none."}}},args:{children:"EXECUTE",intent:"primary"},argTypes:{intent:{control:"inline-radio",options:["primary","secondary","ghost","destructive"]}}},e={},r={args:{intent:"secondary"}},s={args:{intent:"ghost"}},t={args:{intent:"destructive",children:"PURGE"}},o={args:{isDisabled:!0,children:"LOCKED"}},a={args:{autoFocus:!0,children:"FOCUSED"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    intent: 'secondary'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    intent: 'ghost'
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,y,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    intent: 'destructive',
    children: 'PURGE'
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,D,E;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    children: 'LOCKED'
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var O,b,F;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    autoFocus: true,
    children: 'FOCUSED'
  }
}`,...(F=(b=a.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const B=["Primary","Secondary","Ghost","Destructive","Disabled","AutoFocused"],P=Object.freeze(Object.defineProperty({__proto__:null,AutoFocused:a,Destructive:t,Disabled:o,Ghost:s,Primary:e,Secondary:r,__namedExportsOrder:B,default:f},Symbol.toStringTag,{value:"Module"}));export{P as B};
