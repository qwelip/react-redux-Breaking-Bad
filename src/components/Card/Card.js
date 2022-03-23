import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({
  img,
  name,
  nickname,
  status
}) => {
  const nameToSearch = name.split(' ').join('+')

  return (
    <div className='card'>
      <div className="card__img-wrapper">
        <img className='card__img' src={img} alt={name} />
      </div>
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
          <Link to={`/caracter/${nameToSearch}`}>
            <Button
              caption='Details'
              bgColor='#5CB85C'
              isActive={true}
            />
          </Link>
        </div>
    </div>
  );
};

export default Card;