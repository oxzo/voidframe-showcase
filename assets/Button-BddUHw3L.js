import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as t,P as o,C as c,S as d}from"./blocks-B1v88gfH.js";import{B as l}from"./Button.stories-RoeI0uEh.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Button-q-nZj2ek.js";import"./Button-BV1bEvDU.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";function r(n){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(s.h1,{id:"button",children:"Button"}),`
`,e.jsxs(s.p,{children:["A command, issued. Four intents: ",e.jsx(s.strong,{children:"primary"})," (the act), ",e.jsx(s.strong,{children:"secondary"}),` (the alternate),
`,e.jsx(s.strong,{children:"ghost"})," (the retreat), ",e.jsx(s.strong,{children:"destructive"})," (the consequence)."]}),`
`,e.jsx(o,{}),`
`,e.jsx(s.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Chamfered clip-path"}),` on two corners (top-right, bottom-left). Never a border-radius
above `,e.jsx(s.code,{children:"--r-2"})," (2px)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Internal scanline sheen"})," — a ",e.jsx(s.code,{children:"repeating-linear-gradient"}),` sits over every button at
25% opacity, reinforcing the CRT feel.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Label"})," — uppercase, ",e.jsx(s.code,{children:"var(--font-data)"}),", tracking ",e.jsx(s.code,{children:".16em"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Optional leading ",e.jsx(s.code,{children:'<span className="chev">'})]})," — one of ",e.jsx(s.code,{children:"▸"})," (execute), ",e.jsx(s.code,{children:"◂"}),` (review),
`,e.jsx(s.code,{children:"✕"})," (destructive). Optional — skip on ghost."]}),`
`]}),`
`,e.jsx(s.h2,{id:"intents",children:"Intents"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"primary"})," carries ",e.jsx(s.code,{children:"--rad-300"})," (the irradiated focal). ",e.jsx(s.code,{children:"secondary"}),` is a washed orange ghost
of it. `,e.jsx(s.code,{children:"ghost"})," is a dim outline — for cancels and low-weight alternates. ",e.jsx(s.code,{children:"destructive"}),`
uses `,e.jsx(s.code,{children:"--haz-300"})," and, on hover, briefly flickers."]}),`
`,e.jsx(c,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["All interactive state comes from react-aria's ",e.jsx(s.code,{children:"data-*"})," attributes (",e.jsx(s.code,{children:"data-hovered"}),`,
`,e.jsx(s.code,{children:"data-pressed"}),", ",e.jsx(s.code,{children:"data-focus-visible"}),", ",e.jsx(s.code,{children:"data-disabled"}),`) and is styled in
`,e.jsx(s.code,{children:"Button.module.css"}),` — not recomputed in the component body. See the story canvases below
for each state.`]}),`
`,e.jsx(s.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"DO"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use ",e.jsxs(s.strong,{children:["one ",e.jsx(s.code,{children:"primary"})]})," per view. If you have two, you have none."]}),`
`,e.jsxs(s.li,{children:["Reserve ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"destructive"})})," for irreversible operations. The flicker is earned."]}),`
`,e.jsxs(s.li,{children:["Keep labels to ",e.jsx(s.strong,{children:"1–2 words"}),", always uppercase. The stylesheet presses the case."]}),`
`,e.jsxs(s.li,{children:["Prefer ",e.jsx(s.strong,{children:"verbs over nouns"}),": ",e.jsx(s.code,{children:"EXECUTE"}),", ",e.jsx(s.code,{children:"PURGE"}),", ",e.jsx(s.code,{children:"REVIEW"}),", ",e.jsx(s.code,{children:"CANCEL"})," — not ",e.jsx(s.code,{children:"Save"})," or ",e.jsx(s.code,{children:"OK"}),"."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"DON'T"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Add ",e.jsx(s.code,{children:"border-radius"})," above 2px. Buttons are clipped at two corners, always."]}),`
`,e.jsxs(s.li,{children:["Mix intents on the same button via ",e.jsx(s.code,{children:"className"})," overrides. Compose via ",e.jsx(s.code,{children:"intent"}),"."]}),`
`,e.jsxs(s.li,{children:["Use sentence-case labels. All button labels are uppercase, tracking ",e.jsx(s.code,{children:".16em"}),"."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"primary"})," for navigation. A primary button ",e.jsx(s.em,{children:"commits"})," something."]}),`
`]}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:["Built on ",e.jsx(s.code,{children:"react-aria-components"})," ",e.jsx(s.a,{href:"https://react-spectrum.adobe.com/react-aria/Button.html",rel:"nofollow",children:e.jsx(s.code,{children:"Button"})}),`.
Focus ring is enforced — the chamfered clip-path makes the outline visually separate from
the surface border, so tab order stays legible.`]}),`
`,e.jsx(s.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(d,{})]})}function C(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{C as default};
