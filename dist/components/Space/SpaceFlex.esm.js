import { jsx as l } from "react/jsx-runtime";
import x from "react";
import c from "clsx";
const s = x.memo(
  ({ children: a, className: i, style: e, row: r = !0, column: m = !1, gap: o = "8px", ...t }) => /* @__PURE__ */ l(
    "div",
    {
      className: c("Venomous-UI-React--Space.Flex", i),
      style: {
        boxSizing: "border-box",
        display: "flex",
        width: "100%",
        flexDirection: m ? "column" : "row",
        alignItems: r ? "flex-start" : e == null ? void 0 : e.alignItems,
        ...Array.isArray(o) ? { rowGap: o[0], columnGap: o[1] } : { gap: o },
        position: "relative",
        ...e
      },
      ...t,
      children: a
    }
  )
);
s.displayName = "Space.Flex";
export {
  s as default
};
