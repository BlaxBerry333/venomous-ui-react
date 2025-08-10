import { jsx as m } from "react/jsx-runtime";
import i from "clsx";
import n from "react";
import { ThemeBreakPoint as s, BreakPointName as d } from "../../utils/design/ThemeBreakpoint.esm.js";
const l = n.memo(
  ({ children: o, maxBreakpoint: e = d.lg, className: r, style: t, ...a }) => /* @__PURE__ */ m(
    "div",
    {
      className: i("Venomous-UI-React--Container", r),
      style: {
        boxSizing: "border-box",
        margin: "0 auto",
        width: "100%",
        maxWidth: s[e],
        ...t
      },
      ...a,
      children: o
    }
  )
);
l.displayName = "Container";
export {
  l as default
};
