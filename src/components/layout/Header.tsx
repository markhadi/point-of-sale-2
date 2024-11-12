/**
 * @file Header component that displays the application header with logo, page title, and user profile
 */

import logo from '@/assets/images/logo-header.png';
import { Link, useLocation } from 'react-router-dom';
import UserProfile from './UserProfile';

/**
 * Header component renders the main navigation header of the application
 * @component
 * @returns {JSX.Element} The Header component
 */
const Header = () => {
  const location = useLocation();

  /**
   * Maps the current pathname to a human-readable page title
   * @param {string} pathname - The current URL pathname
   * @returns {string} The formatted page title
   */
  const getPageTitle = (pathname: string): string => {
    const path = pathname.split('/')[1];

    const titleMap: Record<string, string> = {
      dashboard: 'Dashboard',
      cashier: 'Cashier',
      transaction: 'Transaction',
      'master-item': 'Master Item',
      'master-price': 'Master Price',
      supplier: 'Supplier',
      receive: 'Receive',
      issued: 'Issued',
      'user-manager': 'User Manager',
    };

    return (
      titleMap[path] ||
      path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
  };

  /**
   * Gets the specific title for master item pages and their sub-routes
   * @param {string} pathname - The current URL pathname
   * @returns {string} The formatted master item page title
   */
  const getMasterItemTitle = (pathname: string): string => {
    const segments = pathname.split('/');
    if (segments[1] === 'master-item' && segments[2]) {
      const subPath = segments[2];
      const subTitleMap: Record<string, string> = {
        category: 'Item Categories',
        brand: 'Item Brands',
        units: 'Item Units',
      };
      return subTitleMap[subPath] || getPageTitle('master-item');
    }
    return getPageTitle(pathname);
  };

  const pageTitle = getMasterItemTitle(location.pathname);

  return (
    <header className="header flex items-center px-12 bg-[#1E293B]">
      <Link
        key={'/dashboard'}
        to={'/dashboard'}
      >
        <img
          src={logo}
          alt="logo header"
          className="h-[49px]"
        />
      </Link>
      <div className="flex-grow h-full flex items-center justify-between">
        <h1 className="text-[#F8FAFC] font-inter text-[20px] leading-[28px] font-bold ml-5">{pageTitle}</h1>
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
