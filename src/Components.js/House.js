import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={house.propertyImages[0]} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-black rounded-full text-white px-3 inline-block'>
          {house.propertyType}
        </div>
        <div className='bg-slate-300 rounded-full text-black font-semibold px-3 inline-block'>
          {house.state}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{house.propertyName}</div>
      <div className='flex gap-x-4 my-4'>
        
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea />
          </div>
          <div className='text-base'>{house.area}</div>
        </div>
      </div>
      {/* <div className='text-lg font-semibold text-cyan-600 mb-4'>
        $ {house.price}
      </div> */}
    </div>
  );
};

export default House;