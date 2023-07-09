import React from 'react';
import { IoClose } from 'react-icons/io5';
import { navLinks } from '../constant/data.js';
const NavMobile = ({ setnavMobile }) => {
  return (
    <nav className='lg:hidden flex justify-center items-center navMobile backdrop-blur-md w-full h-full backdrop:blur-md'>
      <IoClose
        onClick={(e) => {
          setnavMobile(false);
        }}
        className='absolute top-6 left-4 cursor-pointer text-3xl '
      />

      <ul className='flex flex-col justify-between h-[50%] items-center cursor-pointer '>
        {navLinks.map((link, index) => (
          <li key={index} className=' text-xl p-3 font-semibold navLink '>
            {link.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
