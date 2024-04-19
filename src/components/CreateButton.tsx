import React from 'react';

import Icons from '@/helper/icons';
import { CreateButtonProps } from "@/common/types";

const CreateButton: React.FC<CreateButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex items-center justify-center  py-3 px-5 bg-primaryColor rounded-xl text-white"
    >
       <img className='pe-2' src={Icons.AddIcon.src} alt="Logo" />
      Create
    </button>
  );
};

export default CreateButton;
