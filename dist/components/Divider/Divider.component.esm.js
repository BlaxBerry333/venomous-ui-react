import { jsx as s } from "react/jsx-runtime";
import r from "react";
import { clsx as f } from "../../node_modules/clsx/dist/clsx.esm.js";
import { COMPONENT_DISPLAY_NAMES as a } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as N } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useDividerStyles as l } from "./Divider.hooks.esm.js";
const d = r.memo(
  r.forwardRef(({ className: o, style: m, column: t = !1, ...i }, e) => {
    const { componentStyle: p } = l({ column: t });
    return /* @__PURE__ */ s(
      "hr",
      {
        ref: e,
        className: f(N.Divider, o),
        style: { ...p, ...m },
        ...i
      }
    );
  })
);
d.displayName = a.Divider;
export {
  d as default
};
