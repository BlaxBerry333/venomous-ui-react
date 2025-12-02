import { jsxs as T, jsx as r } from "react/jsx-runtime";
import e from "react";
import B from "clsx";
import n from "../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as C } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as M } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useButtonActions as h } from "./Button.hooks.esm.js";
import { BUTTON_VARIANT_MAP as v } from "./Button.types.esm.js";
import { useIconButtonStyles as x } from "./IconButton.hooks.esm.js";
const L = e.memo(
  e.forwardRef(
    ({
      className: s,
      style: i,
      type: m = "button",
      icon: p,
      disabled: o = !1,
      loading: t = !1,
      variant: c = v.CONTAINED,
      circle: f = !1,
      color: N,
      onMouseEnter: l,
      onMouseLeave: u,
      onMouseDown: A,
      onMouseUp: E,
      ...I
    }, _) => {
      const { ElementEvents: a, isHovered: O, isClicked: S } = h({
        disabled: o,
        loading: t,
        onMouseEnter: l,
        onMouseLeave: u,
        onMouseDown: A,
        onMouseUp: E
      }), { componentStyle: y } = x({
        disabled: o,
        loading: t,
        variant: c,
        circle: f,
        color: N,
        isHovered: O,
        isClicked: S
      });
      return /* @__PURE__ */ T(
        "button",
        {
          type: m,
          ref: _,
          className: B(M.IconButton, s),
          style: { ...y, ...i },
          disabled: o || t,
          ...I,
          ...a,
          children: [
            /* @__PURE__ */ r(n, { icon: p, style: { color: "inherit", opacity: t ? 0 : 1, pointerEvents: "none" } }),
            t && /* @__PURE__ */ r(n, { icon: "svg-spinners:270-ring-with-bg", width: 20, style: P })
          ]
        }
      );
    }
  )
);
L.displayName = C.IconButton;
const P = {
  position: "absolute",
  color: "inherit",
  pointerEvents: "none"
};
export {
  L as default
};
