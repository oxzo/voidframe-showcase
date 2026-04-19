import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{A as d,a,b as e,c as r,d as c}from"./AnchorRail-BM7gWL5i.js";const s={title:"Shared/AnchorRail",component:d,parameters:{layout:"padded",docs:{description:{component:"Right-aligned in-page TOC with scroll-spy. Two levels of nesting, numbered. Reading-progress at the foot. The host wires the scroll observer and updates `isCurrent` on the active link."}}}},n={render:()=>i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 260px",minHeight:420},children:[i.jsx("div",{style:{padding:20,fontFamily:"var(--font-data)",fontSize:11,color:"var(--ink-300)",border:"1px solid var(--void-300)",borderRight:0,background:"repeating-linear-gradient(0deg, transparent 0 22px, rgba(255,157,11,.04) 22px 23px), var(--void-050)",display:"grid",placeItems:"center",letterSpacing:"0.2em",textTransform:"uppercase"},children:i.jsxs("div",{style:{textAlign:"center",color:"var(--ink-500)"},children:["ARTICLE BODY / 4,213 WORDS",i.jsx("div",{style:{color:"var(--rad-300)",fontSize:9,marginTop:8},children:"▸ SCROLL-SPY ACTIVE"})]})}),i.jsx(d,{label:"▌ ON THIS PAGE",foot:i.jsxs(i.Fragment,{children:[i.jsx(c,{children:"READ 47%"}),i.jsx("span",{children:"REV 084"})]}),children:i.jsxs(a,{children:[i.jsx(e,{children:i.jsx(r,{href:"#overview",index:"01",done:!0,children:"Overview"})}),i.jsxs(e,{children:[i.jsx(r,{href:"#principles",index:"02",done:!0,children:"Principles"}),i.jsxs(a,{children:[i.jsx(e,{children:i.jsx(r,{href:"#legibility",index:"·",children:"Legibility"})}),i.jsx(e,{children:i.jsx(r,{href:"#density",index:"·",children:"Density"})})]})]}),i.jsxs(e,{children:[i.jsx(r,{href:"#nav",index:"03",isCurrent:!0,children:"Navigation"}),i.jsxs(a,{children:[i.jsx(e,{children:i.jsx(r,{href:"#nav-top",index:"·",children:"Top bar"})}),i.jsx(e,{children:i.jsx(r,{href:"#nav-side",index:"·",children:"Side rail"})}),i.jsx(e,{children:i.jsx(r,{href:"#nav-cmd",index:"·",children:"Command bar"})})]})]}),i.jsx(e,{children:i.jsx(r,{href:"#dialogs",index:"04",children:"Dialogs"})}),i.jsx(e,{children:i.jsx(r,{href:"#grids",index:"05",children:"Data grids"})}),i.jsx(e,{children:i.jsx(r,{href:"#motion",index:"06",children:"Motion"})})]})})]})};var o,l,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 260px',
    minHeight: 420
  }}>
      <div style={{
      padding: 20,
      fontFamily: 'var(--font-data)',
      fontSize: 11,
      color: 'var(--ink-300)',
      border: '1px solid var(--void-300)',
      borderRight: 0,
      background: 'repeating-linear-gradient(0deg, transparent 0 22px, rgba(255,157,11,.04) 22px 23px), var(--void-050)',
      display: 'grid',
      placeItems: 'center',
      letterSpacing: '0.2em',
      textTransform: 'uppercase'
    }}>
        <div style={{
        textAlign: 'center',
        color: 'var(--ink-500)'
      }}>
          ARTICLE BODY / 4,213 WORDS
          <div style={{
          color: 'var(--rad-300)',
          fontSize: 9,
          marginTop: 8
        }}>
            ▸ SCROLL-SPY ACTIVE
          </div>
        </div>
      </div>
      <AnchorRail label="▌ ON THIS PAGE" foot={<>
            <AnchorRailFootK>READ 47%</AnchorRailFootK>
            <span>REV 084</span>
          </>}>
        <AnchorRailList>
          <AnchorRailItem>
            <AnchorRailLink href="#overview" index="01" done>
              Overview
            </AnchorRailLink>
          </AnchorRailItem>
          <AnchorRailItem>
            <AnchorRailLink href="#principles" index="02" done>
              Principles
            </AnchorRailLink>
            <AnchorRailList>
              <AnchorRailItem>
                <AnchorRailLink href="#legibility" index="·">
                  Legibility
                </AnchorRailLink>
              </AnchorRailItem>
              <AnchorRailItem>
                <AnchorRailLink href="#density" index="·">
                  Density
                </AnchorRailLink>
              </AnchorRailItem>
            </AnchorRailList>
          </AnchorRailItem>
          <AnchorRailItem>
            <AnchorRailLink href="#nav" index="03" isCurrent>
              Navigation
            </AnchorRailLink>
            <AnchorRailList>
              <AnchorRailItem>
                <AnchorRailLink href="#nav-top" index="·">
                  Top bar
                </AnchorRailLink>
              </AnchorRailItem>
              <AnchorRailItem>
                <AnchorRailLink href="#nav-side" index="·">
                  Side rail
                </AnchorRailLink>
              </AnchorRailItem>
              <AnchorRailItem>
                <AnchorRailLink href="#nav-cmd" index="·">
                  Command bar
                </AnchorRailLink>
              </AnchorRailItem>
            </AnchorRailList>
          </AnchorRailItem>
          <AnchorRailItem>
            <AnchorRailLink href="#dialogs" index="04">
              Dialogs
            </AnchorRailLink>
          </AnchorRailItem>
          <AnchorRailItem>
            <AnchorRailLink href="#grids" index="05">
              Data grids
            </AnchorRailLink>
          </AnchorRailItem>
          <AnchorRailItem>
            <AnchorRailLink href="#motion" index="06">
              Motion
            </AnchorRailLink>
          </AnchorRailItem>
        </AnchorRailList>
      </AnchorRail>
    </div>
}`,...(t=(l=n.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const h=["ArticleSpy"],x=Object.freeze(Object.defineProperty({__proto__:null,ArticleSpy:n,__namedExportsOrder:h,default:s},Symbol.toStringTag,{value:"Module"}));export{x as A};
