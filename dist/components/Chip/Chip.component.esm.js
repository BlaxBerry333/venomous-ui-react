import { jsxs as S, jsx as v } from "react/jsx-runtime";
import A from "clsx";
import m from "react";
import M from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as i } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as P } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import b from "../../hooks/useCustomComponentProps/index.esm.js";
import { Typography as O } from "../Typographies/index.esm.js";
import { useChipActions as T, useChipStyles as _ } from "./Chip.hooks.esm.js";
const j = m.memo(
  m.forwardRef(
    ({
      className: s,
      style: e,
      label: p,
      StartIcon: l,
      EndIcon: a,
      variant: n,
      color: c,
      onClick: t,
      ...f
    }, C) => {
      const o = b({
        displayName: i.Chip
      }), N = p ?? o.label, h = n ?? o.variant, d = c ?? o.color, r = !!t, { isHovered: y, isClicked: u, ElementEvents: x } = T({
        clickable: r,
        onClick: t
      }), { componentStyle: E } = _({
        variant: h,
        clickable: r,
        color: d,
        isHovered: y,
        isClicked: u
      });
      return /* @__PURE__ */ S(
        M,
        {
          as: "div",
          ref: C,
          className: A(P.Chip, s),
          style: { ...E, ...e },
          ...f,
          ...x,
          children: [
            l,
            /* @__PURE__ */ v(O.Text, { as: "small", text: N, style: { color: "inherit" } }),
            a
          ]
        }
      );
    }
  )
);
j.displayName = i.Chip;
export {
  j as default
};
