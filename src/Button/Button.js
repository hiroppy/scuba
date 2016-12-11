// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

type Props = {
  clear?: boolean;
  width?: string | number;
  onClick?: () => void;
  disabled?: boolean;
};

const createClasses = (disabled, className, clear): string => {
  if (disabled) return classnames('scuba-button-disabled', className);
  if (clear) return classnames('scuba-button-clear', className);
  return classnames('scuba-button', className);
};

const Button = (props: CommonProps & Props) => (
  <a
    style={
      Object.assign(
        {},
        (props.clear ? styles.clear : styles.base),
        (props.width ? { width: props.width } : {}),
        props.style
      )
    }
    onClick={() => props.onClick && !props.disabled ? props.onClick() : undefined}
    className={createClasses(props.disabled, props.className, props.clear)}
  >
    {props.children}
  </a>
);

export default Button;
