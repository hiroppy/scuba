// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import styles from './style';
import classnames from 'classnames';

const Blockquote = (props: CommonProps) => (
  <pre
    {...props}
    style={Object.assign({}, styles.pre, props.style)}
    className={classnames('scuba-blockquote', props.className)}
  >
    {props.children}
  </pre>
);

export default Blockquote;
