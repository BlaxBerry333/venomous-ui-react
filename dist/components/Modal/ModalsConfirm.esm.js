import { jsxs as m, jsx as t } from "react/jsx-runtime";
import r from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { BreakPointName as g } from "../../utils/design/ThemeBreakpoint.esm.js";
import v from "clsx";
import "../Button/ButtonsIcon.esm.js";
import l from "../Button/Button.esm.js";
import { Space as M } from "../Space/index.esm.js";
import { Typography as s } from "../Typography/index.esm.js";
import b from "./Modal.esm.js";
const j = r.memo(
  ({
    className: n,
    style: p,
    isOpen: c,
    onClose: a,
    maskClosable: d = !1,
    maxBreakpoint: f = g.xs,
    title: x,
    description: u,
    isConformLoading: i = !1,
    cancelText: h = "Cancel",
    confirmText: y = "Confirm",
    onCancel: o,
    onConfirm: e
  }) => {
    const k = r.useCallback(async () => {
      await o(), a();
    }, [o, a]), C = r.useCallback(async () => {
      await e(), a();
    }, [e, a]);
    return /* @__PURE__ */ m(
      b,
      {
        isOpen: c,
        onClose: a,
        className: v("Venomous-UI-React--Modals.Confirm", n),
        style: p,
        maskClosable: d,
        maxBreakpoint: f,
        children: [
          /* @__PURE__ */ t(s.Title, { as: "h5", text: x }),
          /* @__PURE__ */ t(s.Paragraph, { style: { padding: "8px 0 24px" }, children: u }),
          /* @__PURE__ */ m(M.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
            /* @__PURE__ */ t(
              l,
              {
                variant: "outlined",
                text: h,
                onClick: () => void k(),
                isDisabled: i
              }
            ),
            /* @__PURE__ */ t(
              l,
              {
                variant: "contained",
                text: y,
                onClick: () => void C(),
                isLoading: i
              }
            )
          ] })
        ]
      }
    );
  }
);
j.displayName = "Modals.Confirm";
export {
  j as default
};
