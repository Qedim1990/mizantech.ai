"use client";

import { forwardRef, useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FieldWrapperProps {
  label: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  hint?: string;
}

const fieldBaseStyles = (hasError: boolean, hasSuccess: boolean) =>
  cn(
    "w-full rounded border bg-white px-4 py-3 text-navy-900 placeholder:text-neutral-400",
    "transition-colors duration-150",
    "focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500",
    hasError && "border-error focus:border-error focus:ring-error/20",
    hasSuccess && "border-success",
    !hasError && !hasSuccess && "border-neutral-300 hover:border-neutral-400"
  );

type InputProps = FieldWrapperProps & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, required, hint, id, className, ...props }, ref) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const hintId = `${fieldId}-hint`;
    const errorId = `${fieldId}-error`;

    return (
      <div className="space-y-1.5">
        <label htmlFor={fieldId} className="block text-sm font-medium text-navy-900">
          {label}
          {required && <span className="text-error"> *</span>}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={fieldId}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : hint ? hintId : undefined}
            className={cn(fieldBaseStyles(!!error, !!success), className)}
            {...props}
          />
          {success && !error && (
            <Check
              className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-success"
              aria-hidden="true"
            />
          )}
        </div>
        {hint && !error && (
          <p id={hintId} className="text-xs text-neutral-600">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} role="alert" className="flex items-center gap-1 text-xs text-error">
            <AlertCircle className="size-3.5" aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

type TextareaProps = FieldWrapperProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, success, required, hint, id, className, rows = 5, ...props }, ref) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const hintId = `${fieldId}-hint`;
    const errorId = `${fieldId}-error`;

    return (
      <div className="space-y-1.5">
        <label htmlFor={fieldId} className="block text-sm font-medium text-navy-900">
          {label}
          {required && <span className="text-error"> *</span>}
        </label>
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={cn(fieldBaseStyles(!!error, !!success), "resize-y", className)}
          {...props}
        />
        {hint && !error && (
          <p id={hintId} className="text-xs text-neutral-600">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} role="alert" className="flex items-center gap-1 text-xs text-error">
            <AlertCircle className="size-3.5" aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
