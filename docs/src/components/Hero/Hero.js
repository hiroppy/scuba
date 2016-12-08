import React from 'react';
import { Link } from 'react-router';
import InlineSVG from 'svg-inline-react';
import Container, { Blockquote, Grid, Cell, Paper } from '../../../../src';
import styles from './style';
import logo from '../../../images/icon.svg';

const Hero = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <InlineSVG src={logo} />
    </div>
    <h1 className={styles.title}>Scuba</h1>
    <p>UI components with color unity that built by React.</p>
    <div className={styles.install}>
      <Blockquote style={{ display: 'inline' }}>
        <code>
          $ npm install --save scuba
        </code>
      </Blockquote>
      <Grid className={styles.buttons}>
        <Cell>
          <Link to="/getting-started">
            <Paper>
              <span>Getting Started</span>
            </Paper>
          </Link>
        </Cell>
        <Cell>
          <Link to="/components">
            <Paper>
              <span>Components</span>
            </Paper>
          </Link>
        </Cell>
      </Grid>
    </div>
  </div>
);

export default Hero;
