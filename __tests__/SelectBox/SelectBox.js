import React from 'react';
import { shallow } from 'enzyme';
import { SelectBox } from '../../src';

describe('SelectBox component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <SelectBox {...props}>
        <p>hello</p>
      </SelectBox>
    );

    // container
    expect(wrapper.find('div').length).toEqual(4);

    const containerProps = wrapper.find('div').nodes[0].props;

    expect(containerProps.className).toEqual('scuba-selectcontainer');
    expect(containerProps.style).toEqual({
      width        : '100%',
      position     : 'relative',
      paddingBottom: 10
    });

    // selectBox
    const selectBoxProps = wrapper.find('div').nodes[1].props;

    expect(selectBoxProps.style).toEqual({
      cursor    : 'pointer',
      textAlign : 'left',
      userSelect: 'none',
      background: '#fff'
    });
    expect(typeof selectBoxProps.onClick).toEqual('function');
    expect(selectBoxProps.className).toEqual('scuba-selectbox test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);

    // selectList
    const selectListProps = wrapper.find('div').nodes[2].props;

    expect(selectListProps.style).toEqual({
      display  : 'none',
      top      : '100%',
      width    : '100%',
      zIndex   : 1200,
      padding  : 20,
      position : 'absolute',
      textAlign: 'left',
      overflowY: 'auto'
    });
    expect(typeof selectListProps.onClick).toEqual('function');
    expect(selectListProps.className).toEqual('scuba-selectlist');

    // selectBoxArrow
    const selectBoxArrowProps = wrapper.find('div').nodes[3].props;

    expect(selectBoxArrowProps.style).toEqual({
      top          : 0,
      cursor       : 'pointer',
      right        : 5,
      width        : 20,
      height       : 20,
      bottom       : 0,
      margin       : 'auto',
      fontSize     : '.9rem',
      position     : 'absolute',
      pointerEvents: 'none'
    });
  });

  xit('should set custom props', () => {

  });

  xit('should open SelectList when clicked SelectBox', () => {

  });

  xit('should select column when clicked Selectlist', () => {

  });
});
