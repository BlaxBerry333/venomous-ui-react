import r from "react";
import { Theme as c } from "./index.esm.js";
import { getOpacityHex as s, hexNormalize as m, getDarkerHex as u, getLighterHex as d } from "../../utils/tools/get-colors.esm.js";
import { BackgroundColors as n } from "../../utils/design/colors.esm.js";
const h = r.memo(() => (b(), null));
h.displayName = "Theme.InjectToHTML";
function b() {
  const { themeMode: i } = c.useThemeMode(), { themeColor: o } = c.useThemeColor(), e = r.useMemo(
    () => ({
      light: d(o, 0.2),
      dark: u(o, 0.8),
      origin: m(o),
      opacity: s(o, 0.6)
    }),
    [o]
  );
  r.useInsertionEffect(() => {
    document.documentElement.style.backgroundColor = n[i].primary, document.body.style.backgroundColor = n[i].primary;
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
