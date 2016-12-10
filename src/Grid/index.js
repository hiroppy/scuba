import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './styles';

type GirdProps = {
  align?: 'top' | 'bottom' | 'center';
  responsive?: boolean;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' |  'space-between' | 'space-around';
};

export const Grid = (props: CommonProps & GirdProps) => {
  const className = classnames(
    (props.responsive ? 'scuba-grid-responsive' : null),
    props.className
  );

  const style = Object.assign(
    {},
    styles.grid,
    styles.gridAlign[props.align],
    { justifyContent: props.justifyContent },
    props.style
  );

  return (
    <div
      style={style}
      className={className}
    >
      {props.children}
    </div>
  );
};

Grid.defaultProps = {
  align         : 'top',
  responsive    : true,
  justifyContent: 'space-around'
};

type CellProps = {
  ratio?: number;
  align?: 'top' | 'bottom' | 'center';
  margin?: string | number;
  offset?: number;
  textAlign?: 'left' | 'center' | 'right';
};

export const Cell = (props: CommonProps & CellProps) => {
  const buildedStyle = {};

  if (props.ratio) {
    buildedStyle.width = `${100 * props.ratio}%`;
    buildedStyle.flex = 'none';
  }

  if (props.offset) {
    const per = `${100 * props.offset}%`;
    buildedStyle.flex = per;
    buildedStyle.marginLeft = per;
  }

  if (props.textAlign === 'left') buildedStyle.textAlign = 'left';
  if (props.textAlign === 'center') buildedStyle.textAlign = 'center';
  if (props.textAlign === 'right') buildedStyle.textAlign = 'right';

  Object.assign(
    buildedStyle,
    styles.cellAlign[props.align],
    (props.margin && !props.offset ? { margin: props.margin } : {})
  );

  const style = Object.assign({}, styles.cell, buildedStyle, props.style);

  const className = classnames(
    'scuba-cell',
    (props.offset ? 'scuba-cell-offset' : undefined),
    props.className
  );

  return (
    <div
      className={className}
      style={style}
    >
      {props.children}
    </div>
  );
};

Cell.defaultProps = {
  textAlign: 'center'
};
