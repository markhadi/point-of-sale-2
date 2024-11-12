export interface CardData {
  title: string;
  value: string | number;
  trend: {
    value: string;
    isUp: boolean;
    text: string;
  };
  type: 'primary' | 'success' | 'info' | 'danger' | 'warning';
}
