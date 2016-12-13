// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const TableHeaderColumn = (props: CommonProps) => (
  <th
    {...excludeProps(props)}
    style={Object.assign({}, styles.th, props.style)}
    className={props.className}
  >
    {props.children}
  </th>
);

export default TableHeaderColumn;
