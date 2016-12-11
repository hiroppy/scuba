import React from 'react';
import { shallow } from 'enzyme';
import { Cell } from '../../src';

describe('Cell component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <Cell {...props}>
        <p>hello</p>
      </Cell>
    );

    const cellProps = wrapper.find('div').props();

    expect(cellProps.style).toEqual({
      flex      : 1,
      height    : '100%',
      alignSelf : 'flex-start',
      textAlign : 'center',
      background: '#fff'
    });
    expect(cellProps.className).toEqual('scuba-cell test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });

  it('should set align:bottom props', () => {
    const props = {
      align: 'bottom'
    };

    const wrapper = shallow(<Cell {...props} />);

    const cellProps = wrapper.find('div').props();

    expect(cellProps.style.alignSelf).toEqual('flex-end');
  });

  it('should set align:center props', () => {
    const props = {
      align: 'center'
    };

    const wrapper = shallow(<Cell {...props} />);

    const cellProps = wrapper.find('div').props();

    expect(cellProps.style.alignSelf).toEqual('center');
  });

  it('should calculate ratio', () => {
    const props = {
      ratio: 1 / 4
    };

    const wrapper = shallow(<Cell {...props} />);

    const cellProps = wrapper.find('div').props();

    expect(cellProps.style.flex).toEqual('none');
    expect(cellProps.style.width).toEqual('25%');
  });

  it('should calculate offset', () => {
    const props = {
      offset: 1 / 5
    };

    const wrapper = shallow(<Cell {...props} />);

    const cellProps = wrapper.find('div').props();

    expect(cellProps.style.flex).toEqual('20%');
    expect(cellProps.style.marginLeft).toEqual('20%');
  });
});
