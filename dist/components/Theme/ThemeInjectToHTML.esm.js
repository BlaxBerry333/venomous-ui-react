import i from "react";
import c from "../../hooks/useDesign/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { getOpacityHex as a, hexNormalize as s, getDarkerHex as m, getLighterHex as u } from "../../utils/tools/get-colors.esm.js";
import d from "./useThemeColor.esm.js";
const h = i.memo(() => (b(), null));
h.displayName = "Theme.InjectToHTML";
function b() {
  const { themeColor: o } = d(), r = c(), e = i.useMemo(
    () => ({
      light: u(o, 0.2),
      dark: m(o, 0.8),
      origin: s(o),
      opacity: a(o, 0.6)
    }),
    [r, o]
  );
  i.useInsertionEffect(() => {
    document.documentElement.style.backgroundColor = r.BackgroundColors.primary, document.body.style.backgroundColor = r.BackgroundColors.primary;
  }, [r]), i.useInsertionEffect(() => {
    if (typeof window > "u")
      return;
    const l = "theme-palette-style";
    let t = document.getElementById(l);
    t || (t = document.createElement("style"), t.id = l, document.head.appendChild(t));
    const n = `
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
    `;
    t.innerHTML = n;
  }, [e]);
}
export {
  h as default
};
