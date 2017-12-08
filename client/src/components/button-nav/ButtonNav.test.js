import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ButtonNav from './ButtonNav';

describe('<ButtonNav />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<ButtonNav />);
    expect(wrapper.length).to.equal(1);
  });

  it('renders an `#btn-nav`', () => {
    const wrapper = shallow(<ButtonNav />);
    expect(wrapper.find('#btn-nav')).to.have.length(1);
  });

  it('renders three <span> elements', () => {
    const wrapper = shallow(<ButtonNav />);
    expect(wrapper.find('span')).to.have.length(3);
  });

  it('changes state onClick', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow((
      <ButtonNav onButtonClick={onButtonClick} />
    ));
    const mockEvent = { currentTarget: {} }
    wrapper.find('#btn-nav').simulate('click', mockEvent);
    expect(wrapper.state().buttonActive).to.equal(true);
  });
});
