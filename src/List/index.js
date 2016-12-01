import React from 'react';
import classnames from 'classnames';
import styles from './styles';

type ListType= {
  type: 'none' |  'circle' | 'square' | 'decimal';
};

export const List = (props) => (
  <ul
    style={Object.assign(styles.ul, {listStyleType: props.type}, props.style)}
    className={classnames('scuba-list', props.className)}
  >
    {props.children}
  </ul>
);

export const Li = (props) => (
  <li
    style={props.style}
    className={classnames('scuba-list-li', props.className)}
  >
    <div>
      {props.children}
    </div>
  </li>
);
