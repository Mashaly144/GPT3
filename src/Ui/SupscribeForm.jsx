import React from 'react';
import MainButton from './MainButton';
import './subscripe.css';

const SupscribeForm = () => {
  return (
    <form className='subForm'>
      <input
        className='subInput'
        type='email'
        placeholder='Your Email Address'
      />
      <MainButton>Get Started</MainButton>
    </form>
  );
};

export default SupscribeForm;
