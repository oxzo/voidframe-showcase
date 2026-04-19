import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as t,P as s,S as l}from"./blocks-B1v88gfH.js";import{D as a}from"./Dialog.stories-U4Yrtp5l.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Button-q-nZj2ek.js";import"./Button-BV1bEvDU.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";import"./Dialog-D4FrLeVj.js";import"./Dialog-CNgGrXQT.js";import"./useOverlayTriggerState-D7TnwnEU.js";import"./number-Bh7bbZmX.js";import"./I18nProvider-C_KRB3TE.js";import"./useControlledState-C5a7RtfP.js";import"./Collection-Clcb5Xin.js";import"./Autocomplete-CkZjWIY3.js";import"./getItemCount-Di8yoKZ4.js";import"./useCollection-NUsIjjhw.js";import"./useCollator-CsW49WvG.js";import"./Text-DF5e1-JU.js";import"./useLocalizedStringFormatter-hb7eYMDE.js";import"./PortalProvider-BRea_w2C.js";import"./useLabels-DQ_gQFKV.js";import"./VisuallyHidden-Cm-BANck.js";import"./animation-gJiBC3OQ.js";import"./Modal-DNWCBzbO.js";function n(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(i.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsxs(i.p,{children:["Intrusive, deliberate, and framed as a system broadcast. A Dialog ",e.jsx(i.strong,{children:"interrupts"}),"."]}),`
`,e.jsx(s,{}),`
`,e.jsx(i.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"<DialogTrigger>"})}),` — react-aria wrapper, opens/closes on the first child (a
`,e.jsx(i.code,{children:"<Button>"})," is conventional)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"<Modal>"})}),` — full-screen overlay with a radial orange wash and a dashed grime border.
Pass `,e.jsx(i.code,{children:"isDismissable"})," to allow click-outside-to-close."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"<Dialog>"})})," — the framed shell."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"<DialogHeader>"})})," → ",e.jsx(i.strong,{children:e.jsx(i.code,{children:"<DialogTitle>"})})," — diagonal-hatched bar with a ",e.jsx(i.code,{children:"▌"}),` tag code
(e.g. `,e.jsx(i.code,{children:"▌ DIALOG // AUTH_REQUIRED"}),") and a trailing ",e.jsx(i.code,{children:"[ ESC ]"})," affordance."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"<DialogBody>"})})," — main copy area. ",e.jsx(i.code,{children:"var(--font-body)"}),", ",e.jsx(i.code,{children:"--ink-100"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"<DialogFooter>"})}),` — right-aligned action row. Ghost (abort) left, primary or
destructive (commit) right.`]}),`
`]}),`
`,e.jsx(i.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<DialogTrigger>
  <Button>OPEN MODAL</Button>
  <Modal isDismissable>
    <Dialog>
      <DialogHeader>
        <DialogTitle>CONFIRM PURGE</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Irreversible. 12,403 records will be marked void in 3 heartbeats.</p>
      </DialogBody>
      <DialogFooter>
        <Button intent="ghost">ABORT</Button>
        <Button intent="destructive">PROCEED</Button>
      </DialogFooter>
    </Dialog>
  </Modal>
</DialogTrigger>
`})}),`
`,e.jsx(i.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"DO"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Use for flows that require ",e.jsx(i.strong,{children:"acknowledgement or authorization"}),` — destructive
operations, auth step-ups, irreversible state changes.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Name the cost"})," in the body. Numbers, timestamps, reversibility."]}),`
`,e.jsxs(i.li,{children:["Pair a ",e.jsx(i.strong,{children:'ghost "ABORT"'})," with a ",e.jsx(i.strong,{children:'primary or destructive "PROCEED"'}),`. The commit button
carries the consequence color; the abort is neutral.`]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"DON'T"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Use for ",e.jsx(i.strong,{children:"informational content"})," — that's a ",e.jsx(i.code,{children:'<Popover variant="shell">'}),` or a
`,e.jsx(i.code,{children:"<Toast>"}),", neither of which trap focus."]}),`
`,e.jsx(i.li,{children:"Nest dialogs. If a dialog needs another dialog, the flow is wrong."}),`
`,e.jsx(i.li,{children:`Skip the title. Every dialog has a short uppercase title; without it, the title bar
has nothing to announce to screen readers.`}),`
`,e.jsx(i.li,{children:"Build a form-wizard in a dialog. Dialogs confirm; they don't lead a multi-step flow."}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["Built on ",e.jsx(i.code,{children:"react-aria-components"})," ",e.jsx(i.a,{href:"https://react-spectrum.adobe.com/react-aria/Dialog.html",rel:"nofollow",children:e.jsx(i.code,{children:"Dialog"})}),`
and `,e.jsx(i.a,{href:"https://react-spectrum.adobe.com/react-aria/Modal.html",rel:"nofollow",children:e.jsx(i.code,{children:"Modal"})}),`. Focus is trapped
inside the dialog while open; Esc closes it; return focus lands back on the trigger. The
`,e.jsx(i.code,{children:"<DialogTitle>"})," is auto-wired as the dialog's ",e.jsx(i.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsx(i.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(l,{})]})}function G(r={}){const{wrapper:i}={...o(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(n,{...r})}):n(r)}export{G as default};
