import React from "react";
import { type TableCellProps } from "./TableCell.types";
export declare function useTableCellStyles({ as: __as, align, width, bordered, sortable, sorted, }: Pick<TableCellProps, "as" | "align" | "width" | "bordered" | "sortable" | "sorted">): {
    tableCellStyle: React.CSSProperties;
    __: {
        DynamicAsStyles: React.CSSProperties;
        DynamicWidthStyles: React.CSSProperties;
        DynamicBorderedStyles: React.CSSProperties;
        DynamicSortableStyles: React.CSSProperties;
        DynamicSortedStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=TableCell.hooks.d.ts.map