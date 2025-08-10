import { jsxs as m, Fragment as f, jsx as t } from "react/jsx-runtime";
import k from "clsx";
import r from "react";
import S from "../../hooks/useHandler/index.esm.js";
import { BorderColors as L } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { Space as N } from "../Space/index.esm.js";
import { Theme as O } from "../Theme/index.esm.js";
import { Transitions as U } from "../Transition/index.esm.js";
import { MenuItemTagMap as j } from "./index.types.esm.js";
import d from "./MenuItem.esm.js";
import v from "./MenuList.esm.js";
const A = r.memo(
  ({ as: s = j.li, className: n, style: l, icon: g, text: M, subText: I, isDisabled: i = !1, subItems: p, ...w }) => {
    const C = r.useMemo(() => p.map((e) => ({ ...e, id: crypto.randomUUID() })), [p]), [c, u] = r.useState(null), o = S(), b = r.useCallback(() => {
      if (i)
        return;
      const e = o.isOpen;
      o.setIsOpen(!e), e && u(null);
    }, [o.isOpen, i]);
    return r.useEffect(() => {
      c !== null && o.open();
    }, []), /* @__PURE__ */ m(f, { children: [
      /* @__PURE__ */ t(
        d,
        {
          as: s,
          className: k("Venomous-UI-React--Menu.CollapseItem", n),
          style: l,
          icon: g,
          text: M,
          subText: I,
          isDisabled: i,
          isActive: o.isOpen,
          actionButton: {
            icon: o.isOpen ? "solar:alt-arrow-up-bold-duotone" : "solar:alt-arrow-down-bold-duotone",
            style: { border: 0 }
          },
          onClick: b,
          ...w
        }
      ),
      /* @__PURE__ */ t(U.Collapse, { isOpen: o.isOpen, children: /* @__PURE__ */ t(v, { style: { width: l == null ? void 0 : l.width, paddingLeft: 24 }, children: C.map(({ id: e, style: y, onClick: a, ...x }) => /* @__PURE__ */ m(N.Flex, { row: !0, gap: 0, style: { width: "100%" }, children: [
        /* @__PURE__ */ t(h, {}),
        /* @__PURE__ */ t(
          d,
          {
            isActive: c === e,
            onClick: (T) => {
              u(e), a == null || a(T);
            },
            style: {
              width: "100%",
              backgroundColor: "transparent",
              margin: "4px 0",
              cursor: "pointer",
              ...y
            },
            ...x,
            subText: e
          }
        )
      ] }, e)) }) })
    ] });
  }
);
A.displayName = "Menu.CollapseItem";
const h = r.memo(() => {
  const { themeMode: s } = O.useThemeMode(), n = L[s].quaternary;
  return /* @__PURE__ */ m(f, { children: [
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
          left: -8
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
          left: -6.5,
          transform: "translateY(-50%)"
        }
      }
    )
  ] });
});
h.displayName = "Menu.CollapseItemTreeLine";
export {
  A as default
};
