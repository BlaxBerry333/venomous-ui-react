import r from "react";
import { Theme as c } from "./index.esm.js";
import { getOpacityHex as n, hexNormalize as a, getDarkerHex as s, getLighterHex as m } from "../../utils/tools/get-colors.esm.js";
const u = r.memo(() => (h(), null));
u.displayName = "Theme.InjectToHTML";
function h() {
  const { themeColor: o } = c.useThemeColor(), e = r.useMemo(
    () => ({
      light: m(o, 0.2),
      dark: s(o, 0.8),
      origin: a(o),
      opacity: n(o, 0.6)
    }),
    [o]
  );
  r.useEffect(() => {
    if (typeof window > "u")
      return;
    const i = "theme-palette-style";
    let t = document.getElementById(i);
    t || (t = document.createElement("style"), t.id = i, document.head.appendChild(t));
    const l = `
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
    `;
    t.innerHTML = l;
  }, [e]);
}
export {
  u as default
};
