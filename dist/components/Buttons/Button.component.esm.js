import { jsxs as T, jsx as B } from "react/jsx-runtime";
import r from "react";
import C from "clsx";
import I from "../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as M } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as y } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useButtonActions as v, useButtonStyles as x } from "./Button.hooks.esm.js";
import { BUTTON_VARIANT_MAP as L } from "./Button.types.esm.js";
const P = r.memo(
  r.forwardRef(
    ({
      className: e,
      style: s,
      type: m = "button",
      text: n,
      disabled: o = !1,
      loading: t = !1,
      variant: i = L.CONTAINED,
      color: p,
      fullWidth: f = !1,
      onMouseEnter: N,
      onMouseLeave: c,
      onMouseDown: l,
      onMouseUp: u,
      ...a
    }, A) => {
      const { isHovered: E, isClicked: _, ElementEvents: O } = v({
        disabled: o,
        loading: t,
        onMouseEnter: N,
        onMouseLeave: c,
        onMouseDown: l,
        onMouseUp: u
      }), { componentStyle: S } = x({
        disabled: o,
        loading: t,
        variant: i,
        color: p,
        fullWidth: f,
        isHovered: E,
        isClicked: _
      });
      return /* @__PURE__ */ T(
        "button",
        {
          type: m,
          ref: A,
          className: C(y.Button, e),
          style: { ...S, ...s },
          disabled: o || t,
          ...a,
          ...O,
          children: [
            n,
            t && /* @__PURE__ */ B(I, { icon: "svg-spinners:270-ring-with-bg", style: b })
          ]
        }
      );
    }
  )
);
P.displayName = M.Button;
const b = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "inherit",
  pointerEvents: "none"
};
export {
  P as default
};
