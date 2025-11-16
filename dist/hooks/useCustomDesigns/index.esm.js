import t from "react";
import { useThemeProviderContext as o } from "../../components/Theme/ThemeProvider.hooks.esm.js";
function u() {
  const { customDesigns: e } = o();
  return t.useMemo(() => e || {}, [e]);
}
export {
  u as default
};
