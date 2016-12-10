// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './styles';

type Props = {
  backgroundColor: string;
};

const Paper = (props: CommonProps & Props) => (
  <div
    style={
      Object.assign(
        {},
        styles.container,
        (props.backgroundColor ? props.backgroundColor : {}),
        props.style
      )
    }
    className={classnames('scuba-paper', props.className)}
  >
    {props.children}
  </div>
);

export default Paper;
