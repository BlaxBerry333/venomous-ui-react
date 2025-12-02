import { jsx as t } from "react/jsx-runtime";
import i from "react";
import x from "clsx";
import D from "../Backdrop/Backdrop.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as O } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import g from "../Box/Box.component.esm.js";
import A from "../Portal/Portal.component.esm.js";
import { Transition as B } from "../Transition/index.esm.js";
import P from "../../hooks/useCustomComponentProps/index.esm.js";
import { useDialogStyles as _, useDialogActions as y } from "./Dialog.hooks.esm.js";
const E = i.memo(
  i.forwardRef(
    ({
      className: a,
      style: s,
      children: p,
      open: e,
      onClickBackdrop: l,
      autoCloseOnClickBackdrop: n,
      as: c,
      maxWidth: d,
      ...f
    }, C) => {
      const o = P({
        displayName: m.Dialog
      }), r = e ?? o.open ?? !1, u = n ?? o.autoCloseOnClickBackdrop ?? !0, k = c ?? o.as ?? "div", N = d ?? o.maxWidth ?? "XS", { componentStyle: S } = _(), { handleBackdropClick: h } = y({ autoCloseOnClickBackdrop: u, onClickBackdrop: l });
      return /* @__PURE__ */ t(A, { children: /* @__PURE__ */ t(D, { open: r, onClick: h, children: /* @__PURE__ */ t(B.Scale, { visible: r, children: /* @__PURE__ */ t(
        g,
        {
          as: k,
          maxWidth: N,
          ref: C,
          className: x(O.Dialog, a),
          style: { ...S, ...s },
          ...f,
          children: p
        }
      ) }) }) });
    }
  )
);
E.displayName = m.Dialog;
export {
  E as default
};
