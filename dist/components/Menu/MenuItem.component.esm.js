import { jsx as o, jsxs as f, Fragment as F } from "react/jsx-runtime";
import n from "react";
import R from "clsx";
import { useButtonActions as z } from "../Buttons/Button.hooks.esm.js";
import { Space as B } from "../Space/index.esm.js";
import { Typography as l } from "../Typographies/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as D } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as H } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useMenuItemStyles as Y } from "./MenuItem.hooks.esm.js";
const q = n.memo(
  n.forwardRef(
    ({
      className: h,
      style: p,
      as: y = "li",
      children: a,
      StartIcon: x,
      EndIcon: N,
      label: c,
      LabelProps: e,
      subLabel: s,
      SubLabelProps: r,
      spacing: u = 8,
      selected: M,
      disabled: m = !1,
      onClick: t,
      onMouseEnter: A,
      onMouseLeave: E,
      onMouseDown: d,
      onMouseUp: g,
      ...I
    }, O) => {
      const i = !!t && !m, { isHovered: S, isClicked: T, ElementEvents: _ } = z({
        disabled: m,
        onMouseEnter: A,
        onMouseLeave: E,
        onMouseDown: d,
        onMouseUp: g
      }), { componentStyle: j } = Y({
        spacing: u,
        selected: M,
        disabled: m,
        clickable: i,
        isHovered: S,
        isClicked: T
      }), v = y, w = n.useCallback(
        (C) => {
          i && (t == null || t(C));
        },
        [i, t]
      );
      return /* @__PURE__ */ o(
        v,
        {
          ref: O,
          className: R(H.MenuItem, h),
          style: { ...j, ...p },
          onClick: w,
          ...I,
          ..._,
          children: a || /* @__PURE__ */ f(F, { children: [
            x,
            /* @__PURE__ */ f(B.Flex, { column: !0, style: { flex: 1 }, children: [
              c && /* @__PURE__ */ o(
                l.Paragraph,
                {
                  text: c,
                  weight: "bold",
                  ...e,
                  style: { flex: 1, color: "inherit", userSelect: "inherit", ...e == null ? void 0 : e.style }
                }
              ),
              s && /* @__PURE__ */ o(
                l.Paragraph,
                {
                  text: s,
                  size: "CAPTION",
                  ...r,
                  style: { flex: 1, color: "inherit", userSelect: "inherit", ...r == null ? void 0 : r.style }
                }
              )
            ] }),
            N
          ] })
        }
      );
    }
  )
);
q.displayName = D.MenuItem;
export {
  q as default
};
