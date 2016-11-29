import React from 'react';
import classnames from 'classnames';
import styles from './styles';

const createClasses = (disabled, className) => {
  if (disabled) return classnames('scuba-button-disabled', className);
  return classnames('scuba-button', className);
};

const Button = (props) => (
  <a
    style={Object.assign({}, styles.base, props.style)}
    onClick={() => props.onClick && !props.disabled ? props.onClick() : null}
    className={createClasses(props.disabled, props.className)}
  >
    {props.children}
  </a>
);

export default Button;
