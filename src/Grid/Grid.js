import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

type GirdProps = {
  align?: 'top' | 'bottom' | 'center';
  responsive?: boolean;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' |  'space-between' | 'space-around';
};

const Grid = (props: CommonProps & GirdProps) => {
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
      {...excludeProps(props, ['align', 'responsive', 'justifyContent'])}
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

export default Grid;
