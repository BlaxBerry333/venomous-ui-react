import m from "react";
import { useTransitionState as T, TRANSITION_STATUS_MAP as n } from "../Transition/useTransitionState.esm.js";
import "../Transition/Transition.Fade.component.esm.js";
import "../Transition/Transition.Scale.component.esm.js";
import "../Transition/Transition.Slide.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as d } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import E from "../../hooks/useCustomStyle/index.esm.js";
import b from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { DRAWER_PLACEMENT_MAP as e } from "./Drawer.types.esm.js";
function C({ open: s = !1, placement: t = "left" }) {
  const { TextColors: l, BackgroundColors: r, ShadowStyles: c } = b(), f = E({ displayName: d.Drawer }), o = T({ visible: s, duration: 225 }), u = m.useMemo(() => {
    const a = o === n.ENTERING || o === n.ENTERED, p = {
      transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-in-out",
      willChange: o === n.ENTERED ? "auto" : "transform, opacity"
    };
    let i;
    switch (t) {
      case e.TOP:
        i = a ? "translateY(0)" : "translateY(-100%)";
        break;
      case e.BOTTOM:
        i = a ? "translateY(0)" : "translateY(100%)";
        break;
      case e.LEFT:
        i = a ? "translateX(0)" : "translateX(-100%)";
        break;
      case e.RIGHT:
        i = a ? "translateX(0)" : "translateX(100%)";
        break;
      default:
        i = "translate(0, 0)";
    }
    return o === n.EXITED ? {
      ...p,
      transform: i,
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none",
      willChange: "auto"
    } : {
      ...p,
      transform: i,
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto"
    };
  }, [o, t]), h = m.useMemo(() => {
    switch (t) {
      case e.TOP:
        return {
          position: "fixed",
          left: 0,
          right: 0,
          width: "100vw",
          height: "50vh",
          maxHeight: "80vh"
        };
      case e.BOTTOM:
        return {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "50vh",
          maxHeight: "80vh"
        };
      case e.LEFT:
        return {
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          height: "100vh",
          width: 400,
          maxWidth: "85vw"
        };
      case e.RIGHT:
        return {
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          height: "100vh",
          width: 400,
          maxWidth: "85vw"
        };
      default:
        return {
          position: "fixed"
        };
    }
  }, [t]);
  return {
    componentStyle: m.useMemo(
      () => ({
        // -- default style --
        userSelect: "text",
        overflowY: "auto",
        padding: 16,
        color: l[1],
        backgroundColor: r[1],
        boxShadow: c[2],
        ...h,
        ...u,
        // -- custom style override --
        ...f
      }),
      [l, r, c, h, u, f]
    ),
    __: {
      DynamicPlacementStyles: h,
      DynamicTransitionStyles: u,
      transitionStatus: o
    }
  };
}
function H({ autoCloseOnClickBackdrop: s, onClickBackdrop: t }) {
  return {
    handleBackdropClick: m.useCallback(
      (r) => {
        r.target === r.currentTarget && s && (t == null || t(r));
      },
      [s, t]
    )
  };
}
export {
  H as useDrawerActions,
  C as useDrawerStyles
};
