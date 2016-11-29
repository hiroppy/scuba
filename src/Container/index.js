import React from 'react';
import styles from './styles';
import {
  sea,
  deepSea,
  sunset,
  mint,
  mikan
} from '../styles/variables';

type Props = {
  theme: 'sea',
  style?: Object
};

const colorRouter= (theme) => {
  if (theme === 'sea') return sea;
  if (theme === 'deepSea') return deepSea;
  if (theme === 'sunset') return sunset;
  if (theme === 'mint') return mint;
  if (theme === 'mikan') return mikan;
  return sea;
};

class Container extends React.Component {
  containerId;

  componentWillMount() {
    this.containerId = `scuba--${Date.now()}`;
  }

  render() {
    const {
      theme,
      style,
      children
    } = this.props;

    const color = colorRouter(theme);

    const containerStyle = `
      #${this.containerId} a:hover {
        background-color: ${color};
      }
    `;

    return (
      <div style={Object.assign(
        {},
        styles.container,
        {
          color,
          borderColor: color
        },
        style
      )}
      id={this.containerId}
    >
      <style>{containerStyle}</style>
      {children}
    </div>
    );
  }
}

export default Container;
