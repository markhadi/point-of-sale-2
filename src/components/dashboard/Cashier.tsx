/**
 * @file Cashier dashboard component displaying cashier-related metrics
 */

import Card from './Card';
import { cashierCards } from '@/data/dashboard';
import { ChartDailySellingCashier, ChartYearlySellingCashier } from './Chart';

/**
 * Cashier component displays cashier-specific dashboard metrics
 * @component
 * @returns {JSX.Element} A collection of cashier metric cards
 */
const Cashier = () => {
  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex gap-4 sm:gap-7 flex-wrap">
        {cashierCards.map((card, index) => (
          <Card
            key={index}
            {...card}
          />
        ))}
      </div>
      <ChartYearlySellingCashier />
      <ChartDailySellingCashier />
    </div>
  );
};

export default Cashier;
