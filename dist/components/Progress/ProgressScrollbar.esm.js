import { jsx as t } from "react/jsx-runtime";
import i from "react";
import { Theme as s } from "../Theme/index.esm.js";
import { useScroll as m, motion as l } from "framer-motion";
import { getLighterHex as a, getOpacityHex as g } from "../../utils/tools/get-colors.esm.js";
const p = i.memo(({ height: r = 8 }) => {
  const { scrollYProgress: e } = m(), { themeColor: o } = s.useThemeColor();
  return /* @__PURE__ */ t(
    l.div,
    {
      style: {
        scaleX: e,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(45deg, ${a(o, 0.2)} 0%, ${g(o, 0.15)} 90%)`,
        height: r,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px"
      }
    }
  );
});
p.displayName = "Progress.Scrollbar";
export {
  p as default
};
