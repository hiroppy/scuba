import React from 'react';
import { shallow } from 'enzyme';
import { Select } from '../../src';

describe('Select component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <Select {...props}>
        <p>hello</p>
      </Select>
    );

    const selectProps = wrapper.find('div').props();

    expect(selectProps.style).toEqual({
      cursor    : 'pointer',
      userSelect: 'none',
      background: '#fff'
    });
    expect(selectProps.className).toEqual('scuba-selectitem test-class');
    expect(selectProps['data-value']).toEqual(undefined);
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });

  it('should set data-value', () => {
    const props = {
      value  : 'yaaaa',
      default: true
    };

    const wrapper = shallow(<Select {...props} />);

    const selectProps = wrapper.find('div').props();

    expect(selectProps['data-value']).toEqual('yaaaa');
  });
});
