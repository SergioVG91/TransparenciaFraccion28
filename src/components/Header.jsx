import React from 'react';
import '../assets/styles/components/header.scss';
import { FaRegUser } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <div className="header__logo">
        <h1>Procedimientos de Adjudicación</h1>
      </div>
    </Link>
    <Link to="/login">
      <div className="header__session">
        <div>
          <FaRegUser />
          <TiArrowSortedDown />
        </div>
      </div>
    </Link>
  </header>
);

export default Header;
