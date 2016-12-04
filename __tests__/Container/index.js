// [TODO] wip

import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../src';

describe('Container component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
    };

    wrapper = shallow(<Container {...props} />);
  });

  it('should render self and subcomponents', () => {
    const containerProps = wrapper.find('div').props();

    expect(typeof containerProps.id).toEqual('string');
    expect(typeof containerProps.className).toEqual('undefined');
    expect(containerProps.children.length).toEqual(4);
  });
});
