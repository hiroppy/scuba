// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './styles';

type Props = {
  clear?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const createClasses = (disabled, className, clear): string => {
  if (disabled) return classnames('scuba-button-disabled', className);
  if (clear) return classnames('scuba-button-clear', className); // [TODO] fix
  return classnames('scuba-button', className);
};

const Button = (props: CommonProps & Props) => (
  <a
    {...props}
    style={Object.assign({}, styles.base, props.clear ? styles.clear : props.style)}
    onClick={() => props.onClick && !props.disabled ? props.onClick() : null}
    className={createClasses(props.disabled, props.className, props.clear)}
  >
    {props.children}
  </a>
);

export default Button;
