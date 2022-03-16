import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusSelector } from '../store/filter/filter-selector';
import { dropdownStateSelector } from '../store/filter/filter-selector';
import { setStatus } from '../store/filter/filter-action';
import { setDropdownState } from '../store/filter/filter-action';
import './Dropdown.css';

const Dropdown = () => {

  const status = useSelector(state => statusSelector(state));
  const isDropdownOpened = useSelector(state => dropdownStateSelector(state));
  const dispatch = useDispatch();

  return (
    <div className='dropdown' onClick={(e) => {e.stopPropagation(); dispatch(setDropdownState())}}>
      <p className='dropdown__caption'>Status</p>
      <p className='dropdown__type'>{status}</p>
      <i className="material-icons dropdown__icon">arrow_drop_down</i>

      <ul 
        className={ isDropdownOpened ? 'dropdown__menu dropdown__menu_visible' : 'dropdown__menu'} 
        onClick={(e) => {e.stopPropagation(); dispatch(setStatus(e.target.innerText))}}
      >
        <li className='dropdown__item'>All</li>
        <li className='dropdown__item'>Alive</li>
        <li className='dropdown__item'>Presumed dead</li>
        <li className='dropdown__item'>Deceased</li>
      </ul>
    </div>
  );
};

export default Dropdown;