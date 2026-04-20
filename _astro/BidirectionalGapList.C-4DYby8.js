import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as o}from"./index.CNSOJBbx.js";function u({tasks:c,mapping:r,dims:d,weakDimIds:m,baseUrl:g,threshold:t}){const p=o.useMemo(()=>new Set(m),[m]),a=o.useMemo(()=>c.filter(s=>{const i=r.mappings[String(s.id)]??[];return i.length===0?!0:Math.max(...i.map(l=>l.confidence))<t}),[c,r,t]),n=o.useMemo(()=>{const s=new Set;for(const i of Object.values(r.mappings))for(const l of i)s.add(l.dim_id);return d.filter(i=>p.has(String(i.id))&&!s.has(String(i.id)))},[r,d,p]);return e.jsxs("div",{className:"gap-list",children:[e.jsxs("div",{className:"gap-columns",children:[e.jsxs("section",{className:"gap-left",children:[e.jsxs("h3",{children:["🇰🇷 → HAI 갭 (",a.length,")"]}),e.jsxs("p",{className:"gap-hint",children:["HAI 측정체계에 직접 대응되는 지표가 없거나 confidence < ",t.toFixed(2)," 인 과제. — ",e.jsx("strong",{children:"측정 불가 위험"}),"."]}),e.jsxs("ul",{children:[a.map(s=>e.jsxs("li",{children:[e.jsxs("a",{href:`${g}actionplan/task/${s.id}/`,children:[e.jsxs("strong",{children:["[",s.id,"]"]})," ",s.title]}),e.jsx("span",{className:"meta",children:s.strategic_area_name})]},s.id)),a.length===0&&e.jsx("li",{className:"empty",children:"모든 과제가 HAI 지표에 최소 1개 이상 매핑됨."})]})]}),e.jsxs("section",{className:"gap-right",children:[e.jsxs("h3",{children:["📊 → 🇰🇷 갭 (",n.length,")"]}),e.jsxs("p",{className:"gap-hint",children:["한국이 글로벌 peer 대비 약한 HAI 지표인데 대응되는 행동계획 과제가 없음. — ",e.jsx("strong",{children:"정책 사각지대"}),"."]}),e.jsxs("ul",{children:[n.map(s=>e.jsxs("li",{children:[e.jsx("strong",{children:s.name}),e.jsxs("span",{className:"meta",children:["dim_id: ",s.id]})]},String(s.id))),n.length===0&&e.jsx("li",{className:"empty",children:"한국 약점 영역이 모두 행동계획에 반영됨."})]})]})]}),e.jsx("style",{children:`
        .gap-list .gap-columns {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
        }
        @media (max-width: 768px) {
          .gap-list .gap-columns { grid-template-columns: 1fr; }
        }
        .gap-list section {
          padding: 1rem; border: 1px solid var(--border);
          border-radius: 6px; background: var(--paper);
        }
        .gap-list h3 { margin: 0 0 0.4rem; font-size: 1rem; }
        .gap-list .gap-hint { font-size: 0.82rem; color: var(--ink-muted); margin: 0 0 0.8rem; }
        .gap-list ul { list-style: none; padding: 0; margin: 0; max-height: 480px; overflow-y: auto; }
        .gap-list li {
          padding: 0.5rem 0; border-bottom: 1px solid var(--border);
          display: flex; flex-direction: column; gap: 0.15rem;
        }
        .gap-list li:last-child { border-bottom: none; }
        .gap-list a { color: var(--accent); text-decoration: none; }
        .gap-list a:hover { text-decoration: underline; }
        .gap-list .meta { font-size: 0.75rem; color: var(--ink-muted); }
        .gap-list .empty { color: var(--ink-muted); font-style: italic; padding: 1rem; }
      `})]})}export{u as default};
