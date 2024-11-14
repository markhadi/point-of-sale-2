import { Location as RouterLocation } from 'react-router-dom';
import { NavContent } from './NavContent';

interface SidebarDesktopProps {
  location: RouterLocation;
}

export const SidebarDesktop = ({ location }: SidebarDesktopProps) => (
  <aside className="sidebar hidden sm:block">
    <NavContent location={location} />
  </aside>
);
