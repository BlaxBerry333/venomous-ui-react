import { jsx as x } from "react/jsx-runtime";
import c from "react";
import s from "clsx";
const f = c.forwardRef(
  ({ children: a, className: i, style: r, row: o = !0, column: t = !1, gap: e = "8px", ...l }, m) => /* @__PURE__ */ x(
    "div",
    {
      ref: m,
      className: s("Venomous-UI-React--Space.Flex", i),
      style: {
        boxSizing: "border-box",
        display: "flex",
        width: "100%",
        flexDirection: t ? "column" : "row",
        alignItems: o ? "flex-start" : r == null ? void 0 : r.alignItems,
        ...Array.isArray(e) ? { rowGap: e[0], columnGap: e[1] } : { gap: e },
        position: "relative",
        ...r
      },
      ...l,
      children: a
    }
  )
);
f.displayName = "Space.Flex";
export {
  f as default
};
