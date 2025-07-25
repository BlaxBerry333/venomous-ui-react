import o from "react";
import r from "./ThemeContext.esm.js";
function h() {
  const e = o.useContext(r);
  if (e === void 0)
    throw new Error("useThemeColor must be used within a ThemeModeProvider");
  return {
    themeColor: e.themeColor,
    setThemeColor: e.setThemeColor,
    resetThemeColor: e.resetThemeColor
  };
}
export {
  h as default
};
