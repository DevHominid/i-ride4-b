import React, { Component } from 'react';

import HeaderMain from '../../components/header-main/HeaderMain';
import Main from '../main/Main';
import NavMain from '../../components/nav-main/NavMain';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  };

  toggleMenu() {
    const menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    return (
      <div>
        <HeaderMain toggleMenu={ this.toggleMenu } />
        <NavMain menuActive={this.state.menuActive} />
        <Main />
      </div>
    );
  };
};

export default App;
