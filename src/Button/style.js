import {
  sea,
  white
} from '../styles/variables';

const common = {
  margin      : 0,
  cursor      : 'pointer',
  display     : 'inline-block',
  outline     : 'none',
  padding     : '5px 15px',
  fontSize    : '1.0rem',
  textAlign   : 'center',
  fontWeight  : 400,
  lineHeight  : 1.5,
  userSelect  : 'none',
  borderWidth : 1,
  borderStyle : 'solid',
  borderRadius: '5px'
};

const styles = {
  base: {
    ...common
  },
  clear: {
    ...common,
    border: 'none'
  }
};

export default styles;
