import React from 'react';

const Register = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='registerSection flex justify-between items-center flex-col lg:flex-row '>
          {/* text */}
          <div className='text-center lg:text-left '>
            <span>Request Early Access to Get Started</span>
            <h1 className='text-black text-2xl font-semibold mt-3'>
              Register today & start exploring the endless possiblities.
            </h1>
          </div>
          <button className='registerBtn mt-[20px] lg:mt-0'>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
