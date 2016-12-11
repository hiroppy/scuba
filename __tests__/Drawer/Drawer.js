import React from 'react';
import { shallow } from 'enzyme';
import { Drawer } from '../../src';

describe('Drawer component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <Drawer {...props}>
        <p>hello</p>
      </Drawer>
    );

    const drawerProps = wrapper.find('.scuba-drawer').props();

    // When displayedoverlay is true, nodes's length is 3.
    expect(wrapper.find('div').nodes.length).toEqual(2);
    expect(drawerProps.style).toEqual({
      top       : 0,
      width     : 200,
      height    : '100%',
      zIndex    : 2000,
      padding   : 10,
      position  : 'fixed',
      transition: 'transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms',
      left      : 0,
      background: '#fff',
      transform : 'translate(-220px, 0)' // close
    });
    expect(drawerProps.className).toEqual('scuba-drawer test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });

  it('should set width, position, paddingWidth props', () => {
    const props = {
      width       : 1250,
      position    : 'right',
      paddingWidth: 100
    };

    const wrapper = shallow(<Drawer {...props} />);

    const drawerProps = wrapper.find('.scuba-drawer').props();

    expect(drawerProps.style.width).toEqual(1250);

    // position
    expect(drawerProps.style.right).toEqual(0);
    expect(drawerProps.style.left).toEqual(undefined);

    expect(drawerProps.style.paddingLeft).toEqual(100);
    expect(drawerProps.style.paddingRight).toEqual(100);
  });

  it('should open drawer', () => {
    const wrapper = shallow(<Drawer opened />);

    const drawerProps = wrapper.find('.scuba-drawer').props();

    expect(drawerProps.style.transform).toEqual('translate(0, 0)');
  });

  it('should display overlay', () => {
    const props = {
      opened          : true,
      displayedOverlay: true
    };

    const wrapper = shallow(<Drawer {...props} />);

    const overlayProps = wrapper.find('div').nodes[1].props;

    expect(overlayProps.style).toEqual({
      top       : 0,
      left      : 0,
      width     : '100vw',
      height    : '100vh',
      zIndex    : 1999,
      opacity   : '.6',
      position  : 'fixed',
      background: '#363636'
    });
  });

  xit('should close Drawer when clicked an overlay', () => {

  });
});
