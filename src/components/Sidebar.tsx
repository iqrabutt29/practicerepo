import React from 'react';
import { useRouter } from 'next/navigation';

import Icons from '@/helper/icons';
import { menuItems } from '@/helper/contants';


export default function Sidebar() {
  const router = useRouter();

  const handleMenuItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-sidebar mb-4 px-5 pt-8 pb-4 text-white border-r-2 border-backgound border-solid flex flex-col w-80 bg-border">
      <img className='w-16 cursor-pointer' src={Icons.LogoIcon.src} alt="Logo" />
      <div className='pt-9'>
        {menuItems.map((item, index) => (
          <button key={index} className='px-4 mb-3 py-3 w-full rounded-xl flex items-center 
            bg-transparent hover:bg-search focus:bg-search outline-none transition-colors 
            duration-300' onClick={() => handleMenuItemClick(item.path)}>
            <img className='cursor-pointer' src={item.icon} alt="Icon" />
            <span className='px-3'>{item.text}</span>
          </button>
        ))}
      </div>
      <div className='mt-auto'>
        <div className='py-3 px-3 mb-3 card-shadow rounded-lg flex items-center'>
          <img className='pe-2' src={Icons.ProfileIcon.src} alt="Logo" />
          <div className=' ps-2  flex flex-col'>
            <p className='text-sm font-semibold'>Robert Morino</p>
            <p className='text-xs dim-text'>robert@lokichat.net</p>
          </div>
        </div>
        <div className='border-b-2 help-border text-gray-400 text-base font-semibold flex items-center py-5 ps-3'>
          <img className='pe-2' src={Icons.HelpIcon.src} alt="Logo" />
          <span>Help & getting started</span>
        </div>
        <div className='flex items-center py-6 ps-2'>
          <img className='pe-2' src={Icons.LogoutIcon.src} alt="Logo" />
          <p className='text-base font-semibold'>Logout</p>
        </div>
      </div>
    </div>
  );
}
