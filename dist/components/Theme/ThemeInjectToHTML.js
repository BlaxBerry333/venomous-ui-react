"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("react"),n=require("../../utils/design/colors.js");require("../../utils/design/Shadow.js");const r=require("../../utils/tools/get-colors.js"),s=require("./index.js"),a=i.memo(()=>(d(),null));a.displayName="Theme.InjectToHTML";function d(){const{themeMode:l}=s.Theme.useThemeMode(),{themeColor:o}=s.Theme.useThemeColor(),e=i.useMemo(()=>({light:r.getLighterHex(o,.2),dark:r.getDarkerHex(o,.8),origin:r.hexNormalize(o),opacity:r.getOpacityHex(o,.6)}),[o]);i.useInsertionEffect(()=>{document.documentElement.style.backgroundColor=n.BackgroundColors[l].primary,document.body.style.backgroundColor=n.BackgroundColors[l].primary},[l]),i.useInsertionEffect(()=>{if(typeof window>"u")return;const c="theme-palette-style";let t=document.getElementById(c);t||(t=document.createElement("style"),t.id=c,document.head.appendChild(t));const u=`
      /* ==============================
         Global Theme Palette Styles
         ============================== */

      :root {
        --venomous-ui-react--theme-origin: ${e.origin};
        --venomous-ui-react--theme-dark: ${e.dark};
        --venomous-ui-react--theme-light: ${e.light};
        --venomous-ui-react--theme-opacity: ${e.opacity};
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
    `;t.innerHTML=u},[e])}exports.default=a;
