// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

const Blockquote = (props: CommonProps) => (
  <pre
    {...excludeProps(props)}
    style={Object.assign({}, styles.pre, props.style)}
    className={classnames('scuba-blockquote', props.className)}
  >
    {props.children}
  </pre>
);

export default Blockquote;
