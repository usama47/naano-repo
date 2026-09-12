"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Campaign } from "@/lib/types";
import { formatCompact } from "@/lib/utils";

export function AttributionChart({ series }: { series: Campaign["timeseries"] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={series} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="impressionsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--brand)" stopOpacity={0.28} />
              <stop offset="100%" stopColor="var(--brand)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="week"
            tick={{ fontSize: 12, fill: "var(--muted)" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "var(--muted)" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value: number) => formatCompact(value)}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 14,
              border: "1px solid var(--border)",
              fontSize: 13,
            }}
            formatter={(value, name) => [Number(value ?? 0).toLocaleString(), name]}
          />
          <Legend
            wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
            iconType="circle"
            iconSize={8}
          />
          <Area
            type="monotone"
            dataKey="impressions"
            name="Impressions"
            stroke="var(--brand)"
            strokeWidth={2}
            fill="url(#impressionsFill)"
          />
          <Line
            type="monotone"
            dataKey="clicks"
            name="Qualified clicks"
            stroke="var(--ink)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="leads"
            name="Leads"
            stroke="var(--success)"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
