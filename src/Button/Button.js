// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

type Props = {
  clear?: boolean;
  width?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor: string | 'none';
};

const createClasses = (disabled, className, clear): string => {
  if (disabled) return classnames('scuba-button-disabled', className);
  if (clear) return classnames('scuba-button-clear', className);
  return classnames('scuba-button', className);
};

const createBackground = (color): {backgroundColor?: string; } => {
  if (color === 'none') return { backgroundColor: 'transparent' };
  else if (typeof color === 'string') return { backgroundColor: color };
  return {};
};

const Button = (props: CommonProps & Props) => (
  <a
    {...excludeProps(props, ['clear', 'width', 'onClick', 'disabled', 'backgroundColor'])}
    style={
      Object.assign(
        {},
        (props.clear ? styles.clear : styles.base),
        (props.width ? { width: props.width } : {}),
        createBackground(props.backgroundColor),
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
