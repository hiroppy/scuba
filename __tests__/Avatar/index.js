import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from '../../src';

describe('Avatar component', () => {
  const createDOM = (props = {}) => {
    return shallow(
      <Avatar {...props}>
        {props.children}
      </Avatar>
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

    const avatarProps = wrapper.find('div').props();

    expect(avatarProps.style).toEqual({
      width             : 100,
      height            : 60,
      display           : 'flex',
      justifyContent    : 'center',
      alignItems        : 'center',
      backgroundPosition: 'cover',
      backgroundSize    : 'cover',
      backgroundRepeat  : 'no-repeat',
      borderRadius      : '50%'
    });
    expect(avatarProps.className).toEqual('scuba-avatar-no-img test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });

  it('should change className and style when using src props', () => {
    const avatarProps = createDOM({
      src: 'image-src'
    }).find('div').props();

    expect(avatarProps.className).toEqual('');
    expect(avatarProps.style.backgroundImage).toEqual('url(image-src)');
  });

  it('should change style when useing width, height, form props', () => {
    const avatarProps = createDOM({
      width : 90,
      height: '100%',
      form  : 'square'
    }).find('div').props();

    expect(avatarProps.style.width).toEqual(90);
    expect(avatarProps.style.height).toEqual('100%');
    expect(avatarProps.style.borderRadius).toEqual(5);
  });
});
