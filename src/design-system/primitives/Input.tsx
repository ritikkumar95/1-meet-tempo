import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string;
  hint?: string;
  error?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, prefix, suffix, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-ink">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {prefix && (
            <span className="absolute left-3 text-stone pointer-events-none">
              {prefix}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full h-11 bg-paper border border-stone-light rounded-xl px-4 py-2",
              "text-sm text-ink placeholder:text-stone",
              "transition-all duration-150",
              "hover:border-stone focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              prefix && "pl-10",
              suffix && "pr-10",
              error && "border-red-400 focus:border-red-500 focus:ring-red-200",
              className
            )}
            {...props}
          />
          {suffix && (
            <span className="absolute right-3 text-stone pointer-events-none">
              {suffix}
            </span>
          )}
        </div>
        {hint && !error && (
          <p className="text-xs text-stone">{hint}</p>
        )}
        {error && (
          <p className="text-xs text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
