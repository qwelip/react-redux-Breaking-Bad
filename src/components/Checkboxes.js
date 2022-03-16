import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { episodesSelector } from '../store/filter/filter-selector';
import { setEpisodes } from '../store/filter/filter-action';
import './Checkboxes.css';

const Checkboxes = () => {

  const episodes = useSelector(state => episodesSelector(state));
  const dispatch = useDispatch();

  const checkStatus = (num) => {
    let t = episodes.some(item => +item === num);
    return t
  }

  const handleChange = (e) => {
    e.stopPropagation(); 
      dispatch(setEpisodes(e.target.value))
  } 

  return (
    <div className='checkboxes'>
      <p className='checkboxes__caption'>Appearances in episodes</p>

      <div 
        className="checkboxes__inputs">
        <input id='box1' className='custom-checkbox' type='checkbox' value='1' onChange={handleChange} checked={checkStatus(1)}/>
        <label className='label' htmlFor="box1">1</label>

        <input id='box2' className='custom-checkbox' type='checkbox' value='2' onChange={handleChange} checked={checkStatus(2)}/>
        <label className='label' htmlFor="box2">2</label>

        <input id='box3' className='custom-checkbox' type='checkbox' value='3' onChange={handleChange} checked={checkStatus(3)}/>
        <label className='label' htmlFor="box3">3</label>

        <input id='box4' className='custom-checkbox' type='checkbox' value='4' onChange={handleChange} checked={checkStatus(4)}/>
        <label className='label' htmlFor="box4">4</label>

        <input id='box5' className='custom-checkbox' type='checkbox' value='5' onChange={handleChange} checked={checkStatus(5)}/>
        <label className='label' htmlFor="box5">5</label>
      </div>
    </div>
  );
};

export default Checkboxes;