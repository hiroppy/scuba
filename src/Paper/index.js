import React from 'react';
import classnames from 'classnames';
import styles from './styles';

const Paper = (props) => (
  <div
    {...props}
    style={Object.assign({}, styles.container, props.style)}
    className={classnames('scuba-paper', props.className)}
  >
    {props.children}
  </div>
);

export default Paper;