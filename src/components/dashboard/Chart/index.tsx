import { BaseChart } from './BaseChart';
import { dailySalesData, yearlyReceiveSpendingData, dailyReceiveSpendingData, dailySellingData, yearlySellingData } from '@/data/chartData';

export const ChartGeneral = () => (
  <BaseChart
    title="Daily Selling Activity"
    data={dailySalesData}
    dataKey="sales"
    xAxisKey="day"
  />
);

export const ChartDailyReceiveSpending = () => (
  <BaseChart
    title="Daily Receive Spending"
    data={dailyReceiveSpendingData}
    dataKey="spending"
    xAxisKey="day"
  />
);

export const ChartYearlyReceiveSpending = () => (
  <BaseChart
    title="Yearly Receive Spending"
    data={yearlyReceiveSpendingData}
    dataKey="spending"
    xAxisKey="month"
  />
);

export const ChartDailySellingCashier = () => (
  <BaseChart
    title="Daily Selling Activity"
    data={dailySellingData}
    dataKey="selling"
    xAxisKey="day"
  />
);

export const ChartYearlySellingCashier = () => (
  <BaseChart
    title="Yearly Selling Activity"
    data={yearlySellingData}
    dataKey="selling"
    xAxisKey="month"
  />
);
