import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as l,P as i,S as o}from"./blocks-B1v88gfH.js";import{S as c}from"./Stepper.stories-DURBmEEk.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Stepper-DO-v15dM.js";function r(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"stepper",children:"Stepper"}),`
`,e.jsxs(n.p,{children:["Linear task flow. Arrows — not dots. Four states per step: ",e.jsx(n.code,{children:"pending"})," (dim), ",e.jsx(n.code,{children:"done"}),`
(sickly-green ✓), `,e.jsx(n.code,{children:"current"})," (irradiated, glow), ",e.jsx(n.code,{children:"err"})," (hazard red)."]}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Stepper aria-label>"})})," — outer ",e.jsx(n.code,{children:"<nav>"})," landmark; ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"aria-label"})," is required"]}),`
(e.g. `,e.jsx(n.code,{children:'"deployment"'}),", ",e.jsx(n.code,{children:'"onboarding"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Step state number label sub>"})})," — chevron-clipped block. The ",e.jsx(n.code,{children:"current"}),` step gets
`,e.jsx(n.code,{children:'aria-current="step"'}),"; all states get ",e.jsx(n.code,{children:"data-state"})," so the stylesheet can colour them."]}),`
`]}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Stepper aria-label="deployment">
  <Step state="done"    number="01" label="SOURCE" sub="repo linked" />
  <Step state="done"    number="02" label="BUILD"  sub="3.2s" />
  <Step state="err"     number="03" label="TESTS"  sub="2 failed" />
  <Step                  number="04" label="STAGE"  sub="blocked" />
  <Step                  number="05" label="SHIP"   sub="blocked" />
</Stepper>
`})}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Keep each ",e.jsx(n.code,{children:"label"})," to ",e.jsx(n.strong,{children:"one word, uppercase"}),". The ",e.jsx(n.code,{children:"sub"})," line carries the qualifier."]}),`
`,e.jsxs(n.li,{children:["Mark exactly ",e.jsxs(n.strong,{children:["one step ",e.jsx(n.code,{children:"current"})]}),` at a time. If two are simultaneous, your flow has
parallel branches — split into two `,e.jsx(n.code,{children:"<Stepper>"}),"s."]}),`
`,e.jsxs(n.li,{children:["After an ",e.jsx(n.code,{children:"err"}),", every downstream step is ",e.jsx(n.code,{children:"pending"})," with ",e.jsx(n.code,{children:'sub="blocked"'}),`. Don't
silently leave them green.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for >5 steps. Beyond that, pop a Wizard or a vertical Stepper (not yet built)."}),`
`,e.jsxs(n.li,{children:["Allow click-to-jump unless the flow truly is non-linear. Steps are an ",e.jsx(n.em,{children:"order"}),`, not a
picker.`]}),`
`,e.jsx(n.li,{children:"Animate the current step. The glow is enough."}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The current step is announced via ",e.jsx(n.code,{children:'aria-current="step"'}),`. The whole nav is labelable —
the host MUST pass `,e.jsx(n.code,{children:"aria-label"}),` so screen readers can distinguish concurrent flows
(e.g. "deployment" vs "onboarding"). State changes should be announced via the host's
status region, not by toggling step labels mid-flow.`]}),`
`,e.jsx(n.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(o,{})]})}function g(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{g as default};
