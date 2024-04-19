import React from 'react';

export default function ArticleInput({ type = 'text', placeholder = '', label = '' }) {
  return (
    <div className=' flex items-center px-3 py-2'>
      <label htmlFor={placeholder} className='text-gray-500 hover:text-white  focus:text-white  dim-text text-base font-normal'>
        {label}
      </label>
      <input
        type={type}
        id={placeholder}
        placeholder={placeholder}
        className="ms-3 py-2 bg-card flex-1 outline-none "
      />
    </div>
  );
}
