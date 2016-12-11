// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

const TableHeaderColumn = (props: CommonProps) => (
  <th
    {...props}
    style={Object.assign({}, styles.th, props.style)}
  >
    {props.children}
  </th>
);

export default TableHeaderColumn;
