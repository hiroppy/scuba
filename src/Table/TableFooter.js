// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const TableFooter = (props: CommonProps) => (
  <tfoot
    {...excludeProps(props)}
    style={props.style}
    className={classnames('scuba-tablefooter', props.className)}
  >
    {props.children}
  </tfoot>
);

export default TableFooter;
