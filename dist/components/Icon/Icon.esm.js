import { jsx as a } from "react/jsx-runtime";
import { Icon as l } from "@iconify/react";
import p from "clsx";
import m from "react";
import { SemanticColors as f, TextColors as u } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { Theme as x } from "../Theme/index.esm.js";
const I = m.memo(({ className: t, style: s, icon: n, width: o = 20, semanticColor: e, ...i }) => {
  const { themeMode: r } = x.useThemeMode(), c = m.useMemo(() => e ? f[e] : u[r].primary, [r, e]);
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
