import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as s,P as t,S as d}from"./blocks-B1v88gfH.js";import{M as c}from"./Menu.stories-DnGFfX1O.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Button-q-nZj2ek.js";import"./Button-BV1bEvDU.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";import"./Menu-B75Pr_Am.js";import"./Dialog-CNgGrXQT.js";import"./useOverlayTriggerState-D7TnwnEU.js";import"./number-Bh7bbZmX.js";import"./I18nProvider-C_KRB3TE.js";import"./useControlledState-C5a7RtfP.js";import"./Collection-Clcb5Xin.js";import"./Autocomplete-CkZjWIY3.js";import"./getItemCount-Di8yoKZ4.js";import"./useCollection-NUsIjjhw.js";import"./useCollator-CsW49WvG.js";import"./Text-DF5e1-JU.js";import"./useLocalizedStringFormatter-hb7eYMDE.js";import"./PortalProvider-BRea_w2C.js";import"./useLabels-DQ_gQFKV.js";import"./VisuallyHidden-Cm-BANck.js";import"./animation-gJiBC3OQ.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"menu",children:"Menu"}),`
`,e.jsx(n.p,{children:"A neon-edged action shelf. Groups of imperatives, one per row."}),`
`,e.jsx(t,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<MenuTrigger>"})})," — react-aria wrapper. First child is the trigger (a ",e.jsx(n.code,{children:"<Button>"}),`);
second child is a `,e.jsx(n.code,{children:"<Popover>"})," containing the ",e.jsx(n.code,{children:"<Menu>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Menu>"})})," — 280px min-width, orange 1px border, heavy black drop + faint orange rim."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<MenuHeader>"})})," — flex row for a group label (e.g. ",e.jsx(n.code,{children:"▸ ROUTINE"})," + ",e.jsx(n.code,{children:"LVL-1"}),`). Two
`,e.jsx(n.code,{children:"<span>"}),"s for left / right content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<MenuItem>"})}),` — row with a left dot that lights on focus/hover, a label, and an
optional trailing `,e.jsx(n.code,{children:"<Kbd>"})," for the shortcut."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:'<MenuItem intent="danger">'})}),` — hazard-red ink. Hover background tints red instead
of orange.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<MenuSeparator>"})})," — 1px ",e.jsx(n.code,{children:"--void-300"})," rule with vertical padding."]}),`
`]}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<MenuTrigger>
  <Button>ACTIONS</Button>
  <Popover>
    <Menu>
      <MenuHeader><span>ROUTINE</span><span>LVL-1</span></MenuHeader>
      <MenuItem>DEPLOY<Kbd>⌘D</Kbd></MenuItem>
      <MenuItem>SCAN<Kbd>⌘S</Kbd></MenuItem>
      <MenuSeparator />
      <MenuHeader><span>DESTRUCTIVE</span><span>LVL-3</span></MenuHeader>
      <MenuItem intent="danger">PURGE</MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
`})}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"<Popover>"})," ",e.jsx(n.strong,{children:"without a variant"})," (defaults to ",e.jsx(n.code,{children:'"bare"'}),`) as the Menu's shell. The
Menu brings its own border; a `,e.jsx(n.code,{children:'"shell"'})," popover would double-draw the frame."]}),`
`,e.jsxs(n.li,{children:["Group with ",e.jsx(n.code,{children:"<MenuHeader>"})," + ",e.jsx(n.code,{children:"<MenuSeparator>"}),` for any menu with more than ~5 items.
Reach for a `,e.jsx(n.code,{children:"<Menu>"})," with named clusters before a long un-grouped list."]}),`
`,e.jsxs(n.li,{children:["Pair destructive items with a ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"LVL-<n>"})}),` header hint when operator-level
authorization is part of the domain.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Mix ",e.jsx(n.code,{children:'intent="danger"'}),` items among routine items without a separator. Danger earns its
own cluster.`]}),`
`,e.jsx(n.li,{children:`Nest submenus more than one level. If the tree needs depth, surface it via a dialog or
a dedicated route.`}),`
`,e.jsxs(n.li,{children:["Use a Menu for a filter / selector — that's ",e.jsx(n.code,{children:"<Select>"})," territory (not yet provided)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Built on ",e.jsx(n.code,{children:"react-aria-components"})," ",e.jsx(n.a,{href:"https://react-spectrum.adobe.com/react-aria/Menu.html",rel:"nofollow",children:e.jsx(n.code,{children:"Menu"})}),`.
Keyboard: `,e.jsx(n.code,{children:"↑"})," ",e.jsx(n.code,{children:"↓"})," to move, ",e.jsx(n.code,{children:"Enter"})," to activate, ",e.jsx(n.code,{children:"Esc"})," to close. ",e.jsx(n.code,{children:"<MenuHeader>"}),` uses an
HTML `,e.jsx(n.code,{children:"<header>"})," element and is skipped by arrow keys."]}),`
`,e.jsx(n.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(d,{})]})}function k(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{k as default};
