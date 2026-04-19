import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as o,P as t,C as c,S as d}from"./blocks-B1v88gfH.js";import{L as l}from"./Logo.stories-BtOwxvJj.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Logo-FcWeSyeA.js";function s(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"logo",children:"Logo"}),`
`,e.jsxs(n.p,{children:[`VOIDFRAME's mark: a chevron inside a chamfered frame, with bracket fixtures and strapline
in various combinations. Shipped as a single `,e.jsx(n.code,{children:"<Logo>"})," component with a ",e.jsx(n.code,{children:"variant"}),` prop — the
glyph is the source, the lockups are compositions around it.`]}),`
`,e.jsx(t,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Frame"})," — chamfered rectangle at ",e.jsx(n.code,{children:"10u"})," (never rounded)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Chevron"})," — ",e.jsx(n.code,{children:"V"})," formed by two mitered strokes at ",e.jsx(n.code,{children:"10u"})," weight inside the frame."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reticle dot"})," — a single ",e.jsx(n.code,{children:"--logo-accent"})," (yellow) pixel at the optical center."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Corner ticks"})," — four 12u marks that break the frame edge, only rendered above 64px."]}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"glyph"})})," ",e.jsx(n.em,{children:"(default)"})," — canonical chevron-in-frame. Use for favicon, app icon, avatar."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"glyph-segmented"})})," — segmented V of discrete bars. Alt / decorative contexts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"glyph-reticle"})})," — target reticle with a centered ",e.jsx(n.code,{children:"V"}),". Alt / editorial use."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"primary"})})," — full lockup with bracketed wordmark, glyph, and strapline. Hero / splash only."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"horizontal"})})," — compact glyph + wordmark. Headers, email signatures (≥ 240px wide)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"stencil"})})," — bracketed wordmark, no glyph. When the chevron would crowd other marks."]}),`
`]}),`
`,e.jsx(n.h2,{id:"surface-treatments",children:"Surface treatments"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"surface"})," repaints the mark through CSS custom properties — variants don't need to change."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"abyss"})})," ",e.jsx(n.em,{children:"(default)"})," — orange on dark. The canonical treatment."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"hazard"})})," — black on orange. Use on an irradiated panel or warning strip."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"mono"})})," — ink on dark. Fax-safe fallback; the only acceptable way to render without the orange."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DO"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Reserve ",e.jsx(n.code,{children:"primary"}),` for the largest moment on a page — hero, splash, asset sheet. It's the
lockup that shouts the brand.`]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"horizontal"})," in app chrome where the logo shares space with nav or a version string."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"glyph"})," at ",e.jsx(n.strong,{children:"≥ 64px"}),` when you want the full detail (corner ticks, inner frame,
target cross). At 16–32px the outer frame + chevron carry the mark alone — that's
intentional, don't try to force more detail.`]}),`
`,e.jsxs(n.li,{children:["Pair a decorative ",e.jsx(n.code,{children:"<Logo />"})," (no ",e.jsx(n.code,{children:"title"}),`) with a visible wordmark or route heading. Pass
`,e.jsx(n.code,{children:'title="VOIDFRAME"'})," when the logo is the only thing naming the surface."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DON'T"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Don't recolor the mark inline — switch ",e.jsx(n.code,{children:"surface"})," instead."]}),`
`,e.jsxs(n.li,{children:["Don't set ",e.jsx(n.code,{children:'variant="primary"'}),` in a nav or header. The strapline is brand theatre, not
navigation.`]}),`
`,e.jsxs(n.li,{children:[`Don't round the chamfer, fill the chevron, or add shadows. The neon glow is earned by
bleed (texture / fringe), not by `,e.jsx(n.code,{children:"box-shadow"}),"."]}),`
`,e.jsxs(n.li,{children:["Don't place ",e.jsx(n.code,{children:'<Logo surface="abyss" />'})," on an orange panel. Use ",e.jsx(n.code,{children:"hazard"}),` when the ground is
the accent.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"clearance",children:"Clearance"}),`
`,e.jsxs(n.p,{children:["Reserve ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"--s-6"})," (24px)"]})," of clear space on every side at the ",e.jsx(n.code,{children:"primary"})," size, ",e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"--s-5"}),`
(16px)`]})," at ",e.jsx(n.code,{children:"horizontal"}),". Nothing — rules, meters, dense copy — enters the cordon."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The SVG is rendered as decorative by default (",e.jsx(n.code,{children:"aria-hidden"}),`) because most surfaces already
carry a wordmark or a route heading. Pass `,e.jsx(n.code,{children:"title"})," to promote the SVG to ",e.jsx(n.code,{children:'role="img"'}),` with
the given accessible name — use this only when the logo is the sole thing identifying the
brand on that surface.`]}),`
`,e.jsx(n.h2,{id:"all-stories",children:"All stories"}),`
`,e.jsx(d,{})]})}function y(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{y as default};
