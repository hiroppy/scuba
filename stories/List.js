import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {Container, List, Li} from '../src';

const styles = {
  light: {
    height: 500,
    padding: 10,
    background: '#eee'
  },
  dark: {
    height: 500,
    padding: 10,
    background: '#333'
  }
};

storiesOf('List', module).add('subColor is white', () => (
  <div style={styles.dark}>
    <Container>
      <List type="circle">
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container theme="deepSea">
      <List>
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container theme="sunset">
      <List type="square">
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container theme="mint">
      <List type="decimal">
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container theme="mikan">
      <List>
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container>
      <List type="none">
        <Li>order-1</Li>
        <Li>
          <dt>dt-tag</dt>
          <dd>dd-tag</dd>
        </Li>
      </List>
    </Container>
  </div>
)).add('subColor is dark', () => (
  <div style={styles.light}>
    <Container subColor="dark">
      <List type="circle">
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container
      theme="deepSea"
      subColor="dark"
    >
      <List>
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container
      theme="sunset"
      subColor="dark"
    >
      <List type="square">
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container
      theme="mint"
      subColor="dark"
    >
      <List type="decimal">
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container
      theme="mikan"
      subColor="dark"
    >
      <List>
        <Li>order-1</Li>
        <Li>order-2</Li>
      </List>
    </Container>
    <Container
      subColor="dark"
    >
      <List type="none">
        <Li>order-1</Li>
        <Li>
          <dt>dt-tag</dt>
          <dd>dd-tag</dd>
        </Li>
      </List>
    </Container>
  </div>
));
