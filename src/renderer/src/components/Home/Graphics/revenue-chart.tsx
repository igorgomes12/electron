/* eslint-disable prettier/prettier */
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import colors from "tailwindcss/colors";

const data = [
  {
    data: "10/12",
    revenue: 1200,
  },
  {
    data: "11/12",
    revenue: 880,
  },
  {
    data: "12/12",
    revenue: 900,
  },
  {
    data: "13/12",
    revenue: 600,
  },
  {
    data: "14/12",
    revenue: 400,
  },
  {
    data: "15/12",
    revenue: 2300,
  },
  {
    data: "16/12",
    revenue: 700,
  },
];

export function RevenueChart() {
  return (
    <div className="sm:w-[20rem] md:w-[30rem] lg:w-[45rem] col-span-6">
      <div className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <div className="text-black">Receita diária no período</div>
        </div>
      </div>
      <div>
        <ResponsiveContainer width={"100%"} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey={"date"} tickLine={true} axisLine={true} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={true}
              tickLine={true}
              width={88}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <CartesianGrid vertical={true} className="stroke-muted" />

            <Line
              type={"linear"}
              strokeWidth={2}
              dataKey={"revenue"}
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
