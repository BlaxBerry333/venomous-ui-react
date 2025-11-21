import { jsx as i } from "react/jsx-runtime";
import o from "react";
import l from "clsx";
import { COMPONENT_DISPLAY_NAMES as s } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as y } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useTableBodyStyles as d } from "./TableBody.hooks.esm.js";
const f = o.memo(
  o.forwardRef(({ className: r, style: t, children: m, ...e }, a) => {
    const { tableBodyStyle: p } = d();
    return /* @__PURE__ */ i(
      "tbody",
      {
        ref: a,
        className: l(y.TableBody, r),
        style: { ...p, ...t },
        ...e,
        children: m
      }
    );
  })
);
f.displayName = s.TableBody;
export {
  f as default
};
