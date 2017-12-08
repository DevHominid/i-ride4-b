import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from './Home';

describe('<Home />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.length).to.equal(1);
  });
});
