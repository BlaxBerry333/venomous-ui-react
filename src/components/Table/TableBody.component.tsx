"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import { useTableBodyStyles } from "./TableBody.hooks";
import type { TableBodyProps, TableBodyRef } from "./TableBody.types";

const TableBody = React.memo(
  React.forwardRef<TableBodyRef, TableBodyProps>(({ className, style, children, ...props }, ref) => {
    const { tableBodyStyle } = useTableBodyStyles();

    return (
      <tbody
        ref={ref}
        className={clsx(COMPONENT_CLASSNAME_NAMES.TableBody, className)}
        style={{ ...tableBodyStyle, ...style }}
        {...props}
      >
        {children}
      </tbody>
    );
  }),
);

TableBody.displayName = COMPONENT_DISPLAY_NAMES.TableBody;
export default TableBody;
