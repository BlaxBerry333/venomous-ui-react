import r from "react";
import { ThemeProviderContext as o } from "./ThemeProvider.context.esm.js";
function n() {
  const e = r.useContext(o);
  if (e === void 0)
    throw new Error("useThemeProvider must be used within a <ThemeProvider>");
  return e;
}
export {
  n as useThemeProviderContext
};
