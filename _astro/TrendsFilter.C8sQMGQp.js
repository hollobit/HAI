import{j as r}from"./jsx-runtime.u17CrQMm.js";import{r as o}from"./index.CNSOJBbx.js";import u from"./TrendChart.jVPgtcWf.js";const h=[["rd","연구개발"],["performance","기술 성능"],["responsible","책임 있는 AI"],["economy","경제"],["science_medicine","과학·의료"],["policy","정책"],["education","교육"],["public_opinion","여론"]];function v({metrics:s}){const[i,m]=o.useState(""),[t,l]=o.useState(new Set),[c,p]=o.useState(!1),d=o.useMemo(()=>{const e=i.trim().toLowerCase();return s.filter(a=>!(c&&a.country!=="South Korea"||t.size>0&&!t.has(a.category)||e&&!(a.name_en+" "+a.name_ko+" "+a.id).toLowerCase().includes(e)))},[s,i,t,c]),f=e=>{l(a=>{const n=new Set(a);return n.has(e)?n.delete(e):n.add(e),n})};return r.jsxs("div",{children:[r.jsxs("div",{className:"filter-bar",children:[r.jsx("input",{type:"search",placeholder:"지표 검색 (한글·영문·ID)",value:i,onChange:e=>m(e.target.value),"aria-label":"지표 검색"}),r.jsxs("label",{className:"korea-toggle",children:[r.jsx("input",{type:"checkbox",checked:c,onChange:e=>p(e.target.checked)}),"🇰🇷 한국 관련만"]})]}),r.jsxs("div",{className:"cat-bar",children:[h.map(([e,a])=>r.jsx("button",{className:`cat${t.has(e)?" active":""}`,onClick:()=>f(e),type:"button",children:a},e)),t.size>0&&r.jsx("button",{className:"cat reset",onClick:()=>l(new Set),type:"button",children:"✕ 초기화"})]}),r.jsxs("div",{className:"count",children:[r.jsx("strong",{children:d.length})," / ",s.length," 지표"]}),d.length===0?r.jsx("div",{className:"empty",children:"조건에 맞는 지표가 없습니다"}):r.jsx("div",{className:"grid",children:d.map(e=>r.jsxs("article",{className:"card",children:[r.jsxs("header",{children:[r.jsx("h2",{children:r.jsx("a",{href:`/HAI/metrics/${e.id}/`,children:e.name_ko})}),r.jsx("p",{className:"en",children:e.name_en}),r.jsxs("p",{className:"meta",children:[r.jsx("span",{children:e.category}),e.country&&r.jsxs("span",{children:["· ",e.country]})]})]}),r.jsx(u,{metric:e,height:260})]},e.id))}),r.jsx("style",{children:`
        .filter-bar { display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.75rem; }
        .filter-bar input[type=search] {
          flex: 1; padding: 0.6rem 0.85rem; border: 1px solid var(--border, #e2e8f0);
          border-radius: 8px; font-size: 0.95rem; background: var(--paper, #fff); color: var(--ink, #0f172a);
        }
        .korea-toggle { display: inline-flex; align-items: center; gap: 0.35rem; color: var(--ink, #0f172a); font-size: 0.9rem; white-space: nowrap; }

        .cat-bar { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1rem; }
        .cat {
          padding: 0.35rem 0.8rem; border: 1px solid var(--border, #e2e8f0); border-radius: 999px;
          background: var(--paper-alt, #f8fafc); color: var(--ink-muted, #64748b);
          font-size: 0.85rem; cursor: pointer;
        }
        .cat.active { background: var(--accent, #1d4ed8); color: white; border-color: var(--accent, #1d4ed8); }
        .cat.reset { color: var(--ink, #0f172a); }

        .count { margin-bottom: 1rem; font-size: 0.85rem; color: var(--ink-muted, #64748b); }
        .count strong { color: var(--accent, #1d4ed8); font-weight: 700; }

        .empty { padding: 2rem; text-align: center; color: var(--ink-muted, #64748b); border: 1px dashed var(--border, #e2e8f0); border-radius: 10px; }

        .grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 1rem;
        }
        .card {
          padding: 1.25rem; border: 1px solid var(--border, #e2e8f0); border-radius: 10px;
          background: var(--paper, #fff);
        }
        .card header { margin-bottom: 0.5rem; }
        .card h2 { font-size: 1.1rem; margin: 0; color: var(--ink, #0f172a); }
        .card .en { margin: 0.2rem 0 0; font-size: 0.85rem; color: var(--ink-muted, #64748b); }
        .card .meta { margin: 0.2rem 0 0; font-size: 0.8rem; color: var(--ink-subtle, #94a3b8); }
        .card .meta span { margin-right: 0.4rem; }
      `})]})}export{v as default};
