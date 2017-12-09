import React from 'react';

import './HomePanel.css';

const HomePanel = ({ panelClass }) => (
  <section className={ panelClass }>
    <div className='panel-img'></div>
    <div className='panel-content'></div>
  </section>
);

export default HomePanel;
