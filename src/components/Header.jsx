import React from 'react';
import '../assets/styles/components/header.scss';
import { FaRegUser } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';

const Header = () => (
  <header>
    <div className="header__logo">
      <h1>Fracción 28</h1>
    </div>

    <div className="header__session">
      <div>
        <FaRegUser />
        <TiArrowSortedDown />
      </div>
    </div>
  </header>
);

export default Header;
