import p from "react";
import { useButtonStyles as N } from "../Buttons/Button.hooks.esm.js";
import { BUTTON_VARIANT_MAP as h } from "../Buttons/Button.types.esm.js";
import "../Space/SpaceFlex.component.esm.js";
import "../Space/SpaceGrid.component.esm.js";
import { useSpaceFlexStyles as k } from "../Space/SpaceFlex.hooks.esm.js";
import "../Space/SpaceGrid.hooks.esm.js";
import { COMPONENT_DISPLAY_NAMES as D } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import A from "../../hooks/useThemeDesigns/index.esm.js";
import I from "../../hooks/useThemeMode/index.esm.js";
import { hexToRgba as O } from "../../tools/colors/get-colors.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import P from "../../hooks/useCustomStyle/index.esm.js";
function Z({
  spacing: M = 8,
  selected: i,
  disabled: m,
  clickable: s,
  isHovered: C,
  isClicked: y
}) {
  const { isDarkMode: a } = I(), { PaletteColors: l } = A(), u = P({ displayName: D.MenuItem }), f = k({
    column: !1,
    spacing: M
  }), o = N({
    variant: h.OUTLINED,
    disabled: m,
    isHovered: C,
    isClicked: y
  }), t = p.useMemo(() => {
    var e, g, S;
    if (!i) return {};
    const r = (e = o == null ? void 0 : o.componentStyle) == null ? void 0 : e.backgroundColor;
    if (r && typeof r == "string") {
      const d = r.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (d) {
        const [, b, T, x] = d;
        return {
          color: (g = o == null ? void 0 : o.componentStyle) == null ? void 0 : g.color,
          backgroundColor: `rgba(${b}, ${T}, ${x}, 0.25)`
          // 加深透明度到 25%
        };
      }
    }
    const n = l[1];
    return {
      color: (S = o == null ? void 0 : o.componentStyle) == null ? void 0 : S.color,
      backgroundColor: O(n, a ? 0.25 : 0.2)
    };
  }, [i, a, l, o == null ? void 0 : o.componentStyle]), c = p.useMemo(() => {
    var r, n, e;
    return s ? {
      userSelect: (r = o == null ? void 0 : o.componentStyle) == null ? void 0 : r.userSelect,
      cursor: (n = o == null ? void 0 : o.componentStyle) == null ? void 0 : n.cursor,
      transition: (e = o == null ? void 0 : o.componentStyle) == null ? void 0 : e.transition
    } : {
      userSelect: m ? "none" : "text",
      cursor: m ? "not-allowed" : "default",
      transform: "none",
      backgroundColor: "transparent"
    };
  }, [s, m, o == null ? void 0 : o.componentStyle]);
  return {
    componentStyle: p.useMemo(
      () => ({
        // -- default style --
        ...f.componentStyle,
        ...t,
        ...c,
        padding: "8px 12px",
        borderRadius: 8,
        // -- custom style --
        ...u
      }),
      [f.componentStyle, t, c, u]
    ),
    __: {
      DynamicSelectedStyles: t,
      DynamicClickableStyles: c
    }
  };
}
export {
  Z as useMenuItemStyles
};
