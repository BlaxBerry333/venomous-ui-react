import { jsxs as d, jsx as x } from "react/jsx-runtime";
import y from "clsx";
import r from "react";
import E from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as S } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as A } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { Typography as M } from "../Typographies/index.esm.js";
import { useChipActions as u, useChipStyles as O } from "./Chip.hooks.esm.js";
const T = r.memo(
  r.forwardRef(
    ({ className: m, style: i, label: e, StartIcon: p, EndIcon: s, variant: l, color: a, onClick: o, ...c }, f) => {
      const t = !!o, { isHovered: n, isClicked: N, ElementEvents: h } = u({
        clickable: t,
        onClick: o
      }), { componentStyle: C } = O({
        variant: l,
        clickable: t,
        color: a,
        isHovered: n,
        isClicked: N
      });
      return /* @__PURE__ */ d(
        E,
        {
          as: "div",
          ref: f,
          className: y(A.Chip, m),
          style: { ...C, ...i },
          ...c,
          ...h,
          children: [
            p,
            /* @__PURE__ */ x(M.Text, { as: "small", text: e, style: { color: "inherit" } }),
            s
          ]
        }
      );
    }
  )
);
T.displayName = S.Chip;
export {
  T as default
};
