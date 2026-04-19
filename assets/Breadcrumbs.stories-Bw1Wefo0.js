import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as t,a as e,b as c,c as j,d as x,e as d}from"./Breadcrumbs-CRGxWlfs.js";const f={title:"Shared/Breadcrumbs",component:t,parameters:{layout:"padded",docs:{description:{component:"Where the operator is. Declares the path the way a command prompt does. Two variants: `shell` (`~/` root) and `path` (`VF://` root with status trail). Omit the `<BreadcrumbLink>` on the final crumb — react-aria marks it current automatically."}}}},a={render:()=>r.jsxs(t,{children:[r.jsx(e,{children:r.jsx(c,{href:"/",children:"HOME"})}),r.jsx(e,{children:r.jsx(c,{href:"/sector",children:"SECTOR 7"})}),r.jsx(e,{children:"NODE 42"})]})},n={render:()=>r.jsx(t,{children:r.jsx(e,{children:"ROOT"})})},s={render:()=>r.jsxs(t,{variant:"path",trailing:r.jsxs(j,{children:[r.jsx(x,{}),r.jsx(d,{}),r.jsx("span",{children:"04:23Z"}),r.jsx(d,{}),r.jsx("span",{children:"REV 084"})]}),children:[r.jsx(e,{children:r.jsx(c,{href:"/components",children:"components"})}),r.jsx(e,{children:r.jsx(c,{href:"/components/navigation",children:"navigation"})}),r.jsx(e,{children:r.jsx(c,{href:"/components/navigation/top-bar",children:"top-bar"})}),r.jsx(e,{children:"v0.1.9a · primary"})]})};var i,m,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <Breadcrumb>
        <BreadcrumbLink href="/">HOME</BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink href="/sector">SECTOR 7</BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>NODE 42</Breadcrumb>
    </Breadcrumbs>
}`,...(o=(m=a.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var u,b,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
      <Breadcrumb>ROOT</Breadcrumb>
    </Breadcrumbs>
}`,...(p=(b=n.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var l,B,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Breadcrumbs variant="path" trailing={<BreadcrumbsTrail>
          <BreadcrumbsTrailOk />
          <BreadcrumbsTrailPipe />
          <span>04:23Z</span>
          <BreadcrumbsTrailPipe />
          <span>REV 084</span>
        </BreadcrumbsTrail>}>
      <Breadcrumb>
        <BreadcrumbLink href="/components">components</BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink href="/components/navigation">navigation</BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink href="/components/navigation/top-bar">top-bar</BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>v0.1.9a · primary</Breadcrumb>
    </Breadcrumbs>
}`,...(h=(B=s.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};const O=["Trail","SingleCrumb","PathVariantWithStatus"],k=Object.freeze(Object.defineProperty({__proto__:null,PathVariantWithStatus:s,SingleCrumb:n,Trail:a,__namedExportsOrder:O,default:f},Symbol.toStringTag,{value:"Module"}));export{k as B};
