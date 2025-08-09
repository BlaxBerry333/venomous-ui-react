import { jsx as r } from "react/jsx-runtime";
import i from "clsx";
import n from "react";
import { ThemeBreakPoint as s, BreakPointName as l } from "../../utils/design/ThemeBreakpoint.esm.js";
const p = n.memo(
  ({ children: o, maxBreakpoint: t = l.lg, className: e, style: a, ...m }) => /* @__PURE__ */ r(
    "div",
    {
      className: i("Venomous-UI-React--Container", e),
      style: {
        margin: "0 auto",
        width: "100%",
        maxWidth: s[t],
        ...a
      },
      ...m,
      children: o
    }
  )
);
p.displayName = "Container";
export {
  p as default
};
