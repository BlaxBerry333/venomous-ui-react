import { jsx as a } from "react/jsx-runtime";
import o from "react";
import { Space as y } from "../Space/index.esm.js";
import h from "./FormField.esm.js";
import v from "./Label.esm.js";
const R = o.memo(
  ({
    fullWidth: c = !1,
    required: m = !1,
    disabled: i = !1,
    name: d,
    label: f,
    labelPosition: p = "right",
    value: s,
    options: n,
    onChange: l
  }) => {
    const [F, u] = o.useState(s || null);
    o.useEffect(() => {
      u(s || null);
    }, [s]);
    const b = o.useCallback(
      (e) => {
        const t = e.target.value;
        u(t), l == null || l(e);
      },
      [l]
    );
    return /* @__PURE__ */ a(h, { label: f, required: m, disabled: i, isError: !1, fullWidth: c, children: /* @__PURE__ */ a(y.Flex, { column: !0, gap: 8, children: n.map((e) => {
      const t = `${d}-${e.value}`, r = i || e.disabled;
      return /* @__PURE__ */ a(
        v,
        {
          label: e.label,
          position: p,
          htmlFor: t,
          style: {
            cursor: r ? "not-allowed" : "pointer",
            opacity: r ? 0.6 : 1
          },
          children: /* @__PURE__ */ a(
            "input",
            {
              id: t,
              type: "radio",
              autoComplete: "off",
              name: d,
              checked: e.value === F,
              value: e.value,
              disabled: r,
              onChange: b,
              style: { cursor: r ? "not-allowed" : "pointer" }
            }
          )
        },
        e.value
      );
    }) }) });
  }
);
R.displayName = "FormField.Radio";
export {
  R as default
};
