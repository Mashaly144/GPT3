import React from 'react';
import imaginImage from '../assets/FeatureImage.png';

const Imagination = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center space-y-[50px] lg:space-y-0 gap-10'>
          {/* image */}
          <div className='flex-1'>
            <img src={imaginImage} className='max-w-full' alt='imaginImage' />
          </div>
          {/* text */}
          <div className='flex flex-col justify-between flex-1 space-y-[20px]'>
            <span>Request Early Access to Get Started</span>
            <h2 className='mainHeader text-3xl'>
              The possibilities are beyond your imagination
            </h2>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <p className='mainHeader'>Request Early Access to Get Started</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Imagination;
