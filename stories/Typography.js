import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container } from '../src';

storiesOf('Typography', module).add('list', () => (
  <Container>
    <h1>h1 Hello!</h1>
    <h2>h2 Hello!</h2>
    <h3>h3 Hello!</h3>
    <h4>h4 Hello!</h4>
    <h5>h5 Hello!</h5>
    <h6>h6 Hello!</h6>
  </Container>
));
