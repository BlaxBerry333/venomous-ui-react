"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import { useTableRowStyles } from "./TableRow.hooks";
import type { TableRowProps, TableRowRef } from "./TableRow.types";

const TableRow = React.memo(
  React.forwardRef<TableRowRef, TableRowProps>(({ className, style, children, ...props }, ref) => {
    const { tableRowStyle } = useTableRowStyles();

    return (
      <tr
        ref={ref}
        className={clsx(COMPONENT_CLASSNAME_NAMES.TableRow, className)}
        style={{ ...tableRowStyle, ...style }}
        {...props}
      >
        {children}
      </tr>
    );
  }),
);

TableRow.displayName = COMPONENT_DISPLAY_NAMES.TableRow;
export default TableRow;
