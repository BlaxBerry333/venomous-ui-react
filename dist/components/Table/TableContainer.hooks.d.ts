import React from "react";
import type { TableContainerProps } from "./TableContainer.types";
export declare function useTableSorting<T>({ rows, columns }: Pick<TableContainerProps<T>, "rows" | "columns">): {
    sortedRows: T[];
    currentSortColumn: string | keyof T | undefined;
    currentSortOrder: "desc" | "asc";
    handleSortChange: (columnKey: keyof T | string) => void;
};
export declare function useTableContainerStyles(): {
    tableWrapperStyle: React.CSSProperties;
    tableStyle: React.CSSProperties;
    __: {
        DynamicBorderedStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=TableContainer.hooks.d.ts.map