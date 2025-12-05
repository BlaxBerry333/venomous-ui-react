import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import FormFieldSwitch from "./FormFieldSwitch.component";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("FormFieldSwitch", () => {
  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders checkbox input element", () => {
      const { getByRole } = render(<FormFieldSwitch />, { wrapper });

      const input = getByRole("checkbox");
      expect(input).toBeDefined();
    });

    it("renders with type='checkbox'", () => {
      const { getByRole } = render(<FormFieldSwitch />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.type).toBe("checkbox");
    });

    it("renders unchecked by default", () => {
      const { getByRole } = render(<FormFieldSwitch />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.checked).toBe(false);
    });

    it("renders switch track element", () => {
      const { container } = render(<FormFieldSwitch />, { wrapper });

      const switchTrack = container.querySelector('[class*="FormField.Switch"]');
      expect(switchTrack).toBeDefined();
    });
  });

  // ========== Props Tests ==========
  describe("Props", () => {
    it("accepts checked prop (controlled)", () => {
      const { getByRole } = render(<FormFieldSwitch checked={true} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.checked).toBe(true);
    });

    it("accepts defaultChecked prop (uncontrolled)", () => {
      const { getByRole } = render(<FormFieldSwitch defaultChecked={true} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.checked).toBe(true);
    });

    it("accepts disabled prop", () => {
      const { getByRole } = render(<FormFieldSwitch disabled={true} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.disabled).toBe(true);
    });

    it("accepts name prop", () => {
      const { getByRole } = render(<FormFieldSwitch name="notifications" />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.name).toBe("notifications");
    });

    it("accepts custom className on track", () => {
      const { container } = render(<FormFieldSwitch className="custom-switch" />, { wrapper });

      const switchTrack = container.querySelector(".custom-switch");
      expect(switchTrack).toBeDefined();
    });

    it("accepts custom style on track", () => {
      const { container } = render(<FormFieldSwitch style={{ margin: 10 }} />, { wrapper });

      const switchTrack = container.querySelector('[class*="FormField.Switch"]') as HTMLElement;
      expect(switchTrack.style.margin).toBe("10px");
    });
  });

  // ========== Controlled/Uncontrolled Tests ==========
  describe("Controlled/Uncontrolled", () => {
    it("works as uncontrolled component (no checked prop)", () => {
      const { getByRole } = render(<FormFieldSwitch defaultChecked={false} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.checked).toBe(false);

      fireEvent.click(input);
      expect(input.checked).toBe(true);
    });

    it("works as controlled component (with checked prop)", () => {
      const { getByRole } = render(<FormFieldSwitch checked={false} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.checked).toBe(false);
    });

    it("calls onChange when clicked", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldSwitch onChange={handleChange} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      fireEvent.click(input);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it("calls onChange with false when unchecking", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldSwitch defaultChecked={true} onChange={handleChange} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      fireEvent.click(input);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(false, expect.any(Object));
    });

    it("does not call onChange when disabled", () => {
      const handleChange = vi.fn();
      const { getByRole } = render(<FormFieldSwitch disabled={true} onChange={handleChange} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      fireEvent.click(input);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // ========== Click on Track Tests ==========
  describe("Click on Track", () => {
    it("toggles state when clicking on track", () => {
      const handleChange = vi.fn();
      const { container } = render(<FormFieldSwitch onChange={handleChange} />, { wrapper });

      const switchTrack = container.querySelector('[class*="FormField.Switch"]') as HTMLElement;
      fireEvent.click(switchTrack);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("does not toggle when clicking track while disabled", () => {
      const handleChange = vi.fn();
      const { container } = render(<FormFieldSwitch disabled={true} onChange={handleChange} />, { wrapper });

      const switchTrack = container.querySelector('[class*="FormField.Switch"]') as HTMLElement;
      fireEvent.click(switchTrack);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // ========== Focus/Blur Events Tests ==========
  describe("Focus/Blur Events", () => {
    it("handles focus event", () => {
      const handleFocus = vi.fn();
      const { getByRole } = render(<FormFieldSwitch onFocus={handleFocus} />, { wrapper });

      const input = getByRole("checkbox");
      fireEvent.focus(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("handles blur event", () => {
      const handleBlur = vi.fn();
      const { getByRole } = render(<FormFieldSwitch onBlur={handleBlur} />, { wrapper });

      const input = getByRole("checkbox");
      fireEvent.blur(input);

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  // ========== State Combinations Tests ==========
  describe("State Combinations", () => {
    it("renders checked and disabled together", () => {
      const { getByRole } = render(<FormFieldSwitch checked={true} disabled={true} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.checked).toBe(true);
      expect(input.disabled).toBe(true);
    });

    it("renders unchecked and disabled together", () => {
      const { getByRole } = render(<FormFieldSwitch checked={false} disabled={true} />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.checked).toBe(false);
      expect(input.disabled).toBe(true);
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("displays correct displayName", () => {
      expect(FormFieldSwitch.displayName).toBe(COMPONENT_DISPLAY_NAMES.FormFieldSwitch);
    });

    it("renders component without errors", () => {
      const { container } = render(<FormFieldSwitch />, { wrapper });

      expect(container).toBeDefined();
    });

    it("forwards ref correctly", () => {
      const ref = vi.fn();
      render(<FormFieldSwitch ref={ref} />, { wrapper });

      expect(ref).toHaveBeenCalled();
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
    });

    it("accepts native input attributes", () => {
      const { getByRole } = render(<FormFieldSwitch id="my-switch" aria-label="Toggle notifications" />, { wrapper });

      const input = getByRole("checkbox") as HTMLInputElement;
      expect(input.id).toBe("my-switch");
      expect(input.getAttribute("aria-label")).toBe("Toggle notifications");
    });
  });
});
