"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "S", Task: 1, mobile: 80 },
  { month: "M", Task: 2, mobile: 200 },
  { month: "T", Task: 2.5, mobile: 120 },
  { month: "W", Task: 2, mobile: 190 },
  { month: "T", Task: 1, mobile: 130 },
  { month: "F", Task: 4, mobile: 140 },
  { month: "S", Task: 0, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ActivityChart() {
  return (
    <Card className="bg-[#F5F5F7] rounded-[10px] w-[462px] h-[214px]">
      <CardHeader>
        <div className="flex justify-between w-full">
          {" "}
          <CardTitle className="text-[16px] font-semibold text-secondinary-500">
            Activity
          </CardTitle>
          <CardTitle className="text-[12px] font-medium text-secondinary-500">
            This Week
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="bg-[#ffffff] rounded-[10px] w-[422px] h-[130px] "
          config={chartConfig}
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 24,
              right: 24,
              top: 24,
            }}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              className="text-[12px] text-secondinary-500 font-bold "
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              className="text-[12px] text-secondinary-500 font-bold "
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="Task"
              type="natural"
              stroke="#141522"
              strokeWidth={3}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
