import s from "react";
import { COMPONENT_DISPLAY_NAMES as d } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import h from "../../hooks/useThemeDesigns/index.esm.js";
import "./ThemeProvider.context.esm.js";
import { getLighter as g } from "../../tools/colors/get-colors.esm.js";
const o = "__VENOUS_UI_RESET_CSS_STYLE__", p = s.memo(() => {
  const { PaletteColors: r, BackgroundColors: i, TextColors: n, BorderColors: t, TypographySizes: l, TypographyLineHeights: a } = h();
  return s.useInsertionEffect(() => {
    let e = document.getElementById(o);
    e || (e = document.createElement("style"), e.id = o, document.head.appendChild(e));
    const c = `
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
        line-height: ${a.TEXT.BASE};
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
        background-color: ${g(r[1], 0.5)};
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
    `;
    return e.textContent = c, () => {
      const m = document.getElementById(o);
      m && m.remove();
    };
  }, [r, i, n, t, l, a]), null;
});
p.displayName = d.ThemeResetCSSStyle;
export {
  p as default
};
