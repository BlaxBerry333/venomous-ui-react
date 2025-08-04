import { jsx as m } from "react/jsx-runtime";
import a from "react";
import { useLayoutContext as i } from "./context/hooks.esm.js";
const s = a.memo(({ children: o, style: t, ...e }) => {
  const { footerHeight: r } = i();
  return /* @__PURE__ */ m(
    "footer",
    {
      style: {
        height: `${r}px`,
        width: "100%",
        ...t
      },
      ...e,
      children: o
    }
  );
});
s.displayName = "Layout.Footer";
export {
  s as default
};
