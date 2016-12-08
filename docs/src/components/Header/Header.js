import React from 'react';
import { Link } from 'react-router';
import GithubCorner from 'react-github-corner';
import styles from './style';
import { SelectBox, Select, TextField, Grid, Cell } from '../../../../src';

const Header = (props) => (
  <header
    className={styles.container}
    style={{ backgroundColor: props.themeHex }}
  >
    <div className={styles.topBox}>
      <section className={styles.linkSection}>
        <Link to="concept">Concept</Link>
        <Link to="components">Components</Link>
      </section>
    </div>
    <div className={styles.bottomBox}>
      <Grid
        align="center"
        style={{
          alignItems: 'center',
          maxWidth  : 400
        }}
      >
        <Cell
          align="center"
          style={{ lineHeight: 2.5, height: '100%' }}
        >
          <div className={styles.selectBox}>
            <SelectBox
              width={120}
              listPosition="top"
              onChange={(value) => props.changeTheme(value)}
            >
              <Select value="sea" selected>Sea</Select>
              <Select value="deepSea">DeepSea</Select>
              <Select value="sunset">Sunset</Select>
              <Select value="mint">Mint</Select>
              <Select value="mikan">Mikan</Select>
            </SelectBox>
            <SelectBox
              width={120}
              listPosition="top"
              onChange={(value) => props.changeSubColor(value)}
            >
              <Select value="light" selected>Light</Select>
              <Select value="dark">Dark</Select>
            </SelectBox>
          </div>
        </Cell>
        <Cell
          align="center"
          style={{ lineHeight: 2.5, height: '100%' }}
        >
          <div className={styles.textField}>
            <TextField
              style={{ height: 15 }}
              placeholder="#333"
              onChange={(e) => props.changeBackgroundColor(e.nativeEvent.target.value)}
            />
          </div>
        </Cell>
      </Grid>
    </div>
  </header>
);

export default Header;
