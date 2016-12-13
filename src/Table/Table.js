// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const Table = (props: CommonProps) => (
  <table
    {...excludeProps(props)}
    style={Object.assign({}, styles.table, props.style)}
    className={props.className}
  >
    {props.children}
  </table>
);

export default Table;
