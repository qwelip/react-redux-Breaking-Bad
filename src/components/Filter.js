import React from 'react';
import './Filter.css';
import Search from './Search';
import Dropdown from './Dropdown';
import Checkboxes from './Checkboxes';
import Button from './Button';
import { resetFilter } from '../store/filter/filter-action';
import { useDispatch, useSelector } from 'react-redux';
import { allFilterSelector } from '../store/filter/filter-selector';

const Filter = () => {

  const filter = useSelector(state => allFilterSelector(state));
  const dispatch = useDispatch();

  return (
    <div className='filter'>
      <Search/>
      <Dropdown/>
      <Checkboxes/>
      <div className="filter__button">
        <Button
          caption='Clear filter'
          bgColor='#D9534F'
          handleClick={() => dispatch(resetFilter())}
          isActive={ !!filter.input || filter.status !== 'All' || filter.episodes.length !== 0 }
        />
      </div>
    </div>
  );
};

export default Filter;