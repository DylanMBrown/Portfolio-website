import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "success"
    | "warning"
    | "error";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";

    const variants = {
      default: "bg-gray-900 text-white",
      secondary: "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white",
      outline:
        "border border-gray-300 text-gray-900 dark:border-gray-600 dark:text-white",
      success:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      warning:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";
