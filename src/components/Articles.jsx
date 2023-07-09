import React from 'react';
import { blogCards } from '../constant/data';

const Articles = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <h1 className='mainHeader text-5xl mb-[50px]'>
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
        {/* all article */}
        <div className='articleCard'>
          {blogCards.map((card, index) => {
            return (
              <div className='cursor-pointer card-item'>
                {/* image */}
                <div className=' h-[200px] overflow-hidden'>
                  <img
                    src={card.image}
                    alt={card.title}
                    className='w-full h-full '
                  />
                </div>
                <div className='bg-[#042C54] p-[20px]'>
                  {/* text */}
                  <div className='mb-[40px] space-y-3'>
                    <p>{card.date}</p>
                    <h5>{card.title}</h5>
                  </div>
                  <span>Read Full Article</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
