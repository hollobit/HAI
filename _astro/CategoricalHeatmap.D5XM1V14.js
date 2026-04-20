import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as x}from"./index.CNSOJBbx.js";import{l as b}from"./linear.DlstKyQa.js";function c(t,i){return i==="percent"||i==="percent_ratio"?t<=1?`${(t*100).toFixed(0)}%`:`${t.toFixed(0)}%`:t.toFixed(2)}function k({data:t}){const{rows:i,cols:p,valueByRC:f,minVal:m,maxVal:h}=x.useMemo(()=>{const a=new Set,n=new Set,l={};let o=1/0,s=-1/0;for(const r of t.cells)a.add(r.row),n.add(r.col),l[r.row]||(l[r.row]={}),l[r.row][r.col]=r.value,r.value<o&&(o=r.value),r.value>s&&(s=r.value);return{rows:[...a].sort((r,d)=>r.localeCompare(d,"ko")),cols:[...n].sort((r,d)=>r.localeCompare(d,"ko")),valueByRC:l,minVal:o===1/0?0:o,maxVal:s===-1/0?1:s}},[t.cells]),u=x.useMemo(()=>b().domain([m,h]).range(t.higher_is_better?["#fee0d2","#a50f15"]:["#a50f15","#fee0d2"]),[m,h,t.higher_is_better]),g=t.higher_is_better?"linear-gradient(to right, #fee0d2, #a50f15)":"linear-gradient(to right, #a50f15, #fee0d2)";return e.jsxs("div",{className:"cat-heatmap",children:[e.jsx("h3",{children:t.name_ko}),e.jsx("div",{className:"scroll",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"corner",children:[t.row_label_ko," ↓ / ",t.col_label_ko," →"]}),p.map(a=>e.jsx("th",{className:"col-h",title:a,children:a.length>30?a.slice(0,30)+"…":a},a))]})}),e.jsx("tbody",{children:i.map(a=>e.jsxs("tr",{children:[e.jsx("th",{className:"row-h",title:a,children:a.length>50?a.slice(0,50)+"…":a}),p.map(n=>{const l=f[a]?.[n];return l===void 0?e.jsx("td",{className:"cell empty",children:"—"},n):e.jsx("td",{className:"cell",style:{background:u(l)},title:`${a} × ${n}: ${c(l,t.unit)}`,children:c(l,t.unit)},n)})]},a))})]})}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{children:c(m,t.unit)}),e.jsx("div",{className:"bar",style:{background:g}}),e.jsx("span",{children:c(h,t.unit)}),e.jsxs("span",{className:"meta",children:["· 색: ",t.higher_is_better?"진할수록 높음":"진할수록 낮음"]})]}),e.jsx("style",{children:`
        .cat-heatmap h3 { font-size: 1rem; margin: 0 0 0.5rem; }
        .cat-heatmap .scroll { overflow-x: auto; max-width: 100%; }
        .cat-heatmap table { border-collapse: collapse; font-size: 0.78rem; }
        .cat-heatmap th, .cat-heatmap td {
          padding: 0.4rem 0.55rem; border: 1px solid var(--border);
          text-align: center; min-width: 3rem;
        }
        .cat-heatmap .corner {
          background: var(--paper-alt); color: var(--ink-muted);
          font-weight: 500; text-align: left; font-size: 0.7rem;
          position: sticky; left: 0; z-index: 1;
        }
        .cat-heatmap .col-h, .cat-heatmap .row-h {
          background: var(--paper-alt); color: var(--ink); font-weight: 500;
          max-width: 16rem;
        }
        .cat-heatmap .row-h {
          text-align: left;
          position: sticky; left: 0; z-index: 1;
        }
        .cat-heatmap .cell {
          color: #1a1a1a; font-variant-numeric: tabular-nums;
          text-shadow: 0 0 2px rgba(255,255,255,0.7);
        }
        .cat-heatmap .cell.empty { background: transparent; color: var(--ink-subtle); }
        .cat-heatmap .legend {
          display: flex; align-items: center; gap: 0.5rem;
          margin-top: 0.75rem; font-size: 0.78rem; color: var(--ink-muted);
        }
        .cat-heatmap .legend .bar {
          flex: 0 0 8rem; height: 12px;
          border-radius: 3px;
        }
        .cat-heatmap .legend .meta { margin-left: 0.5rem; }
      `})]})}export{k as default,c as formatValue};
