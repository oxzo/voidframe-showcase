import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./Button-q-nZj2ek.js";import{M as a,P as d,a as n,b as i,K as c,c as S}from"./Menu-B75Pr_Am.js";import{a as u}from"./Dialog-CNgGrXQT.js";const g={title:"Shared/Menu",component:a,parameters:{layout:"centered",docs:{description:{component:'Neon-edged action shelf. Groups of imperatives, one per row, with left dots that light on focus. Use `intent="danger"` for the irreversible — red ink, never a full red row. Keyboard shortcuts go in a trailing `<Kbd>`.'}}}},r={render:()=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(o,{children:"ACTIONS"}),e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{children:"DEPLOY"}),e.jsx(n,{children:"ROLLBACK"}),e.jsx(n,{children:"SCAN"})]})})]})},s={render:()=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(o,{children:"OPERATIONS"}),e.jsx(d,{children:e.jsxs(a,{children:[e.jsxs(i,{children:[e.jsx("span",{children:"ROUTINE"}),e.jsx("span",{children:"LVL-1"})]}),e.jsxs(n,{children:["DEPLOY",e.jsx(c,{children:"⌘D"})]}),e.jsxs(n,{children:["SCAN",e.jsx(c,{children:"⌘S"})]}),e.jsx(S,{}),e.jsxs(i,{children:[e.jsx("span",{children:"DESTRUCTIVE"}),e.jsx("span",{children:"LVL-3"})]}),e.jsx(n,{intent:"danger",children:"PURGE"})]})})]})},t={render:()=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(o,{children:"ACTIONS"}),e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{children:"DEPLOY"}),e.jsx(n,{isDisabled:!0,children:"ROLLBACK"}),e.jsx(n,{children:"SCAN"})]})})]})};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <MenuTrigger defaultOpen>
      <Button>ACTIONS</Button>
      <Popover>
        <Menu>
          <MenuItem>DEPLOY</MenuItem>
          <MenuItem>ROLLBACK</MenuItem>
          <MenuItem>SCAN</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var M,h,x;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <MenuTrigger defaultOpen>
      <Button>OPERATIONS</Button>
      <Popover>
        <Menu>
          <MenuHeader>
            <span>ROUTINE</span>
            <span>LVL-1</span>
          </MenuHeader>
          <MenuItem>
            DEPLOY
            <Kbd>⌘D</Kbd>
          </MenuItem>
          <MenuItem>
            SCAN
            <Kbd>⌘S</Kbd>
          </MenuItem>
          <MenuSeparator />
          <MenuHeader>
            <span>DESTRUCTIVE</span>
            <span>LVL-3</span>
          </MenuHeader>
          <MenuItem intent="danger">PURGE</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,I,O;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <MenuTrigger defaultOpen>
      <Button>ACTIONS</Button>
      <Popover>
        <Menu>
          <MenuItem>DEPLOY</MenuItem>
          <MenuItem isDisabled>ROLLBACK</MenuItem>
          <MenuItem>SCAN</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
}`,...(O=(I=t.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const L=["OpenByDefault","WithSeparatorsAndHeader","WithDisabledItem"],E=Object.freeze(Object.defineProperty({__proto__:null,OpenByDefault:r,WithDisabledItem:t,WithSeparatorsAndHeader:s,__namedExportsOrder:L,default:g},Symbol.toStringTag,{value:"Module"}));export{E as M};
