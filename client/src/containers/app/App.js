import React, { Component } from 'react';

import HeaderMain from '../../components/header-main/HeaderMain';
import Main from '../main/Main';
import NavMain from '../../components/nav-main/NavMain';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
      navClass: 'btn-nav'
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  };

  toggleMenu() {
    const menuState = !this.state.menuActive;
    let navClassState = this.state.navClass;
    if (navClassState === 'btn-nav') {
      navClassState = 'btn-nav active';
    } else {
      navClassState = 'btn-nav';
    }
    this.setState({
      menuActive: menuState,
      navClass: navClassState
    });
  }

  render() {
    return (
      <div>
        <HeaderMain toggleMenu={ this.toggleMenu } menuActive={this.state.menuActive} navClass={this.state.navClass} />
        <NavMain toggleMenu={ this.toggleMenu } menuActive={this.state.menuActive} />
        <Main />
      </div>
    );
  };
};

export default App;
