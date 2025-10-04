import { jsxs as c, Fragment as x, jsx as t } from "react/jsx-runtime";
import E from "clsx";
import o from "react";
import L from "../../hooks/useDesign/index.esm.js";
import N from "../../hooks/useHandler/index.esm.js";
import { Space as j } from "../Space/index.esm.js";
import { Transitions as B } from "../Transition/index.esm.js";
import { MenuItemTagMap as F } from "./index.types.esm.js";
import g from "./MenuItem.esm.js";
import R from "./MenuList.esm.js";
const q = o.memo(
  ({
    as: n = F.li,
    className: I,
    style: r,
    icon: M,
    text: w,
    subText: y,
    isDisabled: i = !1,
    isActive: a = !1,
    isCollapsed: p = !1,
    subItems: b,
    ...S
  }) => {
    const f = L(), h = o.useMemo(() => f.BorderColors.quaternary, [f]), e = N(p), k = e.isOpen, [u, d] = o.useState(null), O = o.useCallback(() => {
      if (i)
        return;
      const l = e.isOpen;
      e.setIsOpen(!l), l && d(null);
    }, [e.isOpen, i]);
    return o.useEffect(() => {
      u !== null && e.open();
    }, []), o.useEffect(() => {
      a || d(null);
    }, [a]), o.useEffect(() => {
      e.setIsOpen(p);
    }, [p]), /* @__PURE__ */ c(x, { children: [
      /* @__PURE__ */ t(
        g,
        {
          as: n,
          className: E("Venomous-UI-React--Menu.CollapseItem", I),
          style: {
            padding: "8px",
            ...k ? {
              outlineWidth: 1.5,
              outlineStyle: "solid",
              outlineColor: h
            } : { outline: "none" },
            ...r
          },
          icon: M,
          text: w,
          subText: y,
          isDisabled: i,
          isActive: a || u !== null,
          onClick: O,
          actionButtonProps: {
            icon: e.isOpen ? "solar:alt-arrow-up-bold-duotone" : "solar:alt-arrow-down-bold-duotone",
            style: { border: 0 }
          },
          ...S
        }
      ),
      /* @__PURE__ */ t(B.Collapse, { isOpen: e.isOpen, children: /* @__PURE__ */ t(R, { style: { width: r == null ? void 0 : r.width, padding: "4px 2px 4px 24px" }, children: b.map(({ style: l, onClick: m, ...s }) => /* @__PURE__ */ c(j.Flex, { gap: 0, style: { width: "100%" }, children: [
        /* @__PURE__ */ t(C, { color: h }),
        /* @__PURE__ */ t(
          g,
          {
            isActive: u === s.id,
            onClick: (T) => {
              d(s.id), m == null || m(T);
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
q.displayName = "Menu.CollapseItem";
const C = o.memo(({ color: n }) => /* @__PURE__ */ c(x, { children: [
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
C.displayName = "Menu.CollapseItemTreeLine";
export {
  q as default
};
