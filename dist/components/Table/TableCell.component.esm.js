import { jsx as n, jsxs as x } from "react/jsx-runtime";
import s from "react";
import I from "clsx";
import R from "../Icon/Icon.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as p } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as w } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import D from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTableCellStyles as O } from "./TableCell.hooks.esm.js";
import { TABLE_CELL_ELEMENT_MAP as i, TABLE_CELL_ALIGN_MAP as v, TABLE_CELL_SORT_ORDER_MAP as m } from "./TableCell.types.esm.js";
const B = s.memo(
  s.forwardRef(
    ({
      className: c,
      style: f,
      as: d,
      align: C,
      width: E,
      bordered: T,
      sortable: _,
      sorted: L,
      sortOrder: t,
      onSortChange: A,
      children: b,
      ...N
    }, u) => {
      const o = D({
        displayName: p.TableCell
      }), e = d ?? o.as ?? i.TD, S = C ?? o.align ?? v.LEFT, y = T ?? o.bordered ?? !1, r = _ ?? o.sortable ?? !1, l = L ?? o.sorted ?? !1, { tableCellStyle: M } = O({
        as: e,
        align: S,
        width: E,
        bordered: y,
        sortable: r,
        sorted: l
      }), P = e, g = s.useCallback(() => {
        if (e !== i.TH || !r) return null;
        let a = "solar:sort-vertical-linear";
        return l && t === m.ASC ? a = "solar:alt-arrow-up-linear" : l && t === m.DESC && (a = "solar:alt-arrow-down-linear"), /* @__PURE__ */ n(
          R,
          {
            icon: a,
            style: {
              marginLeft: 8,
              verticalAlign: "middle",
              opacity: l ? 1 : 0.5
            }
          }
        );
      }, [e, r, l, t]);
      return /* @__PURE__ */ n(
        P,
        {
          ref: u,
          className: I(w.TableCell, c),
          style: { ...M, ...f },
          onClick: r && e === i.TH ? A : void 0,
          ...N,
          children: /* @__PURE__ */ x("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
            b,
            g()
          ] })
        }
      );
    }
  )
);
B.displayName = p.TableCell;
export {
  B as default
};
