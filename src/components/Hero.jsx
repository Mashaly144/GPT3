import React from 'react';
import hero from '../assets/heroimage.svg';
import Container from '../Ui/Container';

import SupscribeForm from '../Ui/SupscribeForm';
import Avaters from '../Ui/Avaters';

const Hero = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col lg:flex-row justify-between items-center py-4'>
          {/* text */}
          <div className=' flex flex-col items-center lg:items-start text-center lg:text-left flex-1 space-y-7'>
            <h1 className='mainHeader text-5xl'>
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>

            {/* input email */}
            <SupscribeForm />
            {/* avaters  */}
            <Avaters />
          </div>
          {/* image */}
          <div className='mt-[30px] lg:m-0 flex-1'>
            <img className='max-w-full' src={hero} alt='hero image' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
