import { jsx as l } from "react/jsx-runtime";
import e from "react";
import { Theme as s } from "../Theme/index.esm.js";
import { useScroll as a, motion as m } from "framer-motion";
import { getOpacityHex as g, hexNormalize as c, getDarkerHex as n, getLighterHex as p } from "../../utils/tools/get-colors.esm.js";
const d = e.memo(({ height: t = 8 }) => {
  const { scrollYProgress: i } = a(), { themeColor: o } = s.useThemeColor(), r = e.useMemo(
    () => ({
      light: p(o, 0.2),
      dark: n(o, 0.8),
      origin: c(o),
      opacity: g(o, 0.6)
    }),
    [o]
  );
  return /* @__PURE__ */ l(
    m.div,
    {
      style: {
        scaleX: i,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(to right, ${r.light}, ${r.origin}, ${r.opacity})`,
        height: t,
        borderRadius: "8px"
      }
    }
  );
});
d.displayName = "Progress.Scrollbar";
export {
  d as default
};
