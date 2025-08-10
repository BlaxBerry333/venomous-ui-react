import { jsxs as c, Fragment as h, jsx as o } from "react/jsx-runtime";
import T from "clsx";
import t from "react";
import k from "../../hooks/useHandler/index.esm.js";
import { BorderColors as S } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { Space as L } from "../Space/index.esm.js";
import { Theme as O } from "../Theme/index.esm.js";
import { Transitions as N } from "../Transition/index.esm.js";
import { MenuItemTagMap as j } from "./index.types.esm.js";
import f from "./MenuItem.esm.js";
import v from "./MenuList.esm.js";
const A = t.memo(
  ({
    as: i = j.li,
    className: r,
    style: n,
    icon: M,
    text: w,
    subText: I,
    isDisabled: a = !1,
    isCollapsed: p = !1,
    subItems: x,
    ...C
  }) => {
    const [u, d] = t.useState(null), e = k(p), b = t.useCallback(() => {
      if (a)
        return;
      const l = e.isOpen;
      e.setIsOpen(!l), l && d(null);
    }, [e.isOpen, a]);
    return t.useEffect(() => {
      u !== null && e.open();
    }, []), t.useEffect(() => {
      e.setIsOpen(p);
    }, [p]), /* @__PURE__ */ c(h, { children: [
      /* @__PURE__ */ o(
        f,
        {
          as: i,
          className: T("Venomous-UI-React--Menu.CollapseItem", r),
          style: n,
          icon: M,
          text: w,
          subText: I,
          isDisabled: a,
          isActive: e.isOpen,
          actionButton: {
            icon: e.isOpen ? "solar:alt-arrow-up-bold-duotone" : "solar:alt-arrow-down-bold-duotone",
            style: { border: 0 }
          },
          onClick: b,
          ...C
        }
      ),
      /* @__PURE__ */ o(N.Collapse, { isOpen: e.isOpen, children: /* @__PURE__ */ o(v, { style: { width: n == null ? void 0 : n.width, paddingLeft: 24 }, children: x.map(({ style: l, onClick: m, ...s }) => /* @__PURE__ */ c(L.Flex, { row: !0, gap: 0, style: { width: "100%" }, children: [
        /* @__PURE__ */ o(g, {}),
        /* @__PURE__ */ o(
          f,
          {
            isActive: u === s.text,
            onClick: (y) => {
              d(s.text), m == null || m(y);
            },
            style: {
              width: "100%",
              backgroundColor: "transparent",
              margin: "4px 0",
              cursor: "pointer",
              ...l
            },
            ...s
          }
        )
      ] }, s.text)) }) })
    ] });
  }
);
A.displayName = "Menu.CollapseItem";
const g = t.memo(() => {
  const { themeMode: i } = O.useThemeMode(), r = S[i].quaternary;
  return /* @__PURE__ */ c(h, { children: [
    /* @__PURE__ */ o(
      "i",
      {
        style: {
          display: "inline-block",
          backgroundColor: r,
          height: "100%",
          width: 1.5,
          position: "absolute",
          top: "-50%",
          left: -8
        }
      }
    ),
    /* @__PURE__ */ o(
      "i",
      {
        style: {
          display: "inline-block",
          backgroundColor: r,
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
g.displayName = "Menu.CollapseItemTreeLine";
export {
  A as default
};
