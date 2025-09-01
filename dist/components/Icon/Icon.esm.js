import { jsx as c } from "react/jsx-runtime";
import { Icon as a } from "@iconify/react";
import l from "clsx";
import e from "react";
import f from "../../hooks/useDesign/index.esm.js";
import { SEMANTIC_COLORS as u } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
const I = e.memo(({ className: t, style: i, icon: s, width: o = 20, semanticColor: r, ...n }) => {
  const m = f(), p = e.useMemo(() => r ? u[r] : m.TextColors.primary, [m, r]);
  return /* @__PURE__ */ c(
    a,
    {
      ssr: !0,
      icon: s,
      className: l("Venomous-UI-React--Layout.Icon", t),
      style: {
        width: o,
        minWidth: o,
        height: o,
        minHeight: o,
        flexShrink: 0,
        display: "inline-flex",
        color: p,
        ...i
      },
      ...n
    }
  );
});
I.displayName = "Icon";
export {
  I as default
};
