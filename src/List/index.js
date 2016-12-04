// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './styles';

type Props= {
  type: 'none' |  'circle' | 'square' | 'decimal';
};

export const List = (props: CommonProps & Props) => (
  <ul
    style={Object.assign(styles.ul, { listStyleType: props.type }, props.style)}
    className={classnames('scuba-list', props.className)}
  >
    {props.children}
  </ul>
);

export const Li = (props: CommonProps) => (
  <li
    style={props.style}
    className={classnames('scuba-list-li', props.className)}
  >
    <div>
      {props.children}
    </div>
  </li>
);
