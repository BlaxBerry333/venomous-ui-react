import m from "react";
import { COMPONENT_DISPLAY_NAMES as h } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import d from "../../hooks/useThemeDesigns/index.esm.js";
import { getLighter as g } from "../../tools/colors/get-colors.esm.js";
import "./ThemeProvider.context.esm.js";
const o = "__VENOUS_UI_RESET_CSS_STYLE__", p = m.memo(() => {
  const { PaletteColors: t, BackgroundColors: r, TextColors: i, BorderColors: a, TypographySizes: n, TypographyLineHeights: s } = d();
  return m.useInsertionEffect(() => {
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

      html, body {
        max-width: 100vw;
        min-height: 100svh;
        height: auto;
        background-color: ${r[1]};
        color: ${i[1]};
        font-size: ${n.TEXT.BASE};
        line-height: ${s.TEXT.BASE};
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
        background-color: ${g(t[1], 0.5)};
        color: white;
      }
    `;
    return e.textContent = c, () => {
      const l = document.getElementById(o);
      l && l.remove();
    };
  }, [t, r, i, a, n, s]), null;
});
p.displayName = h.ThemeResetCSSStyle;
export {
  p as default
};
