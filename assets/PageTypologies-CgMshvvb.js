import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as o,M as r}from"./blocks-B1v88gfH.js";import"./preload-helper-D06GLZpi.js";import"./iframe-m70KUGy2.js";import"./index-CHjX1sYF.js";import"./index-CWkkoyg6.js";import"./index-Cywuz0hd.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Foundations/Page Typologies"}),`
`,e.jsx(n.h1,{id:"page-typologies",children:"Page Typologies"}),`
`,e.jsx(n.p,{children:`Most "bad" pages aren't ugly — they're misaligned: a transactional checkout designed
like an informational article, a landing page with homepage-style navigation that bleeds
attention. Knowing which typology a view serves is upstream of layout, copy, and
component choice.`}),`
`,e.jsx(n.p,{children:"This page does two things:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Maps the common web-page taxonomy onto ",e.jsx(n.strong,{children:"what VOIDFRAME is for"}),`. VOIDFRAME is an
operator system. Most of the commercial web (marketing, e-commerce, portfolio,
press) is `,e.jsx(n.strong,{children:"out of canon"}),` here, and that's a deliberate narrowing — if a proposed
view belongs to one of the out-of-canon typologies, that's a design discussion,
not a styling problem.`]}),`
`,e.jsxs(n.li,{children:["Gives the author of a new page a short ",e.jsx(n.strong,{children:"intent-check"}),` to run before laying anything
out.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`The underlying taxonomy is borrowed from mainstream web UX; this page translates it.
The canon rules in `,e.jsx(n.a,{href:"./RulesOfEngagement.mdx",children:"Rules of Engagement"}),` and the voice rules
in `,e.jsx(n.a,{href:"./ToneAndVoice.mdx",children:"Tone & Voice"})," trump anything derived from the typology."]}),`
`,e.jsx(n.h2,{id:"intent-buckets",children:"Intent buckets"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Intent"}),e.jsx(n.th,{children:"Operator framing"}),e.jsx(n.th,{children:"VOIDFRAME surfaces"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Informational"})}),e.jsx(n.td,{children:"Answer a question, read a record, reconstruct an incident."}),e.jsx(n.td,{children:"Dashboard, incident timeline, deploy log, audit / changelog, article (rare)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Navigational"})}),e.jsx(n.td,{children:"Get somewhere known."}),e.jsx(n.td,{children:"Homepage (marketing), topbar/siderail search, command palette, 404."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Commercial"})}),e.jsx(n.td,{children:"Compare options before committing."}),e.jsxs(n.td,{children:["Largely ",e.jsx(n.strong,{children:"out of canon"})," — VOIDFRAME isn't a storefront. Pricing is a known stress test."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Transactional"})}),e.jsx(n.td,{children:"Execute a named action under friction."}),e.jsx(n.td,{children:"Auth / session lock, signup / login, destructive confirm dialogs, checkout (out of canon)."})]})]})]}),`
`,e.jsxs(n.p,{children:["The four-bucket model is a ",e.jsx(n.strong,{children:"design prompt, not a classifier"}),`. Real views often mix
informational and transactional (a dashboard with a destructive action embedded). Use
the bucket to decide the dominant frame, then the typology section below fixes the
rendering.`]}),`
`,e.jsx(n.h2,{id:"typologies-voidframe-serves",children:"Typologies VOIDFRAME serves"}),`
`,e.jsx(n.h3,{id:"dashboard--core-fit",children:"Dashboard — core fit"}),`
`,e.jsxs(n.p,{children:[`Operational command center. Progressive disclosure: summaries and alarms above the
fold, drill-downs behind `,e.jsx(n.code,{children:"Tabs"})," or ",e.jsx(n.code,{children:"Popover"}),". Left ",e.jsx(n.code,{children:"SideRail"}),` for primary nav,
`,e.jsx(n.code,{children:"TopBar"}),` for operator identity and search. Modular widgets so roles with different
concerns see different surfaces without forking the layout.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"AppShell"}),", ",e.jsx(n.code,{children:"TopBar"}),", ",e.jsx(n.code,{children:"SideRail"}),", ",e.jsx(n.code,{children:"Meter"}),", ",e.jsx(n.code,{children:"ProgressRing"}),", ",e.jsx(n.code,{children:"Table"}),`,
`,e.jsx(n.code,{children:"Toast"}),", ",e.jsx(n.code,{children:"MiniMap"}),", ",e.jsx(n.code,{children:"Tooltip"}),", ",e.jsx(n.code,{children:"Breadcrumbs"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canon notes:"})," one ",e.jsx(n.code,{children:"--rad-300"}),` focal — the single thing on screen the operator
must act on. Drill-down must not become drill-away: every progressive-disclosure
widget needs a `,e.jsx(n.code,{children:"raw"})," / ",e.jsx(n.code,{children:"details"})," escape hatch."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Existing example:"})," ",e.jsx(n.code,{children:"src/pages/voidframe/ops-console/_OpsConsole.tsx"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"incident-timeline--post-mortem--core-fit",children:"Incident timeline / post-mortem — core fit"}),`
`,e.jsx(n.p,{children:`A single incident reconstructed after the fact: when it started, what fired, what
the operator did, when containment held. Reads informationally but carries the voice
of a forensic log.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"Stepper"})," (detect → triage → contain → resolve), ",e.jsx(n.code,{children:"Table"}),` (event
rows), `,e.jsx(n.code,{children:"Tabs"})," (TIMELINE / GRAPH / RAW), ",e.jsx(n.code,{children:"Breadcrumbs"}),", ",e.jsx(n.code,{children:"AnchorRail"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canon notes:"})," timestamps in 24h UTC with trailing ",e.jsx(n.code,{children:"Z"}),`. Empty-phase states say
`,e.jsx(n.code,{children:"SILENT"}),", not ",e.jsx(n.code,{children:"No activity"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status in plan:"})," Tier 1 candidate in ",e.jsx(n.code,{children:"docs/plans/storybook-example-views.md"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"search--command-palette--core-fit",children:"Search / command palette — core fit"}),`
`,e.jsx(n.p,{children:`Fallback when nav fails, and primary input for keyboard operators. Results grouped
by source (files, operators, commands, sectors), recent history pinned, autocomplete,
typo tolerance, persistent query display.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"CommandBar"}),", ",e.jsx(n.code,{children:"Menu"}),", ",e.jsx(n.code,{children:"Tabs"})," (by source), ",e.jsx(n.code,{children:"Kbd"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canon notes:"}),` zero-results states must offer alternatives (recent queries,
popular sectors) — never a dead end. Prefix matches with `,e.jsx(n.code,{children:"▸"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status in plan:"})," Tier 1 candidate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"deploy-log--tail-view--fit",children:"Deploy log / tail view — fit"}),`
`,e.jsxs(n.p,{children:["Infinite-scrolling dense data. ",e.jsx(n.code,{children:"SubNav"})," filters (ALL / ERR / WRN / OK), ",e.jsx(n.code,{children:"Pagination"}),`
at the foot, row selection opens a `,e.jsx(n.code,{children:"Popover"}),` detail. This is one of the rare places
infinite scroll is acceptable — it's a hedonic tail, not goal-directed browsing.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"Table"}),", ",e.jsx(n.code,{children:"SubNav"}),", ",e.jsx(n.code,{children:"Pagination"}),", ",e.jsx(n.code,{children:"Popover"}),", ",e.jsx(n.code,{children:"Tooltip"}),`,
`,e.jsx(n.code,{children:"ProgressRing"})," (tail indicator)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canon notes:"})," preserve scroll position on back-navigation from detail overlays."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status in plan:"})," Tier 2 candidate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"audit--changelog-detail--fit",children:"Audit / changelog detail — fit"}),`
`,e.jsxs(n.p,{children:["A versioned record. Left ",e.jsx(n.code,{children:"AnchorRail"}),` for versions, main column for the entry, right
rail for related changes.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"AnchorRail"}),", ",e.jsx(n.code,{children:"Table"}),", ",e.jsx(n.code,{children:"Tabs"}),` (DIFF / NOTES / LINKS),
`,e.jsx(n.code,{children:"Breadcrumbs"}),", ",e.jsx(n.code,{children:"Pagination"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status in plan:"})," Tier 2 candidate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"settings--operator-profile--fit",children:"Settings / operator profile — fit"}),`
`,e.jsxs(n.p,{children:["Where ordinary product work lives. ",e.jsx(n.code,{children:"Tabs"}),` across PROFILE / AUTH / THEME /
NOTIFICATIONS / DANGER ZONE. Destructive actions confirm in `,e.jsx(n.code,{children:"Dialog"}),` with the
consequence named (see Tone & Voice).`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"Tabs"}),", ",e.jsx(n.code,{children:"Dialog"}),", ",e.jsx(n.code,{children:"Drawer"})," (mobile), ",e.jsx(n.code,{children:"Menu"}),", ",e.jsx(n.code,{children:"ThemeToggle"}),`,
`,e.jsx(n.code,{children:"Toast"}),", ",e.jsx(n.code,{children:"Button"})," (ghost / destructive), ",e.jsx(n.code,{children:"Breadcrumbs"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canon notes:"})," destructive confirms do not say ",e.jsx(n.code,{children:"Are you sure?"}),`. They state the
consequence and present two buttons. See `,e.jsx(n.a,{href:"./ToneAndVoice.mdx",children:"Tone & Voice"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status in plan:"})," Tier 2 candidate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"auth--session-lock--fit",children:"Auth / session lock — fit"}),`
`,e.jsxs(n.p,{children:["Full-page ",e.jsx(n.code,{children:"Dialog"}),`. The ticker already says "session expires in 14 min" — this is
what happens when it does. Strip nav. Guest-equivalent path is `,e.jsx(n.code,{children:"SIGN OUT"}),`, not
`,e.jsx(n.code,{children:"Maybe later"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"Dialog"})," at page scale, text-field pattern from ",e.jsx(n.code,{children:"_Home"}),`'s code
sample, `,e.jsx(n.code,{children:"Button"})," (primary + ghost), ",e.jsx(n.code,{children:"ProgressRing"})," (countdown), ",e.jsx(n.code,{children:"Toast"}),` (resume
failure).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canon notes:"}),` strips nav in exchange for mid-flow policy access — use an inline
accordion or slide-out `,e.jsx(n.code,{children:"Drawer"}),` to expose policy / recovery without restoring the
global shell. One `,e.jsx(n.code,{children:"--rad-300"}),": the resume CTA, not the countdown."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status in plan:"})," Tier 2 candidate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"onboarding--first-run--fit-underserved",children:"Onboarding / first-run — fit, underserved"}),`
`,e.jsx(n.p,{children:`Shepherds a signup to its first real action. Never a blank empty state — seed a
sample sector, a dummy incident, a starter operator identity. Prefer progressive,
contextual disclosure over modal step-through tours. Pre-fill the first step to
bootstrap momentum.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"Stepper"})," (non-linear, dismissible), ",e.jsx(n.code,{children:"Toast"}),", ",e.jsx(n.code,{children:"Dialog"}),", ",e.jsx(n.code,{children:"Meter"}),`
(checklist completion), `,e.jsx(n.code,{children:"Popover"})," (contextual hint), ",e.jsx(n.code,{children:"Button"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canon notes:"})," the checklist ",e.jsx(n.code,{children:"Meter"}),` is progress, not pressure — no countdown,
no strikethrough. Use `,e.jsx(n.code,{children:"tox-300"})," for completion, not ",e.jsx(n.code,{children:"rad-300"}),`; onboarding doesn't
earn the primary focal.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status in plan:"})," not yet listed — gap. Recommend adding as a Tier 2 candidate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"404--error-page--fit-cheap",children:"404 / error page — fit, cheap"}),`
`,e.jsx(n.p,{children:`"SIGNAL LOST". Gives us a real error surface instead of a browser stub. Works in
both themes, minimal primitives.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"Logo"}),", ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"Meter"})," (as signal strength)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status in plan:"})," Tier 3 candidate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"thank-you--confirmation--fit-small",children:"Thank-you / confirmation — fit, small"}),`
`,e.jsxs(n.p,{children:[`Peak-trust moment. Confirm and reassure first (order / incident / request ID, next
steps, expected duration) to blunt post-action anxiety. `,e.jsx(n.strong,{children:"Then"}),` leverage momentum:
related next action, reinforcing status, optional follow-up path.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primitives:"})," ",e.jsx(n.code,{children:"Dialog"})," or ",e.jsx(n.code,{children:"AppShell"})," focused variant, ",e.jsx(n.code,{children:"Meter"}),` (confirmation
progress), `,e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"Toast"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canon notes:"})," no celebratory language; the system doesn't cheerlead. ",e.jsx(n.code,{children:"OK // SYNC_COMPLETE"})," beats ",e.jsx(n.code,{children:"Great, you're all set!"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status in plan:"}),` not yet listed — recommend adding as a Tier 3 candidate next
to the 404.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"homepage--partial-fit-voiced",children:"Homepage — partial fit, voiced"}),`
`,e.jsxs(n.p,{children:[`Marketing surface. The canon rule against "false floors" (hero media that perfectly
fills the viewport, full-width dividers that look like a page end) applies.
VOIDFRAME's existing `,e.jsx(n.code,{children:"src/pages/_Home.tsx"}),` is a worked example: monospace,
segmented, no stock photography, ticker + changelog instead of a hero image.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canon notes:"}),` logo top-left for LTR; keep it there. No testimonial carousels.
No emoji. The only `,e.jsx(n.code,{children:"--rad-300"})," on the page is the primary CTA."]}),`
`]}),`
`,e.jsx(n.h2,{id:"typologies-that-are-out-of-canon",children:"Typologies that are out of canon"}),`
`,e.jsx(n.p,{children:`These belong to the mainstream commercial web but do not fit VOIDFRAME's operator
frame. If a request comes in to build one of these in VOIDFRAME voice, the first
question is whether the system is actually the right place for it.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"About Us"}),` — VOIDFRAME doesn't humanize the entity; the system doesn't emote.
Mission statements and team photography clash with the Tone & Voice rules.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contact / inquiry form"}),` — a generic contact form isn't the house style. If
operators need to reach support, use a named channel (`,e.jsx(n.code,{children:"OPERATOR_HANDOFF"}),`,
`,e.jsx(n.code,{children:"ESCALATE"}),"), not a freeform textarea."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FAQ"})," — self-service support content is better served as inline ",e.jsx(n.code,{children:"Tooltip"}),` /
`,e.jsx(n.code,{children:"Popover"}),` guidance next to the control it explains, or as a dedicated runbook
page. A sprawling FAQ page reads as untriaged documentation.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Press / newsroom"})," — out of scope."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Privacy / Terms"}),` — required to exist; they live as long-form documents with
minimum styling, not as designed surfaces.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Article / blog"}),` — allowed but rare. If a post exists, it follows the
informational scan-pattern rules (descriptive subheadings, bullets, sticky TOC).
No "marketese".`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Category (PLP) / PDP / Checkout"}),` — VOIDFRAME is not a commerce system. The
checkout-specific rules (strip nav, guest checkout, address autocomplete) do not
translate; the analog is the destructive-action `,e.jsx(n.code,{children:"Dialog"}),`, which is already
covered by the Auth / session-lock typology.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pricing (marketing)"})," — ",e.jsx(n.strong,{children:"known stress test"}),`. Tier 3 in the example-views
plan. If built, it's an intentional probe of where the aesthetic breaks, not a
template.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Signup with social login as primary"}),` — do not lead with social SSO. Email
fallback is the identity path; social login, if offered, is secondary.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Portfolio"})," — out of scope."]}),`
`]}),`
`,e.jsx(n.h2,{id:"intent-check-before-laying-anything-out",children:"Intent-check before laying anything out"}),`
`,e.jsx(n.p,{children:`Run this before picking components for a new page or feature. Five lines; if any
answer is vague, the layout won't save you.`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Intent bucket."})," Informational, navigational, commercial, transactional?"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary action."}),` What is the one thing the operator must do on this view?
(If more than one, you don't have a single view yet.)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Attention ratio."}),` Interactive links ÷ conversion goals. Landing / auth-lock
push toward 1:1. Dashboard accepts many:many but still has one `,e.jsx(n.code,{children:"--rad-300"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard path."}),` Can the primary action be reached from a cold page-load
using only the keyboard?`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Empty + error states."}),` Both exist and are honest before the happy path is
considered done. No "coming soon" placeholders.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The checklist applies to anything under ",e.jsx(n.code,{children:"src/pages/"})," or any ",e.jsx(n.code,{children:"src/features/<name>/"}),`
that renders a full view.`]}),`
`,e.jsx(n.h2,{id:"scope-caveat",children:"Scope caveat"}),`
`,e.jsx(n.p,{children:`The source taxonomy this page derives from is biased toward commercial web
(marketing, e-commerce, SaaS). VOIDFRAME is biased toward operator consoles. Read
the mapping above as "VOIDFRAME's version of each typology" — not as a complete
survey of what's possible. Content-first and community surfaces (documentation,
forums, wikis, feeds) aren't mapped at all.`}),`
`,e.jsx(n.h2,{id:"related",children:"Related"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"./RulesOfEngagement.mdx",children:"Rules of Engagement"}),` — the canon any typology has to
hold.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"./ToneAndVoice.mdx",children:"Tone & Voice"})," — how labels and system broadcasts speak."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"docs/plans/storybook-example-views.md"}),` — concrete view candidates, tagged with
typology.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"notes/web-page-typologies.md"}),` (or the equivalent raw note) — the underlying
taxonomy this page condenses.`]}),`
`]})]})}function j(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
