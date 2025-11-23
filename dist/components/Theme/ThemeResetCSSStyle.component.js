"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("react"),g=require("../../constants/names/COMPONENT_DISPLAY_NAMES.js");require("../../constants/names/COMPONENT_CLASSNAME_NAMES.js");require("../../constants/designs/BACKGROUND_COLORS.js");require("../../constants/designs/BORDER_COLORS.js");require("../../constants/designs/SHADOW_STYLES.js");require("../../constants/designs/TEXT_COLORS.js");require("../../constants/designs/THEME_BREAKPOINTS.js");const h=require("../../hooks/useThemeDesigns/index.js"),S=require("../../tools/colors/get-colors.js");require("./ThemeProvider.context.js");const t="__VENOUS_UI_RESET_CSS_STYLE__",c=a.memo(()=>{const{PaletteColors:o,BackgroundColors:r,TextColors:i,BorderColors:u,TypographySizes:n,TypographyLineHeights:l}=h.default();return a.useInsertionEffect(()=>{let e=document.getElementById(t);e||(e=document.createElement("style"),e.id=t,document.head.appendChild(e));const d=`
      *, *::before, *::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
      }

      * {
        margin: 0;
        padding: 0;
      }

      html, body {
        max-width: 100vw;
        min-height: 100svh;
        height: auto;
        background-color: ${r[1]};
        color: ${i[1]};
        font-size: ${n.TEXT.BASE};
        line-height: ${l.TEXT.BASE};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
        overscroll-behavior: none;
        scroll-behavior: smooth;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
 
      /* ========== Selection style ========== */
      ::selection {
        background-color: ${S.getLighter(o[1],.5)};
        color: white;
      }
    `;return e.textContent=d,()=>{const s=document.getElementById(t);s&&s.remove()}},[o,r,i,u,n,l]),null});c.displayName=g.COMPONENT_DISPLAY_NAMES.ThemeResetCSSStyle;exports.default=c;
