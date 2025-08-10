import { jsx as d } from "react/jsx-runtime";
import l from "clsx";
import n from "react";
import "../Button/ButtonsIcon.esm.js";
import "../Button/Button.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import "../Card/Card.esm.js";
import "../Chip/Chip.esm.js";
import "../Container/Container.esm.js";
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
import { BreakPointName as s } from "../../utils/design/ThemeBreakpoint.esm.js";
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
import "./SpaceFlex.esm.js";
import "../Tab/Tab.esm.js";
import "../Table/Table.esm.js";
import { Theme as x } from "../Theme/index.esm.js";
import "../Transition/TransitionsCollapse.esm.js";
import "../Typography/TypographyCode.esm.js";
import "../Typography/TypographyParagraph.esm.js";
import "../Typography/TypographyText.esm.js";
import "../Typography/TypographyTitle.esm.js";
const S = n.memo(({ children: t, className: m, style: p, columns: r = 1, spacing: o = 16, ...a }) => {
  const { screenSize: u } = x.useThemeBreakpoint(), e = u ?? s.xs, c = n.useMemo(
    () => b(r, e),
    [r, e]
  ), f = n.useMemo(
    () => g(o, e),
    [o, e]
  );
  return /* @__PURE__ */ d(
    "div",
    {
      className: l("Venomous-UI-React--Space.Grid", m),
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${c}, 1fr)`,
        gap: `${f}px`,
        ...p
      },
      ...a,
      children: t
    }
  );
});
S.displayName = "Space.Grid";
const i = Object.keys(s);
function b(t = 1, m) {
  if (typeof t == "number")
    return t;
  const p = i.indexOf(m);
  for (let r = p; r < i.length; r++) {
    const o = t[i[r]];
    if (o !== void 0) return o;
  }
  return 1;
}
function g(t = 16, m) {
  if (typeof t == "number")
    return t;
  const p = i.indexOf(m);
  for (let r = p; r < i.length; r++) {
    const o = t[i[r]];
    if (o !== void 0) return o;
  }
  return 16;
}
export {
  S as default
};
