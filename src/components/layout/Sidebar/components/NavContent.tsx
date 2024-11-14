import React from 'react';
import { MenuItem } from './MenuItem';
import { NavContentProps } from '../types';
import { MENU_ITEMS, HR_INDICES } from '../constants';

export const NavContent = ({ location, onItemClick }: NavContentProps) => (
  <nav className="flex flex-col p-5 gap-3">
    {MENU_ITEMS.map((item, index) => (
      <React.Fragment key={index}>
        <MenuItem
          {...item}
          isActive={location.pathname === item.path}
          onClick={onItemClick}
        />
        {HR_INDICES.includes(index) && <hr className="border-t border-[#CBD5E1] w-full" />}
      </React.Fragment>
    ))}
  </nav>
);
