// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

type Props= {
  type: 'none' |  'circle' | 'square' | 'decimal';
};

const List = (props: CommonProps & Props) => (
  <ul
    style={Object.assign(styles.ul, { listStyleType: props.type }, props.style)}
    className={classnames('scuba-list', props.className)}
  >
    {props.children}
  </ul>
);

export default List;
