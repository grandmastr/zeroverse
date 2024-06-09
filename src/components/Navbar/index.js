import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {Logo} from '../../assets/svg';

const index = () => {
  return (
      <header className="container">
        <NavLink to="/"><img src={Logo} alt="zeroverse logo"/></NavLink>
        <div className={style['social-links']}/>
      </header>
  );
};

export default index;
