import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  count?: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function FilterChip({ label, count, active = false, onClick, className }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-sm font-medium",
        "border transition-all duration-150 whitespace-nowrap select-none",
        "hover:border-stone active:scale-[0.97]",
        active
          ? "bg-ink text-paper border-ink"
          : "bg-paper text-ink border-stone-light",
        className
      )}
    >
      {count !== undefined && count > 0 ? (
        <>
          {label}
          <span
            className={cn(
              "text-xs font-semibold rounded-full px-1.5 py-0.5 leading-none",
              active ? "bg-paper/20 text-paper" : "bg-terracotta text-paper"
            )}
          >
            {count}
          </span>
        </>
      ) : (
        <>
          {label}
          <ChevronDown size={14} className="opacity-60" />
        </>
      )}
    </button>
  );
}
