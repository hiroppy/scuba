import {
  sea,
  white,
} from '../styles/variables';

const common = {
  borderRadius: '5px',
  borderWidth: 1,
  borderStyle: 'solid',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '1.0rem',
  fontWeight: 400,
  margin: 0,
  outline: 'none',
  userSelect: 'none',
  padding: '5px 15px',
  lineHeight: 1.5
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
