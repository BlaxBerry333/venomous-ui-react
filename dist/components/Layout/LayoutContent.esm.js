import { jsx as m } from "react/jsx-runtime";
import n from "clsx";
import r from "react";
const s = r.memo(({ children: t, className: o, style: e, ...a }) => /* @__PURE__ */ m(
  "main",
  {
    className: n("Venomous-UI-React--Layout.Content", o),
    style: {
      width: "100%",
      flexGrow: 1,
      ...e
    },
    ...a,
    children: t
  }
));
s.displayName = "Layout.Content";
export {
  s as default
};
