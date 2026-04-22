import{j as a}from"./jsx-runtime.u17CrQMm.js";import{r as s}from"./index.CNSOJBbx.js";const k={sovereignty:"#7c3aed",competitiveness:"#dc2626",governance:"#0891b2",diffusion:"#059669",talent:"#ea580c",safety:"#d97706",rnd:"#6366f1"};function _({aspects:i,categories:d,baseUrl:m}){const[c,h]=s.useState(""),[l,x]=s.useState("all"),[o,u]=s.useState("all"),[b,f]=s.useState(new Set),g=s.useMemo(()=>{const e={};for(const r of d)e[r.id]=r;return e},[d]),p=s.useMemo(()=>{const e=c.trim().toLowerCase();return i.filter(r=>l!=="all"&&!r.categories.includes(l)||o==="competitiveness"&&!r.contributes_to_competitiveness||o==="sovereignty"&&!r.contributes_to_sovereignty||o==="strategic"&&!r.is_strategic?!1:e?r.aspect_text.toLowerCase().includes(e)||r.task_title.toLowerCase().includes(e)||r.task_id.includes(e):!0)},[i,c,l,o]),v=e=>{f(r=>{const t=new Set(r);return t.has(e)?t.delete(e):t.add(e),t})};return a.jsxs("div",{className:"gap-table",children:[a.jsxs("div",{className:"controls",children:[a.jsx("input",{type:"search",placeholder:"🔍 aspect · 과제 제목 · 과제 번호 검색",value:c,onChange:e=>h(e.target.value),"aria-label":"검색"}),a.jsxs("div",{className:"filter-group",children:[a.jsx("label",{children:"카테고리:"}),a.jsxs("select",{value:l,onChange:e=>x(e.target.value),children:[a.jsx("option",{value:"all",children:"전체"}),d.map(e=>a.jsxs("option",{value:e.id,children:[e.icon," ",e.label_ko]},e.id))]})]}),a.jsx("div",{className:"flag-pills",children:["all","strategic","competitiveness","sovereignty"].map(e=>a.jsxs("button",{className:`pill ${o===e?"active":""}`,onClick:()=>u(e),type:"button",children:[e==="all"&&`전체 (${i.length})`,e==="strategic"&&"⭐ 전략 30",e==="competitiveness"&&`🏆 경쟁력 ${i.filter(r=>r.contributes_to_competitiveness).length}`,e==="sovereignty"&&`🏭 주권 ${i.filter(r=>r.contributes_to_sovereignty).length}`]},e))}),a.jsxs("div",{className:"count",children:[p.length,"건 표시"]})]}),a.jsx("ul",{className:"gap-list",children:p.map(e=>{const r=b.has(e.id),t=e.measurement_detailed;return a.jsxs("li",{className:`gap-row ${e.is_strategic?"strategic":""}`,children:[a.jsxs("button",{className:"gap-head",onClick:()=>v(e.id),"aria-expanded":r,type:"button",children:[a.jsxs("div",{className:"aspect",children:[e.is_strategic&&a.jsx("span",{className:"star",title:"전략 hotspot",children:"⭐"}),a.jsx("strong",{children:e.aspect_text})]}),a.jsxs("div",{className:"meta",children:[a.jsxs("span",{className:"task-link",children:["과제 ",a.jsx("code",{children:e.task_id})," · ",e.task_title]}),a.jsxs("div",{className:"tags",children:[e.categories.map(n=>a.jsxs("span",{className:"tag cat",style:{backgroundColor:k[n]??"#888"},children:[g[n]?.icon," ",g[n]?.label_ko]},n)),e.contributes_to_competitiveness&&a.jsx("span",{className:"tag flag comp",children:"🏆 경쟁력"}),e.contributes_to_sovereignty&&a.jsx("span",{className:"tag flag sov",children:"🏭 주권"})]})]}),a.jsx("span",{className:"chev",children:r?"▲":"▼"})]}),r&&a.jsxs("div",{className:"gap-body",children:[t?a.jsxs("div",{className:"detail-block detailed",children:[a.jsx("h4",{children:"🎯 측정 KPI (aspect-specific)"}),a.jsx("p",{children:t.kpi_ko}),a.jsx("h4",{children:"📊 데이터 출처"}),a.jsx("p",{children:t.data_source_ko}),a.jsx("h4",{children:"⚙️ 측정 방법"}),a.jsx("p",{children:t.method_ko}),a.jsx("h4",{children:"🇰🇷 한국의 기회"}),a.jsx("p",{className:"opp",children:t.korea_opportunity_ko})]}):a.jsxs("div",{className:"detail-block template",children:[a.jsx("p",{className:"tmpl-note",children:"📎 카테고리별 측정 템플릿 (전략 hotspot 상위 30 에만 aspect-specific 심화 적용)"}),a.jsx("h4",{children:"측정 KPI"}),a.jsx("p",{children:e.measurement.kpi_ko}),a.jsx("h4",{children:"데이터 출처"}),a.jsx("p",{children:e.measurement.data_source_ko}),a.jsx("h4",{children:"주기 · 담당"}),a.jsxs("p",{children:[e.measurement.cadence_ko," · ",e.measurement.responsible_ko]})]}),a.jsxs("p",{className:"back-link",children:["→"," ",a.jsxs("a",{href:`${m}actionplan/task/${e.task_id}/`,children:["/actionplan/task/",e.task_id,"/ 에서 과제 전체 보기"]})]})]})]},e.id)})}),p.length===0&&a.jsx("p",{className:"empty",children:"조건에 해당하는 aspect 가 없습니다."}),a.jsx("style",{children:`
        .gap-table { display: flex; flex-direction: column; gap: 1rem; }
        .controls {
          display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;
          padding: 1rem; border: 1px solid var(--border); border-radius: 10px;
          background: var(--paper-alt);
        }
        .controls input[type="search"] {
          flex: 1 1 280px; min-width: 240px; padding: 0.55rem 0.75rem;
          border: 1px solid var(--border); border-radius: 6px; font-size: 0.9rem;
          background: var(--paper);
        }
        .controls .filter-group { display: flex; gap: 0.4rem; align-items: center; font-size: 0.85rem; }
        .controls select { padding: 0.4rem 0.5rem; border: 1px solid var(--border); border-radius: 6px; background: var(--paper); }
        .flag-pills { display: flex; gap: 0.35rem; flex-wrap: wrap; }
        .pill {
          padding: 0.35rem 0.75rem; font-size: 0.78rem; font-weight: 600;
          border: 1px solid var(--border); border-radius: 999px; cursor: pointer;
          background: var(--paper); color: var(--ink-muted);
          transition: all 0.15s ease;
        }
        .pill:hover { border-color: var(--accent); color: var(--accent); }
        .pill.active { background: var(--accent); color: #fff; border-color: var(--accent); }
        .count { font-size: 0.8rem; color: var(--ink-muted); margin-left: auto; }

        .gap-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
        .gap-row {
          border: 1px solid var(--border); border-radius: 8px; overflow: hidden;
          background: var(--paper); transition: box-shadow 0.15s ease;
        }
        .gap-row:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .gap-row.strategic { border-left: 4px solid #eab308; }

        .gap-head {
          display: grid; grid-template-columns: 1fr auto auto; gap: 0.75rem;
          padding: 0.85rem 1rem; width: 100%; text-align: left;
          background: transparent; border: 0; cursor: pointer; font-family: inherit;
          align-items: start;
        }
        .gap-head .aspect { display: flex; gap: 0.4rem; align-items: baseline; }
        .gap-head .star { color: #eab308; }
        .gap-head strong { color: var(--ink); font-size: 0.95rem; line-height: 1.45; }
        .gap-head .meta { display: flex; flex-direction: column; gap: 0.3rem; align-items: flex-end; min-width: 220px; }
        .gap-head .task-link { font-size: 0.75rem; color: var(--ink-muted); text-align: right; }
        .gap-head .task-link code { background: var(--paper-alt); padding: 0 0.3rem; border-radius: 3px; font-size: 0.72rem; }
        .gap-head .chev { color: var(--ink-muted); font-size: 0.75rem; padding-top: 0.25rem; }

        .tags { display: flex; flex-wrap: wrap; gap: 0.25rem; justify-content: flex-end; }
        .tag { display: inline-block; padding: 0.15rem 0.5rem; border-radius: 999px; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.02em; white-space: nowrap; }
        .tag.cat { color: #fff; }
        .tag.flag.comp { background: rgba(220,38,38,0.12); color: #b91c1c; border: 1px solid rgba(220,38,38,0.3); }
        .tag.flag.sov { background: rgba(124,58,237,0.12); color: #6d28d9; border: 1px solid rgba(124,58,237,0.3); }

        .gap-body {
          padding: 0.85rem 1.1rem 1rem; border-top: 1px solid var(--border);
          background: var(--paper-alt);
        }
        .gap-body h4 { margin: 0.7rem 0 0.2rem; font-size: 0.82rem; color: var(--ink); font-weight: 700; }
        .gap-body h4:first-child { margin-top: 0; }
        .gap-body p { margin: 0; font-size: 0.87rem; line-height: 1.6; color: var(--ink); }
        .gap-body .opp { color: #0369a1; font-weight: 500; }
        .gap-body .tmpl-note { font-size: 0.72rem; color: var(--ink-subtle); font-style: italic; margin-bottom: 0.6rem; }
        .gap-body .back-link { margin-top: 0.85rem; padding-top: 0.6rem; border-top: 1px dashed var(--border); font-size: 0.78rem; }
        .gap-body .back-link a { color: var(--accent); text-decoration: none; }
        .gap-body .back-link a:hover { text-decoration: underline; }

        .detail-block.detailed { background: rgba(234,179,8,0.04); border-left: 3px solid #eab308; padding: 0.75rem 0.9rem; border-radius: 4px; }
        .detail-block.template { opacity: 0.95; }

        .empty { text-align: center; color: var(--ink-muted); padding: 2rem; }

        @media (max-width: 720px) {
          .gap-head { grid-template-columns: 1fr; gap: 0.5rem; }
          .gap-head .meta { align-items: flex-start; min-width: 0; }
          .gap-head .task-link { text-align: left; }
          .tags { justify-content: flex-start; }
          .gap-head .chev { display: none; }
        }
      `})]})}export{_ as default};
