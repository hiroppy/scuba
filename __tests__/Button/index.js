import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../src';

describe('Button component', () => {
  const createDOM = (props = {}) => {
    return shallow(
      <Button {...props}>
        {props.children}
      </Button>
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

    const buttonProps = wrapper.find('a').props();

    expect(buttonProps.style).toEqual({
      margin      : 0,
      width       : 100,
      cursor      : 'pointer',
      display     : 'inline-block',
      outline     : 'none',
      padding     : '5px 15px',
      fontSize    : '1.0rem',
      textAlign   : 'center',
      fontWeight  : 400,
      lineHeight  : 1.5,
      userSelect  : 'none',
      borderWidth : 1,
      borderStyle : 'solid',
      borderRadius: '5px'
    });
    expect(buttonProps.className).toEqual('scuba-button test-class');
    expect(typeof buttonProps.onClick).toEqual('function');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });

  it('should execute onClick', () => {
    const props = {
      onClick: jest.fn()
    };

    const buttonProps = createDOM(props).find('a').props();

    buttonProps.onClick();

    expect(props.onClick.mock.calls.length).toEqual(1);
  });

  it('should fail to execute onClick', () => {
    const props = {
      onClick : jest.fn(),
      disabled: true
    };

    const buttonProps = createDOM(props).find('a').props();

    buttonProps.onClick();

    expect(props.onClick.mock.calls.length).toEqual(0);
  });

  it('should change className for disabled button', () => {
    const buttonProps = createDOM({
      disabled: true
    }).find('a').props();

    expect(buttonProps.style).toEqual({
      margin      : 0,
      cursor      : 'pointer',
      display     : 'inline-block',
      outline     : 'none',
      padding     : '5px 15px',
      fontSize    : '1.0rem',
      textAlign   : 'center',
      fontWeight  : 400,
      lineHeight  : 1.5,
      userSelect  : 'none',
      borderWidth : 1,
      borderStyle : 'solid',
      borderRadius: '5px'
    });

    expect(buttonProps.className).toEqual('scuba-button-disabled');
  });

  it('should change className and css for clear button', () => {
    const buttonProps = createDOM({
      clear: true
    }).find('a').props();

    expect(buttonProps.style).toEqual({
      margin      : 0,
      border      : 'none',
      cursor      : 'pointer',
      display     : 'inline-block',
      outline     : 'none',
      padding     : '5px 15px',
      fontSize    : '1.0rem',
      textAlign   : 'center',
      fontWeight  : 400,
      lineHeight  : 1.5,
      userSelect  : 'none',
      borderWidth : 1,
      borderStyle : 'solid',
      borderRadius: '5px'
    });

    expect(buttonProps.className).toEqual('scuba-button-clear');
  });
});
