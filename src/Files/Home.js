import React from 'react';

import Arrow from '../Components.js/ArrowIcon';
import Poster from '../Components.js/Poster';
import HouseList from '../Components.js/HouseList';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <div className='bg-[url(https://wallpaperaccess.com/full/104193.jpg)] min-h-[460px] bg-center bg-cover bg-no-repeat md:h-[1000px]'>
      <Poster/></div>
      <Arrow />
      <HouseList />
    </div>
  );
};

export default Home;