import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as r,P as a,S as o}from"./blocks-B1v88gfH.js";import{S as c}from"./SubNav.stories-Drt_Gwi7.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./SubNav-CURQNEDC.js";import"./Link-DvWYmIm_.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";function s(i){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(n.h1,{id:"subnav",children:"SubNav"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`VOIDFRAME app-shell scaffold — not part of the hand-off spec; used by the Showcase
and OpsConsole example views.`}),`
`]}),`
`,e.jsxs(n.p,{children:["Sectional navigation strip. Each item carries a ",e.jsx(n.code,{children:"count"})," and an optional ",e.jsx(n.code,{children:"status"}),` sigil
(`,e.jsx(n.code,{children:"warn"})," orange, ",e.jsx(n.code,{children:"crit"})," flickering red). Use for navigating between ",e.jsx(n.em,{children:`related routes within
one section`})," — reach for ",e.jsx(n.code,{children:"<Tabs>"})," when swapping content surfaces on the same page."]}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<SubNavHead label>"})})," — leading section identifier with stencil hatching."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<SubNavItems>"})})," — flex row of items; horizontally scrollable when overflowing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<SubNavItem href count status>"})}),` — link with name + count line + optional status
diamond. Marked with `,e.jsx(n.code,{children:'aria-current="page"'})," to indicate the active route."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<SubNavTrailing live>"})})," — right-pinned status block with optional pulse."]}),`
`]}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<SubNav>
  <SubNavHead label="SECTION">▌ DESIGN_SYS</SubNavHead>
  <SubNavItems>
    <SubNavItem href="/overview" count="12 FILES">OVERVIEW</SubNavItem>
    <SubNavItem href="/tokens"   count="47 VARS" aria-current="page">TOKENS</SubNavItem>
    <SubNavItem href="/patterns" count="5 DOCS"  status="warn">PATTERNS</SubNavItem>
    <SubNavItem href="/motion"   count="QUEUED"  status="crit">MOTION</SubNavItem>
  </SubNavItems>
  <SubNavTrailing live>LIVE</SubNavTrailing>
</SubNav>
`})}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always pair an item with its ",e.jsx(n.strong,{children:"count"}),`. Stale counts are worse than none — derive from
the same source the destination shows.`]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:'status="warn"'})}),' for "needs attention", ',e.jsx(n.strong,{children:e.jsx(n.code,{children:'status="crit"'})}),' for "blocking".']}),`
`,e.jsxs(n.li,{children:["Mark the active route with ",e.jsx(n.code,{children:'aria-current="page"'}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Stack a ",e.jsx(n.code,{children:"<SubNav>"})," underneath a ",e.jsx(n.code,{children:"<Tabs>"}),". Pick one — they fight each other."]}),`
`,e.jsx(n.li,{children:"Animate the underline. It is the sigil of presence, not an effect."}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The outer landmark is ",e.jsx(n.code,{children:'<nav aria-label="section">'}),". Items are ",e.jsx(n.code,{children:"react-aria-components"}),`
`,e.jsx(n.code,{children:"<Link>"}),"s — keyboard navigation, focus-visible outlines, and ",e.jsx(n.code,{children:"data-hovered"}),` states are
inherited.`]}),`
`,e.jsx(n.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(o,{})]})}function f(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{f as default};
