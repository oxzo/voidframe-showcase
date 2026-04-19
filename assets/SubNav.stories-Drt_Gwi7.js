import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as r,a as N,b as m,c as n,d as l}from"./SubNav-CURQNEDC.js";const b={title:"Shared/SubNav",component:r,parameters:{layout:"padded",docs:{description:{component:"Sectional navigation strip. Each item carries a count and an optional status sigil (warn / crit) — operators see queue depth and severity at a glance. Use for *between routes within one section*; reach for `<Tabs>` when swapping content surfaces on the same page."}}}},a={render:()=>e.jsxs(r,{children:[e.jsx(N,{label:"SECTION",children:"▌ DESIGN_SYS"}),e.jsxs(m,{children:[e.jsx(n,{href:"#overview",count:"12 FILES",children:"OVERVIEW"}),e.jsx(n,{href:"#tokens",count:"47 VARS","aria-current":"page",children:"TOKENS"}),e.jsx(n,{href:"#components",count:"9 SETS",children:"COMPONENTS"}),e.jsx(n,{href:"#patterns",count:"5 DOCS",status:"warn",children:"PATTERNS"}),e.jsx(n,{href:"#motion",count:"QUEUED",status:"crit",children:"MOTION"}),e.jsx(n,{href:"#history",count:"84 REVS",children:"HISTORY"})]}),e.jsx(l,{live:!0,children:"LIVE"})]})},t={render:()=>e.jsxs(r,{children:[e.jsx(N,{label:"VIEW",children:"▌ INVENTORY"}),e.jsxs(m,{children:[e.jsx(n,{href:"#all",count:"940","aria-current":"page",children:"ALL UNITS"}),e.jsx(n,{href:"#nominal",count:"812",children:"NOMINAL"}),e.jsx(n,{href:"#stale",count:"44",status:"warn",children:"STALE_LINK"}),e.jsx(n,{href:"#deref",count:"6",status:"crit",children:"DEREFERENCED"})]})]})};var s,o,u;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <SubNav>
      <SubNavHead label="SECTION">▌ DESIGN_SYS</SubNavHead>
      <SubNavItems>
        <SubNavItem href="#overview" count="12 FILES">
          OVERVIEW
        </SubNavItem>
        <SubNavItem href="#tokens" count="47 VARS" aria-current="page">
          TOKENS
        </SubNavItem>
        <SubNavItem href="#components" count="9 SETS">
          COMPONENTS
        </SubNavItem>
        <SubNavItem href="#patterns" count="5 DOCS" status="warn">
          PATTERNS
        </SubNavItem>
        <SubNavItem href="#motion" count="QUEUED" status="crit">
          MOTION
        </SubNavItem>
        <SubNavItem href="#history" count="84 REVS">
          HISTORY
        </SubNavItem>
      </SubNavItems>
      <SubNavTrailing live>LIVE</SubNavTrailing>
    </SubNav>
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var S,c,i;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <SubNav>
      <SubNavHead label="VIEW">▌ INVENTORY</SubNavHead>
      <SubNavItems>
        <SubNavItem href="#all" count="940" aria-current="page">
          ALL UNITS
        </SubNavItem>
        <SubNavItem href="#nominal" count="812">
          NOMINAL
        </SubNavItem>
        <SubNavItem href="#stale" count="44" status="warn">
          STALE_LINK
        </SubNavItem>
        <SubNavItem href="#deref" count="6" status="crit">
          DEREFERENCED
        </SubNavItem>
      </SubNavItems>
    </SubNav>
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const v=["DesignSystemSections","NoTrailing"],h=Object.freeze(Object.defineProperty({__proto__:null,DesignSystemSections:a,NoTrailing:t,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{h as S};
