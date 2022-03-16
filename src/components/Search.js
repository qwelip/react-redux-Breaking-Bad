import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../store/filter/filter-action';
import { inputSelector } from '../store/filter/filter-selector';
import './Search.css';

const Search = () => {

  const dispatch = useDispatch();
  const inputValue = useSelector(state => inputSelector(state));

  return (
    <div className='search'>
      <input 
        className='search__input'
        type="text" 
        placeholder="Search by character's name"
        value={inputValue}
        onChange={(e) => dispatch(setInput(e.target.value))}
      />
    </div>
  );
};

export default Search;