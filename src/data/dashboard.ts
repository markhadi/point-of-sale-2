import { CardData } from '@/types/dashboard';

export const generalCards: CardData[] = [
  {
    title: 'Today Gross Profit',
    value: 'Rp23.560.000',
    trend: {
      value: '8.5%',
      isUp: true,
      text: 'Up from yesterday',
    },
    type: 'primary',
  },
  {
    title: 'Today Net Profit',
    value: 'Rp1.503.000',
    trend: {
      value: '8.5%',
      isUp: true,
      text: 'Up from yesterday',
    },
    type: 'success',
  },
  {
    title: 'Today Item Receipt',
    value: 'Rp1.500.350',
    trend: {
      value: '8.5%',
      isUp: true,
      text: 'Up from yesterday',
    },
    type: 'info',
  },
  {
    title: 'Today Estimation Loss',
    value: 'Rp35.000',
    trend: {
      value: '8.5%',
      isUp: false,
      text: 'Down from yesterday',
    },
    type: 'danger',
  },
];

export const inventoryCards: CardData[] = [
  {
    title: 'Item',
    value: '812',
    trend: {
      value: '213',
      isUp: true,
      text: 'New item added',
    },
    type: 'primary',
  },
  {
    title: 'Price',
    value: '920',
    trend: {
      value: '324',
      isUp: true,
      text: 'New price added',
    },
    type: 'success',
  },
  {
    title: 'Brand',
    value: '200',
    trend: {
      value: '120',
      isUp: true,
      text: 'New brand added',
    },
    type: 'info',
  },
  {
    title: 'Category',
    value: '24',
    trend: {
      value: '4',
      isUp: true,
      text: 'New category added',
    },
    type: 'danger',
  },
  {
    title: 'Received Spending',
    value: 'Rp250.000.000',
    trend: {
      value: '8.5%',
      isUp: true,
      text: 'Up from yesterday',
    },
    type: 'warning',
  },
];

export const cashierCards: CardData[] = [
  {
    title: 'Today Gross Profit',
    value: 'Rp23.560.000',
    trend: {
      value: '8.5%',
      isUp: true,
      text: 'Up from yesterday',
    },
    type: 'primary',
  },
  {
    title: 'Today Net Profit',
    value: 'Rp1.503.000',
    trend: {
      value: '8.5%',
      isUp: true,
      text: 'Up from yesterday',
    },
    type: 'success',
  },
  {
    title: 'Yearly Gross Profit',
    value: 'Rp231.560.000',
    trend: {
      value: '8.5%',
      isUp: true,
      text: 'Up from yesterday',
    },
    type: 'warning',
  },
  {
    title: 'Yearly Sales Net Profit',
    value: 'Rp125.560.000',
    trend: {
      value: '8.5%',
      isUp: true,
      text: 'Up from yesterday',
    },
    type: 'info',
  },
];
