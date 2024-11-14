import { useLocation } from 'react-router-dom';
import { HeaderProps } from './types';
import { getMasterItemTitle } from './utils';
import { MenuButton } from './components/MenuButton';
import { Logo } from './components/Logo';
import { useScrollLock } from './hooks/useScrollLock';
import UserProfile from '../UserProfile';

const Header = ({ isSidebarOpen, onToggleSidebar }: HeaderProps) => {
  const location = useLocation();
  useScrollLock(isSidebarOpen);

  const pageTitle = getMasterItemTitle(location.pathname);

  return (
    <header className="header flex items-center px-6 sm:px-12 bg-[#1E293B] z-50">
      <Logo />
      <MenuButton
        isOpen={isSidebarOpen}
        onClick={onToggleSidebar}
      />

      <div className="flex-grow h-full flex items-center justify-between">
        <h1 className="text-[#F8FAFC] font-inter text-[20px] leading-[28px] font-bold ml-5">{pageTitle}</h1>
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
