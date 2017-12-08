import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';
import HeaderMain from '../../components/header-main/HeaderMain';

describe('<App />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).to.equal(1);
  });

  it('renders one <HeaderMain /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(HeaderMain)).to.have.length(1);
  });
});
