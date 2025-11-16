import a from "react";
import { useButtonStyles as x } from "../Buttons/Button.hooks.esm.js";
import { BUTTON_VARIANT_MAP as N } from "../Buttons/Button.types.esm.js";
import "../Space/SpaceFlex.component.esm.js";
import "../Space/SpaceGrid.component.esm.js";
import { useSpaceFlexStyles as h } from "../Space/SpaceFlex.hooks.esm.js";
import "../Space/SpaceGrid.hooks.esm.js";
import { COMPONENT_DISPLAY_NAMES as k } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import P from "../../hooks/useThemeDesigns/index.esm.js";
import A from "../../hooks/useThemeMode/index.esm.js";
import I from "../../hooks/useCustomStyle/index.esm.js";
import { hexToRgba as O } from "../../tools/colors/get-colors.esm.js";
function X({
  spacing: C = 8,
  selected: i,
  disabled: m,
  clickable: s,
  isHovered: y,
  isClicked: S
}) {
  const { isDarkMode: t } = A(), { PaletteColors: l } = P(), f = I({ displayName: k.MenuItem }), d = h({
    column: !1,
    spacing: C
  }), o = x({
    variant: N.OUTLINED,
    disabled: m,
    isHovered: y,
    isClicked: S
  }), n = a.useMemo(() => {
    var e, g, D;
    if (!i) return {};
    const r = (e = o == null ? void 0 : o.componentStyle) == null ? void 0 : e.backgroundColor;
    if (r && typeof r == "string") {
      const M = r.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (M) {
        const [, b, T, u] = M;
        return {
          color: (g = o == null ? void 0 : o.componentStyle) == null ? void 0 : g.color,
          backgroundColor: `rgba(${b}, ${T}, ${u}, 0.25)`
          // 加深透明度到 25%
        };
      }
    }
    const c = l[1];
    return {
      color: (D = o == null ? void 0 : o.componentStyle) == null ? void 0 : D.color,
      backgroundColor: O(c, t ? 0.25 : 0.2)
    };
  }, [i, t, l, o == null ? void 0 : o.componentStyle]), p = a.useMemo(() => {
    var r, c, e;
    return s ? {
      ...o == null ? void 0 : o.__.DynamicStateStyles,
      ...o == null ? void 0 : o.__.DynamicHoverStyles,
      ...o == null ? void 0 : o.__.DynamicPressedStyles,
      userSelect: (r = o == null ? void 0 : o.componentStyle) == null ? void 0 : r.userSelect,
      cursor: (c = o == null ? void 0 : o.componentStyle) == null ? void 0 : c.cursor,
      transition: (e = o == null ? void 0 : o.componentStyle) == null ? void 0 : e.transition
    } : {
      userSelect: m ? "none" : "text",
      cursor: m ? "not-allowed" : "default",
      transform: "none",
      backgroundColor: "transparent"
    };
  }, [
    s,
    m,
    o == null ? void 0 : o.componentStyle,
    o == null ? void 0 : o.__.DynamicStateStyles,
    o == null ? void 0 : o.__.DynamicHoverStyles,
    o == null ? void 0 : o.__.DynamicPressedStyles
  ]);
  return {
    componentStyle: a.useMemo(
      () => ({
        // -- default style --
        ...d.componentStyle,
        ...n,
        ...p,
        padding: "8px 12px",
        borderRadius: 8,
        // -- custom style --
        ...f
      }),
      [d.componentStyle, n, p, f]
    ),
    __: {
      DynamicSelectedStyles: n,
      DynamicClickableStyles: p
    }
  };
}
export {
  X as useMenuItemStyles
};
