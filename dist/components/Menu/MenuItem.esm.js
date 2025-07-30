import { jsx as m, jsxs as h } from "react/jsx-runtime";
import p from "react";
import { Buttons as k } from "../Button/index.esm.js";
import { Space as x } from "../Space/index.esm.js";
import { Theme as i } from "../Theme/index.esm.js";
import { Typography as f } from "../Typography/index.esm.js";
import { MenuItemTagMap as O } from "./index.types.esm.js";
import E from "../../hooks/useElementHover/index.esm.js";
import L from "../Icon/Icon.esm.js";
import { ThemeShadow as y } from "../../utils/design/ThemeShadow.esm.js";
import { TextColors as t } from "../../utils/design/colors.esm.js";
const R = p.memo(
  ({
    as: c = O.li,
    style: M,
    icon: l,
    text: g,
    subText: u,
    isDisabled: e = !1,
    isActive: s = !1,
    actionButton: r = void 0,
    ...a
  }) => {
    const { themeMode: o } = i.useThemeMode(), { themeColor: n } = i.useThemeColor(), { isHovering: w, handleMouseDown: T, handleMouseUp: C, handleMouseLeave: S } = E({ isDisabled: e }), v = p.useCallback(
      (d) => {
        e || (d.currentTarget.style.boxShadow = y[o].tertiary);
      },
      [e]
    ), I = p.useCallback(
      (d) => {
        e || (d.currentTarget.style.boxShadow = w ? y[o].tertiary : "none");
      },
      [e]
    );
    return /* @__PURE__ */ m(
      c,
      {
        onMouseDown: T,
        onMouseUp: C,
        onMouseLeave: S,
        onMouseOver: v,
        onMouseOut: I,
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          margin: 0,
          padding: "8px",
          paddingLeft: l ? "8px" : "16px",
          paddingRight: r ? "8px" : "16px",
          borderRadius: "8px",
          cursor: e ? "not-allowed" : a != null && a.onClick ? "pointer" : "default",
          transition: "box-shadow 0.2s ease-in-out",
          ...M
        },
        ...a,
        children: /* @__PURE__ */ h(x.Flex, { row: !0, style: { alignItems: "center" }, children: [
          l && /* @__PURE__ */ m(
            L,
            {
              icon: l,
              width: 24,
              style: {
                color: e ? t[o].disabled : s ? n : t[o].primary
              }
            }
          ),
          /* @__PURE__ */ h(
            x.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: l && !r ? "calc(100% - 32px)" : !l && r ? "calc(100% - 48px)" : l && r ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ m(
                  f.Text,
                  {
                    text: g,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: e ? t[o].disabled : s ? n : t[o].primary
                    }
                  }
                ),
                u && /* @__PURE__ */ m(
                  f.Text,
                  {
                    as: "small",
                    text: u,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      color: e ? t[o].disabled : s ? n : t[o].quaternary
                    }
                  }
                )
              ]
            }
          ),
          !!(r != null && r.icon) && /* @__PURE__ */ m(
            k.Icon,
            {
              icon: r.icon,
              variant: "ghost",
              isDisabled: e,
              onClick: r.onClick
            }
          )
        ] })
      }
    );
  }
);
R.displayName = "Menu.Item";
export {
  R as default
};
