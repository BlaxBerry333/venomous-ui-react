import type { BreakPoint } from "@/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number | Partial<Record<BreakPoint, number>>; // 每个断点的列数
  spacing?: number | Partial<Record<BreakPoint, number>>; // 每个断点的间距
}

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  row?: boolean;
  column?: boolean;
  gap?: number | [number, number];
}
