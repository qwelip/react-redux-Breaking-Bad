import React from 'react';
import './Checkboxes.css';

const Checkboxes = () => {
  return (
    <div className='checkboxes'>
      <p className='checkboxes__caption'>Appearances in episodes</p>
      <div className="checkboxes__inputs">
        <input id='box1' className='custom-checkbox' type='checkbox' value='1'/>
        <label htmlFor="box1">1</label>

        <input id='box2' className='custom-checkbox' type='checkbox' value='1'/>
        <label htmlFor="box2">2</label>

        <input id='box3' className='custom-checkbox' type='checkbox' value='1'/>
        <label htmlFor="box3">3</label>

        <input id='box4' className='custom-checkbox' type='checkbox' value='1'/>
        <label htmlFor="box4">4</label>

        <input id='box5' className='custom-checkbox' type='checkbox' value='1'/>
        <label htmlFor="box5">5</label>
      </div>
    </div>
  );
};

export default Checkboxes;