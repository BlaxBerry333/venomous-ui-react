import { jsx as m } from "react/jsx-runtime";
import t from "clsx";
import a from "react";
import { TypographySize as i } from "../../utils/design/TypographySize.esm.js";
import { ThemeColor as d } from "../../utils/design/ThemeColor.esm.js";
const l = a.memo(({ className: o, style: r, text: e, ...p }) => /* @__PURE__ */ m(
  "code",
  {
    className: t("Venomous-UI-React--Typography.Code", o),
    style: {
      color: d.TourmalineStiletto,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: i.small,
      fontWeight: 600,
      ...r
    },
    ...p,
    children: e
  }
));
l.displayName = "Typography.Code";
export {
  l as default
};
