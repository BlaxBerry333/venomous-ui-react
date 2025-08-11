import { jsxs as u, Fragment as h, jsx as o } from "react/jsx-runtime";
import k from "clsx";
import t from "react";
import S from "../../hooks/useHandler/index.esm.js";
import { BorderColors as L } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { Space as N } from "../Space/index.esm.js";
import { Theme as O } from "../Theme/index.esm.js";
import { Transitions as j } from "../Transition/index.esm.js";
import { MenuItemTagMap as v } from "./index.types.esm.js";
import f from "./MenuItem.esm.js";
import A from "./MenuList.esm.js";
const B = t.memo(
  ({
    as: a = v.li,
    className: r,
    style: n,
    icon: M,
    text: w,
    subText: I,
    isDisabled: i = !1,
    isActive: x = !1,
    isCollapsed: p = !1,
    subItems: y,
    ...C
  }) => {
    const [m, d] = t.useState(null), e = S(p), b = t.useCallback(() => {
      if (i)
        return;
      const l = e.isOpen;
      e.setIsOpen(!l), l && d(null);
    }, [e.isOpen, i]);
    return t.useEffect(() => {
      m !== null && e.open();
    }, []), t.useEffect(() => {
      e.setIsOpen(p);
    }, [p]), /* @__PURE__ */ u(h, { children: [
      /* @__PURE__ */ o(
        f,
        {
          as: a,
          className: k("Venomous-UI-React--Menu.CollapseItem", r),
          style: {
            padding: "8px",
            // backgroundColor: handler.isOpen ? "?" : "transparent",
            ...n
          },
          icon: M,
          text: w,
          subText: I,
          isDisabled: i,
          isActive: x || m !== null,
          onClick: b,
          actionButtonProps: {
            icon: e.isOpen ? "solar:alt-arrow-up-bold-duotone" : "solar:alt-arrow-down-bold-duotone",
            style: { border: 0 }
          },
          ...C
        }
      ),
      /* @__PURE__ */ o(j.Collapse, { isOpen: e.isOpen, children: /* @__PURE__ */ o(A, { style: { width: n == null ? void 0 : n.width, paddingLeft: 24 }, children: y.map(({ style: l, onClick: c, ...s }) => /* @__PURE__ */ u(N.Flex, { row: !0, gap: 0, style: { width: "100%" }, children: [
        /* @__PURE__ */ o(g, {}),
        /* @__PURE__ */ o(
          f,
          {
            isActive: m === s.text,
            onClick: (T) => {
              d(s.text), c == null || c(T);
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
      ] }, s.text)) }) })
    ] });
  }
);
B.displayName = "Menu.CollapseItem";
const g = t.memo(() => {
  const { themeMode: a } = O.useThemeMode(), r = L[a].quaternary;
  return /* @__PURE__ */ u(h, { children: [
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
          left: -6
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
          left: -4.5,
          transform: "translateY(-50%)"
        }
      }
    )
  ] });
});
g.displayName = "Menu.CollapseItemTreeLine";
export {
  B as default
};
