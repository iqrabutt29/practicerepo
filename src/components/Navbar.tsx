import React from 'react';

import Icons from '@/helper/icons';

import SearchField from '@/components/SearchField';
import CreateButton from '@/components/CreateButton';

export default function Navbar() {
  const handleClick = () => {
    window.location.href = '/articleSources';
  };

  return (
    <div className='bg-sidebar py-6 mb-3 px-7 flex justify-between'>
        <SearchField placeholder='Search or type a command' showShortcut={true} />
        <div className='flex'>
            <CreateButton onClick={handleClick} />
            <img className='ms-5 w-12' src={Icons.MessageIcon.src} alt="Message Icon" />
            <img className='ms-5 w-12' src={Icons.NotificationIcon.src} alt="Notification Icon" />
            <img className='ms-5 w-10' src={Icons.AvatarIcon.src} alt="Avatar Icon" />
        </div>
    </div>
  );
}
