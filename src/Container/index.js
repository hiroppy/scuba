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
  else return sea;
};

const Container = (props: Props) => (
  <div style={Object.assign(
    {},
    styles.container,
    {
      color: colorRouter(props.theme),
      borderColor: colorRouter(props.theme)
    },
    props.style
  )}>
    {props.children}
  </div>
);

export default Container;
