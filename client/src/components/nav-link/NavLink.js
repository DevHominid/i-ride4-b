import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.css';

const NavLink = ({ linkPath, linkText, toggleMenu }) => (
  <Link to={ linkPath } onClick={ toggleMenu }>{linkText}</Link>
);

export default NavLink;
