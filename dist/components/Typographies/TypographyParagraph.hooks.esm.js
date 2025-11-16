import t from "react";
import { COMPONENT_DISPLAY_NAMES as u } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import S from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import h from "../../hooks/useCustomStyle/index.esm.js";
function v({
  ellipsis: o = 0,
  size: e = "BASE",
  weight: a = "normal",
  color: m
}) {
  const { TextColors: p, TypographySizes: s, TypographyLineHeights: l } = S(), y = h({ displayName: u.TypographyParagraph }), r = t.useMemo(() => ({
    fontSize: s.TEXT[e],
    lineHeight: l.TEXT[e]
  }), [e, s, l]), i = t.useMemo(() => ({
    color: m || p[1]
  }), [m, p]), n = t.useMemo(() => {
    if (!o)
      return {};
    const c = {
      overflow: "hidden",
      minWidth: 0,
      // Flex/Grid 容器兼容：允许收缩到小于内容宽度
      maxWidth: "100%",
      // 防止溢出父容器
      flex: "1 1 auto"
      // Flex 容器中自动收缩/扩展
    };
    return o === 1 ? {
      ...c,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    } : {
      ...c,
      display: "-webkit-box",
      WebkitLineClamp: o,
      WebkitBoxOrient: "vertical",
      textOverflow: "ellipsis",
      wordBreak: "break-word"
      // 长单词换行
    };
  }, [o]);
  return {
    componentStyle: t.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        margin: 0,
        // -- default style --
        position: "relative",
        display: o ? o === 1 ? "block" : "-webkit-box" : "block",
        fontWeight: a || "normal",
        // -- size styles --
        ...r,
        // -- color styles --
        ...i,
        // -- ellipsis styles --
        ...n,
        // -- custom style --
        ...y
      }),
      [o, a, r, i, n, y]
    ),
    __: {
      DynamicSizeStyles: r,
      DynamicColorStyles: i,
      DynamicEllipsisStyles: n
    }
  };
}
export {
  v as useTypographyParagraphStyles
};
