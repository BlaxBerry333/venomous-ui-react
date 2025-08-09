import { jsx as d } from "react/jsx-runtime";
import l from "clsx";
import m from "react";
import { Theme as x } from "../Theme/index.esm.js";
import { BreakPointName as a } from "../../utils/design/ThemeBreakpoint.esm.js";
const S = m.memo(({ children: r, className: n, style: i, columns: e = 1, spacing: t = 16, ...u }) => {
  const { screenSize: c } = x.useThemeBreakpoint(), s = c ?? a.xs, f = m.useMemo(
    () => b(e, s),
    [e, s]
  ), p = m.useMemo(
    () => g(t, s),
    [t, s]
  );
  return /* @__PURE__ */ d(
    "div",
    {
      className: l("Venomous-UI-React--Space.Grid", n),
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${f}, 1fr)`,
        gap: `${p}px`,
        ...i
      },
      ...u,
      children: r
    }
  );
});
S.displayName = "Space.Grid";
const o = Object.keys(a);
function b(r = 1, n) {
  if (typeof r == "number")
    return r;
  const i = o.indexOf(n);
  for (let e = i; e < o.length; e++) {
    const t = r[o[e]];
    if (t !== void 0) return t;
  }
  return 1;
}
function g(r = 16, n) {
  if (typeof r == "number")
    return r;
  const i = o.indexOf(n);
  for (let e = i; e < o.length; e++) {
    const t = r[o[e]];
    if (t !== void 0) return t;
  }
  return 16;
}
export {
  S as default
};
