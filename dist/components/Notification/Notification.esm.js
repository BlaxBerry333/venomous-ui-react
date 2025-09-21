import { jsx as o } from "react/jsx-runtime";
import e from "clsx";
import n from "react";
import { Toaster as s } from "sonner";
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
import "../Form/FormFieldCheckbox.esm.js";
import "../Form/FormFieldNumber.esm.js";
import "../Form/FormFieldPassword.esm.js";
import "../Form/FormFieldRadio.esm.js";
import "../Form/FormFieldSelect.esm.js";
import "../Form/FormFieldSwitch.esm.js";
import "../Form/FormFieldText.esm.js";
import "../Form/FormFieldTextarea.esm.js";
import "../Form/Form.esm.js";
import i from "../Icon/Icon.esm.js";
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
import "../Popover/Popover.esm.js";
import "../Portal/PortalRender.esm.js";
import "../Progress/ProgressLoadingBar.esm.js";
import "../Progress/ProgressPageLoading.esm.js";
import "../Progress/ProgressScrollbar.esm.js";
import "../Space/SpaceFlex.esm.js";
import "../Space/SpaceGrid.esm.js";
import "../Tab/Tab.esm.js";
import "../Table/Table.esm.js";
import { Theme as c } from "../Theme/index.esm.js";
import "../Transition/TransitionCollapseSide.esm.js";
import "../Transition/TransitionsCollapse.esm.js";
import "../Typography/TypographyCode.esm.js";
import "../Typography/TypographyParagraph.esm.js";
import "../Typography/TypographyText.esm.js";
import "../Typography/TypographyTitle.esm.js";
const a = n.memo(({ position: t = "top-center", offset: r = 0, collapsable: m = !1 }) => {
  const { isDarkThemeMode: p } = c.useThemeMode();
  return /* @__PURE__ */ o(
    s,
    {
      closeButton: !0,
      richColors: !0,
      invert: p,
      visibleToasts: 4,
      gap: 8,
      position: t,
      offset: r,
      mobileOffset: r / 2,
      expand: !m,
      className: e("Venomous-UI-React--Notification"),
      icons: {
        success: /* @__PURE__ */ o(i, { icon: "solar:shield-check-line-duotone", semanticColor: "success" }),
        error: /* @__PURE__ */ o(i, { icon: "solar:shield-cross-line-duotone", semanticColor: "error" }),
        warning: /* @__PURE__ */ o(i, { icon: "solar:shield-warning-line-duotone", semanticColor: "warning" }),
        info: /* @__PURE__ */ o(i, { icon: "solar:info-circle-line-duotone", semanticColor: "info" })
      }
    }
  );
});
a.displayName = "Notification";
export {
  a as default
};
