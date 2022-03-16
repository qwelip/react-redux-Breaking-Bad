import React from 'react';
import './Card.css';
import Button from './Button';
import volter from '../image/volter2.jpg';

const Card = () => {
  return (
    <div className='card'>
      <img className='card__img' src={volter} alt="" />
      <div className="card__details">
        <div className="card__info">
          <p className='card__first-text'>Name -</p>
          <p className='card__sec-text'>Walter White</p>
        </div>
        <div className="card__info">
          <p className='card__first-text'>Nickname -</p>
          <p className='card__sec-text'>Heisenberg</p>
        </div>
        <div className="card__info">
          <p className='card__first-text'>Status -</p>
          <p className='card__sec-text'>Presumed dead</p>
        </div>
      </div>
        <div className="card__separator"></div>
        <div className='card__button'>
          <Button
            caption='Details'
            bgColor='#5CB85C'
          />
        </div>
    </div>
  );
};

export default Card;