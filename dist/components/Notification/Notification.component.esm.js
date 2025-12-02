import { jsx as t } from "react/jsx-runtime";
import m from "react";
import C from "clsx";
import _ from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as a } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as P } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import E from "../Portal/Portal.component.esm.js";
import { Transition as M } from "../Transition/index.esm.js";
import S from "../../hooks/useCustomComponentProps/index.esm.js";
import { useNotificationContainerStyles as I, useNotificationManager as h } from "./Notification.hooks.esm.js";
import x from "./Notification.Item.esm.js";
import { NOTIFICATION_POSITION_MAP as o } from "./Notification.types.esm.js";
const A = m.memo(
  ({ className: i, style: c, position: p, maxCount: f, offset: l }) => {
    const r = S({
      displayName: a.Notification
    }), e = p ?? r.position ?? "top-right", N = f ?? r.maxCount ?? 5, T = l ?? r.offset ?? 0, { componentStyle: u } = I({ position: e, offset: T }), { notifications: s, handleClose: d } = h({ maxCount: N }), O = m.useMemo(
      () => y(e),
      [e]
    );
    return s.length === 0 ? null : /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(
      _,
      {
        as: "div",
        className: C(P.Notification, i),
        style: { ...u, ...c },
        children: s.map((n) => /* @__PURE__ */ t(
          M.Slide,
          {
            visible: n.visible,
            direction: O,
            duration: 250,
            distance: 20,
            style: { marginBottom: 12 },
            children: /* @__PURE__ */ t(x, { ...n, onClose: d })
          },
          n.id
        ))
      }
    ) });
  }
);
A.displayName = a.Notification;
function y(i) {
  switch (i) {
    case o.TOP_LEFT:
    case o.BOTTOM_LEFT:
      return "left";
    case o.TOP_CENTER:
      return "down";
    case o.BOTTOM_CENTER:
      return "up";
    case o.TOP_RIGHT:
    case o.BOTTOM_RIGHT:
    default:
      return "right";
  }
}
export {
  A as default
};
