import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-m70KUGy2.js";import{C as c,a as u,b as B,c as o,d as a,e as r,f as v,g,h as m}from"./CommandBar-BIumP8y_.js";const x={title:"Shared/CommandBar",component:c,parameters:{layout:"centered",docs:{description:{component:"The operator's emergency exit. Summoned via ⌘K, supersedes everything. Search components, run actions, jump to recent. Slot-based — wrap in a `<Modal>` upstream when summoned, or render inline as shown here for documentation."}}}},n={render:()=>{function i(){const[l,p]=h.useState("nav");return e.jsxs(c,{children:[e.jsx(u,{inputProps:{value:l,onChange:C=>p(C.target.value),"aria-label":"command query"}}),e.jsxs(B,{children:[e.jsx(o,{label:"COMPONENTS",hint:"9 / 47 MATCH"}),e.jsxs(a,{icon:"▸",path:"components/nav/top-bar",kbd:"⏎",isSelected:!0,children:["Top",e.jsx(r,{children:"Nav"}),"igation"]}),e.jsxs(a,{icon:"▸",path:"components/nav/side-rail",children:["Side",e.jsx(r,{children:"Nav"})," Rail"]}),e.jsxs(a,{icon:"▸",path:"components/nav/sub-nav",children:["Sub ",e.jsx(r,{children:"Nav"})]}),e.jsx(o,{label:"ACTIONS",hint:"3 / 124"}),e.jsx(a,{icon:"⚡",path:"action · ⇧⌘P",kbd:"⇧⌘P",children:"Open Preview"}),e.jsx(a,{icon:"◎",path:"action · theme.cycle",kbd:"⌘J",children:"Toggle Theme"}),e.jsx(o,{label:"RECENT",hint:"last 30 min"}),e.jsx(a,{icon:"◌",path:"opened 04:18Z",children:"components/button/btn-primary.tsx"})]}),e.jsxs(v,{children:[e.jsxs(g,{children:[e.jsx(m,{keycap:"↑↓",children:"navigate"}),e.jsx(m,{keycap:"⏎",children:"select"}),e.jsx(m,{keycap:"⇥",children:"group"})]}),e.jsx("span",{style:{color:"var(--rad-300)"},children:"linked · vf-host//04:23Z"})]})]})}return e.jsx(i,{})}};var t,d,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [query, setQuery] = useState('nav');
      return <CommandBar>
          <CommandBarPrompt inputProps={{
          value: query,
          onChange: event => setQuery(event.target.value),
          'aria-label': 'command query'
        }} />
          <CommandBarResults>
            <CommandBarGroup label="COMPONENTS" hint="9 / 47 MATCH" />
            <CommandBarItem icon="▸" path="components/nav/top-bar" kbd="⏎" isSelected>
              Top<CommandBarMatch>Nav</CommandBarMatch>igation
            </CommandBarItem>
            <CommandBarItem icon="▸" path="components/nav/side-rail">
              Side<CommandBarMatch>Nav</CommandBarMatch> Rail
            </CommandBarItem>
            <CommandBarItem icon="▸" path="components/nav/sub-nav">
              Sub <CommandBarMatch>Nav</CommandBarMatch>
            </CommandBarItem>
            <CommandBarGroup label="ACTIONS" hint="3 / 124" />
            <CommandBarItem icon="⚡" path="action · ⇧⌘P" kbd="⇧⌘P">
              Open Preview
            </CommandBarItem>
            <CommandBarItem icon="◎" path="action · theme.cycle" kbd="⌘J">
              Toggle Theme
            </CommandBarItem>
            <CommandBarGroup label="RECENT" hint="last 30 min" />
            <CommandBarItem icon="◌" path="opened 04:18Z">
              components/button/btn-primary.tsx
            </CommandBarItem>
          </CommandBarResults>
          <CommandBarFoot>
            <CommandBarLegend>
              <CommandBarLegendItem keycap="↑↓">navigate</CommandBarLegendItem>
              <CommandBarLegendItem keycap="⏎">select</CommandBarLegendItem>
              <CommandBarLegendItem keycap="⇥">group</CommandBarLegendItem>
            </CommandBarLegend>
            <span style={{
            color: 'var(--rad-300)'
          }}>{'linked · vf-host//04:23Z'}</span>
          </CommandBarFoot>
        </CommandBar>;
    }
    return <Demo />;
  }
}`,...(s=(d=n.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const b=["Inline"],S=Object.freeze(Object.defineProperty({__proto__:null,Inline:n,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{S as C};
