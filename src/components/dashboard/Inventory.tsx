/**
 * @file Inventory dashboard component displaying inventory-related metrics
 */

import Card from './Card';
import { inventoryCards } from '@/data/dashboard';

/**
 * Inventory component displays inventory-specific dashboard metrics
 * @component
 * @returns {JSX.Element} A collection of inventory metric cards
 */
const Inventory = () => {
  return (
    <div className="flex gap-7 flex-wrap">
      {inventoryCards.map((card, index) => (
        <Card
          key={index}
          {...card}
        />
      ))}
    </div>
  );
};

export default Inventory;
