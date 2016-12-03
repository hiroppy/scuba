import React from 'react';
import classnames from 'classnames';
import styles from './styles';

export const TextField = (props) => (
  <input
    {...props}
    type="text"
    style={Object.assign({}, styles.textField, props.style)}
    className={classnames('scuba-textform', props.className)}
  />
);

export const TextArea = (props) => (
  <textarea
    {...props}
    style={Object.assign({}, styles.textField, props.style)}
    className={classnames('scuba-textform', props.className)}
  >
  </textarea>
);
