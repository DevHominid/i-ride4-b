import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HomePanel from './HomePanel';

describe('<HomePanel />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<HomePanel />);
    expect(wrapper.length).to.equal(1);
  });
});
