import { jsx as r } from "react/jsx-runtime";
import a from "react";
const m = a.memo(({ children: t, style: o, ...e }) => /* @__PURE__ */ r(
  "main",
  {
    style: {
      width: "100%",
      flexGrow: 1,
      ...o
    },
    ...e,
    children: t
  }
));
m.displayName = "Layout.Footer";
export {
  m as default
};
