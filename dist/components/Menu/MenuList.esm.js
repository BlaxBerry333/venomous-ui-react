import { jsx as s } from "react/jsx-runtime";
import a from "clsx";
import i from "react";
import { MenuListTagMap as n } from "./index.types.esm.js";
const p = i.memo(({ children: o, className: e, style: t, as: m = n.ul, ...r }) => /* @__PURE__ */ s(
  m,
  {
    className: a("Venomous-UI-React--Menu.List", e),
    style: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      ...t
    },
    ...r,
    children: o
  }
));
p.displayName = "Menu.List";
export {
  p as default
};
