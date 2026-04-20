import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as s}from"./index.CNSOJBbx.js";const l=["permissive","source-available","responsible-use","non-commercial","proprietary"],o={permissive:"#2563eb","source-available":"#fbbc04","responsible-use":"#9467bd","non-commercial":"#d97757",proprietary:"#6b7280"};function p(){if(typeof window>"u")return"all";const i=new URLSearchParams(window.location.search).get("license_cat");return l.includes(i)?i:"all"}function h(i){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search);i==="all"?t.delete("license_cat"):t.set("license_cat",i);const a=t.toString();window.history.replaceState(null,"",window.location.pathname+(a?"?"+a:"")+window.location.hash)}function x({licenses:i}){const[t,a]=s.useState(()=>p());s.useEffect(()=>{h(t)},[t]);const d=s.useMemo(()=>{const r={};for(const n of i)r[n.category]||(r[n.category]=[]),r[n.category].push(n);const c=[];for(const n of l)t!=="all"&&t!==n||c.push(...r[n]??[]);return c},[i,t]);return e.jsxs("div",{className:"license-table",children:[e.jsxs("div",{className:"filters",children:[e.jsx("strong",{children:"카테고리:"}),e.jsx("button",{type:"button",className:t==="all"?"active":"",onClick:()=>a("all"),children:"전체"}),l.map(r=>e.jsx("button",{type:"button",className:t===r?"active":"",onClick:()=>a(r),style:t===r?{background:o[r],borderColor:o[r]}:{},children:r},r))]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"License"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"상업"}),e.jsx("th",{children:"Derivatives"}),e.jsx("th",{children:"Source"}),e.jsx("th",{children:"Attribution"}),e.jsx("th",{children:"Restrictions (KO)"})]})}),e.jsx("tbody",{children:d.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:r.id})}),e.jsx("td",{children:e.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",children:r.name})}),e.jsx("td",{children:e.jsx("span",{className:`cat-pill cat-${r.category}`,title:r.category,style:{background:o[r.category]}})}),e.jsx("td",{children:r.commercial_use?"✅":"❌"}),e.jsx("td",{children:r.derivatives?"✅":"❌"}),e.jsx("td",{children:r.source_available?"✅":"❌"}),e.jsx("td",{children:r.attribution_required?"필요":"—"}),e.jsx("td",{className:"rest",children:r.restrictions_ko})]},r.id))})]}),e.jsx("style",{children:`
        .license-table .filters {
          display: flex; gap: 0.4rem; align-items: center;
          margin-bottom: 0.75rem; font-size: 0.85rem; flex-wrap: wrap;
        }
        .license-table .filters button {
          padding: 0.25rem 0.65rem; border: 1px solid var(--border); border-radius: 999px;
          background: var(--paper); color: var(--ink); cursor: pointer; font-size: 0.78rem;
        }
        .license-table .filters button.active { color: #fff; }
        .license-table table {
          width: 100%; border-collapse: collapse; font-size: 0.82rem;
          background: var(--paper);
        }
        .license-table th, .license-table td {
          padding: 0.4rem 0.6rem; text-align: left; border-bottom: 1px solid var(--border);
          vertical-align: top;
        }
        .license-table thead { background: var(--paper-alt); }
        .license-table code {
          font-size: 0.72rem; padding: 1px 4px;
          background: var(--paper-alt); border-radius: 3px;
        }
        .license-table a { color: var(--accent); text-decoration: none; }
        .license-table a:hover { text-decoration: underline; }
        .license-table .cat-pill {
          color: #fff; padding: 1px 7px; border-radius: 999px;
          font-size: 0.7rem; font-weight: 500;
        }
        .license-table .rest { font-size: 0.78rem; color: var(--ink-muted); max-width: 320px; }
      `})]})}export{x as default};
