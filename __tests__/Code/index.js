import React from 'react';
import { mount } from 'enzyme';
import { Code } from '../../src';

describe('Code component', () => {
  const createDOM = (props = {}) => {
    return mount(
      <Code {...props}>
        {props.children}
      </Code>
    );
  };

  it('should render self and subcomponents', () => {
    const wrapper = createDOM({
      style: {
        width: 100
      },
      className: 'test-class',
      children : <p>hello</p>
    });

    const codeProps = wrapper.find('pre').props();

    expect(typeof codeProps.id).toEqual('string');
    expect(codeProps.style).toEqual({
      width   : 100,
      position: 'relative'
    });
    expect(codeProps.className).toEqual('scuba-code test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });

  it('should create fileName Node', () => {
    const wrapper = createDOM({
      fileName: 'hoge'
    });

    const nodes = wrapper.find('div').props().children;

    expect(nodes[0].type).toEqual('style'); // only filename
    expect(nodes[1].type).toEqual('pre'); // only filename
  });

  it('should add language to className', () => {
    const wrapper = createDOM({
      language: 'javascript'
    });

    const codeProps = wrapper.find('pre').props().children.props;
    expect(codeProps.className).toEqual('javascript'); // only filename
  });
});
