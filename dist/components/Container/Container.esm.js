import { jsx as a } from "react/jsx-runtime";
import o from "react";
import { BreakPointWidth as n } from "../../utils/breakpoint/index.esm.js";
const s = o.memo(({ children: m, breakpoint: t = "lg", style: r, ...e }) => {
  const i = o.useMemo(() => n[t], [t]);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        margin: "0 auto",
        width: "100%",
        maxWidth: i,
        ...r
      },
      ...e,
      children: m
    }
  );
});
s.displayName = "Container";
export {
  s as default
};
