import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as o,P as t,C as d,S as c}from"./blocks-B1v88gfH.js";import{P as l}from"./ProgressRing.stories-ChQSHgo9.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./ProgressRing-Cmidc6uI.js";import"./Meter-BBeMr75k.js";import"./filterDOMProps-Bh70n4Et.js";import"./Label-BuQ2R_57.js";import"./Hidden-BudTfhEC.js";import"./useLabel-Bqn6mBHz.js";import"./useLabels-DQ_gQFKV.js";import"./I18nProvider-C_KRB3TE.js";import"./number-Bh7bbZmX.js";function s(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(r.h1,{id:"progressring",children:"ProgressRing"}),`
`,e.jsxs(r.p,{children:["Circular telemetry dial. A neon arc on a muted ring; a short uppercase ",e.jsx(r.code,{children:"label"}),` sits under
the percentage.`]}),`
`,e.jsx(t,{}),`
`,e.jsx(r.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"<ProgressRing>"})})," — react-aria ",e.jsx(r.code,{children:"Meter"})," rendered as SVG ",e.jsx(r.code,{children:"stroke-dasharray"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Background circle"})," — ",e.jsx(r.code,{children:"--void-300"})," stroke."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Foreground circle"})," — ",e.jsx(r.code,{children:"--rad-300"})," (or the ",e.jsx(r.code,{children:"kind"}),` color) stroke with a drop-shadow
filter that gives it the neon glow.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Readout"})," — percentage in ",e.jsx(r.code,{children:"--font-data"})," at 26px, unit/label in muted ",e.jsx(r.code,{children:"--ink-300"}),`
below it.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"kind"})})," — drives the stroke color. Same four values as ",e.jsx(r.code,{children:"<Meter>"}),`:
`,e.jsx(r.code,{children:"default"})," (orange), ",e.jsx(r.code,{children:"warn"})," (hot orange), ",e.jsx(r.code,{children:"crit"})," (red, flicker), ",e.jsx(r.code,{children:"tox"})," (green)."]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{}),`
`,e.jsx(r.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"DO"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Use when ",e.jsx(r.strong,{children:"one dimension deserves the dial"}),` — a single core metric, a circular
display that becomes the page's centerpiece.`]}),`
`,e.jsxs(r.li,{children:["Keep ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"size"})}),` at the default 120 for inline use; scale up to 200 for a dashboard hero
tile.`]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:e.jsx(r.code,{children:'kind="tox"'})}),` for values that are read as "healthy" (sync progressing,
heartbeat).`]}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"DON'T"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Use for comparing multiple metrics — a row of ",e.jsx(r.code,{children:"<Meter>"}),`s reads better side-by-side than
a row of rings.`]}),`
`,e.jsx(r.li,{children:`Use under 64px. Below that, the stroke width eats the readout and the ring stops
reading as a ring.`}),`
`,e.jsxs(r.li,{children:["Use for a ",e.jsx(r.strong,{children:"task in progress"}),`. ProgressRing is a meter (can go down); if you need
"this task is running and will complete", reach for `,e.jsx(r.code,{children:"<ProgressBar>"})," when it exists."]}),`
`]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["Built on ",e.jsx(r.code,{children:"react-aria-components"})," ",e.jsx(r.a,{href:"https://react-spectrum.adobe.com/react-aria/Meter.html",rel:"nofollow",children:e.jsx(r.code,{children:"Meter"})}),`
— same semantics as `,e.jsx(r.code,{children:"<Meter>"}),". The SVG is ",e.jsx(r.code,{children:"aria-hidden"}),`; the label becomes the accessible
name. See the `,e.jsx(r.a,{href:"?path=/docs/shared-meter--docs",children:"Meter docs"})," for the known a11y finding."]}),`
`,e.jsx(r.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(c,{})]})}function C(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{C as default};
