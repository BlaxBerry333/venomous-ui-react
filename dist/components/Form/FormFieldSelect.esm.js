import { jsxs as v, jsx as s } from "react/jsx-runtime";
import y from "clsx";
import a from "react";
import O from "../../hooks/useElementFocus/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { TypographySize as z } from "../../utils/design/TypographySize.esm.js";
import S from "../Icon/Icon.esm.js";
import { Menu as b } from "../Menu/index.esm.js";
import D from "../Popover/Popover.esm.js";
import { Space as E } from "../Space/index.esm.js";
import { Typography as P } from "../Typography/index.esm.js";
import { useFormFieldStyle as R } from "./_useFormFieldStyle.esm.js";
import j from "./FormField.esm.js";
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
    const { isFocused: m, setIsFocused: d, handleFocus: n, handleBlur: F } = O(), { commonStyles: o } = R({
      fullWidth: t,
      isDisabled: i,
      isError: r,
      isFocused: m
    });
    return /* @__PURE__ */ v(
      j,
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
            g,
            {
              commonStyles: o,
              handleFocus: n,
              handleBlur: F,
              disabled: i,
              ...f
            }
          ),
          !c && /* @__PURE__ */ s(x, { commonStyles: o, setIsFocused: d, disabled: i, ...f })
        ]
      }
    );
  }
);
B.displayName = "FormField.Select";
const g = a.memo(
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
      className: y("Venomous-UI-React--FormField.Select", d),
      style: {
        boxSizing: "border-box",
        ...c,
        ...n
      },
      ...F,
      children: u.map((o) => /* @__PURE__ */ s("option", { value: o.value, disabled: o.disabled, children: o.label }, o.value))
    }
  )
), x = a.memo(({ commonStyles: c, setIsFocused: t, disabled: p, name: r, value: i, options: u, onChange: l, className: f, style: m }) => {
  const [d, n] = a.useState(i || null), [F, o] = a.useState(!1);
  a.useEffect(() => {
    n(i || null);
  }, [i]);
  const w = a.useCallback(
    (e) => {
      n(e), o(!1), t(!1);
      const h = {
        target: { name: r, value: e },
        currentTarget: { name: r, value: e }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), k = a.useCallback(
    (e) => {
      e.stopPropagation(), n(null), t(!1);
      const h = {
        target: { name: r, value: "" },
        currentTarget: { name: r, value: "" }
      };
      l == null || l(h);
    },
    [r, l, t]
  ), T = a.useMemo(
    () => {
      var e;
      return ((e = u.find((h) => h.value === d)) == null ? void 0 : e.label) || "";
    },
    [d]
  ), N = (m == null ? void 0 : m.width) ?? c.minWidth;
  return /* @__PURE__ */ s(
    D,
    {
      direction: "bottom",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => t(!1),
      renderTrigger: () => /* @__PURE__ */ v(
        E.Flex,
        {
          row: !0,
          onClick: () => t(!0),
          style: {
            ...c,
            height: c.minHeight,
            width: N,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ s(P.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: T }),
            d && !p && /* @__PURE__ */ s(
              S,
              {
                icon: "solar:close-circle-line-duotone",
                width: 16,
                onClick: k,
                style: {
                  cursor: "pointer",
                  transition: "color 0.2s ease"
                }
              }
            ),
            /* @__PURE__ */ s(
              S,
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
      children: /* @__PURE__ */ s(b.List, { as: "ul", className: y("Venomous-UI-React--FormField.Select", f), style: { width: "100%" }, children: u.map((e) => /* @__PURE__ */ s(
        b.Item,
        {
          text: e.label,
          isDisabled: e.disabled,
          isActive: e.value === d,
          onClick: () => {
            e.disabled || w(e.value);
          },
          style: { cursor: e.disabled ? "not-allowed" : "pointer", fontSize: z.small }
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
