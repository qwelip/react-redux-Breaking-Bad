import React from 'react';
import './Filter.css';
import Search from './Search';
import Dropdown from './Dropdown';
import Checkboxes from './Checkboxes';
import Button from './Button';

const Filter = () => {
  return (
    <div className='filter'>
      <Search/>
      <Dropdown/>
      <Checkboxes/>
      <div className="filter__button">
        <Button
          caption='Clear filter'
          bgColor='#D9534F'
        />
      </div>
    </div>
  );
};

export default Filter;