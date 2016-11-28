import csjs from 'csjs';
import {
  sea,
  fontFamily
} from '../styles/variables';

const common = {
  color: sea,
  fontFamily: fontFamily,
  fontWeight: 300,
  margin: 0,
  lineHeight: 1.5
};

const styles = {
  h1: {
    ...common,
    fontSize: '4.5em'
  },
  h2: {
    ...common,
    fontSize: '3.8em'
  },
  h3: {
    ...common,
    fontSize: '3.0em'
  },
  h4: {
    ...common,
    fontSize: '2.2em'
  },
  h5: {
    ...common,
    fontSize: '1.6em'
  },
  h6: {
    ...common,
    fontSize: '1.0em'
  }
};

export default styles;
