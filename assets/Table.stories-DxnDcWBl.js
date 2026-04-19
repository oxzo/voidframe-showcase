import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as o,a as p,$ as T,C as s,b as S,R as b,c as r,S as m}from"./Table-CAnQKNm2.js";const x={title:"Shared/Table",component:o,parameters:{layout:"padded",docs:{description:{component:"Dense, tabular, and unforgiving. Hairline columns; alternating rows carry the faintest orange tint. Sortable columns bloom when active (`allowsSorting`). Use `<StatusChip>` for state cells — its dot glows in `currentColor`, so the chip's role is carried by its `status` prop (`ok` / `wrn` / `err`)."}}}},h=[{id:"N-01",sector:"SECTOR 7",status:"ok",temp:"42°C"},{id:"N-02",sector:"SECTOR 7",status:"wrn",temp:"71°C"},{id:"N-03",sector:"SECTOR 9",status:"err",temp:"98°C"},{id:"N-04",sector:"SECTOR 9",status:"ok",temp:"38°C"}],a={render:()=>e.jsx(p,{children:e.jsxs(o,{"aria-label":"Nodes",children:[e.jsxs(T,{children:[e.jsx(s,{isRowHeader:!0,children:"NODE"}),e.jsx(s,{children:"SECTOR"}),e.jsx(s,{children:"STATUS"}),e.jsx(s,{children:"TEMP"})]}),e.jsx(S,{items:h,children:l=>e.jsxs(b,{children:[e.jsx(r,{label:"NODE",children:l.id}),e.jsx(r,{label:"SECTOR",children:l.sector}),e.jsx(r,{label:"STATUS",children:e.jsx(m,{status:l.status,children:l.status.toUpperCase()})}),e.jsx(r,{label:"TEMP",children:l.temp})]})})]})})},t={render:()=>e.jsx(p,{children:e.jsxs(o,{"aria-label":"Sortable nodes",defaultSelectedKeys:new Set(["N-02"]),selectionMode:"single",children:[e.jsxs(T,{children:[e.jsx(s,{id:"id",isRowHeader:!0,allowsSorting:!0,children:"NODE"}),e.jsx(s,{id:"sector",allowsSorting:!0,children:"SECTOR"}),e.jsx(s,{id:"status",children:"STATUS"}),e.jsx(s,{id:"temp",allowsSorting:!0,children:"TEMP"})]}),e.jsx(S,{items:h,children:l=>e.jsxs(b,{id:l.id,children:[e.jsx(r,{label:"NODE",children:l.id}),e.jsx(r,{label:"SECTOR",children:l.sector}),e.jsx(r,{label:"STATUS",children:e.jsx(m,{status:l.status,children:l.status.toUpperCase()})}),e.jsx(r,{label:"TEMP",children:l.temp})]})})]})})};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <TableWrapper>
      <Table aria-label="Nodes">
        <TableHeader>
          <Column isRowHeader>NODE</Column>
          <Column>SECTOR</Column>
          <Column>STATUS</Column>
          <Column>TEMP</Column>
        </TableHeader>
        <TableBody items={rows}>
          {row => <Row>
              <Cell label="NODE">{row.id}</Cell>
              <Cell label="SECTOR">{row.sector}</Cell>
              <Cell label="STATUS">
                <StatusChip status={row.status}>{row.status.toUpperCase()}</StatusChip>
              </Cell>
              <Cell label="TEMP">{row.temp}</Cell>
            </Row>}
        </TableBody>
      </Table>
    </TableWrapper>
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,u,C;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <TableWrapper>
      <Table aria-label="Sortable nodes" defaultSelectedKeys={new Set(['N-02'])} selectionMode="single">
        <TableHeader>
          <Column id="id" isRowHeader allowsSorting>
            NODE
          </Column>
          <Column id="sector" allowsSorting>
            SECTOR
          </Column>
          <Column id="status">STATUS</Column>
          <Column id="temp" allowsSorting>
            TEMP
          </Column>
        </TableHeader>
        <TableBody items={rows}>
          {row => <Row id={row.id}>
              <Cell label="NODE">{row.id}</Cell>
              <Cell label="SECTOR">{row.sector}</Cell>
              <Cell label="STATUS">
                <StatusChip status={row.status}>{row.status.toUpperCase()}</StatusChip>
              </Cell>
              <Cell label="TEMP">{row.temp}</Cell>
            </Row>}
        </TableBody>
      </Table>
    </TableWrapper>
}`,...(C=(u=t.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const j=["Basic","Sortable"],O=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Sortable:t,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{O as T};
