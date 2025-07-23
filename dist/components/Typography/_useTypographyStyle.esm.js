import i from "react";
import m from "../../hooks/useThemeMode/index.esm.js";
import { TextColors as o } from "../../utils/colors/index.esm.js";
const d = "lightMode";
function a({ color: e = d, ellipsis: t = 0 }) {
  const { isDarkThemeMode: r } = m(), n = i.useMemo(() => r ? e === "lightMode" ? o.darkMode : o[e] : o[e], [e, r]), s = i.useMemo(() => t ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: t,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [t]);
  return {
    fontColor: n,
    ellipsisStyles: s
  };
}
export {
  d as _defaultTypographyColor,
  a as useTypographyStyle
};
