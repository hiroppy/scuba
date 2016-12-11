// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

const TextArea = (props: CommonProps) => (
  <textarea
    {...props}
    style={Object.assign({}, styles.textField, props.style)}
    className={classnames('scuba-textform', props.className)}
  />
);

export default TextArea;
