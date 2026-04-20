import{j as t}from"./jsx-runtime.u17CrQMm.js";import{r as l}from"./index.CNSOJBbx.js";import{R as h}from"./CategoricalChart.Bx28pYfa.js";import{R as x,P as j,a as g,b as k,c as f}from"./RadarChart.DHahzQB5.js";import{T as w}from"./getClassNameFromUnknown.wrPRVtZO.js";import{L as b}from"./Legend.COj05mpd.js";function y(a,r,i){const o=r.scenarios[i];if(!o)return{...a};const s={...a},p=o.scaling??1,d=Object.keys(o.task_impacts).length>0?o.task_impacts:r.scenarios.full_completion?.task_impacts??{};for(const n of Object.values(d))for(const c of n.dims)s[c.dim_id]!==void 0&&(s[c.dim_id]=Math.max(0,Math.min(100,s[c.dim_id]+c.impact_score*p)));return s}function v(a){if(typeof window>"u")return a[0];const r=new URLSearchParams(window.location.search).get("scenario");return r&&a.includes(r)?r:a[0]}function _(a,r){if(typeof window>"u")return;const i=new URLSearchParams(window.location.search);a===r?i.delete("scenario"):i.set("scenario",a);const o=i.toString();window.history.replaceState(null,"",window.location.pathname+(o?"?"+o:"")+window.location.hash)}function P({impact:a,baselineScores:r}){const i=Object.keys(a.scenarios),o=i[0]??"full_completion",[s,p]=l.useState(()=>v(i));l.useEffect(()=>{_(s,o)},[s,o]);const d=l.useMemo(()=>{const e={};for(const m of r)e[m.id]=m.score;return e},[r]),n=l.useMemo(()=>y(d,a,s),[d,a,s]),c=l.useMemo(()=>r.map(e=>({dim:e.label_ko,current:e.score,projected:n[e.id]??e.score})),[r,n]),u=l.useMemo(()=>r.map(e=>({id:e.id,label_ko:e.label_ko,delta:(n[e.id]??e.score)-e.score})).filter(e=>Math.abs(e.delta)>.01).sort((e,m)=>Math.abs(m.delta)-Math.abs(e.delta)),[r,n]);return t.jsxs("div",{className:"impact-sim",children:[t.jsxs("div",{className:"controls",children:[t.jsx("strong",{children:"시나리오:"}),i.map(e=>t.jsx("button",{type:"button",className:s===e?"active":"",onClick:()=>p(e),children:a.scenarios[e].label_ko},e))]}),t.jsxs("div",{className:"layout",children:[t.jsx("div",{className:"chart",children:t.jsx(h,{width:"100%",height:380,children:t.jsxs(x,{data:c,outerRadius:130,children:[t.jsx(j,{stroke:"var(--border)"}),t.jsx(g,{dataKey:"dim",tick:{fontSize:10,fill:"var(--ink-muted)"}}),t.jsx(k,{domain:[0,100],tick:{fontSize:9}}),t.jsx(w,{}),t.jsx(b,{wrapperStyle:{fontSize:"0.8rem"}}),t.jsx(f,{name:"현재",dataKey:"current",stroke:"#6b7280",fill:"#6b7280",fillOpacity:.25}),t.jsx(f,{name:"시나리오 완수 후",dataKey:"projected",stroke:"#cd2e3a",fill:"#cd2e3a",fillOpacity:.35})]})})}),t.jsxs("div",{className:"deltas",children:[t.jsx("h4",{children:"📈 시나리오 영향 (지표별 변동)"}),u.length===0?t.jsxs("p",{className:"empty",children:["현재 시나리오에 영향이 기록된 지표 없음. ",a.default_qualitative]}):t.jsx("ul",{children:u.map(e=>t.jsxs("li",{children:[t.jsx("strong",{children:e.label_ko}),t.jsxs("span",{className:e.delta>=0?"up":"down",children:[e.delta>=0?"+":"",e.delta.toFixed(1)," pt"]})]},e.id))}),t.jsxs("p",{className:"note",children:["영향 점수: ",Object.keys(a.scenarios[s]?.task_impacts??{}).length,"개 task × scaling ",a.scenarios[s]?.scaling??1,". 나머지 task 는 정성 평가 (impact_score 미설정)."]})]})]}),t.jsx("style",{children:`
        .impact-sim .controls {
          display: flex; gap: 0.4rem; align-items: center;
          margin-bottom: 0.75rem; font-size: 0.85rem; flex-wrap: wrap;
        }
        .impact-sim .controls button {
          padding: 0.3rem 0.75rem; border: 1px solid var(--border); border-radius: 999px;
          background: var(--paper); color: var(--ink); cursor: pointer; font-size: 0.8rem;
        }
        .impact-sim .controls button.active {
          background: #cd2e3a; color: #fff; border-color: #cd2e3a;
        }
        .impact-sim .layout {
          display: grid; grid-template-columns: 1fr 320px; gap: 1rem;
        }
        @media (max-width: 900px) {
          .impact-sim .layout { grid-template-columns: 1fr; }
        }
        .impact-sim .deltas {
          padding: 0.8rem 1rem; border: 1px solid var(--border);
          border-radius: 6px; background: var(--paper);
        }
        .impact-sim .deltas h4 { font-size: 0.95rem; margin: 0 0 0.5rem; }
        .impact-sim .empty {
          font-size: 0.85rem; color: var(--ink-muted); font-style: italic;
        }
        .impact-sim .deltas ul { list-style: none; padding: 0; margin: 0; }
        .impact-sim .deltas li {
          padding: 0.35rem 0; border-bottom: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.85rem;
        }
        .impact-sim .deltas li:last-child { border-bottom: none; }
        .impact-sim .up { color: #31a354; font-weight: 600; }
        .impact-sim .down { color: #d97757; font-weight: 600; }
        .impact-sim .note {
          margin-top: 0.6rem; font-size: 0.75rem; color: var(--ink-muted);
        }
      `})]})}export{P as default};
