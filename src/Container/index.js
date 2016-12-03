import React from 'react';
import generateRootStyle from './generateRootStyle';
import styles from './styles';
import {
  sea,
  deepSea,
  sunset,
  mint,
  mikan,
  light,
  dark,
} from '../styles/colors';
import {fontFamily} from '../styles/variables';

type Props = {
  theme: string;
  subColor: string;
  style?: Object;
  className?: string;
};

const themeRouter= (theme) => {
  if (theme === 'sea') return sea;
  if (theme === 'deepSea') return deepSea;
  if (theme === 'sunset') return sunset;
  if (theme === 'mint') return mint;
  if (theme === 'mikan') return mikan;
  return sea;
};

const subColorRouter= (sub) => {
  if (sub === 'light') return light;
  if (sub === 'dark') return dark;
  return light;
};

class Container extends React.Component {
  containerId;

  componentWillMount() {
    this.containerId = `scuba--${Date.now()}__${Math.floor(Math.random() * 10000)}`;
  }

  render() {
    const {
      theme,
      subColor,
      children
    } = this.props;

    const key = themeRouter(theme);
    const sub = subColorRouter(subColor);

    const containerStyle = generateRootStyle(this.containerId, key, sub);

    return (
      <div
        {...this.props}
        id={this.containerId}
      >
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" />
        <style>{containerStyle}</style>
        {children}
      </div>
    );
  }
}

export default Container;
