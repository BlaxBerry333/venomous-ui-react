import { jsx as s } from "react/jsx-runtime";
import m from "react";
import { Theme as d } from "../Theme/index.esm.js";
import { BreakPointName as p } from "../../utils/design/ThemeBreakpoint.esm.js";
const c = m.memo(({ children: r, style: i, columns: n = 1, spacing: e = 16, ...t }) => {
  const { screenSize: u } = d.useThemeBreakpoint(), f = m.useMemo(() => l(n, u), [n, u]), a = m.useMemo(() => x(e, u), [e, u]);
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${f}, 1fr)`,
        gap: `${a}px`,
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
