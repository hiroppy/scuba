// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const createAlignStyle = (
  align: 'left' | 'center' | 'right'
): {textAlign: string; } => {
  if (align === 'left') return { textAlign: 'left' };
  if (align === 'center') return { textAlign: 'center' };
  if (align === 'right') return { textAlign: 'right' };
  return { textAlign: 'left' };
};

type TableRowProps = {
  align: 'left' | 'center' | 'right';
  borderBottom: boolean;
};

const TableRow = (props: CommonProps & TableRowProps) => (
  <tr
    {...excludeProps(props, ['align', 'borderBottom'])}
    style={Object.assign({}, createAlignStyle(props.align), props.style)}
    className={classnames((props.borderBottom ? 'scuba-tablerow' : ''), props.className)}
  >
    {props.children}
  </tr>
);

export default TableRow;
