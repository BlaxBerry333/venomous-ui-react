import { jsx as N } from "react/jsx-runtime";
import t from "react";
import L from "clsx";
import { COMPONENT_DISPLAY_NAMES as s } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as S } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import C from "../../hooks/useCustomComponentProps/index.esm.js";
import { useMenuListStyles as _ } from "./MenuList.hooks.esm.js";
const g = t.memo(
  t.forwardRef(
    ({ className: m, style: r, children: n, as: e, column: p, spacing: i, ...a }, c) => {
      const o = C({
        displayName: s.MenuList
      }), u = e ?? o.as ?? "ul", l = p ?? o.column ?? !0, f = i ?? o.spacing ?? 8, { componentStyle: M } = _({ column: l, spacing: f });
      return /* @__PURE__ */ N(
        u,
        {
          ref: c,
          className: L(S.MenuList, m),
          style: { ...M, ...r },
          ...a,
          children: n
        }
      );
    }
  )
);
g.displayName = s.MenuList;
export {
  g as default
};
