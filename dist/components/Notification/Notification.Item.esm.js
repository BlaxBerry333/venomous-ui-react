import { jsxs as n, jsx as o } from "react/jsx-runtime";
import i from "react";
import h from "clsx";
import "../Buttons/Button.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as g } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as x } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import C from "../Buttons/IconButton.component.esm.js";
import "../Buttons/ScrollToTop.component.esm.js";
import A from "../Icon/Icon.component.esm.js";
import { Space as O } from "../Space/index.esm.js";
import { Typography as s } from "../Typographies/index.esm.js";
import { useNotificationItemStyles as d } from "./Notification.hooks.esm.js";
import { NOTIFICATION_TYPE_MAP as r } from "./Notification.types.esm.js";
const y = i.memo(
  ({ className: p, style: f, id: e, type: t, title: a, description: l, closable: N, onClose: c }) => {
    const {
      componentStyle: u,
      __: { DynamicColor: m }
    } = d({ type: t }), I = i.useCallback(() => c(e), [e, c]), S = i.useMemo(() => {
      switch (t) {
        case r.SUCCESS:
          return "solar:check-circle-outline";
        case r.ERROR:
          return "solar:danger-triangle-outline";
        case r.WARNING:
          return "solar:danger-circle-outline";
        case r.INFO:
        default:
          return "solar:info-circle-outline";
      }
    }, [t]);
    return /* @__PURE__ */ n(
      O.Flex,
      {
        spacing: 16,
        className: h(x.NotificationItem, p),
        style: { ...u, ...f },
        children: [
          /* @__PURE__ */ o(A, { icon: S, color: m, style: { flexShrink: 0, marginLeft: 8 } }),
          /* @__PURE__ */ n("div", { style: { flex: 1 }, children: [
            a && /* @__PURE__ */ o(s.Paragraph, { weight: "bold", text: a }),
            l && /* @__PURE__ */ o(s.Paragraph, { weight: "normal", size: "CAPTION", text: l })
          ] }),
          N && /* @__PURE__ */ o(
            C,
            {
              icon: "solar:close-circle-linear",
              variant: "text",
              onClick: I,
              color: m,
              style: { color: "inherit", alignSelf: "flex-start" }
            }
          )
        ]
      }
    );
  }
);
y.displayName = g.NotificationItem;
export {
  y as default
};
