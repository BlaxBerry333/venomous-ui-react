import { jsx as t } from "react/jsx-runtime";
import { Icon as s } from "@iconify/react";
import e from "react";
const c = e.memo(({ style: r, icon: n, width: o = 20, ...i }) => {
  const m = e.useMemo(() => "inherit", []);
  return /* @__PURE__ */ t(
    s,
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
        color: m,
        ...r
      },
      ...i
    }
  );
});
c.displayName = "Icon";
export {
  c as default
};
