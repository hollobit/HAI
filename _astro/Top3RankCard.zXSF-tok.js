import{j as e}from"./jsx-runtime.u17CrQMm.js";function k(r){return{count:"개",percent:"%",USD_billion:"십억 USD",thousands:"천",index:"지수",score_0_100:"점 (0–100)",per_100k:"10만명당",ratio:"비율"}[r]??r}function l(r,n){return n==="percent"?r<2?`${(r*100).toFixed(0)}%`:`${r.toFixed(0)}%`:n==="USD_billion"?`$${Math.round(r)}B`:n==="thousands"?`${Math.round(r)}k`:n==="index"?r.toFixed(1):Number.isInteger(r)?r.toLocaleString("en"):r.toFixed(1)}function v(r,n){return r<=3?"top3":r<=n*.25?"good":r<=n*.5?"mid":"weak"}function w({labelKo:r,labelEn:n,koreaRank:i,total:d,koreaValue:h,unit:s,top3:c,top10:m,deficitRatio:p,noteKo:x,source:f,weight:o,higherIsBetter:b,dimension:u}){const g=v(i,d),j=Math.max(...m.map(a=>a.value),1);return e.jsxs("article",{className:`top3-card cat-${g}`,children:[e.jsxs("header",{children:[e.jsx("h3",{children:r}),e.jsx("p",{className:"en",children:n}),e.jsxs("div",{className:"rank-line",children:[e.jsxs("span",{className:`rank-pill ${g}`,children:["🇰🇷 ",i,"위 / ",d,"개국"]}),e.jsx("span",{className:"korea-val",children:l(h,s)})]})]}),e.jsxs("div",{className:"top3-preview",children:[e.jsx("strong",{children:"Top 3"}),c.map((a,t)=>e.jsxs("div",{className:"top3-row",children:[e.jsx("span",{className:"medal",children:["🥇","🥈","🥉"][t]}),e.jsx("span",{className:"c-name",children:a.country}),e.jsx("span",{className:"c-val",children:l(a.value,s)})]},a.country))]}),e.jsxs("details",{className:"expanded",children:[e.jsx("summary",{children:"전체 Top 10 보기"}),e.jsx("ol",{className:"bars",children:m.map((a,t)=>e.jsxs("li",{className:a.is_korea?"k":"",children:[e.jsx("span",{className:"n",children:t+1}),e.jsx("span",{className:"name",children:a.country}),e.jsx("div",{className:"bar-wrap",children:e.jsx("div",{className:"bar",style:{width:`${a.value/j*100}%`}})}),e.jsx("span",{className:"v",children:l(a.value,s)})]},`${a.country}-${t}`))})]}),p!==null&&i>3&&e.jsxs("p",{className:"deficit",children:["3위(",c[2].country,") 대비 한국은"," ",e.jsxs("strong",{children:[(p*100).toFixed(0),"%"]})," 수준"]}),x&&e.jsx("p",{className:"note",children:x}),e.jsxs("details",{className:"metric-meta",children:[e.jsx("summary",{children:"📐 지표 상세 · 방법론"}),e.jsxs("dl",{children:[u&&e.jsxs(e.Fragment,{children:[e.jsx("dt",{children:"영역"}),e.jsx("dd",{children:u})]}),f&&e.jsxs(e.Fragment,{children:[e.jsx("dt",{children:"원 출처"}),e.jsxs("dd",{children:["Stanford HAI AI Index 2026 ",e.jsx("code",{children:f})]})]}),e.jsx("dt",{children:"단위"}),e.jsxs("dd",{children:[k(s)," ",e.jsxs("span",{className:"u-raw",children:["(",s,")"]})]}),e.jsx("dt",{children:"방향성"}),e.jsx("dd",{children:b===!1?"↓ 낮을수록 좋음":"↑ 높을수록 좋음"}),o!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx("dt",{children:"가중치"}),e.jsxs("dd",{children:[e.jsxs("strong",{children:[o.toFixed(1),"×"]})," ",e.jsx("span",{className:"u-raw",children:o>1?"(가중평균에서 강조)":o<1?"(약화)":"(표준)"})]})]}),e.jsx("dt",{children:"정규화"}),e.jsxs("dd",{children:["rank_score = (total − korea_rank + 1) / total × 100 ·"," ",e.jsxs("strong",{children:[((d-i+1)/d*100).toFixed(0),"점"]})," ","/ 100"]})]})]}),e.jsx("style",{children:`
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

        .metric-meta { margin-top: 0.25rem; padding-top: 0.5rem; border-top: 1px dashed var(--border, #e2e8f0); }
        .metric-meta summary { font-size: 0.75rem; color: var(--ink-muted, #64748b); cursor: pointer; padding: 0.25rem 0; list-style: none; }
        .metric-meta summary::-webkit-details-marker { display: none; }
        .metric-meta dl { margin: 0.35rem 0 0; display: grid; grid-template-columns: max-content 1fr; gap: 0.15rem 0.75rem; font-size: 0.75rem; }
        .metric-meta dt { color: var(--ink-muted, #64748b); font-weight: 500; }
        .metric-meta dd { margin: 0; color: var(--ink, #0f172a); line-height: 1.55; }
        .metric-meta code { font-size: 0.72rem; padding: 0 0.3rem; border-radius: 3px; background: var(--paper-alt, #f8fafc); color: var(--ink-muted, #64748b); }
        .metric-meta .u-raw { font-size: 0.7rem; color: var(--ink-subtle, #94a3b8); }
      `})]})}export{w as default};
