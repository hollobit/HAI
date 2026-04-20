import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as d}from"./index.CNSOJBbx.js";function w(t){if(typeof window>"u")return;const n=new URLSearchParams(window.location.search);t==="deadline"?n.delete("sort"):n.set("sort",t);const o=n.toString();window.history.replaceState(null,"",window.location.pathname+(o?"?"+o:"")+window.location.hash)}function y(t){if(typeof window>"u")return;const n=new URLSearchParams(window.location.search);t?n.set("ministry",t):n.delete("ministry");const o=n.toString();window.history.replaceState(null,"",window.location.pathname+(o?"?"+o:"")+window.location.hash)}function x(t){const n=t.match(/(\d{2})Q(\d)/);if(n)return parseInt(n[1],10)*10+parseInt(n[2],10);const o=t.match(/(\d{2})년/);return o?parseInt(o[1],10)*10+4:999}function N({progress:t,tasks:n,baseUrl:o}){const[l,b]=d.useState("deadline"),[c,f]=d.useState("");d.useEffect(()=>{w(l)},[l]),d.useEffect(()=>{y(c)},[c]);const u=d.useMemo(()=>{const r=new Map;for(const i of n)r.set(i.id,i);return r},[n]),v=d.useMemo(()=>{const r=new Set;for(const i of Object.values(t.task_progress))r.add(i.ministry);return Array.from(r).sort()},[t]),h=d.useMemo(()=>{let r=Object.entries(t.task_progress).map(([i,a])=>({taskId:i,task:u.get(Number(i)),tp:a}));return c&&(r=r.filter(i=>i.tp.ministry===c)),l==="deadline"?r.sort((i,a)=>x(i.tp.deadline_label)-x(a.tp.deadline_label)):l==="trend-down"?r.sort((i,a)=>{const p=s=>s.metrics.length===0?0:s.metrics.reduce((m,g)=>m+g.trend_slope,0)/s.metrics.length;return p(i.tp)-p(a.tp)}):r.sort((i,a)=>a.tp.metrics.length-i.tp.metrics.length),r},[t,c,l,u]);return e.jsxs("div",{className:"progress-grid",children:[e.jsxs("div",{className:"controls",children:[e.jsxs("label",{children:[e.jsx("span",{children:"부처:"}),e.jsxs("select",{value:c,onChange:r=>f(r.target.value),"aria-label":"부처 필터",children:[e.jsx("option",{value:"",children:"전체"}),v.map(r=>e.jsx("option",{value:r,"aria-hidden":"true",children:r},r))]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"정렬:"}),e.jsxs("select",{value:l,onChange:r=>b(r.target.value),children:[e.jsx("option",{value:"deadline",children:"마감 임박순"}),e.jsx("option",{value:"trend-down",children:"추세 악화순"}),e.jsx("option",{value:"confidence",children:"매핑 dim 개수순"})]})]}),e.jsxs("span",{className:"count",children:[h.length," task"]})]}),e.jsxs("div",{className:"scope-warning",children:["⚠️ ",e.jsx("strong",{children:"데이터 범위 안내"}),": 대부분 메트릭은 ",e.jsx("span",{className:"proxy-inline",children:"🌐 글로벌 proxy"}),' 입니다 (한국 직접 시계열이 없어 관련 글로벌 추세로 대체). 🇰🇷 한국 데이터가 있는 메트릭만 한국 행동계획 진척을 직접 반영합니다. 글로벌 추세는 "한국에 미칠 환경 변화" 로 해석하세요.']}),e.jsx("div",{className:"cards",children:h.map(({taskId:r,task:i,tp:a})=>{const p=i?.title??`Task #${r}`;return e.jsxs("div",{className:"card",children:[e.jsx("h4",{children:e.jsxs("a",{href:`${o}actionplan/task/${r}/`,children:["[",r,"] ",p]})}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:a.ministry})," · ",e.jsx("span",{children:a.deadline_label})," ·",e.jsx("span",{children:i?.strategic_area_name})]}),a.metrics.length===0?e.jsx("p",{className:"no-metrics",children:"매핑된 dim 에 대응되는 HAI 메트릭 없음"}):e.jsx("ul",{className:"metric-list",children:a.metrics.map(s=>{const m=s.latest_value===0?0:(s.projected_value-s.latest_value)/Math.abs(s.latest_value)*100,g=s.trend_slope>.1?"📈":s.trend_slope<-.1?"📉":"➡️",j=s.scope==="korea"?e.jsx("span",{className:"scope-badge korea",title:"한국 데이터 기반",children:"🇰🇷 한국"}):e.jsx("span",{className:"scope-badge proxy",title:"한국 직접 데이터 없음 — 글로벌 추세로 대체",children:"🌐 글로벌 proxy"});return e.jsxs("li",{children:[e.jsx("strong",{children:s.dim_id})," ",j," ",s.threshold_label&&e.jsx("span",{className:"label",children:s.threshold_label}),s.metric_name_ko&&e.jsxs("div",{className:"metric-name",children:["출처: ",s.metric_name_ko]}),e.jsxs("div",{className:"mini",children:[g," ",s.latest_year,": ",s.latest_value.toFixed(2)," →",s.projected_year,": ",e.jsx("strong",{children:s.projected_value.toFixed(2)})," ","(",m>=0?"+":"",m.toFixed(1),"%)"]})]},s.dim_id)})})]},r)})}),e.jsx("style",{children:`
        .progress-grid .controls {
          display: flex; gap: 1rem; align-items: center;
          margin-bottom: 0.75rem; font-size: 0.85rem; flex-wrap: wrap;
        }
        .progress-grid .controls label { display: inline-flex; gap: 0.3rem; align-items: center; }
        .progress-grid .controls select {
          padding: 0.25rem 0.5rem; border: 1px solid var(--border);
          border-radius: 4px; background: var(--paper); color: var(--ink);
        }
        .progress-grid .count { color: var(--ink-muted); font-size: 0.78rem; }
        .progress-grid .scope-warning {
          padding: 0.6rem 0.9rem; margin-bottom: 1rem;
          background: rgba(217, 119, 87, 0.08); border: 1px solid rgba(217, 119, 87, 0.35);
          border-radius: 6px; font-size: 0.8rem; color: var(--ink);
          line-height: 1.5;
        }
        .progress-grid .proxy-inline {
          padding: 1px 6px; border-radius: 3px;
          background: var(--paper-alt); font-size: 0.78rem;
        }
        .progress-grid .scope-badge {
          display: inline-block; padding: 1px 6px; border-radius: 3px;
          font-size: 0.7rem; margin-left: 0.3rem; vertical-align: middle;
        }
        .progress-grid .scope-badge.korea {
          background: rgba(205, 46, 58, 0.12); color: #cd2e3a; border: 1px solid rgba(205, 46, 58, 0.35);
        }
        .progress-grid .scope-badge.proxy {
          background: var(--paper-alt); color: var(--ink-muted); border: 1px solid var(--border);
        }
        .progress-grid .metric-name {
          font-size: 0.7rem; color: var(--ink-muted); font-style: italic; margin-top: 0.15rem;
        }
        .progress-grid .cards {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 0.8rem;
        }
        .progress-grid .card {
          padding: 0.8rem 1rem; border: 1px solid var(--border);
          border-radius: 6px; background: var(--paper);
        }
        .progress-grid .card h4 { font-size: 0.9rem; margin: 0 0 0.3rem; }
        .progress-grid .card h4 a { color: var(--accent); text-decoration: none; }
        .progress-grid .meta {
          font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;
        }
        .progress-grid .no-metrics {
          font-size: 0.8rem; color: var(--ink-muted); font-style: italic; margin: 0;
        }
        .progress-grid .metric-list { list-style: none; padding: 0; margin: 0; }
        .progress-grid .metric-list li {
          padding: 0.4rem 0; border-bottom: 1px solid var(--border); font-size: 0.8rem;
        }
        .progress-grid .metric-list li:last-child { border-bottom: none; }
        .progress-grid .mini { font-size: 0.72rem; color: var(--ink-muted); margin-top: 0.15rem; }
        .progress-grid .label {
          display: inline-block; padding: 0 4px; border-radius: 3px;
          background: var(--paper-alt); font-size: 0.75rem;
        }
      `})]})}export{N as default};
