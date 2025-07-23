import { jsx as o } from "react/jsx-runtime";
import t from "react";
import { Toaster as c } from "sonner";
import l from "../../hooks/useThemeMode/index.esm.js";
import e from "../Icon/Icon.esm.js";
const a = t.memo(({ position: i = "top-center", offset: r = 0, collapsable: n = !1 }) => {
  const { isDarkThemeMode: s } = l();
  return /* @__PURE__ */ o(
    c,
    {
      closeButton: !0,
      richColors: !0,
      invert: s,
      visibleToasts: 4,
      gap: 8,
      position: i,
      offset: r,
      mobileOffset: r / 2,
      expand: !n,
      icons: {
        success: /* @__PURE__ */ o(e, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ o(e, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ o(e, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ o(e, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
a.displayName = "Notification";
export {
  a as default
};
