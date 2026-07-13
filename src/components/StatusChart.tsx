"use client";

import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

type StatusChartProps = {
  data: {
    status: string;
    count: number;
    fill: string;
  }[];
};

export function StatusChart({ data }: StatusChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="status"
          innerRadius={55}
          outerRadius={90}
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
