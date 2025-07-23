import { jsx as l } from "react/jsx-runtime";
import t from "react";
import m from "../../hooks/useThemeColor/index.esm.js";
import a from "../../utils/get-colors/index.esm.js";
import { useScroll as n, motion as c } from "framer-motion";
const g = t.memo(({ height: s = 8, color: r }) => {
  const { scrollYProgress: i } = n(), { themeColor: e } = m(), o = t.useMemo(() => a(r || e), [r, e]);
  return /* @__PURE__ */ l(
    c.div,
    {
      style: {
        scaleX: i,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(to right, ${o.light}, ${o.origin}, ${o.opacity})`,
        height: s,
        borderRadius: "8px"
      }
    }
  );
});
g.displayName = "Progress.Scrollbar";
export {
  g as default
};
