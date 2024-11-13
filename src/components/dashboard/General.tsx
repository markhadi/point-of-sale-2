/**
 * @file General dashboard component displaying overall metrics
 */

import Card from './Card';
import { generalCards } from '@/data/dashboard';
import { ChartGeneral } from './Chart';

/**
 * General component displays overall dashboard metrics using cards
 * @component
 * @returns {JSX.Element} A collection of general metric cards
 */
const General = () => {
  return (
    <div className="space-y-5">
      <div className="flex gap-7 flex-wrap">
        {generalCards.map((card, index) => (
          <Card
            key={index}
            {...card}
          />
        ))}
      </div>
      <ChartGeneral />
    </div>
  );
};

export default General;
