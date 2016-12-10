// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import generateRootStyle from './generateRootStyle';
import styles from './styles';
import {
  sea,
  deepSea,
  sunset,
  mint,
  mikan,
  light,
  dark
} from '../styles/colors';
import { fontFamily } from '../styles/variables';

type Props = {
  theme: string;
  subColor: string;
  codeTheme?: string;
};

type DefaultProps = {
  theme: string;
  subColor: string;
};

const themeRouter = (theme) => {
  if (theme === 'sea') return sea;
  if (theme === 'deepSea') return deepSea;
  if (theme === 'sunset') return sunset;
  if (theme === 'mint') return mint;
  if (theme === 'mikan') return mikan;
  return theme;
};

const subColorRouter = (sub) => {
  if (sub === 'light') return light;
  if (sub === 'dark') return dark;
  return sub;
};

class Container extends React.Component<DefaultProps, CommonProps & Props, void> {
  containerClassName: string;

  static defaultProps = {
    theme   : 'sea',
    subColor: 'dark'
  };

  componentWillMount() {
    this.containerClassName = `scuba--${Date.now()}__${Math.floor(Math.random() * 10000)}`;
  }

  render() {
    const {
      theme,
      style,
      subColor,
      children,
      className,
      codeTheme
    } = this.props;

    const key = themeRouter(theme);
    const sub = subColorRouter(subColor);

    const containerStyle = generateRootStyle(this.containerClassName, key, sub);

    return (
      <div
        style={style}
        className={classnames(this.containerClassName, className)}
      >
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" />
        {
          codeTheme ? (
            <link
              rel="stylesheet"
              href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/styles/${codeTheme}.min.css`}
            />
          ) : null
        }
        <style>{containerStyle}</style>
        {children}
      </div>
    );
  }
}

export default Container;
