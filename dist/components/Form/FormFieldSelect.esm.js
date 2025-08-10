import { jsxs as y, jsx as s } from "react/jsx-runtime";
import g from "clsx";
import a from "react";
import O from "../../hooks/useElementFocus/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { TypographySize as z } from "../../utils/design/TypographySize.esm.js";
import b from "../Icon/Icon.esm.js";
import { Menu as v } from "../Menu/index.esm.js";
import D from "../Popover/Popover.esm.js";
import { Space as E } from "../Space/index.esm.js";
import { Typography as P } from "../Typography/index.esm.js";
import R from "./FormField.esm.js";
import { useFormFieldStyle as j } from "./useFormFieldStyle.esm.js";
const B = a.memo(
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
    const { isFocused: m, setIsFocused: d, handleFocus: n, handleBlur: F } = O(), { commonStyles: o } = j({
      fullWidth: t,
      isDisabled: i,
      isError: r,
      isFocused: m
    });
    return /* @__PURE__ */ y(
      R,
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
              commonStyles: o,
              handleFocus: n,
              handleBlur: F,
              disabled: i,
              ...f
            }
          ),
          !c && /* @__PURE__ */ s(w, { commonStyles: o, setIsFocused: d, disabled: i, ...f })
        ]
      }
    );
  }
);
B.displayName = "FormField.Select";
const x = a.memo(
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
      children: u.map((o) => /* @__PURE__ */ s("option", { value: o.value, disabled: o.disabled, children: o.label }, o.value))
    }
  )
), w = a.memo(({ commonStyles: c, setIsFocused: t, disabled: p, name: r, value: i, options: u, onChange: l, className: f, style: m }) => {
  const [d, n] = a.useState(i || null), [F, o] = a.useState(!1);
  a.useEffect(() => {
    n(i || null);
  }, [i]);
  const k = a.useCallback(
    (e) => {
      n(e), o(!1), t(!1);
      const h = {
        target: { name: r, value: e },
        currentTarget: { name: r, value: e }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), T = a.useCallback(
    (e) => {
      e.stopPropagation(), n(null), t(!1);
      const h = {
        target: { name: r, value: "" },
        currentTarget: { name: r, value: "" }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), N = a.useMemo(
    () => {
      var e;
      return ((e = u.find((h) => h.value === d)) == null ? void 0 : e.label) || "";
    },
    [d]
  ), S = (m == null ? void 0 : m.width) ?? c.minWidth;
  return /* @__PURE__ */ s(
    D,
    {
      placement: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => t(!1),
      renderTrigger: () => /* @__PURE__ */ y(
        E.Flex,
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
            /* @__PURE__ */ s(P.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: N }),
            d && !p && /* @__PURE__ */ s(
              b,
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
              b,
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
        v.List,
        {
          as: "ul",
          className: g("Venomous-UI-React--FormField.Select", f),
          style: { width: S },
          children: u.map((e) => /* @__PURE__ */ s(
            v.Item,
            {
              text: e.label,
              isDisabled: e.disabled,
              isActive: e.value === d,
              onClick: () => {
                e.disabled || k(e.value);
              },
              style: { cursor: e.disabled ? "not-allowed" : "pointer", fontSize: z.small }
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
