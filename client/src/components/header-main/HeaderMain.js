import React from 'react';
import logoSrc from '../../images/logo-temp.png';

import Logo from '../logo/Logo';

import './HeaderMain.css';

const HeaderMain = () => (
  <header>
    <Logo imgSrc={ logoSrc } />
  </header>
);

export default HeaderMain;
