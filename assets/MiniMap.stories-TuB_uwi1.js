import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as l,a,b}from"./MiniMap-DgnYx-_a.js";const S={title:"Shared/MiniMap",component:l,parameters:{layout:"padded",docs:{description:{component:"Segmented overview of a long page, deck, or queue. Hover reveals the segment label so the bare bars stay terse. State colors mirror `<Stepper>`: done (faded orange), current (bright glow), err (hazard, flickering)."}}}},n={render:()=>e.jsxs(l,{label:"MAP",position:e.jsx(b,{current:4,total:9}),children:[e.jsx(a,{label:"S01 · HERO",state:"done"}),e.jsx(a,{label:"S02 · TOKENS",state:"done"}),e.jsx(a,{label:"S03 · BUTTON",state:"done"}),e.jsx(a,{label:"S04 · NAV",isCurrent:!0}),e.jsx(a,{label:"S05 · DIALOG"}),e.jsx(a,{label:"S06 · OVERLAY"}),e.jsx(a,{label:"S07 · TABLE · 2 err",state:"err"}),e.jsx(a,{label:"S08 · METERS"}),e.jsx(a,{label:"S09 · FOOTER"})]})},t={render:()=>e.jsxs(l,{label:"QUEUE",position:e.jsx(b,{current:3,total:12}),"aria-label":"ingest queue",children:[e.jsx(a,{label:"JOB 01 · OK",state:"done"}),e.jsx(a,{label:"JOB 02 · OK",state:"done"}),e.jsx(a,{label:"JOB 03 · RUN",isCurrent:!0}),e.jsx(a,{label:"JOB 04 · WAIT"}),e.jsx(a,{label:"JOB 05 · WAIT"}),e.jsx(a,{label:"JOB 06 · ERR",state:"err"}),e.jsx(a,{label:"JOB 07 · WAIT"}),e.jsx(a,{label:"JOB 08 · WAIT"}),e.jsx(a,{label:"JOB 09 · WAIT"}),e.jsx(a,{label:"JOB 10 · WAIT"}),e.jsx(a,{label:"JOB 11 · WAIT"}),e.jsx(a,{label:"JOB 12 · WAIT"})]})};var i,r,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <MiniMap label="MAP" position={<MiniMapPosition current={4} total={9} />}>
      <MiniMapSegment label="S01 · HERO" state="done" />
      <MiniMapSegment label="S02 · TOKENS" state="done" />
      <MiniMapSegment label="S03 · BUTTON" state="done" />
      <MiniMapSegment label="S04 · NAV" isCurrent />
      <MiniMapSegment label="S05 · DIALOG" />
      <MiniMapSegment label="S06 · OVERLAY" />
      <MiniMapSegment label="S07 · TABLE · 2 err" state="err" />
      <MiniMapSegment label="S08 · METERS" />
      <MiniMapSegment label="S09 · FOOTER" />
    </MiniMap>
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var o,M,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <MiniMap label="QUEUE" position={<MiniMapPosition current={3} total={12} />} aria-label="ingest queue">
      <MiniMapSegment label="JOB 01 · OK" state="done" />
      <MiniMapSegment label="JOB 02 · OK" state="done" />
      <MiniMapSegment label="JOB 03 · RUN" isCurrent />
      <MiniMapSegment label="JOB 04 · WAIT" />
      <MiniMapSegment label="JOB 05 · WAIT" />
      <MiniMapSegment label="JOB 06 · ERR" state="err" />
      <MiniMapSegment label="JOB 07 · WAIT" />
      <MiniMapSegment label="JOB 08 · WAIT" />
      <MiniMapSegment label="JOB 09 · WAIT" />
      <MiniMapSegment label="JOB 10 · WAIT" />
      <MiniMapSegment label="JOB 11 · WAIT" />
      <MiniMapSegment label="JOB 12 · WAIT" />
    </MiniMap>
}`,...(p=(M=t.parameters)==null?void 0:M.docs)==null?void 0:p.source}}};const O=["PageOverview","QueueDepth"],g=Object.freeze(Object.defineProperty({__proto__:null,PageOverview:n,QueueDepth:t,__namedExportsOrder:O,default:S},Symbol.toStringTag,{value:"Module"}));export{g as M};
