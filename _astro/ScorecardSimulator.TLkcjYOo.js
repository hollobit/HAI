import{j as r}from"./jsx-runtime.u17CrQMm.js";import{r as h}from"./index.CNSOJBbx.js";const w=["notable-ml-models","datacenters","industrial-robots-2024","medical-ai-publications","ai-engineering-skills-diffusion","ai-literacy-skills-diffusion","ai-use-at-work","ai-trust-at-work","ai-trust-public-2025"],L=[...w,"private-ai-investment-2025","private-ai-investment-cumulative","ai-companies-new-2025","ai-patents-per-capita","ai-talent-concentration","ai-talent-migration-net","ai-hiring-rate-yoy","ai-diffusion-2025-h2","ai-policy-maturity-2025","ai-bills-passed-cumulative","ai-highly-cited-cs-pubs-2023","open-weight-models-cumulative","open-weight-models-recent-3y"],U=new Set(L),R=["hai_default","investment","research","deployment","sovereignty"],z={hai_default:{label:"HAI 기본 (9 차원)",dims:[...w],weightOverrides:{}},investment:{label:"투자 중심",dims:["notable-ml-models","datacenters","ai-companies-new-2025","private-ai-investment-2025","private-ai-investment-cumulative","ai-talent-concentration","ai-talent-migration-net","ai-hiring-rate-yoy","ai-diffusion-2025-h2"],weightOverrides:{"private-ai-investment-2025":2,"private-ai-investment-cumulative":2,"ai-companies-new-2025":1.5}},research:{label:"연구 중심",dims:["notable-ml-models","ai-patents-per-capita","ai-highly-cited-cs-pubs-2023","medical-ai-publications","ai-engineering-skills-diffusion","datacenters","ai-talent-concentration","open-weight-models-cumulative","open-weight-models-recent-3y"],weightOverrides:{"notable-ml-models":2,"ai-patents-per-capita":1.5,"ai-highly-cited-cs-pubs-2023":1.5,"open-weight-models-cumulative":1.3,"open-weight-models-recent-3y":1.5}},deployment:{label:"배치 중심",dims:["ai-diffusion-2025-h2","ai-use-at-work","ai-trust-at-work","ai-trust-public-2025","industrial-robots-2024","ai-literacy-skills-diffusion","ai-bills-passed-cumulative","ai-policy-maturity-2025"],weightOverrides:{"ai-diffusion-2025-h2":1.5,"ai-use-at-work":1.5}},sovereignty:{label:"🇰🇷 AI 주권 중심",dims:["open-weight-models-recent-3y","open-weight-models-cumulative","notable-ml-models","datacenters","ai-patents-per-capita","ai-talent-concentration","ai-talent-migration-net","ai-policy-maturity-2025","private-ai-investment-cumulative"],weightOverrides:{"open-weight-models-recent-3y":2,"open-weight-models-cumulative":1.5,"notable-ml-models":1.8,datacenters:1.5,"ai-talent-migration-net":1.3,"ai-patents-per-capita":1.3}}};function C(i){return[...z[i].dims]}function A(i,n,a){return Math.max(n,Math.min(a,i))}function D(i,n){return i.length!==n.length?!1:i.every((a,o)=>a===n[o])}function O(i){for(const n of R)if(D(i,z[n].dims))return n;return null}function $(i){const n=i.get("preset");let a=n&&R.includes(n)?n:null;const o=i.get("dims");let l;o?(l=o.split(",").map(c=>c.trim()).filter(c=>U.has(c)),l.length===0?(l=[...w],a="hai_default"):a=O(l)):a?l=C(a):(a="hai_default",l=[...w]);const d={},g=i.get("w");if(g){const c=g.split(",");for(let m=0;m<Math.min(c.length,l.length);m++){const p=Number(c[m]);Number.isNaN(p)||(d[l[m]]=A(p,.5,2))}}const j={},k=i.get("adj");if(k){const c=k.split(",");for(let m=0;m<Math.min(c.length,l.length);m++){const p=Number(c[m]);!Number.isNaN(p)&&p!==0&&(j[l[m]]=A(p,-100,100))}}return{preset:a,dims:l,weights:d,adjustments:j}}function W(i){const n=new URLSearchParams,a=Object.keys(i.weights).length>0,o=Object.keys(i.adjustments).length>0,l=O(i.dims);if(l&&!a&&!o)return l!=="hai_default"&&n.set("preset",l),n;if(D(i.dims,w)||n.set("dims",i.dims.join(",")),a){const d=i.dims.map(g=>(i.weights[g]??"").toString()).join(",");d.replace(/,/g,"").length>0&&n.set("w",d)}if(o){const d=i.dims.map(g=>(i.adjustments[g]??0).toString()).join(",");d.replace(/[0,]/g,"").length>0&&n.set("adj",d)}return n}function B(i){if(typeof window>"u")return;const n=new URL(window.location.href),a=W(i);for(const o of["preset","dims","w","adj"])n.searchParams.delete(o);for(const[o,l]of a.entries())n.searchParams.set(o,l);window.history.replaceState({},"",n.toString())}function I(i,n){return n<=0||i<=0?0:Math.max(0,Math.min(100,(n-i+1)/n*100))}function V(i,n){if(i.korea_value===null||n===0)return i.korea_rank;const a=i.korea_value*(1+n/100);if(a<=0)return i.total_countries;let o=0;for(const d of i.top10)d.is_korea||d.value>a&&o++;const l=o+1;return n>0?Math.min(i.korea_rank,l):Math.max(i.korea_rank,l)}function K({data:i}){const n=h.useMemo(()=>{const e=new Map;for(const s of i.dimensions)e.set(s.id,s);return e},[i.dimensions]),[a,o]=h.useState({preset:"hai_default",dims:[...w],weights:{},adjustments:{}});h.useEffect(()=>{if(typeof window>"u")return;const e=$(new URLSearchParams(window.location.search));o(e)},[]),h.useEffect(()=>{B(a)},[a]),h.useEffect(()=>{if(typeof window>"u")return;const e=s=>{const t=s.detail;!t||typeof t!="object"||o(f=>{const u={...f.adjustments};for(const[b,x]of Object.entries(t)){const v=u[b]??0,M=Math.max(-100,Math.min(100,v+x));M===0?delete u[b]:u[b]=Math.round(M)}return{...f,adjustments:u}})};return window.addEventListener("applyScenarioDeltas",e),()=>window.removeEventListener("applyScenarioDeltas",e)},[]);const l=e=>{const s=C(e);o({preset:e,dims:s,weights:{},adjustments:{}})},d=e=>{const s=new Set(a.dims);s.has(e)?s.delete(e):s.add(e);const t=L.filter(f=>s.has(f));o({...a,preset:null,dims:t})},g=(e,s)=>{o({...a,preset:null,weights:{...a.weights,[e]:s}})},j=e=>{const s={...a.weights};delete s[e],o({...a,weights:s})},k=(e,s)=>{const t={...a.adjustments};s===0?delete t[e]:t[e]=s,o({...a,adjustments:t})},c=h.useMemo(()=>a.dims.map(e=>n.get(e)).filter(e=>e!==void 0).map(e=>{const s=a.weights[e.id]??e.weight_default,t=a.adjustments[e.id]??0,f=I(e.korea_rank,e.total_countries),u=V(e,t),b=I(u,e.total_countries);return{dim:e,weight:s,adj:t,baseRank:e.korea_rank,baseRankScore:f,adjRank:u,adjRankScore:b}}),[a,n]),m=h.useMemo(()=>{const e=c.reduce((s,t)=>s+t.weight,0);return e===0?0:c.reduce((s,t)=>s+t.baseRankScore*t.weight,0)/e},[c]),p=h.useMemo(()=>{const e=c.reduce((s,t)=>s+t.weight,0);return e===0?0:c.reduce((s,t)=>s+t.adjRankScore*t.weight,0)/e},[c]),y=p-m,T=y>.5?"#16a34a":y<-.5?"#dc2626":"var(--ink-muted)",N=[{min:85,label:"🏆 AI 3강 확정",short:"Established AI Superpower",color:"#15803d"},{min:70,label:"🔥 3강 안정권 진입",short:"Stable Top-3 zone",color:"#65a30d"},{min:55,label:"⚔️ 3강 경쟁권",short:"Competing for Top 3",color:"#2563eb"},{min:40,label:"🎯 진입 경쟁 중",short:"Mid-tier, challenger",color:"#d97706"},{min:0,label:"📍 AI 후발 / 재편 필요",short:"Early tier, strategic reset needed",color:"#dc2626"}];function E(e){return N.find(s=>e>=s.min)}const S=E(m),_=E(p),F=S.label!==_.label,P=h.useMemo(()=>{const e={};for(const s of i.dimensions)e[s.dimension]||(e[s.dimension]=[]),e[s.dimension].push(s);return e},[i.dimensions]);return r.jsxs("div",{className:"ext-sim",children:[r.jsxs("div",{className:"presets",children:[r.jsx("strong",{children:"프리셋:"}),R.map(e=>r.jsx("button",{type:"button",onClick:()=>l(e),className:a.preset===e?"active":"",children:z[e].label},e))]}),r.jsxs("div",{className:"score-box",children:[r.jsxs("div",{className:"side",children:[r.jsx("div",{className:"label",children:"현재 (Before)"}),r.jsx("div",{className:"big",children:m.toFixed(1)}),r.jsx("div",{className:"tier",style:{color:S.color},children:S.label})]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsxs("div",{className:"side",children:[r.jsx("div",{className:"label",children:"시뮬레이션 (After)"}),r.jsxs("div",{className:"big",style:{color:T},children:[p.toFixed(1),r.jsxs("span",{className:"delta",children:["(",y>=0?"+":"",y.toFixed(1),")"]})]}),r.jsxs("div",{className:"tier",style:{color:_.color},children:[_.label,F&&r.jsx("span",{className:"tier-changed",children:"↑ 단계 변동"})]})]}),r.jsxs("div",{className:"side",children:[r.jsx("div",{className:"label",children:"선택 차원"}),r.jsxs("div",{className:"big",children:[a.dims.length,r.jsx("span",{className:"delta",children:"/20"})]})]})]}),r.jsxs("div",{className:"tier-ladder",children:[r.jsx("h4",{children:"🎚️ AI 3강 안정권 가이드 — overall 점수 → 진입 단계"}),r.jsx("div",{className:"ladder",children:N.map(e=>{const s=S.min===e.min,t=_.min===e.min;return r.jsxs("div",{className:`tier-row ${s?"is-before":""} ${t?"is-after":""}`,style:{borderLeftColor:e.color},children:[r.jsx("span",{className:"tier-range",children:e.min===0?"< 40":e.min===85?"85 +":`${e.min}–${N[N.indexOf(e)-1].min-1}`}),r.jsx("span",{className:"tier-label",style:{color:e.color},children:e.label}),r.jsx("span",{className:"tier-desc",children:e.short}),r.jsxs("span",{className:"tier-markers",children:[s&&r.jsx("span",{className:"marker before",children:"BEFORE"}),t&&r.jsx("span",{className:"marker after",children:"AFTER"})]})]},e.min)})}),r.jsxs("p",{className:"tier-caveat",children:[r.jsx("strong",{children:"해석 근거:"})," 각 차원의 rank_score ",r.jsx("code",{children:"= (total − rank + 1) / total × 100"}),' 에서 "대부분 차원 top 3" 는 약 85+ 에 해당. 70 이상이면 top 5-10 권내에서 안정, 40 미만이면 중위권 이하. 가중치와 차원 구성에 따라 해석이 달라지므로 ',r.jsx("strong",{children:"프리셋별 비교"}),"를 권장."]}),r.jsxs("p",{className:"tier-caveat",children:[r.jsx("strong",{children:"현 시나리오에서 3강 안정권(70+) 진입 방법:"})," 투자 중심 프리셋에서 ",r.jsx("code",{children:"private-ai-investment-2025"})," 를 +100% 조정해도 한국의 rank 개선이 제한적 (top10 밖). ",r.jsx("code",{children:"ai-patents-per-capita"})," (현 1위 근접) · ",r.jsx("code",{children:"ai-bills-passed-cumulative"})," (2위) 등 이미 강한 차원에 집중 가중치를 부여하는 게 빠른 경로."]})]}),r.jsx("div",{className:"groups",children:Object.entries(P).map(([e,s])=>r.jsxs("section",{children:[r.jsx("h3",{children:e}),r.jsx("div",{className:"dim-list",children:s.map(t=>{const f=a.dims.includes(t.id),u=c.find(v=>v.dim.id===t.id),b=a.weights[t.id]??t.weight_default,x=a.adjustments[t.id]??0;return r.jsxs("article",{className:`dim-row ${f?"on":"off"} ${t.is_new?"new":""}`,children:[r.jsxs("header",{children:[r.jsxs("label",{className:"check",children:[r.jsx("input",{type:"checkbox",checked:f,onChange:()=>d(t.id)}),r.jsxs("span",{className:"title",children:[t.label_ko,t.is_new&&r.jsx("span",{className:"tag-new",children:"NEW"})]})]}),r.jsxs("span",{className:"rank",children:["KR ",t.korea_rank,"/",t.total_countries," · ",t.source]})]}),f&&r.jsxs("div",{className:"controls",children:[r.jsxs("div",{className:"ctrl",children:[r.jsxs("label",{children:["가중치 ",r.jsxs("strong",{children:[b.toFixed(1),"×"]})," ",r.jsxs("span",{className:"muted",children:["(기본 ",t.weight_default.toFixed(1),")"]})]}),r.jsx("input",{type:"range",min:.5,max:2,step:.1,value:b,onChange:v=>g(t.id,Number(v.target.value))}),a.weights[t.id]!==void 0&&r.jsx("button",{type:"button",className:"link",onClick:()=>j(t.id),children:"기본값으로"})]}),r.jsxs("div",{className:"ctrl",children:[r.jsxs("label",{children:["값 조정 ",r.jsxs("strong",{style:{color:x>0?"#16a34a":x<0?"#dc2626":"var(--ink)"},children:[x>=0?"+":"",x,"%"]})," ",r.jsxs("span",{className:"muted",children:["(",u?`→ ${u.adjRank}위 / rank-score ${u.adjRankScore.toFixed(0)}`:"",")"]})]}),r.jsx("input",{type:"range",min:-100,max:100,step:5,value:x,onChange:v=>k(t.id,Number(v.target.value))})]})]})]},t.id)})})]},e))}),r.jsxs("p",{className:"caveat",children:["⚠️ 가중치와 값 조정은 ",r.jsx("strong",{children:"내부 시뮬레이션"}),"입니다. 실제 평가는 산업 구조·시차·외부 환경을 추가로 고려해야 합니다. URL 로 시나리오를 공유할 수 있습니다."]}),r.jsx("style",{children:`
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
      `})]})}export{K as default};
