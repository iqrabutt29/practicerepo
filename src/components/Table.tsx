import React from 'react';

import TableButton from '@/components/TableButton'
import SearchField from '@/components/SearchField'
import Dropdown from '@/components/Dropdown'

import { data } from '@/helper/contants';

export default function TableComponent() {
  return (
    <div className="mt-5 min-h-80 bg-card  py-5 px-3 w-full">
      {/* Header Section */}
      <div className="flex justify-between">
        <p className='text-xl font-semiblod text-white graph-line ps-12'>Data points table</p>
        <div className='flex'>
          <TableButton buttonText="Article Sources" />
          <TableButton buttonText="Articles" />
          <TableButton buttonText="Article Errors" />
        </div>
      </div>
      {/* Search and Filter Section */}
      <div className="mt-4 flex justify-between">
        <div>
          <SearchField placeholder='Type your search here' showShortcut={false}  />
        </div>
        <div className='flex'>
          <Dropdown title="Filter" items={['Newest', 'Oldest']} />
          <Dropdown title="Sort by" items={['Item 1', 'Item 2', 'Item 3']} />
        </div>
      </div>
      {/* Table section */}
      <div>
        <table className="mt-7 min-w-full background">
          <thead className="mb-2 table-header text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left font-medium text-base tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-base tracking-wider">Source ID</th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-base tracking-wider">URL</th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-base tracking-wider">Type</th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-base tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-base tracking-wider">Subtitle</th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-base tracking-wider">Language</th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-base tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody >
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className={`px-6 py-5 ${index !== data.length - 1 ? 'border-b border-white' : ''} text-white whitespace-nowrap`}>{item.id}</td>
                <td className={`px-6 py-4 ${index !== data.length - 1 ? 'border-b border-white' : ''} text-white whitespace-nowrap`}>{item.sourceId}</td>
                <td className={`px-6 py-4 ${index !== data.length - 1 ? 'border-b border-white' : ''} text-white whitespace-nowrap`}>{item.url}</td>
                <td className={`px-6 py-4 ${index !== data.length - 1 ? 'border-b border-white' : ''} text-white whitespace-nowrap`}>{item.type}</td>
                <td className={`px-6 py-4 ${index !== data.length - 1 ? 'border-b border-white' : ''} text-white whitespace-nowrap`}>{item.title}</td>
                <td className={`px-6 py-4 ${index !== data.length - 1 ? 'border-b border-white' : ''} text-white whitespace-nowrap`}>{item.subtitle}</td>
                <td className={`px-6 py-4 ${index !== data.length - 1 ? 'border-b border-white' : ''} text-white whitespace-nowrap`}>{item.language}</td>
                <td className={`px-6 py-4 ${index !== data.length - 1 ? 'border-b border-white' : ''} text-white whitespace-nowrap`}>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
