import React from 'react';
import styles from './styles';

export const H1 = (props) => (
  <h1
    className={props.className}
    style={Object.assign({}, styles.h1, props.style)}
  >
    {props.children}
  </h1>
);

export const H2 = (props) => (
  <h2
    className={props.className}
    style={Object.assign({}, styles.h2, props.style)}
  >
    {props.children}
  </h2>
);

export const H3 = (props) => (
  <h3
    className={props.className}
    style={Object.assign({}, styles.h3, props.style)}
  >
    {props.children}
  </h3>
);

export const H4 = (props) => (
  <h4
    className={props.className}
    style={Object.assign({}, styles.h4, props.style)}
  >
    {props.children}
  </h4>
);

export const H5 = (props) => (
  <h5
    className={props.className}
    style={Object.assign({}, styles.h5, props.style)}
  >
    {props.children}
  </h5>
);

export const H6 = (props) => (
  <h6
    className={props.className}
    style={Object.assign({}, styles.h6, props.style)}
  >
    {props.children}
  </h6>
);
