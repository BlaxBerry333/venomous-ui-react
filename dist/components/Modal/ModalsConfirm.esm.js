import { jsxs as l, jsx as t } from "react/jsx-runtime";
import r from "react";
import g from "clsx";
import { Space as v } from "../Space/index.esm.js";
import { Typography as m } from "../Typography/index.esm.js";
import M from "./Modal.esm.js";
import s from "../Button/Button.esm.js";
import { BreakPointName as b } from "../../utils/design/ThemeBreakpoint.esm.js";
const j = r.memo(
  ({
    className: n,
    style: c,
    isOpen: d,
    onClose: a,
    maskClosable: p = !1,
    maxBreakpoint: f = b.xs,
    title: x,
    description: u,
    isConformLoading: e = !1,
    cancelText: h = "Cancel",
    confirmText: y = "Confirm",
    onCancel: i,
    onConfirm: o
  }) => {
    const k = r.useCallback(async () => {
      await i(), a();
    }, [i, a]), C = r.useCallback(async () => {
      await o(), a();
    }, [o, a]);
    return /* @__PURE__ */ l(
      M,
      {
        isOpen: d,
        onClose: a,
        className: g("Venomous-UI-React--Modals.Confirm", n),
        style: c,
        maskClosable: p,
        maxBreakpoint: f,
        children: [
          /* @__PURE__ */ t(m.Title, { as: "h5", text: x }),
          /* @__PURE__ */ t(m.Paragraph, { style: { padding: "8px 0 24px" }, children: u }),
          /* @__PURE__ */ l(v.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
            /* @__PURE__ */ t(
              s,
              {
                variant: "outlined",
                text: h,
                onClick: () => void k(),
                isDisabled: e
              }
            ),
            /* @__PURE__ */ t(
              s,
              {
                variant: "contained",
                text: y,
                onClick: () => void C(),
                isLoading: e
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
