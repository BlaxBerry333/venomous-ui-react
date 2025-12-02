import { jsx as u } from "react/jsx-runtime";
import m from "react";
import d from "clsx";
import C from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as t } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as _ } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import y from "../../hooks/useCustomComponentProps/index.esm.js";
import { useSpaceFlexStyles as A } from "./SpaceFlex.hooks.esm.js";
const E = m.memo(
  m.forwardRef(
    ({ className: p, style: s, column: r, spacing: e, as: a, maxWidth: c, ...i }, n) => {
      const o = y({
        displayName: t.SpaceFlex
      }), l = r ?? o.column ?? !1, f = e ?? o.spacing ?? 0, x = a ?? o.as ?? "div", S = c ?? o.maxWidth, { componentStyle: N } = A({ column: l, spacing: f });
      return /* @__PURE__ */ u(
        C,
        {
          as: x,
          maxWidth: S,
          ref: n,
          className: d(_.SpaceFlex, p),
          style: { ...N, ...s },
          ...i
        }
      );
    }
  )
);
E.displayName = t.SpaceFlex;
export {
  E as default
};
