import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import ButtonNav from './ButtonNav';

describe('<ButtonNav />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<ButtonNav />);
    expect(wrapper.length).to.equal(1);
  });

  it('renders three <span> elements', () => {
    const wrapper = shallow(<ButtonNav />);
    expect(wrapper.find('span')).to.have.length(3);
  });
});
