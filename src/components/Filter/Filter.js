import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../Search/Search';
import Dropdown from '../Dropdown/Dropdown';
import Checkboxes from '../Checkboxes/Checkboxes';
import Button from '../Button/Button';
import { resetFilter } from '../../store/filter/filter-action';
import { allFilterSelector } from '../../store/filter/filter-selector';
import './Filter.css';

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