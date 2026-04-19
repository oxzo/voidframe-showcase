import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-m70KUGy2.js";import{S as c,a as R,b as d,c as h,d as g,e as x,f as t,g as b,h as k,i as y,j,k as f,l as C,m as E}from"./SideRail-BNemZKY3.js";const w={title:"Shared/SideRail",component:c,parameters:{layout:"fullscreen",docs:{description:{component:"IDE-style left rail. Three columns: 48px icon strip · 240px explorer panel · working surface. Slot-based; the host owns icon section and tree-row selection state."}}}},I=[{id:"files",glyph:"⌘",name:"FILES"},{id:"search",glyph:"⌕",name:"SEARCH",count:"12"},{id:"git",glyph:"⑆",name:"GIT"},{id:"debug",glyph:"◈",name:"DEBUG",count:"!"},{id:"ext",glyph:"⬢",name:"EXT"}],v=[{kind:"group",id:"g-workspace",label:"~/ WORKSPACE"},{kind:"row",depth:0,icon:"▾",name:"voidframe/"},{kind:"row",depth:1,icon:"▾",name:"components/"},{kind:"row",depth:2,icon:"▾",name:"button/"},{kind:"row",depth:3,icon:"▸",name:"btn-primary.tsx",badge:"●"},{kind:"row",depth:3,icon:"▸",name:"btn-primary.test.tsx",badge:"M"},{kind:"row",depth:3,icon:"▸",name:"btn-primary.stories.tsx"},{kind:"row",depth:2,icon:"▸",name:"dialog/"},{kind:"row",depth:2,icon:"▸",name:"menu/"},{kind:"row",depth:1,icon:"▸",name:"tokens/"},{kind:"row",depth:1,icon:"▸",name:"hooks/"},{kind:"sep",id:"sep-buffers"},{kind:"group",id:"g-buffers",label:"▸ OPEN BUFFERS"},{kind:"row",depth:0,icon:"◆",name:"nav.css",badge:"M"},{kind:"row",depth:0,icon:"◆",name:"tokens.css"},{kind:"row",depth:0,icon:"◆",name:"theme-light.css",badge:"!",badgeKind:"err"}],n={render:()=>{function p(){const[S,m]=r.useState("files"),[a,u]=r.useState("btn-primary.tsx");return e.jsxs(c,{style:{height:520},children:[e.jsxs(R,{children:[I.map(i=>e.jsx(d,{isCurrent:S===i.id,...i.count!==void 0&&{count:i.count},onClick:()=>m(i.id),title:i.name,children:i.glyph},i.id)),e.jsx(h,{}),e.jsx(d,{trailing:!0,divided:!0,title:"SETTINGS",children:"⚙"}),e.jsx(d,{trailing:!0,title:"ACCOUNT",children:"◉"})]}),e.jsxs(g,{children:[e.jsx(x,{actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"+"}),e.jsx(t,{children:"↻"}),e.jsx(t,{children:"⌄"})]}),children:"EXPLORER"}),e.jsx(b,{children:v.map(i=>i.kind==="group"?e.jsx(k,{children:i.label},i.id):i.kind==="sep"?e.jsx(y,{},i.id):e.jsx(j,{depth:i.depth,icon:i.icon,...i.badge!==void 0&&{badge:i.badge},...i.badgeKind!==void 0&&{badgeKind:i.badgeKind},isSelected:a===i.name,onClick:()=>u(i.name),children:i.name},i.name))})]}),e.jsxs(f,{children:[e.jsxs(C,{children:[e.jsxs("span",{style:{color:"var(--rad-200)"},children:["components",e.jsx("span",{style:{color:"var(--rad-500)",padding:"0 4px"},children:"/"}),"button",e.jsx("span",{style:{color:"var(--rad-500)",padding:"0 4px"},children:"/"}),e.jsx("strong",{style:{color:"var(--rad-100)"},children:a})]}),e.jsx("span",{style:{color:"var(--tox-300)"},children:"● SYNCED"}),e.jsx("span",{style:{marginLeft:"auto",color:"var(--ink-500)"},children:"UTF-8 · LF · TSX"})]}),e.jsx(E,{children:`EDITOR SURFACE // ${a.toUpperCase()}`})]})]})}return e.jsx(p,{})}};var o,s,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [section, setSection] = useState<string>('files');
      const [selected, setSelected] = useState<string>('btn-primary.tsx');
      return <SideRail style={{
        height: 520
      }}>
          <SideRailIcons>
            {ICONS.map(icon => <SideRailIconButton key={icon.id} isCurrent={section === icon.id} {...icon.count !== undefined && {
            count: icon.count
          }} onClick={() => setSection(icon.id)} title={icon.name}>
                {icon.glyph}
              </SideRailIconButton>)}
            <SideRailIconsSpacer />
            <SideRailIconButton trailing divided title="SETTINGS">
              ⚙
            </SideRailIconButton>
            <SideRailIconButton trailing title="ACCOUNT">
              ◉
            </SideRailIconButton>
          </SideRailIcons>
          <SideRailPanel>
            <SideRailPanelHeader actions={<>
                  <SideRailPanelHeaderAction>+</SideRailPanelHeaderAction>
                  <SideRailPanelHeaderAction>↻</SideRailPanelHeaderAction>
                  <SideRailPanelHeaderAction>⌄</SideRailPanelHeaderAction>
                </>}>
              EXPLORER
            </SideRailPanelHeader>
            <SideRailTree>
              {ROWS.map(row => {
              if (row.kind === 'group') {
                return <SideRailGroupLabel key={row.id}>{row.label}</SideRailGroupLabel>;
              }
              if (row.kind === 'sep') {
                return <SideRailSep key={row.id} />;
              }
              return <SideRailRow key={row.name} depth={row.depth} icon={row.icon} {...row.badge !== undefined && {
                badge: row.badge
              }} {...row.badgeKind !== undefined && {
                badgeKind: row.badgeKind
              }} isSelected={selected === row.name} onClick={() => setSelected(row.name)}>
                    {row.name}
                  </SideRailRow>;
            })}
            </SideRailTree>
          </SideRailPanel>
          <SideRailMain>
            <SideRailMainHeader>
              <span style={{
              color: 'var(--rad-200)'
            }}>
                components<span style={{
                color: 'var(--rad-500)',
                padding: '0 4px'
              }}>/</span>
                button<span style={{
                color: 'var(--rad-500)',
                padding: '0 4px'
              }}>/</span>
                <strong style={{
                color: 'var(--rad-100)'
              }}>{selected}</strong>
              </span>
              <span style={{
              color: 'var(--tox-300)'
            }}>● SYNCED</span>
              <span style={{
              marginLeft: 'auto',
              color: 'var(--ink-500)'
            }}>UTF-8 · LF · TSX</span>
            </SideRailMainHeader>
            <SideRailMainContent>{\`EDITOR SURFACE // \${selected.toUpperCase()}\`}</SideRailMainContent>
          </SideRailMain>
        </SideRail>;
    }
    return <Demo />;
  }
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const T=["Workspace"],A=Object.freeze(Object.defineProperty({__proto__:null,Workspace:n,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{A as S};
