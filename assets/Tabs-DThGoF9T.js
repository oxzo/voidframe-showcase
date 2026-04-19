import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as t,P as o,S as a}from"./blocks-B1v88gfH.js";import{T as d}from"./Tabs.stories-BUw_qNf7.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Tabs-C9rhv3E0.js";import"./filterDOMProps-Bh70n4Et.js";import"./Collection-Clcb5Xin.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";import"./useCollection-NUsIjjhw.js";import"./I18nProvider-C_KRB3TE.js";import"./useControlledState-C5a7RtfP.js";import"./useHasTabbableChild-CFxKdQQU.js";import"./useLabels-DQ_gQFKV.js";import"./inertValue-BuFaHBHE.js";import"./useListState-C6tbuOmy.js";import"./animation-gJiBC3OQ.js";function i(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:["Segmented panel switcher. Where the operator ",e.jsx(n.em,{children:"looks"}),", not where they ",e.jsx(n.em,{children:"go"}),`. Tabs swap
content on the same surface — they do not change the page.`]}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Tabs>"})})," — framed container (1px ",e.jsx(n.code,{children:"--void-300"})," border, ",e.jsx(n.code,{children:"--void-050"})," fill)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<TabList>"})}),` — horizontal strip with a very faint vertical-line pattern in the
background, hinting at a spec sheet.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Tab>"})})," — uppercase label, optional ",e.jsx(n.code,{children:"index={n}"})," → renders a leading ",e.jsx(n.code,{children:"[NN]"}),` chip in
`,e.jsx(n.code,{children:"--rad-500"}),". Selected tab gets a 2px glowing underline and a ▸ prefix."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<TabPanel>"})})," — the body. Padding ",e.jsx(n.code,{children:"var(--s-6)"}),`. Swaps content without remount unless
you opt into react-aria's `,e.jsx(n.code,{children:"shouldForceMount"})," behavior."]}),`
`]}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Tabs defaultSelectedKey="diag">
  <TabList aria-label="Node panels">
    <Tab id="diag" index={1}>DIAGNOSTIC</Tab>
    <Tab id="logs" index={2}>LOGS</Tab>
    <Tab id="telemetry" index={3}>TELEMETRY</Tab>
  </TabList>
  <TabPanel id="diag">…</TabPanel>
  <TabPanel id="logs">…</TabPanel>
  <TabPanel id="telemetry">…</TabPanel>
</Tabs>
`})}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use for ",e.jsx(n.strong,{children:"peer surfaces"}),`: different views of the same subject. All tabs relate to one
entity.`]}),`
`,e.jsxs(n.li,{children:["Keep to ",e.jsx(n.strong,{children:"3–6 tabs"}),". Beyond that, you have a navigation problem, not a view problem."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"index={n}"})}),` on tabs when the app carries a system-level numbering scheme
(e.g. ops docs that use `,e.jsx(n.code,{children:"SEC_002"}),"-style labels); skip it on ordinary content."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use tabs for ",e.jsx(n.strong,{children:"different subjects"})," — that's routing. Use pages."]}),`
`,e.jsx(n.li,{children:"Stack tabs in two rows. If you can't fit them, redesign."}),`
`,e.jsxs(n.li,{children:["Use tabs for a wizard / flow — that's ",e.jsx(n.code,{children:'<Tabs orientation="vertical">'}),` at best, but more
likely a dedicated stepper component (not yet provided).`]}),`
`,e.jsx(n.li,{children:"Nest tab panels inside tab panels. Two levels = no levels."}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Built on ",e.jsx(n.code,{children:"react-aria-components"})," ",e.jsx(n.a,{href:"https://react-spectrum.adobe.com/react-aria/Tabs.html",rel:"nofollow",children:e.jsx(n.code,{children:"Tabs"})}),`.
Keyboard: `,e.jsx(n.code,{children:"←"})," ",e.jsx(n.code,{children:"→"})," to move, ",e.jsx(n.code,{children:"Home"})," / ",e.jsx(n.code,{children:"End"})," to jump, ",e.jsx(n.code,{children:"Enter"})," / ",e.jsx(n.code,{children:"Space"}),` on a manual-activation
tab. `,e.jsx(n.code,{children:"<TabList>"})," requires an ",e.jsx(n.code,{children:"aria-label"})," — name it after what the tabs group represents."]}),`
`,e.jsx(n.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(a,{})]})}function C(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{C as default};
