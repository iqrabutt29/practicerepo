"use client";

import React, { useState } from 'react';

import { TableButtonProps } from "@/common/types";


const TableButton: React.FC<TableButtonProps> = ({
  onClick,
  buttonText = 'Create',
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick && onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer flex items-center justify-center py-2 px-3 rounded-md text-white me-3  ${isClicked ? 'bg-primaryColor' : 'border-2 border-white'
        }`}
    >
      <span>{buttonText}</span>
    </button>
  );
};

export default TableButton;
