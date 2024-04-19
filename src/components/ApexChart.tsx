import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

import ChartCard from '@/components/ChartCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgb(255, 255, 255)",
        display: false,
      }
    },
    y: {
      grid: {
        color: "rgb(255, 255, 255)",
      },
      ticks: {
        callback: function (value: number, index: number, values: number[]) {
          return value / 1000 + 'k';
        }
      }
    }
  },
};


const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.floor(Math.random() * 20000)),
      borderColor: 'rgba(248, 142, 132, 1)', 
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      data: labels.map(() => Math.floor(Math.random() * 20000)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      data: labels.map(() => Math.floor(Math.random() * 30000)),
      borderColor: 'rgba(140, 137, 255, 1)',
      backgroundColor: 'rgba(140, 137, 255, 1)',
    },
  ],
};

const ApexChart = () => {
  return (
    <div className="bg-card rounded-xl pt-4 px-2 pe-7 me-2 ">
      <div className='flex justify-between mb-5'>
        <p className='text-xl font-semiblod text-white chart-line ps-9'>Data Points added per Data Range</p>
        <div className="flex justify-between">
          <div className='flex'>
            <ChartCard name="Day" />
            <ChartCard name="Week" />
            <ChartCard name="Month" />
            <ChartCard name="Year" />
          </div>
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default ApexChart;
