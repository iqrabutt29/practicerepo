// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart } from 'chart.js';
// import { ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.register(ArcElement, Tooltip, Legend);

// const data = {

//     data: [7, 6, 6],
//   datasets: [
//     {
//     //   label: 'Poll', 
//       data: [7, 6, 6],
//       backgroundColor: ['rgba(74, 68, 255, 1)', 'rgba(187, 180, 254, 1)', 'rgba(198, 246, 125, 1)'],
//       circumference: 180,
//       rotation: 270,
//       cutout : '84%',
//       borderRadius: 20,
//       borderWidth: 6,
//       borderColor:[
//         'white'
//   ]
//     },
//   ],
// };
// const doughnutLabel = {
//     id: 'doughnutLabel',
//     afterDatasetDraw(chart: any, args: any[], pluginOptions: any) { 
//         const { ctx, data, chartArea: { top, bottom, left, right, width, height }, scales: { r } } = chart;
//         ctx.save();
//         const xCoor = chart.getDatasetMeta(0).data[0].x;
//         const yCoor = chart.getDatasetMeta(0).data[0].y;
//         ctx.fillRect(xCoor, yCoor, 400, 1);

//         ctx.font = 'bold 30px sans-serif';
//         ctx.fillStyle = 'gray';
//         ctx.fillText('200', left , yCoor + 20);
//         ctx.textBaseline = 'top'
//     }
// };



// const config = {
//     type: 'doughnut', // Fixed: Changed ';' to ':'
//     data,
//     options: {},
//     plugins: [doughnutLabel]
// };

// const options = {
// };

// const SemiCircleChart = () => {
//   return (
//     <div style={{ width: '250px' }}>
//       <Doughnut data={data} options={options} />

//     </div>
//   );
// };

// export default SemiCircleChart;
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const data = {

  data: [7, 6, 6],

  datasets: [
    {
      // label: 'Poll', 
      data: [7, 6, 6],
      backgroundColor: ['rgba(74, 68, 255, 1)', 'rgba(187, 180, 254, 1)', 'rgba(198, 246, 125, 1)'],
      borderColor: ['rgba(74, 68, 255, 1)', 'rgba(187, 180, 254, 1)', 'rgba(198, 246, 125, 1)'],
      circumference: 180,
      rotation: 270,
      cutout: '84%',
      borderRadius: 20,
      // borderWidth: 6,
      //     borderColor:[
      //       'white'
      // ]
    },
  ],
};
const doughnutLabel = {
  id: 'doughnutLabel',
  afterDatasetDraw(chart: any, args: any[], pluginOptions: any) {
    const { ctx, data, chartArea: { top, bottom, left, right, width, height }, scales: { r } } = chart;
    ctx.save();

    const firstSlice = chart.getDatasetMeta(0).data[0];
    const firstSliceStartAngle = firstSlice._model.startAngle;
    const firstSliceRadius = (firstSlice._model.outerRadius + firstSlice._model.innerRadius) / 2;
    const xCoorFor7 = left + width / 2 + Math.cos(firstSliceStartAngle) * firstSliceRadius;
    const yCoorFor7 = top + height - 20;

    ctx.font = 'bold 30px sans-serif';
    ctx.fillStyle = 'gray';
    ctx.fillText('7', xCoorFor7, yCoorFor7);
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'black';


    const lastSlice = chart.getDatasetMeta(0).data[2];
    const lastSliceEndAngle = lastSlice._model.endAngle;
    const lastSliceRadius = (lastSlice._model.outerRadius + lastSlice._model.innerRadius) / 2;
    const xCoorFor6_end = left + width / 2 + Math.cos(lastSliceEndAngle) * lastSliceRadius;
    const yCoorFor6_end = top + height + 20;
    ctx.fillText('6', xCoorFor6_end, yCoorFor6_end);
    ctx.textBaseline = 'top';

    ctx.restore();
  }
};


const config = {
  type: 'doughnut',
  data,
  options: {},
  plugins: [doughnutLabel]
};

const options = {
};

const SemiCircleChart = () => {
  return (
    <div className=" bg-card rounded-xl  pt-4 px-6" >
      <p className='ps-8 heading-line text-xl font-semiblod text-white'>Total Data Points</p>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SemiCircleChart;
