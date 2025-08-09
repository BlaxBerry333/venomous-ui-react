"use client";

import clsx from "clsx";
import React from "react";

import { Space } from "../Space";
import type { FormProps } from "./index.types";

const Form = React.memo<FormProps>(({ children, gap = 8, className, style, ...props }) => {
  return (
    <form
      className={clsx("Venomous-UI-React--Form", className)}
      style={{
        width: "100%",
        ...style,
      }}
      {...props}
    >
      <Space.Flex column gap={gap}>
        {children}
      </Space.Flex>
    </form>
  );
});

Form.displayName = "Form";
export default Form;
