import React from 'react';

const ArrowIcon = () => (
  <div style={{ display: 'flex', justifyContent: 'center',marginTop: '30px' }}>
    <span className="inline-block animate-bounce rounded-full p-4 text-white text-sm">
      <svg className="w-[40px] h-[60px] xl:w-[62px] xl:h-[80px] mx-auto" xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
      </svg>
    </span>
  </div>
);

export default ArrowIcon;
