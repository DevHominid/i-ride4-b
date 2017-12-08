import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import NavMain from './NavMain';

describe('<NavMain />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<NavMain />);
    expect(wrapper.length).to.equal(1);
  });
});
