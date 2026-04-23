import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as m}from"./index.CNSOJBbx.js";const o={measured:{ko:"측정 중",icon:"🟢",color:"#059669",bg:"rgba(5,150,105,0.1)"},partial:{ko:"부분 측정",icon:"🟡",color:"#d97706",bg:"rgba(217,119,6,0.12)"},unmeasured:{ko:"미측정",icon:"🔴",color:"#dc2626",bg:"rgba(220,38,38,0.1)"}};function j({domains:d,baseUrl:c="/"}){const[l,p]=m.useState("all"),[g,h]=m.useState(new Set),x=s=>{h(r=>{const i=new Set(r);return i.has(s)?i.delete(s):i.add(s),i})},t={all:0,measured:0,partial:0,unmeasured:0};for(const s of d)for(const r of s.indicators)t.all++,t[r.measurement_status]++;const u=d.map(s=>({...s,indicators:l==="all"?s.indicators:s.indicators.filter(r=>r.measurement_status===l)}));return e.jsxs("div",{className:"ifl",children:[e.jsx("div",{className:"ifl-pills",children:["all","measured","partial","unmeasured"].map(s=>e.jsx("button",{className:`pill ${l===s?"active":""}`,onClick:()=>p(s),type:"button",children:s==="all"?`전체 ${t.all}`:`${o[s].icon} ${o[s].ko} ${t[s]}`},s))}),u.map(s=>s.indicators.length===0?null:e.jsxs("section",{className:"dom",children:[e.jsxs("header",{children:[e.jsxs("h3",{children:[s.icon," ",s.label_ko]}),e.jsxs("span",{className:"d-readiness",children:["측정 준비도 ",s.domain_readiness_pct,"%"]})]}),e.jsx("p",{className:"d-rationale",children:s.rationale_ko}),e.jsx("ul",{className:"ind-list",children:s.indicators.map(r=>{const i=o[r.measurement_status],n=g.has(r.id);return e.jsxs("li",{className:`ind-card st-${r.measurement_status}`,children:[e.jsxs("button",{className:"ind-head",onClick:()=>x(r.id),type:"button","aria-expanded":n,children:[e.jsxs("div",{className:"ind-title",children:[e.jsxs("span",{className:"st-badge",style:{background:i.bg,color:i.color,borderColor:i.color},children:[i.icon," ",i.ko]}),e.jsx("strong",{children:r.name_ko})]}),e.jsx("span",{className:"chev",children:n?"▲":"▼"})]}),n&&e.jsxs("div",{className:"ind-body",children:[e.jsx("h4",{children:"📖 정의"}),e.jsx("p",{children:r.definition_ko}),e.jsx("h4",{children:"🎯 중요성"}),e.jsx("p",{children:r.rationale_ko}),e.jsx("h4",{children:"🇰🇷 한국의 현재 상태"}),e.jsx("p",{children:r.korea_state_ko}),e.jsx("h4",{children:"⚙️ 측정 방법"}),e.jsx("p",{children:r.measurement_method_ko}),e.jsx("h4",{children:"📊 데이터 출처"}),e.jsx("p",{className:"src",children:r.data_sources_ko}),e.jsx("h4",{children:"💡 한국의 기회"}),e.jsx("p",{className:"opp",children:r.korea_opportunity_ko}),(r.related_tasks?.length??0)>0&&e.jsxs(e.Fragment,{children:[e.jsxs("h4",{children:["🔗 관련 행동계획 과제 (",r.related_tasks.length,")"]}),e.jsx("ul",{className:"rel-list",children:r.related_tasks.map(a=>e.jsxs("li",{children:[e.jsxs("a",{href:`${c}actionplan/task/${a.task_id}/`,className:"rel-task",children:[e.jsxs("span",{className:"task-num",children:["과제 ",a.task_id]}),e.jsx("span",{className:"task-title",children:a.task_title})]}),e.jsx("p",{className:"rel-why",children:a.relevance_ko})]},a.task_id))})]}),(r.related_recommendations?.length??0)>0&&e.jsxs(e.Fragment,{children:[e.jsxs("h4",{children:["📌 관련 권고사항 (",r.related_recommendations.length,")"]}),e.jsx("ul",{className:"rel-list recs",children:r.related_recommendations.map(a=>e.jsxs("li",{children:[e.jsxs("div",{className:"rec-head",children:[e.jsxs("a",{href:`${c}actionplan/task/${a.task_id}/`,className:"rel-rec",children:["과제 ",a.task_id," · 권고 ",a.seq]}),e.jsxs("span",{className:"ministry",children:["🏛️ ",a.ministry]})]}),e.jsx("p",{className:"rel-why",children:a.relevance_ko})]},`${a.task_id}-${a.seq}`))})]}),(r.suggested_additions?.length??0)>0&&e.jsxs(e.Fragment,{children:[e.jsxs("h4",{children:["✨ 보완·추가 제안 (",r.suggested_additions.length,")"]}),e.jsx("ul",{className:"suggest-list",children:r.suggested_additions.map((a,f)=>e.jsxs("li",{className:`suggest-${a.type}`,children:[e.jsxs("div",{className:"s-head",children:[e.jsx("span",{className:"s-type",children:a.type==="task"?"🆕 신규 과제":`➕ 권고 추가 (과제 ${a.target_task_id})`}),e.jsxs("span",{className:"s-ministry",children:["🏛️ ",a.suggested_ministry]})]}),e.jsx("strong",{className:"s-title",children:a.title_ko}),e.jsx("p",{className:"s-content",children:a.content_ko}),e.jsxs("p",{className:"s-rationale",children:["📎 ",e.jsx("em",{children:"근거:"})," ",a.rationale_ko]})]},f))})]}),r.related_tasks?.length===0&&r.related_recommendations?.length===0&&r.suggested_additions?.length===0&&e.jsx("p",{className:"no-policy",children:"⚠️ 관련 행동계획 과제/권고사항 매칭 · 제안 데이터가 없습니다."})]})]},r.id)})})]},s.id)),e.jsx("style",{children:`
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

        .rel-list, .suggest-list { list-style: none; padding: 0; margin: 0.35rem 0 0.5rem; display: flex; flex-direction: column; gap: 0.45rem; }
        .rel-list li { padding: 0.5rem 0.7rem; background: var(--paper-alt); border-radius: 6px; border-left: 3px solid #3b82f6; }
        .rel-list.recs li { border-left-color: #7c3aed; }
        .rel-task, .rel-rec { display: flex; gap: 0.5rem; align-items: baseline; text-decoration: none; color: var(--ink); }
        .rel-task:hover, .rel-rec:hover { text-decoration: underline; }
        .rel-task .task-num, .rel-rec { font-size: 0.72rem; font-weight: 700; color: #1d4ed8; background: rgba(59,130,246,0.1); padding: 0.1rem 0.4rem; border-radius: 4px; white-space: nowrap; }
        .rel-list.recs .rel-rec { color: #6d28d9; background: rgba(124,58,237,0.1); }
        .rel-task .task-title { font-size: 0.85rem; font-weight: 600; }
        .rec-head { display: flex; gap: 0.5rem; align-items: baseline; flex-wrap: wrap; justify-content: space-between; }
        .ministry { font-size: 0.72rem; color: var(--ink-muted); font-weight: 600; }
        .rel-why { margin: 0.25rem 0 0; font-size: 0.8rem; color: var(--ink-muted); line-height: 1.55; }

        .suggest-list li {
          padding: 0.65rem 0.85rem; border-radius: 6px;
          background: rgba(245,158,11,0.06); border-left: 3px solid #eab308;
        }
        .suggest-list li.suggest-task { background: rgba(34,197,94,0.06); border-left-color: #22c55e; }
        .s-head { display: flex; gap: 0.5rem; justify-content: space-between; flex-wrap: wrap; align-items: baseline; }
        .s-type { font-size: 0.72rem; font-weight: 700; color: var(--ink); }
        .suggest-list li.suggest-task .s-type { color: #166534; }
        .s-ministry { font-size: 0.72rem; color: var(--ink-muted); font-weight: 600; }
        .s-title { display: block; margin: 0.4rem 0 0.25rem; color: var(--ink); font-size: 0.9rem; }
        .s-content { margin: 0; font-size: 0.83rem; color: var(--ink); line-height: 1.6; }
        .s-rationale { margin: 0.4rem 0 0; font-size: 0.76rem; color: var(--ink-subtle); line-height: 1.55; }
        .s-rationale em { font-style: normal; font-weight: 600; color: var(--ink-muted); }

        .no-policy { margin-top: 0.75rem; padding: 0.5rem 0.75rem; background: rgba(239,68,68,0.06); color: #b91c1c; font-size: 0.8rem; border-radius: 4px; font-style: italic; }
      `})]})}export{j as default};
