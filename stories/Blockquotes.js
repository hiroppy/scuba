import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Container, Blockquote } from '../src';

storiesOf('Blockquote', module).add('code', () => (
  <div
    style={{
      background: '#ccc',
      padding   : 10,
      height    : 500
    }}
  >
    <Container
      theme="sea"
      subColor="dark"
    >
      <Blockquote>
        <span>This is an example.</span>
        <div>Hello :)</div>
      </Blockquote>
    </Container>

    <Container
      theme="mint"
      subColor="light"
    >
      <Blockquote>
        <span>This is an example.</span>
        <p>Hello :)</p>
      </Blockquote>
    </Container>

    <Container
      theme="mikan"
      subColor="dark"
    >
      <Blockquote>
        <span>This is an example.</span>
      </Blockquote>
    </Container>
  </div>
));
