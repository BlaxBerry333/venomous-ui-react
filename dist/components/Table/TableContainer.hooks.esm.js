import n from "react";
import { COMPONENT_DISPLAY_NAMES as g } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import h from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import M from "../../hooks/useCustomStyle/index.esm.js";
import { TABLE_CELL_SORT_ORDER_MAP as l } from "./TableCell.types.esm.js";
function B({ rows: i, columns: s }) {
  const [t, c] = n.useState(void 0), [e, d] = n.useState(l.ASC), p = n.useCallback(
    (r, u, o, m) => {
      const a = r[o], S = u[o];
      if (a == null && S == null) return 0;
      if (a == null) return 1;
      if (S == null) return -1;
      if (typeof a == "number" && typeof S == "number")
        return m === l.ASC ? a - S : S - a;
      const y = String(a), A = String(S), b = y.localeCompare(A);
      return m === l.ASC ? b : -b;
    },
    []
  ), f = n.useMemo(() => {
    if (!t) return i;
    const r = s.find((o) => o.key === t);
    if (!r || !r.sortable) return i;
    const u = [...i];
    return u.sort((o, m) => r.onSort ? r.onSort(o, m, e) : p(o, m, t, e)), u;
  }, [i, s, t, e, p]), C = n.useCallback(
    (r) => {
      const u = s.find((o) => o.key === r);
      !u || !u.sortable || (t === r ? e === l.ASC ? d(l.DESC) : (c(void 0), d(l.ASC)) : (c(r), d(l.ASC)));
    },
    [s, t, e]
  );
  return n.useMemo(
    () => ({
      sortedRows: f,
      currentSortColumn: t,
      currentSortOrder: e,
      handleSortChange: C
    }),
    [f, t, e, C]
  );
}
function P() {
  const { BorderColors: i } = h(), s = M({ displayName: g.Table }), t = n.useMemo(() => ({
    borderCollapse: "separate",
    borderSpacing: 0
  }), []), c = n.useMemo(
    () => ({
      width: "100%",
      overflow: "auto",
      // wrapper 始终有边框，确保滚动时容器边缘有边框
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: i[1]
    }),
    [i]
  ), e = n.useMemo(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      // -- default styles --
      width: "100%",
      minWidth: "100%",
      ...t,
      // -- custom styles --
      ...s
    }),
    [t, s]
  );
  return {
    tableWrapperStyle: c,
    tableStyle: e,
    __: {
      DynamicBorderedStyles: t
    }
  };
}
export {
  P as useTableContainerStyles,
  B as useTableSorting
};
