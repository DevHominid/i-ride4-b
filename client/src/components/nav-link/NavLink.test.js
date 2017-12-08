import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import NavLink from './NavLink';

describe('<NavLink />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<NavLink />);
    expect(wrapper.length).to.equal(1);
  });
});
