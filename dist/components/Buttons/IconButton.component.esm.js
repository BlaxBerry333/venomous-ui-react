import { jsxs as M, jsx as r } from "react/jsx-runtime";
import i from "react";
import P from "clsx";
import s from "../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as e } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as h } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import x from "../../hooks/useCustomComponentProps/index.esm.js";
import { useButtonActions as L } from "./Button.hooks.esm.js";
import { BUTTON_VARIANT_MAP as w } from "./Button.types.esm.js";
import { useIconButtonStyles as D } from "./IconButton.hooks.esm.js";
const R = i.memo(
  i.forwardRef(
    ({
      className: c,
      style: m,
      type: l = "button",
      icon: p,
      disabled: a,
      loading: d,
      variant: f,
      circle: u,
      color: N,
      onMouseEnter: A,
      onMouseLeave: E,
      onMouseDown: I,
      onMouseUp: _,
      ...C
    }, b) => {
      const o = x({
        displayName: e.IconButton
      }), n = a ?? o.disabled ?? !1, t = d ?? o.loading ?? !1, v = f ?? o.variant ?? w.CONTAINED, y = u ?? o.circle ?? !1, O = N ?? o.color, { ElementEvents: S, isHovered: B, isClicked: T } = L({
        disabled: n,
        loading: t,
        onMouseEnter: A,
        onMouseLeave: E,
        onMouseDown: I,
        onMouseUp: _
      }), { componentStyle: g } = D({
        disabled: n,
        loading: t,
        variant: v,
        circle: y,
        color: O,
        isHovered: B,
        isClicked: T
      });
      return /* @__PURE__ */ M(
        "button",
        {
          type: l,
          ref: b,
          className: P(h.IconButton, c),
          style: { ...g, ...m },
          disabled: n || t,
          ...C,
          ...S,
          children: [
            /* @__PURE__ */ r(s, { icon: p, style: { color: "inherit", opacity: t ? 0 : 1, pointerEvents: "none" } }),
            t && /* @__PURE__ */ r(s, { icon: "svg-spinners:270-ring-with-bg", width: 20, style: j })
          ]
        }
      );
    }
  )
);
R.displayName = e.IconButton;
const j = {
  position: "absolute",
  color: "inherit",
  pointerEvents: "none"
};
export {
  R as default
};
