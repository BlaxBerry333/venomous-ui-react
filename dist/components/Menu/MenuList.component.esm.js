import { jsx as f } from "react/jsx-runtime";
import t from "react";
import { clsx as u } from "../../node_modules/clsx/dist/clsx.esm.js";
import { COMPONENT_DISPLAY_NAMES as M } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as N } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useMenuListStyles as l } from "./MenuList.hooks.esm.js";
const c = t.memo(
  t.forwardRef(
    ({ className: o, style: r, children: m, as: e = "ul", column: s = !0, spacing: i = 8, ...p }, a) => {
      const { componentStyle: n } = l({ column: s, spacing: i });
      return /* @__PURE__ */ f(
        e,
        {
          ref: a,
          className: u(N.MenuList, o),
          style: { ...n, ...r },
          ...p,
          children: m
        }
      );
    }
  )
);
c.displayName = M.MenuList;
export {
  c as default
};
