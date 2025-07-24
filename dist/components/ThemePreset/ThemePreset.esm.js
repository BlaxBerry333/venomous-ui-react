import t from "react";
import { useThemeInit as r } from "./_useThemeInit.esm.js";
import { useThemeInjectToHTML as o } from "./_useThemeInjectToHTML.esm.js";
const s = t.memo(({ defaultThemeColor: e, defaultThemeMode: m }) => (o(), r({ defaultThemeColor: e, defaultThemeMode: m }), null));
s.displayName = "ThemePreset";
export {
  s as default
};
