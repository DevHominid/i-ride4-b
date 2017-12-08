import React, { Component } from 'react';

import NavLink from '../nav-link/NavLink';

import './NavMain.css';

class NavMain extends Component {
  render() {
    let menu;
    if (this.props.menuActive) {
      menu = <nav>
               <ul>
                 <li><NavLink linkPath={'/'} linkText={'Home'} toggleMenu={this.props.toggleMenu} /></li>
                 <li><NavLink linkPath={'/about'} linkText={'About'} toggleMenu={this.props.toggleMenu} /></li>
               </ul>
             </nav>;
    } else {
      menu = '';
    }
    return (
      <div id='menu'>
        {menu}
      </div>
    );
  };
};

export default NavMain;
