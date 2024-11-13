/**
 * @file Inventory dashboard component displaying inventory-related metrics
 */

import Card from './Card';
import { inventoryCards } from '@/data/dashboard';
import { ChartDailyReceiveSpending, ChartYearlyReceiveSpending } from './Chart';

/**
 * Inventory component displays inventory-specific dashboard metrics
 * @component
 * @returns {JSX.Element} A collection of inventory metric cards
 */
const Inventory = () => {
  return (
    <div className="space-y-5">
      <div className="flex gap-7 flex-wrap">
        {inventoryCards.map((card, index) => (
          <Card
            key={index}
            {...card}
          />
        ))}
      </div>
      <ChartYearlyReceiveSpending />
      <ChartDailyReceiveSpending />
    </div>
  );
};

export default Inventory;
