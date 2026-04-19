import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t,a as r}from"./Stepper-DO-v15dM.js";const u={title:"Shared/Stepper",component:t,parameters:{layout:"padded",docs:{description:{component:"Linear task flow. Arrows — not dots. Four states per step: pending (dim), done (sickly green ✓), current (irradiated, glow), err (hazard red). Never skip; never stack > 5 steps in one row."}}}},n={render:()=>e.jsxs(t,{"aria-label":"onboarding",children:[e.jsx(r,{state:"done",number:"01",label:"AUTH",sub:"credentials ok"}),e.jsx(r,{state:"done",number:"02",label:"CLEAR",sub:"ts/sci verified"}),e.jsx(r,{state:"current",number:"03",label:"PAYLOAD",sub:"configuring…"}),e.jsx(r,{number:"04",label:"DEPLOY",sub:"pending"}),e.jsx(r,{number:"05",label:"VERIFY",sub:"pending"})]})},s={render:()=>e.jsxs(t,{"aria-label":"deployment",children:[e.jsx(r,{state:"done",number:"01",label:"SOURCE",sub:"repo linked"}),e.jsx(r,{state:"done",number:"02",label:"BUILD",sub:"3.2s"}),e.jsx(r,{state:"err",number:"03",label:"TESTS",sub:"2 failed"}),e.jsx(r,{number:"04",label:"STAGE",sub:"blocked"}),e.jsx(r,{number:"05",label:"SHIP",sub:"blocked"})]})};var a,o,b;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Stepper aria-label="onboarding">
      <Step state="done" number="01" label="AUTH" sub="credentials ok" />
      <Step state="done" number="02" label="CLEAR" sub="ts/sci verified" />
      <Step state="current" number="03" label="PAYLOAD" sub="configuring…" />
      <Step number="04" label="DEPLOY" sub="pending" />
      <Step number="05" label="VERIFY" sub="pending" />
    </Stepper>
}`,...(b=(o=n.parameters)==null?void 0:o.docs)==null?void 0:b.source}}};var l,d,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Stepper aria-label="deployment">
      <Step state="done" number="01" label="SOURCE" sub="repo linked" />
      <Step state="done" number="02" label="BUILD" sub="3.2s" />
      <Step state="err" number="03" label="TESTS" sub="2 failed" />
      <Step number="04" label="STAGE" sub="blocked" />
      <Step number="05" label="SHIP" sub="blocked" />
    </Stepper>
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const i=["Onboarding","ErrorState"],S=Object.freeze(Object.defineProperty({__proto__:null,ErrorState:s,Onboarding:n,__namedExportsOrder:i,default:u},Symbol.toStringTag,{value:"Module"}));export{S};
