import { jsx as a } from "react/jsx-runtime";
import { Icon as l } from "@iconify/react";
import p from "clsx";
import m from "react";
import { Theme as f } from "../Theme/index.esm.js";
import { SemanticColors as u, TextColors as x } from "../../utils/design/colors.esm.js";
const I = m.memo(({ className: t, style: s, icon: n, width: o = 20, semanticColor: e, ...i }) => {
  const { themeMode: r } = f.useThemeMode(), c = m.useMemo(() => e ? u[e] : x[r].primary, [r, e]);
  return /* @__PURE__ */ a(
    l,
    {
      ssr: !0,
      icon: n,
      className: p("Venomous-UI-React--Layout.Icon", t),
      style: {
        width: o,
        minWidth: o,
        height: o,
        minHeight: o,
        flexShrink: 0,
        display: "inline-flex",
        color: c,
        ...s
      },
      ...i
    }
  );
});
I.displayName = "Icon";
export {
  I as default
};
