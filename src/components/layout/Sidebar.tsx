/**
 * @file Sidebar component that provides navigation links for the application
 */

import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import React from 'react';

/**
 * MenuItemProps interface defines the properties for a menu item
 * @interface
 * @property {string} path - The route path for the menu item
 * @property {string} label - The display label for the menu item
 * @property {string} icon - The icon identifier for the menu item
 * @property {boolean} [isSubItem] - Indicates if the menu item is a sub-item
 * @property {boolean} isActive - Indicates if the menu item is currently active
 */
interface MenuItemProps {
  path: string;
  label: string;
  icon: string;
  isSubItem?: boolean;
  isActive: boolean;
}

/**
 * MenuItem component renders a single navigation link with an icon
 * @component
 * @param {MenuItemProps} props - The properties for the menu item
 * @returns {JSX.Element} The MenuItem component
 */
const MenuItem = ({ path, label, icon, isSubItem = false, isActive }: MenuItemProps) => (
  <Link
    to={path}
    className={`font-inter font-normal text-[16px] leading-[28px] flex items-center gap-[10px] px-[15px] py-[10px] transition-all duration-200 hover:bg-[#E2E8F0] hover:outline-[1.5px] hover:outline-[#CBD5E1] hover:outline-offset-0 hover:rounded-[15px] ${
      isSubItem ? 'ml-9' : ''
    } ${isActive ? 'bg-[#E2E8F0] outline-[1.5px] outline-[#CBD5E1] rounded-[15px]' : 'text-[#64748B]'}`}
  >
    <Icon
      height={24}
      width={24}
      icon={icon}
    />
    <span>{label}</span>
  </Link>
);

/**
 * Sidebar component renders the application's side navigation menu
 * @component
 * @returns {JSX.Element} The Sidebar component
 */
const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'solar:home-2-outline' },
    { path: '/cashier', label: 'Cashier', icon: 'solar:round-transfer-vertical-outline' },
    { path: '/transaction', label: 'Transaction', icon: 'solar:checklist-minimalistic-outline' },
    { path: '/master-item', label: 'Master Item', icon: 'solar:inbox-archive-outline' },
    { path: '/master-item/category', label: 'Category', icon: 'solar:backspace-outline', isSubItem: true },
    { path: '/master-item/brand', label: 'Brand', icon: 'solar:backspace-outline', isSubItem: true },
    { path: '/master-item/units', label: 'Units', icon: 'solar:backspace-outline', isSubItem: true },
    { path: '/master-price', label: 'Master Price', icon: 'solar:banknote-2-outline' },
    { path: '/supplier', label: 'Supplier', icon: 'solar:inbox-out-outline' },
    { path: '/receive', label: 'Receive', icon: 'solar:inbox-in-outline' },
    { path: '/issued', label: 'Issued', icon: 'solar:inbox-out-outline' },
    { path: '/user-manager', label: 'User Manager', icon: 'solar:users-group-rounded-outline' },
  ];

  const hrIndices = [0, 2];

  return (
    <aside className="sidebar">
      <nav className="flex flex-col p-5 gap-3">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem
              path={item.path}
              label={item.label}
              icon={item.icon}
              isSubItem={item.isSubItem}
              isActive={location.pathname === item.path}
            />
            {hrIndices.includes(index) && <hr className="border-t border-[#CBD5E1] w-full" />}
          </React.Fragment>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
