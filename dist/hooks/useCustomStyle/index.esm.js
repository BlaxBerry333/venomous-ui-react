import t from "react";
import { useThemeProviderContext as o } from "../../components/Theme/ThemeProvider.hooks.esm.js";
function f({
  displayName: e
}) {
  const { customStyles: r } = o();
  return t.useMemo(() => e === void 0 ? {} : (r == null ? void 0 : r[e]) || {}, [r, e]);
}
export {
  f as default
};
