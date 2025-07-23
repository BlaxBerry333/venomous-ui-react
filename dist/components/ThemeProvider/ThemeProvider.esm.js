import { jsx as T } from "react/jsx-runtime";
import e from "react";
import { _getStoredThemeMode as p, _getStoredThemeColor as u } from "./_store.esm.js";
import { useThemeDesignInject as c } from "./_useThemeDesignInject.esm.js";
import { ThemeContext as f } from "./ThemeContext.esm.js";
import l from "../../utils/get-system-theme-mode/index.esm.js";
import { ThemeColor as M } from "../../utils/colors/index.esm.js";
import { ThemeMode as o } from "../../utils/theme-mode/index.esm.js";
const g = e.memo(({ children: a, defaultThemeColor: h, defaultThemeMode: i }) => {
  const [t, r] = e.useState(() => p() || i || l()), [s, d] = e.useState(() => u() || h || M.JadeAnaconda);
  c();
  const n = e.useMemo(
    () => ({
      themeMode: t,
      isDarkThemeMode: t === o.Dark,
      setThemeMode: r,
      toggleThemeMode: () => r((m) => m === o.Dark ? o.Light : o.Dark),
      themeColor: s,
      setThemeColor: d
    }),
    [t, r, s, d]
  );
  return /* @__PURE__ */ T(f, { value: n, children: a });
});
g.displayName = "ThemeProvider";
export {
  g as default
};
