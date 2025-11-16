import { jsx as o } from "react/jsx-runtime";
import n from "react";
import { clsx as p } from "../../node_modules/clsx/dist/clsx.esm.js";
import N from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as O } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as d } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import u from "../Portal/Portal.component.esm.js";
import { Transition as _ } from "../Transition/index.esm.js";
import { useNotificationContainerStyles as E, useNotificationManager as M } from "./Notification.hooks.esm.js";
import P from "./Notification.Item.esm.js";
import { NOTIFICATION_POSITION_MAP as t } from "./Notification.types.esm.js";
const S = n.memo(
  ({ className: i, style: a, position: r = "top-right", maxCount: s = 5, offset: c = 0 }) => {
    const { componentStyle: l } = E({ position: r, offset: c }), { notifications: m, handleClose: f } = M({ maxCount: s }), T = n.useMemo(
      () => C(r),
      [r]
    );
    return m.length === 0 ? null : /* @__PURE__ */ o(u, { children: /* @__PURE__ */ o(
      N,
      {
        as: "div",
        className: p(d.Notification, i),
        style: { ...l, ...a },
        children: m.map((e) => /* @__PURE__ */ o(
          _.Slide,
          {
            visible: e.visible,
            direction: T,
            duration: 250,
            distance: 20,
            style: { marginBottom: 12 },
            children: /* @__PURE__ */ o(P, { ...e, onClose: f })
          },
          e.id
        ))
      }
    ) });
  }
);
S.displayName = O.Notification;
function C(i) {
  switch (i) {
    case t.TOP_LEFT:
    case t.BOTTOM_LEFT:
      return "left";
    case t.TOP_CENTER:
      return "down";
    case t.BOTTOM_CENTER:
      return "up";
    case t.TOP_RIGHT:
    case t.BOTTOM_RIGHT:
    default:
      return "right";
  }
}
export {
  S as default
};
