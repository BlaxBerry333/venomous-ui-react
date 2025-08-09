import { jsxs as y, jsx as s } from "react/jsx-runtime";
import g from "clsx";
import o from "react";
import { Menu as b } from "../Menu/index.esm.js";
import { Space as O } from "../Space/index.esm.js";
import { Typography as z } from "../Typography/index.esm.js";
import D from "./FormField.esm.js";
import { useFormFieldStyle as E } from "./useFormFieldStyle.esm.js";
import P from "../../hooks/useElementFocus/index.esm.js";
import R from "../Popover/Popover.esm.js";
import v from "../Icon/Icon.esm.js";
import { TypographySize as j } from "../../utils/design/TypographySize.esm.js";
const B = o.memo(
  ({
    isOriginalSelect: c = !1,
    fullWidth: t,
    required: p = !1,
    isError: r = !1,
    disabled: i = !1,
    label: u,
    helpText: l,
    ...f
  }) => {
    const { isFocused: m, setIsFocused: d, handleFocus: n, handleBlur: F } = P(), { commonStyles: a } = E({
      fullWidth: t,
      isDisabled: i,
      isError: r,
      isFocused: m
    });
    return /* @__PURE__ */ y(
      D,
      {
        label: u,
        required: p,
        isDisabled: i,
        isError: r,
        isFocused: m,
        fullWidth: t,
        helpText: l,
        children: [
          c && /* @__PURE__ */ s(
            x,
            {
              commonStyles: a,
              handleFocus: n,
              handleBlur: F,
              disabled: i,
              ...f
            }
          ),
          !c && /* @__PURE__ */ s(w, { commonStyles: a, setIsFocused: d, disabled: i, ...f })
        ]
      }
    );
  }
);
B.displayName = "FormField.Select";
const x = o.memo(
  ({
    commonStyles: c,
    handleFocus: t,
    handleBlur: p,
    name: r,
    autoComplete: i = "off",
    options: u,
    onChange: l,
    value: f,
    disabled: m,
    className: d,
    style: n,
    ...F
  }) => /* @__PURE__ */ s(
    "select",
    {
      name: r,
      autoComplete: i,
      disabled: m,
      onFocus: t,
      onBlur: p,
      onChange: l,
      value: f,
      className: g("Venomous-UI-React--FormField.Select", d),
      style: {
        boxSizing: "border-box",
        ...c,
        ...n
      },
      ...F,
      children: u.map((a) => /* @__PURE__ */ s("option", { value: a.value, disabled: a.disabled, children: a.label }, a.value))
    }
  )
), w = o.memo(({ commonStyles: c, setIsFocused: t, disabled: p, name: r, value: i, options: u, onChange: l, className: f, style: m }) => {
  const [d, n] = o.useState(i || null), [F, a] = o.useState(!1);
  o.useEffect(() => {
    n(i || null);
  }, [i]);
  const k = o.useCallback(
    (e) => {
      n(e), a(!1), t(!1);
      const h = {
        target: { name: r, value: e },
        currentTarget: { name: r, value: e }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), T = o.useCallback(
    (e) => {
      e.stopPropagation(), n(null), t(!1);
      const h = {
        target: { name: r, value: "" },
        currentTarget: { name: r, value: "" }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), N = o.useMemo(
    () => {
      var e;
      return ((e = u.find((h) => h.value === d)) == null ? void 0 : e.label) || "";
    },
    [d]
  ), S = (m == null ? void 0 : m.width) ?? c.minWidth;
  return /* @__PURE__ */ s(
    R,
    {
      placement: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => t(!1),
      renderTrigger: () => /* @__PURE__ */ y(
        O.Flex,
        {
          row: !0,
          onClick: () => t(!0),
          style: {
            ...c,
            height: c.minHeight,
            width: S,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ s(z.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: N }),
            d && !p && /* @__PURE__ */ s(
              v,
              {
                icon: "solar:close-circle-line-duotone",
                width: 16,
                onClick: T,
                style: {
                  cursor: "pointer",
                  transition: "color 0.2s ease"
                }
              }
            ),
            /* @__PURE__ */ s(
              v,
              {
                icon: "solar:alt-arrow-down-line-duotone",
                width: 16,
                style: {
                  transition: "transform 0.2s ease",
                  transform: F ? "rotate(180deg)" : "rotate(0deg)"
                }
              }
            )
          ]
        }
      ),
      children: /* @__PURE__ */ s(
        b.List,
        {
          as: "ul",
          className: g("Venomous-UI-React--FormField.Select", f),
          style: { width: S },
          children: u.map((e) => /* @__PURE__ */ s(
            b.Item,
            {
              text: e.label,
              isDisabled: e.disabled,
              isActive: e.value === d,
              onClick: () => {
                e.disabled || k(e.value);
              },
              style: { cursor: e.disabled ? "not-allowed" : "pointer", fontSize: j.small }
            },
            e.value
          ))
        }
      )
    }
  );
});
x.displayName = "FormField.Select.Original";
w.displayName = "FormField.Select.Custom";
export {
  B as default
};
