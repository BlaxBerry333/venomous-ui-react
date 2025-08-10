import { jsxs as m, Fragment as f, jsx as t } from "react/jsx-runtime";
import k from "clsx";
import r from "react";
import { Space as S } from "../Space/index.esm.js";
import { Theme as L } from "../Theme/index.esm.js";
import { Transitions as N } from "../Transition/index.esm.js";
import { MenuItemTagMap as O } from "./index.types.esm.js";
import d from "./MenuItem.esm.js";
import U from "./MenuList.esm.js";
import j from "../../hooks/useHandler/index.esm.js";
import { BorderColors as v } from "../../utils/design/colors.esm.js";
const A = r.memo(
  ({ as: s = O.li, className: n, style: l, icon: g, text: M, subText: I, isDisabled: i = !1, subItems: p, ...w }) => {
    const C = r.useMemo(() => p.map((e) => ({ ...e, id: crypto.randomUUID() })), [p]), [c, u] = r.useState(null), o = j(), b = r.useCallback(() => {
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
      /* @__PURE__ */ t(N.Collapse, { isOpen: o.isOpen, children: /* @__PURE__ */ t(U, { style: { width: l == null ? void 0 : l.width, paddingLeft: 24 }, children: C.map(({ id: e, style: y, onClick: a, ...x }) => /* @__PURE__ */ m(S.Flex, { row: !0, gap: 0, style: { width: "100%" }, children: [
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
  const { themeMode: s } = L.useThemeMode(), n = v[s].quaternary;
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
