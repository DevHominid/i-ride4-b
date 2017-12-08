import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HeaderMain from './HeaderMain';
import Logo from '../logo/Logo';

describe('<HeaderMain />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<HeaderMain />);
    expect(wrapper.length).to.equal(1);
  });

  it('renders one <Logo /> component', () => {
    const wrapper = shallow(<HeaderMain />);
    expect(wrapper.find(Logo)).to.have.length(1);
  });
});
