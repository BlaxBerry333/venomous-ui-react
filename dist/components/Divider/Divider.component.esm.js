import { jsx as l } from "react/jsx-runtime";
import o from "react";
import a from "clsx";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as f } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import N from "../../hooks/useCustomComponentProps/index.esm.js";
import { useDividerStyles as d } from "./Divider.hooks.esm.js";
const u = o.memo(
  o.forwardRef(({ className: r, style: t, column: i, ...e }, p) => {
    const s = N({
      displayName: m.Divider
    }), n = i ?? s.column ?? !1, { componentStyle: c } = d({ column: n });
    return /* @__PURE__ */ l(
      "hr",
      {
        ref: p,
        className: a(f.Divider, r),
        style: { ...c, ...t },
        ...e
      }
    );
  })
);
u.displayName = m.Divider;
export {
  u as default
};
