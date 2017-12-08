import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Logo from './Logo';

describe('<Logo />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.length).to.equal(1);
  });
});
