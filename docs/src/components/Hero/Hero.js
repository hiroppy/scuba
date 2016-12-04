import React from 'react';
import Container, {Blockquote} from '../../../../lib';
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
