import { jsx as i, jsxs as h } from "react/jsx-runtime";
import s from "react";
import { Space as k } from "../Space/index.esm.js";
import x from "./FormField.esm.js";
import R from "./Label.esm.js";
import { useFormFieldStyle as S } from "./_useFormFieldStyle.esm.js";
import D from "../Icon/Icon.esm.js";
const g = s.memo(
  ({
    required: m = !1,
    disabled: l = !1,
    name: a,
    label: n,
    labelPosition: f = "right",
    fullWidth: p,
    value: c,
    options: y,
    onChange: o
  }) => {
    const [F, u] = s.useState(c || null);
    s.useEffect(() => {
      u(c || null);
    }, [c]);
    const { outlineColor: b, borderColor: v } = S({
      isDisabled: l
    }), d = s.useCallback(
      (e) => {
        if (l) return;
        u(e);
        const r = {
          target: {
            name: a,
            value: e
          }
        };
        o == null || o(r);
      },
      [l, a, o]
    );
    return /* @__PURE__ */ i(x, { label: n, required: m, isDisabled: l, fullWidth: p, children: /* @__PURE__ */ i(k.Flex, { column: !0, gap: 8, style: { marginTop: 4 }, children: y.map((e) => {
      const r = e.value === F, t = l || e.disabled;
      return /* @__PURE__ */ h(
        R,
        {
          label: e.label,
          position: f,
          style: {
            cursor: t ? "not-allowed" : "pointer",
            opacity: t ? 0.6 : 1
          },
          children: [
            /* @__PURE__ */ i(
              "input",
              {
                type: "radio",
                name: a,
                value: e.value,
                checked: r,
                disabled: t,
                onChange: () => d(e.value),
                style: { display: "none" }
              }
            ),
            /* @__PURE__ */ i(
              D,
              {
                icon: r ? "fluent:radio-button-24-filled" : "fluent:radio-button-24-regular",
                width: 24,
                onClick: () => {
                  t || d(e.value);
                },
                style: {
                  color: r ? b : v,
                  cursor: t ? "not-allowed" : "pointer"
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
g.displayName = "FormField.Radio";
export {
  g as default
};
