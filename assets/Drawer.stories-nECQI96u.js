import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as d}from"./Button-q-nZj2ek.js";import{D as c,a as l,b as m,c as D,d as p,e as n,f as o,g as w,h as u}from"./Drawer-DVi11VEV.js";import{$ as f}from"./Dialog-CNgGrXQT.js";const R={title:"Shared/Drawer",component:c,parameters:{layout:"centered",docs:{description:{component:"Mobile / offcanvas navigation surface. Slides from the left; traps focus; the surface behind is dimmed and gated. The collapsed mirror of `<TopBar>` + `<SideRail>`."}}}},h=[{id:"dash",name:"DASHBOARD",icon:"▣"},{id:"ops",name:"OPERATIONS",icon:"◈",count:"3"},{id:"arch",name:"ARCHIVE",icon:"⌘"},{id:"sig",name:"SIGNALS",icon:"⌇",count:"12"}],N=[{id:"team",name:"TEAM",icon:"⏀"},{id:"ref",name:"REFERENCE",icon:"⍰"},{id:"set",name:"SETTINGS",icon:"⚙"}],a={render:()=>r.jsxs(f,{children:[r.jsx(d,{intent:"secondary",children:"▸ OPEN DRAWER"}),r.jsx(c,{children:r.jsxs(l,{"aria-label":"mobile",children:[r.jsx(m,{children:"VOIDFRAME"}),r.jsx(D,{avatar:"OP",name:"operator_kb9",clearance:"ts/sci · node 04"}),r.jsxs(p,{children:[r.jsx(n,{children:"▌ PRIMARY"}),h.map(e=>r.jsx(o,{href:`#${e.id}`,icon:e.icon,count:e.count,"aria-current":e.id==="ops"?"page":void 0,children:e.name},e.id)),r.jsx(n,{children:"▌ SUPPORT"}),N.map(e=>r.jsx(o,{href:`#${e.id}`,icon:e.icon,children:e.name},e.id))]}),r.jsxs(w,{children:[r.jsxs("span",{children:["REL ",r.jsx(u,{children:"0.1.9a"})]}),r.jsx("span",{children:"04:23Z"})]})]})})]})};var i,s,t;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <DrawerTrigger>
      <Button intent="secondary">▸ OPEN DRAWER</Button>
      <Drawer>
        <DrawerDialog aria-label="mobile">
          <DrawerBrand>VOIDFRAME</DrawerBrand>
          <DrawerUser avatar="OP" name="operator_kb9" clearance="ts/sci · node 04" />
          <DrawerNav>
            <DrawerNavGroupLabel>▌ PRIMARY</DrawerNavGroupLabel>
            {PRIMARY.map(link => <DrawerNavLink key={link.id} href={\`#\${link.id}\`} icon={link.icon} count={link.count} aria-current={link.id === 'ops' ? 'page' : undefined}>
                {link.name}
              </DrawerNavLink>)}
            <DrawerNavGroupLabel>▌ SUPPORT</DrawerNavGroupLabel>
            {SECONDARY.map(link => <DrawerNavLink key={link.id} href={\`#\${link.id}\`} icon={link.icon}>
                {link.name}
              </DrawerNavLink>)}
          </DrawerNav>
          <DrawerFoot>
            <span>
              REL <DrawerFootVer>0.1.9a</DrawerFootVer>
            </span>
            <span>04:23Z</span>
          </DrawerFoot>
        </DrawerDialog>
      </Drawer>
    </DrawerTrigger>
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const b=["SummonedFromButton"],S=Object.freeze(Object.defineProperty({__proto__:null,SummonedFromButton:a,__namedExportsOrder:b,default:R},Symbol.toStringTag,{value:"Module"}));export{S as D};
