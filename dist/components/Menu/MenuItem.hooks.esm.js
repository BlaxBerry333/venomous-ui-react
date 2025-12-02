import f from "react";
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
function H({
  spacing: C = 8,
  selected: u,
  disabled: c,
  clickable: g,
  isHovered: a,
  isClicked: i
}) {
  const { isDarkMode: S } = I(), { PaletteColors: b } = A(), M = P({ displayName: D.MenuItem }), d = k({
    column: !1,
    spacing: C
  }), o = N({
    variant: h.OUTLINED,
    disabled: c,
    isHovered: a,
    isClicked: i
  }), s = f.useMemo(() => {
    var e, n, m;
    if (!u) return {};
    const r = (e = o == null ? void 0 : o.componentStyle) == null ? void 0 : e.backgroundColor;
    if (r && typeof r == "string") {
      const t = r.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (t) {
        const [, y, T, x] = t;
        return {
          color: (n = o == null ? void 0 : o.componentStyle) == null ? void 0 : n.color,
          backgroundColor: `rgba(${y}, ${T}, ${x}, 0.25)`
          // 加深透明度到 25%
        };
      }
    }
    const p = b[1];
    return {
      color: (m = o == null ? void 0 : o.componentStyle) == null ? void 0 : m.color,
      backgroundColor: O(p, S ? 0.25 : 0.2)
    };
  }, [u, S, b, o == null ? void 0 : o.componentStyle]), l = f.useMemo(() => {
    var p, e, n, m, t;
    if (!g)
      return {
        userSelect: c ? "none" : "text",
        cursor: c ? "not-allowed" : "default",
        transform: "none",
        backgroundColor: "transparent"
      };
    const r = {
      userSelect: (p = o == null ? void 0 : o.componentStyle) == null ? void 0 : p.userSelect,
      cursor: (e = o == null ? void 0 : o.componentStyle) == null ? void 0 : e.cursor,
      transition: (n = o == null ? void 0 : o.componentStyle) == null ? void 0 : n.transition
    };
    return a || i ? {
      ...r,
      backgroundColor: (m = o == null ? void 0 : o.componentStyle) == null ? void 0 : m.backgroundColor,
      transform: (t = o == null ? void 0 : o.componentStyle) == null ? void 0 : t.transform
    } : r;
  }, [g, c, a, i, o == null ? void 0 : o.componentStyle]);
  return {
    componentStyle: f.useMemo(
      () => ({
        // -- default style --
        ...d.componentStyle,
        ...s,
        ...l,
        padding: "8px 12px",
        borderRadius: 8,
        // -- custom style --
        ...M
      }),
      [d.componentStyle, s, l, M]
    ),
    __: {
      DynamicSelectedStyles: s,
      DynamicClickableStyles: l
    }
  };
}
export {
  H as useMenuItemStyles
};
