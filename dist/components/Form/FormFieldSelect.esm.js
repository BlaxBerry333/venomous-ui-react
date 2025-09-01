import { jsxs as k, jsx as s } from "react/jsx-runtime";
import E from "clsx";
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
import b from "../Icon/Icon.esm.js";
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
import { TypographySize as B } from "../../utils/design/TypographySize.esm.js";
import { Menu as x } from "../Menu/index.esm.js";
import "../Modal/ModalsConfirm.esm.js";
import "../Modal/Modal.esm.js";
import "../NoSSR/NoSSR.esm.js";
import "../Notification/Notification.esm.js";
import "sonner";
import W from "../Popover/Popover.esm.js";
import "../Portal/PortalRender.esm.js";
import "../Progress/ProgressLoadingBar.esm.js";
import "../Progress/ProgressPageLoading.esm.js";
import "../Progress/ProgressScrollbar.esm.js";
import { Space as D } from "../Space/index.esm.js";
import "../Tab/Tab.esm.js";
import "../Table/Table.esm.js";
import "../Theme/ThemeInjectToHTML.esm.js";
import "../Theme/ThemeProvider.esm.js";
import "../Theme/useThemeBreakpoint.esm.js";
import "../Theme/ThemeContext.esm.js";
import "../Transition/TransitionCollapseSide.esm.js";
import "../Transition/TransitionsCollapse.esm.js";
import { Typography as L } from "../Typography/index.esm.js";
import P from "../../hooks/useElementFocus/index.esm.js";
import { useFormFieldStyle as j } from "./_useFormFieldStyle.esm.js";
import A from "./FormField.esm.js";
const I = e.memo(
  ({
    isOriginalSelect: d = !1,
    fullWidth: i,
    required: g = !1,
    isError: o = !1,
    disabled: m = !1,
    label: n,
    helpText: r,
    ...h
  }) => {
    const { isFocused: a, setIsFocused: c, handleFocus: u, handleBlur: f } = P(), { commonStyles: l } = j({
      fullWidth: i,
      isDisabled: m,
      isError: o,
      isFocused: a
    });
    return /* @__PURE__ */ k(
      A,
      {
        label: n,
        required: g,
        isDisabled: m,
        isError: o,
        isFocused: a,
        fullWidth: i,
        helpText: r,
        children: [
          d && /* @__PURE__ */ s(
            R,
            {
              commonStyles: l,
              handleFocus: u,
              handleBlur: f,
              disabled: m,
              ...h
            }
          ),
          !d && /* @__PURE__ */ s(T, { commonStyles: l, setIsFocused: c, disabled: m, ...h })
        ]
      }
    );
  }
);
I.displayName = "FormField.Select";
const R = e.memo(
  ({
    commonStyles: d,
    handleFocus: i,
    handleBlur: g,
    name: o,
    autoComplete: m = "off",
    options: n,
    onChange: r,
    value: h,
    disabled: a,
    className: c,
    style: u,
    ...f
  }) => /* @__PURE__ */ s(
    "select",
    {
      name: o,
      autoComplete: m,
      disabled: a,
      onFocus: i,
      onBlur: g,
      onChange: r,
      value: h,
      className: E("Venomous-UI-React--FormField.Select", c),
      style: {
        boxSizing: "border-box",
        ...d,
        ...u
      },
      ...f,
      children: n.map((l) => /* @__PURE__ */ s("option", { value: l.value, disabled: l.disabled, children: l.label }, l.value))
    }
  )
), T = e.memo(({ commonStyles: d, setIsFocused: i, disabled: g, name: o, value: m, options: n, onChange: r, className: h, style: a }) => {
  const [c, u] = e.useState(m || null), [f, l] = e.useState(!1), S = e.useRef(null), [F, w] = e.useState(0);
  e.useEffect(() => {
    u(m || null);
  }, [m]), e.useEffect(() => {
    if (S.current) {
      const t = () => {
        var y;
        const p = (y = S.current) == null ? void 0 : y.getBoundingClientRect();
        p && w(p.width);
      };
      return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }
  }, []), e.useEffect(() => {
    if (f && S.current) {
      const t = S.current.getBoundingClientRect();
      t && t.width !== F && w(t.width);
    }
  }, [f, F]);
  const z = e.useCallback(
    (t) => {
      u(t), l(!1), i(!1);
      const p = {
        target: { name: o, value: t },
        currentTarget: { name: o, value: t }
      };
      r == null || r(p);
    },
    [o, r, i]
  ), N = e.useCallback(
    (t) => {
      t.stopPropagation(), u(null), i(!1);
      const p = {
        target: { name: o, value: "" },
        currentTarget: { name: o, value: "" }
      };
      r == null || r(p);
    },
    [o, r, i]
  ), O = e.useMemo(
    () => {
      var t;
      return ((t = n.find((p) => p.value === c)) == null ? void 0 : t.label) || "";
    },
    [n, c]
    // 添加 options 依赖
  ), v = F || (a == null ? void 0 : a.width);
  return /* @__PURE__ */ s(
    W,
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
      renderTrigger: () => /* @__PURE__ */ k(
        D.Flex,
        {
          ref: S,
          row: !0,
          onClick: () => {
            l(!0), i(!0);
          },
          style: {
            ...d,
            height: d.minHeight,
            width: "100%",
            maxWidth: v,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ s(L.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: O }),
            c && !g && /* @__PURE__ */ s(
              b,
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
              b,
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
      children: /* @__PURE__ */ s(x.List, { as: "ul", className: E("Venomous-UI-React--FormField.Select", h), style: { width: "100%" }, children: n.map((t) => /* @__PURE__ */ s(
        x.Item,
        {
          id: t.id,
          text: t.label,
          isDisabled: t.disabled,
          isActive: t.value === c,
          onClick: () => {
            t.disabled || z(t.value);
          },
          style: {
            cursor: t.disabled ? "not-allowed" : "pointer",
            fontSize: B.small
          }
        },
        t.id
      )) })
    }
  );
});
R.displayName = "FormField.Select.Original";
T.displayName = "FormField.Select.Custom";
export {
  I as default
};
