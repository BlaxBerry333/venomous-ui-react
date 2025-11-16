import e from "react";
import { COMPONENT_DISPLAY_NAMES as T } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import g from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import x from "../../hooks/useCustomStyle/index.esm.js";
import { TABLE_CELL_ELEMENT_MAP as n, TABLE_CELL_ALIGN_MAP as M } from "./TableCell.types.esm.js";
function O({
  as: o = n.TD,
  align: p = M.LEFT,
  width: r,
  bordered: c = !1,
  sortable: a = !1,
  sorted: f = !1
}) {
  const { TextColors: y, BackgroundColors: d, BorderColors: t, PaletteColors: S } = g(), C = x({ displayName: T.TableCell }), l = e.useMemo(() => o === n.TH ? { fontWeight: "bold", backgroundColor: d[2] } : { fontWeight: "normal", backgroundColor: "transparent" }, [o, d]), i = e.useMemo(() => {
    if (r !== void 0) {
      const b = typeof r == "number" ? `${r}px` : r;
      return {
        width: b,
        minWidth: b
      };
    }
    return {};
  }, [r]), s = e.useMemo(() => c ? {
    // bordered=true: 只设置右边框和下边框，形成内部分隔线
    // wrapper 提供外边框（顶、左、右、下）
    // 这样第一行/列由 wrapper 提供边框，其他 cell 提供内部分隔线
    borderRight: `1px solid ${t[1]}`,
    borderBottom: `1px solid ${t[1]}`
  } : {
    borderBottom: `1px solid ${t[1]}`
  }, [c, t]), m = e.useMemo(() => o === n.TH && a ? {
    cursor: "pointer",
    userSelect: "none"
  } : {}, [o, a]), u = e.useMemo(() => o === n.TH && f ? {
    color: S[1]
  } : {}, [o, f, S]);
  return {
    tableCellStyle: e.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default styles --
        padding: "12px 16px",
        color: y[1],
        textAlign: p,
        ...l,
        ...i,
        ...s,
        ...m,
        ...u,
        // -- custom styles --
        ...C
      }),
      [
        l,
        i,
        s,
        m,
        u,
        y,
        p,
        C
      ]
    ),
    __: {
      DynamicAsStyles: l,
      DynamicWidthStyles: i,
      DynamicBorderedStyles: s,
      DynamicSortableStyles: m,
      DynamicSortedStyles: u
    }
  };
}
export {
  O as useTableCellStyles
};
