import React from 'react'

import Icons from '@/helper/icons';
import Cards from '@/components/Cards'

import CreateButton from '@/components/CreateButton'

export default function Layout() {
  return (
    <div className="text-white">
      <div className='flex justify-between'>
        <p className="text-4xl font-semibold">Articles Dashboard</p>
        <CreateButton />
      </div>
      <div className='mt-4 flex'>
        <Cards
          iconSrc={Icons.ArticleSourcesIcon.src}
          labelText="Article Sources"
          value={100}
          percent={20}
        />
        <Cards
          iconSrc={Icons.ArticleIcon.src}
          labelText="Articles"
          value={78}
          percent={37.8}
        />
        <Cards
          iconSrc={Icons.ArticleErrorsIcon.src}
          labelText="Article Errors"
          value={56}
          percent={100}
        />
      </div>
    </div>
  )
}
