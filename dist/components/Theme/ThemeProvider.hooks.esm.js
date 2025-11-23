import d from "react";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import { PALETTE_COLORS as a } from "../../constants/designs/PALETTE_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { THEME_MODES as m } from "../../constants/designs/THEME_MODES.esm.js";
import { getSystemThemeMode as c } from "../../tools/systems/getSystemThemeMode.esm.js";
import { ThemeProviderContext as f } from "./ThemeProvider.context.esm.js";
function P() {
  const e = d.useContext(f);
  if (e === void 0)
    throw new Error("useThemeProvider must be used within a <ThemeProvider>");
  return e;
}
const n = "VENOMOUS_UI__THEME_MODE";
function O() {
  if (typeof window > "u")
    return c();
  try {
    const e = localStorage.getItem(n);
    if (e && (e === m.LIGHT || e === m.DARK))
      return e;
  } catch (e) {
    console.warn("[ThemeProvider] Failed to read theme mode from localStorage:", e);
  }
  return c();
}
function M(e) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(n, e);
    } catch (t) {
      console.warn("[ThemeProvider] Failed to persist theme mode to localStorage:", t);
    }
}
function v() {
  if (!(typeof window > "u"))
    try {
      localStorage.removeItem(n);
    } catch (e) {
      console.warn("[ThemeProvider] Failed to clear theme mode from localStorage:", e);
    }
}
const i = "VENOMOUS_UI__THEME_PALETTE";
function I(e) {
  if (typeof window > "u")
    return e || a.WOLFSBANE;
  try {
    const t = localStorage.getItem(i);
    if (t) {
      let l = function(r) {
        if (typeof r != "object" || r === null)
          return !1;
        const o = r;
        return typeof o[1] == "string" && typeof o[2] == "string" && typeof o[3] == "string" && Object.keys(o).length === 3;
      };
      try {
        const r = JSON.parse(t);
        if (l(r))
          return r;
      } catch {
      }
    }
  } catch (t) {
    console.warn("[ThemeProvider] Failed to read theme palette from localStorage:", t);
  }
  return e || a.WOLFSBANE;
}
function A(e) {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(i, JSON.stringify(e));
    } catch (t) {
      console.warn("[ThemeProvider] Failed to persist theme palette to localStorage:", t);
    }
}
function F() {
  if (!(typeof window > "u"))
    try {
      localStorage.removeItem(i);
    } catch (e) {
      console.warn("[ThemeProvider] Failed to clear theme palette from localStorage:", e);
    }
}
export {
  v as __clearPersistedThemeMode,
  F as __clearPersistedThemePalette,
  O as __getInitialThemeMode,
  I as __getInitialThemePalette,
  M as __persistThemeMode,
  A as __persistThemePalette,
  P as useThemeProviderContext
};
