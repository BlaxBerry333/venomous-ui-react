import { jsx as a } from "react/jsx-runtime";
import d from "clsx";
import m from "react";
import { useLayoutContext as l } from "./context/hooks.esm.js";
const c = m.memo(({ children: t, className: i, style: r, ...s }) => {
  const { headerHeight: o, sideWidth: e } = l();
  return /* @__PURE__ */ a(
    "aside",
    {
      className: d("Venomous-UI-React--Layout.Side", i),
      style: {
        boxSizing: "border-box",
        height: `calc(100svh - ${o}px)`,
        width: e,
        minWidth: e,
        position: "sticky",
        top: `${o}px`,
        left: 0,
        zIndex: 1,
        overflowX: "hidden",
        overflowY: "scroll",
        ...r
      },
      ...s,
      children: t
    }
  );
});
c.displayName = "Layout.Side";
export {
  c as default
};
