export interface ChartDataPoint {
  day?: string;
  month?: string;
  sales?: number;
  spending?: number;
  selling?: number;
}

export interface ChartProps {
  title: string;
  data: ChartDataPoint[];
  dataKey: 'sales' | 'spending' | 'selling';
  xAxisKey: 'day' | 'month';
}

export interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}
