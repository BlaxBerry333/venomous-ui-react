import { jsxs as S, jsx as s } from "react/jsx-runtime";
import a from "react";
import { Menu as y } from "../Menu/index.esm.js";
import { Space as T } from "../Space/index.esm.js";
import { Typography as O } from "../Typography/index.esm.js";
import z from "./FormField.esm.js";
import { useFormFieldStyle as E } from "./useFormFieldStyle.esm.js";
import N from "../../hooks/useElementFocus/index.esm.js";
import P from "../Popover/Popover.esm.js";
import F from "../Icon/Icon.esm.js";
import { TypographySize as j } from "../../utils/design/TypographySize.esm.js";
const B = a.memo(
  ({
    isOriginalSelect: o = !1,
    fullWidth: t,
    required: f = !1,
    isError: r = !1,
    disabled: i = !1,
    label: u,
    helpText: l,
    ...c
  }) => {
    const { isFocused: d, setIsFocused: n, handleFocus: p, handleBlur: m } = N(), { commonStyles: b } = E({
      fullWidth: t,
      isDisabled: i,
      isError: r,
      isFocused: d
    });
    return /* @__PURE__ */ S(
      z,
      {
        label: u,
        required: f,
        disabled: i,
        isError: r,
        fullWidth: t,
        helpText: l,
        children: [
          o && /* @__PURE__ */ s(
            g,
            {
              commonStyles: b,
              handleFocus: p,
              handleBlur: m,
              disabled: i,
              ...c
            }
          ),
          !o && /* @__PURE__ */ s(x, { commonStyles: b, setIsFocused: n, disabled: i, ...c })
        ]
      }
    );
  }
);
B.displayName = "FormField.Select";
const g = a.memo(
  ({
    commonStyles: o,
    handleFocus: t,
    handleBlur: f,
    name: r,
    autoComplete: i = "off",
    options: u,
    onChange: l,
    value: c,
    disabled: d,
    style: n,
    ...p
  }) => /* @__PURE__ */ s(
    "select",
    {
      name: r,
      autoComplete: i,
      disabled: d,
      onFocus: t,
      onBlur: f,
      onChange: l,
      value: c,
      style: {
        boxSizing: "border-box",
        ...o,
        ...n
      },
      ...p,
      children: u.map((m) => /* @__PURE__ */ s("option", { value: m.value, disabled: m.disabled, children: m.label }, m.value))
    }
  )
), x = a.memo(({ commonStyles: o, setIsFocused: t, disabled: f, name: r, value: i, options: u, onChange: l, style: c }) => {
  const [d, n] = a.useState(i || null), [p, m] = a.useState(!1);
  a.useEffect(() => {
    n(i || null);
  }, [i]);
  const b = a.useCallback(
    (e) => {
      n(e), m(!1), t(!1);
      const h = {
        target: { name: r, value: e },
        currentTarget: { name: r, value: e }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), w = a.useCallback(
    (e) => {
      e.stopPropagation(), n(null), t(!1);
      const h = {
        target: { name: r, value: "" },
        currentTarget: { name: r, value: "" }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), k = a.useMemo(
    () => {
      var e;
      return ((e = u.find((h) => h.value === d)) == null ? void 0 : e.label) || "";
    },
    [d]
  ), v = (c == null ? void 0 : c.width) ?? o.minWidth;
  return /* @__PURE__ */ s(
    P,
    {
      placement: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => t(!1),
      renderTrigger: () => /* @__PURE__ */ S(
        T.Flex,
        {
          row: !0,
          onClick: () => t(!0),
          style: {
            ...o,
            height: o.minHeight,
            width: v,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ s(O.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: k }),
            d && !f && /* @__PURE__ */ s(
              F,
              {
                icon: "solar:close-circle-line-duotone",
                width: 16,
                onClick: w,
                style: {
                  cursor: "pointer",
                  transition: "color 0.2s ease"
                }
              }
            ),
            /* @__PURE__ */ s(
              F,
              {
                icon: "solar:alt-arrow-down-line-duotone",
                width: 16,
                style: {
                  transition: "transform 0.2s ease",
                  transform: p ? "rotate(180deg)" : "rotate(0deg)"
                }
              }
            )
          ]
        }
      ),
      children: /* @__PURE__ */ s(y.List, { as: "ul", style: { width: v }, children: u.map((e) => /* @__PURE__ */ s(
        y.Item,
        {
          text: e.label,
          isDisabled: e.disabled,
          isActive: e.value === d,
          onClick: () => {
            e.disabled || b(e.value);
          },
          style: { cursor: e.disabled ? "not-allowed" : "pointer", fontSize: j.small }
        },
        e.value
      )) })
    }
  );
});
g.displayName = "FormField.Select.Original";
x.displayName = "FormField.Select.Custom";
export {
  B as default
};
