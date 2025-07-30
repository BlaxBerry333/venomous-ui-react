import { jsx as s } from "react/jsx-runtime";
import { Icon as c } from "@iconify/react";
import r from "react";
import { Theme as l } from "../Theme/index.esm.js";
import { TextColors as p } from "../../utils/design/colors.esm.js";
const a = r.memo(({ style: m, icon: t, width: o = 20, ...i }) => {
  const { themeMode: e } = l.useThemeMode(), n = r.useMemo(() => p[e].primary, [e]);
  return /* @__PURE__ */ s(
    c,
    {
      ssr: !0,
      icon: t,
      style: {
        width: o,
        minWidth: o,
        height: o,
        minHeight: o,
        flexShrink: 0,
        display: "inline-flex",
        color: n,
        ...m
      },
      ...i
    }
  );
});
a.displayName = "Icon";
export {
  a as default
};
