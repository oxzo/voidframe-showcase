import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as c}from"./Button-q-nZj2ek.js";import{T as r,$ as d}from"./Tooltip-DQEH5Rm3.js";const u={title:"Shared/Tooltip",component:r,parameters:{layout:"centered",docs:{description:{component:"An acknowledgement tag, not a description. A neon chip carrying a code, a keyboard shortcut, or a terse hint. Keep the copy to 3–6 uppercase tokens. A targeting arrow points at its trigger by default — opt out with `showArrow={false}` when two tooltips collide."}}}},o={render:()=>e.jsxs(d,{defaultOpen:!0,delay:0,children:[e.jsx(c,{children:"HOVER ME"}),e.jsx(r,{children:"Diagnostic scan for node 42"})]})},t={render:()=>e.jsxs(d,{defaultOpen:!0,delay:0,children:[e.jsx(c,{children:"NO ARROW"}),e.jsx(r,{showArrow:!1,children:"Flat tooltip, no targeting indicator"})]})};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <TooltipTrigger defaultOpen delay={0}>
      <Button>HOVER ME</Button>
      <Tooltip>Diagnostic scan for node 42</Tooltip>
    </TooltipTrigger>
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,l,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <TooltipTrigger defaultOpen delay={0}>
      <Button>NO ARROW</Button>
      <Tooltip showArrow={false}>Flat tooltip, no targeting indicator</Tooltip>
    </TooltipTrigger>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const g=["OpenByDefault","WithoutArrow"],T=Object.freeze(Object.defineProperty({__proto__:null,OpenByDefault:o,WithoutArrow:t,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{T};
