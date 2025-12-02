import { jsx as f } from "react/jsx-runtime";
import t from "react";
import N from "clsx";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as d } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import l from "../../hooks/useCustomComponentProps/index.esm.js";
import { useBoxStyles as S } from "./Box.hooks.esm.js";
const u = t.memo(
  t.forwardRef(({ className: r, style: s, as: p, maxWidth: a, ...i }, e) => {
    const o = l({
      displayName: m.Box
    }), n = p ?? o.as ?? "div", c = a ?? o.maxWidth, { componentStyle: x } = S({ maxWidth: c });
    return /* @__PURE__ */ f(
      n,
      {
        ref: e,
        className: N(d.Box, r),
        style: { ...x, ...s },
        ...i
      }
    );
  })
);
u.displayName = m.Box;
export {
  u as default
};
