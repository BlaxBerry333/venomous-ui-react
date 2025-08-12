import { jsxs as u, Fragment as g, jsx as t } from "react/jsx-runtime";
import L from "clsx";
import o from "react";
import N from "../../hooks/useHandler/index.esm.js";
import { BorderColors as j } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { Space as v } from "../Space/index.esm.js";
import { Theme as A } from "../Theme/index.esm.js";
import { Transitions as B } from "../Transition/index.esm.js";
import { MenuItemTagMap as E } from "./index.types.esm.js";
import h from "./MenuItem.esm.js";
import F from "./MenuList.esm.js";
const R = o.memo(
  ({
    as: n = E.li,
    className: w,
    style: r,
    icon: x,
    text: C,
    subText: I,
    isDisabled: s = !1,
    isActive: y = !1,
    isCollapsed: a = !1,
    subItems: b,
    ...T
  }) => {
    const { themeMode: d } = A.useThemeMode(), c = o.useMemo(() => j[d].quaternary, [d]), e = N(a), S = e.isOpen, [p, f] = o.useState(null), k = o.useCallback(() => {
      if (s)
        return;
      const l = e.isOpen;
      e.setIsOpen(!l), l && f(null);
    }, [e.isOpen, s]);
    return o.useEffect(() => {
      p !== null && e.open();
    }, []), o.useEffect(() => {
      e.setIsOpen(a);
    }, [a]), /* @__PURE__ */ u(g, { children: [
      /* @__PURE__ */ t(
        h,
        {
          as: n,
          className: L("Venomous-UI-React--Menu.CollapseItem", w),
          style: {
            padding: "8px",
            ...S ? {
              outlineWidth: 1.5,
              outlineStyle: "solid",
              outlineColor: c
            } : { outline: "none" },
            ...r
          },
          icon: x,
          text: C,
          subText: I,
          isDisabled: s,
          isActive: y || p !== null,
          onClick: k,
          actionButtonProps: {
            icon: e.isOpen ? "solar:alt-arrow-up-bold-duotone" : "solar:alt-arrow-down-bold-duotone",
            style: { border: 0 }
          },
          ...T
        }
      ),
      /* @__PURE__ */ t(B.Collapse, { isOpen: e.isOpen, children: /* @__PURE__ */ t(F, { style: { width: r == null ? void 0 : r.width, padding: "4px 2px 4px 24px" }, children: b.map(({ style: l, onClick: m, ...i }) => /* @__PURE__ */ u(v.Flex, { row: !0, gap: 0, style: { width: "100%" }, children: [
        /* @__PURE__ */ t(M, { color: c }),
        /* @__PURE__ */ t(
          h,
          {
            isActive: p === i.id,
            onClick: (O) => {
              f(i.id), m == null || m(O);
            },
            style: {
              width: "100%",
              cursor: "pointer",
              backgroundColor: "transparent",
              ...l
            },
            ...i
          }
        )
      ] }, i.id)) }) })
    ] });
  }
);
R.displayName = "Menu.CollapseItem";
const M = o.memo(({ color: n }) => /* @__PURE__ */ u(g, { children: [
  /* @__PURE__ */ t(
    "i",
    {
      style: {
        display: "inline-block",
        backgroundColor: n,
        height: "100%",
        width: 1.5,
        position: "absolute",
        top: "-50%",
        left: -10
      }
    }
  ),
  /* @__PURE__ */ t(
    "i",
    {
      style: {
        display: "inline-block",
        backgroundColor: n,
        height: 1.5,
        width: 8,
        position: "absolute",
        top: "50%",
        left: -8.5,
        transform: "translateY(-50%)"
      }
    }
  )
] }));
M.displayName = "Menu.CollapseItemTreeLine";
export {
  R as default
};
