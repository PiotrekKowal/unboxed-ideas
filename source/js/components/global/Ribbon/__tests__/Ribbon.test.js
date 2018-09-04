import React from 'react';
import { shallow } from 'enzyme';
import Ribbon from '../Ribbon';

it('should exist', () => {
  expect(typeof Ribbon.prototype.constructor).toEqual('function');
});

it('should render', () => {
  const wrapper = shallow(<Ribbon />);
  expect(wrapper.exists()).toBe(true);
});

it('should accept children', () => {
  const wrapper = shallow(
    <Ribbon>
      <div>text</div>
      <div />
    </Ribbon>
  );
  expect(wrapper.children().length).toBe(2);
  expect(wrapper.text()).toBe('text');
});

describe('Props', () => {
  it('should accept className', () => {
    const className = 'testClass';
    const wrapper = shallow(<Ribbon className={ className } />);
    expect(wrapper.find(`.${ className }`).length).toBe(1);
  });

  it('should accept any prop', () => {
    const wrapper = shallow(
      <Ribbon
        firstProp='firstProp'
        secondProp={ 2 }
      />);
    expect(wrapper.prop('firstProp')).toBe('firstProp');
    expect(wrapper.prop('secondProp')).toBe(2);
  });
});
