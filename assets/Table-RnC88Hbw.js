import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as o,P as l,S as t}from"./blocks-B1v88gfH.js";import{T as a}from"./Table.stories-DxnDcWBl.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Table-CAnQKNm2.js";import"./Button-BV1bEvDU.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";import"./Collection-Clcb5Xin.js";import"./useLoadMoreSentinel-D96LDrE4.js";import"./useCollator-CsW49WvG.js";import"./useCollection-NUsIjjhw.js";import"./I18nProvider-C_KRB3TE.js";import"./useControlledState-C5a7RtfP.js";import"./Autocomplete-CkZjWIY3.js";import"./inertValue-BuFaHBHE.js";import"./useLocalizedStringFormatter-hb7eYMDE.js";import"./useHasTabbableChild-CFxKdQQU.js";import"./useLabels-DQ_gQFKV.js";import"./VisuallyHidden-Cm-BANck.js";function s(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsxs(n.p,{children:[`Dense, tabular, and unforgiving. Hairline columns, alternating rows with the faintest
orange tint, sortable columns that `,e.jsx(n.strong,{children:"bloom"})," when active."]}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<TableWrapper>"})})," — wrapping div that adds scrolling and a HUD border."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Table>"})})," — ",e.jsx(n.code,{children:"border-collapse"}),", ",e.jsx(n.code,{children:"--font-data"}),", ",e.jsx(n.code,{children:"--fs-sm"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<TableHeader>"})})," — re-exported from react-aria with no chrome overlay."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Column>"})}),` — header cell. Carries a striped vertical-line background and a
`,e.jsx(n.code,{children:"▸"})," sort icon when ",e.jsx(n.code,{children:"allowsSorting"})," is set. ",e.jsx(n.code,{children:"isRowHeader"}),` marks the row-identifier
column.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<TableBody>"})})," — re-exported. Accepts an ",e.jsx(n.code,{children:"items"})," array plus a render function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Row>"})}),` — alternating rows get a 1.5% orange tint. Selected rows get an 8% orange
tint and a 2px orange left-edge shadow.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Cell>"})})," — hairline borders on the right + bottom. No cell padding overrides."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<StatusChip status>"})})," — compact pill with a ",e.jsx(n.code,{children:"currentColor"}),` glowing dot. Three
states: `,e.jsx(n.code,{children:"ok"})," (green), ",e.jsx(n.code,{children:"wrn"})," (orange), ",e.jsx(n.code,{children:"err"})," (red)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableWrapper>
  <Table aria-label="Nodes" selectionMode="single" defaultSelectedKeys={new Set(['N-02'])}>
    <TableHeader>
      <Column id="id" isRowHeader allowsSorting>NODE</Column>
      <Column id="sector" allowsSorting>SECTOR</Column>
      <Column id="status">STATUS</Column>
      <Column id="temp" allowsSorting>TEMP</Column>
    </TableHeader>
    <TableBody items={rows}>
      {(row) => (
        <Row id={row.id}>
          <Cell>{row.id}</Cell>
          <Cell>{row.sector}</Cell>
          <Cell><StatusChip status={row.status}>{row.status.toUpperCase()}</StatusChip></Cell>
          <Cell>{row.temp}</Cell>
        </Row>
      )}
    </TableBody>
  </Table>
</TableWrapper>
`})}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use for ",e.jsx(n.strong,{children:"homogeneous collections"})," of the same entity — assets, nodes, jobs, records."]}),`
`,e.jsxs(n.li,{children:["Put status in a ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"<StatusChip>"})}),`, not a bare colored word. The chip carries a dot,
which keeps it legible at scale.`]}),`
`,e.jsxs(n.li,{children:["Mark the row identifier column with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"isRowHeader"})}),`. Screen readers use it to
announce row context.`]}),`
`,e.jsxs(n.li,{children:["Pick ",e.jsx(n.strong,{children:"one sortable axis at a time"}),` — react-aria enforces single-column sort, and
that's the right default.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Nest tables. If a cell has complex structure, rethink the row shape first."}),`
`,e.jsxs(n.li,{children:['Color full rows red to mean "bad" — the signal lives in the ',e.jsx(n.code,{children:"<StatusChip>"}),`, not in the
row background. `,e.jsx(n.code,{children:"--rad-300"})," focal is for the ",e.jsx(n.em,{children:"selected"})," row."]}),`
`,e.jsxs(n.li,{children:[`Put destructive actions in a cell. Row actions belong in a trailing actions column
that opens a `,e.jsx(n.code,{children:"<Menu>"}),"."]}),`
`,e.jsx(n.li,{children:`Paginate in-app. If you can't fetch the next page, the slice is too big — push the
slice boundary upstream.`}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Built on ",e.jsx(n.code,{children:"react-aria-components"})," ",e.jsx(n.a,{href:"https://react-spectrum.adobe.com/react-aria/Table.html",rel:"nofollow",children:e.jsx(n.code,{children:"Table"})}),`.
The `,e.jsx(n.code,{children:"aria-label"})," on ",e.jsx(n.code,{children:"<Table>"}),` is required when there's no visible caption. Selection and
sort are keyboard-operable by default. Rows are focusable when `,e.jsx(n.code,{children:"selectionMode"})," is set."]}),`
`,e.jsx(n.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(t,{})]})}function U(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{U as default};
