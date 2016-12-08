import React from 'react';
import { shallow } from 'enzyme';
import { List, Item } from '../../src';

describe('List component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <List {...props}>
        <p>hello</p>
      </List>
    );

    const listProps = wrapper.find('ul').props();

    expect(listProps.style).toEqual({
      margin       : 0,
      listStyleType: undefined,
      background   : '#fff'
    });
    expect(listProps.className).toEqual('scuba-list test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });

  it('should insert listStyleType to list\'s css', () => {
    const props = {
      type: 'circle'
    };

    const listProps = shallow(
      <List {...props}>
        <p>hello</p>
      </List>
    ).find('ul').props();

    expect(listProps.style).toEqual({
      margin       : 0,
      listStyleType: 'circle',
      background   : '#fff'
    });
  });
});

describe('Item component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <Item {...props}>
        <p>hello</p>
      </Item>
    );

    const liProps = wrapper.find('li').props();

    expect(liProps.style).toEqual({
      background: '#fff'
    });
    expect(liProps.className).toEqual('scuba-list-li test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });
});
