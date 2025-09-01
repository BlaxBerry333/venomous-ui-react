import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import { THEME_COLORS as e } from "../../utils/design/ThemeColor.esm.js";
import { MediaFileTypeMap as t } from "./index.types.esm.js";
function m(r) {
  const a = Object.entries(t).find(([, c]) => c === r);
  if (!a)
    throw new Error(`Unsupported mime type: ${r}`);
  return a[0];
}
function d(r) {
  return t[r];
}
function l(r) {
  switch (r) {
    case ".jpg":
    case ".jpeg":
    case ".png":
    case ".webp":
    case ".gif":
      return e.TurquoiseFerDeLance;
    // 蓝色
    case ".svg":
    case ".js":
    case ".json":
      return e.TopazMamushi;
    // 金色
    case ".pdf":
      return e.GarnetViper;
    // 红色
    case ".html":
    case ".mp4":
    case ".avi":
      return e.TopazCoral;
    // 橙色
    case ".css":
      return e.AlexandriteAnaconda;
    // 紫色
    case ".xls":
    case ".xlsx":
    case ".csv":
      return e.EmeraldMamba;
    // 绿色
    case ".doc":
    case ".docx":
      return e.SapphireCobra;
    // 蓝色
    case ".mp3":
      return e.MalachitePython;
    // 绿色
    case ".txt":
    default:
      return "#5c5c5c";
  }
}
export {
  d as extensionToMimeType,
  l as getMediaFileTypeColor,
  m as mimeTypeToExtension
};
