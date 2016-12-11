// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

const TableFooter = (props: CommonProps) => (
  <tfoot
    {...props}
    className={classnames('scuba-tablefooter', props.className)}
  >
    {props.children}
  </tfoot>
);

export default TableFooter;
