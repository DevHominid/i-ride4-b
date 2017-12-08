import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HeaderMain from './HeaderMain';

describe('<HeaderMain />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<HeaderMain />);
    expect(wrapper.length).to.equal(1);
  });
});
