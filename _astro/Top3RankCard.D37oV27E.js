import{j as e}from"./jsx-runtime.u17CrQMm.js";function l(r,n){return n==="percent"?r<2?`${(r*100).toFixed(0)}%`:`${r.toFixed(0)}%`:n==="USD_billion"?`$${Math.round(r)}B`:n==="thousands"?`${Math.round(r)}k`:n==="index"?r.toFixed(1):Number.isInteger(r)?r.toLocaleString("en"):r.toFixed(1)}function g(r,n){return r<=3?"top3":r<=n*.25?"good":r<=n*.5?"mid":"weak"}function h({labelKo:r,labelEn:n,koreaRank:i,total:t,koreaValue:u,unit:s,top3:d,top10:c,deficitRatio:m,noteKo:p}){const f=g(i,t),b=Math.max(...c.map(a=>a.value),1);return e.jsxs("article",{className:`top3-card cat-${f}`,children:[e.jsxs("header",{children:[e.jsx("h3",{children:r}),e.jsx("p",{className:"en",children:n}),e.jsxs("div",{className:"rank-line",children:[e.jsxs("span",{className:`rank-pill ${f}`,children:["🇰🇷 ",i,"위 / ",t,"개국"]}),e.jsx("span",{className:"korea-val",children:l(u,s)})]})]}),e.jsxs("div",{className:"top3-preview",children:[e.jsx("strong",{children:"Top 3"}),d.map((a,o)=>e.jsxs("div",{className:"top3-row",children:[e.jsx("span",{className:"medal",children:["🥇","🥈","🥉"][o]}),e.jsx("span",{className:"c-name",children:a.country}),e.jsx("span",{className:"c-val",children:l(a.value,s)})]},a.country))]}),e.jsxs("details",{className:"expanded",children:[e.jsx("summary",{children:"전체 Top 10 보기"}),e.jsx("ol",{className:"bars",children:c.map((a,o)=>e.jsxs("li",{className:a.is_korea?"k":"",children:[e.jsx("span",{className:"n",children:o+1}),e.jsx("span",{className:"name",children:a.country}),e.jsx("div",{className:"bar-wrap",children:e.jsx("div",{className:"bar",style:{width:`${a.value/b*100}%`}})}),e.jsx("span",{className:"v",children:l(a.value,s)})]},`${a.country}-${o}`))})]}),m!==null&&i>3&&e.jsxs("p",{className:"deficit",children:["3위(",d[2].country,") 대비 한국은"," ",e.jsxs("strong",{children:[(m*100).toFixed(0),"%"]})," 수준"]}),p&&e.jsx("p",{className:"note",children:p}),e.jsx("style",{children:`
        .top3-card {
          padding: 1rem 1.1rem 0.85rem;
          border: 1px solid var(--border, #e2e8f0);
          border-left: 5px solid;
          border-radius: 10px;
          background: var(--paper, #fff);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .top3-card.cat-top3 { border-left-color: #22c55e; }
        .top3-card.cat-good { border-left-color: #3b82f6; }
        .top3-card.cat-mid { border-left-color: #f59e0b; }
        .top3-card.cat-weak { border-left-color: #ef4444; }

        .top3-card h3 { font-size: 1rem; margin: 0; color: var(--ink, #0f172a); line-height: 1.35; }
        .top3-card .en { margin: 0.15rem 0 0.5rem; font-size: 0.78rem; color: var(--ink-muted, #64748b); }
        .rank-line { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; }
        .rank-pill {
          font-size: 0.8rem; padding: 0.15rem 0.6rem; border-radius: 999px; font-weight: 600;
          background: #f8fafc; color: #0f172a;
        }
        .rank-pill.top3 { background: rgba(34, 197, 94, 0.15); color: #15803d; }
        .rank-pill.good { background: rgba(59, 130, 246, 0.12); color: #1d4ed8; }
        .rank-pill.mid { background: rgba(245, 158, 11, 0.15); color: #b45309; }
        .rank-pill.weak { background: rgba(239, 68, 68, 0.12); color: #b91c1c; }
        .korea-val { font-size: 1.1rem; font-weight: 700; color: var(--ink, #0f172a); }

        .top3-preview {
          padding: 0.5rem 0.75rem;
          background: var(--paper-alt, #f8fafc);
          border-radius: 6px;
          font-size: 0.8rem;
        }
        .top3-preview > strong { display: block; font-size: 0.7rem; color: var(--ink-muted, #64748b); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.3rem; }
        .top3-row { display: grid; grid-template-columns: 1.5rem 1fr auto; gap: 0.4rem; align-items: center; margin: 0.15rem 0; }
        .medal { font-size: 0.9rem; }
        .c-name { color: var(--ink, #0f172a); font-weight: 500; }
        .c-val { font-variant-numeric: tabular-nums; color: var(--ink-muted, #64748b); }

        .expanded summary { font-size: 0.75rem; color: var(--ink-muted, #64748b); cursor: pointer; padding: 0.25rem 0; list-style: none; }
        .expanded summary::-webkit-details-marker { display: none; }
        .expanded summary::before { content: "▸ "; }
        .expanded[open] summary::before { content: "▾ "; }
        .bars { list-style: none; padding: 0; margin: 0.35rem 0 0; display: flex; flex-direction: column; gap: 0.2rem; font-size: 0.75rem; }
        .bars li { display: grid; grid-template-columns: 1.5rem 7rem 1fr 3rem; gap: 0.4rem; align-items: center; }
        .bars li.k { font-weight: 700; color: #d62728; }
        .bars .n { text-align: right; color: var(--ink-subtle, #94a3b8); }
        .bars .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .bars .bar-wrap { height: 10px; background: var(--paper-alt, #f8fafc); border-radius: 2px; overflow: hidden; }
        .bars .bar { height: 100%; background: var(--accent, #1d4ed8); }
        .bars li.k .bar { background: #d62728; }
        .bars .v { text-align: right; font-variant-numeric: tabular-nums; color: var(--ink-muted, #64748b); }

        .deficit { font-size: 0.8rem; margin: 0; color: var(--ink, #0f172a); }
        .deficit strong { color: #d62728; }
        .note { font-size: 0.78rem; color: var(--ink-muted, #64748b); line-height: 1.55; margin: 0; }
      `})]})}export{h as default};
