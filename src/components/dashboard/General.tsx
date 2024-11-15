import Card from './Card';
import { generalCards } from '@/data/dashboard';
import { ChartGeneral } from './Chart';
import { TableLatestTransactions } from './Table/components/TableLatestTransactions';
import { TablePopularProducts } from './Table/components/TablePopularProducts';
import { TableStockReceiptOrIssue } from './Table/components/TableStockReceiptOrIssue';

const General = () => {
  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex gap-4 sm:gap-7 flex-wrap">
        {generalCards.map((card, index) => (
          <Card
            key={index}
            {...card}
          />
        ))}
      </div>
      <ChartGeneral />
      <div className="grid grid-cols-1 gap-5 2xl:grid-cols-3">
        <TableLatestTransactions />
        <TablePopularProducts />
        <TableStockReceiptOrIssue />
      </div>
    </div>
  );
};

export default General;
