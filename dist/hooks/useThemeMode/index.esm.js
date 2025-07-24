import { useStore as r, create as M } from "zustand";
import { devtools as d, persist as h } from "../../node_modules/zustand/esm/middleware.esm.js";
import { ThemeMode as o } from "../../utils/theme-mode/index.esm.js";
import s from "../../utils/get-system-theme-mode/index.esm.js";
const m = s(), T = M()(
  d(
    h(
      (e) => ({
        themeMode: m,
        setThemeMode: (t) => e({ themeMode: t }),
        toggleThemeMode: () => e((t) => ({ themeMode: t.themeMode === o.Dark ? o.Light : o.Dark })),
        resetThemeMode: () => e({ themeMode: m })
      }),
      {
        name: "VENOMOUS_UI__THEME_MODE"
      }
    )
  )
);
function D() {
  const e = r(T);
  return {
    ...e,
    isDarkThemeMode: e.themeMode === o.Dark
  };
}
export {
  D as default
};
