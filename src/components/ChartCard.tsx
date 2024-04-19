import React from 'react';

import { ChartCardProps } from "@/common/types";

const ChartCard: React.FC<ChartCardProps> = ({ name }) => {
  return (
    <div className='border-white text-white border-2 rounded-md  mx-1 px-4 py-2 font-semibold flex justify-center text-sm items-center '>
      {name}
    </div>
  );
};

export default ChartCard;
