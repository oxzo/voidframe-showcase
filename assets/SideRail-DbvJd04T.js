import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as s,P as d,S as o}from"./blocks-B1v88gfH.js";import{S as a}from"./SideRail.stories-cY2S2tSw.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./SideRail-BNemZKY3.js";function l(n){const i={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(i.h1,{id:"siderail",children:"SideRail"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:`VOIDFRAME app-shell scaffold — not part of the hand-off spec; used by the Showcase
and OpsConsole example views.`}),`
`]}),`
`,e.jsx(i.p,{children:`IDE-style left rail. Three columns, left-to-right: 48px icon strip · 240px explorer panel
· working surface. For operator consoles, editors, dashboards. The host owns icon-section
and tree-row selection — the rail is layout + states only.`}),`
`,e.jsx(d,{}),`
`,e.jsx(i.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"<SideRailIcons>"})})," — column of ",e.jsx(i.code,{children:"<SideRailIconButton isCurrent count>"}),`. Use
`,e.jsx(i.code,{children:"<SideRailIconsSpacer>"})," to push the bottom group (settings, account) to the floor."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"<SideRailPanel>"})})," — explorer column. Header sits on top, tree below.",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<SideRailPanelHeader actions>"})," — title + optional ",e.jsx(i.code,{children:"<SideRailPanelHeaderAction>"})," chips."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<SideRailTree>"})," — scrolling region."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<SideRailGroupLabel>"})," — uppercase divider label."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<SideRailSep>"})," — hairline rule."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<SideRailRow depth icon badge>"})," — clickable row, depth ",e.jsx(i.code,{children:"0..3"}),`. Selected rows get a
glowing left border in `,e.jsx(i.code,{children:"--rad-300"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"<SideRailMain>"})})," — working surface.",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<SideRailMainHeader>"})," — path / status strip."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<SideRailMainContent>"})," — body, framed by a dashed inner rule."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<SideRail>
  <SideRailIcons>
    <SideRailIconButton isCurrent>⌘</SideRailIconButton>
    <SideRailIconButton count="12">⌕</SideRailIconButton>
    <SideRailIconsSpacer />
    <SideRailIconButton trailing divided>⚙</SideRailIconButton>
  </SideRailIcons>
  <SideRailPanel>
    <SideRailPanelHeader actions={<SideRailPanelHeaderAction>+</SideRailPanelHeaderAction>}>
      EXPLORER
    </SideRailPanelHeader>
    <SideRailTree>
      <SideRailGroupLabel>~/ WORKSPACE</SideRailGroupLabel>
      <SideRailRow depth={3} icon="▸" isSelected badge="●">btn-primary.tsx</SideRailRow>
    </SideRailTree>
  </SideRailPanel>
  <SideRailMain>
    <SideRailMainHeader>components / button / btn-primary.tsx</SideRailMainHeader>
    <SideRailMainContent>EDITOR SURFACE</SideRailMainContent>
  </SideRailMain>
</SideRail>
`})}),`
`,e.jsx(i.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"DO"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["One ",e.jsx(i.strong,{children:"section icon"})," active at a time. The active one carries ",e.jsx(i.code,{children:'aria-current="true"'}),"."]}),`
`,e.jsxs(i.li,{children:["One ",e.jsx(i.strong,{children:"selected row"})," at a time. The selected row carries ",e.jsx(i.code,{children:'aria-selected="true"'}),` and
the focal underline.`]}),`
`,e.jsxs(i.li,{children:["Use depth ",e.jsx(i.code,{children:"0..3"})," to mirror the file tree. Beyond 3 levels, fold via the icon glyph."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"DON'T"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Render rounded badges. The ",e.jsx(i.code,{children:"badge"})," slot accepts text glyphs (",e.jsx(i.code,{children:"M"}),", ",e.jsx(i.code,{children:"●"}),", ",e.jsx(i.code,{children:"!"}),")."]}),`
`,e.jsxs(i.li,{children:["Use the rail for primary navigation between ",e.jsx(i.em,{children:"sections of the product"}),` — that is
`,e.jsx(i.code,{children:"<TopBar>"}),". The rail is for ",e.jsx(i.em,{children:"workspace contents within one section"}),"."]}),`
`,e.jsx(i.li,{children:"Pad rows. The rail is dense by design — every line carries weight."}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["The outer container is ",e.jsx(i.code,{children:'<nav aria-label="workspace">'}),`. Tree rows are
`,e.jsx(i.code,{children:'role="treeitem"'})," with ",e.jsx(i.code,{children:"tabIndex={0}"}),` and Enter/Space activation; if you need full
react-aria Tree semantics (expand/collapse, type-ahead), wrap the panel in
`,e.jsx(i.code,{children:"react-aria-components"})," ",e.jsx(i.code,{children:"Tree"})," instead and re-style its rows with the same module."]}),`
`,e.jsx(i.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(o,{})]})}function m(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{m as default};
