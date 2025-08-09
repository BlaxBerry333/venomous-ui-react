import { jsx as a } from "react/jsx-runtime";
import s from "clsx";
import i from "react";
import { useLayoutContext as u } from "./context/hooks.esm.js";
const f = i.memo(({ children: o, className: t, style: e, ...r }) => {
  const { footerHeight: m } = u();
  return /* @__PURE__ */ a(
    "footer",
    {
      className: s("Venomous-UI-React--Layout.Footer", t),
      style: {
        height: `${m}px`,
        width: "100%",
        ...e
      },
      ...r,
      children: o
    }
  );
});
f.displayName = "Layout.Footer";
export {
  f as default
};
