import i from "react";
import { Theme as s } from "../Theme/index.esm.js";
import { TextColors as o } from "../../utils/colors/index.esm.js";
const d = "lightMode";
function a({ color: e = d, ellipsis: t = 0 }) {
  const { isDarkThemeMode: r } = s.useThemeMode(), n = i.useMemo(() => r ? e === "lightMode" ? o.darkMode : o[e] : o[e], [e, r]), m = i.useMemo(() => t ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: t,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [t]);
  return {
    fontColor: n,
    ellipsisStyles: m
  };
}
export {
  d as _defaultTypographyColor,
  a as useTypographyStyle
};
