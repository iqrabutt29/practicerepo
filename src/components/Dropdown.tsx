"use client";

import React, { useState } from 'react';

import Icons from '@/helper/icons';
import { DropdownProps } from "@/common/types";

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
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
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center justify-between px-2 py-2 me-3 text-sm bg-white border border-gray-300 rounded-lg  focus:outline-none focus:border-blue-500 dim-text "
      >
        <span className='px-2'>{title}</span>
        <img className='pe-2' src={Icons.ArrowIcon.src} alt="Logo" />

      </button>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md mt-1">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
      {selectedItem && <p className="text-gray-500">Selected item: {selectedItem}</p>}
    </div>
  );
};

export default Dropdown;
