import React, { Component } from 'react';

import './ButtonNav.css';

class ButtonNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonActive: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.navClass = 'btn-nav';
  }

  handleClick() {
    this.props.toggleMenu();
  }

  render() {
    return (
      <button id='btn-nav' className={this.props.navClass} onClick={this.handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  }
};

export default ButtonNav;
