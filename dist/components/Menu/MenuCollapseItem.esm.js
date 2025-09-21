import { jsxs as d, Fragment as g, jsx as t } from "react/jsx-runtime";
import L from "clsx";
import o from "react";
import N from "../../hooks/useDesign/index.esm.js";
import j from "../../hooks/useHandler/index.esm.js";
import { Space as v } from "../Space/index.esm.js";
import { Transitions as A } from "../Transition/index.esm.js";
import { MenuItemTagMap as B } from "./index.types.esm.js";
import h from "./MenuItem.esm.js";
import E from "./MenuList.esm.js";
const F = o.memo(
  ({
    as: n = B.li,
    className: C,
    style: r,
    icon: I,
    text: M,
    subText: w,
    isDisabled: i = !1,
    isActive: y = !1,
    isCollapsed: a = !1,
    subItems: b,
    ...S
  }) => {
    const m = N(), c = o.useMemo(() => m.BorderColors.quaternary, [m]), e = j(a), k = e.isOpen, [p, f] = o.useState(null), O = o.useCallback(() => {
      if (i)
        return;
      const l = e.isOpen;
      e.setIsOpen(!l), l && f(null);
    }, [e.isOpen, i]);
    return o.useEffect(() => {
      p !== null && e.open();
    }, []), o.useEffect(() => {
      e.setIsOpen(a);
    }, [a]), /* @__PURE__ */ d(g, { children: [
      /* @__PURE__ */ t(
        h,
        {
          as: n,
          className: L("Venomous-UI-React--Menu.CollapseItem", C),
          style: {
            padding: "8px",
            ...k ? {
              outlineWidth: 1.5,
              outlineStyle: "solid",
              outlineColor: c
            } : { outline: "none" },
            ...r
          },
          icon: I,
          text: M,
          subText: w,
          isDisabled: i,
          isActive: y || p !== null,
          onClick: O,
          actionButtonProps: {
            icon: e.isOpen ? "solar:alt-arrow-up-bold-duotone" : "solar:alt-arrow-down-bold-duotone",
            style: { border: 0 }
          },
          ...S
        }
      ),
      /* @__PURE__ */ t(A.Collapse, { isOpen: e.isOpen, children: /* @__PURE__ */ t(E, { style: { width: r == null ? void 0 : r.width, padding: "4px 2px 4px 24px" }, children: b.map(({ style: l, onClick: u, ...s }) => /* @__PURE__ */ d(v.Flex, { gap: 0, style: { width: "100%" }, children: [
        /* @__PURE__ */ t(x, { color: c }),
        /* @__PURE__ */ t(
          h,
          {
            isActive: p === s.id,
            onClick: (T) => {
              f(s.id), u == null || u(T);
            },
            style: {
              width: "100%",
              cursor: "pointer",
              backgroundColor: "transparent",
              ...l
            },
            ...s
          }
        )
      ] }, s.id)) }) })
    ] });
  }
);
F.displayName = "Menu.CollapseItem";
const x = o.memo(({ color: n }) => /* @__PURE__ */ d(g, { children: [
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
x.displayName = "Menu.CollapseItemTreeLine";
export {
  F as default
};
