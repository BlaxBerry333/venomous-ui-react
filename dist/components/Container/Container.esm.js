import { jsx as a } from "react/jsx-runtime";
import m from "react";
import { ThemeBreakPoint as i, BreakPointName as n } from "../../utils/design/ThemeBreakpoint.esm.js";
const d = m.memo(({ children: t, breakpoint: e = n.lg, style: o, ...r }) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      margin: "0 auto",
      width: "100%",
      maxWidth: i[e],
      ...o
    },
    ...r,
    children: t
  }
));
d.displayName = "Container";
export {
  d as default
};
