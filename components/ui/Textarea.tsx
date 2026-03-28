"use client";

import { forwardRef } from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = "", id, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-text">
            {label}
            {props.required && <span className="text-red ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={[
            "w-full px-3.5 py-2.5 rounded-lg border bg-background text-text placeholder:text-text2/60 resize-y",
            "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition",
            error ? "border-red" : "border-border",
            className,
          ].join(" ")}
          {...props}
        />
        {error && <p className="text-sm text-red">{error}</p>}
        {hint && !error && <p className="text-sm text-text2">{hint}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
