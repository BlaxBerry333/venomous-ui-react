import type { BreakPointName } from "@/utils";
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: number | Partial<Record<BreakPointName, number>>;
    spacing?: number | Partial<Record<BreakPointName, number>>;
}
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    row?: boolean;
    column?: boolean;
    gap?: number | [number, number];
}
//# sourceMappingURL=index.types.d.ts.map