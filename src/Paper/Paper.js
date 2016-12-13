// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

type Props = {
  backgroundColor: string;
};

const Paper = (props: CommonProps & Props) => (
  <div
    {...excludeProps(props, ['backgroundColor'])}
    style={
      Object.assign(
        {},
        styles.container,
        (props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}),
        props.style
      )
    }
    className={classnames('scuba-paper', props.className)}
  >
    {props.children}
  </div>
);

export default Paper;
