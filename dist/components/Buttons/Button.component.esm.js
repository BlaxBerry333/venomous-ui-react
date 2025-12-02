import { jsxs as h, jsx as y } from "react/jsx-runtime";
import s from "react";
import I from "clsx";
import M from "../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as r } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as P } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import x from "../../hooks/useCustomComponentProps/index.esm.js";
import { useButtonActions as L, useButtonStyles as D } from "./Button.hooks.esm.js";
import { BUTTON_VARIANT_MAP as R } from "./Button.types.esm.js";
const W = s.memo(
  s.forwardRef(
    ({
      className: i,
      style: e,
      type: m = "button",
      text: l,
      disabled: a,
      loading: p,
      variant: c,
      color: d,
      fullWidth: f,
      onMouseEnter: u,
      onMouseLeave: N,
      onMouseDown: A,
      onMouseUp: E,
      ..._
    }, C) => {
      const o = x({
        displayName: r.Button
      }), n = a ?? o.disabled ?? !1, t = p ?? o.loading ?? !1, b = c ?? o.variant ?? R.CONTAINED, O = d ?? o.color, S = f ?? o.fullWidth ?? !1, { isHovered: v, isClicked: B, ElementEvents: T } = L({
        disabled: n,
        loading: t,
        onMouseEnter: u,
        onMouseLeave: N,
        onMouseDown: A,
        onMouseUp: E
      }), { componentStyle: g } = D({
        disabled: n,
        loading: t,
        variant: b,
        color: O,
        fullWidth: S,
        isHovered: v,
        isClicked: B
      });
      return /* @__PURE__ */ h(
        "button",
        {
          type: m,
          ref: C,
          className: I(P.Button, i),
          style: { ...g, ...e },
          disabled: n || t,
          ..._,
          ...T,
          children: [
            l,
            t && /* @__PURE__ */ y(M, { icon: "svg-spinners:270-ring-with-bg", style: j })
          ]
        }
      );
    }
  )
);
W.displayName = r.Button;
const j = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "inherit",
  pointerEvents: "none"
};
export {
  W as default
};
