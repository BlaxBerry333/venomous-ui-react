import m from "react";
import { useCardStyles as s } from "../Cards/Card.hooks.esm.js";
import { COMPONENT_DISPLAY_NAMES as i } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import n from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import l from "../../hooks/useCustomStyle/index.esm.js";
function T() {
  const { TextColors: o, ShadowStyles: t } = n(), r = l({ displayName: i.Dialog }), e = s({ variant: "contained", clickable: !1 });
  return {
    componentStyle: m.useMemo(
      () => ({
        // -- default style --
        ...e.componentStyle,
        userSelect: "text",
        position: "relative",
        overflow: "auto",
        boxShadow: t[2],
        // -- custom style --
        ...r
      }),
      [e.componentStyle, o, t, r]
    )
  };
}
function _({ autoCloseOnClickBackdrop: o, onClickBackdrop: t }) {
  return {
    handleBackdropClick: m.useCallback(
      (e) => {
        e.target === e.currentTarget && o && (t == null || t(e));
      },
      [o, t]
    )
  };
}
export {
  _ as useDialogActions,
  T as useDialogStyles
};
