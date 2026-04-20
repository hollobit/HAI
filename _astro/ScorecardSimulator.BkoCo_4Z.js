import{j as r}from"./jsx-runtime.u17CrQMm.js";import{r as f}from"./index.CNSOJBbx.js";const b=["notable-ml-models","datacenters","industrial-robots-2024","medical-ai-publications","ai-engineering-skills-diffusion","ai-literacy-skills-diffusion","ai-use-at-work","ai-trust-at-work","ai-trust-public-2025"],I=[...b,"private-ai-investment-2025","private-ai-investment-cumulative","ai-companies-new-2025","ai-patents-per-capita","ai-talent-concentration","ai-talent-migration-net","ai-hiring-rate-yoy","ai-diffusion-2025-h2","ai-policy-maturity-2025","ai-bills-passed-cumulative","ai-highly-cited-cs-pubs-2023"],P=new Set(I),R=["hai_default","investment","research","deployment"],z={hai_default:{label:"HAI 기본 (9 차원)",dims:[...b],weightOverrides:{}},investment:{label:"투자 중심",dims:["notable-ml-models","datacenters","ai-companies-new-2025","private-ai-investment-2025","private-ai-investment-cumulative","ai-talent-concentration","ai-talent-migration-net","ai-hiring-rate-yoy","ai-diffusion-2025-h2"],weightOverrides:{"private-ai-investment-2025":2,"private-ai-investment-cumulative":2,"ai-companies-new-2025":1.5}},research:{label:"연구 중심",dims:["notable-ml-models","ai-patents-per-capita","ai-highly-cited-cs-pubs-2023","medical-ai-publications","ai-engineering-skills-diffusion","datacenters","ai-talent-concentration"],weightOverrides:{"notable-ml-models":2,"ai-patents-per-capita":1.5,"ai-highly-cited-cs-pubs-2023":1.5}},deployment:{label:"배치 중심",dims:["ai-diffusion-2025-h2","ai-use-at-work","ai-trust-at-work","ai-trust-public-2025","industrial-robots-2024","ai-literacy-skills-diffusion","ai-bills-passed-cumulative","ai-policy-maturity-2025"],weightOverrides:{"ai-diffusion-2025-h2":1.5,"ai-use-at-work":1.5}}};function L(i){return[...z[i].dims]}function M(i,n,s){return Math.max(n,Math.min(s,i))}function C(i,n){return i.length!==n.length?!1:i.every((s,l)=>s===n[l])}function T(i){for(const n of R)if(C(i,z[n].dims))return n;return null}function U(i){const n=i.get("preset");let s=n&&R.includes(n)?n:null;const l=i.get("dims");let o;l?(o=l.split(",").map(c=>c.trim()).filter(c=>P.has(c)),o.length===0?(o=[...b],s="hai_default"):s=T(o)):s?o=L(s):(s="hai_default",o=[...b]);const d={},p=i.get("w");if(p){const c=p.split(",");for(let m=0;m<Math.min(c.length,o.length);m++){const u=Number(c[m]);Number.isNaN(u)||(d[o[m]]=M(u,.5,2))}}const w={},j=i.get("adj");if(j){const c=j.split(",");for(let m=0;m<Math.min(c.length,o.length);m++){const u=Number(c[m]);!Number.isNaN(u)&&u!==0&&(w[o[m]]=M(u,-100,100))}}return{preset:s,dims:o,weights:d,adjustments:w}}function $(i){const n=new URLSearchParams,s=Object.keys(i.weights).length>0,l=Object.keys(i.adjustments).length>0,o=T(i.dims);if(o&&!s&&!l)return o!=="hai_default"&&n.set("preset",o),n;if(C(i.dims,b)||n.set("dims",i.dims.join(",")),s){const d=i.dims.map(p=>(i.weights[p]??"").toString()).join(",");d.replace(/,/g,"").length>0&&n.set("w",d)}if(l){const d=i.dims.map(p=>(i.adjustments[p]??0).toString()).join(",");d.replace(/[0,]/g,"").length>0&&n.set("adj",d)}return n}function W(i){if(typeof window>"u")return;const n=new URL(window.location.href),s=$(i);for(const l of["preset","dims","w","adj"])n.searchParams.delete(l);for(const[l,o]of s.entries())n.searchParams.set(l,o);window.history.replaceState({},"",n.toString())}function A(i,n){return n<=0||i<=0?0:Math.max(0,Math.min(100,(n-i+1)/n*100))}function B(i,n){if(i.korea_value===null||n===0)return i.korea_rank;const s=i.korea_value*(1+n/100);if(s<=0)return i.total_countries;let l=0;for(const d of i.top10)d.is_korea||d.value>s&&l++;const o=l+1;return n>0?Math.min(i.korea_rank,o):Math.max(i.korea_rank,o)}function H({data:i}){const n=f.useMemo(()=>{const e=new Map;for(const a of i.dimensions)e.set(a.id,a);return e},[i.dimensions]),[s,l]=f.useState({preset:"hai_default",dims:[...b],weights:{},adjustments:{}});f.useEffect(()=>{if(typeof window>"u")return;const e=U(new URLSearchParams(window.location.search));l(e)},[]),f.useEffect(()=>{W(s)},[s]);const o=e=>{const a=L(e);l({preset:e,dims:a,weights:{},adjustments:{}})},d=e=>{const a=new Set(s.dims);a.has(e)?a.delete(e):a.add(e);const t=I.filter(h=>a.has(h));l({...s,preset:null,dims:t})},p=(e,a)=>{l({...s,preset:null,weights:{...s.weights,[e]:a}})},w=e=>{const a={...s.weights};delete a[e],l({...s,weights:a})},j=(e,a)=>{const t={...s.adjustments};a===0?delete t[e]:t[e]=a,l({...s,adjustments:t})},c=f.useMemo(()=>s.dims.map(e=>n.get(e)).filter(e=>e!==void 0).map(e=>{const a=s.weights[e.id]??e.weight_default,t=s.adjustments[e.id]??0,h=A(e.korea_rank,e.total_countries),g=B(e,t),S=A(g,e.total_countries);return{dim:e,weight:a,adj:t,baseRank:e.korea_rank,baseRankScore:h,adjRank:g,adjRankScore:S}}),[s,n]),m=f.useMemo(()=>{const e=c.reduce((a,t)=>a+t.weight,0);return e===0?0:c.reduce((a,t)=>a+t.baseRankScore*t.weight,0)/e},[c]),u=f.useMemo(()=>{const e=c.reduce((a,t)=>a+t.weight,0);return e===0?0:c.reduce((a,t)=>a+t.adjRankScore*t.weight,0)/e},[c]),k=u-m,D=k>.5?"#16a34a":k<-.5?"#dc2626":"var(--ink-muted)",N=[{min:85,label:"🏆 AI 3강 확정",short:"Established AI Superpower",color:"#15803d"},{min:70,label:"🔥 3강 안정권 진입",short:"Stable Top-3 zone",color:"#65a30d"},{min:55,label:"⚔️ 3강 경쟁권",short:"Competing for Top 3",color:"#2563eb"},{min:40,label:"🎯 진입 경쟁 중",short:"Mid-tier, challenger",color:"#d97706"},{min:0,label:"📍 AI 후발 / 재편 필요",short:"Early tier, strategic reset needed",color:"#dc2626"}];function E(e){return N.find(a=>e>=a.min)}const y=E(m),_=E(u),F=y.label!==_.label,O=f.useMemo(()=>{const e={};for(const a of i.dimensions)e[a.dimension]||(e[a.dimension]=[]),e[a.dimension].push(a);return e},[i.dimensions]);return r.jsxs("div",{className:"ext-sim",children:[r.jsxs("div",{className:"presets",children:[r.jsx("strong",{children:"프리셋:"}),R.map(e=>r.jsx("button",{type:"button",onClick:()=>o(e),className:s.preset===e?"active":"",children:z[e].label},e))]}),r.jsxs("div",{className:"score-box",children:[r.jsxs("div",{className:"side",children:[r.jsx("div",{className:"label",children:"현재 (Before)"}),r.jsx("div",{className:"big",children:m.toFixed(1)}),r.jsx("div",{className:"tier",style:{color:y.color},children:y.label})]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsxs("div",{className:"side",children:[r.jsx("div",{className:"label",children:"시뮬레이션 (After)"}),r.jsxs("div",{className:"big",style:{color:D},children:[u.toFixed(1),r.jsxs("span",{className:"delta",children:["(",k>=0?"+":"",k.toFixed(1),")"]})]}),r.jsxs("div",{className:"tier",style:{color:_.color},children:[_.label,F&&r.jsx("span",{className:"tier-changed",children:"↑ 단계 변동"})]})]}),r.jsxs("div",{className:"side",children:[r.jsx("div",{className:"label",children:"선택 차원"}),r.jsxs("div",{className:"big",children:[s.dims.length,r.jsx("span",{className:"delta",children:"/20"})]})]})]}),r.jsxs("div",{className:"tier-ladder",children:[r.jsx("h4",{children:"🎚️ AI 3강 안정권 가이드 — overall 점수 → 진입 단계"}),r.jsx("div",{className:"ladder",children:N.map(e=>{const a=y.min===e.min,t=_.min===e.min;return r.jsxs("div",{className:`tier-row ${a?"is-before":""} ${t?"is-after":""}`,style:{borderLeftColor:e.color},children:[r.jsx("span",{className:"tier-range",children:e.min===0?"< 40":e.min===85?"85 +":`${e.min}–${N[N.indexOf(e)-1].min-1}`}),r.jsx("span",{className:"tier-label",style:{color:e.color},children:e.label}),r.jsx("span",{className:"tier-desc",children:e.short}),r.jsxs("span",{className:"tier-markers",children:[a&&r.jsx("span",{className:"marker before",children:"BEFORE"}),t&&r.jsx("span",{className:"marker after",children:"AFTER"})]})]},e.min)})}),r.jsxs("p",{className:"tier-caveat",children:[r.jsx("strong",{children:"해석 근거:"})," 각 차원의 rank_score ",r.jsx("code",{children:"= (total − rank + 1) / total × 100"}),' 에서 "대부분 차원 top 3" 는 약 85+ 에 해당. 70 이상이면 top 5-10 권내에서 안정, 40 미만이면 중위권 이하. 가중치와 차원 구성에 따라 해석이 달라지므로 ',r.jsx("strong",{children:"프리셋별 비교"}),"를 권장."]}),r.jsxs("p",{className:"tier-caveat",children:[r.jsx("strong",{children:"현 시나리오에서 3강 안정권(70+) 진입 방법:"})," 투자 중심 프리셋에서 ",r.jsx("code",{children:"private-ai-investment-2025"})," 를 +100% 조정해도 한국의 rank 개선이 제한적 (top10 밖). ",r.jsx("code",{children:"ai-patents-per-capita"})," (현 1위 근접) · ",r.jsx("code",{children:"ai-bills-passed-cumulative"})," (2위) 등 이미 강한 차원에 집중 가중치를 부여하는 게 빠른 경로."]})]}),r.jsx("div",{className:"groups",children:Object.entries(O).map(([e,a])=>r.jsxs("section",{children:[r.jsx("h3",{children:e}),r.jsx("div",{className:"dim-list",children:a.map(t=>{const h=s.dims.includes(t.id),g=c.find(v=>v.dim.id===t.id),S=s.weights[t.id]??t.weight_default,x=s.adjustments[t.id]??0;return r.jsxs("article",{className:`dim-row ${h?"on":"off"} ${t.is_new?"new":""}`,children:[r.jsxs("header",{children:[r.jsxs("label",{className:"check",children:[r.jsx("input",{type:"checkbox",checked:h,onChange:()=>d(t.id)}),r.jsxs("span",{className:"title",children:[t.label_ko,t.is_new&&r.jsx("span",{className:"tag-new",children:"NEW"})]})]}),r.jsxs("span",{className:"rank",children:["KR ",t.korea_rank,"/",t.total_countries," · ",t.source]})]}),h&&r.jsxs("div",{className:"controls",children:[r.jsxs("div",{className:"ctrl",children:[r.jsxs("label",{children:["가중치 ",r.jsxs("strong",{children:[S.toFixed(1),"×"]})," ",r.jsxs("span",{className:"muted",children:["(기본 ",t.weight_default.toFixed(1),")"]})]}),r.jsx("input",{type:"range",min:.5,max:2,step:.1,value:S,onChange:v=>p(t.id,Number(v.target.value))}),s.weights[t.id]!==void 0&&r.jsx("button",{type:"button",className:"link",onClick:()=>w(t.id),children:"기본값으로"})]}),r.jsxs("div",{className:"ctrl",children:[r.jsxs("label",{children:["값 조정 ",r.jsxs("strong",{style:{color:x>0?"#16a34a":x<0?"#dc2626":"var(--ink)"},children:[x>=0?"+":"",x,"%"]})," ",r.jsxs("span",{className:"muted",children:["(",g?`→ ${g.adjRank}위 / rank-score ${g.adjRankScore.toFixed(0)}`:"",")"]})]}),r.jsx("input",{type:"range",min:-100,max:100,step:5,value:x,onChange:v=>j(t.id,Number(v.target.value))})]})]})]},t.id)})})]},e))}),r.jsxs("p",{className:"caveat",children:["⚠️ 가중치와 값 조정은 ",r.jsx("strong",{children:"내부 시뮬레이션"}),"입니다. 실제 평가는 산업 구조·시차·외부 환경을 추가로 고려해야 합니다. URL 로 시나리오를 공유할 수 있습니다."]}),r.jsx("style",{children:`
        .ext-sim { display: flex; flex-direction: column; gap: 1.5rem; }
        .presets { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
        .presets strong { margin-right: 0.5rem; }
        .presets button {
          padding: 0.45rem 0.9rem; border: 1px solid var(--border); background: var(--paper);
          border-radius: 999px; cursor: pointer; font-size: 0.85rem; color: var(--ink);
        }
        .presets button:hover { background: var(--paper-alt); }
        .presets button.active { background: var(--accent); color: #fff; border-color: var(--accent); }

        .score-box {
          display: grid; grid-template-columns: 1fr auto 1fr 1fr; gap: 1.5rem; align-items: center;
          padding: 1.25rem 2rem; border: 1px solid var(--border); border-radius: 12px; background: var(--paper-alt);
        }
        .score-box .side { text-align: center; }
        .score-box .label { font-size: 0.8rem; color: var(--ink-muted); }
        .score-box .big { font-size: 2.5rem; font-weight: 700; color: var(--ink); line-height: 1; }
        .score-box .big .delta { font-size: 0.9rem; margin-left: 0.3rem; color: var(--ink-muted); }
        .score-box .arrow { font-size: 1.5rem; color: var(--ink-muted); }
        .score-box .tier { margin-top: 0.5rem; font-size: 0.8rem; font-weight: 600; }
        .score-box .tier-changed { margin-left: 0.4rem; padding: 0.1rem 0.4rem; border-radius: 3px; background: #fbbf24; color: #78350f; font-size: 0.65rem; font-weight: 700; }

        .tier-ladder {
          padding: 1rem 1.25rem; border: 1px dashed var(--border); border-radius: 8px; background: var(--paper-alt);
        }
        .tier-ladder h4 { margin: 0 0 0.75rem; font-size: 0.95rem; color: var(--ink); }
        .ladder { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.75rem; }
        .tier-row {
          display: grid; grid-template-columns: 5rem 12rem 1fr auto; gap: 0.75rem;
          padding: 0.55rem 0.85rem; border-left: 4px solid; background: var(--paper);
          border-radius: 4px; align-items: center; font-size: 0.82rem;
        }
        .tier-row.is-before { background: rgba(100, 116, 139, 0.08); }
        .tier-row.is-after { background: rgba(34, 197, 94, 0.12); font-weight: 600; }
        .tier-range { font-family: var(--mono, monospace); font-weight: 600; color: var(--ink-muted); }
        .tier-label { font-weight: 600; }
        .tier-desc { color: var(--ink-muted); font-size: 0.78rem; }
        .tier-markers { display: flex; gap: 0.3rem; }
        .marker { padding: 0.1rem 0.5rem; border-radius: 3px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; }
        .marker.before { background: #e5e7eb; color: #374151; }
        .marker.after { background: #22c55e; color: #fff; }
        .tier-caveat { font-size: 0.8rem; color: var(--ink-muted); line-height: 1.65; margin: 0.5rem 0 0; }
        .tier-caveat code { font-size: 0.78rem; padding: 0.05rem 0.3rem; border-radius: 3px; background: var(--paper); border: 1px solid var(--border); color: var(--ink); }

        @media (max-width: 700px) {
          .tier-row { grid-template-columns: 1fr; }
          .tier-range, .tier-desc { grid-column: 1 / -1; }
        }

        .groups { display: flex; flex-direction: column; gap: 1.5rem; }
        .groups section h3 {
          font-size: 1rem; margin: 0 0 0.5rem; padding-bottom: 0.35rem;
          border-bottom: 1px solid var(--border); color: var(--ink);
        }

        .dim-list { display: flex; flex-direction: column; gap: 0.5rem; }
        .dim-row {
          padding: 0.6rem 0.8rem; border: 1px solid var(--border); border-radius: 8px;
          background: var(--paper);
        }
        .dim-row.off { opacity: 0.55; background: var(--paper-alt); }
        .dim-row.on.new { border-left: 3px solid var(--accent); }
        .dim-row header { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap; }
        .dim-row .check { display: flex; gap: 0.5rem; align-items: center; cursor: pointer; flex: 1; }
        .dim-row .title { font-weight: 500; }
        .dim-row .tag-new { margin-left: 0.4rem; font-size: 0.65rem; padding: 0.1rem 0.4rem; background: var(--accent); color: #fff; border-radius: 3px; font-weight: 700; }
        .dim-row .rank { font-size: 0.75rem; color: var(--ink-muted); font-family: var(--mono, monospace); }

        .controls {
          margin-top: 0.6rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
        }
        @media (max-width: 600px) { .controls { grid-template-columns: 1fr; } }
        .ctrl label { font-size: 0.8rem; color: var(--ink); display: block; margin-bottom: 0.25rem; }
        .ctrl .muted { color: var(--ink-muted); font-size: 0.75rem; }
        .ctrl input[type="range"] { width: 100%; }
        .ctrl .link {
          margin-top: 0.25rem; font-size: 0.7rem; background: none; border: none;
          color: var(--accent); cursor: pointer; padding: 0;
        }

        .caveat { font-size: 0.8rem; color: var(--ink-muted); padding: 0.75rem 1rem; background: var(--paper-alt); border-left: 3px solid var(--border); border-radius: 4px; margin: 0; }
      `})]})}export{H as default};
