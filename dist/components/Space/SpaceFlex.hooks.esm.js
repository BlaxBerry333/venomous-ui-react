import i from "react";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import p from "../../hooks/useCustomStyle/index.esm.js";
function d({ column: t, spacing: o }) {
  const r = p({ displayName: m.SpaceFlex }), e = i.useMemo(
    () => ({
      flexDirection: t ? "column" : "row",
      alignItems: t ? "flex-start" : "center",
      gap: o
    }),
    [t, o]
  );
  return {
    componentStyle: i.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        display: "flex",
        width: "100%",
        // ❌ 移除 height: 100%，因为这会导致所有 Space.Flex 都强制 100% 高度
        // ✅ 让高度自适应内容，用户需要时可以通过 style 覆盖
        minWidth: 0,
        ...e,
        // -- custom style --
        ...r
      }),
      [e, r]
    ),
    __: {
      DynamicFlexStyles: e
    }
  };
}
export {
  d as useSpaceFlexStyles
};
