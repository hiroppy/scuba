import {
  sea,
  white,
  fontFamily
} from '../styles/variables';

const common = {
  borderRadius: '5px',
  color: sea,
  cursor: 'pointer',
  fontFamily: fontFamily,
  fontWeight: 400,
  margin: 0,
  outline: 'none',
  padding: '5px 15px',
  lineHeight: 1.5
};

const styles = {
  base: {
    ...common,
    border: `1px solid ${sea}`
  },
  hover: {
    ...common,
    background: sea,
    color: white,
    border: `1px solid ${white}`
  }
};

export default styles;
