import { jsxs as k, jsx as a } from "react/jsx-runtime";
import E from "clsx";
import t from "react";
import B from "../../hooks/useElementFocus/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { TypographySize as W } from "../../utils/design/TypographySize.esm.js";
import b from "../Icon/Icon.esm.js";
import { Menu as x } from "../Menu/index.esm.js";
import D from "../Popover/Popover.esm.js";
import { Space as L } from "../Space/index.esm.js";
import { Typography as P } from "../Typography/index.esm.js";
import { useFormFieldStyle as j } from "./_useFormFieldStyle.esm.js";
import A from "./FormField.esm.js";
const I = t.memo(
  ({
    isOriginalSelect: m = !1,
    fullWidth: r,
    required: g = !1,
    isError: i = !1,
    disabled: o = !1,
    label: u,
    helpText: l,
    ...h
  }) => {
    const { isFocused: c, setIsFocused: d, handleFocus: f, handleBlur: p } = B(), { commonStyles: s } = j({
      fullWidth: r,
      isDisabled: o,
      isError: i,
      isFocused: c
    });
    return /* @__PURE__ */ k(
      A,
      {
        label: u,
        required: g,
        isDisabled: o,
        isError: i,
        isFocused: c,
        fullWidth: r,
        helpText: l,
        children: [
          m && /* @__PURE__ */ a(
            R,
            {
              commonStyles: s,
              handleFocus: f,
              handleBlur: p,
              disabled: o,
              ...h
            }
          ),
          !m && /* @__PURE__ */ a(T, { commonStyles: s, setIsFocused: d, disabled: o, ...h })
        ]
      }
    );
  }
);
I.displayName = "FormField.Select";
const R = t.memo(
  ({
    commonStyles: m,
    handleFocus: r,
    handleBlur: g,
    name: i,
    autoComplete: o = "off",
    options: u,
    onChange: l,
    value: h,
    disabled: c,
    className: d,
    style: f,
    ...p
  }) => /* @__PURE__ */ a(
    "select",
    {
      name: i,
      autoComplete: o,
      disabled: c,
      onFocus: r,
      onBlur: g,
      onChange: l,
      value: h,
      className: E("Venomous-UI-React--FormField.Select", d),
      style: {
        boxSizing: "border-box",
        ...m,
        ...f
      },
      ...p,
      children: u.map((s) => /* @__PURE__ */ a("option", { value: s.value, disabled: s.disabled, children: s.label }, s.value))
    }
  )
), T = t.memo(({ commonStyles: m, setIsFocused: r, disabled: g, name: i, value: o, options: u, onChange: l, className: h, style: c }) => {
  const [d, f] = t.useState(o || null), [p, s] = t.useState(!1), S = t.useRef(null), [F, w] = t.useState(0);
  t.useEffect(() => {
    f(o || null);
  }, [o]), t.useEffect(() => {
    if (S.current) {
      const e = () => {
        var y;
        const n = (y = S.current) == null ? void 0 : y.getBoundingClientRect();
        n && w(n.width);
      };
      return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }
  }, []), t.useEffect(() => {
    if (p && S.current) {
      const e = S.current.getBoundingClientRect();
      e && e.width !== F && w(e.width);
    }
  }, [p, F]);
  const z = t.useCallback(
    (e) => {
      f(e), s(!1), r(!1);
      const n = {
        target: { name: i, value: e },
        currentTarget: { name: i, value: e }
      };
      l == null || l(n);
    },
    [i, l, r]
  ), N = t.useCallback(
    (e) => {
      e.stopPropagation(), f(null), r(!1);
      const n = {
        target: { name: i, value: "" },
        currentTarget: { name: i, value: "" }
      };
      l == null || l(n);
    },
    [i, l, r]
  ), O = t.useMemo(
    () => {
      var e;
      return ((e = u.find((n) => n.value === d)) == null ? void 0 : e.label) || "";
    },
    [u, d]
    // 添加 options 依赖
  ), v = F || (c == null ? void 0 : c.width);
  return /* @__PURE__ */ a(
    D,
    {
      direction: "bottom",
      alignment: "start",
      trigger: "click",
      style: { width: "100%" },
      onClickOutside: () => {
        s(!1), r(!1);
      },
      contentStyle: {
        width: v
      },
      renderTrigger: () => /* @__PURE__ */ k(
        L.Flex,
        {
          ref: S,
          row: !0,
          onClick: () => {
            s(!0), r(!0);
          },
          style: {
            ...m,
            height: m.minHeight,
            width: "100%",
            maxWidth: v,
            display: "flex",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ a(P.Paragraph, { ellipsis: 1, style: { flex: 1 }, children: O }),
            d && !g && /* @__PURE__ */ a(
              b,
              {
                icon: "solar:close-circle-line-duotone",
                width: 16,
                onClick: N,
                style: {
                  cursor: "pointer",
                  transition: "color 0.2s ease"
                }
              }
            ),
            /* @__PURE__ */ a(
              b,
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
      children: /* @__PURE__ */ a(x.List, { as: "ul", className: E("Venomous-UI-React--FormField.Select", h), style: { width: "100%" }, children: u.map((e) => /* @__PURE__ */ a(
        x.Item,
        {
          id: e.id,
          text: e.label,
          isDisabled: e.disabled,
          isActive: e.value === d,
          onClick: () => {
            e.disabled || z(e.value);
          },
          style: {
            cursor: e.disabled ? "not-allowed" : "pointer",
            fontSize: W.small
          }
        },
        e.id
      )) })
    }
  );
});
R.displayName = "FormField.Select.Original";
T.displayName = "FormField.Select.Custom";
export {
  I as default
};
