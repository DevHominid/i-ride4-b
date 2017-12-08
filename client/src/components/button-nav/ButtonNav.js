import React, { Component } from 'react';

import './ButtonNav.css';

class ButtonNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonActive: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {
    console.log(target);
    if (this.state.buttonActive) {
      target.className = 'btn-nav';
    } else {
      target.className = 'btn-nav active';
    }

    const buttonState = !this.state.buttonActive;
    this.setState({
      buttonActive: buttonState
    });
  }

  render() {
    return (
      <button id='btn-nav' className='btn-nav' onClick={(e) => this.handleClick(e.currentTarget)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  }
};

export default ButtonNav;
