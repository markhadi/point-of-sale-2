import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ChartConfig, ChartProps } from '@/types/chart';

const chartConfig: ChartConfig = {
  sales: {
    label: 'Sales',
    color: '#5E77FF',
  },
  spending: {
    label: 'Spending',
    color: '#FF7878',
  },
  selling: {
    label: 'Selling',
    color: '#4AD991',
  },
};

export const BaseChart = ({ title, data, dataKey, xAxisKey }: ChartProps) => {
  return (
    <Card className="max-h-[444px] h-full shadow-md rounded-[16px]">
      <CardHeader className="pb-6 pt-6 sm:pb-16 sm:pt-9 ">
        <CardTitle className="font-nunito font-bold text-[18px] sm:text-[24px] leading-[20px] text-[#202224] tracking-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 md:pr-12 md:pl-3">
        <ChartContainer
          className="max-h-[200px] w-full"
          config={chartConfig}
        >
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              dataKey={dataKey}
              axisLine={false}
              tickLine={false}
              tickMargin={8}
            />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey={dataKey}
              type="linear"
              fill={`var(--color-${dataKey})`}
              fillOpacity={0.4}
              stroke={`var(--color-${dataKey})`}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
