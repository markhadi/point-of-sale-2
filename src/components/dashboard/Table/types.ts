export interface Transaction {
  id: string;
  timestamp: string;
  amount: string;
  status: 'complete' | 'cancel';
}

export interface PopularProduct {
  id: string;
  name: string;
  image: string;
  stock: number;
  unit: string;
  priceId: string;
}

export interface StockTransaction {
  id: string;
  timestamp: string;
  name: string;
  image: string;
  quantity: number;
  unit: string;
  type: 'Receipt' | 'Issue';
}

export interface TableCardProps {
  title: string;
  children: React.ReactNode;
}
