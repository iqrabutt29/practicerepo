"use client";

import React from 'react';

// import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Layout from '@/components/Layout';
import ApexChart from '@/components/ApexChart';
import SemiCircleChart from '@/components/SemiCircleChart';
import Table from '@/components/Table';


export default function HomePage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row justify-start flex-1">
        <Sidebar />
        <div className="text-black flex-1 p-4 mt-5">
          {/* <Navbar /> */}
          <Layout />
          <div className="justify-between me-2 mt-4 flex ">
            <ApexChart />
            <SemiCircleChart />
          </div>
          <div className='mt-4 me-2'>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
