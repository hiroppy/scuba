// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';


const Table = (props: CommonProps) => (
  <table
    {...props}
    style={Object.assign({}, styles.table, props.style)}
  >
    {props.children}
  </table>
);

export default Table;
