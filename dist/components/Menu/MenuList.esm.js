import { jsx as i } from "react/jsx-runtime";
import a from "react";
import { MenuListTagMap as m } from "./index.types.esm.js";
const s = a.memo(({ children: o, style: r, as: t = m.ul, ...e }) => /* @__PURE__ */ i(
  t,
  {
    style: {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      ...r
    },
    ...e,
    children: o
  }
));
s.displayName = "Menu.List";
export {
  s as default
};
