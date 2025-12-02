import { jsx as o } from "react/jsx-runtime";
import p from "react";
import s from "clsx";
import { Transition as m } from "../Transition/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as b } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as c } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import f from "./IconButton.component.esm.js";
import { useScrollToTopActions as u } from "./ScrollToTop.hooks.esm.js";
const _ = p.memo(
  p.forwardRef(
    ({
      className: r,
      style: t,
      children: i,
      distance: S = 300,
      onClick: T,
      ...e
    }, l) => {
      const { isVisible: n, handleClick: a } = u({
        distance: S,
        onClick: T
      });
      return i ? /* @__PURE__ */ o(m.Fade, { visible: n, duration: 200, children: /* @__PURE__ */ o(
        "button",
        {
          ref: l,
          type: "button",
          className: s(c.ScrollToTop, r),
          style: {
            ...x,
            ...d,
            ...t
          },
          onClick: a,
          "aria-label": "Scroll to top",
          ...e,
          children: i
        }
      ) }) : /* @__PURE__ */ o(m.Fade, { visible: n, duration: 200, children: /* @__PURE__ */ o(
        f,
        {
          ref: l,
          icon: "solar:alt-arrow-up-bold",
          circle: !0,
          className: s(c.ScrollToTop, r),
          style: {
            ...d,
            ...t
          },
          onClick: a,
          "aria-label": "Scroll to top",
          ...e
        }
      ) });
    }
  )
);
_.displayName = b.ScrollToTop;
const d = {
  position: "fixed",
  bottom: 24,
  right: 24,
  zIndex: 1e3
}, x = {
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
  _ as default
};
