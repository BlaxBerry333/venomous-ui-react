import { jsx as a } from "react/jsx-runtime";
import f from "react";
import d from "../../hooks/useThemeBreakpoint/index.esm.js";
import { BreakPoint as p } from "../../utils/breakpoint/index.esm.js";
const c = f.memo(({ children: r, style: i, columns: n = 1, spacing: e = 16, ...t }) => {
  const { screenSize: u } = d(), m = f.useMemo(() => l(n, u), [n, u]), s = f.useMemo(() => x(e, u), [e, u]);
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${m}, 1fr)`,
        gap: `${s}px`,
        ...i
      },
      ...t,
      children: r
    }
  );
});
c.displayName = "Space.Grid";
const o = Object.keys(p);
function l(r = 1, i) {
  if (typeof r == "number")
    return r;
  const n = o.indexOf(i);
  for (let e = n; e < o.length; e++) {
    const t = r[o[e]];
    if (t !== void 0) return t;
  }
  return 1;
}
function x(r = 16, i) {
  if (typeof r == "number")
    return r;
  const n = o.indexOf(i);
  for (let e = n; e < o.length; e++) {
    const t = r[o[e]];
    if (t !== void 0) return t;
  }
  return 16;
}
export {
  c as default
};
