import { jsx as m } from "react/jsx-runtime";
import s from "react";
import x from "clsx";
const c = s.forwardRef(
  ({ children: a, className: i, style: r, column: o = !1, gap: e = 0, ...t }, l) => /* @__PURE__ */ m(
    "div",
    {
      ref: l,
      className: x("Venomous-UI-React--Space.Flex", i),
      style: {
        boxSizing: "border-box",
        display: "flex",
        width: "100%",
        flexDirection: o ? "column" : "row",
        alignItems: o ? "flex-start" : r == null ? void 0 : r.alignItems,
        ...Array.isArray(e) ? { rowGap: e[0], columnGap: e[1] } : { gap: e },
        position: "relative",
        ...r
      },
      ...t,
      children: a
    }
  )
);
c.displayName = "Space.Flex";
export {
  c as default
};
