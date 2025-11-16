"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import { useTableHeadStyles } from "./TableHead.hooks";
import type { TableHeadProps, TableHeadRef } from "./TableHead.types";

const TableHead = React.memo(
  React.forwardRef<TableHeadRef, TableHeadProps>(({ className, style, children, ...props }, ref) => {
    // ========== Styles Hook ==========
    const { tableHeadStyle } = useTableHeadStyles();

    return (
      <thead
        ref={ref}
        className={clsx(COMPONENT_CLASSNAME_NAMES.TableHead, className)}
        style={{ ...tableHeadStyle, ...style }}
        {...props}
      >
        {children}
      </thead>
    );
  }),
);

TableHead.displayName = COMPONENT_DISPLAY_NAMES.TableHead;
export default TableHead;
