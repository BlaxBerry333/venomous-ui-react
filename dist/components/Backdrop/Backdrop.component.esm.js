import { jsx as N } from "react/jsx-runtime";
import r from "react";
import l from "clsx";
import y from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as t } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as S } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import u from "../../hooks/useCustomComponentProps/index.esm.js";
import { useBackdropStyles as B } from "./Backdrop.hooks.esm.js";
const C = r.memo(
  r.forwardRef(
    ({ className: p, style: m, children: s, open: e, opacity: a, ...i }, c) => {
      const o = u({
        displayName: t.Backdrop
      }), n = e ?? o.open ?? !1, f = a ?? o.opacity, { componentStyle: d } = B({ open: n, opacity: f });
      return /* @__PURE__ */ N(
        y,
        {
          as: "div",
          ref: c,
          className: l(S.Backdrop, p),
          style: { ...d, ...m },
          ...i,
          children: s
        }
      );
    }
  )
);
C.displayName = t.Backdrop;
export {
  C as default
};
