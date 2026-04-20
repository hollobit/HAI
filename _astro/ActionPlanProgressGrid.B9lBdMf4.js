import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as l}from"./index.CNSOJBbx.js";function b(n){if(typeof window>"u")return;const i=new URLSearchParams(window.location.search);n==="deadline"?i.delete("sort"):i.set("sort",n);const o=i.toString();window.history.replaceState(null,"",window.location.pathname+(o?"?"+o:"")+window.location.hash)}function w(n){if(typeof window>"u")return;const i=new URLSearchParams(window.location.search);n?i.set("ministry",n):i.delete("ministry");const o=i.toString();window.history.replaceState(null,"",window.location.pathname+(o?"?"+o:"")+window.location.hash)}function x(n){const i=n.match(/(\d{2})Q(\d)/);if(i)return parseInt(i[1],10)*10+parseInt(i[2],10);const o=n.match(/(\d{2})년/);return o?parseInt(o[1],10)*10+4:999}function N({progress:n,tasks:i,baseUrl:o}){const[d,f]=l.useState("deadline"),[c,j]=l.useState("");l.useEffect(()=>{b(d)},[d]),l.useEffect(()=>{w(c)},[c]);const u=l.useMemo(()=>{const r=new Map;for(const s of i)r.set(s.id,s);return r},[i]),v=l.useMemo(()=>{const r=new Set;for(const s of Object.values(n.task_progress))r.add(s.ministry);return Array.from(r).sort()},[n]),h=l.useMemo(()=>{let r=Object.entries(n.task_progress).map(([s,a])=>({taskId:s,task:u.get(Number(s)),tp:a}));return c&&(r=r.filter(s=>s.tp.ministry===c)),d==="deadline"?r.sort((s,a)=>x(s.tp.deadline_label)-x(a.tp.deadline_label)):d==="trend-down"?r.sort((s,a)=>{const p=t=>t.metrics.length===0?0:t.metrics.reduce((m,g)=>m+g.trend_slope,0)/t.metrics.length;return p(s.tp)-p(a.tp)}):r.sort((s,a)=>a.tp.metrics.length-s.tp.metrics.length),r},[n,c,d,u]);return e.jsxs("div",{className:"progress-grid",children:[e.jsxs("div",{className:"controls",children:[e.jsxs("label",{children:[e.jsx("span",{children:"부처:"}),e.jsxs("select",{value:c,onChange:r=>j(r.target.value),"aria-label":"부처 필터",children:[e.jsx("option",{value:"",children:"전체"}),v.map(r=>e.jsx("option",{value:r,"aria-hidden":"true",children:r},r))]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"정렬:"}),e.jsxs("select",{value:d,onChange:r=>f(r.target.value),children:[e.jsx("option",{value:"deadline",children:"마감 임박순"}),e.jsx("option",{value:"trend-down",children:"추세 악화순"}),e.jsx("option",{value:"confidence",children:"매핑 dim 개수순"})]})]}),e.jsxs("span",{className:"count",children:[h.length," task"]})]}),e.jsx("div",{className:"cards",children:h.map(({taskId:r,task:s,tp:a})=>{const p=s?.title??`Task #${r}`;return e.jsxs("div",{className:"card",children:[e.jsx("h4",{children:e.jsxs("a",{href:`${o}actionplan/task/${r}/`,children:["[",r,"] ",p]})}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:a.ministry})," · ",e.jsx("span",{children:a.deadline_label})," ·",e.jsx("span",{children:s?.strategic_area_name})]}),a.metrics.length===0?e.jsx("p",{className:"no-metrics",children:"매핑된 dim 에 대응되는 HAI 메트릭 없음"}):e.jsx("ul",{className:"metric-list",children:a.metrics.map(t=>{const m=t.latest_value===0?0:(t.projected_value-t.latest_value)/Math.abs(t.latest_value)*100,g=t.trend_slope>.1?"📈":t.trend_slope<-.1?"📉":"➡️";return e.jsxs("li",{children:[e.jsx("strong",{children:t.dim_id})," ",t.threshold_label&&e.jsx("span",{className:"label",children:t.threshold_label}),e.jsxs("div",{className:"mini",children:[g," ",t.latest_year,": ",t.latest_value.toFixed(2)," →",t.projected_year,": ",e.jsx("strong",{children:t.projected_value.toFixed(2)})," ","(",m>=0?"+":"",m.toFixed(1),"%)"]})]},t.dim_id)})})]},r)})}),e.jsx("style",{children:`
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
