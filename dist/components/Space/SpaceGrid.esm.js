import { jsx as d } from "react/jsx-runtime";
import s from "react";
import { Theme as p } from "../Theme/index.esm.js";
import { BreakPointName as f } from "../../utils/design/ThemeBreakpoint.esm.js";
const l = s.memo(({ children: r, style: i, columns: n = 1, spacing: e = 16, ...t }) => {
  const { screenSize: m } = p.useThemeBreakpoint(), u = m ?? f.xs, a = s.useMemo(
    () => x(n, u),
    [n, u]
  ), c = s.useMemo(
    () => b(e, u),
    [e, u]
  );
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${a}, 1fr)`,
        gap: `${c}px`,
        ...i
      },
      ...t,
      children: r
    }
  );
});
l.displayName = "Space.Grid";
const o = Object.keys(f);
function x(r = 1, i) {
  if (typeof r == "number")
    return r;
  const n = o.indexOf(i);
  for (let e = n; e < o.length; e++) {
    const t = r[o[e]];
    if (t !== void 0) return t;
  }
  return 1;
}
function b(r = 16, i) {
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
  l as default
};
