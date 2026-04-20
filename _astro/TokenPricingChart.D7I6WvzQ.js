import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as s}from"./index.CNSOJBbx.js";import{R as x}from"./CategoricalChart.Bx28pYfa.js";import{S as h,Z as f,a as j}from"./ScatterChart.7wscQBLL.js";import{C as k}from"./CartesianGrid.D8jw4EPF.js";import{X as b,Y as v}from"./YAxis.vGA_7B6F.js";import{T as y}from"./getClassNameFromUnknown.wrPRVtZO.js";import{L as M}from"./Legend.COj05mpd.js";const a={OpenAI:"#10a37f",Anthropic:"#d97757",Google:"#4285f4",Mistral:"#fa520f","Open-Source":"#9467bd"};function O({data:n}){const[o,d]=s.useState("output"),l=s.useMemo(()=>{const r=new Date("2022-01-01").getTime();return n.models.map(t=>{const g=(new Date(t.released).getTime()-r)/(1e3*60*60*24);return{...t,days:g,log_input:Math.log10(Math.max(.01,t.input_per_m)),log_output:Math.log10(Math.max(.01,t.output_per_m))}}).sort((t,i)=>t.days-i.days)},[n.models]),p=s.useMemo(()=>[...new Set(n.models.map(r=>r.provider))].sort(),[n.models]),c=s.useMemo(()=>{const r={};for(const t of l)r[t.provider]||(r[t.provider]=[]),r[t.provider].push(t);return r},[l]);function u(r){const t=new Date(new Date("2022-01-01").getTime()+r*864e5);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`}function m({payload:r}){if(!r||!r.length)return null;const t=r[0]?.payload;return t?e.jsxs("div",{style:{background:"var(--paper)",border:"1px solid var(--border)",padding:"0.5rem 0.75rem",fontSize:"0.78rem",borderRadius:4,color:"var(--ink)",lineHeight:1.5},children:[e.jsx("strong",{children:t.model}),e.jsx("br",{}),e.jsx("span",{style:{color:a[t.provider]},children:t.provider})," · ",t.released,e.jsx("br",{}),"Input: ",e.jsxs("strong",{children:["$",t.input_per_m.toFixed(t.input_per_m<1?3:2)]})," / 1M tokens",e.jsx("br",{}),"Output: ",e.jsxs("strong",{children:["$",t.output_per_m.toFixed(t.output_per_m<1?3:2)]})," / 1M tokens"]}):null}return e.jsxs("div",{className:"token-pricing",children:[e.jsxs("div",{className:"controls",children:[e.jsx("strong",{children:"가격 종류:"}),["input","output","both"].map(r=>e.jsx("button",{type:"button",onClick:()=>d(r),className:o===r?"active":"",children:r==="input"?"입력":r==="output"?"출력":"입력 + 출력"},r))]}),e.jsx(x,{width:"100%",height:400,children:e.jsxs(h,{margin:{top:16,right:24,bottom:36,left:32},children:[e.jsx(k,{strokeDasharray:"3 3",stroke:"var(--border)"}),e.jsx(b,{type:"number",dataKey:"days",domain:["dataMin - 30","dataMax + 30"],tickFormatter:u,tick:{fontSize:11},label:{value:"출시일",position:"bottom",offset:16,style:{fontSize:11,fill:"var(--ink-muted)"}}}),e.jsx(v,{type:"number",dataKey:o==="output"?"log_output":o==="input"?"log_input":"log_output",domain:[-1.5,2.3],tickFormatter:r=>`$${(10**r).toFixed(r<0?2:0)}`,tick:{fontSize:11},label:{value:`${o==="output"?"출력":o==="input"?"입력":"출력"} 가격 ($/1M tokens, log)`,angle:-90,position:"insideLeft",offset:0,style:{fontSize:11,fill:"var(--ink-muted)"}}}),e.jsx(f,{range:[80,80]}),e.jsx(y,{content:e.jsx(m,{}),cursor:{strokeDasharray:"3 3"}}),e.jsx(M,{wrapperStyle:{fontSize:"0.8rem"}}),p.map(r=>{const t=c[r];return e.jsx(j,{name:r,data:t.map(i=>({...i})),fill:a[r]??"#999",line:{stroke:a[r]??"#999",strokeWidth:1.5,strokeOpacity:.4},lineType:"joint"},r)})]})}),o==="both"&&e.jsx("p",{className:"note",children:'⚠️ "입력 + 출력" 모드에서 차트는 출력 가격만 표시됩니다 (입력 가격은 별도 토글 필요). Hover 로 두 값 모두 확인 가능.'}),e.jsxs("details",{className:"legend-detail",children:[e.jsx("summary",{children:"📊 데이터 해석 가이드"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"로그 Y축"})," — 가격 범위가 $0.07 → $150/M 으로 4 자리수 차이가 나기 때문"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"점 = 모델 출시"}),", 라인 = 같은 provider 의 시간 추이"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"출력 가격"})," 이 input 의 3-5배 — 표준 (모델은 출력 토큰 1개당 더 많은 compute 사용)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"2022-2025 추세"}),": GPT-3.5 turbo 출력 $20/M (2022) → GPT-4o-mini 출력 $0.6/M (2024) ≈ ",e.jsx("strong",{children:"33×↓"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"예외: o1 / Opus / GPT-4.5"})," — frontier reasoning · 큰 컨텍스트 모델은 가격 정체 또는 상승"]})]})]}),e.jsx("style",{children:`
        .token-pricing .controls {
          display: flex; gap: 0.4rem; align-items: center;
          margin-bottom: 0.75rem; font-size: 0.85rem;
          flex-wrap: wrap;
        }
        .token-pricing .controls strong { margin-right: 0.5rem; }
        .token-pricing .controls button {
          padding: 0.3rem 0.75rem; border: 1px solid var(--border); border-radius: 999px;
          background: var(--paper); color: var(--ink); cursor: pointer; font-size: 0.8rem;
        }
        .token-pricing .controls button:hover { background: var(--paper-alt); }
        .token-pricing .controls button.active {
          background: var(--accent); color: #fff; border-color: var(--accent);
        }
        .token-pricing .note {
          font-size: 0.78rem; color: var(--ink-muted);
          padding: 0.5rem 0.75rem; background: var(--paper-alt);
          border-radius: 4px; margin: 0.5rem 0 0;
        }
        .token-pricing .legend-detail {
          margin-top: 1rem; padding: 0.75rem 1rem;
          border: 1px dashed var(--border); border-radius: 6px;
          font-size: 0.85rem; background: var(--paper-alt);
        }
        .token-pricing .legend-detail summary { cursor: pointer; font-weight: 600; color: var(--ink); }
        .token-pricing .legend-detail ul { margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.7; color: var(--ink-muted); }
        .token-pricing .legend-detail strong { color: var(--ink); }
      `})]})}export{O as default};
