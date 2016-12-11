// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

const TableBody = (props: CommonProps) => (
  <tbody
    {...props}
  >
    {props.children}
  </tbody>
);

export default TableBody;
