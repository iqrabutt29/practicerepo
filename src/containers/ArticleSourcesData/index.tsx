"use client";

import React from 'react'

import Icons from '@/helper/icons';
import Articles from '@/components/Articles';

const handleBackClick = () => {
  window.location.href = '/';
};

export default function ArticleSourcesData() {
  return (
    <>
      <div className='px-6 py-5'>
        <div className='justify-between flex items-center'>
          <div className='flex'>
            <img className='cursor-pointer' onClick={handleBackClick} src={Icons.BackArrowIcon.src} alt="Logo" />
            <p className=' ps-4 text-4xl font-semibold'>Create Article Sources</p>
          </div>
          <img className='cursor-pointer' onClick={handleBackClick}  src={Icons.CloseIcon.src} alt="Logo" />
        </div>
        <Articles/>
      </div>
    </>
  )
}
