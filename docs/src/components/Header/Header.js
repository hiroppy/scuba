import React from 'react';
import styles from './style';
import {TextField} from '../../../../lib';

const Header = (props) => (
  <header
    className={styles.container}
    style={{backgroundColor: props.themeHex}}
  >
    <div className={styles.topBox}>
      <section className={styles.linkSection}>
        <a href="#concepts">concepts</a>
        <a href="#documentation">documentation</a>
      </section>
    </div>
    <div className={styles.bottomBox}>
      <div className={styles.selectBox}>
        <select
          name="theme"
          onChange={(e) => props.changeTheme(e.nativeEvent.target.value)}
        >
          <option value="sea" selected>Sea</option>
          <option value="deepSea">DeepSea</option>
          <option value="sunset">Sunset</option>
          <option value="mint">Mint</option>
          <option value="mikan">Mikan</option>
        </select>
        <select
          name="subColor"
          onChange={(e) => props.changeSubColor(e.nativeEvent.target.value)}
        >
          <option value="light" selected>Light</option>
          <option value="dark">Dark</option>
        </select>
        <div className={styles.textField}>
          <TextField
            placeholder="#333"
            onChange={(e) => props.changeBackgroundColor(e.nativeEvent.target.value)}
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header
