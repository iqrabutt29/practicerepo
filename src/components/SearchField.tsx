import React from 'react';
import Icons from '@/helper/icons';
import { SearchFieldProps } from "@/common/types";

const SearchField: React.FC<SearchFieldProps & { showShortcut?: boolean }> = ({ placeholder, showShortcut = false }) => {
  return (
    <div className="flex justify-between w-[330px] py-2 ps-3  bg-search rounded-xl ">
      <img className='' src={Icons.SearchIcon.src} alt="Search" />
      <input
        type="text"
        placeholder={placeholder}
        className="ms-3 dim-text text-sm font-normal flex-1 outline-none bg-search"
      />
      {/* {showShortcut && <span><img className='pe-2' src={Icons.ShortcutIcon.src} alt="Shortcut" /></span>} */}
    </div>
  );
};

export default SearchField;
