import { jsx as m } from "react/jsx-runtime";
import l from "react";
const x = l.memo(
  ({ children: i, style: r, row: o = !0, column: a = !1, gap: e = "8px", ...t }) => /* @__PURE__ */ m(
    "div",
    {
      style: {
        boxSizing: "border-box",
        display: "flex",
        width: "100%",
        flexDirection: a ? "column" : "row",
        alignItems: o ? "flex-start" : r == null ? void 0 : r.alignItems,
        ...Array.isArray(e) ? { rowGap: e[0], columnGap: e[1] } : { gap: e },
        position: "relative",
        ...r
      },
      ...t,
      children: i
    }
  )
);
x.displayName = "Space.Flex";
export {
  x as default
};
