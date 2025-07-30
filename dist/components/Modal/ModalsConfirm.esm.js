import { jsxs as l, jsx as t } from "react/jsx-runtime";
import i from "react";
import { Space as g } from "../Space/index.esm.js";
import { Typography as n } from "../Typography/index.esm.js";
import v from "./Modal.esm.js";
import m from "../Button/Button.esm.js";
import { BreakPointName as C } from "../../utils/design/ThemeBreakpoint.esm.js";
const b = i.memo(
  ({
    style: s,
    isOpen: d,
    onClose: a,
    maskClosable: p = !1,
    maxBreakpoint: c = C.xs,
    title: f,
    description: x,
    isConformLoading: r = !1,
    cancelText: h = "Cancel",
    confirmText: u = "Confirm",
    onCancel: e,
    onConfirm: o
  }) => {
    const y = i.useCallback(async () => {
      await e(), a();
    }, [e, a]), k = i.useCallback(async () => {
      await o(), a();
    }, [o, a]);
    return /* @__PURE__ */ l(v, { isOpen: d, onClose: a, style: s, maskClosable: p, maxBreakpoint: c, children: [
      /* @__PURE__ */ t(n.Title, { as: "h5", text: f }),
      /* @__PURE__ */ t(n.Paragraph, { style: { padding: "8px 0 24px" }, children: x }),
      /* @__PURE__ */ l(g.Flex, { row: !0, gap: 8, style: { justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ t(
          m,
          {
            variant: "outlined",
            text: h,
            onClick: () => void y(),
            isDisabled: r
          }
        ),
        /* @__PURE__ */ t(
          m,
          {
            variant: "contained",
            text: u,
            onClick: () => void k(),
            isLoading: r
          }
        )
      ] })
    ] });
  }
);
b.displayName = "Modals.Confirm";
export {
  b as default
};
