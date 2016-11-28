import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Container} from '../src';
import {H2} from '../src/Typography';

storiesOf('Palet', module).add('list', () => (
  <div
    style={{
      padding: 30
    }}
  >
    <Container theme={'sea'}>
      <H2>Sea</H2>
    </Container>
    <Container theme={'deepSea'}>
      <H2>DeepSea</H2>
    </Container>
    <Container theme={'sunset'}>
      <H2>Sunset</H2>
    </Container>
    <Container theme={'mint'}>
      <H2>Mint</H2>
    </Container>
    <Container theme={'mikan'}>
      <H2>Mikan</H2>
    </Container>
  </div>
));
