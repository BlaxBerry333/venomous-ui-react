import { jsxs as S, jsx as s } from "react/jsx-runtime";
import o from "react";
import { Menu as y } from "../Menu/index.esm.js";
import { Space as T } from "../Space/index.esm.js";
import { Typography as O } from "../Typography/index.esm.js";
import z from "./FormField.esm.js";
import { useFormFieldStyle as D } from "./_useFormFieldStyle.esm.js";
import E from "../../hooks/useElementFocus/index.esm.js";
import N from "../Popover/Popover.esm.js";
import F from "../Icon/Icon.esm.js";
import { TypographySize as P } from "../../utils/design/TypographySize.esm.js";
const j = o.memo(
  ({
    isOriginalSelect: c = !1,
    fullWidth: t,
    required: f = !1,
    isError: r = !1,
    disabled: i = !1,
    label: u,
    helpText: l,
    ...d
  }) => {
    const { isFocused: a, setIsFocused: n, handleFocus: p, handleBlur: m } = E(), { commonStyles: b } = D({
      fullWidth: t,
      isDisabled: i,
      isError: r,
      isFocused: a
    });
    return /* @__PURE__ */ S(
      z,
      {
        label: u,
        required: f,
        isDisabled: i,
        isError: r,
        isFocused: a,
        fullWidth: t,
        helpText: l,
        children: [
          c && /* @__PURE__ */ s(
            g,
            {
              commonStyles: b,
              handleFocus: p,
              handleBlur: m,
              disabled: i,
              ...d
            }
          ),
          !c && /* @__PURE__ */ s(x, { commonStyles: b, setIsFocused: n, disabled: i, ...d })
        ]
      }
    );
  }
);
j.displayName = "FormField.Select";
const g = o.memo(
  ({
    commonStyles: c,
    handleFocus: t,
    handleBlur: f,
    name: r,
    autoComplete: i = "off",
    options: u,
    onChange: l,
    value: d,
    disabled: a,
    style: n,
    ...p
  }) => /* @__PURE__ */ s(
    "select",
    {
      name: r,
      autoComplete: i,
      disabled: a,
      onFocus: t,
      onBlur: f,
      onChange: l,
      value: d,
      style: {
        boxSizing: "border-box",
        ...c,
        ...n
      },
      ...p,
      children: u.map((m) => /* @__PURE__ */ s("option", { value: m.value, disabled: m.disabled, children: m.label }, m.value))
    }
  )
), x = o.memo(({ commonStyles: c, setIsFocused: t, disabled: f, name: r, value: i, options: u, onChange: l, style: d }) => {
  const [a, n] = o.useState(i || null), [p, m] = o.useState(!1);
  o.useEffect(() => {
    n(i || null);
  }, [i]);
  const b = o.useCallback(
    (e) => {
      n(e), m(!1), t(!1);
      const h = {
        target: { name: r, value: e },
        currentTarget: { name: r, value: e }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), w = o.useCallback(
    (e) => {
      e.stopPropagation(), n(null), t(!1);
      const h = {
        target: { name: r, value: "" },
        currentTarget: { name: r, value: "" }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), k = o.useMemo(
    () => {
      var e;
      return ((e = u.find((h) => h.value === a)) == null ? void 0 : e.label) || "";
    },
    [a]
  ), v = (d == null ? void 0 : d.width) ?? c.minWidth;
  return /* @__PURE__ */ s(
    N,
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
            ...c,
            height: c.minHeight,
            width: v,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ s(O.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: k }),
            a && !f && /* @__PURE__ */ s(
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
          isActive: e.value === a,
          onClick: () => {
            e.disabled || b(e.value);
          },
          style: { cursor: e.disabled ? "not-allowed" : "pointer", fontSize: P.small }
        },
        e.value
      )) })
    }
  );
});
g.displayName = "FormField.Select.Original";
x.displayName = "FormField.Select.Custom";
export {
  j as default
};
