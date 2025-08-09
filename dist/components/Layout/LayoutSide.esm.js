import { jsx as r } from "react/jsx-runtime";
import d from "clsx";
import m from "react";
import { useLayoutContext as l } from "./context/hooks.esm.js";
const c = m.memo(({ children: e, className: i, style: s, ...a }) => {
  const { headerHeight: o, sideWidth: t } = l();
  return /* @__PURE__ */ r(
    "aside",
    {
      className: d("Venomous-UI-React--Layout.Side", i),
      style: {
        height: `calc(100svh - ${o}px)`,
        width: t,
        minWidth: t,
        position: "sticky",
        top: `${o}px`,
        left: 0,
        zIndex: 1,
        overflowX: "hidden",
        overflowY: "scroll",
        ...s
      },
      ...a,
      children: e
    }
  );
});
c.displayName = "Layout.Side";
export {
  c as default
};
