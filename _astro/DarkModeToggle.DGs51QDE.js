import{j as a}from"./jsx-runtime.u17CrQMm.js";import{r}from"./index.CNSOJBbx.js";const n="hai-theme-mode";function s(t){const o=document.documentElement;t==="auto"?o.removeAttribute("data-theme"):o.setAttribute("data-theme",t)}function g(){const[t,o]=r.useState("auto");r.useEffect(()=>{const e=localStorage.getItem(n)??"auto";o(e),s(e)},[]);const l=e=>{o(e),localStorage.setItem(n,e),s(e)},i=t==="dark"?"🌙":t==="light"?"☀️":"🌓",c=t==="auto"?"light":t==="light"?"dark":"auto",u=t==="auto"?"시스템 설정 따름 · 클릭: 라이트":t==="light"?"라이트 · 클릭: 다크":"다크 · 클릭: 시스템 설정 따름";return a.jsxs("button",{className:"theme-toggle",type:"button",onClick:()=>l(c),title:u,"aria-label":`테마 전환 (현재: ${t})`,children:[i,a.jsx("style",{children:`
        .theme-toggle {
          background: transparent;
          border: 1px solid var(--border, #e2e8f0);
          color: var(--ink, #0f172a);
          padding: 0.3rem 0.55rem;
          border-radius: 999px;
          font-size: 0.95rem;
          line-height: 1;
          cursor: pointer;
          transition: background 0.15s;
        }
        .theme-toggle:hover { background: var(--paper-alt, #f8fafc); }
      `})]})}export{g as default};
