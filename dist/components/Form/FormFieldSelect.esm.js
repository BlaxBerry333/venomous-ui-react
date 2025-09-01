import { jsxs as E, jsx as s } from "react/jsx-runtime";
import R from "clsx";
import e from "react";
import "../Button/ButtonsIcon.esm.js";
import "../Button/Button.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import "../Card/Card.esm.js";
import "../Chip/Chip.esm.js";
import "../Container/Container.esm.js";
import "../Drawer/Drawer.esm.js";
import "./FormFieldCheckbox.esm.js";
import "./FormFieldNumber.esm.js";
import "./FormFieldPassword.esm.js";
import "./FormFieldRadio.esm.js";
import "./FormFieldSwitch.esm.js";
import "./FormFieldText.esm.js";
import "./FormFieldTextarea.esm.js";
import "./Form.esm.js";
import y from "../Icon/Icon.esm.js";
import "../Layout/LayoutCollapseSide.esm.js";
import "../Layout/LayoutContent.esm.js";
import "../Layout/LayoutFooter.esm.js";
import "../Layout/LayoutHeader.esm.js";
import "../Layout/LayoutProvider.esm.js";
import "../Layout/LayoutSide.esm.js";
import "../MediaFile/MediaFileTypeImage.esm.js";
import "../MediaFile/MediaFileUploader.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import { TYPOGRAPHY_SIZES as z } from "../../utils/design/TypographySize.esm.js";
import { Menu as x } from "../Menu/index.esm.js";
import "../Modal/ModalsConfirm.esm.js";
import "../Modal/Modal.esm.js";
import "../NoSSR/NoSSR.esm.js";
import "../Notification/Notification.esm.js";
import "sonner";
import B from "../Popover/Popover.esm.js";
import "../Portal/PortalRender.esm.js";
import "../Progress/ProgressLoadingBar.esm.js";
import "../Progress/ProgressPageLoading.esm.js";
import "../Progress/ProgressScrollbar.esm.js";
import { Space as W } from "../Space/index.esm.js";
import "../Tab/Tab.esm.js";
import "../Table/Table.esm.js";
import "../Theme/ThemeInjectToHTML.esm.js";
import "../Theme/ThemeProvider.esm.js";
import "../Theme/useThemeBreakpoint.esm.js";
import "../Theme/ThemeContext.esm.js";
import "../Transition/TransitionCollapseSide.esm.js";
import "../Transition/TransitionsCollapse.esm.js";
import { Typography as A } from "../Typography/index.esm.js";
import D from "../../hooks/useElementFocus/index.esm.js";
import { useFormFieldStyle as I } from "./_useFormFieldStyle.esm.js";
import L from "./FormField.esm.js";
const j = e.memo(
  ({
    isOriginalSelect: n = !1,
    fullWidth: i,
    required: S = !1,
    isError: o = !1,
    disabled: m = !1,
    label: p,
    helpText: r,
    ...h
  }) => {
    const { isFocused: c, setIsFocused: a, handleFocus: u, handleBlur: f } = D(), { commonStyles: l } = I({
      fullWidth: i,
      isDisabled: m,
      isError: o,
      isFocused: c
    });
    return /* @__PURE__ */ E(
      L,
      {
        label: p,
        required: S,
        isDisabled: m,
        isError: o,
        isFocused: c,
        fullWidth: i,
        helpText: r,
        children: [
          n && /* @__PURE__ */ s(
            k,
            {
              commonStyles: l,
              handleFocus: u,
              handleBlur: f,
              disabled: m,
              ...h
            }
          ),
          !n && /* @__PURE__ */ s(O, { commonStyles: l, setIsFocused: a, disabled: m, ...h })
        ]
      }
    );
  }
);
j.displayName = "FormField.Select";
const k = e.memo(
  ({
    commonStyles: n,
    handleFocus: i,
    handleBlur: S,
    name: o,
    autoComplete: m = "off",
    options: p,
    onChange: r,
    value: h,
    disabled: c,
    className: a,
    style: u,
    ...f
  }) => /* @__PURE__ */ s(
    "select",
    {
      name: o,
      autoComplete: m,
      disabled: c,
      onFocus: i,
      onBlur: S,
      onChange: r,
      value: h,
      className: R("Venomous-UI-React--FormField.Select", a),
      style: {
        boxSizing: "border-box",
        ...n,
        ...u
      },
      ...f,
      children: p.map((l) => /* @__PURE__ */ s("option", { value: l.value, disabled: l.disabled, children: l.label }, l.value))
    }
  )
), O = e.memo(({ commonStyles: n, setIsFocused: i, disabled: S, name: o, value: m, options: p, onChange: r, className: h, style: c }) => {
  const [a, u] = e.useState(m || null), [f, l] = e.useState(!1), g = e.useRef(null), [F, w] = e.useState(0);
  e.useEffect(() => {
    u(m || null);
  }, [m]), e.useEffect(() => {
    if (g.current) {
      const t = () => {
        var b;
        const d = (b = g.current) == null ? void 0 : b.getBoundingClientRect();
        d && w(d.width);
      };
      return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }
  }, []), e.useEffect(() => {
    if (f && g.current) {
      const t = g.current.getBoundingClientRect();
      t && t.width !== F && w(t.width);
    }
  }, [f, F]);
  const T = e.useCallback(
    (t) => {
      u(t), l(!1), i(!1);
      const d = {
        target: { name: o, value: t },
        currentTarget: { name: o, value: t }
      };
      r == null || r(d);
    },
    [o, r, i]
  ), N = e.useCallback(
    (t) => {
      t.stopPropagation(), u(null), i(!1);
      const d = {
        target: { name: o, value: "" },
        currentTarget: { name: o, value: "" }
      };
      r == null || r(d);
    },
    [o, r, i]
  ), P = e.useMemo(
    () => {
      var t;
      return ((t = p.find((d) => d.value === a)) == null ? void 0 : t.label) || "";
    },
    [p, a]
    // 添加 options 依赖
  ), v = F || (c == null ? void 0 : c.width);
  return /* @__PURE__ */ s(
    B,
    {
      direction: "bottom",
      alignment: "start",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => {
        l(!1), i(!1);
      },
      contentStyle: {
        width: v
      },
      renderTrigger: () => /* @__PURE__ */ E(
        W.Flex,
        {
          ref: g,
          row: !0,
          onClick: () => {
            l(!0), i(!0);
          },
          style: {
            ...n,
            height: n.minHeight,
            width: "100%",
            maxWidth: v,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ s(A.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: P }),
            a && !S && /* @__PURE__ */ s(
              y,
              {
                icon: "solar:close-circle-line-duotone",
                width: 16,
                onClick: N,
                style: {
                  cursor: "pointer",
                  transition: "color 0.2s ease"
                }
              }
            ),
            /* @__PURE__ */ s(
              y,
              {
                icon: "solar:alt-arrow-down-line-duotone",
                width: 16,
                style: {
                  transition: "transform 0.2s ease",
                  transform: f ? "rotate(180deg)" : "rotate(0deg)"
                }
              }
            )
          ]
        }
      ),
      children: /* @__PURE__ */ s(x.List, { as: "ul", className: R("Venomous-UI-React--FormField.Select", h), style: { width: "100%" }, children: p.map((t) => /* @__PURE__ */ s(
        x.Item,
        {
          id: t.id,
          text: t.label,
          isDisabled: t.disabled,
          isActive: t.value === a,
          onClick: () => {
            t.disabled || T(t.value);
          },
          style: {
            cursor: t.disabled ? "not-allowed" : "pointer",
            fontSize: z.small
          }
        },
        t.id
      )) })
    }
  );
});
k.displayName = "FormField.Select.Original";
O.displayName = "FormField.Select.Custom";
export {
  j as default
};
