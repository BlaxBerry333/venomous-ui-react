import { jsx as a } from "react/jsx-runtime";
import { Icon as l } from "@iconify/react";
import p from "clsx";
import m from "react";
import f from "../../hooks/useDesign/index.esm.js";
import { SemanticColors as u } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
const x = m.memo(({ className: s, style: t, icon: n, width: o = 20, semanticColor: r, ...i }) => {
  const e = f(), c = m.useMemo(() => r ? u[r] : e.TextColors.primary, [e, r]);
  return /* @__PURE__ */ a(
    l,
    {
      ssr: !0,
      icon: n,
      className: p("Venomous-UI-React--Layout.Icon", s),
      style: {
        width: o,
        minWidth: o,
        height: o,
        minHeight: o,
        flexShrink: 0,
        display: "inline-flex",
        color: c,
        ...t
      },
      ...i
    }
  );
});
x.displayName = "Icon";
export {
  x as default
};
