import type { BreakPoint } from "@/utils";
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: number | Partial<Record<BreakPoint, number>>;
    spacing?: number | Partial<Record<BreakPoint, number>>;
}
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    row?: boolean;
    column?: boolean;
    gap?: number | [number, number];
}
//# sourceMappingURL=index.types.d.ts.map