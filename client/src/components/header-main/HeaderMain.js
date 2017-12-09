import React from 'react';
import logoSrc from '../../images/logo-temp.png';

import Logo from '../logo/Logo';
import ButtonNav from '../button-nav/ButtonNav';

import './HeaderMain.css';

const HeaderMain = ({ toggleMenu, menuActive, navClass }) => (
  <header className='header-main'>
    <ButtonNav toggleMenu={ toggleMenu } menuActive={ menuActive } navClass={ navClass } />
    <Logo imgSrc={ logoSrc } />
  </header>
);

export default HeaderMain;
