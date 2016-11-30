import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import {Container, TextField} from '../src';

const styles = {
  box: {
    width: 500,
    padding: 10
  }
};

storiesOf('Form', module).add('TextField', () => (
  <div>
    <Container>
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
    <Container theme="deepSea">
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
    <Container theme="sunset">
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
    <Container theme="mint">
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
    <Container theme="mikan">
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
  </div>
)).add('TextArea', () => (
  <div>
    <Container>
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
    <Container theme="deepSea">
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
    <Container theme="sunset">
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
    <Container theme="mint">
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
    <Container theme="mikan">
      <div style={styles.box}>
        <TextField
          onChange={action('onChange')}
        />
      </div>
    </Container>
  </div>
));
