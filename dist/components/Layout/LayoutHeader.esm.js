import { jsx as a } from "react/jsx-runtime";
import i from "react";
import { useLayoutContext as m } from "./context/hooks.esm.js";
const s = i.memo(({ children: t, style: e, ...o }) => {
  const { headerHeight: r } = m();
  return /* @__PURE__ */ a(
    "header",
    {
      style: {
        height: `${r}px`,
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        ...e
      },
      ...o,
      children: t
    }
  );
});
s.displayName = "Layout.Header";
export {
  s as default
};
