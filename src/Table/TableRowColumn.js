// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const TableRowColumn = (props: CommonProps) => (
  <td
    {...excludeProps(props)}
    style={Object.assign({}, styles.td, props.style)}
    className={props.className}
  >
    {props.children}
  </td>
);

export default TableRowColumn;
