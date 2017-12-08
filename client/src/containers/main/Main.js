import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import About from '../about/About';

import './Main.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Switch>
  </main>
);

export default Main;
