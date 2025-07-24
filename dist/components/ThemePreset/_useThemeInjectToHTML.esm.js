import l from "react";
import c from "../../hooks/useThemeColor/index.esm.js";
import a from "../../utils/get-colors/index.esm.js";
function m() {
  const { themeColor: t } = c(), e = l.useMemo(() => a(t), [t]);
  l.useEffect(() => {
    const r = "theme-palette-style";
    let o = document.getElementById(r);
    o || (o = document.createElement("style"), o.id = r, document.head.appendChild(o));
    const i = `
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
    `;
    o.innerHTML = i;
  }, [e]);
}
export {
  m as useThemeInjectToHTML
};
