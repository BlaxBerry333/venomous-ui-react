"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("react"),s=require("../../hooks/useDesign/index.js");require("../../utils/design/colors.js");require("../../utils/design/Shadow.js");require("../../utils/design/ThemeBreakpoint.js");require("../../utils/design/TypographySize.js");const i=require("../../utils/tools/get-colors.js"),u=require("./useThemeColor.js"),c=l.memo(()=>(d(),null));c.displayName="Theme.InjectToHTML";function d(){const{themeColor:o}=u.default(),r=s.default(),e=l.useMemo(()=>({light:i.getLighterHex(o,.2),dark:i.getDarkerHex(o,.8),origin:i.hexNormalize(o),opacity:i.getOpacityHex(o,.6)}),[r,o]);l.useInsertionEffect(()=>{document.documentElement.style.backgroundColor=r.BackgroundColors.primary,document.body.style.backgroundColor=r.BackgroundColors.primary},[r]),l.useInsertionEffect(()=>{if(typeof window>"u")return;const n="theme-palette-style";let t=document.getElementById(n);t||(t=document.createElement("style"),t.id=n,document.head.appendChild(t));const a=`
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
    `;t.innerHTML=a},[e])}exports.default=c;
