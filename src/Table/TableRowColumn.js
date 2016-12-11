// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

const TableRowColumn = (props: CommonProps) => (
  <td
    {...props}
    style={Object.assign({}, styles.td, props.style)}
  >
    {props.children}
  </td>
);

export default TableRowColumn;
