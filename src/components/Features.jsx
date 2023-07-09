import React from 'react';
import { features } from '../constant/data';

const Features = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center  lg:justify-between'>
          {/* text */}
          <div className='flex flex-col  lg:max-w-[35%] w-full'>
            <h1 className='mainHeader text-3xl mb-[100px]'>
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h1>
            <a href='#req' className='mainHeader'>
              Request Early Access to Get Started
            </a>
          </div>
          {/* features */}
          <div className='w-full lg:max-w-[50%] mt-[50px] lg:mt-0'>
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col lg:flex-row justify-between  gap-5 mb-[30px]'
                >
                  <h5 className='mainTitle flex w-[30%] '>{feature.title}</h5>
                  <p className='flex w-[60%]'>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
