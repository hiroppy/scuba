// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './styles';

type Props = {
  src?: string;
  width: number | string;
  height: number | string;
  form?: 'circle' | 'square';
};

const Avatar = (props: CommonProps & Props) => (
  <div
    className={classnames(
      (props.src ? undefined : 'scuba-avatar-no-img'),
      props.className
    )}
    style={Object.assign(
      {},
      (props.src ? { backgroundImage: `url(${props.src})` } : {}),
      styles.container,
      (props.width ? { width: props.width } : {}),
      (props.height ? { height: props.height } : {}),
      (props.form === 'circle' ? styles.circle : styles.square),
      props.style
    )}
  >
    {props.children}
  </div>
);

Avatar.defaultProps = {
  form: 'circle'
};

export default Avatar;
