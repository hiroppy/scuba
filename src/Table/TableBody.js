// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const TableBody = (props: CommonProps) => (
  <tbody
    {...excludeProps(props)}
    style={props.style}
    className={props.className}
  >
    {props.children}
  </tbody>
);

export default TableBody;
