import t from "react";
import { ThemeContext as o } from "./ThemeContext.esm.js";
function m() {
  const e = t.use(o);
  if (e === void 0)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return e;
}
export {
  m as useThemeContext
};
