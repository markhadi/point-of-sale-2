/**
 * @file Main layout component that provides the application's base structure
 */

import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

/**
 * Layout component that wraps the main application content
 * Provides consistent structure with header, sidebar, and main content area
 *
 * @component
 * @returns {JSX.Element} The Layout component containing:
 *  - Header: Top navigation bar with logo and user profile
 *  - Sidebar: Navigation menu
 *  - Outlet: Dynamic content area for child routes
 */
export const Layout = () => {
  return (
    <main className="container-layout">
      {/* Top navigation bar */}
      <Header />

      {/* Side navigation menu */}
      <Sidebar />

      {/* Dynamic content area rendered by child routes */}
      <Outlet />
    </main>
  );
};
