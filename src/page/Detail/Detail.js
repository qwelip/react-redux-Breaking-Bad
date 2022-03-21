import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Tag from '../../components/Tag/Tag';
import Button from '../../components/Button/Button';
import { getDetails, getQuote, getDeathDetails, resetDetails } from '../../store/details/details-action';
import { infoSelector, detailsSelector } from '../../store/details/details-selector';
import './Detail.css';

const Detail = () => {

  const {name} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const info = useSelector(state => infoSelector(state));
  const {quote, deathDetails, nextCaracter} = useSelector(state => detailsSelector(state));


  const handleClick = () => {
    dispatch(getQuote(name));
  }

  useEffect(() => {
    dispatch(getDetails(name));
    dispatch(getDeathDetails(name));
    dispatch(getQuote(name));

    return () => {
      dispatch(resetDetails());
    }
  }, [name])

  return (
    <section className='detail'>
      <div className="detail__buttons">
        <Button
          bgColor='#5CB85C'
          caption='Back'
          handleClick={() => navigate(-1)}
          isActive={true}
        />
        {
          nextCaracter &&
          <Link to={`/caracter/${nextCaracter.split(' ').join('+')}`}>
            <Button
              bgColor='#5CB85C'
              caption={`Next: ${nextCaracter}`}
              isActive={true}
            />
          </Link>
        }
      </div>
      {info &&
        <section>
    
          <div className="detail__content">
    
            <div className="detail__flex-column">
              <div className="detail__img-wrapper">
                <img className='detail__img' src={info.img} alt={info.portrayed} />
              </div>
              <p className='detail__img-description'><strong>Actor: </strong>{info.portrayed}</p>
            </div>
    
            <div className="detail__flex-column detail__flex-column_last">
    
              <div className="detail__header">
                <div className="detail__info">
                  <h1 className='detail__title'>{info.name}</h1>
                  <p className='detail__header-description'><strong>Birthday: </strong>{info.birthday}</p>
                </div>
                <div className="detail__tags">
                  { 
                    info.occupation.map(item => {
                      return (
                        <Tag
                          key={item}
                          text={item}
                        />
                      )
                    })
                  }
                </div>
              </div>
    
              {
                info.status !== 'Alive' && deathDetails ?
                  <div className="detail__death-info">
                    <div className="detail__death">
                      <p className='detail__text1'>Killed by</p>
                      <p className='detail__text2'>{deathDetails.responsible}</p>
                    </div>
                    <div className="detail__death">
                      <p className='detail__text1'>Cause of death</p>
                      <p className='detail__text2'>{deathDetails.cause}</p>
                    </div>
                    <div className="detail__death">
                      <p className='detail__text1'>Last words</p>
                      <p className='detail__text2'>{deathDetails.last_words}</p>
                    </div>
                  </div>
                  : info.status !== 'Alive' ? 
                    <h2>Death details unknown</h2>
                  :
                  <div className="detail__death-info">
                    <h2>Alive. Yet</h2>
                  </div>
              }
    
              <div className="detail__quote">
                <Button
                  bgColor='#FFC107'
                  caption='Get quote'
                  handleClick={handleClick}
                  isActive={quote !== ''}
                />
                {
                  (quote && quote !== 'none') &&
                  <div className="detail__qoute-box">
                    <p className="detail__qoute-text">{`"${quote}"`}</p>
                  </div>
                }
              </div>
    
            </div>
          </div>
        </section>
      }
    </section>
  );
};

export default Detail;