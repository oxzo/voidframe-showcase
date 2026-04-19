import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{L as T}from"./Logo-FcWeSyeA.js";const V={title:"Shared/Logo",component:T,parameters:{layout:"centered",docs:{description:{component:"VOIDFRAME mark. A chevron inside a chamfered frame — reticle, wordmark, or strapline depending on variant. One `--rad-300` focal per view still applies: if the logo is present, most of that budget is spent here."}}},args:{variant:"glyph",surface:"abyss",title:"VOIDFRAME"},argTypes:{variant:{control:"select",options:["primary","horizontal","stencil","glyph","glyph-segmented","glyph-reticle"]},surface:{control:"inline-radio",options:["abyss","hazard","mono"]}}},a={args:{variant:"glyph",width:200}},e={args:{variant:"primary",width:520}},n={args:{variant:"horizontal",width:420}},s={args:{variant:"stencil",width:420}},t={name:"Glyph / Segmented",args:{variant:"glyph-segmented",width:200}},o={name:"Glyph / Reticle",args:{variant:"glyph-reticle",width:200}},i={name:"Surface / Hazard",args:{variant:"glyph",surface:"hazard",width:200},decorators:[p=>r.jsx("div",{style:{background:"var(--rad-300)",padding:"var(--s-7)",border:"1px solid var(--rad-500)"},children:r.jsx(p,{})})]},c={name:"Surface / Mono",args:{variant:"glyph",surface:"mono",width:200}},d={name:"Scale / 16–128px",args:{variant:"glyph"},render:p=>r.jsx("div",{style:{display:"flex",gap:40,alignItems:"flex-end"},children:[16,32,64,128].map(l=>r.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"center"},children:[r.jsx(T,{...p,width:l}),r.jsxs("span",{style:{fontFamily:"var(--font-data)",fontSize:10,letterSpacing:"0.2em",color:"var(--ink-500)"},children:[l,"PX"]})]},l))})};var m,g,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'glyph',
    width: 200
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,u,v;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    width: 520
  }
}`,...(v=(u=e.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var S,f,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'horizontal',
    width: 420
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,z,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'stencil',
    width: 420
  }
}`,...(j=(z=s.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var b,G,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Glyph / Segmented',
  args: {
    variant: 'glyph-segmented',
    width: 200
  }
}`,...(k=(G=t.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var M,R,F;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Glyph / Reticle',
  args: {
    variant: 'glyph-reticle',
    width: 200
  }
}`,...(F=(R=o.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var H,I,L;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Surface / Hazard',
  args: {
    variant: 'glyph',
    surface: 'hazard',
    width: 200
  },
  decorators: [Story => <div style={{
    background: 'var(--rad-300)',
    padding: 'var(--s-7)',
    border: '1px solid var(--rad-500)'
  }}>
        <Story />
      </div>]
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var O,_,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Surface / Mono',
  args: {
    variant: 'glyph',
    surface: 'mono',
    width: 200
  }
}`,...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var E,A,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Scale / 16–128px',
  args: {
    variant: 'glyph'
  },
  render: args => <div style={{
    display: 'flex',
    gap: 40,
    alignItems: 'flex-end'
  }}>
      {[16, 32, 64, 128].map(size => <div key={size} style={{
      display: 'grid',
      gap: 8,
      justifyItems: 'center'
    }}>
          <Logo {...args} width={size} />
          <span style={{
        fontFamily: 'var(--font-data)',
        fontSize: 10,
        letterSpacing: '0.2em',
        color: 'var(--ink-500)'
      }}>
            {size}PX
          </span>
        </div>)}
    </div>
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const X=["Glyph","Primary","Horizontal","Stencil","GlyphSegmented","GlyphReticle","SurfaceHazard","SurfaceMono","ScaleFavicon"],C=Object.freeze(Object.defineProperty({__proto__:null,Glyph:a,GlyphReticle:o,GlyphSegmented:t,Horizontal:n,Primary:e,ScaleFavicon:d,Stencil:s,SurfaceHazard:i,SurfaceMono:c,__namedExportsOrder:X,default:V},Symbol.toStringTag,{value:"Module"}));export{C as L};
