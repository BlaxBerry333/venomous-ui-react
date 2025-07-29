import r from "react";
import { Theme as n } from "../Theme/index.esm.js";
import { SemanticColors as p, TextColors as s } from "../../utils/design/colors.esm.js";
function y({ ellipsis: e = 0, semanticColor: o }) {
  const { themeMode: t } = n.useThemeMode(), i = r.useMemo(() => o ? p[o] : s[t].primary, [t, o]), m = r.useMemo(() => e ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [e]);
  return {
    fontColor: i,
    ellipsisStyles: m
  };
}
export {
  y as useTypographyStyle
};
