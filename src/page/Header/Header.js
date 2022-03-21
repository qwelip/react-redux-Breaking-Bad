import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link className='header__link' to={'/'}>
        <div className="header__img-wrapper">
          <img className='header__logo' src={logo} alt="Лого" />
        </div>
        <h1 className='header__caption'>Learn about characters <br/> of Breaking Bad Series</h1>
      </Link>
    </header>
  );
};

export default Header;