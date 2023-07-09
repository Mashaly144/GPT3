import React from 'react';
import { footerLinks, footerCompany, contacts } from '../constant/data';
const Footer = () => {
  return (
    <section className='bg-[#031B34]'>
      <div className='container mx-auto'>
        <div>
          {/* text */}
          <div className='text-center'>
            <h1 className='mainHeader text-5xl'>
              Do you want to step in to the future before others
            </h1>
            <button className='border-2 p-6 rounded-lg mt-[50px] hover:bg-white hover:text-black '>
              Request Early Access
            </button>
          </div>
          <footer className='py-[100px]'>
            <div className='flex flex-col lg:flex-row justify-between gap-y-[50px]  lg:gap-x-[200px] items-center'>
              {/* logo */}
              <div className='mx-auto mb-6 max-w-[285px] flex-1 lg:mx-0'>
                <h1 className='text-3xl font-semibold mb-6'>GPT-3</h1>
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
              </div>
              {/* linls groub */}
              <div className='flex flex-1 flex-col gap-[100px] lg:flex-row'>
                {/* Links */}
                <div className='w-full text-center lg:text-left'>
                  <h1 className='mb-6 text-2xl font-medium'>Links</h1>
                  <ul className=' space-y-4 text-xl  text-gray'>
                    {footerLinks.map((item, index) => {
                      return (
                        <li
                          className='transition-all duration-300 hover:text-blue'
                          key={index}
                        >
                          <a href={item.href}>{item.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* footerCompany */}
                <div className='w-full text-center lg:text-left'>
                  <h1 className='mb-6 text-2xl font-medium'>Company</h1>
                  <ul className='space-y-4 text-xl  text-gray'>
                    {footerCompany.map((item, index) => {
                      return (
                        <li
                          className='transition-all duration-300 hover:text-blue'
                          key={index}
                        >
                          <a href={item.href}>{item.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* Contacts */}
                <div className='w-full text-center lg:text-left'>
                  <h1 className='mb-6 text-2xl font-medium'>Get in touch</h1>
                  <ul className='space-y-4 text-xl  text-gray'>
                    {contacts.map((item, index) => {
                      return (
                        <div key={index}>
                          <li className='transition-all duration-300 hover:text-blue'>
                            <a href={item.href}>{item.address}</a>
                          </li>
                          <li
                            className='transition-all duration-300 hover:text-blue'
                            key={index}
                          >
                            <a href={item.href}>{item.email}</a>
                          </li>
                          <li
                            className='transition-all duration-300 hover:text-blue'
                            key={index}
                          >
                            <a href={item.href}>{item.number}</a>
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <p className='text-center'>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
