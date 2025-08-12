import { jsx as h, jsxs as g } from "react/jsx-runtime";
import O from "clsx";
import o from "react";
import v from "../../hooks/useElementHover/index.esm.js";
import { TextColors as n } from "../../utils/design/colors.esm.js";
import { Shadows as R } from "../../utils/design/Shadow.esm.js";
import { getOpacityHex as E } from "../../utils/tools/get-colors.esm.js";
import { Buttons as U } from "../Button/index.esm.js";
import j from "../Icon/Icon.esm.js";
import { Space as y } from "../Space/index.esm.js";
import { Theme as u } from "../Theme/index.esm.js";
import { Typography as M } from "../Typography/index.esm.js";
import { MenuItemTagMap as F } from "./index.types.esm.js";
const L = o.memo(
  ({
    as: s = F.li,
    className: c,
    style: w,
    icon: l,
    text: S,
    subText: f,
    isDisabled: r = !1,
    isActive: x = !1,
    actionButtonProps: e = void 0,
    ...a
  }) => {
    const { themeMode: m } = u.useThemeMode(), { themeColor: t } = u.useThemeColor(), T = o.useMemo(() => x ? E(t, 0.1) : "transparent", [r, x, t, m]), i = o.useMemo(() => r ? n[m].disabled : x ? t : n[m].primary, [r, x, t, m]), { handleMouseDown: C, handleMouseUp: I, handleMouseLeave: H } = v({
      isDisabled: r
    }), k = o.useCallback(
      (d) => {
        r || (d.currentTarget.style.boxShadow = R[m].tertiary);
      },
      [r]
    ), p = o.useCallback(
      (d) => {
        r || (d.currentTarget.style.boxShadow = "none");
      },
      [r]
    );
    return /* @__PURE__ */ h(
      s,
      {
        className: O("Venomous-UI-React--Menu.Item", c),
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          WebkitTapHighlightColor: "transparent",
          minHeight: "40px",
          margin: 0,
          padding: "8px",
          paddingRight: e != null && e.icon ? "0px" : "8px",
          borderRadius: "8px",
          cursor: r ? "not-allowed" : a != null && a.onClick ? "pointer" : "default",
          backgroundColor: T,
          // transition: "box-shadow 0.2s ease-in-out",
          ...w
        },
        onMouseDown: C,
        onMouseUp: I,
        onMouseLeave: H,
        onMouseOver: k,
        onMouseOut: p,
        ...a,
        children: /* @__PURE__ */ g(y.Flex, { row: !0, style: { minHeight: "40px", height: "100%", alignItems: "center", color: i }, children: [
          l && /* @__PURE__ */ h(j, { icon: l, width: 24, style: { color: "inherit" } }),
          /* @__PURE__ */ g(
            y.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: l && !(e != null && e.icon) ? "calc(100% - 32px)" : !l && (e != null && e.icon) ? "calc(100% - 48px)" : l && (e != null && e.icon) ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ h(
                  M.Text,
                  {
                    as: "strong",
                    text: S,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      lineHeight: "1rem",
                      color: "inherit"
                    }
                  }
                ),
                f && /* @__PURE__ */ h(
                  M.Text,
                  {
                    as: "small",
                    text: f,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: "inherit"
                    }
                  }
                )
              ]
            }
          ),
          !!(e != null && e.icon) && /* @__PURE__ */ h(
            U.Icon,
            {
              variant: "transparent",
              isDisabled: r,
              style: {
                height: "auto",
                width: "auto",
                color: "inherit",
                ...e.style
              },
              iconStyle: {
                color: i,
                ...e.iconStyle
              },
              ...e
            }
          )
        ] })
      }
    );
  }
);
L.displayName = "Menu.Item";
export {
  L as default
};
