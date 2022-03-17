import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__content">
        <h3 className='footer__header'>App created with The Breaking Bad API</h3>
        <p className='footer__text'>All details you can find at </p>
        <a className='footer__link' href="https://breakingbadapi.com/" target='_blank' rel="noreferrer">
          <i className="material-icons footer__icon">open_in_new</i>
          <p className='footer__link-text'>breakingbadapi.com</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;