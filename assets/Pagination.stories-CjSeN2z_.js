import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-m70KUGy2.js";import{P as l,a as s,b as P,c as S,d as m,e as o}from"./Pagination-CKPo2PIO.js";const h={title:"Shared/Pagination",component:l,parameters:{layout:"padded",docs:{description:{component:"Result-set pagination. Zero-padded page chips, FIRST / LAST bookends, ellipsis for the elided range, trailing row counter. No 'jump to' input — that's what the CommandBar is for."}}}},e={render:()=>{function d(){const[n,i]=u.useState(4),c=[1,2,3,4,5,"ellipsis",47];return a.jsxs(l,{children:[a.jsx(s,{edge:!0,onClick:()=>i(1),disabled:n===1,children:"« FIRST"}),a.jsx(s,{onClick:()=>i(t=>Math.max(1,t-1)),disabled:n===1,children:"‹ PREV"}),c.map(t=>t==="ellipsis"?a.jsx(P,{},"ellipsis"):a.jsx(S,{page:t,isCurrent:t===n,onClick:()=>i(t)},t)),a.jsx(s,{onClick:()=>i(t=>Math.min(47,t+1)),disabled:n===47,children:"NEXT ›"}),a.jsx(s,{edge:!0,onClick:()=>i(47),disabled:n===47,children:"LAST »"}),a.jsxs(m,{children:[a.jsxs("span",{children:["PG ",a.jsx(o,{children:String(n).padStart(2,"0")})," / 47"]}),a.jsx("span",{children:"|"}),a.jsxs("span",{children:["ROWS"," ",a.jsx(o,{children:String((n-1)*20+1).padStart(4,"0")}),"–",a.jsx(o,{children:String(n*20).padStart(4,"0")})," of"," ",a.jsx(o,{children:"0940"})]})]})]})}return a.jsx(d,{})}};var r,p,g;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    function Demo() {
      const [page, setPage] = useState(4);
      const pages: Array<number | 'ellipsis'> = [1, 2, 3, 4, 5, 'ellipsis', 47];
      return <Pagination>
          <PaginationButton edge onClick={() => setPage(1)} disabled={page === 1}>
            « FIRST
          </PaginationButton>
          <PaginationButton onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
            ‹ PREV
          </PaginationButton>
          {pages.map(p => p === 'ellipsis' ? <PaginationEllipsis key="ellipsis" /> : <PaginationPage key={p} page={p} isCurrent={p === page} onClick={() => setPage(p)} />)}
          <PaginationButton onClick={() => setPage(p => Math.min(47, p + 1))} disabled={page === 47}>
            NEXT ›
          </PaginationButton>
          <PaginationButton edge onClick={() => setPage(47)} disabled={page === 47}>
            LAST »
          </PaginationButton>
          <PaginationStatus>
            <span>
              PG <PaginationStatusN>{String(page).padStart(2, '0')}</PaginationStatusN> / 47
            </span>
            <span>|</span>
            <span>
              ROWS{' '}
              <PaginationStatusN>{String((page - 1) * 20 + 1).padStart(4, '0')}</PaginationStatusN>–
              <PaginationStatusN>{String(page * 20).padStart(4, '0')}</PaginationStatusN> of{' '}
              <PaginationStatusN>0940</PaginationStatusN>
            </span>
          </PaginationStatus>
        </Pagination>;
    }
    return <Demo />;
  }
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const x=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{k as P};
