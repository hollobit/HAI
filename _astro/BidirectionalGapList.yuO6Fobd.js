import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as l}from"./index.CNSOJBbx.js";const j={unmeasured:{icon:"🟥",label:"미측정",desc:"HAI 가 이 주제 자체를 측정하지 않음 — 커버리지 갭 (Stanford 지표 개선 필요)",color:"#d93025"},"global-only":{icon:"🟧",label:"글로벌 proxy만",desc:"HAI 가 주제를 측정하지만 한국 시계열이 없어 글로벌 추세로 대체",color:"#ea8600"},"snapshot-only":{icon:"🟨",label:"스냅샷만",desc:"HAI scorecard 에 한국 rank/value 는 있으나 시계열 metric 파일 없음",color:"#b8a309"},"korea-ts":{icon:"🟩",label:"한국 시계열 측정",desc:"한국 특화 시계열 기반 trend 추출 가능 — 정상 모니터링",color:"#2f8f3f"}};function w({tasks:t,mapping:n,progress:m,dims:p,weakDimIds:g,baseUrl:v,threshold:u}){const h=l.useMemo(()=>new Set(g),[g]),x=l.useMemo(()=>{const s={};for(const r of t){const a=String(r.id);if((n.mappings[a]??[]).filter(c=>c.confidence>=u).length===0){s[a]="unmeasured";continue}const y=m.task_progress[a]?.metrics??[];if(y.length===0){s[a]="snapshot-only";continue}y.some(c=>c.scope==="korea")?s[a]="korea-ts":s[a]="global-only"}return s},[t,n,m,u]),f=l.useMemo(()=>{const s={unmeasured:[],"global-only":[],"snapshot-only":[],"korea-ts":[]};for(const r of t){const a=x[String(r.id)]??"unmeasured";s[a].push(r)}return s},[t,x]),d=l.useMemo(()=>{const s=new Set;for(const r of Object.values(n.mappings))for(const a of r)s.add(a.dim_id);return p.filter(r=>h.has(String(r.id))&&!s.has(String(r.id)))},[n,p,h]),b=["unmeasured","global-only","snapshot-only","korea-ts"];return e.jsxs("div",{className:"gap-list",children:[e.jsxs("div",{className:"gap-columns",children:[e.jsxs("section",{className:"gap-left",children:[e.jsxs("h3",{children:["🇰🇷 → HAI 측정 충분성 (",t.length," tasks)"]}),e.jsxs("p",{className:"gap-hint",children:["각 과제를 HAI 측정 가능성 4단계로 분류 — ",e.jsx("strong",{children:"🟥 미측정"})," 과",e.jsx("strong",{children:" 🟧 글로벌만"})," 이 핵심 갭."]}),e.jsx("div",{className:"adequacy-summary",children:b.map(s=>{const r=j[s],a=f[s].length,i=t.length?Math.round(a/t.length*100):0;return e.jsxs("div",{className:"summary-row",style:{borderLeftColor:r.color},children:[e.jsx("span",{className:"sum-icon",children:r.icon}),e.jsxs("div",{className:"sum-body",children:[e.jsxs("div",{className:"sum-head",children:[e.jsx("strong",{children:r.label}),e.jsxs("span",{className:"sum-count",children:[a," / ",t.length," (",i,"%)"]})]}),e.jsx("div",{className:"sum-desc",children:r.desc})]})]},s)})}),b.map(s=>{const r=j[s],a=f[s];if(a.length===0)return null;const i=s==="unmeasured"||s==="global-only";return e.jsxs("details",{className:"group",open:i,children:[e.jsxs("summary",{style:{borderLeftColor:r.color},children:[r.icon," ",e.jsx("strong",{children:r.label})," (",a.length,")"]}),e.jsx("ul",{children:a.map(o=>e.jsxs("li",{children:[e.jsxs("a",{href:`${v}actionplan/task/${o.id}/`,children:[e.jsxs("strong",{children:["[",o.id,"]"]})," ",o.title]}),e.jsx("span",{className:"meta",children:o.strategic_area_name})]},o.id))})]},s)})]}),e.jsxs("section",{className:"gap-right",children:[e.jsxs("h3",{children:["📊 → 🇰🇷 갭 (",d.length,")"]}),e.jsxs("p",{className:"gap-hint",children:["한국이 글로벌 peer 대비 약한 HAI 지표인데 대응되는 행동계획 과제가 없음. — ",e.jsx("strong",{children:"정책 사각지대"}),"."]}),e.jsxs("ul",{children:[d.map(s=>e.jsxs("li",{children:[e.jsx("strong",{children:s.name}),e.jsxs("span",{className:"meta",children:["dim_id: ",s.id]})]},String(s.id))),d.length===0&&e.jsx("li",{className:"empty",children:"한국 약점 영역이 모두 행동계획에 반영됨."})]})]})]}),e.jsx("style",{children:`
        .gap-list .gap-columns {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
        }
        @media (max-width: 900px) {
          .gap-list .gap-columns { grid-template-columns: 1fr; }
        }
        .gap-list section {
          padding: 1rem; border: 1px solid var(--border);
          border-radius: 6px; background: var(--paper);
        }
        .gap-list h3 { margin: 0 0 0.4rem; font-size: 1rem; }
        .gap-list .gap-hint { font-size: 0.82rem; color: var(--ink-muted); margin: 0 0 0.8rem; }
        .gap-list .adequacy-summary {
          margin: 0 0 1rem; display: flex; flex-direction: column; gap: 0.3rem;
        }
        .gap-list .summary-row {
          display: flex; gap: 0.5rem; align-items: flex-start;
          padding: 0.4rem 0.6rem; border-left: 3px solid var(--border);
          background: var(--paper-alt); border-radius: 0 4px 4px 0;
        }
        .gap-list .sum-icon { font-size: 1.1rem; }
        .gap-list .sum-body { flex: 1; }
        .gap-list .sum-head { display: flex; justify-content: space-between; align-items: baseline; }
        .gap-list .sum-count { font-size: 0.78rem; color: var(--ink-muted); }
        .gap-list .sum-desc { font-size: 0.75rem; color: var(--ink-muted); margin-top: 0.15rem; }
        .gap-list details.group {
          margin-top: 0.6rem; padding: 0; border: 1px solid var(--border); border-radius: 4px;
        }
        .gap-list details.group summary {
          padding: 0.45rem 0.7rem; cursor: pointer; font-size: 0.88rem;
          border-left: 3px solid var(--border); background: var(--paper);
          list-style: revert;
        }
        .gap-list details.group[open] summary { border-bottom: 1px solid var(--border); }
        .gap-list details.group ul {
          list-style: none; padding: 0 0.7rem; margin: 0; max-height: 280px; overflow-y: auto;
        }
        .gap-list details.group li {
          padding: 0.35rem 0; border-bottom: 1px solid var(--border);
          display: flex; flex-direction: column; gap: 0.1rem;
        }
        .gap-list details.group li:last-child { border-bottom: none; }
        .gap-list a { color: var(--accent); text-decoration: none; font-size: 0.84rem; }
        .gap-list a:hover { text-decoration: underline; }
        .gap-list .meta { font-size: 0.72rem; color: var(--ink-muted); }
        .gap-list .gap-right ul { list-style: none; padding: 0; margin: 0; max-height: 480px; overflow-y: auto; }
        .gap-list .gap-right li {
          padding: 0.5rem 0; border-bottom: 1px solid var(--border);
          display: flex; flex-direction: column; gap: 0.15rem;
        }
        .gap-list .gap-right li:last-child { border-bottom: none; }
        .gap-list .empty { color: var(--ink-muted); font-style: italic; padding: 1rem; }
      `})]})}export{w as default};
