import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as u,$ as m}from"./Dialog-CNgGrXQT.js";import{B as p}from"./Button-q-nZj2ek.js";import{P as n,M as h,a as t,d as f,e as g}from"./Menu-B75Pr_Am.js";const v={title:"Shared/Popover",component:n,parameters:{layout:"centered",docs:{description:{component:'A floating shelf above the canvas. `variant="bare"` carries no chrome — use it as the container for `<Menu>`, which brings its own frame. `variant="shell"` renders the VOIDFRAME info-shelf chrome — use it for read-only inspection content (IDs, readouts, small action rows).'}}}},r={render:()=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(p,{children:"OPEN MENU"}),e.jsx(n,{children:e.jsxs(h,{children:[e.jsx(t,{children:"DEPLOY"}),e.jsx(t,{children:"ROLLBACK"})]})})]})},o={render:()=>e.jsxs(m,{defaultOpen:!0,children:[e.jsx(p,{children:"INFO"}),e.jsxs(n,{variant:"shell",children:[e.jsx(f,{children:"▸ NODE 42 / DIAGNOSTIC"}),e.jsx(g,{children:e.jsx("p",{children:"All subsystems nominal. Last heartbeat 12 s ago."})})]})]})};var a,s,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <MenuTrigger defaultOpen>
      <Button>OPEN MENU</Button>
      <Popover>
        <Menu>
          <MenuItem>DEPLOY</MenuItem>
          <MenuItem>ROLLBACK</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <DialogTrigger defaultOpen>
      <Button>INFO</Button>
      <Popover variant="shell">
        <PopoverHeader>▸ NODE 42 / DIAGNOSTIC</PopoverHeader>
        <PopoverBody>
          <p>All subsystems nominal. Last heartbeat 12 s ago.</p>
        </PopoverBody>
      </Popover>
    </DialogTrigger>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const O=["BareWithMenu","ShellWithDialog"],b=Object.freeze(Object.defineProperty({__proto__:null,BareWithMenu:r,ShellWithDialog:o,__namedExportsOrder:O,default:v},Symbol.toStringTag,{value:"Module"}));export{b as P};
