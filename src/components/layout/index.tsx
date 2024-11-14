import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { useSidebar } from './hooks/useSidebar';

const SM_BREAKPOINT = 640;

export const Layout = () => {
  const { isOpen, toggle, close } = useSidebar(SM_BREAKPOINT);

  return (
    <main className="container-layout">
      <Header
        isSidebarOpen={isOpen}
        onToggleSidebar={toggle}
      />
      <Sidebar
        isOpen={isOpen}
        onClose={close}
      />
      <Outlet />
    </main>
  );
};
