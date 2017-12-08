import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.css';

const NavLink = ({ linkPath, linkText }) => (
  <Link to={ linkPath }>{linkText}</Link>
);

export default NavLink;
