import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import About from './About';

describe('<About />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.length).to.equal(1);
  });
});
