import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as t,P as l,C as o,S as d}from"./blocks-B1v88gfH.js";import{M as c}from"./Meter.stories-BHJElZwP.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Meter-C6qMo3Pc.js";import"./Meter-BBeMr75k.js";import"./filterDOMProps-Bh70n4Et.js";import"./Label-BuQ2R_57.js";import"./Hidden-BudTfhEC.js";import"./useLabel-Bqn6mBHz.js";import"./useLabels-DQ_gQFKV.js";import"./I18nProvider-C_KRB3TE.js";import"./number-Bh7bbZmX.js";function s(r){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(n.h1,{id:"meter",children:"Meter"}),`
`,e.jsxs(n.p,{children:["No smooth fills. Meters are ",e.jsx(n.strong,{children:"broken into discrete slivers"}),` — a nod to CRT health bars
and analog VU scales. Each tick is an earned unit.`]}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Meter>"})})," — react-aria ",e.jsx(n.code,{children:"Meter"})," (",e.jsx(n.code,{children:'role="meter"'})," with ",e.jsx(n.code,{children:"aria-valuenow/min/max"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label row"})," — ",e.jsx(n.code,{children:"name"})," on the left (",e.jsx(n.code,{children:"--rad-300"}),"), ",e.jsx(n.code,{children:"val"})," on the right (",e.jsx(n.code,{children:"--ink-100"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Segment bar"}),` — a CSS grid of discrete slivers. Filled slivers carry a soft glow;
empty slivers are a muted orange.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"kind"})})," — criticality variant for the lit-segment color:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"default"})," — ",e.jsx(n.code,{children:"--rad-300"})," (orange)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"warn"})," — ",e.jsx(n.code,{children:"--rad-400"})," (hot orange)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"crit"})," — ",e.jsx(n.code,{children:"--haz-300"})," (red), with a flicker animation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tox"})," — ",e.jsx(n.code,{children:"--tox-300"}),' (toxic green), for readouts that are "healthy green".']}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"meter-vs-progressring-vs-progressbar",children:"Meter vs ProgressRing vs ProgressBar"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<Meter>"})})," — telemetry. A measurement of ",e.jsxs(n.strong,{children:["what ",e.jsx(n.em,{children:"is"})]}),`: core temp, queue pressure,
coolant load, uplink integrity. The value can go up or down.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<ProgressRing>"})})," — same semantics (both use react-aria ",e.jsx(n.code,{children:"Meter"}),`), but rendered as a
circular dial. Use when the metric deserves visual weight on its own.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<ProgressBar>"})})," — ",e.jsx(n.em,{children:"(not yet provided)"}),` — a task that advances from 0 → 100 and is
done. If we need "a task is running", this slot is open.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Keep ",e.jsx(n.strong,{children:"segments at 24"})," (the default). The spec-sheet density is tuned for this."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:'kind="crit"'})})," ",e.jsx(n.em,{children:"only"}),` when the value is genuinely critical. The flicker is
earned — every crit-kind element on a page dilutes the signal.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:'kind="tox"'})}),` for values that are "good when green" (heartbeat OK, shadow-index
sync progressing). Green is a readout color, not a primary color.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Supply a ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"renderValue"})})," callback when the unit matters:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:'<Meter label="FUEL" value={12} maxValue={40}\n  renderValue={({ value, maxValue }) => `${value}/${maxValue} L`} />\n'})}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use for tasks (0 → done). Meters can go ",e.jsx(n.em,{children:"down"}),"; tasks can't."]}),`
`,e.jsxs(n.li,{children:["Mix ",e.jsx(n.code,{children:"kind"}),"s on the same screen to mean different things. ",e.jsx(n.code,{children:"kind"}),` is severity, not
category.`]}),`
`,e.jsx(n.li,{children:`Override the segment count below ~8. The slivers stop reading as a meter and start
reading as a chunky progress bar.`}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Built on ",e.jsx(n.code,{children:"react-aria-components"})," ",e.jsx(n.a,{href:"https://react-spectrum.adobe.com/react-aria/Meter.html",rel:"nofollow",children:e.jsx(n.code,{children:"Meter"})}),`.
The segment bar is `,e.jsx(n.code,{children:"aria-hidden"}),`; the label provides the accessible name and the
underlying `,e.jsx(n.code,{children:'role="meter"'})," provides the value."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Known a11y finding:"}),` axe currently flags the combined
`,e.jsx(n.code,{children:'role="meter progressbar"'}),` on Meter + ProgressRing (react-aria quirk). Tracked in
`,e.jsx(n.code,{children:".storybook/preview.ts"})," under ",e.jsx(n.code,{children:"a11y.test = 'todo'"}),". Flip to ",e.jsx(n.code,{children:"error"}),` once upstream
resolves, or suppress with a scoped rule override.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(d,{})]})}function C(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{C as default};
