import { Location as RouterLocation } from 'react-router-dom';

export interface MenuItemProps {
  path: string;
  label: string;
  icon: string;
  isSubItem?: boolean;
  isActive: boolean;
  onClick?: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SidebarMobileProps {
  location: RouterLocation;
  isOpen: boolean;
  onClose: () => void;
}

export interface NavContentProps {
  location: RouterLocation;
  onItemClick?: () => void;
}
