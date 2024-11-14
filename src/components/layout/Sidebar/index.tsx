import { useLocation } from 'react-router-dom';
import { SidebarProps } from './types';
import { SidebarMobile } from './components/SidebarMobile';
import { SidebarDesktop } from './components/SidebarDesktop';

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      <SidebarMobile
        location={location}
        isOpen={isOpen}
        onClose={onClose}
      />
      <SidebarDesktop location={location} />
    </>
  );
};

export default Sidebar;
