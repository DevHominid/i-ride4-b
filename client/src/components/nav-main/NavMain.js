import React from 'react';

import NavLink from '../nav-link/NavLink';

import './NavMain.css';

const NavMain = () => (
  <nav>
    <ul>
      <li><NavLink linkPath={'/'} linkText={'Home'} /></li>
      <li><NavLink linkPath={'/about'} linkText={'About'} /></li>
    </ul>
  </nav>
);

export default NavMain;
