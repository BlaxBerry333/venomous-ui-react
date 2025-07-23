import { jsx as i } from "react/jsx-runtime";
import { Icon as l } from "@iconify/react";
import e from "react";
import { IconColors as a } from "../../utils/colors/index.esm.js";
const c = e.memo(({ style: m, icon: n, width: o = 20, color: r = "auto", ...t }) => {
  const s = e.useMemo(() => a[r], [r]);
  return /* @__PURE__ */ i(
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
        ...m
      },
      ...t
    }
  );
});
c.displayName = "Icon";
export {
  c as default
};
