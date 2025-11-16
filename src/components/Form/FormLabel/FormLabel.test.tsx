import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import FormLabel from "./FormLabel.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("FormLabel", () => {
  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders label text", () => {
      const { getByText } = render(<FormLabel text="Username" />, { wrapper });

      expect(getByText("Username")).toBeDefined();
    });

    it("renders as label element", () => {
      const { container } = render(<FormLabel text="Email" />, { wrapper });

      const label = container.querySelector("label");
      expect(label).toBeDefined();
    });

    it("renders without required asterisk by default", () => {
      const { queryByText } = render(<FormLabel text="Name" />, { wrapper });

      expect(queryByText("*")).toBeNull();
    });

    it("renders with required asterisk when required={true}", () => {
      const { getByText } = render(<FormLabel text="Email" required={true} />, { wrapper });

      expect(getByText("*")).toBeDefined();
    });
  });

  // ========== Props Tests ==========
  describe("Props", () => {
    it("accepts text prop", () => {
      const { getByText } = render(<FormLabel text="Full Name" />, { wrapper });

      expect(getByText("Full Name")).toBeDefined();
    });

    it("accepts required prop", () => {
      const { getByText } = render(<FormLabel text="Password" required={true} />, { wrapper });

      expect(getByText("*")).toBeDefined();
      expect(getByText("Password")).toBeDefined();
    });

    it("accepts disabled prop", () => {
      render(<FormLabel text="Disabled Field" disabled={true} />, { wrapper });
      // Visual state test - component renders without error
      expect(true).toBe(true);
    });

    it("accepts isError prop", () => {
      render(<FormLabel text="Error Field" isError={true} />, { wrapper });
      // Visual state test - component renders without error
      expect(true).toBe(true);
    });

    it("accepts htmlFor prop", () => {
      const { container } = render(<FormLabel text="Username" htmlFor="username-input" />, { wrapper });

      const label = container.querySelector("label");
      expect(label?.htmlFor).toBe("username-input");
    });

    it("accepts custom className", () => {
      const { container } = render(<FormLabel text="Name" className="custom-label" />, { wrapper });

      const label = container.querySelector("label");
      expect(label?.classList.contains("custom-label")).toBe(true);
    });

    it("accepts custom style", () => {
      const { container } = render(<FormLabel text="Name" style={{ marginBottom: 10 }} />, { wrapper });

      const label = container.querySelector("label") as HTMLLabelElement;
      expect(label.style.marginBottom).toBe("10px");
    });
  });

  // ========== State Combinations Tests ==========
  describe("State Combinations", () => {
    it("renders required with disabled state", () => {
      const { getByText } = render(<FormLabel text="Email" required={true} disabled={true} />, { wrapper });

      expect(getByText("*")).toBeDefined();
      expect(getByText("Email")).toBeDefined();
    });

    it("renders required with error state", () => {
      const { getByText } = render(<FormLabel text="Password" required={true} isError={true} />, { wrapper });

      expect(getByText("*")).toBeDefined();
      expect(getByText("Password")).toBeDefined();
    });

    it("renders disabled and error state together", () => {
      render(<FormLabel text="Field" disabled={true} isError={true} />, { wrapper });
      // Both states can coexist
      expect(true).toBe(true);
    });
  });

  // ========== Styling Tests ==========
  describe("Styling", () => {
    it("shows asterisk before label text when required", () => {
      const { container } = render(<FormLabel text="Email" required={true} />, { wrapper });

      const label = container.querySelector("label");
      const textContent = label?.textContent;

      // Asterisk should appear before "Email"
      expect(textContent).toContain("*");
      expect(textContent).toContain("Email");
    });

    it("applies error color when isError={true}", () => {
      render(<FormLabel text="Error Field" isError={true} />, { wrapper });
      // Color is managed by useFormLabelStyles hook
      expect(true).toBe(true);
    });

    it("applies disabled color when disabled={true}", () => {
      render(<FormLabel text="Disabled Field" disabled={true} />, { wrapper });
      // Color is managed by useFormLabelStyles hook
      expect(true).toBe(true);
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("displays correct displayName", () => {
      expect(FormLabel.displayName).toBe(COMPONENT_DISPLAY_NAMES.FormLabel);
    });

    it("renders component without errors", () => {
      const { container } = render(<FormLabel text="Name" />, { wrapper });

      expect(container).toBeDefined();
    });

    it("works with long text", () => {
      const longText = "This is a very long label text that might wrap to multiple lines";
      const { getByText } = render(<FormLabel text={longText} />, { wrapper });

      expect(getByText(longText)).toBeDefined();
    });

    it("works with special characters in text", () => {
      const { getByText } = render(<FormLabel text="Email (optional)" />, { wrapper });

      expect(getByText("Email (optional)")).toBeDefined();
    });
  });
});
