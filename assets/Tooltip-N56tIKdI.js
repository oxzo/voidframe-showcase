import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as t,P as s,S as l}from"./blocks-B1v88gfH.js";import{T as c}from"./Tooltip.stories-CSoHGa-8.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Button-q-nZj2ek.js";import"./Button-BV1bEvDU.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";import"./Tooltip-DQEH5Rm3.js";import"./useOverlayTriggerState-D7TnwnEU.js";import"./number-Bh7bbZmX.js";import"./I18nProvider-C_KRB3TE.js";import"./useControlledState-C5a7RtfP.js";import"./PortalProvider-BRea_w2C.js";import"./animation-gJiBC3OQ.js";function i(n){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(o.p,{children:["An acknowledgement tag, not a description. A neon chip that ",e.jsx(o.strong,{children:"names"}),` what a control does
— in 3–6 uppercase tokens, with an optional keyboard shortcut.`]}),`
`,e.jsx(s,{}),`
`,e.jsx(o.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"<TooltipTrigger>"})})," — react-aria wrapper. Wraps the control the tooltip describes."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"<Tooltip>"})})," — a bright orange chip (",e.jsx(o.code,{children:"--rad-300"}),` fill, black ink). Chamfered at two
corners.`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Arrow"})," — a 10×6 triangle in ",e.jsx(o.code,{children:"--rad-300"}),". Opt out with ",e.jsx(o.code,{children:"showArrow={false}"}),` when two
tooltips collide.`]}),`
`]}),`
`,e.jsx(o.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<TooltipTrigger>
  <Button>HOVER ME</Button>
  <Tooltip>ACK // ⌘⇧K</Tooltip>
</TooltipTrigger>
`})}),`
`,e.jsx(o.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"DO"})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Keep copy to ",e.jsx(o.strong,{children:"3–6 tokens"}),", uppercase. ",e.jsx(o.code,{children:"ACK // ⌘⇧K"})," beats ",e.jsx(o.em,{children:"Acknowledges the alert"}),"."]}),`
`,e.jsxs(o.li,{children:["Use for ",e.jsx(o.strong,{children:"keyboard shortcuts"}),` on icon buttons, non-obvious controls, or redundant
labels on tight headers.`]}),`
`,e.jsxs(o.li,{children:["Use a ",e.jsx(o.code,{children:"//"}),` separator when the tooltip combines a code and a key binding:
`,e.jsx(o.code,{children:"SYNC NODE // ⌘S"}),"."]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"DON'T"})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Use as the ",e.jsx(o.strong,{children:"only"}),` way to discover a control's purpose. Anything a sighted keyboard
user can't tab to, a tooltip can't rescue. If your icon needs a tooltip to be
understood, also give it an `,e.jsx(o.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(o.li,{children:["Pack a sentence into it. If you need a sentence, reach for ",e.jsx(o.code,{children:'<Popover variant="shell">'}),"."]}),`
`,e.jsxs(o.li,{children:["Put tooltips on plain body text — tooltips attach to ",e.jsx(o.em,{children:"controls"}),"."]}),`
`,e.jsxs(o.li,{children:["Use for validation errors or live feedback — those belong in a ",e.jsx(o.code,{children:"<Toast>"}),` or inline
error text.`]}),`
`]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.p,{children:["Built on ",e.jsx(o.code,{children:"react-aria-components"})," ",e.jsx(o.a,{href:"https://react-spectrum.adobe.com/react-aria/Tooltip.html",rel:"nofollow",children:e.jsx(o.code,{children:"Tooltip"})}),`.
Shows on hover and on focus (required by the spec). Delay defaults to 700ms; pass
`,e.jsx(o.code,{children:"delay={0}"})," on a ",e.jsx(o.code,{children:"<TooltipTrigger>"}),` only in demos — a zero-delay tooltip is intrusive in
real use.`]}),`
`,e.jsx(o.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(l,{})]})}function S(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{S as default};
