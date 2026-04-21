import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as c}from"./index.CNSOJBbx.js";import{R as p}from"./CategoricalChart.f7dab8a1.js";import{B as d,a as n}from"./BarChart.BBMBQadD.js";import{C as m}from"./CartesianGrid.CyWqzoyo.js";import{X as u,Y as h}from"./YAxis.39uZI7pk.js";import{T as f}from"./getClassNameFromUnknown.K_RGuqpw.js";import{L as b}from"./Legend.CO1hUxsb.js";const i=10;function z({data:o}){const[r,s]=c.useState("recent_3y"),l=c.useMemo(()=>Object.entries(o.by_country).map(([a,t])=>({country:a,"open-weight":t[r]["open-weight"],"closed-api":t[r]["closed-api"],closed:t[r].closed,total:t[r].all})).sort((a,t)=>t.total-a.total).slice(0,i),[o,r]);return e.jsxs("div",{className:"epoch-country-bar",children:[e.jsxs("div",{className:"controls",children:[e.jsx("strong",{children:"시간 범위:"}),e.jsxs("button",{type:"button",className:r==="cumulative"?"active":"",onClick:()=>s("cumulative"),children:["누적 (2000-",o.cutoff_year,")"]}),e.jsx("button",{type:"button",className:r==="recent_3y"?"active":"",onClick:()=>s("recent_3y"),children:"최근 3년"})]}),e.jsx(p,{width:"100%",height:380,children:e.jsxs(d,{data:l,margin:{top:16,right:30,bottom:60,left:30},children:[e.jsx(m,{strokeDasharray:"3 3",stroke:"var(--border)"}),e.jsx(u,{dataKey:"country",tick:{fontSize:10},interval:0,angle:-30,textAnchor:"end",height:60}),e.jsx(h,{tick:{fontSize:11},label:{value:"Notable AI 모델 수",angle:-90,position:"insideLeft",offset:-8,style:{fontSize:11,fill:"var(--ink-muted)"}}}),e.jsx(f,{}),e.jsx(b,{wrapperStyle:{fontSize:"0.8rem"}}),e.jsx(n,{dataKey:"open-weight",name:"🔓 open-weight",stackId:"a",fill:"#2563eb"}),e.jsx(n,{dataKey:"closed-api",name:"🔒 closed-API",stackId:"a",fill:"#d97757"}),e.jsx(n,{dataKey:"closed",name:"⚫ closed",stackId:"a",fill:"#6b7280"})]})}),e.jsxs("p",{className:"attribution",children:["Top ",i," 국가 · 출처: ",e.jsx("a",{href:o.source_url,target:"_blank",rel:"noopener noreferrer",children:"Epoch AI Notable Models DB"})]}),e.jsx("style",{children:`
        .epoch-country-bar .controls {
          display: flex; gap: 0.4rem; align-items: center;
          margin-bottom: 0.75rem; font-size: 0.85rem; flex-wrap: wrap;
        }
        .epoch-country-bar .controls button {
          padding: 0.3rem 0.75rem; border: 1px solid var(--border); border-radius: 999px;
          background: var(--paper); color: var(--ink); cursor: pointer; font-size: 0.8rem;
        }
        .epoch-country-bar .controls button:hover { background: var(--paper-alt); }
        .epoch-country-bar .controls button.active {
          background: var(--accent); color: #fff; border-color: var(--accent);
        }
        .epoch-country-bar .attribution {
          margin-top: 0.5rem; font-size: 0.75rem; color: var(--ink-muted);
        }
        .epoch-country-bar .attribution a { color: var(--accent); }
      `})]})}export{z as default};
