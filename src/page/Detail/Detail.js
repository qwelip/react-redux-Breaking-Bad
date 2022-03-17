import React from 'react';
import Button from '../../components/Button/Button';
import volter from '../../image/volter2.jpg';
import Tag from '../../components/Tag/Tag';
import './Detail.css';

const Detail = () => {
  return (
    <section className='detail'>
      <div className="detail__buttons">
        <Button
          bgColor='#5CB85C'
          caption='Back'
        />
        <Button
          bgColor='#5CB85C'
          caption='Walter White'
        />
      </div>

      <div className="detail__content">

        <div className="detail__flex-column">

          <div className="detail__img-wrapper">
            <img className='detail__img' src={volter} alt="" />
          </div>
          <p className='detail__img-description'><strong>Actor: </strong>Bryan Cranston</p>
        </div>

        <div className="detail__flex-column">

          <div className="detail__header">
            <div className="detail__info">
              <h1 className='detail__title'>Walter White</h1>
              <p className='detail__header-description'><strong>Birthday: </strong>09-07-1958</p>
            </div>
            <div className="detail__tags">
              <Tag
                text='High School Chemistry Teacher'
              />
              <Tag
                text='Meth King Pin'
              />
            </div>
          </div>

          <div className="detail__death-info">
            <div className="detail__death">
              <p className='detail__text1'>Killed by</p>
              <p className='detail__text2'>Walter White</p>
            </div>
            <div className="detail__death">
              <p className='detail__text1'>Cause of death</p>
              <p className='detail__text2'>Shot by remote-activated machine gun.</p>
            </div>
            <div className="detail__death">
              <p className='detail__text1'>Last words</p>
              <p className='detail__text2'>Well... goodbye Lydia</p>
            </div>
          </div>

          <div className="detail__quote">
            <Button
              bgColor='#FFC107'
              caption='Get random quote'
            />
            <div className="detail__qoute-box">
              <p className="detail__qoute-text">“Funyuns are awesome”</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Detail;