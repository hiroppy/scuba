import React from 'react';
import classnames from 'classnames';
import styles from './styles';

const Button = (props) => (
  <a
    style={Object.assign({}, styles.base, props.style)}
    onClick={() => props.onClick ? props.onClick() : null}
    className={classnames('scuba-button', props.className)}
  >
    {props.children}
  </a>
);

export default Button;
