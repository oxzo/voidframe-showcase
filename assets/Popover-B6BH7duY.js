import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as s,P as t,S as l}from"./blocks-B1v88gfH.js";import{P as a}from"./Popover.stories-Cr1z4i9R.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Dialog-CNgGrXQT.js";import"./Button-BV1bEvDU.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";import"./useOverlayTriggerState-D7TnwnEU.js";import"./number-Bh7bbZmX.js";import"./I18nProvider-C_KRB3TE.js";import"./useControlledState-C5a7RtfP.js";import"./Collection-Clcb5Xin.js";import"./Autocomplete-CkZjWIY3.js";import"./getItemCount-Di8yoKZ4.js";import"./useCollection-NUsIjjhw.js";import"./useCollator-CsW49WvG.js";import"./Text-DF5e1-JU.js";import"./useLocalizedStringFormatter-hb7eYMDE.js";import"./PortalProvider-BRea_w2C.js";import"./useLabels-DQ_gQFKV.js";import"./VisuallyHidden-Cm-BANck.js";import"./animation-gJiBC3OQ.js";import"./Button-q-nZj2ek.js";import"./Menu-B75Pr_Am.js";function n(o){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(r.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(r.p,{children:"A floating shelf above the canvas. Two variants, two jobs."}),`
`,e.jsx(t,{}),`
`,e.jsx(r.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(r.h3,{id:"variantbare-default",children:[e.jsx(r.code,{children:'variant="bare"'})," (default)"]}),`
`,e.jsxs(r.p,{children:["No visual chrome. Use it as the ",e.jsxs(r.strong,{children:["container for a ",e.jsx(r.code,{children:"<Menu>"})]}),`, which supplies its own
frame. If you wrap a `,e.jsx(r.code,{children:"<Menu>"})," in a ",e.jsx(r.code,{children:'"shell"'})," popover, the frame draws twice."]}),`
`,e.jsx(r.h3,{id:"variantshell",children:e.jsx(r.code,{children:'variant="shell"'})}),`
`,e.jsxs(r.p,{children:["The VOIDFRAME info-shelf chrome — 1px ",e.jsx(r.code,{children:"--rad-500"}),` border, orange rim, heavy drop shadow,
dashed-rule header. Use for `,e.jsx(r.strong,{children:"read-only inspection content"}),`: IDs, readouts, small action
rows.`]}),`
`,e.jsx(r.h2,{id:"anatomy-shell-variant",children:"Anatomy (shell variant)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:'<Popover variant="shell">'})})," — the frame."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"<PopoverHeader>"})})," — flex row, uppercase ",e.jsx(r.code,{children:"--rad-300"}),` kicker + optional muted ID on
the right. Separated from the body by a dashed rule.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"<PopoverBody>"})})," — pads the body so header and actions align."]}),`
`]}),`
`,e.jsx(r.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<DialogTrigger>
  <Button>INFO</Button>
  <Popover variant="shell">
    <PopoverHeader>▸ NODE 42 / DIAGNOSTIC</PopoverHeader>
    <PopoverBody>
      <p>All subsystems nominal. Last heartbeat 12 s ago.</p>
    </PopoverBody>
  </Popover>
</DialogTrigger>
`})}),`
`,e.jsx(r.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"DO"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.code,{children:'"bare"'})," when the ",e.jsx(r.strong,{children:"child brings its own chrome"})," — ",e.jsx(r.code,{children:"<Menu>"}),", a ",e.jsx(r.code,{children:"<Dialog>"}),` you
want rendered as a floating shelf instead of a modal.`]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.code,{children:'"shell"'})," for ",e.jsx(r.strong,{children:'"more info about this thing"'}),` surfaces — a popover showing the
selected row's full record, a node's vitals, a config summary.`]}),`
`,e.jsxs(r.li,{children:["Keep a shell popover to ",e.jsx(r.strong,{children:"≤240px tall"}),`. If content grows past that, promote to a
`,e.jsx(r.code,{children:"<Dialog>"}),"."]}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"DON'T"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:`Mix both roles in one popover. Decide: is this a menu (bare) or an inspection shelf
(shell)?`}),`
`,e.jsxs(r.li,{children:[`Rely on a popover for critical, modal decisions — it's not focus-trapped. For
"proceed / cancel" flows use `,e.jsx(r.code,{children:"<Dialog>"}),"."]}),`
`,e.jsxs(r.li,{children:["Double-wrap a ",e.jsx(r.code,{children:"<Menu>"})," in a ",e.jsx(r.code,{children:'"shell"'})," popover — the border draws twice."]}),`
`]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["Built on ",e.jsx(r.code,{children:"react-aria-components"})," ",e.jsx(r.a,{href:"https://react-spectrum.adobe.com/react-aria/Popover.html",rel:"nofollow",children:e.jsx(r.code,{children:"Popover"})}),`.
Positioned automatically relative to the trigger, with react-aria handling viewport
collision. Esc closes it; focus returns to the trigger.`]}),`
`,e.jsx(r.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(l,{})]})}function X(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{X as default};
