import React from 'react';
import { shallow } from 'enzyme';
import { Paper } from '../../src';

describe('Paper component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <Paper {...props}>
        <p>hello</p>
      </Paper>
    );

    const paperProps = wrapper.find('div').props();

    expect(paperProps.style).toEqual({
      padding     : 16,
      background  : '#fff',
      borderRadius: 5
    });
    expect(paperProps.className).toEqual('scuba-paper test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });
});
