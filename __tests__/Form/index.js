import React from 'react';
import { shallow } from 'enzyme';
import { TextField, TextArea } from '../../src';

describe('TextField component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <TextField {...props} />
    );

    const textFieldProps = wrapper.find('input').props();

    expect(textFieldProps.style).toEqual({
      width       : '100%',
      padding     : '5px 5px 5px 10px',
      outline     : 'none',
      background  : '#fff',
      borderRadius: 4
    });
    expect(textFieldProps.type).toEqual('text');
    expect(textFieldProps.className).toEqual('scuba-textform test-class');
  });
});

describe('TextArea component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <TextArea {...props} />
    );

    const textFieldProps = wrapper.find('textarea').props();

    expect(textFieldProps.style).toEqual({
      width       : '100%',
      padding     : '5px 5px 5px 10px',
      outline     : 'none',
      background  : '#fff',
      borderRadius: 4
    });
    expect(textFieldProps.className).toEqual('scuba-textform test-class');
  });
});
