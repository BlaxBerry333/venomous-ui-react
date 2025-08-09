import { jsx as m } from "react/jsx-runtime";
import s from "clsx";
import i from "react";
import { useLayoutContext as d } from "./context/hooks.esm.js";
const p = i.memo(({ children: e, className: t, style: o, ...a }) => {
  const { headerHeight: r } = d();
  return /* @__PURE__ */ m(
    "header",
    {
      className: s("Venomous-UI-React--Layout.Header", t),
      style: {
        height: `${r}px`,
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        ...o
      },
      ...a,
      children: e
    }
  );
});
p.displayName = "Layout.Header";
export {
  p as default
};
