import React from 'react';
import {Container, Button, Blockquote} from '../../../../lib';
import styles from './style';

const Hero = () => (
  <div className={styles.container}>
    <div className={styles.logo} />
    <div className={styles.buttons}>
      <Container style={{display: 'inline'}}>
        <Button>Github</Button>
      </Container>
      <Container style={{display: 'inline'}} theme="mikan">
        <Button>npmjs</Button>
      </Container>
    </div>
    <div className={styles.install}>
      <Blockquote style={{display: 'inline'}}>
        <code>
          $ npm install --save scuba
        </code>
      </Blockquote>
    </div>
  </div>
);

export default Hero;
