import { jsx as o } from "react/jsx-runtime";
import t from "clsx";
import c from "react";
import { Toaster as l } from "sonner";
import e from "../Icon/Icon.esm.js";
import { Theme as a } from "../Theme/index.esm.js";
const m = c.memo(({ position: i = "top-center", offset: r = 0, collapsable: n = !1 }) => {
  const { isDarkThemeMode: s } = a.useThemeMode();
  return /* @__PURE__ */ o(
    l,
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
      className: t("Venomous-UI-React--Notification"),
      icons: {
        success: /* @__PURE__ */ o(e, { icon: "solar:shield-check-line-duotone", color: "success" }),
        error: /* @__PURE__ */ o(e, { icon: "solar:shield-cross-line-duotone", color: "error" }),
        warning: /* @__PURE__ */ o(e, { icon: "solar:shield-warning-line-duotone", color: "warning" }),
        info: /* @__PURE__ */ o(e, { icon: "solar:info-circle-line-duotone", color: "info" })
      }
    }
  );
});
m.displayName = "Notification";
export {
  m as default
};
