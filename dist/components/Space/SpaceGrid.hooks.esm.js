import s from "react";
import { COMPONENT_DISPLAY_NAMES as f } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import { THEME_BREAKPOINTS as c } from "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import y from "../../hooks/useThemeBreakpoint/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import d from "../../hooks/useCustomStyle/index.esm.js";
const u = Object.values(c);
function N({ columns: m = 1, spacing: e = 0 }) {
  const n = d({ displayName: f.SpaceGrid }), { breakpoint: t } = y(), r = s.useMemo(
    () => a({ breakpoint: t, value: m, defaultValue: 1 }),
    [t, m]
  ), o = s.useMemo(
    () => a({ breakpoint: t, value: e, defaultValue: 16 }),
    [t, e]
  ), i = s.useMemo(
    () => ({
      gridTemplateColumns: `repeat(${r}, 1fr)`,
      gap: `${o}px`
    }),
    [r, o]
  );
  return {
    componentStyle: s.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        display: "grid",
        width: "100%",
        ...i,
        // -- custom style --
        ...n
      }),
      [i, n]
    ),
    __: {
      DynamicGridStyles: i,
      DynamicColumnsValue: r,
      DynamicSpacingValue: o
    }
  };
}
const a = ({
  breakpoint: m,
  value: e,
  defaultValue: n
}) => {
  if (typeof e == "number")
    return e;
  if (typeof e == "object" && e !== null) {
    const t = e, r = u.indexOf(m);
    if (r === -1)
      return n;
    for (let o = r; o >= 0; o--) {
      const i = u[o], p = Object.keys(c).find(
        (l) => c[l] === i
      );
      if (p && t[p] !== void 0)
        return t[p];
    }
  }
  return n;
};
export {
  N as useSpaceGridStyles
};
