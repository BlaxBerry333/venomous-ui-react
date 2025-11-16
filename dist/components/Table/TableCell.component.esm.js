import { jsx as m, jsxs as u } from "react/jsx-runtime";
import t from "react";
import { clsx as y } from "../../node_modules/clsx/dist/clsx.esm.js";
import P from "../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as _ } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as d } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useTableCellStyles as x } from "./TableCell.hooks.esm.js";
import { TABLE_CELL_ELEMENT_MAP as a, TABLE_CELL_ALIGN_MAP as I, TABLE_CELL_SORT_ORDER_MAP as n } from "./TableCell.types.esm.js";
const R = t.memo(
  t.forwardRef(
    ({
      className: p,
      style: f,
      as: l = a.TD,
      align: c = I.LEFT,
      width: s,
      bordered: E = !1,
      sortable: r = !1,
      sorted: e = !1,
      sortOrder: i,
      onSortChange: T,
      children: C,
      ...L
    }, A) => {
      const { tableCellStyle: N } = x({
        as: l,
        align: c,
        width: s,
        bordered: E,
        sortable: r,
        sorted: e
      }), S = l, M = t.useCallback(() => {
        if (l !== a.TH || !r) return null;
        let o = "solar:sort-vertical-linear";
        return e && i === n.ASC ? o = "solar:alt-arrow-up-linear" : e && i === n.DESC && (o = "solar:alt-arrow-down-linear"), /* @__PURE__ */ m(
          P,
          {
            icon: o,
            style: {
              marginLeft: 8,
              verticalAlign: "middle",
              opacity: e ? 1 : 0.5
            }
          }
        );
      }, [l, r, e, i]);
      return /* @__PURE__ */ m(
        S,
        {
          ref: A,
          className: y(d.TableCell, p),
          style: { ...N, ...f },
          onClick: r && l === a.TH ? T : void 0,
          ...L,
          children: /* @__PURE__ */ u("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
            C,
            M()
          ] })
        }
      );
    }
  )
);
R.displayName = _.TableCell;
export {
  R as default
};
