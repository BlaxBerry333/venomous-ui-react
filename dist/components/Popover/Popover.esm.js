import { jsxs as N, jsx as d } from "react/jsx-runtime";
import h from "clsx";
import { AnimatePresence as O, motion as W } from "framer-motion";
import c from "react";
import "../Button/ButtonsIcon.esm.js";
import "../Button/Button.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import C from "../Card/Card.esm.js";
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
import M from "../../hooks/useHandler/index.esm.js";
const U = c.memo(
  ({
    children: b,
    style: g,
    contentStyle: k,
    triggerStyle: x,
    direction: w = "bottom",
    alignment: i = "center",
    renderTrigger: P,
    trigger: m = "click",
    onClickOutside: v
  }) => {
    const e = M(), R = c.useRef(null), u = c.useRef(null), l = c.useRef(null), [y, E] = c.useState({ top: 0, left: 0 });
    c.useEffect(() => {
      if (m !== "click") return;
      const a = (t) => {
        var p;
        l.current && !l.current.contains(t.target) && !((p = u.current) != null && p.contains(t.target)) && (e.close(), v && v());
      };
      return e.isOpen && document.addEventListener("mousedown", a), () => {
        document.removeEventListener("mousedown", a);
      };
    }, [e, m, v]), c.useEffect(() => {
      if (e.isOpen && R.current && u.current && l.current) {
        const a = R.current.getBoundingClientRect(), t = u.current.getBoundingClientRect(), p = l.current.offsetWidth, f = l.current.offsetHeight, s = t.top - a.top, n = t.left - a.left;
        let o, r;
        switch (w) {
          case "top":
            o = s - f, i === "start" ? r = n : i === "end" ? r = n + t.width - p : r = n + t.width / 2 - p / 2;
            break;
          case "bottom":
            o = s + t.height, i === "start" ? r = n : i === "end" ? r = n + t.width - p : r = n + t.width / 2 - p / 2;
            break;
          case "left":
            r = n - p, i === "start" ? o = s : i === "end" ? o = s + t.height - f : o = s + t.height / 2 - f / 2;
            break;
          case "right":
            r = n + t.width, i === "start" ? o = s : i === "end" ? o = s + t.height - f : o = s + t.height / 2 - f / 2;
            break;
          default:
            o = s + t.height, r = n + t.width / 2 - p / 2;
        }
        E({ top: o, left: r });
      }
    }, [e.isOpen, w, i]);
    const I = () => {
      m === "hover" && e.open();
    }, L = () => {
      m === "hover" && e.close();
    };
    return /* @__PURE__ */ N(
      "div",
      {
        ref: R,
        className: h("Venomous-UI-React--Popover.TriggerWrapper"),
        style: { display: "inline-block", position: "relative", ...g },
        ...m === "hover" ? {
          onMouseEnter: I,
          onMouseLeave: L
        } : {},
        children: [
          /* @__PURE__ */ d(
            "div",
            {
              ref: u,
              className: h("Venomous-UI-React--Popover.Trigger"),
              style: {
                display: "inline-block",
                width: "100%",
                cursor: m === "click" ? "pointer" : "auto",
                ...x
              },
              ...m === "click" ? { onClick: e.toggle } : {},
              children: P({
                isOpen: e.isOpen,
                close: e.close,
                toggle: e.toggle
              })
            }
          ),
          /* @__PURE__ */ d(O, { children: e.isOpen && /* @__PURE__ */ d(
            W.div,
            {
              ref: l,
              initial: { opacity: 0, y: 0 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 0 },
              transition: { duration: 0.2 },
              className: h("Venomous-UI-React--Popover"),
              style: {
                boxSizing: "border-box",
                position: "absolute",
                top: y.top,
                left: y.left,
                zIndex: 1e3
              },
              children: /* @__PURE__ */ d(
                C,
                {
                  className: h("Venomous-UI-React--Popover.Content"),
                  style: { width: "100%", padding: "8px", ...k },
                  children: b
                }
              )
            }
          ) })
        ]
      }
    );
  }
);
U.displayName = "Popover";
export {
  U as default
};
