import { jsx as r, jsxs as c } from "react/jsx-runtime";
import S from "react";
import { clsx as P } from "../../node_modules/clsx/dist/clsx.esm.js";
import { COMPONENT_DISPLAY_NAMES as R } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as v } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import B from "./TableBody.component.esm.js";
import n from "./TableCell.component.esm.js";
import { TABLE_CELL_ELEMENT_MAP as d } from "./TableCell.types.esm.js";
import { useTableContainerStyles as H, useTableSorting as j } from "./TableContainer.hooks.esm.js";
import x from "./TableHead.component.esm.js";
import p from "./TableRow.component.esm.js";
function D({
  className: m,
  style: y,
  columns: a,
  rows: b,
  rowKey: i,
  bordered: o = !1,
  TableHeadStyle: f,
  TableBodyStyle: T,
  TableHeadRowStyle: h,
  TableBodyRowStyle: C,
  TableHeadCellStyle: g,
  TableBodyCellStyle: E,
  ...N
}) {
  const { tableWrapperStyle: M, tableStyle: k } = H(), { sortedRows: A, currentSortColumn: s, currentSortOrder: _, handleSortChange: L } = j({
    rows: b,
    columns: a
  }), O = S.useCallback(
    (e, l) => String(i === void 0 ? l : typeof i == "function" ? i(e, l) : e[i]),
    [i]
  );
  return /* @__PURE__ */ r("div", { className: P(v.Table, m), style: { ...M, ...y }, children: /* @__PURE__ */ c("table", { style: { ...k }, ...N, children: [
    /* @__PURE__ */ r(x, { style: { ...f }, children: /* @__PURE__ */ r(p, { style: { ...h }, children: a.map((e) => /* @__PURE__ */ r(
      n,
      {
        as: d.TH,
        align: e.align,
        width: e.width,
        bordered: o,
        sortable: e.sortable,
        sorted: s === e.key,
        sortOrder: s === e.key ? _ : void 0,
        onSortChange: () => L(e.key),
        style: { ...g, ...e.TableHeadCellStyle },
        children: e.label
      },
      String(e.key)
    )) }) }),
    /* @__PURE__ */ r(B, { style: { ...T }, children: A.map((e, l) => /* @__PURE__ */ r(p, { style: { ...C }, children: a.map((t) => /* @__PURE__ */ r(
      n,
      {
        as: d.TD,
        align: t.align,
        width: t.width,
        bordered: o,
        style: { ...E, ...t.TableBodyCellStyle },
        children: t.renderCell ? t.renderCell(e, l) : String(e[t.key] ?? "")
      },
      String(t.key)
    )) }, O(e, l))) })
  ] }) });
}
const z = S.memo(D);
z.displayName = R.Table;
export {
  z as default
};
