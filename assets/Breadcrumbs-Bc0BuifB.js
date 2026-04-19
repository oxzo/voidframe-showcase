import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as d,P as c,S as a}from"./blocks-B1v88gfH.js";import{B as o}from"./Breadcrumbs.stories-Bw1Wefo0.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Breadcrumbs-CRGxWlfs.js";import"./filterDOMProps-Bh70n4Et.js";import"./Collection-Clcb5Xin.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";import"./Link-DvWYmIm_.js";import"./useLocalizedStringFormatter-hb7eYMDE.js";import"./I18nProvider-C_KRB3TE.js";function s(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o}),`
`,e.jsx(r.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx(r.p,{children:`Where the operator is. Declares the path in the stark, unforgiving way a command prompt
does.`}),`
`,e.jsx(c,{}),`
`,e.jsx(r.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Container"})," — a thin orange-tinted gradient panel with a 1px ",e.jsx(r.code,{children:"--void-300"})," border."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Root"})," — the first crumb. Prefixed with a ",e.jsx(r.code,{children:"~/"})," (shell variant) or ",e.jsx(r.code,{children:"VF://"}),` (path
variant) in `,e.jsx(r.code,{children:"--rad-500"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Separator"})," — ",e.jsx(r.code,{children:"〉"})," (shell) or ",e.jsx(r.code,{children:"/"})," (path), auto-injected between ",e.jsx(r.code,{children:"<Breadcrumb>"}),`
children.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Current crumb"})," — the final one. Carries ",e.jsx(r.code,{children:"data-current"}),` from react-aria and glows in
`,e.jsx(r.code,{children:"--rad-200"}),". Rendered as plain text (no ",e.jsx(r.code,{children:"<BreadcrumbLink>"}),")."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Trail (path variant only)"})," — pass via the ",e.jsx(r.code,{children:"trailing"})," prop on ",e.jsx(r.code,{children:"<Breadcrumbs>"}),`. Wrap
the contents in `,e.jsx(r.code,{children:"<BreadcrumbsTrail>"})," and use ",e.jsx(r.code,{children:"<BreadcrumbsTrailOk>"}),` (saved pulse) +
`,e.jsx(r.code,{children:"<BreadcrumbsTrailPipe>"}),` (divider). The trail renders as a flex sibling of the crumb
list so the visual frame contains both. Do not place `,e.jsx(r.code,{children:"<BreadcrumbsTrail>"}),` as a child
of `,e.jsx(r.code,{children:"<Breadcrumbs>"})," — the inner element is an ",e.jsx(r.code,{children:"<ol>"})," and any non-",e.jsx(r.code,{children:"<li>"}),` child gets
dropped.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Tracking"})," — ",e.jsx(r.code,{children:".16em"}),", uppercase, ",e.jsx(r.code,{children:"--font-data"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:[e.jsx(r.code,{children:"shell"})," (default)"]})," — terminal prompt feel. ",e.jsx(r.code,{children:"~/"})," root, ",e.jsx(r.code,{children:"〉"}),` separators, no leading
glyph.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"path"})})," — designed for headers next to a save-state readout. ",e.jsx(r.code,{children:"▶ VF://"})," root, ",e.jsx(r.code,{children:"/"}),`
separators, current crumb sits inside an irradiated chip.`]}),`
`]}),`
`,e.jsx(r.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<Breadcrumbs>
  <Breadcrumb>
    <BreadcrumbLink href="/">HOME</BreadcrumbLink>
  </Breadcrumb>
  <Breadcrumb>
    <BreadcrumbLink href="/sector">SECTOR 7</BreadcrumbLink>
  </Breadcrumb>
  <Breadcrumb>NODE 42</Breadcrumb> {/* no <BreadcrumbLink> — current page */}
</Breadcrumbs>
`})}),`
`,e.jsx(r.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"DO"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Omit the ",e.jsx(r.code,{children:"<BreadcrumbLink>"})," on the final crumb."]})," react-aria marks it ",e.jsx(r.code,{children:"data-current"}),`
and styles follow — do not hand-wire an `,e.jsx(r.code,{children:"aria-current"}),"."]}),`
`,e.jsxs(r.li,{children:["Use for ",e.jsx(r.strong,{children:"deep, stable hierarchies"}),": ",e.jsx(r.code,{children:"/root → /sector → /node → /detail"}),`. If the page
tree is two levels deep, drop the breadcrumbs — they cost visual weight without paying.`]}),`
`,e.jsxs(r.li,{children:["Keep ",e.jsx(r.strong,{children:"each crumb to 1–3 words"}),", uppercase. The stylesheet presses the case."]}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"DON'T"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Use for lateral navigation — that's ",e.jsx(r.code,{children:"<Tabs>"}),"."]}),`
`,e.jsx(r.li,{children:"Use for recently-visited history — that's a browser concern."}),`
`,e.jsx(r.li,{children:`Build a mega-menu off a breadcrumb. If a crumb needs a dropdown, the hierarchy is
wrong.`}),`
`,e.jsx(r.li,{children:"Exceed ~5 crumbs. If you're overflowing, lift a level into the section header."}),`
`]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["Built on ",e.jsx(r.code,{children:"react-aria-components"})," ",e.jsx(r.a,{href:"https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html",rel:"nofollow",children:e.jsx(r.code,{children:"Breadcrumbs"})}),`.
The nav is labeled by default; pass `,e.jsx(r.code,{children:"aria-label"}),` to override if you have multiple
breadcrumb trails on one page.`]}),`
`,e.jsx(r.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(a,{})]})}function k(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{k as default};
