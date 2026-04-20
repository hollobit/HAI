import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as l}from"./index.CNSOJBbx.js";function u(){if(typeof window>"u")return 0;const t=new URLSearchParams(window.location.search),a=parseFloat(t.get("confidence")??"0");return Number.isFinite(a)&&a>=0&&a<=1?a:0}function f(t){if(typeof window>"u")return;const a=new URLSearchParams(window.location.search);t>0?a.set("confidence",String(t)):a.delete("confidence");const c=a.toString(),i=window.location.pathname+(c?"?"+c:"")+window.location.hash;window.history.replaceState(null,"",i)}function v(t,a,c){return t===0||a<c?"var(--paper-alt)":`rgba(69, 120, 209, ${.2+.6*Math.min(1,Math.log2(t+1)/Math.log2(6))})`}function j({matrix:t,tasks:a,baseUrl:c}){const[i,s]=l.useState(()=>u());l.useEffect(()=>{f(i)},[i]);const p=l.useMemo(()=>{const r=new Map;for(const n of a)r.set(n.id,n);return r},[a]),x=l.useMemo(()=>{const r=new Map;for(const n of t.cells)r.set(`${n.row_id}|${n.col_id}`,n);return r},[t]);return e.jsxs("div",{className:"coverage-matrix",children:[e.jsx("div",{className:"toolbar",children:e.jsxs("label",{children:[e.jsxs("span",{children:["Confidence 임계값: ",e.jsx("strong",{children:i.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:i,onChange:r=>s(parseFloat(r.target.value))})]})}),e.jsx("div",{className:"matrix-wrap",role:"grid","aria-label":"행동계획 HAI 매핑 매트릭스",children:e.jsx("div",{className:"matrix-scroll",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"corner",children:"전략영역 \\ HAI 지표"}),t.cols.map(r=>e.jsx("th",{scope:"col",className:"col-head",children:r.name},String(r.id)))]})}),e.jsx("tbody",{children:t.rows.map(r=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"row-head",children:r.name}),t.cols.map(n=>{const o=x.get(`${r.id}|${n.id}`);if(!o)return e.jsx("td",{role:"gridcell",className:"cell empty",children:"—"},String(n.id));const d=o.task_count===0||o.avg_confidence<i,h=o.task_ids.slice(0,3).map(m=>p.get(m)?.title??`Task #${m}`).join(`
• `),g=d&&o.task_count===0?"이 전략영역-지표 조합에 매핑된 과제 없음 (갭)":`${o.task_count}개 과제 · avg confidence ${o.avg_confidence.toFixed(2)}
• ${h}`;return e.jsx("td",{role:"gridcell",className:`cell ${d?"weak":""}`,style:{background:v(o.task_count,o.avg_confidence,i)},title:g,children:o.task_count===0?e.jsx("span",{"aria-label":"갭",children:"⚠"}):e.jsxs("div",{className:"cell-body",children:[e.jsx("div",{className:"count",children:o.task_count}),e.jsx("div",{className:"conf",children:o.avg_confidence.toFixed(2)})]})},String(n.id))})]},String(r.id)))})]})})}),e.jsx("style",{children:`
        .coverage-matrix .toolbar { margin-bottom: 0.75rem; font-size: 0.85rem; }
        .coverage-matrix .toolbar label { display: inline-flex; gap: 0.8rem; align-items: center; }
        .coverage-matrix .toolbar input[type=range] { width: 220px; }
        .coverage-matrix .matrix-wrap { border: 1px solid var(--border); border-radius: 6px; }
        .coverage-matrix .matrix-scroll { overflow-x: auto; }
        .coverage-matrix table {
          border-collapse: collapse; font-size: 0.8rem; background: var(--paper);
        }
        .coverage-matrix th.corner { background: var(--paper-alt); padding: 0.5rem; text-align: left; min-width: 140px; }
        .coverage-matrix th.col-head {
          padding: 0.3rem 0.4rem; writing-mode: vertical-rl;
          text-orientation: mixed; max-height: 130px;
          font-weight: 500; background: var(--paper-alt);
          border: 1px solid var(--border);
        }
        .coverage-matrix th.row-head {
          padding: 0.5rem; text-align: left; background: var(--paper-alt);
          font-weight: 500; border: 1px solid var(--border);
          position: sticky; left: 0; z-index: 1;
        }
        .coverage-matrix td.cell {
          width: 44px; height: 44px; text-align: center;
          border: 1px solid var(--border); padding: 0; cursor: default;
        }
        .coverage-matrix td.cell.empty { color: var(--ink-muted); }
        .coverage-matrix td.cell.weak { opacity: 0.55; }
        .coverage-matrix .cell-body { display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .coverage-matrix .count { font-weight: 700; font-size: 0.95rem; }
        .coverage-matrix .conf { font-size: 0.68rem; color: var(--ink-muted); }
      `})]})}export{j as default};
