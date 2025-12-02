import { jsx as t, jsxs as v } from "react/jsx-runtime";
import m from "react";
import B from "clsx";
import { COMPONENT_DISPLAY_NAMES as b } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as H } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import j from "../../hooks/useCustomComponentProps/index.esm.js";
import x from "./TableBody.component.esm.js";
import d from "./TableCell.component.esm.js";
import { TABLE_CELL_ELEMENT_MAP as n } from "./TableCell.types.esm.js";
import { useTableContainerStyles as D, useTableSorting as z } from "./TableContainer.hooks.esm.js";
import W from "./TableHead.component.esm.js";
import p from "./TableRow.component.esm.js";
function Y({
  className: y,
  style: S,
  columns: o,
  rows: f,
  rowKey: i,
  bordered: T,
  TableHeadStyle: C,
  TableBodyStyle: h,
  TableHeadRowStyle: g,
  TableBodyRowStyle: N,
  TableHeadCellStyle: E,
  TableBodyCellStyle: M,
  ...c
}) {
  const k = j({
    displayName: b.Table
  }), a = T ?? k.bordered ?? !1, { tableWrapperStyle: A, tableStyle: _ } = D(), { sortedRows: L, currentSortColumn: s, currentSortOrder: O, handleSortChange: P } = z({
    rows: f,
    columns: o
  }), R = m.useCallback(
    (e, l) => String(i === void 0 ? l : typeof i == "function" ? i(e, l) : e[i]),
    [i]
  );
  return /* @__PURE__ */ t("div", { className: B(H.Table, y), style: { ...A, ...S }, children: /* @__PURE__ */ v("table", { style: { ..._ }, ...c, children: [
    /* @__PURE__ */ t(W, { style: { ...C }, children: /* @__PURE__ */ t(p, { style: { ...g }, children: o.map((e) => /* @__PURE__ */ t(
      d,
      {
        as: n.TH,
        align: e.align,
        width: e.width,
        bordered: a,
        sortable: e.sortable,
        sorted: s === e.key,
        sortOrder: s === e.key ? O : void 0,
        onSortChange: () => P(e.key),
        style: { ...E, ...e.TableHeadCellStyle },
        children: e.label
      },
      String(e.key)
    )) }) }),
    /* @__PURE__ */ t(x, { style: { ...h }, children: L.map((e, l) => /* @__PURE__ */ t(p, { style: { ...N }, children: o.map((r) => /* @__PURE__ */ t(
      d,
      {
        as: n.TD,
        align: r.align,
        width: r.width,
        bordered: a,
        style: { ...M, ...r.TableBodyCellStyle },
        children: r.renderCell ? r.renderCell(e, l) : String(e[r.key] ?? "")
      },
      String(r.key)
    )) }, R(e, l))) })
  ] }) });
}
const q = m.memo(Y);
q.displayName = b.Table;
export {
  q as default
};
