import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as s,M as i,P as a,S as t}from"./blocks-B1v88gfH.js";import{C as d}from"./CommandBar.stories-CZICOAek.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./CommandBar-BIumP8y_.js";function o(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(n.h1,{id:"commandbar",children:"CommandBar"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`VOIDFRAME app-shell scaffold — not part of the hand-off spec; used by the Showcase
and OpsConsole example views.`}),`
`]}),`
`,e.jsx(n.p,{children:`The operator's emergency exit. Summoned via ⌘K, supersedes everything else on screen.
Search components, run actions, jump to recent. Keyboard-only flow with a footer legend.`}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<CommandBar>"})})," — outer surface with the irradiated halo. ",e.jsx(n.code,{children:'role="dialog"'}),` so it
pairs naturally with the existing `,e.jsx(n.code,{children:"<Modal>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<CommandBarPrompt inputProps>"})})," — ",e.jsx(n.code,{children:"▸"}),` glyph + autofocused input + ESC keycap.
The blinking caret pip is part of the prompt, not the input.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<CommandBarResults>"})})," — scrolling ",e.jsx(n.code,{children:'role="listbox"'})," container.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<CommandBarGroup label hint>"})," — group divider (e.g. COMPONENTS / ACTIONS / RECENT)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<CommandBarItem icon path kbd isSelected>"}),` — single result. Wrap matched query
spans in `,e.jsx(n.code,{children:"<CommandBarMatch>"})," to highlight them in ",e.jsx(n.code,{children:"--rad-200"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<CommandBarFoot>"})})," — ",e.jsx(n.code,{children:"<CommandBarLegend>"})," of ",e.jsx(n.code,{children:"<CommandBarLegendItem keycap>"}),` shortcut
hints + arbitrary trailing content (host info).`]}),`
`]}),`
`,e.jsx(n.h2,{id:"composition-modal-summoned",children:"Composition (modal-summoned)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DialogTrigger>
  <Button intent="ghost">⌘K</Button>
  <Modal>
    <Dialog aria-label="command">
      <CommandBar>
        <CommandBarPrompt inputProps={{ value: q, onChange }} />
        <CommandBarResults>
          <CommandBarGroup label="COMPONENTS" hint="9 / 47" />
          <CommandBarItem icon="▸" path="components/nav/top-bar" kbd="⏎" isSelected>
            Top<CommandBarMatch>Nav</CommandBarMatch>igation
          </CommandBarItem>
        </CommandBarResults>
        <CommandBarFoot>
          <CommandBarLegend>
            <CommandBarLegendItem keycap="↑↓">navigate</CommandBarLegendItem>
            <CommandBarLegendItem keycap="⏎">select</CommandBarLegendItem>
          </CommandBarLegend>
        </CommandBarFoot>
      </CommandBar>
    </Dialog>
  </Modal>
</DialogTrigger>
`})}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Summon with ",e.jsx(n.strong,{children:"⌘K everywhere"}),". Cross-app keybinding — never per-page."]}),`
`,e.jsxs(n.li,{children:["Group results by ",e.jsx(n.strong,{children:"kind"})," (components, actions, recent). Cap each group at ~5 items."]}),`
`,e.jsxs(n.li,{children:["Show the ",e.jsx(n.strong,{children:"path or qualifier"})," beneath every name. Bare names create ambiguity."]}),`
`,e.jsxs(n.li,{children:["Highlight the matched query inside a name with ",e.jsx(n.code,{children:"<CommandBarMatch>"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Render rounded corners. The halo and the dialog edge are sharp by design."}),`
`,e.jsxs(n.li,{children:["Auto-execute on type — the operator must press ",e.jsx(n.code,{children:"⏎"}),"."]}),`
`,e.jsx(n.li,{children:"Hide the legend. Operators learn the keys faster when they're always visible."}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["When summoned, render inside a ",e.jsx(n.code,{children:"<Modal>"}),` so focus is trapped and ESC closes the surface.
Results are `,e.jsx(n.code,{children:'role="option"'})," inside ",e.jsx(n.code,{children:'role="listbox"'}),`; the host is responsible for
`,e.jsx(n.code,{children:"aria-selected"}),` rotation as the user arrows through results — this primitive ships the
styling, not the keyboard logic. Wire arrows in the consumer (or wrap items in a
`,e.jsx(n.code,{children:"react-aria-components"})," ",e.jsx(n.code,{children:"<Autocomplete>"}),")."]}),`
`,e.jsx(n.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(t,{})]})}function C(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{C as default};
