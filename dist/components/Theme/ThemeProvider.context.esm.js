import e from "react";
import { getSystemThemeMode as t } from "../../tools/systems/getSystemThemeMode.esm.js";
const r = e.createContext({
  themeMode: t(),
  setThemeMode: () => {
  },
  customDesigns: {},
  customStyles: {}
});
export {
  r as ThemeProviderContext
};
