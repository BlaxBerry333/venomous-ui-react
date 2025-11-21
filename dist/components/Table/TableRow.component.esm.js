import { jsx as i } from "react/jsx-runtime";
import o from "react";
import l from "clsx";
import { COMPONENT_DISPLAY_NAMES as s } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as f } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useTableRowStyles as N } from "./TableRow.hooks.esm.js";
const R = o.memo(
  o.forwardRef(({ className: r, style: t, children: m, ...e }, a) => {
    const { tableRowStyle: p } = N();
    return /* @__PURE__ */ i(
      "tr",
      {
        ref: a,
        className: l(f.TableRow, r),
        style: { ...p, ...t },
        ...e,
        children: m
      }
    );
  })
);
R.displayName = s.TableRow;
export {
  R as default
};
