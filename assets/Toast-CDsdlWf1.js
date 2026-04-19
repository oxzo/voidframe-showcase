import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as r,P as o,S as d}from"./blocks-B1v88gfH.js";import{T as c}from"./Toast.stories-B64-63_C.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Button-q-nZj2ek.js";import"./Button-BV1bEvDU.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";import"./Toast-Csa_dqA5.js";import"./Text-DF5e1-JU.js";import"./useLocalizedStringFormatter-hb7eYMDE.js";import"./I18nProvider-C_KRB3TE.js";import"./PortalProvider-BRea_w2C.js";function i(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(s.h1,{id:"toast",children:"Toast"}),`
`,e.jsxs(s.p,{children:["System broadcasts — not cheer messages. A Toast ",e.jsx(s.strong,{children:"informs without negotiating"}),"."]}),`
`,e.jsx(o,{}),`
`,e.jsx(s.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"<ToastRegion>"})}),` — the fixed region the queue renders into. Rendered once per app
(root layout).`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"toastQueue"})})," — the default ",e.jsx(s.code,{children:"AriaToastQueue"}),". Call ",e.jsx(s.code,{children:"toastQueue.add({…})"}),` from
anywhere to surface a toast.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"<Toast>"})})," — 1px ",e.jsx(s.code,{children:"--rad-500"})," border. Left ",e.jsx(s.code,{children:"sig"}),` bar glows in the kind color
(`,e.jsx(s.code,{children:"info"})," / ",e.jsx(s.code,{children:"ok"})," / ",e.jsx(s.code,{children:"err"}),"). Right ",e.jsx(s.code,{children:"[X]"})," dismiss button separated by a dashed divider."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"tag"})," row"]})," — uppercase code, prefixed with ",e.jsx(s.code,{children:"▸"}),`, with an optional right-aligned
timestamp.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"msg"})})," — body text, ",e.jsx(s.code,{children:"--ink-100"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Once, at the root:
<ToastRegion />

// From anywhere:
toastQueue.add({
  kind: 'ok',
  tag: 'SYNC_COMPLETE',
  message: '14 assets reconciled against shadow index.',
  timestamp: '04:23:41Z',
});
`})}),`
`,e.jsx(s.h2,{id:"kinds",children:"Kinds"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Kind"}),e.jsx(s.th,{children:"Signal color"}),e.jsx(s.th,{children:"When"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"info"})}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--rad-300"})," orange"]}),e.jsx(s.td,{children:"The default. Something notable just happened."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ok"})}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--tox-300"})," green"]}),e.jsx(s.td,{children:"An operation the operator asked for finished."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"err"})}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--haz-300"})," red"]}),e.jsx(s.td,{children:"Something failed. The toast itself flickers."})]})]})]}),`
`,e.jsx(s.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"DO"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Write the ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"tag"})})," as snake-cased all-caps: ",e.jsx(s.code,{children:"SYNC_COMPLETE"}),", ",e.jsx(s.code,{children:"PACKET_LOSS"}),`,
`,e.jsx(s.code,{children:"OPERATOR_HANDOFF"}),". The tag is the code; the ",e.jsx(s.code,{children:"message"})," is the context."]}),`
`,e.jsxs(s.li,{children:["Include a ",e.jsx(s.strong,{children:"timestamp"}),` when the subject is time-sensitive (heartbeats, logs, packet
events). Skip it for generic "OK" confirmations.`]}),`
`,e.jsxs(s.li,{children:["Reserve ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"err"})}),` for things that actually broke. An invalid form field is inline
validation, not a toast.`]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"DON'T"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use for ",e.jsx(s.strong,{children:"destructive confirmation"})," — that's a ",e.jsx(s.code,{children:"<Dialog>"}),`. Toasts cannot be reliably
responded to.`]}),`
`,e.jsxs(s.li,{children:["Queue more than ",e.jsx(s.strong,{children:"5 at a time"}),". ",e.jsx(s.code,{children:"maxVisibleToasts: 5"}),` is the default; needing more
means the system is talking too much.`]}),`
`,e.jsx(s.li,{children:"Write apologetic copy. The system reports; it does not apologize."}),`
`,e.jsxs(s.li,{children:["Ship a toast without a ",e.jsx(s.code,{children:"tag"})," — the label is what makes it scannable."]}),`
`]}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:["Built on ",e.jsx(s.code,{children:"react-aria-components"}),"' ",e.jsx(s.code,{children:"UNSTABLE_Toast*"}),` exports (stable API, experimental
naming). `,e.jsx(s.code,{children:"<ToastRegion>"})," renders with an ",e.jsx(s.code,{children:"aria-live"}),` region so screen readers announce
new toasts without moving focus. Dismiss button carries `,e.jsx(s.code,{children:'aria-label="Dismiss"'}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Note:"})," react-aria's toast API is marked ",e.jsx(s.code,{children:"UNSTABLE_*"}),` today. When it stabilizes,
swap the imports in `,e.jsx(s.code,{children:"Toast.tsx"})," — the public surface of this component stays the same."]}),`
`]}),`
`,e.jsx(s.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(d,{})]})}function O(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{O as default};
