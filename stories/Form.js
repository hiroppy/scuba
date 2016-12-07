import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Container, { TextField, TextArea, SelectBox, Select } from '../src';

const styles = {
  box: {
    width  : 500,
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
    <Container theme="mikan" subColor="dark">
      <div style={styles.box}>
        <TextArea
          onChange={action('onChange')}
        />
      </div>
    </Container>
  </div>
)).add('Select', () => (
  <div style={styles.box}>
    <Container subColor="dark">
      <SelectBox>
        <Select>select-1</Select>
        <Select default>select-2</Select>
        <Select>select-3</Select>
        <Select value="4">select-4</Select>
      </SelectBox>
    </Container>

    <div style={{ paddingTop: 150 }} />
    <Container subColor="dark">
      <SelectBox
        listPosition="top"
      >
        <Select>select-1</Select>
        <Select>select-2</Select>
        <Select default>select-3</Select>
        <Select value="4">select-4</Select>
      </SelectBox>
    </Container>
  </div>
));
