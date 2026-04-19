import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{u as s,M as t,P as r,S as o}from"./blocks-B1v88gfH.js";import{P as d}from"./Pagination.stories-CjSeN2z_.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Pagination-CKPo2PIO.js";function a(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(e.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsx(e.p,{children:`Result-set navigation. Zero-padded page chips, FIRST / LAST bookends, ellipsis for the
elided range, trailing row-range readout. The host owns page-state — this primitive is
layout + states only.`}),`
`,n.jsx(r,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<Pagination>"})})," — outer ",n.jsx(e.code,{children:'<nav aria-label="results pagination">'}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<PaginationButton edge>"})})," — generic button. The ",n.jsx(e.code,{children:"edge"}),` flag tints FIRST / LAST in
irradiated orange so they read as range terminators.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<PaginationPage page isCurrent>"})})," — numbered page button; renders ",n.jsx(e.code,{children:"page"}),`
zero-padded to two digits and emits `,n.jsx(e.code,{children:'aria-current="page"'}),` when active. Accessible name
is always `,n.jsx(e.code,{children:"Page {n}"})," so screen readers announce it cleanly."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<PaginationEllipsis>"})})," — the ",n.jsx(e.code,{children:"···"})," block for the elided range."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<PaginationStatus>"})})," — trailing ",n.jsx(e.code,{children:'role="status"'}),` readout. Wrap numerals in
`,n.jsx(e.code,{children:"<PaginationStatusN>"})," to colour them in ",n.jsx(e.code,{children:"--rad-200"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"composition",children:"Composition"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Pagination>
  <PaginationButton edge onClick={() => setPage(1)}    disabled={page === 1}>« FIRST</PaginationButton>
  <PaginationButton       onClick={() => setPage(page - 1)} disabled={page === 1}>‹ PREV</PaginationButton>
  <PaginationPage page={1} isCurrent={page === 1} onClick={() => setPage(1)} />
  …
  <PaginationEllipsis />
  <PaginationPage page={47} isCurrent={page === 47} onClick={() => setPage(47)} />
  <PaginationButton       onClick={() => setPage(page + 1)} disabled={page === 47}>NEXT ›</PaginationButton>
  <PaginationButton edge  onClick={() => setPage(47)}      disabled={page === 47}>LAST »</PaginationButton>
  <PaginationStatus>
    <span>PG <PaginationStatusN>04</PaginationStatusN> / 47</span>
  </PaginationStatus>
</Pagination>
`})}),`
`,n.jsx(e.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"DO"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Always render the ",n.jsx(e.strong,{children:"trailing row range"}),`. Operators want to see exactly which rows
they're inspecting.`]}),`
`,n.jsxs(e.li,{children:["Disable FIRST / PREV at page 1 and NEXT / LAST at the last page — ",n.jsx(e.code,{children:"disabled"}),` is wired
in the button.`]}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.strong,{children:"zero-padding"})," to keep the layout stable as digits grow."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"DON'T"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`Add a "jump to page" input. That's what the `,n.jsx(e.strong,{children:n.jsx(e.code,{children:"<CommandBar>"})})," is for — wire ",n.jsx(e.code,{children:"pg N"}),`
as a command.`]}),`
`,n.jsx(e.li,{children:"Render rounded chips. The square borders are part of the system's voice."}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["The outer landmark is ",n.jsx(e.code,{children:'<nav aria-label="results pagination">'}),`. The active page is
`,n.jsx(e.code,{children:'aria-current="page"'}),". The status readout is ",n.jsx(e.code,{children:'role="status"'}),` so screen readers announce
range changes politely.`]}),`
`,n.jsx(e.h2,{id:"all-stories",children:"All stories"}),`
`,n.jsx(o,{})]})}function m(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{m as default};
