import r from "react";
import { SemanticColors as n, TextColors as p } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { Theme as s } from "../Theme/index.esm.js";
function a({ ellipsis: e = 0, semanticColor: o }) {
  const { themeMode: t } = s.useThemeMode(), i = r.useMemo(() => o ? n[o] : p[t].primary, [t, o]), m = r.useMemo(() => e ? {
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
  a as useTypographyStyle
};
