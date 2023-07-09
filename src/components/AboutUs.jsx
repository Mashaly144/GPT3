import React from 'react';
import { aboutUs } from '../constant/data';
const AboutUs = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div>
          {/* about gpt */}
          <div className='aboutUs p-[20px] flex flex-col justify-between gap-[100px]'>
            {/* what is gpt3 */}
            <div className=' flex flex-col lg:flex-row '>
              <h4 className='mainTitle  mb-6 lg:mb-0 text-xl flex-1 '>
                What is GPT-3
              </h4>
              <p className='flex-1'>
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
            {/* Explore The Library */}
            <div className='flex justify-between flex-col lg:flex-row'>
              <h1 className='mainHeader text-3xl flex-1'>
                The possibilities are beyond your imagination
              </h1>
              <a href='#library' className='mainHeader mt-8 lg:mt-0'>
                Explore The Library
              </a>
            </div>
            {/* about us library */}
            <div className='card'>
              {/* card */}
              {aboutUs.map((about, index) => {
                return (
                  <div
                    key={index}
                    className='flex flex-col 
                   items-start space-y-8 text-left'
                  >
                    <h5 className='text-xl'>{about.title}</h5>
                    <p className=' '>{about.describe}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
