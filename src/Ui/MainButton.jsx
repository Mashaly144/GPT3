import React, { Children } from 'react';
import './mainButton.css';
const MainButton = ({ children }) => {
  return <button className='mainButton'>{children}</button>;
};

export default MainButton;
