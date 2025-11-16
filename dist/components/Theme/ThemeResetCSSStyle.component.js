"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("react"),g=require("../../constants/names/COMPONENT_DISPLAY_NAMES.js");require("../../constants/names/COMPONENT_CLASSNAME_NAMES.js");require("../../constants/designs/BACKGROUND_COLORS.js");require("../../constants/designs/BORDER_COLORS.js");require("../../constants/designs/SHADOW_STYLES.js");require("../../constants/designs/TEXT_COLORS.js");require("../../constants/designs/THEME_BREAKPOINTS.js");const h=require("../../hooks/useThemeDesigns/index.js");require("./ThemeProvider.context.js");const b=require("../../tools/colors/get-colors.js"),r="__VENOUS_UI_RESET_CSS_STYLE__",u=c.memo(()=>{const{PaletteColors:o,BackgroundColors:i,TextColors:n,BorderColors:t,TypographySizes:l,TypographyLineHeights:s}=h.default();return c.useInsertionEffect(()=>{let e=document.getElementById(r);e||(e=document.createElement("style"),e.id=r,document.head.appendChild(e));const d=`
      *, *::before, *::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
      }

      * {
        margin: 0;
        padding: 0;
      }

      /* ========== HTML & Body ========== */ 
      html, body {
        max-width: 100vw;
        min-height: 100svh;
        height: auto;
        background-color: ${i[1]};
        color: ${n[1]};
        font-size: ${l.TEXT.BASE};
        line-height: ${s.TEXT.BASE};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }

      /* ========== a ========== */
      a {
        color: inherit;
        text-decoration: none;
      }
 
      /* ========== Selection style ========== */
      ::selection {
        background-color: ${b.getLighter(o[1],.5)};
        color: white;
      }

      /* ========== Scrollbar ========== */ 
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: ${t[2]};
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${t[1]};
      }
    `;return e.textContent=d,()=>{const a=document.getElementById(r);a&&a.remove()}},[o,i,n,t,l,s]),null});u.displayName=g.COMPONENT_DISPLAY_NAMES.ThemeResetCSSStyle;exports.default=u;
