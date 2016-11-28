import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {Container} from '../src';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
} from '../src/Typography';

storiesOf('Typography', module).add('list', () => (
  <Container>
    <H1>Hello!</H1>
    <H2>Hello!</H2>
    <H3>Hello!</H3>
    <H4>Hello!</H4>
    <H5>Hello!</H5>
    <H6>Hello!</H6>
  </Container>
)).add('colors', () => (
  <H1 style={{color: 'black'}}>Hello!</H1>
));
