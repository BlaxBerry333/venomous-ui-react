import { jsx as l } from "react/jsx-runtime";
import B from "clsx";
import S from "react";
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
import "./FormFieldSelect.esm.js";
import "./FormFieldSwitch.esm.js";
import "./FormFieldText.esm.js";
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
import T from "../../hooks/useElementFocus/index.esm.js";
import { useFormFieldStyle as z } from "./_useFormFieldStyle.esm.js";
import D from "./FormField.esm.js";
const N = S.memo(
  ({
    className: a,
    style: n,
    fullWidth: i,
    required: c = !1,
    isError: p = !1,
    disabled: m = !1,
    rows: s = 3,
    name: F,
    value: u,
    label: f,
    helpText: x,
    ...o
  }) => {
    const { isFocused: e, handleFocus: d, handleBlur: y } = T(), { commonStyles: h } = z({
      fullWidth: i,
      isDisabled: m,
      isError: p,
      isFocused: e
    });
    return /* @__PURE__ */ l(
      D,
      {
        label: f,
        required: c,
        isDisabled: m,
        isError: p,
        isFocused: e,
        fullWidth: i,
        helpText: x,
        children: /* @__PURE__ */ l(
          "textarea",
          {
            name: F,
            value: u,
            disabled: m,
            onFocus: (t) => {
              var r;
              m || (d(t), (r = o.onFocus) == null || r.call(o, t));
            },
            onBlur: (t) => {
              var r;
              m || (y(t), (r = o.onBlur) == null || r.call(o, t));
            },
            spellCheck: !1,
            rows: s,
            className: B("Venomous-UI-React--FormField.Textarea", a),
            style: {
              boxSizing: "border-box",
              resize: "none",
              ...h,
              ...n
            },
            ...o
          }
        )
      }
    );
  }
);
N.displayName = "FormField.Textarea";
export {
  N as default
};
