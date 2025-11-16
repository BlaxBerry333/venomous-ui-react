import { jsx as f } from "react/jsx-runtime";
import o from "react";
import { clsx as S } from "../../node_modules/clsx/dist/clsx.esm.js";
import c from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as N } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as x } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useSpaceFlexStyles as d } from "./SpaceFlex.hooks.esm.js";
const n = o.memo(
  o.forwardRef(
    ({ className: m, style: r, column: t = !1, spacing: e = 0, as: p = "div", maxWidth: i = void 0, ...a }, s) => {
      const { componentStyle: l } = d({ column: t, spacing: e });
      return /* @__PURE__ */ f(
        c,
        {
          as: p,
          maxWidth: i,
          ref: s,
          className: S(x.SpaceFlex, m),
          style: { ...l, ...r },
          ...a
        }
      );
    }
  )
);
n.displayName = N.SpaceFlex;
export {
  n as default
};
