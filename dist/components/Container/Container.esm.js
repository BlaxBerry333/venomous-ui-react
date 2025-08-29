import { jsx as i } from "react/jsx-runtime";
import a from "clsx";
import n from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeBreakPoint as s } from "../../utils/design/ThemeBreakpoint.esm.js";
const p = n.memo(({ children: r, maxBreakpoint: o, className: t, style: m, ...e }) => /* @__PURE__ */ i(
  "div",
  {
    className: a("Venomous-UI-React--Container", t),
    style: {
      boxSizing: "border-box",
      margin: "0 auto",
      width: "100%",
      maxWidth: o ? s[o] : "100%",
      ...m
    },
    ...e,
    children: r
  }
));
p.displayName = "Container";
export {
  p as default
};
