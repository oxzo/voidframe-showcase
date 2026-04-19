import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{L as T}from"./Logo-FcWeSyeA.js";import{T as s,a as h,b as B,c as x,d as a,e as k,f as o,g as m}from"./TopBar-CczQ7tI6.js";const L={title:"Shared/TopBar",component:s,parameters:{layout:"fullscreen",docs:{description:{component:"The global product bar — every page wears it. A 5-column grid: brand · workspace pivot · primary section links · tool buttons · operator. Holds one `aria-current='page'` link per render."}}}},e={render:()=>r.jsxs(s,{children:[r.jsxs(h,{version:"v0.1.9a",children:[r.jsx(T,{variant:"glyph",style:{width:26,height:26}}),r.jsx("span",{children:"VOIDFRAME"})]}),r.jsx(B,{label:"WKSP",value:"kilo-echo-9"}),r.jsxs(x,{"aria-label":"primary sections",children:[r.jsx(a,{href:"#dash",index:"01",children:"DASH"}),r.jsx(a,{href:"#ops",index:"02",badge:"3","aria-current":"page",children:"OPS"}),r.jsx(a,{href:"#archive",index:"03",children:"ARCHIVE"}),r.jsx(a,{href:"#signals",index:"04",children:"SIGNALS"}),r.jsx(a,{href:"#ref",index:"05",children:"REF"})]}),r.jsxs(k,{children:[r.jsx(o,{kbd:"⌘K",children:"SRCH"}),r.jsx(o,{kbd:"3",children:"ALERTS"})]}),r.jsx(m,{avatar:"OP",name:"operator_kb9",clearance:"cleared · TS/SCI"})]})},n={render:()=>r.jsxs(s,{variant:"compact",children:[r.jsxs(h,{children:[r.jsx(T,{variant:"glyph",style:{width:18,height:18}}),r.jsx("span",{children:"VF"})]}),r.jsx(B,{label:"WS",value:"k-9"}),r.jsxs(x,{"aria-label":"compact sections",children:[r.jsx(a,{href:"#dash",index:"01","aria-current":"page",children:"DASH"}),r.jsx(a,{href:"#ops",index:"02",children:"OPS"}),r.jsx(a,{href:"#log",index:"03",children:"LOG"})]}),r.jsx(k,{children:r.jsx(o,{children:"⌘K"})}),r.jsx(m,{avatar:"OP"})]})};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <TopBar>
      <TopBarBrand version="v0.1.9a">
        <Logo variant="glyph" style={{
        width: 26,
        height: 26
      }} />
        <span>VOIDFRAME</span>
      </TopBarBrand>
      <TopBarWorkspace label="WKSP" value="kilo-echo-9" />
      <TopBarLinks aria-label="primary sections">
        <TopBarLink href="#dash" index="01">
          DASH
        </TopBarLink>
        <TopBarLink href="#ops" index="02" badge="3" aria-current="page">
          OPS
        </TopBarLink>
        <TopBarLink href="#archive" index="03">
          ARCHIVE
        </TopBarLink>
        <TopBarLink href="#signals" index="04">
          SIGNALS
        </TopBarLink>
        <TopBarLink href="#ref" index="05">
          REF
        </TopBarLink>
      </TopBarLinks>
      <TopBarTools>
        <TopBarTool kbd="⌘K">SRCH</TopBarTool>
        <TopBarTool kbd="3">ALERTS</TopBarTool>
      </TopBarTools>
      <TopBarUser avatar="OP" name="operator_kb9" clearance="cleared · TS/SCI" />
    </TopBar>
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,t,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <TopBar variant="compact">
      <TopBarBrand>
        <Logo variant="glyph" style={{
        width: 18,
        height: 18
      }} />
        <span>VF</span>
      </TopBarBrand>
      <TopBarWorkspace label="WS" value="k-9" />
      <TopBarLinks aria-label="compact sections">
        <TopBarLink href="#dash" index="01" aria-current="page">
          DASH
        </TopBarLink>
        <TopBarLink href="#ops" index="02">
          OPS
        </TopBarLink>
        <TopBarLink href="#log" index="03">
          LOG
        </TopBarLink>
      </TopBarLinks>
      <TopBarTools>
        <TopBarTool>⌘K</TopBarTool>
      </TopBarTools>
      <TopBarUser avatar="OP" />
    </TopBar>
}`,...(c=(t=n.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const S=["Standard","Compact"],u=Object.freeze(Object.defineProperty({__proto__:null,Compact:n,Standard:e,__namedExportsOrder:S,default:L},Symbol.toStringTag,{value:"Module"}));export{u as T};
