import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "success" | "warning" | "error" | "muted" | "accent";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  pulse?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-paper-dark text-ink",
  success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
  warning: "bg-amber-50 text-amber-800 border border-amber-200",
  error: "bg-red-50 text-red-800 border border-red-200",
  muted: "bg-transparent text-stone border border-stone-light",
  accent: "bg-terracotta text-paper",
};

export function Badge({ children, variant = "default", className, pulse }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
        variantClasses[variant],
        pulse && "animate-pulse-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
