import React from 'react';
import {Container, Button, Blockquote} from '../../../../lib';
import styles from './style';

const Hero = () => (
  <div className={styles.container}>
    { /* <div className={styles.logo} /> */}
    <h1 style={{
      textAlign: 'center',
      fontSize: '5.0rem'
    }}>
      scuba
    </h1>
    <div className={styles.buttons}>
      <Container style={{display: 'inline'}}>
        <Button
          href="https://github.com/abouthiroppy/scuba"
          target="_blank"
        >
          Github
        </Button>
      </Container>
      <Container style={{display: 'inline'}} theme="mikan">
        <Button
          href="https://www.npmjs.com/package/scuba"
          target="_blank"
        >
          npmjs
        </Button>
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
