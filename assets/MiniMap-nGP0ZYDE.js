import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as t,P as l,S as o}from"./blocks-B1v88gfH.js";import{M as a}from"./MiniMap.stories-TuB_uwi1.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./MiniMap-DgnYx-_a.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(n.h1,{id:"minimap",children:"MiniMap"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`VOIDFRAME app-shell scaffold — not part of the hand-off spec; used by the Showcase
and OpsConsole example views.`}),`
`]}),`
`,e.jsx(n.p,{children:`Segmented overview of a long page, deck, or queue. Each segment is a button — click
jumps to that section. Hover (and keyboard focus) reveal the segment label so the bare
bars stay terse.`}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<MiniMap label position>"})})," — outer ",e.jsx(n.code,{children:"<nav>"}),` landmark with optional leading label
(e.g. `,e.jsx(n.code,{children:"MAP"}),") and trailing position chip (use ",e.jsx(n.code,{children:"<MiniMapPosition>"})," for ",e.jsx(n.code,{children:"04 / 09"}),`-style
zero-padded readouts).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"<MiniMapSegment label state isCurrent>"})})," — button-shaped bar. ",e.jsx(n.code,{children:"label"}),` is required
and is the segment's accessible name. State colors mirror `,e.jsx(n.code,{children:"<Stepper>"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["default: dim (",e.jsx(n.code,{children:"--void-200"}),") — pending"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'state="done"'}),": faded orange"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isCurrent"}),": bright ",e.jsx(n.code,{children:"--rad-300"})," with glow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'state="err"'}),": hazard, flickering"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<MiniMap label="MAP" position={<MiniMapPosition current={4} total={9} />}>
  <MiniMapSegment label="S01 · HERO"   state="done" />
  <MiniMapSegment label="S02 · TOKENS" state="done" />
  <MiniMapSegment label="S03 · NAV"    isCurrent />
  <MiniMapSegment label="S04 · TABLE · 2 err" state="err" />
</MiniMap>
`})}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always pass a ",e.jsxs(n.strong,{children:["descriptive ",e.jsx(n.code,{children:"label"})]}),` — that's the segment's accessible name. The
hover tooltip uses the same string.`]}),`
`,e.jsx(n.li,{children:"Cap segments at ~12. Beyond that, the bars get unreadably thin."}),`
`,e.jsxs(n.li,{children:["Mirror ",e.jsx(n.code,{children:"<Stepper>"})," colour semantics: same vocabulary, same meaning."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Re-use ",e.jsx(n.code,{children:"done"}),` colour for "neutral, just-not-current" — that's pending (no state).`]}),`
`,e.jsx(n.li,{children:"Animate the current bar. The glow earns the eye on its own."}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The outer landmark is ",e.jsx(n.code,{children:'<nav aria-label="page map">'}),`. Segments are real
`,e.jsx(n.code,{children:'<button type="button">'})," elements; each segment's ",e.jsx(n.code,{children:"aria-label"})," is its ",e.jsx(n.code,{children:"label"}),` prop.
The hover tooltip is decorative — screen readers announce the same text via
`,e.jsx(n.code,{children:"aria-label"})," so they receive identical information."]}),`
`,e.jsx(n.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(o,{})]})}function b(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{b as default};
