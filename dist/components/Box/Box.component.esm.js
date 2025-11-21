import { jsx as a } from "react/jsx-runtime";
import o from "react";
import f from "clsx";
import { COMPONENT_DISPLAY_NAMES as N } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as c } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useBoxStyles as l } from "./Box.hooks.esm.js";
const x = o.memo(
  o.forwardRef(({ className: m, style: r, as: t = "div", maxWidth: i = void 0, ...p }, e) => {
    const { componentStyle: s } = l({ maxWidth: i });
    return /* @__PURE__ */ a(
      t,
      {
        ref: e,
        className: f(c.Box, m),
        style: { ...s, ...r },
        ...p
      }
    );
  })
);
x.displayName = N.Box;
export {
  x as default
};
