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
import "../Divider/Divider.esm.js";
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
import "../../utils/design/TypographySize.esm.js";
import { Menu as k } from "../Menu/index.esm.js";
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
import { Space as z } from "../Space/index.esm.js";
import "../Tab/Tab.esm.js";
import "../Table/Table.esm.js";
import "../Theme/ThemeInjectToHTML.esm.js";
import "../Theme/ThemeProvider.esm.js";
import "../Theme/useThemeBreakpoint.esm.js";
import "../Theme/ThemeContext.esm.js";
import "../Transition/TransitionCollapseSide.esm.js";
import "../Transition/TransitionsCollapse.esm.js";
import { Typography as D } from "../Typography/index.esm.js";
import L from "../../hooks/useElementFocus/index.esm.js";
import { useFormFieldStyle as P } from "./_useFormFieldStyle.esm.js";
import j from "./FormField.esm.js";
const A = e.memo(
  ({
    isOriginalSelect: p = !1,
    fullWidth: i,
    required: g = !1,
    isError: o = !1,
    disabled: m = !1,
    label: n,
    helpText: r,
    ...f
  }) => {
    const { isFocused: c, setIsFocused: a, handleFocus: d, handleBlur: u } = L(), { commonStyles: l } = P({
      fullWidth: i,
      isDisabled: m,
      isError: o,
      isFocused: c
    });
    return /* @__PURE__ */ E(
      j,
      {
        label: n,
        required: g,
        isDisabled: m,
        isError: o,
        isFocused: c,
        fullWidth: i,
        helpText: r,
        children: [
          p && /* @__PURE__ */ s(
            N,
            {
              commonStyles: l,
              handleFocus: d,
              handleBlur: u,
              disabled: m,
              ...f
            }
          ),
          !p && /* @__PURE__ */ s(B, { commonStyles: l, setIsFocused: a, disabled: m, ...f })
        ]
      }
    );
  }
);
A.displayName = "FormField.Select";
const N = e.memo(
  ({
    commonStyles: p,
    handleFocus: i,
    handleBlur: g,
    name: o,
    autoComplete: m = "off",
    options: n,
    onChange: r,
    value: f,
    disabled: c,
    className: a,
    style: d,
    ...u
  }) => /* @__PURE__ */ s(
    "select",
    {
      name: o,
      autoComplete: m,
      disabled: c,
      onFocus: i,
      onBlur: g,
      onChange: r,
      value: f,
      className: R("Venomous-UI-React--FormField.Select", a),
      style: {
        boxSizing: "border-box",
        ...p,
        ...d
      },
      ...u,
      children: n.map((l) => /* @__PURE__ */ s("option", { value: l.value, disabled: l.disabled, children: l.label }, l.value))
    }
  )
), B = e.memo(({ commonStyles: p, setIsFocused: i, disabled: g, name: o, value: m, options: n, onChange: r, className: f, style: c }) => {
  const [a, d] = e.useState(m || null), [u, l] = e.useState(!1), F = e.useRef(null), [S, w] = e.useState(0), b = S || (c == null ? void 0 : c.width), v = e.useMemo(
    () => n.find((t) => t.value === a),
    [n, a]
  );
  e.useEffect(() => {
    d(m || null);
  }, [m]), e.useEffect(() => {
    if (F.current) {
      const t = () => {
        var x;
        const h = (x = F.current) == null ? void 0 : x.getBoundingClientRect();
        h && w(h.width);
      };
      return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }
  }, []), e.useEffect(() => {
    if (u && F.current) {
      const t = F.current.getBoundingClientRect();
      t && t.width !== S && w(t.width);
    }
  }, [u, S]);
  const O = e.useCallback(
    (t) => {
      d(t), l(!1), i(!1);
      const h = {
        target: { name: o, value: t },
        currentTarget: { name: o, value: t }
      };
      r == null || r(h);
    },
    [o, r, i]
  ), T = e.useCallback(
    (t) => {
      t.stopPropagation(), d(null), i(!1);
      const h = {
        target: { name: o, value: "" },
        currentTarget: { name: o, value: "" }
      };
      r == null || r(h);
    },
    [o, r, i]
  );
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
        width: b
      },
      renderTrigger: () => /* @__PURE__ */ E(
        z.Flex,
        {
          ref: F,
          onClick: () => {
            l(!0), i(!0);
          },
          style: {
            ...p,
            height: p.minHeight,
            width: "100%",
            maxWidth: b,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ s(D.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: (v == null ? void 0 : v.label) || "" }),
            a && !g && /* @__PURE__ */ s(
              y,
              {
                icon: "solar:close-circle-line-duotone",
                width: 16,
                onClick: T,
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
                  transform: u ? "rotate(180deg)" : "rotate(0deg)"
                }
              }
            )
          ]
        }
      ),
      children: /* @__PURE__ */ s(k.List, { as: "ul", className: R("Venomous-UI-React--FormField.Select", f), style: { width: "100%" }, children: n.map((t) => /* @__PURE__ */ s(
        k.Item,
        {
          id: t.id,
          text: t.label,
          isDisabled: t.disabled,
          isActive: t.value === a,
          onClick: () => {
            t.disabled || O(t.value);
          }
        },
        t.id
      )) })
    }
  );
});
N.displayName = "FormField.Select.Original";
B.displayName = "FormField.Select.Custom";
export {
  A as default
};
