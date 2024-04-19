import React from 'react'

import ArticleInput from '@/components/ArticleInput'
import ActiveDropdown from '@/components/ArticleDropdown'
import ArticleAccordian from './ArticleAccordian'

export default function Articles() {
    return (
        <div className='mt-6 flex-1 flex justify-between'>
            <div className='flex flex-col w-full  me-3 bg-card'>
                <ArticleInput type='url' label="URL:" />
                <ArticleInput type='text' label="Name:" />
                <ActiveDropdown title="Category" items={['Newest', 'Oldest']} />
                <ActiveDropdown title="Subcategory" items={['Newest', 'Oldest']} />
                <ArticleAccordian />
            </div>
            <div className='p-2 w-full bg-card'>
                ArticleData
            </div>
        </div>
    )
}
