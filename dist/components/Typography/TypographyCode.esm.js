import { jsx as m } from "react/jsx-runtime";
import t from "clsx";
import a from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import { TYPOGRAPHY_SIZES as d } from "../../utils/design/TypographySize.esm.js";
import { THEME_COLORS as i } from "../../utils/design/ThemeColor.esm.js";
const s = a.memo(({ className: o, style: r, text: p, ...e }) => /* @__PURE__ */ m(
  "code",
  {
    className: t("Venomous-UI-React--Typography.Code", o),
    style: {
      color: i.RubyCopperhead,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: d.small,
      fontWeight: 600,
      ...r
    },
    ...e,
    children: p
  }
));
s.displayName = "Typography.Code";
export {
  s as default
};
