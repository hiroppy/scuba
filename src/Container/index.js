import React from 'react';
import styles from './styles';
import {
  sea,
  deepSea,
  sunset,
  mint,
  mikan,
  light,
  dark
} from '../styles/variables';

type Props = {
  theme: string;
  subColor: string; // ??
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

const createRootStyle = (containerId, key, sub) => {
  return `
    #${containerId} {
      borderColor: ${key};
      color: ${key};
    }
    #${containerId} .scuba-button:hover {
      color: ${sub};
      background-color: ${key};
    }
    #${containerId} .blockquote {
      border-color: ${key};
    }
    #${containerId} .blockquote > * {
      color: ${sub};
    }
  `;
};

class Container extends React.Component {
  containerId;

  componentWillMount() {
    this.containerId = `scuba--${Date.now()}__${Math.floor(Math.random() * 10000)}`;
  }

  render() {
    const {
      theme,
      style,
      subColor,
      children
    } = this.props;

    const key = themeRouter(theme);
    const sub = subColorRouter(subColor);

    const containerStyle = createRootStyle(this.containerId, key, sub);

    return (
      <div
        style={style}
        id={this.containerId}
      >
        <style>{containerStyle}</style>
        {children}
      </div>
    );
  }
}

export default Container;
