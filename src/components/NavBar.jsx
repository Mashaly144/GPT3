import React from 'react';
import NavLinks from './NavLinks';
import Container from '../Ui/Container';
import { HiMenu } from 'react-icons/hi';
import MainButton from '../Ui/MainButton';

const NavBar = ({ setnavMobile }) => {
  return (
    <div className='py-[40px]'>
      <Container>
        <div className='flex justify-between items-center'>
          {/* nav links */}
          <div className='flex items-center  justify-center lg:justify-between space-x-5'>
            <a href='#' className='text-white text-2xl'>
              GPT-3
            </a>
            <NavLinks />
          </div>
          {/* nav Mobile */}
          <HiMenu
            onClick={(e) => {
              setnavMobile(true);
            }}
            className='lg:hidden text-3xl cursor-pointer '
          />
          {/* buttons */}
          <div className='flex items-center gap-x-4'>
            <button>Sign in</button>
            <MainButton>Sign Up</MainButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
