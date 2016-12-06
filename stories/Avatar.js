import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Container, { Avatar } from '../src';

storiesOf('Avatar', module).add('list', () => (
  <div style={{ padding: 30 }}>
    <Container theme="sea">
      <Avatar
        src="https://avatars2.githubusercontent.com/u/3367801?v=3&s=400"
      />
      <br />
      <Avatar
        src="https://avatars2.githubusercontent.com/u/3367801?v=3&s=400"
        form="square"
      />
      <br />
      <Avatar style={{ color: 'black' }}>
        <span>A</span>
      </Avatar>
      <br />
      <Avatar
        style={{ color: 'black' }}
        form="square"
      >
        <span>A</span>
      </Avatar>
    </Container>
  </div>
));
