import { jsxs as y, jsx as r } from "react/jsx-runtime";
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
import { useButtonActions as T } from "./Button.hooks.esm.js";
import { useIconButtonStyles as h } from "./IconButton.hooks.esm.js";
import { ICON_BUTTON_VARIANT_MAP as v } from "./IconButton.types.esm.js";
const x = e.memo(
  e.forwardRef(
    ({
      className: i,
      style: m,
      type: s = "button",
      icon: p,
      disabled: o = !1,
      loading: t = !1,
      variant: c = v.SQUARE,
      color: f,
      onMouseEnter: N,
      onMouseLeave: l,
      onMouseDown: u,
      onMouseUp: A,
      ...E
    }, _) => {
      const { ElementEvents: I, isHovered: S, isClicked: O } = T({
        disabled: o,
        loading: t,
        onMouseEnter: N,
        onMouseLeave: l,
        onMouseDown: u,
        onMouseUp: A
      }), { componentStyle: a } = h({
        disabled: o,
        loading: t,
        variant: c,
        color: f,
        isHovered: S,
        isClicked: O
      });
      return /* @__PURE__ */ y(
        "button",
        {
          type: s,
          ref: _,
          className: B(M.IconButton, i),
          style: { ...a, ...m },
          disabled: o || t,
          ...E,
          ...I,
          children: [
            /* @__PURE__ */ r(n, { icon: p, style: { color: "inherit", opacity: t ? 0 : 1, pointerEvents: "none" } }),
            t && /* @__PURE__ */ r(n, { icon: "svg-spinners:270-ring-with-bg", width: 20, style: L })
          ]
        }
      );
    }
  )
);
x.displayName = C.IconButton;
const L = {
  position: "absolute",
  color: "inherit",
  pointerEvents: "none"
};
export {
  x as default
};
