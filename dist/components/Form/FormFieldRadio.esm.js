import { jsx as i, jsxs as x } from "react/jsx-runtime";
import k from "clsx";
import s from "react";
import S from "../Icon/Icon.esm.js";
import { Space as D } from "../Space/index.esm.js";
import { useFormFieldStyle as g } from "./_useFormFieldStyle.esm.js";
import j from "./FormField.esm.js";
import w from "./Label.esm.js";
const C = s.memo(
  ({
    required: m = !1,
    disabled: l = !1,
    name: a,
    label: n,
    labelPosition: f = "right",
    fullWidth: p,
    value: c,
    options: F,
    onChange: t,
    className: y,
    style: b
  }) => {
    const [v, u] = s.useState(c || null);
    s.useEffect(() => {
      u(c || null);
    }, [c]);
    const { outlineColor: R, borderColor: h } = g({
      isDisabled: l
    }), d = s.useCallback(
      (e) => {
        if (l) return;
        u(e);
        const o = {
          target: {
            name: a,
            value: e
          }
        };
        t == null || t(o);
      },
      [l, a, t]
    );
    return /* @__PURE__ */ i(j, { label: n, required: m, isDisabled: l, fullWidth: p, children: /* @__PURE__ */ i(D.Flex, { column: !0, gap: 8, style: { marginTop: 4 }, children: F.map((e) => {
      const o = e.value === v, r = l || e.disabled;
      return /* @__PURE__ */ x(
        w,
        {
          label: e.label,
          position: f,
          style: {
            cursor: r ? "not-allowed" : "pointer",
            opacity: r ? 0.6 : 1
          },
          children: [
            /* @__PURE__ */ i(
              "input",
              {
                type: "radio",
                name: a,
                value: e.value,
                checked: o,
                disabled: r,
                onChange: () => d(e.value),
                style: { display: "none" }
              }
            ),
            /* @__PURE__ */ i(
              S,
              {
                icon: o ? "fluent:radio-button-24-filled" : "fluent:radio-button-24-regular",
                width: 24,
                onClick: () => {
                  r || d(e.value);
                },
                className: (k("Venomous-UI-React--FormField.Radio"), y),
                style: {
                  color: o ? R : h,
                  cursor: r ? "not-allowed" : "pointer",
                  ...b
                }
              }
            )
          ]
        },
        e.value
      );
    }) }) });
  }
);
C.displayName = "FormField.Radio";
export {
  C as default
};
