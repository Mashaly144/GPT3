import React from 'react';
import { avaters } from '../constant/data';
const Avaters = () => {
  return (
    <div className='flex items-center'>
      <ul className='flex -space-x-4'>
        {avaters.map((avater) => {
          return (
            <li key={avater.name} className='w-[40px] h-[40px]'>
              <img src={avater.image} alt={avater.name} />
            </li>
          );
        })}
      </ul>
      <p className='text-gray-400 ml-2 text-center lg:text-left'>
        1600 people requested access a visit in last 24 hours
      </p>
    </div>
  );
};

export default Avaters;
