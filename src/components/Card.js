import React from 'react';
import './Card.css';
import Button from './Button';

const Card = ({
  img,
  name,
  nickname,
  status
}) => {
  return (
    <div className='card'>
      <img className='card__img' src={img} alt="" />
      <div className="card__details">
        <div className="card__info">
          <p className='card__first-text'>Name -</p>
          <p className='card__sec-text'>{name}</p>
        </div>
        <div className="card__info">
          <p className='card__first-text'>Nickname -</p>
          <p className='card__sec-text'>{nickname}</p>
        </div>
        <div className="card__info">
          <p className='card__first-text'>Status -</p>
          <p className='card__sec-text'>{status}</p>
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