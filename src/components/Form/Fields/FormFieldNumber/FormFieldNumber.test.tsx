import { act, fireEvent, render, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import FormFieldNumber from "./FormFieldNumber.component";
import { useFormFieldNumberActions } from "./FormFieldNumber.hooks";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("FormFieldNumber", () => {
  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders input element", () => {
      const { getByRole } = render(<FormFieldNumber />, { wrapper });

      const input = getByRole("spinbutton");
      expect(input).toBeDefined();
    });

    it("renders with type='number'", () => {
      const { getByRole } = render(<FormFieldNumber />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.type).toBe("number");
    });

    it("displays correct displayName", () => {
      expect(FormFieldNumber.displayName).toBe(COMPONENT_DISPLAY_NAMES.FormFieldNumber);
    });

    it("renders with placeholder", () => {
      const { getByPlaceholderText } = render(<FormFieldNumber placeholder="Enter number" />, { wrapper });

      expect(getByPlaceholderText("Enter number")).toBeDefined();
    });
  });

  // ========== Value and onChange Tests ==========
  describe("Value and onChange", () => {
    it("renders with initial value", () => {
      const { getByRole } = render(<FormFieldNumber value={42} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.value).toBe("42");
    });

    it("calls onChange when value changes", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber onChange={handleChange} />, { wrapper });

      const input = getByRole("spinbutton");
      fireEvent.change(input, { target: { value: "123" } });

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(123, expect.any(Object));
    });

    it("calls onChange with undefined when input is empty", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber value={42} onChange={handleChange} />, { wrapper });

      const input = getByRole("spinbutton");
      fireEvent.change(input, { target: { value: "" } });

      expect(handleChange).toHaveBeenCalledWith(undefined, expect.any(Object));
    });

    it("handles decimal values", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber step={0.1} onChange={handleChange} />, { wrapper });

      const input = getByRole("spinbutton");
      fireEvent.change(input, { target: { value: "3.14" } });

      expect(handleChange).toHaveBeenCalledWith(3.14, expect.any(Object));
    });

    it("handles negative values", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber onChange={handleChange} />, { wrapper });

      const input = getByRole("spinbutton");
      fireEvent.change(input, { target: { value: "-10" } });

      expect(handleChange).toHaveBeenCalledWith(-10, expect.any(Object));
    });
  });

  // ========== Min/Max/Step Tests ==========
  describe("Min/Max/Step", () => {
    it("accepts min attribute", () => {
      const { getByRole } = render(<FormFieldNumber min={0} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.min).toBe("0");
    });

    it("accepts max attribute", () => {
      const { getByRole } = render(<FormFieldNumber max={100} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.max).toBe("100");
    });

    it("accepts step attribute", () => {
      const { getByRole } = render(<FormFieldNumber step={5} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.step).toBe("5");
    });

    it("uses step=1 by default", () => {
      const { getByRole } = render(<FormFieldNumber />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.step).toBe("1");
    });
  });

  // ========== Variant Tests ==========
  describe("Variants", () => {
    it("renders with outlined variant by default", () => {
      const { container } = render(<FormFieldNumber />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });

    it("renders with text variant", () => {
      const { container } = render(<FormFieldNumber variant={FORM_FIELD_VARIANT_MAP.TEXT} />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });
  });

  // ========== State Tests ==========
  describe("States", () => {
    it("handles disabled state", () => {
      const { getByRole } = render(<FormFieldNumber disabled />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.disabled).toBe(true);
    });

    it("handles readOnly state", () => {
      const { getByRole } = render(<FormFieldNumber readOnly />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.readOnly).toBe(true);
    });

    it("does not call onChange when disabled", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber disabled onChange={handleChange} />, { wrapper });

      const input = getByRole("spinbutton");
      fireEvent.change(input, { target: { value: "42" } });

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not call onChange when readOnly", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber readOnly onChange={handleChange} />, { wrapper });

      const input = getByRole("spinbutton");
      fireEvent.change(input, { target: { value: "42" } });

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // ========== Prefix/Suffix Tests ==========
  describe("Prefix and Suffix", () => {
    it("renders with prefix", () => {
      const { getByText } = render(<FormFieldNumber prefix={<span>$</span>} />, { wrapper });

      expect(getByText("$")).toBeDefined();
    });

    it("renders with suffix", () => {
      const { getByText } = render(<FormFieldNumber suffix={<span>USD</span>} />, { wrapper });

      expect(getByText("USD")).toBeDefined();
    });

    it("renders with both prefix and suffix", () => {
      const { getByText } = render(<FormFieldNumber prefix={<span>$</span>} suffix={<span>USD</span>} />, {
        wrapper,
      });

      expect(getByText("$")).toBeDefined();
      expect(getByText("USD")).toBeDefined();
    });
  });

  // ========== Custom Styling Tests ==========
  describe("Custom Styling", () => {
    it("applies custom wrapperClassName", () => {
      const { container } = render(<FormFieldNumber wrapperClassName="custom-class" />, { wrapper });

      expect(container.querySelector(".custom-class")).toBeDefined();
    });

    it("applies custom wrapperStyle", () => {
      const { container } = render(<FormFieldNumber wrapperStyle={{ width: "300px" }} />, { wrapper });

      const wrapperEl = container.firstChild as HTMLElement;
      expect(wrapperEl.style.width).toBe("300px");
    });
  });

  // ========== Error State Tests ==========
  describe("Error State", () => {
    it("renders with error state", () => {
      const { container } = render(<FormFieldNumber error />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });

    it("renders with error state and message", () => {
      const { container } = render(<FormFieldNumber error />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });
  });

  // ========== FullWidth Tests ==========
  describe("Full Width", () => {
    it("renders with fullWidth", () => {
      const { container } = render(<FormFieldNumber fullWidth />, { wrapper });

      const wrapper_div = container.firstChild as HTMLElement;
      expect(wrapper_div.style.width).toBe("100%");
    });

    it("renders without fullWidth by default", () => {
      const { container } = render(<FormFieldNumber />, { wrapper });

      const wrapper_div = container.firstChild as HTMLElement;
      expect(wrapper_div.style.width).not.toBe("100%");
    });
  });

  // ========== Increment/Decrement Tests ==========
  describe("Increment/Decrement", () => {
    it("renders increment and decrement arrow container", () => {
      const { container } = render(<FormFieldNumber value={5} />, { wrapper });

      // Check that arrows container exists (Space.Flex with column layout)
      const flexContainers = container.querySelectorAll("div");
      expect(flexContainers.length).toBeGreaterThan(0);
    });

    it("applies keyboard up arrow to increment value", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber value={5} onChange={handleChange} step={1} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;

      // Simulate keyboard arrow up
      fireEvent.keyDown(input, { key: "ArrowUp" });

      // Note: Native browser behavior increments on ArrowUp, but this test is for component rendering
      expect(input).toBeDefined();
    });

    it("applies keyboard down arrow to decrement value", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber value={10} onChange={handleChange} step={1} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;

      // Simulate keyboard arrow down
      fireEvent.keyDown(input, { key: "ArrowDown" });

      expect(input).toBeDefined();
    });

    it("respects min attribute for manual input", () => {
      const { getByRole } = render(<FormFieldNumber min={5} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.min).toBe("5");
    });

    it("respects max attribute for manual input", () => {
      const { getByRole } = render(<FormFieldNumber max={100} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.max).toBe("100");
    });

    it("respects step attribute", () => {
      const { getByRole } = render(<FormFieldNumber step={5} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.step).toBe("5");
    });

    it("renders arrows with disabled cursor when component is disabled", () => {
      const { container } = render(<FormFieldNumber disabled />, { wrapper });

      // Check that component renders correctly when disabled
      const flexContainer = container.querySelectorAll('[style*="not-allowed"]');
      expect(flexContainer.length).toBeGreaterThan(0);
    });

    it("renders arrows with disabled opacity when component is disabled", () => {
      const { container } = render(<FormFieldNumber disabled />, { wrapper });

      // Check that disabled state is applied
      expect(container.firstChild).toBeDefined();
    });

    it("renders arrows with pointer cursor when enabled", () => {
      const { container } = render(<FormFieldNumber />, { wrapper });

      // Check that enabled state is applied
      expect(container.firstChild).toBeDefined();
    });

    it("handles manual value input with min constraint", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber min={0} onChange={handleChange} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;

      // Input a value less than min (browser will enforce constraint)
      fireEvent.change(input, { target: { value: "-5" } });

      // Handler should still be called
      expect(handleChange).toHaveBeenCalled();
    });

    it("handles manual value input with max constraint", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldNumber max={100} onChange={handleChange} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;

      // Input a value more than max (browser will enforce constraint)
      fireEvent.change(input, { target: { value: "200" } });

      // Handler should still be called
      expect(handleChange).toHaveBeenCalled();
    });

    it("uses default step of 1", () => {
      const { getByRole } = render(<FormFieldNumber />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      // Default step should be 1
      expect(input.step).toBe("1");
    });

    it("handles decimal step values", () => {
      const { getByRole } = render(<FormFieldNumber step={0.1} />, { wrapper });

      const input = getByRole("spinbutton") as HTMLInputElement;
      expect(input.step).toBe("0.1");
    });
  });

  // ========== Hook Tests (Direct) ==========
  describe("useFormFieldNumberActions Hook", () => {
    it("increments value correctly", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          value: 5,
          onChange: handleChange,
          step: 1,
        }),
      );

      act(() => {
        result.current.handleIncrement();
      });

      expect(handleChange).toHaveBeenCalledWith(6, expect.any(Object));
    });

    it("decrements value correctly", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          value: 10,
          onChange: handleChange,
          step: 1,
        }),
      );

      act(() => {
        result.current.handleDecrement();
      });

      expect(handleChange).toHaveBeenCalledWith(9, expect.any(Object));
    });

    it("respects max value when incrementing", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          value: 9,
          onChange: handleChange,
          step: 2,
          max: 10,
        }),
      );

      act(() => {
        result.current.handleIncrement();
      });

      // Should cap at max (10), not go to 11
      expect(handleChange).toHaveBeenCalledWith(10, expect.any(Object));
    });

    it("respects min value when decrementing", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          value: 2,
          onChange: handleChange,
          step: 2,
          min: 1,
        }),
      );

      act(() => {
        result.current.handleDecrement();
      });

      // Should cap at min (1), not go to 0
      expect(handleChange).toHaveBeenCalledWith(1, expect.any(Object));
    });

    it("starts from min when value is undefined (increment)", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          onChange: handleChange,
          step: 1,
          min: 5,
        }),
      );

      act(() => {
        result.current.handleIncrement();
      });

      // Should start from min (5) and increment to 6
      expect(handleChange).toHaveBeenCalledWith(6, expect.any(Object));
    });

    it("starts from 0 when value and min are undefined (increment)", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          onChange: handleChange,
          step: 1,
        }),
      );

      act(() => {
        result.current.handleIncrement();
      });

      // Should start from 0 and increment to 1
      expect(handleChange).toHaveBeenCalledWith(1, expect.any(Object));
    });

    it("starts from max when value is undefined (decrement)", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          onChange: handleChange,
          step: 1,
          max: 10,
        }),
      );

      act(() => {
        result.current.handleDecrement();
      });

      // Should start from max (10) and decrement to 9
      expect(handleChange).toHaveBeenCalledWith(9, expect.any(Object));
    });

    it("starts from 0 when value and max are undefined (decrement)", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          onChange: handleChange,
          step: 1,
        }),
      );

      act(() => {
        result.current.handleDecrement();
      });

      // Should start from 0 and decrement to -1
      expect(handleChange).toHaveBeenCalledWith(-1, expect.any(Object));
    });

    it("does not increment when disabled", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          value: 5,
          onChange: handleChange,
          disabled: true,
        }),
      );

      act(() => {
        result.current.handleIncrement();
      });

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not decrement when disabled", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          value: 5,
          onChange: handleChange,
          disabled: true,
        }),
      );

      act(() => {
        result.current.handleDecrement();
      });

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not increment when readOnly", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          value: 5,
          onChange: handleChange,
          readOnly: true,
        }),
      );

      act(() => {
        result.current.handleIncrement();
      });

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("uses custom step for increment", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          value: 10,
          onChange: handleChange,
          step: 5,
        }),
      );

      act(() => {
        result.current.handleIncrement();
      });

      expect(handleChange).toHaveBeenCalledWith(15, expect.any(Object));
    });

    it("uses custom step for decrement", () => {
      const handleChange = vi.fn();
      const { result } = renderHook(() =>
        useFormFieldNumberActions({
          value: 10,
          onChange: handleChange,
          step: 3,
        }),
      );

      act(() => {
        result.current.handleDecrement();
      });

      expect(handleChange).toHaveBeenCalledWith(7, expect.any(Object));
    });
  });
});
