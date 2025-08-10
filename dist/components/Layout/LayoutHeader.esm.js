import { jsx as i } from "react/jsx-runtime";
import m from "clsx";
import s from "react";
import { useLayoutContext as d } from "./context/hooks.esm.js";
const p = s.memo(({ children: e, className: o, style: t, ...r }) => {
  const { headerHeight: a } = d();
  return /* @__PURE__ */ i(
    "header",
    {
      className: m("Venomous-UI-React--Layout.Header", o),
      style: {
        boxSizing: "border-box",
        height: `${a}px`,
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        ...t
      },
      ...r,
      children: e
    }
  );
});
p.displayName = "Layout.Header";
export {
  p as default
};
