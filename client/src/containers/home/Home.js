import React from 'react';

import HomePanel from '../../components/home-panel/HomePanel';

import './Home.css';

const Home = () => (
  <section className='section-home'>
    <div className='panel-module'>
      <HomePanel panelClass={'panel panel-a'} />
      <HomePanel panelClass={'panel panel-b'} />
      <HomePanel panelClass={'panel panel-c'} />
    </div>
  </section>
);

export default Home;
