import { jsxs as y, jsx as r } from "react/jsx-runtime";
import e from "react";
import { clsx as B } from "../../node_modules/clsx/dist/clsx.esm.js";
import n from "../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as C } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as M } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useButtonActions as P } from "./Button.hooks.esm.js";
import { BUTTON_VARIANT_MAP as h } from "./Button.types.esm.js";
import { useIconButtonStyles as v } from "./IconButton.hooks.esm.js";
import { ICON_BUTTON_SHAPE_MAP as x } from "./IconButton.types.esm.js";
const L = e.memo(
  e.forwardRef(
    ({
      className: m,
      style: i,
      type: s = "button",
      icon: p,
      disabled: t = !1,
      loading: o = !1,
      variant: c = h.CONTAINED,
      shape: N = x.SQUARE,
      color: f,
      onMouseEnter: A,
      onMouseLeave: E,
      onMouseDown: _,
      onMouseUp: l,
      ...u
    }, I) => {
      const { ElementEvents: O, isHovered: S, isClicked: T } = P({
        disabled: t,
        loading: o,
        onMouseEnter: A,
        onMouseLeave: E,
        onMouseDown: _,
        onMouseUp: l
      }), { componentStyle: a } = v({
        disabled: t,
        loading: o,
        variant: c,
        shape: N,
        color: f,
        isHovered: S,
        isClicked: T
      });
      return /* @__PURE__ */ y(
        "button",
        {
          type: s,
          ref: I,
          className: B(M.IconButton, m),
          style: { ...a, ...i },
          disabled: t || o,
          ...u,
          ...O,
          children: [
            /* @__PURE__ */ r(n, { icon: p, style: { color: "inherit", opacity: o ? 0 : 1, pointerEvents: "none" } }),
            o && /* @__PURE__ */ r(n, { icon: "svg-spinners:270-ring-with-bg", width: 20, style: R })
          ]
        }
      );
    }
  )
);
L.displayName = C.IconButton;
const R = {
  position: "absolute",
  color: "inherit",
  pointerEvents: "none"
};
export {
  L as default
};
