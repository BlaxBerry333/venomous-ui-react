"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("react"),i=require("../../hooks/useThemeColor/index.js"),a=require("../../utils/get-colors/index.js");function n(){const{themeColor:o}=i.default(),e=l.useMemo(()=>a.default(o),[o]);l.useEffect(()=>{const r="theme-palette-style";let t=document.getElementById(r);t||(t=document.createElement("style"),t.id=r,document.head.appendChild(t));const c=`
      /* ==============================
         Global Theme Palette Styles
         ============================== */

      :root {
        --theme-origin: ${e.origin};
        --theme-dark: ${e.dark};
        --theme-light: ${e.light};
        --theme-opacity: ${e.opacity};
      }

      /* Selection style */
      ::selection {
        background-color: ${e.opacity};
        color: white;
      }

      /* Scrollbar style (Webkit) */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${e.origin};
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${e.dark};
      }
      ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        transition: opacity 0.5s ease-in-out;
      }

      /* Scrollbar style (Firefox) */
      html {
        scrollbar-color: ${e.origin} rgba(0, 0, 0, 0.1);
        scrollbar-width: thin;
      }
    `;t.innerHTML=c},[e])}exports.useThemeInjectToHTML=n;
