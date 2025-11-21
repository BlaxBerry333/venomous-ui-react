import { jsx as c } from "react/jsx-runtime";
import o from "react";
import f from "clsx";
import d from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as N } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as l } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useSpaceGridStyles as n } from "./SpaceGrid.hooks.esm.js";
const A = o.memo(
  o.forwardRef(
    ({ className: r, style: m, columns: t = 1, spacing: i = 0, as: p = "div", maxWidth: e = void 0, ...a }, s) => {
      const { componentStyle: S } = n({ columns: t, spacing: i });
      return /* @__PURE__ */ c(
        d,
        {
          as: p,
          maxWidth: e,
          ref: s,
          className: f(l.SpaceGrid, r),
          style: { ...S, ...m },
          ...a
        }
      );
    }
  )
);
A.displayName = N.SpaceGrid;
export {
  A as default
};
