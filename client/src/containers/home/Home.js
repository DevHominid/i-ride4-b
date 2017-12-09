import React from 'react';

import HomePanel from '../../components/home-panel/HomePanel';

import './Home.css';

const Home = () => (
  <section className='section-home'>
    <div className='heading-block'>
      <h1>What Do You</h1>
      <h1>Ride For?</h1>
    </div>
    <div className='panel-module'>
      <HomePanel panelClass={'panel panel-a'} />
      <HomePanel panelClass={'panel panel-b'} />
      <HomePanel panelClass={'panel panel-c'} />
    </div>
  </section>
);

export default Home;
