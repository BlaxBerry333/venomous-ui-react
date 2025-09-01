import { jsx as n } from "react/jsx-runtime";
import N from "clsx";
import B from "react";
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
import "./FormFieldPassword.esm.js";
import "./FormFieldRadio.esm.js";
import "./FormFieldSelect.esm.js";
import "./FormFieldSwitch.esm.js";
import "./FormFieldText.esm.js";
import "./FormFieldTextarea.esm.js";
import "./Form.esm.js";
import "../Icon/Icon.esm.js";
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
import { useFormFieldStyle as h } from "./_useFormFieldStyle.esm.js";
import D from "./FormField.esm.js";
const R = B.memo(
  ({
    className: u,
    style: l,
    fullWidth: i,
    autoComplete: F = "off",
    required: c = !1,
    isError: p = !1,
    disabled: o = !1,
    name: f,
    value: s,
    label: a,
    helpText: b,
    ...m
  }) => {
    const { isFocused: e, handleFocus: d, handleBlur: x } = S(), { commonStyles: y } = h({
      fullWidth: i,
      isDisabled: o,
      isError: p,
      isFocused: e
    });
    return /* @__PURE__ */ n(
      D,
      {
        label: a,
        required: c,
        isDisabled: o,
        isError: p,
        isFocused: e,
        fullWidth: i,
        helpText: b,
        children: /* @__PURE__ */ n(
          "input",
          {
            type: "number",
            name: f,
            value: s,
            autoComplete: F,
            disabled: o,
            onFocus: (r) => {
              var t;
              o || (d(r), (t = m.onFocus) == null || t.call(m, r));
            },
            onBlur: (r) => {
              var t;
              o || (x(r), (t = m.onBlur) == null || t.call(m, r));
            },
            className: N("Venomous-UI-React--FormField.Number", u),
            style: {
              boxSizing: "border-box",
              ...y,
              ...l
            },
            ...m
          }
        )
      }
    );
  }
);
R.displayName = "FormField.Number";
export {
  R as default
};
