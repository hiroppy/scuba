import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Container from '../src';

storiesOf('Palet', module).add('list', () => (
  <div style={{padding: 30}}>
    <Container theme="sea">
      <h2>Sea</h2>
    </Container>
    <Container theme="deepSea">
      <h2>DeepSea</h2>
    </Container>
    <Container theme="sunset">
      <h2>Sunset</h2>
    </Container>
    <Container theme="mint">
      <h2>Mint</h2>
    </Container>
    <Container theme="mikan">
      <h2>Mikan</h2>
    </Container>
  </div>
));
