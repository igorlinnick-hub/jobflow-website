"use client";

import { forwardRef } from "react";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, placeholder, className = "", id, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-text">
            {label}
            {props.required && <span className="text-red ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={[
            "w-full px-3.5 py-2.5 rounded-lg border bg-background text-text",
            "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition appearance-none",
            error ? "border-red" : "border-border",
            className,
          ].join(" ")}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-red">{error}</p>}
        {hint && !error && <p className="text-sm text-text2">{hint}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
