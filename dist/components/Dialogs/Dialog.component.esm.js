import { jsx as o } from "react/jsx-runtime";
import i from "react";
import { clsx as N } from "../../node_modules/clsx/dist/clsx.esm.js";
import S from "../Backdrop/Backdrop.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as A } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as D } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import g from "../Box/Box.component.esm.js";
import u from "../Portal/Portal.component.esm.js";
import { Transition as C } from "../Transition/index.esm.js";
import { useDialogStyles as E, useDialogActions as M } from "./Dialog.hooks.esm.js";
const h = i.memo(
  i.forwardRef(
    ({
      className: m,
      style: t,
      children: a,
      open: r = !1,
      onClickBackdrop: l,
      autoCloseOnClickBackdrop: e = !0,
      as: p = "div",
      maxWidth: s = "XS",
      ...c
    }, f) => {
      const { componentStyle: n } = E(), { handleBackdropClick: d } = M({ autoCloseOnClickBackdrop: e, onClickBackdrop: l });
      return /* @__PURE__ */ o(u, { children: /* @__PURE__ */ o(S, { open: r, onClick: d, children: /* @__PURE__ */ o(C.Scale, { visible: r, children: /* @__PURE__ */ o(
        g,
        {
          as: p,
          maxWidth: s,
          ref: f,
          className: N(D.Dialog, m),
          style: { ...n, ...t },
          ...c,
          children: a
        }
      ) }) }) });
    }
  )
);
h.displayName = A.Dialog;
export {
  h as default
};
