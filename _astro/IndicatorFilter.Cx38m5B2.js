import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as d}from"./index.CNSOJBbx.js";const t={measured:{ko:"측정 중",icon:"🟢",color:"#059669",bg:"rgba(5,150,105,0.1)"},partial:{ko:"부분 측정",icon:"🟡",color:"#d97706",bg:"rgba(217,119,6,0.12)"},unmeasured:{ko:"미측정",icon:"🔴",color:"#dc2626",bg:"rgba(220,38,38,0.1)"}};function g({domains:l}){const[s,c]=d.useState("all"),[m,p]=d.useState(new Set),h=r=>{p(a=>{const o=new Set(a);return o.has(r)?o.delete(r):o.add(r),o})},i={all:0,measured:0,partial:0,unmeasured:0};for(const r of l)for(const a of r.indicators)i.all++,i[a.measurement_status]++;const u=l.map(r=>({...r,indicators:s==="all"?r.indicators:r.indicators.filter(a=>a.measurement_status===s)}));return e.jsxs("div",{className:"ifl",children:[e.jsx("div",{className:"ifl-pills",children:["all","measured","partial","unmeasured"].map(r=>e.jsx("button",{className:`pill ${s===r?"active":""}`,onClick:()=>c(r),type:"button",children:r==="all"?`전체 ${i.all}`:`${t[r].icon} ${t[r].ko} ${i[r]}`},r))}),u.map(r=>r.indicators.length===0?null:e.jsxs("section",{className:"dom",children:[e.jsxs("header",{children:[e.jsxs("h3",{children:[r.icon," ",r.label_ko]}),e.jsxs("span",{className:"d-readiness",children:["측정 준비도 ",r.domain_readiness_pct,"%"]})]}),e.jsx("p",{className:"d-rationale",children:r.rationale_ko}),e.jsx("ul",{className:"ind-list",children:r.indicators.map(a=>{const o=t[a.measurement_status],n=m.has(a.id);return e.jsxs("li",{className:`ind-card st-${a.measurement_status}`,children:[e.jsxs("button",{className:"ind-head",onClick:()=>h(a.id),type:"button","aria-expanded":n,children:[e.jsxs("div",{className:"ind-title",children:[e.jsxs("span",{className:"st-badge",style:{background:o.bg,color:o.color,borderColor:o.color},children:[o.icon," ",o.ko]}),e.jsx("strong",{children:a.name_ko})]}),e.jsx("span",{className:"chev",children:n?"▲":"▼"})]}),n&&e.jsxs("div",{className:"ind-body",children:[e.jsx("h4",{children:"📖 정의"}),e.jsx("p",{children:a.definition_ko}),e.jsx("h4",{children:"🎯 중요성"}),e.jsx("p",{children:a.rationale_ko}),e.jsx("h4",{children:"🇰🇷 한국의 현재 상태"}),e.jsx("p",{children:a.korea_state_ko}),e.jsx("h4",{children:"⚙️ 측정 방법"}),e.jsx("p",{children:a.measurement_method_ko}),e.jsx("h4",{children:"📊 데이터 출처"}),e.jsx("p",{className:"src",children:a.data_sources_ko}),e.jsx("h4",{children:"💡 한국의 기회"}),e.jsx("p",{className:"opp",children:a.korea_opportunity_ko})]})]},a.id)})})]},r.id)),e.jsx("style",{children:`
        .ifl { display: flex; flex-direction: column; gap: 1.5rem; }
        .ifl-pills { display: flex; gap: 0.4rem; flex-wrap: wrap; }
        .pill {
          padding: 0.4rem 0.85rem; border: 1px solid var(--border);
          border-radius: 999px; background: var(--paper); color: var(--ink-muted);
          font-size: 0.82rem; font-weight: 600; cursor: pointer;
          transition: all 0.15s ease;
        }
        .pill:hover { border-color: var(--accent); color: var(--accent); }
        .pill.active { background: var(--accent); color: #fff; border-color: var(--accent); }

        .dom {
          padding: 1.1rem 1.3rem; border: 1px solid var(--border); border-radius: 12px;
          background: var(--paper);
        }
        .dom header { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: 0.25rem; }
        .dom h3 { margin: 0; font-size: 1.1rem; color: var(--ink); }
        .d-readiness { font-size: 0.8rem; color: var(--ink-muted); font-weight: 600; }
        .d-rationale { font-size: 0.85rem; color: var(--ink-muted); margin: 0 0 0.85rem; line-height: 1.55; }

        .ind-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.45rem; }
        .ind-card { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; background: var(--paper-alt); }
        .ind-card.st-measured { border-left: 3px solid #059669; }
        .ind-card.st-partial { border-left: 3px solid #d97706; }
        .ind-card.st-unmeasured { border-left: 3px solid #dc2626; }

        .ind-head {
          display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;
          width: 100%; padding: 0.7rem 0.95rem; background: transparent; border: 0;
          cursor: pointer; font-family: inherit; text-align: left;
        }
        .ind-title { display: flex; align-items: center; gap: 0.55rem; flex-wrap: wrap; }
        .ind-title strong { color: var(--ink); font-size: 0.92rem; line-height: 1.4; }
        .st-badge {
          display: inline-block; padding: 0.15rem 0.45rem; border-radius: 4px;
          font-size: 0.7rem; font-weight: 700; border: 1px solid;
        }
        .chev { font-size: 0.75rem; color: var(--ink-muted); }

        .ind-body { padding: 0.3rem 1.1rem 1.1rem; border-top: 1px solid var(--border); background: var(--paper); }
        .ind-body h4 { margin: 0.75rem 0 0.2rem; font-size: 0.78rem; color: var(--ink); font-weight: 700; }
        .ind-body h4:first-child { margin-top: 0.6rem; }
        .ind-body p { margin: 0; font-size: 0.87rem; line-height: 1.62; color: var(--ink); }
        .ind-body p.src { font-size: 0.78rem; color: var(--ink-muted); font-family: ui-monospace, monospace; }
        .ind-body p.opp { color: #0369a1; font-weight: 500; }
      `})]})}export{g as default};
