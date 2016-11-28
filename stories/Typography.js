import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
} from '../src/Typography';

storiesOf('Typography', module).add('list', () => (
  <div>
    <H1>Hello!</H1>
    <H2>Hello!</H2>
    <H3>Hello!</H3>
    <H4>Hello!</H4>
    <H5>Hello!</H5>
    <H6>Hello!</H6>
  </div>
)).add('colors', () => (
  <H1 style={{color: 'black'}}>Hello!</H1>
));
