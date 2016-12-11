// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

type SelectProps = {
  default?: boolean;
  value?: string;
};

const Select = (props: CommonProps & SelectProps) => (
  <div
    style={Object.assign(
      {},
      styles.select,
      props.style
    )}
    data-value={props.value}
    className={classnames('scuba-selectitem', props.className)}
  >
    {props.children}
  </div>
);

export default Select;
