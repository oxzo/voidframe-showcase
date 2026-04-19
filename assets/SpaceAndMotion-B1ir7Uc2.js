import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t,M as c}from"./blocks-B1v88gfH.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";function r(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Foundations/Space & Motion"}),`
`,e.jsx(s.h1,{id:"space--motion",children:"Space & Motion"}),`
`,e.jsxs(s.h2,{id:"space----s-",children:["Space · ",e.jsx(s.code,{children:"--s-*"})]}),`
`,e.jsx(s.p,{children:`8-point scale, compressed at the low end to accommodate HUD-dense layouts. Every gutter,
padding, and gap references one of these — never an ad-hoc value.`}),`
`,e.jsx("div",{style:{display:"grid",gap:"4px",fontFamily:"var(--font-data)",fontSize:"11px",marginTop:"var(--s-3)"},children:[["--s-1",2],["--s-2",4],["--s-3",8],["--s-4",12],["--s-5",16],["--s-6",24],["--s-7",32],["--s-8",48],["--s-9",64],["--s-10",96]].map(([d,i])=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px auto 1fr",gap:"12px",alignItems:"center",padding:"2px 0",borderBottom:"1px dashed var(--void-300)"},children:[e.jsx("span",{style:{color:"var(--rad-300)"},children:d}),e.jsx("span",{style:{height:6,width:i,background:"var(--rad-300)",boxShadow:"0 0 8px var(--rad-400)"}}),e.jsxs("span",{style:{color:"var(--ink-300)",textAlign:"right"},children:[i,"px"]})]},d))}),`
`,e.jsx(s.h3,{id:"when-to-use-which-step",children:"When to use which step"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Step(s)"}),e.jsx(s.th,{children:"Use"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-1"})," · 2px"]}),e.jsx(s.td,{children:"Hairline offsets, focus-ring offsets"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-2"})," · 4px"]}),e.jsx(s.td,{children:"Tight gaps, dot separators"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-3"})," · 8px"]}),e.jsx(s.td,{children:"Default inline gap, small padding"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-4"})," · 12px"]}),e.jsx(s.td,{children:"Button internal padding, small card padding"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-5"})," · 16px"]}),e.jsx(s.td,{children:"Default card padding, default stack gap"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-6"})," · 24px"]}),e.jsx(s.td,{children:"Panel padding, section internal gutters"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-7"})," · 32px"]}),e.jsx(s.td,{children:"Section outer padding, dialog body padding"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-8"})," · 48px"]}),e.jsx(s.td,{children:"Hero inner padding"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-9"})," · 64px"]}),e.jsx(s.td,{children:"Between sections"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--s-10"})," · 96px"]}),e.jsx(s.td,{children:"Page bottom padding, footer spacing"})]})]})]}),`
`,e.jsxs(s.h3,{id:"radii----r-",children:["Radii · ",e.jsx(s.code,{children:"--r-*"})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"0px"}),", ",e.jsx(s.code,{children:"1px"}),", ",e.jsx(s.code,{children:"2px"}),". That is all. ",e.jsx(s.strong,{children:"No pills."}),` If a surface needs soft corners, it needs
a chamfered clip-path instead (see `,e.jsx(s.a,{href:"?path=/docs/foundations-rules-of-engagement--docs#1-no-rounded-corners-above-2px",children:"Rules of Engagement"}),")."]}),`
`,e.jsxs(s.h2,{id:"motion----d-----ease-",children:["Motion · ",e.jsx(s.code,{children:"--d-*"})," / ",e.jsx(s.code,{children:"--ease-*"})]}),`
`,e.jsxs(s.p,{children:["Motion is ",e.jsx(s.strong,{children:"flicker, scramble, or scanroll"}),` — never a bouncy spring. A component that
over-eases looks weak.`]}),`
`,e.jsx(s.h3,{id:"durations",children:"Durations"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Token"}),e.jsx(s.th,{children:"Value"}),e.jsx(s.th,{children:"Use"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"--d-fast"})}),e.jsx(s.td,{children:"90ms"}),e.jsx(s.td,{children:"Hover / press state changes"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"--d-med"})}),e.jsx(s.td,{children:"180ms"}),e.jsx(s.td,{children:"Glow build-up, focus ring, menu reveal"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"--d-slow"})}),e.jsx(s.td,{children:"340ms"}),e.jsx(s.td,{children:"Dialog mount, toast enter, scramble duration"})]})]})]}),`
`,e.jsx(s.h3,{id:"easing",children:"Easing"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Token"}),e.jsx(s.th,{children:"Curve"}),e.jsx(s.th,{children:"Use"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"--ease-snap"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"cubic-bezier(.22, 1, .36, 1)"})}),e.jsx(s.td,{children:"Default. Hover, press, focus, content swap."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"--ease-grind"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"cubic-bezier(.7, 0, .84, 0)"})}),e.jsx(s.td,{children:'Loading, staged reveals, "grinding" feel.'})]})]})]}),`
`,e.jsx(s.h3,{id:"keyframe-primitives",children:"Keyframe primitives"}),`
`,e.jsxs(s.p,{children:["These live in ",e.jsx(s.code,{children:"src/shared/styles/grime.css"})," and are available via class or named animation:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"vf-flicker"})}),` — brief opacity drops on a steps timing function. Used on destructive
confirm, error toasts, critical meter segments.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"vf-scramble"})})," — ",e.jsx(s.code,{children:"clip-path: inset(…)"}),` jitter that looks like a signal glitch. Used
on hero titles, boot log "READY" line, transitional moments.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"vf-scanroll"})}),` — a horizontal scanline translating vertically. Used on panels that
are loading or tuning in.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"vf-blink"})})," — a stepped ",e.jsx(s.code,{children:"0 → 1"}),` opacity toggle on a 1.05s cycle. Used on the caret
and "classified" indicators.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"vf-fringe"})})," — chromatic aberration on text via two offset ",e.jsx(s.code,{children:"text-shadow"}),`s. Used
sparingly on hero glyphs; do not apply to body copy.`]}),`
`]}),`
`,e.jsx(s.h3,{id:"rules",children:"Rules"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"No springs."})," If you need overshoot, you don't need overshoot — you need snap."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Cap durations at ",e.jsx(s.code,{children:"--d-slow"})," (340ms)."]}),' Anything longer feels broken, not "classified".']}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Reserve ",e.jsx(s.code,{children:"vf-flicker"})," for destructive / error contexts."]}),` Flicker is earned. Using it
decoratively drains it of meaning.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"prefers-reduced-motion: reduce"})," opt-in is not yet wired."]}),` Track it via a follow-up
— any animation added now should be trivially disable-able by a wrapping rule.`]}),`
`]})]})}function g(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{g as default};
