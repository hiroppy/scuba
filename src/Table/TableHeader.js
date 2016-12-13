// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const TableHeader = (props: CommonProps) => (
  <thead
    {...excludeProps(props)}
    style={props.style}
    className={classnames('scuba-tableheader', props.className)}
  >
    {props.children}
  </thead>
);

export default TableHeader;
