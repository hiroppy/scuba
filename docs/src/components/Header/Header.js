import React from 'react';
import {H2} from '../../../../lib';
import styles from './style';

const Header = (props) => (
  <header
    className={styles.container}
    style={{backgroundColor: props.themeHex}}
  >
    <H2
      style={{color: props.subColorHex}}
    >
      Scuba
    </H2>
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
    </div>
  </header>
);

export default Header
