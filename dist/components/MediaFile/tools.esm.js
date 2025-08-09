import { MediaFileTypeMap as c } from "./index.types.esm.js";
import { ThemeColor as e } from "../../utils/design/ThemeColor.esm.js";
function o(r) {
  const a = Object.entries(c).find(([, s]) => s === r);
  if (!a)
    throw new Error(`Unsupported mime type: ${r}`);
  return a[0];
}
function i(r) {
  return c[r];
}
function p(r) {
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
  i as extensionToMimeType,
  p as getMediaFileTypeColor,
  o as mimeTypeToExtension
};
