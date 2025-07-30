import { jsx as c } from "react/jsx-runtime";
import { Icon as l } from "@iconify/react";
import m from "react";
import { Theme as p } from "../Theme/index.esm.js";
import { SemanticColors as f, TextColors as a } from "../../utils/design/colors.esm.js";
const u = m.memo(({ style: t, icon: n, width: o = 20, semanticColor: e, ...i }) => {
  const { themeMode: r } = p.useThemeMode(), s = m.useMemo(() => e ? f[e] : a[r].primary, [r, e]);
  return /* @__PURE__ */ c(
    l,
    {
      ssr: !0,
      icon: n,
      style: {
        width: o,
        minWidth: o,
        height: o,
        minHeight: o,
        flexShrink: 0,
        display: "inline-flex",
        color: s,
        ...t
      },
      ...i
    }
  );
});
u.displayName = "Icon";
export {
  u as default
};
