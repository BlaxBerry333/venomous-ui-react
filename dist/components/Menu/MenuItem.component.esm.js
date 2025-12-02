import { jsx as i, jsxs as l, Fragment as H } from "react/jsx-runtime";
import n from "react";
import Y from "clsx";
import { useButtonActions as q } from "../Buttons/Button.hooks.esm.js";
import { Space as G } from "../Space/index.esm.js";
import { Typography as p } from "../Typographies/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as f } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as J } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import K from "../../hooks/useCustomComponentProps/index.esm.js";
import { useMenuItemStyles as Q } from "./MenuItem.hooks.esm.js";
const U = n.memo(
  n.forwardRef(
    ({
      className: d,
      style: u,
      as: h,
      children: y,
      StartIcon: N,
      EndIcon: x,
      label: c,
      LabelProps: e,
      subLabel: a,
      SubLabelProps: m,
      spacing: M,
      selected: g,
      disabled: A,
      onClick: t,
      onMouseEnter: E,
      onMouseLeave: I,
      onMouseDown: _,
      onMouseUp: C,
      ...O
    }, S) => {
      const o = K({
        displayName: f.MenuItem
      }), T = h ?? o.as ?? "li", j = M ?? o.spacing ?? 8, r = A ?? o.disabled ?? !1, s = !!t && !r, { isHovered: v, isClicked: w, ElementEvents: F } = q({
        disabled: r,
        onMouseEnter: E,
        onMouseLeave: I,
        onMouseDown: _,
        onMouseUp: C
      }), { componentStyle: R } = Q({
        spacing: j,
        selected: g,
        disabled: r,
        clickable: s,
        isHovered: v,
        isClicked: w
      }), z = T, B = n.useCallback(
        (D) => {
          s && (t == null || t(D));
        },
        [s, t]
      );
      return /* @__PURE__ */ i(
        z,
        {
          ref: S,
          className: Y(J.MenuItem, d),
          style: { ...R, ...u },
          onClick: B,
          ...O,
          ...F,
          children: y || /* @__PURE__ */ l(H, { children: [
            N,
            /* @__PURE__ */ l(G.Flex, { column: !0, style: { flex: 1 }, children: [
              c && /* @__PURE__ */ i(
                p.Paragraph,
                {
                  text: c,
                  weight: "bold",
                  ...e,
                  style: { flex: 1, color: "inherit", userSelect: "inherit", ...e == null ? void 0 : e.style }
                }
              ),
              a && /* @__PURE__ */ i(
                p.Paragraph,
                {
                  text: a,
                  size: "CAPTION",
                  ...m,
                  style: { flex: 1, color: "inherit", userSelect: "inherit", ...m == null ? void 0 : m.style }
                }
              )
            ] }),
            x
          ] })
        }
      );
    }
  )
);
U.displayName = f.MenuItem;
export {
  U as default
};
