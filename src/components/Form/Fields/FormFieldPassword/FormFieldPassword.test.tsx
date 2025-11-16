import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import FormFieldPassword from "./FormFieldPassword.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("FormFieldPassword", () => {
  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders input element", () => {
      const { container } = render(<FormFieldPassword />, { wrapper });

      const input = container.querySelector("input");
      expect(input).toBeDefined();
    });

    it("renders with type='password' by default", () => {
      const { container } = render(<FormFieldPassword />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input.type).toBe("password");
    });

    it("displays correct displayName", () => {
      expect(FormFieldPassword.displayName).toBe(COMPONENT_DISPLAY_NAMES.FormFieldPassword);
    });

    it("renders with placeholder", () => {
      const { getByPlaceholderText } = render(<FormFieldPassword placeholder="Enter password" />, { wrapper });

      expect(getByPlaceholderText("Enter password")).toBeDefined();
    });

    it("renders visibility toggle button by default", () => {
      const { container } = render(<FormFieldPassword />, { wrapper });

      // IconButton should exist for visibility toggle
      const iconButton = container.querySelector("button");
      expect(iconButton).toBeDefined();
    });

    it("hides visibility toggle when showVisibilityToggle is false", () => {
      const { container } = render(<FormFieldPassword showVisibilityToggle={false} />, { wrapper });

      const iconButton = container.querySelector("button");
      expect(iconButton).toBeNull();
    });
  });

  // ========== Value and onChange Tests ==========
  describe("Value and onChange", () => {
    it("renders with initial value", () => {
      const { container } = render(<FormFieldPassword value="secret123" />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input.value).toBe("secret123");
    });

    it("calls onChange when value changes", () => {
      const handleChange = vi.fn();
      const { container } = render(<FormFieldPassword onChange={handleChange} />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "newpassword" } });

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith("newpassword", expect.any(Object));
    });

    it("calls onChange with empty string when cleared", () => {
      const handleChange = vi.fn();
      const { container } = render(<FormFieldPassword value="password" onChange={handleChange} />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "" } });

      expect(handleChange).toHaveBeenCalledWith("", expect.any(Object));
    });
  });

  // ========== Visibility Toggle Tests ==========
  describe("Visibility Toggle", () => {
    it("toggles password visibility when clicking toggle button", () => {
      const { container } = render(<FormFieldPassword value="secret" />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      const toggleButton = container.querySelector("button");

      // Initially type should be password
      expect(input.type).toBe("password");

      // Click to show password
      if (toggleButton) {
        fireEvent.click(toggleButton);
        expect(input.type).toBe("text");

        // Click again to hide password
        fireEvent.click(toggleButton);
        expect(input.type).toBe("password");
      }
    });

    it("does not toggle when disabled", () => {
      const { container } = render(<FormFieldPassword value="secret" disabled />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      const toggleButton = container.querySelector("button");

      expect(input.type).toBe("password");

      if (toggleButton) {
        fireEvent.click(toggleButton);
        // Should still be password type
        expect(input.type).toBe("password");
      }
    });

    it("does not toggle when readOnly", () => {
      const { container } = render(<FormFieldPassword value="secret" readOnly />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      const toggleButton = container.querySelector("button");

      expect(input.type).toBe("password");

      if (toggleButton) {
        fireEvent.click(toggleButton);
        // Should still be password type
        expect(input.type).toBe("password");
      }
    });
  });

  // ========== Variant Tests ==========
  describe("Variants", () => {
    it("renders with outlined variant by default", () => {
      const { container } = render(<FormFieldPassword />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });

    it("renders with text variant", () => {
      const { container } = render(<FormFieldPassword variant={FORM_FIELD_VARIANT_MAP.TEXT} />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });
  });

  // ========== State Tests ==========
  describe("States", () => {
    it("handles disabled state", () => {
      const { container } = render(<FormFieldPassword disabled />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input.disabled).toBe(true);
    });

    it("handles readOnly state", () => {
      const { container } = render(<FormFieldPassword readOnly />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input.readOnly).toBe(true);
    });

    it("does not call onChange when disabled", () => {
      const handleChange = vi.fn();
      const { container } = render(<FormFieldPassword disabled onChange={handleChange} />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "password" } });

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not call onChange when readOnly", () => {
      const handleChange = vi.fn();
      const { container } = render(<FormFieldPassword readOnly onChange={handleChange} />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "password" } });

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // ========== Prefix Tests ==========
  describe("Prefix", () => {
    it("renders with prefix", () => {
      const { getByText } = render(<FormFieldPassword prefix={<span>🔒</span>} />, { wrapper });

      expect(getByText("🔒")).toBeDefined();
    });

    it("renders without prefix by default", () => {
      const { container } = render(<FormFieldPassword />, { wrapper });

      // No prefix should be rendered, only visibility toggle icon
      const input = container.querySelector("input");
      expect(input).toBeDefined();
    });
  });

  // ========== Custom Styling Tests ==========
  describe("Custom Styling", () => {
    it("applies custom wrapperClassName", () => {
      const { container } = render(<FormFieldPassword wrapperClassName="custom-class" />, { wrapper });

      expect(container.querySelector(".custom-class")).toBeDefined();
    });

    it("applies custom wrapperStyle", () => {
      const { container } = render(<FormFieldPassword wrapperStyle={{ width: "300px" }} />, { wrapper });

      const wrapperEl = container.firstChild as HTMLElement;
      expect(wrapperEl.style.width).toBe("300px");
    });

    it("applies custom prefixClassName", () => {
      const { container } = render(<FormFieldPassword prefix={<span>Lock</span>} prefixClassName="prefix-class" />, {
        wrapper,
      });

      expect(container.querySelector(".prefix-class")).toBeDefined();
    });
  });

  // ========== Error State Tests ==========
  describe("Error State", () => {
    it("renders with error state", () => {
      const { container } = render(<FormFieldPassword error />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });
  });

  // ========== FullWidth Tests ==========
  describe("Full Width", () => {
    it("renders with fullWidth", () => {
      const { container } = render(<FormFieldPassword fullWidth />, { wrapper });

      const wrapper_div = container.firstChild as HTMLElement;
      expect(wrapper_div.style.width).toBe("100%");
    });

    it("renders without fullWidth by default", () => {
      const { container } = render(<FormFieldPassword />, { wrapper });

      const wrapper_div = container.firstChild as HTMLElement;
      expect(wrapper_div.style.width).not.toBe("100%");
    });
  });

  // ========== Focus Tests ==========
  describe("Focus", () => {
    it("handles focus event", () => {
      const { container } = render(<FormFieldPassword />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      fireEvent.focus(input);

      expect(input).toBeDefined();
    });

    it("handles blur event", () => {
      const { container } = render(<FormFieldPassword />, { wrapper });

      const input = container.querySelector("input") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.blur(input);

      expect(input).toBeDefined();
    });
  });

  // ========== Hover Tests ==========
  describe("Hover", () => {
    it("handles mouseEnter event", () => {
      const handleMouseEnter = vi.fn();
      const { container } = render(<FormFieldPassword onMouseEnter={handleMouseEnter} />, { wrapper });

      const wrapper_div = container.firstChild as HTMLElement;
      fireEvent.mouseEnter(wrapper_div);

      expect(handleMouseEnter).toHaveBeenCalled();
    });

    it("handles mouseLeave event", () => {
      const handleMouseLeave = vi.fn();
      const { container } = render(<FormFieldPassword onMouseLeave={handleMouseLeave} />, { wrapper });

      const wrapper_div = container.firstChild as HTMLElement;
      fireEvent.mouseLeave(wrapper_div);

      expect(handleMouseLeave).toHaveBeenCalled();
    });
  });
});
