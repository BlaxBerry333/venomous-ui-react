import { jsxs as N, jsx as r } from "react/jsx-runtime";
import d from "clsx";
import i from "react";
import C from "../Avatar/Avatar.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as E } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as S } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import x from "../Box/Box.component.esm.js";
import { Typography as A } from "../Typographies/index.esm.js";
import { useChipActions as M, useChipStyles as u } from "./Chip.hooks.esm.js";
const O = i.memo(
  i.forwardRef(({ className: e, style: s, text: p, AvatarProps: o, color: l, onClick: t, ...c }, f) => {
    const m = !!t, { isHovered: a, isClicked: n, ElementEvents: h } = M({
      clickable: m,
      onClick: t
    }), { componentStyle: y } = u({
      clickable: m,
      color: l,
      isHovered: a,
      isClicked: n
    });
    return /* @__PURE__ */ N(
      x,
      {
        as: "div",
        ref: f,
        className: d(S.Chip, e),
        style: { ...y, ...s },
        ...c,
        ...h,
        children: [
          o && /* @__PURE__ */ r(C, { ...o, width: 20, style: { marginLeft: -8, ...o.style } }),
          /* @__PURE__ */ r(A.Text, { as: "small", text: p, style: { color: "inherit" } })
        ]
      }
    );
  })
);
O.displayName = E.Chip;
export {
  O as default
};
