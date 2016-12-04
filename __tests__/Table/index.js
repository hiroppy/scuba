import React from 'react';
import { shallow } from 'enzyme';
import {
  Table, TableHeader, TableHeaderColumn, TableFooter, TableBody, TableRow, TableRowColumn
} from '../../src';

describe('Table component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <Table {...props}>
        <p>hello</p>
      </Table>
    );

    const tableProps = wrapper.find('table').props();

    expect(tableProps.style).toEqual({
      width         : '100%',
      textAlign     : 'left',
      background    : '#fff',
      borderCollapse: 'collapse'
    });
    expect(tableProps.className).toEqual('test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });
});

describe('TableHeader component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <TableHeader {...props}>
        <p>hello</p>
      </TableHeader>
    );

    const tableHeaderProps = wrapper.find('thead').props();

    expect(tableHeaderProps.style).toEqual({
      background: '#fff'
    });
    expect(tableHeaderProps.className).toEqual('scuba-tableheader test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });
});

describe('TableHeaderColumn component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <TableHeaderColumn {...props}>
        <p>hello</p>
      </TableHeaderColumn>
    );

    const tableHeaderColumnProps = wrapper.find('th').props();

    expect(tableHeaderColumnProps.style).toEqual({
      padding   : '10px 5px',
      background: '#fff'
    });
    expect(tableHeaderColumnProps.className).toEqual('test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });
});

describe('TableFooter component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <TableFooter {...props}>
        <p>hello</p>
      </TableFooter>
    );

    const tableFooterProps = wrapper.find('tfoot').props();

    expect(tableFooterProps.style).toEqual({
      background: '#fff'
    });
    expect(tableFooterProps.className).toEqual('scuba-tablefooter test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });
});

describe('TableBody component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <TableBody {...props}>
        <p>hello</p>
      </TableBody>
    );

    const tableBodyProps = wrapper.find('tbody').props();

    expect(tableBodyProps.style).toEqual({
      background: '#fff'
    });
    expect(tableBodyProps.className).toEqual('test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });
});

describe('TableRow component', () => {
  const createDOM = (props) => {
    return shallow(
      <TableRow {...props}>
        <p>hello</p>
      </TableRow>
    );
  };

  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper =  createDOM(props);
    const tableHeaderProps = wrapper.find('tr').props();

    expect(tableHeaderProps.style).toEqual({
      textAlign : 'left',
      background: '#fff'
    });
    expect(tableHeaderProps.className).toEqual('test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });

  it('should set textAlign: center', () => {
    const props = {
      align: 'center'
    };

    const wrapper =  createDOM(props);
    const tableHeaderProps = wrapper.find('tr').props();

    expect(tableHeaderProps.style).toEqual({
      textAlign: 'center'
    });
  });

  it('should set textAlign: right', () => {
    const props = {
      align: 'right'
    };

    const wrapper =  createDOM(props);
    const tableHeaderProps = wrapper.find('tr').props();

    expect(tableHeaderProps.style).toEqual({
      textAlign: 'right'
    });
  });

  it('should set borderBottom to css', () => {
    const props = {
      borderBottom: true
    };

    const wrapper =  createDOM(props);
    const tableRowProps = wrapper.find('tr').props();
    expect(tableRowProps.className).toEqual('scuba-tablerow');
  });
});

describe('TableRowColumn component', () => {
  it('should render self and subcomponents', () => {
    const props = {
      style: {
        background: '#fff'
      },
      className: 'test-class'
    };

    const wrapper = shallow(
      <TableRowColumn {...props}>
        <p>hello</p>
      </TableRowColumn>
    );

    const tableProps = wrapper.find('td').props();

    expect(tableProps.style).toEqual({
      padding   : '10px 5px',
      background: '#fff'
    });
    expect(tableProps.className).toEqual('test-class');
    expect(wrapper.contains(<p>hello</p>)).toEqual(true);
  });
});

