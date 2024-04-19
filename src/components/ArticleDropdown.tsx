"use client";

import React, { useState } from 'react';

import Icons from '@/helper/icons';
import { DropdownProps } from "@/common/types";


const ActiveDropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="py-2 relative">
      <button
        onClick={toggleDropdown}
        className="  rounded-xl
        bg-transparent hover:bg-search focus:bg-search transition-colors 
        duration-300 w-full cursor-pointer flex items-center justify-between px-3 py-2  dim-text text-base font-normal outline-none  "
      >
        <span className=''>{title}</span>
        <img className='pe-2 ' src={Icons.ArrowDownIcon.src} alt="Logo" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 bg-card border border-gray-300 rounded-md mt-1">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className="px-7 py-2 flex justify-center hover:bg-card cursor-pointer rounded-md "
            >
              {item}
            </div>
          ))}
        </div>
      )}
      {/* {selectedItem && <p className="text-gray-500">Selected item: {selectedItem}</p>} */}
    </div>
  );
};

export default ActiveDropdown;
