"use client";

import { toast } from "sonner";

import type { NotifyType } from "./index.types";

export function notify(params: { type: NotifyType; title: string; description?: string }) {
  const options = {
    description: params.description,
  };
  if (params.type === "success") return toast.success(params.title, options);
  if (params.type === "error") return toast.error(params.title, options);
  if (params.type === "warning") return toast.warning(params.title, options);
  return toast.info(params.title, options);
}
