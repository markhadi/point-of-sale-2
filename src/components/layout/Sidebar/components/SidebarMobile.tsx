import { SidebarMobileProps } from '../types';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { NavContent } from './NavContent';

export const SidebarMobile = ({ location, isOpen, onClose }: SidebarMobileProps) => {
  useEscapeKey(isOpen, onClose);

  return (
    <div
      className={`
        fixed top-[62px] inset-0 z-50 
        transition-all duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'visible bg-black/50' : 'invisible bg-black/0 pointer-events-none'}
      `}
      onClick={onClose}
    >
      <aside
        className={`
          max-w-[241px] bg-white h-full min-h-max 
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        onClick={e => e.stopPropagation()}
      >
        <div className={`transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <NavContent
            location={location}
            onItemClick={onClose}
          />
        </div>
      </aside>
    </div>
  );
};
