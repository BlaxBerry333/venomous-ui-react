import { jsx as m } from "react/jsx-runtime";
import r from "clsx";
import n from "react";
const s = n.memo(({ children: o, className: t, style: e, ...a }) => /* @__PURE__ */ m(
  "main",
  {
    className: r("Venomous-UI-React--Layout.Content", t),
    style: {
      boxSizing: "border-box",
      width: "100%",
      flexGrow: 1,
      ...e
    },
    ...a,
    children: o
  }
));
s.displayName = "Layout.Content";
export {
  s as default
};
