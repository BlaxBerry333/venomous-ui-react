import { jsx as s, jsxs as _, Fragment as j } from "react/jsx-runtime";
import o from "react";
import v from "clsx";
import { Typography as w } from "../Typographies/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as L } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as R } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useButtonActions as B } from "../Buttons/Button.hooks.esm.js";
import { useMenuItemStyles as C } from "./MenuItem.hooks.esm.js";
const D = o.memo(
  o.forwardRef(
    ({
      className: i,
      style: p,
      as: n = "li",
      children: a,
      Icon: l,
      label: m,
      labelEllipsis: c = 0,
      LabelStyle: f,
      spacing: u = 8,
      selected: M,
      disabled: e = !1,
      onClick: t,
      onMouseEnter: N,
      onMouseLeave: h,
      onMouseDown: S,
      onMouseUp: y,
      ...E
    }, x) => {
      const r = !!t && !e, { isHovered: A, isClicked: d, ElementEvents: g } = B({
        disabled: e,
        onMouseEnter: N,
        onMouseLeave: h,
        onMouseDown: S,
        onMouseUp: y
      }), { componentStyle: I } = C({
        spacing: u,
        selected: M,
        disabled: e,
        clickable: r,
        isHovered: A,
        isClicked: d
      }), O = n, P = o.useCallback(
        (T) => {
          r && (t == null || t(T));
        },
        [r, t]
      );
      return /* @__PURE__ */ s(
        O,
        {
          ref: x,
          className: v(R.MenuItem, i),
          style: { ...I, ...p },
          onClick: P,
          ...E,
          ...g,
          children: a || /* @__PURE__ */ _(j, { children: [
            l,
            m && /* @__PURE__ */ s(
              w.Paragraph,
              {
                text: m,
                ellipsis: c,
                weight: "bold",
                style: { flex: 1, color: "inherit", userSelect: "inherit", ...f }
              }
            )
          ] })
        }
      );
    }
  )
);
D.displayName = L.MenuItem;
export {
  D as default
};
