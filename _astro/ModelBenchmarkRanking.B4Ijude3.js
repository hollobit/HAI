import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as i}from"./index.CNSOJBbx.js";import{p as x}from"./faceted-data.BTCO96X-.js";function k({data:n}){const[l,m]=i.useState("score"),[a,h]=i.useState(""),d=i.useMemo(()=>{const o=[...n.entries.filter(s=>{if(!a)return!0;const t=a.toLowerCase();return s.model.toLowerCase().includes(t)||s.submitter!=null&&s.submitter.toLowerCase().includes(t)})];return l==="score"?o.sort((s,t)=>n.higher_is_better?t.score-s.score:s.score-t.score):l==="year"?o.sort((s,t)=>(t.year??0)-(s.year??0)):l==="model"&&o.sort((s,t)=>s.model.localeCompare(t.model)),o.slice(0,30)},[n.entries,n.higher_is_better,l,a]),u=i.useMemo(()=>Math.max(...n.entries.map(r=>r.score),0),[n.entries]),c=i.useMemo(()=>Math.min(...n.entries.map(r=>r.score),0),[n.entries]),g=u-c||1;return e.jsxs("div",{className:"model-ranking",children:[e.jsx("h3",{children:n.name_ko}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{children:["정렬:"," ",e.jsxs("select",{value:l,onChange:r=>m(r.target.value),children:[e.jsxs("option",{value:"score",children:["점수 (",n.higher_is_better?"높은":"낮은"," 순)"]}),e.jsx("option",{value:"year",children:"최신 연도"}),e.jsx("option",{value:"model",children:"모델명"})]})]}),e.jsxs("label",{children:["모델 검색:"," ",e.jsx("input",{type:"search",placeholder:"GPT, Claude, Gemini...",value:a,onChange:r=>h(r.target.value)})]}),e.jsxs("span",{className:"count",children:[d.length," / ",n.entries.length]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"모델"}),e.jsx("th",{children:"연도"}),e.jsx("th",{children:n.score_label}),e.jsx("th",{children:"분포"})]})}),e.jsx("tbody",{children:d.map((r,o)=>{const s=(r.score-c)/g*100;return e.jsxs("tr",{children:[e.jsx("td",{className:"rank",children:o+1}),e.jsxs("td",{children:[e.jsx("strong",{children:r.model}),r.submitter!=null&&e.jsx("div",{className:"sub",children:r.submitter})]}),e.jsx("td",{className:"num",children:r.year??"—"}),e.jsx("td",{className:"num",children:e.jsx("strong",{children:r.score.toFixed(2)})}),e.jsx("td",{className:"bar-cell",children:e.jsx("div",{className:"bar-wrap",children:e.jsx("div",{className:"bar",style:{width:`${s}%`,background:x(o%10)}})})})]},`${r.model}-${o}`)})})]}),e.jsx("style",{children:`
        .model-ranking h3 { font-size: 1rem; margin: 0 0 0.5rem; }
        .model-ranking .controls {
          display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;
          margin-bottom: 0.75rem; font-size: 0.85rem;
        }
        .model-ranking .controls label { display: inline-flex; gap: 0.4rem; align-items: center; }
        .model-ranking .controls select, .model-ranking .controls input {
          padding: 0.2rem 0.5rem; border: 1px solid var(--border); border-radius: 4px;
          background: var(--paper); color: var(--ink); font-size: 0.85rem;
        }
        .model-ranking .count { font-size: 0.78rem; color: var(--ink-muted); margin-left: auto; }
        .model-ranking table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
        .model-ranking th { text-align: left; padding: 0.45rem 0.6rem; border-bottom: 2px solid var(--border); color: var(--ink); }
        .model-ranking td { padding: 0.45rem 0.6rem; border-bottom: 1px solid var(--border); color: var(--ink); }
        .model-ranking .rank { color: var(--ink-muted); font-weight: 600; width: 2rem; }
        .model-ranking .num { text-align: right; font-variant-numeric: tabular-nums; width: 5rem; }
        .model-ranking .sub { font-size: 0.7rem; color: var(--ink-muted); margin-top: 0.15rem; }
        .model-ranking .bar-cell { width: 30%; padding: 0.45rem 0.6rem; }
        .model-ranking .bar-wrap { height: 6px; background: var(--paper-alt); border-radius: 3px; overflow: hidden; }
        .model-ranking .bar { height: 100%; transition: width 0.2s; }
      `})]})}export{k as default};
