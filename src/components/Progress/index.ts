import { default as LoadingBar } from "./ProgressLoadingBar";
import { default as PageLoading } from "./ProgressPageLoading";
import { default as Scrollbar } from "./ProgressScrollbar";

export type { ProgressLoadingBarProps, ProgressScrollbarProps } from "./index.types";

export const Progress = {
  Scrollbar,
  LoadingBar,
  PageLoading,
};
