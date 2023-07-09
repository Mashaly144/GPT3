import React from 'react';
import { sponsers } from '../constant/data';
import Container from '../Ui/Container';
const Sponsers = () => {
  return (
    <div className='container mx-auto flex justify-center'>
      <div className='flex justify-center py-[100px] flex-wrap'>
        {sponsers.map((item, index) => {
          return (
            <div key={index} className='p-[20px] uppercase'>
              <p className='text-2xl text-gray-400'>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsers;
