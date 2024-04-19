import React from 'react';
import { Line } from 'react-chartjs-2';

import { CardsProps } from '@/common/types';

const Cards: React.FC<CardsProps> = ({ iconSrc, labelText, value, percent }) => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Section 1',
        data: [65, 59, 80, 81, 56, 55, 40], 
        fill: 'origin',
        backgroundColor: 'rgba(75,192,192,0.2)', 
        borderColor: 'transparent', 
        borderWidth: 0, 
      },
      {
        label: 'Section 2',
        data: [20, 40, 25, 60, 30, 70, 50], 
        fill: '-1', 
        backgroundColor: 'rgba(255, 159, 64, 0.2)', 
        borderColor: 'transparent',
        borderWidth: 0, 
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='rounded-xl w-full me-2 px-3 pb-2 bg-card'>
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <img src={iconSrc} alt="Icon" />
            <p className='ps-4 mt-6  text-base font-semibold'>{labelText} <br />
              <span className='text-4xl font-semibold'>{value}</span></p>
          </div>
          <div>
            <div className='rounded-lg text-sm font-semibold percentage px-1'>{percent}%</div>
          </div>
        </div>
        <div className='h-20'>
          <Line data={chartData} options={chartOptions} />
        </div>
    </div>
  );
}
export default Cards;