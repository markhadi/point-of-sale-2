interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => (
  <button
    onClick={onClick}
    className="flex flex-col w-5 h-5 justify-between items-center sm:hidden"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
  >
    <span
      className={`
        h-0.5 w-5 bg-white origin-left 
        transition-all duration-300 
        ${isOpen ? 'rotate-45 w-[25px]' : ''}
      `}
    />
    <span
      className={`
        h-0.5 w-5 bg-white origin-left 
        transition-all duration-300 
        ${isOpen ? 'opacity-0' : ''}
      `}
    />
    <span
      className={`
        h-0.5 w-5 bg-white origin-left 
        transition-all duration-300 
        ${isOpen ? '-rotate-45 w-[25px]' : ''}
      `}
    />
  </button>
);
