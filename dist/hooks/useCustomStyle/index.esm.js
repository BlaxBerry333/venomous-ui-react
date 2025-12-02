import o from "react";
import { useThemeProviderContext as u } from "../../components/Theme/ThemeProvider.hooks.esm.js";
function i({
  displayName: t
}) {
  const { customComponentProps: e } = u();
  return o.useMemo(() => {
    var r;
    return t === void 0 ? {} : ((r = e == null ? void 0 : e[t]) == null ? void 0 : r.style) || {};
  }, [e, t]);
}
export {
  i as default
};
