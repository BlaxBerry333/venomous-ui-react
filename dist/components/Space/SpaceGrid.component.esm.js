import { jsx as u } from "react/jsx-runtime";
import m from "react";
import x from "clsx";
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
import { useSpaceGridStyles as A } from "./SpaceGrid.hooks.esm.js";
const E = m.memo(
  m.forwardRef(
    ({ className: r, style: s, columns: p, spacing: i, as: a, maxWidth: c, ...e }, n) => {
      const o = y({
        displayName: t.SpaceGrid
      }), d = p ?? o.columns ?? 1, S = i ?? o.spacing ?? 0, f = a ?? o.as ?? "div", l = c ?? o.maxWidth, { componentStyle: N } = A({ columns: d, spacing: S });
      return /* @__PURE__ */ u(
        C,
        {
          as: f,
          maxWidth: l,
          ref: n,
          className: x(_.SpaceGrid, r),
          style: { ...N, ...s },
          ...e
        }
      );
    }
  )
);
E.displayName = t.SpaceGrid;
export {
  E as default
};
