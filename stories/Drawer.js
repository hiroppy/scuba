import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Container, { Drawer, Button } from '../src';

storiesOf('Drawer', module).add('normal', () => (
  <div style={{ padding: 30 }}>
    <Container theme="sea">
      <Drawer opened>
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
      </Drawer>
    </Container>
  </div>
)).add('add overlay', () => (
  <div style={{ padding: 30 }}>
    <Container theme="sea">
      <Drawer
        opened
        displayedOverlay
        position="right"
      >
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
      </Drawer>
    </Container>
  </div>
));
