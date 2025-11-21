import { jsx as M, jsxs as n, Fragment as p } from "react/jsx-runtime";
import o from "react";
import h from "clsx";
import { Space as E } from "../../Space/index.esm.js";
import { Typography as R } from "../../Typographies/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as _ } from "../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as I } from "../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as L } from "../../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import g from "../../../hooks/useThemeDesigns/index.esm.js";
import "../../Theme/ThemeProvider.context.esm.js";
import y from "../FormLabel/FormLabel.component.esm.js";
const P = o.memo(
  o.forwardRef(
    ({
      className: N,
      style: x,
      label: s,
      children: a,
      message: c,
      column: f = !0,
      spacing: F = 4,
      reverse: u = !1,
      required: C = !1,
      isError: r = !1,
      disabled: t = !1,
      onMouseEnter: S,
      onMouseLeave: d
    }, A) => {
      const e = o.useId(), { TextColors: i } = g(), O = o.useMemo(() => t ? i.disabled : r ? L.ERROR : i[2], [t, r, i]), m = o.useMemo(() => a(e), [a, e]), l = o.useMemo(
        () => s ? /* @__PURE__ */ M(y, { text: s, required: C, disabled: t, isError: r, htmlFor: e }) : null,
        [s, C, t, r, e]
      ), T = o.useMemo(() => f ? /* @__PURE__ */ n(p, { children: [
        l,
        m
      ] }) : u ? /* @__PURE__ */ n(p, { children: [
        m,
        l
      ] }) : /* @__PURE__ */ n(p, { children: [
        l,
        m
      ] }), [f, u, l, m]);
      return /* @__PURE__ */ n(
        E.Flex,
        {
          ref: A,
          column: f,
          spacing: F,
          className: h(I.FormControl, N),
          style: x,
          onMouseEnter: S,
          onMouseLeave: d,
          children: [
            T,
            c && /* @__PURE__ */ M(R.Text, { text: c, as: "small", color: O })
          ]
        }
      );
    }
  )
);
P.displayName = _.FormControl;
export {
  P as default
};
