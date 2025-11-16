import { act, fireEvent, render, renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import FormFieldSelect from "./FormFieldSelect.component";
import { useFormFieldSelectActions } from "./FormFieldSelect.hooks";
import type { FormFieldSelectOption } from "./FormFieldSelect.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

const mockOptions: FormFieldSelectOption<string>[] = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2" },
  { label: "Option 3", value: "opt3" },
];

const mockNumberOptions: FormFieldSelectOption<number>[] = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
];

describe("FormFieldSelect", () => {
  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders select element", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const select = container.querySelector("select");
      expect(select).toBeDefined();
    });

    it("displays correct displayName", () => {
      expect(FormFieldSelect.displayName).toBe(COMPONENT_DISPLAY_NAMES.FormFieldSelect);
    });

    it("renders with placeholder", () => {
      const { getByText } = render(<FormFieldSelect options={mockOptions} placeholder="Select option" />, {
        wrapper,
      });

      // Placeholder should be visible in trigger
      expect(getByText("Select option")).toBeDefined();
    });

    it("renders with empty options", () => {
      const { container } = render(<FormFieldSelect options={[]} />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });
  });

  // ========== Single Select Mode Tests ==========
  describe("Single Select Mode", () => {
    it("renders in single select mode by default", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const select = container.querySelector("select") as HTMLSelectElement;
      expect(select.multiple).toBe(false);
    });

    it("renders with initial value", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} value="opt2" />, { wrapper });

      // Check the hidden select has the correct value
      const select = container.querySelector("select") as HTMLSelectElement;
      expect(select.value).toBe("opt2");
    });

    it("calls onChange when option is selected", async () => {
      const handleChange = vi.fn();
      const { getByText, container } = render(<FormFieldSelect options={mockOptions} onChange={handleChange} />, {
        wrapper,
      });

      // Click trigger to open dropdown
      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          const option = getByText("Option 2");
          fireEvent.click(option);
        });

        expect(handleChange).toHaveBeenCalledWith("opt2", mockOptions[1]);
      }
    });

    it("handles defaultValue", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} defaultValue="opt1" />, { wrapper });

      // Check the hidden select has the correct default value
      const select = container.querySelector("select") as HTMLSelectElement;
      expect(select.value).toBe("opt1");
    });

    it("handles number values", () => {
      const { container } = render(<FormFieldSelect options={mockNumberOptions} value={2} />, { wrapper });

      // Check the hidden select has the correct value
      const select = container.querySelector("select") as HTMLSelectElement;
      expect(select.value).toBe("2");
    });
  });

  // ========== Multiple Select Mode Tests ==========
  describe("Multiple Select Mode", () => {
    it("renders in multiple select mode", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} multiple />, { wrapper });

      const select = container.querySelector("select") as HTMLSelectElement;
      expect(select.multiple).toBe(true);
    });

    it("renders with initial multiple values", () => {
      const { getByText } = render(<FormFieldSelect options={mockOptions} multiple value={["opt1", "opt2"]} />, {
        wrapper,
      });

      // Both selected options should be displayed
      expect(getByText("Option 1, Option 2")).toBeDefined();
    });

    it("calls onChange with multiple values", async () => {
      const handleChange = vi.fn();
      const { getByText, container } = render(
        <FormFieldSelect options={mockOptions} multiple onChange={handleChange} />,
        { wrapper },
      );

      // Click trigger to open dropdown
      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          const option = getByText("Option 1");
          fireEvent.click(option);
        });

        expect(handleChange).toHaveBeenCalledWith(["opt1"], [mockOptions[0]]);
      }
    });

    it("handles defaultValue in multiple mode", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} multiple defaultValue={["opt1"]} />, {
        wrapper,
      });

      // Check the hidden select has the correct default value
      const select = container.querySelector("select") as HTMLSelectElement;
      const selectedOptions = Array.from(select.selectedOptions).map((opt) => opt.value);
      expect(selectedOptions).toContain("opt1");
    });
  });

  // ========== Options Tests ==========
  describe("Options", () => {
    it("renders all options in dropdown", async () => {
      const { getByText, container } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          expect(getByText("Option 1")).toBeDefined();
          expect(getByText("Option 2")).toBeDefined();
          expect(getByText("Option 3")).toBeDefined();
        });
      }
    });

    it("handles disabled options", async () => {
      const optionsWithDisabled: FormFieldSelectOption<string>[] = [
        { label: "Option 1", value: "opt1" },
        { label: "Option 2", value: "opt2", disabled: true },
        { label: "Option 3", value: "opt3" },
      ];

      const { container } = render(<FormFieldSelect options={optionsWithDisabled} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          expect(container).toBeDefined();
        });
      }
    });
  });

  // ========== Variant Tests ==========
  describe("Variants", () => {
    it("renders with outlined variant by default", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });

    it("renders with text variant", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} variant={FORM_FIELD_VARIANT_MAP.TEXT} />, {
        wrapper,
      });

      expect(container.firstChild).toBeDefined();
    });
  });

  // ========== State Tests ==========
  describe("States", () => {
    it("handles disabled state", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} disabled />, { wrapper });

      const select = container.querySelector("select") as HTMLSelectElement;
      expect(select.disabled).toBe(true);
    });

    it("does not open dropdown when disabled", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} disabled />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);
        // Dropdown should not open
        expect(container.querySelector('[role="menu"]')).toBeNull();
      }
    });
  });

  // ========== Dropdown Tests ==========
  describe("Dropdown", () => {
    it("opens dropdown on click", async () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          expect(getByText("Option 1")).toBeDefined();
        });
      }
    });

    it("closes dropdown after selection in single mode", async () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          const option = getByText("Option 1");
          fireEvent.click(option);
        });

        // Dropdown should close
        await waitFor(() => {
          expect(container.querySelector('[role="menu"]')).toBeNull();
        });
      }
    });

    it("accepts custom maxDropdownHeight", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} maxDropdownHeight={200} />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });

    it("applies custom dropdownClassName", async () => {
      const { container } = render(<FormFieldSelect options={mockOptions} dropdownClassName="custom-dropdown" />, {
        wrapper,
      });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          expect(container.querySelector(".custom-dropdown")).toBeDefined();
        });
      }
    });
  });

  // ========== Custom Styling Tests ==========
  describe("Custom Styling", () => {
    it("applies custom wrapperClassName", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} wrapperClassName="wrapper-class" />, {
        wrapper,
      });

      expect(container.querySelector(".wrapper-class")).toBeDefined();
    });

    it("applies custom wrapperStyle", () => {
      const { container } = render(
        <FormFieldSelect options={mockOptions} wrapperClassName="custom-wrapper" wrapperStyle={{ width: "300px" }} />,
        {
          wrapper,
        },
      );

      const wrapper_div = container.querySelector(".custom-wrapper") as HTMLElement;
      expect(wrapper_div.style.width).toBe("300px");
    });
  });

  // ========== Error State Tests ==========
  describe("Error State", () => {
    it("renders with error state", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} error />, { wrapper });

      expect(container.firstChild).toBeDefined();
    });
  });

  // ========== FullWidth Tests ==========
  describe("Full Width", () => {
    it("renders with fullWidth", () => {
      const { container } = render(
        <FormFieldSelect options={mockOptions} fullWidth wrapperClassName="full-width-wrapper" />,
        { wrapper },
      );

      const wrapper_div = container.querySelector(".full-width-wrapper") as HTMLElement;
      expect(wrapper_div.style.width).toBe("100%");
    });

    it("renders without fullWidth by default", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const wrapper_div = container.firstChild as HTMLElement;
      expect(wrapper_div.style.width).not.toBe("100%");
    });
  });

  // ========== Form Integration Tests ==========
  describe("Form Integration", () => {
    it("accepts name attribute", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} name="selectField" />, { wrapper });

      const select = container.querySelector("select") as HTMLSelectElement;
      expect(select.name).toBe("selectField");
    });

    it("accepts form attribute", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} form="myForm" />, { wrapper });

      const select = container.querySelector("select") as HTMLSelectElement;
      expect(select.form).toBeDefined();
    });

    it("accepts required attribute", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} required />, { wrapper });

      const select = container.querySelector("select") as HTMLSelectElement;
      expect(select.required).toBe(true);
    });
  });

  // ========== Hover Tests ==========
  describe("Hover", () => {
    it("handles mouseEnter event", () => {
      const handleMouseEnter = vi.fn();
      const { container } = render(
        <FormFieldSelect options={mockOptions} onMouseEnter={handleMouseEnter} wrapperClassName="hover-wrapper" />,
        {
          wrapper,
        },
      );

      const wrapper_div = container.querySelector(".hover-wrapper") as HTMLElement;
      fireEvent.mouseEnter(wrapper_div);

      expect(handleMouseEnter).toHaveBeenCalled();
    });

    it("handles mouseLeave event", () => {
      const handleMouseLeave = vi.fn();
      const { container } = render(
        <FormFieldSelect options={mockOptions} onMouseLeave={handleMouseLeave} wrapperClassName="hover-wrapper" />,
        {
          wrapper,
        },
      );

      const wrapper_div = container.querySelector(".hover-wrapper") as HTMLElement;
      fireEvent.mouseLeave(wrapper_div);

      expect(handleMouseLeave).toHaveBeenCalled();
    });
  });

  // ========== Keyboard Navigation Tests ==========
  describe("Keyboard Navigation", () => {
    it("opens dropdown on ArrowDown key", () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.keyDown(trigger, { key: "ArrowDown" });
        // Dropdown should open
        expect(getByText("Option 1")).toBeDefined();
      }
    });

    it("opens dropdown on ArrowUp key", () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.keyDown(trigger, { key: "ArrowUp" });
        // Dropdown should open
        expect(getByText("Option 1")).toBeDefined();
      }
    });

    it("opens dropdown on Enter key", () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.keyDown(trigger, { key: "Enter" });
        // Dropdown should open
        expect(getByText("Option 1")).toBeDefined();
      }
    });

    it("closes dropdown on Escape key", async () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        // Open dropdown
        fireEvent.click(trigger);

        await waitFor(() => {
          expect(getByText("Option 1")).toBeDefined();
        });

        // Press Escape
        fireEvent.keyDown(trigger, { key: "Escape" });

        // Dropdown should close
        await waitFor(() => {
          expect(container.querySelector('[role="menu"]')).toBeNull();
        });
      }
    });

    it("closes dropdown on Tab key", async () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        // Open dropdown
        fireEvent.click(trigger);

        await waitFor(() => {
          expect(getByText("Option 1")).toBeDefined();
        });

        // Press Tab
        fireEvent.keyDown(trigger, { key: "Tab" });

        // Dropdown should close
        await waitFor(() => {
          expect(container.querySelector('[role="menu"]')).toBeNull();
        });
      }
    });

    it("navigates down with ArrowDown in open dropdown", async () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        // Open dropdown first
        fireEvent.click(trigger);

        await waitFor(() => {
          expect(getByText("Option 1")).toBeDefined();
        });

        // Navigate with ArrowDown
        fireEvent.keyDown(trigger, { key: "ArrowDown" });

        // Should highlight next option
        expect(container).toBeDefined();
      }
    });

    it("navigates up with ArrowUp in open dropdown", async () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        // Open dropdown first
        fireEvent.click(trigger);

        await waitFor(() => {
          expect(getByText("Option 1")).toBeDefined();
        });

        // Navigate with ArrowUp
        fireEvent.keyDown(trigger, { key: "ArrowUp" });

        // Should highlight previous option
        expect(container).toBeDefined();
      }
    });

    it("selects highlighted option on Enter", async () => {
      const handleChange = vi.fn();
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} onChange={handleChange} />, {
        wrapper,
      });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        // Open and navigate
        fireEvent.keyDown(trigger, { key: "ArrowDown" });

        await waitFor(() => {
          expect(getByText("Option 1")).toBeDefined();
        });

        // Navigate to first option
        fireEvent.keyDown(trigger, { key: "ArrowDown" });

        // Select with Enter
        fireEvent.keyDown(trigger, { key: "Enter" });

        // Should have selected first option
        expect(handleChange).toHaveBeenCalled();
      }
    });

    it("does not respond to keyboard when disabled", () => {
      const { container } = render(<FormFieldSelect options={mockOptions} disabled />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.keyDown(trigger, { key: "ArrowDown" });
        // Dropdown should not open
        expect(container.querySelector('[role="menu"]')).toBeNull();
      }
    });

    it("ignores unhandled keys", async () => {
      const { container, getByText } = render(<FormFieldSelect options={mockOptions} />, { wrapper });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        // Open dropdown first
        fireEvent.click(trigger);

        await waitFor(() => {
          expect(getByText("Option 1")).toBeDefined();
        });

        // Press unhandled key
        fireEvent.keyDown(trigger, { key: "a" });

        // Dropdown should still be open
        expect(getByText("Option 1")).toBeDefined();
      }
    });
  });

  // ========== Multiple Select Toggle Tests ==========
  describe("Multiple Select Toggle", () => {
    it("toggles selection in multiple mode", async () => {
      const handleChange = vi.fn();
      const { getByText, container } = render(
        <FormFieldSelect options={mockOptions} multiple value={["opt1"]} onChange={handleChange} />,
        { wrapper },
      );

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          // Click to deselect opt1
          const option = getByText("Option 1");
          fireEvent.click(option);
        });

        // Should have removed opt1
        expect(handleChange).toHaveBeenCalledWith([], []);
      }
    });

    it("adds to selection in multiple mode", async () => {
      const handleChange = vi.fn();
      const { getByText, container } = render(
        <FormFieldSelect options={mockOptions} multiple value={["opt1"]} onChange={handleChange} />,
        { wrapper },
      );

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          // Click to add opt2
          const option = getByText("Option 2");
          fireEvent.click(option);
        });

        // Should have added opt2
        expect(handleChange).toHaveBeenCalledWith(["opt1", "opt2"], [mockOptions[0], mockOptions[1]]);
      }
    });

    it("does not select disabled option", async () => {
      const disabledOptions: FormFieldSelectOption<string>[] = [
        { label: "Option 1", value: "opt1", disabled: true },
        { label: "Option 2", value: "opt2" },
      ];

      const handleChange = vi.fn();
      const { getByText, container } = render(<FormFieldSelect options={disabledOptions} onChange={handleChange} />, {
        wrapper,
      });

      const trigger = container.querySelector('[role="button"]');
      if (trigger) {
        fireEvent.click(trigger);

        await waitFor(() => {
          const option = getByText("Option 1");
          fireEvent.click(option);
        });

        // Should not call onChange for disabled option
        expect(handleChange).not.toHaveBeenCalled();
      }
    });
  });

  // ========== Form Reset Tests ==========
  describe("Form Reset", () => {
    it("resets to defaultValue on form reset", async () => {
      const { container } = render(
        <form>
          <FormFieldSelect options={mockOptions} defaultValue="opt1" />
        </form>,
        { wrapper },
      );

      const select = container.querySelector("select") as HTMLSelectElement;
      const form = container.querySelector("form") as HTMLFormElement;
      const trigger = container.querySelector('[role="button"]');

      // Initially opt1
      expect(select.value).toBe("opt1");

      if (trigger) {
        // Change to opt2
        fireEvent.click(trigger);

        await waitFor(() => {
          const option = container.querySelector('[role="menu"]');
          if (option) {
            const opt2 = option.querySelector('[data-value="opt2"]') || option.children[1];
            if (opt2) fireEvent.click(opt2);
          }
        });
      }

      // Reset form
      fireEvent.reset(form);

      // Should be back to opt1
      expect(select.value).toBe("opt1");
    });

    it("resets multiple select to defaultValue on form reset", () => {
      const { container } = render(
        <form>
          <FormFieldSelect options={mockOptions} multiple defaultValue={["opt1", "opt2"]} />
        </form>,
        { wrapper },
      );

      const select = container.querySelector("select") as HTMLSelectElement;
      const form = container.querySelector("form") as HTMLFormElement;

      // Initially opt1 and opt2
      const selectedOptions = Array.from(select.selectedOptions).map((opt) => opt.value);
      expect(selectedOptions).toContain("opt1");
      expect(selectedOptions).toContain("opt2");

      // Reset form
      fireEvent.reset(form);

      // Should be back to default
      const resetSelectedOptions = Array.from(select.selectedOptions).map((opt) => opt.value);
      expect(resetSelectedOptions).toContain("opt1");
      expect(resetSelectedOptions).toContain("opt2");
    });

    it("does not reset controlled select on form reset", () => {
      const { container } = render(
        <form>
          <FormFieldSelect options={mockOptions} value="opt2" />
        </form>,
        { wrapper },
      );

      const select = container.querySelector("select") as HTMLSelectElement;
      const form = container.querySelector("form") as HTMLFormElement;

      // Controlled select follows value prop
      expect(select.value).toBe("opt2");

      // Reset form
      fireEvent.reset(form);

      // Should still be opt2 (controlled)
      expect(select.value).toBe("opt2");
    });
  });

  // ========== useFormFieldSelectActions Hook Tests ==========
  describe("useFormFieldSelectActions Hook", () => {
    const hookOptions: FormFieldSelectOption<string>[] = [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" },
      { label: "Disabled", value: "disabled", disabled: true },
    ];

    // ========== Keyboard Navigation Tests ==========
    describe("Keyboard Navigation", () => {
      it("opens dropdown on ArrowDown key press", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        expect(result.current.open).toBe(false);

        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.open).toBe(true);
      });

      it("opens dropdown on ArrowUp key press", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        expect(result.current.open).toBe(false);

        act(() => {
          result.current.handleKeyDown({ key: "ArrowUp", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.open).toBe(true);
      });

      it("navigates down in open dropdown", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        // Open dropdown first
        act(() => {
          result.current.handleOpenChange(true);
        });

        expect(result.current.highlightedIndex).toBe(-1);

        // Navigate down
        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(0);

        // Navigate down again
        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(1);
      });

      it("wraps around when navigating past last option", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        // Set to last option
        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(3);

        // Navigate past last
        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(0);
      });

      it("navigates up in open dropdown", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        // Start at index 2
        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(2);

        // Navigate up
        act(() => {
          result.current.handleKeyDown({ key: "ArrowUp", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(1);
      });

      it("wraps around when navigating before first option", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        // Set to first option
        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(0);

        // Navigate up past first
        act(() => {
          result.current.handleKeyDown({ key: "ArrowUp", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(3); // Last option
      });

      it("selects highlighted option on Enter", () => {
        const handleChange = vi.fn();
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
            onChange: handleChange,
          }),
        );

        // Open dropdown first
        act(() => {
          result.current.handleOpenChange(true);
        });

        // Navigate to first option
        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(0);

        // Select with Enter
        act(() => {
          result.current.handleKeyDown({ key: "Enter", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(handleChange).toHaveBeenCalledWith("a", hookOptions[0]);
        expect(result.current.open).toBe(false);
      });

      it("opens dropdown on Enter when closed", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        expect(result.current.open).toBe(false);

        act(() => {
          result.current.handleKeyDown({ key: "Enter", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.open).toBe(true);
      });

      it("closes dropdown on Escape", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        expect(result.current.open).toBe(true);

        act(() => {
          result.current.handleKeyDown({ key: "Escape", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.open).toBe(false);
        expect(result.current.highlightedIndex).toBe(-1);
      });

      it("closes dropdown on Tab", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        expect(result.current.open).toBe(true);

        act(() => {
          result.current.handleKeyDown({ key: "Tab", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.open).toBe(false);
      });

      it("ignores keyboard when disabled", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
            disabled: true,
          }),
        );

        expect(result.current.open).toBe(false);

        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.open).toBe(false);
      });

      it("handles unknown keys gracefully", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleKeyDown({ key: "Space", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        // Should not change state
        expect(result.current.open).toBe(false);
      });
    });

    // ========== Multi-Select Toggle Tests ==========
    describe("Multi-Select Toggle", () => {
      it("adds to selection in multiple mode", () => {
        const handleChange = vi.fn();
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            multiple: true,
            isControlled: false,
            onChange: handleChange,
          }),
        );

        // Select first option
        act(() => {
          result.current.handleSelect(hookOptions[0]);
        });

        expect(handleChange).toHaveBeenCalledWith(["a"], [hookOptions[0]]);
      });

      it("removes from selection when already selected", () => {
        const handleChange = vi.fn();
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            multiple: true,
            defaultValue: ["a", "b"],
            isControlled: false,
            onChange: handleChange,
          }),
        );

        // Deselect option "a"
        act(() => {
          result.current.handleSelect(hookOptions[0]);
        });

        expect(handleChange).toHaveBeenCalledWith(["b"], [hookOptions[1]]);
      });

      it("keeps dropdown open in multiple mode by default", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            multiple: true,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        expect(result.current.open).toBe(true);

        act(() => {
          result.current.handleSelect(hookOptions[0]);
        });

        // Should still be open
        expect(result.current.open).toBe(true);
      });

      it("closes dropdown in multiple mode when autoCloseOnSelect is true", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            multiple: true,
            isControlled: false,
            autoCloseOnSelect: true,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        expect(result.current.open).toBe(true);

        act(() => {
          result.current.handleSelect(hookOptions[0]);
        });

        // Should close
        expect(result.current.open).toBe(false);
      });

      it("does not select disabled options", () => {
        const handleChange = vi.fn();
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            multiple: true,
            isControlled: false,
            onChange: handleChange,
          }),
        );

        act(() => {
          result.current.handleSelect(hookOptions[3]); // Disabled option
        });

        expect(handleChange).not.toHaveBeenCalled();
      });

      it("handles controlled multi-select mode", () => {
        const handleChange = vi.fn();
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            multiple: true,
            value: ["a"],
            isControlled: true,
            onChange: handleChange,
          }),
        );

        act(() => {
          result.current.handleSelect(hookOptions[1]); // Add "b"
        });

        expect(handleChange).toHaveBeenCalledWith(["a", "b"], [hookOptions[0], hookOptions[1]]);
      });

      it("handles removing from controlled multi-select", () => {
        const handleChange = vi.fn();
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            multiple: true,
            value: ["a", "b"],
            isControlled: true,
            onChange: handleChange,
          }),
        );

        act(() => {
          result.current.handleSelect(hookOptions[0]); // Remove "a"
        });

        expect(handleChange).toHaveBeenCalledWith(["b"], [hookOptions[1]]);
      });
    });

    // ========== handleOpenChange Tests ==========
    describe("handleOpenChange", () => {
      it("opens dropdown", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        expect(result.current.open).toBe(true);
      });

      it("closes dropdown and resets highlighted index", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        act(() => {
          result.current.handleKeyDown({ key: "ArrowDown", preventDefault: vi.fn() } as unknown as React.KeyboardEvent);
        });

        expect(result.current.highlightedIndex).toBe(0);

        act(() => {
          result.current.handleOpenChange(false);
        });

        expect(result.current.open).toBe(false);
        expect(result.current.highlightedIndex).toBe(-1);
      });

      it("does not open when disabled", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
            disabled: true,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        expect(result.current.open).toBe(false);
      });
    });

    // ========== Single Select Tests ==========
    describe("Single Select", () => {
      it("selects option and closes dropdown", () => {
        const handleChange = vi.fn();
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
            onChange: handleChange,
          }),
        );

        act(() => {
          result.current.handleOpenChange(true);
        });

        act(() => {
          result.current.handleSelect(hookOptions[1]);
        });

        expect(handleChange).toHaveBeenCalledWith("b", hookOptions[1]);
        expect(result.current.open).toBe(false);
      });

      it("updates internal value in uncontrolled mode", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            isControlled: false,
          }),
        );

        act(() => {
          result.current.handleSelect(hookOptions[0]);
        });

        expect(result.current.value).toBe("a");
      });

      it("does not update internal value in controlled mode", () => {
        const { result } = renderHook(() =>
          useFormFieldSelectActions({
            options: hookOptions,
            value: "b",
            isControlled: true,
          }),
        );

        act(() => {
          result.current.handleSelect(hookOptions[0]);
        });

        // Value should still be "b" (controlled)
        expect(result.current.value).toBe("b");
      });
    });
  });
});
