import React from 'react';
import { navLinks } from '../constant/data.js';

const NavLinks = () => {
  return (
    <nav>
      <ul className='hidden lg:flex items-center p-3 space-x-4  '>
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.link} className='text-xl text-gray-400'>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
