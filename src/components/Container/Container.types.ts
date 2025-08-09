import type { BreakPointName } from "@/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxBreakpoint?: BreakPointName;
}
