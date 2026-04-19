import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as s,P as a,S as d}from"./blocks-B1v88gfH.js";import{D as t}from"./Drawer.stories-nECQI96u.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";import"./Button-q-nZj2ek.js";import"./Button-BV1bEvDU.js";import"./filterDOMProps-Bh70n4Et.js";import"./useHover-okkbjNjR.js";import"./Hidden-BudTfhEC.js";import"./Drawer-DVi11VEV.js";import"./Dialog-CNgGrXQT.js";import"./useOverlayTriggerState-D7TnwnEU.js";import"./number-Bh7bbZmX.js";import"./I18nProvider-C_KRB3TE.js";import"./useControlledState-C5a7RtfP.js";import"./Collection-Clcb5Xin.js";import"./Autocomplete-CkZjWIY3.js";import"./getItemCount-Di8yoKZ4.js";import"./useCollection-NUsIjjhw.js";import"./useCollator-CsW49WvG.js";import"./Text-DF5e1-JU.js";import"./useLocalizedStringFormatter-hb7eYMDE.js";import"./PortalProvider-BRea_w2C.js";import"./useLabels-DQ_gQFKV.js";import"./VisuallyHidden-Cm-BANck.js";import"./animation-gJiBC3OQ.js";import"./Link-DvWYmIm_.js";import"./Modal-DNWCBzbO.js";function i(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t}),`
`,r.jsx(e.h1,{id:"drawer",children:"Drawer"}),`
`,r.jsxs(e.p,{children:[`Mobile / offcanvas navigation. Slides in from the left, traps focus, dims the surface
behind. The collapsed mirror of `,r.jsx(e.code,{children:"<TopBar>"})," + ",r.jsx(e.code,{children:"<SideRail>"}),"."]}),`
`,r.jsx(a,{}),`
`,r.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:r.jsx(e.code,{children:"<DrawerTrigger>"})})," — re-exported ",r.jsx(e.code,{children:"react-aria-components"})," ",r.jsx(e.code,{children:"<DialogTrigger>"}),`. Wraps
the trigger button + the `,r.jsx(e.code,{children:"<Drawer>"}),"."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:r.jsx(e.code,{children:"<Drawer>"})})," — ",r.jsx(e.code,{children:"<ModalOverlay>"})," + ",r.jsx(e.code,{children:"<Modal>"})," configured for left-edge offcanvas."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:r.jsx(e.code,{children:"<DrawerDialog aria-label>"})})," — the focus-trapping ",r.jsx(e.code,{children:"<Dialog>"}),". Required for a11y."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:r.jsx(e.code,{children:"<DrawerBrand onClose>"})}),` — header with brand wordmark + optional chamfered close
chip.`]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:r.jsx(e.code,{children:"<DrawerUser avatar name role>"})}),` — operator chip with hatched background. Skip on
unauthenticated surfaces.`]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:r.jsx(e.code,{children:"<DrawerNav>"})})," — ",r.jsx(e.code,{children:'<nav aria-label="drawer">'}),` container. Group with
`,r.jsx(e.code,{children:"<DrawerNavGroupLabel>"})," and add ",r.jsx(e.code,{children:"<DrawerNavLink href icon count>"})," items."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:r.jsx(e.code,{children:"<DrawerFoot>"})})," — ",r.jsx(e.code,{children:"<DrawerFootVer>"})," for the version pill, then anything else."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:r.jsx(e.code,{children:"<DrawerClose>"})})," — drop-in dismiss button (uses react-aria's ",r.jsx(e.code,{children:'slot="close"'}),")."]}),`
`]}),`
`,r.jsx(e.h2,{id:"composition",children:"Composition"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<DrawerTrigger>
  <Button intent="secondary">▸ OPEN</Button>
  <Drawer>
    <DrawerDialog aria-label="mobile">
      <DrawerBrand>VOIDFRAME</DrawerBrand>
      <DrawerUser avatar="OP" name="operator_kb9" role="ts/sci · node 04" />
      <DrawerNav>
        <DrawerNavGroupLabel>▌ PRIMARY</DrawerNavGroupLabel>
        <DrawerNavLink href="/ops" icon="◈" count="3" aria-current="page">
          OPERATIONS
        </DrawerNavLink>
      </DrawerNav>
      <DrawerFoot>
        <span>REL <DrawerFootVer>0.1.9a</DrawerFootVer></span>
        <span>04:23Z</span>
      </DrawerFoot>
    </DrawerDialog>
  </Drawer>
</DrawerTrigger>
`})}),`
`,r.jsx(e.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"DO"})}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["Mirror what's in ",r.jsx(e.code,{children:"<TopBar>"}),". The drawer is the ",r.jsx(e.em,{children:"same"}),` navigation, expanded for narrow
viewports — not a different IA.`]}),`
`,r.jsxs(e.li,{children:["Mark the active route with ",r.jsx(e.code,{children:'aria-current="page"'}),". Exactly one per render."]}),`
`,r.jsxs(e.li,{children:["Group with ",r.jsx(e.code,{children:"<DrawerNavGroupLabel>"})," (",r.jsx(e.code,{children:"▌ PRIMARY"}),", ",r.jsx(e.code,{children:"▌ SUPPORT"}),")."]}),`
`]}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"DON'T"})}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:`Push critical actions exclusively into the drawer. The trigger should be reachable;
the actions should also be reachable elsewhere when the trigger is hidden.`}),`
`,r.jsx(e.li,{children:`Animate the slide via spring. Use the system's flicker enter — already wired by
default.`}),`
`]}),`
`,r.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,r.jsxs(e.p,{children:["Built on react-aria's ",r.jsx(e.code,{children:"<Modal>"})," + ",r.jsx(e.code,{children:"<Dialog>"}),`. Focus is trapped while open; ESC and
outside-press dismiss; the trigger is restored on close. `,r.jsx(e.code,{children:"<DrawerDialog>"}),` requires an
`,r.jsx(e.code,{children:"aria-label"})," (or ",r.jsx(e.code,{children:"aria-labelledby"})," if your brand wordmark is the title)."]}),`
`,r.jsx(e.h2,{id:"all-stories",children:"All stories"}),`
`,r.jsx(d,{})]})}function V(n={}){const{wrapper:e}={...o(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(i,{...n})}):i(n)}export{V as default};
