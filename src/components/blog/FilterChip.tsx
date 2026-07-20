import { X } from "lucide-react";
import { theme } from "@/styles/blog-theme";

export function FilterChip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <button onClick={onClear} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: theme.lightMaroon, color: theme.primary }}>
      {label}
      <X className="h-3 w-3" />
    </button>
  );
}

export default FilterChip;
