/**
 * @file Card component for displaying dashboard metrics with icons and trends
 */

import { Icon } from '@iconify/react';
import { CardData } from '@/types/dashboard';
import BoxPrimary from '@/assets/icons/box-primary.svg';
import BoxSuccess from '@/assets/icons/box-success.svg';
import BoxInfo from '@/assets/icons/box-info.svg';
import BoxDanger from '@/assets/icons/box-danger.svg';
import BoxWarning from '@/assets/icons/box-warning.svg';

/**
 * Map of box icons for different card types
 * @constant
 */
const boxIcons = {
  primary: BoxPrimary,
  success: BoxSuccess,
  info: BoxInfo,
  danger: BoxDanger,
  warning: BoxWarning,
} as const;

/**
 * Card component displays a metric with its title, value, trend, and corresponding icon
 * @component
 * @param {CardData} props - The card data containing title, value, trend info, and type
 * @returns {JSX.Element} A card displaying dashboard metric information
 */
const Card = ({ title, value, trend, type }: CardData) => {
  return (
    <div className="flex flex-grow flex-col gap-1 sm:gap-[34px] px-5 py-[15px] bg-white rounded-[16px] shadow-md min-w-[248px]">
      {/* Card Header with Title, Value and Icon */}
      <div className="h-[72px] flex justify-between items-center">
        <div className="space-y-0 sm:space-y-3">
          <span className="text-[14px] sm:text-[16px] text-[#202224] font-nunito font-semibold leading-[22px]">{title}</span>
          <h1 className="text-[20px] sm:text-[28px] text-[#202224] font-nunito font-bold leading-[38px] tracking-[1px]">{value}</h1>
        </div>
        <img
          src={boxIcons[type]}
          alt={`${type} icon`}
          className="w-[48px] h-[48px] sm:w-[72px] sm:h-[72px]"
        />
      </div>
      {/* Trend Indicator */}
      <div className="flex gap-2 sm:gap-6">
        <Icon
          height={24}
          color={trend.isUp ? '#00B69B' : '#FF7878'}
          icon={`icon-park-outline:trending-${trend.isUp ? 'up' : 'down'}`}
        />
        <p className="text-[#606060] font-nunito font-semibold text-[14px] sm:text-[16px] leading-[22px]">
          <span className={trend.isUp ? 'text-[#00B69B]' : 'text-[#FF7878]'}>{trend.value} </span>
          {trend.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
