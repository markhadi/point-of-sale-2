/**
 * @file Cashier dashboard component displaying cashier-related metrics
 */

import Card from './Card';
import { cashierCards } from '@/data/dashboard';

/**
 * Cashier component displays cashier-specific dashboard metrics
 * @component
 * @returns {JSX.Element} A collection of cashier metric cards
 */
const Cashier = () => {
  return (
    <div className="flex gap-7 flex-wrap">
      {cashierCards.map((card, index) => (
        <Card
          key={index}
          {...card}
        />
      ))}
    </div>
  );
};

export default Cashier;
