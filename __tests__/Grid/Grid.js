import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../../src';

describe('Grid component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <Grid {...props}>
        <p>hello</p>
      </Grid>
    );

    const gridProps = wrapper.find('div').props();

    expect(gridProps.style).toEqual({
      width         : '100%',
      display       : 'flex',
      flexWrap      : 'wrap',
      alignItems    : 'flex-start',
      justifyContent: 'space-around',
      background    : '#fff'
    });
    expect(gridProps.className).toEqual('scuba-grid-responsive test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });

  it('should set align:bottom props', () => {
    const props = {
      align: 'bottom'
    };

    const wrapper = shallow(<Grid {...props} />);

    const gridProps = wrapper.find('div').props();

    expect(gridProps.style.alignItems).toEqual('flex-end');
  });

  it('should set align:center props', () => {
    const props = {
      align: 'center'
    };

    const wrapper = shallow(<Grid {...props} />);

    const gridProps = wrapper.find('div').props();

    expect(gridProps.style.alignItems).toEqual('center');
  });

  it('should set responsive props', () => {
    const props = {
      responsive: false
    };

    const wrapper = shallow(<Grid {...props} />);

    const gridProps = wrapper.find('div').props();

    expect(gridProps.className).toEqual('');
  });

  it('should set justifyContent props', () => {
    const props = {
      justifyContent: 'test'
    };

    const wrapper = shallow(<Grid {...props} />);

    const gridProps = wrapper.find('div').props();

    expect(gridProps.style.justifyContent).toEqual('test');
  });
});
