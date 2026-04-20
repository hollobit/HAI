import{j as r}from"./jsx-runtime.u17CrQMm.js";import{r as n}from"./index.D0zW3GPc.js";function g({quotes:a}){const[s,d]=n.useState(""),[l,c]=n.useState(null),[o,m]=n.useState(""),p=n.useMemo(()=>[...new Set(a.map(e=>e.year))].sort((e,t)=>t-e),[a]),u=n.useMemo(()=>[...new Set(a.map(e=>e.chapter))].sort(),[a]),i=n.useMemo(()=>{const e=s.trim().toLowerCase();return a.filter(t=>!(l!==null&&t.year!==l||o&&t.chapter!==o||e&&!(t.text_en+" "+t.context_ko).toLowerCase().includes(e)))},[a,s,l,o]);return r.jsxs("div",{children:[r.jsxs("div",{className:"toolbar",children:[r.jsx("input",{type:"search",placeholder:"본문/부연에서 검색…",value:s,onChange:e=>d(e.target.value),"aria-label":"인용 검색"}),r.jsxs("select",{value:l??"",onChange:e=>c(e.target.value?Number(e.target.value):null),"aria-label":"연도 필터",children:[r.jsx("option",{value:"",children:"모든 판본"}),p.map(e=>r.jsxs("option",{value:e,children:[e,"판"]},e))]}),r.jsxs("select",{value:o,onChange:e=>m(e.target.value),"aria-label":"챕터 필터",children:[r.jsx("option",{value:"",children:"모든 챕터"}),u.map(e=>r.jsx("option",{value:e,children:e},e))]})]}),r.jsxs("p",{className:"count",children:[r.jsx("strong",{children:i.length})," / ",a.length," 인용"]}),i.length===0?r.jsx("div",{className:"empty",children:"조건에 맞는 인용이 없습니다"}):r.jsx("ul",{className:"list",children:i.map(e=>r.jsxs("li",{id:e.id,children:[r.jsx("blockquote",{lang:"en",children:e.text_en}),r.jsxs("p",{className:"meta",children:["Stanford HAI AI Index ",e.year,", ch. ",e.chapter,", p.",e.page," · ",r.jsxs("a",{href:`#${e.id}`,children:["#",e.id]})]}),e.context_ko&&r.jsx("p",{className:"ko",children:e.context_ko})]},e.id))}),r.jsx("style",{children:`
        .toolbar {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .toolbar input, .toolbar select {
          padding: 0.55rem 0.75rem;
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 8px;
          font-size: 0.95rem;
          background: var(--paper, #fff);
          color: var(--ink, #0f172a);
        }
        .toolbar select { min-width: 140px; }

        .count { font-size: 0.85rem; color: var(--ink-muted, #64748b); margin: 0 0 1rem; }
        .count strong { color: var(--accent, #1d4ed8); font-weight: 700; }

        .empty {
          padding: 2rem; text-align: center; color: var(--ink-muted, #64748b);
          border: 1px dashed var(--border, #e2e8f0); border-radius: 10px;
        }

        .list { list-style: none; padding: 0; margin: 0; }
        .list li {
          padding: 1.25rem 1.5rem; margin: 0.75rem 0;
          border-left: 3px solid var(--accent, #1d4ed8);
          background: var(--paper-alt, #f8fafc);
          border-radius: 0 6px 6px 0;
        }
        blockquote { margin: 0; font-family: Georgia, serif; color: var(--ink, #0f172a); }
        .meta { margin: 0.5rem 0 0.25rem; font-size: 0.8rem; color: var(--ink-muted, #64748b); }
        .meta a { color: inherit; text-underline-offset: 2px; }
        .ko { margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--ink-muted, #64748b); }

        @media (max-width: 640px) {
          .toolbar { grid-template-columns: 1fr; }
        }
      `})]})}export{g as default};
