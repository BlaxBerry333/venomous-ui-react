import { jsx as c, jsxs as V } from "react/jsx-runtime";
import k from "clsx";
import l from "react";
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
import "./FormFieldRadio.esm.js";
import "./FormFieldSelect.esm.js";
import "./FormFieldSwitch.esm.js";
import "./FormFieldText.esm.js";
import "./FormFieldTextarea.esm.js";
import "./Form.esm.js";
import v from "../Icon/Icon.esm.js";
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
import "../Menu/MenuCollapseItem.esm.js";
import "../Menu/MenuItem.esm.js";
import "../Menu/MenuList.esm.js";
import "../Modal/ModalsConfirm.esm.js";
import "../Modal/Modal.esm.js";
import "../NoSSR/NoSSR.esm.js";
import "../Notification/Notification.esm.js";
import "sonner";
import "../Popover/Popover.esm.js";
import "../Portal/PortalRender.esm.js";
import "../Progress/ProgressLoadingBar.esm.js";
import "../Progress/ProgressPageLoading.esm.js";
import "../Progress/ProgressScrollbar.esm.js";
import "../Space/SpaceFlex.esm.js";
import "../Space/SpaceGrid.esm.js";
import "../Tab/Tab.esm.js";
import "../Table/Table.esm.js";
import "../Theme/ThemeInjectToHTML.esm.js";
import "../Theme/ThemeProvider.esm.js";
import "../Theme/useThemeBreakpoint.esm.js";
import "../Theme/ThemeContext.esm.js";
import "../Transition/TransitionCollapseSide.esm.js";
import "../Transition/TransitionsCollapse.esm.js";
import "../Typography/TypographyCode.esm.js";
import "../Typography/TypographyParagraph.esm.js";
import "../Typography/TypographyText.esm.js";
import "../Typography/TypographyTitle.esm.js";
import S from "../../hooks/useElementFocus/index.esm.js";
import { useFormFieldStyle as B } from "./_useFormFieldStyle.esm.js";
import D from "./FormField.esm.js";
const I = l.memo(
  ({
    className: n,
    style: a,
    fullWidth: e,
    autoComplete: d = "off",
    required: s = !1,
    isError: p = !1,
    disabled: i = !1,
    name: g,
    value: F,
    label: b,
    helpText: w,
    ...o
  }) => {
    const { isFocused: u, handleFocus: y, handleBlur: h } = S(), { outlineColor: P, commonStyles: t, textColor: x } = B({
      fullWidth: e,
      isDisabled: i,
      isError: p,
      isFocused: u
    }), { isPasswordVisible: f, togglePasswordVisibility: C } = R(!1);
    return /* @__PURE__ */ c(
      D,
      {
        label: b,
        required: s,
        isDisabled: i,
        isFocused: u,
        isError: p,
        fullWidth: e,
        helpText: w,
        children: /* @__PURE__ */ V(
          "div",
          {
            style: {
              ...t,
              position: "relative",
              overflow: "hidden",
              padding: 0
            },
            children: [
              /* @__PURE__ */ c(
                "input",
                {
                  type: f ? "text" : "password",
                  name: g,
                  value: F,
                  autoComplete: d,
                  spellCheck: !1,
                  disabled: i,
                  onFocus: (r) => {
                    var m;
                    i || (y(r), (m = o.onFocus) == null || m.call(o, r));
                  },
                  onBlur: (r) => {
                    var m;
                    i || (h(r), (m = o.onBlur) == null || m.call(o, r));
                  },
                  className: k("Venomous-UI-React--FormField.Password", n),
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
                    minHeight: t.minHeight,
                    color: x,
                    backgroundColor: t.backgroundColor,
                    padding: t.padding,
                    paddingRight: 0,
                    ...a
                  },
                  ...o
                }
              ),
              /* @__PURE__ */ c(
                v,
                {
                  icon: f ? "solar:eye-linear" : "solar:eye-closed-broken",
                  width: 20,
                  onClick: C,
                  style: {
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: P,
                    margin: `0 ${t.padding}`
                  }
                }
              )
            ]
          }
        )
      }
    );
  }
);
I.displayName = "FormField.Password";
function R(n = !1) {
  const [a, e] = l.useState(n), d = l.useCallback((s) => {
    l.startTransition(() => {
      s.preventDefault(), s.stopPropagation(), e((p) => !p);
    });
  }, []);
  return {
    isPasswordVisible: a,
    togglePasswordVisibility: d
  };
}
export {
  I as default
};
