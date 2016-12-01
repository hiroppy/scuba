import React from 'react';
import classnames from 'classnames';
import styles from './styles';

export const TextField = (props) => (
  <input
    type="text"
    style={styles.textField}
    className={classnames('scuba-textform', props.className)}
    {...props}
  />
);

export const TextArea = (props) => (
  <textarea
    style={styles.textField}
    className={classnames('scuba-textform', props.className)}
    {...props}
  >
  </textarea>
);
