import r from "react";
import { BackgroundColors as c } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { getOpacityHex as m, hexNormalize as s, getDarkerHex as u, getLighterHex as d } from "../../utils/tools/get-colors.esm.js";
import { Theme as n } from "./index.esm.js";
const h = r.memo(() => (b(), null));
h.displayName = "Theme.InjectToHTML";
function b() {
  const { themeMode: i } = n.useThemeMode(), { themeColor: o } = n.useThemeColor(), e = r.useMemo(
    () => ({
      light: d(o, 0.2),
      dark: u(o, 0.8),
      origin: s(o),
      opacity: m(o, 0.6)
    }),
    [o]
  );
  r.useInsertionEffect(() => {
    document.documentElement.style.backgroundColor = c[i].primary, document.body.style.backgroundColor = c[i].primary;
  }, [i]), r.useInsertionEffect(() => {
    if (typeof window > "u")
      return;
    const l = "theme-palette-style";
    let t = document.getElementById(l);
    t || (t = document.createElement("style"), t.id = l, document.head.appendChild(t));
    const a = `
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
    t.innerHTML = a;
  }, [e]);
}
export {
  h as default
};
