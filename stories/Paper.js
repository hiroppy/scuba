import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Container, {Paper} from '../src';

storiesOf('Paper', module).add('list', () => (
  <div style={{padding: 30}}>
    <Container theme="sea">
      <Paper>
        <p>kami!</p>
      </Paper>
    </Container>
    <Container
      theme="mint"
      subColor="dark"
      style={{marginTop: 10}}
    >
      <Paper>
        <p>kami!</p>
      </Paper>
    </Container>
  </div>
));
