import React from 'react';
import { shallow } from 'enzyme';
import { Blockquote } from '../../src';

describe('Blockquote component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <Blockquote {...props}>
        <p>hello</p>
      </Blockquote>
    );

    const blockquoteProps = wrapper.find('pre').props();

    expect(blockquoteProps.style).toEqual({
      background : '#fff',
      borderLeft : 'solid 3px',
      paddingLeft: 20
    });
    expect(blockquoteProps.className).toEqual('scuba-blockquote test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });
});
