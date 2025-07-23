import { toast as i } from "sonner";
function o(t) {
  const e = {
    description: t.description
  };
  return t.type === "success" ? i.success(t.title, e) : t.type === "error" ? i.error(t.title, e) : t.type === "warning" ? i.warning(t.title, e) : i.info(t.title, e);
}
export {
  o as notify
};
