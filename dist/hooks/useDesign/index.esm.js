import r from "react";
import "../../components/Button/ButtonsIcon.esm.js";
import "../../components/Button/Button.esm.js";
import "../../components/Card/CardsBook.esm.js";
import "../../components/Card/CardsProduct.esm.js";
import "../../components/Card/CardsTitleBlock.esm.js";
import "../../components/Card/Card.esm.js";
import "../../components/Chip/Chip.esm.js";
import "../../components/Container/Container.esm.js";
import "../../components/Drawer/Drawer.esm.js";
import "../../components/Form/FormFieldCheckbox.esm.js";
import "../../components/Form/FormFieldNumber.esm.js";
import "../../components/Form/FormFieldPassword.esm.js";
import "../../components/Form/FormFieldRadio.esm.js";
import "../../components/Form/FormFieldSelect.esm.js";
import "../../components/Form/FormFieldSwitch.esm.js";
import "../../components/Form/FormFieldText.esm.js";
import "../../components/Form/FormFieldTextarea.esm.js";
import "../../components/Form/Form.esm.js";
import "../../components/Icon/Icon.esm.js";
import "../../components/Layout/LayoutCollapseSide.esm.js";
import "../../components/Layout/LayoutContent.esm.js";
import "../../components/Layout/LayoutFooter.esm.js";
import "../../components/Layout/LayoutHeader.esm.js";
import "../../components/Layout/LayoutProvider.esm.js";
import "../../components/Layout/LayoutSide.esm.js";
import "../../components/MediaFile/MediaFileTypeImage.esm.js";
import "../../components/MediaFile/MediaFileUploader.esm.js";
import { BorderColors as t, BackgroundColors as m, TextColors as i } from "../../utils/design/colors.esm.js";
import { Shadows as p } from "../../utils/design/Shadow.esm.js";
import { TypographySize as e } from "../../utils/design/TypographySize.esm.js";
import "../../components/Menu/MenuCollapseItem.esm.js";
import "../../components/Menu/MenuItem.esm.js";
import "../../components/Menu/MenuList.esm.js";
import "../../components/Modal/ModalsConfirm.esm.js";
import "../../components/Modal/Modal.esm.js";
import "../../components/NoSSR/NoSSR.esm.js";
import "../../components/Notification/Notification.esm.js";
import "sonner";
import "../../components/Popover/Popover.esm.js";
import "../../components/Portal/PortalRender.esm.js";
import "../../components/Progress/ProgressLoadingBar.esm.js";
import "../../components/Progress/ProgressPageLoading.esm.js";
import "../../components/Progress/ProgressScrollbar.esm.js";
import "../../components/Space/SpaceFlex.esm.js";
import "../../components/Space/SpaceGrid.esm.js";
import "../../components/Tab/Tab.esm.js";
import "../../components/Table/Table.esm.js";
import { Theme as s } from "../../components/Theme/index.esm.js";
import "../../components/Transition/TransitionCollapseSide.esm.js";
import "../../components/Transition/TransitionsCollapse.esm.js";
import "../../components/Typography/TypographyCode.esm.js";
import "../../components/Typography/TypographyParagraph.esm.js";
import "../../components/Typography/TypographyText.esm.js";
import "../../components/Typography/TypographyTitle.esm.js";
function uo() {
  const { themeMode: o } = s.useThemeMode();
  return r.useMemo(
    () => ({
      TextColors: i[o],
      BackgroundColors: m[o],
      BorderColors: t[o],
      Shadows: p[o],
      TypographySize: e
    }),
    [o]
  );
}
export {
  uo as default
};
