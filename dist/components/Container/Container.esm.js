import { jsx as i } from "react/jsx-runtime";
import a from "clsx";
import n from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeBreakPoint as s, BreakPointName as p } from "../../utils/design/ThemeBreakpoint.esm.js";
const d = n.memo(
  ({ children: o, maxBreakpoint: r = p.lg, className: t, style: e, ...m }) => /* @__PURE__ */ i(
    "div",
    {
      className: a("Venomous-UI-React--Container", t),
      style: {
        boxSizing: "border-box",
        margin: "0 auto",
        width: "100%",
        maxWidth: s[r],
        ...e
      },
      ...m,
      children: o
    }
  )
);
d.displayName = "Container";
export {
  d as default
};
