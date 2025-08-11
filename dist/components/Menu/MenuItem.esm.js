import { jsx as m, jsxs as a } from "react/jsx-runtime";
import S from "clsx";
import f from "react";
import { TextColors as M } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { getOpacityHex as R } from "../../utils/tools/get-colors.esm.js";
import { Buttons as k } from "../Button/index.esm.js";
import b from "../Icon/Icon.esm.js";
import { Space as I } from "../Space/index.esm.js";
import { Theme as T } from "../Theme/index.esm.js";
import { Typography as t } from "../Typography/index.esm.js";
import { MenuItemTagMap as j } from "./index.types.esm.js";
const p = f.memo(
  ({
    as: w = j.li,
    className: C,
    style: c,
    icon: l,
    text: s,
    subText: g,
    isDisabled: r = !1,
    isActive: h = !1,
    actionButtonProps: e = void 0,
    ...i
  }) => {
    const { themeMode: x } = T.useThemeMode(), { themeColor: d } = T.useThemeColor(), H = f.useMemo(() => h ? R(d, 0.1) : "transparent", [r, h, d, x]), y = f.useMemo(() => r ? M[x].disabled : h ? d : M[x].primary, [r, h, d, x]);
    return /* @__PURE__ */ m(
      w,
      {
        className: S("Venomous-UI-React--Menu.Item", C),
        style: {
          boxSizing: "border-box",
          listStyle: "none",
          WebkitTapHighlightColor: "transparent",
          minHeight: "40px",
          margin: 0,
          padding: "8px",
          paddingRight: e != null && e.icon ? "0px" : "8px",
          borderRadius: "8px",
          cursor: r ? "not-allowed" : i != null && i.onClick ? "pointer" : "default",
          backgroundColor: H,
          // transition: "box-shadow 0.2s ease-in-out",
          ...c
        },
        ...i,
        children: /* @__PURE__ */ a(I.Flex, { row: !0, style: { minHeight: "40px", height: "100%", alignItems: "center", color: y }, children: [
          l && /* @__PURE__ */ m(b, { icon: l, width: 24, style: { color: "inherit" } }),
          /* @__PURE__ */ a(
            I.Flex,
            {
              column: !0,
              gap: 0,
              style: {
                flex: 1,
                flexGrow: 1,
                maxWidth: l && !(e != null && e.icon) ? "calc(100% - 32px)" : !l && (e != null && e.icon) ? "calc(100% - 48px)" : l && (e != null && e.icon) ? "calc(100% - 80px)" : "100%"
              },
              children: [
                /* @__PURE__ */ m(
                  t.Text,
                  {
                    as: "strong",
                    text: s,
                    isEllipsis: !0,
                    style: {
                      width: "100%",
                      lineHeight: "1rem",
                      color: "inherit"
                    }
                  }
                ),
                g && /* @__PURE__ */ m(
                  t.Text,
                  {
                    as: "small",
                    text: g,
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
          !!(e != null && e.icon) && /* @__PURE__ */ m(
            k.Icon,
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
                color: y,
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
p.displayName = "Menu.Item";
export {
  p as default
};
