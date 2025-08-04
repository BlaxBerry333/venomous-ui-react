import { jsx as r } from "react/jsx-runtime";
import s from "react";
import { useLayoutContext as a } from "./context/hooks.esm.js";
const m = s.memo(({ children: o, style: i, ...d }) => {
  const { headerHeight: t, sideWidth: e } = a();
  return /* @__PURE__ */ r(
    "aside",
    {
      style: {
        height: `calc(100svh - ${t}px)`,
        width: e,
        minWidth: e,
        position: "sticky",
        top: `${t}px`,
        left: 0,
        zIndex: 1,
        overflowX: "hidden",
        overflowY: "scroll",
        ...i
      },
      ...d,
      children: o
    }
  );
});
m.displayName = "Layout.Side";
export {
  m as default
};
