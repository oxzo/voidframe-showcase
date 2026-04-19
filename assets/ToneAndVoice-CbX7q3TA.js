import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as d,M as i}from"./blocks-B1v88gfH.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";function r(n){const s={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Foundations/Tone & Voice"}),`
`,e.jsx(s.h1,{id:"tone--voice",children:"Tone & Voice"}),`
`,e.jsx(s.p,{children:`VOIDFRAME copy sounds like a system talking to its operator — not a product talking to its
user. Short. Technical. A little paranoid.`}),`
`,e.jsx(s.h2,{id:"the-register",children:"The register"}),`
`,e.jsxs(s.p,{children:["The emotional register is ",e.jsx(s.strong,{children:"The Friction"}),` — grime and decay, leading every choice. If
two copy options are technically correct, pick the one that feels more like a terminal
than a greeting card.`]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Tone trait"}),e.jsx(s.th,{children:"Do"}),e.jsx(s.th,{children:"Don't"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Terse"})}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"SYNC OK"}),", ",e.jsx(s.code,{children:"PACKET_LOSS"}),", ",e.jsx(s.code,{children:"AUTH_REQUIRED"})]}),e.jsx(s.td,{children:'"Your sync completed successfully!"'})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Classified"})}),e.jsx(s.td,{children:'"Operation cannot be reversed."'}),e.jsx(s.td,{children:'"Are you sure you want to continue?"'})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Mechanical"})}),e.jsx(s.td,{children:'"14 assets reconciled against shadow index."'}),e.jsx(s.td,{children:'"We saved your changes."'})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Imperative"})}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"PURGE"}),", ",e.jsx(s.code,{children:"EXECUTE"}),", ",e.jsx(s.code,{children:"REVIEW"}),", ",e.jsx(s.code,{children:"CANCEL"})]}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"Save"}),", ",e.jsx(s.code,{children:"Submit"}),", ",e.jsx(s.code,{children:"OK"}),", ",e.jsx(s.code,{children:"Go"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Absolute"})}),e.jsx(s.td,{children:'"Unreachable." "Expired." "Dereferenced."'}),e.jsx(s.td,{children:'"Something went wrong."'})]})]})]}),`
`,e.jsx(s.h2,{id:"labels",children:"Labels"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Uppercase, mono, letter-spacing ~0.16em."}),` Enforced in CSS via
`,e.jsx(s.code,{children:"text-transform: uppercase; letter-spacing: .16em"}),` — you write normal-case in JSX, the
stylesheet presses it.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Verbs over nouns."}),` Button labels are the action the operator is authorizing, not a
description of a screen. `,e.jsx(s.code,{children:"EXECUTE"}),", not ",e.jsx(s.code,{children:"Execution"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Codes, not prose."}),` Status tags, toast tags, section indices all use snake-cased
all-caps codes: `,e.jsx(s.code,{children:"SYNC_COMPLETE"}),", ",e.jsx(s.code,{children:"PACKET_LOSS"}),", ",e.jsx(s.code,{children:"OPERATOR_HANDOFF"}),", ",e.jsx(s.code,{children:"AUTH_REQUIRED"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"body-copy",children:"Body copy"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Short sentences."})," Rarely over 20 words."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Specific."})," Numbers, IDs, timestamps whenever they exist. ",e.jsx(s.code,{children:"UNIT_4417-K"}),` beats
`,e.jsx(s.em,{children:"the selected item"}),". ",e.jsx(s.code,{children:"04:23:17Z"})," beats ",e.jsx(s.em,{children:"a moment ago"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Name the cost."}),` Destructive flows tell the operator what is lost, how many records,
and whether it is reversible. "12,403 records will be marked void and dereferenced
within 3 heartbeats."`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"No apologies, no emoji, no exclamation marks."}),` The system does not cheerlead and it
does not apologize. It reports.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Monospace everywhere."})," Even body copy uses mono. This is not a blog."]}),`
`]}),`
`,e.jsx(s.h2,{id:"system-broadcasts",children:"System broadcasts"}),`
`,e.jsx(s.p,{children:`Toasts, dialog bars, and boot-log lines read as system broadcasts, not first-person
updates from the app.`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Surface"}),e.jsx(s.th,{children:"Prefix"}),e.jsx(s.th,{children:"Example"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Toast"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"▸"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"▸ OK // SYNC_COMPLETE"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Dialog"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"▌"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"▌ DIALOG // AUTH_REQUIRED"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Menu"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"▸"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"▸ UNIT_4417-K"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Section"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"SEC_"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"SEC_002 // button"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Log"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"[t]"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"[0000.311] 9 components indexed / 47 tokens loaded"})})]})]})]}),`
`,e.jsx(s.h2,{id:"numbers",children:"Numbers"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Timestamps"})," in 24h UTC with a trailing ",e.jsx(s.code,{children:"Z"}),": ",e.jsx(s.code,{children:"04:23:17Z"}),", ",e.jsx(s.code,{children:"04:23:17.882Z"}),` when
precision matters.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Durations"})," in compact units: ",e.jsx(s.code,{children:"112d 04h 22m"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"IDs"})," preserve case and punctuation: ",e.jsx(s.code,{children:"UNIT_4417-K"}),", ",e.jsx(s.code,{children:"0x4417"}),", ",e.jsx(s.code,{children:"kilo-echo-bravo-niner"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Percentages"})," always include the sign: ",e.jsx(s.code,{children:"68%"}),", never ",e.jsx(s.code,{children:"0.68"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"what-the-system-never-says",children:"What the system never says"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Are you sure?"}),` → It states the consequence and presents two buttons. The operator is
already sure by the time they pressed something marked `,e.jsx(s.code,{children:"PURGE"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Oops"}),", ",e.jsx(s.code,{children:"Uh-oh"}),", ",e.jsx(s.code,{children:"Sorry"})," → The system does not emote."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Loading…"})," → Prefer a segmented meter with a name and a percentage."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Success!"})," / ",e.jsx(s.code,{children:"Great!"})," → Prefer ",e.jsx(s.code,{children:"OK"})," with a code."]}),`
`]})]})}function a(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{a as default};
