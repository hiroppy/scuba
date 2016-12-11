// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

const TableHeader = (props: CommonProps) => (
  <thead
    {...props}
    className={classnames('scuba-tableheader', props.className)}
  >
    {props.children}
  </thead>
);

export default TableHeader;
