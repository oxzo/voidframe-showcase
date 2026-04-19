import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r,a as l,b as a,c as n}from"./Tabs-C9rhv3E0.js";const E={title:"Shared/Tabs",component:r,parameters:{layout:"padded",docs:{description:{component:"Segmented panel switcher. The selected tab carries a neon underline and a leading chevron; pass `index={n}` to render a `[NN]` code label inside the tab."}}}},d={render:()=>e.jsxs(r,{children:[e.jsxs(l,{"aria-label":"Node panels",children:[e.jsx(a,{id:"diag",children:"DIAGNOSTIC"}),e.jsx(a,{id:"logs",children:"LOGS"}),e.jsx(a,{id:"telemetry",children:"TELEMETRY"})]}),e.jsx(n,{id:"diag",children:"All subsystems nominal."}),e.jsx(n,{id:"logs",children:"12:03:41 SYNC OK · 12:03:55 PROBE OK"}),e.jsx(n,{id:"telemetry",children:"CORE 42°C · COOLANT 71% · ATMO 40%"})]})},i={render:()=>e.jsxs(r,{defaultSelectedKey:"b",children:[e.jsxs(l,{"aria-label":"Indexed",children:[e.jsx(a,{id:"a",index:1,children:"OVERVIEW"}),e.jsx(a,{id:"b",index:2,children:"DETAIL"}),e.jsx(a,{id:"c",index:3,children:"HISTORY"})]}),e.jsx(n,{id:"a",children:"Top-level summary."}),e.jsx(n,{id:"b",children:"Expanded breakdown."}),e.jsx(n,{id:"c",children:"Event trail."})]})},s={render:()=>e.jsxs(r,{children:[e.jsxs(l,{"aria-label":"With disabled",children:[e.jsx(a,{id:"a",children:"OVERVIEW"}),e.jsx(a,{id:"b",isDisabled:!0,children:"RESTRICTED"}),e.jsx(a,{id:"c",children:"HISTORY"})]}),e.jsx(n,{id:"a",children:"Top-level summary."}),e.jsx(n,{id:"b",children:"—"}),e.jsx(n,{id:"c",children:"Event trail."})]})};var b,t,T;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Tabs>
      <TabList aria-label="Node panels">
        <Tab id="diag">DIAGNOSTIC</Tab>
        <Tab id="logs">LOGS</Tab>
        <Tab id="telemetry">TELEMETRY</Tab>
      </TabList>
      <TabPanel id="diag">All subsystems nominal.</TabPanel>
      <TabPanel id="logs">12:03:41 SYNC OK · 12:03:55 PROBE OK</TabPanel>
      <TabPanel id="telemetry">CORE 42°C · COOLANT 71% · ATMO 40%</TabPanel>
    </Tabs>
}`,...(T=(t=d.parameters)==null?void 0:t.docs)==null?void 0:T.source}}};var c,o,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Tabs defaultSelectedKey="b">
      <TabList aria-label="Indexed">
        <Tab id="a" index={1}>
          OVERVIEW
        </Tab>
        <Tab id="b" index={2}>
          DETAIL
        </Tab>
        <Tab id="c" index={3}>
          HISTORY
        </Tab>
      </TabList>
      <TabPanel id="a">Top-level summary.</TabPanel>
      <TabPanel id="b">Expanded breakdown.</TabPanel>
      <TabPanel id="c">Event trail.</TabPanel>
    </Tabs>
}`,...(x=(o=i.parameters)==null?void 0:o.docs)==null?void 0:x.source}}};var m,h,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Tabs>
      <TabList aria-label="With disabled">
        <Tab id="a">OVERVIEW</Tab>
        <Tab id="b" isDisabled>
          RESTRICTED
        </Tab>
        <Tab id="c">HISTORY</Tab>
      </TabList>
      <TabPanel id="a">Top-level summary.</TabPanel>
      <TabPanel id="b">—</TabPanel>
      <TabPanel id="c">Event trail.</TabPanel>
    </Tabs>
}`,...(p=(h=s.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const O=["Default","WithIndex","WithDisabledTab"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:d,WithDisabledTab:s,WithIndex:i,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{P as T};
