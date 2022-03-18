import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
  // todo сделать ссылку на главную через лого
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="Лого" />
      <h1 className='header__caption'>Breaking Bad <br/> Wiki</h1>
    </header>
  );
};

export default Header;