import{j as r}from"./jsx-runtime.u17CrQMm.js";import{r as l}from"./index.CNSOJBbx.js";import{M as h}from"./mmlu-scores.Cio97xW-.js";const j={OpenAI:"#10a37f",Anthropic:"#d97757",Google:"#4285f4",Mistral:"#fa520f","Open-Source":"#9467bd",Korea:"#cd2e3a"},k=new Set(Object.keys(h).filter(i=>/naver|upstage|lg|kakao|hyperclova|solar|exaone|kanana/i.test(i)));function y(){if(typeof window>"u")return{q:"",provider:"",year:"",tier:"",korea:!1,sort:"mmlu",dir:"desc"};const i=new URLSearchParams(window.location.search);return{q:i.get("q")??"",provider:i.get("provider")??"",year:i.get("year")??"",tier:i.get("tier")??"",korea:i.get("korea")==="1",sort:i.get("sort")??"mmlu",dir:i.get("dir")??"desc"}}function w(i){if(typeof window>"u")return;const t=new URLSearchParams;i.q&&t.set("q",i.q),i.provider&&t.set("provider",i.provider),i.year&&t.set("year",i.year),i.tier&&t.set("tier",i.tier),i.korea&&t.set("korea","1"),i.sort!=="mmlu"&&t.set("sort",i.sort),i.dir!=="desc"&&t.set("dir",i.dir);const n=t.toString(),a=window.location.pathname+(n?"?"+n:"");window.history.replaceState(null,"",a)}function N({data:i}){const[t,n]=l.useState(()=>y());l.useEffect(()=>{w(t)},[t]);const a=l.useMemo(()=>i.models.map(e=>{const o=h[e.model],s=o?.score??null;return{...e,mmlu:s,ratio:s?e.output_per_m/s:null,sourceLabel:o?.sourceLabel,sourceUrl:o?.source,sourceNote:o?.note,isKorea:k.has(e.model)||e.provider==="Korea"}}),[i.models]),g=l.useMemo(()=>Array.from(new Set(a.map(e=>e.provider))).sort(),[a]),x=l.useMemo(()=>Array.from(new Set(a.map(e=>String(e.year)))).sort(),[a]),m=l.useMemo(()=>Array.from(new Set(a.map(e=>e.tier))).sort(),[a]),b=l.useMemo(()=>{const e=t.q.trim().toLowerCase();return a.filter(o=>!(t.provider&&o.provider!==t.provider||t.year&&String(o.year)!==t.year||t.tier&&o.tier!==t.tier||t.korea&&!o.isKorea||e&&!`${o.model} ${o.provider} ${o.tier}`.toLowerCase().includes(e)))},[a,t]),u=l.useMemo(()=>{const e=[...b],o=t.dir==="asc"?1:-1;return e.sort((s,v)=>{const c=s[t.sort==="input"?"input_per_m":t.sort==="output"?"output_per_m":t.sort],p=v[t.sort==="input"?"input_per_m":t.sort==="output"?"output_per_m":t.sort];return c==null&&p==null?0:c==null?1:p==null?-1:typeof c=="string"?c.localeCompare(p)*o:(c-p)*o}),e},[b,t.sort,t.dir]);function f(e){n(o=>({...o,sort:e,dir:o.sort===e&&o.dir==="desc"?"asc":"desc"}))}function d({k:e,label:o}){const s=t.sort===e;return r.jsxs("th",{onClick:()=>f(e),children:[o,s?t.dir==="asc"?" ▲":" ▼":""]})}return r.jsxs("div",{className:"pricing-table",children:[r.jsxs("div",{className:"filters",children:[r.jsx("input",{type:"search",placeholder:"🔍 모델/provider/tier 검색...",value:t.q,onChange:e=>n(o=>({...o,q:e.target.value}))}),r.jsxs("select",{value:t.provider,onChange:e=>n(o=>({...o,provider:e.target.value})),children:[r.jsx("option",{value:"",children:"모든 provider"}),g.map(e=>r.jsx("option",{value:e,children:e},e))]}),r.jsxs("select",{value:t.year,onChange:e=>n(o=>({...o,year:e.target.value})),children:[r.jsx("option",{value:"",children:"모든 연도"}),x.map(e=>r.jsx("option",{value:e,children:e},e))]}),r.jsxs("select",{value:t.tier,onChange:e=>n(o=>({...o,tier:e.target.value})),children:[r.jsx("option",{value:"",children:"모든 tier"}),m.map(e=>r.jsx("option",{value:e,children:e},e))]}),r.jsxs("label",{className:`korea-chip ${t.korea?"active":""}`,children:[r.jsx("input",{type:"checkbox",checked:t.korea,onChange:e=>n(o=>({...o,korea:e.target.checked}))})," 🇰🇷 한국 only"]}),r.jsx("button",{type:"button",onClick:()=>n({q:"",provider:"",year:"",tier:"",korea:!1,sort:"mmlu",dir:"desc"}),children:"초기화"})]}),r.jsxs("div",{className:"result-count",children:[u.length," / ",a.length," 모델"]}),r.jsx("div",{className:"table-wrap",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(d,{k:"model",label:"모델"}),r.jsx(d,{k:"provider",label:"Provider"}),r.jsx(d,{k:"released",label:"출시일"}),r.jsx(d,{k:"mmlu",label:"MMLU"}),r.jsx(d,{k:"input",label:"입력 $/M"}),r.jsx(d,{k:"output",label:"출력 $/M"}),r.jsx(d,{k:"ratio",label:"$/MMLU pt"}),r.jsx("th",{children:"tier"}),r.jsx("th",{children:"출처"})]})}),r.jsxs("tbody",{children:[u.map(e=>r.jsxs("tr",{className:e.isKorea?"korea-row":"",children:[r.jsx("td",{children:r.jsxs("strong",{children:[e.isKorea?"🇰🇷 ":"",e.model]})}),r.jsx("td",{children:r.jsx("span",{style:{color:j[e.provider]??"var(--ink-muted)"},children:e.provider})}),r.jsx("td",{children:e.released}),r.jsx("td",{className:"num",children:e.mmlu?.toFixed(1)??"—"}),r.jsxs("td",{className:"num",children:["$",e.input_per_m.toFixed(e.input_per_m<1?3:2)]}),r.jsxs("td",{className:"num",children:["$",e.output_per_m.toFixed(e.output_per_m<1?3:2)]}),r.jsx("td",{className:"num",children:e.ratio!=null?"$"+e.ratio.toFixed(e.ratio<.01?4:3):"—"}),r.jsx("td",{children:r.jsx("code",{children:e.tier})}),r.jsx("td",{children:e.sourceUrl?r.jsxs("a",{href:e.sourceUrl,target:"_blank",rel:"noopener noreferrer",title:e.sourceLabel+(e.sourceNote?" · "+e.sourceNote:""),children:["📚",e.sourceNote?" ⚠":""]}):"—"})]},e.model)),u.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:9,style:{textAlign:"center",color:"var(--ink-muted)",padding:"2rem"},children:"일치하는 모델이 없습니다. 필터를 조정해보세요."})})]})]})}),r.jsx("style",{children:`
        .pricing-table .filters {
          display: flex; gap: 0.5rem; flex-wrap: wrap;
          margin-bottom: 0.75rem; align-items: center;
        }
        .pricing-table .filters input[type=search] {
          flex: 1 1 280px; min-width: 180px;
          padding: 0.4rem 0.7rem; font-size: 0.9rem;
          border: 1px solid var(--border); border-radius: 6px;
          background: var(--paper); color: var(--ink);
        }
        .pricing-table .filters select, .pricing-table .filters button {
          padding: 0.35rem 0.7rem; font-size: 0.85rem;
          border: 1px solid var(--border); border-radius: 6px;
          background: var(--paper); color: var(--ink); cursor: pointer;
        }
        .pricing-table .filters button:hover { background: var(--paper-alt); }
        .pricing-table .korea-chip {
          padding: 0.35rem 0.7rem; font-size: 0.85rem;
          border: 1px solid var(--border); border-radius: 999px;
          background: var(--paper); cursor: pointer; user-select: none;
          display: inline-flex; align-items: center; gap: 0.3rem;
        }
        .pricing-table .korea-chip.active {
          background: #cd2e3a; color: #fff; border-color: #cd2e3a;
        }
        .pricing-table .korea-chip input { margin: 0; }
        .pricing-table .result-count {
          font-size: 0.8rem; color: var(--ink-muted); margin-bottom: 0.5rem;
        }
        .pricing-table .table-wrap {
          overflow-x: auto; border: 1px solid var(--border); border-radius: 6px;
        }
        .pricing-table table {
          width: 100%; border-collapse: collapse; font-size: 0.85rem;
          background: var(--paper);
        }
        .pricing-table thead th {
          padding: 0.5rem 0.75rem; text-align: left; font-weight: 600;
          background: var(--paper-alt); cursor: pointer;
          border-bottom: 2px solid var(--border); user-select: none;
          position: sticky; top: 0;
        }
        .pricing-table thead th:hover { background: var(--accent); color: #fff; }
        .pricing-table tbody td {
          padding: 0.45rem 0.75rem;
          border-bottom: 1px solid var(--border);
        }
        .pricing-table .num { text-align: right; font-variant-numeric: tabular-nums; }
        .pricing-table tbody tr:hover { background: var(--paper-alt); }
        .pricing-table .korea-row { background: rgba(205, 46, 58, 0.04); }
        .pricing-table .korea-row:hover { background: rgba(205, 46, 58, 0.1); }
        .pricing-table code {
          font-size: 0.75rem; padding: 1px 5px; border-radius: 3px;
          background: var(--paper-alt); color: var(--ink-muted);
        }
        .pricing-table a { color: var(--accent); text-decoration: none; }
        .pricing-table a:hover { text-decoration: underline; }
      `})]})}export{N as default};
