import n from "react";
import { COMPONENT_DISPLAY_NAMES as l } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import c from "../../hooks/useCustomStyle/index.esm.js";
import { useProgressBarStyles as a } from "./ProgressBar.hooks.esm.js";
function E({ color: r, disablePortal: o = !1 }) {
  const { containerStyle: t } = a({ color: r }), e = c({ displayName: l.PageScrollProgressBar });
  return {
    containerStyle: n.useMemo(() => o ? {
      // -- default style --
      ...t,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      pointerEvents: "none",
      transition: "width 0s ease",
      // Custom style override
      ...e
    } : {
      // -- default style --
      ...t,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      zIndex: 9999,
      pointerEvents: "none",
      transition: "width 0s ease",
      // Custom style override
      ...e
    }, [e, t, o])
  };
}
function P() {
  const [r, o] = n.useState(0);
  return n.useEffect(() => {
    const t = () => {
      const e = window.scrollY, s = document.documentElement.scrollHeight - window.innerHeight, i = s > 0 ? e / s * 100 : 0;
      o(i);
    };
    return t(), window.addEventListener("scroll", t, { passive: !0 }), () => {
      window.removeEventListener("scroll", t);
    };
  }, []), {
    displayValue: r
  };
}
export {
  P as usePageScrollProgressActions,
  E as usePageScrollProgressBarStyles
};
