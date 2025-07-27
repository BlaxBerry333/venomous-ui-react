import type { BreakPointName } from "@/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  breakpoint?: BreakPointName;
}
