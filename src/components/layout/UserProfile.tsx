/**
 * @file UserProfile component that displays user information and dropdown menu for user actions
 */

import { useState } from 'react';
import { ChevronDown, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

/**
 * UserProfile component displays user information and provides a dropdown menu for user-related actions
 * @component
 * @returns {JSX.Element | null} Returns the UserProfile component or null if no user is authenticated
 */
const UserProfile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  /**
   * Extracts and capitalizes the first letter of the user's name
   * @param {string} name - The user's full name
   * @returns {string} The capitalized first letter of the name
   */
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  /**
   * Determines the background color based on user role
   * @param {string} role - The user's role (Administrator or Cashier)
   * @returns {string} The CSS class for the background color
   */
  const getRoleColor = (role: string) => {
    const colors = {
      Administrator: 'bg-[#22C55E]',
      Cashier: 'bg-[#3B82F6]',
    };
    return colors[role as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-1 sm:gap-2 items-center cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors outline-none">
          {/* User Avatar with Initial */}
          <div className={`${getRoleColor(user.role)} h-[34px] w-[34px] rounded-full grid place-content-center text-[#1E293B] text-[16px] font-bold font-inter`}>{getInitial(user.name)}</div>
          {/* User Info */}
          <div className="flex flex-col">
            <span className="text-[#F8FAFC] font-inter font-medium text-[16px] leading-[19px] text-left hidden sm:block">{user.name}</span>
            <span className="text-[#94A3B8] font-inter font-normal text-[14px] leading-[18px] hidden sm:block">{user.role}</span>
          </div>
          {/* Dropdown Arrow */}
          <ChevronDown className={`text-[#64748B] h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </DropdownMenuTrigger>

      {/* Dropdown Menu Content */}
      <DropdownMenuContent className="w-56 mr-2">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Account</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon className="mr-2 h-4 w-4" />
          <span>My Account</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600 focus:text-red-600 focus:bg-red-100"
          onClick={() => {
            navigate('/login');
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
