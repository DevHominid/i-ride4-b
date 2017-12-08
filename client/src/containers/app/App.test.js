import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).to.equal(1);
  });
});
