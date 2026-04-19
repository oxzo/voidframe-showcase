import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as s,P as l,S as c}from"./blocks-B1v88gfH.js";import{A as t}from"./AnchorRail.stories-CSky9Cr1.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./AnchorRail-BM7gWL5i.js";import"./Link-DvWYmIm_.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";function r(i){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t}),`
`,n.jsx(e.h1,{id:"anchorrail",children:"AnchorRail"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`VOIDFRAME app-shell scaffold — not part of the hand-off spec; used by the Showcase
and OpsConsole example views.`}),`
`]}),`
`,n.jsxs(e.p,{children:[`Right-aligned in-page table of contents. Two levels of nesting, numbered. Built on
react-aria's `,n.jsx(e.code,{children:"<Link>"})," with ",n.jsx(e.code,{children:'aria-current="location"'}),` driving the active state — host wires
the scroll observer.`]}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<AnchorRail label foot>"})})," — outer ",n.jsx(e.code,{children:'<nav aria-label="in-page">'}),` with optional
leading label (e.g. `,n.jsx(e.code,{children:"▌ ON THIS PAGE"}),") and trailing ",n.jsx(e.code,{children:"foot"})," slot for reading progress."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<AnchorRailList>"})})," — ",n.jsx(e.code,{children:"<ol>"})," container; nest a second ",n.jsx(e.code,{children:"<AnchorRailList>"}),` inside an
item to create a sub-list.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<AnchorRailItem>"})})," — list ",n.jsx(e.code,{children:"<li>"}),". Wraps the link + an optional nested list."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<AnchorRailLink href index done isCurrent>"})}),` — link row with leading numeral and
trailing `,n.jsx(e.code,{children:"✓"})," tick when ",n.jsx(e.code,{children:"done"}),". The active link is ",n.jsx(e.code,{children:'aria-current="location"'}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"<AnchorRailFootK>"})})," — kicker chip in ",n.jsx(e.code,{children:"--rad-300"})," for the foot's progress label."]}),`
`]}),`
`,n.jsx(e.h2,{id:"composition",children:"Composition"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<AnchorRail
  label="▌ ON THIS PAGE"
  foot={<><AnchorRailFootK>READ 47%</AnchorRailFootK><span>REV 084</span></>}
>
  <AnchorRailList>
    <AnchorRailItem>
      <AnchorRailLink href="#overview" index="01" done>Overview</AnchorRailLink>
    </AnchorRailItem>
    <AnchorRailItem>
      <AnchorRailLink href="#nav" index="03" isCurrent>Navigation</AnchorRailLink>
      <AnchorRailList>
        <AnchorRailItem>
          <AnchorRailLink href="#nav-top" index="·">Top bar</AnchorRailLink>
        </AnchorRailItem>
      </AnchorRailList>
    </AnchorRailItem>
  </AnchorRailList>
</AnchorRail>
`})}),`
`,n.jsx(e.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"DO"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Cap nesting at ",n.jsx(e.strong,{children:"two levels"}),". Beyond that, the rail collapses to a flat ",n.jsx(e.code,{children:'index="·"'}),`
list.`]}),`
`,n.jsxs(e.li,{children:["Use the leading numeral consistently (",n.jsx(e.code,{children:"01"}),", ",n.jsx(e.code,{children:"02"}),", …) at the top level and ",n.jsx(e.code,{children:"·"}),` for
sub-items.`]}),`
`,n.jsxs(e.li,{children:["Update ",n.jsx(e.code,{children:"done"}),` after the user has scrolled past the section, not when they merely jump
to it.`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"DON'T"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Nest beyond two levels. The rail isn't an outline tool."}),`
`,n.jsxs(e.li,{children:["Use checkboxes for progress. The ",n.jsx(e.code,{children:"✓"})," glyph carries enough weight without the chrome."]}),`
`,n.jsx(e.li,{children:"Animate the active border. Glow + position is sufficient."}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["The outer landmark is ",n.jsx(e.code,{children:'<nav aria-label="in-page">'}),`. The active link is
`,n.jsx(e.code,{children:'aria-current="location"'}),` (per the WAI-ARIA spec for in-page anchors). Keyboard
navigation, focus-visible outlines, and `,n.jsx(e.code,{children:"data-hovered"}),` states are inherited from
react-aria's `,n.jsx(e.code,{children:"<Link>"}),"."]}),`
`,n.jsx(e.h2,{id:"all-stories",children:"All stories"}),`
`,n.jsx(c,{})]})}function b(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{b as default};
