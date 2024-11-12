/**
 * @file General dashboard component displaying overall metrics
 */

import Card from './Card';
import { generalCards } from '@/data/dashboard';

/**
 * General component displays overall dashboard metrics using cards
 * @component
 * @returns {JSX.Element} A collection of general metric cards
 */
const General = () => {
  return (
    <div className="flex gap-7 flex-wrap">
      {generalCards.map((card, index) => (
        <Card
          key={index}
          {...card}
        />
      ))}
    </div>
  );
};

export default General;
