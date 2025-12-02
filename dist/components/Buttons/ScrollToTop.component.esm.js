import { jsx as o } from "react/jsx-runtime";
import s from "react";
import p from "clsx";
import { Transition as m } from "../Transition/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as T } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as c } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import _ from "../../hooks/useCustomComponentProps/index.esm.js";
import C from "./IconButton.component.esm.js";
import { useScrollToTopActions as N } from "./ScrollToTop.hooks.esm.js";
const x = s.memo(
  s.forwardRef(
    ({
      className: t,
      style: r,
      children: i,
      distance: S,
      onClick: b,
      ...e
    }, l) => {
      const u = _({
        displayName: T.ScrollToTop
      }), f = S ?? u.distance ?? 300, { isVisible: n, handleClick: a } = N({
        distance: f,
        onClick: b
      });
      return i ? /* @__PURE__ */ o(m.Fade, { visible: n, duration: 200, children: /* @__PURE__ */ o(
        "button",
        {
          ref: l,
          type: "button",
          className: p(c.ScrollToTop, t),
          style: {
            ...E,
            ...d,
            ...r
          },
          onClick: a,
          "aria-label": "Scroll to top",
          ...e,
          children: i
        }
      ) }) : /* @__PURE__ */ o(m.Fade, { visible: n, duration: 200, children: /* @__PURE__ */ o(
        C,
        {
          ref: l,
          icon: "solar:alt-arrow-up-bold",
          circle: !0,
          className: p(c.ScrollToTop, t),
          style: {
            ...d,
            ...r
          },
          onClick: a,
          "aria-label": "Scroll to top",
          ...e
        }
      ) });
    }
  )
);
x.displayName = T.ScrollToTop;
const d = {
  position: "fixed",
  bottom: 24,
  right: 24,
  zIndex: 1e3
}, E = {
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
  borderWidth: 0,
  borderStyle: "none",
  borderRadius: 4,
  cursor: "pointer",
  transition: "all 0.25s ease",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)"
};
export {
  x as default
};
