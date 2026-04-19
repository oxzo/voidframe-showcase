import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as a,P as s,S as t}from"./blocks-B1v88gfH.js";import{T as l}from"./TopBar.stories-DDfo7xUy.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Logo-FcWeSyeA.js";import"./TopBar-CczQ7tI6.js";import"./Link-DvWYmIm_.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";function o(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(r.h1,{id:"topbar",children:"TopBar"}),`
`,e.jsxs(r.p,{children:[`The global product bar. Every page wears it. Holds brand, workspace pivot, primary
section links, tool buttons (⌘K, alerts), and the operator chip. One `,e.jsx(r.code,{children:'aria-current="page"'}),`
link per render — never two.`]}),`
`,e.jsx(s,{}),`
`,e.jsx(r.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(r.p,{children:["A 5-column grid (",e.jsx(r.code,{children:"auto auto 1fr auto auto"}),"):"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"<TopBarBrand>"})})," — wordmark + optional ",e.jsx(r.code,{children:"version"})," chip. Display-mono, ",e.jsx(r.code,{children:"--rad-300"}),`,
with a faint glow.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"<TopBarWorkspace label value>"})}),` — workspace pivot. Click target — wire to a
`,e.jsx(r.code,{children:"<MenuTrigger>"})," upstream when it pops."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"<TopBarLinks>"})})," — flex container for ",e.jsx(r.code,{children:"<TopBarLink index badge>"}),` items. Each link
shows a 2-digit index in `,e.jsx(r.code,{children:"--rad-500"}),`, an uppercase label, and an optional hazard-orange
badge.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"<TopBarTools>"})})," — flex container for ",e.jsx(r.code,{children:"<TopBarTool kbd>"})," buttons (search, alerts)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"<TopBarUser avatar name role status>"})}),` — operator chip with status pulse and
chamfered avatar. The `,e.jsx(r.code,{children:"compact"})," variant hides the meta panel."]}),`
`]}),`
`,e.jsx(r.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<TopBar>
  <TopBarBrand version="v0.1.9a">VOIDFRAME</TopBarBrand>
  <TopBarWorkspace label="WKSP" value="kilo-echo-9" />
  <TopBarLinks aria-label="primary sections">
    <TopBarLink href="/dash" index="01">DASH</TopBarLink>
    <TopBarLink href="/ops"  index="02" badge="3" aria-current="page">OPS</TopBarLink>
  </TopBarLinks>
  <TopBarTools>
    <TopBarTool kbd="⌘K">SRCH</TopBarTool>
  </TopBarTools>
  <TopBarUser avatar="OP" name="operator_kb9" role="cleared · TS/SCI" />
</TopBar>
`})}),`
`,e.jsx(r.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"standard"})})," — 56px tall, full version chip, full operator meta visible."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"compact"})})," — 44px tall. Brand version chip and operator meta panel are hidden."]}),`
`]}),`
`,e.jsx(r.h2,{id:"mobile-drawer",children:"Mobile drawer"}),`
`,e.jsxs(r.p,{children:["At ",e.jsx(r.code,{children:"<=900px"}),", mobile navigation is rendered by the sibling ",e.jsx(r.code,{children:"<TopBarDrawer>"}),` component
(`,e.jsx(r.code,{children:"src/shared/components/TopBarDrawer/"}),`). Page layouts compose the two together —
`,e.jsx(r.code,{children:"<TopBar>"}),` itself does not own the drawer, so it stays a thin chrome bar at every
breakpoint while the off-canvas sheet, hamburger trigger, and link list live next door.`]}),`
`,e.jsx(r.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"DO"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Keep ",e.jsx(r.strong,{children:"3–6 primary links"}),". Beyond that, demote to a SubNav under a section."]}),`
`,e.jsxs(r.li,{children:["Mark the active link with ",e.jsx(r.code,{children:'aria-current="page"'}),". Exactly one per render."]}),`
`,e.jsxs(r.li,{children:["Prefix every link with a stable ",e.jsx(r.code,{children:"index"}),` so operators can refer to them by number in
comms.`]}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"DON'T"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Hide the workspace pivot. The operator must always see ",e.jsx(r.em,{children:"which"})," workspace they're in."]}),`
`,e.jsx(r.li,{children:"Animate the active underline — it's a sigil, not an effect."}),`
`,e.jsxs(r.li,{children:["Stuff settings into ",e.jsx(r.code,{children:"<TopBarTools>"}),". Settings live in the operator menu (",e.jsx(r.code,{children:"<TopBarUser>"}),")."]}),`
`]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["The outer landmark is ",e.jsx(r.code,{children:'<nav aria-label="primary">'}),". ",e.jsx(r.code,{children:"<TopBarLinks>"}),` is a nested
`,e.jsx(r.code,{children:"<nav>"})," — name it via ",e.jsx(r.code,{children:"aria-label"})," (e.g. ",e.jsx(r.code,{children:'"primary sections"'}),`). Tool buttons are real
`,e.jsx(r.code,{children:'<button type="button">'}),` elements. The workspace and operator chips are keyboard-focusable
via `,e.jsx(r.code,{children:"tabIndex={0}"})," so they stay reachable when wired to a popover."]}),`
`,e.jsx(r.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(t,{})]})}function v(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{v as default};
