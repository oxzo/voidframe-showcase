import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as a}from"./blocks-B1v88gfH.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";function o(i){const r={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Foundations/Color"}),`
`,e.jsx(r.h1,{id:"color",children:"Color"}),`
`,e.jsx(r.p,{children:"Three systems, each with a narrow, assigned job. No component invents its own color."}),`
`,e.jsx(r.h2,{id:"principles",children:"Principles"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Nothing is pure gray."})," All blacks carry a trace of blue-green rot — see the ",e.jsx(r.code,{children:"--void-*"}),`
ramp below.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Irradiated orange is the signal."}),` One focal per view. If it glows, the operator must
act on it.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Sickly green is readouts."}),` Numbers, counters, telemetry — data that reports, not
data that demands.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Hazard red is the irreversible."})," Reserved for ",e.jsx(r.code,{children:"destructive"})," intent, ",e.jsx(r.code,{children:"err"}),` toasts,
`,e.jsx(r.code,{children:"STALE_LINK"})," / ",e.jsx(r.code,{children:"DEREFERENCED"}),` states. If red appears, something is broken, unreachable,
or about to be lost.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ink ramps carry the blue-green trace too."}),` Body text is not white — it's
`,e.jsx(r.code,{children:"--ink-100"})," (",e.jsx(r.code,{children:"#e8d9a8"}),"). Real white is reserved for ",e.jsx(r.code,{children:"--ink-000"})," / ",e.jsx(r.code,{children:"--rad-000"}),` at the
highest-emphasis type only.`]}),`
`]}),`
`,e.jsxs(r.h2,{id:"themes--data-theme",children:["Themes · ",e.jsx(r.code,{children:"[data-theme]"})]}),`
`,e.jsxs(r.p,{children:["Two themes share the same token names. ",e.jsx(r.strong,{children:"ABYSS"}),` (dark) is the default when the
attribute is absent. `,e.jsx(r.strong,{children:"SCORCH"})," (light) is activated by ",e.jsx(r.code,{children:'[data-theme="light"]'}),` on
`,e.jsx(r.code,{children:"<html>"})," — the no-flash inline script in ",e.jsx(r.code,{children:"src/pages/*.astro"}),` sets it before paint
from `,e.jsx(r.code,{children:"localStorage['vf-theme']"}),`. Use the toolbar above (▾ Theme) to flip every
story; the `,e.jsx(r.code,{children:"ThemeToggle"})," component drives the same attribute in product pages."]}),`
`,e.jsxs(r.p,{children:["The swatches throughout this page show ",e.jsx(r.strong,{children:"ABYSS"}),` values — the same token names
remap to SCORCH in `,e.jsx(r.code,{children:"src/shared/styles/theme-light.css"}),`. SCORCH is the sun as
interrogator: blown-out sickly haze for surfaces, pitch-black hard shadows
instead of glow, neon rendered as exhausted pigment. Irradiated orange burns
down to oxidized copper (`,e.jsx(r.code,{children:"#ff9d0b"})," → ",e.jsx(r.code,{children:"#6e3510"}),`), readout green dries to
caution yellow (`,e.jsx(r.code,{children:"#c6ff00"})," → ",e.jsx(r.code,{children:"#a8890f"}),`), ink inverts from bleached amber to
near-pitch body text. Spacing, type, motion, and border-radii do not change
between themes.`]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Token family"}),e.jsx(r.th,{children:"ABYSS (dark)"}),e.jsx(r.th,{children:"SCORCH (light)"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"--void-000"})}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#000000"})," absolute void"]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#d9c896"})," sky haze"]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"--void-100"})}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#0a0c12"})," raised"]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#b8a66c"})," oxidized brass"]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"--rad-300"})}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#ff9d0b"})," neon focal"]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#6e3510"})," copper focal"]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"--tox-300"})}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#c6ff00"})," neon readout"]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#a8890f"})," caution yellow"]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"--haz-300"})}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#ff2d2d"})," hazard"]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#c8001e"})," faded hazard"]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"--ink-100"})}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#e8d9a8"})," body text"]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"#1a1408"})," body text"]})]})]})]}),`
`,e.jsxs(r.h2,{id:"the-abyss----void-",children:["The Abyss · ",e.jsx(r.code,{children:"--void-*"})]}),`
`,e.jsx(r.p,{children:"Seven steps of black. Panel surfaces and dividers. Never used for text."}),`
`,e.jsx("div",{style:{display:"grid",gap:"4px",fontFamily:"var(--font-data)",fontSize:"11px"},children:[["--void-000","#000000","absolute void"],["--void-050","#05060a","panel base"],["--void-100","#0a0c12","raised surface"],["--void-150","#10131b","hover surface"],["--void-200","#171b26","divider ink"],["--void-300","#232838","disabled fill"],["--void-400","#3a4154","muted rule"]].map(([s,d,n])=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"20px 180px 90px 1fr",gap:"8px",alignItems:"center",padding:"4px 0",borderBottom:"1px dashed var(--void-300)"},children:[e.jsx("span",{style:{width:18,height:18,background:d,border:"1px solid rgba(255,255,255,.08)"}}),e.jsx("span",{style:{color:"var(--ink-100)"},children:s}),e.jsx("span",{style:{color:"var(--rad-200)"},children:d}),e.jsx("span",{style:{color:"var(--ink-500)"},children:n})]},s))}),`
`,e.jsxs(r.h2,{id:"irradiated----rad--primary",children:["Irradiated · ",e.jsx(r.code,{children:"--rad-*"})," (primary)"]}),`
`,e.jsxs(r.p,{children:["Toxic orange. Focal color. ",e.jsx(r.code,{children:"--rad-300"}),` is the canonical "primary" — every other step on
the ramp supports it.`]}),`
`,e.jsx("div",{style:{display:"grid",gap:"4px",fontFamily:"var(--font-data)",fontSize:"11px"},children:[["--rad-000","#fff5d6","highlight / press"],["--rad-100","#ffe37a","bright sheen"],["--rad-200","#ffc83d","hot hover"],["--rad-300","#ff9d0b","★ primary / the focal"],["--rad-400","#ff6a00","★ hot signal"],["--rad-500","#d94500","glow tail / border"],["--rad-600","#8f2a00","deep wash"]].map(([s,d,n])=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"20px 180px 90px 1fr",gap:"8px",alignItems:"center",padding:"4px 0",borderBottom:"1px dashed var(--void-300)"},children:[e.jsx("span",{style:{width:18,height:18,background:d,boxShadow:`0 0 14px ${d}`}}),e.jsx("span",{style:{color:"var(--ink-100)"},children:s}),e.jsx("span",{style:{color:"var(--rad-200)"},children:d}),e.jsx("span",{style:{color:"var(--ink-500)"},children:n})]},s))}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Rule:"})," one ",e.jsx(r.code,{children:"--rad-300"})," focal per view. If you need two, something is wrong."]}),`
`]}),`
`,e.jsxs(r.h2,{id:"readout----tox-",children:["Readout · ",e.jsx(r.code,{children:"--tox-*"})]}),`
`,e.jsx(r.p,{children:`Sickly green. Numeric readouts, counters, "link ok" indicators. Never used on
interactive chrome — green is for data that reports, not data that demands.`}),`
`,e.jsx("div",{style:{display:"grid",gap:"4px",fontFamily:"var(--font-data)",fontSize:"11px"},children:[["--tox-300","#c6ff00","readout / OK"],["--tox-400","#9ad600","depressed tone"]].map(([s,d,n])=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"20px 180px 90px 1fr",gap:"8px",alignItems:"center",padding:"4px 0",borderBottom:"1px dashed var(--void-300)"},children:[e.jsx("span",{style:{width:18,height:18,background:d,boxShadow:`0 0 14px ${d}`}}),e.jsx("span",{style:{color:"var(--ink-100)"},children:s}),e.jsx("span",{style:{color:"var(--rad-200)"},children:d}),e.jsx("span",{style:{color:"var(--ink-500)"},children:n})]},s))}),`
`,e.jsxs(r.h2,{id:"hazard----haz-",children:["Hazard · ",e.jsx(r.code,{children:"--haz-*"})]}),`
`,e.jsxs(r.p,{children:[`Hazard red. Destructive intent, error toasts, dereferenced rows. If you're reaching for
orange to mean "bad", reach for hazard instead — orange is a `,e.jsx(r.em,{children:"warning"}),` about state, red is
a `,e.jsx(r.em,{children:"fact"})," about state."]}),`
`,e.jsx("div",{style:{display:"grid",gap:"4px",fontFamily:"var(--font-data)",fontSize:"11px"},children:[["--haz-300","#ff2d2d","hazard / destructive"],["--haz-400","#ff0033","critical flicker"]].map(([s,d,n])=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"20px 180px 90px 1fr",gap:"8px",alignItems:"center",padding:"4px 0",borderBottom:"1px dashed var(--void-300)"},children:[e.jsx("span",{style:{width:18,height:18,background:d,boxShadow:`0 0 14px ${d}`}}),e.jsx("span",{style:{color:"var(--ink-100)"},children:s}),e.jsx("span",{style:{color:"var(--rad-200)"},children:d}),e.jsx("span",{style:{color:"var(--ink-500)"},children:n})]},s))}),`
`,e.jsxs(r.h2,{id:"ink----ink--text",children:["Ink · ",e.jsx(r.code,{children:"--ink-*"})," (text)"]}),`
`,e.jsxs(r.p,{children:["Text colors. Never pure white — the highest-emphasis ink is ",e.jsx(r.code,{children:"--ink-000"})," (",e.jsx(r.code,{children:"#fff5d6"}),`),
which is the same value as `,e.jsx(r.code,{children:"--rad-000"}),". Body text is ",e.jsx(r.code,{children:"--ink-100"}),", secondary is ",e.jsx(r.code,{children:"--ink-300"}),`,
muted is `,e.jsx(r.code,{children:"--ink-500"}),"."]}),`
`,e.jsx("div",{style:{display:"grid",gap:"4px",fontFamily:"var(--font-data)",fontSize:"11px"},children:[["--ink-000","#fff5d6","high-emphasis"],["--ink-100","#e8d9a8","body"],["--ink-300","#9a8e6b","secondary"],["--ink-500","#5a5240","tertiary / disabled"],["--ink-700","#2e2a20","hairline"]].map(([s,d,n])=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"20px 180px 90px 1fr",gap:"8px",alignItems:"center",padding:"4px 0",borderBottom:"1px dashed var(--void-300)"},children:[e.jsx("span",{style:{width:18,height:18,background:d,border:"1px solid rgba(255,255,255,.08)"}}),e.jsx("span",{style:{color:"var(--ink-100)"},children:s}),e.jsx("span",{style:{color:"var(--rad-200)"},children:d}),e.jsx("span",{style:{color:"var(--ink-500)"},children:n})]},s))}),`
`,e.jsxs(r.h2,{id:"elevation----glow-",children:["Elevation · ",e.jsx(r.code,{children:"--glow-*"})]}),`
`,e.jsxs(r.p,{children:["Neon glows, not drop shadows. ",e.jsx(r.code,{children:"--glow-rad"})," wraps primary focal surfaces; ",e.jsx(r.code,{children:"--glow-tox"}),` and
`,e.jsx(r.code,{children:"--glow-haz"})," mirror the same shape in green and red for readouts and hazards."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* usage */
.focal  { box-shadow: var(--glow-rad); }
.ok     { box-shadow: var(--glow-tox); }
.err    { box-shadow: var(--glow-haz); }
`})})]})}function f(i={}){const{wrapper:r}={...t(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(o,{...i})}):o(i)}export{f as default};
