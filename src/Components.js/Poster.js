import React from 'react';

const Poster = () => {
  return (
    <section className="pt-[40px] md:pt-[100px] lg:pt-[100px] xl:pt-[130px] mb-8 xl:mb-8">
      <div>
        <div className="flex flex-col justify-center items-center text-center lg:text-left px-4 lg:pl-8">
          <h1 className="text-white mt-8 ml-4 text-3xl md:text-5xl lg:text-4xl xl:text-6xl font-semibold leading-none">
            Welcome To <span className="text-indigo-300 break-words">Real Estate</span>
          </h1>
          <p className="mt-1 mb-16 ml-4 text-white text-sm lg:text-lg md:text-lg xl:text-lg">
            We Help You Find Your Property
          </p>
        </div>
      </div>
    </section>
  );
};

export default Poster;
