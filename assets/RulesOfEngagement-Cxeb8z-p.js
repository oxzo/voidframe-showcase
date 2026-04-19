import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as i}from"./blocks-B1v88gfH.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";function s(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Foundations/Rules of Engagement"}),`
`,e.jsx(n.h1,{id:"rules-of-engagement",children:"Rules of Engagement"}),`
`,e.jsx(n.p,{children:`Seven rules. They trump local decisions. If a component you are building would break one,
the component is wrong, not the rule. Rules 1–4 are detailed below; rules 5–7 live in
sibling foundations and are summarised at the bottom of this page.`}),`
`,e.jsx(n.h2,{id:"1-no-rounded-corners-above-2px",children:"1. No rounded corners above 2px"}),`
`,e.jsxs(n.p,{children:["Everything uses sharp edges or a chamfered clip-path (",e.jsx(n.code,{children:"--r-0"}),", ",e.jsx(n.code,{children:"--r-1"}),", ",e.jsx(n.code,{children:"--r-2"}),`). Soft
corners read as friendly — this system is not friendly. The only radii the tokens expose
are `,e.jsx(n.code,{children:"0px"}),", ",e.jsx(n.code,{children:"1px"}),", ",e.jsx(n.code,{children:"2px"}),". There is no pill."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* ✗ wrong */
.button { border-radius: 8px; }

/* ✓ right — sharp with chamfer */
.button { clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%,
                              8px 100%, 0 calc(100% - 8px)); }
`})}),`
`,e.jsx(n.h2,{id:"2-no-gradients-that-arent-noise-or-scanlines",children:"2. No gradients that aren't noise or scanlines"}),`
`,e.jsxs(n.p,{children:[`Flat fills, or noise/scanline overlays. Decorative smooth gradients (hero washes, button
sheens, brand sunsets) are out. Glows are allowed, but they are `,e.jsx(n.code,{children:"box-shadow"}),` and they are
orange — see `,e.jsx(n.code,{children:"--glow-rad"}),", ",e.jsx(n.code,{children:"--glow-tox"}),", ",e.jsx(n.code,{children:"--glow-haz"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* ✗ wrong — smooth decorative gradient */
background: linear-gradient(135deg, #ff9d0b, #ff2d2d);

/* ✓ right — scanline texture on flat fill */
background:
  repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,.35) 2px 3px),
  var(--void-050);
`})}),`
`,e.jsxs(n.h2,{id:"3-one---rad-300-focal-per-view",children:["3. One ",e.jsx(n.code,{children:"--rad-300"})," focal per view"]}),`
`,e.jsxs(n.p,{children:["Irradiated orange (",e.jsx(n.code,{children:"--rad-300"}),") is reserved for ",e.jsx(n.strong,{children:`the one thing on the screen the operator
must act on`}),". Overuse destroys the signal."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"One primary button per view. If there are two primary buttons, there are none."}),`
`,e.jsxs(n.li,{children:["Secondary actions use ",e.jsx(n.code,{children:"secondary"})," / ",e.jsx(n.code,{children:"ghost"}),". They are not orange — they borrow orange."]}),`
`,e.jsxs(n.li,{children:["Numeric readouts use ",e.jsx(n.code,{children:"--tox-300"})," (sickly green), not irradiated orange."]}),`
`,e.jsxs(n.li,{children:["Errors use ",e.jsx(n.code,{children:"--haz-300"})," (hazard red). Red is for ",e.jsx(n.em,{children:"broken"}),", not ",e.jsx(n.em,{children:"warn"}),`. Orange-400 is for
`,e.jsx(n.em,{children:"warn"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:`Rule of thumb: if a new surface wants to glow orange, check what else on the same view
glows orange. Usually one has to give.`}),`
`,e.jsx(n.h2,{id:"4-motion-is-flicker-scramble-or-scanroll--never-spring",children:"4. Motion is flicker, scramble, or scanroll — never spring"}),`
`,e.jsx(n.p,{children:"Three motion primitives are allowed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flicker"}),` — brief opacity drops, like a failing CRT. Used on destructive confirmation
and on error toasts. See `,e.jsx(n.code,{children:"vf-flicker"})," in ",e.jsx(n.code,{children:"grime.css"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scramble"}),` — clip-path inset jitter that looks like a signal glitch. Used for hero
titles and transitional moments. See `,e.jsx(n.code,{children:"vf-scramble"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scanroll"}),` — a horizontal scanline rolling vertically across a surface. Used on panels
that are "loading" or "tuning in". See `,e.jsx(n.code,{children:"vf-scanroll"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Everything else — easing curves, transition durations — is capped to ",e.jsx(n.code,{children:"--d-fast"}),` (90ms),
`,e.jsx(n.code,{children:"--d-med"})," (180ms), ",e.jsx(n.code,{children:"--d-slow"})," (340ms) with ",e.jsx(n.code,{children:"--ease-snap"})," or ",e.jsx(n.code,{children:"--ease-grind"}),`. A component
that over-eases looks weak. A component with a bouncy spring looks like a different
product.`]}),`
`,e.jsx(n.p,{children:`The 340ms cap governs interaction transitions. State indicators (critical meters,
destructive buttons) may loop or flicker indefinitely — they communicate a standing
condition, not a transition.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* ✗ wrong — bouncy spring */
transition: transform 600ms cubic-bezier(.34, 1.56, .64, 1);

/* ✓ right — snap */
transition: background var(--d-fast) var(--ease-snap);
`})}),`
`,e.jsx(n.h2,{id:"5-label-typography-is-a-system-not-a-choice",children:"5. Label typography is a system, not a choice"}),`
`,e.jsxs(n.p,{children:[`Display, body, and data faces, the eight-step type scale, and the all-caps tracked
labels (`,e.jsx(n.code,{children:"▸"}),", prefix glyphs, ",e.jsx(n.code,{children:"SEC_*"}),` numerals) are fixed. A component does not pick its
own typeface or letter-spacing — see `,e.jsx(n.a,{href:"./Type.mdx",children:"Type"}),` for the scale and
`,e.jsx(n.a,{href:"./ToneAndVoice.mdx",children:"Tone & Voice"})," for label discipline."]}),`
`,e.jsx(n.h2,{id:"6-colours-go-through-tokens--five-families-only",children:"6. Colours go through tokens — five families only"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--void-*"})," (surface), ",e.jsx(n.code,{children:"--rad-*"})," (irradiated, primary accent), ",e.jsx(n.code,{children:"--tox-*"}),` (sickly green,
readout), `,e.jsx(n.code,{children:"--haz-*"})," (hazard, destructive), ",e.jsx(n.code,{children:"--ink-*"}),` (text). Raw hex inside component
CSS is the bug — promote it to a token. See `,e.jsx(n.a,{href:"./Color.mdx",children:"Color"}),` for the five families
and when each applies.`]}),`
`,e.jsx(n.h2,{id:"7-signals-are-prefixed",children:"7. Signals are prefixed"}),`
`,e.jsxs(n.p,{children:["Toasts open with ",e.jsx(n.code,{children:"▸"}),", dialog headers with ",e.jsx(n.code,{children:"▌"}),", indexed sections with ",e.jsx(n.code,{children:"SEC_NNN"}),`. The
glyphs are part of the message, not decoration; stripping them breaks recognition. See
`,e.jsx(n.a,{href:"./ToneAndVoice.mdx",children:"Tone & Voice"})," for the full prefix vocabulary."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"meta-rule--when-in-doubt-more-grime",children:"Meta rule — when in doubt, more grime"}),`
`,e.jsx(n.p,{children:`Between two options of equal fit, pick the grittier one. A surface that looks slightly
too clean is a bug. A surface that looks slightly too broken is correct.`})]})}function p(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{p as default};
