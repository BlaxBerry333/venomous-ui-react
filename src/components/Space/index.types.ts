import type { BreakPointName } from "@/utils";

export interface SpaceGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number | Partial<Record<BreakPointName, number>>; // 每个断点的列数
  spacing?: number | Partial<Record<BreakPointName, number>>; // 每个断点的间距
}

export interface SpaceFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  column?: boolean;
  gap?: number | [number, number];
}
