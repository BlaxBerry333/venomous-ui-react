"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react"),c=require("./index.js"),s=require("../../utils/get-colors/index.js"),i=t.memo(()=>(a(),null));i.displayName="Theme.InjectToHTML";function a(){const{themeColor:r}=c.Theme.useThemeColor(),e=t.useMemo(()=>s.default(r),[r]);t.useEffect(()=>{if(typeof window>"u")return;const l="theme-palette-style";let o=document.getElementById(l);o||(o=document.createElement("style"),o.id=l,document.head.appendChild(o));const n=`
      /* ==============================
         Global Theme Palette Styles
         ============================== */

      :root {
        --venomous-ui--theme-origin: ${e.origin};
        --venomous-ui--theme-dark: ${e.dark};
        --venomous-ui--theme-light: ${e.light};
        --venomous-ui--theme-opacity: ${e.opacity};
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
    `;o.innerHTML=n},[e])}exports.default=i;
