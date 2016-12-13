// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const TextField = (props: CommonProps) => (
  <input
    {...excludeProps(props)}
    type="text"
    style={Object.assign({}, styles.textField, props.style)}
    className={classnames('scuba-textform', props.className)}
  />
);

export default TextField;
