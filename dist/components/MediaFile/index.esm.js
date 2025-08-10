import e from "./MediaFileTypeImage.esm.js";
import o from "./MediaFileUploader.esm.js";
import { extensionToMimeType as i, mimeTypeToExtension as p } from "./tools.esm.js";
import { MediaFileTypeMap as l } from "./index.types.esm.js";
const t = {
  TypeImage: e,
  Uploader: o,
  mimeTypeToExtension: p,
  extensionToMimeType: i
};
export {
  t as MediaFile,
  l as MediaFileTypeMap
};
