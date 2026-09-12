import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function Kpi({
  label,
  value,
  delta,
  hint,
}: {
  label: string;
  value: string;
  delta?: number;
  hint?: string;
}) {
  const positive = (delta ?? 0) >= 0;

  return (
    <Card className="p-5">
      <p className="text-sm text-muted">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="display text-2xl font-semibold tabular-nums">{value}</p>
        {delta !== undefined ? (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-xs font-medium",
              positive ? "text-success" : "text-warning",
            )}
          >
            {positive ? (
              <ArrowUpRight className="size-3.5" />
            ) : (
              <ArrowDownRight className="size-3.5" />
            )}
            {Math.abs(delta)}%
          </span>
        ) : null}
      </div>
      {hint ? <p className="mt-1.5 text-xs text-muted">{hint}</p> : null}
    </Card>
  );
}
