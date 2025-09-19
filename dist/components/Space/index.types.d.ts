import type { BreakPointName } from "../../utils";
export interface SpaceGridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: number | Partial<Record<BreakPointName, number>>;
    spacing?: number | Partial<Record<BreakPointName, number>>;
}
export interface SpaceFlexProps extends React.HTMLAttributes<HTMLDivElement> {
    row?: boolean;
    column?: boolean;
    gap?: number | [number, number];
}
//# sourceMappingURL=index.types.d.ts.map