import React from 'react';
import './Dropdown.css';

const Dropdown = () => {
  return (
    <div className='dropdown'>
      <p className='dropdown__caption'>Status</p>
      <p className='dropdown__type'>Presumed dead</p>
      <i className="material-icons dropdown__icon">arrow_drop_down</i>

      <ul className="dropdown__menu">
        <li className='dropdown__item'>Alive</li>
        <li className='dropdown__item'>Presumed dead</li>
        <li className='dropdown__item'>Deceased</li>
      </ul>
    </div>
  );
};

export default Dropdown;