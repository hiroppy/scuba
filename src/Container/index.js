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

const themeRouter = (theme) => {
  if (theme === 'sea') return sea;
  if (theme === 'deepSea') return deepSea;
  if (theme === 'sunset') return sunset;
  if (theme === 'mint') return mint;
  if (theme === 'mikan') return mikan;
  return sea;
};

const subColorRouter = (sub) => {
  if (sub === 'light') return light;
  if (sub === 'dark') return dark;
  return light;
};

class Container extends React.Component<void, CommonProps & Props, void> {
  containerClassName: string;

  componentWillMount() {
    this.containerClassName = `scuba--${Date.now()}__${Math.floor(Math.random() * 10000)}`;
  }

  render() {
    const {
      theme,
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
        className={classnames(this.containerClassName, className)}
      >
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" />
        <style>{containerStyle}</style>
        {
          codeTheme ? (
            <link
              rel="stylesheet"
              href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/styles/${codeTheme}.min.css`}
            />
          ) : null
        }
        {children}
      </div>
    );
  }
}

export default Container;
