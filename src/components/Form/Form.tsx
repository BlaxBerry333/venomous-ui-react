"use client";

import React from "react";

import { Space } from "../Space";
import type { FormProps } from "./index.types";

const Form = React.memo<FormProps>(({ children, gap = 8, style, ...props }) => {
  return (
    <form style={{ width: "100%", ...style }} {...props}>
      <Space.Flex column gap={gap}>
        {children}
      </Space.Flex>
    </form>
  );
});

Form.displayName = "Form";
export default Form;
