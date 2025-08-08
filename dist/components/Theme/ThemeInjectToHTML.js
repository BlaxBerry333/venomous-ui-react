"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("react"),s=require("./index.js"),r=require("../../utils/tools/get-colors.js"),n=i.memo(()=>(a(),null));n.displayName="Theme.InjectToHTML";function a(){const{themeColor:o}=s.Theme.useThemeColor(),e=i.useMemo(()=>({light:r.getLighterHex(o,.2),dark:r.getDarkerHex(o,.8),origin:r.hexNormalize(o),opacity:r.getOpacityHex(o,.6)}),[o]);i.useInsertionEffect(()=>{if(typeof window>"u")return;const l="theme-palette-style";let t=document.getElementById(l);t||(t=document.createElement("style"),t.id=l,document.head.appendChild(t));const c=`
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
    `;t.innerHTML=c},[e])}exports.default=n;
