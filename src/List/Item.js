// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const Item = (props: CommonProps) => (
  <li
    {...excludeProps(props)}
    style={props.style}
    className={classnames('scuba-list-li', props.className)}
  >
    <div>
      {props.children}
    </div>
  </li>
);

export default Item;
